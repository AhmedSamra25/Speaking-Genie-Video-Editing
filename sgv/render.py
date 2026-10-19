"""Turn a project's edit.json into finished exports.

Pipeline, per export aspect ratio:
  1. segments  every timeline clip -> uniform clip at the aspect's canvas size (cached by hash)
  2. assemble  join segments with cuts / dissolves / dips into one programme
  3. finish    overlays + logo + voice-over + ducked music + captions + loudness -> one file per preset
"""

from __future__ import annotations

import hashlib
import json
import math
import sys
import time
from pathlib import Path

from sgv import captions, ff, motion, paths, presets, sfx
from sgv.project import MOTION_BLUR, TRANSITIONS, Project

AUDIO_FMT = "aresample=48000,aformat=sample_fmts=fltp:channel_layouts=stereo"


def log(msg: str) -> None:
    print(msg, file=sys.stderr)


def _hash(*parts) -> str:
    return hashlib.sha256(json.dumps(parts, sort_keys=True, default=str).encode()).hexdigest()[:16]


def _canvas_color(theme: str) -> str:
    return paths.tokens()["themes"][theme]["canvas"].replace("#", "0x")


def _master_size(group: list, aspect: str) -> tuple:
    """Largest preset in an aspect group defines the master size for that group."""
    best = max(group, key=lambda p: p["w"] * p["h"])
    return best["w"], best["h"]


def _draft_preset(project: Project) -> dict:
    a, b = (int(x) for x in project.aspect.split(":"))
    short = 540
    w, h = (round(short * a / b / 2) * 2, short) if a >= b else (short, round(short * b / a / 2) * 2)
    return {**presets.get("draft"), "w": w, "h": h}


# -- 1. segments -----------------------------------------------------------
def _fit_filter(mode: str, w: int, h: int, focus, theme: str) -> str:
    if mode == "fit":
        return (f"scale={w}:{h}:force_original_aspect_ratio=decrease:flags=lanczos,"
                f"pad={w}:{h}:(ow-iw)/2:(oh-ih)/2:color={_canvas_color(theme)}")
    fx, fy = focus if isinstance(focus, (list, tuple)) else (focus, 0.5)
    return (f"scale={w}:{h}:force_original_aspect_ratio=increase:flags=lanczos,"
            f"crop={w}:{h}:(iw-{w})*{float(fx)}:(ih-{h})*{float(fy)}")


# named looks for a video clip's "grade" (any other string is used as an ffmpeg filter chain)
GRADES = {
    # about one stop of lift for backlit faces, keeping the blacks
    "lift": "curves=all='0/0 0.25/0.33 0.5/0.6 0.8/0.86 1/1'",
}


def _punch_in(scale: float, w: int, h: int, focus) -> str:
    """Scale a filled w×h frame up by `scale` and crop back to w×h around `focus` (a punch-in to cover a jump cut)."""
    fx, fy = focus if isinstance(focus, (list, tuple)) else (focus, 0.5)
    sw, sh = round(w * scale / 2) * 2, round(h * scale / 2) * 2
    return f"scale={sw}:{sh}:flags=lanczos,crop={w}:{h}:({sw}-{w})*{float(fx)}:({sh}-{h})*{float(fy)}"


def _caption_accent(project: Project) -> str | None:
    """Enablement look: the caption highlight takes the track's phrase colour (green, or orange on purple)."""
    d = project.motion_defaults()
    if d.get("look") != "enablement":
        return None
    return paths.tokens()["enablement"]["tracks"][d.get("track", "individual")]["phrase"]


def _fit_mode(project: Project, clip: dict, aspect: str) -> str:
    fit = clip.get("fit", project.edit.get("fit", "fill"))
    if isinstance(fit, dict):
        fit = fit.get(aspect, fit.get("default", "fill"))
    return fit


def _hdr_filter() -> str:
    if "zscale" in ff.filters() and "tonemap" in ff.filters():
        return ("zscale=t=linear:npl=100,format=gbrpf32le,zscale=p=bt709,tonemap=hable:desat=0,"
                "zscale=t=bt709:m=bt709:r=tv,")
    return "colorspace=all=bt709:iall=bt2020:fast=1,"


