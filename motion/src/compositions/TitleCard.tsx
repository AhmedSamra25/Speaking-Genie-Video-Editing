import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { BaseProps, brand, colors, isEnablement, isPortrait, scaleOf } from "../brand";
import { FadeProps, enterClip } from "../anim";
import { Capsule, Phrase, display, en, kicker, trackOf } from "../components/Enablement";
import { Stage } from "../components/Stage";

export type TitleCardProps = BaseProps &
  FadeProps & {
  overline?: string;
  title: string;
  subtitle?: string;
  /** Enablement look: the words of `title` set in the track accent. */
  highlight?: string;
  /** Enablement look: the one phrase in a capsule, under the title. */
  capsule?: string;
  /** Enablement look: capsule ink, "accent" for a punchline (default), "white" for an instruction. */
  capsuleInk?: "accent" | "white";
};

/** Chapter / section title: purple overline, 76px title, muted subtitle. */
export const TitleCard: React.FC<TitleCardProps> = (p) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const s = scaleOf(p);
  const c = colors(p.theme);
  const portrait = isPortrait(p);
  const ar = p.lang === "ar";
  const margin = (portrait ? 96 : 160) * s;
  if (isEnablement(p)) return <TitleCardEnablement {...p} />;
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
              ...enterClip(frame, durationInFrames, 2, s, p),
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
            ...enterClip(frame, durationInFrames, 6, s, p),
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
              ...enterClip(frame, durationInFrames, 12, s, p),
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

/** Enablement look: kicker, Poppins/Cairo headline with the accent phrase, lead, then the capsule. */
const TitleCardEnablement: React.FC<TitleCardProps> = (p) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const s = scaleOf(p);
  const t = trackOf(p);
  const portrait = isPortrait(p);
  const ar = p.lang === "ar";
  const margin = (portrait ? 96 : 160) * s;
  return (
    <Stage p={p} lockup>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: portrait ? "center" : "flex-start",
          textAlign: portrait ? "center" : "start",
          padding: `0 ${margin}px`,
        }}
      >
        {p.overline ? (
          <div style={{ ...enterClip(frame, durationInFrames, 2, s, p), ...kicker(p.lang, s, 26, t.inkSubtle), marginBottom: 26 * s }}>
            {p.overline}
          </div>
        ) : null}
        <div
          style={{
            ...enterClip(frame, durationInFrames, 6, s, p),
            ...display(p.lang),
            fontSize: (portrait ? 84 : 96) * s,
            maxWidth: portrait ? "100%" : 1450 * s,
          }}
        >
          <Phrase text={p.title} phrase={p.highlight} color={t.phrase} />
        </div>
        {p.subtitle ? (
          <div
            style={{
              ...enterClip(frame, durationInFrames, 12, s, p),
              fontSize: (portrait ? 36 : 34) * s,
              fontWeight: 500,
              color: t.inkMuted,
              marginTop: 30 * s,
              maxWidth: portrait ? "100%" : 1100 * s,
              lineHeight: ar ? 1.75 : 1.5,
            }}
          >
            {p.subtitle}
          </div>
        ) : null}
        {p.capsule ? (
          <div style={{ ...enterClip(frame, durationInFrames, 16, s, p), marginTop: 44 * s }}>
            <Capsule s={s} size={portrait ? 46 : 40} lang={p.lang} ink={p.capsuleInk === "white" ? en.ink : t.phrase}>
              {p.capsule}
            </Capsule>
          </div>
        ) : null}
      </AbsoluteFill>
    </Stage>
  );
};
