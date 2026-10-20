import React, { useLayoutEffect, useRef, useState } from "react";
import { continueRender, delayRender, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { brand } from "../brand";
import { progress } from "../anim";

/** How a headline comes in: "lines" rises line by line from behind a mask (default), "fade" is the plain fade + rise. */
export type Reveal = "lines" | "fade";

type Word = { text: string; phrase: boolean; marker: boolean };

/** Words of `text`, each flagged when it overlaps the first occurrence of `phrase` or `marker`. */
const words = (text: string, phrase?: string, marker?: string): Word[] => {
  const span = (p?: string) => {
    const i = p ? text.indexOf(p) : -1;
    return i < 0 || !p ? [-1, -1] : [i, i + p.length];
  };
  const [p0, p1] = span(phrase);
  const [m0, m1] = span(marker);
  const out: Word[] = [];
  // split on ordinary spaces only: a non-breaking space (U+00A0) keeps two words on one line
  const re = /[^ \t\n\r]+/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    const a = m.index, b = a + m[0].length;
    out.push({ text: m[0], phrase: a < p1 && b > p0, marker: a < m1 && b > m0 });
  }
  return out;
};

/**
 * A headline set line by line behind a mask: each line rises into place from below its own edge, 5 frames after
 * the one above it. Lines break at `width` (measured with the loaded font), and every line stays one run of text, so Arabic shaping and mixed Arabic/Latin order are untouched. `phrase` words take `phraseColor`;
 * `marker` words get a highlight bar that draws on under them from the start side once the lines have landed.
 * `animate: false` shows everything from frame 0 (clips inside a cut sequence). Fades out over the last 12 frames
 * unless `exit` is false.
 */
export const MaskedLines: React.FC<{
  text: string;
  /** The width the lines break at, in px (the headline's max width). */
  width: number;
  delay?: number;
  rtl: boolean;
  phrase?: string;
  phraseColor?: string;
  marker?: string;
  markerColor?: string;
  animate?: boolean;
  exit?: boolean;
  /** Quote marks set before the first word and after the last, in `marksColor`. */
  marks?: [string, string];
  marksColor?: string;
}> = ({ text, width, delay = 6, rtl, phrase, phraseColor, marker, markerColor, animate = true, exit = true, marks, marksColor }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const ws = words(text, phrase, marker);
  const ref = useRef<HTMLDivElement>(null);
  const [lineOf, setLineOf] = useState<number[] | null>(null);
  const [handle] = useState(() => delayRender("Laying out headline lines"));
  useLayoutEffect(() => {
    // Lines are broken with canvas text metrics against `width`, not read back from the DOM: Remotion mounts a
    // composition in a narrow offscreen box first, so DOM line positions at mount time are not the final ones.
    let live = true;
    const el = ref.current;
    if (!el) return;
    const cs = getComputedStyle(el);
    const font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    document.fonts
      .load(font, text)
      .catch(() => undefined)
      .then(() => {
        if (!live) return;
        const ctx = document.createElement("canvas").getContext("2d") as CanvasRenderingContext2D & { letterSpacing?: string };
        ctx.font = font;
        if (cs.letterSpacing && cs.letterSpacing !== "normal") ctx.letterSpacing = cs.letterSpacing;
        const space = ctx.measureText(" ").width;
        let line = 0, x = 0;
        const idx = ws.map((w, i) => {
          const wd = ctx.measureText((i === 0 && marks ? marks[0] : "") + w.text + (i === ws.length - 1 && marks ? marks[1] : "")).width;
          if (i && x + space + wd > width) {
            line += 1;
            x = wd;
          } else x += (i ? space : 0) + wd;
          return line;
        });
        setLineOf(idx);
        continueRender(handle);
      });
    return () => {
      live = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, width, handle]);

  if (!lineOf) {
    // style probe only (font, size, tracking); never screenshotted
    return (
      <div ref={ref} style={{ visibility: "hidden" }}>
        {text}
      </div>
    );
  }

  const lines: Word[][] = [];
  ws.forEach((w, i) => (lines[lineOf[i]] ??= []).push(w));
  const out = exit
    ? interpolate(frame, [durationInFrames - brand.video.motion.exitFrames, durationInFrames], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : 1;
  const stagger = 5;
  const markerAt = delay + (lines.length - 1) * stagger + 16;
  const markK = animate ? progress(frame, markerAt, 14) : 1;

  // consecutive words with the same flags become one run, so a coloured phrase or a marker is one span
  const runs = (line: Word[]) => {
    const rs: { text: string; phrase: boolean; marker: boolean }[] = [];
    line.forEach((w) => {
      const last = rs[rs.length - 1];
      if (last && last.phrase === w.phrase && last.marker === w.marker) last.text += ` ${w.text}`;
      else rs.push({ ...w });
    });
    return rs;
  };

  return (
    <div style={{ opacity: out }}>
      {lines.map((line, li) => {
        const k = animate ? progress(frame, delay + li * stagger, 20) : 1;
        return (
          // the mask: padding keeps Arabic marks and descenders inside it, the negative margin keeps the leading
          <div key={li} style={{ overflow: "hidden", padding: "0.14em 0.08em", margin: "-0.14em -0.08em", isolation: "isolate" }}>
            <div style={{ transform: `translateY(${(1 - k) * 125}%)`, whiteSpace: "nowrap" }}>
              {marks && li === 0 ? <span style={{ color: marksColor }}>{marks[0]}</span> : null}
              {runs(line).map((r, ri) => (
                <React.Fragment key={ri}>
                  {ri ? " " : null}
                  <span style={{ color: r.phrase ? phraseColor : undefined, position: r.marker ? "relative" : undefined }}>
                    {r.marker ? (
                      <span
                        style={{
                          position: "absolute",
                          left: "-0.08em",
                          right: "-0.08em",
                          bottom: rtl ? "0.16em" : "0.06em",
                          height: "0.32em",
                          borderRadius: "0.08em",
                          background: markerColor,
                          zIndex: -1,
                          transform: `scaleX(${markK})`,
                          transformOrigin: rtl ? "right" : "left",
                        }}
                      />
                    ) : null}
                    {r.text}
                  </span>
                </React.Fragment>
              ))}
              {marks && li === lines.length - 1 ? <span style={{ color: marksColor }}>{marks[1]}</span> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};
