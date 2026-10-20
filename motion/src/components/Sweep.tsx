import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

/** The Enablement egSweep, once per video: a soft white band of light crosses the graphic, left to right, linear,
 * 1.6 s (brand/enablement/tokens/motion.css). Aimed with `box` at the capsule, the button or the badges, it is the
 * keyframe as the design system draws it: the band clipped to that pill. Without a box it crosses the whole frame,
 * fainter. */
export type SweepProps = {
  /** Seconds into the clip when the band starts. Default: 0.6 s before the end, or 1 s in on short clips. */
  at?: number;
  /** Seconds the band takes to cross. Default 1.6 (egSweep). */
  duration?: number;
  /** Limit the sweep to a box [x, y, w, h] in 0–1 fractions of the frame, drawn as a pill (fully rounded ends). */
  box?: [number, number, number, number];
  /** Peak opacity of the band. Default 0.35 in a box, 0.12 across the frame. */
  strength?: number;
};

export const Sweep: React.FC<SweepProps & { children: React.ReactNode }> = ({ at, duration = 1.6, box, strength, children }) => {
  const frame = useCurrentFrame();
  const { fps, width, height, durationInFrames } = useVideoConfig();
  const start = (at ?? Math.max(1, durationInFrames / fps - duration - 0.6)) * fps;
  const t = interpolate(frame, [start, start + duration * fps], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const [bx, by, bw, bh] = box ?? [0, 0, 1, 1];
  const peak = strength ?? (box ? 0.35 : 0.12);
  // egSweep: a band 40% of the box wide, translated from -120% to 220% of its own width
  const band = 0.4 * bw * width;
  const left = bx * width + band * (-1.2 + 3.4 * t);
  const live = t > 0 && t < 1;
  return (
    <AbsoluteFill>
      {children}
      {live ? (
        <div
          style={{
            position: "absolute",
            left: bx * width,
            top: by * height,
            width: bw * width,
            height: bh * height,
            overflow: "hidden",
            borderRadius: box ? Math.min(bw * width, bh * height) / 2 : 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: left - bx * width,
              width: band,
              background: `linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,${peak}), rgba(255,255,255,0))`,
            }}
          />
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
