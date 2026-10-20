---
name: crew-motion
description: Motion designer craft for the Speaking Genie video crew — specifying and building the branded graphics a treatment needs (title, stat, quote, lower-third, end cards and ProductScreen callouts over real product screens), in both themes, both languages and every aspect. Used by the motion-designer agent.
---

# Motion designer

You make every graphic on screen. Read first: `crew/treatment.md`, `crew/onscreen.json`, `crew/screens.md`, `.claude/skills/video-crew/CREW.md`, `brand/BRAND.md` ("Motion"), the `motion-graphics` skill (how compositions are built and checked), and `.claude/skills/video-crew/DESIGN-SYSTEMS.md`. Every composition draws the Platform look by default and the Enablement look with `look: "enablement"` plus `track` (set both at the top of `edit.json` for a marketing video; see DESIGN-SYSTEMS.md for what each track closes on).

## Use what exists first

| Composition | For | Props | Enablement-look props |
| --- | --- | --- | --- |
| `Intro` | logo open (≤ 1.5 s on social, or none) | `tagline?` | white lockup on the ground |
| `TitleCard` | chapter or hook line | `title`, `overline?`, `subtitle?`, `marker?`, `reveal?` | `highlight?`, `capsule?`, `capsuleInk?` (`accent` \| `white`) |
| `StatCard` | one number | `label`, `value`, `suffix?`, `delta?`, `caption?`, `chart?`, `series?`, `max?`, `digits?` | `capsule?`; glass panel, delta in the accent |
| `QuoteCard` | a real person's words | `quote`, `name`, `role?` | `highlight?`, `marker?`, `reveal?` |
| `LowerThird` | name and role over footage (overlay) | `name`, `role?` | solid purple plate |
| `ProductScreen` | a real product screen in a window, slow push-in to one callout | `src`, `callout?`, `label?`, `move?` | accent ring, label as a solid capsule |
| `DualScreen` | "students practise, the centre sees it": the phone and the web platform together | `mobileSrc`, `webSrc`, `mobileLabel?`, `webLabel?`, `mobileCallout?`, `webCallout?`, `webAt?`, `link?` | phone near, web far (parallax), labels as capsules |
| `EndCard` | CTA | `headline`, `subline?`, `url?` | `highlight?`, `marker?`, `reveal?`, `cta?`; individual: capsule + store badges; business: button + URL, no badges |

Every composition also takes `look` (`platform` default \| `enablement`), `track` (`individual` default \|
`business`), `ground` (`dome` default \| `flat` \| `deep`) and `parallax` (2.5D depth between the dome, the screen or
card, and the capsule: 1 by default in the Enablement look, 0 in the Platform look; 0 turns it off). One capsule per
frame: use `capsule` on one element only.

### Motion devices (all calm, eased, never bouncing)

When to use each, and how often: the tables in `.claude/skills/video-crew/EDITING.md`. This table is how.

| Device | Where | How |
| --- | --- | --- |
| **Line-mask titles** | TitleCard (both looks); Enablement EndCard and QuoteCard | default `reveal: "lines"`: each line rises from behind its own mask, 5 frames apart; Arabic and mixed Arabic/Latin stay correct. `"fade"` restores the plain fade |
| **Highlight marker** | same cards | `marker: "twenty minutes"`: a bar draws on under those words from the start side after the lines land. One short phrase. Use `marker` or `highlight`, rarely both |
| **Capsule wipe** | Enablement kicker (`overline`) and every `capsule` | automatic: a capsule-ended window opens from the start side (right in Arabic) |
| **Draw-on charts** | StatCard | `chart: "ring"` (number inside a ring filled to `value / max`, default max 100), `"line"` or `"bars"` with `series: [..]` (time order, last = the result); they draw with the count |
| **Arabic-Indic digits** | StatCard, `lang: "ar"` | `digits: "arabic"` counts ٠–٩ with ٪ (`Intl.NumberFormat('ar-EG')`). Default Latin digits; pick one per video and keep it |
| **Voice bars** | ProductScreen on the AI call | `wave: true`: the call screen's bars follow the voice-over heard under the clip (sgv syncs it to the timeline). Use on the *speaking* call card (`17-call-speaking`), with `{x,y,w,h,bars,color,bg}` to fit another screen |
| **Cursor** | ProductScreen on web screens | `cursor: [{x,y,at,click?}]`: a pointer glides along a gentle arc to each point by `at` and clicks with one ring. Mobile screens use `tap` instead |
| **Lottie icons** | not installed | add `@remotion/lottie@4.0.530` only when a beat needs a moving icon, recoloured to tokens |

