import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { BaseProps, Digits, alpha, brand, colors, fonts, formatNumber, isEnablement, isPortrait, localAffix, scaleOf } from "../brand";
import { FadeProps, enter, enterClip, progress, wipe } from "../anim";
import { Bars, LineChart, Ring } from "../components/Charts";
import { Capsule, DEPTH, en, kicker, trackOf, useDepth } from "../components/Enablement";
import { Stage } from "../components/Stage";
import { Window } from "../components/Window";

export type StatCardProps = BaseProps &
  FadeProps & {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  delta?: string;
  deltaTone?: "success" | "danger" | "neutral";
  caption?: string;
  /** Frames before the number starts counting (e.g. after a zoom transition has landed). */
  countDelay?: number;
  /** Put the label under the number (reads "58% من طلاب المجموعة"). Default false: label above. */
  labelBelow?: boolean;
  /** Enablement look: the one phrase in a capsule under the card (the number's punchline). */
  capsule?: string;
  /** Arabic videos: "arabic" counts in Arabic-Indic digits (٥٨٪). Default "latin". */
  digits?: Digits;
  /** A chart that draws on with the count: "ring" (the number sits in a ring filled to value / max), "line"
   * or "bars" (of `series`, under the number). */
  chart?: "ring" | "line" | "bars";
  /** Ring only: the value of a full circle (default 100). */
  max?: number;
  /** Line and bars: the values in time order; the last one is the result. */
  series?: number[];
};

