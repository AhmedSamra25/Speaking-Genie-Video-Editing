# Speaking Genie — design system

Speaking Genie is a mobile language-learning app built around speaking out loud. A learner sets a
native and a target language, gets a CEFR level, and then practises: guided conversation tasks,
real-life scenario shadowing, graded stories read aloud, vocabulary and idiom drills, calls with AI
partners, and — after 20 hours of AI practice unlocks it — calls with real people through *Connect*.
Everything spoken is scored, corrected inline, and rolled up into weekly reports, error patterns,
certificates, and an employer-facing channel called *Speak To Hire*.

The product is one surface: **a student mobile app** (390×844 reference frame, iOS-style chrome).
There is no marketing site, dashboard or admin console in the material provided. The app ships
multilingual with full RTL mirroring.

## Source material

- `uploads/Speaking Genie.dc.html` — the single file supplied by the team. It is both a design-system
  document (overview, colour, typography, spacing/elevation, component library) and a screen archive:
  45 screens rendered inside a phone frame with an LTR/RTL switch, each with a title, route and
  description. Every token, component and screen in this project was read out of that file.
- No Figma link, repository or codebase was provided. No font binaries, logo files or image assets
  were provided. See **Fonts** and **Iconography** below for the two substitutions this forced.

Screens documented in the source (route in parentheses): Splash, Onboarding languages / level /
trial (`/onboarding`), Sign in, Sign up, Forgot password, Verify email, Permissions, Welcome tour,
Placement test, Home (`/`), Practicing Lab (`/tasks`), Conversation tasks, Task detail (`/tasks/12`),
Real-life scenarios (`/shadowing`), Recording with live correction (`/shadowing/record`), Vocabulary
and idioms (`/vocabulary`), Flash cards (`/vocabulary/review`), Stories (`/stories`), Story reader,
AI partners (`/ai-partners`), AI partner profile, AI call, Session feedback (`/sessions/latest`),
Session history (`/sessions`), Connect locked gate and partner list (`/partners`), Partner profile,
Messages, Schedule a call, Incoming peer call, Peer call, Reports (`/reports`), Certificates,
Speak To Hire (`/speak-to-hire`), Profile, Settings, Subscription, Help, Genie assistant (`/genie`),
Modals.

---

## Content fundamentals

**Voice.** Plainly instructional, second person, present tense. The app tells the learner what a
thing is and what it will do, then stops. No exclamation marks, no cheerleading, no jokes.

- "Practice your language skills with our AI partners. Choose a partner that matches your learning goals."
- "Your hub for guided speaking, pronunciation, and vocabulary."
- "Fluency is up. Pronunciation of consonant clusters is still the weakest area."

**Person.** "You" and "your" throughout, for both instructions and the learner's own data ("Your
progress", "Your trial has ended", "You are speaking…"). "We" appears only where the product speaks
as the company ("our AI partners"). The Genie is referred to in the third person — "the Genie
noticed", "what the Genie has logged" — never as "I".

**Casing.** Sentence case for titles, body and buttons ("Send invitation", "Review flash card",
"Build a practice set from these"). Title Case is reserved for proper feature names: Practicing Lab,
Conversation Tasks, Real-life Scenarios, Vocabulary & Idioms, Flash Cards, Speak To Hire, Connect,
AI Practice Partners, Home. Overlines and eyebrows are ALL CAPS with 0.08em tracking
("RESUME PRACTICE", "LIVE TRANSCRIPT", "TIP OF THE DAY"). Screen titles never end in a full stop;
descriptions do.

**Length.** A screen title is one to three words. A hero title is a full imperative sentence
("Describe your favourite room"). A description is one sentence, occasionally two. Card body copy
does not exceed two lines at 13px.

**Numbers are load-bearing.** Nearly every card carries a count, and it is always concrete and
formatted the same way: `2h / 10h used`, `3/18 done`, `2,350 / 3,000 XP`, `+30 XP`, `78/100`,
`23-day streak`, `15/20 hours`, `12 times`, `4.8`. Time is `3 h 48 m left` in call chrome and
`15 min` in lists. Dates are `12 Aug 2026`; times are `Today, 2:30 PM`.

**Corrections.** Feedback is phrased as said → better, never as praise or blame: "Past simple:
\"It went well. We discussed the new timeline and they agreed.\"" Errors are named by grammar rule
("Articles before nouns", "Past simple endings"), not by fault.

**Emoji.** One use only: a flag in the language switcher (🇬🇧). Emoji never appear in copy, cards,
empty states or buttons. Unicode is used for two typographic jobs: `·` separates metadata
("Today, 2:30 PM · 15 min", "Level 5 · Fluent Speaker"), `→` shows a language pair
("Arabic → English") and `•` appears as a rare inline separator.

