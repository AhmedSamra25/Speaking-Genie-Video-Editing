# Project notes · Group report reel

**Brief:** language-centre owners (Egypt) see what the group report gives them, then start a free pilot. See `crew/brief.md`, `crew/treatment.md`.

**Length / formats:** 29.8 s, 9:16, `reels-1080x1920`, light, ar (ar-eg VO = the user's own read, MSA on screen). Music: `audio/bed-generated.wav` at 0.35, ducked. Logo off (end card carries it).

## Decisions log

### Draft 1 (editor)
- Timeline is the 8 motion clips from `crew/motion.md`, props unchanged. Beat starts land exactly on the treatment: B1 0.0, B2 2.5, B3 6.0, B4 10.5, B5 14.5, B6 19.5, B7 23.5, B8 26.7, end 30.2. Each line's `at` is 0.2 s after its beat start (L1 0.1 s), so every new shot leads its line by 0.2 s.
- Transitions: cuts, dissolve B2 → B3, dip into B8. Compensated: B2 4.0 s (3.5 + 0.5), B7 3.7 s (3.2 + 0.5). B7's title stays fully readable 24.1–26.8 s; its exit fade falls inside the dip.
- Voice-over: `audio/vo.wav` at 0 (scratch, Majed 230 wpm). Scratch L7 ends at 26.81 s, 0.11 s into the dip at 26.7 s. That's a scratch artefact, and the user's real read (L7 slot 2.6 s) should clear it. Scratch L4 runs 0.20 s into L5 and L6 runs 0.29 s into L7, as voice.md expects.
- Captions: `sgv captions --from-vo` and then hand-fixed in `captions/master.srt`. The auto split left one-word orphans ("واحدة.", "الأسبوع.", "الجاية.") and overlapping cues. L3, L4 and L5 are now split at their phrase breaks (colon or comma), and L4 and L6 end 0.05 s before the next line starts. Text is exactly vo.json. Re-running `--from-vo` overwrites these fixes, so re-apply them after the real recording is retimed.
- Seen on the draft: B4's ranking card is small (names hard to read at reel size), and at mid-beat it sits off-centre, with the left edge ("min" cells) cut and empty canvas on the right. B5's label pill sits directly above the caption pill and almost touches it. Both are passed to motion/screens in crew/log.md.

### Draft 2 (editor)
- Timeline rebuilt from the round-2 `crew/motion.md` props, pasted as written (3x crops, B3 = report-ar-b3-title, no enter/exit fades). Durations, beat starts and transitions are the same as draft 1 (B2 4.0 s, B7 3.7 s). Frame 0 is the first excerpt with the ring on, and no canvas frames appear at the cuts.
- Captions: the improved `--from-vo` gave the same splits as my draft-1 hand fixes, so it still had L5 early (17.11 s) and L2/L6/L7 orphans. I kept a hand version, with splits placed on the pauses measured in the scratch VO (silencedetect plus whisper): L2 4.42, L3 7.70, L4 12.58, L5 17.40 (QA note 10), L6 21.08, L7 25.12. L2, L6 and L7 are now two cues each, split at the comma (review note 9). In-cue line breaks don't work because `sgv/captions.py` replaces `\n` with a space and rewraps.
- Captions: the cue "PDF تبعته للأهالي والعملاء." starts with Latin text, so it rendered left to right (the period landed on the right). Fixed with a leading U+200F right-to-left mark. Keep it if the captions are rebuilt.
- After the real recording: re-measure the pauses and move all the splits. `--from-vo` alone won't reproduce them.
- Seen on draft 2: B6 dims the whole frame to grey (the dim covers the canvas too), and the header card is small with a lot of empty grey around it. Passed to the motion designer.

### Draft 3 (editor)
- Props updated from round-3 crew/motion.md; nothing else changed. B6 grey-frame issue resolved (zoomed on the button, no dim).

### Final (editor, user's real voice)
- Re-timed to the user's recording (`crew/vo.json` starts). Beat starts: B1 0.0, B2 2.5, B3 5.6 (dissolve 5.6–6.1), B4 9.3, B5 13.5, B6 18.5, B7 22.9, B8 25.8 (dip 25.8–26.3), end 29.8. Each beat leads its line by 0.15–0.3 s. Durations 2.5 / 3.6 / 3.7 / 4.2 / 5.0 / 4.4 / 3.4 / 4.0 (B2 and B7 carry the +0.5 s for the dissolve and the dip).
- The B7 start moved to 22.9 (0.3 s lead) to give the title more time. L6 speech ends at 22.6. L7 speech ends at 25.54 (measured), so it is clear of the dip at 25.8. The end card is fully on from 26.3 to 29.8 (3.5 s).
- Holds: the B7 title has 2.9 s clean plus the dip (the rule wants 3.1 s), and the B2 caption has 3.1 s clean plus the dissolve (3.3 s). The real read leaves no room for more, and both stay on screen through their transitions.
- Props: B6 label is T6 «تقرير أسبوعي PDF للأهالي». B2 caption has no "· A2 Morning", and the B5 callout is h 140 (crew/motion.md).
- Mix: voiceover vo.wav at 0. The music bed (29.8 s, the same length as the cut) is at 0.35, ducked, fadeIn 1 and fadeOut 2.5.
- Captions: `--from-vo`, then two hand fixes. The L6 split moved from 19.82 to 19.70: "لوحده" ends about 19.65 and "بي دي إف" starts 19.76 (RMS + whisper), and the cue keeps its leading RLM. L2 and L7 are now split into two cues at their measured pauses, L2 at 4.10 after "الـgroup" and L7 at 24.44 after the comma (whisper checked on each side), so neither has a one-word orphan. The L3, L4 and L5 auto splits sit inside the real pauses. Text matches vo.json word for word.
- Export: exports/group-report-reel-reels-1080x1920.mp4, 1080x1920 H.264/AAC 48 kHz, 29.80 s, 3.4 MB. Loudness -14.05 LUFS, true peak -1.00 dBTP, LRA 3.3.

### Re-cut v2 (editor)
- Props from crew/motion.md v2, with B5 step 2 at 1.8 s (producer). B1 = b1-call-ar.png (AI call, student speaking), B5 = report-ar-b5-steps.png (two steps, label on step 2), B6 tap at 1.2 s, drift on every screen.
- Joins: zoom 0.35 into B2, cut into B3 (was dissolve), push-right 0.35 into B6, dip 0.5 into B8; all other joins are cuts. The clips are 2.85 / 3.1 / 3.7 / 4.2 / 5.35 / 4.4 / 3.4 / 4.0 s. `sgv timeline` puts the beats at 0 / 2.5 / 5.6 / 9.3 / 13.5 / 18.5 / 22.9 / 25.8, and the cut ends at 29.8. Voice, bed, mix and captions/master.srt are unchanged. L7 ends at 25.54 s, before the dip.
- Captions are `style: words`. `sfx` is at volume 0.4 (whoosh at 2.5 and 18.5, tap at 19.70).
- Frames checked on the draft at 0, 1.0, 2.58/2.7/2.82 (zoom), 14.5/15.6/16.6 (B5 travel), 18.55/18.7/18.82 (push), 19.7 (tap) and 28.0, plus a 16-frame sheet of the final. The tap lands between «تنزيل» and «PDF». The word captions are RTL-correct, the leading RLM still works, and the L6 cue wraps two words to line 2 (fixes qa-final note 1 for that cue). During the zoom, Emma's photo passes over the counting 58% for about 0.3 s, which is how the zoom-through works and is acceptable. Drift on B4 (sideMargin 0) trims the card edges by a few px.
- Export: exports/group-report-reel-reels-1080x1920.mp4, 1080x1920, 29.83 s, 7.6 MB. Loudness is -14.06 LUFS, true peak -1.00 dBTP, LRA 3.3.

### QA v2 fixes (editor)
- B2 `countDelay: 14`: the count starts after the zoom lands. The engine's new transition blur reads clean, with no combs or ghost digits. Final is 29.83 s, 7.4 MB, -14.06 LUFS, TP -1.00 dBTP.
- QA #3 (B1 bottom 20%) is still open. Push mode fixes the callout at 0.4H, and shrinking the phone puts the PNG's cut-off bottom edge in frame. This needs a frame-position prop from the motion designer (see crew/log.md).

## Design-system check (after the fact)

Made before `DESIGN-SYSTEMS.md` existed. Language-centre owners are the Enablement DS **business track**: LinkedIn or
website, simplified formal Arabic or English, orange accent, close on a conversation. This cut uses Egyptian colloquial
VO, the Platform look and a Reels format. The close ("Start a free pilot") already fits the business track. Open
decision for the user: keep it as a social test, or re-cut a business-track version (formal VO, LinkedIn 1:1 or 16:9).
