import React from "react";
import { AbsoluteFill } from "remotion";
import { BaseProps, colors, textStyle } from "../brand";
import { loadBrandFonts } from "../fonts";

loadBrandFonts();

/** Full-frame brand canvas. `transparent` leaves the background empty for overlays. */
export const Stage: React.FC<{ p: BaseProps; transparent?: boolean; children: React.ReactNode }> = ({
  p,
  transparent,
  children,
}) => {
  const c = colors(p.theme);
  return (
    <AbsoluteFill
      style={{
        background: transparent ? "transparent" : c.canvas,
        color: c.ink,
        fontFeatureSettings: '"tnum" 1',
        ...textStyle(p.lang),
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
