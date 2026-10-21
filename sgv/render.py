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
import os
import sys
import time
from contextlib import contextmanager
from pathlib import Path

from sgv import captions, ff, motion, paths, presets, sfx
from sgv.project import MOTION_BLUR, RUN_JOINS, TRANSITIONS, Project, ease, focus_pull, ramp_sections

AUDIO_FMT = "aresample=48000,aformat=sample_fmts=fltp:channel_layouts=stereo"


def log(msg: str) -> None:
    print(msg, file=sys.stderr)


def _hash(*parts) -> str:
    return hashlib.sha256(json.dumps(parts, sort_keys=True, default=str).encode()).hexdigest()[:16]


def _canvas_color(project: Project) -> str:
    """The pad colour behind footage that is fit into another aspect: the theme canvas, or the flat purple ground
    in the Enablement look."""
    if project.motion_defaults().get("look") == "enablement":
        return paths.tokens()["enablement"]["grounds"]["flat"].replace("#", "0x")
    return paths.tokens()["themes"][project.theme]["canvas"].replace("#", "0x")


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
def _fit_filter(mode: str, w: int, h: int, focus, canvas: str) -> str:
    if mode == "fit":
        return (f"scale={w}:{h}:force_original_aspect_ratio=decrease:flags=lanczos,"
                f"pad={w}:{h}:(ow-iw)/2:(oh-ih)/2:color={canvas}")
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


def _ramp_pts(sections: list) -> str:
    """setpts for a speed ramp: source time T maps to output time section by section (each at its own speed)."""
    expr, out = None, 0.0
    pieces = []
    for a, b, sp in sections:
        pieces.append((a, b, out, sp))
        out += (b - a) / sp
    for a, b, o, sp in reversed(pieces):
        piece = f"{o:.5f}+(T-{a:.5f})/{sp:.5f}"
        expr = piece if expr is None else f"if(lt(T,{b:.5f}),{piece},{expr})"
    return f"setpts=PTS-STARTPTS,setpts='({expr})/TB'"


def _focus_pull(fp: dict, w: int, h: int, fps: int) -> str:
    """Rack focus: a gaussian blur eased between two radii, switched on only where it is above zero (so the sharp part
    of the clip costs nothing). Radii are px at 1080p, scaled to the frame; sendcmd sets the radius every frame."""
    k = min(w, h) / 1080
    a, d = fp["at"], fp["duration"]
    def sigma(t):
        return max(0.0, (fp["from"] + (fp["to"] - fp["from"]) * ease((t - a) / d)) * k)
    n = max(1, round(d * fps))
    cmds = ";".join(f"{a + d * j / n:.4f} gblur@fp sigma {sigma(a + d * j / n):.3f}" for j in range(n + 1))
    if fp["to"] <= 0 < fp["from"]:
        on = f"lt(t,{a + d:.4f})"
    elif fp["from"] <= 0 < fp["to"]:
        on = f"gte(t,{a:.4f})"
    else:
        on = "1"
    return f"sendcmd=c='{cmds}',gblur@fp=sigma={sigma(0):.3f}:steps=2:enable='{on}'"


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


def _draft_source(project: Project, sp: Path) -> Path:
    """For drafts, a cached 1080p SDR copy of 4K or HDR footage (iPhone HEVC/Dolby Vision): tone-mapping and scaling
    4K frames is the slow part of a draft, so it happens once per file instead of on every draft render.
    Timing is kept as recorded, so clip in/out points are unchanged. SDR footage at 1080p or less is used directly."""
    v = ff.probe(str(sp))["video"]
    if os.environ.get("SGV_NO_PROXY") or not v or not (v["hdr"] or max(v["width"], v["height"]) > 1920):
        return sp
    out = project.build / "cache" / "proxies" / f"{_hash(str(sp), sp.stat().st_mtime, sp.stat().st_size)}.mp4"
    if not out.exists():
        out.parent.mkdir(parents=True, exist_ok=True)
        log(f"  proxy   {sp.name} (first draft only)")
        scale = "scale='if(gt(iw,ih),1920,-2)':'if(gt(iw,ih),-2,1920)'"
        tmp = out.with_name(out.stem + ".part.mp4")
        ff.run(["ffmpeg", *ff.decode_args(sp), "-i", sp, "-map", "0:v:0", "-map", "0:a?",
                "-vf", (_hdr_filter() if v["hdr"] else "") + scale + ",format=yuv420p",
                "-fps_mode", "passthrough", *ff.intermediate_args(draft=True), "-c:a", "aac", "-b:a", "160k", tmp])
        tmp.replace(out)
    return out


