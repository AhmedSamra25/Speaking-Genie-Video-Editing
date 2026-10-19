// Copies brand/fonts, brand/logos and brand/enablement/assets into public/brand so staticFile() can serve them.
import { cpSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const brand = join(here, "..", "..", "brand");
const out = join(here, "..", "public", "brand");
mkdirSync(out, { recursive: true });
cpSync(join(brand, "fonts"), join(out, "fonts"), { recursive: true, filter: (p) => !p.endsWith(".md") });
cpSync(join(brand, "logos"), join(out, "logos"), { recursive: true });
cpSync(join(brand, "enablement", "assets"), join(out, "enablement"), { recursive: true });
