# QA · final (reels 1080x1920, user's voice + generated bed)

Export: `exports/group-report-reel-reels-1080x1920.mp4` · 1080x1920 · h264 + aac 48 kHz stereo · 30 fps · 29.80 s · 3.4 MB.

How checked:
- `sgv look -n 16` (full sheet), plus 25 frames at 1080: 0.0, 1.0, 2.3, 2.8, 4.5, 5.85, 6.5, 7.5, 9.4, 10.5, 11.5, 13.6, 14.5, 16.5, 18.6, 19.0, 20.5, 22.8, 23.3, 24.0, 25.0, 25.9, 26.2, 27.0 and 29.75 s. Every caption was cropped and read at full size.
- Luma for all 894 frames (signalstats). The minimum YAVG is 233.7 and no frame-to-frame jump is larger than 8, so there are no black or flash frames.
- `sgv loudness`, ffprobe and `sgv timeline`.
- `sgv transcribe --lang ar` on a copy of the export, compared with vo.json.
- Speech ranges measured on `audio/vo.wav` (silencedetect at -40 dB and -32 dB, plus an RMS envelope at the L6 split), and mean levels of the export in speech and in the gaps.

## Voice vs vo.json

Measured speech: L1 0.23–1.95 · L2 2.75–5.08 · L3 5.83–8.75 · L4 9.48–13.28 · L5 13.78–18.23 · L6 18.73–22.61 · L7 23.29–25.54 · L8 26.02–27.81.

Whisper caught every word of all eight lines, in order. The differences are dialect or spelling noise only: «ترك» for «تعرف», «الفصله» and «فصورة», «بيدي اف» for PDF, «تبعاته». Nothing is missing, added or clipped. Every line has silence before and after it, so no word is cut at a line start or end. L7 ends at 25.54, before the dip at 25.8.

## Checklist

**Brand**
| Item | Result |
| --- | --- |
| Colours from tokens, one purple accent, gradient only on the logo mark and the "AU" avatar | PASS |
| Fonts: IBM Plex Sans Arabic / Plus Jakarta Sans | PASS (visual) |
| Copy: sentence case, no "!", no emoji, verb + object CTA, `·` for metadata | PASS |
| `E£` | N/A |
| Logo: only the end card lockup, not stretched; none over motion clips | PASS |
| Motion calm: cuts, one dissolve (B2→B3), one dip (into B8), no bounce or zoom transitions | PASS |

**Words**
| Item | Result |
| --- | --- |
| On-screen strings match onscreen.json: T2 (58%, «من طلاب المجموعة», «الماضي البسيط · الأفعال الشاذة»), T3–T5, T6 «تقرير أسبوعي PDF للأهالي», T7, T8 and the url | PASS |
| Spoken lines match vo.json (meaning, product names said the Egyptian way) | PASS |
| Captions match vo.json word for word (14 cues read at 1080) | PASS |
| No invented claims or numbers: 58%, A2 Morning and the four ranked students are demo data | PASS |
| Arabic joining and RTL order; punctuation at the line end («؟», «،», «.», the colon after "group report"); PDF reads first on the right in cue 11 | PASS |
| MSA on screen («تراها» on T7), Egyptian Arabic in the voice-over | PASS |
| No English kit strings outside the product content (student sentences, names, "Teaching tip" line as in qa-2) | PASS |

**Picture**
| Item | Result |
| --- | --- |
| Bottom 20%: nothing but captions. Pill bottom at about y 1555, above the 1560 limit (360 px margin) | PASS |
| Faces | N/A |
| Screens from the kit, sharp, callout on the right element (B1 excerpt, B3 title, B5 excerpt + tip, B6 PDF button) | PASS |
| Holds ≥ 1.5 s + 0.06 s/char: T3–T6 and T8 pass. T2 caption gets 3.1 s against 3.3 s, and T7 gets 2.9 s against 3.1 s | FAIL (known, waived by the editor; note 2) |
| No black, frozen or flash frames | PASS |
| Hook on frame 0 (ringed excerpt), no logo intro | PASS |

**Captions**
| Item | Result |
| --- | --- |
| Burned in, dark rounded pill, white text | PASS (shade: see advisories) |
| ≤ 2 lines, ≤ 28 characters per line | PASS |
| Balanced lines with no one-word orphan (review-1 #9) | FAIL (note 1) |
| Sync ±0.2 s: onsets are 0.0–0.13 s ahead of the speech, and the splits fall in the measured pauses (4.10, 6.95–6.99, 11.18–11.22, 15.92–15.96, 19.70, 24.44) | PASS |
| One language | PASS |

**Sound and tech**
| Item | Result |
| --- | --- |
| Loudness −14.05 LUFS (target −14 ±1) | PASS |
| True peak −1.00 dBTP (≤ −1) | PASS (no headroom left) |
| Music not masking speech: LRA 3.3 LU; speech about −16.6 dB mean, bed in the gaps −31 to −34 dB (15–18 dB under); clean transcription | PASS |
| 1080x1920, 30 fps, 29.8 s (30 ±2) | PASS |

## FAILs

1 · 0:06.99–0:08.86 and 0:19.70–0:22.66 · @editor: cue 5 «الفصل كله بيبقى في صورة واحدة.» and cue 11 «PDF تقدر تبعته للأهالي مباشرة.» wrap to two lines, and line 2 is a single word («واحدة.» / «مباشرة.»). Rule: balanced caption lines with no orphans (review-1 #9; the editor's log says there are none). There are two fixes:
- break the lines by hand, «الفصل كله بيبقى / في صورة واحدة.» and «PDF تقدر تبعته / للأهالي مباشرة.» (sgv captions flattens `\n`, so this needs the tooling fix or a hand edit of the SRT)
- split each cue at a word boundary

Text and timing stay as they are.

2 · 0:02.5–0:06.1 and 0:22.9–0:26.3 · @editor, ? user: the T2 caption is short of the hold rule by 0.2 s and T7 by 0.2 s. Both stay on screen through their transitions, and the voice timing leaves no room. I accept the editor's waiver; I list it for the record only. No change needed.

## Advisories

- The caption pill still renders as about #3B4250 on the canvas, lighter than #0F1729 at 86%. This is unchanged from qa-2 and is a renderer item for later.
- True peak sits exactly at −1.00 dBTP. That passes, but a re-encode by the platform could push it over. A −1.5 ceiling next time would be safer.
- B6 pushes in so that the window runs off the right edge, with the header about 40 px from the top. This is intended (review-2 optional note), and the caption and label are clear.
- B4 names are about 22 px at 1080. This is the known optional note.

**Verdict: ship after fixes.** The only fix is note 1, a caption line-break with no re-time. Everything else is ready to ship.
