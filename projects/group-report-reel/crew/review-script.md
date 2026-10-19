# Script review · Group report reel

Reviewer: creative-director · before Gate 2 · against `treatment.md`, `brief.md` and the Gate 1 decisions.

Verdict: approved with three changes (notes 1–3). Everything else stays as written.

## Decisions on the scriptwriter's flagged choices

- **L2 "أكتر من نص الـgroup، نفس الغلطة."** Approved. The StatCard shows 58% at the same moment, "more than half" is true of 58%, and it fits the slot. The verbless line sounds spoken and lands the class-problem idea.
- **L7 vs the B7 title.** Not approved as is. With captions burned in, a muted viewer would see two lines on screen at once that start the same and end differently ("قدام عينك" in the caption pill, "تراها كل أسبوع" in the title). That reads like a mistake. The spoken line becomes the Egyptian form of the title (note 1), so the caption and the title carry one idea: Egyptian in the pill, MSA in the title. That's the same split as the rest of the reel.
- **L6 and US-03.** The claim is supported. US-03 recurring schedules run weekly on a set day and time, and `report.ready` goes to the requester and the scheduled recipients. Because L7 now says "كل أسبوع", L6 drops it to avoid saying it twice in a row (note 2). T6 "تقرير أسبوعي" still shows "weekly" on screen in B6.
- **B7 timing.** I retimed it in `treatment.md`: B7 is now 0:23.5–26.7 (3.2 s), so the 27-character title gets its full ~3.1 s hold while fully readable. B8 is 0:26.7–30.2 (3.5 s). The total is 30.2 s, within ±2 s. Don't carry the title into the dip: the time spent fading out doesn't count as reading time.

## Notes

1. **B7 · L7 → @scriptwriter:** change L7 to «وجودة التدريس، تشوفها كل أسبوع.» (5 words). Set `max_seconds` to 2.6 and drop `"optional": true`. B7 now has room for the line, and the cut has no music, so 3 s of silence before the end card would sound dead. Direction: quiet and certain, stress "تشوفها". Update the English column to "And teaching quality you can see, every week."
2. **B6 · L6 → @scriptwriter:** change L6 to «بيوصلك لوحده، PDF تبعته للأهالي والعملاء.» (6 words, still 3.4 s). "لوحده" is backed by US-03 (a scheduled report arrives with no new request). Move the stress note from "كل أسبوع" to "لوحده". T6 stays as written.
3. **B1 · T1 → @scriptwriter:** remove T1 "خطأ يكرره الفصل" from `onscreen.json`. B1 already shows the student's sentence, the strike-through correction and the L1 caption, all in 2.5 s. A fourth text element can't meet its hold time (15 chars ≈ 2.4 s, and it lands 0.5 s into the beat), and it competes with the hook. The excerpt is the hook.
4. **B8 · L8 → @scriptwriter:** update `max_seconds` to 2.9 for the new 3.5 s beat. The wording stays. The CTA verb and object match the end card.

## Checked and fine

- Every line serves its beat. The order follows the treatment: question → number → report → ranking → real examples → weekly PDF → promise → CTA.
- Every line fits its `max_seconds` at 2.2 words/s. L1 is the tightest, and the fallback without "تعرف" is approved.
- The voice-over is spoken Egyptian (ده، مين، قد إيه، الجاية، تبعته، النهارده), not MSA. The product terms follow the brief.
- On-screen text T2–T8 is MSA. There are no exclamation marks and no emoji. T2 caption and T8 match the motion specs.
- No invented facts: 58%, A2 Morning, the excerpts, the tip per focus area, the same-week ranking, weekly schedules (US-03), and the PDF for parents and clients (US-20, Gate 1).
- Recording notes: clear and practical. After notes 1–2, update the stress list (L6 "لوحده", L7 "تشوفها").
