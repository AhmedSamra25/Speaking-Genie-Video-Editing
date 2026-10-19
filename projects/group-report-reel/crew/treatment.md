# Treatment · Group report reel

## Logline
Every week, one report shows a centre owner what a whole group got wrong, in the students' own words, and what the teacher should teach next.

## Viewer and job
- **Who:** owners and managers of language centres in Egypt. They decide; they don't teach. They care about teaching quality they can see, their teachers' time, and showing parents results.
- **Where:** Instagram / Facebook Reels and TikTok, scrolling, mostly muted. The captions and on-screen text have to carry the idea without sound.
- **Next step:** start a free pilot (speakingenie.com).

## Shape
- One cut: 30 s, 9:16, preset `reels-1080x1920`, light theme.
- Language: `ar-eg` voice-over (Egyptian, with English product terms: group, report, feedback, session, tip, PDF). On-screen text in MSA. Burned-in captions from `vo.json`.
- Structure: hook on a real student mistake → the number → the report proves it in three screens → the owner's payoff (weekly, PDF) → CTA. No logo intro; the logo appears only on the end card.

## Beat sheet

Word budgets assume about 2.2 words per second for Egyptian Arabic. The VO column gives the idea; the scriptwriter owns the wording.

| Beat | Time | Purpose | Visual source | Words |
| --- | --- | --- | --- | --- |
| B1 | 0:00–0:02.5 | Hook: a real mistake your class keeps making | screen: `groupReport-ar`, evidence card "Past simple · irregular verbs", zoom on the excerpt bubble "Yesterday I go to the café and I eat eggs and bread." with the strike-through → "I went … I ate" | VO L1, max 5 words. A question to the owner: do you know your class's most common mistake? |
| B2 | 0:02.5–0:06 | One number makes it a class problem, not one student | motion: `StatCard`, value 58, suffix %, label (MSA) "من طلاب المجموعة", caption "الماضي البسيط · الأفعال الشاذة · A2 Morning" | VO L2, max 7 words: 58% of the group make the same mistake. |
| B3 | 0:06–0:10.5 | Name it: the group report, one picture of the whole class | screen: `groupReport-ar`, top of page. Callout on the title "تحليل المجموعة · A2 Morning" (stagger in the two Arabic metric cards: إجمالي الطلاب 24, الطلاب النشطون 21) | VO L3, max 9 words: this is the group report, the whole class in one picture. |
| B4 | 0:10.5–14.5 | Who practised, and how much | screen: `groupReport-ar`, "Student ranking" card. Callout on the top 3–4 rows: names and the purple/green meters, plus the Arabic segment "حسب ساعات الممارسة". Keep the "min 58" cells and the English card title out of the crop | VO L4, max 9 words: who practised and how much, everyone ranked over the same week. |
| B5 | 0:14.5–19.5 | What they actually said, ready for the next lesson | screen: `groupReport-ar`, "ما قاله الطلاب هذا الأسبوع" section. Callout on the second excerpt "On Friday I buyed new shoes…" with buyed → bought, then the "نسخ للدرس" button | VO L5, max 11 words: real examples from what students said, with a tip for the next lesson. |
| B6 | 0:19.5–23.5 | The owner's payoff: it arrives every week, as a PDF for parents | screen: `groupReport-ar`, header. Callout on the "تنزيل PDF" button | VO L6, max 9 words: it comes every week on its own, a PDF you can send parents. |
| B7 | 0:23.5–26.7 | The promise in one line | motion: `TitleCard`, MSA title "جودة التدريس، تراها كل أسبوع" (approved at Gate 1), fully readable for the whole 3.2 s, not carried into the dip | VO L7, max 5 words, the Egyptian form of the title so the caption and the title say the same thing. |
| B8 | 0:26.7–0:30.2 | CTA | motion: `EndCard`, headline "ابدأ تجربة مجانية", url "speakingenie.com"; transition `dip` | VO L8: start a free pilot (same verb as the card). |

