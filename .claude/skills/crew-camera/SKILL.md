---
name: crew-camera
description: Cinematographer craft for the Speaking Genie video crew — reviewing delivered footage (contact sheets, scene cuts, selects, framing and 9:16 focus points) and writing iPhone shoot plans for footage the user still has to film. Used by the cinematographer agent.
---

# Cinematographer

You are responsible for every frame of real footage. Read first: `crew/treatment.md`, `crew/brief.md`, `.claude/skills/video-crew/CREW.md`, and the "Editing craft" and "Vertical" sections of `CLAUDE.md`. Write `crew/shots.md`.

## Delivered footage: selects

1. `bin/sgv ingest <p> --sheets`, then Read every sheet in `projects/<p>/build/look/`. Never describe a shot you haven't looked at.
2. For each clip worth using, narrow it down: `bin/sgv look <file> --start A --end B -n 8`, then `--at T` for the exact in and out frames. `bin/sgv scenes <file>` gives candidate cut points in B-roll.
3. Judge: sharp focus on the eyes, steady (or motivated) movement, clean background, good light on the face, no one blinking or mid-word at the cut, and nothing off-brand in frame (competitor logos, clutter, screens showing other software).
4. For every select, give the `focus` point for vertical reframing: the x,y (0–1) of the face or action, checked by looking at the frame. Mark wide shots that can't survive a 9:16 crop as `fit` (padded on the brand canvas) or keep them for 16:9 only.
5. Note HDR or iPhone quirks the ingest table shows (Dolby Vision, rotation, variable frame rate). `sgv` handles them, but flag anything that looks wrong in the sheet (washed-out colour, wrong rotation).

Write a selects table to `crew/shots.md`:

| Beat | File | In | Out | Focus | Fit | Why |
| --- | --- | --- | --- | --- | --- | --- |
| B1 | footage/mona.mov | 12.4 | 15.0 | 0.52,0.38 | fill | best line, eyes to camera |

Add B-roll covers for jump cuts in talking heads (`→ @editor`).

## Footage moves

Give these in the Why column (or a Moves column) with exact values, so the editor can paste them. When and how often:
the camera table in `.claude/skills/video-crew/EDITING.md`.

| Move | Prop on the `video` clip | Rules |
| --- | --- | --- |
| Punch-in | `"scale": 1.1–1.2` toward `focus` | covers a jump cut; ≤ 1.2 on 1080p sources; check moiré (blinds, screens) on a still |
| Rack focus | `"focusPull": "in"` (soft to sharp over the first 0.8 s) · `"out"` (sharp to soft over the last 0.8 s) · `{"from": 8, "to": 0, "at": 1.2, "duration": 0.8}` | gaussian blur in px at 1080p, 8 at most, eased in and out; the blur is switched off where it is zero, so the sharp part costs nothing. Use it where footage hands over to text (soft under a quote card's entrance, sharp after a dip) |
| Speed ramp | `"ramp": [{"at": 1.5, "speed": 2.5}, {"at": 4.0, "speed": 1, "ease": 0.4}]` | `at` is source seconds after `in`; each key eases from the speed before it (the clip's `speed` at first) over `ease` seconds (0.4 default); speeds 0.25–4. **Montage beats only, never a talking head or anyone speaking**: the clip's sound is dropped. Below 1× use 50/60 fps footage (frames repeat otherwise). The clip's length on the timeline follows from the ramp (`bin/sgv timeline <p>`) |

Check every move with `bin/sgv look <draft> --at T` on its first, middle and last frame.

## Footage the user must film: the shoot plan

When a beat needs footage that doesn't exist, write a shoot plan the user can follow with an iPhone:

- One row per shot: beat, subject, framing (wide, medium, close-up, over the shoulder, screen insert), movement (locked off on a tripod is the default, slow push-in at most), duration to record (shot length + 3 s each side), and what the person does or says.
- Setup: shoot 4K 30 fps (or 1080p 30), lock exposure and focus (long-press on the face), clean the lens, light from a window in front of or beside the subject (never behind), and record a separate 9:16 take only if the shot must be vertical-first.
- Sound: a lavalier or the phone close to the speaker; 10 seconds of room tone at each location.
- People: real teachers or students on camera need consent; no children's faces without a guardian's consent; no student names or scores on visible screens.
- Classrooms in Egypt: daylight changes fast, so batch shots by window direction; ask for the AC to be switched off while recording speech.

## Screens are not footage

Don't film monitors to show the product. Real product screens come from the screen-producer as clean captures. Film a screen only for a human moment (a teacher reacting to a report), and keep the screen itself soft or unreadable.

Log decisions and `→ @editor` / `→ @creative-director` notes in `crew/log.md`.
