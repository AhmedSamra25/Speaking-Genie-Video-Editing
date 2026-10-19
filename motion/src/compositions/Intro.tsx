import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { BaseProps, colors, isEnablement, scaleOf } from "../brand";
import { enter } from "../anim";
import { Lockup, trackOf } from "../components/Enablement";
import { Logo } from "../components/Logo";
import { Stage } from "../components/Stage";

export type IntroProps = BaseProps & { tagline?: string };

/** Logo reveal on the brand canvas, optional tagline underneath. */
export const Intro: React.FC<IntroProps> = (p) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const s = scaleOf(p);
  const c = colors(p.theme);
  // Enablement: the white lockup on the purple ground under the dome.
  const enab = isEnablement(p);
  return (
    <Stage p={p}>
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", gap: 36 * s }}>
        <div style={enter(frame, durationInFrames, 4, s)}>
          {enab ? <Lockup height={110 * s} /> : <Logo theme={p.theme} height={110 * s} />}
        </div>
        {p.tagline ? (
          <div
            style={{
              ...enter(frame, durationInFrames, 14, s),
              fontSize: 30 * s,
              fontWeight: 500,
              color: enab ? trackOf(p).inkMuted : c.ink2,
              textAlign: "center",
              // a Latin tagline in an Arabic video keeps its own direction (the full stop stays at the end)
              unicodeBidi: "plaintext",
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
