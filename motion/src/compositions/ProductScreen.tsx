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
  /** Several highlights on one screen: the camera travels from one to the next at `at` seconds (the first replaces
   * callout/label). Each travel takes ~0.7 s, eased; the ring redraws on arrival. */
  steps?: { callout: Callout; label?: string; at?: number }[];
  /** A finger tap on the screen (CSS px of the capture) at `at` seconds: the touch indicator glides in, presses and
   * ripples. sgv adds a tap sound at the same moment when the edit has "sfx" on. */
  tap?: Tap | Tap[];
};

export type Tap = { x: number; y: number; at: number };

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** A real product screen in a brand window: the camera eases in to one callout, which is outlined and labelled. */
export const ProductScreen: React.FC<ProductScreenProps> = (p) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();
  const s = scaleOf(p);
  const c = colors(p.theme);
  const portrait = isPortrait(p);
  const W = p.width;
  const H = p.height;
  const sw = p.srcW ?? 1440;
  const sh = p.srcH ?? 900;
  const steps = p.steps?.length ? p.steps : p.callout ? [{ callout: p.callout, label: p.label, at: 0 }] : [];
  const call = steps[0]?.callout;
  const move = p.move ?? "push";

  // Base view: the whole screen fits the frame, above the bottom 20% in vertical formats.
  const margin = (portrait ? 64 : 120) * s;
  const sideMargin = p.sideMargin !== undefined ? p.sideMargin * s : margin;
  const base = Math.min((W - 2 * sideMargin) / sw, (H * (portrait ? 0.55 : 0.76)) / sh);
  const cy0 = H * (portrait ? 0.42 : 0.5);
  const coverS = Math.max(W / sw, H / sh);

  // Target view for a callout: it fills about half the width (78% in vertical), never more than 2.6x, so context stays.
  const target = (cl: Callout) => {
    const zoom = Math.min(2.6, Math.max(1, (W * (p.calloutFill ?? (portrait ? 0.78 : 0.5))) / (cl.w * base)));
    const S = p.cover && coverS > base * zoom && cl.w * coverS <= W - 2 * margin ? coverS : base * zoom;
    return { S, fx: cl.x + cl.w / 2, fy: cl.y + cl.h / 2, fyFrame: H * (portrait ? 0.4 : 0.44) };
  };
  // Defaults (no startZoom, no pushFrames) are the original timing: push from frame 6, ring at frame 40.
  const custom = p.startZoom !== undefined || p.pushFrames !== undefined;
  const k0 = Math.min(1, Math.max(0, p.startZoom ?? 0));
  const pushFrames = Math.max(1, p.pushFrames ?? Math.min(54, durationInFrames * 0.45));
  const pushDelay = k0 > 0 ? 0 : 6;
  const k = move === "push" && call ? lerp(k0, 1, progress(frame, pushDelay, pushFrames)) : 0;
  const panK = move === "pan" ? interpolate(frame, [0, durationInFrames], [0, 1]) : 0;
  const driftK = (p.drift ?? 0) * interpolate(frame, [0, durationInFrames], [0, 1]);

  // Camera: push from the whole screen to the first step, then travel to each later step in turn.
  const t0 = call ? target(call) : { S: base, fx: sw / 2, fy: sh / 2, fyFrame: cy0 };
  let camS = lerp(base, t0.S, k), camX = lerp(sw / 2, t0.fx, k), camY = lerp(sh / 2, t0.fy, k), camF = lerp(cy0, t0.fyFrame, k);
  const travelFrames = 21;
  const travel = steps.map((st, i) => (i === 0 ? 1 : progress(frame, Math.round((st.at ?? 0) * fps), travelFrames)));
  steps.forEach((st, i) => {
    if (i === 0) return;
    const t = target(st.callout), q = travel[i];
    camS = lerp(camS, t.S, q); camX = lerp(camX, t.fx, q); camY = lerp(camY, t.fy, q); camF = lerp(camF, t.fyFrame, q);
  });
  const S = camS * (1 + 0.04 * panK) * (1 + driftK);
  const focusX = camX + (move === "pan" ? (panK - 0.5) * sw * 0.06 : 0);
  const focusY = camY;
  const frameY = camF;
  // Keep the camera inside the window: once the scaled window is bigger than the frame on an axis,
  // never let a window edge come inside the frame on that axis (no empty canvas beside the screen).
  const clampAxis = (t: number, size: number, frameSize: number) =>
    size >= frameSize - 0.5 ? Math.min(0, Math.max(frameSize - size, t)) : t;
  const tx = clampAxis(W / 2 - S * focusX, S * sw, W);
  const ty = clampAxis(frameY - S * focusY, S * sh, H);
  const toFrame = (x: number, y: number) => ({ x: tx + S * x, y: ty + S * y });

  // The active step is the last one whose travel has started; its ring and label come in once the camera arrives.
  const active = steps.reduce((a, st, i) => (i > 0 && frame >= Math.round((st.at ?? 0) * fps) ? i : a), 0);
  const activeStep = steps[active];
  const nextAt = steps[active + 1] ? Math.round((steps[active + 1].at ?? 0) * fps) : Infinity;

  // Callout box in frame pixels, and its label below (or above when there's no room).
  const cl = activeStep?.callout;
  const box = cl ? { x: tx + S * cl.x, y: ty + S * cl.y, w: S * cl.w, h: S * cl.h } : null;
  const firstShow = p.ringAt ?? (move === "push" ? (custom ? Math.round(pushDelay + pushFrames * 0.5) : 40) : 14);
  const showFrom = active === 0 ? firstShow : Math.round((activeStep.at ?? 0) * fps) + travelFrames - 4;
  const markIn = enterClip(frame, durationInFrames, showFrom, s, { enterFade: showFrom > 0 || p.ringAt === undefined, exitFade: p.exitFade });
  const leaving = nextAt === Infinity ? 1 : interpolate(frame, [nextAt - 2, nextAt + 6], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const mark = { ...markIn, opacity: markIn.opacity * leaving };
  // The ring draws itself on around the element instead of fading in.
  const draw = showFrom <= 0 && p.ringAt !== undefined ? 1 : progress(frame, showFrom, 16);
  const label = active === 0 && !p.steps?.length ? p.label : activeStep?.label;
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
      {box && p.ring !== false && p.dim !== false ? (
        <div
          style={{
            position: "absolute",
            left: box.x - pad,
            top: box.y - pad,
            width: box.w + 2 * pad,
            height: box.h + 2 * pad,
            borderRadius: brand.video.cardRadius * s,
            boxShadow: `0 0 0 ${4000 * s}px ${p.theme === "light" ? "rgba(15, 23, 41, 0.28)" : "rgba(2, 6, 16, 0.5)"}`,
            opacity: mark.opacity,
          }}
        />
      ) : null}
      {box && p.ring !== false ? (() => {
        const rw = box.w + 2 * pad, rh = box.h + 2 * pad, r = brand.video.cardRadius * s, sw2 = 3 * s;
        const perim = 2 * (rw + rh - 4 * r) + 2 * Math.PI * r;
        return (
          <svg style={{ position: "absolute", left: box.x - pad, top: box.y - pad, overflow: "visible", opacity: leaving }}
            width={rw} height={rh}>
            <rect x={sw2 / 2} y={sw2 / 2} width={rw - sw2} height={rh - sw2} rx={r} ry={r} fill="none" stroke={c.primary}
              strokeWidth={sw2} strokeLinecap="round" strokeDasharray={perim} strokeDashoffset={perim * (1 - draw)} />
          </svg>
        );
      })() : null}
      {(Array.isArray(p.tap) ? p.tap : p.tap ? [p.tap] : []).map((t, i) => {
        // a touch indicator glides in from below-right, presses at `at`, ripples once and leaves
        const at = Math.round(t.at * fps);
        const pt = toFrame(t.x, t.y);
        const approach = progress(frame, at - 14, 14);
        const away = interpolate(frame, [at + 12, at + 22], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
        const vis = interpolate(frame, [at - 16, at - 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) * away;
        const press = frame >= at && frame < at + 6 ? 0.86 : 1;
        const ripple = progress(frame, at, 16);
        const d = 56 * s;
        const x = lerp(pt.x + 130 * s, pt.x, approach), y = lerp(pt.y + 190 * s, pt.y, approach);
        if (vis <= 0) return null;
        return (
          <React.Fragment key={i}>
            {frame >= at ? (
              <div style={{ position: "absolute", left: pt.x - (d / 2) * (1 + 1.6 * ripple), top: pt.y - (d / 2) * (1 + 1.6 * ripple),
                width: d * (1 + 1.6 * ripple), height: d * (1 + 1.6 * ripple), borderRadius: "50%",
                border: `${2.5 * s}px solid ${c.primary}`, opacity: (1 - ripple) * 0.9 }} />
            ) : null}
            <div style={{ position: "absolute", left: x - d / 2, top: y - d / 2, width: d, height: d, borderRadius: "50%",
              // like iOS's recorded-touch indicator: a dark translucent disc with a white rim reads on light and dark UI
              background: "rgba(15, 23, 41, 0.32)", border: `${3 * s}px solid rgba(255, 255, 255, 0.95)`,
              boxShadow: `0 ${6 * s}px ${18 * s}px rgba(15, 23, 41, 0.3)`, transform: `scale(${press})`, opacity: vis }} />
          </React.Fragment>
        );
      })}
      {box && label ? (
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
            {label}
          </div>
        </div>
      ) : null}
    </Stage>
  );
};
