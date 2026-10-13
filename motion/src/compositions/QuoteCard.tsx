import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { BaseProps, colors, isPortrait, scaleOf } from "../brand";
import { enter } from "../anim";
import { Avatar } from "../components/Avatar";
import { Stage } from "../components/Stage";

export type QuoteCardProps = BaseProps & { quote: string; name: string; role?: string };

/** Testimonial: the quote set large, then who said it. */
export const QuoteCard: React.FC<QuoteCardProps> = (p) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const s = scaleOf(p);
  const c = colors(p.theme);
  const portrait = isPortrait(p);
  const ar = p.lang === "ar";
  return (
    <Stage p={p}>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: portrait ? "center" : "flex-start",
          padding: `0 ${(portrait ? 96 : 200) * s}px`,
          textAlign: portrait ? "center" : "start",
        }}
      >
        <div
          style={{
            ...enter(frame, durationInFrames, 2, s),
            fontSize: (portrait ? 58 : 56) * s,
            fontWeight: ar ? 600 : 700,
            letterSpacing: ar ? 0 : "-0.015em",
            lineHeight: ar ? 1.7 : 1.25,
            maxWidth: portrait ? "100%" : 1400 * s,
          }}
        >
          <span style={{ color: c.link }}>{ar ? "«" : "“"}</span>
          {p.quote}
          <span style={{ color: c.link }}>{ar ? "»" : "”"}</span>
        </div>
        <div
          style={{
            ...enter(frame, durationInFrames, 14, s),
            display: "flex",
            alignItems: "center",
            gap: 20 * s,
            marginTop: 48 * s,
            textAlign: "start",
          }}
        >
          <Avatar name={p.name} size={72 * s} />
          <div>
            <div style={{ fontSize: 30 * s, fontWeight: 700 }}>{p.name}</div>
            {p.role ? <div style={{ fontSize: 24 * s, fontWeight: 500, color: c.inkMuted }}>{p.role}</div> : null}
          </div>
        </div>
      </AbsoluteFill>
    </Stage>
  );
};
