# QA · re-cut v2 (reels 1080x1920)

Export: `exports/group-report-reel-reels-1080x1920.mp4` · 1080x1920 · h264 + aac 48 kHz stereo · 30 fps · 29.83 s · 7.6 MB.

How checked:
- `sgv look -n 16` (full sheet), plus 1080 frames at 0.05, 0.9, 1.5, 2.4, 2.5, 2.6, 2.7, 2.8, 2.87, 9.4, 13.4, 15.3, 15.45, 15.6, 15.8, 16.1, 18.5, 18.6, 18.7, 18.8, 18.87, 19.6, 19.7, 19.75, 19.85, 19.9, 20.1 and 28.5 s. Each transition frame was also cropped and read at full size.
- The caption band tiled at 6 fps through cues 1–3, 5, 10–11 and 14 (word highlight order).
- signalstats on all 895 frames (YAVG, UAVG, VAVG, SATMAX and the frame-to-frame jumps).
- `sgv loudness`, ffprobe, and volumedetect on the export and on `audio/vo.wav` over the same windows.
- Voice, words and caption text are unchanged since qa-final, so I did not transcribe again.

## Checklist

**Brand**
| Item | Result |
| --- | --- |
| Colours from tokens. The highlight is #A78BFA (tokens `link` / BRAND purple text) and it is the only purple on the pill. Gradients only on the logo mark and the "AU" avatar | PASS |
| Fonts: IBM Plex Sans Arabic / Plus Jakarta Sans | PASS (visual) |
| Copy: sentence case, no "!", no emoji, `·` for metadata | PASS |
| Logo: only the end card lockup | PASS |
| Motion transitions: two (zoom 2.50, push-right 18.50), both 0.35 s, different, 16 s apart, push in the reading direction, dip into the end card, the rest cuts | PASS |
| Motion transitions use "real motion blur", with no glitches | FAIL (notes 1, 2) |
| Screens never sit still: drift on every screen, B5 eased travel with a ring redraw, B1 ring draws on (it starts at 0.9 and is complete by 1.5), and the B6 tap lands on «تنزيل PDF» at 19.7 | PASS |

**Words**
| Item | Result |
| --- | --- |
| On-screen strings and captions unchanged from qa-final; T5 label shown on step 2 only | PASS |
| B1 kit strings «سيتم إنشاء التقرير», «يستمع...», "Emma" are correct RTL, from the kit | PASS |
| B3 "A2 Morning" in the kit's title (editor note): this is product demo data. qa-2 #1 removed it from our own caption only, and qa-final passed it | PASS |
| No invented claims | PASS |

**Picture**
| Item | Result |
| --- | --- |
| Bottom 20% (below y 1536): only captions | FAIL (note 3, B1 only) |
| Labels clear of captions (B3, B4, B5 step 2, B6) | PASS |
| Screens from the kit, sharp, callouts on the right element (B1 chip, B5 excerpt 1 then excerpt 2 + tip, B6 button) | PASS |
| No black, frozen or flash frames. The minimum YAVG is 54 (frame 0, the dark call screen, as intended). The largest jump is 23.5/frame, in the dark-to-light zoom: a smooth, monotonic ramp from 57 to 221 over 10 frames. UAVG/VAVG never jump by more than 2.9, so there are no chroma glitches | PASS |
| Hook on frame 0 (the live AI call), no logo intro | PASS |

**Captions**
| Item | Result |
| --- | --- |
| Word style: exactly one word lit at a time, moving right to left (cue 1 تعرف → طلابك → بيغلطوا → في → إيه؟; cue 11 PDF → تقدر → تبعته → للأهالي → مباشرة.). «الـgroup» lights as one word | PASS |
| qa-final note 1 (one-word orphans): fixed. «الفصل كله بيبقى / في صورة واحدة.» and «PDF تقدر تبعته / للأهالي مباشرة.» | PASS |
| ≤ 2 lines, ≤ 28 characters, dark pill, white text, one language | PASS |
| Sync: cue times unchanged from qa-final | PASS |

**Sound and tech**
| Item | Result |
| --- | --- |
| Loudness −14.06 LUFS (−14 ±1), LRA 3.3 | PASS |
| True peak −1.00 dBTP (≤ −1) | PASS (no headroom) |
| SFX subtle. Zoom window 2.45–2.90: max −19.1 dB, mean −29.1, against −29.3 for the bed alone at 2.1–2.6. Push window 18.4–18.9: max −17.5, mean −29.4. Voice: max −1.0 to −2.1, mean −15 to −17. So the whooshes sit 16–18 dB under the voice peaks and barely above the bed. The tap at 19.7 is masked by the voice (max −2.9, as the voice alone) | PASS |
| 1080x1920, 30 fps, 29.83 s | PASS |

## FAILs

1 · 0:18.55–0:18.80 · ? producer (render tooling), then @editor re-render: the push-right "motion blur" strobes. It is 8 discrete copies of the frame, about 13 px apart, so every line of text turns into a comb of echoes ("Yyyyesterday", "mmmm"; the B6 avatar shows as 8 stacked discs). It reads as a glitch, not a smear, for about 6 frames. Rule: BRAND Motion, "real motion blur … no glitches". Cause: `sgv/render.py` averages 8 sub-frames (`fps*8`, `tmix=frames=8`), which is too few for a push of about 100 px per frame. Fix: more sub-frames (about 24–32), or a directional blur proportional to the push speed. Frame: 18.7.

2 · 0:02.55–0:02.85 · @motion-designer (or ? producer, same tooling): during the zoom, the StatCard counter is already counting, and the sub-frame averaging blends two values into a ghosted double digit ("34" with a grey "0", "41/44", "13/19"). Emma's photo also crosses the number (the editor's note). Each of these lasts under 0.3 s, but the ghost digits look broken on a number that is the hook's payoff. Fix: start the count after the zoom lands (delay it by about 0.35 s, so the number holds at its start value through the move), or fix it with note 1. Emma crossing the 58% is acceptable on its own: it is a cross-blend inside the zoom, and the number is clean from 2.87. Frame: 2.7.

3 · 0:00.00–0:02.85 · @motion-designer: on B1, the kit's "Emma" name pill (about y 1560–1610), «يستمع...» (about y 1690) and the waveform (y 1850+, frame 0 only) sit below the 80% line. Platform UI will cover them, and the caption pill leaves only about 10 px above the "Emma" pill. Rule: 9:16 bottom 20% carries only captions. Fix: frame B1 a little higher or tighter, so that the avatar, name and status end above y 1536 and the caption sits under them. Or the user waives it, since these are decorative call-screen elements and the point (the chip, top) is clear. Low severity.

## Advisories (no change needed)

- B4 drift (editor note): by 13.4 the avatar chips (LA, MY, HE, KS) are trimmed at the right edge and the bars at the left. The names are still whole. It doesn't matter much; drift 0.02 would keep the chips whole.
- B5 step 1 (13.5–15.3): the caption pill covers the bottom of the "Teaching tip" line. The tip is the point of step 2, where it is clear (15.8 on), so this is acceptable.
- B6 tap: the 56 px disc lands in the gap between "PDF" and «تنزيل» and covers the tail of the «ل». It reads as a press on the button. Centring it on the button's left padding would hide no letters.
- True peak exactly −1.00 dBTP (as in qa-final). A −1.5 ceiling would be safer.
- Caption pill shade is still about #3B4250 on the canvas (renderer item, as in qa-final).

**Verdict: ship after fixes.** Note 1 is the one I would not ship: the push strobe looks like a glitch. Note 2 likely goes away with the same fix. Note 3 is minor and the user can waive it.