**British/American spelling** is mixed in the source ("favourite" on Home, "favorite" in the task
list, "practise"/"practice" both). Match whichever screen you are extending rather than normalising.

---

## Visual foundations

**Palette.** Four ramps carry the product: violet **primary** (brand and every primary action),
slate **secondary** (text, borders, surfaces), fuchsia **accent** (only as the second stop of a
gradient, or a highlight — never a flat fill behind body text), emerald **success** (completion,
streaks, correct pronunciation). Supporting hues are each scoped to one job: blue for tips, reports
and "words learned"; amber for the time budget, pending states and ratings; red for errors and
corrections; orange only for streaks; light violet for scenarios and certificates; pink for the
idioms metric; indigo for stories and peer calls. Screens sit on `#f9fafb`; cards are white. Two
background colours per screen, maximum.

**Type.** Poppins for display (screen titles, card titles, stat numbers) at 600/700 only; Inter for
everything else at 400–700. Two ladders coexist: the documentation surface uses the Tailwind names
(30/24/20/18/16/14/12), the app itself uses a denser mobile ladder — 26 hub title, 24 greeting,
22 screen title, 19 hero, 18 section, 15 row title, 14 body, **13 is the single most common size**,
12 metadata, 11 pills and values, 10 tab labels. Body copy never drops below 13px on screen.

**Spacing and layout.** 4px base grid, with 14/18/22/26 used verbatim where the source uses them —
do not snap those. Screens have 20px gutters, 24px between major blocks, 12px between cards in a
group, 18px inside a card (22px on documentation and profile cards), and 110px of bottom padding to
clear the floating tab bar. The status bar (50px), notch and home indicator are fixed; the app header
is sticky with a downward protection gradient; the tab bar floats over an upward one. Every tappable
control is at least 44px.

**Corner radii.** 6px micro controls, 8px buttons and filled inputs, 10px search fields and nav
items, 12px chips and icon tiles, 14px compact cards, **16px is the default card and the tab bar**,
20px large cards and the transcript panel, 24px hero cards, 26px modals, 32px on the bottom corners
of gradient auth headers, 999px pills and avatars. Device frame: 56px outer, 46px inner.

**Cards.** White, 1px `secondary-100` border, 16px radius, 18px padding, `--shadow-card`
(`0 4px 6px -2px rgba(15,23,42,0.05)`). Variants: sunken slate-50 rows inside a card; a
violet→fuchsia tinted wash with a `primary-200` border for recommendations and Genie notes; a
red→orange wash with a `danger-200` border for the "Track your errors" prompt; a 2px-border
hover-reactive card for the practice modes. Never a coloured left border.

**Shadows.** Four levels and three coloured glows: `--shadow-hairline` for flat list cards,
`--shadow-card` for standard cards, `--shadow-lift` on hover, `--shadow-tabbar` under the floating
nav, plus `--shadow-button-primary` (a violet-tinted button shadow), `--shadow-cta` (a strong violet
glow under full-width CTAs) and `--shadow-hero` under gradient heroes. Modals use
`0 30px 60px -20px rgba(15,23,42,0.5)`; the device frame uses `--shadow-phone`. One inner shadow
exists: the inset certificate track.

**Gradients.** Used for identity, not decoration. `135deg` violet→fuchsia is the brand gradient
(hero cards, avatars, level discs, XP bars); `90deg` deep violet is the Speak To Hire banner; a
radial white→violet orb is the Genie mark; full-screen `180deg` gradients back the immersive states
(splash, AI call, peer call, Genie, welcome). Tinted card washes are 135deg at 50-level stops.
No bluish-purple "AI gradient" clichés beyond the brand pair.

**Imagery.** There is none. No photography, no illustration, no stock art — identity is always two
initials on the brand gradient, and the only drawn elements in the entire product are the Genie orb,
the audio waveform bars and the progress rings. Where a screen needs visual weight it uses a gradient
card, not an image. Colour temperature is cool throughout; the one warm surface is the story reader's
paper (`#fffdf9`).

**Transparency and blur.** Sparingly and only in three places: blurred white discs
(`rgba(255,255,255,0.1)`, `blur(24–48px)`) bleeding off the corners of gradient cards and immersive
backgrounds; glass chrome on dark surfaces (`rgba(255,255,255,0.12)` pills and call controls, a
`rgba(15,23,42,0.35)` transcript panel); and the tab bar's `rgba(255,255,255,0.97)` card. Protection
gradients, not scrims, separate content from fixed chrome — a scrim appears only behind a modal
(`rgba(15,23,42,0.55)`).

