"""Command line entry point: `bin/sgv <command> ...`."""

import argparse
import json
import subprocess
import sys
from pathlib import Path

from sgv import analyze, captions, doctor, ff, lock, motion, paths, presets, project, render, screens, voice


def cmd_new(a):
    root = project.create(a.name, a.aspect, a.theme, a.lang, a.title)
    print(f"Created {root.relative_to(paths.ROOT)}\n  drop footage in footage/, music/VO in audio/, logos/screens in assets/\n"
          f"  then: bin/sgv ingest {root.name}")


def cmd_ingest(a):
    p = project.find(a.project)
    rows = [analyze.describe(f) for d in ("footage", "audio", "assets") for f in analyze.media_files(p.root / d)]
    (p.build / "media.json").write_text(json.dumps(rows, indent=2))
    print(analyze.table(rows, p.root) if rows else "No media yet — add files to footage/, audio/ or assets/.")
    if a.sheets:
        for r in rows:
            if r["kind"] == "video":
                src = Path(r["file"])
                out = p.build / "look" / f"{src.stem}.jpg"
                analyze.contact_sheet(src, out, n=a.n)
                print(f"  sheet  {out.relative_to(paths.ROOT)}")


def cmd_probe(a):
    target = Path(a.path)
    rows = [analyze.describe(f) for f in analyze.media_files(target)]
    print(json.dumps(rows, indent=2) if a.json else analyze.table(rows, target if target.is_dir() else target.parent))


def cmd_look(a):
    src = Path(a.file)
    out = Path(a.out) if a.out else paths.ROOT / "build" / "look" / f"{src.stem}-{a.start:g}.jpg"
    if a.at is not None:
        analyze.frame(src, a.at, out)
    else:
        analyze.contact_sheet(src, out, n=a.n, cols=a.cols, start=a.start, end=a.end)
    print(out)


def cmd_silence(a):
    src = Path(a.file)
    keep = analyze.speech_ranges(src, a.noise, a.min_silence, a.pad)
    total = ff.probe(str(src))["duration"]
    kept = sum(b - a_ for a_, b in keep)
    for s, e in keep:
        print(f"  keep {analyze.fmt_time(s)} → {analyze.fmt_time(e)}  ({e - s:.2f}s)")
    print(f"{len(keep)} ranges, {kept:.1f}s of {total:.1f}s kept ({100 * kept / max(total, 0.01):.0f}%)")
    if a.apply:
        p = project.find(a.apply)
        rel = str(src.resolve().relative_to(p.root)) if src.resolve().is_relative_to(p.root) else str(src.resolve())
        clips = [{"type": "video", "src": rel, "in": s, "out": e, "label": f"jump {i + 1}"} for i, (s, e) in enumerate(keep)]
        p.edit["timeline"].extend(clips)
        p.edit_path.write_text(json.dumps(p.edit, indent=2, ensure_ascii=False) + "\n")
        print(f"Appended {len(clips)} clips to {p.edit_path.relative_to(paths.ROOT)}")


def cmd_scenes(a):
    cuts = analyze.scenes(Path(a.file), a.threshold)
    print("\n".join(f"  cut at {analyze.fmt_time(t)}  ({t}s)" for t in cuts) or "  no scene changes found")


def cmd_loudness(a):
    m = analyze.loudness(Path(a.file))
    print(f"integrated {m['input_i']} LUFS · true peak {m['input_tp']} dBTP · range {m['input_lra']} LU")


def cmd_transcribe(a):
    src = Path(a.file)
    out = Path(a.out) if a.out else src.with_suffix("")
    srt = captions.transcribe(src, out, lang=a.lang, model=a.model, max_len=a.max_len)
    print(srt)


