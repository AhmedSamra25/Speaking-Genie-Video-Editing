// BrandFilm — the Confidence Gap, 9:16, one continuous element tree.
//
// Every section component below renders ALL the time; nothing mounts at a
// boundary. Choreography is keyed to T and CUES only, so a user trimming or
// speeding a section on the host timeline retimes the motion instead of
// cutting it off.
const { useComposition, Captions, Easing, interpolate, animate, clamp } = window;

const A = '../../assets';
const GREEN = '#10c185';   // individual track
const ORANGE = '#e5831a';  // business track
const INK = 'rgba(236,224,247,0.92)';

// --- the three motion helpers. No easing or transform outside these. -------
const MOTION = {
  // rise and fade in
  enter: (T, start, dur = 0.6, dy = 40) => ({
    opacity: animate({ from: 0, to: 1, start, end: start + dur * 0.7, ease: Easing.easeOutQuad })(T),
    transform: `translateY(${animate({ from: dy, to: 0, start, end: start + dur, ease: Easing.easeOutCubic })(T)}px)`
  }),
  // 0..1 progress for anything that draws, fills, wipes or counts
  draw: (T, start, dur = 0.8, ease = Easing.easeOutQuart) =>
    animate({ from: 0, to: 1, start, end: start + dur, ease })(T),
  // scale-in with a little overshoot
  pop: (T, start, dur = 0.55) => ({
    transform: `scale(${animate({ from: 0.72, to: 1, start, end: start + dur, ease: Easing.easeOutBack })(T)})`,
    opacity: animate({ from: 0, to: 1, start, end: start + dur * 0.4, ease: Easing.linear })(T)
  })
};

const fade = (T, start, dur = 0.5) => animate({ from: 1, to: 0, start, end: start + dur, ease: Easing.easeInOutQuad })(T);