def _segment_path(project: Project, clip: dict, w: int, h: int, aspect: str, draft: bool) -> tuple:
    """The cached segment's path for this clip, and the clip with motion defaults and staged images applied."""
    cache = project.build / "cache" / "segments"
    cache.mkdir(parents=True, exist_ok=True)
    src_stamp = None
    clip0 = clip
    if clip["type"] in ("video", "image"):
        sp = project.path(clip["src"])
        src_stamp = [str(sp), sp.stat().st_mtime, sp.stat().st_size]
    if clip["type"] in ("motion", "title"):
        src_stamp = motion._source_hash()
        clip = {**clip, "props": {**project.motion_defaults(), **clip.get("props", {})}}
        # the clip's place on the timeline lets a `wave` follow the voice-over heard under it
        i = next((n for n, c in enumerate(project.edit["timeline"]) if c is clip0), None)
        start = project.schedule()[i]["start"] if i is not None and clip["props"].get("wave") else None
        clip = {**clip, "props": motion.stage_assets(clip["props"], project.root, project.edit.get("voiceover"), start)}
    key = _hash(clip, w, h, project.fps, project.theme, project.lang, draft, aspect, _fit_mode(project, clip, aspect),
                src_stamp, ff.hw(), 3, _canvas_color(project))
    return cache / f"{key}.mov", clip


def _motion_spec(project: Project, clip: dict, w: int, h: int, draft: bool) -> dict:
    """motion.render arguments for a motion or title clip (already passed through _segment_path)."""
    props = dict(clip.get("props", {}))
    if clip["type"] == "title":
        props.update({k: clip[k] for k in ("overline", "title", "subtitle") if k in clip})
    return dict(composition=clip.get("composition", "TitleCard"), props=props, width=w, height=h, fps=project.fps,
                duration=project.clip_duration(clip), theme=project.theme, lang=clip.get("lang", project.lang),
                cache_dir=project.build / "cache" / "motion", draft=draft)


def _overlay_spec(project: Project, o: dict, w: int, h: int, draft: bool) -> dict:
    o_props = {**project.motion_defaults(), **o.get("props", {})}
    return dict(composition=o["composition"], props=motion.stage_assets(o_props, project.root, project.edit.get("voiceover")),
                width=w, height=h,
                fps=project.fps, duration=float(o.get("duration", 4)), theme=o.get("theme", project.theme),
                lang=o.get("lang", project.lang), cache_dir=project.build / "cache" / "motion", draft=draft)


def _graphic(c: dict) -> bool:
    return c["type"] in ("motion", "title") and c.get("composition") not in motion.ALPHA


def units(project: Project) -> list:
    """The timeline as render units: lists of clip indices. Consecutive graphics joined by a transition Remotion can
    draw (RUN_JOINS) form one run, rendered as a single composition with TransitionSeries: no xfade seam and no extra
    encode between them. Everything else is a unit of one. SGV_NO_RUNS=1 renders every graphic on its own."""
    tl, out = project.edit["timeline"], []
    for i, c in enumerate(tl):
        joins = (out and _graphic(c) and _graphic(tl[out[-1][-1]]) and c.get("transition", "cut") in RUN_JOINS
                 and not os.environ.get("SGV_NO_RUNS"))
        if joins:
            out[-1].append(i)
        else:
            out.append([i])
    return out


