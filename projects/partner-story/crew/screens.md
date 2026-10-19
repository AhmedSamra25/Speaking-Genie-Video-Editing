# Screens · Partner Story

Enablement DS business track; product shown **as shipped** (no recolour to the orange accent). Arabic cut, so Arabic/RTL
captures. Learner side = mobile kit; the centre's curriculum setup = web kit. All captures read cleanly (fonts loaded,
no spinners, nothing cut off) — checked by eye.

## Capture settings

| File | Command | CSS size | Scale | PNG |
| --- | --- | --- | --- | --- |
| assets/screens/flow-aiPlan-ar.png | `bin/sgv screen partner-story flow-aiPlan --lang ar --name flow-aiPlan-ar` | 1440×900 | 2 | 2880×1800 |
| assets/screens/06-lab-tasks-ar.png | `bin/sgv screen partner-story 06-lab-tasks --dir rtl --name 06-lab-tasks-ar` | 430×884 | 3 | 1290×2652 |
| assets/screens/22-call-ar.png | `bin/sgv screen partner-story 22-call-ar` | 430×884 | 3 | 1290×2652 |
| assets/screens/21-session-feedback-ar.png | `bin/sgv screen partner-story 21-session-feedback --dir rtl --name 21-session-feedback-ar` | 430×884 | 3 | 1290×2652 |
| assets/screens/23-reports-ar.png | `bin/sgv screen partner-story 23-reports --dir rtl --name 23-reports-ar` | 430×884 | 3 | 1290×2652 |

Theme: **light** for the web screen (a light modal reads against the purple dome; dark would sink into it). The mobile kit
ships light; the call screen is dark by design and is kept so, inside its phone frame. Mobile clips: `"scale": 3`.

## Per beat (cover over Samra's voice; all ProductScreen with `drift` 0.03)

| Beat | Screen file | Hold | Callout x, y, w, h (CSS px @1x) | Label (MSA, suggestion) | Move |
| --- | --- | --- | --- | --- | --- |
| B7 (last 3 s) | assets/screens/flow-aiPlan-ar.png | 3.0 s | 59, 185, 566, 136 (level A1 card: tasks · vocabulary · idioms) | بناء المنهج بالذكاء الاصطناعي | push, pre-zoomed (`startZoom` 0.75, `pushFrames` 14); 9:16 crop to the modal only, x 32–652, y 40–860 — never the full desktop |
| B8a | assets/screens/06-lab-tasks-ar.png | 3.5 s | 37, 300, 356, 211 (first task card: goal, 10 min) | لكل مكالمة هدف محدد | push to callout, then `tap` {x 170, y 474, at 2.8} on «ابدأ التمرين» — leads into the call |
| B8b | assets/screens/22-call-ar.png | 4.0 s | 135, 293, 160, 236 (AI partner avatar + name) | محادثة صوتية مع AI | still (drift only); cut in on «ده AI» |
| B10a | assets/screens/21-session-feedback-ar.png | 4.0 s | 52, 488, 326, 139 (strengths + areas to improve) | ملاحظات بعد كل جلسة | push, in on «إيه اللي محتاج تحسنه» |
| B10b | assets/screens/23-reports-ar.png | 3.5 s | 40, 149, 350, 298 (monthly report card; weekly card sits right under it in frame) | تقارير أسبوعية وشهرية | push, in on «أسبوعي وشهري» |

Labels add the feature name; they don't repeat the caption. 3–4 words each, so every hold clears 1.5 s + 0.06 s/char and
the 3 s callout minimum. Keep labels above the bottom 20 %.

## Notes
- `flow-aiPlan` in Arabic: the platform's Arabic layer leaves this modal's chrome in English ("Review and edit plan",
  "Apply plan") and the course content is English (it is an English course). That is the shipped product; the crop and
  callout keep the Arabic column headers (المهام · المفردات · التعابير) in view. Fallback if the producer wants pure
  Arabic chrome: `courses` (ar) list, but it says less about "follows the curriculum".
- Demo data only (Emma is the kit's AI character; learner shown as initial "A").
