import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { BaseProps, colors, fonts, isEnablement, isPortrait, scaleOf } from "../brand";
import { enter } from "../anim";
import { Avatar } from "../components/Avatar";
import { Phrase, trackOf } from "../components/Enablement";
import { Stage } from "../components/Stage";

export type QuoteCardProps = BaseProps & {
  quote: string;
  name: string;
  role?: string;
  /** Enablement look: the words of `quote` set in the track accent. */
  highlight?: string;
};

/** Testimonial: the quote set large, then who said it. */
export const QuoteCard: React.FC<QuoteCardProps> = (p) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const s = scaleOf(p);
  const c = colors(p.theme);
  const portrait = isPortrait(p);
  const ar = p.lang === "ar";
  // Enablement: Poppins/Cairo on the purple ground, marks and the highlighted phrase in the track accent.
  const enab = isEnablement(p);
  const t = trackOf(p);
  const mark = enab ? t.phrase : c.link;
  return (
    <Stage p={p} lockup>
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
            fontWeight: ar ? 600 : enab ? 600 : 700,
            letterSpacing: ar ? 0 : "-0.015em",
            lineHeight: ar ? (enab ? 1.5 : 1.7) : 1.25,
            maxWidth: portrait ? "100%" : 1400 * s,
            ...(enab ? { fontFamily: fonts.display } : {}),
          }}
        >
          <span style={{ color: mark }}>{ar ? "«" : "“"}</span>
          {enab ? <Phrase text={p.quote} phrase={p.highlight} color={t.phrase} /> : p.quote}
          <span style={{ color: mark }}>{ar ? "»" : "”"}</span>
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
          <Avatar name={p.name} size={72 * s} enablement={enab} />
          <div>
            <div style={{ fontSize: 30 * s, fontWeight: 700, ...(enab ? { fontFamily: fonts.display } : {}) }}>{p.name}</div>
            {p.role ? (
              <div style={{ fontSize: (enab ? 26 : 24) * s, fontWeight: 500, color: enab ? t.inkMuted : c.inkMuted }}>{p.role}</div>
            ) : null}
          </div>
        </div>
      </AbsoluteFill>
    </Stage>
  );
};
