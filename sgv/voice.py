"""Voice-over lines from crew/vo.json: generate them (macOS `say`, ElevenLabs) or cut the user's recording,
then trim, level and place each line on the timeline and mix audio/vo.wav."""

from __future__ import annotations

import json
import os
import shutil
import subprocess
import tempfile
import urllib.error
import urllib.request
from pathlib import Path

from sgv import analyze, ff
from sgv.project import Project

SAY_VOICES = {"en": "Samantha", "ar": "Majed"}
TAKE_EXTS = (".wav", ".m4a", ".mp3", ".aiff", ".aif", ".caf", ".flac")
ELEVENLABS_URL = "https://api.elevenlabs.io/v1/text-to-speech/{voice}?output_format=mp3_44100_128"


def _say(text: str, voice: str, out: Path) -> None:
    if not shutil.which("say"):
        raise SystemExit("`say` is macOS only — use --engine elevenlabs or --engine files elsewhere.")
    subprocess.run(["say", "-v", voice, "-o", str(out), text], check=True)


def _elevenlabs(text: str, voice: str, model: str, out: Path) -> None:
    key = os.environ.get("ELEVENLABS_API_KEY")
    if not key:
        raise SystemExit("ELEVENLABS_API_KEY is not set.")
    body = json.dumps({"text": text, "model_id": model}).encode()
    req = urllib.request.Request(ELEVENLABS_URL.format(voice=voice), data=body, method="POST",
                                 headers={"xi-api-key": key, "Content-Type": "application/json", "Accept": "audio/mpeg"})
    try:
        with urllib.request.urlopen(req, timeout=120) as r:
            out.write_bytes(r.read())
    except urllib.error.HTTPError as e:
        raise SystemExit(f"ElevenLabs refused the request ({e.code}): {e.read().decode(errors='replace')[:400]}")


def _clean(raw: Path, out: Path) -> float:
    """Trim silence at both ends, level to a consistent loudness, 48 kHz mono."""
    trim = "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05"
    ff.run(["ffmpeg", "-i", raw, "-af", f"{trim},areverse,{trim},areverse,loudnorm=I=-18:TP=-2:LRA=11,"
            "aresample=48000", "-ac", "1", "-c:a", "pcm_s16le", out])
    ff.probe.cache_clear()
    return ff.probe(str(out))["duration"]


def _split_take(take: Path, n: int, tmp: Path, min_silence: float) -> list:
    ranges = analyze.speech_ranges(take, -38, min_silence, 0.08)
    if len(ranges) != n:
        raise SystemExit(f"{take.name}: found {len(ranges)} spoken parts but vo.json has {n} lines. "
                         f"Try --min-silence {min_silence + 0.3:.1f} (fewer splits) or {max(0.3, min_silence - 0.3):.1f} "
                         "(more), or record the lines as separate files in audio/vo-takes/.")
    parts = []
    for i, (s, e) in enumerate(ranges):
        part = tmp / f"take-{i}.wav"
        ff.run(["ffmpeg", "-ss", f"{s:.3f}", "-to", f"{e:.3f}", "-i", take, "-c:a", "pcm_s16le", part])
        parts.append(part)
    return parts


def run(project: Project, script: Path, engine: str, voice: str | None = None, take: Path | None = None,
        gap: float = 0.35, lead: float = 0.3, min_silence: float = 1.2) -> list:
    data = json.loads(script.read_text(encoding="utf-8"))
    lines = data.get("lines", [])
    if not lines:
        raise SystemExit(f"{script} has no lines.")
    lang = str(data.get("lang", project.lang))
    vo_dir = project.root / "audio" / "vo"
    vo_dir.mkdir(parents=True, exist_ok=True)
    meta = data.get("voice", {})

    with tempfile.TemporaryDirectory() as td:
        tmp = Path(td)
        raws = []
        if engine == "files" and take:
            raws = _split_take(take, len(lines), tmp, min_silence)
        for i, line in enumerate(lines):
            if engine == "say":
                raw = tmp / f"{line['id']}.aiff"
                _say(line.get("say_as", line["text"]), voice or meta.get("say_voice") or SAY_VOICES["ar" if lang.startswith("ar") else "en"], raw)
            elif engine == "elevenlabs":
                vid = voice or meta.get("voice_id")
                if not vid:
                    raise SystemExit("ElevenLabs needs a voice id: --voice <id> or voice.voice_id in vo.json.")
                raw = tmp / f"{line['id']}.mp3"
                _elevenlabs(line.get("say_as", line["text"]), vid, meta.get("model", "eleven_multilingual_v2"), raw)
            elif take:
                raw = raws[i]
            else:
                found = [project.root / "audio" / "vo-takes" / f"{line['id']}{ext}" for ext in TAKE_EXTS]
                raw = next((f for f in found if f.exists()), None)
                if raw is None:
                    raise SystemExit(f"No recording for {line['id']}: expected audio/vo-takes/{line['id']}.wav (or .m4a, .mp3).")
            line["duration"] = round(_clean(raw, vo_dir / f"{line['id']}.wav"), 3)
            line["file"] = f"audio/vo/{line['id']}.wav"

    cursor = lead
    for line in lines:
        line["start"] = round(float(line["at"]) if "at" in line else cursor, 3)
        cursor = line["start"] + line["duration"] + gap
    total = max(l["start"] + l["duration"] for l in lines) + 0.5

    inputs, parts = [], []
    for i, line in enumerate(lines):
        inputs += ["-i", project.root / line["file"]]
        ms = int(round(line["start"] * 1000))
        parts.append(f"[{i}:a]adelay={ms}|{ms},aformat=channel_layouts=stereo[l{i}]")
    mix = "".join(f"[l{i}]" for i in range(len(lines)))
    parts.append(f"{mix}amix=inputs={len(lines)}:normalize=0:dropout_transition=0,apad,atrim=duration={total:.3f}[out]")
    ff.run(["ffmpeg", *inputs, "-filter_complex", ";".join(parts), "-map", "[out]", "-ar", "48000", "-c:a", "pcm_s24le",
            project.root / "audio" / "vo.wav"])

    data["engine"] = engine
    script.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return lines
