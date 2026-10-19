"""Real product screens from the design system's web-platform kit (brand/product-ui), captured with headless Chrome.

The kit is a working click-through of the platform. URL options pick what it shows:
#<screen> · ?theme=dark · ?lang=ar · ?state=empty|loading|blocked · ?flow=<key> · ?gtab=<tab> · ?persona=Teacher.
"""

from __future__ import annotations

import functools
import html
import os
import re
import subprocess
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qsl, quote, urlencode, urlsplit

from sgv import paths

KIT = paths.BRAND / "product-ui"
PLATFORM = KIT / "ui_kits" / "web-platform"
APP = "Speaking Genie Platform.dc.html"
OPTIONS = ("theme", "lang", "state", "flow", "gtab", "persona")


def _need_kit() -> None:
    if not (PLATFORM / APP).exists():
        raise SystemExit(f"Product UI kit not found at {PLATFORM.relative_to(paths.ROOT)} — install it from the design system "
                         "(see README → Product screens).")


def cards() -> list:
    """Every screen card in the kit: id, name, route and options, from screens/*.html."""
    _need_kit()
    out = []
    for f in sorted((PLATFORM / "screens").glob("*.html")):
        text = f.read_text(encoding="utf-8", errors="replace")
        name = re.search(r'name="([^"]*)"', text)
        src = re.search(r'<iframe[^>]+src="([^"]+)"', text)
        if not src or APP.replace(" ", "%20") not in src.group(1):
            continue
        u = urlsplit(html.unescape(src.group(1)))
        opts = {k: v for k, v in parse_qsl(u.query, keep_blank_values=True) if k in OPTIONS}
        out.append({"id": f.stem, "name": name.group(1) if name else f.stem, "route": u.fragment or "dashboard", "options": opts})
    return out


def _browser() -> str:
    if os.environ.get("SGV_BROWSER"):
        return os.environ["SGV_BROWSER"]
    found = sorted((paths.MOTION / "node_modules" / ".remotion" / "chrome-headless-shell").rglob("chrome-headless-shell"))
    found = [f for f in found if f.is_file() and os.access(f, os.X_OK)]
    if not found:
        raise SystemExit("Headless Chrome not found — render any motion graphic once (Remotion downloads it), or set SGV_BROWSER.")
    return str(found[0])


class _Quiet(SimpleHTTPRequestHandler):
    def log_message(self, *_args):
        pass


def capture(screen: str, out: Path, *, options: dict | None = None, size: str = "1440x900", scale: float = 2,
            wait_ms: int = 9000) -> Path:
    """Capture a screen card id (e.g. groupReport-ar) or a route (e.g. dashboard) to a PNG."""
    _need_kit()
    card = next((c for c in cards() if c["id"] == screen), None)
    route = card["route"] if card else screen
    opts = {**(card["options"] if card else {}), **{k: v for k, v in (options or {}).items() if v}}
    query = urlencode({"embed": "", **opts}).replace("embed=", "embed")
    w, h = (int(x) for x in size.split("x"))

    server = ThreadingHTTPServer(("127.0.0.1", 0), functools.partial(_Quiet, directory=str(KIT)))
    threading.Thread(target=server.serve_forever, daemon=True).start()
    try:
        url = (f"http://127.0.0.1:{server.server_port}/ui_kits/web-platform/{quote(APP)}?{query}#{route}")
        out.parent.mkdir(parents=True, exist_ok=True)
        cmd = [_browser(), "--headless", "--hide-scrollbars", "--no-first-run", "--disable-gpu-sandbox",
               f"--window-size={w},{h}", f"--force-device-scale-factor={scale}", f"--virtual-time-budget={wait_ms}",
               "--run-all-compositor-stages-before-draw", f"--screenshot={out}", url]
        proc = subprocess.run(cmd, capture_output=True, text=True, timeout=120)
        if proc.returncode != 0 or not out.exists():
            raise SystemExit(f"Screen capture failed for {screen}:\n{(proc.stderr or proc.stdout)[-1500:]}")
    finally:
        server.shutdown()
    return out
