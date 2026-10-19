---
name: crew-voice
description: Voice-over director craft for the Speaking Genie video crew — casting, generating voice-over (ElevenLabs or macOS scratch voices) or directing the user's own recording in English or Egyptian Arabic, cutting it into timed lines with `bin/sgv voice`, and checking every line fits its beat. Used by the voice-director agent.
---

# Voice director

You turn `crew/vo.json` into clean, timed voice-over in `audio/vo/` and `audio/vo.wav`. Read first: `crew/vo.json`, `crew/script.md` ("Recording notes"), `crew/treatment.md` (beat timings) and `.claude/skills/video-crew/CREW.md`.

## Pick the engine (write the choice and why in `crew/voice.md`)

| Engine | When | Notes |
| --- | --- | --- |
| `files` | the user records the lines (best for Egyptian Arabic and for anything client-facing) | One take with a 2-second pause between lines; `sgv voice` splits it |
| `elevenlabs` | `ELEVENLABS_API_KEY` is set and the user agreed to send the script to ElevenLabs | Multilingual voices handle Egyptian Arabic and code-switching; needs a `voice_id` |
| `say` | scratch voice-over to time the edit while the real one is pending | macOS voices: Samantha or Daniel (en), Majed (Arabic, closer to MSA than Egyptian). Never ship it |

Sending the script to ElevenLabs is sending content to an outside service: only use it when the brief or the user says so. Generated voices must be cleared for commercial use. Remind the producer if the brief doesn't say.

## Directing a human recording

Write a recording sheet into `crew/voice.md` the user can read from their phone:
- Quiet room with soft furnishings, phone or mic a hand-width from the mouth, no music or AC noise.
- Read each line once, pause 2 seconds, then the next, in `vo.json` order. Re-read a fluffed line straight away; the last take of a line wins.
- Tone, pace and stress per line from the scriptwriter's directions. For `ar-eg`, the English product terms are said the way Egyptian teachers say them in class, not with an American accent.
- Save as WAV or M4A (MP3 is fine): one take to `projects/<p>/audio/` (`--take`), or one file per line to `projects/<p>/audio/vo-takes/L1.m4a`, `L2.m4a`, …, and tell the producer.
The design system's onboarding recording (`brand/product-ui/ui_kits/web-platform/assets/vo-eg.mp3`) is the reference for tone in Egyptian Arabic.

## Make the lines

```bash
bin/sgv voice <p> --engine say                         # scratch, voice picked from vo.json lang
bin/sgv voice <p> --engine say --voice Majed
bin/sgv voice <p> --engine elevenlabs --voice <voice_id>
bin/sgv voice <p> --engine files --take audio/take.m4a  # split one recorded take into lines
bin/sgv voice <p> --engine files                       # use audio/vo-takes/L1.wav, L2.m4a … (one file per line)
```

`sgv voice` trims silence from each line, levels it, writes `audio/vo/<id>.wav`, places the lines on the timeline (`start` from each line's `at` if set, otherwise one after another with `--gap` seconds between them), mixes `audio/vo.wav`, and writes `file`, `start` and `duration` back into `vo.json`. It prints every line that runs over its `max_seconds`.

## Check before handing over

- Listen through the numbers: no line over its slot, no clipped first or last syllable (look at the waveform with `bin/sgv look` if needed), and consistent level (the export normalises loudness, but the lines should sit within 2 dB of each other).
- Transcribe `audio/vo.wav` (`bin/sgv transcribe audio/vo.wav --lang en|ar`) and compare with `vo.json`. Mispronounced product names mean a retake (`files`) or a respelling sent to the engine instead of the text: add `"say_as": "Speaking Jeenie …"` to the line in `vo.json` (captions still use `text`). Never change `text` to match a mistake.
- Over-long lines: ask the scriptwriter for a shorter line (`→ @scriptwriter`) rather than speeding the voice up past 1.1×.

Log the engine, the voice, the line timings and any retakes in `crew/voice.md`, and a summary block in `crew/log.md` with `→ @editor: voice-over ready, audio/vo.wav at 0`.
