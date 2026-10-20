import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { BaseProps, colors, fonts, isEnablement, isPortrait, markerColor, scaleOf } from "../brand";
import { enter } from "../anim";
import { Avatar } from "../components/Avatar";
import { DEPTH, Phrase, trackOf, useDepth } from "../components/Enablement";
import { MaskedLines, Reveal } from "../components/Kinetic";
import { Stage } from "../components/Stage";

export type QuoteCardProps = BaseProps & {
  quote: string;
  name: string;
  role?: string;
  /** Enablement look: the words of `quote` set in the track accent. */
  highlight?: string;
  /** Enablement look: "lines" (default) brings the quote in line by line from behind a mask; "fade" fades it. */
  reveal?: Reveal;
  /** Enablement look: the key words of `quote` that get a highlight marker drawn on under them. */
  marker?: string;
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
  const lines = enab && p.reveal !== "fade";
  const depth = useDepth(p);
  const side = (portrait ? 96 : 200) * s;
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
            ...(lines ? { transform: depth(DEPTH.text) } : enter(frame, durationInFrames, 2, s)),
            fontSize: (portrait ? 58 : 56) * s,
            fontWeight: ar ? 600 : enab ? 600 : 700,
            letterSpacing: ar ? 0 : "-0.015em",
            lineHeight: ar ? (enab ? 1.5 : 1.7) : 1.25,
            maxWidth: portrait ? "100%" : 1400 * s,
            ...(enab ? { fontFamily: fonts.display } : {}),
          }}
        >
          {lines ? (
            <MaskedLines text={p.quote} width={portrait ? p.width - 2 * side : Math.min(1400 * s, p.width - 2 * side)} delay={2}
              rtl={ar} phrase={p.highlight} phraseColor={t.phrase} marker={p.marker} markerColor={markerColor(p)}
              marks={ar ? ["«", "»"] : ["“", "”"]} marksColor={mark} />
          ) : (
            <>
              <span style={{ color: mark }}>{ar ? "«" : "“"}</span>
              {enab ? <Phrase text={p.quote} phrase={p.highlight} color={t.phrase} /> : p.quote}
              <span style={{ color: mark }}>{ar ? "»" : "”"}</span>
            </>
          )}
        </div>
        <div
          style={{
            ...enter(frame, durationInFrames, 14, s),
            ...(enab ? { transform: [enter(frame, durationInFrames, 14, s).transform, depth(DEPTH.capsule) ?? ""].join(" ") } : {}),
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
