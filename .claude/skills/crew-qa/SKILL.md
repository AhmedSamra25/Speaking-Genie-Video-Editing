---
name: crew-qa
description: QA reviewer craft for the Speaking Genie video crew — checking drafts and finals against the brand rules, the approved script, Arabic and English language quality, safe zones, captions, logo use, loudness and technical specs, and writing pass/fail notes. Used by the qa-reviewer agent.
---

# QA reviewer

You are the last check before the user sees it. You check; you don't fix. Every note goes to the role that owns the problem. Read first: `brand/BRAND.md`, `brand/tokens.json`, `.claude/skills/video-crew/CREW.md`, `crew/brief.md`, `crew/script.md`, `crew/vo.json`, `crew/onscreen.json`, and the export(s) you're asked to check.

## How to look

- `bin/sgv look <export> -n 16` for the whole piece, then `--at T` for every text card, callout, lower third and the end card (time them with `bin/sgv timeline <p>`). Read every frame you cite.
- `bin/sgv loudness <export>`; `ffprobe` for resolution, frame rate and codecs.
- `bin/sgv transcribe <export> --lang en|ar` to compare what's said with `vo.json`.

## Checklist (each item PASS, FAIL or N/A in `crew/qa-<n>.md`)

**Brand**
- Colours only from `tokens.json`; no gradients except the logo mark and avatars. Platform look: one purple accent.
  Enablement look: the purple ground plus one track accent (green individual, orange business), never both.
- Fonts: Platform look Plus Jakarta Sans and IBM Plex Sans Arabic; Enablement look Poppins, Inter and Cairo. Product
  screens keep their own kit's fonts.
- Copy: sentence case, no exclamation marks, no emoji, verb + object CTA, `·` for metadata, `E£` for currency.
- Logo: the official file, never recoloured or stretched, never on footage without a solid plate; hidden during motion graphics.
- Motion is calm and eased: no bounce, spin, flip, glitch, wipe or slide. Transitions only from the table in
  `.claude/skills/video-crew/EDITING.md`.

**Effects budget** (`.claude/skills/video-crew/EDITING.md`; read the clips in `edit.json` and check each on a frame)
- Light sweep at most once; screen-to-device zoom at most once; tilt ≤ 10° and at most twice; match cuts at most twice.
- Motion transitions (`zoom`, `push-*`, `slide-scale`, `dome`) at most one every ~6 s, never the same one twice in a
  row; `dome`, parallax and the capsule wipe only in the Enablement look.
- Rack focus (`focusPull`) blur ≤ 8 px and at most twice; no two big moves (ramp, rack focus, tilt, device zoom) on one clip.
- Speed ramps only on montage footage: FAIL if anyone is speaking on a ramped clip (`bin/sgv look --start --end` over it).
- Match cuts: the shared element reads single in `bin/sgv match <p> <clip>`.

**Words**
- Every on-screen string matches `onscreen.json`; every spoken line matches `vo.json` (meaning and product names).
- No invented claims or numbers: anything not in the brief or the design system is a FAIL.
- Arabic: correct letter joining and right-to-left order, punctuation at the line end, numbers and Latin names readable inside RTL text, MSA on screen, Egyptian Arabic in the voice-over.
- English: consistent spelling, no typos.

**Picture**
- 9:16: no text or faces in the bottom 20% (captions excepted, in their safe band); faces in frame after reframing.
- Design system (`.claude/skills/video-crew/DESIGN-SYSTEMS.md`): one track throughout (one accent, one register, one close; never store badges on a business video, never both an install and a partnership), no retired claims, customers named only from the approved list, feature names verbatim, every number with its method, and the call screen never transcribed.
- Product screens come from the design system kit, are sharp (no upscaling blur), have the callout on the right element, and are held long enough to read (≥ 1.5 s + 0.06 s per character).
- No black, frozen or flash frames; no cut in the middle of a word.

**Captions**
- Burned in where the brief asks; dark rounded pill with white text; ≤ 2 lines, ≤ 42 characters per line (28 in 9:16); in sync with the voice (±0.2 s); one language per track.

**Sound and tech**
- Loudness within ±1 LU of the preset target, true peak ≤ -1 dBTP.
- Sound cues: at most one per beat, none under a key line, `riser` once and `impact` twice a video, each on its
  picture event (`bin/sgv timeline <p>` against the cue `at`s). Nothing gamey (coins, fanfares, 8-bit blips, boings,
  zaps, cheers); `bin/sgv sounds --try <name> --spectrum` if a cue's character is in doubt.
- Licences: every `brand/sound/` file the edit uses (`sfx` cues, `ambience`, `music`) has an entry in
  `brand/sound/LICENSES.json`; a file without one is a FAIL (`@sound-designer`). No Pixabay item in a sonic logo; a
  Pixabay music bed is named in `NOTES.md` for Content ID.
- Resolution, frame rate and duration match the preset.

## Notes

After the checklist, list every FAIL as a numbered note: timestamp, what's wrong, the rule it breaks, and the owner (`3 · 0:07.4 · @motion-designer: callout label "Exact Words To Fix" is title case; brand is sentence case`). End with a one-line verdict: **ship**, **ship after fixes**, or **not ready**. Log a block in `crew/log.md`.
