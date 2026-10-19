"""Render branded motion graphics from the Remotion project in motion/ (cached by content hash)."""

import hashlib
import json
import os
import shutil
import subprocess
import sys
from pathlib import Path

from sgv import ff, paths

COMPOSITIONS = ["Intro", "TitleCard", "StatCard", "QuoteCard", "EndCard", "LowerThird", "ProductScreen"]
ALPHA = {"LowerThird"}  # rendered with transparency, composited over footage


def stage_assets(props: dict, base: Path) -> dict:
    """Copy an image prop (`src`, relative to `base`) into motion/public/stage/ so staticFile() can load it.
    The staged name is the file's content hash, so a recaptured screen invalidates cached renders."""
    src = props.get("src")
    if not src or str(src).startswith("stage/"):
        return props
    f = Path(src) if Path(src).is_absolute() else base / src
    if not f.exists():
        raise SystemExit(f"Image not found: {f}")
    data = f.read_bytes()
    name = hashlib.sha256(data).hexdigest()[:16] + f.suffix.lower()
    dest = paths.MOTION / "public" / "stage" / name
    if not dest.exists():
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(data)
    out = {**props, "src": f"stage/{name}"}
    if "srcW" not in props:  # the screen's size in CSS pixels: captures are taken at `scale` device pixels per CSS pixel
        v = ff.probe(str(f))["video"] or {}
        scale = float(props.get("scale", 2))
        out.update(srcW=round(v.get("width", 2880) / scale), srcH=round(v.get("height", 1800) / scale))
    return out


def _check() -> None:
    if not (paths.MOTION / "node_modules").exists():
        raise SystemExit("motion/ dependencies are not installed — run `npm install` in motion/ (setup/macos.sh does this).")
    if not shutil.which("npx"):
        raise SystemExit("npx not found — install Node.js (setup/macos.sh does this).")


def render(composition: str, props: dict, *, width: int, height: int, fps: int, duration: float,
           theme: str, lang: str, cache_dir: Path, draft: bool = False) -> Path:
    if composition not in COMPOSITIONS:
        raise SystemExit(f"Unknown composition '{composition}'. Available: {', '.join(COMPOSITIONS)}")
    full = {**props, "width": width, "height": height, "fps": fps, "duration": duration, "theme": theme, "lang": lang}
    alpha = composition in ALPHA
    key = hashlib.sha256(json.dumps([composition, full, draft, _source_hash()], sort_keys=True).encode()).hexdigest()[:16]
    cache_dir.mkdir(parents=True, exist_ok=True)
    out = cache_dir / f"{composition}-{width}x{height}-{key}.{'mov' if alpha else 'mp4'}"
    if out.exists():
        return out
    _check()
    props_file = cache_dir / f"{out.stem}.props.json"
    props_file.write_text(json.dumps(full, ensure_ascii=False))
    tmp = out.with_name(out.stem + ".part" + out.suffix)
    cmd = ["npx", "--no-install", "remotion", "render", "src/index.ts", composition, str(tmp),
           f"--props={props_file}", "--log=error"]
    if alpha:
        cmd += ["--codec=prores", "--prores-profile=4444", "--pixel-format=yuva444p10le", "--image-format=png"]
    else:
        cmd += ["--codec=h264", f"--crf={'28' if draft else '16'}", "--image-format=jpeg", "--jpeg-quality=95"]
    if os.environ.get("SGV_BROWSER"):
        cmd.append(f"--browser-executable={os.environ['SGV_BROWSER']}")
    if ff.VERBOSE:
        print("$ (motion/) " + " ".join(cmd), file=sys.stderr)
    print(f"  motion  {composition} {width}x{height} {duration:g}s", file=sys.stderr)
    proc = subprocess.run(cmd, cwd=paths.MOTION, capture_output=not ff.VERBOSE, text=True)
    if proc.returncode != 0:
        raise SystemExit(f"Remotion render of {composition} failed:\n{(proc.stderr or proc.stdout or '')[-3000:]}")
    tmp.rename(out)
    return out


_src_hash = None


def _source_hash() -> str:
    """Changes whenever motion/src or brand tokens change, so cached renders refresh."""
    global _src_hash
    if _src_hash is None:
        h = hashlib.sha256()
        files = sorted((paths.MOTION / "src").rglob("*")) + [paths.BRAND / "tokens.json"]
        for f in files:
            if f.is_file():
                h.update(f.name.encode())
                h.update(f.read_bytes())
        _src_hash = h.hexdigest()[:12]
    return _src_hash
