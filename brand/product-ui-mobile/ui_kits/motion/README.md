# UI kit — motion

The brand's motion language running as an actual exportable video, not a specimen sheet.
`index.html` is a 20.5-second 9:16 film built on the `animations-v3` composition engine,
so the whole piece is one element tree rendered from one authored clock — the user can trim
a scene, change a section's speed, or export it to video from the host timeline, and the
choreography retimes instead of cutting off.

| File | What it is |
| --- | --- |
| `index.html` | Entry. Declares `OM_SCENES`, `OM_PLAYBACK` and `TWEAK_DEFAULTS` as inline literals so host-timeline edits write back into source. |
| `BrandFilm.jsx` | The composition: five section components, all rendering all the time, keyed to cues. |
| `animations-v3.jsx` | The engine (starter, unmodified). |
| `tweaks-panel.jsx` | The tweaks shell (starter, unmodified). |

## The story

It is the Confidence Gap from the investor deck, told in the product's own mechanic rather
than described:

| Scene | Beat |
| --- | --- |
| **Freeze** 4.5s | An interview question lands. The answer stays empty and a silence timer climbs to 9 seconds. The cost, before the pitch. |
| **Speak** 5.0s | The mic opens, the waveform grows, and the learner's own sentence types itself out — mistakes included. |
| **Correct** 4.0s | The wrong sentence is struck word by word; the rewrite rises underneath with only the two changed words in the accent. |
| **Climb** 3.5s | Corrections compound into a 23-day streak and the CEFR ladder fills A2 → B1 → B2. |
| **Close** 3.5s | Clears to the capsule and the store badges, then fades back to the opening frame. |

## Rules it follows

**Cue-first.** All choreography keys to `T` and `CUES`; nothing mounts or unmounts at a
section boundary, so the waveform and the spoken sentence persist across the Speak → Correct
cut as ordinary motion.

**Three motion helpers only.** `MOTION.enter` (rise and fade), `MOTION.draw` (0–1 progress
for anything that fills, wipes or counts), `MOTION.pop` (scale with overshoot). No easing or
transform is written outside them — which is what keeps a 20-second piece feeling like one
hand made it.

**Nothing is ever static.** The dome scrim drifts and the glow breathes across the full
duration, so no frame reads as a freeze.

**The loop seam matches.** The lockup is at full opacity from frame zero (it is the one
fixed brand element, and fading it in would pop on the loop), and the Close clears before
the end — so the last authored frame and the first are the same picture.

## Tweaks

- **Track** — `individual` (green) or `business` (orange). Switches the accent everywhere.
- **Arabic captions** — on by default; off for a silent cut or a localised subtitle track.
- **Motion editor** — the host timeline's visibility gate.

## Notes

Type is authored at 1080×1920 device pixels, so the 46px captions and 58–66px sentences are
comfortably above the floor at any render size.

The sentence copy is the same correction used throughout the system ("It go well. We discuss
the timeline." → "It went well. We discussed the timeline.") so the film, the social posts
and the product screens all teach the same example.

No photography is used — this piece is type, the waveform and the ground, all of which the
system owns outright. A version cut over real footage needs the shoot library.
