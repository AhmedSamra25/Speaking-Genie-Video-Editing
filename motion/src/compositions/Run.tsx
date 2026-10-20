import React from "react";
import { AbsoluteFill, Easing, interpolate } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import type { TransitionPresentation, TransitionPresentationComponentProps } from "@remotion/transitions";
import { BaseProps, brand, colors, isEnablement } from "../brand";
import { groundOf } from "../components/Enablement";
import { easeOut } from "../anim";
import { Sweep, SweepProps } from "../components/Sweep";
import { EndCard } from "./EndCard";
import { Intro } from "./Intro";
import { ProductScreen } from "./ProductScreen";
import { QuoteCard } from "./QuoteCard";
import { StatCard } from "./StatCard";
import { TitleCard } from "./TitleCard";

/** A run of consecutive motion clips rendered as one composition, joined by TransitionSeries instead of xfade:
 * no seam and no extra encode between graphics. sgv (sgv/render.py) builds the run from edit.json. */
export type RunJoin = {
  type: "fade" | "blur" | "blur-slide" | "zoom-blur" | "dome";
  duration: number;
  /** blur-slide: the way the picture travels. Default "left". */
  direction?: "left" | "right" | "up";
  /** blur-slide: the outgoing clip shrinks to this scale as it leaves (0.92 for slide-scale). Default 1. */
  shrink?: number;
};

export type RunClip = { composition: string; props: Record<string, unknown>; duration: number; sweep?: SweepProps };

export type RunProps = BaseProps & { clips: RunClip[]; joins: RunJoin[] };

const COMPONENTS: Record<string, React.FC<any>> = { Intro, TitleCard, StatCard, QuoteCard, EndCard, ProductScreen };

// The presentations get linear progress (linearTiming, no easing) and ease it themselves with the brand bezier, so
// they also know the speed at each frame: the motion blur follows the speed and nothing ever overshoots.
type Pass = { type: RunJoin["type"]; direction: "left" | "right" | "up"; shrink: number; frames: number; w: number; h: number };

const speed = (t: number) => {
  const d = 0.004;
  return (easeOut(Math.min(1, t + d)) - easeOut(Math.max(0, t - d))) / (Math.min(1, t + d) - Math.max(0, t - d));
};

/** A directional gaussian blur as an inline SVG filter (CSS blur() is round, a push smears along its travel). */
const Streak: React.FC<{ id: string; x: number; y: number }> = ({ id, x, y }) => (
  <svg width={0} height={0} style={{ position: "absolute" }}>
    <filter id={id} x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB">
      <feGaussianBlur stdDeviation={`${x.toFixed(2)} ${y.toFixed(2)}`} edgeMode="duplicate" />
    </filter>
  </svg>
);

const Present: React.FC<TransitionPresentationComponentProps<Pass>> = ({
  presentationProgress: t,
  presentationDirection: dir,
  passedProps: p,
  children,
}) => {
  const e = easeOut(t);
  const entering = dir === "entering";
  const s = Math.min(p.w, p.h) / 1080;
  let style: React.CSSProperties = {};
  let filter: React.ReactNode = null;
  const id = `run-${p.type}-${dir}-${Math.round(t * 1e4)}`;
  if (p.type === "fade") {
    style = { opacity: entering ? e : 1 };
  } else if (p.type === "blur") {
    // a dissolve through a soft gaussian blur: 8 px at 1080 at the middle of the window, sharp at both ends
    const b = 8 * s * Math.sin(Math.PI * t);
    style = { opacity: entering ? e : 1, filter: `blur(${b.toFixed(2)}px)` };
  } else if (p.type === "blur-slide") {
    // both pictures travel together; blur length = distance moved during one frame (a 360° shutter)
    const span = p.direction === "up" ? p.h : p.w;
    const blur = Math.min(60 * s, (speed(t) * span) / p.frames / 2.2);
    const at = (entering ? 1 - e : -e) * (p.direction === "right" ? -100 : 100); // offset, % of the frame
    const shift = p.direction === "up" ? `translateY(${at}%)` : `translateX(${at}%)`;
    const shrink = entering ? 1 : 1 - (1 - p.shrink) * e;
    style = { transform: `${shift} scale(${shrink})`, filter: `url(#${id})` };
    filter = <Streak id={id} x={p.direction === "up" ? 0 : blur} y={p.direction === "up" ? blur : 0} />;
  } else if (p.type === "zoom-blur") {
    // the brand zoom-through: the outgoing picture pushes in 25% and fades, the incoming one settles from 15% in
    const blur = Math.min(24 * s, speed(t) * 0.2 * 1080 * s / p.frames / 2.2);
    const scale = entering ? 1 + 0.15 * (1 - e) : 1 + 0.25 * e;
    style = { transform: `scale(${scale})`, opacity: entering ? interpolate(e, [0, 0.6], [0, 1], { extrapolateRight: "clamp" }) : 1,
      filter: `blur(${blur.toFixed(2)}px)` };
  } else if (p.type === "dome") {
    // the incoming picture grows from the Enablement dome: a circle hung off the top edge, centred, whose arc
    // passes the dome's own arc on its way to covering the frame
    const o = p.h >= p.w ? "portrait" : "landscape"; // as the Dome picks it
    const d = p.w * brand.enablement.dome.diameter[o];
    const cy = p.h * brand.enablement.dome.depth[o] - d / 2;
    const r0 = Math.max(0, -cy);
    const r1 = Math.hypot(p.w / 2, p.h - cy) + 2;
    if (entering) style = { clipPath: `circle(${(r0 + (r1 - r0) * e).toFixed(1)}px at ${p.w / 2}px ${cy.toFixed(1)}px)` };
  }
  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {filter}
      <AbsoluteFill style={style}>{children}</AbsoluteFill>
    </AbsoluteFill>
  );
};

const presentation = (j: RunJoin, frames: number, w: number, h: number): TransitionPresentation<Pass> => ({
  component: Present,
  props: { type: j.type, direction: j.direction ?? "left", shrink: j.shrink ?? 1, frames, w, h },
});

export const Run: React.FC<RunProps> = (p) => {
  const base = { width: p.width, height: p.height, fps: p.fps, theme: p.theme, lang: p.lang };
  const items: React.ReactNode[] = [];
  p.clips.forEach((c, i) => {
    const Comp = COMPONENTS[c.composition];
    if (!Comp) throw new Error(`Run: unknown composition ${c.composition}`);
    const frames = Math.max(1, Math.round(c.duration * p.fps));
    const body = <Comp {...base} {...c.props} duration={c.duration} />;
    items.push(
      <TransitionSeries.Sequence key={`c${i}`} durationInFrames={frames}>
        {c.sweep ? <Sweep {...c.sweep}>{body}</Sweep> : body}
      </TransitionSeries.Sequence>,
    );
    const j = p.joins[i];
    if (j && i < p.clips.length - 1) {
      const jf = Math.max(1, Math.round(j.duration * p.fps));
      items.push(
        <TransitionSeries.Transition
          key={`t${i}`}
          timing={linearTiming({ durationInFrames: jf, easing: Easing.linear })}
          presentation={presentation(j, jf, p.width, p.height)}
        />,
      );
    }
  });
  return (
    <AbsoluteFill style={{ background: isEnablement(p) ? groundOf(p) : colors(p.theme).canvas }}>
      <TransitionSeries>{items}</TransitionSeries>
    </AbsoluteFill>
  );
};