def cmd_captions(a):
    """Transcribe the project's current cut, so caption timing matches the timeline (or, with --from-vo,
    build the captions from the approved script and the voice-over timings)."""
    p = project.find(a.project)
    if a.from_vo:
        vo = p.root / (a.vo or "crew/vo.json")
        srt = captions.from_vo(json.loads(vo.read_text(encoding="utf-8")), p.root / "captions" / "master.srt")
        p.edit["captions"] = {**p.edit.get("captions", {}), "src": str(srt.relative_to(p.root)), "burn": True}
        p.edit_path.write_text(json.dumps(p.edit, indent=2, ensure_ascii=False) + "\n")
        print(f"{srt.relative_to(paths.ROOT)} — from {vo.relative_to(p.root)}")
        return
    drafts = render.render(p, draft=True)
    out = p.root / "captions" / "master"
    srt = captions.transcribe(drafts[0], out, lang=a.lang or ("auto" if p.lang == "auto" else p.lang), model=a.model)
    p.edit["captions"] = {**p.edit.get("captions", {}), "src": str(srt.relative_to(p.root)), "burn": True}
    p.edit_path.write_text(json.dumps(p.edit, indent=2, ensure_ascii=False) + "\n")
    print(f"{srt.relative_to(paths.ROOT)} — proofread it, then `bin/sgv render {p.name}`")


def cmd_voice(a):
    p = project.find(a.project)
    script = p.root / a.script
    lines = voice.run(p, script, a.engine, voice=a.voice, take=p.path(a.take) if a.take else None, gap=a.gap,
                      lead=a.lead, min_silence=a.min_silence, rate=a.rate, clean_up=not a.no_enhance, keep_timing=a.keep_timing)
    over = 0
    for l in lines:
        limit = l.get("max_seconds")
        flag = f"  OVER by {l['duration'] - limit:.2f}s" if limit and l["duration"] > limit else ""
        flag += f"  pushed {l['late']:.2f}s late (previous line ran long)" if l.get("late") else ""
        over += bool(flag)
        print(f"  {l['id']:>4}  {analyze.fmt_time(l['start']):>9}  {l['duration']:5.2f}s{flag}")
    print(f"{p.root.relative_to(paths.ROOT)}/audio/vo.wav  {len(lines)} lines"
          + (f" · {over} over their slot" if over else "") + f" · timings written to {a.script}")


def cmd_voices(a):
    found = voice.voices(tuple(a.lang.split(",")), include_default=a.all)
    if not found:
        print("No matching voices. Add them in System Settings → Accessibility → Spoken Content → System voice → "
              "Manage Voices (Siri voices can't be used by apps).")
        return
    print(f"  {'voice':26} {'locale':8} {'quality':9} {'gender':7} usable by say")
    for v in found:
        print(f"  {v['name']:26} {v['lang']:8} {v['quality']:9} {v['gender']:7} {'yes' if v['say'] else 'no'}")
    if any(v["lang"].startswith("ar") for v in found):
        print("  note: Apple's Arabic voices (ar-001) are Modern Standard Arabic with a Gulf accent; there is no Egyptian "
              "voice. For Egyptian Arabic, record it yourself (bin/sgv voice <p> --engine files) or use ElevenLabs.")
    if a.try_text:
        out_dir = Path(a.out or paths.ROOT / "build" / "voices")
        out_dir.mkdir(parents=True, exist_ok=True)
        for v in found:
            if v["say"]:
                f = out_dir / f"{v['name'].split(' (')[0].lower()}-{v['quality']}.aiff"
                subprocess.run(["say", "-v", v["name"], "-o", str(f), a.try_text], check=True)
                print(f"  sample  {f}")


def cmd_screen(a):
    if a.list or not a.screen:
        for c in screens.cards(a.kit):
            flag = lambda k: "--app-screen" if k == "screen" else f"--{k}"
            opts = " ".join(f"{flag(k)} {v!r}" if " " in v else f"{flag(k)} {v}" for k, v in c["options"].items())
            where = f"#{c['route']}" if c["route"] else ""
            print(f"  {c['kit']:6} {c['id']:30} {where:16} {opts:44} {c['name']}")
        return
    p = project.find(a.project)
    out = p.root / "assets" / "screens" / f"{a.name or a.screen}.png"
    # the mobile kit's "screen" URL option is --app-screen here: the positional `screen` is the card id
    opts = {k: getattr(a, "app_screen" if k == "screen" else k) for k in screens.OPTIONS}
    screens.capture(a.screen, out, kit=a.kit, options=opts, size=a.size, scale=a.scale)
    info = ff.probe(str(out))["video"]
    print(f"{out.relative_to(paths.ROOT)}  {info['width']}x{info['height']}")


