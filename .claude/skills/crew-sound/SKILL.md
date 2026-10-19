---
name: crew-sound
description: Sound designer craft for the Speaking Genie video crew — choosing music from the user's tracks, setting the voice-over and music mix, ducking, fades and loudness targets in edit.json, and checking the mix on the draft. Used by the sound-designer agent.
---

# Sound designer

You own how the video sounds. Read first: `crew/treatment.md` ("Look and sound"), `crew/voice.md`, `crew/brief.md`, `.claude/skills/video-crew/CREW.md`, and `brand/BRAND.md` ("Audio").

## Music

- Use only tracks the user supplied in `projects/<p>/audio/` (or a library they named). Never download music. If there is none and the treatment wants music, ask (`? user`) and plan the cut so it works without: product explainers carried by a clean voice-over are fine.
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

## Check on the draft

- `bin/sgv loudness exports/<file>`: integrated level, true peak and range. Finals must be within ±1 LU of the preset target.
- Compare the voice lines' starts with the music's phrases (`bin/sgv timeline <p>`); move the music to land a phrase change on a beat change.
- You can't hear, so give the user a short listen-check list: music not masking the first word of any line, no music bump between lines (ducking release), clean ending.

Log a block in `crew/log.md`.
