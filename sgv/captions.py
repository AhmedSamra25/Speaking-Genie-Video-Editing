"""Transcription (whisper.cpp, Metal-accelerated on Apple Silicon) and branded caption styling."""

from __future__ import annotations

import os
import re
import shutil
import struct
import tempfile
import textwrap
from pathlib import Path

from sgv import ff, paths

DEFAULT_MODEL = "ggml-large-v3-turbo.bin"
ARABIC = re.compile(r"[؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿]")
TS = re.compile(r"(\d+):(\d+):(\d+)[,.](\d+)")


# -- transcription ---------------------------------------------------------
def transcribe(media: Path, out_base: Path, lang: str = "auto", model: str | None = None, max_len: int = 42) -> Path:
    exe = shutil.which("whisper-cli") or shutil.which("whisper-cpp")
    if not exe:
        raise SystemExit("whisper-cli not found — `brew install whisper-cpp` (setup/macos.sh does this).")
    model_path = Path(model) if model else paths.MODELS / DEFAULT_MODEL
    if not model_path.exists():
        raise SystemExit(f"Whisper model missing: {model_path} — run `setup/macos.sh --models`.")
    out_base.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as td:
        wav = Path(td) / "audio.wav"
        ff.run(["ffmpeg", "-i", media, "-vn", "-ac", "1", "-ar", "16000", "-c:a", "pcm_s16le", wav])
        threads = str(max(4, (os.cpu_count() or 8) - 2))
        ff.run([exe, "-m", model_path, "-f", wav, "-l", lang, "-t", threads, "-osrt", "-ojf",
                "-ml", str(max_len), "-sow", "-of", out_base], capture=True)
    return out_base.with_suffix(".srt")


def _srt_time(t: float) -> str:
    ms = int(round(max(0.0, t) * 1000))
    h, ms = divmod(ms, 3600000)
    m, ms = divmod(ms, 60000)
    s, ms = divmod(ms, 1000)
    return f"{h:02d}:{m:02d}:{s:02d},{ms:03d}"


