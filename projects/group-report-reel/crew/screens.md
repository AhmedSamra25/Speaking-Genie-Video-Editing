# Screens · Group report reel

All screens are the kit's `groupReport-ar` card (Arabic RTL, light theme, demo data). No mock-ups and no retouching: every file below is a plain pixel crop of one real capture.

## Round 2 (after review-1 / qa-1): tight crops

Source capture: `assets/screens/report-ar-full3x.png`, made with `bin/sgv screen group-report-reel groupReport-ar --lang ar --size 1440x2900 --scale 3 --name report-ar-full3x` (4320x8700 px; the whole page in one viewport). The crops are taken at 3x so they stay sharp when they fill the frame.

**Every ProductScreen clip using these files needs `"scale": 3` in its props.** sgv derives `srcW/srcH` from the pixel size divided by `scale`, and the default is 2.

| File | Crop of report-ar-full3x (CSS x, y, w, h) | CSS size | What is in frame |
| --- | --- | --- | --- |
| `assets/screens/report-ar-b1.png` | 792, 1864, 348, 108 | 348 x 108 | first excerpt bubble "Yesterday I go to the café and I eat eggs and bread." + "~~I go … I eat~~ → I went … I ate". Nothing else |
| `assets/screens/report-ar-b3.png` | 590, 120, 562, 198 | 562 x 198 | title "تحليل المجموعة · A2 Morning", subtitle line, metric cards إجمالي الطلاب 24 and الطلاب النشطون 21, cut just under the numbers, above "did not practise 3" |
| `assets/screens/report-ar-b3-title.png` | 830, 88, 322, 88 | 322 x 88 | alternative for B3: "كل التقارير" + the title only. Fully clean |
| `assets/screens/report-ar-b4.png` | 514, 875, 540, 311 | 540 x 311 | ranking rows 1–4: Arabic headers الطالب / الجلسات / وقت الممارسة, avatars, names, green session meters with counts, purple practice meters. No "min" cells, no English title, no # column |
| `assets/screens/report-ar-b5.png` | 792, 2017, 348, 146 | 348 x 146 | second excerpt "On Friday I buyed new shoes with my brother." + "~~buyed~~ → bought" + the first line of the teaching tip, "Teaching tip · Drill go/went, buy/bought, eat/ate with a". Ends above line 2, which starts with the kit's misplaced full stop (".'yesterday'…", qa-2 #2) |
| `assets/screens/report-ar-b6.png` | 0, 0, 562, 195 | 562 x 195 | the header's left half: user chip, AR toggle, theme, help, الإشعارات 4, شحن, and the "تنزيل PDF" button. Ends above the subtitle and the metric cards |

## Beats

Callouts are in the crop's own CSS px. Labels are the ones in `crew/motion.md` (from onscreen.json). The motion settings are the ones I used for the check stills; the motion designer owns the final timing.

| Beat | Screen file | Hold | Callout (x, y, w, h) | Label | Move used in the check |
| --- | --- | --- | --- | --- | --- |
| B1 | `report-ar-b1.png` | 2.5 s | 14, 6, 320, 94 | none | push, startZoom 0.85, pushFrames 12, cover |
| B3 | `report-ar-b3.png` | 4.5 s | 0, 0, 562, 198 (whole crop) | صورة كاملة للمجموعة | push, startZoom 0.6, pushFrames 15, cover |
| B3 alt | `report-ar-b3-title.png` | 4.5 s | 4, 44, 316, 44 | صورة كاملة للمجموعة | same |
| B4 | `report-ar-b4.png` | 4.0 s | 0, 0, 540, 311 (whole crop) | من تدرّب، وكم تدرّب | same |
| B5 | `report-ar-b5.png` | 5.0 s | 14, 2, 320, 140 (excerpt + tip line 1) | أمثلة حقيقية جاهزة للدرس | same |
| B6 | `report-ar-b6.png` | 4.0 s | 28, 129, 102, 48 (the button) | تقرير أسبوعي PDF للأهالي والعملاء | still (no zoom) |