def cmd_timeline(a):
    p = project.find(a.project)
    print(f"{p.edit.get('title', p.name)} · {p.aspect} · {p.fps}fps · {p.theme} · {p.lang}")
    for s in p.schedule():
        print(f"  [{s['index']:>2}] {analyze.fmt_time(s['start']):>9} → {analyze.fmt_time(s['end']):>9}  "
              f"{s['type']:6} {s['transition']:9} {s['label']}")
    print(f"  total {analyze.fmt_time(p.total_duration())}")


def cmd_render(a):
    p = project.find(a.project)
    names = [n.strip() for n in a.preset.split(",")] if a.preset else None
    for out in render.render(p, names, draft=a.draft):
        info = ff.probe(str(out))
        v = info["video"]
        print(f"{out.relative_to(paths.ROOT)}  {v['width']}x{v['height']}  {analyze.fmt_time(info['duration'])}  "
              f"{out.stat().st_size / 1e6:.1f} MB")


def cmd_match(a):
    """Check a match cut: the last frame before clip N, the first frame of clip N, and the two laid over each other.
    Shared geometry (a ring, a card, a number) should sit still in the overlay; anything that doubles is off."""
    p = project.find(a.project)
    i = a.clip
    tl = p.edit["timeline"]
    if not 0 < i < len(tl):
        raise SystemExit(f"clip must be between 1 and {len(tl) - 1}")
    w, h = (int(x) for x in a.size.split("x")) if a.size else (lambda d: (d["w"], d["h"]))(render._draft_preset(p))
    aspect = p.aspect if not a.size else ("9:16" if h > w else "16:9" if w > h else "1:1")
    before = render.build_segment(p, tl[i - 1], w, h, aspect, True)
    after = render.build_segment(p, tl[i], w, h, aspect, True)
    out = p.build / "look" / f"match-{i}-{w}x{h}.jpg"
    out.parent.mkdir(parents=True, exist_ok=True)
    last = max(0, p.clip_duration(tl[i - 1]) - 1.5 / p.fps)
    ff.run(["ffmpeg", "-ss", f"{last:.3f}", "-i", before, "-i", after, "-filter_complex",
            "[0:v]trim=end_frame=1,setpts=PTS-STARTPTS,format=yuv420p,split=2[a1][a2];"
            "[1:v]trim=end_frame=1,setpts=PTS-STARTPTS,format=yuv420p,split=2[b1][b2];"
            "[a2][b2]blend=all_mode=average[mix];[a1][b1][mix]hstack=inputs=3[v]",
            "-map", "[v]", "-frames:v", "1", "-q:v", "3", out])
    print(f"{out}  (before | after | overlaid)")


def cmd_motion(a):
    w, h = (int(x) for x in a.size.split("x"))
    props = motion.stage_assets(json.loads(a.props) if a.props else {}, Path.cwd())
    spec = dict(composition=a.composition, props=props, width=w, height=h, fps=a.fps, duration=a.duration, theme=a.theme,
                lang=a.lang, cache_dir=paths.ROOT / "build" / "motion")
    if a.still is not None:  # one frame as a PNG: the quick way to check a graphic
        out = motion.render_still(spec, a.still)
    else:
        out = motion.render(**spec)
    if a.out:
        Path(a.out).write_bytes(out.read_bytes())
        out = Path(a.out)
    print(out)


def cmd_studio(_a):
    subprocess.run(["npm", "run", "studio"], cwd=paths.MOTION)


def cmd_presets(_a):
    for name, p in presets.PRESETS.items():
        print(f"  {name:20} {p['w']}x{p['h']:<5} {p['codec']:6} {p['about']}")


def cmd_clean(a):
    p = project.find(a.project)
    import shutil
    shutil.rmtree(p.root / "build", ignore_errors=True)
    print(f"Removed {p.root.name}/build")


