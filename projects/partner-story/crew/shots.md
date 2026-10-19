# Shots · Partner Story (selects)

Cinematographer, 2026-10-19. Source: 13 DJI clips, 1080×1920, 23.976 fps, h264, SDR (no HDR, no rotation issues).
Output 9:16 at 1080×1920, so `fill` at scale 1.0 is a 1:1 pass-through and `focus` only matters for punch-ins.

**How the in/outs were set.** `sgv silence` is useless on this audio (room tone keeps it at one range per clip), so
every in/out sits in a measured gap in a 20 ms RMS envelope of the clip audio, cross-checked with word-level whisper
on short snippets and with `sgv look` frames at each edge. All times are source seconds. In points sit 0.02–0.05 s
before speech onset; out points sit inside the following breath.

Clip names below use the take number: `11` = `footage/DJI_20260831150848_0011_D.MP4`, `12` = `…151425_0012_D.MP4`,
`2` = `…144545_0002_D.MP4`, `9` = `…150326_0009_D.MP4`, `7` = `…145921_0007_D.MP4`, `4` = `…144920_0004_D.MP4`.

## Selects

| Beat | Clip | In | Out | Dur | Scale | Focus | Fit | Grade | Why / words at the edges |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B1+B2 | 11 | 3.18 | 12.40 | 9.22 | 1.0 (wide) | 0.52,0.38 | fill | lift | One continuous take: «… Speaking Genie بدأت من مشكلة شخصية · أنا قعدت لسنين كتيرة … أطوّر الإنجليش». No cut at the B1/B2 line (breath 5.96–6.20 stays). Out in the 12.36–12.48 gap before «باخد كورسز». Eyes to lens at the in frame. |
| B3 | 11 | 19.90 | 34.58 | 14.68 | **1.15 (close)** | 0.52,0.38 | fill | lift | In on «الجرامر بتاعي كويس» (gap 19.66–19.98). Out after «مش مرتاح أصلاً» (gap 34.56–35.18). The punch-in covers the 12.40→19.90 jump. |
| B4 | 11 | 35.16 | **49.64** | 14.48 | 1.0 (wide) | 0.52,0.38 | fill | lift | In on «وبعدين لما ظهرت الأدوات». **Changed out** (see "Ranges that don't hold"): runs through «أجرب أستخدم practice مختلفة · حسيت إن دي حاجة ممكن تكون opportunity» to the gap at 49.66–49.98. Back to wide covers the 0.6 s trim at 34.58→35.16. |
| B5 | 11 | 49.95 | 58.56 | 8.61 | **1.15 (close)** | 0.55,0.40 | fill | lift | In on «عرضت الفكرة دي على شريكي». Out after «وطلع من هنا Speaking Genie» (gap 58.52–58.78). Ends eyes to lens. |
| B6 | motion | | | 4.0 | | | | | TitleCard, `dip` in |
| B7 | 2 | 16.98 | 23.80 | 6.82 | 1.0 | 0.55,0.40 | fill | none | In on «فإحنا مش كورس defined» (gap 16.56–16.98). Out after «… حسب الموديل اللي إنت بتشتغل عليه». **No breath here**: he runs straight into «فممكن». Put `fadeOut` 0.06 s on the clip audio; the picture is under the `flow-aiPlan` cover by then. |
| B8 | 12 | 65.36 | 85.80 | 20.44 | 1.0 (wide) | 0.53,0.44 | fill | lift | In at speech onset after the 64.66–65.36 gap. **He says «فكان إيه، طلعنا بفكرة»**: there is no breath before «طلعنا» (see below). Out after «فمتاح لك 24 ساعة» (gap 85.80–86.0). Contains «وإنت بتبراكتس عليه» (≈77.3–79.8) and a 0.5 s pause inside «إنك مش · محتاج» (68.2–68.7). No punch-in: the blinds moiré gets worse when scaled. |
| B9 | 9 | 30.75 | 45.52 | 14.77 | 1.0 | 0.49,0.38 | fill | none | In on «فإحنا بنساعدك إنك ترتاح» (gap 30.48–30.78). Out after «… لا ما بتتنطقش كده، بتتنطق كده» (gap 45.50–45.90). Best-lit take, eyes to lens at both ends, slight smile on the out. |
| B10 | 7 | 6.25 | 19.86 | 13.61 | 1.0 | 0.57,0.36 | fill | none | In on «بعد كل session» (gap 6.18–6.36). Out after «بشكل أسبوعي وبشكل شهري» (gap 19.84–20.40). Out frame turns his head away to his right: keep `23-reports` covering the last second as the treatment plans. |
| B11 | 4 | 30.22 | 35.18 | 4.96 | 1.0 | 0.52,0.37 | fill | none | In on «زيها زي الجيم كده» (gap 29.68–30.30). Out after «كل ما مستواك يتحسن» (gap 35.15–35.40). Eyes are slightly off-lens for the first ~0.3 s, then to the lens. Acceptable. |
| B12 | 11 | 69.55 | 75.15 | 5.60 | **1.15 (close)** | 0.52,0.38 | fill | lift | In on «وبعدين ابتدت تتطور» (gap 69.50–69.84). Out after «والناس بتدخل عليه وتتمرن وكده» (silence from 75.12). Ends on a smile to the lens, a good last face before the dip to the end card. |
| B14 | motion | | | 5.0 | | | | | EndCard, `dip` in |

