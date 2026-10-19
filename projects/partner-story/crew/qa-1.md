# QA 1 · Partner Story · draft 1

Checked: `exports/partner-story-draft.mp4` (540×960 draft of reels-1080x1920, 24 fps, 2:01.46, h264/aac 48 kHz).
Enablement DS, business track, Arabic. Against: crew/brief.md, crew/script.md, crew/onscreen.json, edit.json,
captions/master.srt, company brief, DESIGN-SYSTEMS.md.

How: 16-frame sheet plus single frames at every card, label, lower third and Latin-word caption (crops at 2×);
whisper on the whole export and on snippets (B9 head, B11 head, B12); a 20 ms RMS envelope of the export audio for
cue onsets; sample-step and 2.5 ms envelope checks across every join; blackdetect and freezedetect; `sgv loudness`;
ffprobe. Times below are timeline times.

## Checklist

**Brand and track**

| Item | Result | Note |
| --- | --- | --- |
| One accent (business orange) | FAIL | Title, end card and callout rings are orange. The caption word highlight is lavender purple `#A78BFA` (Platform link colour) on every cue: a second accent. → note 2 |
| Close on a conversation, no store badges, URL only | PASS | 1:56.46 EndCard: headline (accent on «مركز لغات أو شركة»), subline, white «تحدّث معنا» button, `speakingenie.com`. No badges, terms or numbers |
| Enablement look on cards | PASS | Purple dome ground, white lockup top-centre, Arabic display face; lockup only on cards, logo bug off |
| Copy: no exclamation marks, no emoji | PASS | Captions, cards and labels checked |
| Motion: cuts, dissolves, dips only | FAIL | 0:51.12 push-right with heavy motion blur into B7 (frames 0:51.2, 0:51.4). → note 6 |
| Black / frozen / flash frames | PASS | Black only inside the two dips (0:47.08, 1:56.54). Freezes are the static TitleCard and EndCard holds |
| Spoken register | N/A | DS business track asks for simplified formal; the brief takes Samra's own Egyptian Arabic by user decision at intake |

**Words**

| Item | Result | Note |
| --- | --- | --- |
| Captions = approved script, word for word | FAIL | Word diff of master.srt against script.md: identical except cues 17–18 (0:33.88–0:38.50) «أجرب أستخدم practice مختلفة، / حسيت إن دي حاجة ممكن تكون opportunity.», not in the approved script (editor already flagged). → note 3 |
| Captions = what is said | FAIL | 1:17.07 he says «فإحنا بنساعدك…» (whisper on the 1.6 s snippet: «فاحنا بنساعدك انك ترتاح»); cue 34 starts «بنساعدك». B9 in is 30.75, the script's 31.33 excluded «فإحنا». → note 4 |
| `[?]` words | OPEN | Whisper on the draft still hears «نفسنا» (0:31.5), «زي يفيد» (0:44.1), «بتبريكتس عليه» (1:09.0), «لحد منتج» (1:52.3, both full and snippet passes). User to listen |
| On-screen text = onscreen.json | PASS | T1 lower third «أحمد أبوسمرة» / «Co-founder, Speaking Genie» (Gate 2 wording); T2 title + highlight «الثقة»; T3–T7 labels verbatim; T8 headline, subline, cta, URL verbatim |
| Retired claims, unsourced numbers | PASS | None in speech or graphics. «24 ساعة» is Samra's own words and matches "24/7" in the company brief. AI is never called a teacher. No customer named |
| Demo numbers on screens | OPEN | B10 screens show sample data as shipped (78/100, 76%, 64%, 81%, 72%, 82%, 68%, 45%, 61%, 3.4 ساعات). They are not company claims, but the user said "no numbers". → ? user |
| Arabic RTL order and punctuation | FAIL | Lines whose first word is Arabic are right: full stop and comma land at the left end next to Latin words («.English», «.Speaking Genie», «.opportunity», «،course defined», «،AI»). Lines that start with a Latin word are laid out LTR: cue 1 (0:00.05–0:01.72) shows «Speaking Genie» on the left and «بدأت» on the right, so it reads "started Speaking Genie"; cue 38 line 2 (1:23.08–1:26.20) shows «judgement» left of «عليك» with the comma at the right end. → note 1 |
| Arabic shaping | WATCH | Letters join correctly. The tatweel in «الـ» before a Latin word (0:07.04 «الـEnglish», 0:09.38, 0:26.72, 1:23.08, 1:42.76) does not show at 540p; the article reads as a detached «ال». Check on the 1080 render |

**Picture**

| Item | Result | Note |
| --- | --- | --- |
| Bottom 20% safe zone | FAIL (in hand) | Caption pill bottom edge measured at y ≈ 777 of 960 = **≈ 1554 of 1920 (81%)**, about 18 px into the bottom 20% (starts at 1536). Lower third sits at 63–70% of height. The producer is moving the pill (captions.py now `0.215`); re-measure on draft 2 |
| Faces in frame after reframing | PASS | All 12 clips: head and hands in frame, nothing cut at the top |
| Screens as shipped, from the kits | PASS | B7 web flow-aiPlan (light, Arabic, English modal chrome as approved at Gate 2); B8 mobile lab tasks → call (dark), B10 feedback → reports; not recoloured; ring orange, label in a purple capsule |
| Screen holds | PASS | 3.6 / 4.7 / 5.9 / 4.75 / 3.37 s; each ≥ 1.5 s + 0.06 s × label length |
| Call screen never transcribed | FAIL | 1:11.32–1:17.00 captions «والشخص ده مش شخص حقيقي،», «فهو AI،», «فمتاح لك 24 ساعة.» sit on the call screen, directly above the call controls; they read as live subtitles of the call. → note 7 |
| Captions on screens | WATCH | 1:42.76–1:45.60 the pill covers the reports card values; 1:37.45 two-line pill crowds the label «ملاحظات ما بعد الجلسة». Legible, but cluttered |
| TitleCard hold | PASS (marginal) | Text fully on from ≈0:47.4 to the push at 0:51.12 = 3.7 s; rule for 38 characters is 3.8 s |
| EndCard hold | FAIL | All elements on from ≈1:57.7 to the last frame 2:01.46 = 3.8 s; ≈ 80 characters need ≥ 6.3 s. The video ends on the frame the reader reaches the URL. → note 5 |

