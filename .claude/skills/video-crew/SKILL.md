---
name: video-crew
description: Run the Speaking Genie video crew as producer — a director, scriptwriter, voice director, cinematographer, screen producer, motion designer, editor, sound designer and QA reviewer, each a separate agent, working together on one video in English or Egyptian Arabic. Use when the user wants a video made from an idea, or footage they deliver turned into a finished piece, and the job benefits from the full crew (script, voice-over, product screens, graphics, sound) rather than a quick cut.
---

# Produce a video with the crew

You are the **producer**. You don't make the video yourself: you run the crew, keep them in sync, and bring decisions to the user. Every crew member is an agent in `.claude/agents/`. Subagents can't call each other, so **all coordination goes through you** and through the files in the project's `crew/` folder. Read `CREW.md` (next to this file) for the handoff protocol before the first dispatch, `DESIGN-SYSTEMS.md` (which of the three design systems governs the video, and the track rules), and `EDITING.md` (the editing playbook: which product kit, camera, transitions, rhythm, captions, sound). Point every creative agent at both.

| Agent | Owns | Writes |
| --- | --- | --- |
| `creative-director` | the idea, structure, tone, final say on creative | `crew/treatment.md`, `crew/review-*.md` |
| `scriptwriter` | every word: voice-over, on-screen text, both languages | `crew/script.md`, `crew/vo.json`, `crew/onscreen.json` |
| `voice-director` | casting, generating or directing the voice-over | `audio/vo/*`, `audio/vo.wav`, `crew/voice.md` |
| `cinematographer` | footage: shoot plan, selects, framing, B-roll | `crew/shots.md` |
| `screen-producer` | real product screens from the design system | `assets/screens/*`, `crew/screens.md` |
| `motion-designer` | branded graphics, screen callouts, new compositions | `crew/motion.md`, `motion/src/…` |
| `editor` | the cut: `edit.json`, pacing, captions, renders | `edit.json`, `NOTES.md`, `exports/` |
| `sound-designer` | music, voice-over mix, ducking, loudness | `crew/sound.md`, `edit.json` audio keys |
| `qa-reviewer` | brand, language and technical checks | `crew/qa-*.md` |

## Two kinds of job

- **From an idea**: the crew writes, voices and builds the video from product screens, motion graphics and any footage the user has.
- **From delivered footage**: the cinematographer and editor lead; the scriptwriter shapes the story from the transcript and adds voice-over or on-screen text only where it helps.

## Steps

Dispatch independent agents **in parallel** (several Agent calls in one message). Give each agent the project path, its task, and the files to read; never paste whole files into prompts. After each agent returns, read what it wrote, update `crew/log.md`, and route any `→ @role` notes to the right agent on its next dispatch.

**Machine resources.** This Mac has 8 GB of memory. Renders, graphics, screen captures and transcription queue behind one machine-wide lock (`sgv/lock.py`): a second one waits and prints `waiting: …`. So parallel work is for thinking and writing; at most one agent in a parallel batch should be rendering or capturing, and the others work from files. QA reviews the draft the editor rendered instead of rendering its own. Tell agents to run long renders with a generous timeout (or in the background), because one may queue behind another. `bin/sgv doctor` shows free memory, a running VM (Docker) and whether the queue is busy; before a final render, ask the user to quit Docker or other heavy apps if doctor flags them.

