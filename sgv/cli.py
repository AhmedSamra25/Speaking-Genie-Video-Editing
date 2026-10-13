"""Command line entry point: `bin/sgv <command> ...`."""

import argparse
import json
import subprocess
import sys
from pathlib import Path

from sgv import analyze, captions, doctor, ff, motion, paths, presets, project, render


def cmd_new(a):
    root = project.create(a.name, a.aspect, a.theme, a.lang, a.title)
    print(f"Created {root.relative_to(paths.ROOT)}\n  drop footage in footage/, music/VO in audio/, logos/screens in assets/\n"
          f"  then: bin/sgv ingest {root.name}")


def cmd_ingest(a):
    p = project.find(a.project)
    rows = [analyze.describe(f) for d in ("footage", "audio", "assets") for f in analyze.media_files(p.root / d)]
    (p.build / "media.json").write_text(json.dumps(rows, indent=2))
    print(analyze.table(rows, p.root) if rows else "No media yet — add files to footage/, audio/ or assets/.")
    if a.sheets:
        for r in rows:
            if r["kind"] == "video":
                src = Path(r["file"])
                out = p.build / "look" / f"{src.stem}.jpg"
                analyze.contact_sheet(src, out, n=a.n)
                print(f"  sheet  {out.relative_to(paths.ROOT)}")


def cmd_probe(a):
    target = Path(a.path)
    rows = [analyze.describe(f) for f in analyze.media_files(target)]
    print(json.dumps(rows, indent=2) if a.json else analyze.table(rows, target if target.is_dir() else target.parent))


def cmd_look(a):
    src = Path(a.file)
    out = Path(a.out) if a.out else paths.ROOT / "build" / "look" / f"{src.stem}-{a.start:g}.jpg"
    if a.at is not None:
        analyze.frame(src, a.at, out)
    else:
        analyze.contact_sheet(src, out, n=a.n, cols=a.cols, start=a.start, end=a.end)
    print(out)


def cmd_silence(a):
    src = Path(a.file)
    keep = analyze.speech_ranges(src, a.noise, a.min_silence, a.pad)
    total = ff.probe(str(src))["duration"]
    kept = sum(b - a_ for a_, b in keep)
    for s, e in keep:
        print(f"  keep {analyze.fmt_time(s)} → {analyze.fmt_time(e)}  ({e - s:.2f}s)")
    print(f"{len(keep)} ranges, {kept:.1f}s of {total:.1f}s kept ({100 * kept / max(total, 0.01):.0f}%)")
    if a.apply:
        p = project.find(a.apply)
        rel = str(src.resolve().relative_to(p.root)) if src.resolve().is_relative_to(p.root) else str(src.resolve())
        clips = [{"type": "video", "src": rel, "in": s, "out": e, "label": f"jump {i + 1}"} for i, (s, e) in enumerate(keep)]
        p.edit["timeline"].extend(clips)
        p.edit_path.write_text(json.dumps(p.edit, indent=2, ensure_ascii=False) + "\n")
        print(f"Appended {len(clips)} clips to {p.edit_path.relative_to(paths.ROOT)}")


def cmd_scenes(a):
    cuts = analyze.scenes(Path(a.file), a.threshold)
    print("\n".join(f"  cut at {analyze.fmt_time(t)}  ({t}s)" for t in cuts) or "  no scene changes found")


def cmd_loudness(a):
    m = analyze.loudness(Path(a.file))
    print(f"integrated {m['input_i']} LUFS · true peak {m['input_tp']} dBTP · range {m['input_lra']} LU")


def cmd_transcribe(a):
    src = Path(a.file)
    out = Path(a.out) if a.out else src.with_suffix("")
    srt = captions.transcribe(src, out, lang=a.lang, model=a.model, max_len=a.max_len)
    print(srt)


def cmd_captions(a):
    """Transcribe the project's current cut, so caption timing matches the timeline."""
    p = project.find(a.project)
    drafts = render.render(p, draft=True)
    out = p.root / "captions" / "master"
    srt = captions.transcribe(drafts[0], out, lang=a.lang or ("auto" if p.lang == "auto" else p.lang), model=a.model)
    p.edit["captions"] = {**p.edit.get("captions", {}), "src": str(srt.relative_to(p.root)), "burn": True}
    p.edit_path.write_text(json.dumps(p.edit, indent=2, ensure_ascii=False) + "\n")
    print(f"{srt.relative_to(paths.ROOT)} — proofread it, then `bin/sgv render {p.name}`")


def cmd_timeline(a):
    p = project.find(a.project)
    print(f"{p.edit.get('title', p.name)} · {p.aspect} · {p.fps}fps · {p.theme} · {p.lang}")
    for s in p.schedule():
        print(f"  [{s['index']:>2}] {analyze.fmt_time(s['start']):>9} → {analyze.fmt_time(s['end']):>9}  "
              f"{s['type']:6} {s['transition']:9} {s['label']}")
    print(f"  total {analyze.fmt_time(p.total_duration())}")


def cmd_render(a):
    p = project.find(a.project)
    names = [n.strip() for n in a.preset.split(",")] if a.preset else None
    for out in render.render(p, names, draft=a.draft):
        info = ff.probe(str(out))
        v = info["video"]
        print(f"{out.relative_to(paths.ROOT)}  {v['width']}x{v['height']}  {analyze.fmt_time(info['duration'])}  "
              f"{out.stat().st_size / 1e6:.1f} MB")


