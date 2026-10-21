# Motion · Showcase reel

Props are in `edit.json` (look `enablement`, track `business` set once at the top). Every clip joined by a cut or a
motion transition has `enterFade`/`exitFade` false. Remotion `TransitionSeries` runs (sgv groups them): B3a→B4 (zoom), B5→B6→B7→B8 (push-right, blur, slide-scale), and
B9 alone as a run because it carries the sweep. B2 comes in on the dome from footage (ffmpeg); the B8→B9 dip is ffmpeg.
Sweep box on the EndCard button: `[0.36, 0.46, 0.28, 0.075]` in 9:16; the 16:9 cut uses the default sweep.