**Captions**

| Item | Result | Note |
| --- | --- | --- |
| Burned in, dark rounded pill, white text | PASS | Highlight colour: see note 2 |
| ≤ 2 lines, ≤ 28 characters per line | PASS | Longest cues wrap to 2 lines |
| Sync ± 0.2 s | PASS | Envelope onsets vs cue starts at 0:00.05, 0:07.04, 0:09.38, 0:12.70, 0:16.96, 0:41.02, 0:51.52, 1:03.60, 1:06.58, 1:11.32, 1:14.56, 1:21.80, 1:42.76, 1:46.16, 1:51.12: all within 0.05 s. (Whisper token deltas up to 0.9 s are whisper drift over the silent TitleCard.) |
| No cut in a word | PASS | B11 (1:46.04) opens on room tone, speech at 1:46.16; B1, B5 tail («Genie» ends ≈0:47.08, inside the dip), B7, B12 clean |

**Sound and tech**

| Item | Result | Note |
| --- | --- | --- |
| Integrated loudness −14 ± 1 LUFS | PASS | −14.39 LUFS, LRA 5.4 LU |
| True peak ≤ −1 dBTP | FAIL | −0.95 dBTP. → note 8 |
| Pops at joins | PASS | 9 joins checked: max sample step within ±10 ms of each cut is 4–234 against a local p99 of 216–6273; envelopes fade to −60…−87 dB and back, no click |
| Silence | WATCH | 0:47.36–0:51.02 is digital silence (−∞) under the TitleCard; the EndCard is also −∞ after 1:56.96. Voice only is the user's choice, but 3.7 s of dead air mid-video can read as a dropout on a phone |
| Resolution, frame rate, duration | PASS | 540×960 (draft), 24/1 fps CFR as edit.json, 2:01.46 (brief: about 2 min) |

## Notes (fails)

1. 0:00.05–0:01.72 and 1:23.08–1:26.20 · @producer: Arabic caption lines that begin with a Latin word are laid out
   left to right. The hook reads «Speaking Genie | بدأت» left→right, i.e. "started Speaking Genie" to an Arabic
   reader; cue 38 line 2 shows «judgement» left of «عليك» with the comma at the right end. Rule: Arabic RTL order,
   punctuation at the line end. Cause: `sgv/captions.py` uses ASS encoding −1 (first-strong direction per line).
   Force an RTL base on Arabic lines (e.g. U+200F at the start of every line, after wrapping).
2. Whole video · @producer (captions.py `accent`) + @editor: the spoken-word highlight is purple `#A78BFA` on a
   business-track video whose accent is orange. Rule: one accent per video. Use the track accent (`#ff8e31` on dark)
   or no highlight.
3. 0:33.88–0:38.50 · @scriptwriter, ? user: cues 17–18 carry speech not in the approved script. Keep it (and
   approve the caption text; whisper hears «براكتسز», so «practices» may be what he says) or cut B4 at the 47.12 the
   editor offered.
4. 1:17.07 · @editor: «فإحنا» is spoken at the head of B9 but not captioned. Either start B9 after it (the script's
   31.33 source) or, with the user's OK, @scriptwriter adds «فإحنا» to cue 34.
5. 1:56.46–2:01.46 · @editor: EndCard text is fully on for only 3.8 s; ≈ 80 characters need ≥ 6.3 s. Make the
   EndCard about 7 s.
6. 0:51.12 · @editor: push-right into B7. QA rule: cuts, dissolves and dips only (calm motion). Use a cut or a
   short dissolve off the TitleCard.
7. 1:11.32–1:17.00 · @motion-designer + @editor: burned captions sit on the call screen right above the call
   controls and read as a transcript of the call. Rule (DS): the call screen is never transcribed. Options: scale or
   place the call screen so the pill falls on the purple ground outside the device, or cut back to Samra for
   «فهو AI، فمتاح لك 24 ساعة».
8. Whole mix · @editor (or @producer if the limiter ceiling lives in render.py): true peak −0.95 dBTP; target ≤ −1.0.
   Lower the limiter ceiling to −1.5 dBTP and re-check on the 1080 render.

Safe zone: recorded, not a separate note. The pill bottom is at ≈ 1554/1920; the producer's captions.py change is
already in the tree. Re-measure on draft 2.

## Open for the user

- The four `[?]` words (whisper on the draft: «نفسنا», «زي يفيد», «بتبريكتس», «لحد منتج»).
- Sample numbers on the B10 feedback and reports screens (as shipped): OK under "no numbers"?
- 3.7 s of complete silence under the TitleCard: keep, or lay room tone under it?

**Verdict: ship after fixes.**