def build_segment(project: Project, clip: dict, w: int, h: int, aspect: str, draft: bool) -> Path:
    fps, theme = project.fps, project.theme
    dur = project.clip_duration(clip)
    cache = project.build / "cache" / "segments"
    cache.mkdir(parents=True, exist_ok=True)
    src_stamp = None
    if clip["type"] in ("video", "image"):
        sp = project.path(clip["src"])
        src_stamp = [str(sp), sp.stat().st_mtime, sp.stat().st_size]
    if clip["type"] in ("motion", "title"):
        src_stamp = motion._source_hash()
        clip = {**clip, "props": {**project.motion_defaults(), **clip.get("props", {})}}
        if clip.get("props", {}).get("src"):
            clip = {**clip, "props": motion.stage_assets(clip["props"], project.root)}
    key = _hash(clip, w, h, fps, theme, project.lang, draft, aspect, _fit_mode(project, clip, aspect), src_stamp, ff.hw(), 3)
    out = cache / f"{key}.mov"
    if out.exists():
        return out

    t = clip["type"]
    if t in ("motion", "title"):
        comp = clip.get("composition", "TitleCard")
        props = dict(clip.get("props", {}))
        if t == "title":
            props.update({k: clip[k] for k in ("overline", "title", "subtitle") if k in clip})
        src = motion.render(comp, props, width=w, height=h, fps=fps, duration=dur, theme=theme,
                            lang=clip.get("lang", project.lang), cache_dir=project.build / "cache" / "motion", draft=draft)
        clip = {"type": "video", "src": str(src), "in": 0, "fit": "fill"}
        t = "video"

    inputs, vf = [], []
    has_audio = False
    if t == "video":
        sp = project.path(clip["src"])
        info = ff.probe(str(sp))
        start = float(clip.get("in", 0))
        speed = float(clip.get("speed", 1))
        inputs += ff.decode_args(sp) + ["-ss", f"{start:.3f}", "-t", f"{dur * speed:.3f}", "-i", sp]
        has_audio = info["audio"] is not None and not clip.get("mute")
        if info["video"] and info["video"]["hdr"]:
            vf.append(_hdr_filter().rstrip(","))
        if speed != 1:
            vf.append(f"setpts=PTS/{speed}")
        if clip.get("grade"):
            vf.append(GRADES.get(clip["grade"], clip["grade"]))
        vf.append(_fit_filter(_fit_mode(project, clip, aspect), w, h, clip.get("focus", 0.5), theme))
        if float(clip.get("scale", 1)) > 1:
            vf.append(_punch_in(float(clip["scale"]), w, h, clip.get("focus", 0.5)))
    elif t == "image":
        sp = project.path(clip["src"])
        inputs += ["-loop", "1", "-framerate", str(fps), "-t", f"{dur:.3f}", "-i", sp]
        kb = clip.get("kenburns")
        fit = _fit_mode(project, clip, aspect)
        if kb in ("in", "out"):
            frames = max(1, round(dur * fps))
            z = f"1+0.08*on/{frames}" if kb == "in" else f"1.08-0.08*on/{frames}"
            vf.append(_fit_filter(fit, w * 2, h * 2, clip.get("focus", 0.5), theme))
            vf.append(f"zoompan=z='{z}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=1:s={w}x{h}:fps={fps}")
        elif kb in ("left", "right"):
            vf.append(_fit_filter("fill", round(w * 1.08 / 2) * 2, round(h * 1.08 / 2) * 2, 0.5, theme))
            x = f"(iw-{w})*t/{dur}" if kb == "left" else f"(iw-{w})*(1-t/{dur})"
            vf.append(f"crop={w}:{h}:'{x}':(ih-{h})/2")
        else:
            vf.append(_fit_filter(fit, w, h, clip.get("focus", 0.5), theme))
    elif t == "color":
        color = clip.get("color") or paths.tokens()["themes"][theme]["canvas"]
        inputs += ["-f", "lavfi", "-t", f"{dur:.3f}", "-i", f"color=c={color.replace('#', '0x')}:s={w}x{h}:r={fps}"]

    vf += [f"fps={fps}", "setsar=1", "format=yuv420p", f"tpad=stop_mode=clone:stop_duration=2", f"trim=duration={dur:.4f}",
           "setpts=PTS-STARTPTS"]
    fade_in, fade_out = clip.get("fadeIn"), clip.get("fadeOut")
    if fade_in:
        vf.append(f"fade=t=in:d={fade_in}")
    if fade_out:
        vf.append(f"fade=t=out:st={dur - float(fade_out):.3f}:d={fade_out}")

    if has_audio:
        af = [AUDIO_FMT]
        speed = float(clip.get("speed", 1))
        if speed != 1:
            af.append(f"atempo={min(max(speed, 0.5), 2.0)}")
        vol = clip.get("volume", 1)
        if vol != 1:
            af.append(f"volume={vol}")
        af += ["afade=t=in:d=0.02", f"afade=t=out:st={max(0, dur - 0.03):.3f}:d=0.03"]
    else:
        inputs += ["-f", "lavfi", "-t", f"{dur:.3f}", "-i", "anullsrc=r=48000:cl=stereo"]
        af = [AUDIO_FMT]
    af += ["apad", f"atrim=duration={dur:.4f}", "asetpts=PTS-STARTPTS"]
    a_in = "0:a" if has_audio else "1:a"

    graph = f"[0:v]{','.join(vf)}[v];[{a_in}]{','.join(af)}[a]"
    tmp = out.with_suffix(".part.mov")
    ff.run(["ffmpeg", *inputs, "-filter_complex", graph, "-map", "[v]", "-map", "[a]",
            *ff.intermediate_args(draft), "-r", str(fps), "-c:a", "pcm_s16le", tmp])
    tmp.rename(out)
    return out


