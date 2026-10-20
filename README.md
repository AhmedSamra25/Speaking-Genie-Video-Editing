# Speaking Genie — Video Editing

Claude Code as a video editor and montage artist for Speaking Genie. You describe the video and drop
in the footage. Claude looks at the shots, builds the timeline, adds on-brand motion graphics and
captions, mixes the audio, and exports for every platform. It runs on your MacBook and uses Apple's
media hardware.

```
brand/        design tokens, video brand rules, fonts, logos  (from the Speaking Genie Design System)
sgv/          the editing engine (Python + ffmpeg): ingest, look, silence/scene detection,
              transcription, timeline assembly, captions, loudness, multi-format export
bin/sgv       command line entry point
motion/       Remotion project: Intro, TitleCard, StatCard, QuoteCard, EndCard, LowerThird
projects/     one folder per video (edit.json + NOTES.md committed; media git-ignored)
.claude/      skills (edit-video, motion-graphics) and permissions for Claude Code
CLAUDE.md     how Claude edits in this repo — read this first
```

## Set up the Mac (once)

Run these one at a time in Terminal:

```bash
cd ~
git clone https://github.com/AhmedSamra25/Speaking-Genie-Video-Editing.git
cd Speaking-Genie-Video-Editing
bash setup/macos.sh --models    # Homebrew ffmpeg + whisper.cpp + Node, brand fonts, Remotion, Whisper model
bin/sgv doctor                  # everything should be ✓
```

If `git` asks for a password (private repo), sign in once with the GitHub CLI and clone again:
`brew install gh && gh auth login` (choose GitHub.com → HTTPS → Login with a web browser).

What uses the Mac's hardware:

| Capability | How |
| --- | --- |
| H.264 / HEVC / ProRes encode and decode | ffmpeg **VideoToolbox** (Apple media engine). Software fallback elsewhere |
| Speech-to-text for captions (EN + AR) | **whisper.cpp** on the GPU via **Metal**, fully on-device |
| Motion graphics rendering | Remotion drives headless Chrome with GPU (ANGLE/Metal) rasterisation, in parallel across cores |
| iPhone footage | HEVC, HDR (HLG/Dolby Vision → SDR tone-map), rotation and variable frame rate handled on ingest |

## Make a video

Open Claude Code in this folder (`claude`) and ask, for example:

> Make a 30-second Reel from the interview in ~/Movies/mona.mov — hook with her best line,
> captions, a stat card with 74% fluency, end card "Start a free pilot".

Claude follows the `edit-video` skill: brief → `sgv new` → ingest and look → paper edit →
`edit.json` → draft → captions → final exports, all checked visually and for loudness.

By hand:

```bash
bin/sgv new "Pilot results" --aspect 16:9
# copy media into projects/pilot-results/{footage,audio,assets}
bin/sgv ingest pilot-results --sheets      # media table + contact sheets in build/look/
# edit projects/pilot-results/edit.json   (reference in CLAUDE.md)
bin/sgv render pilot-results --draft       # fast 540p review cut
bin/sgv captions pilot-results             # transcribe the cut → captions/master.srt
bin/sgv render pilot-results               # all presets in "exports"
```

Export presets (`bin/sgv presets`): `youtube-1080p`, `youtube-4k`, `linkedin-1080p`,
`reels-1080x1920`, `square-1080`, `portrait-1080x1350`, `web-720p`, `master-prores`. Each aspect
ratio gets its own layout: motion graphics re-flow, footage is cropped around `focus` or padded
onto the brand canvas, and captions sit clear of the platform UI.

Motion graphics preview: `bin/sgv studio` opens Remotion Studio.

## The video crew

Ask for a video and Claude runs a crew of nine specialist agents, each with its own skill, coordinated by a producer
(the main Claude session):

| Agent | Does |
| --- | --- |
| creative-director | the idea: treatment, beat sheet, which beats use footage, product screens or graphics; reviews drafts |
| scriptwriter | voice-over and on-screen text in English and Egyptian Arabic (MSA on screen) |
| voice-director | directs your recording, or generates voice-over (ElevenLabs, or macOS scratch voices), timed per line |
| cinematographer | footage selects, framing and 9:16 focus points, or an iPhone shoot plan |
| screen-producer | captures real product screens from the design system and picks the one thing to highlight |
| motion-designer | branded graphics, including ProductScreen callouts over real screens |
| editor | assembles the cut, captions from the script, renders |
| sound-designer | music from your tracks, mix, ducking, loudness |
| qa-reviewer | checks brand, Arabic and English, safe zones, captions and loudness before you see it |

> Make a 30-second Reel in Egyptian Arabic for language-centre owners: how teachers see their class's mistakes
> after every session. End with "Start a free pilot".

