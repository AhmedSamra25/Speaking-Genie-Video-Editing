import React from "react";
import { Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { BaseProps, Lang, Track, brand, fonts, isEnablement, isPortrait, scaleOf } from "../brand";
import { parallax } from "../anim";

/** The Enablement Design System (marketing) look: purple grounds, one dome, one capsule, one track accent. */
export const en = brand.enablement;

/** Accent, phrase ink and muted inks for the track (individual = green, business = orange). */
export const trackOf = (p: { track?: Track }) => en.tracks[p.track ?? "individual"];

/** Display type: Poppins 700 tight for Latin, Cairo with Arabic leading and no tracking. */
export const display = (lang: Lang, weight = 700): React.CSSProperties => ({
  fontFamily: fonts.display,
  fontWeight: weight,
  letterSpacing: lang === "ar" ? 0 : "-0.02em",
  lineHeight: lang === "ar" ? 1.42 : 1.1,
});

/** The 0.1em uppercase kicker (Latin only; Arabic is never uppercased or tracked). */
export const kicker = (lang: Lang, s: number, size: number, color: string): React.CSSProperties => ({
  fontFamily: fonts.body,
  fontSize: size * s,
  fontWeight: lang === "ar" ? 700 : 600,
  letterSpacing: lang === "ar" ? 0 : "0.1em",
  textTransform: lang === "ar" ? "none" : "uppercase",
  color,
});

/** 2.5D depth for a layer: the Enablement look slides its layers at different depths (dome far, screen and
 * headline in the middle, capsule nearest), so a still card reads as a slow camera move. `parallax` 0 turns it
 * off; the Platform look is flat unless `parallax` is set. Returns depth (0–1) → CSS transform. */
export const useDepth = (p: BaseProps) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();
  const amount = p.parallax ?? (isEnablement(p) ? 1 : 0);
  if (!amount) return (_depth: number) => undefined;
  return parallax(frame, durationInFrames, fps, scaleOf(p), amount, p.lang === "ar");
};

/** Depths of the Enablement layers. */
export const DEPTH = { dome: 0.25, screen: 0.55, text: 0.7, capsule: 1 };

/** The dome: a white circle at 8% hung off the top edge, centred on the lockup. It drifts a few pixels so no
 * frame reads as a freeze, and sits at the far depth of the parallax. One per frame, never tinted, never bordered. */
export const Dome: React.FC<{ p: BaseProps }> = ({ p }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const depth = useDepth(p)(DEPTH.dome);
  const s = Math.min(p.width, p.height) / 1080;
  const o = isPortrait(p) || p.height >= p.width ? "portrait" : "landscape";
  const d = p.width * en.dome.diameter[o];
  const bottom = p.height * en.dome.depth[o];
  const t = interpolate(frame, [0, durationInFrames], [0, 1]);
  return (
    <div
      style={{
        position: "absolute",
        left: (p.width - d) / 2,
        top: bottom - d,
        width: d,
        height: d,
        borderRadius: "50%",
        background: en.dome.color,
        opacity: en.dome.opacity,
        transform: `translate(${t * en.dome.drift * s}px, ${-t * en.dome.drift * 0.7 * s}px) ${depth ?? ""}`,
      }}
    />
  );
};

/** The purple ground for the frame: dome (default), flat or deep. */
export const groundOf = (p: BaseProps) => en.grounds[p.ground ?? "dome"];

/** White lockup, the only logo allowed on purple. Never mirrored, sized by height. */
export const Lockup: React.FC<{ height: number; style?: React.CSSProperties }> = ({ height, style }) => (
  <Img src={staticFile(`brand/enablement/${en.logo}`)} style={{ height, width: "auto", display: "block", ...style }} />
);

/** The capsule: a hairline white outline (55%) over a 10% white fill, around the one phrase that must be read.
 * Ink is the track accent when it is the punchline, white when it is an instruction. Exactly one per frame. */
export const Capsule: React.FC<{
  s: number;
  size: number;
  ink: string;
  lang: Lang;
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({ s, size, ink, lang, style, children }) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      border: `${1.5 * s}px solid ${en.capsule.stroke}`,
      background: en.capsule.fill,
      backdropFilter: `blur(${en.capsule.blur * s}px)`,
      borderRadius: 999,
      padding: `${0.42 * size * s}px ${1.05 * size * s}px`,
      fontFamily: fonts.display,
      fontSize: size * s,
      fontWeight: 700,
      letterSpacing: lang === "ar" ? 0 : "-0.01em",
      lineHeight: lang === "ar" ? 1.4 : 1.2,
      color: ink,
      ...style,
    }}
  >
    {children}
  </div>
);

/** Sets `text` with the first occurrence of `phrase` in the track's phrase colour. */
export const Phrase: React.FC<{ text: string; phrase?: string; color: string }> = ({ text, phrase, color }) => {
  const i = phrase ? text.indexOf(phrase) : -1;
  if (!phrase || i < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <span style={{ color }}>{phrase}</span>
      {text.slice(i + phrase.length)}
    </>
  );
};

/** App Store and Google Play badges, individual track only. Never mirrored: App Store first in both languages. */
export const StoreBadges: React.FC<{ lang: Lang; height: number; gap: number; style?: React.CSSProperties }> = ({
  lang,
  height,
  gap,
  style,
}) => {
  const b = en.badges[lang];
  return (
    <div style={{ display: "flex", gap, direction: "ltr", justifyContent: "center", ...style }}>
      <Img src={staticFile(`brand/enablement/${b.appStore}`)} style={{ height, width: "auto", display: "block" }} />
      <Img src={staticFile(`brand/enablement/${b.googlePlay}`)} style={{ height, width: "auto", display: "block" }} />
    </div>
  );
};