# -- 2. assemble -----------------------------------------------------------
def _zoom_through() -> str:
    """xfade custom expression: the outgoing shot pushes in 25% as it fades out while the incoming shot settles from
    15% in to rest, both eased (smoothstep). P runs 1 → 0 across the transition; each plane samples its own image."""
    e = "(P*P*(3-2*P))"  # eased progress, 1 → 0
    sa = f"(1+0.25*(1-{e}))"  # outgoing scale grows
    sb = f"(1+0.15*{e})"  # incoming scale shrinks to 1

    def at(fn, s):
        return f"{fn}(W/2+(X-W/2)/{s},H/2+(Y-H/2)/{s})"

    def plane(n):
        return f"{at(f'a{n}', sa)}*{e}+{at(f'b{n}', sb)}*(1-{e})"

    return (f"if(eq(PLANE,0),{plane(0)},if(eq(PLANE,1),{plane(1)},if(eq(PLANE,2),{plane(2)},{plane(3)})))"
            .replace(",", "\\,"))


def assemble(project: Project, segments: list, out: Path, draft: bool) -> Path:
    tl = project.edit["timeline"]
    if len(segments) == 1:
        return segments[0]
    inputs = []
    for s in segments:
        inputs += ["-i", s]
    # one shared timebase, otherwise xfade refuses inputs coming out of concat
    # and one pixel format: motion graphics come out full range, footage limited, and mixing them tints the picture
    parts = [f"[{i}:v]scale=in_range=auto:out_range=tv,format=yuv420p,settb=AVTB,setpts=PTS-STARTPTS[s{i}]"
             for i in range(len(segments))]
    fps = project.fps
    vinfo = ff.probe(str(segments[0]))["video"] or {}
    vw, vh = vinfo.get("width", 1920), vinfo.get("height", 1080)
    v, a = "[s0]", "[0:a]"
    acc = project.clip_duration(tl[0])
    dip = "fadewhite" if project.theme == "light" else "fadeblack"
    for i in range(1, len(segments)):
        c = tl[i]
        tr = c.get("transition", "cut")
        d = project.clip_duration(c)
        nv, na = f"[v{i}]", f"[a{i}]"
        if tr == "cut":
            parts.append(f"{v}{a}[s{i}][{i}:a]concat=n=2:v=1:a=1{nv}{na}")
            acc += d
        else:
            td = project.transition_duration(c)
            td = min(td, d / 2, acc / 2)
            name = dip if tr == "dip" else TRANSITIONS[tr]
            if tr in MOTION_BLUR:
                # Real motion blur: run the transition window at 16x the frame rate and average each group of 16
                # frames back down (a 360° shutter), then soften what's left of the sub-frame steps along the direction
                # of travel, so a push smears into a streak instead of showing combs of copies. The window is cut out
                # and spliced back because tmix with enable= scrambles the chroma in this ffmpeg.
                a0, sub = acc - td, fps * 16
                step_x, step_y = vw / (td * sub), vh / (td * sub)  # px the picture moves per sub-frame
                streak = {"push-left": f",gblur=sigma={step_x * 0.7:.2f}:sigmaV=0.01",
                          "push-right": f",gblur=sigma={step_x * 0.7:.2f}:sigmaV=0.01",
                          "push-up": f",gblur=sigma=0.01:sigmaV={step_y * 0.7:.2f}"}.get(tr, "")
                if tr == "zoom":  # a gentle zoom-through instead of xfade's zoomin, which dives into the frame centre
                    name = f"custom:expr='{_zoom_through()}'"
                parts.append(f"{v}split=2[pre{i}][win{i}]")
                parts.append(f"[s{i}]split=2[inw{i}][post{i}]")
                parts.append(f"[pre{i}]trim=end={a0:.3f},setpts=PTS-STARTPTS[pa{i}]")
                parts.append(f"[win{i}]trim=start={a0:.3f},setpts=PTS-STARTPTS,fps={sub}[wa{i}]")
                parts.append(f"[inw{i}]trim=end={td:.3f},setpts=PTS-STARTPTS,fps={sub}[wb{i}]")
                parts.append(f"[wa{i}][wb{i}]xfade=transition={name}:duration={td:.3f}:offset=0,"
                             f"tmix=frames=16{streak},fps={fps},settb=AVTB[pb{i}]")
                parts.append(f"[post{i}]trim=start={td:.3f},setpts=PTS-STARTPTS[pc{i}]")
                parts.append(f"[pa{i}][pb{i}][pc{i}]concat=n=3:v=1:a=0,settb=AVTB{nv}")
            else:
                parts.append(f"{v}[s{i}]xfade=transition={name}:duration={td:.3f}:offset={acc - td:.3f}{nv}")
            parts.append(f"{a}[{i}:a]acrossfade=d={td:.3f}:c1=tri:c2=tri{na}")
            acc += d - td
        v, a = nv, na
    ff.run(["ffmpeg", *inputs, "-filter_complex", ";".join(parts), "-map", v, "-map", a,
            *ff.intermediate_args(draft), "-r", str(project.fps), "-c:a", "pcm_s16le", out])
    return out


