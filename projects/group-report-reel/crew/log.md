# Crew log

## producer · intake
- wrote: crew/brief.md
- decided: 9:16 reels-1080x1920, ar-eg, 30 s; scratch VO until the user picks a real voice; no music; cinematographer and sound-designer skipped

## creative-director · treatment
- wrote: crew/treatment.md (reference captures in assets/screens/ref-*.png; the screen-producer owns the finals)
- decided: 30 s, 8 beats; hook on a real student mistake (excerpt bubble with strike-through), not the logo; 58% carried by a StatCard because the Arabic focus-area row is untranslated and the number sits on the wrong side; all screens Arabic `groupReport-ar`, callouts cropped to the translated areas; no English screens in this cut
- → @screen-producer: callouts for B1, B3–B6 per the beat sheet; keep English or RTL-broken strings out of every crop (list under "Why these screens")
- → @scriptwriter: word budgets per beat in the table; L8 says the CTA verb "ابدأ تجربة مجانية" in Egyptian; no claim about generation time
- → @motion-designer: StatCard (B2), TitleCard (B7), EndCard (B8), light theme, ar
- ? user: can the kit's Arabic strings be fixed before final capture? If yes, B2 can move onto the real focus-area row
- ? user: keep B7 "جودة التدريس، تراها كل أسبوع" or drop it and hold B6 longer?
- ? user: PDF "for parents" or "for parents and clients"?

## producer · Gate 1 (user)
- approved: treatment as written
- decided: keep B7 promise line "جودة التدريس، تراها كل أسبوع"; PDF is for "parents and clients"; user records the final VO (scratch VO with say until then)
- decided: kit Arabic strings stay as they are (design-system task); B2 stays a StatCard

