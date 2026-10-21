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


def _elevenlabs(text: str, voice: str, model: str, out: Path, settings: dict | None = None) -> None:
    key = os.environ.get("ELEVENLABS_API_KEY")
    if not key:
        raise SystemExit("ELEVENLABS_API_KEY is not set.")
    body = json.dumps({"text": text, "model_id": model, **({"voice_settings": settings} if settings else {})}).encode()
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

# Voice styles: the character of the finished voice-over, applied after the clean-up to a human recording or a
# generated voice alike. Each is (what it sounds like, when to use it, ffmpeg chain). All stay calm and natural;
# none adds an effect a listener would notice as an effect, except `phone`, which is for single lines (the AI partner
# on a call, a quoted voice message). The level is matched to the dry voice afterwards, so the mix stays put.
STYLES = {
    "natural": ("the clean-up only: true to the voice",
                "in-product how-to and onboarding, anything that should just sound like a person", ""),
    "warm": ("fuller low mids, softened top, gentle compression",
             "testimonials, founder story, learner stories",
             "equalizer=f=180:t=q:w=1:g=2.5,equalizer=f=3000:t=q:w=1.5:g=-1,highshelf=f=9000:g=-1.5,"
             "acompressor=threshold=-20dB:ratio=2:attack=15:release=200:makeup=1"),
    "broadcast": ("close, confident announcer: proximity warmth, presence, air, firm two-stage compression",
                  "ads, launches, LinkedIn and business-track videos, product tours with music",
                  "lowshelf=f=120:g=3,equalizer=f=350:t=q:w=1.2:g=-2.5,equalizer=f=4200:t=q:w=1.2:g=3,"
                  "highshelf=f=11000:g=2,deesser=i=0.4,"
                  "acompressor=threshold=-24dB:ratio=3.5:attack=5:release=90:makeup=3,"
                  "asoftclip=type=tanh:threshold=0.9,alimiter=limit=0.89:attack=3:release=60:level=disabled"),
    "social": ("bright and forward, cuts through phone speakers, tight level",
               "Reels, TikTok and Stories for learners (individual track), fast hooks",
               "highpass=f=100,equalizer=f=300:t=q:w=1.5:g=-3,equalizer=f=5000:t=q:w=1.2:g=3.5,"
               "aexciter=amount=1.5:drive=4:freq=6000:blend=0,deesser=i=0.5,"
               "acompressor=threshold=-26dB:ratio=4:attack=3:release=60:makeup=4,"
               "alimiter=limit=0.89:attack=2:release=50:level=disabled"),
    "intimate": ("soft and close, little compression, rounded top",
                 "emotional beats, a quiet opening, the confidence-gap story",
                 "equalizer=f=220:t=q:w=1:g=2,highshelf=f=7000:g=-2,"
                 "acompressor=threshold=-18dB:ratio=1.6:attack=20:release=250:makeup=1"),
    "narrator": ("even documentary read with a faint small-room sheen",
                 "explainers, brand films, long-form YouTube",
                 "equalizer=f=150:t=q:w=1:g=1.5,equalizer=f=3500:t=q:w=1.4:g=1.5,"
                 "acompressor=threshold=-22dB:ratio=2.5:attack=10:release=150:makeup=2,"
                 "aecho=0.9:0.9:23|37:0.10|0.06"),
    "room": ("places a dry voice in a small real room; takes the 'in a box' edge off a synthetic voice",
             "macOS and ElevenLabs voices that sound too clean against footage or music",
             "equalizer=f=250:t=q:w=1:g=1,aecho=0.85:0.9:17|29|43:0.14|0.10|0.06"),
    "phone": ("a voice heard through a phone: narrow band, a little grit",
              "single lines only: the AI partner on the call, a quoted voice note",
              "highpass=f=320,lowpass=f=3400,equalizer=f=1500:t=q:w=1:g=4,asoftclip=type=atan:threshold=0.6,"
              "acompressor=threshold=-20dB:ratio=4:attack=5:release=80:makeup=3"),
}

# How an ElevenLabs voice performs the lines (voice_settings). `speed` is ElevenLabs' own, 0.7–1.2.
DELIVERY = {
    "calm": {"stability": 0.6, "similarity_boost": 0.8, "style": 0.1, "speed": 0.95},
    "conversational": {"stability": 0.45, "similarity_boost": 0.8, "style": 0.3, "speed": 1.0},
    "energetic": {"stability": 0.35, "similarity_boost": 0.75, "style": 0.5, "speed": 1.08},
    "authoritative": {"stability": 0.7, "similarity_boost": 0.85, "style": 0.2, "speed": 0.95},
}


