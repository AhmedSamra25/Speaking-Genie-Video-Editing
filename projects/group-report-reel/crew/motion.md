# Motion · Group report reel

## v2 (re-cut: mobile call, steps, tap, drift)

All clips: theme `light`, lang `ar`, 9:16 (1080x1920). Sources: treatment "Re-cut v2", screens.md "v2", onscreen.json. No code changes. Transitions (`zoom` into B2, `push-right` into B6, 0.35 s each; `dip` into B8) are the editor's; every clip here is `enterFade`/`exitFade` false so it is fully visible from its first frame to its last (B8 keeps its exit fade: nothing follows it).

| Beat | Time | Composition | Duration | Transition in | Props |
| --- | --- | --- | --- | --- | --- |
| B1 | 0:00–2.85 | ProductScreen | 2.85 | none (frame 0) | `{"src":"assets/screens/b1-call-ar.png","scale":3,"callout":{"x":155,"y":149,"w":120,"h":32},"startZoom":0.85,"pushFrames":12,"drift":0.03,"ringAt":27,"dim":false,"enterFade":false,"exitFade":false}` |
| B2 | 2.5–5.6 | StatCard | 3.1 | zoom 0.35 | `{"label":"من طلاب المجموعة","value":58,"suffix":"%","caption":"الماضي البسيط · الأفعال الشاذة","labelBelow":true,"enterFade":false,"exitFade":false}` |
| B3 | 5.6–9.3 | ProductScreen | 3.7 | cut | `{"src":"assets/screens/report-ar-b3-title.png","scale":3,"callout":{"x":4,"y":44,"w":316,"h":44},"label":"صورة كاملة للمجموعة","startZoom":1,"sideMargin":40,"labelSize":42,"ringAt":6,"dim":false,"drift":0.03,"enterFade":false,"exitFade":false}` |
| B4 | 9.3–13.5 | ProductScreen | 4.2 | cut | `{"src":"assets/screens/report-ar-b4.png","scale":3,"callout":{"x":0,"y":0,"w":540,"h":311},"label":"من تدرّب، وكم تدرّب","ring":false,"sideMargin":0,"labelSize":42,"startZoom":1,"ringAt":6,"drift":0.03,"enterFade":false,"exitFade":false}` |
| B5 | 13.5–18.85 | ProductScreen | 5.35 | cut | `{"src":"assets/screens/report-ar-b5-steps.png","scale":3,"steps":[{"callout":{"x":14,"y":6,"w":320,"h":98},"at":0},{"callout":{"x":14,"y":155,"w":320,"h":140},"label":"أمثلة حقيقية جاهزة للدرس","at":2.3}],"startZoom":1,"sideMargin":24,"labelSize":42,"ringAt":6,"dim":false,"drift":0.03,"enterFade":false,"exitFade":false}` |
| B6 | 18.5–22.9 | ProductScreen | 4.4 | push-right 0.35 | `{"src":"assets/screens/report-ar-b6.png","scale":3,"callout":{"x":28,"y":129,"w":102,"h":48},"label":"تقرير أسبوعي PDF للأهالي","startZoom":1,"sideMargin":0,"calloutFill":0.45,"dim":false,"ringAt":0,"labelSize":42,"drift":0.02,"tap":{"x":79,"y":153,"at":1.2},"enterFade":false,"exitFade":false}` |
| B7 | 22.9–26.3 | TitleCard | 3.4 | cut | `{"title":"جودة التدريس، تراها كل أسبوع","enterFade":false,"exitFade":false}` |
| B8 | 25.8–29.8 | EndCard | 4.0 | dip 0.5 | `{"headline":"ابدأ تجربة مجانية","url":"speakingenie.com","enterFade":false}` |

Beat starts hold: B1 2.85 − 0.35 zoom = 2.5; B5 ends 18.85 − 0.35 push = 18.5; B7 ends 26.3 − 0.5 dip = 25.8.

### Timing decisions

- **B1 ring at frame 27 (0.9 s)**, no label (the caption carries the question). The push (0.85 → 1 in 12 frames) lands at 0.4 s, then the ring draws on the chip «سيتم إنشاء التقرير».
- **B5 step 2 at 2.3 s** = 15.8 on the timeline, 0.16 s before «ومعاها ترتيب الحصة الجاية» (15.96): the camera travels about 0.7 s and the ring redraws on excerpt 2 as the word lands. Label on step 2 only (on step 1 it covers the excerpt-2 meta line; screen producer verified).
- **B6 tap at 1.2 s** (clip starts 18.5; «PDF» at 19.70 per the L6 caption split). `at` is the press frame; the indicator glides in from 0.73 s and leaves by 1.93 s. With `"sfx"` on, the tap sound plays at 19.70.
- **B6 keeps the push framing** (startZoom 1, calloutFill 0.45) rather than `move: "still"`: still draws the button about 180 px wide; this way it is about 490 px.

### Checked (1080x1920 renders, frames read)

