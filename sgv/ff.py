"""Thin helpers around ffmpeg / ffprobe, including Apple VideoToolbox detection."""

import json
import platform
import shlex
import shutil
import subprocess
import sys
from functools import lru_cache
from pathlib import Path

IS_MAC = sys.platform == "darwin"
IS_APPLE_SILICON = IS_MAC and platform.machine() == "arm64"

VIDEO_EXTS = {".mp4", ".mov", ".m4v", ".mkv", ".avi", ".mts", ".m2ts", ".webm", ".mxf", ".3gp"}
AUDIO_EXTS = {".wav", ".mp3", ".m4a", ".aac", ".aif", ".aiff", ".flac", ".ogg", ".caf"}
IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".heic", ".webp", ".tif", ".tiff", ".bmp"}

VERBOSE = False


class FFError(RuntimeError):
    pass


def require(tool: str) -> str:
    path = shutil.which(tool)
    if not path:
        raise FFError(f"{tool} not found on PATH — run setup/macos.sh (or `brew install ffmpeg`).")
    return path


def run(args: list, *, capture: bool = False, check: bool = True) -> subprocess.CompletedProcess:
    args = [str(a) for a in args]
    if args[0] == "ffmpeg":
        args[1:1] = ["-hide_banner", "-nostdin", "-y", "-loglevel", "info" if VERBOSE else "error", "-stats" if VERBOSE else "-nostats"]
    if VERBOSE:
        print("$ " + shlex.join(args), file=sys.stderr)
    proc = subprocess.run(args, capture_output=capture or not VERBOSE, text=True)
    if check and proc.returncode != 0:
        tail = (proc.stderr or "").strip().splitlines()[-25:]
        raise FFError(f"{args[0]} failed ({proc.returncode}):\n" + "\n".join(tail) + f"\n\ncommand: {shlex.join(args)}")
    return proc


@lru_cache(maxsize=None)
def probe(path: str) -> dict:
    out = run(["ffprobe", "-v", "error", "-print_format", "json", "-show_format", "-show_streams", path], capture=True).stdout
    data = json.loads(out)
    info = {"path": path, "duration": float(data.get("format", {}).get("duration", 0) or 0), "video": None, "audio": None}
    for s in data.get("streams", []):
        if s.get("codec_type") == "video" and info["video"] is None and s.get("disposition", {}).get("attached_pic") != 1:
            w, h = int(s.get("width", 0)), int(s.get("height", 0))
            rot = _rotation(s)
            if rot in (90, 270):
                w, h = h, w
            info["video"] = {
                "codec": s.get("codec_name"),
                "width": w,
                "height": h,
                "fps": _rate(s.get("avg_frame_rate") or s.get("r_frame_rate")),
                "pix_fmt": s.get("pix_fmt"),
                "rotation": rot,
                "hdr": s.get("color_transfer") in ("smpte2084", "arib-std-b67"),
            }
        elif s.get("codec_type") == "audio" and info["audio"] is None:
            info["audio"] = {"codec": s.get("codec_name"), "channels": s.get("channels"), "rate": int(s.get("sample_rate", 0) or 0)}
    return info


def _rate(r: str) -> float:
    try:
        n, d = r.split("/")
        return round(float(n) / float(d), 3) if float(d) else 0.0
    except (ValueError, AttributeError):
        return 0.0


def _rotation(stream: dict) -> int:
    for sd in stream.get("side_data_list", []) or []:
        if "rotation" in sd:
            return abs(int(sd["rotation"])) % 360
    tag = stream.get("tags", {}).get("rotate")
    return abs(int(tag)) % 360 if tag else 0


def kind(path: Path) -> str:
    ext = path.suffix.lower()
    if ext in VIDEO_EXTS:
        return "video"
    if ext in AUDIO_EXTS:
        return "audio"
    if ext in IMAGE_EXTS:
        return "image"
    return "other"


@lru_cache(maxsize=1)
def encoders() -> set:
    out = run(["ffmpeg", "-hide_banner", "-encoders"], capture=True, check=False).stdout
    names = set()
    for line in out.splitlines():
        parts = line.split()
        if len(parts) >= 2 and len(parts[0]) == 6 and parts[0][0] in "VAS":
            names.add(parts[1])
    return names


@lru_cache(maxsize=1)
def filters() -> set:
    out = run(["ffmpeg", "-hide_banner", "-filters"], capture=True, check=False).stdout
    return {line.split()[1] for line in out.splitlines() if len(line.split()) >= 3 and line.startswith(" ")}


def hw() -> bool:
    """True when Apple VideoToolbox hardware encoders are usable."""
    return IS_MAC and "h264_videotoolbox" in encoders()


def decode_args(path: Path) -> list:
    """Hardware decode on macOS for video inputs (frames are copied back for filtering)."""
    return ["-hwaccel", "videotoolbox"] if hw() and kind(path) == "video" else []


def video_codec_args(codec: str, bitrate: str, *, draft: bool = False, alpha: bool = False) -> list:
    """Encoder flags for h264 | hevc | prores, picking VideoToolbox on a Mac."""
    if codec == "prores":
        if alpha:
            return ["-c:v", "prores_ks", "-profile:v", "4444", "-pix_fmt", "yuva444p10le", "-alpha_bits", "16"]
        if hw() and "prores_videotoolbox" in encoders():
            return ["-c:v", "prores_videotoolbox", "-profile:v", "hq"]
        return ["-c:v", "prores_ks", "-profile:v", "3", "-pix_fmt", "yuv422p10le"]
    mbps = float(bitrate.rstrip("Mm"))
    maxrate, bufsize = f"{mbps * 1.5:g}M", f"{mbps * 2:g}M"
    if codec == "hevc":
        if hw():
            return ["-c:v", "hevc_videotoolbox", "-b:v", bitrate, "-maxrate", maxrate, "-tag:v", "hvc1", "-pix_fmt", "yuv420p"]
        return ["-c:v", "libx265", "-preset", "ultrafast" if draft else "medium", "-crf", "22", "-tag:v", "hvc1", "-pix_fmt", "yuv420p",
                "-x265-params", "log-level=error"]
    if hw():
        return ["-c:v", "h264_videotoolbox", "-b:v", bitrate, "-maxrate", maxrate, "-bufsize", bufsize, "-profile:v", "high", "-pix_fmt", "yuv420p"]
    return ["-c:v", "libx264", "-preset", "ultrafast" if draft else "medium", "-crf", "23" if draft else "18",
            "-maxrate", maxrate, "-bufsize", bufsize, "-profile:v", "high", "-pix_fmt", "yuv420p"]


def intermediate_args(draft: bool = False) -> list:
    """Near-lossless mezzanine for timeline segments (fast to encode, fast to decode)."""
    if hw():
        return ["-c:v", "h264_videotoolbox", "-b:v", "20M" if draft else "60M", "-pix_fmt", "yuv420p"]
    return ["-c:v", "libx264", "-preset", "ultrafast" if draft else "veryfast", "-crf", "20" if draft else "12", "-pix_fmt", "yuv420p"]


def escape_filter_path(p: Path) -> str:
    """Escape a path for use inside an ffmpeg filter argument (subtitles=, movie=, ...)."""
    s = str(p)
    for ch in ("\\", ":", "'", ",", "[", "]", ";"):
        s = s.replace(ch, "\\" + ch)
    return s
