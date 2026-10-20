import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { BaseProps, brand, colors, isEnablement, isPortrait, markerColor, scaleOf } from "../brand";
import { FadeProps, enterClip, wipe } from "../anim";
import { Capsule, DEPTH, Phrase, display, en, kicker, trackOf, useDepth } from "../components/Enablement";
import { MaskedLines, Reveal } from "../components/Kinetic";
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
  /** How the title comes in: "lines" (default) rises line by line from behind a mask; "fade" fades and rises. */
  reveal?: Reveal;
  /** The key words of `title` that get a highlight marker drawn on under them (one short phrase). */
  marker?: string;
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
  const lines = p.reveal !== "fade";
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
            ...(lines ? {} : enterClip(frame, durationInFrames, 6, s, p)),
            fontSize: brand.video.heroSize * s * (portrait ? 0.95 : 1),
            fontWeight: ar ? 700 : 800,
            letterSpacing: ar ? 0 : "-0.02em",
            lineHeight: ar ? 1.5 : 1.08,
            maxWidth: portrait ? "100%" : 1400 * s,
          }}
        >
          {lines ? (
            <MaskedLines text={p.title} width={portrait ? p.width - 2 * margin : Math.min(1400 * s, p.width - 2 * margin)}
              rtl={ar} marker={p.marker} markerColor={markerColor(p)}
              animate={p.enterFade !== false} exit={p.exitFade !== false} />
          ) : (
            p.title
          )}
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
  const lines = p.reveal !== "fade";
  const depth = useDepth(p);
  // the kicker and the capsule open with the capsule wipe; in a cut sequence they are on screen from frame 0
  const wipeIn = (d: number) => (p.enterFade === false ? {} : wipe(frame, d, ar));
  const fadeOnly = (d: number) => ({ ...enterClip(frame, durationInFrames, d, s, p), transform: undefined });
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
        <div style={{ transform: depth(DEPTH.text), display: "flex", flexDirection: "column", alignItems: "inherit", width: portrait ? "100%" : undefined }}>
        {p.overline ? (
          <div style={{ ...fadeOnly(2), ...wipeIn(2), ...kicker(p.lang, s, 26, t.inkSubtle), marginBottom: 26 * s }}>
            {p.overline}
          </div>
        ) : null}
        <div
          style={{
            ...(lines ? {} : enterClip(frame, durationInFrames, 6, s, p)),
            ...display(p.lang),
            fontSize: (portrait ? 84 : 96) * s,
            maxWidth: portrait ? "100%" : 1450 * s,
          }}
        >
          {lines ? (
            <MaskedLines text={p.title} width={portrait ? p.width - 2 * margin : Math.min(1450 * s, p.width - 2 * margin)}
              rtl={ar} phrase={p.highlight} phraseColor={t.phrase} marker={p.marker}
              markerColor={markerColor(p)} animate={p.enterFade !== false} exit={p.exitFade !== false} />
          ) : (
            <Phrase text={p.title} phrase={p.highlight} color={t.phrase} />
          )}
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
        </div>
        {p.capsule ? (
          <div style={{ ...fadeOnly(16), marginTop: 44 * s, transform: depth(DEPTH.capsule) }}>
            <Capsule s={s} size={portrait ? 46 : 40} lang={p.lang} ink={p.capsuleInk === "white" ? en.ink : t.phrase}
              style={wipeIn(18)}>
              {p.capsule}
            </Capsule>
          </div>
        ) : null}
      </AbsoluteFill>
    </Stage>
  );
};
