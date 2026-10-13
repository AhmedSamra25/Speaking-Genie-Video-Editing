import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { BaseProps, brand, colors, isPortrait, scaleOf } from "../brand";
import { enter, progress } from "../anim";
import { Stage } from "../components/Stage";
import { Window } from "../components/Window";

export type StatCardProps = BaseProps & {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  delta?: string;
  deltaTone?: "success" | "danger" | "neutral";
  caption?: string;
};

/** One big metric that counts up inside a window card, with a delta and a caption. */
export const StatCard: React.FC<StatCardProps> = (p) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const s = scaleOf(p);
  const c = colors(p.theme);
  const ar = p.lang === "ar";
  const shown = p.value * progress(frame, 8, Math.min(45, durationInFrames * 0.4));
  const tone =
    p.deltaTone === "danger" ? brand.status.danger : p.deltaTone === "neutral" ? c.ink2 : brand.status.success;
  const toneDark = p.deltaTone === "danger" ? "#F87171" : p.deltaTone === "neutral" ? c.ink2 : "#34D399";
  return (
    <Stage p={p}>
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        <Window
          theme={p.theme}
          s={s}
          style={{
            ...enter(frame, durationInFrames, 0, s),
            padding: `${64 * s}px ${88 * s}px`,
            minWidth: (isPortrait(p) ? 860 : 980) * s,
            maxWidth: p.width - 160 * s,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: brand.video.overlineSize * s,
              fontWeight: 700,
              letterSpacing: ar ? 0 : "0.1em",
              textTransform: ar ? "none" : "uppercase",
              color: c.inkMuted,
            }}
          >
            {p.label}
          </div>
          <div
            style={{
              fontSize: 168 * s,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginTop: 16 * s,
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
          {p.delta ? (
            <div
              style={{
                ...enter(frame, durationInFrames, 30, s, false),
                fontSize: 32 * s,
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
                ...enter(frame, durationInFrames, 36, s, false),
                fontSize: 26 * s,
                fontWeight: 500,
                color: c.ink2,
                marginTop: 20 * s,
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
