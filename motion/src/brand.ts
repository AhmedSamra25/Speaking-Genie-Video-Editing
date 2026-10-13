import tokens from "../../brand/tokens.json";

export type Theme = "light" | "dark";
export type Lang = "en" | "ar";

export const brand = tokens;

export const colors = (theme: Theme) => tokens.themes[theme];

export const fonts = {
  sans: `'${tokens.fonts.sans}', system-ui, sans-serif`,
  arabic: `'${tokens.fonts.arabic}', system-ui, sans-serif`,
  mono: `'${tokens.fonts.mono}', ui-monospace, monospace`,
};

/** Shared props every composition receives from sgv (or Studio defaults). */
export type BaseProps = {
  width: number;
  height: number;
  fps: number;
  duration: number;
  theme: Theme;
  lang: Lang;
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

/** Text styles that switch family, line-height and tracking for Arabic. */
export const textStyle = (lang: Lang) =>
  lang === "ar"
    ? { fontFamily: fonts.arabic, lineHeight: 1.7, letterSpacing: 0, direction: "rtl" as const }
    : { fontFamily: fonts.sans, lineHeight: 1.15, direction: "ltr" as const };