def style_chain(name: str) -> str:
    if name not in STYLES:
        raise SystemExit(f"Unknown voice style '{name}'. Styles: {', '.join(STYLES)}")
    return STYLES[name][2]


def _loudness(f: Path) -> float:
    proc = ff.run(["ffmpeg", "-loglevel", "info", "-i", f, "-af", "ebur128", "-f", "null", "-"], capture=True)
    found = re.findall(r"I:\s+(-?[\d.]+) LUFS", proc.stderr)
    return float(found[-1]) if found else -70.0


def apply_style(src: Path, out: Path, style: str) -> Path:
    """Run `src` through a voice style, then match its integrated loudness to `src` so the mix balance holds."""
    chain = style_chain(style)
    if not chain:
        shutil.copyfile(src, out)
        return out
    tmp = out.with_name(out.stem + ".styled.wav")
    ff.run(["ffmpeg", "-i", src, "-af", chain, "-ar", "48000", "-c:a", "pcm_s24le", tmp])
    gain = _loudness(src) - _loudness(tmp)
    ff.run(["ffmpeg", "-i", tmp, "-af", f"volume={gain:.2f}dB,alimiter=limit=0.95:level=disabled", "-ar", "48000",
            "-c:a", "pcm_s24le", out])
    tmp.unlink(missing_ok=True)
    return out


def apply_delivery(src: Path, out: Path, pace: float = 1.0, pitch: float = 0.0) -> Path:
    """Change pace (tempo factor, 0.8–1.2) and pitch (semitones, −4…+4) without the chipmunk effect: Rubber Band
    with formants preserved keeps the voice's character. Works on any engine, including the user's own recording."""
    if not (0.8 <= pace <= 1.2) or not (-4 <= pitch <= 4):
        raise SystemExit("pace must be 0.8–1.2 and pitch −4…+4 semitones; beyond that a voice stops sounding natural.")
    if pace == 1 and pitch == 0:
        shutil.copyfile(src, out)
        return out
    if "rubberband" not in ff.filters():
        raise SystemExit("pace/pitch need ffmpeg built with librubberband (Homebrew ffmpeg-full has it).")
    ff.run(["ffmpeg", "-i", src, "-af", f"rubberband=tempo={pace}:pitch={2 ** (pitch / 12):.6f}:formant=preserved"
            ":pitchq=quality:window=standard:transients=mixed", "-ar", "48000", "-c:a", "pcm_s16le", out])
    return out


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
        clean_up: bool = True, keep_timing: bool = False, style: str | None = None, pace: float | None = None,
        pitch: float | None = None, delivery: str | None = None) -> list:
    data = json.loads(script.read_text(encoding="utf-8"))
    lines = data.get("lines", [])
    if not lines:
        raise SystemExit(f"{script} has no lines.")
    lang = str(data.get("lang", project.lang))
    vo_dir = project.root / "audio" / "vo"
    vo_dir.mkdir(parents=True, exist_ok=True)
    meta = data.setdefault("voice", {})
    # choices given on the command line are kept in vo.json, so the next run (and the crew) see them
    for k, v in (("style", style), ("pace", pace), ("pitch", pitch), ("delivery", delivery)):
        if v is not None:
            meta[k] = v
    style_chain(meta.get("style", "natural"))
    if meta.get("delivery") and meta["delivery"] not in DELIVERY:
        raise SystemExit(f"Unknown delivery '{meta['delivery']}'. Choices: {', '.join(DELIVERY)}")

    with tempfile.TemporaryDirectory() as td:
        tmp = Path(td)
        raws = []
        if engine == "files" and take:
            # clean the whole take first: noise reduction learns the room better from the full recording
            raws = _split_take(enhance(take, tmp / "take-enhanced.wav") if clean_up else take, len(lines), tmp, min_silence)
        for i, line in enumerate(lines):
            if engine == "say":
                raw = tmp / f"{line['id']}.aiff"
                _say(line.get("say_as", line["text"]), voice or meta.get("say_voice") or SAY_VOICES["ar" if lang.startswith("ar") else "en"],
                     raw, line.get("rate", rate or meta.get("rate")))
            elif engine == "elevenlabs":
                vid = voice or meta.get("voice_id")
                if not vid:
                    raise SystemExit("ElevenLabs needs a voice id: --voice <id> or voice.voice_id in vo.json.")
                raw = tmp / f"{line['id']}.mp3"
                settings = {**DELIVERY.get(line.get("delivery", meta.get("delivery", "")), {}),
                            **meta.get("voice_settings", {})}
                _elevenlabs(line.get("say_as", line["text"]), vid, meta.get("model", "eleven_multilingual_v2"), raw,
                            settings or None)
            elif take:
                raw = raws[i]
            else:
                found = [project.root / "audio" / "vo-takes" / f"{line['id']}{ext}" for ext in TAKE_EXTS]
                raw = next((f for f in found if f.exists()), None)
                if raw is None:
                    raise SystemExit(f"No recording for {line['id']}: expected audio/vo-takes/{line['id']}.wav (or .m4a, .mp3).")
                if clean_up:
                    raw = enhance(raw, tmp / f"{line['id']}-enhanced.wav")
            out = vo_dir / f"{line['id']}.wav"
            _clean(raw, out)
            # delivery (pace, pitch) and a per-line style change the line itself, so they come before its timing
            l_pace, l_pitch = float(line.get("pace", meta.get("pace", 1))), float(line.get("pitch", meta.get("pitch", 0)))
            if l_pace != 1 or l_pitch != 0:
                shutil.copyfile(apply_delivery(out, tmp / f"{line['id']}-delivery.wav", l_pace, l_pitch), out)
            if line.get("style"):
                shutil.copyfile(apply_style(out, tmp / f"{line['id']}-style.wav", line["style"]), out)
            ff.probe.cache_clear()
            line["duration"] = round(ff.probe(str(out))["duration"], 3)
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
    dry = vo_dir / "mix-dry.wav"  # the voice-over before its style, so `restyle` can change the style in seconds
    ff.run(["ffmpeg", *inputs, "-filter_complex", ";".join(parts), "-map", "[out]", "-ar", "48000", "-c:a", "pcm_s24le",
            dry])
    apply_style(dry, project.root / "audio" / "vo.wav", meta.get("style", "natural"))

    data["engine"] = engine
    script.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return lines