def unit_clip(project: Project, idx: list, w: int, h: int, aspect: str, draft: bool) -> dict:
    """The clip that renders a unit: the timeline clip itself, or a `Run` motion clip holding the run's graphics and
    joins (also used for a single graphic with a light `sweep`). It comes in with the first clip's transition."""
    tl = project.edit["timeline"]
    if len(idx) == 1 and not tl[idx[0]].get("sweep"):
        return tl[idx[0]]
    fps, clips, joins, frames = project.fps, [], [], 0
    for k, i in enumerate(idx):
        _, c = _segment_path(project, tl[i], w, h, aspect, draft)
        spec = _motion_spec(project, c, w, h, draft)
        item = {"composition": spec["composition"], "props": {**spec["props"], "lang": spec["lang"]},
                "duration": spec["duration"]}
        if c.get("sweep"):
            item["sweep"] = {} if c["sweep"] is True else c["sweep"]
        if k:
            # the same clamp as assemble(): a transition never takes more than half of either clip
            td = min(project.transition_duration(c), spec["duration"] / 2, clips[-1]["duration"] / 2)
            join = {**RUN_JOINS[c["transition"]], "duration": td}
            joins.append(join)
            # the join carries the cards themselves: the outgoing card keeps its content to the last frame, and one
            # that is pushed or zoomed in arrives already drawn (a fade or dome still lets it animate in)
            clips[-1]["props"] = {"exitFade": False, **clips[-1]["props"]}
            if join["type"] in ("blur-slide", "zoom-blur"):
                item["props"] = {"enterFade": False, **item["props"]}
            frames -= round(td * fps)
        frames += round(spec["duration"] * fps)
        clips.append(item)
    first = tl[idx[0]]
    return {"type": "motion", "composition": "Run", "duration": frames / fps, "props": {"clips": clips, "joins": joins},
            "label": " + ".join(c["composition"] for c in clips),
            **{k: first[k] for k in ("transition", "transitionDuration") if k in first}}


def prerender_motion(project: Project, w: int, h: int, aspect: str, draft: bool) -> None:
    """Render every graphic this aspect still needs in one batch (one bundle, one browser), before the segments."""
    specs = []
    for idx in units(project):
        c = unit_clip(project, idx, w, h, aspect, draft)
        if c["type"] in ("motion", "title"):
            out, clip = _segment_path(project, c, w, h, aspect, draft)
            if not out.exists():
                specs.append(_motion_spec(project, clip, w, h, draft))
    specs += [_overlay_spec(project, o, w, h, draft) for o in project.edit.get("overlays", []) if aspect not in o.get("skip", [])]
    if specs:
        motion.render_many(specs)


def build_segment(project: Project, clip: dict, w: int, h: int, aspect: str, draft: bool) -> Path:
    fps, theme = project.fps, project.theme
    dur = project.clip_duration(clip)
    out, clip = _segment_path(project, clip, w, h, aspect, draft)
    if out.exists():
        return out

    t = clip["type"]
    if t in ("motion", "title"):
        src = motion.render(**_motion_spec(project, clip, w, h, draft))
        clip = {"type": "video", "src": str(src), "in": 0, "fit": "fill"}
        t = "video"

    inputs, vf = [], []
    has_audio = False
    if t == "video":
        sp = project.path(clip["src"])
        if draft:
            sp = _draft_source(project, sp)
        info = ff.probe(str(sp))
        start = float(clip.get("in", 0))
        speed = float(clip.get("speed", 1))
        ramp = None
        if clip.get("ramp"):
            # a speed ramp reads the whole in→out range; its sound is dropped (montage beats sit on music)
            end = float(clip.get("out", info["duration"]))
            ramp = ramp_sections(clip, min(end, info["duration"] or end) - start)
            span = ramp[-1][1] if ramp else dur
        inputs += ff.decode_args(sp) + ["-ss", f"{start:.3f}", "-t", f"{span if ramp else dur * speed:.3f}", "-i", sp]
        has_audio = info["audio"] is not None and not clip.get("mute") and not ramp
        if info["video"] and info["video"]["hdr"]:
            vf.append(_hdr_filter().rstrip(","))
        if ramp:
            vf.append(_ramp_pts(ramp))
        elif speed != 1:
            vf.append(f"setpts=PTS/{speed}")
        if clip.get("grade"):
            vf.append(GRADES.get(clip["grade"], clip["grade"]))
        vf.append(_fit_filter(_fit_mode(project, clip, aspect), w, h, clip.get("focus", 0.5), _canvas_color(project)))
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
            vf.append(_fit_filter(fit, w * 2, h * 2, clip.get("focus", 0.5), _canvas_color(project)))
            vf.append(f"zoompan=z='{z}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=1:s={w}x{h}:fps={fps}")
        elif kb in ("left", "right"):
            vf.append(_fit_filter("fill", round(w * 1.08 / 2) * 2, round(h * 1.08 / 2) * 2, 0.5, _canvas_color(project)))
            x = f"(iw-{w})*t/{dur}" if kb == "left" else f"(iw-{w})*(1-t/{dur})"
            vf.append(f"crop={w}:{h}:'{x}':(ih-{h})/2")
        else:
            vf.append(_fit_filter(fit, w, h, clip.get("focus", 0.5), _canvas_color(project)))
    elif t == "color":
        color = clip.get("color") or paths.tokens()["themes"][theme]["canvas"]
        inputs += ["-f", "lavfi", "-t", f"{dur:.3f}", "-i", f"color=c={color.replace('#', '0x')}:s={w}x{h}:r={fps}"]

    vf += [f"fps={fps}", "setsar=1", "format=yuv420p", f"tpad=stop_mode=clone:stop_duration=2", f"trim=duration={dur:.4f}",
           "setpts=PTS-STARTPTS"]
    fp = focus_pull(clip, dur) if t == "video" else None
    if fp:
        vf.append(_focus_pull(fp, w, h, fps))
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


