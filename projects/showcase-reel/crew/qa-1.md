# QA 1 · Showcase reel (finals)

Checked: `exports/showcase-reel-reels-1080x1920.mp4` (AR, 9:16) and
`../showcase-reel-en/exports/showcase-reel-en-youtube-1080p.mp4` (EN, 16:9). Enablement DS, business track.
Method: 16-frame sheets of both, single frames at every card, callout, label, the lower third, the stat and the end
card (AR 1.4, 2.4, 8.3, 11.0, 15.0, 16.6, 19.2, 23.0, 25.8, 27.0, 27.9, 29.2, 32.6, 36.0, 38.0, 44.3; EN 0.4, 1.4,
4.6, 9.5, 14.2, 17.0, 21.6, 24.5, 26.6, 29.0, 33.5, 41.0), `sgv loudness`, ffprobe, blackdetect/freezedetect, RMS of
clip 11 around the B1 edges. Not transcribed: the voice is `say` built from `vo.json`, so the words are the text by
construction.

Accepted, not failed: scratch `say` voice; user gates not run; no speed ramp; English course content on the Arabic
lab-tasks screen (the same applies to the English feedback lines and their flipped full stops, ".bill", on the Arabic
B3a and B4 screens: shipped product).

## Checklist

| Item | AR 9:16 | EN 16:9 |
| --- | --- | --- |
| **Brand** · colours from tokens, purple ground + one track accent (orange), no gradients | PASS | PASS |
| Fonts (Enablement: Poppins/Inter/Cairo; screens keep kit fonts) | PASS | PASS |
| Copy: sentence case, no "!", no emoji, verb + object CTA, `·` for metadata | FAIL (6) | FAIL (6) |
| Logo: Enablement white lockup inside cards only, none on footage | PASS | PASS |
| Motion calm, transitions from the EDITING table only | PASS | PASS |
| **Effects budget** · light sweep ≤ 1 | PASS (button) | PASS (default box) |
| Screen-to-device zoom ≤ 1 | PASS (B3) | PASS (B3) |
| Tilt ≤ 10°, ≤ 2 | PASS (7°, once) | PASS |
| Match cuts ≤ 2 | N/A (none) | N/A |
| Motion transitions ≤ 1 per ~6 s, never the same twice in a row | FAIL (3) | FAIL (3) |
| Dome / parallax / capsule only in Enablement look | PASS | PASS |
| Rack focus ≤ 8 px, ≤ 2; no two big moves on one clip | PASS | PASS |
| Speed ramp only on montage | N/A (none, accepted) | N/A |
| **Words** · on-screen strings match `onscreen.json` | PASS | PASS |
| Spoken lines match `vo.json` | PASS (by construction) | PASS |
| No invented claims or numbers | PASS (500 with source line) | PASS |
| Arabic: joining, RTL order, punctuation at line end, numbers and Latin readable | PASS | N/A |
| Arabic register (business track: simplified formal, voice and screen) | FAIL (7) | N/A |
| English spelling, no typos (names included) | N/A | FAIL (6) |
| Labels add to the voice, never repeat the caption (EDITING "Words on screen") | FAIL (8) | FAIL (8) |
| **Picture** · 9:16 bottom 20% clear, faces in frame | PASS | N/A |
| One track: one accent, one register, one close, no badges | FAIL (9) | FAIL (9) |
| No retired claims; customers only from the approved list | PASS | PASS |
| Feature names verbatim | PASS (EN labels verbatim; AR translated) | PASS |
| Call screen never transcribed | PASS ("يتحدث..." status only) | PASS |
| Screens from the kit, sharp, callout on the right element | FAIL (10) | FAIL (11) |
| Web screens in 9:16 are crops of one component | FAIL (10) | N/A |
| Labels held ≥ 1.5 s + 0.06 s/char | FAIL (5) | FAIL (5) |
| Graphics clear of the caption band | PASS | FAIL (4) |
| No black, frozen or flash frames | PASS (only the 0.13 s dip into B9) | PASS (0.1 s dip) |
| No cut mid-word | PASS (out 6.00 in the 5.96–6.20 breath; in 3.18 on the onset) | PASS |
| **Captions** · burned, dark pill, white text, accent word | PASS | PASS |
| ≤ 2 lines, ≤ 28 (9:16) / 42 (16:9) chars per rendered line | PASS | PASS |
| In sync ±0.2 s | FAIL (1) | FAIL (1) |
| One language per track | PASS | PASS |
| **Sound and tech** · loudness | PASS (−14.10 LUFS, −1.50 dBTP) | PASS (−14.13 LUFS, −1.50 dBTP) |
| No overlapping voices | FAIL (1) | FAIL (1) |
| Sound cues: ≤ 1 per beat, riser once, impact ≤ 2, pairs complete | FAIL (2) | FAIL (2) |
| Licences: every `brand/sound/` file in LICENSES.json; Pixabay bed named in NOTES.md | PASS (cues are synthesised) | PASS |
| Resolution, fps, duration | PASS (1080×1920, 30, 45.67 s, H.264/AAC 48k) | PASS (1920×1080, 30, 41.90 s) |

## FAIL notes

1 · AR 0:02.45–0:02.82, EN same · @editor: Ahmed's line runs to source 5.96 s (export ~2.78; partner-story
shots.md, RMS −17 to −23 dBFS to there), but L1 enters at 2.58 and his caption ends at 2.45. About 0.2 s of two voices
over the dome, and his caption leaves 0.33 s before his last word. Rules: no overlapping voices; captions ±0.2 s.
Start L1 (and its cue) at ≥ 2.85, or end his caption at 2.78.