- **B1** at 0, 0.8, 1.3, 2.8 s: dark call screen pushes in; no ring at 0.8, ring on the chip from 0.9; Emma, «يستمع…» and the timer stay in frame; no dim (Emma's photo stays white). The waveform leaves the frame as the push lands (expected, screens.md). At frame 0 the light reel canvas shows at the phone frame's top corners for a few frames, before the push.
- **B5** at 0.3, 2.6, 3.3, 5.3 s: frame 0 shows the whole card with the ring drawing on excerpt 1; at 2.6 the camera is mid-travel; from 3.3 the ring is on «buyed → bought» and tip line 1, with the label below the card at about 56% of frame height, clear of the caption pill.
- **B6** at 0.9, 1.2, 1.35, 4.35 s: tap dot glides in, presses at the button centre between «تنزيل» and «PDF», ripples, gone by the end; ring and label from frame 0; label at about 52% of frame height.

### Holds (1.5 s + 0.06 s per character)

| Text | Chars | Needs | On screen |
| --- | --- | --- | --- |
| T3 B3 label | 20 | 2.7 s | 0.2–3.7 s (3.5 s) |
| T4 B4 label | 19 | 2.6 s | 0.2–4.2 s |
| T5 B5 label | 24 | 2.9 s | about 2.9–5.0 s before the push-right takes it (about 2.1 s, 0.8 s short) |
| T6 B6 label | 24 | 2.9 s | 0.35–4.4 s (4.0 s) |
| T7 B7 title | 27 | 3.1 s | 0–2.9 s before the dip (as in the final cut, waived) |

T5 is short because step 2 is tied to the voice and the label can't sit on step 1. It is a support line, and the voice says «جمل حقيقية» over step 1. If QA wants the full hold, either move step 2 to 1.9 s (it then comes before the word) or put the label on step 1 with a new crop that drops the meta line.

---

# v1 (rounds 1–4, for reference)


All graphics: theme `light`, lang `ar`, 9:16 (1080x1920, `reels-1080x1920`). Text from `crew/onscreen.json` (approved at Gate 2), screens and callouts from `crew/screens.md` round 2 (3x crops; B3 = `report-ar-b3-title.png`, producer's call). Every row was rendered at 1080x1920 and checked on frames, including frame 0.

## Timeline clips

Paste each `props` object into a `{ "type": "motion", "composition": …, "duration": …, "props": … }` clip. Every clip starts fully visible on its first frame and holds to its last frame (`enterFade: false`, `exitFade: false`): a cut is a hard cut, and the dissolve into B3 and the dip into B8 come from the editor's transitions only. Screens open already framed (`startZoom: 1`), with no zoom during the clip.

| Beat | Time | Composition | Duration | Transition in | Props |
| --- | --- | --- | --- | --- | --- |
| B1 | 0:00–2.5 | ProductScreen | 2.5 | cut | `{"src":"assets/screens/report-ar-b1.png","scale":3,"callout":{"x":14,"y":6,"w":320,"h":94},"startZoom":1,"sideMargin":24,"ringAt":0,"dim":false,"enterFade":false,"exitFade":false}` |
| B2 | 2.5–6.0 | StatCard | 4.0 (3.5 + the 0.5 dissolve, as in draft 1) | cut | `{"label":"من طلاب المجموعة","value":58,"suffix":"%","caption":"الماضي البسيط · الأفعال الشاذة","labelBelow":true,"enterFade":false,"exitFade":false}` |
| B3 | 6.0–10.5 | ProductScreen | 4.5 | dissolve | `{"src":"assets/screens/report-ar-b3-title.png","scale":3,"callout":{"x":4,"y":44,"w":316,"h":44},"label":"صورة كاملة للمجموعة","startZoom":1,"sideMargin":40,"labelSize":42,"ringAt":6,"dim":false,"enterFade":false,"exitFade":false}` |
| B4 | 10.5–14.5 | ProductScreen | 4.0 | cut | `{"src":"assets/screens/report-ar-b4.png","scale":3,"callout":{"x":0,"y":0,"w":540,"h":311},"label":"من تدرّب، وكم تدرّب","ring":false,"sideMargin":0,"labelSize":42,"startZoom":1,"ringAt":6,"enterFade":false,"exitFade":false}` |
| B5 | 14.5–19.5 | ProductScreen | 5.0 | cut | `{"src":"assets/screens/report-ar-b5.png","scale":3,"callout":{"x":14,"y":2,"w":320,"h":140},"label":"أمثلة حقيقية جاهزة للدرس","startZoom":1,"sideMargin":24,"labelSize":42,"ringAt":6,"dim":false,"enterFade":false,"exitFade":false}` |
| B6 | 19.5–23.5 | ProductScreen | 4.0 | cut | `{"src":"assets/screens/report-ar-b6.png","scale":3,"callout":{"x":28,"y":129,"w":102,"h":48},"label":"تقرير أسبوعي PDF للأهالي والعملاء","startZoom":1,"sideMargin":0,"calloutFill":0.45,"dim":false,"ringAt":0,"labelSize":42,"enterFade":false,"exitFade":false}` |
| B7 | 23.5–26.7 | TitleCard | 3.7 (3.2 + the dip, as in draft 1) | cut | `{"title":"جودة التدريس، تراها كل أسبوع","enterFade":false,"exitFade":false}` |
| B8 | 26.7–30.2 | EndCard | 3.5 | dip | `{"headline":"ابدأ تجربة مجانية","url":"speakingenie.com","enterFade":false}` |

Logo stays off (the end card carries it).

## What each clip shows (checked frames)

- **B1**: frame 0 shows the first excerpt card, centred and full width (24 px side margins), with the ring already on: "Yesterday I go to the café and I eat eggs and bread." and "I go … I eat → I went … I ate" (bubble text about 40 px). Nothing else in frame, no dim. Same at 2.45 s.
- **B2**: the card is on screen at frame 0 and the number counts 0 → 58% over 1.5 s. The label "من طلاب المجموعة" (48 px) sits under the number, and the caption (40 px) is on screen from frame 0. Number 286 px.
- **B3**: the title card "كل التقارير" + "تحليل المجموعة · A2 Morning", 1000 px wide (title about 70 px); ring on the title fades in at 0.2 s, label (42 px) below at about 48% of frame height.
- **B4**: the ranking rows 1–4 fill the full width (names about 27 px), with no ring and no dim (the crop is the callout). Label below the card at about 60% of frame height.
- **B5**: excerpt, "buyed → bought" and the first line of the teaching tip inside the ring, full width (new crop, callout 14, 2, 320, 140). Label below the window at about 58% of frame height, clear of the tip and the caption pill.
- **B6**: the header pushed in (already framed at frame 0): the purple "تنزيل PDF" button is about 490 px wide with the ring on it, the user chip "مستخدم مسؤول" above it at the top; no dim. Label (42 px) below the button at about 52% of frame height. No metric cards or English rows.
- **B7**: title on screen from frame 0 to the dip.
- **B8**: logo, headline and url fully visible as the dip opens.

## Holds (1.5 s + 0.06 s per character)

| Text | Chars | Needs | On screen |
| --- | --- | --- | --- |
| B2 caption | 30 | 3.3 s | 0–3.5 s clean |
| B2 label | 16 | 2.5 s | 3.5 s+ |
| T3 B3 label | 20 | 2.7 s | 0.8–4.5 s (3.7 s) |
| T4 B4 label | 19 | 2.6 s | 3.2 s |
| T5 B5 label | 24 | 2.9 s | 4.2 s |
| T6 B6 label | 34 | 3.5 s | 0–4.0 s (4.0 s) |
| T7 B7 title | 27 | 3.1 s | 0–3.2 s before the dip |

## ProductScreen and card props (code, rounds 1 and 2)

- `enterFade` / `exitFade` (all four cards, default true): false = fully visible on frame 0 / held to the last frame.
- ProductScreen `startZoom` (0–1), `pushFrames`, `cover`, `ringAt` (frame the ring and label come in; 0 = on from frame 0), `drift` (gentle continuous push, at most 0.05; not used here), `sideMargin` (px at 1080; 0 = full width), `ring` (false = label only), `dim` (false = no dim outside the ring). The camera is clamped to the window edges once the window is bigger than the frame.
- ProductScreen `calloutFill` (share of the frame width the callout fills after the push) and `labelSize` (label px at 1080, default 30).
- StatCard `labelBelow`; in 9:16 the card's type is scaled up (number 286, label 48, caption 40 px at 1080). 16:9 is unchanged.
- Centring fix (round 4): the pan's sideways offset (3% of the screen width) used to apply to every move, so every push and still clip sat about 31 px right of centre. It now applies only to `move: "pan"`. B1, B3 and B5 measure equal side margins (rings 56/57 px, 39/40 px from the edges). Old non-pan clips shift by the same 3% and are now centred.
- Defaults otherwise reproduce the earlier renders: a default ProductScreen scores PSNR 55 dB against the earlier render (encoder noise), and TitleCard's settled frames score 60 dB.

## Decisions

- Optional review-2 notes left as they are: B4 names stay at about 22 px, and the B6 window still runs past its label. Both need a new crop from @screen-producer, not a code change.

- Screens are static for the whole clip, because a zoom at every cut read as five zoom-ins (qa-1 note 1). The ring and label are the only motion.
- No dim anywhere: on the tight crops the ring already wraps the card, and on B6 the push makes the button the largest thing in frame.
- Labels are 42 px (captions are 46), each sitting at 48–61% of frame height, well clear of the caption pill at about 77%.
- The wide, short crops (B1, B3, B5) still leave canvas below them in 9:16; they are as wide as the frame allows, which is what sets the text size.
- B4 drops the ring: the crop is the callout, and the full-width card leaves no room for a ring.