Checked on 1080x1920 ProductScreen stills at 3.5 s. I judged the ring and the crop, not the transitions.
- **B1**: the window is about 950 px wide, so the bubble text is about 34 px. The ring wraps the bubble and its correction. Only that excerpt is in frame: no heading, no second excerpt, no English meta line.
- **B3**: the window card is centred, the ring is around it and the label sits below. Title, 24 and 21 read clearly. **One string left:** the subtitle "A2 · Aug 11–17, 2026 المستوى · Collective feedback for General English" sits between the title and the cards. No rectangle can hold both the title and the cards without it. If the director wants it out, use `report-ar-b3-title.png` (clean, with a large title, but no 24 / 21).
- **B4**: the card is centred and the ring wraps it, with the label below. Names are about 24 px at 1080, and the meters and counts read. To reach the 28 px the review asked for, the window would have to fill the full 1080 width (2.0x instead of 1.76x); the 64 px side margin in ProductScreen stops it.
- **B5** (recropped for qa-2 #2): the ring wraps the excerpt, the correction and the first line of the tip. The tip's second line, with the misplaced full stop, is out of frame, and no trace of it shows at the edge. The label sits below the window, so it covers nothing. The label's bottom edge is at about 58% of the frame height, clear of the caption pill.
- **B6**: header card centred, ring on "تنزيل PDF", label below the card. No metric cards, no English, no broken RTL. `still` is used because the push zooms to 2.6x on a 102 px button and clamps it against the window's edge.

## Superseded (round 1, draft 1)

`report-ar-top.png`, `report-ar-full.png`, `report-ar-ranking.png`, `report-ar-excerpts.png`: draft 1's edit.json still points at them. I will delete them (they are mine) once draft 2 uses the new files. The director's `ref-*` files and the other existing captures are not mine and stay.

## v2 (re-cut: mobile call + steps + tap)

Checked on 1080x1920 ProductScreen renders at the v2 clip lengths (B1 2.85 s, B5 5.35 s, B6 4.4 s); frames read at the times below. All files are plain captures or plain pixel crops; `"scale": 3` on every clip.

| Beat | File | Size (CSS) | Callout / steps / tap (CSS px of the file) | Checked |
| --- | --- | --- | --- | --- |
| B1 | `assets/screens/b1-call-ar.png` (`sgv screen 22-call-ar --status listening --name b1-call-ar`, mobile kit, 1290x2652) | 430 x 884 | callout **155, 149, 120, 32** (chip «سيتم إنشاء التقرير»), no label | 0, 1.4, 2.8 s: ring hugs the chip from 0.9 s; timer above, Emma below |
| B5 | `assets/screens/report-ar-b5-steps.png` (crop of report-ar-full3x at CSS 792, 1864, 348, 299; 1044x897) | 348 x 299 | step 1 at 0 s: **14, 6, 320, 98** (café bubble + «I go … I eat → I went … I ate»); step 2 at 2.3 s: **14, 155, 320, 140** (buyed bubble + «buyed → bought» + tip line 1), label أمثلة حقيقية جاهزة للدرس | 0, 0.5, 2.0, 3.2 s |
| B6 | `assets/screens/report-ar-b6.png` (unchanged) | 562 x 195 | callout **28, 129, 102, 48** (confirmed: the button is 32–126 x 133–173, ring 4 px outside); tap **{x: 79, y: 153, at: 1.2}** | 0, 1.2, 1.4, 4.35 s: tap dot lands on the button centre, between «تنزيل» and «PDF» |

What I checked in the frames and what follows from it:
- **B1**: the capture is clean: Arabic RTL, «يستمع…», the waveform, the green report chip, the 00:01:12 timer; the only English is the name "Emma". The phone frame's bottom edge runs past 884 px (the kit's card height), but the startZoom 0.85 push never shows it. At the end of the push the chip is about 380 px wide, top third of the frame, and the waveform drops out below the frame; Emma and «يستمع…» stay. With the default dim, Emma's white photo turns grey on the dark screen. I suggest `"dim": false` (the ring alone is enough on the dark UI). Props used: startZoom 0.85, pushFrames 12, drift 0.03, ringAt 27 (0.9 s).
- **B5**: the crop holds both excerpts, both corrections and the tip's first line. It ends above line 2 (the misplaced full stop), like report-ar-b5. Between the excerpts sits the kit's meta line "01:12 · Describing your weekend · Karim Saleh", shown whole and not cut (demo data; no contiguous crop can drop it). The crop is as wide as the frame, so step 1 does not zoom: the whole card shows and the ring sits on the first excerpt; at 2.3 s the camera travels down and the ring redraws on step 2. The step-1 h is 98 (not 94): at 94 the ring ran along the strikethrough of «I go … I eat». **Label on step 1 collides**: rendered with the label at step 1, it lands over the excerpt-2 meta line, half covering it ("De… n Saleh" peeks out either side). Verified version: label on step 2 only. Props used: startZoom 1, sideMargin 24, labelSize 42, ringAt 6, dim false, drift 0.03.
- **B6**: with `move: "still"` the kit draws the button only about 180 px wide (calloutFill doesn't apply to still). The draft-3 framing (push with startZoom 1, sideMargin 0, calloutFill 0.45, so already framed at frame 0) plus drift 0.02 reads the same as a still: the button is about 490 px wide and the tap lands at its centre. Recommend keeping that framing over `still`.

`report-ar-b1.png` and `report-ar-b5.png` are superseded by v2 (B1 → b1-call-ar, B5 → report-ar-b5-steps). I delete them once the v2 draft is in.
