# Voice · Group report reel

## Engine
- **Now: scratch only, not for release.** macOS `say`, voice Majed (Arabic, closer to MSA than Egyptian, slower than a real read), **rate 230 wpm** (tried 190 and 210 first; both left six lines running into the next). Made so the editor can cut the draft on the real beat timings. Command: `bin/sgv voice group-report-reel --engine say --voice Majed --rate 230`.
- **Final: the user's own recording** (`files` engine), Egyptian Arabic, same voice as the onboarding video. `vo.json` keeps `voice.engine: "user-recording"`.
- Every line has a fixed `at` (beat start + 0.2 s; L1 at 0.1 s). When the recording replaces the scratch, the lines land at the same times, so the edit does not move.

## Line timings (scratch, Majed, 230 wpm)

| Line | Beat | Beat window | `at` / start | Slot (`max_seconds`) | Scratch duration | Over slot | Ends | Next `at` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| L1 | B1 | 0.0–2.5 | 0.10 | 2.0 | 2.24 | +0.24 | 2.34 | 2.70 |
| L2 | B2 | 2.5–6.0 | 2.70 | 2.9 | 2.74 | — | 5.44 | 6.20 |
| L3 | B3 | 6.0–10.5 | 6.20 | 3.9 | 4.09 | +0.19 | 10.29 | 10.70 |
| L4 | B4 | 10.5–14.5 | 10.70 | 3.4 | 4.20 | +0.80 | 14.90 | 14.70 (**overlaps 0.20**) |
| L5 | B5 | 14.5–19.5 | 14.70 | 4.4 | 4.82 | +0.42 | 19.52 | 19.70 |
| L6 | B6 | 19.5–23.5 | 19.70 | 3.4 | 4.29 | +0.89 | 23.99 | 23.70 (**overlaps 0.29**) |
| L7 | B7 | 23.5–26.7 | 23.70 | 2.6 | 3.11 | +0.51 | 26.81 | 26.90 |
| L8 | B8 | 26.7–30.2 | 26.90 | 2.9 | 2.68 | — | 29.58 | end |

Files: `audio/vo/L1.wav` … `L8.wav`, mix `audio/vo.wav` (30.1 s, place at 0). `file`, `start`, `duration` are written into `crew/vo.json`.

**At 230 wpm, the maximum rate allowed, two lines still run into the next line's start:** L4 by 0.20 s and L6 by 0.29 s. Six lines are still over their `max_seconds` slot. The cause is the scratch voice, not the script: Majed reads more slowly than a natural Egyptian voice and mangles the English terms (in the earlier transcript, "group" came out as "البرق", "tip" as "تتل" and "PDF" as "تي دي اف"). No script change is requested on account of it. For the draft, cut the picture to the beat windows, not to where the scratch lines end, and take captions from the `vo.json` text.

### Lines at risk for the real read too
Judged by words, commas and the English terms against the slot:
- **L1** (2.0 s, 5 words, a rising question): the tightest. If it passes about 2.2 s, use the approved fallback "طلابك بيغلطوا في إيه؟".
- **L4** (3.4 s, 7 words, comma pause): tight; keep the comma pause short.
- **L6** (3.4 s): "بي دي إف" is three spoken syllable groups plus the comma pause and "لوحده" stress. Likely close to the limit.
- **L7** (2.6 s): the direction says "slower"; a slow read will pass 2.6 s. Calm, not slow.
- L2, L3, L5, L8 should fit at a natural pace.
After the recording is split, any line still over its slot by more than 0.2 s goes back to the scriptwriter, not to a speed-up past 1.1x.

## Recording sheet (read this from your phone)

Follow **"Recording notes" in `crew/script.md`** for setup, tone, stressed words and how to say the product terms (جروب, جروب ريبورت, تِب, بي دي إف). Tone reference: the onboarding recording, `brand/product-ui/ui_kits/web-platform/assets/vo-eg.mp3`.

1. Quiet room with soft furnishings; AC, fans and music off; phone on airplane mode. Phone a hand-width from your mouth, slightly to the side, same distance throughout.
2. Read L1 to L8 in order, in **one take**. Say each line once, then **wait 2 full seconds** of silence before the next line. The pause is how the lines are split, so do not talk or move the phone in it.
3. Fluffed a line? Say it again straight away after the 2-second pause. The last take of a line wins, so do not go back to an earlier line later.
4. Natural pace, not rushed. Calm, not slow on L7. If a line feels long, say so instead of speeding up.
5. Read exactly the words below. If you change a word, tell the producer which one; captions come from this text.

| Line | Say | Stress |
| --- | --- | --- |
| L1 | تعرف طلابك بيغلطوا في إيه؟ | lift on "إيه" |
| L2 | أكتر من نص الـgroup، نفس الغلطة. | pause after "الجروب" |
| L3 | ده الـgroup report: الفصل كله في صورة واحدة. | "كله" |
| L4 | مين اتمرّن وقد إيه، مترتبين على نفس الأسبوع. | short comma pause |
| L5 | جمل حقيقية قالها الطلاب، ومعاها tip للحصة الجاية. | "حقيقية"; "تِب" light |
| L6 | بيوصلك لوحده، PDF تبعته للأهالي والعملاء. | "لوحده"; "بي دي إف" |
| L7 | وجودة التدريس، تشوفها كل أسبوع. | "تشوفها" |
| L8 | ابدأ تجربة مجانية النهارده. | smile on "مجانية", end down |

6. Save as M4A or WAV (MP3 is fine) to `projects/group-report-reel/audio/` (for example `audio/vo-take.m4a`) and tell the producer. It is split with:
   `bin/sgv voice group-report-reel --engine files --take audio/vo-take.m4a`
   Alternative: one file per line in `audio/vo-takes/L1.m4a` … `L8.m4a`, then `bin/sgv voice group-report-reel --engine files`.

## Retakes
None yet (scratch only).
