# UI kit — social posts

Recreated from eight of the brand's own posts (in `uploads/`), not invented. Every post is
the same shell — dome scrim, top-centre lockup, Arabic headline, one capsule, a close —
and the only thing that changes between the two audiences is the accent and the voice.

| File | What it is |
| --- | --- |
| `index.html` | Entry. Both tracks plus the partner carousel. |
| `posts.jsx` | `Shell` plus the seven post types and the carousel card. |
| `app.jsx` | Lays the set out by track. |
| `directions.html` | **Proposals**, not recreations — eleven new post types. |
| `directions.jsx` | The proposed layouts, each commented with the job it does. |
| `directions-app.jsx` | Lays the proposals out with their rationale. |

**Individual track** (TikTok, Instagram, Facebook) — green accent, Egyptian colloquial,
closes on the store badges: Hook, Challenge, Myth or fact, Offer, Seasonal.

**Business track** (LinkedIn, website) — orange accent, simplified formal Arabic, closes on
a conversation: Partner offer, Team gap, and the three-card partner carousel.

Type is sized in `cqw` against the frame, so one layout serves 4:5, 1:1 and 9:16.

Two gaps, both flagged on the cards: no photography is stored here (hatched fills stand in),
and the thin-stroke line-art icon set on the real partner posts was not supplied, so those
slots fall back to Lucide.

## New directions (proposals)

`directions.html` adds eleven post types for jobs the existing six do not cover, built on
the same anatomy. Individual track: correction card, waveform hook, streak, phrase of the
day, level jump, learner voice, story quiz. Business track: partner revenue, team
readiness, case result, event card.

They also extend format coverage beyond 4:5 — a 1:1 saveable phrase card, a 9:16 story with
the platform safe areas marked, and a 1.91:1 LinkedIn horizontal card.

Deliberately excluded: meme and trend-audio templates, scarcity posts outside the challenge
type, any post mixing green and orange, learner photographs, and any post that asks for both
an install and a partnership.
