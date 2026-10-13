import React from "react";
import { Img, staticFile } from "remotion";
import { Theme, colors } from "../brand";

/** Official lockup (1291×284). Size by height only; never recolour or stretch. */
export const Logo: React.FC<{ theme: Theme; height: number; mark?: boolean; style?: React.CSSProperties }> = ({
  theme,
  height,
  mark,
  style,
}) => {
  const file = mark ? "logo-mark.png" : colors(theme).logo;
  return <Img src={staticFile(`brand/logos/${file}`)} style={{ height, width: "auto", display: "block", ...style }} />;
};