def _yuv(hex_color: str) -> tuple:
    """A brand colour as limited-range BT.709 Y, U, V (what the assembled picture is in)."""
    r, g, b = (int(hex_color.lstrip("#")[i:i + 2], 16) / 255 for i in (0, 2, 4))
    y = 0.2126 * r + 0.7152 * g + 0.0722 * b
    return round(16 + 219 * y), round(128 + 224 * (b - y) / 1.8556), round(128 + 224 * (r - y) / 1.5748)


def _slide_scale(canvas: str) -> str:
    """xfade custom expression: a push to the left in which the outgoing card shrinks to 92% about its own centre as
    it leaves, eased (smoothstep). The sliver it uncovers is the brand canvas. P runs 1 → 0 across the transition."""
    m = "(1-P*P*(3-2*P))"  # eased progress, 0 → 1
    k = f"(1-0.08*{m})"
    ax, ay = f"((X-W/2+W*{m})/{k}+W/2)", f"((Y-H/2)/{k}+H/2)"
    yuv = (*_yuv(canvas), 255)

    def plane(n):
        return (f"if(gte(X,W*(1-{m})),b{n}(X-W*(1-{m}),Y),"
                f"if(between({ax},0,W-1)*between({ay},0,H-1),a{n}({ax},{ay}),{yuv[n]}))")

    return (f"if(eq(PLANE,0),{plane(0)},if(eq(PLANE,1),{plane(1)},if(eq(PLANE,2),{plane(2)},{plane(3)})))"
            .replace(",", "\\,"))


def _dome_mask(w: int, h: int, td: float, fps: int) -> str:
    """geq expression (grey, 0–255) for the Enablement dome reveal: the incoming scene grows inside a circle hung off
    the top edge, centred, the same circle as the dome on the purple ground (tokens enablement.dome), so its arc
    passes the dome's own arc on the way to covering the frame. Ease-out (cubic) over `td` seconds. Motion blur is
    built in rather than made from sub-frames: the edge is a ramp as wide as the distance it travels in one frame
    (a 360° shutter on a moving edge), at least 1.5 px at 1080p. Constants are baked in, so the mask stays cheap."""
    dome = paths.tokens()["enablement"]["dome"]
    o = "portrait" if h >= w else "landscape"
    cy = h * dome["depth"][o] - w * dome["diameter"][o] / 2
    r0, r1 = max(0.0, -cy), math.hypot(w / 2, h - cy) + 2
    span, frames, soft = r1 - r0, td * fps, 1.5 * min(w, h) / 1080
    # st(0) = time left, 1 → 0; radius = r0 + span·(1 − left³); edge = speed·one frame
    return (f"st(0,1-min(T/{td:.4f},1));clip(({r0:.1f}+{span:.1f}*(1-ld(0)*ld(0)*ld(0))-hypot(X-{w / 2},Y-{cy:.1f}))"
            f"/max({soft:.2f},{span:.1f}*3*ld(0)*ld(0)/{frames:.1f})+0.5,0,1)*255").replace(",", "\\,")


