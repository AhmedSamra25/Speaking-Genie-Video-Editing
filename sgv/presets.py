"""Delivery presets. Each one fixes size, codec, bitrate and loudness for a destination."""

PRESETS = {
    "youtube-1080p": {"w": 1920, "h": 1080, "codec": "h264", "bitrate": "12M", "audio": "320k", "lufs": -14,
                      "about": "YouTube / website hero, 16:9 1080p H.264"},
    "youtube-4k": {"w": 3840, "h": 2160, "codec": "hevc", "bitrate": "40M", "audio": "320k", "lufs": -14,
                   "about": "YouTube 4K, 16:9 HEVC (VideoToolbox on Apple Silicon)"},
    "linkedin-1080p": {"w": 1920, "h": 1080, "codec": "h264", "bitrate": "8M", "audio": "192k", "lufs": -14,
                       "about": "LinkedIn feed, 16:9 1080p"},
    "reels-1080x1920": {"w": 1080, "h": 1920, "codec": "h264", "bitrate": "10M", "audio": "256k", "lufs": -14,
                        "about": "Instagram Reels / TikTok / YouTube Shorts, 9:16"},
    "square-1080": {"w": 1080, "h": 1080, "codec": "h264", "bitrate": "8M", "audio": "256k", "lufs": -14,
                    "about": "Instagram / LinkedIn feed, 1:1"},
    "portrait-1080x1350": {"w": 1080, "h": 1350, "codec": "h264", "bitrate": "8M", "audio": "256k", "lufs": -14,
                           "about": "Instagram / LinkedIn feed, 4:5"},
    "web-720p": {"w": 1280, "h": 720, "codec": "h264", "bitrate": "3M", "audio": "128k", "lufs": -16,
                 "about": "Small embed for the product / help center, 16:9 720p"},
    "master-prores": {"w": 1920, "h": 1080, "codec": "prores", "bitrate": "0M", "audio": "pcm", "lufs": -14, "ext": "mov",
                      "about": "ProRes 422 HQ master for archive or Final Cut / DaVinci hand-off"},
    "draft": {"w": 960, "h": 540, "codec": "h264", "bitrate": "2M", "audio": "128k", "lufs": -14, "draft": True,
              "about": "Fast low-res review cut (16:9). Aspect follows the project canvas."},
}


def get(name: str) -> dict:
    if name not in PRESETS:
        raise SystemExit(f"Unknown preset '{name}'. Available: {', '.join(PRESETS)}")
    return {"name": name, "ext": "mp4", **PRESETS[name]}


def aspect(p: dict) -> str:
    from math import gcd
    g = gcd(p["w"], p["h"])
    return f"{p['w'] // g}:{p['h'] // g}"
