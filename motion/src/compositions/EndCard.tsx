import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { BaseProps, colors, fonts, isEnablement, isPortrait, scaleOf } from "../brand";
import { FadeProps, enterClip } from "../anim";
import { Capsule, Lockup, Phrase, StoreBadges, display, en, trackOf } from "../components/Enablement";
import { Logo } from "../components/Logo";
import { Stage } from "../components/Stage";

export type EndCardProps = BaseProps &
  FadeProps & {
  headline: string;
  subline?: string;
  url?: string;
  /** Enablement look: the words of `headline` set in the track accent. */
  highlight?: string;
  /** Enablement look: the close. Individual track: the install line in the capsule, above the store badges
   * (default "حمل التطبيق دلوقتي" / "Download the app"). Business track: the conversation button
   * (default "اتكلم معنا" / "Book a walkthrough"). */
  cta?: string;
};

// The verbatim closes from brand/enablement/README.md ("The close depends on the audience").
const CTA = {
  individual: { ar: "حمل التطبيق دلوقتي", en: "Download the app" },
  business: { ar: "اتكلم معنا", en: "Book a walkthrough" },
};

/** Closing card: logo, call to action, URL. Holds to the last frame (no exit fade). */
export const EndCard: React.FC<EndCardProps> = (p) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const s = scaleOf(p);
  const c = colors(p.theme);
  const ar = p.lang === "ar";
  if (isEnablement(p)) return <EndCardEnablement {...p} />;
  return (
    <Stage p={p}>
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", textAlign: "center", padding: 96 * s }}>
        <div style={enterClip(frame, durationInFrames, 2, s, p, false)}>
          <Logo theme={p.theme} height={72 * s} />
        </div>
        <div
          style={{
            ...enterClip(frame, durationInFrames, 10, s, p, false),
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
              ...enterClip(frame, durationInFrames, 16, s, p, false),
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
              ...enterClip(frame, durationInFrames, 22, s, p, false),
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

/** Enablement look. Individual track closes on an install: the capsule and the App Store and Google Play badges.
 * Business track closes on a conversation: a white primary button and the URL as a ghost, never store badges. */
const EndCardEnablement: React.FC<EndCardProps> = (p) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const s = scaleOf(p);
  const t = trackOf(p);
  const portrait = isPortrait(p);
  const ar = p.lang === "ar";
  const business = p.track === "business";
  const cta = p.cta ?? CTA[business ? "business" : "individual"][p.lang];
  const at = (d: number) => enterClip(frame, durationInFrames, d, s, p, false);
  return (
    <Stage p={p}>
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          // vertical: keep the close above the bottom 20% (platform UI)
          padding: portrait ? `${96 * s}px ${96 * s}px ${p.height * 0.2}px` : 96 * s,
        }}
      >
        <div style={at(2)}>
          <Lockup height={(portrait ? 76 : 68) * s} />
        </div>
        <div
          style={{
            ...at(10),
            ...display(p.lang),
            fontSize: (portrait ? 80 : 84) * s,
            marginTop: 64 * s,
            maxWidth: portrait ? "100%" : 1400 * s,
          }}
        >
          <Phrase text={p.headline} phrase={p.highlight} color={t.phrase} />
        </div>
        {p.subline ? (
          <div
            style={{
              ...at(16),
              fontSize: (portrait ? 36 : 32) * s,
              fontWeight: 500,
              color: t.inkMuted,
              marginTop: 24 * s,
              maxWidth: portrait ? "100%" : 1100 * s,
              lineHeight: ar ? 1.75 : 1.45,
            }}
          >
            {p.subline}
          </div>
        ) : null}
        {business ? (
          <div style={{ ...at(22), display: "flex", flexDirection: "column", alignItems: "center", gap: 24 * s, marginTop: 56 * s }}>
            <div
              style={{
                background: en.ink,
                color: en.purple["700"],
                borderRadius: en.radius.button * s,
                padding: `${24 * s}px ${48 * s}px`,
                fontFamily: fonts.display,
                fontSize: (portrait ? 40 : 36) * s,
                fontWeight: 600,
                letterSpacing: ar ? 0 : "-0.01em",
                lineHeight: ar ? 1.4 : 1.2,
              }}
            >
              {cta}
            </div>
            {p.url ? (
              <div
                style={{
                  border: `${1.5 * s}px solid ${en.ghostBorder}`,
                  borderRadius: en.radius.button * s,
                  padding: `${16 * s}px ${36 * s}px`,
                  fontSize: (portrait ? 32 : 28) * s,
                  fontWeight: 600,
                  direction: "ltr",
                }}
              >
                {p.url}
              </div>
            ) : null}
          </div>
        ) : (
          <>
            <div style={{ ...at(22), marginTop: 56 * s }}>
              <Capsule s={s} size={portrait ? 46 : 40} lang={p.lang} ink={t.phrase}>
                {cta}
              </Capsule>
            </div>
            <div style={{ ...at(28), marginTop: 44 * s }}>
              <StoreBadges lang={p.lang} height={(portrait ? 92 : 80) * s} gap={20 * s} />
            </div>
            {p.url ? (
              <div style={{ ...at(32), fontSize: 28 * s, fontWeight: 600, color: t.inkMuted, marginTop: 28 * s, direction: "ltr" }}>
                {p.url}
              </div>
            ) : null}
          </>
        )}
      </AbsoluteFill>
    </Stage>
  );
};
