---
name: edit-video
description: Edit a Speaking Genie video or montage end to end — brief, ingest footage, select shots, build the edit.json timeline, add branded titles/stats/quotes/lower thirds, captions, music, and export for YouTube, Reels/TikTok, LinkedIn or the product. Use whenever the user asks to make, cut, edit, trim, montage, caption, reframe or export a video in this repo.
---

# Edit a video

Follow these steps in order. Read `CLAUDE.md` (edit.json reference and craft) and `brand/BRAND.md` first if they aren't already in context.

1. **Brief.** If anything is unclear, ask in one message: the goal, the audience, the platforms (these set `exports` and `aspect`), the target length, the language (en/ar), the theme (light/dark), and any must-use shots or quotes. Write the answers in `NOTES.md`.
2. **Project.** `bin/sgv new "<name>" --aspect … --theme … --lang …` (skip if the project exists). Ask the user to drop media into `projects/<slug>/footage|audio|assets`, or copy it there from paths they give (copy, never move).
3. **Ingest and look.** `bin/sgv ingest <p> --sheets`, then Read every contact sheet. For interviews, run `bin/sgv transcribe footage/<file> --lang …` and read the transcript to find the strongest lines and their timestamps. For B-roll, `bin/sgv scenes` gives candidate in-points.
4. **Paper edit.** Write the story in `NOTES.md` as a numbered shot list with source, in/out, the purpose of each shot, and any text on screen. Confirm it with the user when the piece is longer than about 30 s or is client-facing.
5. **Build the timeline.** Write the shot list into `edit.json`. Use `bin/sgv silence <file> --apply <p>` for talking-head jump cuts, then delete or trim the clips you don't want. Add the motion graphics: TitleCard for chapters, StatCard for numbers, QuoteCard for testimonials, a LowerThird overlay the first time each speaker appears, and an EndCard with a verb + object CTA.
6. **Draft.** `bin/sgv render <p> --draft`, then `bin/sgv look exports/<p>-draft.mp4 -n 16` and Read the sheet. Check the pacing, framing (`focus`) and text legibility, and fix what you find. Tell the user the draft path and what you changed.
7. **Captions** (default for social): `bin/sgv captions <p>`, then proofread `captions/master.srt` against the transcript. Fix product names ("Speaking Genie") and keep each cue to 42 characters or fewer per line.
8. **Final.** `bin/sgv render <p>`. Verify every export with `look` and `loudness`, then report the paths, durations and sizes.

Rules: never touch the source media; keep on-screen copy in sentence case with no emoji or exclamation marks; use only brand colours and fonts; motion stays calm (no bounce).
