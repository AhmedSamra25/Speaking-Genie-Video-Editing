"""Voice-over lines from crew/vo.json: generate them (macOS `say`, ElevenLabs) or cut the user's recording,
then trim, level and place each line on the timeline and mix audio/vo.wav."""

from __future__ import annotations

import json
import os
import re
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


def _say(text: str, voice: str, out: Path, rate: int | None = None) -> None:
    if not shutil.which("say"):
        raise SystemExit("`say` is macOS only — use --engine elevenlabs or --engine files elsewhere.")
    subprocess.run(["say", "-v", voice, *(["-r", str(rate)] if rate else []), "-o", str(out), text], check=True)


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


# Clean-up for a human recording (phone or USB mic in an ordinary room): cut rumble, soften harsh "s" sounds, take
# out boxiness, add a little presence and even out the level. Noise reduction scales with the room: a clean recording
# gets one light pass; a noisy one gets a second pass and a gentle, slow gate (set from its own noise floor). Heavier
# settings were tested and blur soft word endings (Arabic ة, final consonants), so they are not used.
SHAPE = ("deesser=i=0.3,equalizer=f=250:t=q:w=1.2:g=-2,equalizer=f=3500:t=q:w=1.4:g=2,"
         "acompressor=threshold=-21dB:ratio=2.5:attack=8:release=120:makeup=1.5")
CLEAN_ROOM = "highpass=f=80,afftdn=nr=10:nf=-50:tn=1," + SHAPE
NOISY_ROOM = ("highpass=f=80,afftdn=nr=14:nf=-45:tn=1,afftdn=nr=8:nf=-50:tn=1," + SHAPE +
              ",agate=threshold={gate:.5f}:ratio=1.5:range=0.4:attack=10:release=350")

_VOICES_JS = """
ObjC.import("AVFoundation");
var vs = $.AVSpeechSynthesisVoice.speechVoices, out = [];
for (var i = 0; i < vs.count; i++) { var v = vs.objectAtIndex(i);
  out.push({name: ObjC.unwrap(v.name), lang: ObjC.unwrap(v.language), quality: Number(v.quality), gender: Number(v.gender),
            id: ObjC.unwrap(v.identifier)}); }
JSON.stringify(out);
"""


def voices(langs: tuple = ("ar", "en"), include_default: bool = False) -> list:
    """Installed system voices for the given languages: name, locale, quality, gender, and whether `say` can use it.
    Voices downloaded for Siri stay private to Siri; only those under System Settings → Accessibility →
    Spoken Content → System voice → Manage Voices are available to apps."""
    proc = subprocess.run(["osascript", "-l", "JavaScript", "-e", _VOICES_JS], capture_output=True, text=True)
    if proc.returncode != 0:
        raise SystemExit(f"Couldn't list voices: {proc.stderr.strip()[:300]}")
    say_names = set()
    if shutil.which("say"):
        listing = subprocess.run(["say", "-v", "?"], capture_output=True, text=True).stdout
        say_names = {line.split("  ")[0].strip() for line in listing.splitlines() if line.strip()}
    rank = {3: "premium", 2: "enhanced", 1: "default"}
    out = []
    for v in json.loads(proc.stdout):
        if not v["lang"].split("-")[0] in langs:
            continue
        q = rank.get(v["quality"], "default")
        if q == "default" and not include_default and not v["lang"].startswith("ar"):
            continue
        out.append({**v, "quality": q, "gender": {1: "male", 2: "female"}.get(v["gender"], "-"),
                    "say": v["name"] in say_names})
    order = {"premium": 0, "enhanced": 1, "default": 2}
    return sorted(out, key=lambda v: (v["lang"].split("-")[0], order[v["quality"]], v["lang"], v["name"]))


