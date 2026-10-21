# Plan: lighter renders, modern camera, transitions, motion and brand sound

Status: approved 20 Oct 2026. Phases 1–6 done (results and notes below). Rack focus and speed ramp added in phase 6; Lottie stays out until a beat needs a moving icon.

Decisions (user, 20 Oct 2026): the dome reveal and capsule wipe are allowed as brand devices; small SFX files are
committed together with their licence ledger; the Remotion company licence is in place.

Baseline before Phase 1 (`group-report-reel`, cold cache, this Mac): draft 78 s, final 159 s, peak about 1.1–1.25 GB
for a single render with 8 graphics.

## What I found

**This Mac.** Apple M2, 8 cores (4 performance, 4 efficiency), **8 GB RAM**. Memory is the limit, not CPU or GPU. Docker's VM
was also running during the measurement and holding memory.

**Where the resources go today** (measured and read from the code):

| Cause | Evidence | Effect |
| --- | --- | --- |
| Every motion graphic is a separate `npx remotion render` | `sgv/motion.py` `render()` | Each one re-bundles the code with webpack and starts a fresh Chrome. One 3 s TitleCard: **14 s, ~1.2 GB peak**. A 30 s Reel has 10–20 graphics × each export aspect. |
| No `--concurrency` set | same | Remotion opens about half the cores' worth of Chrome tabs, each holding hundreds of MB. |
| Nothing serialises renders | crew agents run in parallel | Two agents rendering at once (or a session plus an agent) doubles Chrome and ffmpeg memory; macOS starts swapping. |
| Motion-blur transitions render 16 sub-frames per frame | `sgv/render.py` blur block | Heavy at 1080×1920, even in drafts. |
| Drafts decode the full-resolution sources | iPhone HEVC/HDR footage | Tone-mapping and scaling 4K for a 540p draft. |
| Agents check graphics by rendering whole clips | `crew-motion` skill | A still frame would do. |

