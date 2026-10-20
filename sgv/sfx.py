"""Brand sound, generated here (no licensing, fully owned): the only safe source for a future sonic logo.

Automatic sounds: a soft whoosh under every motion transition and a light tap wherever a ProductScreen shows a tap.
Placed sounds: cues on the timeline, by name from SOUNDS or a library file in brand/sound/.

    "sfx": true                                    automatic sounds only
    "sfx": [cue, ...]                              automatic sounds and cues
    "sfx": {"auto": true, "transitions": true, "taps": true, "volume": 0.5,
            "cues": [{"sound": "call-connect", "at": {"clip": 3, "offset": 0.2}, "volume": 0.6}]}

A cue's `at` is the moment the sound lands (a riser ends there, a whoosh peaks there). Ringing sounds repeat for
`duration` seconds when it is given. Effects are mixed after the music, so they never trigger ducking.
"""

from __future__ import annotations

import hashlib
import json
import re
from pathlib import Path

from sgv import ff, paths
from sgv.project import Project

MOTION_TRANSITIONS = {"zoom", "push-left", "push-right", "push-up"}
SR = 48000
LIBRARY = paths.BRAND / "sound"
AUDIO_EXT = {".wav", ".mp3", ".m4a", ".aif", ".aiff", ".flac", ".ogg"}

# notes (Hz)
C5, E5, G5, GS5, A5, B5, C6, E6 = 523.25, 659.25, 783.99, 830.61, 880.0, 987.77, 1046.50, 1318.51


def _bell(f: float, t0: float, amp: float, decay: float = 6.0, attack: float = 0.005, u: str = "t") -> str:
    """A soft bell note at t0: mostly the fundamental, a little octave that fades faster."""
    d = f"({u}-{t0})"
    env = f"gte({d},0)*min({d}/{attack},1)*exp(-{decay}*{d})"
    return f"{amp}*{env}*(sin(2*PI*{f}*t)+0.12*exp(-{decay * 2}*{d})*sin(4*PI*{f}*t))"


def _gate(u: str, on: float, edge: float = 0.03) -> str:
    """1 while u is in [0, on), with raised-cosine edges of `edge` seconds, else 0."""
    return (f"if(lt({u},{edge}),0.5-0.5*cos(PI*{u}/{edge}),if(lt({u},{on - edge}),1,"
            f"if(lt({u},{on}),0.5-0.5*cos(PI*({on}-{u})/{edge}),0)))")


def _glide(f0: float, f1: float, T: float) -> str:
    """Phase of a linear glide from f0 to f1 over T seconds (held at f1 after)."""
    return f"2*PI*if(lt(t,{T}),{f0}*t+({f1}-{f0})*t*t/(2*{T}),{f0}*{T}+({f1}-{f0})*{T}/2+{f1}*(t-{T}))"