HEAVY = {"render", "motion", "captions", "transcribe", "screen", "match"}  # commands that queue behind sgv.lock


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(prog="sgv", description="Speaking Genie video toolkit")
    ap.add_argument("-v", "--verbose", action="store_true", help="print every ffmpeg command")
    sub = ap.add_subparsers(dest="cmd", required=True)

    s = sub.add_parser("doctor", help="check this machine is ready")
    s.set_defaults(fn=lambda _a: sys.exit(doctor.run()))

    s = sub.add_parser("new", help="create a project in projects/")
    s.add_argument("name")
    s.add_argument("--aspect", default="16:9", choices=["16:9", "9:16", "1:1", "4:5"])
    s.add_argument("--theme", default="light", choices=["light", "dark"])
    s.add_argument("--lang", default="en", choices=["en", "ar"])
    s.add_argument("--title")
    s.set_defaults(fn=cmd_new)

    s = sub.add_parser("ingest", help="probe a project's media (and make contact sheets)")
    s.add_argument("project")
    s.add_argument("--sheets", action="store_true", help="contact sheet per video in build/look/")
    s.add_argument("-n", type=int, default=12)
    s.set_defaults(fn=cmd_ingest)

    s = sub.add_parser("probe", help="table of media facts for a file or folder")
    s.add_argument("path")
    s.add_argument("--json", action="store_true")
    s.set_defaults(fn=cmd_probe)

    s = sub.add_parser("look", help="contact sheet (or one frame with --at) to view footage")
    s.add_argument("file")
    s.add_argument("-n", type=int, default=12)
    s.add_argument("--cols", type=int, default=4)
    s.add_argument("--start", type=float, default=0)
    s.add_argument("--end", type=float)
    s.add_argument("--at", type=float, help="single frame at this time (s)")
    s.add_argument("-o", "--out")
    s.set_defaults(fn=cmd_look)

    s = sub.add_parser("silence", help="find speech ranges; --apply appends jump-cut clips to a project")
    s.add_argument("file")
    s.add_argument("--noise", type=float, default=-35, help="silence threshold dB")
    s.add_argument("--min-silence", type=float, default=0.6)
    s.add_argument("--pad", type=float, default=0.15)
    s.add_argument("--apply", metavar="PROJECT")
    s.set_defaults(fn=cmd_silence)

    s = sub.add_parser("scenes", help="list scene-change timestamps")
    s.add_argument("file")
    s.add_argument("--threshold", type=float, default=0.35)
    s.set_defaults(fn=cmd_scenes)

    s = sub.add_parser("loudness", help="measure integrated loudness")
    s.add_argument("file")
    s.set_defaults(fn=cmd_loudness)

    s = sub.add_parser("transcribe", help="whisper.cpp transcript → .srt + .json")
    s.add_argument("file")
    s.add_argument("--lang", default="auto", help="en, ar, auto ...")
    s.add_argument("--model")
    s.add_argument("--max-len", type=int, default=42)
    s.add_argument("-o", "--out", help="output path without extension")
    s.set_defaults(fn=cmd_transcribe)

    s = sub.add_parser("captions", help="transcribe the current cut into captions/master.srt")
    s.add_argument("project")
    s.add_argument("--lang")
    s.add_argument("--model")
    s.add_argument("--from-vo", action="store_true", help="build captions from crew/vo.json text and timings")
    s.add_argument("--vo", help="vo.json path inside the project (default crew/vo.json)")
    s.set_defaults(fn=cmd_captions)

    s = sub.add_parser("voice", help="voice-over lines from crew/vo.json → audio/vo/*.wav + audio/vo.wav, timed")
    s.add_argument("project")
    s.add_argument("--engine", default="say", choices=["say", "elevenlabs", "files"])
    s.add_argument("--voice", help="say voice name or ElevenLabs voice id")
    s.add_argument("--take", help="one recorded take with pauses between lines (engine files)")
    s.add_argument("--script", default="crew/vo.json")
    s.add_argument("--gap", type=float, default=0.35, help="seconds between lines without an `at`")
    s.add_argument("--lead", type=float, default=0.3, help="seconds before the first line")
    s.add_argument("--min-silence", type=float, default=1.2, help="pause that separates lines in a take")
    s.add_argument("--rate", type=int, help="speaking rate for --engine say, words per minute (scratch timing)")
    s.add_argument("--no-enhance", action="store_true", help="skip the clean-up of a human recording (engine files)")
    s.add_argument("--keep-timing", action="store_true",
                   help="with --take: place each line where it was said (keeps the speaker's pauses) instead of at its beat")
    s.set_defaults(fn=cmd_voice)

    s = sub.add_parser("voices", help="list installed Arabic/English system voices (premium, enhanced) for --engine say")
    s.add_argument("--lang", default="ar,en", help="comma-separated language codes")
    s.add_argument("--all", action="store_true", help="include default-quality voices")
    s.add_argument("--try", dest="try_text", metavar="TEXT", help="render TEXT with every usable voice to compare")
    s.add_argument("-o", "--out", help="folder for --try samples (default build/voices)")
    s.set_defaults(fn=cmd_voices)

    s = sub.add_parser("screen", help="capture a real product screen from the web platform or mobile app kit (or --list)")
    s.add_argument("project", nargs="?")
    s.add_argument("screen", nargs="?", help="screen card id (sgv screen --list) or route, e.g. dashboard")
    s.add_argument("--list", action="store_true")
    s.add_argument("--name", help="output name in assets/screens/ (default: the screen id)")
    for k in screens.OPTIONS:
        s.add_argument("--app-screen" if k == "screen" else f"--{k}", dest="app_screen" if k == "screen" else k)
    s.add_argument("--kit", choices=list(screens.KITS), help="web platform or mobile app (default: from the card id)")
    s.add_argument("--size", help="CSS viewport (default: web 1440x900, mobile 430x884)")
    s.add_argument("--scale", type=float, help="device pixel ratio (default: web 2, mobile 3)")
    s.set_defaults(fn=cmd_screen)

    s = sub.add_parser("timeline", help="show clip start/end times on the assembled timeline")
    s.add_argument("project")
    s.set_defaults(fn=cmd_timeline)

    s = sub.add_parser("render", help="render exports (or a fast --draft)")
    s.add_argument("project")
    s.add_argument("--preset", help="comma-separated presets (default: edit.json exports)")
    s.add_argument("--draft", action="store_true")
    s.set_defaults(fn=cmd_render)

    s = sub.add_parser("match", help="check a match cut: last frame before clip N, first of N, and both overlaid")
    s.add_argument("project")
    s.add_argument("clip", type=int)
    s.add_argument("--size", help="WxH (default: the draft size of the project's aspect)")
    s.set_defaults(fn=cmd_match)

    s = sub.add_parser("motion", help="render one branded motion graphic")
    s.add_argument("composition", choices=motion.COMPOSITIONS)
    s.add_argument("--props", help="JSON props")
    s.add_argument("--size", default="1920x1080")
    s.add_argument("--fps", type=int, default=30)
    s.add_argument("--duration", type=float, default=4)
    s.add_argument("--theme", default="light", choices=["light", "dark"])
    s.add_argument("--lang", default="en", choices=["en", "ar"])
    s.add_argument("--still", type=float, metavar="T", help="render only the frame at T seconds, as a PNG")
    s.add_argument("-o", "--out")
    s.set_defaults(fn=cmd_motion)

    s = sub.add_parser("studio", help="open Remotion Studio to preview motion graphics")
    s.set_defaults(fn=cmd_studio)

    s = sub.add_parser("presets", help="list export presets")
    s.set_defaults(fn=cmd_presets)

    s = sub.add_parser("clean", help="delete a project's build cache")
    s.add_argument("project")
    s.set_defaults(fn=cmd_clean)

    a = ap.parse_args(argv)
    ff.VERBOSE = a.verbose
    try:
        if a.cmd in HEAVY and not (a.cmd == "screen" and a.list):
            with lock.heavy(a.cmd):
                a.fn(a)
        else:
            a.fn(a)
    except ff.FFError as e:
        print(f"error: {e}", file=sys.stderr)
        return 1
    return 0
