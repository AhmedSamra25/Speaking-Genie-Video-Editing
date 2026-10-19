# Crew log

## producer · intake
- wrote: crew/brief.md; footage linked from `Samra Videos/`; edit.json look enablement, track business
- decided: 9:16, ~2 min, Arabic captions, close on a referral conversation (user, 2026-10-19)

## creative-director · treatment
- wrote: crew/treatment.md (14 beats, ~2:04 before silence trims, target 2:00)
- decided: arc = personal problem (clip 11) → real problem TitleCard → what it is (2, 12) → why it works (9) → proof (7 + screens) → habit (4) → product today (11) → stat → referral EndCard
- decided: clip 11 over clip 10 (cleaner, names the confidence gap; clip 10 tail is off-camera, hand over mouth); clip 13, prices (clip 2) and clip 12's 15 min / 1 month / 3 months outcome promises are out
- → @cinematographer: confirm the in/outs on the breath; punch-in 1.15 at the B2→B3 and B4→B5 jumps in clip 11; lift backlit faces (11, 12); moiré on the clip 12 blinds
- → @screen-producer: B7 web flow-aiPlan (ar, crop to the plan); B8 mobile 06-lab-tasks → 22-call-ar; B10 mobile 21-session-feedback (rtl) → 23-reports (rtl); one callout each, as shipped
- → @scriptwriter: clean Arabic caption text for each footage range (whisper mishears); on-screen text for B6, B13, B14 and the lower third in simplified formal Arabic
- → @motion-designer: Enablement business look; TitleCard capsule «الثقة»; StatCard 500 + method line; EndCard cta «تحدّث معنا», no badges
- ? user: show traction (500 learners · 6 B2B contracts, June 2026) in a forwarded partner video?
- ? user: approve the B6 MSA line for "Proficiency isn't the problem. Confidence is."
- ? user: partner contact or QR on the end card, or the URL only?
- ? user: music bed or voice only?

## producer · Gate 1 passed (user, 2026-10-19)
- approved: treatment as is, including B6 «المشكلة ليست في الإتقان، بل في الثقة.»
- decided: **no traction numbers** → drop B13 (StatCard); target 2:00. End card: **website only** (speakingenie.com).
  **Voice only**, no music.
- → @scriptwriter @cinematographer @screen-producer: go (pre-production)

## screen-producer · screens captured
- wrote: crew/screens.md; assets/screens/flow-aiPlan-ar.png, 06-lab-tasks-ar.png, 22-call-ar.png, 21-session-feedback-ar.png, 23-reports-ar.png
- decided: all ids exist; Arabic/RTL; web in light (reads on purple), mobile as shipped (call screen stays dark); one callout each, 3–4 s holds
- decided: B8 tap on «ابدأ التمرين» in 06-lab-tasks carries into 22-call-ar
- → @motion-designer: ProductScreen callouts/labels/moves per screens.md; mobile `scale` 3; web B7 crop to the modal (x 32–652), never the full desktop
- → @scriptwriter: confirm the four MSA labels (or put them in onscreen.json as kind callout)
- → @editor: cover timings per screens.md (B7 last 3 s, B8 3.5 + 4 s, B10 4 + 3.5 s)
- ? user: flow-aiPlan's Arabic view keeps English modal chrome ("Review and edit plan") as shipped — OK for B7, or swap to `courses` (ar)?

## scriptwriter · caption script + on-screen text
- wrote: crew/script.md (Samra's words per beat, corrected from whisper and checked again on each range on its own, with English gloss), crew/onscreen.json (T1–T8 with composition props)
- decided: no vo.json, because there is no voice-over. Captions = script.md text, as said: English terms in Latin (session, feedback, AI, goal, practice, grammar, courses), Arabised loans in Arabic (الجيم، الموديل)
- decided: callout labels use the verbatim feature names and don't repeat the caption: B8a «مهام محادثة من المنهج», B8b «مكالمة صوتية مع الشريك الذكي», B10a «ملاحظات ما بعد الجلسة» (these replace the screen-producer's suggestions); B7 and B10b are kept
- → @editor @cinematographer: in/outs from the token timings: B1 3.45 in · B7 16.05–23.35 («عليه» runs past 23.00) · **B8 66.45–85.80 (84.88 cuts off «24 ساعة»)** · B9 out 45.95 (drop «فدي أول حاجة») · B11 29.90–35.20 · B5 out 58.50
- → @screen-producer: B8b cut-in on «فهو AI» (~83.8), not «ده AI»
- → @motion-designer: TitleCard capsule draws under the title, so B6 = title + highlight «الثقة» (alt: title «المشكلة ليست في الإتقان،» + capsule «بل في الثقة.»)
- ? user: listen to 5 [?] words (B4 نفسي/نفسنا, B5 إزاي يفيد, B8 بتعمل practice عليه, B10 بتاخدها مكالمة, B12 لحد ما بقت منتج)
- ? user: lower-third role: «Co-founder, Speaking Genie» (Latin) or «شريك مؤسس، Speaking Genie»? (The company brief says "Co-founder, Product")

