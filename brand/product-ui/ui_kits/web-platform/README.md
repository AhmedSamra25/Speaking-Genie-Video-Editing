# Web platform — UI kit (primary)

The redesigned Speaking Genie web platform, imported from the "Genie Web Platform Redesign" project (`https://claude.ai/design/p/8f6de05b-c5bc-4799-9034-76c7d59cc197`) and pointed at this design system's root (`../../styles.css`, `../../_ds_bundle.js`, `../../assets`).

Open `Speaking Genie Platform.dc.html`. It is a Design Component shell (`support.js` runtime) that routes between area files:

- `SG Dashboard` — dashboard
- `SG Overview` — My groups (teacher), notifications, achievements, onboarding analytics
- `SG Courses` — courses, new course, course / level / task detail
- `SG Characters` — AI characters list, detail, form
- `SG People` — students, student detail/form, invitations, groups, group detail, users, user detail, roles
- `SG Insights` — reports, **student progress report** (`#reportDetail`), **collective feedback report** (`#groupReport`, spec in `Group Report User Stories.md`), consumption, billing, incentive program
- `SG Account` — my profile, company profile, levels
- `SG Help` — help center, category, article, FAQs, search, contact
- `SG Auth` — sign in, register, forgot/reset password, join group, student self-registration, 404
- `SG Flows` — 30 modals/drawers (recharge, payment success/failure, AI course setup, OTP, app download, assign tier, notification detail, confirms, session summary, conversation evidence…)
- `sg-helpers.js`, `i18n.js` — shared helpers and the platform's EN→AR layer

## URL parameters
`#<screen>` picks the screen · `?theme=dark` · `?lang=ar` · `?persona=Teacher` · `?state=empty|loading|blocked` · `?flow=<key>` opens a flow · `?gtab=reports|ranking|…` picks the Group detail tab · `?embed` skips saving position.

## Cards
`screens/*.html` — one card per screen (groups "Web platform · <area>"), state/dark/RTL variants, and one card per flow ("Web platform · Flows").

## Changes from the source project
- DS-level overrides (sidebar contrast, table spacing, logo `<img>` swap) were removed; they now ship in `SgSidebar`, `SgTable` and `.sg-logo`. The "Side nav" tweak maps to `SgSidebar titleStyle`.
- `--sg-ink-3/4` text colours replaced with `--sg-ink-muted` per the contrast rule.