Total: 30.2 s (within the brief's ±2 s). Retimed at script review: B7 2.5 → 3.2 s so the title meets the hold rule (27 chars ≈ 3.1 s); B8 4.0 → 3.5 s.

### Why these screens, and the Arabic check
I captured and read `groupReport-ar`, `groupReport`, `groupDetail-reports` and an Arabic reports tab (`assets/screens/ref-*.png`, reference only). The Arabic report is only partly translated:
- **Reads well in Arabic:** page title "تحليل المجموعة · A2 Morning", the "تنزيل PDF" button, the metric cards إجمالي الطلاب / الطلاب النشطون, the ranking column headers and its segment, the section title "ما قاله الطلاب هذا الأسبوع", the badges نقطة ضعف / نقطة قوة, the "نسخ للدرس" button. Student excerpts are English by design (students practise English), which is right for this audience.
- **Stays English or breaks in RTL:** "Class-wide focus areas" with English rows and "of students 58%" (number on the wrong side); "AVG FLUENCY SCORE" / "AVG PRACTICE TIME"; "did not practise 3"; "Practice time distribution" with "to 3 hours 1"; "min 58" in the ranking; "Student ranking · Aug 11–17"; card meta "of 24 students · 41 errors this week 14"; teaching tips; "Group reports" / "Weekly schedule" on the group's reports tab.
- **So:** the 58% finding is carried by a StatCard (B2) instead of a callout on the broken focus-area row, and every screen callout is cropped to the Arabic-reading areas above. I am not using the English `groupReport` in this cut: mixing English chrome into an Arabic reel for owners would read as an unfinished product. The group's reports tab (weekly history 66 → 67 → 71) is left out because its labels are English in Arabic; "every week" is said in the VO from US-03 (recurring schedules).

## Look and sound
- Light theme, canvas `#F7F8FB`, white windows, one purple accent. Screens in the ProductScreen window with one callout each: purple ring, calm 0.6 s ease-out push-in, no bounce.
- Pace: a new visual every 2.5–5 s; cuts between beats, a dissolve only B2 → B3 (number to proof), a dip into the end card.
- Each callout must land within 0.5 s of its beat starting, so it reads before the VO moves on.
- No music (none supplied). The cut must work on voice alone; leave room for a licensed bed later at 0.3–0.4.
- Voice: calm, warm, confident, one owner talking to another; not salesy. Same voice as the onboarding video.
- Captions: dark pill, IBM Plex Sans Arabic, above the 360 px bottom safe zone. Callouts and on-screen text stay out of the bottom 20%.

## CTA
"ابدأ تجربة مجانية" on the end card with speakingenie.com; the last VO line says the same verb and object in Egyptian Arabic.

## Facts used
A2 Morning, 24 students, 21 active, 58% past simple irregular verbs, the two verbatim excerpts, weekly schedules (US-03), PDF for parents or clients (persona: Admin, US-20). No customer names or results. The demo fluency numbers (71, ↑4) may be visible on screen but are not claimed in VO or text.

## Open questions
- Resolved at Gate 1: kit strings stay as they are; B2 stays a StatCard.
- Resolved at Gate 1: keep B7 "جودة التدريس، تراها كل أسبوع".
- Resolved at Gate 1: the PDF is for "parents and clients".

## Re-cut v2: visuals and editing

Fixed: the user's voice (`audio/vo.wav`), the words, the bed, 29.8 s, and the beat starts 0 / 2.5 / 5.6 / 9.3 / 13.5 / 18.5 / 22.9 / 25.8. Only pictures and editing change.

**The idea in pictures:** a student talks to the AI on the phone; the report is being made as they speak. Zoom through the phone into the number, then the owner's web report proves it. The change of device (dark phone → light web report) is the turn: the student's side, then the owner's side. The report, ranking and PDF stay on the web platform, where the group report lives.

| Beat | Time | Purpose | Visual v2 | Transition in | Camera and touches |
| --- | --- | --- | --- | --- | --- |
| B1 | 0:00–2.5 | Hook: what do your students get wrong? | **mobile** `22-call-ar --status listening` (Arabic RTL call with Emma, "يستمع…": the AI is listening, so the student is the one speaking; chip "سيتم إنشاء التقرير" at the top) | frame 0, no intro | `startZoom` 0.85, `pushFrames` 12, `drift` 0.03; ring on the chip "سيتم إنشاء التقرير" at 0.9 s, no label (the caption carries the question) |
| B2 | 2.5–5.6 | 58% of the group, same mistake | motion `StatCard` 58 % (unchanged props) | **`zoom` 0.35 s**: from the call into its result, going deeper | the number counts up as it lands |
| B3 | 5.6–9.3 | Name it: the group report | web `report-ar-b3-title.png` (unchanged) | cut, on «ده الـgroup report» (was a dissolve) | `drift` 0.03; ring on the title as before |
| B4 | 9.3–13.5 | Who practised, and how much | web `report-ar-b4.png` (unchanged) | cut, on «مين» | `drift` 0.03; whole-card ring, label as before |
| B5 | 13.5–18.5 | What they actually said, plus next lesson | web: **one tall crop of both excerpts** `report-ar-b5-steps.png` (new, see below) | cut, on «جمل» | **`steps` replace a cut**: step 1 at 0 s on excerpt 1 "Yesterday I go … I eat" with "I went … I ate" (label أمثلة حقيقية جاهزة للدرس); step 2 at 2.3 s (on «ومعاها ترتيب الحصة الجاية», 15.96) travels down to excerpt 2 "buyed → bought" + tip line 1, label stays; `drift` 0.03 |
| B6 | 18.5–22.9 | Weekly, a PDF for parents | web `report-ar-b6.png` (unchanged) | **`push-right` 0.35 s** (Arabic reading direction): moving on from the lesson to the owner's payoff | `still` + `drift` 0.02; ring on "تنزيل PDF" from 0 s; **`tap` on the button at 1.2 s** (clip time), on the word «PDF» at 19.70 |
| B7 | 22.9–26.3 | The promise | motion `TitleCard` (unchanged) | cut, on «وجودة» | none |
| B8 | 25.8–29.8 | CTA | motion `EndCard` (unchanged) | dip 0.5 s | none |

**Joins:** six cuts on the voice, two motion transitions (zoom at 2.5, push-right at 18.5, 16 s apart, never the same twice), the dip into the end card. To keep the beat starts, the outgoing clip grows by the transition length: B1 2.85 s, B2 3.1 s (no dissolve now), B5 5.35 s; nothing else moves.

**Why these screens (all captured and read, `assets/screens/ref-*.png`):**
- `22-call-ar` listening, not speaking: in "يتحدّث…" (green) it is Emma who talks; in "يستمع…" the student does, and the voice is about what students say. The report chip is the bridge to everything after it. Its English is only the name "Emma"; everything else is Arabic.
- Not used: `21-session-feedback` (Arabic) lists "past simple for finished trips" as a *strength* and articles as the weak point, which contradicts the 58% past-simple finding; `24-report-detail` is one student's monthly report with a "58%" pronunciation score that would be confused with our 58%. `20-analyzing` would add a beat we have no time for.
- B5 steps use real excerpts from the same report: excerpt 1 now appears for the first time (it left B1), and it is the café conversation the AI started ("What did you have for breakfast yesterday?"), so the call and the report tell one story.

**Look and sound v2:** captions `"style": "words"` (word-by-word, purple on the dark pill); `"sfx": {"volume": 0.4}`: whoosh under the zoom and the push, one tap on the PDF button. The B1 phone is the app's own dark call screen inside a light reel; that contrast is intended (the student's world), and the zoom carries us into the light owner's world. Every product screen drifts; nothing sits still. Picture leads the voice by 0.15–0.3 s at each cut.
