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

```bash
git clone <this repo> && cd Speaking-Genie-Video-Editing
setup/macos.sh --models     # Homebrew ffmpeg + whisper.cpp + Node, brand fonts, Remotion, Whisper model
bin/sgv doctor              # everything should be ✓
```

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
