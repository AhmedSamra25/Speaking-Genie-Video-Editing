"""Video projects: folder layout, edit.json loading/validation and timeline maths."""

from __future__ import annotations

import json
import math
import re
import shutil
from pathlib import Path

from sgv import ff, paths

LAYOUT = ["footage", "audio", "assets", "captions", "exports", "build"]
CLIP_TYPES = {"video", "image", "title", "motion", "color"}
REQUIRED_PROPS = {"TitleCard": ["title"], "StatCard": ["label", "value"], "QuoteCard": ["quote", "name"],
                  "EndCard": ["headline"], "LowerThird": ["name"], "Intro": [], "ProductScreen": ["src"],
                  "DualScreen": ["mobileSrc", "webSrc"]}
TRANSITIONS = {"cut": None, "dissolve": "fade", "dip": None,
               # a dissolve through a soft gaussian blur (scene change)
               "blur": "fade",
               # motion transitions: short, with motion blur and an optional whoosh (sfx)
               "zoom": "zoomin", "push-left": "slideleft", "push-right": "slideright", "push-up": "slideup",
               "slide-scale": None,  # card to card: a push where the outgoing card shrinks to 92%
               "dome": None}  # Enablement: the incoming scene grows from the dome, a circle hung off the top edge
MOTION_BLUR = {"zoom", "push-left", "push-right", "push-up", "slide-scale"}  # (dome blurs its own edge)
# retired names (wipes and slides are off-brand), still accepted so older edits render
LEGACY_TRANSITIONS = {"wipe-left": "push-left", "slide-left": "push-left"}
# transitions that join consecutive motion clips inside one Remotion render (TransitionSeries) instead of xfade
RUN_JOINS = {"dissolve": {"type": "fade"}, "blur": {"type": "blur"}, "zoom": {"type": "zoom-blur"},
             "push-left": {"type": "blur-slide", "direction": "left"}, "push-right": {"type": "blur-slide", "direction": "right"},
             "push-up": {"type": "blur-slide", "direction": "up"},
             "slide-scale": {"type": "blur-slide", "direction": "left", "shrink": 0.92}, "dome": {"type": "dome"}}
# design-system look of the motion graphics (project-wide in edit.json, or per clip in props)
LOOKS = {"look": ("platform", "enablement"), "track": ("individual", "business"), "ground": ("dome", "flat", "deep")}
FOCUS_PULL_MAX = 8  # px of gaussian blur at 1080p: a soft rack focus, never a smear
RAMP_SPEEDS = (0.25, 4.0)
RAMP_STEPS = 8  # an eased change of speed is cut into this many constant-speed sections


def ease(x: float) -> float:
    """Ease in and out (cosine) on 0–1, for footage moves (rack focus, speed ramp)."""
    x = min(max(x, 0.0), 1.0)
    return 0.5 - 0.5 * math.cos(math.pi * x)


def focus_pull(c: dict, dur: float) -> dict | None:
    """A video clip's `focusPull` as {from, to, at, duration} (px of blur at 1080p, seconds on the clip).
    "in" racks from soft to sharp over the first 0.8 s, "out" from sharp to soft over the last 0.8 s."""
    fp = c.get("focusPull")
    if not fp:
        return None
    if fp == "in":
        fp = {"from": FOCUS_PULL_MAX, "to": 0, "at": 0}
    elif fp == "out":
        fp = {"from": 0, "to": FOCUS_PULL_MAX, "at": max(0.0, dur - 0.8)}
    d = float(fp.get("duration", 0.8))
    return {"from": float(fp.get("from", FOCUS_PULL_MAX)), "to": float(fp.get("to", 0)),
            "at": float(fp.get("at", 0)), "duration": max(d, 0.04)}


def ramp_sections(c: dict, span: float) -> list:
    """A video clip's `ramp` as constant-speed sections [(src_start, src_end, speed)] over `span` seconds of source
    from `in`. Each key {at, speed} eases the speed from the one before (the clip's `speed` at first) to its own over
    `ease` seconds (key, else clip, default 0.4) starting at `at` (source seconds after `in`)."""
    keys = sorted(c.get("ramp") or [], key=lambda k: float(k["at"]))
    out, t, s = [], 0.0, float(c.get("speed", 1))
    for k in keys:
        at = min(max(float(k["at"]), t), span)
        e = min(float(k.get("ease", c.get("rampEase", 0.4))), span - at)
        if at > t:
            out.append((t, at, s))
        new = float(k["speed"])
        if e > 0:
            n = RAMP_STEPS
            for j in range(n):
                out.append((at + e * j / n, at + e * (j + 1) / n, s + (new - s) * ease((j + 0.5) / n)))
        t, s = at + max(e, 0.0), new
    if t < span:
        out.append((t, span, s))
    return [x for x in out if x[1] - x[0] > 1e-4]


