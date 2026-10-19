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
- Colours only from `tokens.json`; one purple accent; no gradients except the logo mark and avatars.
- Fonts: Plus Jakarta Sans (Latin) and IBM Plex Sans Arabic only.
- Copy: sentence case, no exclamation marks, no emoji, verb + object CTA, `·` for metadata, `E£` for currency.
- Logo: the official file, never recoloured or stretched, never on footage without a solid plate; hidden during motion graphics.
- Motion is calm: no bounce, spin or zoom transitions; cuts, dissolves and dips only.

**Words**
- Every on-screen string matches `onscreen.json`; every spoken line matches `vo.json` (meaning and product names).
- No invented claims or numbers: anything not in the brief or the design system is a FAIL.
- Arabic: correct letter joining and right-to-left order, punctuation at the line end, numbers and Latin names readable inside RTL text, MSA on screen, Egyptian Arabic in the voice-over.
- English: consistent spelling, no typos.

**Picture**
- 9:16: no text or faces in the bottom 20% (captions excepted, in their safe band); faces in frame after reframing.
- Product screens come from the design system kit, are sharp (no upscaling blur), have the callout on the right element, and are held long enough to read (≥ 1.5 s + 0.06 s per character).
- No black, frozen or flash frames; no cut in the middle of a word.

**Captions**
- Burned in where the brief asks; dark rounded pill with white text; ≤ 2 lines, ≤ 42 characters per line (28 in 9:16); in sync with the voice (±0.2 s); one language per track.

**Sound and tech**
- Loudness within ±1 LU of the preset target, true peak ≤ -1 dBTP.
- Resolution, frame rate and duration match the preset.

## Notes

After the checklist, list every FAIL as a numbered note: timestamp, what's wrong, the rule it breaks, and the owner (`3 · 0:07.4 · @motion-designer: callout label "Exact Words To Fix" is title case; brand is sentence case`). End with a one-line verdict: **ship**, **ship after fixes**, or **not ready**. Log a block in `crew/log.md`.
