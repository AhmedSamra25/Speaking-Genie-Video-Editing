// Speaking Genie — 56s onboarding explainer. Built on animations-v3 (CompositionStage) with real Sg* design-system components.
(function () {
  const { useComposition, CompositionStage, Shot, Captions, Easing, animate, interpolate, clamp } = window;
  const SG = () => window.SpeakingGenieDesignSystem_9bb41a || {};
  const MOTION = {
    enter: (start, dur = 0.6) => animate({ from: 0, to: 1, start, end: start + dur, ease: Easing.easeOutCubic }),
    draw: (start, dur = 1.2) => animate({ from: 0, to: 1, start, end: start + dur, ease: Easing.easeInOutCubic }),
    pop: (start, dur = 0.5) => animate({ from: 0, to: 1, start, end: start + dur, ease: Easing.easeOutBack })
  };
  const rise = (p, d = 24) => ({ opacity: p, transform: `translateY(${(1 - p) * d}px)` });
  const ink = { color: "#0F1729" }, muted = { color: "#64748B" };
  const font = "'Plus Jakarta Sans', system-ui, sans-serif";

  function Frame({ children, zoom = 1, ox = 50, oy = 50 }) {
    return <div style={{ position: "absolute", inset: 0, transform: `scale(${zoom})`, transformOrigin: `${ox}% ${oy}%` }}>{children}</div>;
  }
  function Window({ children, title, style }) {
    return (
      <div style={{ position: "absolute", background: "#fff", border: "1px solid #E7E9EF", borderRadius: 22, boxShadow: "0 24px 64px -16px rgba(15,23,41,.25)", overflow: "hidden", ...style }}>
        <div style={{ height: 54, display: "flex", alignItems: "center", gap: 14, padding: "0 24px", borderBottom: "1px solid #F1F3F7" }}>
          <img src="assets/logo-light.png" style={{ height: 24 }} />
          <div style={{ fontSize: 15, ...muted }}>{title}</div>
        </div>
        <div style={{ position: "relative", padding: 32 }}>{children}</div>
      </div>
    );
  }
  function Bubble({ who, text, me, p, chars }) {
    const shown = chars == null ? text : text.slice(0, Math.floor(chars));
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: me ? "flex-end" : "flex-start", gap: 8, ...rise(p) }}>
        <div style={{ fontSize: 18, ...muted }}>{who}</div>
        <div style={{ maxWidth: 820, padding: "20px 26px", borderRadius: 22, fontSize: 30, lineHeight: 1.45, background: me ? "#F5F3FF" : "#fff", border: `1px solid ${me ? "#D9C9F7" : "#E7E9EF"}`, ...ink }}>{shown}</div>
      </div>
    );
  }

  function Hook({ T, C }) {
    const a = MOTION.pop(C.Hook + 0.2, 0.7)(T), b = MOTION.enter(C.Hook + 1.0)(T), c = MOTION.enter(C.Hook + 2.0)(T);
    const z = interpolate([C.Hook, C.Speak], [1, 1.06], Easing.linear)(T);
    return (
      <Shot from={C.Hook} to={C.Speak}>
        <Frame zoom={z}>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 36 }}>
            <img src="assets/logo-light.png" style={{ height: 96, opacity: a, transform: `scale(${0.8 + 0.2 * a})` }} />
            <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: "-0.02em", textAlign: "center", ...ink, ...rise(b) }}>Your students speak.<br /><span style={{ color: "#6D28D9" }}>Speaking Genie listens.</span></div>
            <div style={{ fontSize: 30, ...muted, ...rise(c) }}>AI speaking practice with feedback teachers can act on.</div>
          </div>
        </Frame>
      </Shot>
    );
  }

  function Speak({ T, C }) {
    const S = C.Speak, z = interpolate([S, C.Feedback], [1, 1.07], Easing.linear)(T);
    const k = (C.Feedback - S) / 8, at = x => S + x * k;
    const w = MOTION.enter(S + 0.1)(T), g = MOTION.enter(S + 0.6)(T);
    // who is talking: AI 0.8–2.8, student 3.0–6.6, AI 6.8–7.8
    const aiTalk = (T > at(0.8) && T < at(2.8)) || (T > at(6.8) && T < at(7.8)), stTalk = T > at(3.0) && T < at(6.6);
    const topics = [["Greet the tourist", at(2.9)], ["Give the route step by step", at(5.0)], ["Name a landmark to look for", at(6.4)]];
    const bars = (on, seed) => Array.from({ length: 40 }).map((_, i) => <div key={i} style={{ width: 7, height: on ? 10 + Math.abs(Math.sin(T * 8 + i * 0.6 + seed)) * 46 : 6, borderRadius: 4, background: on ? "#A78BFA" : "#E7E9EF" }} />);
    const secs = Math.max(0, Math.floor(T - S - 0.8));
    return (
      <Shot from={S} to={C.Feedback}>
        <Frame zoom={z} oy={55}>
          <Window title="Give travel directions · Level A2 · Topic-based task" style={{ left: 200, top: 150, width: 1520, height: 700, ...rise(w, 40) }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: 32 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 26, padding: "34px 0", border: "1px solid #E7E9EF", borderRadius: 22, justifyContent: "center" }}>
                <div style={{ width: 170, height: 170, borderRadius: 999, background: "#EDE9FE", color: "#5B21B6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56, fontWeight: 700, boxShadow: aiTalk ? "0 0 0 14px rgba(109,40,217,.14), 0 0 0 28px rgba(109,40,217,.06)" : "none" }}>LM</div>
                <div style={{ textAlign: "center" }}><div style={{ fontSize: 30, fontWeight: 700, ...ink }}>Layla · AI tourist</div><div style={{ fontSize: 22, marginTop: 6, color: aiTalk ? "#6D28D9" : stTalk ? "#047857" : "#64748B", fontWeight: 600 }}>{aiTalk ? "Layla is speaking…" : stTalk ? "You're speaking…" : "Listening"}</div></div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, height: 64 }}>{bars(aiTalk || stTalk, stTalk ? 2 : 0)}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
                  <div style={{ width: 76, height: 76, borderRadius: 999, background: stTalk ? "#6D28D9" : "#EDE9FE", color: stTalk ? "#fff" : "#5B21B6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>●</div>
                  <div style={{ fontSize: 28, fontVariantNumeric: "tabular-nums", ...muted }}>00:{String(secs).padStart(2, "0")} / 08:00</div>
                  <div style={{ padding: "12px 22px", borderRadius: 12, border: "1px solid #D9DDE5", fontSize: 22, fontWeight: 600, ...ink }}>End call</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 20, ...rise(g) }}>
                <div style={{ border: "1px solid #D9C9F7", background: "#F5F3FF", borderRadius: 20, padding: "24px 26px" }}>
                  <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6D28D9" }}>Task goal</div>
                  <div style={{ fontSize: 27, lineHeight: 1.45, marginTop: 10, ...ink }}>Help a tourist reach the Egyptian Museum with clear, step-by-step directions.</div>
                </div>
                <div style={{ border: "1px solid #E7E9EF", borderRadius: 20, padding: "22px 26px" }}>
                  <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", ...muted }}>Discussion topics</div>
                  {topics.map(([label, at]) => { const d = MOTION.pop(at, 0.4)(T); return (
                    <div key={label} style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 16, fontSize: 24, ...ink }}>
                      <div style={{ width: 36, height: 36, borderRadius: 999, flexShrink: 0, background: d > 0.5 ? "#047857" : "#EDEFF3", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, transform: `scale(${0.85 + 0.15 * d})` }}>{d > 0.5 ? "✓" : ""}</div>{label}
                    </div>); })}
                </div>
                <div style={{ border: "1px solid #E7E9EF", borderRadius: 20, padding: "20px 26px" }}>
                  <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", ...muted }}>Try to use</div>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>{["go straight", "turn left", "next to", "on your right"].map(x => <span key={x} style={{ fontSize: 21, padding: "6px 14px", borderRadius: 10, background: "#F1F3F7", ...ink }}>{x}</span>)}</div>
                </div>
              </div>
            </div>
          </Window>
        </Frame>
      </Shot>
    );
  }

  function Feedback({ T, C }) {
    const F = C.Feedback, sg = SG();
    const k = (C.Teacher - F) / 9, at = x => F + x * k;
    const w = MOTION.enter(F)(T), sc = MOTION.draw(at(0.6), 1.4)(T), r1 = MOTION.enter(at(2.2))(T), fix = MOTION.draw(at(3.0), 0.8)(T), r2 = MOTION.enter(at(4.6))(T), r3 = MOTION.enter(at(6.0))(T);
    const z = interpolate([F, F + 3, C.Teacher], [1, 1.06, 1.09], Easing.easeInOutSine)(T);
    return (
      <Shot from={F} to={C.Teacher}>
        <Frame zoom={z} ox={50} oy={45}>
          <Window title="Session summary · Mahmoud Youssef" style={{ left: 300, top: 70, width: 1320, height: 800, ...rise(w, 40) }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
              <div style={{ fontSize: 88, fontWeight: 700, fontVariantNumeric: "tabular-nums", ...ink }}>{Math.round(65 * sc)}%</div>
              {sg.SgBadge ? <sg.SgBadge tone="warning">Needs practice</sg.SgBadge> : null}
              <div style={{ marginLeft: "auto", fontSize: 24, ...muted }}>4 messages · 01:37</div>
            </div>
            <div style={{ height: 12, borderRadius: 999, background: "#EDEFF3", margin: "14px 0 34px", overflow: "hidden" }}><div style={{ height: "100%", width: `${65 * sc}%`, background: "#B45309" }} /></div>
            <div style={{ border: "1px solid #E7E9EF", borderRadius: 18, padding: "24px 28px", ...rise(r1) }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}><div style={{ fontSize: 28, fontWeight: 700, ...ink }}>Grammar</div>{sg.SgBadge ? <sg.SgBadge tone="danger" caps>High priority</sg.SgBadge> : null}</div>
              <div style={{ fontSize: 26, marginTop: 16, ...ink }}>“Once you <span style={{ position: "relative", color: "#B91C1C" }}>had the ground<span style={{ position: "absolute", left: 0, top: "55%", height: 3, width: `${fix * 100}%`, background: "#B91C1C" }} /></span>, walk straight…”</div>
              <div style={{ fontSize: 26, marginTop: 10, color: "#047857", fontWeight: 600, opacity: fix }}>→ when you get to the ground floor</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginTop: 22 }}>
              <div style={{ borderRadius: 18, padding: "22px 26px", background: "#ECFDF5", border: "1px solid #A7F3D0", ...rise(r2) }}><div style={{ fontSize: 24, fontWeight: 700, color: "#047857" }}>✓ Strength</div><div style={{ fontSize: 22, marginTop: 8, ...ink }}>Used “walk straight” and “turn left” correctly.</div></div>
              <div style={{ borderRadius: 18, padding: "22px 26px", background: "#EFF6FF", border: "1px solid #BFDBFE", ...rise(r3) }}><div style={{ fontSize: 24, fontWeight: 700, color: "#1D4ED8" }}>Practice tip</div><div style={{ fontSize: 22, marginTop: 8, ...ink }}>Say five routes starting with “When you get to…”.</div></div>
            </div>
          </Window>
        </Frame>
      </Shot>
    );
  }

  function Teacher({ T, C }) {
    const R = C.Teacher, w = MOTION.enter(R)(T);
    const rows = [["LA", "Laila Adel", 7, 58, 82], ["MY", "Mahmoud Youssef", 6, 49, 77], ["HE", "Hana Ezzat", 5, 46, 80], ["KS", "Karim Saleh", 6, 44, 66], ["NA", "Nadia Amin", 5, 38, 73]];
    const z = interpolate([R, C.Dashboard], [1.04, 1], Easing.linear)(T);
    const q = MOTION.enter(R + 4.2)(T);
    return (
      <Shot from={R} to={C.Dashboard}>
        <Frame zoom={z}>
          <Window title="A2 Morning · Ranking · Aug 11–17" style={{ left: 120, top: 120, width: 1060, height: 840, ...rise(w, 40) }}>
            <div style={{ display: "grid", gridTemplateColumns: "60px 1.6fr 1fr 1fr 110px", gap: 18, fontSize: 17, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", paddingBottom: 14, borderBottom: "1px solid #E7E9EF", ...muted }}><span>#</span><span>Student</span><span>Sessions</span><span>Practice</span><span>Score</span></div>
            {rows.map(([i, n, s, m, sc], k) => {
              const p = MOTION.enter(R + 0.6 + k * 0.35)(T), bar = MOTION.draw(R + 0.9 + k * 0.35, 1)(T);
              return (
                <div key={n} style={{ display: "grid", gridTemplateColumns: "60px 1.6fr 1fr 1fr 110px", gap: 18, alignItems: "center", height: 100, borderBottom: "1px solid #F1F3F7", fontSize: 24, ...ink, ...rise(p, 16) }}>
                  <span style={{ fontWeight: 700 }}>{k + 1}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={{ width: 46, height: 46, borderRadius: 999, background: "#EDE9FE", color: "#5B21B6", fontSize: 17, fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{i}</span>{n}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 10 }}><span style={{ flex: 1, height: 8, borderRadius: 9, background: "#EDEFF3" }}><span style={{ display: "block", height: "100%", width: `${s / 7 * 100 * bar}%`, background: "#047857", borderRadius: 9 }} /></span>{s}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 10 }}><span style={{ flex: 1, height: 8, borderRadius: 9, background: "#EDEFF3" }}><span style={{ display: "block", height: "100%", width: `${m / 58 * 100 * bar}%`, background: "#6D28D9", borderRadius: 9 }} /></span>{m}m</span>
                  <span style={{ fontWeight: 700, color: sc >= 75 ? "#047857" : "#B45309" }}>{sc}</span>
                </div>
              );
            })}
          </Window>
          <div style={{ position: "absolute", left: 1220, top: 260, width: 580, background: "#fff", border: "1px solid #E7E9EF", borderRadius: 22, padding: 30, boxShadow: "0 16px 40px -12px rgba(16,24,40,.22)", ...rise(q, 40) }}>
            <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", ...muted }}>What students said</div>
            <div style={{ fontSize: 26, fontWeight: 700, marginTop: 10, ...ink }}>Past simple · 14 of 24 students</div>
            <div style={{ marginTop: 18, padding: "16px 20px", borderRadius: 16, background: "#F5F3FF", border: "1px solid #D9C9F7", fontSize: 22, lineHeight: 1.5, ...ink }}>“On Friday I <s style={{ color: "#B91C1C" }}>buyed</s> new shoes.”</div>
            <div style={{ fontSize: 22, marginTop: 10, color: "#047857", fontWeight: 600 }}>→ bought</div>
            <div style={{ fontSize: 20, marginTop: 16, ...muted }}>Teaching tip · run a “yesterday” chain game.</div>
          </div>
        </Frame>
      </Shot>
    );
  }

  function Dashboard({ T, C }) {
    const D = C.Dashboard, w = MOTION.enter(D)(T);
    const kpis = [["Average overall score", 71, ""], ["Task completion", 68, "%"], ["Students improving", 62, "%"], ["Students at risk", 23, ""]];
    const z = interpolate([D, C.Setup], [1, 1.07], Easing.linear)(T);
    return (
      <Shot from={D} to={C.Setup}>
        <Frame zoom={z} oy={30}>
          <Window title="Dashboard · Performance · 30 days" style={{ left: 160, top: 90, width: 1600, height: 900, ...rise(w, 40) }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22 }}>
              {kpis.map(([l, v, u], k) => {
                const p = MOTION.enter(D + 0.3 + k * 0.2)(T), n = MOTION.draw(D + 0.5 + k * 0.2, 1.2)(T);
                return <div key={l} style={{ border: "1px solid #E7E9EF", borderRadius: 18, padding: "22px 26px", ...rise(p) }}><div style={{ fontSize: 20, ...muted }}>{l}</div><div style={{ fontSize: 56, fontWeight: 700, fontVariantNumeric: "tabular-nums", marginTop: 6, color: k === 3 ? "#B91C1C" : "#0F1729" }}>{Math.round(v * n)}{u}</div></div>;
              })}
            </div>
            <div style={{ border: "1px solid #E7E9EF", borderRadius: 18, padding: "26px 30px", marginTop: 22 }}>
              <div style={{ fontSize: 26, fontWeight: 700, ...ink }}>Score trend by skill</div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 34, height: 380, marginTop: 20 }}>
                {[[60, 64, 58], [62, 64, 60], [63, 66, 61], [64, 67, 63], [66, 68, 64], [67, 70, 66], [68, 70, 67], [70, 72, 69]].map((v, k) => (
                  <div key={k} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 330, width: "100%", justifyContent: "center" }}>
                      {v.map((x, j) => <div key={j} style={{ width: "26%", height: `${x * MOTION.draw(D + 1.2 + k * 0.12, 0.9)(T)}%`, borderRadius: "6px 6px 0 0", background: ["#D9C9F7", "#A78BFA", "#6D28D9"][j] }} />)}
                    </div>
                    <div style={{ fontSize: 18, ...muted }}>W{k + 1}</div>
                  </div>
                ))}
              </div>
            </div>
          </Window>
        </Frame>
      </Shot>
    );
  }

  function Setup({ T, C }) {
    const S = C.Setup;
    const steps = [["Pick a course template", "AI drafts 5 levels, 86 tasks and 420 words"], ["Create your first group", "A2 Morning · Nour Hassan · Sun · Tue · Thu"], ["Share the invite link", "cairolc.speakingenie.com/join/a2m"]];
    const t0 = MOTION.enter(S + 0.1)(T);
    return (
      <Shot from={S} to={C.Close}>
        <Frame zoom={interpolate([S, C.Close], [1, 1.05], Easing.linear)(T)}>
          <div style={{ position: "absolute", left: 0, right: 0, top: 150, textAlign: "center", fontSize: 64, fontWeight: 700, letterSpacing: "-0.02em", ...ink, ...rise(t0) }}>Set up your centre in 5 minutes</div>
          <div style={{ position: "absolute", left: 460, width: 1000, top: 330, display: "flex", flexDirection: "column", gap: 24 }}>
            {steps.map(([a, b], k) => {
              const p = MOTION.enter(S + 0.6 + k * 1.3)(T), ck = MOTION.pop(S + 1.3 + k * 1.3)(T);
              return (
                <div key={a} style={{ display: "flex", alignItems: "center", gap: 26, background: "#fff", border: "1px solid #E7E9EF", borderRadius: 22, padding: "28px 34px", ...rise(p, 30) }}>
                  <div style={{ width: 64, height: 64, borderRadius: 999, background: ck > 0.5 ? "#047857" : "#EDE9FE", color: ck > 0.5 ? "#fff" : "#5B21B6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, fontWeight: 700, transform: `scale(${0.85 + 0.15 * ck})` }}>{ck > 0.5 ? "✓" : k + 1}</div>
                  <div><div style={{ fontSize: 34, fontWeight: 700, ...ink }}>{a}</div><div style={{ fontSize: 24, marginTop: 4, ...muted }}>{b}</div></div>
                </div>
              );
            })}
          </div>
        </Frame>
      </Shot>
    );
  }

  function Close({ T, C, end }) {
    const K = C.Close, a = MOTION.pop(K + 0.1, 0.7)(T), b = MOTION.enter(K + 0.7)(T);
    const out = 1 - MOTION.enter(end - 0.5, 0.5)(T);
    return (
      <Shot from={K} to={end + 1}>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 34, opacity: out }}>
          <img src="assets/logo-light.png" style={{ height: 90, opacity: a, transform: `scale(${0.85 + 0.15 * a})` }} />
          <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: "-0.02em", ...ink, ...rise(b) }}>Start with a 60-second speaking test.</div>
          <div style={{ padding: "22px 44px", borderRadius: 16, background: "#6D28D9", color: "#fff", fontSize: 30, fontWeight: 700, ...rise(b) }}>Try it now</div>
        </div>
      </Shot>
    );
  }

  // Egyptian voice-over: one file, 14 lines. Each line's audio segment [start, end] (s) is played when its caption starts.
  const VO_SEGS = [[0.10,3.06],[3.48,7.60],[8.06,11.22],[11.60,14.72],[15.04,17.72],[18.16,20.92],[21.22,24.82],[25.18,28.40],[28.84,32.90],[33.18,36.66],[37.04,40.64],[41.12,43.02],[43.46,46.36],[46.86,49.64]];
  function VoiceOver({ T, C, playing, on }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const a = ref.current; if (!a) return;
      let target = -1;
      LINES.forEach((l, i) => { const at = C[l[0]] + l[1], d = VO_SEGS[i][1] - VO_SEGS[i][0]; if (T >= at && T < at + d) target = VO_SEGS[i][0] + (T - at); });
      if (on && playing && target >= 0) {
        if (Math.abs(a.currentTime - target) > 0.25) a.currentTime = target;
        if (a.paused) a.play().catch(() => {});
      } else if (!a.paused) a.pause();
    });
    return <audio ref={ref} src="assets/vo-eg.mp3" preload="auto" />;
  }

  function Piece({ lang, vo }) {
    const { T, CUES: C, authoredTotal, playing } = useComposition();
    return (
      <div data-screen-label={"Video " + Math.floor(T) + "s"} style={{ position: "absolute", inset: 0, background: "#F7F8FB", fontFamily: font, overflow: "hidden" }}>
        <Hook T={T} C={C} /><Speak T={T} C={C} /><Feedback T={T} C={C} /><Teacher T={T} C={C} /><Dashboard T={T} C={C} /><Setup T={T} C={C} /><Close T={T} C={C} end={authoredTotal} />
        <VoiceOver T={T} C={C} playing={playing} on={vo} />
        {lang !== "off" ? <Captions style={{ left: "50%", right: "auto", transform: "translateX(-50%)", bottom: 40, width: "max-content", maxWidth: "80%", font: lang === "ar" || lang === "eg" ? "600 32px 'IBM Plex Sans Arabic', system-ui, sans-serif" : "600 30px 'Plus Jakarta Sans', system-ui, sans-serif", direction: lang === "ar" || lang === "eg" ? "rtl" : "ltr", lineHeight: 1.5, color: "#fff", textShadow: "none", background: "rgba(15,23,41,.86)", borderRadius: 14, padding: "14px 28px" }} items={window.SG_VIDEO_SCRIPT(C)[lang] || []} /> : null}
      </div>
    );
  }

  function OnboardingVideo() {
    const [t, setTweak] = window.useTweaks(window.SG_VIDEO_TWEAKS || { motionEditor: true });
    return (
      <>
        <CompositionStage width={1920} height={1080} scenes={window.OM_SCENES} playback={window.OM_PLAYBACK} bg="#F7F8FB"><Piece lang={new URLSearchParams(location.search).get("cc") || t.captions || "eg"} vo={t.voiceOver !== false} /></CompositionStage>
        <window.TweaksPanel>
          <window.TweakSection label="Video" />
          <window.TweakToggle label="Motion editor" value={t.motionEditor} onChange={v => setTweak("motionEditor", v)} />
          <window.TweakToggle label="Voice-over (Egyptian)" value={t.voiceOver !== false} onChange={v => setTweak("voiceOver", v)} />
          <window.TweakRadio label="Captions" value={t.captions || "eg"} options={["eg", "en", "ar", "off"]} onChange={v => setTweak("captions", v)} />
        </window.TweaksPanel>
      </>
    );
  }
  // Voice-over script = captions. One line per beat; "at" is seconds from the section start.
  const LINES = [
    ["Hook", 0.6, "Your students speak. Speaking Genie listens.", "طلابك يتحدثون، وSpeaking Genie يستمع.", "طلابك بيتكلموا، وSpeaking Genie بيسمعهم."],
    ["Hook", 4.0, "AI speaking practice, with feedback your teachers can act on.", "تدريب على التحدث بالذكاء الاصطناعي، مع ملاحظات يستفيد منها معلّموك.", "AI speaking practice، مع feedback المدرسين يقدروا يشتغلوا عليه."],
    ["Speak", 0.4, "Each student gets a real-life task and a clear goal.", "يحصل كل طالب على مهمة من الحياة الواقعية وهدف واضح.", "كل طالب بياخد real-life task وgoal واضح."],
    ["Speak", 3.9, "Then they just talk, with an AI character, out loud.", "ثم يتحدث بصوت عالٍ مع شخصية ذكاء اصطناعي.", "وبعدها يتكلم بصوت عالي مع AI character."],
    ["Speak", 7.4, "Topics tick off as they cover them.", "تُحدَّد المواضيع تلقائيًا كلما تناولها.", "والـtopics بتتعلّم عليها أول ما يتكلم فيها."],
    ["Feedback", 0.4, "When the call ends, the feedback is ready.", "عند انتهاء المكالمة تكون الملاحظات جاهزة.", "أول ما الـcall تخلص، الـfeedback بيكون جاهز."],
    ["Feedback", 3.5, "A score, the exact words that need fixing, and how to say them.", "درجة، والكلمات التي تحتاج إلى تصحيح، وطريقة قولها الصحيحة.", "Score، والكلمات اللي محتاجة تتصلح، وإزاي تتقال صح."],
    ["Feedback", 7.5, "Plus one strength and one tip to practise next.", "بالإضافة إلى نقطة قوة ونصيحة للتدريب التالي.", "وكمان نقطة قوة وtip يتمرّن عليه المرة الجاية."],
    ["Teacher", 0.4, "Teachers see every student ranked by sessions and practice time.", "يرى المعلّمون جميع الطلاب مرتبين حسب الجلسات ووقت الممارسة.", "المدرسين بيشوفوا كل الطلاب مترتبين بالـsessions ووقت الـpractice."],
    ["Teacher", 4.8, "And real examples of what the class got wrong, ready for the next lesson.", "وأمثلة حقيقية على أخطاء الصف، جاهزة للدرس التالي.", "وأمثلة حقيقية على غلطات الفصل، جاهزة للحصة الجاية."],
    ["Dashboard", 0.4, "Admins track performance across every group, at a glance.", "ويتابع المشرفون أداء كل المجموعات بنظرة واحدة.", "والـadmins بيتابعوا الـperformance بتاع كل الـgroups في نظرة واحدة."],
    ["Setup", 0.4, "Setting up takes about five minutes.", "الإعداد يستغرق نحو خمس دقائق.", "الـsetup بياخد حوالي خمس دقايق."],
    ["Setup", 2.7, "Pick a template, create a group, share one link.", "اختر قالبًا، وأنشئ مجموعة، وشارك رابطًا واحدًا.", "اختار template، اعمل group، وابعت link واحد."],
    ["Close", 0.3, "Start with a 60-second speaking test.", "ابدأ باختبار تحدث مدته 60 ثانية.", "ابدأ بـspeaking test مدته 60 ثانية."]
  ];
  window.SG_VIDEO_LINES = LINES;
  window.SG_VIDEO_SCRIPT = C => {
    const mk = col => LINES.map((l, i) => { const next = LINES[i + 1]; const at = C[l[0]] + l[1]; const d = VO_SEGS[i][1] - VO_SEGS[i][0]; return { at, until: next ? Math.min(C[next[0]] + next[1], at + d + 0.3) : at + d + 0.4, text: l[col] }; });
    return { en: mk(2), ar: mk(3), eg: mk(4) };
  };
  window.OnboardingVideo = OnboardingVideo;
})();
