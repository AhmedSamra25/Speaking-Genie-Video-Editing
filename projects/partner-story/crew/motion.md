# Motion · Partner Story

Enablement DS, **business track** (orange accent), purple dome ground, Cairo. 9:16 1080×1920, `lang: ar`, fps 24,
`theme: dark` (the Enablement look ignores the theme for its grounds). `look` and `track` sit at the top of
`edit.json` and reach every graphic and overlay through `motion_defaults`, so they are not repeated in the props below.
B13 (StatCard) is dropped: no numbers anywhere (Gate 1). No motion/src code was changed.

## Graphics

| # | Beat | Composition | Where | Duration | Props (paste as is) |
| --- | --- | --- | --- | --- | --- |
| M1 | B1 | LowerThird | overlay `at {"clip": <B1>, "offset": 0.6}` | 4.0 | `{"name": "أحمد أبوسمرة", "role": "Co-founder, Speaking Genie"}` |
| M2 | B6 | TitleCard | timeline, `"transition": "dip"` | 4.0 | `{"title": "المشكلة ليست في الإتقان، بل في الثقة.", "highlight": "الثقة"}` |
| M3 | B7 | ProductScreen | overlay over the B7 footage clip, last 3.0 s | 3.0 | see below |
| M4 | B8a | ProductScreen | overlay over the B8 footage clip | 3.5 | see below |
| M5 | B8b | ProductScreen | overlay over the B8 footage clip, ends on the clip's out | 4.0 | see below |
| M6 | B10a | ProductScreen | overlay over the B10 footage clip | 4.0 | see below |
| M7 | B10b | ProductScreen | overlay over the B10 footage clip, ends on the clip's out | 3.5 | see below |
| M8 | B14 | EndCard | timeline, `"transition": "dip"` | 5.0 | `{"headline": "هل تعرف مركز لغات أو شركة؟", "highlight": "مركز لغات أو شركة", "subline": "رشّحهم لنا، ولنتحدث معًا عن الخطوة التالية.", "cta": "تحدّث معنا", "url": "speakingenie.com"}` |

