# QA · draft 1

Export: `exports/group-report-reel-draft.mp4` · 540x960 · h264 + aac 48 kHz stereo · 30 fps · 30.20 s · 3.1 MB.
Scratch voice-over (say, Majed): loudness and pronunciation are informational only. 540p: sharpness judged loosely, sizes converted to 1080x1920.

How checked: `sgv look -n 16`; single frames at 0.03, 0.5, 2.3, 2.6, 3.2, 3.5, 3.8, 4.1, 4.5, 6.25, 7.5, 9.0, 10.2, 10.45, 10.6, 12.5, 14.2, 14.6, 15.5, 18.0, 19.4, 19.6, 19.8, 20.0, 21.5, 23.0, 23.3, 23.6, 23.8, 24.3, 25.5, 26.6, 26.75, 27.0, 27.3, 27.7, 28.5, 30.15 s; luma per frame (signalstats); silencedetect + whisper word timings for caption sync; captions/master.srt compared with vo.json programmatically (identical text); `sgv loudness`; ffprobe.

## Checklist

**Brand**
| Item | Result |
| --- | --- |
| Colours only from tokens, one purple accent, no gradients outside the logo | PASS (pill colour, see advisories) |
| Fonts: Plus Jakarta Sans / IBM Plex Sans Arabic only | PASS (visual) |
| Copy: sentence case, no "!", no emoji, verb + object CTA, `·` for metadata | PASS |
| Currency `E£` | N/A |
| Logo: official file, not recoloured or stretched; hidden during motion graphics | PASS (logo off; end card uses `brand/logos/logo-light.png` via `Logo.tsx`, width auto) |
| Motion calm: cuts, dissolves, dips only; no zoom transitions | FAIL (1) |

**Words**
| Item | Result |
| --- | --- |
| Every on-screen string matches onscreen.json (T2–T8, url) | PASS |
| Every caption matches vo.json word for word | PASS |
| Spoken lines match vo.json meaning and product names | PASS (meaning, per whisper); names mispronounced by the scratch voice, info only |
| No invented claims or numbers | PASS (58%, A2 Morning, 24/21, 71, ranking are demo-screen data) |
| Arabic: joining, RTL order, punctuation at line end, Latin and numbers readable in RTL (our text) | PASS |
| Arabic/English on screen inside product screens: no truncated or RTL-broken strings | FAIL (6, 7) |
| MSA on screen, Egyptian Arabic in the voice-over | PASS |
| English spelling | PASS |

**Picture**
| Item | Result |
| --- | --- |
| 9:16 bottom 20% holds nothing but captions | PASS (only background product UI in cover shots, see advisories) |
| Faces in frame | N/A |
| Screens from the design-system kit, sharp | PASS at 540p; B4 and B2 small type will not read at 1080 (2, 8) |
| Callout on the right element | FAIL (9) |
| Text held ≥ 1.5 s + 0.06 s/char | FAIL (3, 4, 5) |
| No black, frozen or flash frames | FAIL (1) (no black frames; near-blank canvas frames at every clip change) |
| No cut mid-word | PASS |
| Hook in the first 2 s, no logo intro | PASS (B1 readable from about 0.4 s; see 1) |

**Captions**
| Item | Result |
| --- | --- |
| Burned in, dark rounded pill, white text | PASS |
| ≤ 2 lines, ≤ 28 chars per line (9:16) | PASS (longest line 24) |
| Bottom margin ≥ 360 px @1920 | PASS (pill bottom about 366 px from the bottom) |
| In sync with the voice (±0.2 s) | FAIL (10) |
| One language per track | PASS |

**Sound and tech**
| Item | Result |
| --- | --- |
| Loudness -14 LUFS ±1, true peak ≤ -1 dBTP | N/A (scratch): -13.96 LUFS, -0.99 dBTP, recheck on the real take |
| Resolution | N/A for the draft (540x960); final must be 1080x1920 |
| Frame rate 30, duration 30 ± 2 s | PASS (30 fps, 30.20 s) |

## Notes

1 · 0:00.0, 0:02.5, 0:10.5, 0:14.5, 0:19.5, 0:23.5 · @motion-designer: every clip change that edit.json marks as a cut plays as a dip. The outgoing clip fades to canvas over about 0.4 s, then 6 to 9 frames are near-blank canvas (luma 245–248 at 2.47–2.67, 10.47–10.77, 14.50–14.77, 19.50–19.77, 23.50–23.67), then the next clip fades in while it zooms from 0.6 to 1.0 in 0.5 s. That is five white flashes and five zoom-ins in 30 s, and the reel opens on blank canvas for its first 0.25 s. Rules broken: transitions are hard cuts by default, dips only for chapter breaks, no zooms (BRAND.md Motion); no flash frames; the hook should read on frame 1. ProductScreen and StatCard should not fade in or out when the incoming transition is a cut. Open on the settled framing or use a gentle push of 5% or less, and bring the ring and label in on top.

2 · 0:02.5–0:06.0 · @motion-designer: the StatCard is laid out for 16:9. The card fills about 22% of the frame height. At 1080x1920 the label "من طلاب المجموعة" is about 20 px and the caption line about 22 px, against a scaled overline of 39 px and body of 53 px (BRAND.md: scale by height/1080). It will not read on a phone. Scale the card and its type for 9:16.

