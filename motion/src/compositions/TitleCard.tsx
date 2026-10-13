import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { BaseProps, brand, colors, isPortrait, scaleOf } from "../brand";
import { enter } from "../anim";
import { Stage } from "../components/Stage";

export type TitleCardProps = BaseProps & { overline?: string; title: string; subtitle?: string };

/** Chapter / section title: purple overline, 76px title, muted subtitle. */
export const TitleCard: React.FC<TitleCardProps> = (p) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const s = scaleOf(p);
  const c = colors(p.theme);
  const portrait = isPortrait(p);
  const ar = p.lang === "ar";
  const margin = (portrait ? 96 : 160) * s;
  return (
    <Stage p={p}>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: portrait ? "center" : "flex-start",
          textAlign: portrait ? "center" : "start",
          padding: `0 ${margin}px`,
        }}
      >
        {p.overline ? (
          <div
            style={{
              ...enter(frame, durationInFrames, 2, s),
              fontSize: brand.video.overlineSize * s,
              fontWeight: 700,
              letterSpacing: ar ? 0 : "0.1em",
              textTransform: ar ? "none" : "uppercase",
              color: c.link,
              marginBottom: 24 * s,
            }}
          >
            {p.overline}
          </div>
        ) : null}
        <div
          style={{
            ...enter(frame, durationInFrames, 6, s),
            fontSize: brand.video.heroSize * s * (portrait ? 0.95 : 1),
            fontWeight: ar ? 700 : 800,
            letterSpacing: ar ? 0 : "-0.02em",
            lineHeight: ar ? 1.5 : 1.08,
            maxWidth: portrait ? "100%" : 1400 * s,
          }}
        >
          {p.title}
        </div>
        {p.subtitle ? (
          <div
            style={{
              ...enter(frame, durationInFrames, 12, s),
              fontSize: brand.video.bodySize * s,
              fontWeight: 500,
              color: c.ink2,
              marginTop: 28 * s,
              maxWidth: portrait ? "100%" : 1100 * s,
              lineHeight: ar ? 1.7 : 1.4,
            }}
          >
            {p.subtitle}
          </div>
        ) : null}
      </AbsoluteFill>
    </Stage>
  );
};