/** One big metric that counts up inside a window card, with a delta and a caption. */
export const StatCard: React.FC<StatCardProps> = (p) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const s = scaleOf(p);
  const c = colors(p.theme);
  const ar = p.lang === "ar";
  const portrait = isPortrait(p);
  // Vertical phones: the card is the whole frame's message: number 286 px, label 48 px, caption 40 px at 1080.
  const f = portrait ? 1.7 : 1;
  // In a cut sequence (enterFade false) everything is on screen from frame 0; the number still counts up.
  const sub = (delay: number) =>
    p.enterFade === false ? enterClip(frame, durationInFrames, 0, s, { enterFade: false, exitFade: false }, false) : enter(frame, durationInFrames, delay, s, false);
  // The figure keeps one line: a long final value ("150,000 EGP") steps down to fit the card (~0.62 em per glyph).
  const fmt = (v: number) => formatNumber(v, p.decimals ?? 0, p.lang, p.digits);
  const prefix = localAffix(p.prefix ?? "", p.lang, p.digits);
  const suffix = localAffix(p.suffix ?? "", p.lang, p.digits);
  const finalText = `${prefix}${fmt(p.value)}${suffix}`;
  const inner = p.width - 160 * s - 2 * (portrait ? 56 : 88) * s;
  const ringSize = (portrait ? 600 : 380) * s;
  const numberSize = Math.min(168 * s * f, inner / (finalText.length * 0.62), p.chart === "ring" ? (ringSize * 0.62) / (finalText.length * 0.62) : Infinity);
  const countK = progress(frame, p.countDelay ?? (p.enterFade === false ? 0 : 8), Math.min(45, durationInFrames * 0.4));
  const shown = p.value * countK;
  // Arabic-Indic digits read right to left with their ٪; Latin figures stay left to right
  const numDir = p.lang === "ar" && p.digits === "arabic" ? "rtl" : "ltr";
  const tone =
    p.deltaTone === "danger" ? brand.status.danger : p.deltaTone === "neutral" ? c.ink2 : brand.status.success;
  const toneDark = p.deltaTone === "danger" ? "#F87171" : p.deltaTone === "neutral" ? c.ink2 : "#34D399";
  // Enablement: a glass panel on the purple ground, Poppins figures, the delta in the track accent.
  const enab = isEnablement(p);
  const t = trackOf(p);
  const deltaColor = enab ? (p.deltaTone === "neutral" ? t.inkMuted : t.phrase) : p.theme === "dark" ? toneDark : tone;
  const depth = useDepth(p);
  const chartColor = enab ? t.phrase : c.primary;
  const chartTrack = enab ? en.border : c.border;
  const labelEl = (
    <div
      style={{
        fontSize: (portrait ? 48 : brand.video.overlineSize) * s,
        fontWeight: 700,
        letterSpacing: ar ? 0 : "0.1em",
        textTransform: ar ? "none" : "uppercase",
        color: portrait ? c.ink2 : c.inkMuted,
        marginTop: p.labelBelow ? 12 * s : 0,
        ...(enab ? { ...kicker(p.lang, s, portrait ? 44 : 26, t.inkMuted), marginTop: p.labelBelow ? 12 * s : 0 } : {}),
      }}
    >
      {p.label}
    </div>
  );
  return (
    <Stage p={p} lockup>
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <Window
          theme={p.theme}
          s={s}
          style={{
            ...enterClip(frame, durationInFrames, 0, s, p),
            transform: [enterClip(frame, durationInFrames, 0, s, p).transform, depth(DEPTH.screen) ?? ""].join(" "),
            padding: portrait ? `${80 * s}px ${56 * s}px` : `${64 * s}px ${88 * s}px`,
            minWidth: (portrait ? 920 : 980) * s,
            maxWidth: p.width - 160 * s,
            textAlign: "center",
            ...(enab
              ? {
                  background: en.surface,
                  border: `${Math.max(1, s)}px solid ${en.border}`,
                  borderRadius: en.radius.panel * s,
                  backdropFilter: `blur(${6 * s}px)`,
                  boxShadow: `0 ${18 * s}px ${40 * s}px -${20 * s}px ${en.shadow}`,
                }
              : {}),
          }}
        >
          {p.labelBelow ? null : labelEl}
          {(() => {
            const num = (
          <div
            style={{
              fontSize: numberSize,
              fontWeight: enab ? 700 : 800,
              letterSpacing: enab ? "-0.035em" : "-0.03em",
              lineHeight: 1.1,
              marginTop: (p.labelBelow ? 0 : 16) * s,
              fontFamily: enab ? fonts.display : `'Plus Jakarta Sans', ${fonts.arabic}`,
              fontVariantNumeric: "tabular-nums",
              direction: numDir,
            }}
          >
            {prefix}
            {fmt(shown)}
            {suffix}
          </div>
            );
            if (p.chart !== "ring") return num;
            return (
              <div style={{ marginTop: 28 * s, marginBottom: 8 * s }}>
                <Ring size={ringSize} stroke={(portrait ? 24 : 18) * s} k={(countK * p.value) / (p.max ?? 100)} color={chartColor}
                  track={chartTrack}>
                  {num}
                </Ring>
              </div>
            );
          })()}
          {(p.chart === "line" || p.chart === "bars") && p.series?.length ? (
            <div style={{ marginTop: 32 * s, display: "flex", justifyContent: "center" }}>
              {p.chart === "line" ? (
                <LineChart series={p.series} width={Math.min(inner, (portrait ? 760 : 720) * s)} height={(portrait ? 260 : 170) * s}
                  stroke={(portrait ? 9 : 7) * s} k={countK} color={chartColor} track={chartTrack} />
              ) : (
                <Bars series={p.series} width={Math.min(inner, (portrait ? 720 : 620) * s)} height={(portrait ? 280 : 180) * s}
                  frame={frame} delay={p.countDelay ?? (p.enterFade === false ? 0 : 8)} color={chartColor}
                  rest={enab ? alpha(en.ink, 0.22) : c.primarySoft2} radius={10 * s} />
              )}
            </div>
          ) : null}
          {p.labelBelow ? labelEl : null}
          {p.delta ? (
            <div
              style={{
                ...sub(30),
                fontSize: 32 * s * f,
                fontWeight: 700,
                color: deltaColor,
                marginTop: 8 * s,
              }}
            >
              {p.delta}
            </div>
          ) : null}
          {p.caption ? (
            <div
              style={{
                ...sub(36),
                fontSize: (portrait ? 40 : 26) * s,
                lineHeight: portrait ? (ar ? 1.6 : 1.35) : undefined,
                fontWeight: 500,
                color: enab ? t.inkMuted : c.ink2,
                marginTop: 20 * s * f,
              }}
            >
              {p.caption}
            </div>
          ) : null}
        </Window>
        {enab && p.capsule ? (
          <div style={{ ...sub(42), marginTop: 48 * s, transform: [sub(42).transform, depth(DEPTH.capsule) ?? ""].join(" ") }}>
            <Capsule s={s} size={portrait ? 46 : 40} lang={p.lang} ink={t.phrase} style={p.enterFade === false ? {} : wipe(frame, 44, ar)}>
              {p.capsule}
            </Capsule>
          </div>
        ) : null}
      </AbsoluteFill>
    </Stage>
  );
};