def assemble(project: Project, segments: list, out: Path, draft: bool, clips: list | None = None) -> Path:
    """Join the segments. `clips` are the clips the segments were made from (render units); default the timeline."""
    tl = clips or project.edit["timeline"]
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
            if tr in ("blur", "dome"):
                # blur: a dissolve through a soft gaussian blur, 8 px at 1080 at the midpoint, sharp at both ends.
                # dome: the Enablement dome reveal (see _dome_mask). The transition window is cut out, processed and
                # spliced back, like the motion-blurred transitions below.
                a0, sigma = acc - td, 8 * min(vw, vh) / 1080
                parts.append(f"{v}split=2[pre{i}][win{i}]")
                parts.append(f"[s{i}]split=2[inw{i}][post{i}]")
                parts.append(f"[pre{i}]trim=end={a0:.3f},setpts=PTS-STARTPTS[pa{i}]")
                parts.append(f"[win{i}]trim=start={a0:.3f},setpts=PTS-STARTPTS[wa{i}]")
                parts.append(f"[inw{i}]trim=end={td:.3f},setpts=PTS-STARTPTS[wb{i}]")
                if tr == "blur":
                    parts.append(f"[wa{i}][wb{i}]xfade=transition=fade:duration={td:.3f}:offset=0,split=2[ws{i}][wg{i}]")
                    parts.append(f"[wg{i}]gblur=sigma={sigma:.2f}[wbl{i}]")
                    parts.append(f"[ws{i}][wbl{i}]blend=all_expr='A+(B-A)*sin(PI*min(T/{td:.3f}\\,1))',settb=AVTB[pb{i}]")
                else:  # dome: the incoming window, keyed by the growing circle, over the outgoing one
                    parts.append(f"color=black:s={vw}x{vh}:r={fps}:d={td:.3f},format=gray,"
                                 f"geq=lum='{_dome_mask(vw, vh, td, fps)}'[dm{i}]")
                    parts.append(f"[wb{i}][dm{i}]alphamerge[wbm{i}]")
                    parts.append(f"[wa{i}][wbm{i}]overlay=0:0:format=auto,format=yuv420p,settb=AVTB[pb{i}]")
                parts.append(f"[post{i}]trim=start={td:.3f},setpts=PTS-STARTPTS[pc{i}]")
                parts.append(f"[pa{i}][pb{i}][pc{i}]concat=n=3:v=1:a=0,settb=AVTB{nv}")
            elif tr in MOTION_BLUR:
                # Real motion blur: run the transition window at 16x the frame rate (8x in drafts) and average each group
                # frames back down (a 360° shutter), then soften what's left of the sub-frame steps along the direction
                # of travel, so a push smears into a streak instead of showing combs of copies. The window is cut out
                # and spliced back because tmix with enable= scrambles the chroma in this ffmpeg.
                n_sub = 8 if draft else 16  # drafts: half the sub-frames, still smooth enough to judge the move
                a0, sub = acc - td, fps * n_sub
                # Above 720p the window is blurred at half size and scaled back: its frames are smeared anyway and the
                # nearly still ones at either end lose nothing visible, while the cost drops to about a quarter.
                ds = 2 if vw * vh > 1280 * 720 and not os.environ.get("SGV_FULL_BLUR") else 1
                down = f",scale={vw // ds}:{vh // ds}:flags=area" if ds > 1 else ""
                up = f",scale={vw}:{vh}:flags=bicubic" if ds > 1 else ""
                step_x, step_y = vw / ds / (td * sub), vh / ds / (td * sub)  # px the picture moves per sub-frame
                streak = {"push-left": f",gblur=sigma={step_x * 0.7:.2f}:sigmaV=0.01",
                          "slide-scale": f",gblur=sigma={step_x * 0.7:.2f}:sigmaV=0.01",
                          "push-right": f",gblur=sigma={step_x * 0.7:.2f}:sigmaV=0.01",
                          "push-up": f",gblur=sigma=0.01:sigmaV={step_y * 0.7:.2f}"}.get(tr, "")
                if tr == "zoom":  # a gentle zoom-through instead of xfade's zoomin, which dives into the frame centre
                    name = f"custom:expr='{_zoom_through()}'"
                elif tr == "slide-scale":
                    canvas = paths.tokens()["themes"][project.theme]["canvas"]
                    if project.motion_defaults().get("look") == "enablement":
                        canvas = paths.tokens()["enablement"]["grounds"]["flat"]
                    name = f"custom:expr='{_slide_scale(canvas)}'"
                parts.append(f"{v}split=2[pre{i}][win{i}]")
                parts.append(f"[s{i}]split=2[inw{i}][post{i}]")
                parts.append(f"[pre{i}]trim=end={a0:.3f},setpts=PTS-STARTPTS[pa{i}]")
                parts.append(f"[win{i}]trim=start={a0:.3f},setpts=PTS-STARTPTS,fps={sub}{down}[wa{i}]")
                parts.append(f"[inw{i}]trim=end={td:.3f},setpts=PTS-STARTPTS,fps={sub}{down}[wb{i}]")
                parts.append(f"[wa{i}][wb{i}]xfade=transition={name}:duration={td:.3f}:offset=0,"
                             f"tmix=frames={n_sub}{streak},fps={fps}{up},settb=AVTB[pb{i}]")
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
    """Programme audio + voice-over + ducked music and ambience + effects. Returns (filter parts, output label)."""
    parts = [f"[0:a]{AUDIO_FMT}[prog0]"]
    prog = "[prog0]"
    vo = project.edit.get("voiceover")
    if vo:
        i = extra["voiceover"]
        delay = int(project.resolve_at(vo.get("at", 0)) * 1000)
        parts.append(f"[{i}:a]{AUDIO_FMT},volume={vo.get('volume', 1)},adelay={delay}:all=1[vo]")
        parts.append(f"{prog}[vo]amix=inputs=2:normalize=0:duration=first[prog1]")
        prog = "[prog1]"
    # music and ambience are beds: looped, faded, and ducked under the voice (keyed on programme + voice-over only)
    beds = [(k, project.edit[k]) for k in ("music", "ambience") if project.edit.get(k)]
    ducked = [k for k, b in beds if b.get("duckUnderVoice", True)]
    if ducked:
        parts.append(f"{prog}asplit={len(ducked) + 1}[progm]" + "".join(f"[key{k}]" for k in ducked))
        prog = "[progm]"
    for k, bed in beds:
        fi, fo = float(bed.get("fadeIn", 1)), float(bed.get("fadeOut", 3))
        default = 0.5 if k == "music" else 0.3
        parts.append(f"[{extra[k]}:a]{AUDIO_FMT},atrim=0:{total:.3f},asetpts=PTS-STARTPTS,volume={bed.get('volume', default)},"
                     f"afade=t=in:d={fi},afade=t=out:st={max(0, total - fo):.3f}:d={fo}[{k}]")
        if k in ducked:
            parts.append(f"[{k}][key{k}]sidechaincompress=threshold=0.02:ratio=12:attack=15:release=400:makeup=1[{k}d]")
        parts.append(f"{prog}[{k}{'d' if k in ducked else ''}]amix=inputs=2:normalize=0:duration=first[with{k}]")
        prog = f"[with{k}]"
    if "sfx" in extra:  # after the beds, so effects never duck them
        parts.append(f"[{extra['sfx']}:a]{AUDIO_FMT}[fx]")
        parts.append(f"{prog}[fx]amix=inputs=2:normalize=0:duration=first[withfx]")
        prog = "[withfx]"
    return parts, prog


