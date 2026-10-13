import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { BaseProps, colors, scaleOf } from "../brand";
import { enter } from "../anim";
import { Logo } from "../components/Logo";
import { Stage } from "../components/Stage";

export type IntroProps = BaseProps & { tagline?: string };

/** Logo reveal on the brand canvas, optional tagline underneath. */
export const Intro: React.FC<IntroProps> = (p) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const s = scaleOf(p);
  const c = colors(p.theme);
  return (
    <Stage p={p}>
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", gap: 36 * s }}>
        <div style={enter(frame, durationInFrames, 4, s)}>
          <Logo theme={p.theme} height={110 * s} />
        </div>
        {p.tagline ? (
          <div
            style={{
              ...enter(frame, durationInFrames, 14, s),
              fontSize: 30 * s,
              fontWeight: 500,
              color: c.ink2,
              textAlign: "center",
              maxWidth: p.width - 192 * s,
            }}
          >
            {p.tagline}
          </div>
        ) : null}
      </AbsoluteFill>
    </Stage>
  );
};
