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
- **Arabic.** With `lang === "ar"`, letter-spacing is 0, there is no uppercase, line-height is 1.7, and layout uses logical alignment (`start`/`end`). Numbers, URLs and latin identifiers stay LTR.
- **Required props.** Studio `defaultProps` hold only required fields, because Remotion merges them into every render. Add the new composition's required props to `REQUIRED_PROPS` in `sgv/project.py` and its name to `COMPOSITIONS` in `sgv/motion.py`. A graphic that sits over footage also goes in `ALPHA` there.

Check every change:
1. `cd motion && npm run typecheck`
2. Render stills in both themes and in 16:9 and 9:16:
   `npx remotion still src/index.ts <Comp> /tmp/x.png --frame=<late frame> --props='{"width":1080,"height":1920,"fps":30,"duration":4,"theme":"dark","lang":"en",…}'`
   Then Read the PNG.
3. Run `npm run studio` (or `bin/sgv studio`) when the user wants to scrub through it live.
