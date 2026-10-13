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
