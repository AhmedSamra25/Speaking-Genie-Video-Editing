---
name: motion-graphics
description: Create or change Speaking Genie branded motion graphics (Remotion compositions in motion/) — new title styles, animated stats, product UI callouts, social templates, caption styles. Use when a video needs an on-screen graphic the existing compositions (Intro, TitleCard, StatCard, QuoteCard, EndCard, LowerThird) don't cover.
---

# Motion graphics

The compositions live in `motion/src/compositions/*.tsx` and are registered in `motion/src/Root.tsx`.

- **Props contract.** Every composition takes `BaseProps` (`width, height, fps, duration, theme, lang`) plus its own props. Size and length come from props via `calculateMetadata`, so the same graphic renders at 16:9, 9:16, 1:1 and 4K.
- **Scale.** Design for a 1080 px short edge and multiply every pixel value by `s = scaleOf(p)`. Use `isPortrait(p)` to switch to a centred layout in vertical formats.
- **Brand.** Take colours from `colors(p.theme)` and `brand.*` (from `brand/tokens.json`), and text styles from `textStyle(p.lang)`. Use `Stage` for the canvas (`transparent` for overlays), `Window` for cards, `Logo` and `Avatar` for those elements. Never hard-code a hex value that isn't in tokens.json.
- **Motion.** Use `enter(frame, total, delay, s)` (fade + 24 px rise, eased, with an exit fade) and `progress()`, staggered 4–6 frames apart. No springs with overshoot, no bounce, no spin.
- **Shared devices** (reuse them, don't rebuild): `anim.ts` has `wander()` (noise drift, `@remotion/noise`), `parallaxXY()`/`parallax()` and `wipe()` (the capsule wipe); `components/Enablement.tsx` has `useDepth(p)` and `DEPTH` for 2.5D layers; `components/Kinetic.tsx` has `MaskedLines` (line-mask headlines with phrase colour and a highlight marker; lines break by canvas text metrics at a given width, because Remotion mounts compositions in a narrow offscreen box first, so never measure line positions from the DOM); `components/Charts.tsx` has `Ring`, `LineChart`, `Bars` (`@remotion/paths` draw-on); `components/Device.tsx` has the mobile kit's phone geometry (`phoneIn`), `VoiceBars` (`@remotion/media-utils`) and `Cursor`; `brand.ts` has `formatNumber`/`localAffix` (Arabic-Indic digits) and `markerColor`.
- **Packages.** Every `@remotion/*` package is pinned to exactly the Remotion version (4.0.530): `npm install --save-exact @remotion/<pkg>@4.0.530`.
- **Files.** An image or audio prop the composition loads with `staticFile()` must be staged by `stage_assets` in `sgv/motion.py` (add image props to `IMAGES`; their CSS size arrives as `<prop>W`/`<prop>H`).
- **Arabic.** With `lang === "ar"`, letter-spacing is 0, there is no uppercase, line-height is 1.7, and layout uses logical alignment (`start`/`end`). Numbers, URLs and latin identifiers stay LTR.
- **Required props.** Studio `defaultProps` hold only required fields, because Remotion merges them into every render. Add the new composition's required props to `REQUIRED_PROPS` in `sgv/project.py` and its name to `COMPOSITIONS` in `sgv/motion.py`. A graphic that sits over footage also goes in `ALPHA` there.

Check every change:
1. `cd motion && npm run typecheck`
2. Render stills in both themes and in 16:9 and 9:16:
   `npx remotion still src/index.ts <Comp> /tmp/x.png --frame=<late frame> --props='{"width":1080,"height":1920,"fps":30,"duration":4,"theme":"dark","lang":"en",…}'`
   Then Read the PNG.
3. Run `npm run studio` (or `bin/sgv studio`) when the user wants to scrub through it live.
