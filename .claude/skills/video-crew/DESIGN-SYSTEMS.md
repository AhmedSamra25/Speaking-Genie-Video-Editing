# Which design system, when, and why

Speaking Genie has three design systems. They are not interchangeable: each one is the source of truth for a
different audience and surface. Pick the system at intake, write it into `crew/brief.md` (`design system:` and
`track:`), and every role follows it. When two systems disagree, the one that owns the surface wins.

| System | In the repo | Owns | Voice |
| --- | --- | --- | --- |
| **Enablement DS** | `brand/enablement/` (README, guidelines, tokens) | marketing and sales: social posts, ads, LinkedIn, website, sales and partner decks, brand films | two tracks (below) |
| **Platform DS** | `brand/product-ui/` (web-platform kit), `brand/BRAND.md`, `brand/tokens.json` | the teacher and admin web product, and in-product video (how-to, onboarding, feature tours) | calm, operational, sentence case, MSA Arabic |
| **Mobile App DS** | `brand/product-ui-mobile/` (mobile-app kit, motion guidelines) | the learner app as shipped: its screens, its motion and its report reveal | the app's own copy, shown as-is |

Rule of thumb: the **Enablement DS decides what we say and how the video looks around the product**; the
**Platform and Mobile kits supply the product itself**, captured as real screens and never restyled.

## Step 1: what kind of video is it?

| Video | System for the look and copy | Product screens from |
| --- | --- | --- |
| Social ad or Reel for **learners** (TikTok, Instagram, Facebook) | Enablement, **individual track** | mobile kit |
| Video for **language-centre owners, corporates, L&D, HR** (LinkedIn, website, sales follow-up, partner pitch) | Enablement, **business track** | web kit for the manager side, mobile kit for the student side |
| Investor or partner deck video, brand film | Enablement (business-track rules) | either, as the story needs |
| In-product video: onboarding, "How it works", feature tour, help article, release note | Platform DS | web kit (teachers, admins) or mobile kit (learners) |
| Footage edit (testimonial, event, interview) | the track of the audience it is for | only where a beat shows the product |

If the brief doesn't settle the audience or the channel, the producer asks the user. That one answer fixes the
accent, the language register, the close and the platform.

## Step 2: the track rules (Enablement DS)

| | Individual track | Business track |
| --- | --- | --- |
| Audience | learners who need to speak for a job, a promotion, a move | centre owners, corporates, L&D and HR buyers |
| Channels | TikTok, Instagram, Facebook (9:16, 4:5, 1:1) | LinkedIn, website, sales decks (16:9, 1:1, 1.91:1, 9:16 stories) |
| Spoken language | **Egyptian colloquial** Arabic, or English | **simplified formal Arabic** (not colloquial), or English |
| On-screen Arabic | MSA headlines; colloquial is allowed in the hook line, as on the brand's own posts | simplified formal Arabic |
| Person | second person, imperative ("اتكلم", "you") | third person about "your team", "your students", "your centre"; "we" only in the ask and close |
| Accent colour | green `#10c185` | orange `#e5831a` (phrase accent on purple `#ff8e31`) |
| Close | an app install: "حمل التطبيق دلوقتي", with the App Store and Google Play badges | a conversation: walkthrough, pilot or partnership ("Book a walkthrough", "اتكلم معنا"). **Never store badges.** |
| Urgency | only on challenge content (Speak to Hire): deadlines, last places | calm: "Every month you wait, a team of 20 misses 200 practice hours." |
| Money | price per month (700–1,200 EGP/mo) | an investment per team member (10 h × 100 EGP = 1,000 EGP/month), never "savings" |

One accent per video. A video never mixes green and orange and never asks for both an install and a partnership.

**Enablement look** (for titles, cards and end cards on marketing videos): purple grounds (`#4a0c79` flat,
`#1c0136` deep, the dome radial as default); the **dome** (a white 7–10% circle hung off the top edge, one per
frame); the **capsule** (a hairline white outline around the one phrase that must be read, one per frame); type in
Cairo (Arabic), Poppins (Latin display), Inter (Latin body). Business-track decks and slides are light (lilac haze,
purple frame, split panel) with a full-purple close; the only dark surface allowed there is product UI inside a
device. Photography always goes through the track overlay, never untreated. Motion follows
`brand/product-ui-mobile/guidelines/motion-*.html` (the same calm, eased system as the product).

