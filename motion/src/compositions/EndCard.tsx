import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { BaseProps, colors, scaleOf } from "../brand";
import { enter } from "../anim";
import { Logo } from "../components/Logo";
import { Stage } from "../components/Stage";

export type EndCardProps = BaseProps & { headline: string; subline?: string; url?: string };

/** Closing card: logo, call to action, URL. Holds to the last frame (no exit fade). */
export const EndCard: React.FC<EndCardProps> = (p) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const s = scaleOf(p);
  const c = colors(p.theme);
  const ar = p.lang === "ar";
  return (
    <Stage p={p}>
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", textAlign: "center", padding: 96 * s }}>
        <div style={enter(frame, durationInFrames, 2, s, false)}>
          <Logo theme={p.theme} height={72 * s} />
        </div>
        <div
          style={{
            ...enter(frame, durationInFrames, 10, s, false),
            fontSize: 68 * s,
            fontWeight: ar ? 700 : 800,
            letterSpacing: ar ? 0 : "-0.02em",
            marginTop: 64 * s,
            lineHeight: ar ? 1.5 : 1.1,
          }}
        >
          {p.headline}
        </div>
        {p.subline ? (
          <div
            style={{
              ...enter(frame, durationInFrames, 16, s, false),
              fontSize: 30 * s,
              fontWeight: 500,
              color: c.ink2,
              marginTop: 20 * s,
            }}
          >
            {p.subline}
          </div>
        ) : null}
        {p.url ? (
          <div
            style={{
              ...enter(frame, durationInFrames, 22, s, false),
              fontSize: 32 * s,
              fontWeight: 700,
              color: c.link,
              marginTop: 40 * s,
              direction: "ltr",
            }}
          >
            {p.url}
          </div>
        ) : null}
      </AbsoluteFill>
    </Stage>
  );
};
