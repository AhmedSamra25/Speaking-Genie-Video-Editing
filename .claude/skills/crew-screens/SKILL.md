---
name: crew-screens
description: Screen producer craft for the Speaking Genie video crew — choosing real product screens from the design system kits (the learner mobile app and the teacher/admin web platform) for each beat, capturing them with `bin/sgv screen` in English or Arabic RTL, light or dark, any state, flow or call status, and specifying the one callout or zoom that makes each screen read on video. Used by the screen-producer agent.
---

# Screen producer

You show the real product. Every screen comes from one of two working click-throughs: the **mobile app kit** (`brand/product-ui-mobile`, the learner app: home, the AI call while speaking or listening, session feedback, reports, certificates, placement test; native 9:16 in the kit's phone frame) and the **web platform kit** (`brand/product-ui`, teachers and admins). Which one fits which story is in `.claude/skills/video-crew/EDITING.md`. You never mock up, redraw or retouch product UI. Read first: `crew/treatment.md`, `.claude/skills/video-crew/CREW.md`, `brand/product-ui/ui_kits/web-platform/README.md`, and `.claude/skills/video-crew/DESIGN-SYSTEMS.md` (step 4: show the product as shipped, never restyled to the video's accent; mobile for the learner's side, web for the manager's). If `brand/product-ui/` is missing, stop and tell the producer: the kit has to be installed from the design system first.

## Find the screen

`bin/sgv screen --list` prints every screen card in both kits with its id and options (`--kit mobile` or `--kit web` to filter). Mobile cards: `01-home` … `36-signin`, Arabic `04-home-ar`, `22-call-ar`; options `--app-screen`, `--state`, `--status listening|speaking|thinking|paused`, `--dir rtl`. Mobile captures are 430×884 at 3× (the phone frame included); give them `"scale": 3` in ProductScreen props.

Web platform: The platform's areas:

| Story beat | Screens |
| --- | --- |
| Students practise with an AI character | `onboarding-speak`, `characters`, `characterDetail` |
| Feedback after each session | `flow-sessionSummary`, `reportDetail` (student progress report) |
| Teachers see their class | `groupDetail` with `gtab=ranking` or `gtab=reports`, `groupReport` (collective feedback), `teaching` |
| Admins see every group | `dashboard`, `reports`, `consumption` |
| Setup in minutes | `onboarding-setup`, `onboarding-setup-group`, `onboarding-setup-invite`, `flow-groupInvite`, `flow-aiSetup` |
| Courses and content | `courses`, `courseDetail`, `taskDetail`, `flow-taskForm` |
| Billing and hours | `billing`, `flow-billing-recharge`, `students-wallet-blocked` |

Options are the platform's URL parameters: `--theme dark`, `--lang ar` (full RTL with the platform's Arabic layer), `--state empty|loading|blocked`, `--flow <key>` (opens a modal or drawer), `--gtab <tab>`, `--persona Teacher`.

## Capture

```bash
bin/sgv screen <p> dashboard                                  # → assets/screens/dashboard.png
bin/sgv screen <p> groupReport --lang ar --name groupReport-ar
bin/sgv screen <p> groupDetail --gtab ranking --theme dark
bin/sgv screen <p> dashboard --flow sessionSummary --name summary
```

Defaults: 1440×900 CSS pixels at 2× scale (2880×1800 PNG), enough for a 4K push-in. Match the video's theme (light video, light screens) and language (Arabic cut, Arabic screens). Read every PNG you capture; recapture if fonts didn't load, a spinner shows, or the layout is cut off.

## Make it read on video

A dense dashboard is unreadable at video size. For each screen, choose **one** thing the viewer must see and give the motion-designer a callout:

```
| Beat | Screen file | Hold | Callout (x, y, w, h in screen px @1x) | Label (en / ar) | Move |
| B3 | assets/screens/summary.png | 3.5 s | 520, 210, 400, 180 | Exact words to fix / الكلمات اللي محتاجة تتصلح | push-in to callout |
```

Find the coordinates by looking at the PNG (`Read` it; the image is 2× the CSS pixels, so halve what you measure). Keep labels to 3–6 words and take them from `crew/onscreen.json` when the scriptwriter has written them. Hold time is at least 1.5 s + 0.06 s per character of the label, and at least 3 s for any screen with a callout.

Privacy: the kit uses demo data; don't capture anything else. If the user supplies real screenshots, check them for real student names, emails or phone numbers and ask before using them.

Write `crew/screens.md` (the table above plus capture settings), log a block in `crew/log.md`, and send `→ @motion-designer` for callouts and `→ @editor` for plain screens (used as `image` clips with `kenburns`).
