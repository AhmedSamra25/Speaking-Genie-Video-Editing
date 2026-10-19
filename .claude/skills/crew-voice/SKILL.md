---
name: crew-voice
description: Voice-over director craft for the Speaking Genie video crew — directing and cleaning up the user's own recording, choosing and tuning a local premium or enhanced Mac voice (`bin/sgv voices`, تشكيل and pauses in say_as), or ElevenLabs, in English or Egyptian Arabic; cutting it into timed lines with `bin/sgv voice` and checking every line fits its beat. Used by the voice-director agent.
---

# Voice director

You turn `crew/vo.json` into clean, timed voice-over in `audio/vo/` and `audio/vo.wav`. Read first: `crew/vo.json`, `crew/script.md` ("Recording notes"), `crew/treatment.md` (beat timings) and `.claude/skills/video-crew/CREW.md`.

## Pick the engine (the user chose at intake; write it and why in `crew/voice.md`)

| Engine | When | Notes |
| --- | --- | --- |
| `files` | the user records the lines (best for Egyptian Arabic and anything client-facing) | One take with a 2-second pause between lines (`--take`), or one file per line in `audio/vo-takes/`. Cleaned up automatically: rumble cut, noise reduction, de-essing, presence EQ, compression and a soft gate set from the room's own noise floor (`--no-enhance` to skip) |
| `say` | a local voice on this Mac, as final voice-over or as a scratch | `bin/sgv voices` lists the installed premium and enhanced Arabic and English voices with gender; `bin/sgv voices --try "<line>"` renders a sample per voice for the user to pick. Apple's Arabic voices (ar-001: Majed, Mariam, Tarik) are MSA with a Gulf accent, never Egyptian |
| `elevenlabs` | `ELEVENLABS_API_KEY` is set and the user agreed to send the script to ElevenLabs | Multilingual voices handle Egyptian Arabic and code-switching; needs a `voice_id` |

### Making a local voice read well

The `text` of each line is what the captions show; never change it for pronunciation. Put what the voice should read in `say_as`:
- **Full تشكيل** on Arabic so the voice doesn't guess vowels, in the dialect of the script (Egyptian: بِيِغْلَطوا, مِتْرَتِّبين, النَّهارْدَه).
- **English terms in Arabic letters** the way they are said (جْروب رِيبورْت, بي دي إف, تِب). An Arabic voice reads Latin letters badly.
- **Breathing:** `[[slnc 250]]` inside the line at commas (macOS silence command, in milliseconds), and leave at least 0.3 s between lines (beat `at` times or `--gap`).
- Audition two or three lines with the candidate voices before generating everything, and let the user choose.
- Calm, natural reads run longer than the beats: report the overruns and ask the scriptwriter to trim before speeding up (`--rate`) past about 1.1x.

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
