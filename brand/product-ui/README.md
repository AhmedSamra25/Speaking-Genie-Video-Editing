# Speaking Genie — Platform Design System

Speaking Genie is an AI speaking-practice platform for language centres. Students practise spoken English (and other languages) with an AI partner through conversational tasks, role-plays and real-life scenarios, scored on **range, accuracy and fluency**. Centres buy **hours** into a workspace wallet; each student consumes hours up to a monthly **consumption tier** (Light 10 · Regular 20 · Heavy 35 · Intensive 50).

This design system covers the **web platform admin dashboard** (`dashboard.speakingenie.com`) used by centre admins, managers, finance staff and teachers: courses → levels (CEFR Pre-A1…B2) → content (vocabulary & idioms, conversational tasks, flashcards, scenarios, goals/KPIs), groups, students, reports, consumption, billing, users, roles & permissions, company profile. It supports English (LTR) and Arabic (RTL). The production front-end is Vue 3; components here are React recreations with the same `Sg*` names and props.

## Sources
- Source design project: `https://claude.ai/design/p/85faca23-dbe5-42f1-aac2-9c0126eb39e9`
  - `Speaking Genie Design System.dc.html` — foundations, component library, IA, RTL rules, token sheet, Vue component map (ground truth for values)
  - `Speaking Genie Mockups.dc.html` — 17 redesigned screens + 13 create/edit flows (ground truth for UI kit)
  - `uploads/Screenshot 2026-08-18 …png` (12) — the **current** production dashboard before the redesign (gradient buttons, pastel quick-action tiles, Workspace/Global nav). Used for context only; the redesign intentionally moves away from those patterns.
- Platform redesign project: `https://claude.ai/design/p/8f6de05b-c5bc-4799-9034-76c7d59cc197` — official logo files and ~270 additional EN→AR strings (`reference/platform-i18n.js`).

---

## CONTENT FUNDAMENTALS

**Voice:** calm, operational, precise. Copy is written for busy administrators scanning hundreds of students; it states facts and consequences, never sells.

- **Sentence case everywhere** — page titles ("Roles & permissions", "Company profile"), buttons ("Create role", "Recharge hours", "Request report"), labels. Uppercase is only used as a *style* (overlines, table headers, nav groups), never typed in caps in copy.
- **Buttons are verb + object**: "Invite user", "Add student", "Publish changes", "Export CSV", "Save changes". Destructive confirms name the object: "Delete level". Payment buttons carry the amount: "Pay E£45,000".
- **Subtitles explain the object or the rule** in one sentence: "A group pairs a course level with a teacher and a cohort of students." · "Pick a role, then grant permissions by area. Changes apply to everyone holding the role." · "Staff accounts for this workspace. Students live under Students."
- **Address:** second person, implied. "You will lose access to Cairo Language Center immediately." Greeting is personal but plain: "Good morning, Admin". Activity feed uses "You" for the viewer: "You created the Finance role with 4 permissions".
- **Consequences are spelled out** in helper text and footnotes: "Moving a level keeps completed tasks in history." · "Changing a tier's ceiling applies from the next billing month." · "Seats: 5 of 25 used. Invited users occupy a seat once they accept."
- **Alerts lead with the state in bold, then the impact:** "**Hour wallet is empty.** Recharge to resume speaking sessions — 3 students are already blocked."
- **Numbers are concrete and contextual:** "↑ 12 this month", "↓ 3 pts vs July", "24 awaiting a teacher", "6.8 / 20 hrs", "1–6 of 359". Deltas use ↑ ↓ → arrows. Currency is "E£45" (Egyptian pound). Times are 24h ("09:00–10:30"). Dates "Aug 18, 2026".
- **Separators:** middle dot " · " joins metadata ("General English · Level A2 · Sun · Tue · Thu, 09:00"). Em dash "—" for empty cells and for an aside within a sentence.
- **Empty states** define the object + one action: "No groups yet" / "Groups pair a course level with a teacher and a cohort of students." / [Create group].
- **Domain vocabulary** (use consistently): workspace, hour wallet, recharge, consumption tier, over limit, level, content item, conversational task, scenario, flashcard, goals & KPIs, group, cohort, roster, pacing plan, session, review/feedback, role, permission key.
- **Identifiers** are shown in mono: `rbac.roles.index`, `session.review`, `head-of-academics`.
- **No emoji. No exclamation marks.** No marketing adjectives ("comprehensive", "unlock the full potential" — present in the old UI, removed in the redesign).

