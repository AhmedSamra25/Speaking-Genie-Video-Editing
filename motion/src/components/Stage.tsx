import React from "react";
import { AbsoluteFill } from "remotion";
import { BaseProps, colors, isEnablement, isPortrait, scaleOf, textStyle } from "../brand";
import { loadBrandFonts } from "../fonts";
import { Dome, Lockup, en, groundOf } from "./Enablement";

loadBrandFonts();

/** Full-frame brand canvas. `transparent` leaves the background empty for overlays.
 * In the Enablement look the canvas is a purple ground with the dome; `lockup` adds the white lockup top-centre. */
export const Stage: React.FC<{ p: BaseProps; transparent?: boolean; lockup?: boolean; children: React.ReactNode }> = ({
  p,
  transparent,
  lockup,
  children,
}) => {
  const c = colors(p.theme);
  const enab = isEnablement(p);
  const s = scaleOf(p);
  return (
    <AbsoluteFill
      style={{
        background: transparent ? "transparent" : enab ? groundOf(p) : c.canvas,
        color: enab ? en.ink : c.ink,
        fontFeatureSettings: '"tnum" 1',
        ...textStyle(p.lang, p.look),
      }}
    >
      {enab && !transparent ? <Dome p={p} /> : null}
      {enab && !transparent && lockup ? (
        <div style={{ position: "absolute", top: 64 * s, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
          <Lockup height={(isPortrait(p) ? 56 : 48) * s} />
        </div>
      ) : null}
      {children}
    </AbsoluteFill>
  );
};