// --- persistent brand furniture -------------------------------------------
function Ground({ T, total }) {
  // A slow continuous drift so no frame is ever truly static.
  const k = T / Math.max(total, 1);
  return (
    <React.Fragment>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(115% 85% at 50% -5%,#5a168d 0%,#3d096d 38%,#1c0136 100%)' }} />
      <div style={{
        position: 'absolute', left: '50%', top: '-34%', width: '150%', aspectRatio: '1 / 1',
        borderRadius: '50%', background: 'rgba(255,255,255,0.055)',
        transform: `translateX(-50%) translateY(${interpolate(k, [0, 1], [0, 46], Easing.linear)}px)`
      }} />
      <div style={{
        position: 'absolute', left: '50%', top: '18%', width: 980, height: 980, marginLeft: -490,
        borderRadius: '50%', filter: 'blur(120px)', background: 'rgba(135,16,170,0.34)',
        transform: `scale(${interpolate(Math.sin(k * Math.PI * 2), [-1, 1], [0.92, 1.1], Easing.linear)})`
      }} />
    </React.Fragment>
  );
}

function Lockup({ T, total }) {
  // Top-centre on every frame, at full opacity from frame zero — it is the one
  // fixed element in the brand, and fading it in would also break the loop
  // seam (the last frame still shows it, so the first must too).
  const k = T / Math.max(total, 1);
  return <img src={`${A}/logo-lockup-white.png`} alt="Speaking Genie" style={{
    position: 'absolute', top: 104, left: '50%', height: 86, width: 'auto',
    transform: `translateX(-50%) translateY(${interpolate(Math.sin(k * Math.PI * 2), [-1, 1], [-4, 4], Easing.linear)}px)`
  }} />;
}

// --- section 1 · Freeze ----------------------------------------------------
function Freeze({ T, CUES }) {
  const c = CUES.Freeze;
  const out = fade(T, CUES.Speak - 0.55, 0.5);
  // The silence counter is the tension: it just keeps climbing.
  const secs = clamp(animate({ from: 0, to: 9, start: c + 1.5, end: c + 4.2, ease: Easing.linear })(T), 0, 9);
  const dots = Math.floor(clamp(animate({ from: 0, to: 3.99, start: c + 1.6, end: c + 4, ease: Easing.linear })(T), 0, 3.99));
  return (
    <div style={{ position: 'absolute', inset: '300px 90px auto 90px', opacity: out }}>
      <div style={{ ...MOTION.enter(T, c + 0.5, 0.7), display: 'inline-flex', alignItems: 'center', gap: 16, border: '2px solid rgba(255,255,255,0.28)', borderRadius: 999, padding: '14px 30px' }}>
        <span style={{ width: 14, height: 14, borderRadius: 999, background: '#ef4444' }} />
        <span style={{ fontFamily: 'Poppins,sans-serif', fontSize: 26, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>Final interview</span>
      </div>
      <div style={{ ...MOTION.enter(T, c + 1.0, 0.8), fontFamily: 'Poppins,sans-serif', fontSize: 76, fontWeight: 700, lineHeight: 1.22, color: '#fff', marginTop: 46, textWrap: 'pretty' }}>
        Tell me about a challenge you solved.
      </div>
      <div style={{
        ...MOTION.enter(T, c + 1.8, 0.7),
        marginTop: 64, borderRadius: 28, border: '2px dashed rgba(255,255,255,0.26)',
        background: 'rgba(255,255,255,0.05)', padding: '46px 40px', minHeight: 210,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 26
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              width: 20, height: 20, borderRadius: 999,
              background: i < dots ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.18)'
            }} />
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
          <span style={{ fontFamily: 'Poppins,sans-serif', fontSize: 92, fontWeight: 800, lineHeight: 1, color: '#ef4444', fontVariantNumeric: 'tabular-nums' }}>
            {secs.toFixed(1)}s
          </span>
          <span style={{ fontFamily: 'Poppins,sans-serif', fontSize: 30, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>of silence</span>
        </div>
      </div>
    </div>
  );
}

// --- section 2 · Speak (the mic and the waveform) -------------------------
const SAID = ['It', 'go', 'well.', 'We', 'discuss', 'the', 'timeline.'];

function Speak({ T, CUES, accent = GREEN }) {
  const c = CUES.Speak;
  const inK = MOTION.draw(T, c, 0.6, Easing.easeOutCubic);
  const out = fade(T, CUES.Climb - 0.5, 0.5);
  const orbPulse = 1 + Math.sin(Math.max(T - c, 0) * 3.4) * 0.06;
  const bars = 21;
  const wave = MOTION.draw(T, c + 0.5, 1.1, Easing.easeOutQuart);
  // The orb and waveform recede once the correction takes the stage.
  const recede = animate({ from: 1, to: 0.62, start: CUES.Correct - 0.2, end: CUES.Correct + 0.6, ease: Easing.easeInOutQuad })(T);
  return (
    <div style={{ position: 'absolute', inset: '470px 90px auto 90px', opacity: inK * out, transform: `scale(${recede})`, transformOrigin: '50% 0%' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 54 }}>
        <span style={{ position: 'relative', display: 'flex', width: 150, height: 150, alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ position: 'absolute', inset: 0, borderRadius: 999, background: 'rgba(16,193,133,0.26)', transform: `scale(${orbPulse * 1.28})` }} />
          <span style={{ position: 'absolute', inset: 0, borderRadius: 999, background: accent, transform: `scale(${orbPulse * 0.68})` }} />
          <svg viewBox="0 0 24 24" width="52" height="52" fill="none" stroke="#0b011a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'relative' }}>
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" />
          </svg>
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 150 }}>
        {Array.from({ length: bars }).map((_, i) => {
          const mid = Math.abs(i - (bars - 1) / 2) / ((bars - 1) / 2);
          const base = (1 - mid * 0.78);
          const live = 0.55 + 0.45 * Math.sin(Math.max(T - c, 0) * 5.2 + i * 0.7);
          return <span key={i} style={{
            width: 16, borderRadius: 999,
            height: Math.max(14, 150 * base * live * wave),
            background: i % 2 ? '#fff' : accent, opacity: i % 2 ? 0.88 : 1
          }} />;
        })}
      </div>
    </div>
  );
}

// --- sections 2–3 · the sentence, said then rewritten ---------------------
// One component owns both lines. The struck line and its rewrite are siblings
// in a single column, so the correction can never land on top of the original.
const FIXED = ['It', 'went', 'well.', 'We', 'discussed', 'the', 'timeline.'];
const CHANGED = { 1: true, 4: true };

function Sentence({ T, CUES, accent = GREEN }) {
  const s0 = CUES.Speak, c = CUES.Correct;
  const out = fade(T, CUES.Climb - 0.5, 0.5);
  const strike = MOTION.draw(T, c + 0.2, 0.7, Easing.easeInOutQuad);
  const dim = animate({ from: 1, to: 0.45, start: c + 0.3, end: c + 1.0, ease: Easing.easeInOutQuad })(T);
  return (
    <div style={{
      position: 'absolute', inset: '890px 90px auto 90px', opacity: out,
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 34
    }}>
      {/* What the learner actually said, typed word by word, then struck.
          The strike is an explicit bar per word, not text-decoration: the
          decoration longhands inherit the block's dim opacity, which washed
          the red out to nearly nothing at the exact beat that has to read as
          "this is wrong". A bar carries its own full-opacity colour, and it
          also sidesteps React re-applying the decoration shorthand. */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0 20px', justifyContent: 'center' }}>
        {SAID.map((w, i) => {
          const hit = clamp((strike - i / SAID.length) * SAID.length, 0, 1);
          return (
            <span key={i} style={{ position: 'relative', ...MOTION.enter(T, s0 + 1.5 + i * 0.28, 0.42, 16) }}>
              <span style={{
                fontFamily: 'Poppins,sans-serif', fontSize: 58, fontWeight: 600, lineHeight: 1.35,
                color: '#fff', opacity: dim
              }}>{w}</span>
              <span style={{
                position: 'absolute', left: 0, top: '52%', height: 6, borderRadius: 999,
                width: `${hit * 100}%`, background: '#ef4444'
              }} />
            </span>
          );
        })}
      </div>
      {/* the rewrite */}
      <div style={{ ...MOTION.enter(T, c + 1.0, 0.75), display: 'flex', flexWrap: 'wrap', gap: '0 20px', justifyContent: 'center' }}>
        {FIXED.map((w, i) => (
          <span key={i} style={{
            fontFamily: 'Poppins,sans-serif', fontSize: 66, fontWeight: 700, lineHeight: 1.35,
            color: CHANGED[i] ? accent : '#fff'
          }}>{w}</span>
        ))}
      </div>
      <div style={{ ...MOTION.pop(T, c + 1.9), marginTop: 10 }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 18,
          border: '2px solid rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.1)',
          borderRadius: 999, padding: '18px 40px'
        }}>
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          <span style={{ fontFamily: 'Poppins,sans-serif', fontSize: 34, fontWeight: 700, color: '#fff' }}>Past simple</span>
        </span>
      </div>
    </div>
  );
}

// --- section 4 · Climb -----------------------------------------------------
const LEVELS = ['A2', 'B1', 'B2'];

function Climb({ T, CUES, accent = GREEN }) {
  const c = CUES.Climb;
  const inK = MOTION.draw(T, c, 0.5, Easing.easeOutCubic);
  const out = fade(T, CUES.Close - 0.5, 0.45);
  const streak = Math.round(clamp(animate({ from: 0, to: 23, start: c + 0.5, end: c + 2.1, ease: Easing.easeOutQuart })(T), 0, 23));
  const reached = clamp(animate({ from: 0, to: 3, start: c + 0.6, end: c + 2.6, ease: Easing.easeInOutQuad })(T), 0, 3);
  return (
    <div style={{ position: 'absolute', inset: '600px 90px auto 90px', opacity: inK * out, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 96 }}>
      {/* streak */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 22, ...MOTION.pop(T, c + 0.3) }}>
        <svg viewBox="0 0 24 24" width="88" height="88" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5Z" />
        </svg>
        <span style={{ fontFamily: 'Poppins,sans-serif', fontSize: 148, fontWeight: 800, lineHeight: 1, color: '#fff', fontVariantNumeric: 'tabular-nums' }}>{streak}</span>
        <span style={{ fontFamily: 'Cairo,sans-serif', fontSize: 44, fontWeight: 700, color: INK }} dir="rtl" lang="ar">يوم</span>
      </div>
      {/* CEFR ladder */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 26 }}>
        {LEVELS.map((lv, i) => {
          const on = clamp(reached - i, 0, 1);
          return (
            <div key={lv} style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
              <span style={{
                width: 132, flexShrink: 0, textAlign: 'center', borderRadius: 20, padding: '14px 0',
                fontFamily: 'Poppins,sans-serif', fontSize: 44, fontWeight: 800,
                background: on > 0.5 ? accent : 'rgba(255,255,255,0.14)',
                color: on > 0.5 ? '#0b011a' : 'rgba(255,255,255,0.55)'
              }}>{lv}</span>
              <span style={{ flex: 1, height: 20, borderRadius: 999, background: 'rgba(255,255,255,0.16)', overflow: 'hidden' }}>
                <span style={{ display: 'block', width: `${on * 100}%`, height: '100%', borderRadius: 999, background: accent }} />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- section 5 · Close -----------------------------------------------------
function Close({ T, CUES, total, accent = GREEN }) {
  const c = CUES.Close;
  // Settle, hold, then clear so the loop seam matches the opening frame.
  const out = fade(T, total - 0.5, 0.45);
  return (
    <div style={{ position: 'absolute', inset: '700px 90px auto 90px', opacity: out, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 64 }}>
      <div style={{ ...MOTION.enter(T, c + 0.2, 0.8), fontFamily: 'Cairo,sans-serif', fontSize: 92, fontWeight: 900, lineHeight: 1.4, color: '#fff', textAlign: 'center' }} dir="rtl" lang="ar">
        ماتضيعش <span style={{ color: accent }}>وقتك</span>
      </div>
      <div style={{ ...MOTION.pop(T, c + 0.9) }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', borderRadius: 999,
          border: '2px solid rgba(255,255,255,0.55)', background: 'rgba(255,255,255,0.1)',
          padding: '24px 56px', fontFamily: 'Cairo,sans-serif', fontSize: 46, fontWeight: 700, color: '#fff'
        }} dir="rtl" lang="ar">حمل التطبيق دلوقتي</span>
      </div>
      <div style={{ ...MOTION.enter(T, c + 1.4, 0.7), display: 'flex', gap: 22 }}>
        <img src={`${A}/badge-app-store.png`} alt="Download on the App Store" style={{ height: 88, width: 'auto', borderRadius: 12 }} />
        <img src={`${A}/badge-google-play.png`} alt="Get it on Google Play" style={{ height: 88, width: 'auto', borderRadius: 12 }} />
      </div>
    </div>
  );
}

// --- the one tree ----------------------------------------------------------
function BrandFilm({ track = 'individual', captions = true }) {
  const { T, CUES, authoredTotal } = useComposition();
  const accent = track === 'business' ? ORANGE : GREEN;
  const total = authoredTotal || 20.5;
  return (
    <div data-screen-label={`t=${T.toFixed(1)}s`} style={{ position: 'absolute', inset: 0, overflow: 'hidden', fontFamily: 'Inter,sans-serif' }}>
      <Ground T={T} total={total} />
      <Lockup T={T} total={total} />
      <Freeze T={T} CUES={CUES} />
      <Speak accent={accent} T={T} CUES={CUES} />
      <Sentence accent={accent} T={T} CUES={CUES} />
      <Climb accent={accent} T={T} CUES={CUES} />
      <Close accent={accent} T={T} CUES={CUES} total={total} />
      {/* Captions places itself against the stage (left/right 8%, bottom 7%)
          and shows one item at a time — no wrapper, or it double-positions. */}
      {captions ? <Captions items={[
        { at: CUES.Freeze + 2.2, until: CUES.Speak - 0.2, text: 'لحظة السكوت دي بتكلفك الوظيفة' },
        { at: CUES.Speak + 0.6, until: CUES.Correct - 0.2, text: 'اتكلم. الغلط مش مشكلة.' },
        { at: CUES.Correct + 0.3, until: CUES.Climb - 0.2, text: 'التصحيح بيجي بعد ما تخلّص جملتك' },
        { at: CUES.Climb + 0.4, until: CUES.Close - 0.3, text: 'كل غلطة بتبقى تمرين بكرة' }
      ]} style={{
        font: '700 46px Cairo, sans-serif', lineHeight: 1.7,
        color: INK, direction: 'rtl', bottom: '8%'
      }} /> : null}
    </div>
  );
}

Object.assign(window, { BrandFilm, MOTION });
