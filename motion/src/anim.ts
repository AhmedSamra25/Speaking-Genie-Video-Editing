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
