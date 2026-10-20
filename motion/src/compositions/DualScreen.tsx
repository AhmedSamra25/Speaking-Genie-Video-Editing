import React from "react";
import { evolvePath, getLength, getPointAtLength } from "@remotion/paths";
import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { BaseProps, brand, colors, fonts, isEnablement, isPortrait, scaleOf } from "../brand";
import { FadeProps, enterClip, parallaxXY, progress, wander } from "../anim";
import { PHONE, phoneIn } from "../components/Device";
import { DEPTH, en, trackOf } from "../components/Enablement";
import { Stage } from "../components/Stage";
import { Callout } from "./ProductScreen";

export type DualScreenProps = BaseProps &
  FadeProps & {
  /** A mobile app capture (`sgv screen`, 430×884 CSS px) and a web platform capture, staged by sgv. */
  mobileSrc: string;
  webSrc: string;
  mobileSrcW?: number;
  mobileSrcH?: number;
  webSrcW?: number;
  webSrcH?: number;
  /** One short line under each side ("Students practise" / "The centre sees it"). */
  mobileLabel?: string;
  webLabel?: string;
  /** The one element to ring on each screen, in that capture's CSS px. */
  mobileCallout?: Callout;
  webCallout?: Callout;
  /** When the web side comes in, in seconds (default 0.6): the phone leads, the centre's view answers. */
  webAt?: number;
  /** 16:9 only: a line that draws from the phone to the web window, and a dot that travels along it (default true). */
  link?: boolean;
};

/** "Students practise, the centre sees it": the learner's phone and the centre's web platform side by side
 * (16:9, the phone on the reading side first) or overlapping (9:16, the web window above, the phone in front).
 * Both screens are shown as shipped. The phone is the near layer, the web window the far one. */
