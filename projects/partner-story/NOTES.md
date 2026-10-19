# Project notes · Partner Story

**Brief:** a partner video that explains Speaking Genie through Samra's own story, so partners refer centres and companies. Enablement DS, business track. 9:16, reels-1080x1920, Arabic, about 2:00. Voice only (no music). Full brief: crew/brief.md.

**Length / formats:** draft 1 is 2:01.5 at 24 fps. Export: reels-1080x1920.

**Key messages (in order):** personal problem → confidence gap (B6) → what it is → how it works → why it works → proof (feedback, reports) → the habit (gym) → product today → referral conversation.

**Decisions log**

Draft 1 (editor, 2026-10-19)
- The selects come from crew/shots.md. I re-measured each in and out on a 20 ms RMS envelope and checked them with word-level whisper on short snippets. Every clip duration is snapped to whole frames at 24 fps, so the overlay anchors don't drift.
- B1 in is 3.18, as shots.md has it, not 3.45. The first ~0.4 s is the start of "Speaking": a snippet from 3.60 loses "Speaking Genie", and one from 3.18 doesn't pick up a filler. The hook is "Speaking Genie بدأت من مشكلة شخصية", from 0:00.
- B4 out is 49.72, as in shots.md. There's no breath after «الشخصية». This adds «أجرب أستخدم practice مختلفة، حسيت إن دي حاجة ممكن تكون opportunity», which is not in the approved script. The captions carry it in the script's spelling style; the user should confirm it at the draft gate.
- B8 in is 66.84, not 65.36. There's a measured 0.3 s gap (66.62–66.90) before «طلعنا», so the clip opens on «طلعنا بفكرة», exactly as the script and treatment have it. «فكانت إن أنا إيه» is dropped.
- B7 is 16.62–23.54. The 23.80 in shots.md catches the start of «فممكن», which I checked by transcription. The clip starts 0.4 s before the voice, so the push-right finishes before he speaks. No video fadeOut: in sgv, fadeOut fades the picture, and the audio already gets a 30 ms fade.
- B9 out is 45.60, B11 is 30.22–35.22, B5 out is 58.78, and B12 out is 75.70 (silent tail into the dip). B10 out is 20.40: silence runs to 20.44, which gives the reports screen 3.35 s.
- Transitions are all cuts, plus a dip of 0.375 s into the B6 TitleCard, a push-right of 0.375 s into B7, and a dip of 0.5 s into the EndCard. The TitleCard is 4.5 s (text rule: 38 characters needs 3.8 s). The EndCard is 5 s and starts 0.06 s after the last word.
- Overlay anchors use the measured phrase starts on the timeline, not the times in motion.md. B7: flow-aiPlan on «مناهج» (54.46). B8a: lab tasks on «كل مكالمة ليها goal» (66.45, 4.7 s, tap at 4.1 s on «عليه»), then cut straight to the call. B8b: the call on «والشخص ده مش شخص حقيقي» (71.15, which is source 79.95, not 81.8), held to the clip's out. B10a: feedback on «إيه اللي حصل فيها» (97.93). B10b: reports on «وبنطلّع لك الـfeedback» (102.68) to the out. Lower third at 0.6 s for 4 s.
- Captions are 55 cues in captions/master.srt, word style, built by hand from the script.md chunks and timed to the speech runs. Two cues are merged («عن المكالمة دي: إيه اللي حصل فيها،»). The script's [?] words stay as approved: نفسي, إزاي يفيد, بتعمل practice, ما بقت.
- Grade "lift" on clips 11 and 12. Punch-in 1.15 on B3, B5 and B12. sfx at volume 0.3 (only the push whoosh: sfx doesn't read overlay taps). Logo off. No music.
- Draft loudness: -14.4 LUFS, true peak -0.95 dBTP.

Draft 2 (editor, 2026-10-19; notes from review-1 and qa-1)
- B7 now comes in on a plain cut instead of push-right. Everything from B7 on moves 0.375 s later, and captions 23–55 are shifted by the same amount. Total 2:03.83.
- The B9 cue now opens on «فإحنا», which he says at the in point.
- The LowerThird comes in at 2.4 s. The EndCard is 7.0 s. Its headline joins «مركز لغات أو شركة» with non-breaking spaces (props only, same approved text), so the lines read «هل تعرف» / «مركز لغات أو شركة؟» and the whole highlight sits on line 2.
- Captions stay off the phone UI. Each mobile screen is framed so the phone ends at about 0.68–0.70·H, above the caption pill:
  - 06-lab-tasks and 23-reports: move "still" (whole phone, ring on the callout).
  - 22-call: push with calloutFill 0.19, a slight push only.
  - 21-session-feedback: push with calloutFill 0.5.
  The cost is a smaller phone, so its UI text is less readable.
- B7 flow-aiPlan (web modal) was left as it is. The caption sits over the lower rows of the modal. A frame that keeps the modal above the pill would need S ≈ 0.88 and would show nearly the whole desktop, which the screen-producer ruled out.
- True peak stays at -0.95 dBTP. Peaks across the whole cut (B3, B4, B10, B11, B12) sit right on loudnorm's -1 ceiling, with about 0.05 dB of overshoot after AAC. A volume trim on one clip can't change that, because loudnorm brings the gain back up. It needs a lower TP target in sgv/render.py.

Final (editor, 2026-10-19; Gate 3 passed)
- The user approved draft 2. B4's extra line stays, the five [?] words stay as captioned, and the B10 sample scores are fine.
- Export: exports/partner-story-reels-1080x1920.mp4 (1080x1920, 24 fps, 2:03.83, 128.1 MB). Loudness -14.01 LUFS, TP -1.48 dBTP, after the producer set the TP target to -1.5.
- Checked: a 16-frame sheet, and frames at 0:01, 0:03 (lower third), the Latin-first caption, all five screens and the end card. They match draft 2: captions sit off the phone UI, the accent is orange, and the end card headline breaks as intended.

## Delivery (2026-10-19)
- Master: `exports/partner-story-reels-1080x1920.mp4` (1080×1920, 24 fps, 2:03.83, 128 MB, −14.01 LUFS, TP −1.48).
- Share copy for email and WhatsApp: `exports/partner-story-share.mp4` (same picture, 1.2 Mbps two-pass, 20.5 MB).
