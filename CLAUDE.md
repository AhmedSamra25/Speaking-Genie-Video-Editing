# Speaking Genie — video editing with Claude Code

This repo turns Claude Code into the video editor and montage artist for Speaking Genie.
You (Claude) edit by writing a project's `edit.json` and running `bin/sgv`. You look at the
footage through contact sheets and frames. All on-screen design follows the Speaking Genie
Design System.

## Ground rules

- **Brand first.** Read `brand/BRAND.md` before you design anything on screen. Colours, fonts and
  logos come only from `brand/` (tokens in `brand/tokens.json`). Never invent colours or add
  gradients, emoji, exclamation marks, stock textures or bouncy motion.
- **Look before you cut.** Run `bin/sgv ingest <project> --sheets` and Read the JPGs in
  `build/look/` before choosing shots. Use `bin/sgv look <file> --start A --end B` to check a
  range, and `--at T` for a single frame. Don't describe footage you haven't looked at.
- **Never modify source media.** Footage in `footage/`, `audio/` and `assets/` is read-only.
  Everything generated goes to `build/` (cache) or `exports/`; the only generated media inside those folders
  are `audio/vo/` + `audio/vo.wav` (`sgv voice`) and `assets/screens/` (`sgv screen`).
- **Draft, then final.** Iterate with `bin/sgv render <project> --draft` (540p, fast). Run the full
  render only after the user approves the cut, then check the exports (see "Finishing" below).
- **Log decisions** in the project's `NOTES.md` (brief, chosen takes, why a shot was cut).
- Media files are git-ignored; commit only `edit.json`, `NOTES.md`, caption files and `crew/*.md|json`.

## Tools

| Command | What it does |
| --- | --- |
| `bin/sgv doctor` | Checks ffmpeg/VideoToolbox, Remotion, whisper, fonts |
| `bin/sgv new "Name" [--aspect 9:16] [--theme dark] [--lang ar]` | Creates `projects/<slug>/` from the template |
| `bin/sgv ingest <p> [--sheets]` | Lists the project's media (duration, size, fps, codec, HDR) and makes contact sheets |
| `bin/sgv look <file> [-n 12] [--start s --end s] [--at s]` | Saves a contact sheet or a single frame as an image you can Read |
| `bin/sgv silence <file> [--apply <p>]` | Finds the speech ranges. `--apply` appends jump-cut clips to the timeline |
| `bin/sgv scenes <file>` | Lists scene-change timestamps (for B-roll and montage selects) |
| `bin/sgv transcribe <file> [--lang ar]` | Writes a whisper.cpp transcript (`.srt` + `.json`) next to the file |
| `bin/sgv captions <p>` | Renders a draft, transcribes it and sets `captions/master.srt` on the project |
| `bin/sgv captions <p> --from-vo` | Captions from the approved script text and voice timings (`crew/vo.json`) |
| `bin/sgv voice <p> [--engine say\|elevenlabs\|files] [--take f]` | Voice-over lines from `crew/vo.json` → `audio/vo.wav`, timed |
| `bin/sgv voices [--lang ar,en] [--try "text"]` | Lists the installed premium/enhanced system voices (gender, usable by `say`); `--try` renders a sample per voice |
| `bin/sgv screen <p> <card> [--lang ar] [--theme dark] [--flow k] [--status speaking]` · `--list [--kit mobile\|web]` | Captures a real product screen from the mobile app or web platform kit |
| `bin/sgv timeline <p>` | Shows each clip's start and end on the assembled timeline (use it to place overlays) |
| `bin/sgv render <p> [--draft] [--preset a,b]` | Renders the exports |
| `bin/sgv motion <Comp> --props '{…}' [--size 1080x1920]` | Renders a single motion graphic |
| `bin/sgv loudness <file>` · `bin/sgv presets` · `bin/sgv studio` · `bin/sgv clean <p>` | |

Add `-v` before the command (`bin/sgv -v render …`) to print every ffmpeg call.

## edit.json reference