def restyle(project: Project, script: Path, style: str) -> Path:
    """Change the whole voice-over's style without cutting it again (from audio/vo/mix-dry.wav)."""
    dry = project.root / "audio" / "vo" / "mix-dry.wav"
    if not dry.exists():
        raise SystemExit("No audio/vo/mix-dry.wav yet: run `sgv voice` once first.")
    data = json.loads(script.read_text(encoding="utf-8"))
    data.setdefault("voice", {})["style"] = style
    out = apply_style(dry, project.root / "audio" / "vo.wav", style)
    script.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return out


def audition(project: Project, styles: list | None = None, seconds: float = 12.0) -> list:
    """Render the project's voice-over in every style (or the ones named) to build/voice-styles/, plus one file that
    plays the same opening in each style in turn, a short pause between, to compare by ear. Nothing in the project
    changes. Returns (style, file, LUFS) rows."""
    dry = project.root / "audio" / "vo" / "mix-dry.wav"
    src = dry if dry.exists() else project.root / "audio" / "vo.wav"
    if not src.exists():
        raise SystemExit("No voice-over yet: run `sgv voice` first.")
    out_dir = project.build / "voice-styles"
    out_dir.mkdir(parents=True, exist_ok=True)
    rows, clips = [], []
    for name in styles or [s for s in STYLES if s != "phone"]:
        f = apply_style(src, out_dir / f"{name}.wav", name)
        rows.append((name, f, _loudness(f)))
        clip = out_dir / f".{name}-clip.wav"
        ff.run(["ffmpeg", "-i", f, "-t", f"{seconds}", "-af", "afade=t=out:st={0}:d=0.4,apad=pad_dur=0.8".format(seconds - 0.4),
                "-ar", "48000", "-ac", "2", "-c:a", "pcm_s24le", clip])
        clips.append(clip)
    reel = out_dir / "compare.wav"
    ff.run(["ffmpeg", *sum([["-i", c] for c in clips], []), "-filter_complex",
            "".join(f"[{i}:a]" for i in range(len(clips))) + f"concat=n={len(clips)}:v=0:a=1[a]", "-map", "[a]",
            "-c:a", "pcm_s24le", reel])
    for c in clips:
        c.unlink(missing_ok=True)
    rows.append(("compare", reel, _loudness(reel)))
    return rows
