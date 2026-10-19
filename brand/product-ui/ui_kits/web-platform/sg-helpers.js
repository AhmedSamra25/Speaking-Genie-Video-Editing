/* Shared table-cell renderers for the Speaking Genie prototype. Called lazily from SgTable column render fns. */
(function () {
  const h = (...a) => window.React.createElement(...a);
  const SG = () => window.SpeakingGenieDesignSystem_9bb41a;
  const ell = { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" };
  // Table density pass: tags SgTable roots and applies lighter header, roomier rows, horizontal scroll for wide tables.
  if (!window.__sgTableTune) {
    window.__sgTableTune = true;
    const css = `
      [data-sgt] { overflow-x: auto !important; }
      [data-sgt] > div { column-gap: 24px !important; padding-inline: 24px !important; }
      [data-sgt] > div:first-child { background: transparent !important; padding-block: 14px 12px !important; font-size: 11px !important; letter-spacing: 0.07em !important; color: var(--sg-ink-muted) !important; border-bottom: 1px solid var(--sg-border) !important; }
      [data-sgt] > [data-sgt-row] { min-height: 68px !important; padding-block: 12px !important; border-bottom-color: var(--sg-divider) !important; }
      [data-sgt] > [data-sgt-row]:last-of-type { border-bottom: 0 !important; }
      [data-sgt] > [data-sgt-foot] { border-top: 1px solid var(--sg-divider); padding: 14px 24px !important; }
      [data-sgt][data-sgt-wide] > div { min-width: 980px; }
      [data-sgt] > div:first-child > div { white-space: nowrap; }
      [data-sgt][data-sgt-dense] > [data-sgt-row] { min-height: 56px !important; padding-block: 8px !important; }
      [dir="rtl"] [data-sgt] > div:first-child { letter-spacing: 0 !important; }`;
    const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    const tag = () => document.querySelectorAll("div").forEach(el => {
      const hd = el.firstElementChild;
      if (!hd || el.hasAttribute("data-sgt-done")) return;
      if (hd.style && hd.style.display === "grid" && hd.style.textTransform === "uppercase" && el.style.overflow === "hidden") {
        el.setAttribute("data-sgt", "");
        const cols = (hd.style.gridTemplateColumns || "").split(" ").length;
        if (cols >= 5) el.setAttribute("data-sgt-wide", "");
      }
      if (el.hasAttribute("data-sgt")) {
        [...el.children].forEach((c, i) => { if (i === 0) return; if (c.style.display === "grid") c.setAttribute("data-sgt-row", ""); else c.setAttribute("data-sgt-foot", ""); });
        const r = el.querySelector("[data-sgt-row]");
        if (r && parseInt(r.style.minHeight) <= 52) el.setAttribute("data-sgt-dense", "");
      }
    });
    let q = 0;
    new MutationObserver(() => { if (!q) q = setTimeout(() => { q = 0; tag(); }, 30); }).observe(document.documentElement, { childList: true, subtree: true });
    document.addEventListener("DOMContentLoaded", tag); tag();
  }
  window.SGH = {
    person: (i, n, e) => h("div", { style: { display: "flex", alignItems: "center", gap: 12, minWidth: 0 } },
      h(SG().SgAvatar, { initials: i, size: 30 }),
      h("div", { style: { minWidth: 0 } },
        h("div", { style: { fontSize: 14, fontWeight: 600, color: "var(--sg-ink)", ...ell } }, n),
        e ? h("div", { style: { fontSize: 12, color: "var(--sg-ink-muted)", ...ell } }, e) : null)),
    two: (a, b) => h("div", { style: { minWidth: 0 } },
      h("div", { style: { fontSize: 13, color: "var(--sg-ink)", ...ell } }, a),
      b ? h("div", { style: { fontSize: 12, color: "var(--sg-ink-muted)", marginTop: 2, ...ell } }, b) : null),
    strong: (a, b) => h("div", { style: { minWidth: 0 } },
      h("div", { style: { fontSize: 14, fontWeight: 600, color: "var(--sg-ink)", ...ell } }, a),
      b ? h("div", { style: { fontSize: 12, color: "var(--sg-ink-muted)", marginTop: 2, ...ell } }, b) : null),
    badge: (tone, t, dot) => h(SG().SgBadge, { tone, dot: dot !== false, style: { whiteSpace: "nowrap" } }, t),
    tag: (t, v) => h(SG().SgTag, { variant: v || "meta" }, t),
    tags: (arr, v) => h("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" } }, arr.map(t => h(SG().SgTag, { key: t, variant: v || "meta" }, t))),
    num: (v, c) => h("span", { style: { fontVariantNumeric: "tabular-nums", fontSize: 13, fontWeight: 600, color: c || "var(--sg-ink)" } }, v),
    muted: t => h("span", { style: { fontSize: 13, color: "var(--sg-ink-muted)", fontVariantNumeric: "tabular-nums" } }, t),
    mono: t => h("span", { style: { fontFamily: "var(--sg-mono)", fontSize: 12, color: "var(--sg-ink-2)" } }, t),
    meter: (v, label, tone) => h("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
      h(SG().SgProgress, { value: Math.min(v, 100), height: 5, width: 84, tone: tone || (v >= 100 ? "danger" : v >= 80 ? "warning" : "brand") }),
      h("span", { style: { fontSize: 12, color: "var(--sg-ink-2)", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" } }, label)),
    score: s => h("span", { style: { fontVariantNumeric: "tabular-nums", fontSize: 14, fontWeight: 700, color: s >= 75 ? "var(--sg-success)" : s >= 62 ? "var(--sg-warning)" : "var(--sg-danger)" } }, s),
    more: onClick => h(SG().SgButton, { variant: "tertiary", size: "sm", iconOnly: true, onClick: e => { e.stopPropagation(); onClick && onClick(); } }, "⋯"),
    btn: (label, onClick, variant) => h(SG().SgButton, { variant: variant || "secondary", size: "sm", onClick: e => { e.stopPropagation(); onClick && onClick(); } }, label),
    btns: list => h("div", { style: { display: "flex", gap: 6, justifyContent: "flex-end" } }, list.map(([l, f, v], i) => h(SG().SgButton, { key: i, variant: v || "tertiary", size: "sm", onClick: e => { e.stopPropagation(); f && f(); } }, l))),
    sw: on => h(SG().SgSwitch, { on }),
    dot: (color, t) => h("span", { style: { display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--sg-ink-2)", whiteSpace: "nowrap" } },
      h("i", { style: { width: 6, height: 6, borderRadius: 999, background: color, display: "inline-block" } }), t),
    empty: (title, desc, label, onClick) => h(SG().SgEmptyState, { title, description: desc, action: label ? h(SG().SgButton, { size: "md", onClick }, label) : null, style: { margin: 20 } })
  };
})();