```jsonc
{
  "title": "Pilot results",            // file metadata
  "aspect": "16:9",                    // aspect of drafts
  "fps": 30, "theme": "light", "lang": "en",   // theme: light|dark  lang: en|ar
  "look": "enablement", "track": "individual",  // motion graphics: platform (default) | enablement; track individual|business
  "fit": "fill",                       // default reframing: fill (crop) | fit (pad with brand canvas)
  "transitionDuration": 0.5,
  "exports": ["youtube-1080p", "reels-1080x1920"],   // see `sgv presets`; each aspect is laid out natively
  "timeline": [
    { "type": "motion", "composition": "Intro", "duration": 3, "props": { "tagline": "…" } },
    { "type": "title", "overline": "Chapter 1", "title": "…", "subtitle": "…", "duration": 3, "transition": "dissolve" },
    { "type": "video", "src": "footage/a.mov", "in": 12.4, "out": 19.0,
      "focus": [0.5, 0.4],             // crop centre (x,y 0–1) when filling another aspect
      "fit": { "9:16": "fill", "16:9": "fit" },
      "speed": 1, "volume": 1, "mute": false, "fadeIn": 0, "fadeOut": 0, "label": "Mona intro",
      "scale": 1.15,                   // punch-in toward `focus` to cover a jump cut (keep ≤ 1.2 on 1080p sources)
      "grade": "lift" },               // "lift" (backlit faces, about one stop) or any ffmpeg filter chain
    { "type": "image", "src": "assets/dashboard.png", "duration": 4, "kenburns": "in" },  // in|out|left|right
    { "type": "color", "duration": 1 },                                                  // brand canvas hold
    { "type": "motion", "composition": "StatCard", "duration": 4,
      "props": { "label": "Average fluency", "value": 74, "suffix": "%", "delta": "↑ 12 pts in 6 weeks", "caption": "…" } },
    { "type": "motion", "composition": "QuoteCard", "duration": 5, "props": { "quote": "…", "name": "…", "role": "…" } },
    { "type": "motion", "composition": "EndCard", "duration": 4, "transition": "dip",
      "props": { "headline": "Start a free pilot", "subline": "…", "url": "speakingenie.com" } }
  ],
  // transition = how a clip comes IN: cut (default) | dissolve | dip (through white on light theme, black on dark)
  //   | zoom | push-left | push-right | push-up (0.3–0.4 s, motion-blurred; set "transitionDuration" on the clip)
  "overlays": [
    { "composition": "LowerThird", "at": { "clip": 2, "offset": 0.5 }, "duration": 4,
      "props": { "name": "Mona Adel", "role": "Head of Academics · Cairo Language Center" } }
  ],
  "logo": { "enabled": true, "corner": "top-right", "variant": "light-on-dark" },  // hidden during motion clips
  "voiceover": { "src": "audio/vo.wav", "at": 0, "volume": 1 },
  "music": { "src": "audio/bed.mp3", "volume": 0.5, "duckUnderVoice": true, "fadeIn": 1, "fadeOut": 3 },
  "captions": { "src": "captions/master.srt", "burn": true, "offset": 0, "style": "words" },  // style words = word-by-word highlight
  "sfx": true   // generated whooshes under motion transitions and taps on ProductScreen taps
}
```

Compositions and their required props: `Intro` (none; optional `tagline`) · `TitleCard` (`title`)
· `StatCard` (`label`, `value`) · `QuoteCard` (`quote`, `name`) · `EndCard` (`headline`) ·
`LowerThird` (`name`, overlay only) · `ProductScreen` (`src`: a project image, usually `assets/screens/*.png`;
optional `callout` `{x,y,w,h}` in the screen's CSS pixels, `label`, `move`: push|still|pan, `steps` for camera travel
between several points, `tap` `{x,y,at}`, `drift`, `scale` 3 for mobile captures). Every composition supports Arabic RTL (`lang: "ar"` per clip
or per project) and both themes.

## The video crew