class Project:
    def __init__(self, root: Path):
        self.root = root.resolve()
        self.edit_path = self.root / "edit.json"
        if not self.edit_path.exists():
            raise SystemExit(f"No edit.json in {self.root} — create one with `sgv new <name>`.")
        try:
            self.edit = json.loads(self.edit_path.read_text())
        except json.JSONDecodeError as e:
            raise SystemExit(f"{self.edit_path}: invalid JSON — {e}")
        tl = self.edit.get("timeline") if isinstance(self.edit.get("timeline"), list) else []
        for i, c in enumerate(tl):
            if not isinstance(c, dict):
                continue
            if c.get("transition") in LEGACY_TRANSITIONS:
                c["transition"] = LEGACY_TRANSITIONS[c["transition"]]
            if c.get("match") and i:
                # match cut: a hard cut between two frames of identical geometry, so neither graphic may fade there
                c["transition"] = "cut"
                if c.get("type") in ("motion", "title"):
                    c["props"] = {"enterFade": False, **c.get("props", {})}
                if tl[i - 1].get("type") in ("motion", "title"):
                    tl[i - 1]["props"] = {"exitFade": False, **tl[i - 1].get("props", {})}
        self.validate()

    # -- basic properties -------------------------------------------------
    @property
    def name(self) -> str:
        return self.root.name

    @property
    def fps(self) -> int:
        return int(self.edit.get("fps", 30))

    @property
    def theme(self) -> str:
        return self.edit.get("theme", "light")

    @property
    def lang(self) -> str:
        return self.edit.get("lang", "en")

    def motion_defaults(self) -> dict:
        """Project-wide `look`, `track` and `ground` for every motion graphic (a clip's own props win)."""
        return {k: self.edit[k] for k in LOOKS if k in self.edit}

    @property
    def aspect(self) -> str:
        return self.edit.get("aspect", "16:9")

    def path(self, rel: str) -> Path:
        p = Path(rel)
        return p if p.is_absolute() else (self.root / p)

    def media(self, rel: str) -> Path:
        """A sound or bed: relative to the project, else to the repository (brand/sound/...)."""
        p = self.path(rel)
        if not p.exists() and (paths.ROOT / rel).exists():
            return paths.ROOT / rel
        return p

    @property
    def build(self) -> Path:
        d = self.root / "build"
        d.mkdir(exist_ok=True)
        return d

    # -- validation -------------------------------------------------------
    def validate(self) -> None:
        errors = []
        for k, allowed in LOOKS.items():
            if k in self.edit and self.edit[k] not in allowed:
                errors.append(f"`{k}` must be one of {list(allowed)}")
        tl = self.edit.get("timeline")
        if not isinstance(tl, list) or not tl:
            errors.append("`timeline` must be a non-empty list of clips")
            tl = []
        for i, c in enumerate(tl):
            where = f"timeline[{i}]"
            t = c.get("type")
            if t not in CLIP_TYPES:
                errors.append(f"{where}: type must be one of {sorted(CLIP_TYPES)}")
                continue
            if t in ("video", "image"):
                src = c.get("src")
                if not src:
                    errors.append(f"{where}: missing src")
                elif not self.path(src).exists():
                    errors.append(f"{where}: file not found: {src}")
            if t == "motion" and not c.get("composition"):
                errors.append(f"{where}: motion clip needs a composition (Intro, TitleCard, StatCard, QuoteCard, EndCard)")
            if t in ("motion", "title"):
                comp = c.get("composition", "TitleCard")
                given = {**c.get("props", {}), **{k: c[k] for k in ("overline", "title", "subtitle") if k in c}}
                missing = [k for k in REQUIRED_PROPS.get(comp, []) if k not in given]
                if missing:
                    errors.append(f"{where}: {comp} needs {', '.join(missing)}")
            if t != "video" and not c.get("duration"):
                errors.append(f"{where}: {t} clip needs a duration in seconds")
            if t == "video" and "out" in c and float(c["out"]) <= float(c.get("in", 0)):
                errors.append(f"{where}: out must be greater than in")
            if (c.get("focusPull") or c.get("ramp")) and t != "video":
                errors.append(f"{where}: focusPull and ramp work on video clips")
            fp = c.get("focusPull")
            if fp and not (fp in ("in", "out") or isinstance(fp, dict)):
                errors.append(f"{where}: focusPull is \"in\", \"out\" or {{from, to, at, duration}}")
            elif isinstance(fp, dict) and max(float(fp.get("from", 0)), float(fp.get("to", 0))) > FOCUS_PULL_MAX:
                errors.append(f"{where}: focusPull blur is at most {FOCUS_PULL_MAX} px (a rack focus, not a smear)")
            rp = c.get("ramp")
            if rp is not None:
                if not isinstance(rp, list) or not all(isinstance(k, dict) and "at" in k and "speed" in k for k in rp):
                    errors.append(f"{where}: ramp is a list of {{at, speed}} keys (source seconds after `in`)")
                elif any(not RAMP_SPEEDS[0] <= float(k["speed"]) <= RAMP_SPEEDS[1] for k in rp):
                    errors.append(f"{where}: ramp speeds stay between {RAMP_SPEEDS[0]} and {RAMP_SPEEDS[1]}")
            if c.get("sweep") and t not in ("motion", "title"):
                errors.append(f"{where}: sweep works on motion clips (the EndCard, or a card with the logo)")
            tr = c.get("transition", "cut")
            if tr not in TRANSITIONS:
                errors.append(f"{where}: transition must be one of {list(TRANSITIONS)}")
        if sum(1 for c in tl if isinstance(c, dict) and c.get("sweep")) > 1:
            errors.append("sweep: the light sweep is used once per video (on the EndCard or the logo)")
        for i, o in enumerate(self.edit.get("overlays", [])):
            if not o.get("composition"):
                errors.append(f"overlays[{i}]: needs a composition (e.g. LowerThird)")
            else:
                missing = [k for k in REQUIRED_PROPS.get(o["composition"], []) if k not in o.get("props", {})]
                if missing:
                    errors.append(f"overlays[{i}]: {o['composition']} needs {', '.join(missing)}")
        for key in ("music", "voiceover", "ambience"):
            a = self.edit.get(key)
            if a and not self.media(a.get("src", "")).is_file():
                errors.append(f"{key}: file not found: {a.get('src')}")
        cap = self.edit.get("captions")
        if cap and cap.get("burn", True) and not self.path(cap.get("src", "")).exists():
            errors.append(f"captions: file not found: {cap.get('src')} (run `sgv captions {self.root.name}` first, or set burn: false)")
        if errors:
            raise SystemExit("edit.json has problems:\n  - " + "\n  - ".join(errors))

    # -- timeline maths ---------------------------------------------------
    def clip_duration(self, c: dict) -> float:
        """Duration a clip occupies before transitions overlap it."""
        if c["type"] == "video":
            src_dur = ff.probe(str(self.path(c["src"])))["duration"]
            start = float(c.get("in", 0))
            end = float(c.get("out", src_dur))
            end = min(end, src_dur) if src_dur else end
            if c.get("ramp"):
                return max(0.04, sum((b - a) / sp for a, b, sp in ramp_sections(c, end - start)))
            return max(0.04, (end - start) / float(c.get("speed", 1)))
        return float(c["duration"])

    def transition_duration(self, c: dict) -> float:
        if c.get("transition", "cut") == "cut":
            return 0.0
        return float(c.get("transitionDuration", self.edit.get("transitionDuration", 0.5)))

    def schedule(self) -> list:
        """Start/end of every clip on the assembled timeline."""
        out, t = [], 0.0
        for i, c in enumerate(self.edit["timeline"]):
            d = self.clip_duration(c)
            td = self.transition_duration(c) if i else 0.0
            start = t - td
            out.append({"index": i, "type": c["type"], "start": round(start, 3), "end": round(start + d, 3),
                        "duration": round(d, 3), "transition": c.get("transition", "cut") if i else "—",
                        "label": c.get("label") or c.get("src") or c.get("composition") or c.get("title") or c["type"]})
            t = start + d
        return out

    def total_duration(self) -> float:
        s = self.schedule()
        return s[-1]["end"] if s else 0.0

    def resolve_at(self, at) -> float:
        """`at` is seconds, or {"clip": i, "offset": s} anchored to a timeline clip."""
        if isinstance(at, dict):
            sched = self.schedule()
            i = int(at["clip"])
            if not 0 <= i < len(sched):
                raise SystemExit(f"overlay anchored to missing clip {i}")
            return sched[i]["start"] + float(at.get("offset", 0))
        return float(at or 0)


def slug(name: str) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")
    return s or "untitled"


def create(name: str, aspect: str, theme: str, lang: str, title: str | None) -> Path:
    root = paths.PROJECTS / slug(name)
    if root.exists():
        raise SystemExit(f"{root} already exists")
    for d in LAYOUT:
        (root / d).mkdir(parents=True)
    edit = json.loads((paths.TEMPLATE / "edit.json").read_text())
    edit["title"] = title or name
    edit["aspect"] = aspect
    edit["theme"] = theme
    edit["lang"] = lang
    edit["exports"] = {"16:9": ["youtube-1080p"], "9:16": ["reels-1080x1920"], "1:1": ["square-1080"],
                       "4:5": ["portrait-1080x1350"]}.get(aspect, ["youtube-1080p"])
    (root / "edit.json").write_text(json.dumps(edit, indent=2, ensure_ascii=False) + "\n")
    shutil.copy(paths.TEMPLATE / "NOTES.md", root / "NOTES.md")
    return root


def find(name_or_path: str) -> Project:
    p = Path(name_or_path)
    if not (p / "edit.json").exists():
        p = paths.PROJECTS / name_or_path
    return Project(p)
