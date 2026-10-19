# Crew handoff protocol

Every crew agent reads this file first. It says where work lives, what each file looks like, and how agents leave work for each other. The producer (main session) dispatches agents and routes their notes; agents never call each other directly.

## Where things live

```
projects/<slug>/
  edit.json, NOTES.md            editor (NOTES.md: decisions log, anyone may append)
  footage/ audio/ assets/        source media: read-only, except the folders below
  audio/vo/                      voice-director: one file per line + vo.wav
  assets/screens/                screen-producer: captured product screens
  captions/                      editor
  crew/
    brief.md                     producer: goal, audience, platforms, design system + track, length, language, must-haves
    treatment.md                 creative-director
    script.md                    scriptwriter: human-readable script, both languages side by side
    vo.json                      scriptwriter: voice-over lines (machine-readable, see below)
    onscreen.json                scriptwriter: every piece of on-screen text
    shots.md                     cinematographer: selects or shoot plan
    screens.md                   screen-producer: screen list per beat, capture settings, callouts
    voice.md                     voice-director: casting, engine, line timings, retake notes
    motion.md                    motion-designer: graphics list with composition + props
    sound.md                     sound-designer: music choice, levels, mix notes
    review-<n>.md                creative-director: notes on draft n
    qa-<n>.md                    qa-reviewer: checks on draft n (pass/fail per item)
    log.md                       everyone: append-only handoffs
```

Each file has **one owner**. Read anyone's files; write only your own. Media in `footage/`, the user's files in `audio/` and `assets/`, and `brand/` are never modified.

## log.md

Append (never rewrite) one block per dispatch:

```
## <role> · <what you did, in a few words>
- wrote: crew/script.md, crew/vo.json
- decided: open on the teacher's line, not the logo (hook in 2 s)
- → @voice-director: line 4 must land under 2.5 s; it sits on a 2.5 s screen beat
- ? user: is "Start a free pilot" or "Book a demo" the CTA for this one?
```

`→ @role` is a request to another agent; the producer passes it on in that agent's next prompt. `? user` is a question only the user can answer; the producer batches these. Keep blocks short.

## The beat sheet (treatment.md)

The treatment's beat table is the spine every other file refers to. Beat ids are `B1`, `B2`, … and never get renumbered; to add a beat, insert `B3a`.

| Beat | Time | Purpose | Visual source | Words |
| --- | --- | --- | --- | --- |
| B1 | 0:00–0:02 | Hook: the problem | footage: teacher, close | VO L1 |

Visual source is one of `footage: …`, `screen: <screen id>`, `motion: <Composition>`, `title`, or `color`.

## vo.json

```json
{
  "lang": "ar-eg",
  "voice": { "engine": "elevenlabs", "voice_id": "…", "notes": "warm, mid-30s, calm teacher" },
  "lines": [
    { "id": "L1", "beat": "B1", "text": "طلابك بيتكلموا، وSpeaking Genie بيسمعهم.", "max_seconds": 2.4,
      "direction": "calm, a smile on 'بيسمعهم'" }
  ]
}
```

- `text` is exactly what is spoken; the captions come from it. Product names stay in Latin script (`Speaking Genie`, `AI`, `feedback`, `group`), as people say them.
- `say_as` (optional, voice-director) is what a synthetic voice reads instead of `text`: full تشكيل, English terms in Arabic letters, `[[slnc 250]]` pauses. Captions never use it.
- `max_seconds` is the slot in the beat. Budget about 2.6 words per second in English and 2.2 in Egyptian Arabic.
- After recording, the voice-director adds `"file"`, `"start"` and `"duration"` to each line. The editor places voice-over from those numbers.
- A bilingual project has one `vo.json` per language: `vo.json` (main) and `vo.en.json` or `vo.ar-eg.json`.

## onscreen.json

```json
[{ "id": "T1", "beat": "B2", "kind": "title|stat|quote|lower-third|callout|endcard",
   "en": "Feedback teachers can act on", "ar": "ملاحظات يقدر المعلم يعمل بيها" }]
```

On-screen Arabic is Modern Standard Arabic (brand rule) unless the treatment says otherwise. Sentence case, no exclamation marks, no emoji, `·` joins metadata, currency `E£`.

## Facts and claims

Use only facts from: the brief, the user's messages, the user's footage and transcripts, and the design system (`brand/`, `brand/product-ui/` when present; the "how it works" script in `brand/product-ui/ui_kits/web-platform/Onboarding Video Script.md` is the approved product story). **Never invent numbers, customers, quotes or features.** If a beat needs a number nobody gave you, write `[[NUMBER?]]` and add a `? user` line.

## Language

- `en`: plain, warm, confident English. Short sentences. Verb + object CTAs ("Start a free pilot").
- `ar-eg`: Egyptian Arabic voice-over (عامية مصرية), natural code-switching for the product terms Egyptian teachers use in English (task, feedback, session, group, dashboard). It should sound spoken, not translated. On-screen text is Modern Standard Arabic. Use the platform glossary (`brand/product-ui/guidelines/rtl-glossary*.html`) for UI terms.
- Numbers, URLs, and Latin product names stay left-to-right inside Arabic text.

## Brand

`brand/BRAND.md` and `brand/tokens.json` are law: one purple accent, no gradients outside the logo and avatars, calm motion (no bounce), canvas `#F7F8FB` or dark `#0B1020`, Plus Jakarta Sans and IBM Plex Sans Arabic. Check your work against it before you hand over.
