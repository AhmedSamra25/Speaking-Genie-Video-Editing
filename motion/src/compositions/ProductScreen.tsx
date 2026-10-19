import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { BaseProps, brand, colors, isPortrait, scaleOf } from "../brand";
import { enter, progress } from "../anim";
import { Stage } from "../components/Stage";

export type Callout = { x: number; y: number; w: number; h: number };

export type ProductScreenProps = BaseProps & {
  /** Staged screen capture (sgv copies the project file to public/stage/). */
  src: string;
  /** The capture's size in CSS pixels (sgv fills these in from the file). */
  srcW?: number;
  srcH?: number;
  /** The one element to show, in the screen's CSS pixels. */
  callout?: Callout;
  label?: string;
  move?: "push" | "still" | "pan";
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** A real product screen in a brand window: the camera eases in to one callout, which is outlined and labelled. */
export const ProductScreen: React.FC<ProductScreenProps> = (p) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const s = scaleOf(p);
  const c = colors(p.theme);
  const portrait = isPortrait(p);
  const W = p.width;
  const H = p.height;
  const sw = p.srcW ?? 1440;
  const sh = p.srcH ?? 900;
  const call = p.callout;
  const move = p.move ?? "push";

  // Base view: the whole screen fits the frame, above the bottom 20% in vertical formats.
  const margin = (portrait ? 64 : 120) * s;
  const base = Math.min((W - 2 * margin) / sw, (H * (portrait ? 0.55 : 0.76)) / sh);
  const cy0 = H * (portrait ? 0.42 : 0.5);

  // Target view: the callout fills about half the width (78% in vertical), never more than 2.6x, so context stays.
  const zoom = call ? Math.min(2.6, Math.max(1, (W * (portrait ? 0.78 : 0.5)) / (call.w * base))) : 1;
  const k = move === "push" && call ? progress(frame, 6, Math.min(54, durationInFrames * 0.45)) : 0;
  const panK = move === "pan" ? interpolate(frame, [0, durationInFrames], [0, 1]) : 0;
  const S = base * lerp(1, zoom, k) * (1 + 0.04 * panK);
  const focusX = lerp(sw / 2, call ? call.x + call.w / 2 : sw / 2, k) + (panK - 0.5) * sw * 0.06;
  const focusY = lerp(sh / 2, call ? call.y + call.h / 2 : sh / 2, k);
  const frameY = lerp(cy0, H * (portrait ? 0.4 : 0.44), k);
  const tx = W / 2 - S * focusX;
  const ty = frameY - S * focusY;

  // Callout box in frame pixels, and its label below (or above when there's no room).
  const box = call ? { x: tx + S * call.x, y: ty + S * call.y, w: S * call.w, h: S * call.h } : null;
  const showFrom = move === "push" ? 40 : 14;
  const mark = enter(frame, durationInFrames, showFrom, s);
  const pad = 10 * s;
  const labelBelow = box ? box.y + box.h + 140 * s < H * (portrait ? 0.78 : 0.9) : true;
  const ar = p.lang === "ar";

  return (
    <Stage p={p}>
      <AbsoluteFill style={{ ...enter(frame, durationInFrames, 0, s), transform: undefined }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: sw,
            height: sh,
            transformOrigin: "0 0",
            transform: `translate(${tx}px, ${ty}px) scale(${S})`,
            background: c.surface,
            border: `${Math.max(1, s) / S}px solid ${c.border}`,
            borderRadius: (brand.video.windowRadius * s) / S,
            overflow: "hidden",
            boxShadow:
              p.theme === "light"
                ? `0 ${16 / base}px ${40 / base}px -${12 / base}px rgba(16, 24, 40, 0.18)`
                : `0 ${18 / base}px ${44 / base}px -${12 / base}px rgba(0, 0, 0, 0.65)`,
          }}
        >
          {p.src ? <Img src={staticFile(p.src)} style={{ width: sw, height: sh, display: "block" }} /> : null}
        </div>
      </AbsoluteFill>
      {box ? (
        <div
          style={{
            position: "absolute",
            left: box.x - pad,
            top: box.y - pad,
            width: box.w + 2 * pad,
            height: box.h + 2 * pad,
            borderRadius: brand.video.cardRadius * s,
            border: `${3 * s}px solid ${c.primary}`,
            boxShadow: `0 0 0 ${4000 * s}px ${p.theme === "light" ? "rgba(15, 23, 41, 0.28)" : "rgba(2, 6, 16, 0.5)"}`,
            opacity: mark.opacity,
          }}
        />
      ) : null}
      {box && p.label ? (
        <div
          style={{
            position: "absolute",
            left: 0,
            width: W,
            top: labelBelow ? box.y + box.h + pad + 24 * s : undefined,
            bottom: labelBelow ? undefined : H - box.y + pad + 24 * s,
            display: "flex",
            justifyContent: "center",
            ...mark,
          }}
        >
          <div
            style={{
              maxWidth: W - 2 * margin,
              padding: `${18 * s}px ${30 * s}px`,
              background: c.surface,
              border: `${Math.max(1, s)}px solid ${c.border}`,
              borderRadius: brand.video.cardRadius * s,
              color: c.ink,
              fontSize: brand.video.bodySize * s,
              fontWeight: ar ? 600 : 700,
              letterSpacing: ar ? 0 : "-0.01em",
              textAlign: "center",
              direction: ar ? "rtl" : "ltr",
            }}
          >
            {p.label}
          </div>
        </div>
      ) : null}
    </Stage>
  );
};
