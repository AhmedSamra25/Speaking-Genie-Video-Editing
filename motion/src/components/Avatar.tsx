import React from "react";
import { brand } from "../brand";

/** Initials on Purple 100 / Purple 700 — the design system's avatar. `enablement` uses that system's purples. */
export const Avatar: React.FC<{ name: string; size: number; enablement?: boolean }> = ({ name, size, enablement }) => {
  const pal = enablement ? brand.enablement.purple : brand.purple;
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 999,
        background: pal["100"],
        color: pal["700"],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: size * 0.38,
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
};