# -- 3. finish -------------------------------------------------------------
def _audio_graph(project: Project, total: float, extra: dict) -> tuple:
    """Programme audio + voice-over + ducked music. Returns (filter parts, output label)."""
    parts = [f"[0:a]{AUDIO_FMT}[prog0]"]
    prog = "[prog0]"
    vo = project.edit.get("voiceover")
    if vo:
        i = extra["voiceover"]
        delay = int(project.resolve_at(vo.get("at", 0)) * 1000)
        parts.append(f"[{i}:a]{AUDIO_FMT},volume={vo.get('volume', 1)},adelay={delay}:all=1[vo]")
        parts.append(f"{prog}[vo]amix=inputs=2:normalize=0:duration=first[prog1]")
        prog = "[prog1]"
    music = project.edit.get("music")
    if music:
        i = extra["music"]
        fi, fo = float(music.get("fadeIn", 1)), float(music.get("fadeOut", 3))
        m = (f"[{i}:a]{AUDIO_FMT},atrim=0:{total:.3f},asetpts=PTS-STARTPTS,volume={music.get('volume', 0.5)},"
             f"afade=t=in:d={fi},afade=t=out:st={max(0, total - fo):.3f}:d={fo}")
        if music.get("duckUnderVoice", True):
            parts.append(f"{prog}asplit=2[progm][key]")
            parts.append(f"{m}[mus]")
            parts.append("[mus][key]sidechaincompress=threshold=0.02:ratio=12:attack=15:release=400:makeup=1[musd]")
            parts.append("[progm][musd]amix=inputs=2:normalize=0:duration=first[mixed]")
        else:
            parts.append(f"{m}[mus]")
            parts.append(f"{prog}[mus]amix=inputs=2:normalize=0:duration=first[mixed]")
        prog = "[mixed]"
    if "sfx" in extra:  # after the music, so effects never duck it
        parts.append(f"[{extra['sfx']}:a]{AUDIO_FMT}[fx]")
        parts.append(f"{prog}[fx]amix=inputs=2:normalize=0:duration=first[withfx]")
        prog = "[withfx]"
    return parts, prog


