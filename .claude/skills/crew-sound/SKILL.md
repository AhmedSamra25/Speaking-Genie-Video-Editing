---
name: crew-sound
description: Sound designer craft for the Speaking Genie video crew — choosing music from the user's tracks or the licensed brand library, placing brand sound effects and ambience, setting the voice-over and music mix, ducking, fades and loudness targets in edit.json, and checking the mix on the draft. Used by the sound-designer agent.
---

# Sound designer

You own how the video sounds. Read first: `crew/treatment.md` ("Look and sound"), `crew/voice.md`, `crew/brief.md`, `.claude/skills/video-crew/CREW.md`, and `brand/BRAND.md` ("Audio").

## Music

- Use tracks the user supplied in `projects/<p>/audio/`, or a bed from `brand/sound/music/` that has an entry in `brand/sound/LICENSES.json` (pass its repo path, e.g. `brand/sound/music/<file>`). Never download music yourself: new library items need the user's go-ahead first (filenames, sources, sizes). If there is none and the treatment wants music, ask (`? user`) and plan the cut so it works without: product explainers carried by a clean voice-over are fine.
- `bin/sgv ingest <p>` lists each track's length. Match the treatment's mood: calm, warm and modern. No hype risers, no trailer drums, no vocals under voice-over.
- Find a start point where the music's phrase lines up with the hook, and a natural ending near the end card. If a track is longer than the video, plan a `fadeOut` of 2–3 s ending on the last frame.
- Rights: confirm the track is licensed for commercial use on the target platforms, and write the source and licence in `crew/sound.md`.

## The mix

These are the `edit.json` keys; write them into `crew/sound.md` and send `→ @editor` (the editor owns `edit.json` unless the producer tells you to edit it yourself):

```jsonc
"voiceover": { "src": "audio/vo.wav", "at": 0, "volume": 1 },
"music": { "src": "audio/<track>", "volume": 0.4, "duckUnderVoice": true, "fadeIn": 1, "fadeOut": 3 }
```

- Music about 18 dB under the voice once ducked. Start around `volume` 0.35–0.5 and adjust on the draft.
- Footage with on-camera speech: keep the clip's own `volume` at 1. Mute B-roll whose sound distracts (`"mute": true`); keep natural sound that adds life (a classroom, a laugh).
- Exports are normalised to the preset target (-14 LUFS, -1 dBTP for social and YouTube) automatically. Don't fight it with gain.

## Sound effects and ambience

The brand sounds are synthesised in `sgv/sfx.py` (owned, no licence). `bin/sgv sounds --list` lists them and the library
files in `brand/sound/`; `bin/sgv sounds --try <name> --spectrum` renders one to `build/sounds/`, prints its peak, RMS and
loudest-moment LUFS, and draws a spectrogram you can Read.

When to use each sound and how often (at most one cue per beat; `riser` once, `impact` twice a video; nothing gamey):
the sounds table in `.claude/skills/video-crew/EDITING.md`. Names: `whoosh`, `tap` (automatic), `ringback`,
`incoming-ring`, `call-connect`, `hang-up`, `mic-on`, `message-sent`, `notification`, `success`, `streak`
(`level-up`), `riser`, `impact`. `ringback` and `incoming-ring` repeat for a cue's `duration`.

```jsonc
"sfx": { "volume": 0.5, "cues": [
  { "sound": "ringback", "at": { "clip": 0, "offset": 0 }, "duration": 2 },
  { "sound": "call-connect", "at": { "clip": 1, "offset": 0.2 }, "volume": 0.6 },
  { "sound": "brand/sound/sfx/<file>.wav", "at": 12.4, "volume": 0.5, "duration": 1.5 }
] },
"ambience": { "src": "brand/sound/ambience/<file>.wav", "volume": 0.25, "duckUnderVoice": true }
```

- `"sfx": true` still means automatic sounds only; `"auto": false` turns those off and keeps the cues. A cue's `at` is
  the moment the sound lands, in seconds or `{clip, offset}` like overlays.
- Levels: the sounds are balanced to sit about 12–16 dB under the voice at `volume` 0.5. Lower a cue's `volume`
  rather than raising the global one. Call sounds (ring, connect) can sit a little higher in a silent hook.
- Ambience (room tone, classroom, office) only where the picture is a real place; keep it at 0.15–0.3 and let it duck.
  It loops if shorter than the video.
- Recorded library (`bin/sgv sounds --list` shows each file's licence and tags):
  - `sfx/typing-laptop.wav` (soft laptop typing, 6 s; give `duration`), `sfx/camera-shutter.wav`, `sfx/phone-ring-landline.wav`
    (a real two-ring landline, for a real-world call; use `ringback`/`incoming-ring` for the app's own call);
    `sfx/ui/kenney-*.wav` (nine soft clicks, selects, confirms and drops, CC0) when a synthesised `tap` is too plain.
  - `ambience/classroom-chatter.m4a` (students murmuring), `ambience/office-quiet.m4a` (distant office voices),
    `ambience/office-room-tone.m4a` (steady room tone, a faint hum): all loop cleanly; use `volume` 0.15–0.3.
  - `music/` (git-ignored; re-download from the ledger's `source` if missing): business: `corporate-calm-leberch`,
    `corporate-soft-nastelbom`, `infinity-arulo`; learners: `inspiring-travel-acoustic-loka`, `my-life-good-b-music`,
    `wind-leaves-eugenio-mininni`; testimonials: `ambient-piano-strings-good-b-music`, `motivational-piano-leberch`,
    `classical-vibes-3-grigoriy-nuzhny`. Their loudness differs by up to 10 dB (see the ledger tags): set `volume` on the draft.
  - Every file needs a `LICENSES.json` entry; a file without one is not usable. Pixabay items never go into a sonic logo.
    Pixabay music is registered with Content ID: note the track in `NOTES.md` so a YouTube claim can be disputed with
    its licence certificate. Mixkit music may not be used in TV or radio broadcast.

## Check on the draft

- `bin/sgv loudness exports/<file>`: integrated level, true peak and range. Finals must be within ±1 LU of the preset target.
- Compare the voice lines' starts with the music's phrases (`bin/sgv timeline <p>`); move the music to land a phrase change on a beat change.
- You can't hear, so give the user a short listen-check list: music not masking the first word of any line, no music bump between lines (ducking release), each cue on its picture event, clean ending.

Log a block in `crew/log.md`.
