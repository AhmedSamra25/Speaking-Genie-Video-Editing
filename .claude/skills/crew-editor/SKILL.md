---
name: crew-editor
description: Editor craft for the Speaking Genie video crew — assembling edit.json from the treatment's beats, the voice-over timings, the cinematographer's selects, the product screens and the motion graphics, then cutting to the voice, captioning from the script, rendering drafts and finals, and applying review notes. Used by the editor agent.
---

# Editor

You own the cut. Read first: `crew/treatment.md`, `crew/vo.json` (with timings), `crew/shots.md`, `crew/screens.md`, `crew/motion.md`, `crew/sound.md`, `.claude/skills/video-crew/CREW.md`, and the `edit-video` skill plus the `edit.json` reference in `CLAUDE.md`. You write `edit.json`, `NOTES.md` and `captions/`, and you render.

## Assemble

1. **Cut to the voice.** The voice-over is the clock. Each beat's clips run from its first line's `start` to the next beat's first line's `start`; beats without voice keep their treatment duration. Put `"voiceover": {"src": "audio/vo.wav", "at": 0}` in `edit.json` (the lines are already placed inside `vo.wav`).
2. **Lay the picture per beat** from its visual source:
   - footage → `video` clips with the in/out, `focus` and `fit` from `crew/shots.md`;
   - screen with a callout → `motion` `ProductScreen` with the props from `crew/motion.md`;
   - phone and web together ("students practise, the centre sees it") → `motion` `DualScreen`;
   - plain screen → `image` with `kenburns: "in"` (hold ≥ 3 s);
   - number, quote, chapter, CTA → the motion clip from `crew/motion.md`;
   - lower thirds → `overlays` at the speaker's first appearance (`bin/sgv timeline <p>` gives clip indexes).
3. **Transitions and rhythm:** follow `.claude/skills/video-crew/EDITING.md`. Cuts on the voice by default; `zoom` to go deeper into the same thing, `push-left`/`push-right`/`push-up` to move on (Arabic pushes right), `slide-scale` card to card, `dissolve` (or the softer `blur`) for time or place, `dome` into an Enablement card, `dip` into the end card, and a match cut (`"match": true`, checked with `bin/sgv match`) where evidence becomes product. Consecutive graphics joined by those transitions render together through Remotion `TransitionSeries` automatically. One light `sweep` per video, on the EndCard's capsule or button. Motion transitions are 0.3–0.4 s (`"transitionDuration": 0.35` on the clip), get motion blur automatically, and at most one every ~6 s. Any non-cut transition starts the next clip that much earlier: add it to the previous clip's duration to keep beats on their lines, and make sure no line is still playing when the end card comes in. Clips joined by cuts or motion transitions have `"enterFade": false, "exitFade": false`.
4. **Check the timeline:** `bin/sgv timeline <p>`, then compare each beat's start with its voice line's `start` (±0.2 s). Leave 0.2–0.4 s of picture before a line starts on a new shot.

## Captions

- A ProductScreen with `"wave": true` follows the voice-over under it: `sgv` sets the audio offset from the clip's place on
  the timeline, so re-timing the cut keeps it in sync. It needs `"voiceover"` in `edit.json` (or its own `wave.src`).
- Social cuts use word-by-word captions: `"captions": {…, "style": "words"}`. Add `"sfx": true` for whooshes under motion transitions and taps on ProductScreen `tap`s. Placed sound cues (call connect, notification, impact) and `ambience` come from the sound designer's `crew/sound.md`: copy them into `"sfx": {"cues": [...]}` with clip-anchored `at`s, and re-check them with `bin/sgv timeline <p>` after any re-cut.
- With a script (`crew/vo.json`): `bin/sgv captions <p> --from-vo`. The captions come from the approved script text and the voice timings, so Egyptian Arabic and product names are exactly right.
- Without a script (footage-led jobs): `bin/sgv captions <p>`, then proofread `captions/master.srt` against the transcript and fix product names.
- Bilingual: each language's cut gets its own project or `exports` set and its own captions file. Never mix two languages in one caption track.

## Draft, review, final

- `bin/sgv render <p> --draft`, then `bin/sgv look exports/<p>-draft.mp4 -n 16`, and Read it. Fix what you can see (black frames, text over faces, jumpy reframes) before anyone else reviews.
- Apply review notes (`crew/review-<n>.md`, `crew/qa-<n>.md`) addressed to `@editor`. Reply under each note in `crew/log.md` with what you changed, or why not.
- Final only after the producer passes on the user's approval: `bin/sgv render <p>`, then report each export's path, duration and size.

Pacing rules from `CLAUDE.md` still hold: hook in the first 2 s, shots 1.5–3 s in montage, text on screen ≥ 1.5 s + 0.06 s per character, `focus` on every wide shot in 9:16, nothing important in the bottom 20% of vertical frames. Log decisions in `NOTES.md` and hand over in `crew/log.md`.
