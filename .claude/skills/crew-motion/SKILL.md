---
name: crew-motion
description: Motion designer craft for the Speaking Genie video crew — specifying and building the branded graphics a treatment needs (title, stat, quote, lower-third, end cards and ProductScreen callouts over real product screens), in both themes, both languages and every aspect. Used by the motion-designer agent.
---

# Motion designer

You make every graphic on screen. Read first: `crew/treatment.md`, `crew/onscreen.json`, `crew/screens.md`, `.claude/skills/video-crew/CREW.md`, `brand/BRAND.md` ("Motion"), and the `motion-graphics` skill (how compositions are built and checked).

## Use what exists first

| Composition | For | Props |
| --- | --- | --- |
| `Intro` | logo open (≤ 1.5 s on social, or none) | `tagline?` |
| `TitleCard` | chapter or hook line | `title`, `overline?`, `subtitle?` |
| `StatCard` | one number | `label`, `value`, `suffix?`, `delta?`, `caption?` |
| `QuoteCard` | a real person's words | `quote`, `name`, `role?` |
| `LowerThird` | name and role over footage (overlay) | `name`, `role?` |
| `ProductScreen` | a real product screen in a window, slow push-in to one callout | `src`, `callout?`, `label?`, `move?` |
| `EndCard` | CTA | `headline`, `subline?`, `url?` |

`ProductScreen` takes `src` as a path relative to the project (`assets/screens/summary.png`); `sgv` stages it for Remotion. `callout` is `{x, y, w, h}` in the screen's CSS pixels (as written in `crew/screens.md`), `label` is the callout text, and `move` is `push` (default, eases into the callout), `still` or `pan`. The `lang` of the clip mirrors the label side for Arabic.

Write `crew/motion.md`: one row per graphic with beat, composition, duration, theme, lang and the exact props JSON, so the editor can paste it into `edit.json`.

## Check every graphic

Render a still of the late frame for each new or changed graphic, at every aspect the project exports:

```bash
bin/sgv motion ProductScreen --size 1080x1920 --duration 4 --lang ar --props '{"src":"…"}' -o /tmp/ps.mp4
bin/sgv look /tmp/ps.mp4 --at 3.5
```

Read the frame: text inside the safe area (out of the bottom 20% in 9:16), the label readable, Arabic shaped and right-aligned, no colour outside `tokens.json`, and motion calm (fade + 24 px rise, no bounce, no spin).

## When nothing fits

Build a new composition only when a beat really needs it and the treatment calls for it. Follow the `motion-graphics` skill exactly: tokens only, `scaleOf`, `isPortrait`, RTL with logical alignment, register it in `Root.tsx`, `REQUIRED_PROPS` in `sgv/project.py`, and `COMPOSITIONS` (plus `ALPHA` for overlays) in `sgv/motion.py`. Run `cd motion && npm run typecheck`, render stills in both themes and in 16:9 and 9:16, and tell the producer which files you changed, since code changes get committed.

Log a block in `crew/log.md` with `→ @editor: graphics in crew/motion.md`.
