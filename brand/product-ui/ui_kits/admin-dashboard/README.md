# Admin dashboard — UI kit

Click-through recreation of the **Speaking Genie platform admin dashboard** (dashboard.speakingenie.com) in its redesigned form, built from `Speaking Genie Mockups.dc.html` in the source project.

Open `index.html`. Use the sidebar to move between screens, rows to open detail pages, the "Viewing as" segment to switch Admin ↔ Teacher, and the dark **Flows** pill (bottom-right) to open every create/edit dialog.

## Screens
- `DashboardScreen.jsx` — greeting, wallet banner, 4 metrics, weekly hours chart, Needs attention, Recent activity
- `RolesScreen.jsx` — role picker + live permission editor (toggle switches, Grant all)
- `StudentsScreen.jsx` — Students table with filters + pagination; Student detail (KPIs, sessions, hours)
- `CourseScreen.jsx` — course outline (levels → content types), content list, level settings
- `GroupsScreen.jsx` — Groups table; Group detail with Roster / Content & pacing / Analytics tabs; Teacher "My groups"
- `InsightsScreens.jsx` — Consumption (tiers, highest usage) and Billing (plan, wallet, invoices)
- `AdminScreens.jsx` — Users, User detail, Reports, Report detail, Company profile, My profile
- `Patterns.jsx` — Platform patterns screen (`#patterns`): notifications dropdown + drawer, workspace switcher, AI course setup, OTP, payment results, app download, assign tier, page states (empty · loading · wallet-blocked)
- `Flows.jsx` — 12 modal/drawer forms (create role, add student, recharge hours, delete level…)
- `App.jsx` — shell (SgSidebar + SgTopbar), routing, persona switch, workspace switcher, notifications bell, toasts

## Theme & language
- ☾ / ☀ in the topbar toggles `data-theme="dark"`.
- The language pill (EN ▾) switches to العربية: sets `dir="rtl" lang="ar"` and runs `i18n.js`, which translates rendered text in place. Choices persist in localStorage; `?theme=dark&lang=ar` overrides.

## Per-screen reference cards
`screens/<id>.html` — one Design System card per screen (group "Admin dashboard screens"). Each embeds `index.html?embed#<id>` (hash picks the screen; `embed` hides the Flows pill and skips saving position). Ids: dashboard, roles, users, userDetail, students, studentDetail, course, groups, groupDetail, teaching, reports, reportDetail, consumption, billing, company, profile, patterns (+ patterns-dark, patterns-ar).

## Source
`../../reference/Speaking Genie Mockups.dc.html` is a verbatim copy of the source mockup file (with its `support.js`), shown as the "Reference" card.