def _cue_chunks(text: str, max_chars: int) -> list:
    """Split a spoken line into caption cues: at a clause break (، , : ؛ .) near the middle when there is one,
    otherwise into balanced pieces, so no cue is a single stranded word."""
    if len(text) <= max_chars:
        return [text]
    breaks = [i + 1 for i, ch in enumerate(text) if ch in "،,:؛;." and 0 < i < len(text) - 1]
    best = min(breaks, key=lambda i: abs(i - len(text) / 2), default=None)
    if best and max(best, len(text) - best) <= max_chars and min(best, len(text) - best) >= max_chars // 4:
        return [text[:best].strip(), text[best:].strip()]
    n = -(-len(text) // max_chars)
    balanced = _wrap(text, -(-len(text) // n) + 4)
    return balanced if len(balanced) <= n else (_wrap(text, max_chars) or [text])


def from_vo(vo: dict, out: Path, max_chars: int = 42) -> Path:
    """Captions from the approved script text and the recorded line timings (crew/vo.json after `sgv voice`):
    exact wording, product names and Egyptian Arabic, with no transcription errors."""
    cues = []
    for line in vo.get("lines", []):
        if "start" not in line:
            raise SystemExit(f"{line.get('id')} has no timing — run `bin/sgv voice` first.")
        chunks = [c.replace("\u00a0", " ") for c in _cue_chunks(line["text"].strip(), max_chars)]
        t, end, chars = float(line["start"]), float(line["start"]) + float(line["duration"]), sum(map(len, chunks))
        for c in chunks:  # split the line's time by characters
            d = (end - float(line["start"])) * len(c) / chars
            cues.append((t, t + d, c))
            t += d
    cues.sort()
    for i in range(len(cues) - 1):  # a line that runs long never overlaps the next one's caption
        a, b, text = cues[i]
        cues[i] = (a, min(b, cues[i + 1][0] - 0.04), text)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text("\n".join(f"{i}\n{_srt_time(a)} --> {_srt_time(b)}\n{text}\n" for i, (a, b, text) in enumerate(cues, 1)),
                   encoding="utf-8")
    return out


# -- SRT parsing -----------------------------------------------------------
def _secs(m) -> float:
    h, mi, s, ms = (int(x) for x in m.groups())
    return h * 3600 + mi * 60 + s + ms / (10 ** len(m.group(4)))


def parse_srt(path: Path) -> list:
    cues = []
    for block in re.split(r"\n\s*\n", path.read_text(encoding="utf-8-sig").strip()):
        lines = [l for l in block.strip().splitlines() if l.strip()]
        ts_i = next((i for i, l in enumerate(lines) if "-->" in l), None)
        if ts_i is None:
            continue
        a, b = lines[ts_i].split("-->")
        ma, mb = TS.search(a), TS.search(b)
        if not ma or not mb:
            continue
        text = " ".join(lines[ts_i + 1:]).strip()
        if text:
            cues.append({"start": _secs(ma), "end": _secs(mb), "text": text})
    return cues


def shift(cues: list, offset: float) -> list:
    return [{**c, "start": c["start"] + offset, "end": c["end"] + offset} for c in cues if c["end"] + offset > 0]


# -- ASS generation --------------------------------------------------------
def _ass_color(hex_color: str, opacity: float = 1.0) -> str:
    h = hex_color.lstrip("#")
    r, g, b = h[0:2], h[2:4], h[4:6]
    alpha = round(255 * (1 - opacity))
    return f"&H{alpha:02X}{b}{g}{r}".upper()


def _ass_time(t: float) -> str:
    t = max(0.0, t)
    cs = int(round(t * 100))
    h, cs = divmod(cs, 360000)
    m, cs = divmod(cs, 6000)
    s, cs = divmod(cs, 100)
    return f"{h}:{m:02d}:{s:02d}.{cs:02d}"


FONTS = {"EN": ("Plus Jakarta Sans SemiBold", "PlusJakartaSans-SemiBold.ttf"),
         "AR": ("IBM Plex Sans Arabic SemiBold", "IBMPlexSansArabic-SemiBold.ttf")}
REFERENCE = {"EN": "Hgy", "AR": "جميل"}  # an ascender and a descender, for line height
KEEP_TOGETHER = ("Speaking Genie",)  # never split across caption lines


def _wrap(text: str, width: int) -> list:
    for phrase in KEEP_TOGETHER:
        text = text.replace(phrase, phrase.replace(" ", "\u00a0"))
    return textwrap.wrap(text, width=width)


def _em_scale(font_file: Path) -> float:
    """libass sizes a font by its Windows ascent + descent; the brand (like CSS) sizes it by the em."""
    data = font_file.read_bytes()
    tables = {}
    for i in range(struct.unpack(">H", data[4:6])[0]):
        tag, _, off, length = struct.unpack(">4sIII", data[12 + 16 * i:28 + 16 * i])
        tables[tag] = data[off:off + length]
    upm = struct.unpack(">H", tables[b"head"][18:20])[0]
    win_ascent, win_descent = struct.unpack(">HH", tables[b"OS/2"][74:78])
    return (win_ascent + win_descent) / upm


def _header(width: int, height: int, styles: list) -> list:
    return ["[Script Info]", "ScriptType: v4.00+", f"PlayResX: {width}", f"PlayResY: {height}",
            "WrapStyle: 2", "ScaledBorderAndShadow: yes", "YCbCr Matrix: TV.709", "",
            "[V4+ Styles]",
            "Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, "
            "Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, "
            "MarginL, MarginR, MarginV, Encoding",
            *styles, "",
            "[Events]", "Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text"]


def _measure(items: list, header: list, out: Path, width: int, height: int) -> list:
    """Ink box (w, h, dx, dy from the anchor) of each (style, body), measured with libass itself so Arabic
    shaping matches the burn-in exactly: one item per frame, white on black, read back by the bbox filter."""
    events = [f"Dialogue: 0,{_ass_time(i / 10)},{_ass_time((i + 1) / 10)},{style},,0,0,0,,"
              f"{{\\an5\\pos({width / 2:.0f},{height / 2:.0f})}}{body}" for i, (style, body) in enumerate(items)]
    out.write_text("\n".join(header + events + [""]), encoding="utf-8")
    proc = ff.run(["ffmpeg", "-loglevel", "info", "-f", "lavfi",
                   "-i", f"color=black:s={width}x{height}:r=10:d={len(items) / 10:.1f}",
                   "-vf", f"{subtitles_filter(out)},bbox=min_val=128", "-f", "null", "-"], capture=True)
    boxes = [None] * len(items)
    for m in re.finditer(r"n:(\d+) .*?x1:(\d+) x2:(\d+) y1:(\d+) y2:(\d+)", proc.stderr):
        n, x1, x2, y1, y2 = (int(v) for v in m.groups())
        if n < len(items):
            boxes[n] = (x2 - x1 + 1, y2 - y1 + 1, (x1 + x2) / 2 - width / 2, (y1 + y2) / 2 - height / 2)
    return boxes


def _rounded_rect(w: int, h: int, r: int) -> str:
    k = round(r * 0.448)  # bezier handle inset for a circular corner (1 - 0.552)
    return (f"m {r} 0 l {w - r} 0 b {w - k} 0 {w} {k} {w} {r} l {w} {h - r} b {w} {h - k} {w - k} {h} {w - r} {h} "
            f"l {r} {h} b {k} {h} 0 {h - k} 0 {h - r} l 0 {r} b 0 {k} {k} 0 {r} 0")


def write_ass(cues: list, out: Path, width: int, height: int, tokens: dict) -> Path:
    cap = tokens["video"]["captions"]
    s = min(width, height) / 1080
    portrait = height > width * 1.2
    margin_v = round(height * 0.19) if portrait else round((120 if width == height else 96) * s)
    pad_x, pad_y, radius = round(24 * s), round(14 * s), round(cap["pillRadius"] * s)
    white = _ass_color(cap["text"])
    # encoding -1 makes libass detect the base direction, so RTL punctuation lands at the end of the line
    style = ("Style: {name},{font},{size},{color},{color},&H00000000,&H00000000,0,0,0,0,100,100,0,0,1,0,0,{align},"
             "0,0,0,{encoding}")
    sizes = {"EN": cap["sizeEn"], "AR": cap["sizeAr"]}
    styles = [style.format(name=k, font=font, size=round(sizes[k] * s * _em_scale(paths.FONTS / file), 1),
                           color=white, align=5, encoding=-1 if k == "AR" else 1) for k, (font, file) in FONTS.items()]
    styles.append(style.format(name="Pill", font=FONTS["EN"][0], size=10,
                               color=_ass_color(cap["pillColor"], cap["pillOpacity"]), align=7, encoding=1))
    header = _header(width, height, styles)

    width_chars = cap["maxCharsPerLine"] if not portrait else 28
    items = []
    for c in cues:
        text = c["text"].replace("\n", " ").strip()
        lines = _wrap(text, width_chars)[:2] or [text]
        body = r"\N".join(l.replace("{", "(").replace("}", ")") for l in lines)
        items.append(("AR" if ARABIC.search(text) else "EN", body, len(lines), c))
    refs = [(k, ref) for k, ref in REFERENCE.items()] + [(k, f"{ref}\\N{ref}") for k, ref in REFERENCE.items()]
    boxes = _measure(refs + [(k, body) for k, body, _, _ in items], header, out.with_suffix(".measure.ass"), width, height)
    one = {k: boxes[i] for i, k in enumerate(REFERENCE)}
    two = {k: boxes[len(REFERENCE) + i] for i, k in enumerate(REFERENCE)}

    events = []
    for (name, body, n_lines, c), box in zip(items, boxes[len(refs):]):
        if not box:
            continue
        line_h, ref = one[name][1], (one if n_lines == 1 else two)[name]
        pill_h = line_h + (n_lines - 1) * (two[name][1] - line_h) + 2 * pad_y
        pill_w = max(box[0] + 2 * pad_x, pill_h)
        x0, y0 = round((width - pill_w) / 2), height - margin_v - pill_h
        # centre the ink in the pill: horizontally from this cue's own box, vertically from the reference line
        tx, ty = width / 2 - box[2], y0 + pill_h / 2 - ref[3]
        t0, t1 = _ass_time(c["start"]), _ass_time(c["end"])
        events.append(f"Dialogue: 0,{t0},{t1},Pill,,0,0,0,,{{\\an7\\pos({x0},{y0})\\p1}}"
                      f"{_rounded_rect(pill_w, pill_h, radius)}{{\\p0}}")
        events.append(f"Dialogue: 1,{t0},{t1},{name},,0,0,0,,{{\\an5\\pos({tx:.0f},{ty:.0f})}}{body}")
    out.write_text("\n".join(header + events + [""]), encoding="utf-8")
    return out


def subtitles_filter(ass: Path) -> str:
    return f"subtitles=filename={ff.escape_filter_path(ass)}:fontsdir={ff.escape_filter_path(paths.FONTS)}"
