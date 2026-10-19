# QA · draft 3 (second QA pass)

Export: `exports/group-report-reel-draft.mp4` · 540x960 · h264 + aac · 30 fps · 30.20 s · 1.6 MB. The voice-over is still the scratch take, so loudness and pronunciation are informational only.

How checked:
- Single frames at 0.0, 1.2, 2.47, 2.53, 3.5, 4.5, 6.25, 7.0, 8.5, 10.47, 10.53, 12.6, 14.47, 14.53, 16.0, 18.0, 19.47, 19.53, 20.5, 22.5, 23.47, 23.53, 25.0, 26.5, 26.8, 27.2, 28.5 and 30.15 s, plus edge crops of B1, B3 and B5.
- Luma for every frame (signalstats).
- Caption text compared with vo.json in code: identical once the leading RLM is removed. Longest cue is 28 characters.
- Cue splits checked against the measured pauses in the voice track (the same audio as draft 1).
- `sgv loudness` and ffprobe.

## qa-1 notes re-checked

| qa-1 | Now |
| --- | --- |
| 1 Fades to canvas and zoom-ins at the cuts; blank opening | FIXED. Luma stays at 235–247 through 2.5, 10.5, 14.5, 19.5 and 23.5 with no blank frames. Frame 0 shows the excerpt with its ring. Screens open already framed, with no zoom. The only dip is into the end card (26.7). |
| 2 StatCard too small for 9:16 | FIXED. 58% fills about 80% of the frame width. The label is about 48 px and the caption line about 40 px at 1080, both readable. |
| 3 StatCard caption held too briefly | STILL FAILS (minor), see note 1 |
| 4 T6 hold | FIXED. Readable from 19.5 to 23.5, which is 4.0 s against the 3.54 s needed. |
| 5 T7 hold | FIXED. Readable from 23.5 to 26.7, which is 3.2 s against the 3.12 s needed. |
| 6 Arabic heading cut off | FIXED. No truncated Arabic anywhere. |
| 7 English and broken-RTL kit strings | MOSTLY FIXED. One remains in B5, see note 2 |
| 8 B4 off-centre and unreadable | FIXED. Full width, centred, names about 26 px at 1080. Rows 1–4 only, no "min" cells. |
| 9 B5 tip hidden | FIXED. The ring takes in excerpt + correction + teaching tip, and the label sits below the window, clear of the caption. |
| 10 L5 split early | FIXED. The split is at 17.40, inside the pause from 17.29 to 17.45. |

## Checklist

**Brand**
| Item | Result |
| --- | --- |
| Colours from tokens, one purple accent, gradient only on the logo mark and avatar (B6 "AU") | PASS |
| Fonts: Plus Jakarta Sans / IBM Plex Sans Arabic | PASS (visual) |
| Copy: sentence case, no "!", no emoji, verb + object CTA, `·` for metadata | PASS |
| `E£` | N/A |
| Logo: official file, not stretched; none during motion graphics except the end card lockup | PASS |
| Motion calm: hard cuts, one dissolve (B2→B3), one dip (into B8), no zooms, count-up with no bounce | PASS |

**Words**
| Item | Result |
| --- | --- |
| On-screen strings match onscreen.json (T2–T8, url) | PASS |
| Captions match vo.json word for word | PASS |
| Spoken meaning and product names | PASS (meaning); the scratch voice mispronounces names, info only |
| No invented claims or numbers | PASS (58%, A2 Morning, the 4 ranked students with session counts are demo data) |
| Arabic joining, RTL order, line-end punctuation, Latin inside RTL (captions, labels, titles) | PASS. The RLM fixes "PDF تبعته للأهالي والعملاء." so PDF reads first, on the right, and the full stop sits at the left end. |
| No truncated or RTL-broken strings on screen | FAIL (2) |
| MSA on screen, Egyptian in the VO | PASS |
| English spelling | PASS ("buyed" is the student's error, shown as such) |

**Picture**
| Item | Result |
| --- | --- |
| Bottom 20% holds nothing but captions | PASS. All labels sit at 48–61% of the frame height and the caption pill at about 77–81%. |
| Faces | N/A |
| Screens from the kit, sharp, callout on the right element | PASS (3x crops, crisp at 540) |
| Windows centred and fully inside the frame | FAIL (3) |
| Text holds ≥ 1.5 s + 0.06 s/char | FAIL (1); T3–T8 pass |
| No black, frozen or flash frames | PASS |
| Hook in the first 2 s, no logo intro | PASS |

**Captions**
| Item | Result |
| --- | --- |
| Burned in, dark rounded pill, white text | PASS (pill shade: see advisories) |
| ≤ 2 lines, ≤ 28 chars per line | PASS. All cues are one line, the longest 28 characters, and no line is a single orphaned word. |
| Bottom margin ≥ 360 px @1920 | PASS |
| Sync ±0.2 s | PASS. Splits fall inside the measured pauses: 4.42, 7.70, 12.58, 17.40, 21.08, 25.12. |
| One language | PASS |

**Sound and tech**
| Item | Result |
| --- | --- |
| Loudness / true peak | N/A (scratch): -13.96 LUFS, -0.99 dBTP |
| Resolution | N/A for the draft; the final must be 1080x1920 |
| 30 fps, 30 ± 2 s | PASS (30.20 s) |

## Remaining FAILs

1 · 0:02.5–0:06.0 · @scriptwriter (or @motion-designer): the StatCard caption "الماضي البسيط · الأفعال الشاذة · A2 Morning" (42 chars) needs 4.02 s. It now shows from frame 0 but gets only 3.5 s clean, plus 0.5 s under the dissolve. Rule: hold ≥ 1.5 s + 0.06 s/char. Dropping "· A2 Morning" (it is already in the B3 title) brings the caption to 30 chars and 3.3 s, which clears the rule. The alternative is to hold B2 0.5 s longer, which would move the beats.

2 · 0:14.5–0:19.5 · @screen-producer, ? user: line 2 of the teaching tip inside the B5 ring reads ".'yesterday' chain game before Describing your weekend". The kit's RTL container moves the full stop to the start of the line. It is small (about 24 px at 1080) but it sits inside the ring the VO points to. Rule: no RTL-broken strings on screen. There are three ways out:
- a design-system fix to the kit string (`dir="ltr"` on English excerpt text), then a re-capture
- a crop that ends after line 1 of the tip
- the user accepts it for this cut

3 · 0:00–0:02.5, 0:06–0:10.5, 0:14.5–0:19.5 · @motion-designer: the B1, B3 and B5 windows sit off-centre to the right, and the window's right edge runs to the frame edge. At 540 the margins are:

| Beat | Card left | Card right | Ring left | Ring right |
| --- | --- | --- | --- | --- |
| B1 | about 29 px | about 0–2 px | about 43 px | about 12 px |
| B3 | about 35 px | — | — | about 6 px (ring almost touches the edge) |

B5 is the same as B1. `sideMargin` looks applied to one side only, or computed before the RTL flip. Rule: windows sit centred with the brand margin, not cut by the frame. Minor, but it shows on every screen beat.

## Advisories

- Caption pill: still about #3B424F on canvas (around 81% of #0F1729 against the brand's 86%). Check it on the 1080 final.
- When the real VO lands, the editor re-measures the cue splits. The hand captions carry an RLM that `sgv captions` doesn't add on its own (editor's tooling note to the producer).
- B4 has no ring, only the label. That is fine because the whole crop is the subject.

**Verdict: ship after fixes.** Notes 1 and 3 are quick fixes. Note 2 needs a crop or a user call. Then do the final render at 1080 and a loudness check on the real VO.