## cinematographer · selects
- wrote: crew/shots.md (in/outs on measured breaths for B1–B5, B7–B12; scale, focus, grade per select; runtime)
- decided: B4 runs to 49.64 (no breath at 45.06; adds the "opportunity" line); B3 in 19.90; B8 in 65.36 keeps «فكان إيه» (no gap before «طلعنا»)
- decided: clip 11 rhythm wide → close 1.15 → wide → close 1.15; B12 close 1.15; no punch on 12 (moiré)
- runtime: 113.2 s footage + 9 s graphics ≈ 2:01 after transitions; trims listed in shots.md
- → @producer: sgv has no `scale` (punch-in) or `grade` key on video clips; spec in shots.md. The B1–B5 punch-ins depend on it
- → @editor: lift 11 and 12 (faces ~1 stop under; curve in shots.md); set fps 24 (source 23.976, 30 judders); B7 audio fadeOut 0.06; listen to B1's first word at 3.24
- → @scriptwriter: caption text changes: B4 adds «أجرب أستخدم practice مختلفة، حسيت إن دي حاجة ممكن تكون opportunity»; B8 opens «فكان إيه، طلعنا بفكرة» and includes «وإنت بتبراكتس عليه»; B9 ends «بتتنطق كده»; B12 ends «وكده»
- → @creative-director: adidas logo on his shirt in every take; it can't be removed or cropped out

## producer · Gate 2 passed (user, 2026-10-19)
- approved: crew/script.md caption text and crew/onscreen.json as written; the five [?] words get checked on the draft
- decided: lower third role «Co-founder, Speaking Genie»; keep the B7 `flow-aiPlan-ar` screen as shipped
- decided: fps 24 (footage 23.976); producer adds video-clip `scale` + `grade` keys to sgv (per shots.md)
- skipping sound-designer: voice only, no music; editor sets the voice mix

