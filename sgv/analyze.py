"""Footage analysis: probe tables, contact sheets Claude can look at, silence and scene detection."""

from __future__ import annotations

import json
import math
import re
from pathlib import Path

from sgv import ff, paths


def media_files(root: Path) -> list:
    if root.is_file():
        return [root]
    return sorted(p for p in root.rglob("*") if p.is_file() and ff.kind(p) != "other"
                  and "build" not in p.parts and "exports" not in p.parts and not p.name.startswith("."))


def fmt_time(t: float) -> str:
    m, s = divmod(t, 60)
    h, m = divmod(int(m), 60)
    return f"{h}:{m:02d}:{s:05.2f}" if h else f"{m}:{s:05.2f}"


def describe(p: Path) -> dict:
    k = ff.kind(p)
    row = {"file": str(p), "kind": k}
    if k in ("video", "audio", "image"):
        info = ff.probe(str(p))
        row["duration"] = round(info["duration"], 2)
        if info["video"]:
            v = info["video"]
            row.update(size=f"{v['width']}x{v['height']}", fps=v["fps"], vcodec=v["codec"], hdr=v["hdr"])
        if info["audio"]:
            row.update(acodec=info["audio"]["codec"], channels=info["audio"]["channels"])
    return row


def table(rows: list, root: Path) -> str:
    out = [f"{'file':44} {'kind':6} {'dur':>9} {'size':>10} {'fps':>6} {'codec':>6} audio"]
    for r in rows:
        name = str(Path(r["file"]).relative_to(root)) if Path(r["file"]).is_relative_to(root) else r["file"]
        dur = fmt_time(r["duration"]) if r.get("duration") else "—"
        out.append(f"{name[-44:]:44} {r['kind']:6} {dur:>9} {r.get('size', '—'):>10} {str(r.get('fps', '—')):>6} "
                   f"{str(r.get('vcodec', '—'))[:6]:>6} {r.get('acodec', '—')}{' HDR' if r.get('hdr') else ''}")
    return "\n".join(out)


def contact_sheet(src: Path, out: Path, n: int = 12, cols: int = 4, start: float = 0, end: float | None = None) -> Path:
    """A grid of evenly spaced, timestamped frames — read it as an image to see the footage."""
    info = ff.probe(str(src))
    if not info["video"]:
        raise SystemExit(f"{src} has no video stream")
    end = end or info["duration"]
    span = max(0.1, end - start)
    rows = math.ceil(n / cols)
    font = ff.escape_filter_path(paths.FONTS / "JetBrainsMono-Medium.ttf")
    # seek every tile to its exact time and print that time: the fps filter labels a slot but fills it with a
    # frame from up to one slot later, and restarts the clock at --start
    times = [min(start + i * span / n, end - 0.05) for i in range(n)]
    inputs, parts = [], []
    for i, t in enumerate(times):
        inputs += ["-ss", f"{t:.3f}", "-i", src]
        label = fmt_time(t).replace(":", "\\:")
        parts.append(f"[{i}:v]trim=end_frame=1,setpts=PTS-STARTPTS,scale=480:-2,setsar=1,"
                     f"drawtext=fontfile={font}:text='{label}':x=10:y=h-th-10:fontsize=22:fontcolor=white:"
                     f"box=1:boxcolor=0x0F1729@0.8:boxborderw=6[f{i}]")
    parts.append("".join(f"[f{i}]" for i in range(n)) + f"concat=n={n}:v=1:a=0,"
                 f"tile={cols}x{rows}:padding=6:margin=6:color=0xF7F8FB[out]")
    out.parent.mkdir(parents=True, exist_ok=True)
    ff.run(["ffmpeg", *inputs, "-filter_complex", ";".join(parts), "-map", "[out]", "-frames:v", "1", "-update", "1", out])
    return out


def frame(src: Path, at: float, out: Path) -> Path:
    out.parent.mkdir(parents=True, exist_ok=True)
    ff.run(["ffmpeg", "-ss", f"{at:.3f}", "-i", src, "-frames:v", "1", "-update", "1", out])
    return out


def silences(src: Path, noise_db: float = -35, min_silence: float = 0.6) -> list:
    proc = ff.run(["ffmpeg", "-loglevel", "info", "-i", src, "-vn", "-af",
                   f"silencedetect=noise={noise_db}dB:d={min_silence}", "-f", "null", "-"], capture=True)
    starts = [float(x) for x in re.findall(r"silence_start: ([\d.]+)", proc.stderr)]
    ends = [float(x) for x in re.findall(r"silence_end: ([\d.]+)", proc.stderr)]
    dur = ff.probe(str(src))["duration"]
    if len(ends) < len(starts):
        ends.append(dur)
    return list(zip(starts, ends))


def speech_ranges(src: Path, noise_db: float = -35, min_silence: float = 0.6, pad: float = 0.15, min_keep: float = 0.4) -> list:
    """Inverse of silences, padded so words are not clipped — the keep-list for a jump cut."""
    dur = ff.probe(str(src))["duration"]
    keep, t = [], 0.0
    for s, e in silences(src, noise_db, min_silence):
        if s - t >= min_keep:
            keep.append((max(0, t - pad), min(dur, s + pad)))
        t = e
    if dur - t >= min_keep:
        keep.append((max(0, t - pad), dur))
    return [(round(a, 3), round(b, 3)) for a, b in keep]


def scenes(src: Path, threshold: float = 0.35) -> list:
    proc = ff.run(["ffmpeg", "-loglevel", "info", "-i", src, "-an", "-vf",
                   f"select='gt(scene,{threshold})',showinfo", "-f", "null", "-"], capture=True)
    return [round(float(x), 3) for x in re.findall(r"pts_time:([\d.]+)", proc.stderr)]


def loudness(src: Path) -> dict:
    proc = ff.run(["ffmpeg", "-loglevel", "info", "-i", src, "-vn", "-af", "loudnorm=print_format=json", "-f", "null", "-"],
                  capture=True)
    t = proc.stderr
    return json.loads(t[t.rfind("{"):t.rfind("}") + 1])