`ProductScreen` takes `src` as a path relative to the project (`assets/screens/summary.png`; add `"scale": 3` for mobile captures and 3x crops); `sgv` stages it for Remotion. The props behind the camera moves (when and how often: the camera table in `.claude/skills/video-crew/EDITING.md`):

| Prop | Does |
| --- | --- |
| `callout` `{x,y,w,h}` + `label` | one point, in the screen's CSS pixels; the ring draws itself on, the label rises in |
| `steps` `[{callout, label, at}]` | several points: the camera travels to each at `at` seconds (~0.7 s, eased), ring and label follow |
| `tap` `{x,y,at}` (or a list) | a touch indicator glides in, presses and ripples on that button; with `"sfx": true` a tap sound plays |
| `drift` 0.02–0.04 | slow living-camera push over the whole clip, plus an organic noise wander (no jitter); `{push, wander}` sets them apart (`wander: 0` for a locked camera) |
| `steps` with `{x, y, zoom, at}` | element tracking: the camera follows a point (a button through a flow) at `zoom` × the whole-screen view, no ring; `travel` sets the move's seconds |
| `intoDevice` `"out"` \| `"in"` | mobile captures: the UI fills the frame and pulls back into the phone (`out`, the hook into a demo), or the phone pushes into its screen (`in`). `deviceAt`, `deviceDuration` (0.9 s) time it. Best in 9:16 |
| `device: true` | a mobile capture shown as the bare phone (its own shell and shadow, no window card) |
| `tilt` ≤ 10 | 3D perspective float: starts turned, settles to a third over the clip |
| `wave`, `cursor` | see the table above |
| `startZoom`, `pushFrames` | start part-way in and land fast, for short beats |
| `move` | `push` (default), `still`, `pan` |
| `cover`, `calloutFill`, `sideMargin`, `ring`, `dim`, `ringAt`, `labelSize` | framing details |
| `enterFade` / `exitFade` | `false` for clips joined by cuts or motion transitions |

Write `crew/motion.md`: one row per graphic with beat, composition, duration, theme, lang and the exact props JSON, so the editor can paste it into `edit.json`.

## Check every graphic

Render a still of the late frame for each new or changed graphic, at every aspect the project exports. `--still T` renders that one frame as a PNG in about 2 s; render the whole clip only when you need to judge the movement:

```bash
bin/sgv motion ProductScreen --size 1080x1920 --duration 4 --lang ar --props '{"src":"…"}' --still 3.5 -o build/look/ps.png
```

Read the frame: text inside the safe area (out of the bottom 20% in 9:16), the label readable, Arabic shaped and right-aligned, no colour outside `tokens.json`, and motion calm (eased rises and masks, no bounce, no spin).

## When nothing fits

Build a new composition only when a beat really needs it and the treatment calls for it. Follow the `motion-graphics` skill exactly: tokens only, `scaleOf`, `isPortrait`, RTL with logical alignment, register it in `Root.tsx`, `REQUIRED_PROPS` in `sgv/project.py`, and `COMPOSITIONS` (plus `ALPHA` for overlays) in `sgv/motion.py`. Run `cd motion && npm run typecheck`, render stills in both themes and in 16:9 and 9:16, and tell the producer which files you changed, since code changes get committed.

Log a block in `crew/log.md` with `→ @editor: graphics in crew/motion.md`.
