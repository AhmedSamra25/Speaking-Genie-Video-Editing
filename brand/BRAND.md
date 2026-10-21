# Speaking Genie — video brand rules

Derived from the Speaking Genie Design System
(https://claude.ai/artifact/3PKgYp7jyfARkzvevGHGHU). The design system is the source of
truth; this file translates it to video. Rules marked **(video)** are additions that the
design system does not cover — review them before shipping a campaign.

## Look

- **Quiet, premium, structured.** Hierarchy comes from spacing, weight and alignment;
  colour is the last tool reached for.
- **Canvas** `#F7F8FB` with white "windows" (22px radius, 1px `#E7E9EF` border) — the
  look of the published onboarding video. Dark variant: canvas `#0B1020`, surface `#121A2B`.
- **One accent:** Purple 600 `#6D28D9` (dark theme `#7C3AED`, purple text `#A78BFA`).
- **Gradient** `linear-gradient(135deg, #8B5CF6, #4C1D95)` is reserved for the logo mark
  and avatars. Never on backgrounds, cards or title text.
- **No** stock textures, patterns, glassmorphism, blur backgrounds, emoji, exclamation
  marks or blue-purple gradient washes.
- Status colours (green/amber/red/blue) only mean status — never decoration.

## Type

| Role | Font | Size @1080p | Weight |
| --- | --- | --- | --- |
| Hero / title card | Plus Jakarta Sans | 76px, -0.02em | 800 |
| Body / subtitle | Plus Jakarta Sans | 30px | 500 |
| Overline | Plus Jakarta Sans | 22px caps, 0.1em | 700, purple |
| Metrics | Plus Jakarta Sans | 120–160px, tabular nums | 800 |
| Identifiers | JetBrains Mono | 26px | 500 |
| Arabic (any role) | IBM Plex Sans Arabic | same size, line-height 1.7, no tracking | 600–700 |

Scale everything by `height / 1080` for other resolutions.

## Copy

Sentence case. Verb + object CTAs ("Start a free pilot", "Book a demo"). Concrete numbers
("↑ 12 pts fluency in 6 weeks"). Middle dot ` · ` joins metadata. Currency "E£". Arabic is
Modern Standard Arabic for on-screen text; Egyptian Arabic is fine for voice-over.

## Motion **(video)**

- Calm. Enter: 18 frames (0.6s @30fps) fade + 24px rise, ease-out
  `cubic-bezier(0.22, 1, 0.36, 1)`. Exit: 12 frames fade. **Never bounce or overshoot.**
- Stagger related elements by 4–6 frames. Hold readable text ≥ 1.5s + 0.06s per character.
- Transitions between shots: hard cut by default; 0.4–0.6s cross-dissolve between scenes;
  fade-through-canvas for chapter breaks. Motion transitions, used sparingly to mark a turn in the story:
  a gentle zoom-through (outgoing +25%, incoming settles from +15%) or a push, 0.3–0.4s, eased, with real motion
  blur and an optional soft whoosh. No wipes, spins, flips, glitches or bounces. The only shaped reveals are the
  Enablement dome reveal and capsule wipe (allowed as brand devices, 20 Oct 2026), in the Enablement look only.
- Product screens never sit still: a slow drift (≤ 4% over the shot), eased camera travel between points, a ring
  that draws itself on, and a touch indicator that taps the button the voice mentions.

## Captions **(video)**

- Dark pill (`#0F1729` at 86%), 14px radius, white text. EN: Plus Jakarta Sans 600 44px;
  AR: IBM Plex Sans Arabic 600 46px, RTL. Max 42 characters per line, 2 lines.
- Bottom safe margin 96px (16:9) / 360px (9:16, clears platform UI).

## Logo

- `logos/logo-light.png` on light canvas, `logos/logo-dark.png` on dark. Width follows
  1291×284. Minimum height 40px at 1080p. `logos/logo-mark.png` for the mark alone.
- Never recolour, stretch, outline or place the lockup on footage without a solid plate.

## Audio **(video)**

- Deliver at **-14 LUFS integrated, -1 dBTP** (YouTube/Instagram/TikTok/LinkedIn).
- Music sits ~18 dB under voice and ducks automatically while someone speaks.
