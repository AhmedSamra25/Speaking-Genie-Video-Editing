# Editing playbook

How the crew makes a Speaking Genie video feel professionally edited. The creative director plans with it, the
screen producer and motion designer build for it, the editor cuts with it, and QA checks against it. Everything here
stays inside `brand/BRAND.md`: calm, eased, no bounce, one purple accent.

## Pick the right product UI

The design system and track (which decide the copy, accent, close and the look around the product) are in
`DESIGN-SYSTEMS.md`. This section is only about which kit the product screens come from.

| Audience and story | Kit | Capture |
| --- | --- | --- |
| Learners: practising, the AI call, feedback, progress, certificates | **mobile app** (`brand/product-ui-mobile`) | `bin/sgv screen <p> 17-call-speaking` (`--list --kit mobile` for all 36) |
| Teachers, admins, owners: reports, groups, dashboards, setup, billing | **web platform** (`brand/product-ui`) | `bin/sgv screen <p> groupReport-ar` |

- A 9:16 video about the learner experience uses mobile screens: they are native vertical and come in the kit's phone
  frame. Arabic cuts use the RTL cards (`04-home-ar`, `22-call-ar`) or `--dir rtl`.
- Web screens in 9:16 are crops of one component (the screen producer cuts them); never squeeze a whole desktop page
  into a phone frame.
- Story about both sides ("students practise → teachers see it"): open on the mobile call, then cut to the web report.
  The change of device is itself the turn in the story.

## Camera: nothing sits still

- Every product screen gets a living camera: `"drift": 0.02–0.04` (a slow push over the whole clip).
- Several points on one screen: use `steps` (the camera travels to each, the ring redraws, the label changes) instead
  of cutting to the same screen twice. One step per 2–3 s.
- Short beats start pre-zoomed: `"startZoom": 0.6–0.85, "pushFrames": 12–16`, so the point lands in the first half second.
- Show actions as actions: when the voice says "send", "start", "download", add a `tap` on that button, timed to the word.

## Transitions: cuts carry the rhythm, motion carries the turns

| Transition | Use for | Length |
| --- | --- | --- |
| `cut` | most changes, on the voice: cut on the first stressed word of a line or just before it | — |
| `zoom` | going deeper into the same thing (the call → its feedback; the dashboard → one report) | 0.3–0.4 s |
| `push-left` / `push-right` / `push-up` | moving on to the next idea; push in the reading direction (Arabic: `push-right`) | 0.3–0.4 s |
| `dissolve` | a change of time or place | 0.4–0.6 s |
| `dip` | a chapter break, and into the end card | 0.5 s |

- Motion transitions (`zoom`, `push-*`) get real motion blur and, with `"sfx": true`, a soft whoosh. Use at most one
  every ~6 s and never the same one twice in a row; most joins stay cuts.
- Set the length per clip with `"transitionDuration": 0.35`. Remember the next clip starts that much earlier.
- Clips joined by cuts or motion transitions are fully visible from their first frame to their last
  (`"enterFade": false, "exitFade": false` on motion graphics); fades belong to dissolves and dips.

## Rhythm

- Hook in the first 1.5 s, on the most concrete thing (a real sentence, a number, a face), never the logo.
- Vary shot lengths: 1.5–3 s for proof shots, longer only when the voice needs it. No two consecutive shots of the same length.
- Picture leads sound by 0.1–0.3 s on new ideas (the viewer sees it as they hear it); the end card arrives on the CTA's
  first word and holds ≥ 3 s.

## Words on screen

- Social cuts: word-by-word captions, `"captions": {"src": "captions/master.srt", "burn": true, "style": "words"}`. The
  spoken word lights up in the brand's text purple on the dark pill.
- On-screen labels add what the voice doesn't say; they never repeat the caption.

## Sound

- `"sfx": true` adds generated, licence-free sound: a soft whoosh under each motion transition and a light tap on each
  ProductScreen `tap`. `{"volume": 0.4}` to tone it down. Keep it subtle; the voice leads.
- Brand sound cues (`"sfx": {"cues": [...]}`: ringback, call-connect, notification, impact and more; `bin/sgv sounds`)
  mark real events on screen, about one per beat at most. An `ambience` bed ducks like music. See the `crew-sound` skill.
- Music (the user's track, or a bed composed for the project) ducks under the voice automatically.
