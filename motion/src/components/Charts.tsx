import React from "react";
import { evolvePath } from "@remotion/paths";
import { interpolate } from "remotion";
import { progress } from "../anim";

/** A progress ring that draws itself on, clockwise from twelve o'clock, to `k` (0–1) of the circle. The track is
 * a full hairline circle underneath; the arc has round ends. Children sit in the centre (the number). */
export const Ring: React.FC<{
  size: number;
  stroke: number;
  k: number;
  color: string;
  track: string;
  children?: React.ReactNode;
}> = ({ size, stroke, k, color, track, children }) => {
  const r = (size - stroke) / 2;
  const c = size / 2;
  // two half arcs: one SVG arc can't draw a whole circle
  const d = `M ${c} ${c - r} A ${r} ${r} 0 1 1 ${c} ${c + r} A ${r} ${r} 0 1 1 ${c} ${c - r}`;
  const ev = evolvePath(Math.max(0.0001, Math.min(1, k)), d);
  return (
    <div style={{ position: "relative", width: size, height: size, margin: "0 auto" }}>
      <svg width={size} height={size} style={{ position: "absolute", inset: 0 }}>
        <circle cx={c} cy={c} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        {k > 0 ? (
          <path d={d} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round"
            strokeDasharray={ev.strokeDasharray} strokeDashoffset={ev.strokeDashoffset} />
        ) : null}
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        {children}
      </div>
    </div>
  );
};

/** A line chart of `series` that draws on from left to right over `k` (0–1), with a dot that lands on the last
 * value. Calm straight segments, no axes: the number above it is the message. */
export const LineChart: React.FC<{
  series: number[];
  width: number;
  height: number;
  stroke: number;
  k: number;
  color: string;
  track: string;
}> = ({ series, width, height, stroke, k, color, track }) => {
  const lo = Math.min(...series), hi = Math.max(...series);
  const pad = stroke * 2.5;
  const pts = series.map((v, i) => [
    pad + ((width - 2 * pad) * i) / Math.max(1, series.length - 1),
    pad + (height - 2 * pad) * (1 - (hi === lo ? 0.5 : (v - lo) / (hi - lo))),
  ]);
  const d = pts.map(([x, y], i) => `${i ? "L" : "M"} ${x.toFixed(2)} ${y.toFixed(2)}`).join(" ");
  const ev = evolvePath(Math.max(0.0001, Math.min(1, k)), d);
  const last = pts[pts.length - 1];
  const dot = interpolate(k, [0.92, 1], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <svg width={width} height={height} style={{ display: "block", margin: "0 auto", overflow: "visible" }}>
      <line x1={pad} x2={width - pad} y1={height - pad} y2={height - pad} stroke={track} strokeWidth={Math.max(1, stroke / 3)} />
      <path d={d} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray={ev.strokeDasharray} strokeDashoffset={ev.strokeDashoffset} />
      <circle cx={last[0]} cy={last[1]} r={stroke * 1.6 * dot} fill={color} />
    </svg>
  );
};

/** Bars that rise in turn (3 frames apart) from the baseline; the last bar, the result, is in `color`. */
export const Bars: React.FC<{
  series: number[];
  width: number;
  height: number;
  frame: number;
  delay: number;
  color: string;
  rest: string;
  radius: number;
}> = ({ series, width, height, frame, delay, color, rest, radius }) => {
  const hi = Math.max(...series, 0.0001);
  const gap = width / series.length * 0.28;
  const bw = (width - gap * (series.length - 1)) / series.length;
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap, width, height, margin: "0 auto", direction: "ltr" }}>
      {series.map((v, i) => (
        <div key={i} style={{ width: bw, height: Math.max(radius, (height * v * progress(frame, delay + i * 3, 24)) / hi),
          borderRadius: `${radius}px ${radius}px ${radius / 3}px ${radius / 3}px`, background: i === series.length - 1 ? color : rest }} />
      ))}
    </div>
  );
};
