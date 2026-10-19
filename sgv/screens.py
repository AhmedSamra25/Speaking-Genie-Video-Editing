"""Real product screens from the design system kits, captured with headless Chrome.

Two kits, each a working click-through of the product:
- web    (brand/product-ui): the teacher/admin web platform. #<screen> · ?theme=dark · ?lang=ar ·
         ?state=empty|loading|blocked · ?flow=<key> · ?gtab=<tab> · ?persona=Teacher.
- mobile (brand/product-ui-mobile): the learner mobile app. ?c=<screen file> · &screen= · &state= ·
         &status=listening|speaking|thinking|paused · &dir=rtl · &task=1 · &eligible=1 · &streak=1 · &sth=1.
"""

from __future__ import annotations

import functools
import os
import re
import subprocess
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qsl, quote, urlencode, urlsplit

from sgv import paths

KITS = {
    "web": {"root": paths.BRAND / "product-ui", "app_dir": "ui_kits/web-platform", "app": "Speaking Genie Platform.dc.html",
            "cards": "screens", "options": ("theme", "lang", "state", "flow", "gtab", "persona"),
            "size": "1440x900", "scale": 2, "wait": 1500, "base": {"embed": ""}},
    "mobile": {"root": paths.BRAND / "product-ui-mobile", "app_dir": "ui_kits/mobile-app", "app": "Mobile Screen.dc.html",
               "cards": "cards", "options": ("c", "screen", "state", "status", "dir", "task", "eligible", "streak", "sth"),
               "size": "430x884", "scale": 3, "wait": 2500, "base": {}},  # wait = settle time after the network is idle
}
OPTIONS = tuple(dict.fromkeys(o for k in KITS.values() for o in k["options"]))  # every option any kit accepts


def _installed(kit: str) -> bool:
    k = KITS[kit]
    return (k["root"] / k["app_dir"] / k["app"]).exists()


def _need(kit: str) -> None:
    if not _installed(kit):
        k = KITS[kit]
        raise SystemExit(f"The {kit} kit isn't installed ({(k['root'] / k['app_dir']).relative_to(paths.ROOT)}). "
                         "Install it from the design system (see README → Product screens).")


def cards(kit: str | None = None) -> list:
    """Every screen card: kit, id, name, route and options, read from the kit's card files."""
    out = []
    for name in ([kit] if kit else [k for k in KITS if _installed(k)]):
        _need(name)
        k = KITS[name]
        for f in sorted((k["root"] / k["app_dir"] / k["cards"]).glob("*.html")):
            text = f.read_text(encoding="utf-8", errors="replace")
            label = re.search(r'name="([^"]*)"', text)
            src = re.search(r'<iframe[^>]+src="([^"]+)"', text)
            if not src or k["app"].replace(" ", "%20") not in src.group(1):
                continue
            u = urlsplit(src.group(1).replace("&amp;", "&"))  # not html.unescape: it reads "&gtab" as "&gt;ab"
            opts = {a: b for a, b in parse_qsl(u.query, keep_blank_values=True) if a in k["options"]}
            out.append({"kit": name, "id": f.stem, "name": label.group(1) if label else f.stem,
                        "route": u.fragment, "options": opts})
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


def capture(screen: str, out: Path, *, kit: str | None = None, options: dict | None = None, size: str | None = None,
            scale: float | None = None, wait_ms: int | None = None) -> Path:
    """Capture a screen card id (e.g. groupReport-ar, 17-call-speaking) or, with a kit, a route
    (web: dashboard; mobile: a screen file name such as "AI Partners Screens") to a PNG."""
    card = next((c for c in cards() if c["id"] == screen and (kit is None or c["kit"] == kit)), None)
    kit = card["kit"] if card else (kit or "web")
    _need(kit)
    k = KITS[kit]
    opts = {**(card["options"] if card else {}), **{a: v for a, v in (options or {}).items() if v and a in k["options"]}}
    if kit == "web":
        route = card["route"] if card and card["route"] else (screen if not card else "dashboard")
    else:
        route = ""
        opts.setdefault("c", screen if not card else "Home Screen")
    query = urlencode({**k["base"], **opts}).replace("embed=", "embed")
    w, h = (int(x) for x in (size or k["size"]).split("x"))

    server = ThreadingHTTPServer(("127.0.0.1", 0), functools.partial(_Quiet, directory=str(k["root"])))
    threading.Thread(target=server.serve_forever, daemon=True).start()
    try:
        url = f"http://127.0.0.1:{server.server_port}/{k['app_dir']}/{quote(k['app'])}?{query}" + (f"#{route}" if route else "")
        out.parent.mkdir(parents=True, exist_ok=True)
        cmd = ["node", str(Path(__file__).with_name("capture.mjs")), _browser(), url, str(out), str(w), str(h),
               str(scale or k["scale"]), str(wait_ms or k["wait"])]
        proc = subprocess.run(cmd, capture_output=True, text=True, timeout=120)
        if proc.returncode != 0 or not out.exists():
            raise SystemExit(f"Screen capture failed for {screen}:\n{(proc.stderr or proc.stdout)[-1500:]}")
    finally:
        server.shutdown()
    return out