Wide/close rhythm inside clip 11: wide (B1–B2) → close (B3) → wide (B4) → close (B5). Every join between two ranges of
one clip changes size. Every other join changes setup (11 → 2 → 12 → 9 → 7 → 4 → 11), so they need no punch-in.

## Ranges that don't hold up on camera

1. **B4 out at 45.06 (treatment).** No breath there: «الشخصية» runs straight into «أجرب» (continuous energy 44.4–45.3).
   A cut at 45.06 clips a word. **Fix (used above):** run to 49.64, which adds «أجرب أستخدم practice مختلفة، حسيت إن دي
   حاجة ممكن تكون opportunity». That line also bridges into B5's «عرضت الفكرة دي على شريكي». The B4→B5 join now drops
   only a 0.3 s breath, still covered by the punch-in. Cheaper alternative: out at 47.12 (the gap after «مختلفة»), −2.5 s.
2. **B8 in "on «طلعنا»" (treatment).** Not possible on the breath: «فكان إيه، طلعنا» is one phrase (65.4–66.5) and the next
   gap is after «طلعنا». The in at 65.36 keeps «فكان إيه»; it plays naturally ("so what did we do? we came up with…").
   Captions must include it.
3. **B1 in "on «Speaking Genie», ~3.0" (treatment).** Speech starts at 3.24, not 3.0. The first ~0.3 s (3.24–3.55) is
   a short word whisper reads as «ليش» or «مش» (probably «ليه؟» answering his own question). There is no clean gap after
   it, so the in is 3.18 and the word stays. **→ @editor: listen.** If it is a filler, try an in at 3.60 (a soft dip at
   3.58–3.66), but check it doesn't clip the «S».
4. **B3 in at 19.68.** That is still inside «بفهم كويس». Moved to 19.90.

## Exposure and grade

Clips 11 and 12 are backlit by the window, with the blinds clipped to white. Measured face luma (8-bit Y, cheek and
forehead patch) is **~73 in 11 and 12** against **~103–113** in 2, 7, 9 and 4, about one stop under. On a phone the
two clips read as a silhouette next to the others. Grain and focus are fine, so a lift fixes this; no reshoot is needed.

- A lift helps. Tested on frames 11@20 s and 12@70 s: `curves=all='0/0 0.25/0.33 0.5/0.6 0.8/0.86 1/1'` brings the face
  to ~88 and keeps the black shirt black. The window is already clipped, so it costs nothing. (`eq=gamma=1.25` reaches
  ~93 but flattens the blacks; I prefer the curve.) Clip 12 also has a cool cast on the desk; leave it.
