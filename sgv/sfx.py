"""Subtle sound design, generated here (no licensing): a soft whoosh under every motion transition and a light tap
wherever a ProductScreen shows a tap. Enabled with "sfx": true (or {"transitions": true, "taps": true, "volume": 0.5})
in edit.json; mixed after the music so it never triggers ducking."""

from __future__ import annotations

import hashlib
import json
from pathlib import Path

from sgv import ff
from sgv.project import Project

MOTION_TRANSITIONS = {"zoom", "push-left", "push-right", "push-up"}

# a short band-limited air movement that swells and falls, and a soft high click with a tiny body
WHOOSH = ("anoisesrc=color=pink:amplitude=0.6:d=0.5:r=48000,highpass=f=350,lowpass=f=3800,"
          "afade=t=in:d=0.28:curve=qsin,afade=t=out:st=0.28:d=0.22:curve=qsin,volume=0.55")
TAP = ("sine=f=1650:d=0.06:r=48000,afade=t=out:d=0.05:curve=exp,volume=0.35")


def _settings(project: Project) -> dict | None:
    s = project.edit.get("sfx")
    if not s:
        return None
    return {"transitions": True, "taps": True, "volume": 0.5, **(s if isinstance(s, dict) else {})}


def events(project: Project) -> list:
    """(seconds, "whoosh" | "tap") on the assembled timeline."""
    s = _settings(project)
    if not s:
        return []
    out = []
    for clip, sched in zip(project.edit["timeline"], project.schedule()):
        tr = clip.get("transition", "cut")
        if s["transitions"] and tr in MOTION_TRANSITIONS and sched["index"]:
            td = project.transition_duration(clip)
            out.append((max(0.0, sched["start"] + td / 2 - 0.28), "whoosh"))  # the swell peaks mid-transition
        taps = (clip.get("props") or {}).get("tap")
        if s["taps"] and taps:
            for t in taps if isinstance(taps, list) else [taps]:
                out.append((sched["start"] + float(t.get("at", 0)), "tap"))
    return sorted(out)


def build(project: Project, total: float) -> Path | None:
    """Render the effects track for this edit (cached by its events) and return its path, or None."""
    evs = events(project)
    if not evs:
        return None
    vol = float(_settings(project)["volume"])
    key = hashlib.sha256(json.dumps([evs, vol, round(total, 2), WHOOSH, TAP]).encode()).hexdigest()[:12]
    out = project.build / "cache" / f"sfx-{key}.wav"
    if out.exists():
        return out
    out.parent.mkdir(parents=True, exist_ok=True)
    inputs, parts = [], []
    for i, (t, kind) in enumerate(evs):
        inputs += ["-f", "lavfi", "-i", WHOOSH if kind == "whoosh" else TAP]
        ms = int(round(t * 1000))
        parts.append(f"[{i}:a]aformat=channel_layouts=stereo,adelay={ms}|{ms}[e{i}]")
    mix = "".join(f"[e{i}]" for i in range(len(evs)))
    parts.append(f"{mix}amix=inputs={len(evs)}:normalize=0,volume={vol},apad,atrim=0:{total:.3f}[out]")
    ff.run(["ffmpeg", *inputs, "-filter_complex", ";".join(parts), "-map", "[out]", "-ar", "48000", "-c:a", "pcm_s16le", out])
    return out