2 · AR 0:07.32, EN 0:06.48 · @sound-designer: `call-connect` without `hang-up`. EDITING sounds table: "a pair: both
or neither". Add the hang-up where the call leaves (B3→B3a cut) or drop the connect (the call is already live at
00:01:12 on screen, so neither is the cleaner choice).

3 · AR 0:29.85, EN 0:26.76 · @editor: slide-scale comes 4.6 s (AR) and 3.8 s (EN) after the push into B6. Budget: one
motion transition every ~6 s. Make B7's entrance a cut or blur, or push B6 earlier.

4 · EN 0:20.0–0:23.3 · @motion-designer: DualScreen labels sit in the caption band in 16:9; "The centre sees progress"
is hidden behind the caption pill at 21.6 and "The student practises" touches it. Raise the labels above the band
(bottom 96 px + pill height).

5 · AR 0:25.2–0:27.5 and 0:27.5–0:30.25; EN 0:22.9–0:25.2 and 0:13.0–0:15.7 · @editor / @motion-designer: label
holds below 1.5 s + 0.06 s/char. B6 step 1 "الأخطاء المشتركة في المجموعة" (28 ch, needs 3.2 s) and "Shared mistakes
across the group" (32 ch, 3.4 s) are up ~2.3 s minus the push. EN B6 step 2 "Ready for the next lesson" (25 ch, 3.0 s)
gets ~1.9 s before slide-scale. EN B3a "Goal-oriented curriculum call tasks" (35 ch, 3.6 s) is on ~2.7 s.

6 · AR/EN 0:00.3–0:02.3 · @scriptwriter: lower third. The company brief spells him **Ahmed Abosamra**, role
**Co-founder, Product**; the video says "Abousamra" and "Co-founder, Speaking Genie". The role joins metadata with a
comma (brand: `·`), and on the Arabic cut the role is English (on-screen Arabic is MSA: e.g. «الشريك المؤسس · المنتج»).
Confirm the spelling with him (? user) and match `onscreen.json`.

7 · AR 0:36.3–0:38.9 · @scriptwriter: L8 «من غير عبء تصحيح» is colloquial; the business track is simplified formal
Arabic in voice and captions. «دون عبء تصحيح» (or «بلا»).

8 · AR 0:11.0, AR 0:29.2, EN 0:26.6, EN 0:30.4–0:32.3 · @scriptwriter: labels repeat the caption on screen at the same
moment. AR B3 label «مكالمة صوتية مع شريك ذكي» = caption word for word; B6 step 2 «جاهز للدرس التالي» over caption
«جاهزة للدرس التالي» (and the genders differ); EN "Ready for the next lesson" over "ready for the next lesson."; EN B8
title "The gym membership for your voice." over the identical caption. Rule (EDITING, Words on screen): labels add what
the voice doesn't say.

9 · EN 0:30.06–0:36.0 · @scriptwriter, cc @creative-director: "The gym membership for your voice." is the
individuals' line (company brief: Individuals B2C, "the gym membership for your voice", closes on an app install) and
speaks to the learner ("your voice") in a video otherwise addressed to the centre ("your students", "your teachers").
One register per video. Use a business line (e.g. "The only curriculum-integrated solution.", which the AR B8 card's
«ضمن منهجك» already echoes).

10 · AR 0:25.2–0:26.4 · @screen-producer: B6 opens on the whole RTL desktop page squeezed into 9:16, right side (header,
sidebar) cut, text ~18 px and unreadable until the camera reaches step 1 at ~26.4. EDITING: web screens in 9:16 are
crops of one component. Open B6 on the focus-areas component crop (or a pre-zoom onto step 1).

11 · EN 0:26.2–0:27.2 · @screen-producer: the PDF callout is off its button. The mirrored box (1314, 133, 94, 40) was
sized for «تنزيل PDF»; "Download PDF" is wider, so the ring covers "wnload PDF" and "Do" sits outside it, with the
cursor click at the ring's centre, not the button's. Re-measure on the LTR capture.

## Advisories (no fail)

- Scratch voice overruns its slots (AR L1 4.24/3.6 s, L2 6.36/5.2, L8 5.06/4.4; EN L2 5.52/5.0, L8 5.31/5.0); the cut
  was stretched to fit. A real voice will need the beats re-timed.
- Music: Pixabay "Content ID Registered" and LICENSES.json says the certificate is **not yet saved**. The EN cut is a
  YouTube deliverable: @sound-designer saves the certificate before any upload.
- "today" (L7, AR stat label «نخدمهم اليوم») on a June 2026 figure: fine in October, stale later. Consider "500
  learners actively served" spoken as on the card. The AR stat label's «نخدمهم» is "we", which the business track keeps
  for the ask and close.
- AR 1.4: lower third sits directly on top of the caption pill (no gap). AR 23.0: «الطالب يتدرّب» sits at the left edge,
  away from the phone it names (phone is right), and the phone shows Learning Reports, not practice.
- EN 0:41.0: the default sweep crosses the right side of the frame; aim it at the button as in AR.
- Caption breaks leave a preposition hanging ("…كل طالب في" / "…follows your").

## Verdict

**Ship after fixes** (internal proof piece: 11 fixes, none structural; 1, 4, 9, 10 and 11 are the ones a viewer sees).