def cmd_motion(a):
    w, h = (int(x) for x in a.size.split("x"))
    props = json.loads(a.props) if a.props else {}
    out = motion.render(a.composition, props, width=w, height=h, fps=a.fps, duration=a.duration, theme=a.theme,
                        lang=a.lang, cache_dir=paths.ROOT / "build" / "motion")
    if a.out:
        Path(a.out).write_bytes(out.read_bytes())
        out = Path(a.out)
    print(out)


def cmd_studio(_a):
    subprocess.run(["npm", "run", "studio"], cwd=paths.MOTION)


def cmd_presets(_a):
    for name, p in presets.PRESETS.items():
        print(f"  {name:20} {p['w']}x{p['h']:<5} {p['codec']:6} {p['about']}")


def cmd_clean(a):
    p = project.find(a.project)
    import shutil
    shutil.rmtree(p.root / "build", ignore_errors=True)
    print(f"Removed {p.root.name}/build")


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(prog="sgv", description="Speaking Genie video toolkit")
    ap.add_argument("-v", "--verbose", action="store_true", help="print every ffmpeg command")
    sub = ap.add_subparsers(dest="cmd", required=True)

    s = sub.add_parser("doctor", help="check this machine is ready")
    s.set_defaults(fn=lambda _a: sys.exit(doctor.run()))

    s = sub.add_parser("new", help="create a project in projects/")
    s.add_argument("name")
    s.add_argument("--aspect", default="16:9", choices=["16:9", "9:16", "1:1", "4:5"])
    s.add_argument("--theme", default="light", choices=["light", "dark"])
    s.add_argument("--lang", default="en", choices=["en", "ar"])
    s.add_argument("--title")
    s.set_defaults(fn=cmd_new)

    s = sub.add_parser("ingest", help="probe a project's media (and make contact sheets)")
    s.add_argument("project")
    s.add_argument("--sheets", action="store_true", help="contact sheet per video in build/look/")
    s.add_argument("-n", type=int, default=12)
    s.set_defaults(fn=cmd_ingest)

    s = sub.add_parser("probe", help="table of media facts for a file or folder")
    s.add_argument("path")
    s.add_argument("--json", action="store_true")
    s.set_defaults(fn=cmd_probe)

    s = sub.add_parser("look", help="contact sheet (or one frame with --at) to view footage")
    s.add_argument("file")
    s.add_argument("-n", type=int, default=12)
    s.add_argument("--cols", type=int, default=4)
    s.add_argument("--start", type=float, default=0)
    s.add_argument("--end", type=float)
    s.add_argument("--at", type=float, help="single frame at this time (s)")
    s.add_argument("-o", "--out")
    s.set_defaults(fn=cmd_look)

    s = sub.add_parser("silence", help="find speech ranges; --apply appends jump-cut clips to a project")
    s.add_argument("file")
    s.add_argument("--noise", type=float, default=-35, help="silence threshold dB")
    s.add_argument("--min-silence", type=float, default=0.6)
    s.add_argument("--pad", type=float, default=0.15)
    s.add_argument("--apply", metavar="PROJECT")
    s.set_defaults(fn=cmd_silence)

    s = sub.add_parser("scenes", help="list scene-change timestamps")
    s.add_argument("file")
    s.add_argument("--threshold", type=float, default=0.35)
    s.set_defaults(fn=cmd_scenes)

    s = sub.add_parser("loudness", help="measure integrated loudness")
    s.add_argument("file")
    s.set_defaults(fn=cmd_loudness)

    s = sub.add_parser("transcribe", help="whisper.cpp transcript → .srt + .json")
    s.add_argument("file")
    s.add_argument("--lang", default="auto", help="en, ar, auto ...")
    s.add_argument("--model")
    s.add_argument("--max-len", type=int, default=42)
    s.add_argument("-o", "--out", help="output path without extension")
    s.set_defaults(fn=cmd_transcribe)

    s = sub.add_parser("captions", help="transcribe the current cut into captions/master.srt")
    s.add_argument("project")
    s.add_argument("--lang")
    s.add_argument("--model")
    s.set_defaults(fn=cmd_captions)

    s = sub.add_parser("timeline", help="show clip start/end times on the assembled timeline")
    s.add_argument("project")
    s.set_defaults(fn=cmd_timeline)

    s = sub.add_parser("render", help="render exports (or a fast --draft)")
    s.add_argument("project")
    s.add_argument("--preset", help="comma-separated presets (default: edit.json exports)")
    s.add_argument("--draft", action="store_true")
    s.set_defaults(fn=cmd_render)

    s = sub.add_parser("motion", help="render one branded motion graphic")
    s.add_argument("composition", choices=motion.COMPOSITIONS)
    s.add_argument("--props", help="JSON props")
    s.add_argument("--size", default="1920x1080")
    s.add_argument("--fps", type=int, default=30)
    s.add_argument("--duration", type=float, default=4)
    s.add_argument("--theme", default="light", choices=["light", "dark"])
    s.add_argument("--lang", default="en", choices=["en", "ar"])
    s.add_argument("-o", "--out")
    s.set_defaults(fn=cmd_motion)

    s = sub.add_parser("studio", help="open Remotion Studio to preview motion graphics")
    s.set_defaults(fn=cmd_studio)

    s = sub.add_parser("presets", help="list export presets")
    s.set_defaults(fn=cmd_presets)

    s = sub.add_parser("clean", help="delete a project's build cache")
    s.add_argument("project")
    s.set_defaults(fn=cmd_clean)

    a = ap.parse_args(argv)
    ff.VERBOSE = a.verbose
    try:
        a.fn(a)
    except ff.FFError as e:
        print(f"error: {e}", file=sys.stderr)
        return 1
    return 0