def _audio_inputs(project: Project) -> tuple:
    """Extra ffmpeg inputs for voice-over and music. Returns (args, {name: input index}, next index)."""
    args, idx_of, idx = [], {}, 1
    for key in ("voiceover", "music"):
        a = project.edit.get(key)
        if a:
            args += (["-stream_loop", "-1"] if key == "music" else []) + ["-i", project.path(a["src"])]
            idx_of[key] = idx
            idx += 1
    fx = sfx.build(project, project.total_duration())
    if fx:
        args += ["-i", fx]
        idx_of["sfx"] = idx
        idx += 1
    return args, idx_of, idx


def _loudness(project: Project, assembled: Path, extra_inputs: list, extra: dict, total: float, lufs: float) -> dict:
    parts, label = _audio_graph(project, total, extra)
    parts.append(f"{label}loudnorm=I={lufs}:TP=-1.5:LRA=11:print_format=json[out]")
    proc = ff.run(["ffmpeg", "-loglevel", "info", "-i", assembled, *extra_inputs, "-filter_complex", ";".join(parts),
                   "-map", "[out]", "-f", "null", "-"], capture=True)
    text = proc.stderr
    blob = text[text.rfind("{"):text.rfind("}") + 1]
    return json.loads(blob)


def _silent(measured: dict) -> bool:
    # a silent mix measures -inf LUFS, which loudnorm rejects (measured_I must be in [-99, 0])
    i = float(measured["input_i"])
    return not math.isfinite(i) or i <= -99


def finish(project: Project, assembled: Path, preset: dict, master_w: int, master_h: int, aspect: str,
           out: Path, draft: bool, measured: dict | None) -> Path:
    total = ff.probe(str(assembled))["duration"]
    extra_inputs, extra, idx = _audio_inputs(project)

    vparts, v = [], "[0:v]"
    # motion overlays (lower thirds) rendered at the master size with alpha
    for n, o in enumerate(project.edit.get("overlays", [])):
        if aspect in o.get("skip", []):
            continue
        at = project.resolve_at(o.get("at", 0))
        d = float(o.get("duration", 4))
        o_props = {**project.motion_defaults(), **o.get("props", {})}
        src = motion.render(o["composition"], motion.stage_assets(o_props, project.root), width=master_w, height=master_h, fps=project.fps,
                            duration=d, theme=o.get("theme", project.theme), lang=o.get("lang", project.lang),
                            cache_dir=project.build / "cache" / "motion", draft=draft)
        extra_inputs += ["-i", src]
        vparts.append(f"[{idx}:v]setpts=PTS-STARTPTS+{at:.3f}/TB[ov{n}]")
        vparts.append(f"{v}[ov{n}]overlay=0:0:eof_action=pass:format=auto[vo{n}]")
        v = f"[vo{n}]"
        idx += 1
    # corner logo bug, hidden while motion clips (which carry their own branding) play
    logo = project.edit.get("logo")
    if logo and logo.get("enabled", True):
        s = min(master_w, master_h) / 1080
        lh = round(float(logo.get("height", 44)) * s)
        margin = round(float(logo.get("margin", 56)) * s)
        file = paths.LOGOS / ("logo-dark.png" if logo.get("variant", "light-on-dark") == "light-on-dark" else "logo-light.png")
        extra_inputs += ["-loop", "1", "-i", file]
        corner = logo.get("corner", "top-right")
        x = f"{margin}" if "left" in corner else f"W-w-{margin}"
        y = f"{margin}" if "top" in corner else f"H-h-{margin}"
        spans = [s_ for s_ in project.schedule() if s_["type"] not in ("motion", "title")]
        enable = "+".join(f"between(t,{s_['start']},{s_['end']})" for s_ in spans) or "0"
        vparts.append(f"[{idx}:v]scale=-1:{lh},format=rgba,colorchannelmixer=aa={logo.get('opacity', 0.9)}[logo]")
        vparts.append(f"{v}[logo]overlay={x}:{y}:shortest=1:enable='{enable}'[vlogo]")
        v = "[vlogo]"
        idx += 1
    # burned-in captions, laid out for the export's own size
    cap = project.edit.get("captions")
    post = []
    if preset["w"] != master_w or preset["h"] != master_h:
        post.append(f"scale={preset['w']}:{preset['h']}:flags=lanczos")
    if cap and cap.get("burn", True):
        cues = captions.parse_srt(project.path(cap["src"]))
        cues = captions.shift(cues, float(cap.get("offset", 0)))
        ass = captions.write_ass(cues, project.build / f"captions-{preset['w']}x{preset['h']}.ass", preset["w"], preset["h"],
                                 paths.tokens(), words=cap.get("style") == "words", accent=_caption_accent(project))
        post.append(captions.subtitles_filter(ass))
    post += ["format=yuv420p" if preset["codec"] != "prores" else "format=yuv422p10le", "setsar=1"]
    vparts.append(f"{v}{','.join(post)}[vout]")

    aparts, alabel = _audio_graph(project, total, extra)
    lufs = preset["lufs"]
    if measured and not draft and _silent(measured):
        ln = "anull"  # nothing to normalise
    elif measured and not draft:
        # keep the mix's own dynamics: a target LRA below the measured one forces dynamic (pumping) mode
        lra = max(11, min(50, int(float(measured["input_lra"])) + 2))
        ln = (f"loudnorm=I={lufs}:TP=-1.5:LRA={lra}:measured_I={measured['input_i']}:measured_TP={measured['input_tp']}"
              f":measured_LRA={measured['input_lra']}:measured_thresh={measured['input_thresh']}"
              f":offset={measured['target_offset']}:linear=true")
    else:
        ln = f"loudnorm=I={lufs}:TP=-1.5:LRA=11"
    aparts.append(f"{alabel}{ln},{AUDIO_FMT}[aout]")

    acodec = ["-c:a", "pcm_s24le"] if preset["audio"] == "pcm" else ["-c:a", "aac", "-b:a", preset["audio"]]
    vcodec = ff.video_codec_args(preset["codec"], preset["bitrate"], draft=draft)
    container = ["-movflags", "+faststart"] if preset["ext"] == "mp4" else []
    tmp = out.with_name(out.stem + ".part" + out.suffix)
    ff.run(["ffmpeg", "-i", assembled, *extra_inputs, "-filter_complex", ";".join(vparts + aparts),
            "-map", "[vout]", "-map", "[aout]", *vcodec, "-r", str(project.fps), *acodec, "-ar", "48000",
            "-t", f"{total:.3f}", *container, "-metadata", f"title={project.edit.get('title', project.name)}", tmp])
    tmp.replace(out)
    return out