## scriptwriter · script
- wrote: crew/script.md, crew/vo.json (ar-eg, 8 lines, L7 optional), crew/onscreen.json (T1–T8, ar MSA + en)
- decided: L2 says "أكتر من نص الـgroup" instead of "58%" (spoken 58% is 4 words and won't fit 2.9 s; the StatCard carries the number); L7 "وجودة التدريس، قدام عينك" avoids repeating "كل أسبوع" and drops if L6 ends after 23.5 s; L8 "ابدأ تجربة مجانية النهارده" matches the end card; recording notes written for the user's phone recording
- → @motion-designer: T7 title (27 chars) needs ~3.1 s by the hold rule but B7 is 2.5 s; T1 callout is 15 chars (~2.4 s) on a 2.5 s beat. Bring T7 in on the cut and let it hold into the dip
- → @editor: captions from vo.json text exactly; if L7 is dropped, B7 is title-only
- → @voice-director: L1 is tightest (2.0 s); fallback "طلابك بيغلطوا في إيه؟"

## creative-director · script review
- wrote: crew/review-script.md; retimed crew/treatment.md (B7 0:23.5–26.7, B8 0:26.7–30.2, total 30.2 s); closed the Gate 1 open questions in the treatment
- decided: L2 "more than half" approved (StatCard carries 58%); L7 must match the B7 title so the caption and title don't disagree on screen; L6 weekly claim supported by US-03; B7 title gets its full 3.1 s hold, not carried into the dip
- → @scriptwriter: (1) L7 → «وجودة التدريس، تشوفها كل أسبوع.», max 2.6 s, not optional; (2) L6 → «بيوصلك لوحده، PDF تبعته للأهالي والعملاء.»; (3) remove T1 from onscreen.json; (4) L8 max_seconds 2.9; update the script table and stress notes
- → @motion-designer: TitleCard B7 is 3.2 s, EndCard B8 is 3.5 s (dip in)
- → @editor: use the new B7/B8 timings; B1 has no text callout, only the excerpt and the L1 caption

## scriptwriter · script review changes applied
- wrote: crew/script.md, crew/vo.json, crew/onscreen.json
- decided (per crew/review-script.md): L6 «بيوصلك لوحده، PDF تبعته للأهالي والعملاء.»; L7 «وجودة التدريس، تشوفها كل أسبوع.», 2.6 s, no longer optional; L8 2.9 s; T1 removed; script retimed to B7 0:23.5–26.7, B8 0:26.7–30.2; stress notes updated
- → @motion-designer: ignore my earlier note about carrying T7 into the dip; B7 is now 3.2 s

## screen-producer · final captures and callouts (B1, B3–B6)
- wrote: crew/screens.md; assets/screens/report-ar-top.png, report-ar-full.png (1440x2900), report-ar-ranking.png and report-ar-excerpts.png (pixel crops of the full page, main column)
- decided: the below-fold beats use crops of the tall capture, because ProductScreen fits a 2900 px page at 0.36 and the push-in then can't make text readable; every ring was checked on a 1080x1920 still; rings stay on Arabic or student-excerpt areas
- decided: B4 leaves out the "حسب ساعات الممارسة" segment (too far from the rows, and the ring would take in the "min" cells); B5 = the excerpt only (the "نسخ للدرس" button is 770 px away)
- → @motion-designer: B1 callout has to land within 0.5 s of a 2.5 s beat; the default push shows the ring at about 1.3 s. A start-zoomed option or a 0.4 s push is needed
- → @motion-designer: clamp the ProductScreen camera to the window edges (B6 and the B5 button option show about 45% empty canvas on the left and top)
- → @motion-designer: optional second callout step for B5 (button at 28, 55, 98, 43 on report-ar-excerpts); merge the final labels from onscreen.json

## producer · Gate 2 (user)
- approved: vo.json L1–L8 and onscreen.json T2–T8 as written (after the director review)
- next: voice-director makes scratch VO (say) for timing while the user records; motion-designer builds graphics and resolves the screen-producer framing notes

## voice-director · scratch voice-over (say, Majed)
- wrote: crew/voice.md (engine, timings, recording sheet); crew/vo.json (`at` per line = beat start + 0.2 s, L1 0.1 s; scratch `file`/`start`/`duration`); audio/vo/L1–L8.wav, audio/vo.wav (30.7 s)
- decided: scratch only, not for release; `voice.engine` stays `user-recording`; fixed `at` times so the user's recording drops in without moving the edit
- decided: all 8 scratch lines run over (+0.4 to +1.9 s) and six overlap the next line; caused by Majed's slow MSA read, no script change asked. Real-read risk: L1 (fallback ready), L4, L6, L7
- → @editor: scratch voice-over ready, audio/vo.wav at 0. Cut to the beat windows, not the scratch line ends; captions from vo.json text (Majed mispronounces group/tip/PDF)
- ? user: record one take per crew/voice.md (2 s pauses), save to projects/group-report-reel/audio/ as M4A or WAV

## voice-director · scratch redone faster (say, Majed, 230 wpm)
- wrote: audio/vo/L1–L8.wav, audio/vo.wav (30.1 s); crew/vo.json timings; crew/voice.md
- decided: tried 190 / 210 / 230 wpm and kept 230, the fastest allowed; `at` and `text` unchanged
- decided: at 230, L4 still runs 0.20 s into L5 and L6 runs 0.29 s into L7; the other lines end before the next `at`; L1, L3, L4, L5, L6, L7 are still over `max_seconds`
- → @editor: scratch voice-over ready, audio/vo.wav at 0 (replaces the earlier 30.7 s mix); expect the short overlaps at about 14.7 s and 23.7 s

## motion-designer · graphics B1–B8 and ProductScreen framing
- wrote: crew/motion.md (8 clips, exact props, durations = beats, light, ar)
- changed code: motion/src/compositions/ProductScreen.tsx (new props `startZoom`, `pushFrames`, `cover`; camera clamped to the window edges once the scaled window is bigger than the frame; defaults unchanged, typecheck passes)
- decided: B1 starts 85% zoomed, settles in 0.4 s, ring on by 0.5 s, no label; B3–B6 start at 0.6 with a 0.5 s settle so every ring lands within about 0.6 s; `cover` fills the frame for B1, B3, B5, B6 (no empty canvas); B4's ring is too wide for cover and shows as a window card
- decided: B3 metric-card stagger dropped (one callout per clip, cards visible under the label); B5 second callout dropped
- → @editor: graphics in crew/motion.md; dissolve only into B3, dip into B8
- → @screen-producer: optional, a narrower B4 callout (names + practice meters, under about 360 CSS px) would let it zoom in and fill the frame; names read at about 16 px now

## editor · draft 1 assembled and rendered
- wrote: edit.json (8 motion clips per crew/motion.md, voiceover audio/vo.wav at 0, captions burned, logo off), captions/master.srt, NOTES.md; draft exports/group-report-reel-draft.mp4 (540x960, 30.20 s)
- decided: beat starts exact (0 / 2.5 / 6.0 / 10.5 / 14.5 / 19.5 / 23.5 / 26.7, end 30.2); B2 4.0 s and B7 3.7 s to absorb the dissolve and dip; B7 title full hold 24.1–26.8 s
- decided: captions from --from-vo, then re-split L3/L4/L5 at the colon/comma (the auto split left one-word orphan cues) and trimmed overlaps at 14.7 s and 23.7 s
- note: scratch L7 runs 0.11 s into the end-card dip (ends 26.81, dip 26.7); expected to clear with the real read
- → @motion-designer: B4 at mid-beat (12.5 s) the ranking window sits off-centre (left edge cut, canvas on the right) and the names are tiny; please centre or narrow it with the screen-producer's tighter callout
- → @motion-designer: B5 label "أمثلة حقيقية جاهزة للدرس" sits right on top of the caption pill (about 74% vs 77% of frame height); move it up about 80 px so a two-line caption won't collide
- → @voice-director: when the real take lands, keep `at` fixed; I'll re-run captions and re-apply the phrase splits

## creative-director · review 1 (draft 1)
- wrote: crew/review-1.md
- decided: not ready for the user. Hook lands by 0.3 s, the muted spine works, B7/B8 land; but B3, B4, B6 show English or RTL-broken strings the treatment ruled out, and B4 is unreadable
- → @motion-designer: (1) B1 fully visible on frame 0, no entrance fade; (2) B1 start tight on the first bubble so B5 reads as the wider reveal; (4) frame the new B4 crop centred; (7) B5 label above the ring, clear of the caption pill; (8) StatCard bigger in 9:16
- → @screen-producer: (3) B4 crop rows 1–4, names + sessions + practice meter, no "min" cells, no English card title; (5) B6 header-only crop ending above the metric cards; (6) B3 crop ending under the 24 / 21 cards
- → @editor: (9) balance two-line captions (orphans at L2, L6, L7); re-render draft 2 after the crops and graphics land

## qa-reviewer · QA draft 1
- wrote: crew/qa-1.md (verdict: ship after fixes, 10 notes)
- decided: captions match vo.json word for word and on-screen strings match onscreen.json; no invented facts; loudness/pronunciation info only (scratch)
- → @motion-designer: every "cut" plays as fade-to-canvas + 6–9 blank frames + 0.6→1.0 zoom-in (notes 1); StatCard type too small for 9:16 and caption held 2.5 s of 4.0 (2, 3); T6 and T7 short of the hold rule (4, 5); B4 off-centre and unreadable (8); B5 teaching tip hidden behind label and caption (9)
- → @screen-producer: B1/B5 cover cuts the Arabic heading to "ا قاله الطلاب…" (6); English and RTL-broken kit strings readable in B1, B3, B4, B6 crops (7)
- → @editor: L5 cue split 0.35 s early, move to about 17.40 (10); T7 hold with the motion-designer (5); break L2/L7 captions at the comma (advisory)
- ? user: the kit's broken strings stay per Gate 1. Accept visible ones (e.g. "to 3 hours 1", "min 58") in this cut, or ask for tighter crops?

## producer · review round 1 merged (review-1 + qa-1)
- decided: tighter crops that exclude English/broken-RTL kit strings (consistent with the approved treatment); no question to the user needed
- → @screen-producer: new crops B1, B3, B4, B5, B6 (review-1 notes 1-3, qa-1 screen notes)
- → @motion-designer: no fade-to-canvas or re-zoom at cuts, frame 0 fully visible, StatCard bigger, holds, B4 centred, B5 label clear of tip and captions
- → @editor: after the above, L5 caption split, re-render draft 2

## screen-producer · round 2 crops (review-1 notes 3, 5, 6; qa-1 notes 6, 7)
- wrote: crew/screens.md; assets/screens/report-ar-full3x.png (3x source) and the crops report-ar-b1, -b3, -b3-title, -b4, -b5, -b6 (.png)
- decided: one tight crop per beat with nothing unwanted in frame: B1 = the first bubble only; B4 = rows 1–4, no "min" cells or English title; B5 = excerpt + correction + teaching tip, label below the window; B6 = header left half + PDF button, nothing below; no truncated Arabic anywhere
- decided: B3 keeps the subtitle line ("…Collective feedback for General English"); it sits between the title and the 24/21 cards, so no rectangle can drop it. A clean title-only alternative is report-ar-b3-title.png
- → @motion-designer: every new crop needs `"scale": 3` in props; callouts and the motion I checked are in crew/screens.md; B6 works as `move: still`; B4 names are about 24 px at 1080, and 28 px needs the window to fill the full width (side margin 0 for this clip)
- → @editor: point B1, B3–B6 at the new files; I delete the round-1 screens after draft 2
- → @creative-director: B3 is report-ar-b3 (title + 24/21, subtitle visible) or report-ar-b3-title (clean, no cards). Your call

## motion-designer · round 1 fixes (review-1, qa-1) and round 2 crops
- wrote: crew/motion.md (all 8 clips re-specced on the 3x crops, B3 = report-ar-b3-title per producer)
- changed code: motion/src/anim.ts (`FadeProps`, `enterClip`); motion/src/compositions/ProductScreen.tsx (`enterFade`, `exitFade`, `ringAt`, `drift`, `sideMargin`, `ring`, `dim`); StatCard.tsx (`enterFade`, `exitFade`, `labelBelow`, bigger type in 9:16); TitleCard.tsx and EndCard.tsx (`enterFade`, `exitFade`). Defaults unchanged; typecheck passes
- decided: every clip is fully visible on frame 0 and holds to its last frame; screens open framed, with no zoom; B1 ring on at frame 0; B4 full width, no ring; tight crops have no dim; StatCard 58% 286 px, label 48 px under the number, caption 40 px from frame 0
- → @editor: paste the props from crew/motion.md (each screen needs `"scale": 3`); keep B2 at 4.0 s and B7 at 3.7 s; draft 2 should show no canvas frames at the cuts
- → @scriptwriter (optional): the B2 caption (42 chars) gets 3.5 s clean + 0.5 s under the dissolve against the 4.0 s rule; dropping "· A2 Morning" would clear the rule outright

## editor · draft 2 (review-1 / qa-1 applied)
- wrote: edit.json (round-2 props from crew/motion.md, B2 4.0 s, B7 3.7 s, same beats and transitions), captions/master.srt, NOTES.md; draft exports/group-report-reel-draft.mp4 (540x960, 30.20 s)
- checked: timeline beat starts 0 / 2.5 / 6.0 / 10.5 / 14.5 / 19.5 / 23.5 / 26.7, end 30.2; frame 0 fully visible with the ring on; no canvas frames at the cuts; B4 centred full width; B5 label clear of the caption pill
- decided (qa-1 10, review-1 9): kept hand captions over the new --from-vo, which matched draft 1 and still split L5 at 17.11. Splits sit on the measured scratch pauses (L5 17.40); L2/L6/L7 split into two cues at the comma (no orphans); a leading RLM on "PDF تبعته…" fixes its RTL order
- → @motion-designer: B6 dim covers the whole frame (all grey, 19.5–23.5) and the header card sits small inside it; try dim only on the window, or `dim: false` with the ring alone
- → @producer (tooling): sgv captions flattens `\n` inside a cue, and doesn't force RTL on cues that start with Latin text (needed the RLM by hand)

## motion-designer · draft 2 framing (B1, B3–B6)
- wrote: crew/motion.md (B1, B3, B4, B5, B6 props)
- changed code: motion/src/compositions/ProductScreen.tsx (new `calloutFill`, `labelSize`; defaults unchanged, typecheck passes)
- decided: B1/B5 full width (24 px margins, excerpt text about 40 px), B3 1000 px wide (title about 70 px); B6 pushed in on the header, button about 490 px wide and ringed, no full-frame dim; labels 42 px on B3–B6, all at 48–61% of frame height, clear of the caption pill
- → @editor: paste the new B1, B3–B6 props from crew/motion.md and re-render draft 3

## editor · draft 3 (round-3 graphics)
- wrote: edit.json (props from the updated crew/motion.md: calloutFill, labelSize 42, B1/B3/B5 wider, B6 zoomed on PDF without dim); durations, beat starts, transitions and hand captions unchanged; draft exports/group-report-reel-draft.mp4 (540x960, 30.20 s)
- checked (sgv look --at 0, 1.25, 4.2, 8.2, 12.5, 17.0, 21.5, 25.1, 28.5): frame 0 = excerpt with the ring on; B6 now shows the "تنزيل PDF" button large on a light frame with the label in full, and no grey; labels clear of the caption pills; captions RTL-correct, including the PDF cue
- open: nothing new from the editor; the caption splits need re-measuring once the real VO lands

## creative-director · review 2 (draft 3)
- wrote: crew/review-2.md
- decided: ready for the user; all nine review-1 notes resolved; no English kit chrome or broken RTL in any frame; hook on frame 0; B3 stays the clean title crop (report-ar-b3-title)
- → @motion-designer (optional, final pass): B4 names toward 28 px at 1080; B6 window could end just below the label
- → @editor (after the real VO): re-measure caption splits; check L7 clears the 26.7 s dip

## qa-reviewer · QA draft 3 (qa-2)
- wrote: crew/qa-2.md (verdict: ship after fixes, 3 minor notes)
- decided: qa-1 notes 1, 2, 4, 5, 6, 8, 9, 10 fixed; 7 mostly fixed; captions match vo.json, splits sit inside the measured pauses, no flash frames, safe zone clear
- → @scriptwriter: drop "· A2 Morning" from the B2 StatCard caption (42 chars needs 4.0 s, gets 3.5 s) (note 1)
- → @screen-producer: B5 tip line 2 shows ".'yesterday' chain game…" (kit moves the full stop); crop after line 1, or fix the kit string (note 2)
- → @motion-designer: B1/B3/B5 windows sit off-centre to the right with their right edge at the frame edge (B3 ring about 6 px from the edge at 540); centre with sideMargin on both sides (note 3)
- ? user: if the B5 punctuation can't be cropped or fixed, accept it for this cut?

## producer · Gate 3 (user)
- user: the scratch Arabic voice is unnatural and sounded badly trimmed. Fixed sgv voice (gentler trim with breath and fades, lines never overlap, first line on time). Majed stays a placeholder only.
- decided: the user records the eight lines (one take, 2 s pauses) into audio/
- → @scriptwriter: drop "· A2 Morning" from the StatCard caption (qa-2 #1)
- → @screen-producer: hide the misplaced full stop in the B5 teaching tip (qa-2 #2)
- → @motion-designer: centre B1, B3, B5 windows (qa-2 #3); optional review-2 notes (B4 names toward 28 px, B6 window end below its label)

## scriptwriter · T2 caption shortened (qa-2 #1)
- wrote: crew/onscreen.json, crew/script.md: T2 caption drops "· A2 Morning"
- → @motion-designer: T2 caption updated

## screen-producer · B5 recrop (qa-2 #2)
- wrote: assets/screens/report-ar-b5.png (now 348x146 CSS, a crop of report-ar-full3x at 792, 2017), crew/screens.md
- decided: the crop ends above the tip's second line, which starts with the misplaced RTL full stop (".'yesterday'…"); it keeps the excerpt, the correction and "Teaching tip · Drill go/went, buy/bought, eat/ate with a"; checked on a 1080x1920 still
- → @motion-designer: B5 crop updated; callout is now 14, 2, 320, 140 (was h 158); `"scale": 3` as before

## motion-designer · draft 2 final picture fixes (qa-2 #3, T2, B5 crop)
- wrote: crew/motion.md (B2 caption without "· A2 Morning", B5 callout 14, 2, 320, 140, holds table, centring note)
- changed code: motion/src/compositions/ProductScreen.tsx: the pan's sideways offset applied to every move, putting every non-pan clip about 31 px right of centre. It now applies to `pan` only (bug fix: old non-pan clips also re-centre). Typecheck passes; not yet committed (after 46d9e52)
- checked: 1080x1920 frames of B1, B2, B3, B5, B6; equal side margins on B1, B3 and B5
- decided: B4 names (about 22 px) and the B6 window end need new crops, not code; left as they are (optional per review-2)
- → @editor: update B2 and B5 props from crew/motion.md and re-render

## producer · voice decision (user)
- tried: Majed, Tarik (Enhanced), Mariam (Enhanced), with تشكيل and pauses; better, but Apple's Arabic voices are Gulf-accented MSA, not Egyptian
- decided: the user records the voice-over; wrote crew/recording-script.md; vo.json engine = files
- → @editor: when the take arrives, fit the beats to the real read (cut to the voice); report the total length if it runs past 32 s

## producer · user recording received
- file: Test reel .m4a (repo root), copied to audio/vo-take.m4a (30.4 s)
- the user changed words while recording; vo.json text synced to what was said (L2 عنده, L3 بيبقى, L4 في, L5 ترتيب الحصة الجاية, L6 تقدر … مباشرة, without والعملاء); T6 label now للأهالي to match
- decided: keep the user's own rhythm (sgv voice --keep-timing) and cut the picture to it

## editor · final cut to the user's voice, rendered
- wrote: edit.json (re-timed, music bed, B6 label = T6), captions/master.srt, NOTES.md; exports/group-report-reel-reels-1080x1920.mp4 (1080x1920, 29.80 s, 3.4 MB)
- decided: beat starts 0 / 2.5 / 5.6 / 9.3 / 13.5 / 18.5 / 22.9 / 25.8, end 29.8. Dissolve into B3, dip into B8. L7 speech ends 25.54, before the 25.8 dip. The end card is fully on for 3.5 s.
- decided: captions from --from-vo with three fixes: the L6 split moved to 19.70 (before "PDF") with its RLM, and L2 and L7 split at their measured pauses (no orphans)
- checked: frames at every beat middle, frame 0 and the end card (draft); final sheet -n 16; loudness -14.05 LUFS, TP -1.00 dBTP
- note: B7 title gets 2.9 s clean (rule 3.1 s) and the B2 caption gets 3.1 s clean (rule 3.3 s); each also stays on screen through its transition. The voice timing leaves no more room.

## qa-reviewer · final QA (reels 1080x1920, user's VO + bed)
- wrote: crew/qa-final.md (verdict: ship after fixes, 1 note + 1 waived)
- checked: all 8 VO lines present and unclipped (whisper + measured pauses); captions and T2–T8 match vo.json/onscreen.json; RTL and punctuation correct; safe zone clear (pill bottom about y 1555); no black or flash frames; −14.05 LUFS, TP −1.00 dBTP, LRA 3.3; bed 15–18 dB under the voice
- → @editor: cues 5 and 11 wrap with a one-word second line («واحدة.», «مباشرة.»); balance the break or split the cue, no re-time (note 1)
- note: T2 and T7 hold shortfalls (0.2 s each) accepted as the editor's waiver (note 2)

## creative-director · re-cut v2 plan (mobile UI + editing)
- wrote: crew/treatment.md, section "Re-cut v2: visuals and editing" (beat table with the new visual and the transition in); reference captures assets/screens/ref-22-call-ar{,-listening}.png, ref-21-feedback{,-ar}.png, ref-24-report-ar.png, ref-20-analyzing-ar.png, ref-17-call-speaking.png
- decided: B1 = mobile `22-call-ar --status listening` (student speaking; ring on the chip "سيتم إنشاء التقرير"); B2–B8 keep their screens. Zoom 0.35 into B2, push-right 0.35 into B6, dip into B8, all other joins cuts (B2→B3 dissolve becomes a cut). B5 becomes one clip with two `steps` (excerpt 1 → excerpt 2 + tip at 2.3 s). Tap on "تنزيل PDF" at «PDF» (B6 clip time 1.2 s). Drift on every screen. Captions style words, sfx volume 0.4
- decided: not using 21-session-feedback (past simple shown as a strength) or 24-report-detail (its "58%" collides with the stat)
- → @screen-producer: capture `22-call-ar --status listening` as assets/screens/call-ar-b1.png; give the chip callout in CSS px (my estimate on the 430-wide capture: 156, 150, 119, 31). Crop assets/screens/report-ar-b5-steps.png from report-ar-full3x at about 792, 1864, 348, 299 CSS (both bubbles, both corrections, tip line 1; must end above the tip's second line, like report-ar-b5) and give the two step callouts
- → @motion-designer: B1 props (startZoom 0.85, pushFrames 12, drift 0.03, ring at 0.9 s, no label); B5 `steps` [0 s excerpt 1, 2.3 s excerpt 2 + tip], label أمثلة حقيقية جاهزة للدرس; B6 `tap` on the PDF button at 1.2 s, drift 0.02; drift 0.03 on B3, B4; check the zoom out of the dark phone into the light StatCard reads calm
- → @editor: keep beat starts; B1 2.85 s with `"transition": "zoom"` on B2 (`transitionDuration` 0.35); B2 3.1 s, B3 transition cut; B5 5.35 s with `"transition": "push-right"` on B6 (0.35); captions `"style": "words"`; `"sfx": {"volume": 0.4}`; re-render the draft for review

## screen-producer · v2 captures and callouts (B1, B5, B6)
- wrote: assets/screens/b1-call-ar.png (22-call-ar --status listening, 430x884 @3x), assets/screens/report-ar-b5-steps.png (crop of report-ar-full3x at 792, 1864, 348, 299; 1044x897), crew/screens.md section "v2"
- checked: 1080x1920 ProductScreen renders of all three at their v2 lengths; rings and the tap sit on the right element
- decided: B1 callout 155, 149, 120, 32 (the chip). B5 steps: 14, 6, 320, 98 at 0 s, then 14, 155, 320, 140 at 2.3 s. B6 callout 28, 129, 102, 48 confirmed; tap {x 79, y 153, at 1.2}
- → @motion-designer: (1) B5 label on step 1 lands over the excerpt-2 meta line and half covers it; verified with the label on step 2 only. Keep it that way, or move the step-1 label clear of the window. (2) B1 `"dim": false`: the default dim turns Emma's photo grey on the dark call screen. (3) B6: `move: "still"` shrinks the button to about 180 px; keep the draft-3 push (startZoom 1, calloutFill 0.45) + drift 0.02, verified with the tap
- → @creative-director: B5's crop shows the kit's English meta line "01:12 · Describing your weekend · Karim Saleh" whole between the excerpts (unavoidable in one crop). The B1 waveform leaves the frame by the end of the 0.85 push
- → @editor: B1 → b1-call-ar.png, B5 → report-ar-b5-steps.png (`"scale": 3` both)

## motion-designer · v2 graphics spec
- wrote: crew/motion.md, section "v2" (all eight clips with the exact props; the old spec kept below it for reference)
- decided: B1 b1-call-ar startZoom 0.85, pushFrames 12, drift 0.03, ring at frame 27, dim false, no label. B5 two steps (0 s, 2.3 s), label on step 2 only. B6 keeps the push framing (calloutFill 0.45), drift 0.02, tap {79, 153, at 1.2} = «PDF» at 19.70. Drift 0.03 on B3 and B4. StatCard, TitleCard and EndCard props unchanged; no code changes
- checked: 1080x1920 renders of B1, B5, B6, frames at the ring, step and tap moments
- note: T5 label is on screen about 2.1 s (needs 2.9): step 2 is tied to the voice. Options in motion.md
- → @editor: v2 props in crew/motion.md

## producer · v2 calls
- decided: B5 step 2 at 1.8 s (label hold ~2.6 s)
- changed: ProductScreen tap indicator is now a dark translucent 56 px disc with a white rim (reads on light UI)
- → @editor: build v2 from crew/motion.md v2 with B5 step 2 at 1.8

## editor · re-cut v2 built and rendered
- wrote: edit.json (v2 props, B5 step 2 at 1.8, zoom/push-right 0.35 on B2/B6, B3 cut, captions style words, sfx volume 0.4), NOTES.md; exports/group-report-reel-draft.mp4 and exports/group-report-reel-reels-1080x1920.mp4 (1080x1920, 29.83 s, 7.6 MB)
- checked: the timeline puts the beats at 0 / 2.5 / 5.6 / 9.3 / 13.5 / 18.5 / 22.9 / 25.8, end 29.8. L7 ends at 25.54, before the dip. On the draft: frame 0, frames inside both motion windows, the B5 travel, the B6 tap at 19.7 and the end card. On the final: a 16-frame sheet. Loudness -14.06 LUFS, TP -1.00 dBTP.
- note: in the zoom, Emma's photo crosses the counting 58% for about 0.3 s. Drift on B4 trims its edges a few px. B3's title crop still shows "A2 Morning" (unchanged from v1).
- → @qa-reviewer: v2 final ready for review

## qa-reviewer · QA re-cut v2 (reels 1080x1920)
- wrote: crew/qa-v2.md (verdict: ship after fixes, 3 notes)
- checked: 28 frames at 1080 incl. both 0.35 s windows, B1 ring, B5 travel, B6 tap, end card; word highlight tiled at 6 fps (one word at a time, RTL order, «الـgroup» as one word); qa-final orphan note fixed; signalstats on all frames (no flash, black or chroma glitch; the zoom is a smooth dark-to-light ramp); -14.06 LUFS, TP -1.00, whooshes 16–18 dB under the voice peaks
- ? producer: (1) push-right blur at 18.55–18.80 strobes as 8 discrete copies (render.py tmix=8 at fps*8); text turns into echo combs. Needs more sub-frames or a directional blur, then @editor re-render
- → @motion-designer: (2) StatCard counts during the zoom and shows ghosted double digits (2.6–2.8); start the count after the zoom lands. (3) B1 "Emma", «يستمع...» and the waveform sit below y 1536; frame higher/tighter, or ? user waive
- note: Emma crossing the 58%, B4 drift trimming the chips and "A2 Morning" on B3 are acceptable

## editor · qa-v2 fixes (#1 engine, #2 countDelay, #3 open)
- wrote: edit.json (B2 `"countDelay": 14`), NOTES.md; exports/group-report-reel-reels-1080x1920.mp4 (1080x1920, 29.83 s, 7.4 MB), -14.06 LUFS, TP -1.00 dBTP
- checked: frames at 2.55/2.65/2.75/2.84/3.1 and 18.55/18.65/18.75/18.84/19.0. The zoom shows a single clean "0%" (no ghost digits), and the count starts at about 3.0. The push shows smooth directional streaks with no comb, read at full size.
- not fixed (#3): props can't lift B1's waveform above y 1536. Push mode always puts the callout at 40% of frame height, and the waveform is about 525 CSS px below the chip, with the PNG's bottom edge only about 195 px below that. Any scale small enough to clear the waveform shows the PNG's cut-off bottom edge in frame. I tried startZoom 0.95 + calloutFill 0.19, which shrank the phone but left the waveform and controls at about 82%, so I reverted to the v2 framing.
- → @motion-designer: ProductScreen needs a prop for the callout's vertical frame position (now fixed at 0.4H), e.g. `frameY`. B1 would then be about frameY 0.19 with a scale of about 2.2 (phone about 950 px wide): chip at about y 366, waveform at about 1500, PNG bottom below 1920.
