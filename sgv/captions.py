"""Transcription (whisper.cpp, Metal-accelerated on Apple Silicon) and branded caption styling."""

from __future__ import annotations

import os
import re
import shutil
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


def write_ass(cues: list, out: Path, width: int, height: int, tokens: dict) -> Path:
    cap = tokens["video"]["captions"]
    s = min(width, height) / 1080
    portrait = height > width * 1.2
    margin_v = round(height * 0.19) if portrait else round((120 if width == height else 96) * s)
    margin_h = round(80 * s)
    pill = _ass_color(cap["pillColor"], cap["pillOpacity"])
    white = _ass_color(cap["text"])
    pad = round(16 * s)
    style = ("Style: {name},{font},{size},{white},{white},{pill},&H00000000,0,0,0,0,100,100,0,0,3,{pad},0,2,"
             "{mh},{mh},{mv},1")
    en = style.format(name="EN", font="Plus Jakarta Sans SemiBold", size=round(cap["sizeEn"] * s), white=white,
                      pill=pill, pad=pad, mh=margin_h, mv=margin_v)
    ar = style.format(name="AR", font="IBM Plex Sans Arabic SemiBold", size=round(cap["sizeAr"] * s), white=white,
                      pill=pill, pad=pad, mh=margin_h, mv=margin_v)
    width_chars = cap["maxCharsPerLine"] if not portrait else 28
    events = []
    for c in cues:
        text = c["text"].replace("\n", " ").strip()
        lines = textwrap.wrap(text, width=width_chars)[:2] or [text]
        body = r"\N".join(l.replace("{", "(").replace("}", ")") for l in lines)
        name = "AR" if ARABIC.search(text) else "EN"
        events.append(f"Dialogue: 0,{_ass_time(c['start'])},{_ass_time(c['end'])},{name},,0,0,0,,{body}")
    out.write_text("\n".join([
        "[Script Info]", "ScriptType: v4.00+", f"PlayResX: {width}", f"PlayResY: {height}",
        "WrapStyle: 2", "ScaledBorderAndShadow: yes", "YCbCr Matrix: TV.709", "",
        "[V4+ Styles]",
        "Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, "
        "Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, "
        "MarginR, MarginV, Encoding",
        en, ar, "",
        "[Events]", "Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text",
        *events, ""]), encoding="utf-8")
    return out


def subtitles_filter(ass: Path) -> str:
    return f"subtitles=filename={ff.escape_filter_path(ass)}:fontsdir={ff.escape_filter_path(paths.FONTS)}"
