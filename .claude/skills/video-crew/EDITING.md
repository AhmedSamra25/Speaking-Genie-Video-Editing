# Editing playbook

How the crew makes a Speaking Genie video feel professionally edited. The creative director plans with it, the
screen producer and motion designer build for it, the editor cuts with it, the sound designer cues with it, and QA
checks against it. Everything here stays inside `brand/BRAND.md`: calm, eased, no bounce.

This file is the one place that says **when** to use each camera move, transition, motion device and sound, and **how
often**. The crew skills hold the props and syntax (`crew-motion` for graphics, `crew-camera` for footage moves,
`crew-sound` for cues and the library); `CLAUDE.md` holds the `edit.json` reference.

## The budget

A 30–60 s video spends its effects like this. Most joins are cuts and most beats have no sound cue.

| Per video | At most |
| --- | --- |
| Light sweep | 1 (on the EndCard or the logo card) |
| Screen-to-device zoom (`intoDevice`) | 1 |
| 3D tilt float, rack focus, speed ramp | 2 each, never two on one clip |
| Match cut | 2 |
| Motion transitions (`zoom`, `push-*`, `slide-scale`, `dome`) | 1 every ~6 s, never the same one twice in a row |
| Sound cues | 1 per beat, none under a key line; `riser` once, `impact` twice |

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
  The change of device is itself the turn in the story. To say it in one shot, use `DualScreen`.

## Camera moves: when to use which

Nothing sits still: every product screen has a living camera. The bigger moves mark a turn in the story, one or two a
video, never stacked on one clip or on top of a motion transition into it.