- **sgv can't do this yet.** `sgv/render.py` `build_segment` has no colour or grade key on video clips: only `focus`,
  `fit`, `speed`, `volume`, `mute`, `fadeIn` and `fadeOut`.
- **sgv has no punch-in either.** `scale`/zoom exists only as `kenburns` on image clips. On a 9:16 source going to 9:16,
  `focus` alone does nothing, because the crop is zero.

**→ @producer (sgv change, owner of `sgv/render.py`):** two optional video-clip keys, appended after `_fit_filter` in
`build_segment`, with the clip dict already part of the cache hash:
- `"scale": 1.15` → `scale=iw*1.15:ih*1.15:flags=lanczos,crop=W:H:(iw-W)*fx:(ih-H)*fy`, using `focus` as (fx, fy).
  With focus set to the face position, this is a straight push toward the face. Keep it ≤ 1.2: these are 1080p
  sources, and 1.15 is the softest I'd accept.
- `"grade": "<ffmpeg filter>"` (or a named preset such as `"lift"` mapped to the curve above), inserted before the fit.

Until those exist, the editor can't punch in. The fallback is to cover each same-clip join with a screen or a cut
to another setup. That isn't available inside B1–B5, so the treatment's punch-ins need this change.

## Frame rate

The footage is 23.976 fps, and `edit.json` has `"fps": 30`. sgv conforms with `fps=30`, which repeats every fourth
frame and gives a visible judder on talking heads. **→ @editor:** set `"fps": 24` (motion graphics render at the
project fps, so they follow).

## In frame (brand check)

- **adidas logo on his shirt in every clip.** This is a third-party mark, not a competitor. It can't be removed, and
  the 1.15 punch-ins don't crop it out. Captions will sit across it on most shots. **→ @creative-director:** flag it
  only if the partner audience matters. The alternative is a reshoot.
- Apple logo on the laptop (clips 7, 12, bottom left). A wireless mic receiver with a green LED is on the desk (12).
  A CCTV dome and an AC unit are top right (clip 4). All are small and acceptable.
- Clip 12 blinds show moiré at full res; no scaling on 12.
- Handheld recorder in hand (clips 2, 7, 9, 4). It's fine and reads as "interview".
- No product screens filmed off a monitor anywhere: good.

## Running time

| | s |
| --- | --- |
| Footage selects (B1–B5, B7–B12) | 113.19 |
| B6 TitleCard | 4.0 |
| B14 EndCard | 5.0 |
| **Sum** | **122.2** |
| minus transition overlaps (dip B6 ~0.5, push-right B7 ~0.35, dip B14 ~0.5) | ≈ **120.8 (2:01)** |

This is within the ±5 s of the 2:00 target. Trims, in order, if the editor needs them:
1. B4 out 47.12 instead of 49.64 (−2.5 s; drops the "opportunity" line, and the B4→B5 jump is still covered by the punch).
2. B8: cut «وإنت بتبراكتس عليه» (≈77.3–79.8) under the screen cover (−2.5 s). It's audio-only, so check for a breath first.
3. B6 TitleCard 3.5 s (−0.5 s).

Optional additions, only if the cut lands short:
- B3 in at 16.98 for «ولكن في الآخر أنا بفهم كويس، الجرامر بتاعي كويس» (+2.9 s; gap 16.62–17.0). This makes the gap sharper.
- B9 in at 28.35 for «في العادي إنت ما بتبقاش مرتاح في الأول، فإحنا بنساعدك» (+2.4 s; gap 28.06–28.38).

## Reserve takes

- B11 alt: clip 5 (`…145117_0005`) ≈18.0–21.5, «… تنزل الجيم، فإنت محتاج تخصص وقت من يومك» (not checked frame by frame).
- B7 alt (from the treatment): clip 1, 11.00–26.00. Not checked; ask me if it's needed.
