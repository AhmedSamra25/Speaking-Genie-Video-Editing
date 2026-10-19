import React from "react";
import { CalculateMetadataFunction, Composition } from "remotion";
import { BaseProps, baseDefaults } from "./brand";
import { EndCard } from "./compositions/EndCard";
import { Intro } from "./compositions/Intro";
import { LowerThird } from "./compositions/LowerThird";
import { ProductScreen } from "./compositions/ProductScreen";
import { QuoteCard } from "./compositions/QuoteCard";
import { StatCard } from "./compositions/StatCard";
import { TitleCard } from "./compositions/TitleCard";

// Studio defaults hold only required fields: Remotion merges defaultProps into every render,
// so an optional sample (a tagline, a subline) would leak into videos that never asked for it.
// Size, fps and length come from props, so sgv can render any composition at any aspect ratio.
const fromProps: CalculateMetadataFunction<BaseProps> = ({ props }) => ({
  width: props.width,
  height: props.height,
  fps: props.fps,
  durationInFrames: Math.max(1, Math.round(props.duration * props.fps)),
});

const comp = <P extends BaseProps>(id: string, component: React.FC<P>, defaults: Omit<P, keyof BaseProps>) => (
  <Composition
    id={id}
    component={component as React.FC<Record<string, unknown>>}
    width={baseDefaults.width}
    height={baseDefaults.height}
    fps={baseDefaults.fps}
    durationInFrames={baseDefaults.duration * baseDefaults.fps}
    defaultProps={{ ...baseDefaults, ...defaults } as Record<string, unknown>}
    calculateMetadata={fromProps as unknown as CalculateMetadataFunction<Record<string, unknown>>}
  />
);

export const Root: React.FC = () => (
  <>
    {comp("Intro", Intro, {})}
    {comp("TitleCard", TitleCard, { title: "Speak with confidence" })}
    {comp("StatCard", StatCard, { label: "Average fluency score", value: 74 })}
    {comp("QuoteCard", QuoteCard, {
      quote: "Our students speak more in one week with Speaking Genie than in a month of classes.",
      name: "Mona Adel",
    })}
    {comp("EndCard", EndCard, { headline: "Start a free pilot" })}
    {comp("LowerThird", LowerThird, { name: "Mona Adel" })}
    {comp("ProductScreen", ProductScreen, { src: "" })}
  </>
);
