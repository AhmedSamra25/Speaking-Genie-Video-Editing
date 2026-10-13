import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { BaseProps, brand, colors, isPortrait, scaleOf } from "../brand";
import { enter } from "../anim";
import { Avatar } from "../components/Avatar";
import { Stage } from "../components/Stage";

export type LowerThirdProps = BaseProps & { name: string; role?: string; avatar?: boolean };

/** Name plate over footage (rendered with alpha). A solid plate keeps it legible on any shot. */
export const LowerThird: React.FC<LowerThirdProps> = (p) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const s = scaleOf(p);
  const c = colors(p.theme);
  const portrait = isPortrait(p);
  const margin = brand.video.safeMargin * s;
  return (
    <Stage p={p} transparent>
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: portrait ? "center" : "flex-start",
          padding: portrait ? `0 ${64 * s}px ${p.height * 0.3}px` : `0 ${margin}px ${margin * 1.6}px`,
        }}
      >
        <div
          style={{
            ...enter(frame, durationInFrames, 0, s),
            display: "flex",
            alignItems: "center",
            gap: 20 * s,
            background: c.surface,
            border: `${Math.max(1, s)}px solid ${c.border}`,
            borderRadius: brand.video.cardRadius * s,
            padding: `${20 * s}px ${32 * s}px ${20 * s}px ${p.avatar === false ? 32 * s : 22 * s}px`,
            boxShadow: `0 ${8 * s}px ${24 * s}px -${6 * s}px rgba(15, 23, 41, 0.35)`,
          }}
        >
          {p.avatar === false ? null : <Avatar name={p.name} size={64 * s} />}
          <div>
            <div style={{ fontSize: 34 * s, fontWeight: 700, lineHeight: p.lang === "ar" ? 1.5 : 1.2 }}>{p.name}</div>
            {p.role ? (
              <div style={{ fontSize: 24 * s, fontWeight: 500, color: c.inkMuted, marginTop: 4 * s }}>{p.role}</div>
            ) : null}
          </div>
        </div>
      </AbsoluteFill>
    </Stage>
  );
};
