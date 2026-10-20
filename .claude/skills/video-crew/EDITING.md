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
  The change of device is itself the turn in the story. To say it in one shot, use `DualScreen` (the phone first, the
  web window answers 0.6 s later; in 16:9 a line and a dot travel from the phone to the web).

## Camera: nothing sits still

- Every product screen gets a living camera: `"drift": 0.02–0.04` (a slow push over the whole clip plus an organic
  noise wander; never jitter).
- Several points on one screen: use `steps` (the camera travels to each, the ring redraws, the label changes) instead
  of cutting to the same screen twice. One step per 2–3 s.
- Short beats start pre-zoomed: `"startZoom": 0.6–0.85, "pushFrames": 12–16`, so the point lands in the first half second.
- Show actions as actions: when the voice says "send", "start", "download", add a `tap` on that button (mobile) or a
  `cursor` click (web), timed to the word.
- Follow one element through a flow with `steps` of `{x, y, zoom, at}`: the camera stays locked on it while the
  screen changes around it. Across several screens, give each clip the same `x, y, zoom`.

### Camera moves for the turns (one or two a video, never stacked)

| Move | Use for | How |
| --- | --- | --- |
| Screen-to-device zoom | the hook into the demo, or leaving the app at the close | ProductScreen `"intoDevice": "out"` (UI pulls back into the phone) or `"in"`; best as the first shot of a 9:16 reel |
| 3D tilt float | a product reveal, the app close | ProductScreen `"tilt": 6–8` (max 10); settles flat-ish, no spin |
| Parallax 2.5D | Enablement cards and screens feel shot, not slid | on by default in the Enablement look (dome far, screen middle, capsule near); `"parallax": 0` for a still card |
| Voice bars | the AI call while the voice-over speaks for the learner or the AI | ProductScreen `"wave": true` on the speaking call card |

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
- Titles come in line by line from behind a mask (the default). A highlight `marker` under the two or three words that
  carry the line, once per card; the capsule wipe opens kickers and capsules on its own.
- Numbers: a `ring` when the number is a share (58% of students), a `line` or `bars` when it is a trend. In Arabic
  videos choose Latin or Arabic-Indic digits (`"digits": "arabic"`) once and use them in every card and caption.

## Sound

- `"sfx": true` adds generated, licence-free sound: a soft whoosh under each motion transition and a light tap on each
  ProductScreen `tap`. `{"volume": 0.4}` to tone it down. Keep it subtle; the voice leads.
- Brand sound cues (`"sfx": {"cues": [...]}`: ringback, call-connect, notification, impact and more; `bin/sgv sounds`)
  mark real events on screen, about one per beat at most. An `ambience` bed ducks like music. See the `crew-sound` skill.
- Music (the user's track, or a bed composed for the project) ducks under the voice automatically.
