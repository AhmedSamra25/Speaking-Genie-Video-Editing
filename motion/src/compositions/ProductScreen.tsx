import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { BaseProps, brand, colors, isPortrait, scaleOf } from "../brand";
import { FadeProps, enterClip, progress } from "../anim";
import { Stage } from "../components/Stage";

export type Callout = { x: number; y: number; w: number; h: number };

export type ProductScreenProps = BaseProps &
  FadeProps & {
  /** Staged screen capture (sgv copies the project file to public/stage/). */
  src: string;
  /** The capture's size in CSS pixels (sgv fills these in from the file). */
  srcW?: number;
  srcH?: number;
  /** The one element to show, in the screen's CSS pixels. */
  callout?: Callout;
  label?: string;
  move?: "push" | "still" | "pan";
  /** Push only: where the push starts, 0 = whole screen (default), 1 = already on the callout. */
  startZoom?: number;
  /** Push only: length of the push in frames (default min(54, 45% of the clip)). */
  pushFrames?: number;
  /** Push only: zoom a little further at the end if that lets the window cover the whole frame
   * (no canvas showing), as long as the callout still fits inside the side margins. */
  cover?: boolean;
  /** Frame the ring and label come in (default: frame 40 for the default push, else halfway through the push,
   * 14 for still/pan). 0 = on screen from frame 0 with no fade. */
  ringAt?: number;
  /** A gentle continuous push over the whole clip, as a fraction of scale (0.03 = 3%; keep it at 0.05 or less). */
  drift?: number;
  /** Side margin of the base view in px at 1080 (default 64 in vertical, 120 otherwise). 0 = the window spans the full width. */
  sideMargin?: number;
  /** Draw the purple ring and dim the rest (default true). false keeps only the label, for a callout that is the whole crop. */
  ring?: boolean;
  /** Dim everything outside the ring (default true). false for a tight crop, where the ring already wraps the window. */
  dim?: boolean;
  /** Share of the frame width the callout fills at the end of the push (default 0.78 in vertical, 0.5 otherwise; still capped at 2.6x). */
  calloutFill?: number;
  /** Label text size in px at 1080 (default: brand body size, 30). */
  labelSize?: number;
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
  const sideMargin = p.sideMargin !== undefined ? p.sideMargin * s : margin;
  const base = Math.min((W - 2 * sideMargin) / sw, (H * (portrait ? 0.55 : 0.76)) / sh);
  const cy0 = H * (portrait ? 0.42 : 0.5);

  // Target view: the callout fills about half the width (78% in vertical), never more than 2.6x, so context stays.
  const zoom = call ? Math.min(2.6, Math.max(1, (W * (p.calloutFill ?? (portrait ? 0.78 : 0.5))) / (call.w * base))) : 1;
  const coverS = Math.max(W / sw, H / sh);
  const endS = call && p.cover && coverS > base * zoom && call.w * coverS <= W - 2 * margin ? coverS : base * zoom;
  // Defaults (no startZoom, no pushFrames) are the original timing: push from frame 6, ring at frame 40.
  const custom = p.startZoom !== undefined || p.pushFrames !== undefined;
  const k0 = Math.min(1, Math.max(0, p.startZoom ?? 0));
  const pushFrames = Math.max(1, p.pushFrames ?? Math.min(54, durationInFrames * 0.45));
  const pushDelay = k0 > 0 ? 0 : 6;
  const k = move === "push" && call ? lerp(k0, 1, progress(frame, pushDelay, pushFrames)) : 0;
  const panK = move === "pan" ? interpolate(frame, [0, durationInFrames], [0, 1]) : 0;
  const driftK = (p.drift ?? 0) * interpolate(frame, [0, durationInFrames], [0, 1]);
  const S = lerp(base, endS, k) * (1 + 0.04 * panK) * (1 + driftK);
  const focusX = lerp(sw / 2, call ? call.x + call.w / 2 : sw / 2, k) + (move === "pan" ? (panK - 0.5) * sw * 0.06 : 0);
  const focusY = lerp(sh / 2, call ? call.y + call.h / 2 : sh / 2, k);
  const frameY = lerp(cy0, H * (portrait ? 0.4 : 0.44), k);
  // Keep the camera inside the window: once the scaled window is bigger than the frame on an axis,
  // never let a window edge come inside the frame on that axis (no empty canvas beside the screen).
  const clampAxis = (t: number, size: number, frameSize: number) =>
    size >= frameSize - 0.5 ? Math.min(0, Math.max(frameSize - size, t)) : t;
  const tx = clampAxis(W / 2 - S * focusX, S * sw, W);
  const ty = clampAxis(frameY - S * focusY, S * sh, H);

  // Callout box in frame pixels, and its label below (or above when there's no room).
  const box = call ? { x: tx + S * call.x, y: ty + S * call.y, w: S * call.w, h: S * call.h } : null;
  const showFrom = p.ringAt ?? (move === "push" ? (custom ? Math.round(pushDelay + pushFrames * 0.5) : 40) : 14);
  const mark = enterClip(frame, durationInFrames, showFrom, s, { enterFade: showFrom > 0 || p.ringAt === undefined, exitFade: p.exitFade });
  const pad = 10 * s;
  const labelBelow = box ? box.y + box.h + 140 * s < H * (portrait ? 0.78 : 0.9) : true;
  const ar = p.lang === "ar";

  return (
    <Stage p={p}>
      <AbsoluteFill style={{ ...enterClip(frame, durationInFrames, 0, s, p), transform: undefined }}>
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
      {box && p.ring !== false ? (
        <div
          style={{
            position: "absolute",
            left: box.x - pad,
            top: box.y - pad,
            width: box.w + 2 * pad,
            height: box.h + 2 * pad,
            borderRadius: brand.video.cardRadius * s,
            border: `${3 * s}px solid ${c.primary}`,
            boxShadow: p.dim === false ? undefined : `0 0 0 ${4000 * s}px ${p.theme === "light" ? "rgba(15, 23, 41, 0.28)" : "rgba(2, 6, 16, 0.5)"}`,
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
              fontSize: (p.labelSize ?? brand.video.bodySize) * s,
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
