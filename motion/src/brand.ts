import tokens from "../../brand/tokens.json";

export type Theme = "light" | "dark";
export type Lang = "en" | "ar";
/** Which design system draws the graphic: the product's Platform look, or the Enablement (marketing) look. */
export type Look = "platform" | "enablement";
/** Enablement audience: individual = learners on social (green, closes on the store badges);
 * business = centre owners and corporates on LinkedIn and the website (orange, closes on a conversation). */
export type Track = "individual" | "business";
export type Ground = "dome" | "flat" | "deep";

export const brand = tokens;

export const colors = (theme: Theme) => tokens.themes[theme];

export const fonts = {
  sans: `'${tokens.fonts.sans}', system-ui, sans-serif`,
  arabic: `'${tokens.fonts.arabic}', system-ui, sans-serif`,
  mono: `'${tokens.fonts.mono}', ui-monospace, monospace`,
  // Enablement: Latin runs in Poppins/Inter, Arabic glyphs fall through to Cairo (neither Latin face has Arabic).
  display: `'${tokens.enablement.fonts.display}', '${tokens.enablement.fonts.arabic}', sans-serif`,
  body: `'${tokens.enablement.fonts.body}', '${tokens.enablement.fonts.arabic}', sans-serif`,
};

/** Shared props every composition receives from sgv (or Studio defaults). */
export type BaseProps = {
  width: number;
  height: number;
  fps: number;
  duration: number;
  theme: Theme;
  lang: Lang;
  /** Default "platform". */
  look?: Look;
  /** Enablement look only. Default "individual". */
  track?: Track;
  /** Enablement look only: the purple ground. Default "dome". */
  ground?: Ground;
  /** 2.5D parallax travel between the layers (dome, screen, text, capsule): 1 = default, 0 = flat.
   * Default 1 in the Enablement look, 0 in the Platform look. */
  parallax?: number;
};

export const baseDefaults: BaseProps = {
  width: 1920,
  height: 1080,
  fps: 30,
  duration: 4,
  theme: "light",
  lang: "en",
};

/** Scale factor: design sizes are authored for a 1080px short edge. */
export const scaleOf = (p: { width: number; height: number }) => Math.min(p.width, p.height) / 1080;

export const isPortrait = (p: { width: number; height: number }) => p.height > p.width * 1.2;

export const isEnablement = (p: { look?: Look }) => p.look === "enablement";

/** Text styles that switch family, line-height and tracking for Arabic. The Enablement look sets body text
 * in Inter (Latin) and Cairo (Arabic). */
export const textStyle = (lang: Lang, look: Look = "platform") =>
  lang === "ar"
    ? { fontFamily: look === "enablement" ? fonts.body : fonts.arabic, lineHeight: 1.7, letterSpacing: 0, direction: "rtl" as const }
    : { fontFamily: look === "enablement" ? fonts.body : fonts.sans, lineHeight: 1.15, direction: "ltr" as const };

/** A token hex colour at `a` opacity (for a highlight marker behind text). */
export const alpha = (hex: string, a: number) => {
  const n = parseInt(hex.replace("#", ""), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};

/** The highlight marker's colour behind a key word: lilac on light, deep purple on dark, and on the Enablement
 * purple a white tint like the capsule's fill (the track accent stays for the phrase colour, one accent a frame). */
export const markerColor = (p: { theme: Theme; look?: Look }) =>
  p.look === "enablement"
    ? alpha(tokens.enablement.ink, 0.2)
    : p.theme === "dark"
    ? tokens.purple["700"]
    : tokens.purple["200"];

/** Which digits a counter uses: "latin" (default, 0–9) or "arabic" (Arabic-Indic ٠–٩, Arabic videos only). */
export type Digits = "latin" | "arabic";

/** A number with grouping, in Latin or (for an Arabic video that asks for it) Arabic-Indic digits. */
export const formatNumber = (v: number, decimals: number, lang: Lang, digits: Digits = "latin") =>
  new Intl.NumberFormat(lang === "ar" && digits === "arabic" ? "ar-EG" : "en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(v);

/** A prefix or suffix in the same digits: % becomes ٪ next to Arabic-Indic digits. */
export const localAffix = (a: string, lang: Lang, digits: Digits = "latin") =>
  lang === "ar" && digits === "arabic" ? a.replace(/%/g, "٪").replace(/[0-9]/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]) : a;
