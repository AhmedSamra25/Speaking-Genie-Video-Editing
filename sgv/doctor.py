"""`sgv doctor` — check that this machine is ready to edit."""

import platform
import shutil
import subprocess

from sgv import captions, ff, paths


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
    print("\nReady." if ok else "\nSome required pieces are missing — run setup/macos.sh.")
    return 0 if ok else 1