def enhance(raw: Path, out: Path) -> Path:
    levels = sorted(_rms_windows(raw)) or [-60.0]
    floor = levels[len(levels) // 10]
    chain = CLEAN_ROOM if floor < -48 else NOISY_ROOM.format(gate=10 ** ((floor + 6) / 20))
    ff.run(["ffmpeg", "-i", raw, "-af", chain, "-ar", "48000", "-c:a", "pcm_s24le", out])
    return out


def _clean(raw: Path, out: Path) -> float:
    """Trim leading and trailing silence but keep a natural breath at each end (soft onsets and word endings sit
    below any threshold), fade the edges, level to a consistent loudness, 48 kHz mono."""
    trim = "silenceremove=start_periods=1:start_threshold=-55dB:start_duration=0.02:start_silence=0.12"
    ff.run(["ffmpeg", "-i", raw, "-af", f"{trim},areverse,{trim.replace('0.12', '0.25')},areverse,"
            "afade=t=in:d=0.03,areverse,afade=t=in:d=0.08,areverse,loudnorm=I=-18:TP=-2:LRA=11,"
            "aresample=48000", "-ac", "1", "-c:a", "pcm_s16le", out])
    ff.probe.cache_clear()
    return ff.probe(str(out))["duration"]


WINDOW = 0.05  # seconds per loudness window


def _rms_windows(take: Path) -> list:
    """Loudness (RMS dB) of each 50 ms window. RMS, not peak: room hiss has sharp peaks that hide real pauses."""
    rate = 48000
    proc = ff.run(["ffmpeg", "-loglevel", "info", "-i", take, "-af",
                   f"aresample={rate},asetnsamples=n={int(rate * WINDOW)},astats=metadata=1:reset=1,"
                   "ametadata=print:key=lavfi.astats.Overall.RMS_level", "-f", "null", "-"], capture=True)
    return [-120.0 if v == "-inf" else float(v) for v in re.findall(r"RMS_level=(-inf|-?[\d.]+)", proc.stderr)]


def _split_take(take: Path, n: int, tmp: Path, min_silence: float) -> list:
    rms = _rms_windows(take)
    ordered = sorted(rms) or [-60.0]
    floor, speech = ordered[len(ordered) // 10], ordered[(len(ordered) * 9) // 10]
    threshold = floor + (speech - floor) / 3  # pauses sit near the room's noise floor, well below speech
    ranges, start, quiet = [], None, 0
    for i, level in enumerate(rms + [-120.0] * int(min_silence / WINDOW + 1)):
        if level > threshold:
            start = i if start is None else start
            quiet = 0
        elif start is not None:
            quiet += 1
            if quiet * WINDOW >= min_silence:
                ranges.append((max(0.0, start * WINDOW - 0.08), (i - quiet + 1) * WINDOW + 0.08))
                start, quiet = None, 0
    ranges = [(a, b) for a, b in ranges if b - a >= 0.3]  # ignore clicks and breaths
    # soft final syllables (Arabic ة, a trailing vowel) fall under the threshold: give each line up to 0.3 s more
    # tail and 0.1 s more lead-in, never into its neighbour; _clean trims the real silence afterwards
    total = len(rms) * WINDOW
    ranges = [(max(0.0, a - 0.1, (ranges[i - 1][1] + 0.05) if i else 0.0),
               min(total, b + 0.3, (ranges[i + 1][0] - 0.05) if i + 1 < len(ranges) else total))
              for i, (a, b) in enumerate(ranges)]
    if len(ranges) != n:
        raise SystemExit(f"{take.name}: found {len(ranges)} spoken parts but vo.json has {n} lines. "
                         f"Try --min-silence {min_silence + 0.3:.1f} (fewer splits) or {max(0.3, min_silence - 0.3):.1f} "
                         "(more), or record the lines as separate files in audio/vo-takes/.")
    parts = []
    _split_take.ranges = ranges  # the take's own timing, for keep_timing
    for i, (s, e) in enumerate(ranges):
        part = tmp / f"take-{i}.wav"
        ff.run(["ffmpeg", "-ss", f"{s:.3f}", "-to", f"{e:.3f}", "-i", take, "-c:a", "pcm_s16le", part])
        parts.append(part)
    return parts


def run(project: Project, script: Path, engine: str, voice: str | None = None, take: Path | None = None,
        gap: float = 0.35, lead: float = 0.3, min_silence: float = 1.2, rate: int | None = None,
        clean_up: bool = True, keep_timing: bool = False) -> list:
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
            # clean the whole take first: noise reduction learns the room better from the full recording
            raws = _split_take(enhance(take, tmp / "take-enhanced.wav") if clean_up else take, len(lines), tmp, min_silence)
        for i, line in enumerate(lines):
            if engine == "say":
                raw = tmp / f"{line['id']}.aiff"
                _say(line.get("say_as", line["text"]), voice or meta.get("say_voice") or SAY_VOICES["ar" if lang.startswith("ar") else "en"], raw, rate)
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
                if clean_up:
                    raw = enhance(raw, tmp / f"{line['id']}-enhanced.wav")
            line["duration"] = round(_clean(raw, vo_dir / f"{line['id']}.wav"), 3)
            line["file"] = f"audio/vo/{line['id']}.wav"

    if keep_timing and engine == "files" and take:
        # keep the speaker's own rhythm: each line where it was said, minus the silence before the first line
        first = _split_take.ranges[0][0]
        for line, (a, _) in zip(lines, _split_take.ranges):
            line["at"] = round(a - first + lead, 3)
    cursor = 0.0 if "at" in lines[0] else lead
    for line in lines:  # a line never starts before the previous one has finished: late lines push back, never overlap
        wanted = float(line["at"]) if "at" in line else cursor
        line["start"] = round(max(wanted, cursor), 3)
        line["late"] = round(line["start"] - wanted, 3) if line["start"] > wanted + 0.01 else 0
        if not line["late"]:
            line.pop("late")
        cursor = line["start"] + line["duration"] + min(gap, 0.15 if "at" in line else gap)
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
