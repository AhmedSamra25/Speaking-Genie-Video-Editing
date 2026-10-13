"""Well-known locations inside the repository."""

import json
import os
from functools import lru_cache
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BRAND = ROOT / "brand"
FONTS = BRAND / "fonts"
LOGOS = BRAND / "logos"
MOTION = ROOT / "motion"
PROJECTS = ROOT / "projects"
TEMPLATE = PROJECTS / "_template"
MODELS = Path(os.environ.get("SGV_MODELS", ROOT / "models"))


@lru_cache(maxsize=1)
def tokens() -> dict:
    return json.loads((BRAND / "tokens.json").read_text())
