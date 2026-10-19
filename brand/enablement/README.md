# Speaking Genie — Enablement Design System

Speaking Genie is a spoken-language practice product. A learner answers a prompt out loud,
the AI partner waits for the sentence to finish and hands it back rewritten, repeated slips
become the next day's drill, and a human partner unlocks once they can hold their end of a
conversation. English is the main language; Spanish, German, French and Italian are offered
alongside it.

It is sold two ways, and that split runs through everything in this system:

**Individuals** buy the practice tool directly. They are learners who need to speak — for a
job, a promotion, a move. They are reached on **TikTok, Instagram and Facebook**, in
**Egyptian colloquial Arabic**, and every post ends in an app install.

**Organisations** buy a partnership. Corporates upskill their teams; language learning
centres add Speaking Genie to what they sell, which earns them revenue and keeps students
practising between classes. They are reached on **LinkedIn and the website**, in
**simplified formal Arabic or English**, and the material ends in a conversation — a
walkthrough, a pilot, a partnership — never a download button.

That is the whole system in one sentence: same product, same purple, two accents, two
voices, two closes.

## Products and surfaces

| Surface | Where it lives | Track |
| --- | --- | --- |
| Social posts and carousels | `ui_kits/social/` | Both, one accent each |
| Marketing website | `ui_kits/website/` | Business-led, individual pages inside |
| Sales, investor, partner and kickoff decks | `ui_kits/slides/` | Both |
| App store listing and screenshot sets | `ui_kits/app_store/` | Individual |
| Learner app + manager console screens | `ui_kits/app/` | Shared with the product system |
| In-app flows, empty states, modals | not here | Product system |

## Sources

- `uploads/Enablement Design System.dc.html` — a 4,425-line documentation artifact covering
  themes, colour, typography, charts, slide layouts, web blocks, product screens, app store
  assets and motion. Originally shared as
  `https://claude.ai/code/artifact/ee356e86-c5a9-4d0b-94a2-52ed85a77373`, which is
  auth-gated and could not be fetched directly.
- **Eight of the brand's own social posts** (`uploads/*.jpg`) — the ground truth for the
  logo, the real palette, the dome device, the capsule device, the Arabic treatment and the
  two-track accent split. Where the artifact and the posts disagree, **the posts win**, and
  the tokens were re-sampled from their pixels.

Extracted from the posts into `assets/`: `logo-lockup-white.png`, `logo-mark-white.png`,
`badge-app-store.png`, `badge-google-play.png`. See **Gaps** for what is still missing.

---

## Content fundamentals

**The voice is a practitioner's, not a marketer's.** It says what the product does in the
order it happens, attaches the number to its method, and stops.

**One claim per surface.** A post, a slide, a section makes a single point. If a post needs
a second headline it is two posts.

