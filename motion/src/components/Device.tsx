import React from "react";
import { useAudioData, visualizeAudio } from "@remotion/media-utils";
import { getPointAtLength, getLength } from "@remotion/paths";
import { interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { brand, colors } from "../brand";
import { easeInOut, progress } from "../anim";

/** The mobile kit's PhoneFrame (brand/product-ui-mobile, components/patterns/PhoneFrame.jsx): a 390×844 shell
 * with an 11 px bezel, centred in every 430×884 `sgv screen` capture of the mobile app. Colours are the kit's own
 * (secondary-900 bezel and call background, green-500 voice bars), because screens are shown as shipped. */
export const PHONE = { w: 390, h: 844, bezel: 11, outer: 56, inner: 46, ink: "#0f172a", voice: "#22c55e" };

export type Rect = { x: number; y: number; w: number; h: number };

/** The phone and its screen inside a capture of `sw`×`sh` CSS px, or null when the capture is not a mobile one. */
export const phoneIn = (sw: number, sh: number): { phone: Rect; screen: Rect } | null => {
  if (sw > 600 || sh < sw || sw < PHONE.w || sh < PHONE.h) return null;
  const phone = { x: (sw - PHONE.w) / 2, y: (sh - PHONE.h) / 2, w: PHONE.w, h: PHONE.h };
  const b = PHONE.bezel;
  return { phone, screen: { x: phone.x + b, y: phone.y + b, w: phone.w - 2 * b, h: phone.h - 2 * b } };
};

export type Wave = {
  /** The bars' box on the screen, in the capture's CSS px. Default: the voice bars of the AI call screen. */
  x?: number;
  y?: number;
  w?: number;
  h?: number;
  /** Number of bars (default 12, as on the call screen). */
  bars?: number;
  color?: string;
  /** Painted under the bars to cover the screen's static ones (default the call screen's background). */
  bg?: string;
  /** Audio staged by sgv (the project's voice-over by default). */
  src?: string;
  /** Seconds into the audio at the clip's first frame (sgv sets it from the timeline). */
  from?: number;
  /** Loudness to bar height (default 1). */
  gain?: number;
};

export const WAVE_DEFAULT = { x: 150, y: 612, w: 130, h: 38, bars: 12 };

/** Voice bars that follow the audio: the spectrum of a short window around the frame, smoothed over three frames
 * so the bars breathe with the voice instead of flickering. The centre bars carry the lowest (strongest) band and
 * the outer ones the higher bands, mirrored, like the app's own speaking indicator. Bars never drop below a
 * resting height. Drawn in the capture's CSS px, inside the scaled screen. */
export const VoiceBars: React.FC<{ wave: Wave }> = ({ wave }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const audio = useAudioData(staticFile(wave.src ?? ""));
  const x = wave.x ?? WAVE_DEFAULT.x, y = wave.y ?? WAVE_DEFAULT.y, w = wave.w ?? WAVE_DEFAULT.w, h = wave.h ?? WAVE_DEFAULT.h;
  const n = Math.max(3, wave.bars ?? WAVE_DEFAULT.bars);
  const half = Math.ceil(n / 2);
  const level = new Array(half).fill(0);
  if (audio) {
    const at = frame + Math.round((wave.from ?? 0) * fps);
    for (const f of [at - 2, at - 1, at]) {
      if (f < 0 || f / fps > audio.durationInSeconds) continue;
      const bins = visualizeAudio({ fps, frame: f, audioData: audio, numberOfSamples: 64, smoothing: true });
      for (let i = 0; i < half; i++) level[i] += bins[1 + i * 2] / 3;
    }
  }
  const bw = w / (n * 1.9);
  const gap = (w - n * bw) / (n - 1);
  const heights = Array.from({ length: n }, (_, i) => {
    const band = Math.abs(i - (n - 1) / 2) | 0;
    const v = Math.min(1, Math.sqrt(level[Math.min(half - 1, band)] ?? 0) * 2.4 * (wave.gain ?? 1));
    return h * (0.22 + 0.78 * v);
  });
  return (
    <div style={{ position: "absolute", left: x, top: y, width: w, height: h, background: wave.bg ?? PHONE.ink }}>
      {heights.map((bh, i) => (
        <div key={i} style={{ position: "absolute", left: i * (bw + gap), top: (h - bh) / 2, width: bw, height: bh,
          borderRadius: bw, background: wave.color ?? PHONE.voice }} />
      ))}
    </div>
  );
};

export type CursorPoint = { x: number; y: number; at: number; click?: boolean };

/** A desktop pointer that glides between points on the screen (CSS px of the capture) and arrives at each at `at`
 * seconds: an eased move along a gentle arc (never a straight robotic line, never an overshoot), with a press and
 * one ring on `click`. It comes in from below-right before the first point. `toFrame` maps capture px to frame px. */
export const Cursor: React.FC<{
  points: CursorPoint[];
  toFrame: (x: number, y: number) => { x: number; y: number };
  s: number;
  ring: string;
}> = ({ points, toFrame, s, ring }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  if (!points.length) return null;
  const pts = points.map((p) => ({ ...toFrame(p.x, p.y), f: Math.round(p.at * fps), click: p.click }));
  const first = pts[0];
  const start = { x: first.x + 180 * s, y: first.y + 240 * s, f: first.f - Math.round(0.8 * fps) };
  const chain = [start, ...pts];
  // the segment the pointer is on (or resting at the end of)
  let i = 1;
  while (i < chain.length - 1 && frame >= chain[i].f) i++;
  const a = chain[i - 1], b = chain[i];
  const moveFrames = Math.max(6, Math.min(Math.round(0.8 * fps), b.f - a.f - 4));
  const k = easeInOut(Math.min(1, Math.max(0, (frame - (b.f - moveFrames)) / moveFrames)));
  // a quadratic arc that bows a little to one side of the straight line
  const dx = b.x - a.x, dy = b.y - a.y;
  const cx = (a.x + b.x) / 2 - dy * 0.12, cy = (a.y + b.y) / 2 + dx * 0.12;
  const d = `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
  const len = getLength(d);
  const pos = (len > 0.5 ? getPointAtLength(d, len * k) : null) ?? { x: b.x, y: b.y };
  const vis = interpolate(frame, [start.f, start.f + 6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const clickAt = pts.find((p) => p.click && frame >= p.f && frame < p.f + 18);
  const press = clickAt && frame < clickAt.f + 5 ? 0.88 : 1;
  const ripple = clickAt ? progress(frame, clickAt.f, 16) : 0;
  const hgt = 44 * s;
  const ink = colors("light").ink;
  if (vis <= 0) return null;
  return (
    <>
      {clickAt ? (
        <div style={{ position: "absolute", left: clickAt.x - 22 * s * (1 + 1.4 * ripple), top: clickAt.y - 22 * s * (1 + 1.4 * ripple),
          width: 44 * s * (1 + 1.4 * ripple), height: 44 * s * (1 + 1.4 * ripple), borderRadius: "50%",
          border: `${2.5 * s}px solid ${ring}`, opacity: (1 - ripple) * 0.9 }} />
      ) : null}
      <svg viewBox="0 0 20 28" style={{ position: "absolute", left: pos.x - hgt * 0.06, top: pos.y - hgt * 0.04, height: hgt,
        width: (hgt * 20) / 28, opacity: vis, transform: `scale(${press})`, transformOrigin: "0 0", overflow: "visible",
        filter: `drop-shadow(0 ${3 * s}px ${6 * s}px rgba(15, 23, 41, 0.3))` }}>
        <path d="M1.5 1.5 L1.5 22.5 L6.8 17.6 L10.4 25.6 L14 24 L10.5 16.2 L17.6 16.2 Z" fill={brand.enablement.ink}
          stroke={ink} strokeWidth={1.6} strokeLinejoin="round" />
      </svg>
    </>
  );
};
