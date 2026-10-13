import React from "react";
import { Theme, brand, colors } from "../brand";

/** White "window" card from the onboarding video: 22px radius, 1px border, soft lift. */
export const Window: React.FC<{ theme: Theme; s: number; style?: React.CSSProperties; children: React.ReactNode }> = ({
  theme,
  s,
  style,
  children,
}) => {
  const c = colors(theme);
  return (
    <div
      style={{
        background: c.surface,
        border: `${Math.max(1, s)}px solid ${c.border}`,
        borderRadius: brand.video.windowRadius * s,
        boxShadow:
          theme === "light"
            ? `0 ${16 * s}px ${40 * s}px -${12 * s}px rgba(16, 24, 40, 0.18)`
            : `0 ${18 * s}px ${44 * s}px -${12 * s}px rgba(0, 0, 0, 0.65)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