You approve three things: the treatment, the script (the exact voice-over lines), and the draft. Everything the crew
writes lives in `projects/<p>/crew/` and gets committed with the project.

Voice-over options (the producer asks at the start, together with the video's language):
- **Record it yourself.** Best for Egyptian Arabic. The voice-director gives you a recording sheet; record one take
  with 2-second pauses on your phone and `sgv voice --take` cleans it up (noise, rumble, harsh "s", level) and cuts it
  into timed lines.
- **A local voice on this Mac.** `bin/sgv voices` lists the premium and enhanced Arabic and English voices you have
  installed (add more in System Settings → Accessibility → Spoken Content → System voice → Manage Voices; Siri voices
  can't be used). Apple's Arabic voices are Modern Standard Arabic with a Gulf accent, not Egyptian.
- **ElevenLabs.** Set `ELEVENLABS_API_KEY`; the script is sent to ElevenLabs.

### Product screens

Two kits from the design systems, both working click-throughs, captured with `bin/sgv screen` (headless Chrome over
the DevTools protocol): the learner **mobile app** in `brand/product-ui-mobile/` (from the Enablement Design System,
36 screens, 3x, in the kit's phone frame) and the teacher/admin **web platform** in `brand/product-ui/` (2x).
`bin/sgv screen --list` shows every screen. The web kit: Install it once from the Speaking Genie Design System artifact
(files under `project/`), keeping its folder structure, so that
`brand/product-ui/ui_kits/web-platform/Speaking Genie Platform.dc.html` exists. Then `bin/sgv screen --list`.

### Which design system

The crew works from three design systems; `.claude/skills/video-crew/DESIGN-SYSTEMS.md` says when to use each and
why. In short: marketing and sales videos follow the **Enablement DS** (`brand/enablement/`: README, guidelines
including the company brief, tokens), in the individual track (learners, social, Egyptian colloquial, green, app
install) or the business track (centres and corporates, LinkedIn and website, simplified formal Arabic or English,
orange, a conversation). In-product videos follow the **Platform DS**. Product screens come from the web and mobile
kits and are never restyled. The producer asks who the video is for and where it runs at intake.

### Resources on an 8 GB Mac

Renders, graphics, captures and transcription run one at a time (a machine-wide lock; a second job waits). All of a
render's graphics go through one Remotion worker with a cached bundle and one browser, rendering as many frames at once
as free memory allows (`SGV_CONCURRENCY` overrides). Motion-blurred transitions are computed at half size above 720p (`SGV_FULL_BLUR=1` for full size). Drafts use lighter motion blur and cached 1080p SDR proxies of 4K or
HDR footage (`SGV_NO_PROXY=1` turns them off). `bin/sgv motion … --still T` checks a graphic in about 2 s. `bin/sgv doctor`
shows free memory, a running VM and the queue.

### Editing toolkit

Motion-blurred `zoom` and `push` transitions, a living camera on every product screen (drift, travel between
`steps`, a ring that draws itself on, a finger `tap`), word-by-word captions, and generated sound effects
(`"sfx": true`), and a brand sound library. The rules for using them are in `.claude/skills/video-crew/EDITING.md`.

### Brand sound

`bin/sgv sounds --list` shows the brand sounds: ringback (Egyptian 425 Hz), incoming ring, call connect and hang-up,
mic on, message sent, notification, success, streak, riser, impact, whoosh and tap. They are synthesised in
`sgv/sfx.py`, so they are owned outright (the only safe source for a future sonic logo). `bin/sgv sounds --try <name>
--spectrum` renders one to `build/sounds/` and measures it. Place them with `"sfx": {"cues": [...]}` and add a room tone
with `"ambience"`. Recorded effects, ambience and music beds go in `brand/sound/` with an entry in
`brand/sound/LICENSES.json` (CC0, Pixabay or Mixkit Free License only); music beds stay out of git.

## Design system

`brand/` is derived from the
[Speaking Genie Design System](https://claude.ai/artifact/3PKgYp7jyfARkzvevGHGHU): its colour
ramps and dark theme, Plus Jakarta Sans / IBM Plex Sans Arabic / JetBrains Mono, the official logo
files, and the onboarding video's look (canvas `#F7F8FB`, white 22px windows, Purple 600 accent,
dark caption pill). `brand/BRAND.md` marks which rules are video-only additions.

## Licensing notes

- Fonts are SIL OFL 1.1 (`brand/fonts/OFL.txt`).
- **Remotion** is free for individuals and for companies with up to 3 employees. Larger companies
  need a [Remotion company license](https://www.remotion.dev/license). Check this before using it
  in production.
