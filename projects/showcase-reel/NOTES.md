# Project notes · Showcase reel

**Brief:** an internal proof piece for the capabilities plan (docs/plans/2026-10-20-capabilities-plan.md) and its
after-benchmark. Enablement DS, business track, for language-centre owners. Full brief: crew/brief.md.

**Length / formats:** Arabic 9:16 `reels-1080x1920`, 45.17 s (this project); English 16:9 `youtube-1080p`, 43.93 s
(`projects/showcase-reel-en`, same treatment).

**Voice:** SCRATCH macOS `say` voice (Majed Premium at 280 wpm; Ava Premium at 190 wpm for English). A timing
placeholder: synthetic, MSA with a Gulf accent. Re-voice before anything is published.

**Decisions log**

Edit (producer, 2026-10-20)
- The cut is built from the voice timings: each beat runs from its transition's mid-point to its line's end plus
  0.35 s, the line comes in 0.25 s after a cut (or at 60% of a transition), and the EndCard holds 3 s after its line.
  Builder logic is described here rather than committed; edit.json is the source of truth.
- B1 is Ahmed's own line (clip 11, 3.18–6.00, the partner-story hook), grade lift, focus 0.52,0.38. Rack focus out
  over its last 0.82 s (0 → 8 px) hands over to the dome into B2. The caption for his line ends at 2.45 s so it doesn't
  overlap L1's first cue.
- Speed ramp not used: the only footage is a talking head, and the ramp is for montage beats, never anyone speaking.
  It was verified on a scratch project (timing matched the source to within one frame of a 2.5× section).
- Match cut not used: no pair of beats shares geometry without forcing it.
- Motion transitions at 2.2 (dome), 17.5 (zoom), 25.2 (push-right), 29.9 (slide-scale): never the same twice, about
  one every 6 s. Blur into B8 and a dip into the end card. One sweep, aimed at the button.
- StatCard: 500 "learners actively served" (company brief, Investor Deck June 2026), Arabic-Indic digits, and the source
  year in Arabic-Indic digits too (Latin "2026" next to ٥٠٠ mixed the two systems). Capsule dropped: it repeated the label.
- B2 TitleCard: exitFade false (it faded to an empty ground before the cut to B3 in draft 1).
- English cut: web callouts mirrored for the LTR group report (draft 1 had the ring on "Practice time distribution").

QA round 1 (crew/qa-1.md: ship after fixes, 11 notes), all applied (producer, 2026-10-20)
- 1 L1 now starts after the dome completes (2.97 s), past Ahmed's last word (~2.78); his caption runs to 2.80.
- 2 call-connect (pair rule) replaced by mic-on on B3 at +1.2 s, as the voice bars come up.
- 3 transitions re-spaced: dome 2.2, zoom 17.9, push 25.6, slide-scale 33.3 (B7→B8, card to card); blur now B6→B7.
- 4 English DualScreen labels removed (the 16:9 caption band covered them; the voice says it).
- 5 labels shortened («الأخطاء المشتركة», "Shared mistakes"), step 2 at 2.9 s with no label, and clips with a label now
  hold at least 0.7 + 1.5 s + 0.06 s per character (the English tasks beat grew to 4.3 s).
- 6 lower third: "Ahmed Abosamra · Co-founder · Product" as in the company brief; Arabic «شريك مؤسس · المنتج».
  Open for the user: confirm the spelling (Abosamra in the brief, Abousamra elsewhere) and the exact title.
- 7 L8 «من غير» → «دون» (formal).
- 8 labels that repeated the caption: B3 Arabic label now «متاح على مدار الساعة» (24/7 is in the brief); the step-2 labels
  are gone; the English B8 title changed (9).
- 9 "The gym membership for your voice" is the learner-track line: the English B8 is now the approved business line
  "The only curriculum-integrated solution." (marker on "curriculum-integrated"). The stat label dropped "we/today":
  «متعلم نشط على المنصة», L7 «خمسمئة متعلم نشط على Speaking Genie» / "…are actively served on Speaking Genie."
- 10 the Arabic group report opens already pushed in on the focus areas (`startZoom` 1).
- 11 English PDF callout re-measured on the LTR capture: 1272, 131, 136, 40 ("Download PDF" is wider than «تنزيل PDF»).
- Checked by the producer on frames of the new drafts and finals; QA was not re-run as an agent.

Benchmark (this Mac, 8 GB M2; the queue idle, no VM)
- Arabic draft (cold project cache, 540×960): 45.6 s wall, peak 1.20 GB (motion 32.0 s, segments 6.1 s, assemble 3.2 s,
  finish 3.5 s). Re-render after small prop changes: 23.4 s.
- Arabic final 1080×1920: 69.7 s wall, peak 1.28 GB (motion 39.6 s, segments 10.0 s, assemble 9.8 s, finish 7.8 s).
- English final 1920×1080: 73.7 s wall, peak 1.02 GB.
- Peak = summed RSS of the render's whole process tree, sampled every 0.25 s.

- The cold numbers above are for the first cut (45.67 s / 41.90 s). Finals after the QA fixes, warm cache: Arabic 53.0 s,
  peak 1.28 GB; English 60.6 s, peak 1.35 GB.

Finals (after QA round 1)
- exports/showcase-reel-reels-1080x1920.mp4: 1080×1920, 30 fps, 45.17 s, 24.8 MB, −14.14 LUFS, TP −1.50 dBTP.
- ../showcase-reel-en/exports/showcase-reel-en-youtube-1080p.mp4: 1920×1080, 30 fps, 43.93 s, 30.3 MB, −14.15 LUFS,
  TP −1.50 dBTP.
- Music: corporate-calm-leberch (Pixabay; keep its licence certificate for Content ID).