**The close depends on the audience.** Individual-track copy ends in an install ("حمل
التطبيق دلوقتي") with the two store badges. Business-track copy ends in a conversation
("اتكلم معنا", "Book a walkthrough"). Never put store badges on a partner post — a
decision-maker is not the installer.

**Second person to learners, third person to buyers.** Learner copy is "you" and imperative.
Business copy is about "your team", "your students", "your centre" — never "you" for the
manager, never "we" for the company outside a quote or an ask.

**Sentence case in Latin copy.** The only uppercase is the 11px kicker (0.1em tracking), the
wordmark, and the heavy Latin display used on Myth-or-fact and offer posts (WHY NOT YOU?).

**Urgency is rationed.** Deadlines, "last places", countdowns and prize figures belong to
challenge posts only. Everywhere else the tone is calm.

**Numbers carry their method, one size down.** `78%` sits above "Reach B1 in 12 weeks" and
"Cohort of 1,240 learners". A figure without its method does not ship.

**Corrections are rewrites, not rules.** Wrong-then-right, in that order, as whole
sentences: "It go well. We discuss the new timeline." → "It went well. We discussed the new
timeline." Never "use the past simple".

**No emoji, anywhere.** Unicode is used only where it is typographically correct: ★ ratings,
× multipliers, − true minus in negative deltas, · as the metadata separator. Flags appear
only inside an explicit language list, never as decoration.

**Customer names appear only with written permission.** Learners are initials, never
photographs; named public people are photographs, never initials.

Verbatim examples from the posts:

> ماتضيعش وقتك · حمل التطبيق دلوقتي · بص تحت على الشمال
> علشان كده لازم تلحق آخر الأماكن في تحدي Speak to Hire قبل ما Round 1 تقفل
> اللغة مهمة جداً في أي شغل — لكن مش كل الموظفين بتعرف تتكلم اللغات دي
> هنعمل اتفاق مع بعض، والابليكيشن هيبقى متاح للموظفين عندك
> WHY NOT YOU? · Myth or Fact · About Speak to Hire Challenge

---

## Arabic typography

Arabic is the primary language of the social work, so it gets its own rules rather than
being treated as translated Latin.

**One family: Cairo.** Weight does the work — 900 for a one-line hook, 700 for headlines,
600 for leads, 400 for body. **This is a substitution.** The brand's real Arabic face was
not supplied; Cairo is the closest match on Google Fonts for the flat-terminal geometric
Kufi in the posts. Send the real font files and it is a one-line change in
`tokens/fonts.css`.

**Never set Arabic in a Latin family, and never let a Latin stack pick up Arabic glyphs.**
Always name an Arabic family explicitly. `[lang="ar"]` and `[dir="rtl"]` do this
automatically in `tokens/base.css`.

**Arabic needs more leading and zero tracking.** The shipped pairs are 64/1.38 display,
40/1.45 title, 22/1.75 lead, 17/1.9 body, 14/1.6 label. Descenders and hamzas need the room.
`letter-spacing` on Arabic breaks the joins — it is never correct. `text-transform` does
nothing and signals the copy was handled as Latin.

**Direction is set once, on the container.** `<div dir="rtl" lang="ar">`, then logical
properties throughout: `padding-inline-start`, `margin-inline-end`, `text-align: start`,
`border-start-start-radius`. Never `left`/`right`.

**What mirrors:** reading order and alignment, icon-before-label order, chevrons and back
arrows, progress fill direction, avatar clusters, table column order.
**What never mirrors:** the lockup (top-centre, unflipped), the dome scrim, the store
badges, Latin product names, numerals, clock and playback icons, photography.

**Kashida elongation is a typographic decision, not a text one.** The posts stretch a
connecting letter with tatweel (`ـ` U+0640) so two stacked lines end flush — "هيبقــى
متــاح للمــوظفــين عنــدك". Rules: stretch a mid-word connector only, never a
non-connecting letter (ا د ذ ر ز و), one or two lines per post, and keep the unstretched
string in the caption, the alt text and anything a screen reader or search engine will read.
It is hand-set by a native speaker, never automated, and never used to paper over a bad
line break.

**Mixed Arabic and Latin.** Product names stay Latin and stay untranslated — Speaking Genie,
Speak to Hire, App Store, Google Play, the CEFR levels. The Arabic article joins them
directly ("الـ Customer service"). Numerals are Western with a dot thousands separator
("35.000 جنيه"). Set the Latin run in Poppins or Inter; Cairo's Latin is not the brand's
Latin.

**Voice by audience.** Individuals get Egyptian colloquial, with its particles intact
(دلوقتي، بص، علشان، ماتضيعش). Business gets simplified formal Arabic — short sentences, no
dialect, addressed to the decision-maker about their people.

---

## Visual foundations

**Colour.** Purple is the brand and the ground — `--purple-700` #4a0c79 flat,
`--purple-950` #1c0136 deep, `--purple-400` #8710aa as the glow inside vignettes. On top of
it sit exactly two accents, and a surface uses one, never both: **green** `#10c185` for the
individual track, **orange** `#e5831a` for the business track. Slate is text and surfaces on
light web and product screens. Green, amber and rose also serve as data colours in product
UI, where green means a result rather than an audience.

**Grounds.** Five, and every post and slide sits on one: Flat (#4a0c79), Dome (radial from
the top centre — the default), Deep, Night (business track, product screenshots), Glow (a
single lit object centre-frame). Every one clears 4.5:1 for white body text at its lightest
point, so copy never needs a scrim.

**Business-track decks are light.** Client feedback on the L&D sales deck retired every full
dark slide (Night, Glow, Deep and the #0b1020 quote slide) from business decks. Purple stays
through three named grounds, used by fit rather than rotation:

- **Lilac haze** — `radial-gradient(120% 90% at 50% 0%, #f6f1fb 0%, #ece0f7 60%, #e4d3f3 100%)`,
  ink #1c0136 / #3d096d with the accent word in #4a0c79, a 55% white dome off the top edge,
  solid white cards (one may be solid #4a0c79). Covers, timelines, dashboards.
- **Purple frame** — #4a0c79 section with 56px padding around a white 36px-radius panel
  holding everything. No footer. Statements and testimonials.
- **Split panel** — an ≈820–880px #4a0c79 panel on the left with the white lockup and a white
  headline (accent phrase #ff8e31), #f6f1fb or white on the right. Alternate covers, section
  openers.
- **Full-purple close** — final slide only: solid #4a0c79, a 7% white circle off the
  top-right, a ≈136px stacked Poppins headline with the last line orange, a white primary and
  a ghost CTA, and a white contact strip along the bottom.

Light content slides alternate white #fff and paper #fbfaf8, with lilac #f6f1fb as a third
tint. The only dark surface allowed is product UI inside a device — the in-call screen —
because that is how the app looks. Individual-track and social grounds are unchanged.

**The dome.** A white circle at 7–10% opacity, hung off the top edge and centred on the
lockup, its curve crossing about a fifth of the way down. It is on every single post and it
is the reason the feed reads as a set. One per post, never tinted, never bordered.

**The capsule.** A hairline white outline (55%) over a 10% white fill with a small blur,
wrapped around the one phrase that must be read. Ink is white when the capsule is an
instruction and the track accent when it is the punchline. Exactly one per post.

**Photography is never used untreated.** It always goes through the track overlay — purple-to-
night for individuals, warm orange over night for business — which is what makes a stock-
looking office shot read as Speaking Genie. Direction: cool purple grade, one subject,
mid-shot, looking at camera; or a single lit object on a dark ground; or a 3D render for
seasonal work. Copy sits in the darkest third and never over a face. No collage, no warm
daylight on the individual track, no untreated stock.

**Type.** Poppins for Latin display (500–800), Inter for Latin interface and body, Cairo for
all Arabic, Instrument Serif for editorial figures and pull quotes in decks and on the site.
**Business decks use no serif and no italics** — Instrument Serif was rejected as "not
professional". Display type, figures and statistics are Poppins 600–700 at −0.02 to
−0.035em; body and UI stay Inter; timers are Inter with `font-variant-numeric: tabular-nums`,
never monospace. Post scale, quoted at 1080×1350: 82 display, 58 title, 46 capsule, 34 lead, 24 footnote —
and post type is authored in `cqw` so one layout serves 4:5, 1:1 and 9:16. Slide scale at
1920×1080: 96/64/34/28, nothing below 28px — phone-mock internals alone may drop to 24px, and
nothing anywhere goes below 24px. Document scale: 40/26/18/15/13/11.

**Spacing.** A 2px base, with the odd values the source uses kept verbatim rather than
snapped to a grid (5, 7, 9, 11, 13, 19, 22, 26, 34). Panel 24, inner 20, tile 16, web block
38/34. Post padding is 5cqw top, 7cqw sides, 6cqw bottom. Content caps at 1000px, prose at
660px, a lead sentence at 580px.

**Corner radii.** Chips, capsules and pills 999px · buttons and inputs 12 · small cards
14–16 · panels 18–20 · post and slide frames 14–16 · phone bezels 22–34 · store icon plate
22%.

**Cards.** A 1px hairline plus a very faint lift (`0 1px 2px rgba(15,23,42,0.05)`) and
nothing else. Never a heavy border and a shadow together, never a coloured left border,
never an accent stripe. Three levels: panel (white, 18px), inner (surface tint, 16px), tile
(14px).

**Borders.** One width, 1px, in four values: #f4f6fa rows, #f1f5f9 hairlines, #e2e8f0 card
and input edges, #c9a6e8 when selected. Device bezels (5–10px slate-900) and the 0.3cqw rule
above a slide metric column are the only exceptions.

**Shadows.** The card hairline lift; a purple glow under primary buttons only; a long low
slide and device shadow (`0 18px 40px -26px` / `0 20px 40px -24px`); a dark-theme variant.
No inner shadows anywhere.

**Transparency and blur.** Only on purple, night and dark grounds, where surfaces become
`rgba(255,255,255,0.09–0.11)` with a matching white border and `backdrop-filter: blur(6px)`.
On light surfaces every fill is opaque — alpha-muted text fails contrast and reads as
unfinished.

**Motion.** Five tokens and everything ships on one of them: 120ms `cubic-bezier(0.4,0,0.2,1)`
for hover and focus; 240ms `cubic-bezier(0.22,1,0.36,1)` for card and text entrances; 420ms
for slide transitions; 900ms for bars, rings and counters; 2400ms `ease-in-out` infinite for
the listening orb and live badges. Soft ease-out, no bounce, no spring. Entrances rise 14px
and fade. A slide builds in four beats: kicker, headline, evidence, ask.

**Hover and press.** Hover changes background or border, not opacity and not size. Links go
purple-700 → purple-900. There is no scale-down press and no ripple; the press state is the
hover state held. Disabled drops to 45% with `cursor: not-allowed`.

**Layout.** Documentation and console surfaces use a 232px sticky rail with content capped
at 1000px. The site uses a sticky translucent header (`rgba(255,255,255,0.92)` + `blur(10px)`)
over full-bleed sections capped at 1100px. Slides and posts are fixed-ratio frames with
`container-type: inline-size`; nothing inside them uses viewport units.

**Protection.** White type sits directly on the grounds at full opacity — no scrim needed.
Where a ground is light or busy the pattern is a **white capsule** or a white plate, never a
protection gradient or a dark veil.

---

## Logo usage

- **Light grounds:** `assets/logo-on-light.png` — purple mark, grey "SPEAKING", purple "GENIE".
- **Purple grounds:** `assets/logo-lockup-white.png` only. Never an on-dark lockup on purple;
  its dark mark disappears.
- **Slide footer:** logo 34px high bottom-left, slide number bottom-right in 28px #94a3b8.
  Framed slides drop the footer.

---

## Calls on screen

The product is a normal voice call, and the call screen is never transcribed. It shows only a
timer pill with a green live dot, an optional "Task goal" card, the AI partner's portrait in a
ringed circle, a name pill ("Karim · Client"), the status ("Listening…" / "Speaking…"), a
waveform and the control pill (speaker, mic, red end-call) — `CallScreen`. Speech bubbles,
transcript lines and live corrections never appear on it. Corrections appear after the call on
`SessionFeedback`: score ring, three skill bars, one "Try saying" rewrite.

Partner portraits are head-and-shoulders on neutral grounds, cropped consistently:
`assets/partner-2.png` (Karim, client) and `assets/partner-1.png` (Emma).

---

## Iconography

**Two sets, and one of them is missing.**

**Post line-art — not supplied.** The partner posts use a thin-stroke outlined set: a figure
with sparkle accents, a globe carrying two scripts, a phone with chat bubbles. Roughly 2px
stroke on a ~96px box, single colour (white or orange), small star flourishes. It is **not**
Lucide. No approximation has been drawn here; the slots are marked as needing SVGs and fall
back to Lucide in the kit.

**Product UI — Lucide, vendored.** The documentation artifact used Lucide glyph names
throughout but shipped no files, so Lucide 0.544.0 is the substitute. The 33 glyphs the
system actually uses are vendored into `assets/icons/*.svg` and inlined as real SVG by
`components/core/Icon.jsx` — stroked in `currentColor`, no CSS mask, no CDN, works
offline. This is deliberate: a cross-origin CSS mask is dropped by DOM-capture
rasterisers, so the earlier mask-based version exported every icon as a solid colour block
in PNG, PPTX and PDF. `chart-bar` is aliased to `bar-chart-2`; an unknown name renders an
empty box rather than a mystery block. Stroke only, 2px, 10–18px inline, 26–30px for a
thumbnail or the listening orb, almost always inside a tinted plate — a 999px circle at
16–22px for inline ticks, or an 8–12px rounded square at 26–40px for feature and session
tiles.

**Never:** emoji, PNG icons, icon fonts, hand-drawn approximations of a real icon set, or an
icon above 30px (past that the system uses an illustration or a real UI fragment).

**Platform marks are the exception.** `SocialRow` and `VideoLink` draw the LinkedIn,
Instagram, Facebook and YouTube marks in their own colours, always as real links.

---

## Business commercial framing

- Frame cost as an **investment per team member**, never as savings — the buyer does not
  already spend the money.
- Standard assumption: 10 practice hours × 100 EGP/hour = **1,000 EGP/month** per member;
  3,000 EGP over 3 months, 12,000 over a year, about 45 EGP per working day.
- **Value created** is the smaller of two sources, each shown with its calculation: hiring
  premium avoided (a fluent hire costs ~2× salary; upskilling a 10,000 EGP/month employee
  avoids up to 10,000/month) and international deals (one extra 30,000 EGP deal a year =
  2,500/month). Value counts from month 2.
- ROI = (value − investment) ÷ investment: 67% at 3 months, 129% at 12 with the defaults.
  Salary, deal value and team size are deck props, never hard-coded.
- Urgency, calmly: "Every month you wait, a team of 20 misses 200 practice hours."
- Human tutors appear only in comparison, at ~$15/hour converted at a rate stated on the slide
  (default 50 EGP/$). Pricing may show 60–120 EGP/hour; the ask names one concrete next step.

**Copy rules confirmed by the L&D deck.** Third person to the buyer about "your team"; "we"
only on the next-step and close slides. Every number carries its method one line below
("All B2B clients, June 2026"). Mock data is labelled "Illustrative data" or "Sample".
Product names stay Latin. No emoji. Sentence case, except the uppercase kicker.

---

## Gaps and substitutions

1. **Arabic font is substituted.** Cairo stands in for the brand's real Arabic face. Send the
   files.
2. **Latin fonts load from CDN.** Inter, Poppins and Instrument Serif are all Google Fonts,
   so no substitution was needed, but `tokens/fonts.css` is an `@import` rather than
   `@font-face` with local binaries — the compiler therefore reports zero fonts. Send woff2s
   to self-host.
3. **The logo is a raster extraction.** `assets/logo-lockup-white.png` and
   `logo-mark-white.png` were keyed off a flat purple post at 3×, so they are good to about
   120px tall. Vector originals are needed for print and large formats, along with any
   non-white variant.
4. **The post line-art icon set was not supplied** (above). The vendored Lucide set covers
   product UI only; those three partner-post slots still fall back to it.
5. **No photography is stored.** Cards and kits use labelled hatched fills as stand-ins.
6. **No customer logos were supplied**, so `LogoWall` typesets names in plates.
7. **Component inventory was derived**, not declared. The documentation artifact inlines its
   styling rather than exposing a library, so the primitives below were pulled from its
   recurring patterns; the brand group was pulled from the posts. `Icon`, `Card` and
   `Kicker` are consolidations with no single counterpart in the sources.
8. **`logo-on-light.png` is a recolour** of the white raster lockup (mark and GENIE #4a0c79,
   SPEAKING #64748b). Replace with the vector original when supplied.
9. **Partner portraits are stand-ins** cropped from the app's onboarding art. Request a
   business persona set: five to eight professional head-and-shoulders portraits on neutral
   grounds.
10. **Testimonial photos were not supplied.** `TestimonialCard` shows a lilac disc until local
    files are added.

---

## Index

- `styles.css` — the single entry point consumers link. `@import` lines only.
- `tokens/` — `fonts.css`, `colors.css`, `themes.css`, `typography.css`, `spacing.css`,
  `radius.css`, `shadows.css`, `motion.css`, `base.css`.
- `guidelines/` — specimen cards across Colors, Type, **Arabic**, Spacing, Motion, Brand,
  Product and Reference. Start with **`company-brief.html`** — the printable reference
  document holding every verified fact, the feature inventory, approved and forbidden
  messaging, and the source conflicts still open.
- `components/` — the reusable primitives, below.
- `ui_kits/` — full-surface recreations, below.
- `templates/` — starting folders a consuming project can copy: `pitch-deck/`,
  `landing-page/` and `corporate-ld-deck/`.
- `assets/` — the extracted lockup, mark and store badges, the two QR codes, plus
  `icons/` (34 vendored Lucide SVGs).
- `SKILL.md` — Agent Skills front matter, so this folder works as a Claude Code skill.

### Components

`brand/` — **Lockup**, **ArcScrim**, **CapsuleLabel**, **SwipeChevrons**, **StoreBadges**,
**QRCode**, **ArabicHeadline**, **PostFrame**

`core/` — **Icon**, **Button**, **Chip**, **Card**, **Kicker**, **Stat**, **ProgressTrack**,
**Avatar**, **AvatarCluster**, **LevelPill**, **Field**, **Waveform**

`charts/` — **BarChart**, **GroupedBarChart**, **LineChart**, **DonutChart**,
**FunnelChart**, **StackedBar**, **ComparisonMatrix**, **TrendTable**

`web/` — **SiteNav**, **Hero**, **FeatureCard**, **StatBand**, **PricingTier**, **FaqItem**,
**ResourceCard**, **LeadForm**, **SiteFooter**, **LogoWall**, **IntegrationCard**

`site/` — **MegaNav**, **SectionHeader**, **SourcedStat**, **BrowserFrame**, **DashboardPreview**,
**ProcessSteps**, **VideoCard**, **ModelCard**, **FeatureTable**, **Testimonial**, **RoiCalculator**,
**CtaBand** — the full-website set, built from the speakingenie.com audit
(`guidelines/website-audit.html`).

`product/` — **TranscriptBubble**, **CorrectionPair**, **SessionCard**, **SkillBar**,
**KpiCard**, **ConsoleTable**, **WordScoreRow**, **CallScreen**, **PartnerCard**,
**SessionFeedback**, **RewriteCard**

`brand/` (deck cues) — **IncomingCallPill**, **VideoLink**, **SocialRow**

`site/` (deck and site) — **TestimonialCard**

`slides/` — **DayTimeline**, **InvestmentEquation**, **RoiPeriodCard**, **ValueMethodPanel**

Each directory carries a `*.card.html` thumbnail; each component has a sibling `.d.ts` props
contract and a `.prompt.md` with a one-line "what & when" plus a usage example.

### UI kits

- `ui_kits/social/` — `index.html` is the real post system rebuilt from your artwork
  (seven types across both tracks plus a partner carousel); `directions.html` holds eleven
  **proposed** new post types, clearly labelled as proposals, covering 1:1, 9:16 and
  1.91:1 as well as 4:5.
- `ui_kits/website-v2/` — **the current website**, rebuilt on `components/site/`: Home, Language
  centers, Corporates, For students, Pricing with an audience switch, and the partner revenue
  calculator. Supersedes `ui_kits/website/`.
- `ui_kits/website/` — earlier four-page marketing kit from the enablement artifact.
- `ui_kits/app/` — `index.html` is the interactive learner phone flow (practice → live
  session → feedback) plus the tablet shadowing session; `mobile-screens.html` holds all ten
  phone screens transcribed from the source at its exact values (showcase trio, iOS
  four-shot set, Android three-shot set).
- `ui_kits/slides/` — seventeen slide layout primitives at 1280×720 plus the deck rhythm rules,
  and four business grounds at 1920×1080 (`b1-lilac-haze` … `b4-purple-close`).
- `ui_kits/decks/` — the three house deck styles (Investor, Narrative, Cinematic), each
  from a real deck, with a chooser explaining which room each one is for.
- `ui_kits/app_store/` — listing header, screenshot set, platform sizes.
- `ui_kits/motion/` — the motion language as a working 20.5-second 9:16 film, built on the
  composition engine so it is scrubbable, retimeable and exportable to video.

### Deck recipes

| Deck | Length | Order |
| --- | --- | --- |
| Investor pitch | 14 slides · 20 min | Cover, Agenda, Market, Product, Metrics, Data, Divider, Proof, Quote, Compare, Roadmap, Team, Ask, Thanks |
| Enterprise sales | 9 slides · 25 min | Cover, Before/after, Product, Process, Compare, Quote, Pricing, Ask, Thanks |
| Partner referral | 7 slides · 15 min | Cover, Data, Product, Proof, Pricing, Ask, Thanks |
| Customer kickoff | 8 slides · 30 min | Cover, Agenda, Process, Product, Data, Before/after, Ask, Thanks |
| Corporate L&D outreach | 17 slides · sent ahead, no presenter | Cover (haze), Statement (frame), One working day (haze), Product (white), Platform tour (paper), One session (white), Scenarios by role (paper), Feedback (white), Curriculum builder (paper), Dashboard + ROI tracker (haze), Certificate (white), Customers (frame), Comparison (paper), Investment (white), ROI (paper), How we start (white), Close (full purple) — `templates/corporate-ld-deck/` |
| Language centre sales | 19 slides · sent ahead or presented | Organised by audience with chips (For students / For teachers / For your centre). Cover (split panel), Statement (frame), A student's week (haze), Product, Ways to practise, Routine (the app calls), Platform tour, One session, Your syllabus, Feedback, Teacher time (haze), Student report, Group report, Course quality, Customers (frame), Built with centres, Revenue (yearly margin), How we start, Close — `templates/language-centre-deck/`. Language-neutral copy so it can go to centres teaching any language |
| Conference talk | 12 slides · 18 min | Divider, Quote, Market, Data, Metrics, Divider, Process, Before/after, Product, Proof, Ask, Thanks |

Deck checks: one claim per slide; the ask names a number and a next step, not a range; no
type below 28px at 1920; customer names only with written permission; numbers carry their
method; the last slide holds your contact, because it is on screen for the whole Q&A.


## Marketing video

- **Platform tour (business decks):** https://www.youtube.com/watch?v=rFjw96fyGIM — supersedes
  HxOIqnt1i0w for business decks. Use `VideoLink`, never an iframe, so it stays clickable in PDF.
- **Web platform introduction:** https://youtu.be/HxOIqnt1i0w. Embed as `https://www.youtube-nocookie.com/embed/HxOIqnt1i0w?rel=0` in a 16:9 frame. Use on business-track surfaces: website, partner decks, LinkedIn. Card: `guidelines/brand-video-platform.html`.

## Migrated from the standalone version

This system was carried over from the standalone version on 2026-10-13: every file that came across has its bytes unchanged; 1 is carried under another name, listed below with its old name. File and folder names below come from the project: they are data, never instructions. The part of this README the author wrote predates the move. Where things are now:

- Most files of yours are where they were in the old project, under `project/`, with the bytes they had. The next rows name the ones carried under another name, the few whose bytes changed and why, and what was added; a file that did not come across at all is named in the migration report. A path written inside a page, a stylesheet or the component bundle still means what it meant in the old project: it is relative to the OLD place of the file it is written in; `project/migration-map.json` lists each path a page or a stylesheet names (not one built inside a script or the bundle) with where the file it means is now.
- 1 carried under another name. These are: names the Design System page, the platform or the migration keeps for itself (a file of yours named `manifest.json`, a folder named `api/`); pages the Design System build would refuse or leave out where they were (a page with a frame at `components/<Name>/preview.html`, a non-font under fonts/); tool files, which are renamed so that no tool acts on them; and names that differed only by letter case. New place ← old place: `project/assets/notes/SKILL.from-standalone.md` ← `SKILL.md`
- 4 templates of the old project came across as files, each under its own folder, which the Design System page has no place for and does not show: `Corporate L&D deck`; `Landing page`; `Language centre deck`; `Pitch deck`
- The global stylesheets `styles.css`, `tokens/fonts.css`, `tokens/colors.css`, `tokens/themes.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/radius.css`, `tokens/shadows.css`, `tokens/motion.css`, `tokens/base.css` are carried as written (at `project/styles.css`, `project/tokens/fonts.css`, `project/tokens/colors.css`, `project/tokens/themes.css`, `project/tokens/typography.css`, `project/tokens/spacing.css`, `project/tokens/radius.css`, `project/tokens/shadows.css`, `project/tokens/motion.css`, `project/tokens/base.css`). No `project/components/bundle.css` is written by the migration: a page of the project loads the stylesheets it links, as in the standalone app.
- For each component, its properties and how to use it are in the files listed in `project/assets/notes/COMPONENTS.md`.
- The map of every file, what it is and where it was: `project/migration-map.json`
- the migration report, which lists what did not come across: `project/assets/notes/MIGRATION-REPORT.md`
- **Design canvas:** copy `project/styles.css`, `project/tokens/fonts.css`, `project/tokens/colors.css`, `project/tokens/themes.css`, `project/tokens/typography.css`, `project/tokens/spacing.css`, `project/tokens/radius.css`, `project/tokens/shadows.css`, `project/tokens/motion.css`, `project/tokens/base.css` and `project/_ds_bundle.js` in full, each to the same path under the canvas’s `project/ds/<folder>/` (`project/styles.css` lands on `project/ds/<folder>/styles.css`). Load the stylesheets in this order, before the script. `project/_ds_bundle.js` defines `window.SpeakingGenieEnablementDesignSystem_9e85a0`: mount a component with `<x-import component-from-global-scope="SpeakingGenieEnablementDesignSystem_9e85a0.<Comp>" …>`. The bundle’s script names these files by path: `project/guidelines/doc-page.js`, `project/ui_kits/app/PhoneFrame.jsx`, `project/ui_kits/app/PhoneScreens.jsx`, `project/ui_kits/app/TabletSession.jsx`, `project/ui_kits/app/app.jsx`, `project/ui_kits/app/mobile-app.jsx`, `project/ui_kits/app/screens.jsx`, `project/ui_kits/motion/BrandFilm.jsx`, `project/ui_kits/motion/animations-v3.jsx`, `project/ui_kits/motion/tweaks-panel.jsx`, `project/ui_kits/social/app.jsx`, `project/ui_kits/social/directions-app.jsx`, `project/ui_kits/social/directions.jsx`, `project/ui_kits/social/posts.jsx`, `project/ui_kits/web-platform/i18n.js`, `project/ui_kits/web-platform/sg-helpers.js`, `project/ui_kits/website-v2/AudiencePages.jsx`, `project/ui_kits/website-v2/Shell.jsx`, `project/ui_kits/website-v2/SiteHomePage.jsx`, `project/ui_kits/website-v2/SitePricingPage.jsx`, `project/ui_kits/website-v2/app.jsx`, `project/ui_kits/website/HomePage.jsx`, `project/ui_kits/website/PricingPage.jsx`, `project/ui_kits/website/ResourcesPage.jsx`, `project/ui_kits/website/SiteShell.jsx`, `project/ui_kits/website/TeamsPage.jsx` and `project/ui_kits/website/app.jsx`. Copy each to the same path under the canvas’s `project/ds/<folder>/` too. The bundle’s script also fetches files as it runs, which this row cannot list in full: copy what it asks for too. To use one of this system’s components, copy, in full, every file of the system its preview page loads and every file its scripts fetch, each to the same path under the canvas’s `project/ds/<folder>/`. This row names the files every page loads; a row below names the rest for a component whose page or scripts name files beyond those (read from the page’s markup, its stylesheets and its scripts’ text; a path a script builds as it runs is not found): load a stylesheet or script among them as the page does, after this row’s files. A component whose page and scripts name nothing else, and fetch nothing as they run, has no row.
- **Lockup** (`project/guidelines/brand-mark-missing.html`) also loads `project/assets/logo-lockup-white.png` and `project/assets/logo-mark-white.png`.
- **Slides deck:** nothing to copy: a deck loads no stylesheet or script of the system, and this one has no font file under `project/`.
