import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { BaseProps, brand, colors, isPortrait, scaleOf } from "../brand";
import { FadeProps, enter, enterClip, progress } from "../anim";
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
  /** Put the label under the number (reads "58% من طلاب المجموعة"). Default false: label above. */
  labelBelow?: boolean;
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
  const shown = p.value * progress(frame, p.enterFade === false ? 0 : 8, Math.min(45, durationInFrames * 0.4));
  const tone =
    p.deltaTone === "danger" ? brand.status.danger : p.deltaTone === "neutral" ? c.ink2 : brand.status.success;
  const toneDark = p.deltaTone === "danger" ? "#F87171" : p.deltaTone === "neutral" ? c.ink2 : "#34D399";
  const labelEl = (
    <div
      style={{
        fontSize: (portrait ? 48 : brand.video.overlineSize) * s,
        fontWeight: 700,
        letterSpacing: ar ? 0 : "0.1em",
        textTransform: ar ? "none" : "uppercase",
        color: portrait ? c.ink2 : c.inkMuted,
        marginTop: p.labelBelow ? 12 * s : 0,
      }}
    >
      {p.label}
    </div>
  );
  return (
    <Stage p={p}>
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        <Window
          theme={p.theme}
          s={s}
          style={{
            ...enterClip(frame, durationInFrames, 0, s, p),
            padding: portrait ? `${80 * s}px ${56 * s}px` : `${64 * s}px ${88 * s}px`,
            minWidth: (portrait ? 920 : 980) * s,
            maxWidth: p.width - 160 * s,
            textAlign: "center",
          }}
        >
          {p.labelBelow ? null : labelEl}
          <div
            style={{
              fontSize: 168 * s * f,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginTop: (p.labelBelow ? 0 : 16) * s,
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontVariantNumeric: "tabular-nums",
              direction: "ltr",
            }}
          >
            {p.prefix ?? ""}
            {shown.toLocaleString("en-US", {
              minimumFractionDigits: p.decimals ?? 0,
              maximumFractionDigits: p.decimals ?? 0,
            })}
            {p.suffix ?? ""}
          </div>
          {p.labelBelow ? labelEl : null}
          {p.delta ? (
            <div
              style={{
                ...sub(30),
                fontSize: 32 * s * f,
                fontWeight: 700,
                color: p.theme === "dark" ? toneDark : tone,
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
                color: c.ink2,
                marginTop: 20 * s * f,
              }}
            >
              {p.caption}
            </div>
          ) : null}
        </Window>
      </AbsoluteFill>
    </Stage>
  );
};