**In the compositions:** every composition in `motion/` draws both looks. Set `"look": "enablement"` and
`"track": "individual" | "business"` once at the top of `edit.json` (or per clip in `props`); the default is the
Platform look. Enablement frames get a purple ground (`"ground": "dome"` by default, or `flat` or `deep`), the dome,
the white lockup top-centre, Poppins/Inter/Cairo and the track accent. `highlight` sets words of a title, quote or
headline in the accent, and `capsule` adds the one capsule (TitleCard, StatCard). EndCard closes by track:
individual gets the install line in a capsule plus the App Store and Google Play badges (Arabic badges when
`lang` is `ar`); business gets a white "Book a walkthrough" / "اتكلم معنا" button and the URL, never badges
(`cta` overrides the line). ProductScreen keeps the screen as shipped on the purple ground, with the ring in the
accent and the label as a solid purple capsule. The light business-deck grounds (lilac haze, purple frame) are
not built; video uses the purple grounds on both tracks. Assets: `brand/enablement/assets/` (white lockup and
mark, store badges) and `brand/fonts/` (Cairo, Poppins, Inter).

## Step 3: what every marketing video must respect (company brief)

Source: `brand/enablement/guidelines/company-brief.html`. Facts come from there or from the user, never from memory.

- **Positioning:** "The AI platform that gives non-native professionals the spoken confidence to pass interviews,
  close deals, and build global careers." The idea under it is the Confidence Gap: "Proficiency isn't the problem.
  Confidence is."
- **Approved lines** (verbatim): "The gym membership for your voice.", "The only curriculum-integrated solution.",
  "AI is our foundation, not a feature.", "Let's redefine how the world speaks."
- **Feature names verbatim**, never renamed. Learner app: Voice call with AI agents, Peer-to-peer call, Post-session
  feedback, Vocab and idioms builder, Real-life scenario practice, Goal-oriented curriculum call tasks, Weekly and
  monthly reports, Speaking-hours certificates. Platform: Curriculum builder, Student and group management, Assign
  tasks, Track student progress, ROI tracker.
- **Numbers carry their method**, one line below or spoken with it ("6 B2B contracts, June 2026"). Verified traction
  only: 150,000 EGP revenue from 6 B2B contracts, 500 learners served, 3,000 practice hours committed (250 consumed),
  200 active individuals in the free-trial pilot. Demo data on a screen is labelled "Sample" when it carries a claim.
- **Retired, never use:** "100 active students", "600+ practice hours", "$60B market", "1.5B English learners",
  "75% fear speaking", "60–80% confidence gain", "200–400% ROI".
- **Do not:** call TelePerformance a partner or client (pipeline); promise a job; call the AI a teacher or a
  replacement for one (centres are partners, the product removes their grading load); name a customer beyond
  Waghini, MVG, Jesr, HRG and The Pro English (business material uses Jesr and HRG, plus the approved testimonials
  from IMV Agency and Waghini, quoted verbatim).
- **Corrections are rewrites:** show wrong-then-right as whole sentences, never a grammar rule.
- **Calls on screen:** the call screen is never transcribed: no speech bubbles or live corrections on it.
  Corrections appear after the call, on session feedback.
- Learners appear as initials, never photographs; named public people as photographs.

## Step 4: product screens (Platform and Mobile kits)

- **Mobile kit** (`brand/product-ui-mobile`, Poppins, `#7C3AED`, Title Case buttons): the learner's side. Use it for
  anything the student does or sees: the AI call, feedback, reports, certificates, placement, streaks. Show it as
  shipped; never recolour it to match the video's accent. It is native 9:16.
- **Web kit** (`brand/product-ui`, Plus Jakarta Sans / IBM Plex Sans Arabic, `#6D28D9`): the teacher, admin and
  owner side: groups, group report, dashboards, consumption, ROI, setup, billing, courses. Arabic screens are full
  RTL MSA.
- A story about both sides (student practises, centre sees it) opens on mobile and turns to web.
- Screens keep their own system's colours and fonts even inside an Enablement-look video: the product is shown, not
  restyled. The track accent goes on the graphics around it, never on the UI.
- In-product videos (Platform DS) speak the Platform voice: calm, operational, sentence case, no exclamation marks,
  MSA Arabic, and follow `brand/BRAND.md` for every graphic.

## Who reads what

| Role | Uses this guide to |
| --- | --- |
| producer | ask the audience and channel at intake; write `design system` and `track` into the brief |
| creative-director | set the track, accent, close and look in the treatment; reject a treatment that mixes tracks |
| scriptwriter | write in the track's register and person; only verified facts and verbatim feature names; the right close |
| voice-director | cast for the register: colloquial for individual, simplified formal (or English) for business; voice style `social` or `warm` for individual, `broadcast` or `narrator` for business, `natural` in-product |
| cinematographer | grade and frame photography and footage to the track's direction; no untreated stock |
| screen-producer | pick the kit by whose side the beat shows; never restyle UI |
| motion-designer | use the look the brief names; flag the Enablement-look gap until it is built |
| editor | the close, the end card and the CTA per track; aspect per channel |
| sound-designer | individual track: energetic but calm social bed; business: understated corporate bed |
| qa-reviewer | check track consistency, retired claims, customer names, feature names, close and accent |