def _audio_inputs(project: Project) -> tuple:
    """Extra ffmpeg inputs for voice-over, music, ambience and effects. Returns (args, {name: input index}, next index)."""
    args, idx_of, idx = [], {}, 1
    for key in ("voiceover", "music", "ambience"):
        a = project.edit.get(key)
        if a:
            args += (["-stream_loop", "-1"] if key != "voiceover" else []) + ["-i", project.media(a["src"])]
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
        src = motion.render(**_overlay_spec(project, o, master_w, master_h, draft))
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
_STAGES: dict = {}


@contextmanager
def _stage(name: str):
    """Time a pipeline stage; the totals are printed when the render finishes."""
    t = time.time()
    try:
        yield
    finally:
        _STAGES[name] = _STAGES.get(name, 0) + time.time() - t


def render(project: Project, preset_names: list | None = None, draft: bool = False) -> list:
    t0 = time.time()
    project.check_generated()
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
        with _stage("motion"):
            prerender_motion(project, w, h, aspect, draft)
        with _stage("segments"):
            clips = [unit_clip(project, idx, w, h, aspect, draft) for idx in units(project)]
            segs = [build_segment(project, c, w, h, aspect, draft) for c in clips]
        tag = aspect.replace(":", "x")
        with _stage("assemble"):
            assembled = assemble(project, segs, project.build / f"assembled-{tag}{'-draft' if draft else ''}.mov", draft,
                                 clips)
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
            with _stage("finish"):
                finish(project, assembled, p, w, h, aspect, out, draft, measured.get(p["lufs"]))
            outputs.append(out)
    log(f"✓ done in {time.time() - t0:.1f}s  ({', '.join(f'{k} {v:.1f}s' for k, v in _STAGES.items())})")
    _STAGES.clear()
    return outputs
