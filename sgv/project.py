"""Video projects: folder layout, edit.json loading/validation and timeline maths."""

from __future__ import annotations

import json
import re
import shutil
from pathlib import Path

from sgv import ff, paths

LAYOUT = ["footage", "audio", "assets", "captions", "exports", "build"]
CLIP_TYPES = {"video", "image", "title", "motion", "color"}
REQUIRED_PROPS = {"TitleCard": ["title"], "StatCard": ["label", "value"], "QuoteCard": ["quote", "name"],
                  "EndCard": ["headline"], "LowerThird": ["name"], "Intro": [], "ProductScreen": ["src"]}
TRANSITIONS = {"cut": None, "dissolve": "fade", "dip": None, "wipe-left": "wipeleft", "slide-left": "slideleft"}


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

    @property
    def aspect(self) -> str:
        return self.edit.get("aspect", "16:9")

    def path(self, rel: str) -> Path:
        p = Path(rel)
        return p if p.is_absolute() else (self.root / p)

    @property
    def build(self) -> Path:
        d = self.root / "build"
        d.mkdir(exist_ok=True)
        return d

    # -- validation -------------------------------------------------------
    def validate(self) -> None:
        errors = []
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
            tr = c.get("transition", "cut")
            if tr not in TRANSITIONS:
                errors.append(f"{where}: transition must be one of {list(TRANSITIONS)}")
        for i, o in enumerate(self.edit.get("overlays", [])):
            if not o.get("composition"):
                errors.append(f"overlays[{i}]: needs a composition (e.g. LowerThird)")
            else:
                missing = [k for k in REQUIRED_PROPS.get(o["composition"], []) if k not in o.get("props", {})]
                if missing:
                    errors.append(f"overlays[{i}]: {o['composition']} needs {', '.join(missing)}")
        for key in ("music", "voiceover"):
            a = self.edit.get(key)
            if a and not self.path(a.get("src", "")).exists():
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