# -- driver ----------------------------------------------------------------
def render(project: Project, preset_names: list | None = None, draft: bool = False) -> list:
    t0 = time.time()
    if draft:
        chosen = [_draft_preset(project)]
    else:
        names = preset_names or project.edit.get("exports") or ["youtube-1080p"]
        chosen = [presets.get(n) for n in names]
    groups = {}
    for p in chosen:
        groups.setdefault(presets.aspect(p), []).append(p)

    log(f"▸ {project.name}: {len(project.edit['timeline'])} clips, {project.total_duration():.1f}s, "
        f"{'VideoToolbox' if ff.hw() else 'software'} encode, aspects {', '.join(groups)}")
    exports_dir = project.root / "exports"
    exports_dir.mkdir(exist_ok=True)
    outputs, measured = [], {}
    for aspect, group in groups.items():
        w, h = _master_size(group, aspect)
        log(f"  segments @ {w}x{h}")
        segs = [build_segment(project, c, w, h, aspect, draft) for c in project.edit["timeline"]]
        tag = aspect.replace(":", "x")
        assembled = assemble(project, segs, project.build / f"assembled-{tag}{'-draft' if draft else ''}.mov", draft)
        for p in group:
            # the mixed audio is identical for every aspect, so each loudness target is measured once
            if not draft and p["lufs"] not in measured:
                extra_inputs, extra, _ = _audio_inputs(project)
                measured[p["lufs"]] = _loudness(project, assembled, extra_inputs, extra,
                                                ff.probe(str(assembled))["duration"], p["lufs"])
                if _silent(measured[p["lufs"]]):
                    log("  loudness: no audio, skipping normalisation")
                else:
                    log(f"  loudness measured {measured[p['lufs']]['input_i']} LUFS → target {p['lufs']} LUFS")
            out = exports_dir / (f"{project.name}-draft.mp4" if draft else f"{project.name}-{p['name']}.{p['ext']}")
            log(f"  export  {out.name}")
            finish(project, assembled, p, w, h, aspect, out, draft, measured.get(p["lufs"]))
            outputs.append(out)
    log(f"✓ done in {time.time() - t0:.1f}s")
    return outputs