**Research** (two agents; sources cited in the session):
- **Sound licences.** Safest sources: **Kenney Interface Sounds** and **BigSoundBank** (CC0), and **Pixabay** (free for commercial
  use with no attribution, but **not usable in a trademark, so a sonic logo can't come from Pixabay**). Music beds: **Pixabay Music**
  (keep each track's licence certificate for YouTube Content ID claims) and **Mixkit** Free License items (skip any marked
  Restricted). Avoid: BBC (non-commercial), Uppbeat free (no ads), YouTube Audio Library (YouTube only), Freesound NC and Sampling+
  items, Zapsplat free and Incompetech (credit required).
- **Motion trends 2026.** Real product screens in 63% of SaaS videos (up from 37%), 3D falling (13%), lighter looks, about 8.5
  shot changes per minute, one colour pop in captions. That suits the brand: camera work on real screens beats flashy 3D.
- **Brand fit.** `brand/BRAND.md` forbids wipes, spins, flips, glitches and bounces. The Enablement motion tokens already define
  egRise, egDraw, egSweep, egWipe (element-level), egCount. Note that `sgv/project.py` still offers `wipe-left` and `slide-left`,
  which the brand forbids.
- **Remotion.** `@remotion/transitions`, `paths`, `noise`, `media-utils`, `captions`, `lottie` exist at 4.0.530 (pin exact; most are
  MIT, transitions and lottie fall under the Remotion licence). `TransitionSeries` can join motion-only runs inside one render.
  **A company with more than 3 employees needs a Remotion Company License**; please confirm one is in place.

## Phase 1: render lighter (do this first, because every new effect adds render cost)

1. **Measure first.** Add `sgv -v` timing and peak memory per stage (segments, motion, assemble, audio) and record a baseline on
   `projects/group-report-reel` (draft and final).
2. **Bundle once.** `remotion bundle` once per source hash into `build/motion-bundle/`, and render from it. This takes out the
   webpack step on every graphic.
3. **One render worker per job.** A small Node script using `@remotion/renderer` (already installed with the CLI) opens one
   browser and renders every motion clip of the edit in sequence, instead of one process per clip.
4. **Memory-aware concurrency.** Set `concurrency` from free RAM (on this Mac: 2 for finals, 1–2 for drafts), and render drafts at
   `scale: 0.5` instead of full size.
5. **One heavy job at a time.** A machine-wide render lock (`~/.cache/sgv/render.lock`). `sgv render`, `sgv motion` and
   `sgv captions` wait for it and print "waiting for another render", so parallel agents and sessions queue instead of
   fighting for memory.
6. **ffmpeg.** Use VideoToolbox hardware decoding for HEVC sources; build 540p proxies of footage at ingest and use them for drafts;
   8 sub-frames instead of 16 for motion blur in drafts; cap threads while a Remotion render runs.
7. **Graphic checks as stills.** `sgv motion … --still T` (Remotion `still`) so agents check a frame without rendering the clip.
8. **Crew workflow.** In the producer skill, writing and planning agents still run in parallel, but only one agent renders at a
   time; QA watches the draft the editor already made instead of rendering its own; `sgv doctor` warns when free memory is low or
   Docker is running.

Target: a draft of the 30 s Reel at least 2× faster than the baseline, with peak memory under 3 GB.

### Phase 1 results (20 Oct 2026, `group-report-reel`, cold cache, same Mac)

| | Before | After |
| --- | --- | --- |
| Draft | 78 s, peak 1.25 GB | **41 s** (graphics 20 s, assemble 14 s), peak 0.95 GB |
| Final 1080×1920 | 159 s, peak 1.1 GB | **75 s** (graphics 31 s including bundling, assemble 30 s instead of 99 s), peak 1.07 GB |
| Checking one graphic | 14 s (full clip) | **1.5 s** (`--still`) |
| Two jobs at once | both run, memory doubles | the second waits for the first |

Done: one Remotion worker per render with a cached bundle and one browser; concurrency from free memory and frame size;
a machine-wide lock for render, motion, captions, transcribe and screen; motion blur at half size above 720p and 8
sub-frames in drafts; 1080p SDR draft proxies for 4K or HDR footage (tested on a synthetic 4K HDR10 clip: segments
1.7 → 1.3 s, memory 643 → 135 MB); `sgv motion --still`; `sgv doctor` reports memory, a running VM and the queue; crew rules.
Not done: capping ffmpeg threads while Remotion runs (no longer needed, since jobs no longer overlap).

## Phase 2: brand sound library

1. **Synthesised brand set** (code in `sgv/sfx.py`, no files to license, fully owned; the only safe source for a future sonic logo):
   call ringback (Egyptian 425 Hz cadence, softened edges), incoming ring (a calm two-tone motif), call connect (E5→B5 chime),
   hang-up (B5→E5), mic on, UI tap (exists), message sent, notification, success, streak or level-up (calm, not game-like),
   soft whoosh (exists), soft riser, soft impact for text reveals.
2. **Curated recorded set** for what synthesis does badly: typing, camera shutter, classroom and office ambience, real phone ring.
   From Kenney, BigSoundBank and Pixabay only. Every file goes into `brand/sound/` with an entry in `brand/sound/LICENSES.json`
   (source URL, licence, date, and the Pixabay certificate when there is one). Downloading needs your go-ahead per batch, and
   every item gets auditioned before it goes in.
3. **Music library.** 8–12 Pixabay or Mixkit beds tagged by mood and tempo (calm corporate, warm acoustic for learners, modern
   classical for business), 85–110 BPM, nothing bouncy. `sgv sounds --list` and `--try` to audition.
4. **edit.json.** Placed cues `"sfx": [{"sound": "call-connect", "at": {"clip": 3, "offset": 0.2}, "volume": 0.6}]` plus automatic
   ones (motion transitions → whoosh, `tap` → tap, ProductScreen on a call card → ring then connect), and an `ambience` bed that
   ducks like music. Sound-designer skill updated with when to use each sound (sparingly: about one cue per beat at most).

### Phase 2 results (20 Oct 2026)

Done: 13 synthesised brand sounds in `sgv/sfx.py` (whoosh and tap kept; ringback, incoming-ring, call-connect, hang-up,
mic-on, message-sent, notification, success, streak/level-up, riser, impact), balanced to -22 to -26 LUFS at their loudest
moment and checked by spectrogram; `"sfx"` takes `true`, a list of cues or `{auto, volume, cues}`; cues land on their
`at` (a riser ends there), ringing sounds repeat for `duration`, and a cue may name a `brand/sound/` file; an `ambience`
bed loops and ducks under the voice like music; `bin/sgv sounds --list | --try <name> [--spectrum] [--play]`;
`brand/sound/LICENSES.json` and the git rules (sfx/ and ambience/ committed, music/ ignored); crew-sound, crew-editor,
EDITING.md, CLAUDE.md and README. Checked on a scratch copy of `group-report-reel` with four cues and a room tone:
draft -14.2 LUFS, -1.4 dBTP. Not done: the recorded set and the music beds (waiting for the user's go-ahead on the
downloads), and the automatic "ring then connect" on a call-card ProductScreen (nothing in a clip marks a call card yet;
cue it by hand).

## Phase 3: camera moves (Remotion, cheap to render)

| Move | Use | Where |
| --- | --- | --- |
| **Screen-to-device zoom** | the hook into the demo: full UI pulls back into the phone frame, or the reverse | ProductScreen `intoDevice` |
| **3D tilt float** (≤10°, no spin) | product reveal, app close | ProductScreen `tilt` |
| **Parallax 2.5D** | Enablement titles: dome, capsule and screen at different depths | Enablement look layers |
| **Element tracking** | camera stays locked on a button through a flow | ProductScreen `steps` with `{x, y, zoom}` keyframes |
| **Split screen phone + web** | "students practise, the centre sees it" | new `DualScreen` composition |
| **Organic drift** | stills and screens feel alive without jitter | `@remotion/noise` under `drift` |
| **Rack focus** (≤8 px) | quote over B-roll | footage clip `focusPull` (ffmpeg) |
| **Speed ramp** (eased) | montage beats, never talking heads | footage clip `ramp` (ffmpeg; slower to render) |

Not adopted: orbit and dolly zoom (dramatic, 3D, heavy).

Done (20 Oct 2026): ProductScreen `intoDevice` out|in (with `deviceAt`, `deviceDuration`, and `device` for the bare phone,
geometry from the mobile kit's PhoneFrame), `tilt` (≤10°, settles to a third), `steps` with `{x, y, zoom, travel}`,
`drift` as push plus a `@remotion/noise` wander, the `DualScreen` composition, and parallax depth in the Enablement look
(dome 0.25, screen 0.55, text 0.7, capsule 1; `parallax` prop). Rack focus and speed ramp were done in phase 6 (below).

## Phase 4: transitions

| Transition | Use | Where |
| --- | --- | --- |
| **Dome reveal** (circle grows from the dome arc) | into Enablement cards | Remotion |
| **Match cut** on a shared element (stat ring → app ring) | evidence to product; the strongest "pro" signal | composition geometry plus a hard cut |
| **Blur dissolve** | scene change | ffmpeg `blur` transition |
| **Slide with scale** | card to card | ffmpeg `push` variant |
| **Light sweep** | once per video, logo or end card | Remotion (egSweep) |
| **TransitionSeries** | consecutive motion clips joined in one render (fade, blur-slide, zoom-blur) | `sgv` groups motion runs |

Also: remove `wipe-left` and `slide-left` (forbidden by the brand), keeping old edits working by mapping them to `push-left`.

## Phase 5: motion and animation

Line-mask kinetic titles (RTL-safe), chart and ring draw-on (`@remotion/paths`), counters with Arabic numerals
(`Intl.NumberFormat('ar-EG')`), a waveform that follows the voice-over on the AI call (`@remotion/media-utils`), an eased
cursor path, a highlight marker under a key word, the capsule wipe for kickers, and brand-recoloured Lottie icons (LottieFiles
Simple License) only where an icon needs to move. Not adopted: particles, 3D, glitch.

Done (20 Oct 2026): `MaskedLines` line-mask titles (default in TitleCard and the Enablement EndCard and QuoteCard;
`reveal: "fade"` for the old look), `marker`, the capsule wipe on Enablement kickers and capsules, StatCard `chart`
ring|line|bars (`@remotion/paths`) and `digits: "arabic"`, ProductScreen `wave` (`@remotion/media-utils`, synced by sgv to
the clip's timeline position) and `cursor`. Lottie not added: no beat needs a moving icon yet.

## Phase 6: crew and proof

Update `EDITING.md`, the `crew-*` skills and `CLAUDE.md` with when to use each new move, transition and sound. Then build a
45 s **showcase reel** using every new capability in both looks and both languages, and run it through QA. It doubles as the
before-and-after render benchmark.

### Phase 6 results (20 Oct 2026)

**Footage moves** (`sgv/render.py`, `sgv/project.py`):
- `focusPull` on video clips: `"in"`, `"out"` or `{from, to, at, duration}`, a gaussian blur of at most 8 px (at 1080p,
  scaled to the frame), eased in and out and set every frame by `sendcmd`; the blur is enabled only where it is above
  zero. Checked on a scratch project: blur measure 15 → 6 across the 0.8 s pull, sharp after it.
- `ramp` on video clips: `[{at, speed, ease?}]` in source seconds after `in`; each change is eased over 0.4 s as 8
  constant-speed sections, mapped with one piecewise `setpts`; speeds 0.25–4×; the clip's sound is dropped and its
  timeline length follows the ramp. Checked against the source: frames land on the expected source times (within one
  output frame in a 2.5× section). Montage only; never a talking head. Scratch project deleted.

**Crew docs pass:** `EDITING.md` is the one place for when and how often: an effects budget and four tables (camera
moves, transitions, motion devices, sounds). `crew-editor`, `crew-motion` and `crew-sound` point to it instead of
repeating it; `crew-camera` gets the footage moves; `crew-qa` checks the budget, gamey sounds and `LICENSES.json`, and no
longer forbids the approved zoom and push transitions or assumes the Platform fonts in the Enablement look. `CLAUDE.md`,
`README.md` and `BRAND.md` (dome and capsule as the only shaped reveals) agree with it.

**Showcase reel** (`projects/showcase-reel`, Arabic 9:16, 45.2 s; `projects/showcase-reel-en`, English 16:9, 43.9 s):
Enablement look, business track, real screens from both kits, scratch `say` voice as a timing placeholder. It uses rack
focus, screen-to-device zoom, tilt float, step travel with a cursor click, a tap, DualScreen, voice bars, parallax,
the dome, zoom, push, slide-scale, blur and dip, three TransitionSeries runs, line-mask titles, marker, capsule wipe,
Arabic-Indic digits, the light sweep, four brand cues plus automatic whooshes and a licensed bed. Not used: the speed
ramp (the only footage is a talking head) and a match cut (no shared geometry without forcing it). QA round 1 (`projects/showcase-reel/crew/qa-1.md`) said "ship after fixes" with 11 small notes (voice overlap at the
hook, a call sound without its pair, transitions closer than 6 s, label holds and repeats, the lower third, one colloquial
word, a learner-track line in the business cut, two callouts); all applied and checked on frames (see its NOTES.md).
Finals: −14.14 and −14.15 LUFS, TP −1.50 dBTP. Open: the user confirms the co-founder's name spelling and title, and the
scratch voice is replaced before any release.

**After-benchmark** (same Mac, queue idle, no VM; peak = summed RSS of the render's process tree, sampled every 0.25 s):

| | Before phase 1 (`group-report-reel`, 30 s, 8 graphics) | After (`showcase-reel` first cut, 45.7 s, 10 clips: 1 footage, 3 runs, 2 graphics, 1 overlay) |
| --- | --- | --- |
| Draft, cold project cache | 78 s, peak 1.25 GB | **45.6 s**, peak 1.20 GB |
| Final 1080×1920 | 159 s, peak 1.1 GB | **69.7 s**, peak 1.28 GB |
| Final 1920×1080 (English cut) | — | 73.7 s, peak 1.02 GB |

A 50% longer video with more graphics and heavier transitions renders in about 0.6× (draft) and 0.45× (final) of the
old time, with peak memory about the same and well under the 3 GB target.

## Order and parallel work

Phase 1 first and alone, because it changes `sgv/motion.py` and `sgv/render.py`, which everything else renders through. Then three
independent streams that touch different files: **sound** (`sgv/sfx.py`, `brand/sound/`, sound skill), **Remotion camera and
motion** (`motion/src/`), and **ffmpeg transitions** (`sgv/render.py`, `sgv/project.py`). Phase 6 last.

## Decisions for you

1. **Brand rule.** `BRAND.md` bans wipes. May the dome reveal and capsule wipe count as brand devices (they come from the
   Enablement DS), or should they stay out?
2. **Sound files in git.** Commit the small SFX files with their licence ledger (a few MB), or keep all audio git-ignored and
   commit only the ledger?
3. **Remotion licence.** Confirm the company licence is in place before we add packages.
