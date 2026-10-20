import { noise2D } from "@remotion/noise";
import { Easing, interpolate } from "remotion";
import { brand } from "./brand";

const m = brand.video.motion;
// cubic-bezier(0.22, 1, 0.36, 1): calm ease-out, never overshoots.
export const easeOut = Easing.bezier(0.22, 1, 0.36, 1);

/** Fade + rise in at `delay`, fade out at the end of the clip. Returns style for an element. */
export const enter = (frame: number, total: number, delay = 0, s = 1, exit = true) => {
  const inP = interpolate(frame - delay, [0, m.enterFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easeOut,
  });
  const outP = exit
    ? interpolate(frame, [total - m.exitFrames, total], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    : 1;
  return {
    opacity: inP * outP,
    transform: `translateY(${(1 - inP) * m.riseDistance * s}px)`,
  };
};

/** 0→1 progress over `frames` starting at `delay`, eased. */
export const progress = (frame: number, delay: number, frames: number) =>
  interpolate(frame - delay, [0, frames], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeOut });

/** Per-clip switches for clips inside a cut sequence: `enterFade: false` shows the element fully on frame 0
 * (no fade, no rise), `exitFade: false` holds it to the last frame. Both default to true (unchanged behaviour). */
export type FadeProps = { enterFade?: boolean; exitFade?: boolean };

/** `enter`, honouring the clip's FadeProps. */
export const enterClip = (frame: number, total: number, delay: number, s: number, f: FadeProps, exit = true) => {
  const doExit = exit && f.exitFade !== false;
  if (f.enterFade !== false) return enter(frame, total, delay, s, doExit);
  const outP = doExit
    ? interpolate(frame, [total - m.exitFrames, total], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
    : 1;
  return { opacity: outP, transform: "translateY(0px)" };
};

/** Ease-in-out for camera travel and parallax slides (a sine curve: no overshoot). */
export const easeInOut = Easing.inOut(Easing.sin);

/** Slow organic wander, about -1..1 on each axis: one lazy loop every ~8 s, so a screen or still feels held by a
 * person without ever jittering. Same seed, same path, on every render. */
export const wander = (frame: number, fps: number, seed = "drift") => {
  const t = (frame / fps) * 0.12;
  return { x: noise2D(`${seed}-x`, t, 0), y: noise2D(`${seed}-y`, 0, t) };
};

/** 2.5D parallax: a slow camera slide across the clip (in the reading direction) plus a gentle wander, as the
 * offset of the nearest layer in px. `amount` 1 is the default travel (about 22 px at 1080); 0 turns it off. */
export const parallaxXY = (frame: number, total: number, fps: number, s: number, amount: number, rtl: boolean) => {
  const k = interpolate(frame, [0, total], [1, -1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeInOut });
  const w = wander(frame, fps, "parallax");
  return { x: (k * 22 + w.x * 6) * s * amount * (rtl ? -1 : 1), y: (w.y * 5 - k * 4) * s * amount };
};

/** The parallax as a transform for a layer at `depth` (0 = far, it stays put; 1 = nearest, it moves most). */
export const parallax = (frame: number, total: number, fps: number, s: number, amount: number, rtl: boolean) => {
  const { x, y } = parallaxXY(frame, total, fps, s, amount, rtl);
  return (depth: number) => `translate(${x * depth}px, ${y * depth}px)`;
};

/** The capsule wipe (egWipe): a capsule-ended window opens from the start side (the right in Arabic). */
export const wipe = (frame: number, delay: number, rtl: boolean, frames = 16) => {
  const k = progress(frame, delay, frames);
  if (k >= 1) return {};
  const rest = `${(1 - k) * 100}%`;
  return { clipPath: rtl ? `inset(0 0 0 ${rest} round 999px)` : `inset(0 ${rest} 0 0 round 999px)` };
};
