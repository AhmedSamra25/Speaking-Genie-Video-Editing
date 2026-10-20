"""Render branded motion graphics from the Remotion project in motion/ (cached by content hash)."""

import hashlib
import json
import os
import shutil
import subprocess
import sys
from pathlib import Path

from sgv import ff, paths

COMPOSITIONS = ["Intro", "TitleCard", "StatCard", "QuoteCard", "EndCard", "LowerThird", "ProductScreen",
                "Run"]  # Run: several graphics joined by TransitionSeries (sgv builds it from a run of motion clips)
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
    """Render one graphic (cached). For several, `render_many` shares one bundle and one browser."""
    return render_many([dict(composition=composition, props=props, width=width, height=height, fps=fps, duration=duration,
                             theme=theme, lang=lang, cache_dir=cache_dir, draft=draft)])[0]


def render_still(spec: dict, at: float) -> Path:
    """One frame (at `at` seconds) of a graphic as a PNG, rendered by the same worker. Cached like clips."""
    item = _item(**spec)
    frame = min(round(at * spec["fps"]), round(spec["duration"] * spec["fps"]) - 1)
    out = Path(item["out"]).with_name(Path(item["out"]).stem + f"-f{frame}.png")
    if not out.exists():
        _run_worker([{**item, "out": str(out), "frame": frame, "label": f"{item['label']} still @{at:g}s"}])
    return out


def _item(composition: str, props: dict, *, width: int, height: int, fps: int, duration: float,
          theme: str, lang: str, cache_dir: Path, draft: bool = False) -> dict:
    if composition not in COMPOSITIONS:
        raise SystemExit(f"Unknown composition '{composition}'. Available: {', '.join(COMPOSITIONS)}")
    full = {**props, "width": width, "height": height, "fps": fps, "duration": duration, "theme": theme, "lang": lang}
    alpha = composition in ALPHA
    key = hashlib.sha256(json.dumps([composition, full, draft, _source_hash()], sort_keys=True).encode()).hexdigest()[:16]
    out = Path(cache_dir) / f"{composition}-{width}x{height}-{key}.{'mov' if alpha else 'mp4'}"
    return {"id": composition, "props": full, "out": str(out), "alpha": alpha, "crf": 28 if draft else 16,
            "jpegQuality": 80 if draft else 95, "label": f"{composition} {width}x{height} {duration:g}s"}


def render_many(specs: list) -> list:
    """Render every graphic that isn't cached yet in one Remotion worker: the code is bundled once per source
    version and one browser renders the whole batch, `concurrency()` frames at a time. Returns the output paths."""
    items = [_item(**s) for s in specs]
    todo = [i for i in {i["out"]: i for i in items}.values() if not Path(i["out"]).exists()]
    if todo:
        _run_worker(todo)
    return [Path(i["out"]) for i in items]


def _run_worker(todo: list) -> None:
    _check()
    for i in todo:
        Path(i["out"]).parent.mkdir(parents=True, exist_ok=True)
        print(f"  motion  {i['label']}", file=sys.stderr)
    pixels = max(i["props"]["width"] * i["props"]["height"] for i in todo)
    job = {"bundleDir": str(_bundle_dir()), "concurrency": concurrency(pixels),
           "browserExecutable": os.environ.get("SGV_BROWSER"), "items": todo}
    job_file = Path(todo[0]["out"]).with_name(f"job-{os.getpid()}.json")
    job_file.write_text(json.dumps(job, ensure_ascii=False))
    cmd = ["node", "scripts/render-worker.mjs", str(job_file)]
    if ff.VERBOSE:
        print(f"$ (motion/) {' '.join(cmd)}  # {len(todo)} graphics, concurrency {job['concurrency']}", file=sys.stderr)
    proc = subprocess.run(cmd, cwd=paths.MOTION, capture_output=True, text=True)
    if ff.VERBOSE and proc.stdout:
        print(proc.stdout.rstrip(), file=sys.stderr)
    job_file.unlink(missing_ok=True)
    if proc.returncode != 0:
        raise SystemExit(f"Remotion render failed:\n{(proc.stderr or proc.stdout or '')[-3000:]}")


def _bundle_dir() -> Path:
    """The webpack bundle of motion/ for the current source version (built by the worker on first use).
    Images staged after bundling are copied into its public folder, and bundles of older versions are removed."""
    base = paths.ROOT / "build" / "motion-bundle"
    d = base / _source_hash()
    if base.exists():
        for old in base.iterdir():
            if old != d and old.is_dir():
                shutil.rmtree(old, ignore_errors=True)
    stage = paths.MOTION / "public" / "stage"
    if (d / "index.html").exists() and stage.exists():
        dest = d / "public" / "stage"
        dest.mkdir(parents=True, exist_ok=True)
        for f in stage.iterdir():
            if not (dest / f.name).exists():
                shutil.copy2(f, dest / f.name)
    return d


def available_memory_gb() -> float:
    """Memory the OS can hand out now (free + inactive + purgeable pages), in GB."""
    try:
        if ff.IS_MAC:
            out = subprocess.run(["vm_stat"], capture_output=True, text=True).stdout
            page = int(out.split("page size of ")[1].split()[0])
            pages = {k.strip(): int(v.strip().rstrip(".")) for k, v in
                     (line.split(":") for line in out.splitlines()[1:] if ":" in line)}
            free = sum(pages.get(k, 0) for k in ("Pages free", "Pages inactive", "Pages speculative", "Pages purgeable"))
            return free * page / 1e9
        with open("/proc/meminfo") as f:
            info = {line.split(":")[0]: int(line.split()[1]) for line in f}
        return info.get("MemAvailable", 0) / 1e6
    except Exception:
        return 4.0


def concurrency(pixels: int = 1920 * 1080) -> int:
    """How many frames Remotion renders at once: SGV_CONCURRENCY, or what free memory allows. Measured on an 8 GB M2:
    each extra frame costs about 0.2 GB at draft size and 0.4 GB at 1080p, on top of one browser (~0.5 GB).
    At least 2, at most half the cores; renders run one at a time (sgv.lock), so the job has the machine to itself."""
    if os.environ.get("SGV_CONCURRENCY"):
        return max(1, int(os.environ["SGV_CONCURRENCY"]))
    per_frame = 0.2 if pixels <= 1280 * 720 else 0.4
    budget = max(available_memory_gb() - 0.5, 0.8)
    return max(2, min((os.cpu_count() or 4) // 2, 1 + int(budget / per_frame)))


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