**States.** Hover darkens by one ramp step (primary-600 → 700, secondary-200 → 300) or lifts a card's
shadow; outlined controls hover to `#f9fafb`; bordered cards hover their border to `secondary-300`.
Disabled is 50% opacity, never a colour change. Focus is a 2px `primary-500` ring on filled fields
and a `primary-400` border on outlined ones. Selection is a 2px `primary-500` border plus a
`primary-50` fill (level cards, plans, slots). Active navigation is a `primary-50` fill with
`primary-600` content and weight 700. There are no press-scale effects and no ripple.

**Motion — the app's baseline.** The shipped app is deliberately still. Three looping animations and
nothing else: `sgGlow` (2.4s, the orb breathing), `sgBar` (0.9s, waveform bars), `sgFill` (3s, the
splash progress line). Interaction transitions are 150–200ms on `cubic-bezier(.4,0,.2,1)` for
background, border and shadow; progress bars animate their width at 300ms. No parallax, no ripple, no
press-scale. Everything in the next section is **additive and opt-in** — a static screen still opens
static.

### Motion system (extended)

Motion is earned by three situations and nothing else: **waiting** (a call connecting, a report being
generated), **a value arriving** (a score, a gain, a freshly filled track), and **a genuine first**
(a new best, a level up, a certificate). Anything else stays still.

- **Easings** — `--ease-out` for entrances, `--ease-standard` for state changes, `--ease-spring`
  only for the flash-card flip and the active tab-icon nudge. No easing curve overshoots on text.
- **Durations** — 420ms one item entering, 700ms a bar or track growing, 900ms a number ticking,
  1200ms a score ring filling, 1800ms a celebration; siblings stagger by `--stagger-step` (70ms).
  Screen transitions are 220ms (fade between tabs) or 300ms (a call handing off to its report).
- **Loops** — `sgRipple` (2.2s) for connecting rings and the listening orb, `sgSpin` (1.1s) for the
  analysing ring, `sgBlink` for a time budget under 15%, `sgDots` for an animated status line.
  The three original loops are unchanged.
- **Sequences** — a report reveals in one order every time: score ring fills → speaking-time bars grow
  left to right → skill tracks fill, staggered → error patterns reveal one by one. Never two
  sequences at once on a screen.
- **Depletion reads as scarcity.** Session time and the 10-hour allowance always animate downward and
  turn `danger-500` in the last 15%; elapsed time is never animated.
- **Celebration is rationed.** Confetti fires for a first, not for routine completion — a finished task
  is still just a green check.
- **Reduced motion** — `tokens/motion.css` ships a `prefers-reduced-motion: reduce` block that
  collapses all animation and transition durations, and `CountUp`, `ScoreRing` and `Celebration`
  each check the query themselves and jump to their end state.

**RTL.** Every screen ships in both directions. Direction-indicating icons (chevrons, arrows, back)
mirror; media controls, avatars, progress rings and waveforms do not.

### Fonts — substitution flagged

No font binaries came with the source, which loads Poppins and Inter from Google Fonts. This system
does the same (`tokens/fonts.css` imports the same two families and weights), so there are no
`@font-face` rules or self-hosted files. **If you have licensed web font files for Poppins and Inter
(or house cuts), send them and they will be installed as `@font-face` with the binaries shipped to
consumers.**

---

## Iconography

**Lucide is the icon system**, stated outright in the source's "Brand at a glance" and used for every
glyph in all 45 screens at the default stroke width of 2. No icon font, no sprite sheet and no icon
SVGs were included in the source, so the set is loaded from the pinned CDN build
(`unpkg.com/lucide@0.474.0`) by the `Icon` component and by the UI kit page. **This is a CDN link
rather than copied assets only because no icon files were provided — if your repo vendors Lucide (or
a customised subset), send it and it will be moved into `assets/`.**

- Sizes: 12–14 inline with text, 16 in list rows and buttons, 18–20 in headers and CTAs, 22–30 in
  feature tiles and empty states, 36 inside a modal's badge.
- Colour is always `currentColor`, inherited from a tinted disc or square: a `primary-100` circle with
  a `primary-600` glyph is the default pairing; metric tiles and practice modes each use their hue's
  50/100 tint with the 600 glyph.
