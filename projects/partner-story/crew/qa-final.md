# QA final · Partner Story

Checked: `exports/partner-story-reels-1080x1920.mp4`: 1080×1920, h264, 24/1 fps CFR, aac 48 kHz, 2:03.83,
128,096,093 bytes (128.1 MB, ≈ 8.3 Mbps). Rendered after Gate 3 (user approved draft 2). Gate 3 decisions applied:
B4's extra line is approved, the five `[?]` words stand, and the B10 sample scores are fine.

How: a 16-frame sheet; 1080p crops of the caption band at every Latin-first and «الـ»+Latin cue (0:01.0, 0:08.2,
0:10.5, 0:28.0, 0:34.0, 0:35.0, 0:37.5, 0:44.0, 0:46.3, 0:52.7, 1:08.0, 1:10.3, 1:15.3, 1:23.0, 1:25.0, 1:34.0,
1:36.8, 1:38.5, 1:40.0, 1:43.7), plus a 2× zoom at 0:08.2 and 1:43.7; key frames with a 20 % grid (lower third,
title, B7, call, reports, end card); pixel measurement of the pill; a 20 ms envelope at 15 cue onsets; sample-step
checks at 11 joins; blackdetect; `sgv loudness`; ffprobe.

## Checklist

| Item | Result | Owner | Note |
| --- | --- | --- | --- |
| RTL order, Latin-first lines | PASS | @producer | 0:00.05 «Speaking Genie بدأت» now reads right to left: «Speaking Genie» sits at the right and «بدأت» to its left. 1:23.46 line 2 shows «judgement» at the right, «عليك» to its left and the comma at the left end |
| RTL order, «الـ»+Latin | PASS | @producer | «الـEnglish.» (0:08.2), «الـgrammar» (0:10.5), «زي الـLLM وChatGPT» (0:28.0), «في الـsolution ده» (0:44.0), «فالـAI ده…» (1:25.0), «الـfeedback» (1:43.7): «الـ» sits right of the Latin word, the tatweel joins at 1080, and the full stop or comma lands at the left end of the line |
| Other mixed lines | PASS | — | «.Speaking Genie وطلع من هنا», «،course defined», «،AI» / «فهو AI», «detailed feedback», «session», «.opportunity», «فمتاح لك 24 ساعة.»: order and line-end punctuation are correct |
| Caption accent | PASS | @producer | The word highlight is now the orange track accent, so there is one accent through the whole video |
| Captions = approved text | PASS | @editor | Matches script.md, plus B4's extra line (approved at Gate 3) and «فإحنا» (cue 34, 1:17.52), which is said and is now captioned |
| Caption sync ± 0.2 s | PASS | @editor | The envelope onset lands within 0.02 s of the cue start at all 15 sampled cues, including after the B7 shift (0:51.90, 0:53.43, 1:06.96, 1:11.70, 1:14.94, 1:17.52, 1:22.18, 1:43.14, 1:46.54, 1:51.50) |
| ≤ 2 lines, ≤ 28 characters per line, dark pill, white text | PASS | — | |
| Safe zone (bottom 20 %) | PASS | @producer | Pill measured at y 1434–1506 of 1920, bottom at 78.4 %, 30 px above the 1536 line. Lower third at 63–70 %. End-card URL ends at ≈ 61 % of height |
| Lower third | PASS | @motion-designer | Starts 2.4 s, «أحمد أبوسمرة» / «Co-founder, Speaking Genie», the Gate 2 wording; it clears the caption pill |
| TitleCard | PASS | @motion-designer | «المشكلة ليست في الإتقان، بل في الثقة.» with «الثقة» in orange; the line-end full stop is on the left; held ≈ 4 s, then a plain cut to B7 |
| Transitions | PASS | @editor | Cuts and two dips only. The push-right is gone |
| Call screen not transcribed | PASS | @editor | 1:11.7–1:17.4: the captions sit on the purple ground below the phone, not on the call UI |
| Screens as shipped | PASS | @screen-producer | Web flow-aiPlan, then mobile lab tasks, call, feedback and reports. Not recoloured; the ring is in the accent, the label sits in a purple capsule; all holds are long enough to read |
| EndCard | PASS | @editor | «هل تعرف» / «مركز لغات أو شركة؟» (accent), subline, white «تحدّث معنا» button, `speakingenie.com`. No badges, terms or numbers. Fully on from ≈ 1:59.0 to 2:03.83 (≈ 4.8 s); the headline is on from 1:57.3 |
| Retired claims and numbers | PASS | — | None. «24 ساعة» is Samra's own words and matches 24/7 in the brief. The scores on the B10 screens are product UI, approved at Gate 3 |
| Brand copy | PASS | — | No exclamation marks or emoji. One accent. The logo appears only as the card lockup |
| Black, frozen and flash frames | PASS | — | Black only inside the two dips (0:47.08, 1:56.92) |
| Loudness | PASS | @producer | −14.01 LUFS (target −14 ± 1), true peak −1.48 dBTP (≤ −1), LRA 5.5 LU |
| Pops at joins | PASS | @editor | 11 joins: the largest sample step within ±10 ms of each join is below that window's local p99. Envelopes dip to −60…−87 dB with no click |
| Resolution, frame rate, duration | PASS | — | 1080×1920, 24 fps (as edit.json), 2:03.83 |
| File size for delivery | FAIL | @producer | 128.1 MB. The brief's channel is WhatsApp and email. Email attachments cap at about 20–25 MB. WhatsApp recompresses a video this size heavily unless it goes as a document. Keep this file as the master |

**Watch, no action required:** the mobile screens now fill about half the frame width, so their UI text is small
(the label carries the beat; @creative-director already has this). At 0:52–0:58 the caption pill sits over the
lower rows of the B7 web modal; the editor chose this, and it is legible. The end card's subline, button and URL get
about 4.8 s, which is about 1 s under the strict 0.06 s/char rule. The approved draft 2 had the same timing.

## Notes (fails)

1. Whole file · @producer, ? user: 128.1 MB is too large to send by email and will be recompressed on WhatsApp.
   Make a share copy for direct sending, for example 1080×1920 at ≈ 1.5 Mbps (≈ 25 MB), or 720×1280 at ≈ 1.2 Mbps
   (≈ 20 MB). Check its loudness the same way. Or send the master as a link (Drive) or as a WhatsApp document.

**Verdict: ship.** The master passes every picture, text and sound check. The only open point is delivery (note 1).