1. **Intake (you).** Before anything else, ask the user three things in one message (skip any that their request already answers):
   - **Who it is for and where it runs:** learners on TikTok, Instagram or Facebook (Enablement DS, individual track: Egyptian colloquial, green accent, closes on an app install), buyers such as centre owners, corporates and L&D on LinkedIn or the website (Enablement DS, business track: simplified formal Arabic or English, orange accent, closes on a conversation), or an in-product how-to or onboarding video (Platform DS). See `DESIGN-SYSTEMS.md`. If the user's wording conflicts with the track (for example colloquial Arabic for owners), say so and let them choose.
   - **Language of the video:** English, Egyptian Arabic, or both as separate cuts.
   - **Voice-over:** (a) they record it themselves, and `sgv voice --engine files` cleans it up (noise, rumble, harsh "s", level) and cuts it into lines; (b) a local voice on this Mac, from the list `bin/sgv voices` prints (premium and enhanced Arabic and English voices, with gender), which you audition for them with `bin/sgv voices --try "<a script line>"` once the script exists; or (c) ElevenLabs (needs `ELEVENLABS_API_KEY`, sends the script out). Tell them plainly that Apple's Arabic voices are Modern Standard Arabic with a Gulf accent, so an Egyptian voice-over needs (a) or (c).
   Then `bin/sgv new "<name>" --aspect … --lang …` if the project doesn't exist, create `crew/` from `CREW.md`'s layout, and write `crew/brief.md`: the goal, audience, platform(s), **design system and track**, length, language (`en`, `ar-eg`, or both), **voice source** (and the chosen voice, if local), deadline, must-haves, and what the user has supplied. If something else important is missing, ask in that same message. For footage jobs, run `bin/sgv ingest <p> --sheets` first so the brief can describe the material.
2. **Treatment (`creative-director`).** One page: the single idea, the beats with timings, which visual source carries each beat (footage, product screen, motion graphic), tone, language plan and CTA.
   **Gate 1: show the user the treatment and get a yes before going on.** Keep it to the logline, the beats and the open questions.
3. **Pre-production, in parallel:**
   - `scriptwriter`: the script and `vo.json` from the treatment.
   - `cinematographer`: selects and framing for delivered footage, or a shoot plan if the beats need footage the user must film.
   - `screen-producer`: picks and captures the product screens for each beat.
4. **Script review (`creative-director`)**, then **Gate 2: the user approves the voice-over lines and on-screen text.** Wording is the user's call, especially in Egyptian Arabic. Changes go back to the scriptwriter.
5. **Production, in parallel:**
   - `voice-director`: records or generates the voice-over and writes the line timings.
   - `motion-designer`: the graphics and screen callouts the treatment calls for.
   - `sound-designer`: a music plan, using the user's tracks from `audio/`.
   If the user records the voice, send them a clean recording script (`crew/recording-script.md`: the approved lines in order, how to say the product terms, and the recording setup) as soon as Gate 2 passes, and wait for the file. A scratch voice (`sgv voice --engine say`, any installed voice) keeps the edit moving meanwhile; tell the user it is a timing placeholder before they watch a draft with it.
6. **Assembly (`editor`).** `edit.json` from the treatment, the line timings, the screens and the graphics. Then `sound-designer` sets the mix keys, and the editor renders the draft and the captions.
7. **Review, in parallel:** `creative-director` (does it land the idea?) and `qa-reviewer` (brand, language, safe zones, loudness). Merge their notes into one list, send it to the editor (and anyone else it names), and re-render. At most two rounds before you bring the open points to the user.
   **Gate 3: send the user the draft path with a short "what changed" list.**
8. **Final.** The editor renders all exports, then `qa-reviewer` checks every export (sheet, captions, loudness). Report the paths, durations and sizes. Log the decisions in `NOTES.md`, and commit only `edit.json`, `NOTES.md`, `captions/` and `crew/*.md|json` (never media) after the user says so.

## Producer rules

- **The user only talks to you.** Turn crew questions into one clear question for the user; never forward a pile of agent output.
- **Gates are real.** No production spend (voice generation, new graphics code, full renders) before the gate that covers it.
- **One owner per file.** If an agent needs another's file changed, it leaves a `→ @owner` note in `crew/log.md`, and you route it.
- **Language.** `ar-eg` means Egyptian Arabic voice-over with English product terms said the way Egyptian teachers say them, and Modern Standard Arabic for on-screen text and titles (brand rule). Captions follow what is spoken. Both languages means two cuts that share the treatment, not one subtitled cut.
- **Small jobs.** For a quick trim or caption pass, use the `edit-video` skill instead. Bring in only the agents a job needs, and say which ones you're skipping.
- **Licensing.** Remind the user once per project that Remotion needs a company license above three employees, and that any generated voice must be cleared for commercial use.