3 · 0:03.7–0:06.2 · @motion-designer: the StatCard caption "الماضي البسيط · الأفعال الشاذة · A2 Morning" (42 chars) needs 4.0 s and is readable for about 2.5 s. It appears only after the count-up (about 3.7 s) and goes into the dissolve at 6.0. Rule: hold ≥ 1.5 s + 0.06 s/char. Bring the caption in with the number. If that is not enough, → @scriptwriter to shorten it.

4 · 0:19.95–0:23.1 · @motion-designer: the T6 label "تقرير أسبوعي PDF للأهالي والعملاء" (34 chars) needs 3.54 s and is readable for about 3.15 s. It lands about 0.45 s into the beat and fades out 0.4 s early. Same hold rule. Fixing note 1 recovers most of this.

5 · 0:23.9–0:26.7 · @motion-designer, @editor: the T7 title "جودة التدريس، تراها كل أسبوع" (27 chars) needs 3.12 s and is fully readable for about 2.8 s. The fade-in starts about 0.17 s after the cut and takes about 0.3 s, then the dip starts at 26.7. The editor's "full hold 24.1–26.8" is 2.7 s. Same hold rule. Have the title on screen at the cut, or start the dip 0.3 s later.

6 · 0:00.0–0:02.5 and 0:14.5–0:19.5 · @screen-producer, @motion-designer: on `report-ar-excerpts`, the cover framing cuts the Arabic heading "ما قاله الطلاب هذا الأسبوع" at the right edge, so it reads "ا قاله الطلاب هذا الأسبوع". It also cuts the English subhead on both sides and shows fragments of the left column ("النطق", "KS", "DN", "nk / ugh"). Rule: no truncated Arabic on screen. Either keep the full heading in frame or crop above or below it.

7 · 0:00.0–0:23.5 (B1, B3–B6) · @screen-producer: English and RTL-broken kit strings are clearly visible and readable, against the treatment's "keep English or RTL-broken strings out of every crop":
- B1/B5: "of 24 students · 41 errors this week 14"
- B3: "to 3 hours 1", "A2 · Aug 11–17, 2026 المستوى · Collective feedback for General English" (mixed direction), "did not practise 3", "Practice time distribution", "Student ranking · Aug 11–17"
- B4: "min 58"… inside the ring
- B6: "vs last week 4 ↑", "of students 58%", ".Common patterns across students…", and "1h 5" cut at the right edge

Gate 1 kept the kit strings as they are, so crop around them. The B3 cover in particular shows most of the page.

8 · 0:10.5–0:14.5 · @motion-designer, @screen-producer: the B4 ranking window sits off-centre. Its left edge is cut at x=0 and the right side is empty canvas. Student names are about 18 px and the numbers about 12 px at 1080, so the beat's point (who practised, how much) does not read. The editor flagged this too. Use the narrower callout (names + practice bars) so the window can fill the frame.

9 · 0:15.0–0:19.1 · @motion-designer: in B5, L5 says "ومعاها tip للحصة الجاية", but the "Teaching tip · Drill go/went, buy/bought…" line is hidden behind the T5 label and the caption pill. The ring is only on the "buyed → bought" excerpt. Also, the label sits about 22 px (at 1080) above the caption pill, so a two-line caption would collide with it. Rule: the callout goes on the element the words name. Frame higher so the tip is clear above the label, or move the label above the ring.

10 · 0:17.10 · @editor: the L5 cue split is 0.35 s early. "الطلاب" ends at about 17.29 (pause 17.29–17.45), but cue 8 "ومعاها tip للحصة الجاية." starts at 17.10. Rule: ±0.2 s. Move the split to about 17.40. For reference, the L3 split (8.00 against speech resuming at 7.80) is at the limit, and the L4 split (12.55, pause 12.50–12.66) is fine. Re-check all three on the real take.

## Advisories (not blocking)

- @editor: the L2 and L7 captions break leaving one word on line 2 ("الغلطة." / "أسبوع."). Break at the comma: "أكتر من نص الـgroup،" / "نفس الغلطة." and "وجودة التدريس،" / "تشوفها كل أسبوع."
- @motion-designer: the StatCard label sits above the number, so it reads "من طلاب المجموعة" then "58%". Consider putting the number first, or the label under it.
- Caption pill: it measures #3B424F on canvas, which is about 81% of #0F1729 (brand 86%), and the corner radius looks under 14 px at 1080. Could be encoding; recheck on the 1080 final.
- Cover shots (B1, B3, B5, B6) run background product UI through the bottom 20%. No callout, label or title sits there, so this is accepted as background.
- Scratch VO (info): whisper hears "ألبرت" for group, "تتل" for tip and "تي دي اف" for PDF. L6 overlaps L7 by about 0.29 s and L7 runs 0.11 s into the dip. Expected to clear with the user's read.
- True peak is -0.99 dBTP, 0.01 dB over the -1 limit. Recheck after the real VO is mixed.

**Verdict: ship after fixes** (notes 1–10, then QA on draft 2 at 1080 for type size and pill style).