export const DualScreen: React.FC<DualScreenProps> = (p) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();
  const s = scaleOf(p);
  const c = colors(p.theme);
  const W = p.width, H = p.height;
  const portrait = isPortrait(p);
  const ar = p.lang === "ar";
  const enab = isEnablement(p);
  const t = trackOf(p);
  const accent = enab ? t.phrase : c.primary;
  const msw = p.mobileSrcW ?? 430, msh = p.mobileSrcH ?? 884;
  const wsw = p.webSrcW ?? 1440, wsh = p.webSrcH ?? 900;
  const ph = phoneIn(msw, msh);
  const phone = ph?.phone ?? { x: 0, y: 0, w: msw, h: msh };
  const webAt = Math.round((p.webAt ?? 0.6) * fps);

  // Layout in frame px: phone box (P) and web window (Wb).
  const m = (portrait ? 64 : 120) * s;
  let P: { x: number; y: number; h: number }, Wb: { x: number; y: number; w: number };
  if (portrait) {
    const ww = W - 2 * m;
    Wb = { x: m, y: H * 0.12, w: ww };
    const phH = H * 0.46;
    const phW = (phH * phone.w) / phone.h;
    P = { x: ar ? W - m * 0.75 - phW : m * 0.75, y: H * 0.33, h: phH };
  } else {
    const gap = 72 * s;
    const phH = H * 0.7;
    const phW = (phH * phone.w) / phone.h;
    const ww = Math.min(W - 2 * m - phW - gap, ((H * 0.7) * wsw) / wsh);
    const total = phW + gap + ww;
    const x0 = (W - total) / 2;
    // a little above centre, so the labels under both fit
    P = { x: ar ? x0 + ww + gap : x0, y: H * 0.09, h: phH };
    Wb = { x: ar ? x0 : x0 + phW + gap, y: H * 0.09 + (phH - (ww * wsh) / wsw) / 2, w: ww };
  }
  const pS = P.h / phone.h;
  const wS = Wb.w / wsw;
  const wH = wsh * wS;
  const phW = phone.w * pS;

  // A living camera: wander, and in the Enablement look the parallax (phone near, web far).
  const wd = wander(frame, fps, "dual");
  const par = parallaxXY(frame, durationInFrames, fps, s, p.parallax ?? (enab ? 1 : 0), ar);
  const layer = (depth: number) =>
    `translate(${wd.x * 10 * s * depth + par.x * depth}px, ${wd.y * 8 * s * depth + par.y * depth}px)`;

  const phoneIn_ = enterClip(frame, durationInFrames, 0, s, p);
  // the web side always arrives after the phone (that is the story), even inside a cut sequence
  const webIn = enterClip(frame, durationInFrames, webAt, s, { enterFade: webAt > 0 || p.enterFade !== false, exitFade: p.exitFade });
  const shadow = enab
    ? `0 ${18 * s}px ${40 * s}px -${20 * s}px ${en.shadow}`
    : p.theme === "light"
    ? `0 ${16 * s}px ${40 * s}px -${12 * s}px rgba(16, 24, 40, 0.18)`
    : `0 ${18 * s}px ${44 * s}px -${12 * s}px rgba(0, 0, 0, 0.65)`;

  const ring = (cl: Callout | undefined, ox: number, oy: number, sc: number, at: number) => {
    if (!cl) return null;
    const pad = 8 * s, r = brand.video.cardRadius * s, sw2 = 3 * s;
    const bw = cl.w * sc + 2 * pad, bh = cl.h * sc + 2 * pad;
    const perim = 2 * (bw + bh - 4 * r) + 2 * Math.PI * r;
    const k = progress(frame, at, 16);
    return (
      <svg style={{ position: "absolute", left: ox + cl.x * sc - pad, top: oy + cl.y * sc - pad, overflow: "visible" }} width={bw} height={bh}>
        <rect x={sw2 / 2} y={sw2 / 2} width={bw - sw2} height={bh - sw2} rx={r} ry={r} fill="none" stroke={accent}
          strokeWidth={sw2} strokeLinecap="round" strokeDasharray={perim} strokeDashoffset={perim * (1 - k)} />
      </svg>
    );
  };

  const label = (text: string | undefined, style: React.CSSProperties, at: number) =>
    text ? (
      <div style={{ position: "absolute", display: "flex", justifyContent: "center", ...style, ...enterClip(frame, durationInFrames, at, s, p),
        transform: [enterClip(frame, durationInFrames, at, s, p).transform, layer(DEPTH.capsule)].join(" ") }}>
        <div
          style={{
            padding: `${14 * s}px ${28 * s}px`,
            background: enab ? en.plate : c.surface,
            border: `${enab ? 1.5 * s : Math.max(1, s)}px solid ${enab ? en.capsule.stroke : c.border}`,
            borderRadius: enab ? 999 : brand.video.cardRadius * s,
            color: enab ? en.ink : c.ink,
            fontFamily: enab ? fonts.display : undefined,
            fontSize: (portrait ? 36 : 30) * s,
            fontWeight: ar ? 600 : 700,
            letterSpacing: ar ? 0 : "-0.01em",
            whiteSpace: "nowrap",
            direction: ar ? "rtl" : "ltr",
          }}
        >
          {text}
        </div>
      </div>
    ) : null;

  // 16:9 link: a gentle arc from the phone's inner edge to the web window's, drawn on once both are in.
  const linkAt = webAt + 14;
  const a = { x: ar ? P.x : P.x + phW, y: P.y + P.h * 0.45 };
  const b = { x: ar ? Wb.x + Wb.w : Wb.x, y: Wb.y + wH * 0.5 };
  const linkD = `M ${a.x} ${a.y} Q ${(a.x + b.x) / 2} ${Math.min(a.y, b.y) - 70 * s} ${b.x} ${b.y}`;
  const linkK = progress(frame, linkAt, 20);
  const dotK = progress(frame, linkAt + 20, 24);
  const dot = getPointAtLength(linkD, getLength(linkD) * dotK);
  const showLink = !portrait && p.link !== false;
  const ev = evolvePath(Math.max(0.0001, linkK), linkD);

  const mobileImg = p.mobileSrc ? <Img src={staticFile(p.mobileSrc)} style={{ width: msw, height: msh, display: "block" }} /> : null;
  return (
    <Stage p={p}>
      <AbsoluteFill style={{ transform: layer(DEPTH.screen) }}>
        <div style={{ position: "absolute", left: Wb.x, top: Wb.y, width: Wb.w, height: wH, ...webIn,
          background: c.surface, border: `${Math.max(1, s)}px solid ${enab ? en.border : c.border}`,
          borderRadius: brand.video.windowRadius * s, overflow: "hidden", boxShadow: shadow }}>
          {p.webSrc ? <Img src={staticFile(p.webSrc)} style={{ width: Wb.w, height: wH, display: "block" }} /> : null}
        </div>
        <div style={{ position: "absolute", inset: 0, opacity: webIn.opacity }}>
          {ring(p.webCallout, Wb.x, Wb.y, wS, webAt + (showLink ? 40 : 16))}
        </div>
      </AbsoluteFill>
      {showLink ? (
        <svg style={{ position: "absolute", inset: 0, overflow: "visible", opacity: phoneIn_.opacity }} width={W} height={H}>
          <path d={linkD} fill="none" stroke={accent} strokeWidth={3 * s} strokeLinecap="round" opacity={0.6}
            strokeDasharray={ev.strokeDasharray} strokeDashoffset={ev.strokeDashoffset} />
          {dotK > 0 && dotK < 1 && dot ? <circle cx={dot.x} cy={dot.y} r={8 * s} fill={accent} /> : null}
        </svg>
      ) : null}
      <AbsoluteFill style={{ transform: layer(1) }}>
        <div style={{ position: "absolute", left: P.x, top: P.y, width: phW, height: P.h, ...phoneIn_,
          borderRadius: PHONE.outer * pS, overflow: "hidden", boxShadow: shadow, background: PHONE.ink }}>
          <div style={{ position: "absolute", left: 0, top: 0, width: msw, height: msh, transformOrigin: "0 0",
            transform: `scale(${pS}) translate(${-phone.x}px, ${-phone.y}px)` }}>
            {mobileImg}
          </div>
        </div>
        <div style={{ position: "absolute", inset: 0, opacity: phoneIn_.opacity }}>
          {ring(p.mobileCallout, P.x - phone.x * pS, P.y - phone.y * pS, pS, 16)}
        </div>
      </AbsoluteFill>
      {portrait ? (
        // labels on the side away from the phone (flex-end is the left in Arabic, the right in English)
        <>
          {label(p.webLabel, { left: 0, right: 0, top: Wb.y + wH + 28 * s, justifyContent: "flex-end",
            padding: `0 ${m}px` }, webAt + 8)}
          {label(p.mobileLabel, { left: 0, right: 0, top: P.y + P.h * 0.62, justifyContent: "flex-end",
            padding: `0 ${m}px` }, 10)}
        </>
      ) : (
        <>
          {label(p.mobileLabel, { left: P.x - 100 * s, width: phW + 200 * s, top: P.y + P.h + 20 * s }, 10)}
          {label(p.webLabel, { left: Wb.x, width: Wb.w, top: Wb.y + wH + 28 * s }, webAt + 8)}
        </>
      )}
    </Stage>
  );
};