| Move | Use for | How often | How |
| --- | --- | --- | --- |
| Living drift | every product screen and still | always | ProductScreen `"drift": 0.02–0.04` (slow push plus a noise wander, no jitter); `kenburns` on `image` clips |
| Travel between points | several points on one screen, instead of cutting to it twice | one step per 2–3 s | ProductScreen `steps` (ring redraws, label changes) |
| Element tracking | one button or field followed through a flow | one flow per video | `steps` of `{x, y, zoom, at}`; across screens give each clip the same `x, y, zoom` |
| Pre-zoom | short beats, so the point lands in the first half second | any beat under ~2.5 s | `"startZoom": 0.6–0.85, "pushFrames": 12–16` |
| Tap or cursor | the voice says "send", "start", "download" | one per spoken action, on the word | mobile `tap`, web `cursor` |
| Screen-to-device zoom | the hook into the demo (UI pulls back into the phone), or leaving the app at the close | once | ProductScreen `"intoDevice": "out"` or `"in"`; best as the first screen of a 9:16 reel |
| 3D tilt float | a product reveal, the app close | at most twice, not back to back | ProductScreen `"tilt": 6–8` (max 10); settles, no spin |
| Phone and web together | "students practise, the centre sees it" in one shot | once | `DualScreen` (the web answers 0.6 s after the phone) |
| Parallax 2.5D | Enablement cards and screens feel shot, not slid | automatic in the Enablement look | `"parallax": 0` for a still card |
| Voice bars | the AI call while the voice-over speaks for the learner or the AI | once, on the speaking call card | ProductScreen `"wave": true` |
| Punch-in | covering a jump cut in a talking head | per jump cut, alternating wide and close | video `"scale": 1.1–1.2` toward `focus` |
| Rack focus | footage that hands over to text or a graphic: sharp into soft before a quote card, or soft into sharp after one | at most twice | video `"focusPull": "out"` or `"in"` (8 px at most, eased, 0.8 s); see `crew-camera` |
| Speed ramp | a montage beat on an action (a walk-in, a hand reaching for the phone, a door) | at most twice, montage only | video `"ramp": [{at, speed}]`; **never a talking head or anyone speaking** (the clip's sound is dropped) |

Not offered: orbit, dolly zoom, shake, 3D spins.

## Transitions: when to use which

Cuts carry the rhythm; motion carries the turns. A transition says how a clip comes **in**.

| Transition | Use for | How often | Length |
| --- | --- | --- | --- |
| `cut` | most changes, on the voice: on the first stressed word of a line or just before it | most joins | — |
| match cut (`"match": true`) | evidence to product: both frames share geometry (a StatCard ring becomes the app's ring). The strongest "pro" signal | at most 2 | — |
| `zoom` | going deeper into the same thing (the call → its feedback; the dashboard → one report) | ≤ 1 per ~6 s, counting all motion transitions | 0.3–0.4 s |
| `push-left` / `push-right` / `push-up` | moving on to the next idea; push in the reading direction (Arabic: `push-right`) | same budget | 0.3–0.4 s |
| `slide-scale` | card to card: a push left while the outgoing card shrinks to 92% | same budget | 0.35–0.45 s |
| `dome` | Enablement only: into a purple card, or from footage into the Enablement world (the card grows from the dome) | same budget; once or twice a video | 0.5–0.7 s |
| `dissolve` | a change of time or place | a few a video | 0.4–0.6 s |
| `blur` | a scene change softer than a dissolve (passes through an 8 px blur) | instead of a dissolve, not as well | 0.4–0.6 s |
| `dip` | a chapter break, and into the end card | 1–2 | 0.5 s |
| light sweep (`"sweep"`) | across the EndCard's capsule, button or badges, or the logo card | once per video (sgv refuses a second) | 1.6 s |

- Motion transitions get real motion blur and, with `"sfx": true`, a soft whoosh. Never the same one twice in a row.
- Not offered: wipes and slides (`wipe-left` and `slide-left` in older edits render as `push-left`), spins, flips,
  glitches. The dome reveal and the capsule wipe are the only shaped reveals, because they are Enablement brand devices.
- **Graphics joined to graphics** (two or more motion clips in a row, joined by `dissolve`, `blur`, `zoom`, `push-*`,
  `slide-scale` or `dome`) render as one Remotion composition through `TransitionSeries` (sgv does this by itself): no
  seam, no extra encode, and the cards travel with their content. A `cut` or `dip` ends the run. `SGV_NO_RUNS=1`
  renders each graphic on its own and joins them in ffmpeg.
- **Match cut.** Put `"match": true` on the incoming clip: sgv makes the join a hard cut and switches off the
  outgoing graphic's exit fade and the incoming one's entrance. Then line the geometry up: the shared element must sit
  at the same place and size on both frames (for a StatCard ring into the app's ring, set the ProductScreen's first
  `steps` point and zoom so the app ring lands where the card's ring was). Check it with `bin/sgv match <p> <clip>`:
  it saves the last frame before the cut, the first after it and the two overlaid (`build/look/match-N-WxH.jpg`); the
  shared element must look single, not doubled. Check both aspects (`--size 1080x1920`, `--size 1920x1080`).
- **Light sweep.** `"sweep": true` on the EndCard (or the card that carries the logo) runs the Enablement egSweep: a
  soft white band crosses left to right in 1.6 s, linear, 0.6 s before the card ends. Aim it with
  `"sweep": {"box": [x, y, w, h], "at": 1.2}` (0–1 fractions of the frame) at the capsule, the button or the badges;
  find the box on a still (`bin/sgv look exports/<p>-draft.mp4 --at T`); it differs per aspect.
- Set the length per clip with `"transitionDuration": 0.35`. The next clip starts that much earlier: add it to the
  previous clip's duration to keep beats on their lines.
- Clips joined by cuts or motion transitions are fully visible from their first frame to their last
  (`"enterFade": false, "exitFade": false` on motion graphics); fades belong to dissolves and dips.

## Motion devices: when to use which

| Device | Use for | How often | How |
| --- | --- | --- | --- |
| Line-mask titles | every title line | default | TitleCard, Enablement EndCard and QuoteCard (`reveal: "fade"` for the plain fade) |
| Highlight marker | the two or three words that carry a line | once per card, about 3 a video | `marker: "…"`; use `marker` or `highlight`, rarely both |
| Capsule wipe | Enablement kickers and capsules | automatic; one capsule per frame | `overline`, `capsule` |
| Draw-on chart | a number: `ring` for a share (58% of students), `line` or `bars` for a trend | one per StatCard | StatCard `chart` (+ `series`) |
| Arabic-Indic digits | Arabic videos | choose Latin or Arabic-Indic once, use it in every card and caption | StatCard `"digits": "arabic"` |
| Cursor, tap | a spoken action on a web or mobile screen | one per action | ProductScreen `cursor`, `tap` |
| Voice bars | the AI call | once | ProductScreen `wave` |
| Lottie icon | only where an icon must move | not installed; ask first | `@remotion/lottie@4.0.530`, recoloured to tokens |

Not offered: particles, 3D type, glitch, kinetic type that spins or bounces.

## Sounds: when to use which

A sound marks a real event on screen (the call connects, the report arrives); it never decorates. At most one cue per
beat, none under a key line of voice-over, and most beats need none. Nothing gamey: no coins, fanfares, 8-bit blips,
cartoon boings, laser zaps or crowd cheers. Syntax and levels: `crew-sound`.

| Sound | Use for | How often |
| --- | --- | --- |
| `whoosh`, `tap` | automatic with `"sfx": true`: motion transitions and ProductScreen `tap`s | never cue by hand |
| `ringback` | the learner calls the AI tutor (Egyptian 425 Hz, 1 s on / 4 s off) | once, in a call hook |
| `incoming-ring` | the AI tutor or a teacher is calling | once |
| `call-connect` / `hang-up` | the call screen goes live / the call ends | a pair: both or neither |
| `mic-on` | the learner starts speaking | once |
| `message-sent` | an answer, message or report is sent | on the event |
| `notification` | a report or feedback arrives | once or twice |
| `success` | a passed exercise, a finished report | once |
| `streak` (`level-up`) | a streak kept or a level reached: a warm chord | once, learner track |
| `riser` | into the main reveal or key line (its `at` is where it ends) | once a video |
| `impact` | a stat or title landing; soft and low | twice a video |
| recorded `sfx/` (typing, shutter, landline ring, Kenney clicks) | real-world events the synthesised set can't do | on the event |
| `ambience` | the picture is a real place (classroom, office) | one bed, 0.15–0.3 |
| music | the treatment wants a bed: business = corporate beds, learners = acoustic, testimonials = piano | one track, 0.3–0.6, ducked |

Every file from `brand/sound/` needs an entry in `brand/sound/LICENSES.json`; a file without one is not usable.

## Rhythm

- Hook in the first 1.5 s, on the most concrete thing (a real sentence, a number, a face), never the logo.
- Vary shot lengths: 1.5–3 s for proof shots, longer only when the voice needs it. No two consecutive shots of the same length.
- Picture leads sound by 0.1–0.3 s on new ideas (the viewer sees it as they hear it); the end card arrives on the CTA's
  first word and holds ≥ 3 s.

## Words on screen

- Social cuts: word-by-word captions, `"captions": {"src": "captions/master.srt", "burn": true, "style": "words"}`. The
  spoken word lights up on the dark pill (the brand's text purple, or the track's phrase colour in the Enablement look).
- On-screen labels add what the voice doesn't say; they never repeat the caption.