# name: an aevalsrc expression (`expr`, then `after` filters) or a lavfi `graph`; `dur` seconds; `peak` = where the
# sound lands (a cue's `at` aligns to it); `period` = ringing sounds that repeat for a cue's `duration`
SOUNDS = {
    "whoosh": dict(
        graph="anoisesrc=color=pink:amplitude=0.6:d=0.5:r=48000,highpass=f=350,lowpass=f=3800,"
              "afade=t=in:d=0.28:curve=qsin,afade=t=out:st=0.28:d=0.22:curve=qsin,volume=0.55",
        dur=0.5, peak=0.28, about="band-limited air under a motion transition (automatic)"),
    "tap": dict(
        graph="sine=f=1650:d=0.06:r=48000,afade=t=out:d=0.05:curve=exp,volume=0.35",
        dur=0.06, peak=0.0, about="light click on a ProductScreen tap (automatic)"),
    "ringback": dict(
        expr=f"0.1*{_gate('mod(t,5)', 1.0)}*sin(2*PI*425*t)", dur=5.0, peak=0.0, period=5.0,
        about="what the caller hears: Egyptian 425 Hz, 1 s on / 4 s off, soft edges"),
    "incoming-ring": dict(
        expr="+".join(_bell(f, t0, 0.15, decay=7, attack=0.008, u="mod(t,2.5)") for f, t0 in ((A5, 0), (E5, 0.2), (A5, 0.4), (E5, 0.6))),
        dur=2.5, peak=0.0, period=2.5, about="calm two-tone bell motif for an incoming call, every 2.5 s"),
    "call-connect": dict(
        expr=f"{_bell(E5, 0, 0.19)}+{_bell(B5, 0.12, 0.17)}", after="afade=t=out:st=0.6:d=0.1", dur=0.7, peak=0.0,
        about="the call connects: E5, then B5 120 ms later"),
    "hang-up": dict(
        expr=f"{_bell(B5, 0, 0.17)}+{_bell(E5, 0.12, 0.19)}", after="afade=t=out:st=0.6:d=0.1", dur=0.7, peak=0.0,
        about="the call ends: B5, then E5"),
    "mic-on": dict(
        expr=f"0.26*min(t/0.004,1)*exp(-14*t)*sin({_glide(520, 780, 0.06)})", after="lowpass=f=4000", dur=0.35,
        peak=0.0, about="short soft rising blip as the microphone opens"),
    "message-sent": dict(
        expr=f"0.24*min(t/0.01,1)*exp(-12*t)*sin({_glide(700, 1300, 0.1)})", after="lowpass=f=5000", dur=0.35,
        peak=0.0, about="light upward swoop as a message or answer is sent"),
    "notification": dict(
        expr=_bell(C6, 0, 0.2, decay=5), after="afade=t=out:st=0.8:d=0.1", dur=0.9, peak=0.0,
        about="one soft high bell: a report or message has arrived"),
    "success": dict(
        expr="+".join(_bell(f, t0, 0.125, decay=4.5, attack=0.01) for f, t0 in ((C5, 0), (E5, 0.11), (G5, 0.22))),
        after="afade=t=out:st=0.95:d=0.15", dur=1.1, peak=0.0, about="three unhurried rising notes (C E G): done, passed"),
    "streak": dict(
        expr="+".join(f"{a}*min(t/0.3,1)*exp(-1.8*t)*sin(2*PI*{f}*t)"
                      for f, a in ((E5, 0.13), (GS5, 0.09), (B5, 0.09), (E6, 0.057))),
        after="afade=t=out:st=1.5:d=0.3", dur=1.8, peak=0.3,
        about="a warm chord that swells and settles: streak kept, level reached (no arpeggio, no fanfare)"),
    "riser": dict(
        graph="anoisesrc=color=pink:amplitude=0.5:d=1.2:r=48000,highpass=f=500,lowpass=f=6000,"
              "afade=t=in:d=1.1:curve=exp,afade=t=out:st=1.1:d=0.1,volume=1.3",
        dur=1.2, peak=1.2, about="soft air build that ends on its `at` (into a reveal or a key line)"),
    "impact": dict(
        expr="0.33*min(t/0.003,1)*exp(-9*t)*sin(2*PI*(55*t+60*(1-exp(-25*t))/25))+0.033*exp(-30*t)*(2*random(0)-1)",
        after="highpass=f=35,lowpass=f=900,afade=t=out:st=0.5:d=0.1", dur=0.6, peak=0.0,
        about="low soft thump under a text reveal or a stat landing"),
}
ALIASES = {"level-up": "streak", "ring": "incoming-ring", "connect": "call-connect"}


def name_of(sound: str) -> str | None:
    """The SOUNDS key for a name or alias, else None."""
    sound = ALIASES.get(sound, sound)
    return sound if sound in SOUNDS else None


def graph(sound: str, dur: float | None = None) -> str:
    """ffmpeg lavfi graph for a synthesised sound, `dur` seconds long (ringing sounds repeat)."""
    s = SOUNDS[name_of(sound)]
    if "expr" in s:
        return f"aevalsrc='{s['expr']}':s={SR}:d={float(dur or s['dur'])}" + (f",{s['after']}" if s.get("after") else "")
    return s["graph"] if not dur else f"{s['graph']},apad,atrim=0:{float(dur):.3f}"


def library() -> list:
    """Audio files in brand/sound/ (repo-relative), each with its LICENSES.json entry or None."""
    ledger = {}
    led = LIBRARY / "LICENSES.json"
    if led.exists():
        ledger = {e["file"]: e for e in json.loads(led.read_text(encoding="utf-8")).get("files", [])}
    files = sorted(f for f in LIBRARY.rglob("*") if f.suffix.lower() in AUDIO_EXT)
    return [{"file": str(f.relative_to(paths.ROOT)), "entry": ledger.get(str(f.relative_to(LIBRARY)))} for f in files]


def _file(project: Project | None, src: str) -> Path | None:
    """A cue's library file: relative to the project, else to the repo (brand/sound/...)."""
    for p in ([project.path(src)] if project else []) + [paths.ROOT / src]:
        if p.is_file():
            return p
    return None


def _settings(project: Project) -> dict | None:
    s = project.edit.get("sfx")
    if not s:
        return None
    if isinstance(s, list):
        s = {"cues": s}
    s = {"auto": True, "transitions": True, "taps": True, "volume": 0.5, "cues": [], **(s if isinstance(s, dict) else {})}
    if not s["auto"]:
        s["transitions"] = s["taps"] = False
    return s