- Glyphs in regular use: `house`, `graduation-cap`, `bot`, `users`, `chart-bar` (the five tabs),
  `mic`, `phone`, `phone-off`, `volume-2`, `play`, `sparkles`, `flame`, `award`, `trophy`, `star`,
  `check`, `check-circle`, `x-circle`, `alert-circle`, `info`, `clock`, `calendar`, `search`,
  `settings`, `bell`, `globe`, `book-open`, `book-marked`, `message-circle`, `target`, `zap`,
  `trending-up`, `signal`, `credit-card`, `chevron-left/right/down`, `arrow-right`, `eye`, `lock`,
  `plus`, `minus`, `log-in`, `user`, `mail`, `file-text`, `component`, `palette`, `type`, `box`.
- Emoji are not an icon system here — the only emoji in the product is the 🇬🇧 flag in the language
  switcher. Never substitute emoji or hand-drawn SVG for a Lucide glyph.

**No logo.** The source references `assets/sg-mark.png` and `assets/sg-mark-white.png`, but neither
file was supplied, so no mark exists in this system and none was drawn. Wherever a logo belongs, set
the name in Poppins 700 (letter-spaced 0.04em and uppercased on the splash, as in the source) or use
the `GenieOrb`. **Send the two mark files and they will be added to `assets/` and wired into the
components and kit.**

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The one file consumers link — `@import`s only |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `semantic.css`, `motion.css` (the three keyframes live here) |
| `components/core/` | Button, IconButton, Card, Icon |
| `components/forms/` | Input, SearchInput, Switch, FilterChip, SegmentedTabs |
| `components/feedback/` | Alert, Pill, ProgressBar, Modal |
| `components/identity/` | Avatar, AchievementBadge |
| `components/patterns/` | HeroCard, BottomNav, GenieOrb, StatTile, ListRow, PhoneFrame |
| `components/motion/` | Waveform, TimeBudgetRing, ConnectingState, GeneratingState, ScoreRing, BarChart, CountUp, Reveal, Celebration, FlipCard, ViewTransition |
| `guidelines/` | 19 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `ui_kits/mobile_app/` | Click-through student-app recreation — see its `README.md` |
| `templates/app-screen/` | Starting template: a phone-framed app screen with header, content and tab bar |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent-skill entry point |

### Components

Each component directory holds `<Name>.jsx`, `<Name>.d.ts` (props contract), `<Name>.prompt.md`
(when and how to use it) and one `@dsCard` HTML showing its states.

`Button`, `IconButton`, `Card`, `Icon`, `Input`, `SearchInput`, `Switch`, `FilterChip`,
`SegmentedTabs`, `Alert`, `Pill`, `ProgressBar`, `Modal`, `Avatar`, `AchievementBadge`, `HeroCard`,
`BottomNav`, `GenieOrb`, `StatTile`, `ListRow`, `PhoneFrame`, `Waveform`, `TimeBudgetRing`,
`ConnectingState`, `GeneratingState`, `ScoreRing`, `BarChart`, `CountUp`, `Reveal`, `Celebration`,
`FlipCard`, `ViewTransition`.

The source's own component library page defines Buttons, Inputs, Avatars, Achievement badges, Status
pills, Alerts, the Audio button, Progress, the Hero card and Bottom navigation — all of those are
here under those names (`IconButton` covers the audio button; `Pill` covers status pills).

**Intentional additions.** These are not on the source's library page but appear repeatedly across
its screens, so they are componentised rather than re-implemented per screen:

- `Card` — the white surface every screen block sits in.
- `Icon` — a wrapper so Lucide names, sizes and stroke width stay consistent.
- `SearchInput` — the search row above every list.
- `Switch` — the live toggles in Settings, Speak To Hire visibility and live captions.
- `FilterChip` — task, level and online filters.
- `SegmentedTabs` — Connections/Discover and Vocabulary's two tabs.
- `Modal` — the level-up, trial-ended and time-expired dialogs.
- `StatTile` — the three-across metric grid on Home and Profile.
- `ListRow` — Settings, activity and session rows.
- `GenieOrb` — the assistant mark; the product has no logo file, so this and the wordmark carry the brand.
- `PhoneFrame` — the 390×844 shell the source presents every screen in.

**Motion components** (`components/motion/`) are also additions: the source describes these moments in
prose — a breathing orb, a reactive waveform, a shimmering progress line, a running level estimate,
a session score — but ships no implementation of them. `Waveform`, `TimeBudgetRing`,
`ConnectingState`, `GeneratingState`, `ScoreRing`, `BarChart`, `CountUp`, `Reveal`, `Celebration`,
`FlipCard` and `ViewTransition` make each one reusable so screens don't hand-roll timing.
`ProgressBar` gained `animate`/`delay`, `GenieOrb` gained `rings`, and the tab bar's active icon
now nudges on `--ease-spring`.