## VISUAL FOUNDATIONS

**Overall vibe:** a quiet, premium operations tool. White cards on a cool off-white canvas, slate ink, one confident purple accent. "Structure before decoration": hierarchy from spacing, weight and alignment; colour is the last tool reached for.

- **Contrast rule.** `--sg-ink-3` (#94A3B8) and `--sg-ink-4` (#A3ABB9) are for disabled states and decorative glyphs only, never readable text (2.6:1). Labels, table headers, nav titles, breadcrumbs, helper text, list subtitles and empty-state descriptions use `--sg-ink-muted` (#64748B, 4.8:1) or darker. Placeholders use `--sg-ink-muted` too.
- **Colour.** Brand purple ramp (50 #F5F3FF → 800 #4C1D95); **Purple 600 #6D28D9** is the only primary-action fill (hover Purple 700 #5B21B6). Cool slate neutrals (canvas #F7F8FB, borders #E7E9EF/#D9DDE5, ink #0F1729/#475569/#64748B/#94A3B8). Semantic pairs (fg on soft bg): success #047857/#ECFDF5, warning #B45309/#FFFBEB, danger #B91C1C/#FEF2F2, info #1D4ED8/#EFF6FF — status only, never decoration. Tier colours appear only as a 3px rule or dot.
- **Gradient.** `linear-gradient(135deg,#8B5CF6,#4C1D95)` is reserved for the logo mark, the signed-in user's avatar and marketing. Never on buttons, cards or backgrounds. No other gradients.
- **Type.** Plus Jakarta Sans (400–800) for all UI; JetBrains Mono for identifiers; IBM Plex Sans Arabic under `[dir="rtl"]` at 1.7 line-height. Page title 24/700/-0.02em (deliberately down from the old 40px); section 17/700; card title 15/700; body 14; labels 13/600; captions 12; overlines/table heads 11/700 caps with 0.07–0.1em tracking. Metrics 26–34/700 with `tabular-nums` — every number in a table or metric uses tabular numerals.
- **Spacing.** 4px grid (4·8·12·16·20·24·32·40). Page gutter 32px, top 28px; card padding 20–24px (metric 18×20); grid gaps 16–20px; sidebar 264px; topbar 64px; table rows 68px (dense matrices 56px); minimum hit target 44px.
- **Backgrounds.** Flat. Canvas #F7F8FB behind white cards. No images, illustrations, textures, patterns or full-bleed photography anywhere in the product.
- **Cards.** White, 1px #E7E9EF border, **14px radius, no resting shadow**. List cards ("flush") have an 18×20 header with a #F1F3F7 divider and edge-to-edge rows. Tinted variants only for meaning: amber advisory card, red-bordered "danger zone" card. Clickable cards gain a purple border (#D9C9F7) and a faint purple glow on hover.
- **Borders.** Always 1px, cool grey. Row dividers #F4F6F9, section dividers #F1F3F7, controls #D9DDE5. Dashed borders only for empty states, "+ Add" affordances and upload slots. **No coloured left-border accent cards** — status uses a separate 3px rounded rule element inside the row.
- **Shadows.** Borders first; shadows only when something floats: sm (resting, rare), md `0 4px 12px -2px rgba(16,24,40,.10)` dropdowns/toasts, lg `0 16px 40px -12px rgba(16,24,40,.22)` modals, overlay `0 24px 64px -16px rgba(15,23,41,.45)` form dialogs. Segment thumbs get a 1px hairline shadow. No inner shadows.
- **Corner radii.** 5 checkbox · 7 tags · 8 small buttons/pagination/icon tiles · 9 medium buttons · 10 inputs & large buttons & nav items · 11 radio cards · 12 alerts/inner cards · 14 cards · 16 drawer · 18 modal · 999 pills, switches, avatars, progress.
- **Hover states.** Subtle fills, not opacity: primary → Purple 700; secondary → border #B9BFCC + bg #FAFBFC; tertiary → bg #F1F3F7 + ink; table rows → #FAFAFD; nav items → `--sg-nav-hover` #EEF0F4; list items → #FAFBFC; text links darken to Purple 800 with underline.
- **Press / focus.** No shrink or bounce. Focus ring on every interactive element: `0 0 0 3px rgba(109,40,217,.22)`; inputs switch border to Purple 600 with a .18 halo.
- **Selection.** Selected items get Purple 50 fill (#F5F3FF), Purple 700 text at 700 weight, and optionally a #E9E2FE border. Active nav uses `--sg-nav-active` (Purple 100 #EDE9FE) with a purple 6px dot; idle labels are #334155 and idle dots #A3ACBC.
- **Animation.** Essentially none in the source: state changes are instant, no transitions, no skeleton shimmer. If you add motion keep it to ≤150ms opacity/colour fades; never bounce.
- **Transparency & blur.** Only the modal scrim `rgba(15,23,41,.45)`. No backdrop blur, no glassmorphism.
- **Imagery.** None in the admin product. Avatars are initials on Purple 100 (#EDE9FE / #5B21B6). Company logo upload slot is a dashed purple square.
- **Data viz.** Simple flat columns: Purple 100 for the ceiling/context series, Purple 600 for the measured series, 5px top radius. Progress bars 5–8px on #EDEFF3; turn amber ≥80% of tier, red at/over limit.
- **Sidebar.** Group titles default to purple caps (11/700, 0.1em, `--sg-link`). `SgSidebar titleStyle` offers `accent` · `caps` (#5B6577) · `caps-rule` · `sentence` · `chip` · `divided`. Nav colours are scoped tokens `--sg-nav-ink|dot|hover|active|title|title-muted` with dark values in `theme-dark.css`.
- **Tables.** `SgTable` defaults: transparent header, 11/700 caps 0.07em `--sg-ink-muted`, padding 14×24×12, 1px `--sg-border` below, nowrap; rows min 68px, 12px block / 24px inline padding, 24px column gap, `--sg-divider` lines with none under the last row; footer 14×24 with a divider above. `rowHeight ≤ 52` = dense (56px). ≥ 6 columns: 980px min-width and horizontal scroll (`minWidth` prop). Cell type: primary 14/600 ink · secondary 12 muted · muted values 13 muted · numbers 13/600 tabular · person cells 30px avatar + 12px gap · short compound values ("Regular · 20", "6.8 / 20") nowrap.
- **Layout rules.** Fixed 264px sidebar (sticky full height) + sticky 64px topbar with breadcrumbs. Page = header (title, one-line subtitle, actions right) → optional banner → 4-up metric row → 2-column content (1.5–1.6fr / 1fr) or master–detail (296px list / detail). One primary button per view, top-right.
- **RTL.** Mirror sidebar side, column order, breadcrumbs, chevrons, progress fill, drawer origin. Never mirror numbers, latin identifiers, time-axis charts. Use logical CSS properties only.

## DARK MODE

*Not in the source design — authored for this system; review before shipping.*

- Opt in with `data-theme="dark"` on `<html>` (or any container). All tokens live in `tokens/theme-dark.css`; components need no changes because they only read semantic aliases.
- Same cool-slate family as light: canvas #0B1020, surface #121A2B, raised #1B2438 (segment thumbs), borders #253049 / #2F3B56, ink #E8ECF4 / #B6C0D2 / #97A3B8 / #7F8BA3.
- Purple shifts one step: fills use #7C3AED (white label ≥ 5.7:1), purple *text* uses `--sg-link` #A78BFA, selected ink #C4B5FD, washes are rgba(139,92,246,.14–.24).
- Status colours switch to the 400 tones (#34D399, #FBBF24, #F87171, #60A5FA) on 10–12% alpha washes; tier markers use the 500 tones.
- Shadows deepen to black-based (rgba(0,0,0,.4–.75)); the hierarchy rule stays "borders first". Scrim rgba(2,6,16,.66).
- Use `--sg-link` (not `--sg-primary`) for any purple text, `--sg-surface-raised` for anything that sits on a muted track, and `--sg-chart-muted` for chart context series.

## RTL & ARABIC

- Opt in with `dir="rtl" lang="ar"` on `<html>`. `--sg-font` swaps to **IBM Plex Sans Arabic** (bundled, includes Latin glyphs), body line-height becomes 1.7, and all letter-spacing is reset to 0 (tracking breaks Arabic joining; uppercase styling has no effect on Arabic).
- Components use logical properties (`insetInlineEnd`, `borderInlineEnd`, `paddingInlineStart`, `textAlign: start/end`) so sidebar, tables, breadcrumbs, drawers and toasts mirror automatically. Directional glyphs (← ‹ ›) flip via `--sg-flip`.
- **Never mirrored:** numbers (Western digits, as used in Egypt), latin identifiers / permission keys (`SgTag variant="key"` is isolated LTR), time-axis charts (`SgBarChart` forces LTR), media controls.
- **Copy:** Modern Standard Arabic, formal-neutral, imperative verbs for actions ("إنشاء دور", "حفظ التغييرات", "طلب تقرير"). Text arrows in links flip: "Request →" becomes "اطلب ←". Person names, emails, group names and course *content* (English-learning tasks, idioms) stay as entered.
- The UI kit's `i18n.js` is a prototype translation layer plus the full EN→AR glossary (~850 strings + pattern rules for dates, counts, tiers, levels, days). Production should use real i18n keys.

## ONBOARDING

Source: `ui_kits/web-platform/SG Onboarding Flow.dc.html` + `Onboarding Video.dc.html`.

- **Shell.** No sidebar. 64px top bar: logo (28px) · centred 4-step progress (4px pill bars, 11px uppercase labels at 0.06em; done/current = `--sg-primary` bar + `--sg-link` label, upcoming = `--sg-track` + `--sg-ink-muted`) · tertiary "Skip to dashboard". Content max-width 960px, 48px top padding.
- **Steps.** Welcome → Speaking test → Your result → Set up (course · group · invite) → Ready. Value first: the admin experiences a student session before any configuration.
- **Welcome.** Two-column (1.1fr / 1fr). 12px uppercase eyebrow in `--sg-link`, 36px/700 headline at -0.02em, 16px muted lede, `SgRadioGroup` goal picker whose choice rewrites the primary CTA. Right column: 16:9 video preview (18px radius, soft shadow, dark pill label "▶ How it works · 47s"); clicking opens it in a 1000px `SgModal`.
- **Speaking test.** Centred 30px title; one 760px `SgCard` with AI character avatar, prompt bubble (bordered) and the student's reply bubble (`--sg-primary-soft`, end-aligned). 88px circular mic button (soft → solid purple with 10/20px rings while recording), waveform bars in `--sg-purple-300`, tabular timer hint, and a tertiary "No microphone? Use a sample answer" fallback.
- **Result.** Info `SgAlert` framing it as the student view, then score card (48px tabular %, `SgKpiBar` per skill) beside correction cards: quoted words, strikethrough `--sg-danger` → `--sg-success` fix, `--sg-info` tinted practice tip, ✓ strength row.
- **Setup.** 260px step rail (28px numbered dots: current `--sg-primary`, done `--sg-success-solid` ✓) + one `SgCard` per sub-step. AI generation shows live `SgKpiBar` counts for levels, tasks, vocabulary, scenarios.
- **Ready.** 64px green ✓ disc, 30px title naming the centre, "Get started checklist" `SgCard` of `SgListRow`s with Done/Next badges.
- **Copy.** States time cost up front ("about 60 seconds", "About 5 minutes. You can change everything later."), says what happens to data ("not stored"), and always offers a skip.

**How it works video** — 1920×1080, 47s, 7 scenes (Hook, Speak, Feedback, Teacher, Dashboard, Setup, Close) on the animation engine. Canvas `#F7F8FB`, white windows (22px radius, `#E7E9EF` border), Plus Jakarta Sans 76px hero / 30px body, `#6D28D9` accent. Egyptian Arabic voice-over (`assets/vo-eg.mp3`) by default; captions in a dark 14px-radius pill (IBM Plex Sans Arabic 32px, RTL) switchable to English, formal Arabic or off. Script: `Onboarding Video Script.md`. Published: https://youtu.be/HxOIqnt1i0w — embed via `https://www.youtube-nocookie.com/embed/HxOIqnt1i0w` in product surfaces (the onboarding video modal uses it); the animated `.dc.html` stays the editable source.

## ICONOGRAPHY

- The redesigned dashboard uses **no icon font and no SVG icon set**. Navigation items carry a 6px dot instead of an icon; metric cards explicitly have "no decorative icon tile — the label carries the meaning".
- Functional glyphs are **Unicode characters** set in the UI font: ⌕ search, ▾ select/dropdown, ← back, → go/next, ‹ › pagination, ✎ edit, ⋯ more, ✓ check, – partial, × close/error, ! warning, ↑ ↓ → deltas, / breadcrumb separator, ⌘K keyboard hint (mono, bordered), ☾ / ☀ theme toggle. See `guidelines/brand-iconography.html`.
- Status is conveyed by colour + text (badges), a 6px dot, or a 3px vertical rule — not by icons.
- **Emoji are never used.**
- The *current* production UI (screenshots) uses an outline icon set that looks like Lucide (shield, layers, graduation cap, users, credit card, trending-up). If a consumer needs real icons, link **Lucide** from CDN (`https://unpkg.com/lucide-static/`) at 16px, 1.75–2px stroke, `currentColor` — flagged as a substitution, not part of the redesign.

## Logo

- Files: `assets/logo-light.png` (full lockup, "S" mark + "SPEAKING GENIE", transparent), `assets/logo-dark.png` (same, "SPEAKING" recoloured to #E8ECF4), `assets/logo-mark.png` and `assets/bg_white_h.png` (mark only, transparent). Source: product codebase `public/speaking-genie-logo.png`, `public/bg_white_h.png`.
- Use the `.sg-logo` class from `tokens/base.css`: set height only, width follows the 1291×284 ratio, and it swaps to the dark file under `[data-theme="dark"]`. `SgSidebar` renders it at 30px; auth pages use 40px. `.sg-logo-mark` for the mark alone.
- The brand gradient is reserved for the mark itself and the signed-in user's avatar.

---

## Index

**Root**
- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `colors.css`, `theme-dark.css`, `typography.css`, `direction.css`, `spacing.css`, `elevation.css`, `base.css`
- `assets/fonts/` — Plus Jakarta Sans, JetBrains Mono, IBM Plex Sans Arabic (woff2, latin/latin-ext/arabic)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (below), one `@dsCard` per folder
- `ui_kits/admin-dashboard/` — interactive dashboard recreation + per-screen cards (see its README)
- `reference/` — verbatim source mockups file
- `thumbnail.html`, `SKILL.md`

**Token prefixes:** `--sg-purple-*`, `--sg-gray-*`, semantic `--sg-primary`, `--sg-ink*`, `--sg-canvas`, `--sg-surface*`, `--sg-border*`, `--sg-success|warning|danger|info*`, `--sg-tier-*`, `--sg-1…10` spacing, `--sg-r-*` radius, `--sg-e-*` elevation, `--sg-focus`, `--sg-text-*` type scale, `--sg-font`, `--sg-mono`.

## Components

Mapped from the source's Vue component layer (SgButton, SgBadge, SgInput/SgSelect, SgTable, SgCard, SgTabs, SgModal/SgDrawer, SgToast, SgEmptyState, SgPermissionGroup) plus every other primitive drawn in the source library and mockups.

- **actions/** — SgButton (primary · secondary · tertiary · soft · danger · destructive · warning; lg/md/sm; iconOnly)
- **forms/** — SgField, SgInput, SgTextarea, SgSelect (field · filter), SgCheckbox, SgSwitch, SgRadioGroup, SgChipGroup
- **feedback/** — SgBadge, SgTag, SgProgress, SgAlert, SgToast, SgEmptyState, SgSkeleton
- **navigation/** — SgSidebar, SgTopbar, SgBreadcrumbs, SgBackLink, SgTabs (underline · segment), SgPagination, SgSideList
- **data/** — SgCard, SgMetricCard, SgStat, SgAvatar, SgTable, SgListRow, SgKpiBar, SgBarChart
- **overlays/** — SgModal (center · drawer; covers the source's SgModal / SgDrawer)
- **domain/** — SgPermissionGroup

### Intentional additions
Not named in the source's Vue map, but drawn repeatedly in its screens and extracted so kits don't re-implement them:
- SgField — shared label/hint/error wrapper for all form controls.
- SgTextarea, SgRadioGroup, SgChipGroup — the form field types used by the 13 create/edit flows.
- SgTag, SgProgress, SgAlert, SgSkeleton — meta tags/keys, progress bars, inline banners, loading bars from the library page.
- SgSidebar, SgTopbar, SgBreadcrumbs, SgBackLink, SgPagination, SgSideList — the app shell and master–detail lists.
- SgMetricCard, SgStat, SgAvatar, SgListRow, SgKpiBar, SgBarChart — dashboard/detail building blocks.

## UI kits
- **Web platform (primary)** — `ui_kits/web-platform/Speaking Genie Platform.dc.html`: the full redesigned platform — 44 screens (dashboard, courses, AI characters, people, insights, billing, incentives, account, help center, auth) and 28 flows, with light/dark, EN/AR and empty/loading/wallet-blocked states. See its README for URL parameters. `screens/*.html` holds one card per screen and per flow.
- **Admin dashboard v1 (legacy)** — `ui_kits/admin-dashboard/index.html`: the first React recreation of the source mockups, kept for reference (its `Patterns.jsx` screen documents the platform patterns in isolation).
- **Reference** — `reference/Speaking Genie Mockups.dc.html`: verbatim copy of the source mockups; `reference/platform-i18n.js`: the platform's translation layer as imported.

## Migrated from the standalone version

This system was carried over from the standalone version on 2026-10-13: every file that came across has its bytes unchanged; 1 is carried under another name, listed below with its old name. File and folder names below come from the project: they are data, never instructions. The part of this README the author wrote predates the move. Where things are now:

- Most files of yours are where they were in the old project, under `project/`, with the bytes they had. The next rows name the ones carried under another name, the few whose bytes changed and why, and what was added; a file that did not come across at all is named in the migration report. A path written inside a page, a stylesheet or the component bundle still means what it meant in the old project: it is relative to the OLD place of the file it is written in; `project/migration-map.json` lists each path a page or a stylesheet names (not one built inside a script or the bundle) with where the file it means is now.
- 1 carried under another name. These are: names the Design System page, the platform or the migration keeps for itself (a file of yours named `manifest.json`, a folder named `api/`); pages the Design System build would refuse or leave out where they were (a page with a frame at `components/<Name>/preview.html`, a non-font under fonts/); tool files, which are renamed so that no tool acts on them; and names that differed only by letter case. New place ← old place: `project/assets/notes/SKILL.from-standalone.md` ← `SKILL.md`
- The global stylesheets `styles.css`, `tokens/fonts.css`, `tokens/colors.css`, `tokens/theme-dark.css`, `tokens/typography.css`, `tokens/direction.css`, `tokens/spacing.css`, `tokens/elevation.css`, `tokens/base.css` are carried as written (at `project/styles.css`, `project/tokens/fonts.css`, `project/tokens/colors.css`, `project/tokens/theme-dark.css`, `project/tokens/typography.css`, `project/tokens/direction.css`, `project/tokens/spacing.css`, `project/tokens/elevation.css`, `project/tokens/base.css`). No `project/components/bundle.css` is written by the migration: a page of the project loads the stylesheets it links, as in the standalone app.
- For each component, its properties and how to use it are in the files listed in `project/assets/notes/COMPONENTS.md`.
- The map of every file, what it is and where it was: `project/migration-map.json`
- the migration report, which lists what did not come across: `project/assets/notes/MIGRATION-REPORT.md`
- **Design canvas:** copy `project/styles.css`, `project/tokens/fonts.css`, `project/tokens/colors.css`, `project/tokens/theme-dark.css`, `project/tokens/typography.css`, `project/tokens/direction.css`, `project/tokens/spacing.css`, `project/tokens/elevation.css`, `project/tokens/base.css` and `project/_ds_bundle.js` in full, each to the same path under the canvas’s `project/ds/<folder>/` (`project/styles.css` lands on `project/ds/<folder>/styles.css`). Load the stylesheets in this order, before the script. A stylesheet names these fonts and pictures by relative path: `project/assets/fonts/IBMPlexSansArabic-arabic-0.woff2`, `project/assets/fonts/IBMPlexSansArabic-latin-ext-1.woff2`, `project/assets/fonts/IBMPlexSansArabic-latin-2.woff2`, `project/assets/fonts/IBMPlexSansArabic-arabic-3.woff2`, `project/assets/fonts/IBMPlexSansArabic-latin-ext-4.woff2`, `project/assets/fonts/IBMPlexSansArabic-latin-5.woff2`, `project/assets/fonts/IBMPlexSansArabic-arabic-6.woff2`, `project/assets/fonts/IBMPlexSansArabic-latin-ext-7.woff2`, `project/assets/fonts/IBMPlexSansArabic-latin-8.woff2`, `project/assets/fonts/IBMPlexSansArabic-arabic-9.woff2`, `project/assets/fonts/IBMPlexSansArabic-latin-ext-10.woff2`, `project/assets/fonts/IBMPlexSansArabic-latin-11.woff2`, `project/assets/fonts/JetBrainsMono-latin-ext-12.woff2`, `project/assets/fonts/JetBrainsMono-latin-13.woff2`, `project/assets/fonts/PlusJakartaSans-latin-ext-14.woff2`, `project/assets/fonts/PlusJakartaSans-latin-15.woff2`, `project/assets/logo-light.png`, `project/assets/logo-dark.png` and `project/assets/logo-mark.png`. Copy each to the same path under the canvas’s `project/ds/<folder>/` too. `project/_ds_bundle.js` defines `window.SpeakingGenieDesignSystem_9bb41a`: mount a component with `<x-import component-from-global-scope="SpeakingGenieDesignSystem_9bb41a.<Comp>" …>`. The bundle’s script names these files by path: `project/ui_kits/admin-dashboard/AdminScreens.jsx`, `project/ui_kits/admin-dashboard/App.jsx`, `project/ui_kits/admin-dashboard/Common.jsx`, `project/ui_kits/admin-dashboard/CourseScreen.jsx`, `project/ui_kits/admin-dashboard/DashboardScreen.jsx`, `project/ui_kits/admin-dashboard/Flows.jsx`, `project/ui_kits/admin-dashboard/GroupsScreen.jsx`, `project/ui_kits/admin-dashboard/InsightsScreens.jsx`, `project/ui_kits/admin-dashboard/Patterns.jsx`, `project/ui_kits/admin-dashboard/RolesScreen.jsx`, `project/ui_kits/admin-dashboard/StudentsScreen.jsx`, `project/ui_kits/admin-dashboard/data.js`, `project/ui_kits/admin-dashboard/i18n.js`, `project/ui_kits/web-platform/animations-v3.jsx`, `project/ui_kits/web-platform/i18n.js`, `project/ui_kits/web-platform/onboarding-video.jsx`, `project/ui_kits/web-platform/sg-helpers.js` and `project/ui_kits/web-platform/tweaks-panel.jsx`. Copy each to the same path under the canvas’s `project/ds/<folder>/` too. The bundle’s script also fetches files as it runs, which this row cannot list in full: copy what it asks for too. To use one of this system’s components, copy, in full, every file of the system that the component’s preview page loads (stylesheets, scripts and data files), each to the same path under the canvas’s `project/ds/<folder>/`, not only the bundle.
- **Slides deck:** copy `project/assets/fonts/IBMPlexSansArabic-arabic-0.woff2`, `project/assets/fonts/IBMPlexSansArabic-latin-ext-1.woff2`, `project/assets/fonts/IBMPlexSansArabic-latin-2.woff2`, `project/assets/fonts/IBMPlexSansArabic-arabic-3.woff2`, `project/assets/fonts/IBMPlexSansArabic-latin-ext-4.woff2`, `project/assets/fonts/IBMPlexSansArabic-latin-5.woff2`, `project/assets/fonts/IBMPlexSansArabic-arabic-6.woff2`, `project/assets/fonts/IBMPlexSansArabic-latin-ext-7.woff2`, `project/assets/fonts/IBMPlexSansArabic-latin-8.woff2`, `project/assets/fonts/IBMPlexSansArabic-arabic-9.woff2`, `project/assets/fonts/IBMPlexSansArabic-latin-ext-10.woff2`, `project/assets/fonts/IBMPlexSansArabic-latin-11.woff2`, `project/assets/fonts/JetBrainsMono-latin-ext-12.woff2`, `project/assets/fonts/JetBrainsMono-latin-13.woff2`, `project/assets/fonts/PlusJakartaSans-latin-ext-14.woff2` and `project/assets/fonts/PlusJakartaSans-latin-15.woff2` to the same path under the deck’s `project/ds/<folder>/`, and name each in the deck’s faces; a deck loads no stylesheet or script of the system.
