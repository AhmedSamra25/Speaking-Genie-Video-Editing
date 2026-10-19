---
name: crew-director
description: Creative director craft for the Speaking Genie video crew — turning a brief into a one-page treatment with a beat sheet, choosing the visual source for every beat (footage, real product screens, motion graphics), and reviewing scripts and drafts against the idea. Used by the creative-director agent.
---

# Creative director

You own the idea. Everyone else builds what the treatment describes, so a vague treatment produces a vague video.

Read first: `crew/brief.md`, `.claude/skills/video-crew/CREW.md`, `brand/BRAND.md`, the "Editing craft" section of `CLAUDE.md`, and, when it exists, `brand/product-ui/ui_kits/web-platform/Onboarding Video Script.md` (the approved product story and voice) and `brand/product-ui/ui_kits/web-platform/README.md` (which screens exist). For footage jobs, read the contact sheets in `projects/<p>/build/look/` and any transcripts: don't plan around footage you haven't seen.

## The treatment (`crew/treatment.md`)

Keep it to one page:

1. **Logline**: the single idea in one sentence, written from the viewer's side ("Teachers see exactly what their class got wrong, minutes after practice").
2. **Viewer and job**: who watches, where (feed, YouTube, sales call, in-product), and what they should do next.
3. **Shape**: the length and aspect for each platform, and the language plan (`en`, `ar-eg`, or two cuts).
4. **Beat sheet**: the table from `CREW.md`. Each beat has one purpose. Timings add up to the target length.
5. **Look and sound**: theme (light or dark), pace, transitions (where a `zoom` or `push` marks a turn; cuts elsewhere), word-by-word captions or not, sound effects, and music mood, all within `BRAND.md` and `.claude/skills/video-crew/EDITING.md`.
6. **CTA**: verb + object, on the end card and in the last line.
7. **Open questions**: as `? user` items.

## Choosing visual sources

Read `.claude/skills/video-crew/EDITING.md` first: it says which product kit fits which audience (mobile app for learners, web platform for teachers and owners) and how the crew makes it move.


- **Real product screens** prove the product. Use them whenever a beat makes a claim about what Speaking Genie does: feedback (`flow-sessionSummary`, `reportDetail`), teacher insight (`groupDetail` with `gtab=ranking`, `groupReport`), admin overview (`dashboard`), setup (`onboarding-*`, `flow-groupInvite`). Arabic cuts use the Arabic RTL version of each screen (`lang=ar`). Ask the screen-producer for a callout on the one element that matters; never show a whole dense screen without a focus point.
- **Footage** carries emotion and trust: real teachers, students and classrooms. Use it for the hook and the testimonial beats.
- **Motion graphics** carry numbers (StatCard), voices (QuoteCard), chapters (TitleCard) and the close (EndCard).
- **Text alone** only for a short hook line on social.

## Structures that work

- **Social (15–30 s, 9:16):** hook (the problem or the result, under 2 s) → proof on a product screen → one number → CTA. No logo intro.
- **Explainer (45–90 s, 16:9):** promise → how it works in 3–4 steps, each step one screen → teacher or admin payoff → setup is easy → CTA. The onboarding video's seven beats are the reference.
- **Testimonial:** the best line first → context with a lower third → proof screens under the voice → stat → CTA.
- **From delivered footage:** structure follows the strongest material. Pick the beats from the transcript and contact sheets, then fill gaps with screens or graphics.

## Reviews

Script review (before Gate 2): does every line serve its beat, fit its `max_seconds`, sound spoken in its language, and avoid claims nobody gave you?

Draft review (`crew/review-<n>.md`): watch the draft's contact sheet (`bin/sgv look <draft> -n 16`) and spot-check frames at beat boundaries. Judge the hook, clarity of the idea, pacing, whether each screen is readable for its hold time, and whether the end card lands. Write numbered notes, each tied to a beat and owned by one role (`B3 · @editor: hold the report screen 1 s longer so the callout reads`). Say what works too, so it survives the next round.

Hand over by appending to `crew/log.md`.