def events(project: Project) -> list:
    """(start seconds, sound, volume, duration or None) on the assembled timeline."""
    s = _settings(project)
    if not s:
        return []
    out = []
    for clip, sched in zip(project.edit["timeline"], project.schedule()):
        tr = clip.get("transition", "cut")
        if s["transitions"] and tr in MOTION_TRANSITIONS and sched["index"]:
            td = project.transition_duration(clip)
            out.append((max(0.0, sched["start"] + td / 2 - SOUNDS["whoosh"]["peak"]), "whoosh", 1.0, None))
        taps = (clip.get("props") or {}).get("tap")
        if s["taps"] and taps:
            for t in taps if isinstance(taps, list) else [taps]:
                out.append((sched["start"] + float(t.get("at", 0)), "tap", 1.0, None))
    errors = []
    for i, c in enumerate(s["cues"]):
        sound = c.get("sound", "")
        n = name_of(sound)
        if not n and not _file(project, sound):
            errors.append(f"sfx cue {i}: unknown sound {sound!r} (see bin/sgv sounds --list)")
            continue
        start = project.resolve_at(c.get("at", 0)) - (SOUNDS[n]["peak"] if n else 0)
        out.append((round(start, 3), n or sound, float(c.get("volume", 1)), c.get("duration")))
    if errors:
        raise SystemExit("edit.json has problems:\n  - " + "\n  - ".join(errors))
    return sorted(out, key=lambda e: e[0])


def _input(project: Project | None, sound: str, dur) -> tuple:
    """(ffmpeg input args, cache key part) for one sound."""
    if name_of(sound):
        g = graph(sound, dur)
        return ["-f", "lavfi", "-i", g], g
    f = _file(project, sound)
    return ["-i", f], f"{f}:{f.stat().st_mtime_ns}"


def build(project: Project, total: float) -> Path | None:
    """Render the effects track for this edit (cached by its events) and return its path, or None."""
    evs = events(project)
    if not evs:
        return None
    vol = float(_settings(project)["volume"])
    srcs = [_input(project, sound, dur) for _, sound, _, dur in evs]
    key = hashlib.sha256(json.dumps([evs, vol, round(total, 2), [k for _, k in srcs]]).encode()).hexdigest()[:12]
    out = project.build / "cache" / f"sfx-{key}.wav"
    if out.exists():
        return out
    out.parent.mkdir(parents=True, exist_ok=True)
    inputs, parts = [], []
    for i, ((t, sound, v, dur), (args, _)) in enumerate(zip(evs, srcs)):
        inputs += args
        chain = f"[{i}:a]aresample={SR},aformat=channel_layouts=stereo"
        if t < 0:  # a riser cued at 0:00 starts part-way in
            chain += f",atrim=start={-t:.3f},asetpts=PTS-STARTPTS"
        if dur and not name_of(sound):  # a library file cut to length, with a short tail
            chain += f",atrim=0:{float(dur):.3f},afade=t=out:st={max(0.0, float(dur) - 0.3):.3f}:d=0.3"
        ms = int(round(max(t, 0) * 1000))
        parts.append(f"{chain},volume={v},adelay={ms}|{ms}[e{i}]")
    mix = "".join(f"[e{i}]" for i in range(len(evs)))
    parts.append(f"{mix}amix=inputs={len(evs)}:normalize=0,volume={vol},apad,atrim=0:{total:.3f}[out]")
    ff.run(["ffmpeg", *inputs, "-filter_complex", ";".join(parts), "-map", "[out]", "-ar", str(SR), "-c:a", "pcm_s16le", out])
    return out


def render_one(sound: str, out: Path, dur: float | None = None) -> Path:
    """One sound (a name or a library file) to a stereo WAV, for auditioning."""
    out.parent.mkdir(parents=True, exist_ok=True)
    args, _ = _input(None, sound, dur)
    ff.run(["ffmpeg", *args, *(["-t", str(dur)] if dur and not name_of(sound) else []),
            "-af", f"aresample={SR},aformat=channel_layouts=stereo", "-c:a", "pcm_s16le", out])
    return out


def measure(wav: Path) -> dict:
    """Peak and RMS (dBFS), and the loudest 400 ms (momentary LUFS), of a rendered sound."""
    proc = ff.run(["ffmpeg", "-loglevel", "info", "-i", wav, "-af",
                   "apad=pad_dur=0.5,astats=measure_perchannel=none:measure_overall=Peak_level+RMS_level,ebur128", "-f", "null", "-"],
                  capture=True)
    m = {"momentary": max([float(x) for x in re.findall(r" M:\s*(-?[\d.]+)", proc.stderr)] or [-120.0])}
    for key, label in (("peak", "Peak level dB:"), ("rms", "RMS level dB:")):
        found = re.findall(re.escape(label) + r"\s*(-?[\d.]+|-inf)", proc.stderr)
        m[key] = float(found[-1]) if found else float("nan")
    return m


def spectrum(wav: Path, out: Path) -> Path:
    """A spectrogram picture of a rendered sound, to check where its energy sits."""
    ff.run(["ffmpeg", "-i", wav, "-lavfi", "showspectrumpic=s=800x300:mode=combined:scale=log:fscale=log:legend=1", out])
    return out
