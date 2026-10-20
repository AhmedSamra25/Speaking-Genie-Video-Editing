"""`sgv doctor` — check that this machine is ready to edit."""

import os
import platform
import shutil
import subprocess

from sgv import captions, ff, lock, motion, paths


def _ver(cmd: list) -> str:
    try:
        return subprocess.run(cmd, capture_output=True, text=True, timeout=20).stdout.strip().splitlines()[0]
    except Exception:
        return ""


def run() -> int:
    ok = True

    def line(good: bool, label: str, detail: str = "", required: bool = True):
        nonlocal ok
        mark = "✓" if good else ("✗" if required else "·")
        if required and not good:
            ok = False
        print(f"  {mark} {label:28} {detail}")

    print(f"sgv doctor — {platform.system()} {platform.machine()} {platform.mac_ver()[0] if ff.IS_MAC else platform.release()}")
    has_ff = bool(shutil.which("ffmpeg"))
    line(has_ff, "ffmpeg", _ver(["ffmpeg", "-version"])[:60] if has_ff else "brew install ffmpeg")
    if has_ff:
        line(ff.hw(), "VideoToolbox encoders", "h264 / hevc hardware encode" if ff.hw() else
             "not available — software x264/x265 fallback", required=False)
        line("libass" in _ver(["ffmpeg", "-hide_banner", "-buildconf"]) or "subtitles" in ff.filters(),
             "libass (captions)", "subtitles filter")
        line("libx264" in ff.encoders() or ff.hw(), "H.264 encoder")
        line("zscale" in ff.filters(), "zimg (HDR → SDR)", "iPhone HDR footage tone-mapping", required=False)
    node = shutil.which("node")
    line(bool(node), "node", _ver(["node", "-v"]) if node else "brew install node")
    line((paths.MOTION / "node_modules" / "remotion").exists(), "motion/ (Remotion)",
         "installed" if (paths.MOTION / "node_modules").exists() else "cd motion && npm install")
    wc = shutil.which("whisper-cli") or shutil.which("whisper-cpp")
    line(bool(wc), "whisper-cli (captions)", wc or "brew install whisper-cpp", required=False)
    model = paths.MODELS / captions.DEFAULT_MODEL
    line(model.exists(), "whisper model", str(model) if model.exists() else "setup/macos.sh --models", required=False)
    fonts = sorted(p.name for p in paths.FONTS.glob("*.ttf"))
    line(len(fonts) >= 8, "brand fonts", f"{len(fonts)} files in brand/fonts")
    # resources: memory decides how fast renders go on this Mac (see sgv/lock.py and motion.concurrency)
    total = _total_memory_gb()
    free = motion.available_memory_gb()
    line(free >= 2, "free memory", f"{free:.1f} GB of {total:.0f} GB — graphics render {motion.concurrency()} frames at once"
         + ("" if free >= 2 else "; quit heavy apps (Docker, browsers) before a final render"), required=False)
    vm = subprocess.run(["pgrep", "-f", "com.apple.Virtualization.VirtualMachine"], capture_output=True).returncode == 0
    line(not vm, "no virtual machine running", "Docker or another VM is holding memory; quit it while rendering" if vm
         else "", required=False)
    held = lock.LOCK.exists() and lock.LOCK.read_text().strip()
    line(not held, "render queue", f"busy: {held}" if held else "idle", required=False)
    print("\nReady." if ok else "\nSome required pieces are missing — run setup/macos.sh.")
    return 0 if ok else 1


def _total_memory_gb() -> float:
    try:
        if ff.IS_MAC:
            return int(subprocess.run(["sysctl", "-n", "hw.memsize"], capture_output=True, text=True).stdout) / 2**30
        return os.sysconf("SC_PAGE_SIZE") * os.sysconf("SC_PHYS_PAGES") / 2**30
    except (ValueError, OSError):
        return 0.0