For a video made from an idea, or footage turned into a finished piece with a script, voice-over, product
screens and graphics, follow the `video-crew` skill. You act as the producer and dispatch the crew agents in
`.claude/agents/` (creative-director, scriptwriter, voice-director, cinematographer, screen-producer,
motion-designer, editor, sound-designer, qa-reviewer), each with its own `crew-*` skill. They hand work to each
other through files in `projects/<p>/crew/` (protocol: `.claude/skills/video-crew/CREW.md`). The crew works in
English and Egyptian Arabic (MSA for on-screen text). There are three user gates: treatment, script, and draft. For a quick
trim or caption pass, use `edit-video` instead.

Real product screens come from two design system kits, both working click-throughs: the learner **mobile app** in
`brand/product-ui-mobile/` (36 screens: home, the AI call, feedback, reports, EN/AR) and the teacher/admin **web
platform** in `brand/product-ui/` (every screen, EN/AR, light/dark, states and flows). Never mock up product UI.
The editing playbook (`.claude/skills/video-crew/EDITING.md`) says which kit to use and how to make it move.

**Three design systems, each with its own job** (guide: `.claude/skills/video-crew/DESIGN-SYSTEMS.md`). The
**Enablement DS** (`brand/enablement/`) governs marketing and sales videos in two tracks: learners on social
(Egyptian colloquial, green accent, close on an app install) and buyers such as centre owners and corporates on
LinkedIn and the website (simplified formal Arabic or English, orange accent, close on a conversation). Its company
brief holds the verified facts, approved lines and retired claims. The **Platform DS** (`brand/product-ui/`,
`brand/BRAND.md`) governs the web product and in-product video; the **Mobile App DS** (`brand/product-ui-mobile/`)
is the learner app as shipped. Screens are always shown as shipped, never restyled to the video's accent. The
motion compositions draw the Platform look by default and the Enablement look with `"look": "enablement"` and a
`"track"` (purple dome ground, capsule, track accent, and a close that depends on the track).

## Editing craft

- **Hook in the first 2 seconds.** For social cuts, open on the strongest line or result, not the logo.
  Keep the intro at 1.5 s or less, or drop it.
- **Pacing.** Talking heads: cut out silences (`sgv silence`) and cover jump cuts with B-roll or a
  slight `focus` reframe. Montage: cut on the beat or the action, with shots 1.5–3 s long. Hold text
  for at least 1.5 s plus 0.06 s per character.
- **Transitions** are mostly cuts. Dissolve between scenes; dip for chapter breaks and into the end card.
- **Vertical (9:16).** Set `focus` on every wide shot so faces stay in frame. Keep text out of the
  bottom 20% (platform UI). Burned-in captions are on by default, because most people watch muted.
- **Audio.** Exports are loudness-normalised (-14 LUFS for social and YouTube). Music ducks under speech
  automatically. Keep music volume around 0.3–0.6.
- **Footage from iPhone and Mac** (HEVC, HDR/Dolby Vision, vertical, variable frame rate) is handled
  automatically: HDR is tone-mapped to SDR and everything is conformed to the project fps.

## Finishing

1. `bin/sgv render <p>` (all presets in `exports`).
2. `bin/sgv look exports/<file> -n 16` for each export, then Read the sheet. Check framing, captions,
   overlays and logo.
3. `bin/sgv loudness exports/<file>`. The result should be within ±1 LU of the preset target.
4. Report file paths, durations and sizes to the user.

## This Mac

`setup/macos.sh` installs everything: Homebrew ffmpeg with **VideoToolbox** hardware
H.264/HEVC/ProRes encoding and decoding, **whisper.cpp with Metal** for on-device transcription,
Node + Remotion (Chrome renders frames on the GPU), and the brand fonts. With `--models` it also
downloads the Whisper model. `sgv` falls back to software x264/x265 on machines without
VideoToolbox. On a Mac, Remotion downloads its own headless Chrome on the first render. Set
`SGV_BROWSER` to use a different Chrome binary.

## Motion graphics code

`motion/` is a Remotion project (React + TypeScript). To add or change a graphic, follow the
`motion-graphics` skill. Run `cd motion && npm run typecheck` after each change, and render a
still to check it visually.