## motion-designer · graphics spec
- wrote: crew/motion.md (M1 LowerThird, M2 TitleCard, M3–M7 ProductScreen, M8 EndCard; props JSON per row; stills checked at 1080×1920, 24 fps, ar)
- decided: B6 = whole line as title + highlight «الثقة», no capsule (the capsule can't sit inside the line; repeating «الثقة» reads twice)
- decided: all five screens are **overlays** over the footage clips (his audio runs on), fades off, cut on the word; B8b → push (callout widened to the waveform), not still; B7 calloutFill 0.9 crops to the modal
- → @editor: graphics in crew/motion.md; remove the template Intro/title clips; B8b starts ≈81.8 (not on «فهو AI», only 2 s left there); verify the approximate source times against word timings
- → @producer: no tap sfx on overlays (sfx.py reads timeline clips only); the logo bug isn't hidden under overlays (logo is off now)

## editor · draft 1 assembled
- wrote: edit.json (fps 24, enablement/business, 12 clips, 6 overlays), captions/master.srt (55 cues, script text, word style), NOTES.md; exports/partner-story-draft.mp4 (2:01.5, -14.4 LUFS)
- decided: in/outs re-measured on the envelope. B1 3.18 (the "ليش" is the start of "Speaking"); B8 in 66.84 (a real gap before «طلعنا», so «فكانت إن أنا إيه» is dropped); B7 out 23.54 (23.80 catches «فممكن»); B10 out 20.40 (gives the reports screen 3.35 s)
- decided: overlay anchors on measured phrases. B8b on «والشخص ده مش شخص حقيقي» is at source 79.95, not 81.8; B8a runs 4.7 s with the tap at 4.1 s straight into the call; B10a on «إيه اللي حصل فيها»
- decided: TitleCard 4.5 s (text rule); dips 0.375 s / 0.5 s and push 0.375 s, all frame-exact at 24 fps
- ? user: B4 now carries «أجرب أستخدم practice مختلفة، حسيت إن دي حاجة ممكن تكون opportunity», which is not in the approved script (there's no clean out at 45.06). Keep it, or cut at 47.12?
- ? user: listen for the five [?] words; whisper still hears «نفسنا» at B4 and «لحد منتج» at B12
- → @producer: the caption pill's bottom edge sits at y≈1555 of 1920 (sgv margin is 19%), about 20 px into the bottom 20%. It's a captions.py setting, not edit.json
- → @qa-reviewer: draft 1 is ready

## creative-director · review 1
- wrote: crew/review-1.md (6 notes, 3 must)
- decided: the arc lands for partners; the hook line is said by 2.3 s; screens arrive on their words; setup changes at every join after B6; the end card ask is right
- → @editor: re-render. The draft predates scale/grade in render.py, so the B1–B5 punch-ins are missing (three jump cuts on one wide shot)
- → @editor: lower third from about 2.4 s, after the hook line (nice)
- → @motion-designer: EndCard headline break before «مركز» (nice)
- → @producer: caption pill out of the bottom 20% (captions.py)
- ? user: B4 extra line «أجرب أستخدم practice مختلفة، حسيت إن دي حاجة ممكن تكون opportunity». Director recommends keep: B5's «الفكرة دي» needs it, it is the turn to a business, and cutting at 47.12 still leaves a hanging half-line
- ? user: listen at 0:31, «مع نفسي» or «مع نفسنا» (whisper hears نفسنا 4 of 4)

## qa-reviewer · QA 1 (draft 1)
- wrote: crew/qa-1.md (checklist + 8 fail notes); verdict **ship after fixes**
- decided: caption words = script except B4 add-on; sync within 0.05 s on 15 sampled onsets; joins click-free; −14.39 LUFS PASS, true peak −0.95 dBTP FAIL; pill bottom ≈ 1554/1920
- → @producer: Arabic lines starting with a Latin word render LTR (hook «Speaking Genie بدأت», cue 38 line 2); force RTL base in captions.py. Caption highlight is purple #A78BFA, not the orange track accent
- → @editor: «فإحنا» uncaptioned at 1:17.07 (B9 in); EndCard needs ~7 s (3.8 s readable now); push-right at 0:51.12 → cut or dissolve; true peak to ≤ −1 dBTP
- → @motion-designer + @editor: captions over the call screen (1:11.32–1:17.00) read as a call transcript
- → @scriptwriter: B4 add-on caption text («practice» vs heard «practices») if the user keeps it
- ? user: keep B4 add-on; the four [?] words; sample numbers on B10 screens; 3.7 s digital silence under the TitleCard

## editor · draft 2 (review-1 + qa-1 applied)
- wrote: edit.json, captions/master.srt, NOTES.md; exports/partner-story-draft.mp4 (2:03.83, -14.39 LUFS, -0.95 dBTP)
- done: «فإحنا» added to B9; LowerThird at 2.4 s; EndCard 7 s, headline breaks as «هل تعرف» / «مركز لغات أو شركة؟» (NBSP, props only); B7 plain cut, captions shifted +0.375 s from B7
- done: no caption over phone UI. Lab tasks and reports are still; call is a slight push (calloutFill 0.19); feedback calloutFill 0.5. Phone bottoms at ≈0.68–0.70·H, checked by frame
- → @creative-director: the mobile screens are smaller now (the phone is about half the frame width); check they still read. B7's web modal still has the caption over its lower rows (left as is: a smaller frame shows the full desktop)
- → @producer: TP -0.95 is loudnorm's -1 ceiling plus AAC overshoot, and it can't be fixed in edit.json. Suggest TP=-1.5 in the render.py loudnorm (or check the two-pass final)

## producer · Gate 3 passed (user, 2026-10-19)
- approved: draft 2 for final render
- decided: keep B4's extra line («أجرب أستخدم practice مختلفة، حسيت إن دي حاجة ممكن تكون opportunity»); the five [?] words stand as captioned (user listened, no corrections); the app's sample scores on the B10 screens are fine (product UI, not claims)
- producer: sgv loudnorm TP target -1.5 (AAC overshoot kept TP at -0.95)
- → @editor: final render; → @qa-reviewer: final QA

## editor · final rendered
- wrote: exports/partner-story-reels-1080x1920.mp4 (2:03.83, 128.1 MB, -14.01 LUFS, -1.48 dBTP), NOTES.md
- checked: 16-frame sheet; frames at 0:01, 0:03, all five screens and the end card; the Latin-first caption reads RTL

## qa-reviewer · QA final
- wrote: crew/qa-final.md; verdict **ship** (the master)
- checked: every Latin-first and «الـ»+Latin caption line now reads right to left at 1080 (0:00 hook, «فالـAI»/«judgement عليك،» at 1:25, «الـgrammar», «Speaking Genie»); orange highlight; pill bottom 1506/1920 (78.4 %); sync within 0.02 s; joins clean; −14.01 LUFS, −1.48 dBTP; 1080×1920, 24 fps, 2:03.83
- → @producer: 128.1 MB is too big for email and gets recompressed on WhatsApp; make a share copy of about 20–25 MB, or send it as a link or document
- ? user: how will you send it (attachment, WhatsApp document, link)?

## producer · delivery
- QA final: pass on picture, text and sound; the one fail was file size for email/WhatsApp
- wrote: exports/partner-story-share.mp4 (two-pass x264 1.2 Mbps + AAC 128k, faststart, 20.5 MB, -14.05 LUFS, TP -1.36); the master stays exports/partner-story-reels-1080x1920.mp4 (128 MB)