**B6: highlight, no capsule.** TitleCard's capsule is a separate line drawn under the title, so it can't wrap «الثقة»
inside the sentence, and a capsule repeating «الثقة» under a title that already says it reads twice. The whole approved
line is the title, with «الثقة» in orange. That leaves zero capsules on the frame, which is within the one-per-frame rule.
(The scriptwriter's alternative split, title «المشكلة ليست في الإتقان،» + capsule «بل في الثقة.», is also valid. I
don't recommend it, because it breaks the approved sentence across two styles.)

**B14:** the business close draws a white «تحدّث معنا» button and the URL as a ghost pill, with no store badges. Everything sits
above y 1200 of 1920.

## ProductScreens are overlays (Samra keeps talking)

All five screens are **overlays**, not timeline clips. A timeline motion clip has no audio, so it would cut his voice.
An overlay is drawn on top of the footage clip, which stays on the timeline whole, with its audio running
underneath. ProductScreen renders opaque and full-frame, so it covers the picture completely. Captions burn in after the
overlays, so they stay on top. Fades are off (`enterFade`/`exitFade` false), so each screen cuts in and out on a word.

Offsets are in **source seconds minus the clip's `in`**. Check them against the word timings with `sgv timeline`.

```jsonc
// M3 · B7 · offset = (B7 clip out − in) − 3.0   (e.g. in 16.05, out 23.35 → 4.30)
{ "composition": "ProductScreen", "at": { "clip": <B7>, "offset": 4.30 }, "duration": 3.0,
  "props": { "src": "assets/screens/flow-aiPlan-ar.png",
    "callout": { "x": 59, "y": 185, "w": 566, "h": 136 }, "label": "بناء المنهج بالذكاء الاصطناعي",
    "startZoom": 0.75, "pushFrames": 14, "calloutFill": 0.9, "drift": 0.03,
    "enterFade": false, "exitFade": false } }

// M4 · B8a · source ≈ 78.30–81.80 (on «كل مكالمة ليها goal» … tap at 2.8 s leads into the call)
{ "composition": "ProductScreen", "at": { "clip": <B8>, "offset": 78.30 - <B8 in> }, "duration": 3.5,
  "props": { "src": "assets/screens/06-lab-tasks-ar.png", "scale": 3,
    "callout": { "x": 37, "y": 300, "w": 356, "h": 211 }, "label": "مهام محادثة من المنهج",
    "startZoom": 0.6, "pushFrames": 16, "drift": 0.03,
    "tap": { "x": 170, "y": 474, "at": 2.8 },
    "enterFade": false, "exitFade": false } }

// M5 · B8b · source 81.80–85.80 (in on «والشخص ده مش شخص حقيقي», through «فهو AI» to the clip's out)
{ "composition": "ProductScreen", "at": { "clip": <B8>, "offset": 81.80 - <B8 in> }, "duration": 4.0,
  "props": { "src": "assets/screens/22-call-ar.png", "scale": 3,
    "callout": { "x": 135, "y": 293, "w": 160, "h": 350 }, "label": "مكالمة صوتية مع الشريك الذكي",
    "startZoom": 0.6, "pushFrames": 16, "calloutFill": 0.4, "drift": 0.03,
    "enterFade": false, "exitFade": false } }

// M6 · B10a · source ≈ 12.36–16.36 (on «وإيه اللي إنت محتاج تحسّنه»)
{ "composition": "ProductScreen", "at": { "clip": <B10>, "offset": 12.36 - <B10 in> }, "duration": 4.0,
  "props": { "src": "assets/screens/21-session-feedback-ar.png", "scale": 3,
    "callout": { "x": 52, "y": 488, "w": 326, "h": 139 }, "label": "ملاحظات ما بعد الجلسة",
    "startZoom": 0.6, "pushFrames": 16, "drift": 0.03,
    "enterFade": false, "exitFade": false } }

// M7 · B10b · ends on the clip's out: offset = (out − in) − 3.5 (lands on «وبنطلّع لك الـfeedback بشكل أسبوعي…»,
// and hides his head turn at the out)
{ "composition": "ProductScreen", "at": { "clip": <B10>, "offset": <B10 out − in − 3.5> }, "duration": 3.5,
  "props": { "src": "assets/screens/23-reports-ar.png", "scale": 3,
    "callout": { "x": 40, "y": 149, "w": 350, "h": 298 }, "label": "تقارير أسبوعية وشهرية",
    "startZoom": 0.6, "pushFrames": 16, "drift": 0.03,
    "enterFade": false, "exitFade": false } }
```

Timing notes for the editor:
- **B8b vs «فهو AI».** «فهو AI» is at about 83.8 and the clip ends at 85.80, which leaves only 2.0 s, under the 3 s
  callout minimum. So B8b comes in 2 s earlier, on «والشخص ده مش شخص حقيقي», which sets up the AI line. B8a ends
  where B8b begins, so the tap on «ابدأ التمرين» cuts straight into the call. If «كل مكالمة ليها goal» lands
  earlier than 78.3, slide B8a earlier and hold the footage between the two screens.
- **B10a/B10b** follow the same pattern: back to back, and the second ends on the clip's out. Move B10a so it comes in
  0.1–0.3 s before «إيه اللي محتاج تحسّنه», with the picture leading the sound.
- The approximate source times are mine, read from the caption order. Verify each one with the word timings.

## Changes from screens.md
- **B8b** is `push` instead of `still`. A still view shows the whole phone at 55% height, the label covers the call's
  waveform, and the kit's light page edge shows around the dark phone. Pushing in to the avatar, the name, «يتحدّث…» and
  the waveform (callout h 236 → 350, `calloutFill` 0.4) fills the frame with the live call and puts the label under
  the waveform.
- **B7** uses `calloutFill` 0.9 to crop to the modal. ProductScreen has no crop prop. At this zoom the visible
  width is about 628 CSS px around the A1 card, so the desktop table is out of frame, and the top shows the header bar
  over the purple ground.
- All labels are the approved onscreen.json T3–T7 text, not the screen-producer's suggestions.

## Checked (late frame of each, 1080×1920, 24 fps, ar)
Arabic is shaped and right-to-left, Cairo, and the accent is orange (`#ff8e31`, from tokens) on the ring, the tap ripple and the highlights. Label
capsules are solid purple with white ink. Every label and title sits above y 1536 (the bottom 20%): B7 label y≈965,
B8a ≈1100, B8b ≈1330, B10a ≈1315, B10b ≈1185, LowerThird plate 1207–1342 (clear of the caption pill, which starts
at ≈1450), EndCard URL ends ≈1180, TitleCard ≈870–1060. Screens are shown as shipped, with no recolouring. Motion is the calm push
and fade, with no bounce.

## Gaps (no code changed)
1. **No tap sound on overlays.** `sgv/sfx.py` reads `tap` only from timeline clips, so B8a's tap stays silent
   as an overlay. It is acceptable, since sfx is quiet. If a tap sound is wanted, sfx.py needs to read `overlays` as well.
2. **The logo bug isn't hidden under overlays.** `render.finish` hides it only during timeline motion clips. The logo
   is off in edit.json now. If the editor turns it on, it will draw over the five screens.
