/* @ds-bundle: {"format":4,"namespace":"SpeakingGenieDesignSystem_9bb41a","components":[{"name":"SgButton","sourcePath":"components/actions/SgButton.jsx"},{"name":"SgAvatar","sourcePath":"components/data/SgAvatar.jsx"},{"name":"SgBarChart","sourcePath":"components/data/SgBarChart.jsx"},{"name":"SgCard","sourcePath":"components/data/SgCard.jsx"},{"name":"SgKpiBar","sourcePath":"components/data/SgKpiBar.jsx"},{"name":"SgListRow","sourcePath":"components/data/SgListRow.jsx"},{"name":"SgMetricCard","sourcePath":"components/data/SgMetricCard.jsx"},{"name":"SgStat","sourcePath":"components/data/SgStat.jsx"},{"name":"SgTable","sourcePath":"components/data/SgTable.jsx"},{"name":"SgPermissionGroup","sourcePath":"components/domain/SgPermissionGroup.jsx"},{"name":"SgAlert","sourcePath":"components/feedback/SgAlert.jsx"},{"name":"SgBadge","sourcePath":"components/feedback/SgBadge.jsx"},{"name":"SgEmptyState","sourcePath":"components/feedback/SgEmptyState.jsx"},{"name":"SgProgress","sourcePath":"components/feedback/SgProgress.jsx"},{"name":"SgSkeleton","sourcePath":"components/feedback/SgSkeleton.jsx"},{"name":"SgTag","sourcePath":"components/feedback/SgTag.jsx"},{"name":"SgToast","sourcePath":"components/feedback/SgToast.jsx"},{"name":"SgCheckbox","sourcePath":"components/forms/SgCheckbox.jsx"},{"name":"SgChipGroup","sourcePath":"components/forms/SgChipGroup.jsx"},{"name":"SgField","sourcePath":"components/forms/SgField.jsx"},{"name":"SgInput","sourcePath":"components/forms/SgInput.jsx"},{"name":"SgRadioGroup","sourcePath":"components/forms/SgRadioGroup.jsx"},{"name":"SgSelect","sourcePath":"components/forms/SgSelect.jsx"},{"name":"SgSwitch","sourcePath":"components/forms/SgSwitch.jsx"},{"name":"SgTextarea","sourcePath":"components/forms/SgTextarea.jsx"},{"name":"SgBackLink","sourcePath":"components/navigation/SgBackLink.jsx"},{"name":"SgBreadcrumbs","sourcePath":"components/navigation/SgBreadcrumbs.jsx"},{"name":"SgPagination","sourcePath":"components/navigation/SgPagination.jsx"},{"name":"SgSideList","sourcePath":"components/navigation/SgSideList.jsx"},{"name":"SgSidebar","sourcePath":"components/navigation/SgSidebar.jsx"},{"name":"SgTabs","sourcePath":"components/navigation/SgTabs.jsx"},{"name":"SgTopbar","sourcePath":"components/navigation/SgTopbar.jsx"},{"name":"SgModal","sourcePath":"components/overlays/SgModal.jsx"}],"sourceHashes":{"components/actions/SgButton.jsx":"55b7ae62c730","components/data/SgAvatar.jsx":"4468f5bace7b","components/data/SgBarChart.jsx":"fed1a1adddbe","components/data/SgCard.jsx":"5554dbcba00d","components/data/SgKpiBar.jsx":"624057476bcb","components/data/SgListRow.jsx":"f6d8d0385c6a","components/data/SgMetricCard.jsx":"3dfac69c41b5","components/data/SgStat.jsx":"d04a43d8eaa9","components/data/SgTable.jsx":"d6a3e59777a8","components/domain/SgPermissionGroup.jsx":"cb62a8c98496","components/feedback/SgAlert.jsx":"385d9602a4d8","components/feedback/SgBadge.jsx":"89cac3832b21","components/feedback/SgEmptyState.jsx":"023c235e58af","components/feedback/SgProgress.jsx":"e3cbebdc4630","components/feedback/SgSkeleton.jsx":"ea5e268b2133","components/feedback/SgTag.jsx":"b53633e5102d","components/feedback/SgToast.jsx":"5f2637314fa7","components/forms/SgCheckbox.jsx":"c451e6d44ae4","components/forms/SgChipGroup.jsx":"820e5b57c78b","components/forms/SgField.jsx":"4b3416b7f0bd","components/forms/SgInput.jsx":"20007e9a0a5e","components/forms/SgRadioGroup.jsx":"09ea7076b5af","components/forms/SgSelect.jsx":"1af751559d32","components/forms/SgSwitch.jsx":"8372ba906c3f","components/forms/SgTextarea.jsx":"1e37c8cd8f7d","components/navigation/SgBackLink.jsx":"ca101052d4a3","components/navigation/SgBreadcrumbs.jsx":"9c6484d52181","components/navigation/SgPagination.jsx":"19dd78a0fd8b","components/navigation/SgSideList.jsx":"9c0cce631101","components/navigation/SgSidebar.jsx":"77a0e0996e76","components/navigation/SgTabs.jsx":"a6df3339fe14","components/navigation/SgTopbar.jsx":"239cf39aded4","components/overlays/SgModal.jsx":"48b6b8d7d6cc","reference/platform-i18n.js":"2795420d4ade","ui_kits/admin-dashboard/AdminScreens.jsx":"8b1584516294","ui_kits/admin-dashboard/App.jsx":"39ec738c37bb","ui_kits/admin-dashboard/Common.jsx":"b5c4be793e3b","ui_kits/admin-dashboard/CourseScreen.jsx":"81b9bbf827c3","ui_kits/admin-dashboard/DashboardScreen.jsx":"292719928a18","ui_kits/admin-dashboard/Flows.jsx":"410a1a237f9b","ui_kits/admin-dashboard/GroupsScreen.jsx":"e041c9cfecfe","ui_kits/admin-dashboard/InsightsScreens.jsx":"3fc3043e14c8","ui_kits/admin-dashboard/Patterns.jsx":"4c82c10afc7f","ui_kits/admin-dashboard/RolesScreen.jsx":"252f8f3d4a14","ui_kits/admin-dashboard/StudentsScreen.jsx":"0e17f536faee","ui_kits/admin-dashboard/data.js":"7f7626406443","ui_kits/admin-dashboard/i18n.js":"105279764353","ui_kits/web-platform/animations-v3.jsx":"06ae64d470d6","ui_kits/web-platform/i18n.js":"5a9dd13aa82c","ui_kits/web-platform/onboarding-video.jsx":"ab920d66decb","ui_kits/web-platform/sg-helpers.js":"80f5632df014","ui_kits/web-platform/tweaks-panel.jsx":"d259e3a86f73"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SpeakingGenieDesignSystem_9bb41a = window.SpeakingGenieDesignSystem_9bb41a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/SgButton.jsx
try { (() => {
const SIZES = {
  lg: {
    height: 40,
    radius: 10,
    font: 14,
    pad: 18,
    padQuiet: 16,
    padTertiary: 14
  },
  md: {
    height: 36,
    radius: 9,
    font: 13,
    pad: 16,
    padQuiet: 14,
    padTertiary: 12
  },
  sm: {
    height: 32,
    radius: 8,
    font: 12,
    pad: 12,
    padQuiet: 12,
    padTertiary: 10
  }
};
const VARIANTS = {
  primary: {
    bg: "var(--sg-primary)",
    fg: "#FFFFFF",
    border: "0",
    hoverBg: "var(--sg-primary-hover)"
  },
  secondary: {
    bg: "var(--sg-surface)",
    fg: "var(--sg-ink)",
    border: "1px solid var(--sg-border-strong)",
    hoverBg: "var(--sg-surface-subtle)",
    hoverBorder: "var(--sg-border-hover)"
  },
  tertiary: {
    bg: "transparent",
    fg: "var(--sg-ink-2)",
    border: "0",
    hoverBg: "var(--sg-surface-muted)",
    hoverFg: "var(--sg-ink)"
  },
  soft: {
    bg: "var(--sg-primary-soft)",
    fg: "var(--sg-primary-ink)",
    border: "1px solid var(--sg-primary-border)",
    hoverBg: "var(--sg-primary-soft-2)"
  },
  danger: {
    bg: "var(--sg-surface)",
    fg: "var(--sg-danger)",
    border: "1px solid var(--sg-red-border-btn)",
    hoverBg: "var(--sg-danger-bg)"
  },
  destructive: {
    bg: "var(--sg-danger)",
    fg: "#FFFFFF",
    border: "0",
    hoverBg: "var(--sg-danger-ink)"
  },
  warning: {
    bg: "var(--sg-surface)",
    fg: "var(--sg-warning-ink)",
    border: "1px solid var(--sg-amber-border-strong)",
    hoverBg: "var(--sg-warning-bg)"
  }
};
function SgButton({
  variant = "primary",
  size = "lg",
  icon,
  iconOnly = false,
  fullWidth = false,
  disabled = false,
  loading = false,
  type = "button",
  onClick,
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.lg;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const off = disabled || loading;
  const pad = variant === "primary" || variant === "destructive" ? s.pad : variant === "tertiary" ? s.padTertiary : s.padQuiet;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    height: s.height,
    width: iconOnly ? s.height : fullWidth ? "100%" : undefined,
    padding: iconOnly ? 0 : "0 " + pad + "px",
    borderRadius: s.radius,
    fontFamily: "inherit",
    fontSize: iconOnly ? 15 : s.font,
    fontWeight: 600,
    lineHeight: 1,
    cursor: off ? "default" : "pointer",
    whiteSpace: "nowrap",
    flexShrink: 0,
    background: v.bg,
    color: iconOnly && variant === "secondary" ? "var(--sg-ink-2)" : v.fg,
    border: v.border
  };
  if (hover && !off) {
    base.background = v.hoverBg;
    if (v.hoverBorder) base.borderColor = v.hoverBorder;
    if (v.hoverFg) base.color = v.hoverFg;
  }
  if (disabled) {
    base.background = "var(--sg-surface-disabled)";
    base.color = "var(--sg-ink-disabled)";
    base.border = "0";
  }
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: off,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      opacity: loading ? 0.7 : 1,
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      lineHeight: 1,
      display: "inline-flex"
    }
  }, icon) : null, loading ? "Working…" : children);
}
Object.assign(__ds_scope, { SgButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/SgButton.jsx", error: String((e && e.message) || e) }); }

// components/data/SgAvatar.jsx
try { (() => {
function SgAvatar({
  initials,
  size = 32,
  variant = "soft",
  style
}) {
  const font = size >= 56 ? Math.round(size * 0.32) : size >= 30 ? 11 : 10;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: size === 32 && variant === "brand" ? 12 : font,
      fontWeight: 700,
      background: variant === "brand" ? "var(--sg-brand-gradient)" : "var(--sg-primary-soft-2)",
      color: variant === "brand" ? "#FFFFFF" : "var(--sg-primary-ink)",
      ...style
    }
  }, initials);
}
Object.assign(__ds_scope, { SgAvatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SgAvatar.jsx", error: String((e && e.message) || e) }); }

// components/data/SgBarChart.jsx
try { (() => {
function SgBarChart({
  data = [],
  series = [{
    label: "Value",
    color: "var(--sg-primary)"
  }],
  height = 160,
  barWidth,
  legend = false,
  style
}) {
  const n = series.length;
  const w = barWidth || (n === 1 ? "60%" : n === 2 ? "44%" : "28%");
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, legend ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      marginBottom: 16,
      justifyContent: "flex-end"
    }
  }, series.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: s.color
    }
  }), s.label))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 14,
      height: height + 30,
      direction: "ltr"
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      gap: 3,
      height
    }
  }, d.values.map((v, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      width: w,
      borderRadius: "5px 5px 0 0",
      background: (series[j] || series[0]).color,
      height: v + "%"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--sg-ink-muted)",
      textAlign: "center"
    }
  }, d.label)))));
}
Object.assign(__ds_scope, { SgBarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SgBarChart.jsx", error: String((e && e.message) || e) }); }

// components/data/SgCard.jsx
try { (() => {
function SgCard({
  title,
  description,
  actions,
  flush = false,
  padding,
  tone = "default",
  children,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const border = tone === "danger" ? "var(--sg-danger-border)" : tone === "warning" ? "var(--sg-warning-border)" : tone === "brand" ? "var(--sg-primary-border)" : onClick && h ? "var(--sg-primary-border-strong)" : "var(--sg-border)";
  const bg = tone === "warning" ? "var(--sg-warning-bg)" : "var(--sg-surface)";
  const titleColor = tone === "danger" || tone === "warning" ? tone === "danger" ? "var(--sg-danger-ink)" : "var(--sg-warning-ink)" : "var(--sg-ink)";
  const descColor = tone === "danger" ? "var(--sg-danger)" : tone === "warning" ? "var(--sg-warning)" : "var(--sg-ink-muted)";
  const head = title || actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16,
      padding: flush ? "18px 20px 14px" : 0,
      borderBottom: flush ? "1px solid var(--sg-divider)" : 0,
      marginBottom: flush ? 0 : description ? 18 : 16
    }
  }, /*#__PURE__*/React.createElement("div", null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: titleColor
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: descColor,
      marginTop: flush ? 3 : 4,
      lineHeight: 1.55
    }
  }, description) : null), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      flexShrink: 0
    }
  }, actions) : null) : null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: bg,
      border: "1px solid " + border,
      borderRadius: 14,
      padding: flush ? 0 : padding != null ? padding : "22px 24px",
      overflow: flush ? "hidden" : "visible",
      cursor: onClick ? "pointer" : "default",
      boxShadow: onClick && h ? "var(--sg-e-brand)" : "none",
      ...style
    }
  }, head, children);
}
Object.assign(__ds_scope, { SgCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SgCard.jsx", error: String((e && e.message) || e) }); }

// components/data/SgKpiBar.jsx
try { (() => {
function SgKpiBar({
  name,
  value,
  pct = 0,
  note,
  tone = "var(--sg-primary)",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 13,
      marginBottom: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sg-ink-muted)",
      fontVariantNumeric: "tabular-nums"
    }
  }, value)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 999,
      background: "var(--sg-track)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: pct + "%",
      background: tone
    }
  })), note ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      marginTop: 6,
      lineHeight: 1.5
    }
  }, note) : null);
}
Object.assign(__ds_scope, { SgKpiBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SgKpiBar.jsx", error: String((e && e.message) || e) }); }

// components/data/SgListRow.jsx
try { (() => {
function SgListRow({
  marker,
  leading,
  title,
  subtitle,
  trailing,
  onClick,
  padding = "14px 20px",
  divider = true,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding,
      borderBottom: divider ? "1px solid var(--sg-divider-row)" : 0,
      background: h ? "var(--sg-surface-hover)" : "transparent",
      cursor: onClick ? "pointer" : "default",
      ...style
    }
  }, marker ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 3,
      height: 36,
      borderRadius: 999,
      background: marker,
      flexShrink: 0
    }
  }) : null, leading, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      marginTop: 3
    }
  }, subtitle) : null), trailing ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      flexShrink: 0
    }
  }, trailing) : null);
}
Object.assign(__ds_scope, { SgListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SgListRow.jsx", error: String((e && e.message) || e) }); }

// components/data/SgMetricCard.jsx
try { (() => {
const NOTE = {
  default: "var(--sg-ink-muted)",
  success: "var(--sg-success)",
  warning: "var(--sg-warning)",
  danger: "var(--sg-danger)"
};
function SgMetricCard({
  label,
  value,
  note,
  noteTone = "default",
  valueColor,
  size = "lg",
  bordered = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--sg-surface)",
      border: "1px solid " + (bordered ? "var(--sg-border)" : "var(--sg-border-soft)"),
      borderRadius: bordered ? 14 : 12,
      padding: "18px 20px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--sg-ink-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: size === "lg" ? 30 : 26,
      fontWeight: 700,
      letterSpacing: "-0.02em",
      marginTop: size === "lg" ? 10 : 8,
      fontVariantNumeric: "tabular-nums",
      color: valueColor || "var(--sg-ink)"
    }
  }, value), note ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: noteTone === "default" ? 400 : 600,
      marginTop: 5,
      color: NOTE[noteTone] || NOTE.default
    }
  }, note) : null);
}
Object.assign(__ds_scope, { SgMetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SgMetricCard.jsx", error: String((e && e.message) || e) }); }

// components/data/SgStat.jsx
try { (() => {
function SgStat({
  label,
  value,
  valueColor,
  size = 18,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: size <= 20 && size > 18 ? 11 : 12,
      fontWeight: size > 18 ? 700 : 600,
      letterSpacing: size > 18 ? "0.06em" : "0.04em",
      textTransform: "uppercase",
      color: "var(--sg-ink-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: size,
      fontWeight: 700,
      marginTop: size > 18 ? 5 : 6,
      fontVariantNumeric: "tabular-nums",
      color: valueColor || "var(--sg-ink)"
    }
  }, value));
}
Object.assign(__ds_scope, { SgStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SgStat.jsx", error: String((e && e.message) || e) }); }

// components/data/SgTable.jsx
try { (() => {
const al = a => a === "right" ? "end" : a === "center" ? "center" : "start";
function Row({
  cols,
  row,
  grid,
  dense,
  last,
  minW,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick ? () => onClick(row) : undefined,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "grid",
      gridTemplateColumns: grid,
      columnGap: 24,
      paddingBlock: dense ? 8 : 12,
      paddingInline: 24,
      minHeight: dense ? 56 : 68,
      minWidth: minW,
      alignItems: "center",
      borderBottom: last ? 0 : "1px solid var(--sg-divider)",
      cursor: onClick ? "pointer" : "default",
      background: h ? "var(--sg-surface-hover)" : "transparent"
    }
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.key,
    style: {
      minWidth: 0,
      textAlign: al(c.align),
      fontSize: 13,
      color: "var(--sg-ink-2)"
    }
  }, c.render ? c.render(row) : row[c.key])));
}
function SgTable({
  columns = [],
  rows = [],
  onRowClick,
  rowHeight = 68,
  minWidth,
  footer,
  empty,
  bordered = true,
  style
}) {
  const grid = columns.map(c => c.width || "1fr").join(" ");
  const dense = rowHeight <= 52;
  const minW = minWidth !== undefined ? minWidth : columns.length >= 6 ? 980 : undefined;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--sg-surface)",
      border: bordered ? "1px solid var(--sg-border)" : 0,
      borderRadius: bordered ? 14 : 0,
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: minW ? "auto" : "visible"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: grid,
      columnGap: 24,
      padding: "14px 24px 12px",
      minWidth: minW,
      background: "transparent",
      borderBottom: "1px solid var(--sg-border)",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "var(--sg-table-head-track, 0.07em)",
      textTransform: "uppercase",
      color: "var(--sg-ink-muted)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.key,
    style: {
      textAlign: al(c.align),
      whiteSpace: "nowrap"
    }
  }, c.label))), rows.length ? rows.map((r, i) => /*#__PURE__*/React.createElement(Row, {
    key: r.id || i,
    cols: columns,
    row: r,
    grid: grid,
    dense: dense,
    last: i === rows.length - 1,
    minW: minW,
    onClick: onRowClick
  })) : empty ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, empty) : null), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--sg-divider)"
    }
  }, typeof footer === "string" ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 24px",
      fontSize: 13,
      color: "var(--sg-ink-muted)"
    }
  }, footer) : footer) : null);
}
Object.assign(__ds_scope, { SgTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SgTable.jsx", error: String((e && e.message) || e) }); }

// components/feedback/SgAlert.jsx
try { (() => {
const TONES = {
  warning: {
    bg: "var(--sg-warning-bg)",
    border: "var(--sg-warning-border)",
    icon: "!",
    iconBg: "var(--sg-warning-icon-bg)",
    iconFg: "var(--sg-warning)",
    title: "var(--sg-warning-ink)",
    body: "var(--sg-warning)"
  },
  danger: {
    bg: "var(--sg-danger-bg)",
    border: "var(--sg-danger-border)",
    icon: "×",
    iconBg: "var(--sg-danger-icon-bg)",
    iconFg: "var(--sg-danger)",
    title: "var(--sg-danger-ink)",
    body: "var(--sg-danger)"
  },
  success: {
    bg: "var(--sg-success-bg)",
    border: "var(--sg-success-border)",
    icon: "✓",
    iconBg: "var(--sg-success-icon-bg)",
    iconFg: "var(--sg-success)",
    title: "var(--sg-success)",
    body: "var(--sg-success)"
  },
  info: {
    bg: "var(--sg-info-bg)",
    border: "var(--sg-info-border)",
    icon: "i",
    iconBg: "var(--sg-info-icon-bg)",
    iconFg: "var(--sg-info)",
    title: "var(--sg-info)",
    body: "var(--sg-info)"
  }
};
function SgAlert({
  tone = "warning",
  title,
  description,
  action,
  layout = "stacked",
  style
}) {
  const t = TONES[tone] || TONES.warning;
  const icon = /*#__PURE__*/React.createElement("div", {
    style: {
      width: layout === "banner" ? 22 : 20,
      height: layout === "banner" ? 22 : 20,
      borderRadius: 999,
      background: t.iconBg,
      color: t.iconFg,
      fontSize: layout === "banner" ? 12 : 11,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, t.icon);
  if (layout === "banner") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: t.bg,
        border: "1px solid " + t.border,
        borderRadius: 12,
        padding: "14px 18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        alignItems: "center"
      }
    }, icon, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: t.title
      }
    }, title ? /*#__PURE__*/React.createElement("strong", null, title, " ") : null, description)), action ? /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0
      }
    }, action) : null);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      background: t.bg,
      border: "1px solid " + t.border,
      borderRadius: 12,
      padding: "14px 16px",
      ...style
    }
  }, icon, /*#__PURE__*/React.createElement("div", null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: t.title
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: t.body,
      marginTop: 2,
      lineHeight: 1.55
    }
  }, description) : null, action && layout !== "banner" ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, action) : null));
}
Object.assign(__ds_scope, { SgAlert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/SgAlert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/SgBadge.jsx
try { (() => {
const TONES = {
  success: ["var(--sg-success)", "var(--sg-success-bg)"],
  warning: ["var(--sg-warning)", "var(--sg-warning-bg)"],
  danger: ["var(--sg-danger)", "var(--sg-danger-bg)"],
  info: ["var(--sg-info)", "var(--sg-info-bg)"],
  neutral: ["var(--sg-neutral)", "var(--sg-neutral-bg)"],
  brand: ["var(--sg-primary)", "var(--sg-primary-soft)"]
};
function SgBadge({
  tone = "neutral",
  dot = false,
  size = "md",
  caps = false,
  children,
  style
}) {
  const [fg, bg] = TONES[tone] || TONES.neutral;
  const sm = size === "sm";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: sm ? 11 : 12,
      fontWeight: sm || caps ? 700 : 600,
      letterSpacing: caps ? "0.04em" : 0,
      textTransform: caps ? "uppercase" : "none",
      borderRadius: 999,
      padding: dot ? "5px 11px" : sm ? "3px 9px" : "4px 10px",
      color: fg,
      background: bg,
      whiteSpace: "nowrap",
      fontVariantNumeric: "tabular-nums",
      ...style
    }
  }, dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: fg
    }
  }) : null, children);
}
Object.assign(__ds_scope, { SgBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/SgBadge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/SgEmptyState.jsx
try { (() => {
function SgEmptyState({
  title,
  description,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px dashed var(--sg-border-strong)",
      borderRadius: 12,
      padding: 28,
      textAlign: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: "var(--sg-primary-soft)",
      margin: "0 auto 14px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700
    }
  }, title), description ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--sg-ink-muted)",
      margin: "6px auto 16px",
      maxWidth: "38ch",
      lineHeight: 1.55
    }
  }, description) : null, action);
}
Object.assign(__ds_scope, { SgEmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/SgEmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/SgProgress.jsx
try { (() => {
const TONES = {
  brand: "var(--sg-primary)",
  success: "var(--sg-success-solid)",
  warning: "var(--sg-warning-solid)",
  danger: "var(--sg-danger-solid)"
};
function SgProgress({
  value = 0,
  tone = "brand",
  height = 6,
  showValue = false,
  valueLabel,
  width,
  style
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height,
      borderRadius: 999,
      background: "var(--sg-track)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + "%",
      height: "100%",
      background: TONES[tone] || tone
    }
  })), showValue ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
      color: "var(--sg-ink)"
    }
  }, valueLabel || Math.round(value * 10) / 10 + "%") : null);
}
Object.assign(__ds_scope, { SgProgress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/SgProgress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/SgSkeleton.jsx
try { (() => {
function SgSkeleton({
  lines = 3,
  widths = ["70%", "90%", "50%"],
  height = 12,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style
    }
  }, Array.from({
    length: lines
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height,
      borderRadius: 6,
      background: "var(--sg-surface-muted)",
      width: widths[i % widths.length]
    }
  })));
}
Object.assign(__ds_scope, { SgSkeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/SgSkeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/SgTag.jsx
try { (() => {
function SgTag({
  variant = "meta",
  onClick,
  children,
  style
}) {
  const v = {
    meta: {
      color: "var(--sg-ink-2)",
      background: "var(--sg-surface-muted)",
      padding: "5px 10px",
      fontWeight: 600
    },
    key: {
      color: "var(--sg-link)",
      background: "var(--sg-primary-soft)",
      border: "1px solid var(--sg-primary-border)",
      padding: "4px 9px",
      fontFamily: "var(--sg-mono)",
      fontWeight: 400,
      direction: "ltr",
      unicodeBidi: "isolate"
    },
    link: {
      color: "var(--sg-primary-ink)",
      background: "var(--sg-primary-soft)",
      border: "1px solid var(--sg-primary-border)",
      padding: "5px 10px",
      fontWeight: 600
    },
    info: {
      color: "var(--sg-info)",
      background: "var(--sg-info-bg)",
      padding: "5px 10px",
      fontWeight: 600
    },
    goal: {
      color: "var(--sg-ink-2)",
      background: "var(--sg-canvas)",
      border: "1px solid var(--sg-border-soft)",
      padding: "7px 11px",
      fontWeight: 400,
      borderRadius: 8
    },
    add: {
      color: "var(--sg-link)",
      border: "1px dashed var(--sg-primary-border-strong)",
      padding: "7px 11px",
      fontWeight: 600,
      borderRadius: 8
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontSize: 12,
      borderRadius: 7,
      cursor: onClick ? "pointer" : "default",
      whiteSpace: variant === "goal" ? "normal" : "nowrap",
      ...v,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { SgTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/SgTag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/SgToast.jsx
try { (() => {
const ICON = {
  success: ["✓", "var(--sg-success-bg)", "var(--sg-success)"],
  warning: ["!", "var(--sg-warning-icon-bg)", "var(--sg-warning)"],
  danger: ["×", "var(--sg-danger-icon-bg)", "var(--sg-danger)"],
  info: ["i", "var(--sg-info-bg)", "var(--sg-info)"]
};
function SgToast({
  tone = "success",
  title,
  description,
  onClose,
  style
}) {
  const [g, bg, fg] = ICON[tone] || ICON.success;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      background: "var(--sg-surface)",
      border: "1px solid var(--sg-border)",
      borderRadius: 12,
      padding: "14px 16px",
      boxShadow: "var(--sg-e-md)",
      minWidth: 280,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 999,
      background: bg,
      color: fg,
      fontSize: 11,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, g), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, title), description ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      marginTop: 2
    }
  }, description) : null), onClose ? /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      fontSize: 14,
      color: "var(--sg-ink-muted)",
      cursor: "pointer",
      lineHeight: 1
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { SgToast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/SgToast.jsx", error: String((e && e.message) || e) }); }

// components/forms/SgCheckbox.jsx
try { (() => {
function SgCheckbox({
  checked = false,
  indeterminate = false,
  label,
  onChange,
  disabled = false
}) {
  const box = checked ? {
    background: "var(--sg-primary)",
    color: "#FFFFFF"
  } : indeterminate ? {
    background: "var(--sg-primary-soft-2)",
    color: "var(--sg-link)"
  } : {
    border: "1.5px solid var(--sg-control-border)"
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      fontSize: 14,
      color: checked ? "var(--sg-ink)" : "var(--sg-ink-2)",
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 5,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: indeterminate && !checked ? 12 : 11,
      flexShrink: 0,
      ...box
    }
  }, checked ? "✓" : indeterminate ? "–" : ""), label);
}
Object.assign(__ds_scope, { SgCheckbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SgCheckbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/SgChipGroup.jsx
try { (() => {
function SgChipGroup({
  label,
  hint,
  options = [],
  value = [],
  onChange
}) {
  const toggle = v => onChange && onChange(value.includes(v) ? value.filter(x => x !== v) : value.concat([v]));
  return /*#__PURE__*/React.createElement("div", null, label ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 9
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    const sel = value.includes(opt.value);
    return /*#__PURE__*/React.createElement("div", {
      key: opt.value,
      onClick: () => toggle(opt.value),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 7,
        fontSize: 12,
        fontWeight: 600,
        borderRadius: 999,
        padding: "6px 12px",
        cursor: "pointer",
        color: sel ? "var(--sg-primary-ink)" : "var(--sg-ink-2)",
        background: sel ? "var(--sg-primary-soft)" : "var(--sg-surface)",
        border: "1px solid " + (sel ? "var(--sg-primary-border-strong)" : "var(--sg-border)")
      }
    }, sel ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10
      }
    }, "\u2713") : null, opt.label);
  })), hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      marginTop: 8,
      lineHeight: 1.5
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { SgChipGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SgChipGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/SgField.jsx
try { (() => {
function SgField({
  label,
  hint,
  error,
  muted = false,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 7,
      color: error ? "var(--sg-danger)" : muted ? "var(--sg-ink-muted)" : "var(--sg-ink)"
    }
  }, label) : null, children, error ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-danger)",
      marginTop: 6
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      marginTop: 6,
      lineHeight: 1.5
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { SgField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SgField.jsx", error: String((e && e.message) || e) }); }

// components/forms/SgInput.jsx
try { (() => {
function SgInput({
  label,
  hint,
  error,
  value,
  defaultValue,
  placeholder,
  onChange,
  prefix,
  kbd,
  size = "lg",
  readOnly = false,
  numeric = false,
  type = "text",
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === "md" ? 38 : 40;
  if (readOnly) {
    return /*#__PURE__*/React.createElement(__ds_scope.SgField, {
      label: label,
      hint: hint,
      muted: true,
      style: style
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: h,
        display: "flex",
        alignItems: "center",
        padding: "0 12px",
        border: "1px solid var(--sg-border-soft)",
        borderRadius: 10,
        background: "var(--sg-canvas)",
        fontSize: 14,
        color: "var(--sg-ink-2)",
        fontVariantNumeric: "tabular-nums"
      }
    }, value));
  }
  const border = error ? "var(--sg-red-border-input)" : focus ? "var(--sg-primary)" : "var(--sg-border-strong)";
  return /*#__PURE__*/React.createElement(__ds_scope.SgField, {
    label: label,
    hint: hint,
    error: error,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: h,
      padding: "0 12px",
      border: "1px solid " + border,
      borderRadius: 10,
      background: "var(--sg-surface)",
      boxShadow: focus && !error ? "var(--sg-focus-input)" : "none"
    }
  }, prefix ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sg-ink-muted)",
      fontSize: 14
    }
  }, prefix) : null, /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: "none",
      background: "transparent",
      fontFamily: "inherit",
      fontSize: 14,
      color: "var(--sg-ink)",
      fontVariantNumeric: numeric ? "tabular-nums" : "normal",
      height: "100%",
      padding: 0
    }
  }), kbd ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--sg-mono)",
      fontSize: 11,
      color: "var(--sg-ink-muted)",
      border: "1px solid var(--sg-border)",
      borderRadius: 6,
      padding: "2px 6px"
    }
  }, kbd) : null));
}
Object.assign(__ds_scope, { SgInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SgInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/SgRadioGroup.jsx
try { (() => {
function SgRadioGroup({
  label,
  hint,
  options = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", null, label ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 9
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, options.map(o => {
    const sel = o.value === value;
    return /*#__PURE__*/React.createElement("div", {
      key: o.value,
      onClick: () => onChange && onChange(o.value),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 14px",
        border: "1px solid " + (sel ? "var(--sg-primary)" : "var(--sg-border)"),
        borderRadius: 11,
        background: sel ? "var(--sg-purple-75)" : "var(--sg-surface)",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        borderRadius: 999,
        flexShrink: 0,
        background: "var(--sg-surface)",
        border: sel ? "5px solid var(--sg-primary)" : "1.5px solid var(--sg-control-border)",
        boxSizing: "border-box"
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600
      }
    }, o.label), o.note ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: sel ? "var(--sg-purple-muted)" : "var(--sg-ink-muted)",
        marginTop: 2
      }
    }, o.note) : null));
  })), hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      marginTop: 8,
      lineHeight: 1.5
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { SgRadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SgRadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/SgSelect.jsx
try { (() => {
function SgSelect({
  label,
  hint,
  value,
  options = [],
  onChange,
  placeholder = "Select…",
  variant = "field",
  active = false,
  height,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const opts = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  const current = opts.find(o => o.value === value);
  const text = current ? current.label : value || placeholder;
  const isFilter = variant === "filter";
  const trigger = isFilter ? {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    height: height || 40,
    padding: "0 14px",
    borderRadius: isFilter && active ? 9 : 10,
    border: "1px solid " + (active ? "var(--sg-primary-border-strong)" : hover ? "var(--sg-border-hover)" : "var(--sg-border-strong)"),
    background: active ? "var(--sg-primary-soft)" : "var(--sg-surface)",
    fontSize: 13,
    fontWeight: 600,
    color: active ? "var(--sg-primary-ink)" : "var(--sg-ink-2)",
    cursor: "pointer",
    whiteSpace: "nowrap"
  } : {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    height: height || 40,
    padding: "0 12px",
    borderRadius: 10,
    border: "1px solid " + (open ? "var(--sg-primary)" : hover ? "var(--sg-border-hover)" : "var(--sg-border-strong)"),
    boxShadow: open ? "var(--sg-focus-input)" : "none",
    background: "var(--sg-surface)",
    fontSize: 14,
    color: current || value ? "var(--sg-ink)" : "var(--sg-ink-muted)",
    cursor: "pointer"
  };
  const control = /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: isFilter ? "inline-block" : "block"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(!open),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: trigger
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, text), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: active ? "inherit" : "var(--sg-ink-muted)",
      flexShrink: 0
    }
  }, "\u25BE")), open && opts.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 6px)",
      insetInlineStart: 0,
      minWidth: "100%",
      zIndex: 20,
      background: "var(--sg-surface)",
      border: "1px solid var(--sg-border)",
      borderRadius: 12,
      boxShadow: "var(--sg-e-md)",
      padding: 6
    }
  }, opts.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.value,
    onClick: () => {
      setOpen(false);
      onChange && onChange(o.value);
    },
    style: {
      padding: "8px 10px",
      borderRadius: 8,
      fontSize: 13,
      fontWeight: o.value === value ? 700 : 500,
      color: o.value === value ? "var(--sg-primary-ink)" : "var(--sg-ink-2)",
      background: o.value === value ? "var(--sg-primary-soft)" : "transparent",
      cursor: "pointer",
      whiteSpace: "nowrap"
    }
  }, o.label))) : null);
  if (isFilter) return /*#__PURE__*/React.createElement("div", {
    style: style
  }, control);
  return /*#__PURE__*/React.createElement(__ds_scope.SgField, {
    label: label,
    hint: hint,
    style: style
  }, control);
}
Object.assign(__ds_scope, { SgSelect });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SgSelect.jsx", error: String((e && e.message) || e) }); }

// components/forms/SgSwitch.jsx
try { (() => {
function SgSwitch({
  on = false,
  onChange,
  label,
  note,
  trailing,
  boxed = false,
  disabled = false,
  style
}) {
  const track = /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 22,
      borderRadius: 999,
      background: on ? "var(--sg-primary)" : "var(--sg-control-off)",
      padding: 3,
      display: "flex",
      justifyContent: on ? "flex-end" : "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 999,
      background: "#FFFFFF"
    }
  }));
  if (!label) return /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!on),
    style: {
      cursor: "pointer",
      display: "inline-flex",
      ...style
    }
  }, track);
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => !disabled && onChange && onChange(!on),
    style: {
      display: "flex",
      alignItems: boxed ? "flex-start" : "center",
      gap: boxed ? 13 : 14,
      padding: boxed ? "12px 14px" : "11px 0",
      minHeight: 44,
      border: boxed ? "1px solid var(--sg-border-soft)" : 0,
      borderRadius: boxed ? 11 : 0,
      background: boxed ? "var(--sg-surface-subtle)" : "transparent",
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, track, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--sg-ink)"
    }
  }, label), note ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      marginTop: boxed ? 3 : 2,
      lineHeight: 1.5
    }
  }, note) : null), trailing ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      flexShrink: 0
    }
  }, trailing) : null);
}
Object.assign(__ds_scope, { SgSwitch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SgSwitch.jsx", error: String((e && e.message) || e) }); }

// components/domain/SgPermissionGroup.jsx
try { (() => {
function SgPermissionGroup({
  title,
  hint,
  permissions = [],
  onToggle,
  onToggleAll,
  readonly = false
}) {
  const on = permissions.filter(p => p.on).length;
  const all = on === permissions.length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--sg-divider)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      padding: "16px 24px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, title), hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      marginTop: 3
    }
  }, hint) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--sg-ink-muted)",
      fontVariantNumeric: "tabular-nums"
    }
  }, on, "/", permissions.length), !readonly ? /*#__PURE__*/React.createElement("div", {
    onClick: onToggleAll,
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--sg-link)",
      cursor: "pointer"
    }
  }, all ? "Revoke all" : "Grant all") : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "0 24px",
      padding: "0 24px 16px"
    }
  }, permissions.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.key,
    onClick: () => !readonly && onToggle && onToggle(p.key),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "9px 0",
      minHeight: 44,
      cursor: readonly ? "default" : "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SgSwitch, {
    on: p.on
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, p.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--sg-mono)",
      fontSize: 11,
      color: "var(--sg-ink-muted)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, p.key))))));
}
Object.assign(__ds_scope, { SgPermissionGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/domain/SgPermissionGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/SgTextarea.jsx
try { (() => {
function SgTextarea({
  label,
  hint,
  error,
  value,
  defaultValue,
  placeholder,
  rows = 3,
  onChange,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement(__ds_scope.SgField, {
    label: label,
    hint: hint,
    error: error,
    style: style
  }, /*#__PURE__*/React.createElement("textarea", {
    rows: rows,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      padding: "11px 12px",
      border: "1px solid " + (error ? "var(--sg-red-border-input)" : focus ? "var(--sg-primary)" : "var(--sg-border-strong)"),
      borderRadius: 10,
      fontFamily: "inherit",
      fontSize: 14,
      lineHeight: 1.55,
      color: "var(--sg-ink)",
      resize: "vertical",
      outline: "none",
      boxShadow: focus ? "var(--sg-focus-input)" : "none",
      background: "var(--sg-surface)"
    }
  }));
}
Object.assign(__ds_scope, { SgTextarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SgTextarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SgBackLink.jsx
try { (() => {
function SgBackLink({
  children,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      fontSize: 13,
      fontWeight: 600,
      color: h ? "var(--sg-ink)" : "var(--sg-ink-muted)",
      marginBottom: 18,
      cursor: "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      transform: "scaleX(var(--sg-flip, 1))"
    }
  }, "\u2190"), " ", children);
}
Object.assign(__ds_scope, { SgBackLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SgBackLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SgBreadcrumbs.jsx
try { (() => {
function SgBreadcrumbs({
  items = [],
  size = 13,
  onNavigate,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: size,
      color: "var(--sg-ink-muted)",
      ...style
    }
  }, items.filter(Boolean).map((it, i, arr) => {
    const last = i === arr.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, i > 0 ? /*#__PURE__*/React.createElement("span", null, "/") : null, /*#__PURE__*/React.createElement("span", {
      onClick: !last && onNavigate ? () => onNavigate(i) : undefined,
      style: {
        color: last ? size < 13 ? "var(--sg-ink-2)" : "var(--sg-ink)" : undefined,
        fontWeight: last ? 600 : 400,
        cursor: !last && onNavigate ? "pointer" : "default"
      }
    }, it));
  }));
}
Object.assign(__ds_scope, { SgBreadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SgBreadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SgPagination.jsx
try { (() => {
function SgPagination({
  page = 1,
  pageCount = 3,
  onChange,
  summary,
  style
}) {
  const cell = (content, opts = {}) => /*#__PURE__*/React.createElement("div", {
    key: opts.key,
    onClick: opts.onClick,
    style: {
      minWidth: 32,
      height: 32,
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 13,
      cursor: opts.onClick ? "pointer" : "default",
      background: opts.active ? "var(--sg-primary)" : "transparent",
      color: opts.active ? "#FFFFFF" : opts.muted ? "var(--sg-ink-muted)" : "var(--sg-ink)",
      fontWeight: opts.active ? 600 : 400,
      border: opts.active ? 0 : "1px solid var(--sg-border)"
    }
  }, content);
  const pages = Array.from({
    length: Math.min(pageCount, 5)
  }, (_, i) => i + 1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 20px",
      fontSize: 13,
      color: "var(--sg-ink-muted)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, cell(/*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      transform: "scaleX(var(--sg-flip, 1))"
    }
  }, "\u2039"), {
    key: "p",
    muted: page === 1,
    onClick: page > 1 && onChange ? () => onChange(page - 1) : undefined
  }), pages.map(p => cell(p, {
    key: p,
    active: p === page,
    onClick: onChange ? () => onChange(p) : undefined
  })), cell(/*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      transform: "scaleX(var(--sg-flip, 1))"
    }
  }, "\u203A"), {
    key: "n",
    muted: page === pageCount,
    onClick: page < pageCount && onChange ? () => onChange(page + 1) : undefined
  })));
}
Object.assign(__ds_scope, { SgPagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SgPagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SgSideList.jsx
try { (() => {
function Item({
  it,
  active,
  variant,
  onClick
}) {
  const [h, setH] = React.useState(false);
  if (variant === "tab") {
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        fontSize: 13,
        fontWeight: active ? 700 : 500,
        color: active ? "var(--sg-primary-ink)" : "var(--sg-ink-2)",
        background: active ? "var(--sg-primary-soft)" : h ? "var(--sg-surface-subtle)" : "transparent",
        borderRadius: 9,
        padding: "10px 12px",
        marginBottom: 2,
        cursor: "pointer"
      }
    }, it.label);
  }
  if (variant === "outline") {
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "11px 12px",
        borderRadius: 10,
        background: active ? "var(--sg-primary-soft)" : h ? "var(--sg-surface-subtle)" : "transparent",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 22,
        height: 22,
        borderRadius: 7,
        background: active ? "var(--sg-primary)" : "var(--sg-surface-muted)",
        color: active ? "#FFFFFF" : "var(--sg-ink-muted)",
        fontSize: 11,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, it.code), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: active ? 700 : 600,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, it.label), it.meta ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: active ? "var(--sg-purple-muted)" : "var(--sg-ink-muted)",
        marginTop: 2
      }
    }, it.meta) : null));
  }
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      borderRadius: 11,
      padding: "13px 14px",
      marginBottom: 4,
      cursor: "pointer",
      background: active ? "var(--sg-primary-soft)" : h ? "var(--sg-surface-subtle)" : "transparent",
      border: "1px solid " + (active ? "var(--sg-primary-border)" : "transparent")
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: active ? 700 : 600
    }
  }, it.label), it.badge ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: active ? "var(--sg-primary-ink)" : "var(--sg-ink-muted)",
      background: active ? "var(--sg-primary-soft-2)" : "var(--sg-surface-muted)",
      borderRadius: 999,
      padding: "3px 8px"
    }
  }, it.badge) : null), it.meta ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: active ? "var(--sg-ink-muted)" : "var(--sg-ink-muted)",
      marginTop: 5
    }
  }, it.meta) : null);
}
function SgSideList({
  items = [],
  value,
  onChange,
  variant = "card",
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--sg-surface)",
      border: "1px solid var(--sg-border)",
      borderRadius: 14,
      padding: variant === "outline" ? 8 : 10,
      ...style
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id
  }, /*#__PURE__*/React.createElement(Item, {
    it: it,
    variant: variant,
    active: it.id === value,
    onClick: () => onChange && onChange(it.id)
  }), it.id === value && it.children ? it.children : null)), children);
}
Object.assign(__ds_scope, { SgSideList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SgSideList.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SgSidebar.jsx
try { (() => {
function NavItem({
  label,
  active,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      height: 40,
      padding: "0 11px",
      borderRadius: 10,
      cursor: "pointer",
      fontSize: 14,
      fontWeight: active ? 700 : 500,
      color: active ? "var(--sg-primary-ink)" : h ? "var(--sg-ink)" : "var(--sg-nav-ink)",
      background: active ? "var(--sg-nav-active)" : h ? "var(--sg-nav-hover)" : "transparent"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: active ? "var(--sg-primary)" : "var(--sg-nav-dot)",
      flexShrink: 0
    }
  }), label);
}
const CAPS = {
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase"
};
function GroupTitle({
  children,
  variant,
  first
}) {
  const pad = {
    padding: "0 10px 8px"
  };
  switch (variant) {
    case "caps":
      return /*#__PURE__*/React.createElement("div", {
        style: {
          ...CAPS,
          ...pad,
          color: "var(--sg-nav-title-muted)"
        }
      }, children);
    case "caps-rule":
      return /*#__PURE__*/React.createElement("div", {
        style: {
          ...CAPS,
          ...pad,
          color: "var(--sg-nav-title-muted)",
          display: "flex",
          alignItems: "center",
          gap: 10
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          flexShrink: 0
        }
      }, children), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          height: 1,
          background: "var(--sg-border)"
        }
      }));
    case "sentence":
      return /*#__PURE__*/React.createElement("div", {
        style: {
          ...pad,
          fontSize: 13,
          fontWeight: 700,
          color: "var(--sg-ink)"
        }
      }, children);
    case "chip":
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: "0 6px 8px"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          ...CAPS,
          display: "inline-block",
          padding: "3px 8px",
          borderRadius: 7,
          background: "var(--sg-nav-hover)",
          color: "var(--sg-nav-title-muted)"
        }
      }, children));
    case "divided":
      return /*#__PURE__*/React.createElement("div", {
        style: {
          ...CAPS,
          ...pad,
          color: "var(--sg-nav-title-muted)",
          ...(first ? null : {
            borderTop: "1px solid var(--sg-divider)",
            paddingTop: 16,
            marginTop: -2
          })
        }
      }, children);
    default:
      return /*#__PURE__*/React.createElement("div", {
        style: {
          ...CAPS,
          ...pad,
          color: "var(--sg-nav-title)"
        }
      }, children);
  }
}
function SgSidebar({
  groups = [],
  active,
  onNavigate,
  onSearch,
  footer,
  brand = true,
  titleStyle = "accent",
  style
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: "var(--sg-sidebar-w)",
      flexShrink: 0,
      background: "var(--sg-surface)",
      borderInlineEnd: "1px solid var(--sg-border)",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      ...style
    }
  }, brand ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "19px 20px 17px",
      borderBottom: "1px solid var(--sg-divider)"
    }
  }, brand === true ? /*#__PURE__*/React.createElement("span", {
    className: "sg-logo",
    role: "img",
    "aria-label": "Speaking Genie",
    style: {
      height: 30
    }
  }) : brand) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 14px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onSearch,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      height: 38,
      padding: "0 11px",
      border: "1px solid var(--sg-border)",
      borderRadius: 10,
      background: "var(--sg-surface-subtle)",
      fontSize: 13,
      color: "var(--sg-ink-muted)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2315"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, "Search\u2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--sg-mono)",
      fontSize: 11,
      border: "1px solid var(--sg-border)",
      borderRadius: 5,
      padding: "1px 5px",
      background: "var(--sg-surface)"
    }
  }, "\u2318K"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "16px 14px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, groups.map((g, gi) => /*#__PURE__*/React.createElement("div", {
    key: g.group
  }, /*#__PURE__*/React.createElement(GroupTitle, {
    variant: titleStyle,
    first: gi === 0
  }, g.group), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, g.items.map(i => /*#__PURE__*/React.createElement(NavItem, {
    key: i.id,
    label: i.label,
    active: i.id === active,
    onClick: () => onNavigate && onNavigate(i.id)
  })))))), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      borderTop: "1px solid var(--sg-divider)"
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { SgSidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SgSidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SgTabs.jsx
try { (() => {
function SgTabs({
  variant = "underline",
  items = [],
  value,
  onChange,
  fullWidth = false,
  style
}) {
  const list = items.map(i => typeof i === "string" ? {
    value: i,
    label: i
  } : i);
  if (variant === "segment") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: fullWidth ? "flex" : "inline-flex",
        padding: 3,
        background: "var(--sg-surface-muted)",
        borderRadius: fullWidth ? 9 : 10,
        ...style
      }
    }, list.map(t => {
      const a = t.value === value;
      return /*#__PURE__*/React.createElement("div", {
        key: t.value,
        onClick: () => onChange && onChange(t.value),
        style: {
          flex: fullWidth ? 1 : undefined,
          textAlign: "center",
          fontSize: fullWidth ? 12 : 13,
          fontWeight: a && fullWidth ? 700 : 600,
          color: a ? "var(--sg-ink)" : "var(--sg-ink-muted)",
          background: a ? "var(--sg-surface-raised)" : "transparent",
          borderRadius: fullWidth ? 7 : 8,
          padding: fullWidth ? "7px 0" : "7px 14px",
          boxShadow: a ? "var(--sg-e-thumb)" : "none",
          cursor: "pointer",
          whiteSpace: "nowrap"
        }
      }, t.label);
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 26,
      borderBottom: "1px solid var(--sg-border)",
      ...style
    }
  }, list.map(t => {
    const a = t.value === value;
    return /*#__PURE__*/React.createElement("div", {
      key: t.value,
      onClick: () => onChange && onChange(t.value),
      style: {
        fontSize: 14,
        fontWeight: a ? 700 : 600,
        color: a ? "var(--sg-link)" : "var(--sg-ink-muted)",
        padding: "0 2px 13px",
        borderBottom: "2px solid " + (a ? "var(--sg-primary)" : "transparent"),
        marginBottom: -1,
        cursor: "pointer"
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { SgTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SgTabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SgTopbar.jsx
try { (() => {
function SgTopbar({
  crumbs = [],
  language = "EN",
  languages,
  onLanguageChange,
  onLanguageClick,
  actions,
  user,
  onUserClick,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const langs = languages || null;
  const current = langs ? langs.find(l => l.value === language) || langs[0] : null;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: "var(--sg-topbar-h)",
      flexShrink: 0,
      background: "var(--sg-surface)",
      borderBottom: "1px solid var(--sg-border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 32px",
      position: "sticky",
      top: 0,
      zIndex: 4,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SgBreadcrumbs, {
    items: crumbs
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, actions) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => langs ? setOpen(!open) : onLanguageClick && onLanguageClick(),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: 13,
      fontWeight: 600,
      color: "var(--sg-ink-2)",
      border: "1px solid var(--sg-border)",
      borderRadius: 9,
      height: 34,
      padding: "0 11px",
      cursor: "pointer",
      background: "var(--sg-surface)"
    }
  }, current ? current.short || current.value.toUpperCase() : language, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: "var(--sg-ink-muted)"
    }
  }, "\u25BE")), open && langs ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 6px)",
      insetInlineEnd: 0,
      minWidth: 160,
      zIndex: 20,
      background: "var(--sg-surface)",
      border: "1px solid var(--sg-border)",
      borderRadius: 12,
      boxShadow: "var(--sg-e-md)",
      padding: 6
    }
  }, langs.map(l => {
    const a = l.value === language;
    return /*#__PURE__*/React.createElement("div", {
      key: l.value,
      lang: l.value,
      dir: l.dir,
      onClick: () => {
        setOpen(false);
        onLanguageChange && onLanguageChange(l.value);
      },
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
        padding: "8px 10px",
        borderRadius: 8,
        fontSize: 13,
        fontWeight: a ? 700 : 500,
        color: a ? "var(--sg-primary-ink)" : "var(--sg-ink-2)",
        background: a ? "var(--sg-primary-soft)" : "transparent",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", null, l.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--sg-mono)",
        fontSize: 11,
        color: "var(--sg-ink-muted)"
      }
    }, l.short || l.value.toUpperCase()));
  })) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 24,
      background: "var(--sg-border-soft)"
    }
  }), user ? /*#__PURE__*/React.createElement("div", {
    onClick: onUserClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 999,
      background: "var(--sg-brand-gradient)",
      color: "#FFFFFF",
      fontSize: 12,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, user.initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      lineHeight: 1.2
    }
  }, user.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--sg-ink-muted)"
    }
  }, user.role)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: "var(--sg-ink-muted)"
    }
  }, "\u25BE")) : null));
}
Object.assign(__ds_scope, { SgTopbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SgTopbar.jsx", error: String((e && e.message) || e) }); }

// components/overlays/SgModal.jsx
try { (() => {
function SgModal({
  open = true,
  onClose,
  overline,
  title,
  subtitle,
  children,
  footnote,
  dangerLabel,
  onDanger,
  primaryLabel = "Save",
  onPrimary,
  secondaryLabel = "Cancel",
  destructive = false,
  placement = "center",
  width = 560,
  inline = false,
  style
}) {
  if (!open) return null;
  const drawer = placement === "drawer";
  const panel = /*#__PURE__*/React.createElement("div", {
    style: {
      width: typeof width === "number" ? width : width,
      maxWidth: "100%",
      maxHeight: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--sg-surface)",
      borderRadius: drawer ? 16 : 18,
      boxShadow: inline ? "var(--sg-e-lg)" : "var(--sg-e-overlay)",
      overflow: "hidden",
      pointerEvents: "auto",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 26px 18px",
      borderBottom: "1px solid var(--sg-divider)",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", null, overline ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.09em",
      textTransform: "uppercase",
      color: "var(--sg-ink-muted)",
      marginBottom: 7
    }
  }, overline) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: "-0.01em",
      color: destructive ? "var(--sg-danger-ink)" : "var(--sg-ink)"
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--sg-ink-muted)",
      marginTop: 5,
      lineHeight: 1.5
    }
  }, subtitle) : null), onClose ? /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      width: 32,
      height: 32,
      borderRadius: 9,
      border: "1px solid var(--sg-border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 14,
      color: "var(--sg-ink-muted)",
      cursor: "pointer",
      flexShrink: 0
    }
  }, "\xD7") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 26px",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      flex: 1
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      borderTop: "1px solid var(--sg-divider)",
      background: "var(--sg-surface-subtle)",
      padding: "16px 26px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, dangerLabel ? /*#__PURE__*/React.createElement("div", {
    onClick: onDanger,
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--sg-danger)",
      cursor: "pointer"
    }
  }, dangerLabel) : footnote ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      lineHeight: 1.5
    }
  }, footnote) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SgButton, {
    variant: "secondary",
    size: "md",
    onClick: onClose,
    style: {
      height: 38,
      borderRadius: 10,
      padding: "0 15px"
    }
  }, secondaryLabel), /*#__PURE__*/React.createElement(__ds_scope.SgButton, {
    variant: destructive ? "destructive" : "primary",
    size: "md",
    onClick: onPrimary || onClose,
    style: {
      height: 38,
      borderRadius: 10
    }
  }, primaryLabel))));
  if (inline) return panel;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 40,
      background: "var(--sg-scrim)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: drawer ? "stretch" : "center",
      justifyContent: drawer ? "flex-end" : "center",
      padding: "40px 32px",
      pointerEvents: "none"
    }
  }, panel));
}
Object.assign(__ds_scope, { SgModal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/SgModal.jsx", error: String((e && e.message) || e) }); }

// reference/platform-i18n.js
try { (() => {
/* Speaking Genie — prototype Arabic translation layer.
   Translates rendered text nodes + placeholders in place (MutationObserver), so screens stay written in English.
   Production should use real i18n keys; this file doubles as the EN→AR glossary. */
(function () {
  const PAIRS = [
  // platform additions
  ["Performance", "الأداء"], ["Engagement", "التفاعل"], ["Usage & hours", "الاستخدام والساعات"], ["7 days", "7 أيام"], ["30 days", "30 يومًا"], ["This term", "هذا الفصل"], ["Export PDF", "تصدير PDF"], ["Average overall score", "متوسط الدرجة الإجمالية"], ["Task completion rate", "معدل إكمال المهام"], ["Students improving", "طلاب في تحسّن"], ["Students at risk", "طلاب معرّضون للخطر"], ["Score trend by skill", "اتجاه الدرجات حسب المهارة"], ["Skill breakdown", "تفصيل المهارات"], ["Range", "المدى"], ["Accuracy", "الدقة"], ["Fluency", "الطلاقة"], ["Pronunciation", "النطق"], ["Score distribution", "توزيع الدرجات"], ["Level progression", "التقدّم بين المستويات"], ["Ready to move up", "جاهز للانتقال"], ["Still practising", "ما زال يتدرّب"], ["Group comparison", "مقارنة المجموعات"], ["Active", "نشط"], ["Avg score", "متوسط الدرجة"], ["Change", "التغيّر"], ["On track", "على المسار"], ["Watch", "متابعة"], ["Needs support", "يحتاج إلى دعم"], ["Reason", "السبب"], ["Last session", "آخر جلسة"], ["Score", "الدرجة"], ["Remind", "تذكير"], ["Most improved", "الأكثر تحسنًا"], ["AI insights", "رؤى الذكاء الاصطناعي"], ["Weekly active students", "الطلاب النشطون أسبوعيًا"], ["Sessions per student", "الجلسات لكل طالب"], ["Average session length", "متوسط مدة الجلسة"], ["Inactive 7+ days", "غير نشط منذ 7 أيام أو أكثر"], ["When students practise", "متى يتدرّب الطلاب"], ["Task funnel", "مسار المهام"], ["Assigned", "مُسندة"], ["Started", "بدأت"], ["Reviewed by teacher", "راجعها المعلّم"], ["Active students per week", "الطلاب النشطون أسبوعيًا"], ["Time in session", "الوقت داخل الجلسة"], ["Teacher review backlog", "المراجعات المتأخرة للمعلّمين"], ["Waiting", "بانتظار"], ["Oldest", "الأقدم"], ["Avg turnaround", "متوسط وقت الاستجابة"], ["Reviewed this week", "تمت مراجعتها هذا الأسبوع"], ["Speaking hours this month", "ساعات التحدث هذا الشهر"], ["Hours per active student", "الساعات لكل طالب نشط"], ["Over or near their tier", "تجاوزوا فئتهم أو قاربوها"], ["Tier utilisation", "استخدام الفئات"], ["Hours by group", "الساعات حسب المجموعة"], ["Hours used", "الساعات المستخدمة"], ["Per student", "لكل طالب"], ["Over tier", "تجاوز الفئة"], ["Fewer", "أقل"], ["More", "أكثر"], ["Enrolled", "المسجّلون"], ["Student speaking", "تحدّث الطالب"], ["Listening to AI partner", "الاستماع إلى الشريك الذكي"], ["Silence", "الصمت"], ["No speaking data yet", "لا توجد بيانات تحدث بعد"], ["Notifications", "الإشعارات"], ["Achievements", "الإنجازات"], ["AI characters", "شخصيات الذكاء الاصطناعي"], ["Onboarding analytics", "تحليلات التهيئة"], ["Incentive program", "برنامج الحوافز"], ["Help center", "مركز المساعدة"], ["Support", "الدعم"], ["Recharge", "شحن"], ["hours remaining", "ساعة متبقية"], ["View weekly reports", "عرض التقارير الأسبوعية"], ["Add student", "إضافة طالب"], ["Speaking hours this week", "ساعات التحدث هذا الأسبوع"], ["Average fluency score", "متوسط درجة الطلاقة"], ["Active speaking students", "الطلاب النشطون في التحدث"], ["Sessions completed", "الجلسات المكتملة"], ["This week", "هذا الأسبوع"], ["Students needing attention", "طلاب يحتاجون إلى متابعة"], ["Ranked by urgency", "مرتبة حسب الأولوية"], ["Common speaking issues", "مشكلات التحدث الشائعة"], ["Top students", "أفضل الطلاب"], ["Recent activities", "الأنشطة الأخيرة"], ["Latest speaking practice updates", "آخر تحديثات ممارسة التحدث"], ["AI recommendations", "توصيات الذكاء الاصطناعي"], ["Implement", "تطبيق"], ["Hours spoken", "ساعات التحدث"], ["Tier ceiling", "سقف الفئة"], ["Speaking hours per week", "ساعات التحدث أسبوعيًا"], ["Mark all as read", "تحديد الكل كمقروء"], ["All", "الكل"], ["Archived", "مؤرشفة"], ["Settings", "الإعدادات"], ["Today", "اليوم"], ["Yesterday", "أمس"], ["Earlier", "سابقًا"], ["New", "جديد"], ["Save settings", "حفظ الإعدادات"], ["Reset to defaults", "استعادة الافتراضيات"], ["Add course", "إضافة دورة"], ["Search courses", "البحث في الدورات"], ["Course", "الدورة"], ["Language", "اللغة"], ["Target audiences", "الفئات المستهدفة"], ["Levels", "المستويات"], ["Created", "تاريخ الإنشاء"], ["Course details", "تفاصيل الدورة"], ["Create course", "إنشاء دورة"], ["Description", "الوصف"], ["Set up with AI", "الإعداد بالذكاء الاصطناعي"], ["Edit course", "تعديل الدورة"], ["Add level", "إضافة مستوى"], ["Learning goals", "أهداف التعلّم"], ["Content summary", "ملخص المحتوى"], ["Course levels", "مستويات الدورة"], ["Analysis", "التحليل"], ["Total levels", "إجمالي المستويات"], ["Total students", "إجمالي الطلاب"], ["Tasks", "المهام"], ["Avg completion", "متوسط الإكمال"], ["Student distribution", "توزيع الطلاب"], ["Top performers", "الأفضل أداءً"], ["Progress timeline", "الجدول الزمني للتقدّم"], ["Edit level", "تعديل المستوى"], ["Add task", "إضافة مهمة"], ["Add vocabulary", "إضافة مفردات"], ["Add idiom", "إضافة تعبير"], ["Key performance indicators", "مؤشرات الأداء الرئيسية"], ["Learning materials", "مواد التعلّم"], ["Vocabularies", "المفردات"], ["Idioms", "التعابير"], ["Task", "المهمة"], ["Type", "النوع"], ["Duration", "المدة"], ["Priority", "الأولوية"], ["Status", "الحالة"], ["Word", "الكلمة"], ["Category", "الفئة"], ["Present", "المضارع"], ["Past", "الماضي"], ["Past participle", "التصريف الثالث"], ["Present participle", "صيغة -ing"], ["Idiom", "التعبير"], ["Meaning", "المعنى"], ["Example", "مثال"], ["Edit task", "تعديل المهمة"], ["Delete task", "حذف المهمة"], ["Task brief", "موجز المهمة"], ["Recent attempts", "المحاولات الأخيرة"], ["Completion", "الإكمال"], ["Completed", "مكتمل"], ["Time-based", "حسب الوقت"], ["Topic-based", "حسب الموضوع"], ["High", "عالية"], ["Medium", "متوسطة"], ["Low", "منخفضة"], ["Create character", "إنشاء شخصية"], ["Search characters", "البحث في الشخصيات"], ["Background", "الخلفية"], ["Interests", "الاهتمامات"], ["Conversation topics", "مواضيع المحادثة"], ["Used in", "مستخدمة في"], ["Edit character", "تعديل الشخصية"], ["Delete", "حذف"], ["Character information", "معلومات الشخصية"], ["Name", "الاسم"], ["Invitations", "الدعوات"], ["Import students", "استيراد الطلاب"], ["Student", "الطالب"], ["Course & level", "الدورة والمستوى"], ["Tier", "الفئة"], ["Hours this month", "ساعات هذا الشهر"], ["Enrolled", "تاريخ التسجيل"], ["Over limit", "تجاوز الحد"], ["Blocked", "محظور"], ["All students", "كل الطلاب"], ["Edit", "تعديل"], ["Send reminder", "إرسال تذكير"], ["Request report", "طلب تقرير"], ["Student reports", "تقارير الطالب"], ["Recent activity", "النشاط الأخير"], ["Learning progress", "تقدّم التعلّم"], ["Performance statistics", "إحصاءات الأداء"], ["Student information", "معلومات الطالب"], ["Full name", "الاسم الكامل"], ["Email", "البريد الإلكتروني"], ["Level", "المستوى"], ["Phone number", "رقم الهاتف"], ["Address", "العنوان"], ["Consumption tier", "فئة الاستهلاك"], ["Student invitations", "دعوات الطلاب"], ["Create invitation", "إنشاء دعوة"], ["Active invitations", "الدعوات النشطة"], ["Total registrations", "إجمالي التسجيلات"], ["Expiring soon", "تنتهي قريبًا"], ["Total invitations", "إجمالي الدعوات"], ["Target", "الهدف"], ["Uses", "الاستخدامات"], ["Expires", "تنتهي في"], ["Copy link", "نسخ الرابط"], ["Disable", "تعطيل"], ["Enable", "تفعيل"], ["Expired", "منتهية"], ["Disabled", "معطّلة"], ["Max reached", "بلغت الحد"], ["Create group", "إنشاء مجموعة"], ["Group", "المجموعة"], ["Period", "الفترة"], ["All groups", "كل المجموعات"], ["Edit group", "تعديل المجموعة"], ["Invite students", "دعوة الطلاب"], ["Content & pacing", "المحتوى والإيقاع"], ["Analytics", "التحليلات"], ["Pacing plan", "خطة الإيقاع"], ["Upcoming", "قادمة"], ["Ended", "منتهية"], ["Invite user", "دعوة مستخدم"], ["User", "المستخدم"], ["Role", "الدور"], ["Specialty", "التخصص"], ["Last active", "آخر نشاط"], ["All users", "كل المستخدمين"], ["Delete user", "حذف المستخدم"], ["Groups taught", "المجموعات التي يدرّسها"], ["Roles", "الأدوار"], ["Permission matrix", "مصفوفة الصلاحيات"], ["Create role", "إنشاء دور"], ["Publish changes", "نشر التغييرات"], ["Grant all", "منح الكل"], ["System", "نظام"], ["Custom", "مخصص"], ["Module", "الوحدة"], ["Permission", "الصلاحية"], ["Pending", "قيد الانتظار"], ["Active schedules", "الجداول النشطة"], ["Processing", "قيد المعالجة"], ["Completed this week", "المكتملة هذا الأسبوع"], ["Individual reports", "التقارير الفردية"], ["Group analysis", "تحليل المجموعة"], ["Schedules only", "الجداول فقط"], ["Requests only", "الطلبات فقط"], ["Date range", "النطاق الزمني"], ["Schedule", "الجدول"], ["Created by", "أنشأه"], ["View", "عرض"], ["Download", "تنزيل"], ["Generated", "تم الإنشاء"], ["Failed", "فشل"], ["Paused", "متوقف"], ["Resume", "استئناف"], ["Retry", "إعادة المحاولة"], ["Weekly practice report", "تقرير الممارسة الأسبوعي"], ["All reports", "كل التقارير"], ["Open student", "فتح الطالب"], ["Download PDF", "تنزيل PDF"], ["Total practice", "إجمالي الممارسة"], ["Speaking time", "وقت التحدث"], ["Listening time", "وقت الاستماع"], ["Silence time", "وقت الصمت"], ["Fluency score", "درجة الطلاقة"], ["Teacher focus areas", "مجالات تركيز المعلّم"], ["Strengths", "نقاط القوة"], ["Areas for improvement", "مجالات التحسين"], ["Topics discussed", "المواضيع التي نوقشت"], ["Grammar analysis", "تحليل القواعد"], ["Pronunciation analysis", "تحليل النطق"], ["Vocabulary analysis", "تحليل المفردات"], ["Wallet balance", "رصيد المحفظة"], ["Hours used this month", "الساعات المستخدمة هذا الشهر"], ["Over their tier", "تجاوزوا فئتهم"], ["Avg per student", "المتوسط لكل طالب"], ["Consumption tiers", "فئات الاستهلاك"], ["Highest usage", "الاستخدام الأعلى"], ["Export CSV", "تصدير CSV"], ["Billing & subscription", "الفوترة والاشتراك"], ["View all plans", "عرض كل الخطط"], ["Hide plans", "إخفاء الخطط"], ["Recharge hours", "شحن الساعات"], ["Current plan", "الخطة الحالية"], ["Plan", "الخطة"], ["Rate per hour", "السعر لكل ساعة"], ["Max students", "الحد الأقصى للطلاب"], ["Started", "بدأت في"], ["Hour wallet", "محفظة الساعات"], ["Avg daily usage", "متوسط الاستخدام اليومي"], ["Est. days left", "الأيام المتبقية تقديريًا"], ["Total usage", "إجمالي الاستخدام"], ["Usage trends", "اتجاهات الاستخدام"], ["Top consumers this month", "الأكثر استهلاكًا هذا الشهر"], ["Transaction history", "سجل المعاملات"], ["Subscriptions", "الاشتراكات"], ["Paid", "مدفوع"], ["Select plan", "اختيار الخطة"], ["Most popular", "الأكثر شيوعًا"], ["Request payout", "طلب صرف"], ["Incentive wallet", "محفظة الحوافز"], ["Your referral link", "رابط الإحالة الخاص بك"], ["Copy", "نسخ"], ["Clicks", "النقرات"], ["Sign-ups", "التسجيلات"], ["Total referrals", "إجمالي الإحالات"], ["Active subscriptions", "الاشتراكات النشطة"], ["Conversion rate", "معدل التحويل"], ["Monthly growth", "النمو الشهري"], ["Monthly earnings", "الأرباح الشهرية"], ["Payout history", "سجل الصرف"], ["Joined", "تاريخ الانضمام"], ["Earnings", "الأرباح"], ["Total earned", "إجمالي الأرباح"], ["Total withdrawn", "إجمالي المسحوب"], ["Personal information", "المعلومات الشخصية"], ["Password", "كلمة المرور"], ["Preferences", "التفضيلات"], ["Active sessions", "الجلسات النشطة"], ["Leave workspace", "مغادرة مساحة العمل"], ["Leave", "مغادرة"], ["Organisation", "المؤسسة"], ["Company name", "اسم الشركة"], ["Phone", "الهاتف"], ["Proficiency levels", "مستويات الكفاءة"], ["Browse by category", "التصفح حسب الفئة"], ["Popular articles", "المقالات الشائعة"], ["Frequently asked questions", "الأسئلة الشائعة"], ["Need more help?", "تحتاج إلى مساعدة إضافية؟"], ["Contact support", "التواصل مع الدعم"], ["Search", "بحث"], ["Send us a message", "أرسل لنا رسالة"], ["Send message", "إرسال الرسالة"], ["Department", "القسم"], ["Subject", "الموضوع"], ["Message", "الرسالة"], ["Other ways to reach us", "طرق أخرى للتواصل"], ["Response time", "وقت الاستجابة"], ["Related articles", "مقالات ذات صلة"], ["Was this article helpful?", "هل كانت هذه المقالة مفيدة؟"], ["Yes", "نعم"], ["No", "لا"], ["Share", "مشاركة"], ["Sign in to your account", "تسجيل الدخول إلى حسابك"], ["Sign in", "تسجيل الدخول"], ["Remember me", "تذكّرني"], ["Forgot password?", "نسيت كلمة المرور؟"], ["Create an account", "إنشاء حساب"], ["Create your account", "أنشئ حسابك"], ["Create account", "إنشاء الحساب"], ["Forgot password", "نسيت كلمة المرور"], ["Send reset link", "إرسال رابط إعادة التعيين"], ["Reset password", "إعادة تعيين كلمة المرور"], ["Join as a student", "الانضمام كطالب"], ["Register now", "سجّل الآن"], ["Join group", "الانضمام إلى المجموعة"], ["Page not found", "الصفحة غير موجودة"], ["Return to home", "العودة إلى الرئيسية"],
  // shell
  ["Search…", "بحث…"], ["Overview", "نظرة عامة"], ["Teaching", "التدريس"], ["Insights", "الرؤى"], ["Administration", "الإدارة"], ["Account", "الحساب"], ["Dashboard", "لوحة التحكم"], ["Courses", "الدورات"], ["Groups", "المجموعات"], ["Students", "الطلاب"], ["Reports", "التقارير"], ["Consumption", "الاستهلاك"], ["Users", "المستخدمون"], ["Roles & permissions", "الأدوار والصلاحيات"], ["Billing", "الفوترة"], ["Company profile", "ملف الشركة"], ["My groups", "مجموعاتي"], ["Course content", "محتوى الدورة"], ["VIEWING AS", "العرض بصفة"], ["Admin", "مسؤول"], ["Teacher", "معلّم"], ["Admin User", "مستخدم مسؤول"], ["Cairo Language Center", "مركز القاهرة للغات"], ["General English", "الإنجليزية العامة"], ["Business English", "الإنجليزية للأعمال"], ["My profile", "ملفي الشخصي"], ["Student progress", "تقدّم الطلاب"], ["English", "الإنجليزية"], ["Workspace", "مساحة العمل"], ["all students", "كل الطلاب"],
  // common
  ["Cancel", "إلغاء"], ["Save changes", "حفظ التغييرات"], ["Active", "نشط"], ["Invited", "مدعو"], ["Draft", "مسودة"], ["Starting", "قيد البدء"], ["Ready", "جاهز"], ["Processing", "قيد المعالجة"], ["Failed", "فشل"], ["Paid", "مدفوعة"], ["Empty", "فارغة"], ["Review", "مراجعة"], ["Over limit", "تجاوز الحد"], ["Inactive", "غير نشط"], ["Complete", "مكتمل"], ["Behind", "متأخر"], ["Current", "الحالي"], ["Scheduled", "مجدول"], ["In progress", "قيد التنفيذ"], ["System", "نظامي"], ["Custom", "مخصّص"], ["Yesterday", "أمس"], ["Today", "اليوم"], ["Never", "أبدًا"], ["Last 30 days", "آخر 30 يومًا"], ["Export CSV", "تصدير CSV"], ["Import CSV", "استيراد CSV"], ["Student", "الطالب"], ["Course", "الدورة"], ["Level", "المستوى"], ["Tier", "الفئة"], ["Progress", "التقدّم"], ["Status", "الحالة"], ["Course & level", "الدورة والمستوى"], ["Group", "المجموعة"], ["Schedule", "الجدول"], ["Hours", "الساعات"], ["Last session", "آخر جلسة"], ["Flag", "تنبيه"], ["User", "المستخدم"], ["Role", "الدور"], ["Last active", "آخر نشاط"], ["Type", "النوع"], ["Target", "الهدف"], ["Range", "النطاق"], ["Accuracy", "الدقة"], ["Fluency", "الطلاقة"], ["Requested by", "مقدّم الطلب"], ["Date", "التاريخ"], ["Description", "الوصف"], ["Amount", "المبلغ"], ["Tasks", "المهام"], ["Trend", "الاتجاه"], ["Used", "المستخدم"], ["Avg score", "متوسط الدرجة"], ["of", "من"], ["Unassigned", "غير معيّن"], ["Not scheduled", "غير مجدول"], ["Daily", "يوميًا"], ["Enterprise", "المؤسسات"], ["Unlimited", "غير محدود"], ["Role: All", "الدور: الكل"], ["Status: Active", "الحالة: نشط"], ["Type: All", "النوع: الكل"], ["Status: All", "الحالة: الكل"], ["Columns", "الأعمدة"], ["Load more", "تحميل المزيد"],
  // dashboard
  ["Good morning, Admin", "صباح الخير، مسؤول النظام"], ["Enterprise plan", "خطة المؤسسات"], ["Add student", "إضافة طالب"], ["Hour wallet is empty.", "محفظة الساعات فارغة."], ["Recharge to resume speaking sessions — 3 students are already blocked.", "اشحن المحفظة لاستئناف جلسات المحادثة — تم إيقاف 3 طلاب بالفعل."], ["Recharge hours", "شحن الساعات"], ["Active students", "الطلاب النشطون"], ["Hours delivered", "الساعات المقدَّمة"], ["Avg completion", "متوسط الإكمال"], ["Tasks reviewed", "المهام المراجَعة"], ["24 awaiting a teacher", "24 بانتظار المعلّم"], ["Speaking hours per week", "ساعات المحادثة أسبوعيًا"], ["Delivered across all groups", "عبر جميع المجموعات"], ["Hours used", "الساعات المستخدمة"], ["Tier ceiling", "سقف الفئة"], ["Needs attention", "يحتاج إلى متابعة"], ["Ranked by urgency", "مرتبة حسب الأولوية"], ["Students over their tier", "طلاب تجاوزوا فئتهم"], ["Sessions blocked until recharge", "الجلسات موقوفة حتى الشحن"], ["Sessions awaiting feedback", "جلسات بانتظار الملاحظات"], ["Oldest is 6 days old", "أقدمها منذ 6 أيام"], ["Invites not accepted", "دعوات لم تُقبل"], ["Sent more than 7 days ago", "أُرسلت قبل أكثر من 7 أيام"], ["Levels with no content", "مستويات بلا محتوى"], ["Level B2 has no scenarios", "المستوى B2 بلا سيناريوهات"], ["Recent activity", "النشاط الأخير"], ["You created the Finance role with 4 permissions", "أنشأتَ دور المالية بأربع صلاحيات"],
  // roles
  ["Pick a role, then grant permissions by area. Changes apply to everyone holding the role.", "اختر دورًا ثم امنح الصلاحيات حسب المجال. تُطبَّق التغييرات على كل من يحمل هذا الدور."], ["Audit matrix", "مصفوفة التدقيق"], ["Create role", "إنشاء دور"], ["Center manager", "مدير المركز"], ["Finance", "المالية"], ["Full access · 2 users", "وصول كامل · مستخدمان"], ["Revoke all", "إلغاء الكل"], ["Grant all", "منح الكل"], ["permissions granted ·", "صلاحية ممنوحة ·"], ["Role saved", "تم حفظ الدور"], ["System roles cannot be deleted. Duplicate one to build a custom role from a known-good baseline.", "لا يمكن حذف أدوار النظام. انسخ أحدها لبناء دور مخصّص من أساس موثوق."], ["Courses & content", "الدورات والمحتوى"], ["Levels, vocabulary, tasks, flashcards, scenarios", "المستويات والمفردات والمهام والبطاقات والسيناريوهات"], ["Students & groups", "الطلاب والمجموعات"], ["Enrolment, tiers, cohorts", "التسجيل والفئات والدفعات"], ["Reports and hour consumption", "التقارير واستهلاك الساعات"], ["Users, roles, billing, company profile", "المستخدمون والأدوار والفوترة وملف الشركة"], ["View courses", "عرض الدورات"], ["Create & edit courses", "إنشاء الدورات وتعديلها"], ["Manage levels", "إدارة المستويات"], ["Manage content items", "إدارة عناصر المحتوى"], ["Generate content with AI", "إنشاء المحتوى بالذكاء الاصطناعي"], ["Delete courses", "حذف الدورات"], ["View students", "عرض الطلاب"], ["Add & invite students", "إضافة الطلاب ودعوتهم"], ["Assign tier & level", "تعيين الفئة والمستوى"], ["Manage groups", "إدارة المجموعات"], ["View reports", "عرض التقارير"], ["Request & schedule reports", "طلب التقارير وجدولتها"], ["View consumption", "عرض الاستهلاك"], ["Manage consumption tiers", "إدارة فئات الاستهلاك"], ["View users", "عرض المستخدمين"], ["Invite & remove users", "دعوة المستخدمين وإزالتهم"], ["Manage roles & permissions", "إدارة الأدوار والصلاحيات"], ["View billing", "عرض الفوترة"], ["Recharge hours & change plan", "شحن الساعات وتغيير الخطة"], ["Edit company profile", "تعديل ملف الشركة"],
  // students
  ["359 enrolled across 2 courses.", "359 طالبًا مسجّلًا في دورتين."], ["Invitations", "الدعوات"], ["Search students…", "ابحث عن الطلاب…"], ["All students", "كل الطلاب"], ["Change tier", "تغيير الفئة"], ["Move level", "نقل المستوى"], ["Request report", "طلب تقرير"], ["Course progress", "تقدّم الدورة"], ["12 of 35 tasks completed", "12 من 35 مهمة مكتملة"], ["Sessions", "الجلسات"], ["Streak", "أيام متتالية"], ["consecutive days", "أيام متواصلة"], ["Recent speaking sessions", "جلسات المحادثة الأخيرة"], ["Scored on range, accuracy and fluency", "تُقيَّم على النطاق والدقة والطلاقة"], ["View all 24 sessions", "عرض كل الجلسات (24)"], ["Speaking KPIs", "مؤشرات أداء المحادثة"], ["Produces simple phrases about people and places.", "يُنتج عبارات بسيطة عن الأشخاص والأماكن."], ["Limited control of past tense; recurring article errors.", "تحكّم محدود في الزمن الماضي؛ أخطاء متكررة في أدوات التعريف."], ["Short utterances, pauses shortening month over month.", "عبارات قصيرة، والتوقفات تقصر شهرًا بعد شهر."], ["Hours this month", "ساعات هذا الشهر"], ["/ 20 hrs", "/ 20 ساعة"], ["34% of the Regular tier used · resets Sep 1", "استُخدم 34% من الفئة العادية · يُعاد الضبط في 1 سبتمبر"],
  // course
  ["Generate with AI", "إنشاء بالذكاء الاصطناعي"], ["Course settings", "إعدادات الدورة"], ["Publish changes", "نشر التغييرات"], ["Outline", "المخطط"], ["+ Level", "+ مستوى"], ["Goals & KPIs", "الأهداف ومؤشرات الأداء"], ["Vocabulary & idioms", "المفردات والتعابير"], ["Conversational tasks", "مهام المحادثة"], ["Flashcards", "البطاقات التعليمية"], ["Real-life scenarios", "سيناريوهات واقعية"], ["Level goals & KPIs", "أهداف المستوى ومؤشرات الأداء"], ["Add goal", "إضافة هدف"], ["Add entry", "إضافة مدخل"], ["Add task", "إضافة مهمة"], ["Add card", "إضافة بطاقة"], ["Add scenario", "إضافة سيناريو"], ["Reorder", "إعادة الترتيب"], ["items in", "عنصرًا في"], ["Target lexis practised in this level's tasks", "المفردات المستهدفة في مهام هذا المستوى"], ["Live speaking prompts scored on range, accuracy and fluency", "محفزات محادثة مباشرة تُقيَّم على النطاق والدقة والطلاقة"], ["Spaced-repetition drills unlocked with each task", "تدريبات تكرار متباعد تُفتح مع كل مهمة"], ["Multi-turn simulations combining the level's tasks and lexis", "محاكاة متعددة الأدوار تجمع مهام المستوى ومفرداته"], ["What a student must demonstrate to advance", "ما يجب أن يُظهره الطالب للتقدّم"], ["Applied to every speaking task generated at this level.", "تُطبَّق على كل مهمة محادثة تُنشأ في هذا المستوى."], ["Max output words", "الحد الأقصى لكلمات الإخراج"], ["Speaking speed", "سرعة التحدث"], ["Students at level", "طلاب المستوى"], ["Goals", "الأهداف"], ["+ Add goal", "+ إضافة هدف"],
  // groups
  ["A group pairs a course level with a teacher and a cohort of students.", "تجمع المجموعة بين مستوى دورة ومعلّم ودفعة من الطلاب."], ["Create group", "إنشاء مجموعة"], ["Search groups…", "ابحث عن المجموعات…"], ["All groups", "كل المجموعات"], ["Edit group", "تعديل المجموعة"], ["Add students", "إضافة طلاب"], ["Avg progress", "متوسط التقدّم"], ["Hours this month", "ساعات هذا الشهر"], ["Needs review", "بحاجة لمراجعة"], ["Oldest 2 days old", "أقدمها منذ يومين"], ["Roster", "قائمة الطلاب"], ["Content & pacing", "المحتوى والجدولة"], ["Analytics", "التحليلات"], ["Export roster", "تصدير القائمة"], ["Tasks completed per week", "المهام المكتملة أسبوعيًا"], ["Group total across 12 students", "إجمالي المجموعة لـ12 طالبًا"], ["Average KPIs", "متوسط مؤشرات الأداء"], ["Group mean, last 30 days", "متوسط المجموعة، آخر 30 يومًا"], ["Completed", "مكتملة"], ["Pacing plan", "خطة الجدولة"], ["content unlocks on schedule", "يُفتح المحتوى حسب الجدول"], ["Course content →", "محتوى الدورة ←"], ["Introductions & routines", "التعارف والروتين"], ["Describing places", "وصف الأماكن"], ["Shopping & money", "التسوق والمال"], ["Travel & directions", "السفر والاتجاهات"], ["Work & colleagues", "العمل والزملاء"], ["Pacing is 1 week behind", "الجدولة متأخرة أسبوعًا واحدًا"], ["Week 3 tasks are at 41% completion. Consider unlocking week 5 later or reducing the weekly task count.", "مهام الأسبوع 3 مكتملة بنسبة 41%. فكّر في تأجيل فتح الأسبوع 5 أو تقليل عدد المهام الأسبوعية."], ["Adjust schedule", "تعديل الجدول"], ["Teacher view — progress and session feedback. Course content and billing are read-only.", "عرض المعلّم — التقدّم وملاحظات الجلسات. محتوى الدورة والفوترة للقراءة فقط."], ["Export progress", "تصدير التقدّم"], ["Oldest first", "الأقدم أولًا"],
  // consumption / billing
  ["Speaking hours used against each student's monthly tier.", "ساعات المحادثة المستخدمة مقابل الفئة الشهرية لكل طالب."], ["New tier", "فئة جديدة"], ["Sessions are paused for 359 students until the workspace is recharged.", "الجلسات متوقفة لـ359 طالبًا حتى يُعاد شحن مساحة العمل."], ["Total students", "إجمالي الطلاب"], ["Sessions blocked", "جلسات موقوفة"], ["Avg monthly usage", "متوسط الاستخدام الشهري"], ["hours per student", "ساعة لكل طالب"], ["Used this month", "المستخدم هذا الشهر"], ["hours across the workspace", "ساعة عبر مساحة العمل"], ["Tiers", "الفئات"], ["Monthly hour ceiling per student", "سقف الساعات الشهري لكل طالب"], ["Light user", "مستخدم خفيف"], ["Regular user", "مستخدم عادي"], ["Heavy user", "مستخدم نشط"], ["Intensive user", "مستخدم مكثّف"], ["Minimal usage", "استخدام محدود"], ["Average students", "طلاب متوسطو النشاط"], ["Highly engaged students", "طلاب شديدو التفاعل"], ["DEFAULT", "افتراضي"], ["Highest usage this month", "الأعلى استخدامًا هذا الشهر"], ["Sorted by share of tier consumed", "مرتبة حسب نسبة استهلاك الفئة"], ["August 2026", "أغسطس 2026"], ["Plan, hour wallet and invoices.", "الخطة ومحفظة الساعات والفواتير."], ["Change plan", "تغيير الخطة"], ["Current plan", "الخطة الحالية"], ["Rate per hour", "السعر لكل ساعة"], ["Max students", "الحد الأقصى للطلاب"], ["Started", "تاريخ البدء"], ["Renews", "التجديد"], ["Hour wallet", "محفظة الساعات"], ["hours remaining", "ساعة متبقية"], ["Purchased", "المشتراة"], ["Avg daily use", "متوسط الاستخدام اليومي"], ["Days left", "الأيام المتبقية"], ["Invoices & recharges", "الفواتير وعمليات الشحن"], ["Billed to Cairo Language Center", "تُصدر باسم مركز القاهرة للغات"], ["Payment method", "طريقة الدفع"], ["Hour recharge", "شحن ساعات"], ["annual", "سنوي"], ["Showing the last 4 of 11 documents", "عرض آخر 4 من 11 مستندًا"],
  // users
  ["Staff accounts for this workspace. Students live under Students.", "حسابات الموظفين في مساحة العمل هذه. الطلاب موجودون ضمن قسم الطلاب."], ["Pending invites", "دعوات معلّقة"], ["Invite user", "دعوة مستخدم"], ["Search by name or email…", "ابحث بالاسم أو البريد الإلكتروني…"], ["Pending assignment", "بانتظار التعيين"], ["All users", "كل المستخدمين"], ["Reset password", "إعادة تعيين كلمة المرور"], ["Edit user", "تعديل المستخدم"], ["21 students in reach", "21 طالبًا ضمن النطاق"], ["Sessions reviewed", "الجلسات المراجَعة"], ["Avg turnaround", "متوسط وقت الاستجابة"], ["Feedback after a session", "الملاحظات بعد الجلسة"], ["Awaiting review", "بانتظار المراجعة"], ["Assigned groups", "المجموعات المعيّنة"], ["Determines which students this user can see", "تحدد الطلاب الذين يمكن لهذا المستخدم رؤيتهم"], ["Assign", "تعيين"], ["Audit log", "سجل التدقيق"], ["Actions taken by this user", "الإجراءات التي اتخذها هذا المستخدم"], ["Open full audit log", "فتح سجل التدقيق الكامل"], ["Effective permissions", "الصلاحيات الفعلية"], ["Inherited from the Teacher role", "موروثة من دور المعلّم"], ["Edit role", "تعديل الدور"], ["Permissions are granted by role only. To give this user more access, change their role or edit the Teacher role.", "تُمنح الصلاحيات عبر الأدوار فقط. لمنح هذا المستخدم وصولًا أكبر، غيّر دوره أو عدّل دور المعلّم."], ["Deactivate user", "إلغاء تفعيل المستخدم"], ["Sessions end immediately and their groups become unassigned. History is kept for reporting.", "تنتهي الجلسات فورًا وتصبح مجموعاته غير معيّنة. يُحتفظ بالسجل لأغراض التقارير."], ["Deactivate", "إلغاء التفعيل"], ["Role: Teacher →", "الدور: معلّم ←"],
  // reports
  ["Request a one-off report or put it on a schedule.", "اطلب تقريرًا لمرة واحدة أو جدوله."], ["Group summary", "ملخص المجموعة"], ["Teacher activity", "نشاط المعلّمين"], ["Per-student levels, tasks and KPI trend for a date range.", "مستويات كل طالب ومهامه واتجاه مؤشرات أدائه لفترة محددة."], ["Cohort completion and average scores by level.", "إكمال الدفعة ومتوسط الدرجات حسب المستوى."], ["Hours used against tier, per student or workspace-wide.", "الساعات المستخدمة مقابل الفئة، لكل طالب أو لمساحة العمل كاملة."], ["Sessions reviewed and feedback turnaround time.", "الجلسات المراجَعة ووقت الاستجابة للملاحظات."], ["Request →", "اطلب ←"], ["History", "السجل"], ["Schedules", "الجداول"], ["All teachers", "كل المعلّمين"], ["monthly", "شهري"], ["All reports", "كل التقارير"], ["Share link", "مشاركة الرابط"], ["Download PDF", "تنزيل PDF"], ["Filters", "عوامل التصفية"], ["Min. 1 session", "جلسة واحدة على الأقل"], ["Students covered", "الطلاب المشمولون"], ["47 with no session excluded", "استُبعد 47 بلا جلسات"], ["Tasks completed", "المهام المكتملة"], ["Completion by level", "الإكمال حسب المستوى"], ["Students enrolled vs tasks completed", "الطلاب المسجّلون مقابل المهام المكتملة"], ["Completion %", "نسبة الإكمال"], ["KPI averages", "متوسطات مؤشرات الأداء"], ["Weighted across 359 students", "مرجّحة عبر 359 طالبًا"], ["Scores are averaged per attempt, not per student, so heavy users weigh more.", "تُحسب الدرجات لكل محاولة لا لكل طالب، لذا يكون للمستخدمين الأكثر نشاطًا وزن أكبر."], ["Per-student detail", "تفاصيل كل طالب"], ["Sorted by tasks completed", "مرتبة حسب المهام المكتملة"],
  // company / profile
  ["Workspace identity, contact details and defaults for new students.", "هوية مساحة العمل وبيانات الاتصال والإعدادات الافتراضية للطلاب الجدد."], ["Identity & contact", "الهوية والاتصال"], ["Student defaults", "إعدادات الطلاب الافتراضية"], ["Branding", "العلامة التجارية"], ["Languages", "اللغات"], ["Integrations", "التكاملات"], ["Identity", "الهوية"], ["Logo", "الشعار"], ["Workspace logo", "شعار مساحة العمل"], ["SVG or PNG, square, at least 256×256. Shown to students in the app.", "SVG أو PNG، مربع، بحجم 256×256 على الأقل. يظهر للطلاب في التطبيق."], ["Upload", "رفع"], ["Remove", "إزالة"], ["Legal name", "الاسم القانوني"], ["Display name", "الاسم المعروض"], ["Primary contact", "جهة الاتصال الرئيسية"], ["Contact email", "بريد التواصل"], ["Phone", "الهاتف"], ["Tax / VAT number", "الرقم الضريبي"], ["Country", "الدولة"], ["Time zone", "المنطقة الزمنية"], ["Defaults for new students", "الإعدادات الافتراضية للطلاب الجدد"], ["Applied on enrolment unless overridden.", "تُطبَّق عند التسجيل ما لم تُغيَّر."], ["Consumption tier", "فئة الاستهلاك"], ["Interface language", "لغة الواجهة"], ["English (EN)", "الإنجليزية (EN)"], ["Students may self-enrol with an invite link", "يمكن للطلاب التسجيل ذاتيًا عبر رابط دعوة"], ["Seats are still counted against the plan", "تُحتسب المقاعد ضمن الخطة"], ["Block sessions when a student passes their tier", "إيقاف الجلسات عند تجاوز الطالب فئته"], ["Off means the workspace wallet absorbs the overage", "عند الإيقاف، تتحمّل محفظة مساحة العمل الزيادة"], ["Weekly progress digest to group teachers", "ملخص أسبوعي للتقدّم لمعلّمي المجموعات"], ["Sent Monday 08:00 local time", "يُرسل الاثنين 08:00 بالتوقيت المحلي"], ["Discard", "تجاهل"], ["Your account, security and notification preferences.", "حسابك والأمان وتفضيلات الإشعارات."], ["Change photo", "تغيير الصورة"], ["Full name", "الاسم الكامل"], ["Email", "البريد الإلكتروني"], ["Job title", "المسمى الوظيفي"], ["Notifications", "الإشعارات"], ["Wallet running low", "رصيد المحفظة منخفض"], ["Below 7 days of hours at current usage", "أقل من 7 أيام من الساعات بالاستخدام الحالي"], ["in-app", "داخل التطبيق"], ["In-app", "داخل التطبيق"], ["Student passes their tier", "تجاوز طالب لفئته"], ["Immediate, per student", "فوري، لكل طالب"], ["Report ready", "التقرير جاهز"], ["When a requested report finishes", "عند اكتمال تقرير مطلوب"], ["Weekly workspace digest", "ملخص أسبوعي لمساحة العمل"], ["Monday morning summary", "ملخص صباح الاثنين"], ["Security", "الأمان"], ["Last password change 4 months ago", "آخر تغيير لكلمة المرور منذ 4 أشهر"], ["Change password", "تغيير كلمة المرور"], ["Two-factor auth", "المصادقة الثنائية"], ["Authenticator app", "تطبيق المصادقة"], ["Active sessions", "الجلسات النشطة"], ["THIS DEVICE", "هذا الجهاز"], ["This device", "هذا الجهاز"], ["Revoke", "إلغاء"], ["Cairo, EG", "القاهرة، مصر"], ["Alexandria, EG", "الإسكندرية، مصر"], ["active now", "نشط الآن"], ["Leave workspace", "مغادرة مساحة العمل"], ["You will lose access to Cairo Language Center immediately. Another admin must re-invite you.", "ستفقد الوصول إلى مركز القاهرة للغات فورًا. يجب أن يعيد مسؤول آخر دعوتك."],
  // flows
  ["Create & edit flows", "مسارات الإنشاء والتعديل"], ["Flows", "المسارات"], ["Roles & permissions", "الأدوار والصلاحيات"], ["Edit student", "تعديل الطالب"], ["Add course", "إضافة دورة"], ["Add level", "إضافة مستوى"], ["Delete level", "حذف المستوى"], ["Vocabulary entry", "مدخل مفردات"], ["Conversational task", "مهمة محادثة"], ["Courses · content", "الدورات · المحتوى"], ["Start from a baseline, then grant permissions on the role page.", "ابدأ من أساس، ثم امنح الصلاحيات من صفحة الدور."], ["You will land on the role's permission editor after creating it.", "ستنتقل إلى محرر صلاحيات الدور بعد إنشائه."], ["Role name", "اسم الدور"], ["Key", "المفتاح"], ["Generated from the name. Used in the API and cannot change later.", "يُولَّد من الاسم. يُستخدم في واجهة البرمجة ولا يمكن تغييره لاحقًا."], ["Start from", "البدء من"], ["No permissions", "بلا صلاحيات"], ["Grant everything manually", "امنح كل شيء يدويًا"], ["Copy Center manager", "نسخ مدير المركز"], ["14 permissions", "14 صلاحية"], ["Copy Teacher", "نسخ المعلّم"], ["5 permissions", "5 صلاحيات"], ["They receive an email link valid for 7 days.", "يتلقى رابطًا بالبريد الإلكتروني صالحًا لمدة 7 أيام."], ["Send invite", "إرسال الدعوة"], ["Work email", "البريد الإلكتروني للعمل"], ["Assign to groups", "التعيين في مجموعات"], ["Send a welcome message with the invite", "إرسال رسالة ترحيب مع الدعوة"], ["Seats: 5 of 25 used. Invited users occupy a seat once they accept.", "المقاعد: 5 من 25 مستخدمة. يشغل المستخدم المدعو مقعدًا بمجرد قبوله."], ["Enrol one student. Use Import CSV for a cohort.", "سجّل طالبًا واحدًا. استخدم استيراد CSV لدفعة كاملة."], ["Hours are drawn from the workspace wallet, capped by the student's tier.", "تُخصم الساعات من محفظة مساحة العمل بحد أقصى حسب فئة الطالب."], ["Starting level", "مستوى البدء"], ["Run a placement task before assigning a level", "إجراء مهمة تحديد مستوى قبل التعيين"], ["Email the app invite now", "إرسال دعوة التطبيق بالبريد الآن"], ["Moving a level keeps completed tasks in history.", "نقل المستوى يُبقي المهام المكتملة في السجل."], ["6.8 hrs already used this month.", "استُخدمت 6.8 ساعة هذا الشهر بالفعل."], ["Reset this month's hour usage", "إعادة ضبط استخدام الساعات لهذا الشهر"], ["Delete student", "حذف الطالب"], ["A group pairs a course level with a teacher and a cohort.", "تجمع المجموعة بين مستوى دورة ومعلّم ودفعة."], ["Group name", "اسم المجموعة"], ["Days", "الأيام"], ["Capacity", "السعة"], ["Enrolment is blocked past capacity.", "يُمنع التسجيل بعد بلوغ السعة."], ["Term", "الفصل"], ["Students are added after the group exists, from the Students table or the group page.", "يُضاف الطلاب بعد إنشاء المجموعة، من جدول الطلاب أو صفحة المجموعة."], ["Levels and content are added next.", "تُضاف المستويات والمحتوى لاحقًا."], ["Create course", "إنشاء دورة"], ["Course name", "اسم الدورة"], ["Language", "اللغة"], ["Level framework", "إطار المستويات"], ["Target audiences", "الفئات المستهدفة"], ["Professionals", "المهنيون"], ["General", "عام"], ["Business", "الأعمال"], ["Create the framework's levels automatically", "إنشاء مستويات الإطار تلقائيًا"], ["Six empty levels with CEFR goals and KPIs pre-filled.", "ستة مستويات فارغة بأهداف ومؤشرات CEFR معبأة مسبقًا."], ["Level name", "اسم المستوى"], ["Caps the length of AI turns.", "يحدّ من طول ردود الذكاء الاصطناعي."], ["1.0 is native pace.", "1.0 هي سرعة المتحدث الأصلي."], ["Goals — one per line", "الأهداف — هدف في كل سطر"], ["KPIs (range, accuracy, fluency) are inherited from the framework and editable per level.", "تُورث مؤشرات الأداء (النطاق والدقة والطلاقة) من الإطار ويمكن تعديلها لكل مستوى."], ["Add vocabulary entry", "إضافة مدخل مفردات"], ["Term or idiom", "المصطلح أو التعبير"], ["Meaning", "المعنى"], ["Translation (AR)", "الترجمة (AR)"], ["Generate reference audio at level speed", "إنشاء صوت مرجعي بسرعة المستوى"], ["Entries feed both flashcards and the lexis targets of conversational tasks.", "تُغذي المدخلات البطاقات التعليمية ومفردات مهام المحادثة."], ["Add conversational task", "إضافة مهمة محادثة"], ["Save task", "حفظ المهمة"], ["Task title", "عنوان المهمة"], ["Format", "الصيغة"], ["Monologue", "حديث فردي"], ["Student speaks alone against a prompt", "يتحدث الطالب منفردًا استجابةً لمحفز"], ["Role-play", "لعب أدوار"], ["AI takes a persona and responds", "يتقمص الذكاء الاصطناعي شخصية ويرد"], ["Picture prompt", "محفز صوري"], ["Describe an image", "صِف صورة"], ["Prompt given to the student", "المحفز المقدم للطالب"], ["Target duration (seconds)", "المدة المستهدفة (ثوانٍ)"], ["Minimum turns", "الحد الأدنى للأدوار"], ["Scored on", "يُقيَّم على"], ["Pronunciation", "النطق"], ["Send to the group teacher for feedback after each attempt", "الإرسال لمعلّم المجموعة لإبداء الملاحظات بعد كل محاولة"], ["New consumption tier", "فئة استهلاك جديدة"], ["A monthly hour ceiling you can assign to students.", "سقف ساعات شهري يمكنك تعيينه للطلاب."], ["Create tier", "إنشاء الفئة"], ["Tier name", "اسم الفئة"], ["Monthly hours", "الساعات الشهرية"], ["Marker colour", "لون العلامة"], ["Unused hours", "الساعات غير المستخدمة"], ["Make this the default tier for new students", "جعلها الفئة الافتراضية للطلاب الجدد"], ["Changing a tier's ceiling applies from the next billing month.", "يسري تغيير سقف الفئة من شهر الفوترة التالي."], ["Ready reports appear in History and can be emailed.", "تظهر التقارير الجاهزة في السجل ويمكن إرسالها بالبريد."], ["Report", "التقرير"], ["Levels, tasks and KPI trend", "المستويات والمهام واتجاه مؤشرات الأداء"], ["Cohort completion and scores", "إكمال الدفعة والدرجات"], ["Hours used against tier", "الساعات المستخدمة مقابل الفئة"], ["Date range", "الفترة الزمنية"], ["Email me when it is ready", "راسلني عندما يجهز"], ["Hours land in the workspace wallet immediately.", "تُضاف الساعات إلى محفظة مساحة العمل فورًا."], ["At the current usage of 15.3 hrs/day this lasts about 65 days.", "بمعدل الاستخدام الحالي 15.3 ساعة يوميًا تكفي نحو 65 يومًا."], ["Total", "الإجمالي"], ["Auto-recharge when the wallet drops below 100 hours", "الشحن التلقائي عند انخفاض المحفظة عن 100 ساعة"], ["An invoice is issued to Cairo Language Center LLC, VAT 100-234-556.", "تُصدر فاتورة باسم مركز القاهرة للغات ذ.م.م، الرقم الضريبي 100-234-556."], ["This cannot be undone.", "لا يمكن التراجع عن هذا الإجراء."], ["Students at this level", "الطلاب في هذا المستوى"], ["Content items", "عناصر المحتوى"], ["Move affected students to", "نقل الطلاب المتأثرين إلى"], ["Their completed tasks stay in history and in reports.", "تبقى مهامهم المكتملة في السجل والتقارير."], ["Type the level name to confirm in the real product.", "اكتب اسم المستوى للتأكيد في المنتج الفعلي."], ["Prototype only; nothing was saved.", "نموذج أولي فقط؛ لم يُحفظ شيء."], ["Do not roll over", "لا تُرحَّل"], ["Purple", "بنفسجي"], ["Idiom", "تعبير اصطلاحي"], ["One-off", "لمرة واحدة"], ["Edit student", "تعديل الطالب"]];
  const D = new Map(PAIRS);
  const MON = {
    Jan: "يناير",
    Feb: "فبراير",
    Mar: "مارس",
    Apr: "أبريل",
    May: "مايو",
    Jun: "يونيو",
    Jul: "يوليو",
    Aug: "أغسطس",
    Sep: "سبتمبر",
    Oct: "أكتوبر",
    Nov: "نوفمبر",
    Dec: "ديسمبر"
  };
  const DAY = {
    Sun: "الأحد",
    Mon: "الاثنين",
    Tue: "الثلاثاء",
    Wed: "الأربعاء",
    Thu: "الخميس",
    Fri: "الجمعة",
    Sat: "السبت"
  };
  const LVL = {
    Basic: "مستخدم أساسي",
    Independent: "مستخدم مستقل"
  };
  const TIER = {
    Light: "خفيف",
    Regular: "عادي",
    Heavy: "نشط",
    Intensive: "مكثّف"
  };
  const UNIT = {
    minute: "دقيقة",
    minutes: "دقيقة",
    min: "دقيقة",
    hour: "ساعة",
    hours: "ساعات",
    hr: "ساعة",
    day: "يوم",
    days: "أيام",
    week: "أسبوع",
    weeks: "أسابيع",
    month: "شهر",
    months: "أشهر"
  };
  const date = (m, d, y) => d + " " + MON[m] + (y ? " " + y : "");
  const R = [[/^(\d[\d,.]*) students?$/, m => m[1] + " طالب"], [/^(\d+) users?$/, m => m[1] === "2" ? "مستخدمان" : m[1] + " مستخدمين"], [/^(\d+) groups?$/, m => m[1] + " مجموعات"], [/^(\d+) rows$/, m => m[1] + " صف"], [/^(\d+) permissions$/, m => m[1] + " صلاحية"], [/^(\d+) levels$/, m => m[1] + " مستويات"], [/^(\d+) (words|vocab)$/, m => m[1] + (m[2] === "words" ? " كلمة" : " مفردات")], [/^([\d.]+) speed$/, m => "سرعة " + m[1]], [/^(\d+) tasks?$/, m => m[1] + " مهام"], [/^(\d+) scenarios?$/, m => m[1] + " سيناريو"], [/^([\d,.]+) hrs?$/, m => m[1] + " ساعة"], [/^([\d.]+) \/ ([\d.]+) hrs$/, m => m[1] + " / " + m[2] + " ساعة"], [/^over limit$/, () => "تجاوز الحد"], [/^(\d+)–(\d+) of ([\d,]+)$/, m => m[1] + "–" + m[2] + " من " + m[3]], [/^(\d+) of (\d+) (users|groups|requests)$/, m => m[1] + " من " + m[2] + " " + {
    users: "مستخدمين",
    groups: "مجموعات",
    requests: "طلبات"
  }[m[3]]], [/^(\d+) of (\d+) done$/, m => m[1] + " من " + m[2] + " مكتملة"], [/^Week (\d+) of (\d+)$/, m => "الأسبوع " + m[1] + " من " + m[2]], [/^Seats: (\d+) of (\d+) used$/, m => "المقاعد: " + m[1] + " من " + m[2] + " مستخدمة"], [/^capacity (\d+)$/i, m => "السعة " + m[1]], [/^(\d+) (minutes?|min|hours?|hr|days?|weeks?|months?) ago$/, m => "منذ " + m[1] + " " + UNIT[m[2]]], [/^(last active|updated) (.+)$/, (m, t) => (m[1] === "updated" ? "حُدّث " : "آخر نشاط ") + t(m[2])], [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2})(?:, (\d{4}))?$/, m => date(m[1], m[2], m[3])], [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2}), (\d\d:\d\d)$/, m => date(m[1], m[2]) + "، " + m[3]], [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})$/, m => MON[m[1]] + " " + m[2]], [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2}) – (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2})(?:, (\d{4}))?$/, m => date(m[1], m[2]) + " – " + date(m[3], m[4], m[5])], [/^Yesterday, (\d\d:\d\d)$/, m => "أمس، " + m[1]], [/^(Requested|generated|joined|enrolled|Last on|Unlocks|resets) (.+?)(?: by (.+))?$/, (m, t) => ({
    Requested: "طُلب في ",
    generated: "أُنشئ في ",
    joined: "انضم في ",
    enrolled: "سُجّل في ",
    "Last on": "آخر جلسة في ",
    Unlocks: "يُفتح في ",
    resets: "يُعاد الضبط في "
  })[m[1]] + t(m[2]) + (m[3] ? " بواسطة " + m[3] : "")], [/^((?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)(?: · (?:Sun|Mon|Tue|Wed|Thu|Fri|Sat))*)(, .+)?$/, m => m[1].split(" · ").map(d => DAY[d]).join(" · ") + (m[2] ? "، " + m[2].slice(2) : "")], [/^(Sun|Mon|Tue|Wed|Thu|Fri|Sat)$/, m => DAY[m[1]]], [/^Level ([A-C]\d): (Basic|Independent)( User)?$/, m => "المستوى " + m[1] + ": " + LVL[m[2]]], [/^Level ([A-C]\d)$/, m => "المستوى " + m[1]], [/^Level settings · (.+)$/, (m, t) => "إعدادات المستوى · " + t(m[1])], [/^(Light|Regular|Heavy|Intensive)(?: User)?$/, m => TIER[m[1]]], [/^(Light|Regular|Heavy|Intensive) · (\d+)( hrs(?:\/mo)?)?$/, m => TIER[m[1]] + " · " + m[2] + (m[3] ? m[3].includes("/mo") ? " ساعة/شهريًا" : " ساعة" : "")], [/^(Light|Regular|Heavy|Intensive) User · (\d+) hrs$/, m => TIER[m[1]] + " · " + m[2] + " ساعة"], [/^(Course|Level|Group|Tier): (.+)$/, (m, t) => ({
    Course: "الدورة",
    Level: "المستوى",
    Group: "المجموعة",
    Tier: "الفئة"
  })[m[1]] + ": " + ({
    All: "الكل"
  }[m[2]] || t(m[2]))], [/^([↑↓→]) (\d+%?) (this month|vs July|pts vs July|vs previous period)$/, m => m[1] + " " + m[2] + " " + {
    "this month": "هذا الشهر",
    "vs July": "مقارنةً بيوليو",
    "pts vs July": "نقاط مقارنةً بيوليو",
    "vs previous period": "مقارنةً بالفترة السابقة"
  }[m[3]]], [/^([+−-]\d+) (this month|vs last month|vs previous period)$/, m => m[1] + " " + {
    "this month": "هذا الشهر",
    "vs last month": "مقارنةً بالشهر الماضي",
    "vs previous period": "مقارنةً بالفترة السابقة"
  }[m[2]]], [/^Capacity (\d+)$/, m => "السعة " + m[1]], [/^Group median (\d+%)$/, m => "وسيط المجموعة " + m[1]], [/^([\d.]+) avg per student$/, m => m[1] + " في المتوسط لكل طالب"], [/^Oldest (\d+) days old$/, m => "أقدمها منذ " + m[1] + " أيام"], [/^VAT (.+)$/, m => "الرقم الضريبي " + m[1]], [/^Pay (.+)$/, m => "ادفع " + m[1]], [/^Total at (.+)$/, m => "الإجمالي بسعر " + m[1]], [/^Delete (Level \w+)\?$/, (m, t) => "حذف " + t(m[1]) + "؟"], [/^(.+) — done$/, (m, t) => t(m[1]) + " — تم"], [/^(\d+) (vocab|tasks) · (\d+) (tasks|scenarios)$/, (m, t) => t(m[1] + " " + m[2]) + " · " + t(m[3] + " " + m[4])]];
  function tr(s) {
    if (D.has(s)) return D.get(s);
    for (const [re, f] of R) {
      const m = s.match(re);
      if (m) return f(m, trOr);
    }
    if (s.includes(" · ")) {
      const parts = s.split(" · ");
      const out = parts.map(trOr);
      if (out.some((o, i) => o !== parts[i])) return out.join(" · ");
    }
    return null;
  }
  function trOr(s) {
    const r = tr(s);
    return r == null ? s : r;
  }
  let lang = "en",
    root = null,
    obs = null;
  const tracked = new Map(); // node -> { en, ar }
  function doText(n) {
    const v = n.nodeValue;
    if (!v || !v.trim()) return;
    const rec = tracked.get(n);
    if (rec && v === rec.ar) return;
    const core = v.trim();
    const ar = tr(core);
    if (ar == null) {
      tracked.delete(n);
      return;
    }
    const full = v.replace(core, ar);
    tracked.set(n, {
      en: v,
      ar: full
    });
    n.nodeValue = full;
  }
  function doEl(el) {
    if (el.hasAttribute && el.hasAttribute("placeholder")) {
      const cur = el.getAttribute("placeholder");
      const en = el.dataset.phEn;
      if (cur !== el.dataset.phAr) {
        const ar = tr(cur.trim());
        if (ar) {
          el.dataset.phEn = cur;
          el.dataset.phAr = ar;
          el.setAttribute("placeholder", ar);
        }
      } else if (!en) {}
    }
  }
  function walk(node) {
    if (node.nodeType === 3) {
      if (!skip(node.parentNode)) doText(node);
      return;
    }
    if (node.nodeType !== 1 || skip(node)) return;
    doEl(node);
    const w = document.createTreeWalker(node, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    let c;
    while (c = w.nextNode()) {
      if (c.nodeType === 3) {
        if (!skip(c.parentNode)) doText(c);
      } else doEl(c);
    }
  }
  function skip(el) {
    return !el || el.closest && el.closest("script,style,[data-no-translate],input,textarea");
  }
  function restore() {
    tracked.forEach((rec, n) => {
      if (n.nodeValue === rec.ar) n.nodeValue = rec.en;
    });
    tracked.clear();
    (root || document).querySelectorAll("[data-ph-en]").forEach(el => {
      if (el.getAttribute("placeholder") === el.dataset.phAr) el.setAttribute("placeholder", el.dataset.phEn);
      delete el.dataset.phEn;
      delete el.dataset.phAr;
    });
  }
  function setLang(l, r) {
    root = r || root || document.body;
    lang = l;
    if (obs) {
      obs.disconnect();
      obs = null;
    }
    if (l === "ar") {
      walk(root);
      obs = new MutationObserver(ms => ms.forEach(m => {
        if (m.type === "characterData") {
          if (!skip(m.target.parentNode)) doText(m.target);
        } else if (m.type === "attributes") doEl(m.target);else m.addedNodes.forEach(walk);
      }));
      obs.observe(root, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true,
        attributeFilter: ["placeholder"]
      });
    } else restore();
  }
  window.SG_I18N = {
    setLang,
    t: s => lang === "ar" ? trOr(s) : s,
    glossary: PAIRS
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "reference/platform-i18n.js", error: String((e && e.message) || e) }); }

// ui_kits/admin-dashboard/AdminScreens.jsx
try { (() => {
function UsersScreen({
  go,
  open
}) {
  const {
    SgButton,
    SgTable,
    SgBadge
  } = SG;
  const users = [{
    initials: "AU",
    name: "Admin User",
    email: "admin@cairolang.com",
    role: "Admin",
    groups: "—",
    last: "2 min ago",
    status: "Active"
  }, {
    initials: "NH",
    name: "Nour Hassan",
    email: "nour@cairolang.com",
    role: "Teacher",
    groups: "B1 Evening, A2 Morning",
    last: "1 hr ago",
    status: "Active"
  }, {
    initials: "OK",
    name: "Omar Khaled",
    email: "omar@cairolang.com",
    role: "Center manager",
    groups: "—",
    last: "Yesterday",
    status: "Active"
  }, {
    initials: "SF",
    name: "Sara Fouad",
    email: "sara@cairolang.com",
    role: "Finance",
    groups: "—",
    last: "3 days ago",
    status: "Active"
  }, {
    initials: "YT",
    name: "Youssef Tarek",
    email: "youssef@cairolang.com",
    role: "Teacher",
    groups: "Pending assignment",
    last: "Never",
    status: "Invited"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Users",
    subtitle: "Staff accounts for this workspace. Students live under Students.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SgButton, {
      variant: "secondary"
    }, "Pending invites \xB7 2"), /*#__PURE__*/React.createElement(SgButton, {
      onClick: () => open("user.invite")
    }, "Invite user"))
  }), /*#__PURE__*/React.createElement(Toolbar, {
    placeholder: "Search by name or email\u2026",
    filters: ["Role: All", "Status: Active"]
  }), /*#__PURE__*/React.createElement(SgTable, {
    onRowClick: () => go("userDetail"),
    rows: users,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        padding: "14px 24px",
        fontSize: 13,
        color: "var(--sg-ink-muted)"
      }
    }, /*#__PURE__*/React.createElement("div", null, "5 of 5 users"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--sg-ink-muted)"
      }
    }, "Seats: 5 of 25 used")),
    columns: [{
      key: "name",
      label: "User",
      width: "2.2fr",
      render: r => /*#__PURE__*/React.createElement(PersonCell, r)
    }, {
      key: "role",
      label: "Role",
      width: "1.2fr",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600
        }
      }, r.role)
    }, {
      key: "groups",
      label: "Groups",
      width: "1.4fr",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          color: "var(--sg-ink-muted)"
        }
      }, r.groups)
    }, {
      key: "last",
      label: "Last active",
      width: "1fr",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          color: "var(--sg-ink-muted)"
        }
      }, r.last)
    }, {
      key: "status",
      label: "Status",
      width: "90px",
      align: "right",
      render: r => /*#__PURE__*/React.createElement(SgBadge, {
        tone: r.status === "Active" ? "success" : "info"
      }, r.status)
    }]
  }));
}
function UserDetailScreen({
  go,
  open
}) {
  const {
    SgButton,
    SgCard,
    SgAvatar,
    SgBadge,
    SgTag,
    SgMetricCard,
    SgListRow,
    SgProgress,
    SgBackLink
  } = SG;
  const audit = [["session.review", "Reviewed 5 sessions in B1 Evening", "2 hours ago"], ["student.assign", "Moved Hana Ezz to Level A2", "Yesterday, 14:02"], ["report.request", "Requested a group summary for A2 Morning", "Aug 16, 09:31"], ["auth.login", "Signed in from Chrome · macOS · Cairo", "Aug 16, 09:12"], ["session.review", "Reviewed 3 sessions in A2 Morning", "Aug 15, 17:40"]];
  const perms = [["Courses & content", "1/6", 17], ["Students & groups", "2/4", 50], ["Insights", "2/4", 50], ["Administration", "0/6", 0]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SgBackLink, {
    onClick: () => go("users")
  }, "All users"), /*#__PURE__*/React.createElement(SgCard, {
    padding: 24,
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 32,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(SgAvatar, {
    initials: "NH",
    size: 56
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: "-0.02em"
    }
  }, "Nour Hassan"), /*#__PURE__*/React.createElement(SgBadge, {
    tone: "success"
  }, "Active")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--sg-ink-muted)",
      marginTop: 5
    }
  }, "nour@cairolang.com \xB7 joined Mar 4, 2026 \xB7 last active 1 hour ago"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(SgTag, {
    variant: "link",
    onClick: () => go("roles")
  }, "Role: Teacher \u2192"), /*#__PURE__*/React.createElement(SgTag, null, "2 groups"), /*#__PURE__*/React.createElement(SgTag, null, "Africa/Cairo")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(SgButton, {
    variant: "secondary",
    size: "md"
  }, "Reset password"), /*#__PURE__*/React.createElement(SgButton, {
    size: "md",
    onClick: () => open("user.invite")
  }, "Edit user"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(SgMetricCard, {
    size: "md",
    label: "Groups",
    value: "2",
    note: "21 students in reach"
  }), /*#__PURE__*/React.createElement(SgMetricCard, {
    size: "md",
    label: "Sessions reviewed",
    value: "148",
    note: "Last 30 days"
  }), /*#__PURE__*/React.createElement(SgMetricCard, {
    size: "md",
    label: "Avg turnaround",
    value: "1.4d",
    note: "Feedback after a session"
  }), /*#__PURE__*/React.createElement(SgMetricCard, {
    size: "md",
    label: "Awaiting review",
    value: "4",
    note: "Oldest 2 days old"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(SgCard, {
    flush: true,
    title: "Assigned groups",
    description: "Determines which students this user can see",
    actions: /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "var(--sg-link)",
        cursor: "pointer"
      }
    }, "Assign")
  }, [["A2 Morning", "General English · Level A2 · Sun · Tue · Thu, 09:00", "12 students", 48], ["B1 Evening", "General English · Level B1 · Mon · Wed, 18:00", "9 students", 62]].map(([n, m, s, p]) => /*#__PURE__*/React.createElement(SgListRow, {
    key: n,
    padding: "15px 20px",
    onClick: () => go("groupDetail"),
    title: n,
    subtitle: m,
    trailing: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--sg-ink-muted)"
      }
    }, s), /*#__PURE__*/React.createElement(SgProgress, {
      value: p,
      height: 5,
      width: 130,
      showValue: true
    }))
  }))), /*#__PURE__*/React.createElement(SgCard, {
    flush: true,
    title: "Audit log",
    description: "Actions taken by this user"
  }, audit.map(([a, t, w], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "13px 20px",
      borderBottom: "1px solid var(--sg-divider-row)"
    }
  }, /*#__PURE__*/React.createElement(SgTag, {
    variant: "key",
    style: {
      fontSize: 11,
      padding: "3px 7px",
      borderRadius: 6
    }
  }, a), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      fontSize: 13,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-ink-muted)"
    }
  }, w))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 24px",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Open full audit log")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(SgCard, {
    title: "Effective permissions",
    description: "Inherited from the Teacher role",
    padding: "20px 22px",
    actions: /*#__PURE__*/React.createElement("div", {
      onClick: () => go("roles"),
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: "var(--sg-link)",
        cursor: "pointer"
      }
    }, "Edit role")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 11,
      marginTop: -2
    }
  }, perms.map(([a, c, p]) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--sg-ink-2)"
    }
  }, a), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(SgProgress, {
    value: p,
    height: 5,
    width: 70
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--sg-ink-muted)",
      width: 34,
      textAlign: "end",
      fontVariantNumeric: "tabular-nums"
    }
  }, c))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      paddingTop: 14,
      borderTop: "1px solid var(--sg-divider)",
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      lineHeight: 1.55
    }
  }, "Permissions are granted by role only. To give this user more access, change their role or edit the Teacher role.")), /*#__PURE__*/React.createElement(SgCard, {
    tone: "danger",
    title: "Deactivate user",
    description: "Sessions end immediately and their groups become unassigned. History is kept for reporting.",
    padding: "20px 22px"
  }, /*#__PURE__*/React.createElement(SgButton, {
    variant: "danger",
    size: "md"
  }, "Deactivate")))));
}
function ReportsScreen({
  go,
  open
}) {
  const {
    SgButton,
    SgCard,
    SgTabs,
    SgSelect,
    SgTable,
    SgBadge
  } = SG;
  const [tab, setTab] = React.useState("History");
  const tpl = [["Student progress", "Per-student levels, tasks and KPI trend for a date range."], ["Group summary", "Cohort completion and average scores by level."], ["Consumption", "Hours used against tier, per student or workspace-wide."], ["Teacher activity", "Sessions reviewed and feedback turnaround time."]];
  const rows = [{
    type: "Consumption",
    target: "Workspace · all students",
    date: "Requested Aug 18, 09:12",
    range: "Aug 1 – Aug 18",
    by: "Sara Fouad",
    status: "Ready",
    tone: "success"
  }, {
    type: "Student progress",
    target: "Mahmoud Youssef",
    date: "Requested Aug 17, 18:40",
    range: "Jul 1 – Aug 17",
    by: "Nour Hassan",
    status: "Ready",
    tone: "success"
  }, {
    type: "Group summary",
    target: "A2 Morning",
    date: "Requested Aug 17, 11:05",
    range: "Aug 1 – Aug 17",
    by: "Omar Khaled",
    status: "Processing",
    tone: "info"
  }, {
    type: "Teacher activity",
    target: "All teachers",
    date: "Requested Aug 15, 08:00",
    range: "Jul 2026",
    by: "Schedule · monthly",
    status: "Ready",
    tone: "success"
  }, {
    type: "Student progress",
    target: "Ahmed Osman",
    date: "Requested Aug 14, 13:22",
    range: "Jun 1 – Aug 14",
    by: "Admin User",
    status: "Failed",
    tone: "danger"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Reports",
    subtitle: "Request a one-off report or put it on a schedule.",
    actions: /*#__PURE__*/React.createElement(SgButton, {
      onClick: () => open("report.request")
    }, "Request report")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16,
      marginBottom: 20
    }
  }, tpl.map(([n, d]) => /*#__PURE__*/React.createElement(SgCard, {
    key: n,
    padding: "18px 20px",
    onClick: () => open("report.request")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      marginTop: 6,
      lineHeight: 1.5,
      minHeight: 36
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--sg-link)",
      marginTop: 12
    }
  }, "Request \u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginBottom: 16,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(SgTabs, {
    variant: "segment",
    items: ["History", "Schedules · 2"],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(SgSelect, {
    variant: "filter",
    height: 38,
    value: "Type: All"
  }), /*#__PURE__*/React.createElement(SgSelect, {
    variant: "filter",
    height: 38,
    value: "Status: All"
  })), /*#__PURE__*/React.createElement(SgTable, {
    onRowClick: () => go("reportDetail"),
    rows: rows,
    footer: "5 of 5 requests",
    columns: [{
      key: "type",
      label: "Type",
      width: "1.5fr",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600,
          color: "var(--sg-ink)"
        }
      }, r.type)
    }, {
      key: "target",
      label: "Target",
      width: "1.6fr",
      render: r => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          color: "var(--sg-ink)"
        }
      }, r.target), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11,
          color: "var(--sg-ink-muted)",
          marginTop: 2
        }
      }, r.date))
    }, {
      key: "range",
      label: "Range",
      width: "1.3fr",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          color: "var(--sg-ink-muted)"
        }
      }, r.range)
    }, {
      key: "by",
      label: "Requested by",
      width: "1fr",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          color: "var(--sg-ink-muted)"
        }
      }, r.by)
    }, {
      key: "status",
      label: "Status",
      width: "130px",
      align: "right",
      render: r => /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 10
        }
      }, /*#__PURE__*/React.createElement(SgBadge, {
        tone: r.tone
      }, r.status), r.status === "Ready" ? /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 12,
          fontWeight: 600,
          color: "var(--sg-link)"
        }
      }, "PDF") : null)
    }]
  }));
}
function ReportDetailScreen({
  go
}) {
  const {
    SgButton,
    SgCard,
    SgBadge,
    SgSelect,
    SgMetricCard,
    SgBarChart,
    SgKpiBar,
    SgTable,
    SgAvatar,
    SgBackLink
  } = SG;
  const filters = [["Course: General English", true], ["Level: All"], ["Group: All"], ["Tier: All"], ["Min. 1 session", true]];
  const rows = [["KA", "Karim Adel", "Level A1: Basic User", "38", "31.5", "82", "↑ 7", "success"], ["LS", "Layla Samir", "Level B2: Independent", "34", "33.1", "79", "↑ 3", "success"], ["HE", "Hana Ezz", "Level A2: Basic User", "27", "9.2", "74", "↑ 2", "success"], ["MY", "Mahmoud Youssef", "Level A2: Basic User", "24", "6.8", "71", "↓ 9", "danger"], ["AO", "Ahmed Osman", "Level B1: Independent", "21", "22.4", "68", "→ 0", "muted"], ["MO", "Mostafa Moheb", "Level A2: Basic User", "9", "10.4", "61", "↓ 4", "danger"]].map(([initials, name, level, tasks, hours, score, trend, t]) => ({
    initials,
    name,
    level,
    tasks,
    hours,
    score,
    trend,
    t
  }));
  const trendColor = {
    success: "var(--sg-success)",
    danger: "var(--sg-danger)",
    muted: "var(--sg-ink-muted)"
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SgBackLink, {
    onClick: () => go("reports")
  }, "All reports"), /*#__PURE__*/React.createElement(PageHeader, {
    title: "Student progress",
    badge: /*#__PURE__*/React.createElement(SgBadge, {
      tone: "success"
    }, "Ready"),
    subtitle: "Workspace \xB7 all students \xB7 Jul 1 \u2013 Aug 18, 2026 \xB7 generated Aug 18, 09:14 by Sara Fouad",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SgButton, {
      variant: "secondary"
    }, "Export CSV"), /*#__PURE__*/React.createElement(SgButton, {
      variant: "secondary"
    }, "Share link"), /*#__PURE__*/React.createElement(SgButton, null, "Download PDF"))
  }), /*#__PURE__*/React.createElement(SgCard, {
    padding: "16px 20px",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--sg-ink-muted)",
      marginInlineEnd: 4
    }
  }, "Filters"), filters.map(([l, a]) => /*#__PURE__*/React.createElement(SgSelect, {
    key: l,
    variant: "filter",
    height: 34,
    active: !!a,
    value: l
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--sg-ink-muted)"
    }
  }, "312 rows")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(SgMetricCard, {
    size: "md",
    label: "Students covered",
    value: "312",
    note: "47 with no session excluded"
  }), /*#__PURE__*/React.createElement(SgMetricCard, {
    size: "md",
    label: "Tasks completed",
    value: "2,418",
    note: "\u2191 14% vs previous period",
    noteTone: "success"
  }), /*#__PURE__*/React.createElement(SgMetricCard, {
    size: "md",
    label: "Hours delivered",
    value: "4,092",
    note: "\u2191 8% vs previous period",
    noteTone: "success"
  }), /*#__PURE__*/React.createElement(SgMetricCard, {
    size: "md",
    label: "Avg score",
    value: "71",
    note: "\u2193 2 vs previous period",
    noteTone: "warning"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: 20,
      alignItems: "start",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(SgCard, {
    title: "Completion by level",
    description: "Students enrolled vs tasks completed"
  }, /*#__PURE__*/React.createElement(SgBarChart, {
    legend: true,
    height: 168,
    series: [{
      label: "Students",
      color: "var(--sg-chart-muted)"
    }, {
      label: "Completion %",
      color: "var(--sg-link)"
    }],
    data: [["Pre-A1", 22, 88], ["A1", 48, 81], ["A2", 72, 74], ["B1", 38, 62], ["B2", 18, 51]].map(([label, a, b]) => ({
      label,
      values: [a, b]
    }))
  })), /*#__PURE__*/React.createElement(SgCard, {
    title: "KPI averages",
    description: "Weighted across 359 students",
    padding: "20px 22px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SgKpiBar, {
    name: "Range",
    value: "73 / 100",
    pct: 73,
    note: "+3 vs previous period"
  }), /*#__PURE__*/React.createElement(SgKpiBar, {
    name: "Accuracy",
    value: "67 / 100",
    pct: 67,
    note: "\u22124 vs previous period"
  }), /*#__PURE__*/React.createElement(SgKpiBar, {
    name: "Fluency",
    value: "72 / 100",
    pct: 72,
    note: "+5 vs previous period"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 16,
      borderTop: "1px solid var(--sg-divider)",
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      lineHeight: 1.55
    }
  }, "Scores are averaged per attempt, not per student, so heavy users weigh more."))), /*#__PURE__*/React.createElement(SgCard, {
    flush: true,
    title: "Per-student detail",
    description: "Sorted by tasks completed",
    actions: /*#__PURE__*/React.createElement(SgSelect, {
      variant: "filter",
      height: 34,
      value: "Columns"
    })
  }, /*#__PURE__*/React.createElement(SgTable, {
    bordered: false,
    onRowClick: () => go("studentDetail"),
    rows: rows,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        padding: "14px 24px",
        fontSize: 13,
        color: "var(--sg-ink-muted)"
      }
    }, /*#__PURE__*/React.createElement("div", null, "1\u20136 of 312"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        color: "var(--sg-link)",
        cursor: "pointer"
      }
    }, "Load more")),
    columns: [{
      key: "name",
      label: "Student",
      width: "1.8fr",
      render: r => /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12
        }
      }, /*#__PURE__*/React.createElement(SgAvatar, {
        initials: r.initials,
        size: 30
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600,
          color: "var(--sg-ink)"
        }
      }, r.name))
    }, {
      key: "level",
      label: "Level",
      width: "1.3fr",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          color: "var(--sg-ink-muted)"
        }
      }, r.level)
    }, {
      key: "tasks",
      label: "Tasks",
      width: "1fr",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          color: "var(--sg-ink)",
          fontVariantNumeric: "tabular-nums"
        }
      }, r.tasks)
    }, {
      key: "hours",
      label: "Hours",
      width: "1fr",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          color: "var(--sg-ink-muted)",
          fontVariantNumeric: "tabular-nums"
        }
      }, r.hours)
    }, {
      key: "score",
      label: "Avg score",
      width: "1fr",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600,
          color: "var(--sg-ink)"
        }
      }, r.score)
    }, {
      key: "trend",
      label: "Trend",
      width: "1fr",
      align: "right",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 12,
          fontWeight: 700,
          color: trendColor[r.t]
        }
      }, r.trend)
    }]
  })));
}
function CompanyScreen() {
  const {
    SgButton,
    SgCard,
    SgSideList,
    SgInput,
    SgSelect,
    SgSwitch
  } = SG;
  const [tab, setTab] = React.useState("identity");
  const fields = [["Legal name", "Cairo Language Center LLC"], ["Display name", "Cairo Language Center"], ["Primary contact", "Omar Khaled"], ["Contact email", "admin@cairolang.com"], ["Phone", "+20 100 234 5567"], ["Tax / VAT number", "100-234-556"], ["Country", "Egypt"], ["Time zone", "Africa/Cairo (GMT+3)"]];
  const [toggles, setToggles] = React.useState([true, true, false]);
  const tl = [["Students may self-enrol with an invite link", "Seats are still counted against the plan"], ["Block sessions when a student passes their tier", "Off means the workspace wallet absorbs the overage"], ["Weekly progress digest to group teachers", "Sent Monday 08:00 local time"]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Company profile",
    subtitle: "Workspace identity, contact details and defaults for new students."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "220px 1fr",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(SgSideList, {
    variant: "tab",
    value: tab,
    onChange: setTab,
    items: [["identity", "Identity & contact"], ["defaults", "Student defaults"], ["branding", "Branding"], ["languages", "Languages"], ["integrations", "Integrations"]].map(([id, label]) => ({
      id,
      label
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(SgCard, {
    title: "Identity",
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      alignItems: "center",
      paddingBottom: 20,
      marginBottom: 20,
      borderBottom: "1px solid var(--sg-divider)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 16,
      background: "var(--sg-primary-soft)",
      border: "1px dashed var(--sg-primary-border-strong)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 11,
      fontWeight: 600,
      color: "var(--sg-purple-muted)",
      textAlign: "center",
      lineHeight: 1.3
    }
  }, "Logo", /*#__PURE__*/React.createElement("br", null), "256px"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "Workspace logo"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      marginTop: 4
    }
  }, "SVG or PNG, square, at least 256\xD7256. Shown to students in the app."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(SgButton, {
    variant: "secondary",
    size: "sm"
  }, "Upload"), /*#__PURE__*/React.createElement(SgButton, {
    variant: "tertiary",
    size: "sm"
  }, "Remove")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18
    }
  }, fields.map(([l, v]) => /*#__PURE__*/React.createElement(SgInput, {
    key: l,
    label: l,
    defaultValue: v
  })))), /*#__PURE__*/React.createElement(SgCard, {
    title: "Defaults for new students",
    description: "Applied on enrolment unless overridden.",
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(SgSelect, {
    label: "Consumption tier",
    value: "Regular \xB7 20 hrs"
  }), /*#__PURE__*/React.createElement(SgSelect, {
    label: "Course",
    value: "General English"
  }), /*#__PURE__*/React.createElement(SgSelect, {
    label: "Interface language",
    value: "English (EN)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      marginTop: 22,
      paddingTop: 18,
      borderTop: "1px solid var(--sg-divider)"
    }
  }, tl.map(([l, n], i) => /*#__PURE__*/React.createElement(SgSwitch, {
    key: l,
    label: l,
    note: n,
    on: toggles[i],
    onChange: v => setToggles(t => t.map((x, j) => j === i ? v : x))
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(SgButton, {
    variant: "secondary"
  }, "Discard"), /*#__PURE__*/React.createElement(SgButton, null, "Save changes")))));
}
function ProfileScreen({
  persona
}) {
  const {
    SgButton,
    SgCard,
    SgAvatar,
    SgInput,
    SgSwitch,
    SgBadge
  } = SG;
  const teacher = persona === "Teacher";
  const [n, setN] = React.useState([true, true, true, false]);
  const notes = [["Wallet running low", "Below 7 days of hours at current usage", "Email · in-app"], ["Student passes their tier", "Immediate, per student", "In-app"], ["Report ready", "When a requested report finishes", "Email"], ["Weekly workspace digest", "Monday morning summary", "Email"]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "My profile",
    subtitle: "Your account, security and notification preferences."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(SgCard, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      alignItems: "center",
      paddingBottom: 20,
      marginBottom: 20,
      borderBottom: "1px solid var(--sg-divider)"
    }
  }, /*#__PURE__*/React.createElement(SgAvatar, {
    initials: teacher ? "NH" : "AU",
    size: 64,
    variant: "brand"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700
    }
  }, teacher ? "Nour Hassan" : "Admin User"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--sg-ink-muted)",
      marginTop: 3
    }
  }, teacher ? "Teacher" : "Admin · Cairo Language Center"), /*#__PURE__*/React.createElement(SgButton, {
    variant: "secondary",
    size: "sm",
    style: {
      marginTop: 10
    }
  }, "Change photo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(SgInput, {
    label: "Full name",
    defaultValue: teacher ? "Nour Hassan" : "Admin User"
  }), /*#__PURE__*/React.createElement(SgInput, {
    label: "Email",
    defaultValue: teacher ? "nour@cairolang.com" : "admin@cairolang.com"
  }), /*#__PURE__*/React.createElement(SgInput, {
    label: "Job title",
    defaultValue: teacher ? "Senior teacher" : "Operations lead"
  }), /*#__PURE__*/React.createElement(SgInput, {
    label: "Interface language",
    defaultValue: "English (EN)"
  }))), /*#__PURE__*/React.createElement(SgCard, {
    title: "Notifications",
    padding: 24
  }, notes.map(([l, no, ch], i) => /*#__PURE__*/React.createElement(SgSwitch, {
    key: l,
    label: l,
    note: no,
    trailing: ch,
    on: n[i],
    onChange: v => setN(s => s.map((x, j) => j === i ? v : x)),
    style: {
      borderBottom: "1px solid var(--sg-canvas)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(SgCard, {
    title: "Security",
    description: "Last password change 4 months ago"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(SgButton, {
    variant: "secondary",
    fullWidth: true,
    style: {
      height: 38
    }
  }, "Change password"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      padding: "12px 14px",
      border: "1px solid var(--sg-border-soft)",
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, "Two-factor auth"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      marginTop: 2
    }
  }, "Authenticator app")), /*#__PURE__*/React.createElement(SgSwitch, {
    on: true
  })))), /*#__PURE__*/React.createElement(SgCard, {
    title: "Active sessions"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, [["Chrome · macOS", "Cairo, EG · active now", true], ["Safari · iPhone", "Cairo, EG · 3 hours ago"], ["Chrome · Windows", "Alexandria, EG · Aug 12"]].map(([d, m, cur]) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      marginTop: 2
    }
  }, m)), cur ? /*#__PURE__*/React.createElement(SgBadge, {
    tone: "success",
    size: "sm",
    caps: true
  }, "This device") : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--sg-danger)",
      cursor: "pointer"
    }
  }, "Revoke"))))), /*#__PURE__*/React.createElement(SgCard, {
    tone: "danger",
    title: "Leave workspace",
    description: "You will lose access to Cairo Language Center immediately. Another admin must re-invite you."
  }, /*#__PURE__*/React.createElement(SgButton, {
    variant: "danger",
    size: "md"
  }, "Leave workspace")))));
}
Object.assign(window, {
  UsersScreen,
  UserDetailScreen,
  ReportsScreen,
  ReportDetailScreen,
  CompanyScreen,
  ProfileScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-dashboard/AdminScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin-dashboard/App.jsx
try { (() => {
const ADMIN_NAV = [{
  group: "Overview",
  items: [{
    id: "dashboard",
    label: "Dashboard"
  }]
}, {
  group: "Teaching",
  items: [{
    id: "course",
    label: "Courses"
  }, {
    id: "groups",
    label: "Groups"
  }, {
    id: "students",
    label: "Students"
  }]
}, {
  group: "Insights",
  items: [{
    id: "reports",
    label: "Reports"
  }, {
    id: "consumption",
    label: "Consumption"
  }]
}, {
  group: "Administration",
  items: [{
    id: "users",
    label: "Users"
  }, {
    id: "roles",
    label: "Roles & permissions"
  }, {
    id: "billing",
    label: "Billing"
  }, {
    id: "company",
    label: "Company profile"
  }]
}, {
  group: "Reference",
  items: [{
    id: "patterns",
    label: "Platform patterns"
  }]
}];
const TEACHER_NAV = [{
  group: "Overview",
  items: [{
    id: "teaching",
    label: "My groups"
  }]
}, {
  group: "Teaching",
  items: [{
    id: "students",
    label: "Students"
  }, {
    id: "course",
    label: "Course content"
  }]
}];
const CRUMBS = {
  dashboard: ["Overview", "Dashboard"],
  roles: ["Administration", "Roles & permissions"],
  students: ["Teaching", "Students"],
  studentDetail: ["Students", "Mahmoud Youssef"],
  course: ["Teaching", "General English"],
  groups: ["Teaching", "Groups"],
  groupDetail: ["Groups", "A2 Morning"],
  teaching: ["Overview", "My groups"],
  consumption: ["Insights", "Consumption"],
  billing: ["Administration", "Billing"],
  users: ["Administration", "Users"],
  userDetail: ["Users", "Nour Hassan"],
  reports: ["Insights", "Reports"],
  reportDetail: ["Reports", "Student progress"],
  company: ["Administration", "Company profile"],
  profile: ["Account", "My profile"],
  patterns: ["Reference", "Platform patterns"]
};
const LANGS = [{
  value: "en",
  label: "English",
  short: "EN",
  dir: "ltr"
}, {
  value: "ar",
  label: "العربية",
  short: "AR",
  dir: "rtl"
}];
const PARENT = {
  studentDetail: "students",
  groupDetail: "groups",
  userDetail: "users",
  reportDetail: "reports"
};
function App() {
  const hash = location.hash.slice(1);
  const embed = /[?&]embed/.test(location.search);
  const saved = embed ? null : localStorage.getItem("sg-kit-screen");
  const [screen, setScreen] = React.useState(hash || saved || "roles");
  const [persona, setPersona] = React.useState(hash === "teaching" ? "Teacher" : "Admin");
  const params = new URLSearchParams(location.search);
  const [theme, setTheme] = React.useState(params.get("theme") || (embed ? null : localStorage.getItem("sg-kit-theme")) || "light");
  const [lang, setLang] = React.useState(params.get("lang") || (embed ? null : localStorage.getItem("sg-kit-lang")) || "en");
  React.useEffect(() => {
    const h = document.documentElement;
    h.setAttribute("data-theme", theme);
    h.dir = lang === "ar" ? "rtl" : "ltr";
    h.lang = lang;
    window.SG_I18N.setLang(lang, document.getElementById("root"));
    if (!embed) {
      localStorage.setItem("sg-kit-theme", theme);
      localStorage.setItem("sg-kit-lang", lang);
    }
  }, [theme, lang]);
  React.useEffect(() => {
    const h = () => location.hash.slice(1) && setScreen(location.hash.slice(1));
    window.addEventListener("hashchange", h);
    return () => window.removeEventListener("hashchange", h);
  }, []);
  const [flow, setFlow] = React.useState(null);
  const [bell, setBell] = React.useState(false);
  const [notif, setNotif] = React.useState(null);
  const [ws, setWs] = React.useState("clc");
  const [toast, setToast] = React.useState(null);
  const go = s => {
    setScreen(s);
    if (!embed) localStorage.setItem("sg-kit-screen", s);
    window.scrollTo(0, 0);
  };
  const showToast = (title, description) => {
    setToast({
      title,
      description
    });
    setTimeout(() => setToast(null), 2600);
  };
  const teacher = persona === "Teacher";
  const props = {
    go,
    open: setFlow,
    toast: showToast,
    persona
  };
  const S = {
    dashboard: DashboardScreen,
    roles: RolesScreen,
    students: StudentsScreen,
    studentDetail: StudentDetailScreen,
    course: CourseScreen,
    groups: GroupsScreen,
    groupDetail: GroupDetailScreen,
    teaching: TeachingScreen,
    consumption: ConsumptionScreen,
    billing: BillingScreen,
    users: UsersScreen,
    userDetail: UserDetailScreen,
    reports: ReportsScreen,
    reportDetail: ReportDetailScreen,
    company: CompanyScreen,
    profile: ProfileScreen,
    patterns: PatternsScreen
  }[screen] || RolesScreen;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      minHeight: "100vh",
      background: "var(--sg-canvas)",
      color: "var(--sg-ink)"
    }
  }, /*#__PURE__*/React.createElement(SG.SgSidebar, {
    groups: teacher ? TEACHER_NAV : ADMIN_NAV,
    active: PARENT[screen] || screen,
    onNavigate: go,
    style: {
      position: "sticky",
      top: 0,
      height: "100vh"
    },
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(WorkspaceSwitcher, {
      current: ws,
      onSwitch: setWs
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.1em",
        color: "var(--sg-ink-muted)",
        padding: "0 4px 8px"
      }
    }, "VIEWING AS"), /*#__PURE__*/React.createElement(SG.SgTabs, {
      variant: "segment",
      fullWidth: true,
      items: ["Admin", "Teacher"],
      value: persona,
      onChange: p => {
        setPersona(p);
        go(p === "Teacher" ? "teaching" : "dashboard");
      }
    })))
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(SG.SgTopbar, {
    crumbs: CRUMBS[screen] || ["Overview", screen],
    onUserClick: () => go("profile"),
    language: lang,
    onLanguageChange: setLang,
    languages: LANGS,
    actions: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(SG.SgButton, {
      variant: "secondary",
      size: "sm",
      iconOnly: true,
      onClick: () => setBell(!bell),
      style: {
        height: 34,
        width: 34,
        borderRadius: 9
      }
    }, "!"), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 6,
        insetInlineEnd: 6,
        width: 7,
        height: 7,
        borderRadius: 999,
        background: "var(--sg-danger-solid)",
        pointerEvents: "none"
      }
    }), bell ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 42,
        insetInlineEnd: 0,
        zIndex: 40
      }
    }, /*#__PURE__*/React.createElement(NotificationsDropdown, {
      onOpen: n => {
        setBell(false);
        setNotif(n);
      }
    })) : null), /*#__PURE__*/React.createElement(SG.SgButton, {
      variant: "secondary",
      size: "sm",
      iconOnly: true,
      onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
      style: {
        height: 34,
        width: 34,
        borderRadius: 9
      }
    }, theme === "dark" ? "☀" : "☾")),
    user: teacher ? {
      name: "Nour Hassan",
      role: "Teacher",
      initials: "NH"
    } : {
      name: "Admin User",
      role: "Admin · Cairo Language Center",
      initials: "AU"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "28px 32px 64px",
      maxWidth: "var(--sg-content-max)",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(S, props))), embed ? null : /*#__PURE__*/React.createElement(FlowsMenu, {
    onOpen: setFlow,
    active: flow
  }), flow ? /*#__PURE__*/React.createElement(FlowModal, {
    flowKey: flow,
    onClose: () => setFlow(null),
    onDone: f => {
      setFlow(null);
      showToast(f.title + " — done", "Prototype only; nothing was saved.");
    }
  }) : null, notif ? /*#__PURE__*/React.createElement(NotificationDrawer, {
    onClose: () => setNotif(null)
  }) : null, toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      insetInlineEnd: 24,
      top: 80,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(SG.SgToast, {
    title: toast.title,
    description: toast.description
  })) : null);
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-dashboard/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin-dashboard/Common.jsx
try { (() => {
const SG = window.SpeakingGenieDesignSystem_9bb41a;
function PageHeader({
  title,
  subtitle,
  actions,
  badge
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 24,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: "-0.02em"
    }
  }, title), badge), subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      fontSize: 14,
      color: "var(--sg-ink-muted)"
    }
  }, subtitle) : null), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexShrink: 0
    }
  }, actions) : null);
}
function PersonCell({
  initials,
  name,
  email,
  size = 30
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(SG.SgAvatar, {
    initials: initials,
    size: size
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--sg-ink)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, name), email ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, email) : null));
}
function TwoLine({
  a,
  b
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--sg-ink)"
    }
  }, a), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      marginTop: 2
    }
  }, b));
}
function Toolbar({
  placeholder,
  filters = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(SG.SgInput, {
    prefix: "\u2315",
    placeholder: placeholder,
    style: {
      flex: 1
    }
  }), filters.map(f => /*#__PURE__*/React.createElement(SG.SgSelect, {
    key: f,
    variant: "filter",
    value: f
  })));
}
const scoreTone = s => s >= 75 ? "success" : s >= 62 ? "warning" : "danger";
Object.assign(window, {
  SG,
  PageHeader,
  PersonCell,
  TwoLine,
  Toolbar,
  scoreTone
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-dashboard/Common.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin-dashboard/CourseScreen.jsx
try { (() => {
function CourseScreen({
  open
}) {
  const {
    SgButton,
    SgSideList,
    SgCard,
    SgBreadcrumbs,
    SgTag,
    SgInput,
    SgField
  } = SG;
  const D = window.SG_DATA;
  const [levelId, setLevelId] = React.useState("a2");
  const [contentId, setContentId] = React.useState("vocab");
  const level = D.levels.find(l => l.id === levelId);
  const content = D.content[contentId];
  const order = [["goals", "Goals & KPIs"], ["vocab", "Vocabulary & idioms"], ["tasks", "Conversational tasks"], ["cards", "Flashcards"], ["scenarios", "Real-life scenarios"]];
  const sub = /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "4px 0 8px",
      paddingInlineStart: 32,
      display: "flex",
      flexDirection: "column",
      gap: 1
    }
  }, order.map(([id, label]) => {
    const a = id === contentId;
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      onClick: () => setContentId(id),
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
        padding: "7px 10px",
        borderRadius: 8,
        background: a ? "var(--sg-primary-soft-2)" : "transparent",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: a ? 700 : 500,
        color: a ? "var(--sg-primary-ink)" : "var(--sg-ink-2)"
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: a ? 600 : 400,
        color: a ? "var(--sg-purple-400)" : "var(--sg-ink-muted)"
      }
    }, D.content[id].count));
  }));
  const iconBtn = g => /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      border: "1px solid var(--sg-border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 13,
      color: "var(--sg-ink-muted)",
      cursor: "pointer"
    },
    onClick: () => open(content.form)
  }, g);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "General English",
    subtitle: "5 levels \xB7 45 students \xB7 English \xB7 updated 2 days ago",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SgButton, {
      variant: "soft"
    }, "Generate with AI"), /*#__PURE__*/React.createElement(SgButton, {
      variant: "secondary",
      onClick: () => open("course.create")
    }, "Course settings"), /*#__PURE__*/React.createElement(SgButton, null, "Publish changes"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "300px 1fr",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--sg-surface)",
      border: "1px solid var(--sg-border)",
      borderRadius: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 18px 12px",
      borderBottom: "1px solid var(--sg-divider)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--sg-ink-muted)"
    }
  }, "Outline"), /*#__PURE__*/React.createElement("div", {
    onClick: () => open("level.create"),
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--sg-link)",
      cursor: "pointer"
    }
  }, "+ Level")), /*#__PURE__*/React.createElement(SgSideList, {
    variant: "outline",
    value: levelId,
    onChange: setLevelId,
    style: {
      border: 0,
      borderRadius: 0
    },
    items: D.levels.map(l => ({
      id: l.id,
      code: l.code,
      label: l.name,
      meta: l.meta,
      children: sub
    }))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(SgCard, {
    flush: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 20,
      padding: "20px 24px 18px",
      borderBottom: "1px solid var(--sg-divider)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SgBreadcrumbs, {
    size: 12,
    items: ["General English", level.name]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      marginTop: 7
    }
  }, content.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--sg-ink-muted)",
      marginTop: 4
    }
  }, content.hint)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(SgButton, {
    variant: "secondary",
    size: "md"
  }, "Import CSV"), /*#__PURE__*/React.createElement(SgButton, {
    size: "md",
    onClick: () => open(content.form)
  }, content.action))), content.items.map(([t, s, tag], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "16px 24px",
      borderBottom: "1px solid var(--sg-divider-row)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 8,
      background: "var(--sg-primary-soft)",
      color: "var(--sg-link)",
      fontSize: 11,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      marginTop: 3
    }
  }, s)), /*#__PURE__*/React.createElement(SgTag, {
    style: {
      padding: "4px 9px"
    }
  }, tag), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, iconBtn("✎"), iconBtn("⋯")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 24px",
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--sg-ink-muted)"
    }
  }, content.count, " items in ", level.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--sg-link)",
      cursor: "pointer"
    }
  }, "Reorder"))), /*#__PURE__*/React.createElement(SgCard, {
    title: "Level settings · " + level.name,
    description: "Applied to every speaking task generated at this level."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(SgInput, {
    size: "md",
    label: "Max output words",
    defaultValue: level.words,
    key: "w" + levelId
  }), /*#__PURE__*/React.createElement(SgInput, {
    size: "md",
    label: "Speaking speed",
    defaultValue: level.speed,
    key: "s" + levelId
  }), /*#__PURE__*/React.createElement(SgField, {
    label: "Students at level"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 38,
      display: "flex",
      alignItems: "center",
      fontSize: 14,
      fontWeight: 600
    }
  }, level.students))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      paddingTop: 18,
      borderTop: "1px solid var(--sg-divider)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 10
    }
  }, "Goals"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, level.goals.map(g => /*#__PURE__*/React.createElement(SgTag, {
    key: g,
    variant: "goal",
    style: {
      maxWidth: 420
    }
  }, g)), /*#__PURE__*/React.createElement(SgTag, {
    variant: "add",
    onClick: () => {}
  }, "+ Add goal")))))));
}
window.CourseScreen = CourseScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-dashboard/CourseScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin-dashboard/DashboardScreen.jsx
try { (() => {
function DashboardScreen({
  go,
  open
}) {
  const {
    SgButton,
    SgAlert,
    SgMetricCard,
    SgCard,
    SgBarChart,
    SgAvatar
  } = SG;
  const weeks = [[78, 62], [80, 71], [86, 84], [88, 78], [94, 92], [96, 96], [98, 88], [98, 41]].map((v, i) => ({
    label: "W" + (i + 1),
    values: v
  }));
  const attention = [["Students over their tier", "Sessions blocked until recharge", "3", "var(--sg-danger-solid)", "consumption"], ["Sessions awaiting feedback", "Oldest is 6 days old", "24", "var(--sg-warning-solid)", "teaching"], ["Invites not accepted", "Sent more than 7 days ago", "2", "var(--sg-warning-solid)", "users"], ["Levels with no content", "Level B2 has no scenarios", "1", "var(--sg-info-solid)", "course"]];
  const activity = [["OK", "Omar Khaled added 12 students to A2 Morning", "35 minutes ago"], ["NH", "Nour Hassan reviewed 5 sessions in B1 Evening", "2 hours ago"], ["AU", "You created the Finance role with 4 permissions", "Yesterday, 16:20"], ["SF", "Sara Fouad downloaded the July consumption report", "Aug 16"]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Good morning, Admin",
    subtitle: "Cairo Language Center \xB7 359 students \xB7 Enterprise plan",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SgButton, {
      variant: "secondary"
    }, "Last 30 days ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: "var(--sg-ink-muted)"
      }
    }, "\u25BE")), /*#__PURE__*/React.createElement(SgButton, {
      onClick: () => open("student.create")
    }, "Add student"))
  }), /*#__PURE__*/React.createElement(SgAlert, {
    layout: "banner",
    tone: "warning",
    title: "Hour wallet is empty.",
    description: "Recharge to resume speaking sessions \u2014 3 students are already blocked.",
    action: /*#__PURE__*/React.createElement(SgButton, {
      variant: "warning",
      size: "md",
      style: {
        height: 34
      },
      onClick: () => open("billing.recharge")
    }, "Recharge hours"),
    style: {
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(SgMetricCard, {
    label: "Active students",
    value: "359",
    note: "\u2191 12 this month",
    noteTone: "success"
  }), /*#__PURE__*/React.createElement(SgMetricCard, {
    label: "Hours delivered",
    value: "4,092",
    note: "\u2191 8% vs July",
    noteTone: "success"
  }), /*#__PURE__*/React.createElement(SgMetricCard, {
    label: "Avg completion",
    value: "72%",
    note: "\u2193 3 pts vs July",
    noteTone: "warning"
  }), /*#__PURE__*/React.createElement(SgMetricCard, {
    label: "Tasks reviewed",
    value: "63/87",
    note: "24 awaiting a teacher",
    noteTone: "warning"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(SgCard, {
    title: "Speaking hours per week",
    description: "Delivered across all groups",
    actions: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        fontSize: 12,
        color: "var(--sg-ink-muted)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        display: "inline-block",
        width: 8,
        height: 8,
        borderRadius: 2,
        background: "var(--sg-primary)"
      }
    }), "Hours used"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        display: "inline-block",
        width: 8,
        height: 8,
        borderRadius: 2,
        background: "var(--sg-chart-muted)"
      }
    }), "Tier ceiling"))
  }, /*#__PURE__*/React.createElement(SgBarChart, {
    data: weeks,
    series: [{
      label: "Tier ceiling",
      color: "var(--sg-chart-muted)"
    }, {
      label: "Hours used",
      color: "var(--sg-link)"
    }],
    height: 160
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(SgCard, {
    title: "Needs attention",
    description: "Ranked by urgency",
    padding: "20px 22px"
  }, attention.map(([t, n, c, color, to]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    onClick: () => go(to),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "11px 10px",
      margin: "0 -10px",
      borderRadius: 10,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 3,
      height: 30,
      borderRadius: 999,
      background: color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      marginTop: 2
    }
  }, n)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color,
      fontVariantNumeric: "tabular-nums"
    }
  }, c)))), /*#__PURE__*/React.createElement(SgCard, {
    title: "Recent activity",
    padding: "20px 22px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, activity.map(([i, t, w]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(SgAvatar, {
    initials: i,
    size: 26
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.45
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--sg-ink-muted)",
      marginTop: 3
    }
  }, w)))))))));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-dashboard/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin-dashboard/Flows.jsx
try { (() => {
const FLOWS = {
  "role.create": {
    overline: "Roles & permissions",
    title: "Create role",
    subtitle: "Start from a baseline, then grant permissions on the role page.",
    submit: "Create role",
    width: 560,
    footnote: "You will land on the role's permission editor after creating it.",
    body: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Role name",
      defaultValue: "Head of academics"
    }), /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Key",
      value: "head-of-academics",
      readOnly: true,
      hint: "Generated from the name. Used in the API and cannot change later."
    }), /*#__PURE__*/React.createElement(Radio, {
      label: "Start from",
      init: "manager",
      options: [{
        value: "none",
        label: "No permissions",
        note: "Grant everything manually"
      }, {
        value: "manager",
        label: "Copy Center manager",
        note: "14 permissions"
      }, {
        value: "teacher",
        label: "Copy Teacher",
        note: "5 permissions"
      }]
    }), /*#__PURE__*/React.createElement(SG.SgTextarea, {
      label: "Description",
      defaultValue: "Owns course content and level progression across both courses."
    }))
  },
  "user.invite": {
    overline: "Users",
    title: "Invite user",
    subtitle: "They receive an email link valid for 7 days.",
    submit: "Send invite",
    width: 560,
    footnote: "Seats: 5 of 25 used. Invited users occupy a seat once they accept.",
    body: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Work email",
      defaultValue: "youssef@cairolang.com"
    }), /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Full name",
      defaultValue: "Youssef Tarek"
    }), /*#__PURE__*/React.createElement(SG.SgSelect, {
      label: "Role",
      value: "Teacher"
    })), /*#__PURE__*/React.createElement(Chips, {
      label: "Assign to groups",
      init: ["A2 Morning", "Corporate A1"],
      options: ["A2 Morning", "B1 Evening", "Corporate A1", "Pre-A1 Intensive"]
    }), /*#__PURE__*/React.createElement(Toggle, {
      label: "Send a welcome message with the invite",
      init: true
    }))
  },
  "student.create": {
    overline: "Students",
    title: "Add student",
    subtitle: "Enrol one student. Use Import CSV for a cohort.",
    submit: "Add student",
    width: 620,
    footnote: "Hours are drawn from the workspace wallet, capped by the student's tier.",
    body: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Full name",
      defaultValue: "Layla Samir"
    }), /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Email",
      defaultValue: "layla.samir@gmail.com"
    })), /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(SG.SgSelect, {
      label: "Course",
      value: "General English"
    }), /*#__PURE__*/React.createElement(SG.SgSelect, {
      label: "Starting level",
      value: "Level A2: Basic User"
    })), /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(SG.SgSelect, {
      label: "Consumption tier",
      value: "Regular \xB7 20 hrs/mo"
    }), /*#__PURE__*/React.createElement(SG.SgSelect, {
      label: "Group",
      value: "A2 Morning"
    })), /*#__PURE__*/React.createElement(Toggle, {
      label: "Run a placement task before assigning a level"
    }), /*#__PURE__*/React.createElement(Toggle, {
      label: "Email the app invite now",
      init: true
    }))
  },
  "student.edit": {
    overline: "Students",
    title: "Edit student",
    subtitle: "Mahmoud Youssef · enrolled Aug 18, 2026",
    submit: "Save changes",
    width: 620,
    danger: "Delete student",
    body: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Full name",
      defaultValue: "Mahmoud Youssef"
    }), /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Email",
      defaultValue: "mahmoudyoussef100100@gmail.com"
    })), /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(SG.SgSelect, {
      label: "Level",
      value: "Level A2: Basic User",
      hint: "Moving a level keeps completed tasks in history."
    }), /*#__PURE__*/React.createElement(SG.SgSelect, {
      label: "Consumption tier",
      value: "Regular \xB7 20 hrs/mo",
      hint: "6.8 hrs already used this month."
    })), /*#__PURE__*/React.createElement(Toggle, {
      label: "Reset this month's hour usage"
    }))
  },
  "group.create": {
    overline: "Groups",
    title: "Create group",
    subtitle: "A group pairs a course level with a teacher and a cohort.",
    submit: "Create group",
    width: 620,
    footnote: "Students are added after the group exists, from the Students table or the group page.",
    body: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Group name",
      defaultValue: "A2 Evening"
    }), /*#__PURE__*/React.createElement(SG.SgSelect, {
      label: "Teacher",
      value: "Nour Hassan"
    })), /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(SG.SgSelect, {
      label: "Course",
      value: "General English"
    }), /*#__PURE__*/React.createElement(SG.SgSelect, {
      label: "Level",
      value: "Level A2: Basic User"
    })), /*#__PURE__*/React.createElement(Chips, {
      label: "Days",
      init: ["Sun", "Tue", "Thu"],
      options: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    }), /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Capacity",
      defaultValue: "15",
      numeric: true,
      hint: "Enrolment is blocked past capacity."
    }), /*#__PURE__*/React.createElement(SG.SgSelect, {
      label: "Term",
      value: "Sep 2026 \u2013 Dec 2026"
    })))
  },
  "course.create": {
    overline: "Courses",
    title: "Add course",
    subtitle: "Levels and content are added next.",
    submit: "Create course",
    width: 580,
    body: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Course name",
      defaultValue: "Business English"
    }), /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(SG.SgSelect, {
      label: "Language",
      value: "English"
    }), /*#__PURE__*/React.createElement(SG.SgSelect, {
      label: "Level framework",
      value: "CEFR \xB7 Pre-A1 to C2"
    })), /*#__PURE__*/React.createElement(Chips, {
      label: "Target audiences",
      init: ["Students", "Professionals", "Business"],
      options: ["Students", "Professionals", "General", "Business"]
    }), /*#__PURE__*/React.createElement(Toggle, {
      label: "Create the framework's levels automatically",
      note: "Six empty levels with CEFR goals and KPIs pre-filled.",
      init: true
    }))
  },
  "level.create": {
    overline: "Courses",
    title: "Add level",
    subtitle: "General English · inserted after Level A2",
    submit: "Add level",
    width: 560,
    footnote: "KPIs (range, accuracy, fluency) are inherited from the framework and editable per level.",
    body: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Level name",
      defaultValue: "Level B1: Independent User"
    }), /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Max output words",
      defaultValue: "90",
      numeric: true,
      hint: "Caps the length of AI turns."
    }), /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Speaking speed",
      defaultValue: "0.8",
      numeric: true,
      hint: "1.0 is native pace."
    })), /*#__PURE__*/React.createElement(SG.SgTextarea, {
      label: "Goals \u2014 one per line",
      defaultValue: "Deal with most situations while travelling.\nConnect phrases to describe experiences and plans."
    }))
  },
  "content.vocab": {
    overline: "Courses · content",
    title: "Add vocabulary entry",
    subtitle: "General English · Level A2",
    submit: "Add entry",
    width: 580,
    footnote: "Entries feed both flashcards and the lexis targets of conversational tasks.",
    body: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Term or idiom",
      defaultValue: "on a tight budget"
    }), /*#__PURE__*/React.createElement(SG.SgSelect, {
      label: "Type",
      value: "Idiom"
    })), /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Meaning",
      defaultValue: "with little money to spend"
    }), /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Translation (AR)",
      defaultValue: "\u0628\u0645\u064A\u0632\u0627\u0646\u064A\u0629 \u0645\u062D\u062F\u0648\u062F\u0629"
    }), /*#__PURE__*/React.createElement(Toggle, {
      label: "Generate reference audio at level speed",
      init: true
    }))
  },
  "content.task": {
    overline: "Courses · content",
    title: "Add conversational task",
    subtitle: "General English · Level A2",
    submit: "Save task",
    width: 560,
    drawer: true,
    body: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Task title",
      defaultValue: "Disagree politely with a colleague"
    }), /*#__PURE__*/React.createElement(Radio, {
      label: "Format",
      init: "rp",
      options: [{
        value: "mono",
        label: "Monologue",
        note: "Student speaks alone against a prompt"
      }, {
        value: "rp",
        label: "Role-play",
        note: "AI takes a persona and responds"
      }, {
        value: "pic",
        label: "Picture prompt",
        note: "Describe an image"
      }]
    }), /*#__PURE__*/React.createElement(SG.SgTextarea, {
      label: "Prompt given to the student",
      defaultValue: "Your colleague suggests moving the deadline forward. You disagree. Explain why and propose an alternative."
    }), /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Target duration (seconds)",
      defaultValue: "90",
      numeric: true
    }), /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Minimum turns",
      defaultValue: "4",
      numeric: true
    })), /*#__PURE__*/React.createElement(Chips, {
      label: "Scored on",
      init: ["Range", "Accuracy", "Fluency"],
      options: ["Range", "Accuracy", "Fluency", "Pronunciation"]
    }), /*#__PURE__*/React.createElement(Toggle, {
      label: "Send to the group teacher for feedback after each attempt",
      init: true
    }))
  },
  "tier.create": {
    overline: "Consumption",
    title: "New consumption tier",
    subtitle: "A monthly hour ceiling you can assign to students.",
    submit: "Create tier",
    width: 520,
    footnote: "Changing a tier's ceiling applies from the next billing month.",
    body: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Tier name",
      defaultValue: "Intensive plus"
    }), /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Monthly hours",
      defaultValue: "80",
      numeric: true
    })), /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(SG.SgSelect, {
      label: "Marker colour",
      value: "Purple"
    }), /*#__PURE__*/React.createElement(SG.SgSelect, {
      label: "Unused hours",
      value: "Do not roll over"
    })), /*#__PURE__*/React.createElement(Toggle, {
      label: "Make this the default tier for new students"
    }))
  },
  "report.request": {
    overline: "Reports",
    title: "Request report",
    subtitle: "Ready reports appear in History and can be emailed.",
    submit: "Request report",
    width: 580,
    body: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Radio, {
      label: "Report",
      init: "sp",
      options: [{
        value: "sp",
        label: "Student progress",
        note: "Levels, tasks and KPI trend"
      }, {
        value: "gs",
        label: "Group summary",
        note: "Cohort completion and scores"
      }, {
        value: "c",
        label: "Consumption",
        note: "Hours used against tier"
      }]
    }), /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(SG.SgSelect, {
      label: "Target",
      value: "Mahmoud Youssef"
    }), /*#__PURE__*/React.createElement(SG.SgSelect, {
      label: "Date range",
      value: "Last 30 days"
    })), /*#__PURE__*/React.createElement(Toggle, {
      label: "Email me when it is ready",
      init: true
    }))
  },
  "billing.recharge": {
    overline: "Billing",
    title: "Recharge hours",
    subtitle: "Hours land in the workspace wallet immediately.",
    submit: "Pay E£45,000",
    width: 480,
    footnote: "An invoice is issued to Cairo Language Center LLC, VAT 100-234-556.",
    body: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Hours",
      defaultValue: "1,000",
      numeric: true,
      hint: "At the current usage of 15.3 hrs/day this lasts about 65 days."
    }), /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Rate per hour",
      value: "E\xA345",
      readOnly: true
    }), /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Total",
      value: "E\xA345,000",
      readOnly: true
    })), /*#__PURE__*/React.createElement(SG.SgSelect, {
      label: "Payment method",
      value: "Visa \xB7\xB7\xB7\xB7 4417"
    }), /*#__PURE__*/React.createElement(Toggle, {
      label: "Auto-recharge when the wallet drops below 100 hours"
    }))
  },
  "level.delete": {
    overline: "Courses",
    title: "Delete Level A2?",
    subtitle: "This cannot be undone.",
    submit: "Delete level",
    width: 460,
    destructive: true,
    footnote: "Type the level name to confirm in the real product.",
    body: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Students at this level",
      value: "12",
      readOnly: true
    }), /*#__PURE__*/React.createElement(SG.SgInput, {
      label: "Content items",
      value: "48 vocab \xB7 12 tasks",
      readOnly: true
    })), /*#__PURE__*/React.createElement(SG.SgSelect, {
      label: "Move affected students to",
      value: "Level A1: Basic User",
      hint: "Their completed tasks stay in history and in reports."
    }))
  }
};
function Grid({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, children);
}
function Toggle({
  label,
  note,
  init = false
}) {
  const [on, setOn] = React.useState(init);
  return /*#__PURE__*/React.createElement(SG.SgSwitch, {
    boxed: true,
    label: label,
    note: note,
    on: on,
    onChange: setOn
  });
}
function Radio({
  label,
  options,
  init
}) {
  const [v, setV] = React.useState(init);
  return /*#__PURE__*/React.createElement(SG.SgRadioGroup, {
    label: label,
    options: options,
    value: v,
    onChange: setV
  });
}
function Chips({
  label,
  options,
  init
}) {
  const [v, setV] = React.useState(init);
  return /*#__PURE__*/React.createElement(SG.SgChipGroup, {
    label: label,
    options: options,
    value: v,
    onChange: setV
  });
}
function FlowModal({
  flowKey,
  onClose,
  onDone
}) {
  const f = FLOWS[flowKey];
  if (!f) return null;
  return /*#__PURE__*/React.createElement(SG.SgModal, {
    open: true,
    onClose: onClose,
    overline: f.overline,
    title: f.title,
    subtitle: f.subtitle,
    width: f.width,
    placement: f.drawer ? "drawer" : "center",
    destructive: f.destructive,
    footnote: f.footnote,
    dangerLabel: f.danger,
    primaryLabel: f.submit,
    onPrimary: () => onDone(f)
  }, f.body());
}
function FlowsMenu({
  onOpen,
  active
}) {
  const [open, setOpen] = React.useState(false);
  const groups = [["Roles & permissions", [["Create role", "role.create"]]], ["Users", [["Invite user", "user.invite"]]], ["Students", [["Add student", "student.create"], ["Edit student", "student.edit"]]], ["Groups", [["Create group", "group.create"]]], ["Courses", [["Add course", "course.create"], ["Add level", "level.create"], ["Delete level", "level.delete"]]], ["Course content", [["Vocabulary entry", "content.vocab"], ["Conversational task", "content.task"]]], ["Consumption", [["New tier", "tier.create"]]], ["Reports", [["Request report", "report.request"]]], ["Billing", [["Recharge hours", "billing.recharge"]]]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      insetInlineEnd: 24,
      insetBlockEnd: 24,
      zIndex: 30,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 12
    }
  }, open ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260,
      maxHeight: "70vh",
      overflowY: "auto",
      background: "var(--sg-surface)",
      border: "1px solid var(--sg-border)",
      borderRadius: 14,
      boxShadow: "var(--sg-e-popover)",
      padding: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 12px 8px",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--sg-ink-muted)"
    }
  }, "Create & edit flows"), groups.map(([m, items]) => /*#__PURE__*/React.createElement("div", {
    key: m,
    style: {
      padding: "6px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: "var(--sg-ink-muted)",
      padding: "0 12px 5px"
    }
  }, m), items.map(([l, k]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    onClick: () => onOpen(k),
    style: {
      fontSize: 13,
      fontWeight: active === k ? 700 : 500,
      color: active === k ? "var(--sg-primary-ink)" : "var(--sg-ink-2)",
      background: active === k ? "var(--sg-primary-soft)" : "transparent",
      borderRadius: 8,
      padding: "8px 12px",
      cursor: "pointer"
    }
  }, l))))) : null, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(!open),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      height: 44,
      padding: "0 18px",
      borderRadius: 999,
      background: "var(--sg-ink)",
      color: "var(--sg-canvas)",
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer",
      boxShadow: "var(--sg-e-fab)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: "var(--sg-purple-500)"
    }
  }), "Flows"));
}
Object.assign(window, {
  FlowModal,
  FlowsMenu
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-dashboard/Flows.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin-dashboard/GroupsScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GroupsScreen({
  go,
  open
}) {
  const {
    SgButton,
    SgTable,
    SgBadge,
    SgProgress,
    SgAvatar
  } = SG;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Groups",
    subtitle: "A group pairs a course level with a teacher and a cohort of students.",
    actions: /*#__PURE__*/React.createElement(SgButton, {
      onClick: () => open("group.create")
    }, "Create group")
  }), /*#__PURE__*/React.createElement(Toolbar, {
    placeholder: "Search groups\u2026",
    filters: ["Teacher", "Status: Active"]
  }), /*#__PURE__*/React.createElement(SgTable, {
    onRowClick: () => go("groupDetail"),
    rows: window.SG_DATA.groupRows,
    footer: "5 of 5 groups",
    columns: [{
      key: "name",
      label: "Group",
      width: "1.5fr",
      render: r => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          fontWeight: 600,
          color: "var(--sg-ink)"
        }
      }, r.name), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          color: "var(--sg-ink-muted)",
          marginTop: 2
        }
      }, r.students, " students"))
    }, {
      key: "course",
      label: "Course & level",
      width: "1.6fr",
      render: r => /*#__PURE__*/React.createElement(TwoLine, {
        a: r.course,
        b: r.level
      })
    }, {
      key: "teacher",
      label: "Teacher",
      width: "1.2fr",
      render: r => /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 9
        }
      }, /*#__PURE__*/React.createElement(SgAvatar, {
        initials: r.initials,
        size: 26
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13,
          color: "var(--sg-ink)"
        }
      }, r.teacher))
    }, {
      key: "days",
      label: "Schedule",
      width: "1.4fr",
      render: r => /*#__PURE__*/React.createElement(TwoLine, {
        a: r.days,
        b: r.period
      })
    }, {
      key: "progress",
      label: "Progress",
      width: "1fr",
      render: r => /*#__PURE__*/React.createElement(SgProgress, {
        value: r.progress,
        height: 5,
        showValue: true
      })
    }, {
      key: "status",
      label: "Status",
      width: "100px",
      align: "right",
      render: r => /*#__PURE__*/React.createElement(SgBadge, {
        tone: r.tone
      }, r.status)
    }]
  }));
}
function GroupDetailScreen({
  go,
  open
}) {
  const {
    SgButton,
    SgBadge,
    SgMetricCard,
    SgTabs,
    SgTable,
    SgProgress,
    SgCard,
    SgKpiBar,
    SgBarChart,
    SgBackLink,
    SgAvatar
  } = SG;
  const [tab, setTab] = React.useState("Roster");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SgBackLink, {
    onClick: () => go("groups")
  }, "All groups"), /*#__PURE__*/React.createElement(PageHeader, {
    title: "A2 Morning",
    badge: /*#__PURE__*/React.createElement(SgBadge, {
      tone: "success"
    }, "Active"),
    subtitle: "General English \xB7 Level A2: Basic User \xB7 Nour Hassan \xB7 Sun \xB7 Tue \xB7 Thu, 09:00\u201310:30",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SgButton, {
      variant: "secondary",
      onClick: () => open("report.request")
    }, "Request report"), /*#__PURE__*/React.createElement(SgButton, {
      variant: "secondary",
      onClick: () => open("student.create")
    }, "Add students"), /*#__PURE__*/React.createElement(SgButton, {
      onClick: () => open("group.create")
    }, "Edit group"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(SgMetricCard, {
    size: "md",
    label: "Students",
    value: "12",
    note: "Capacity 15"
  }), /*#__PURE__*/React.createElement(SgMetricCard, {
    size: "md",
    label: "Avg progress",
    value: "48%",
    note: "Group median 51%"
  }), /*#__PURE__*/React.createElement(SgMetricCard, {
    size: "md",
    label: "Hours this month",
    value: "164",
    note: "13.7 avg per student"
  }), /*#__PURE__*/React.createElement(SgMetricCard, {
    size: "md",
    label: "Needs review",
    value: "3",
    valueColor: "var(--sg-warning)",
    note: "Oldest 2 days old"
  })), /*#__PURE__*/React.createElement(SgTabs, {
    items: ["Roster", "Content & pacing", "Analytics"],
    value: tab,
    onChange: setTab,
    style: {
      marginBottom: 22
    }
  }), tab === "Roster" ? /*#__PURE__*/React.createElement(SgTable, {
    onRowClick: () => go("studentDetail"),
    rows: window.SG_DATA.roster,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        padding: "14px 24px",
        fontSize: 13,
        color: "var(--sg-ink-muted)"
      }
    }, /*#__PURE__*/React.createElement("div", null, "12 students \xB7 capacity 15"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        color: "var(--sg-link)",
        cursor: "pointer"
      }
    }, "Export roster")),
    columns: [{
      key: "name",
      label: "Student",
      width: "2fr",
      render: r => /*#__PURE__*/React.createElement(PersonCell, _extends({}, r, {
        size: 30
      }))
    }, {
      key: "tier",
      label: "Tier",
      width: "1.2fr",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13,
          fontWeight: 600,
          whiteSpace: "nowrap"
        }
      }, r.tier)
    }, {
      key: "pct",
      label: "Progress",
      width: "1.4fr",
      render: r => /*#__PURE__*/React.createElement(SgProgress, {
        value: r.pct,
        height: 5,
        showValue: true
      })
    }, {
      key: "hours",
      label: "Hours",
      width: "1.2fr"
    }, {
      key: "last",
      label: "Last session",
      width: "1fr"
    }, {
      key: "flag",
      label: "Flag",
      width: "90px",
      align: "right",
      render: r => r.flag ? /*#__PURE__*/React.createElement(SgBadge, {
        tone: r.tone,
        size: "sm"
      }, r.flag) : /*#__PURE__*/React.createElement("span", {
        style: {
          color: "var(--sg-control-border)"
        }
      }, "\u2014")
    }]
  }) : tab === "Analytics" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(SgCard, {
    title: "Tasks completed per week",
    description: "Group total across 12 students"
  }, /*#__PURE__*/React.createElement(SgBarChart, {
    height: 150,
    data: [58, 74, 38, 46, 62, 81].map((v, i) => ({
      label: "W" + (i + 1),
      values: [v]
    }))
  })), /*#__PURE__*/React.createElement(SgCard, {
    title: "Average KPIs",
    description: "Group mean, last 30 days",
    padding: "20px 22px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SgKpiBar, {
    name: "Range",
    value: "74 / 100",
    pct: 74,
    note: "+4 vs last month"
  }), /*#__PURE__*/React.createElement(SgKpiBar, {
    name: "Accuracy",
    value: "66 / 100",
    pct: 66,
    note: "\u22122 vs last month"
  }), /*#__PURE__*/React.createElement(SgKpiBar, {
    name: "Fluency",
    value: "71 / 100",
    pct: 71,
    note: "+6 vs last month"
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(SgCard, {
    flush: true,
    title: "Pacing plan \xB7 Level A2",
    description: "Week 4 of 12 \xB7 content unlocks on schedule",
    actions: /*#__PURE__*/React.createElement("div", {
      onClick: () => go("course"),
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "var(--sg-link)",
        cursor: "pointer"
      }
    }, "Course content \u2192")
  }, [["W1", "Introductions & routines", "8 vocab · 2 tasks · 1 scenario", 100, "12 of 12 done", "success", "Complete"], ["W2", "Describing places", "10 vocab · 3 tasks", 92, "11 of 12 done", "success", "Complete"], ["W3", "Shopping & money", "12 vocab · 3 tasks · 1 scenario", 41, "5 of 12 done", "warning", "Behind"], ["W4", "Travel & directions", "9 vocab · 2 tasks · 1 scenario", 12, "In progress", "brand", "Current"], ["W5", "Work & colleagues", "9 vocab · 2 tasks", 0, "Unlocks Sep 8", "info", "Scheduled"]].map(([w, t, it, p, c, tone, st]) => /*#__PURE__*/React.createElement("div", {
    key: w,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "15px 20px",
      borderBottom: "1px solid var(--sg-divider-row)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.06em",
      color: "var(--sg-ink-muted)"
    }
  }, w), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      marginTop: 3
    }
  }, it)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110
    }
  }, /*#__PURE__*/React.createElement(SgProgress, {
    value: p,
    height: 5,
    tone: tone === "success" ? "success" : tone === "warning" ? "warning" : "brand"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--sg-ink-muted)",
      marginTop: 5
    }
  }, c)), /*#__PURE__*/React.createElement(SgBadge, {
    tone: tone,
    size: "sm"
  }, st)))), /*#__PURE__*/React.createElement(SgCard, {
    tone: "warning",
    title: "Pacing is 1 week behind",
    description: "Week 3 tasks are at 41% completion. Consider unlocking week 5 later or reducing the weekly task count.",
    padding: "18px 20px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "var(--sg-warning-ink)",
      marginTop: -6,
      cursor: "pointer"
    }
  }, "Adjust schedule"))));
}
function TeachingScreen({
  go
}) {
  const {
    SgButton,
    SgCard,
    SgBadge,
    SgStat,
    SgProgress,
    SgListRow,
    SgAvatar
  } = SG;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "My groups",
    subtitle: "Teacher view \u2014 progress and session feedback. Course content and billing are read-only.",
    actions: /*#__PURE__*/React.createElement(SgButton, {
      variant: "secondary"
    }, "Export progress")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
      marginBottom: 20
    }
  }, [["A2 Morning", "General English · Level A2 · Sun–Tue 9:00", "12", 48, "3"], ["B1 Evening", "General English · Level B1 · Mon–Wed 18:00", "9", 62, "1"]].map(([n, m, s, p, r]) => /*#__PURE__*/React.createElement(SgCard, {
    key: n,
    padding: "20px 22px",
    onClick: () => go("groupDetail")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--sg-ink-muted)",
      marginTop: 4
    }
  }, m)), /*#__PURE__*/React.createElement(SgBadge, {
    tone: "success"
  }, "Active")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(SgStat, {
    size: 20,
    label: "Students",
    value: s
  }), /*#__PURE__*/React.createElement(SgStat, {
    size: 20,
    label: "Avg progress",
    value: p + "%"
  }), /*#__PURE__*/React.createElement(SgStat, {
    size: 20,
    label: "Needs review",
    value: r,
    valueColor: "var(--sg-warning)"
  })), /*#__PURE__*/React.createElement(SgProgress, {
    value: p,
    style: {
      marginTop: 18
    }
  })))), /*#__PURE__*/React.createElement(SgCard, {
    flush: true,
    title: "Sessions awaiting feedback",
    description: "Oldest first"
  }, window.SG_DATA.reviewQueue.map(q => /*#__PURE__*/React.createElement(SgListRow, {
    key: q.name,
    leading: /*#__PURE__*/React.createElement(SgAvatar, {
      initials: q.initials,
      size: 30
    }),
    title: q.name,
    subtitle: q.task,
    trailing: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--sg-ink-muted)"
      }
    }, q.when), /*#__PURE__*/React.createElement(SgButton, {
      variant: "secondary",
      size: "sm"
    }, "Review"))
  }))));
}
Object.assign(window, {
  GroupsScreen,
  GroupDetailScreen,
  TeachingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-dashboard/GroupsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin-dashboard/InsightsScreens.jsx
try { (() => {
function ConsumptionScreen({
  open
}) {
  const {
    SgButton,
    SgAlert,
    SgMetricCard,
    SgCard,
    SgListRow,
    SgSelect,
    SgProgress,
    SgAvatar,
    SgBadge
  } = SG;
  const D = window.SG_DATA;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Consumption",
    subtitle: "Speaking hours used against each student's monthly tier.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SgButton, {
      variant: "secondary"
    }, "Export CSV"), /*#__PURE__*/React.createElement(SgButton, {
      onClick: () => open("tier.create")
    }, "New tier"))
  }), /*#__PURE__*/React.createElement(SgAlert, {
    layout: "banner",
    tone: "warning",
    title: "Hour wallet is empty.",
    description: "Sessions are paused for 359 students until the workspace is recharged.",
    action: /*#__PURE__*/React.createElement(SgButton, {
      variant: "warning",
      size: "md",
      style: {
        height: 34
      },
      onClick: () => open("billing.recharge")
    }, "Recharge hours"),
    style: {
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(SgMetricCard, {
    label: "Total students",
    value: "359",
    note: "+12 this month"
  }), /*#__PURE__*/React.createElement(SgMetricCard, {
    label: "Over limit",
    value: "3",
    note: "Sessions blocked"
  }), /*#__PURE__*/React.createElement(SgMetricCard, {
    label: "Avg monthly usage",
    value: "11.4",
    note: "hours per student"
  }), /*#__PURE__*/React.createElement(SgMetricCard, {
    label: "Used this month",
    value: "4,092",
    note: "hours across the workspace"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.5fr",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(SgCard, {
    flush: true,
    title: "Tiers",
    description: "Monthly hour ceiling per student"
  }, D.tiers.map(t => /*#__PURE__*/React.createElement(SgListRow, {
    key: t.name,
    marker: t.color,
    title: /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8
      }
    }, t.name, t.isDefault ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.06em",
        color: "var(--sg-primary-ink)",
        background: "var(--sg-primary-soft)",
        borderRadius: 5,
        padding: "2px 6px"
      }
    }, "DEFAULT") : null),
    subtitle: t.desc,
    trailing: /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "end"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 700
      }
    }, t.hours), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--sg-ink-muted)"
      }
    }, t.students))
  }))), /*#__PURE__*/React.createElement(SgCard, {
    flush: true,
    title: "Highest usage this month",
    description: "Sorted by share of tier consumed",
    actions: /*#__PURE__*/React.createElement(SgSelect, {
      variant: "filter",
      height: 34,
      value: "August 2026"
    })
  }, /*#__PURE__*/React.createElement(SG.SgTable, {
    bordered: false,
    rows: D.usageRows,
    columns: [{
      key: "name",
      label: "Student",
      width: "1.8fr",
      render: r => /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12
        }
      }, /*#__PURE__*/React.createElement(SgAvatar, {
        initials: r.initials,
        size: 30
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13,
          fontWeight: 600,
          color: "var(--sg-ink)"
        }
      }, r.name))
    }, {
      key: "tier",
      label: "Tier",
      width: "1fr",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13,
          fontWeight: 600,
          whiteSpace: "nowrap"
        }
      }, r.tier)
    }, {
      key: "used",
      label: "Used",
      width: "1.6fr",
      render: r => /*#__PURE__*/React.createElement(SgProgress, {
        value: r.pct,
        tone: r.tone,
        showValue: true,
        valueLabel: r.used
      })
    }]
  }))));
}
function BillingScreen({
  open
}) {
  const {
    SgButton,
    SgCard,
    SgBadge,
    SgStat,
    SgProgress,
    SgTable
  } = SG;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Billing",
    subtitle: "Plan, hour wallet and invoices.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SgButton, {
      variant: "secondary"
    }, "Change plan"), /*#__PURE__*/React.createElement(SgButton, {
      onClick: () => open("billing.recharge")
    }, "Recharge hours"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.3fr",
      gap: 20,
      marginBottom: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(SgCard, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700
    }
  }, "Current plan"), /*#__PURE__*/React.createElement(SgBadge, {
    tone: "success"
  }, "Active")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: "-0.02em",
      marginTop: 14
    }
  }, "Enterprise"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18,
      marginTop: 20,
      paddingTop: 18,
      borderTop: "1px solid var(--sg-divider)"
    }
  }, /*#__PURE__*/React.createElement(SgStat, {
    label: "Rate per hour",
    value: "E\xA345"
  }), /*#__PURE__*/React.createElement(SgStat, {
    label: "Max students",
    value: "Unlimited"
  }), /*#__PURE__*/React.createElement(SgStat, {
    label: "Started",
    value: "Jan 12, 2026"
  }), /*#__PURE__*/React.createElement(SgStat, {
    label: "Renews",
    value: "Jan 12, 2027"
  }))), /*#__PURE__*/React.createElement(SgCard, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700
    }
  }, "Hour wallet"), /*#__PURE__*/React.createElement(SgBadge, {
    tone: "danger"
  }, "Empty")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34,
      fontWeight: 700,
      letterSpacing: "-0.02em"
    }
  }, "0.0"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--sg-ink-muted)"
    }
  }, "hours remaining")), /*#__PURE__*/React.createElement(SgProgress, {
    value: 100,
    tone: "danger",
    height: 8,
    style: {
      marginTop: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 18,
      marginTop: 20,
      paddingTop: 18,
      borderTop: "1px solid var(--sg-divider)"
    }
  }, /*#__PURE__*/React.createElement(SgStat, {
    label: "Purchased",
    value: "4,092"
  }), /*#__PURE__*/React.createElement(SgStat, {
    label: "Avg daily use",
    value: "15.3"
  }), /*#__PURE__*/React.createElement(SgStat, {
    label: "Days left",
    value: "0",
    valueColor: "var(--sg-danger)"
  })))), /*#__PURE__*/React.createElement(SgCard, {
    flush: true,
    title: "Invoices & recharges",
    description: "Billed to Cairo Language Center \xB7 VAT 100-234-556",
    actions: /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "var(--sg-link)",
        cursor: "pointer"
      }
    }, "Payment method")
  }, /*#__PURE__*/React.createElement(SgTable, {
    bordered: false,
    footer: "Showing the last 4 of 11 documents",
    rows: window.SG_DATA.invoices.map(([date, desc, hours, amount]) => ({
      date,
      desc,
      hours,
      amount
    })),
    columns: [{
      key: "date",
      label: "Date",
      width: "1.1fr"
    }, {
      key: "desc",
      label: "Description",
      width: "1.6fr",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600,
          color: "var(--sg-ink)"
        }
      }, r.desc)
    }, {
      key: "hours",
      label: "Hours",
      width: "1fr"
    }, {
      key: "amount",
      label: "Amount",
      width: "1fr",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600,
          color: "var(--sg-ink)",
          fontVariantNumeric: "tabular-nums"
        }
      }, r.amount)
    }, {
      key: "s",
      label: "Status",
      width: "110px",
      align: "right",
      render: () => /*#__PURE__*/React.createElement(SgBadge, {
        tone: "success"
      }, "Paid")
    }]
  })));
}
Object.assign(window, {
  ConsumptionScreen,
  BillingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-dashboard/InsightsScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin-dashboard/Patterns.jsx
try { (() => {
// Platform patterns found during the web platform build. All composed from DS primitives.
const NOTIFS = [{
  id: "n1",
  tone: "danger",
  title: "Hour wallet is empty",
  sub: "3 students are blocked from speaking sessions",
  time: "10 min ago",
  unread: true
}, {
  id: "n2",
  tone: "warning",
  title: "Nour Samir reached 96% of her tier",
  sub: "Light · 10 hrs · resets Sep 1",
  time: "1 hr ago",
  unread: true
}, {
  id: "n3",
  tone: "info",
  title: "Report ready: Student progress",
  sub: "Requested by Admin User",
  time: "Yesterday"
}, {
  id: "n4",
  tone: "success",
  title: "Payment received",
  sub: "E£45,000 · 1,000 hours added",
  time: "Aug 16, 2026"
}];
const SEV = {
  danger: "var(--sg-danger-solid)",
  warning: "var(--sg-warning-solid)",
  info: "var(--sg-info-solid)",
  success: "var(--sg-success-solid)"
};
function NotificationsDropdown({
  onOpen,
  style
}) {
  const {
    SgCard,
    SgListRow,
    SgButton
  } = SG;
  return /*#__PURE__*/React.createElement(SgCard, {
    flush: true,
    title: "Notifications",
    description: "2 unread",
    actions: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "var(--sg-link)",
        cursor: "pointer"
      }
    }, "Mark all as read"),
    style: {
      width: 380,
      boxShadow: "var(--sg-e-lg)",
      ...style
    }
  }, NOTIFS.map((n, i) => /*#__PURE__*/React.createElement(SgListRow, {
    key: n.id,
    marker: SEV[n.tone],
    onClick: () => onOpen && onOpen(n),
    padding: "14px 20px",
    divider: i < NOTIFS.length - 1,
    title: /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: n.unread ? 700 : 600
      }
    }, n.title),
    subtitle: n.sub,
    trailing: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--sg-ink-muted)",
        whiteSpace: "nowrap"
      }
    }, n.time), n.unread ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: 999,
        background: "var(--sg-primary)"
      }
    }) : null)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 10,
      padding: "12px 20px",
      borderTop: "1px solid var(--sg-divider)"
    }
  }, /*#__PURE__*/React.createElement(SgButton, {
    variant: "tertiary",
    size: "sm"
  }, "Settings"), /*#__PURE__*/React.createElement(SgButton, {
    variant: "secondary",
    size: "sm"
  }, "View all notifications")));
}
function NotificationDrawer({
  inline,
  onClose
}) {
  const {
    SgModal,
    SgBadge
  } = SG;
  const kv = [["Type", "Wallet"], ["Severity", /*#__PURE__*/React.createElement(SgBadge, {
    tone: "danger",
    dot: true
  }, "Critical")], ["Workspace", "Cairo Language Center"], ["Received", "Aug 18, 2026 · 09:42"], ["Affected students", "3"], ["Balance", "0.0 hrs"]];
  return /*#__PURE__*/React.createElement(SgModal, {
    open: true,
    inline: inline,
    onClose: onClose,
    placement: "drawer",
    width: 460,
    overline: "Notification",
    title: "Hour wallet is empty",
    subtitle: "Recharge to resume speaking sessions. Blocked students keep their progress.",
    primaryLabel: "Mark as read",
    secondaryLabel: "Archive"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--sg-border)",
      borderRadius: 12
    }
  }, kv.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 16,
      padding: "12px 16px",
      borderTop: i ? "1px solid var(--sg-divider)" : 0,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sg-ink-muted)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--sg-ink)",
      fontVariantNumeric: "tabular-nums"
    }
  }, v)))));
}
const WORKSPACES = [{
  id: "clc",
  initials: "CL",
  name: "Cairo Language Center",
  role: "Admin",
  count: "359 students"
}, {
  id: "alx",
  initials: "AE",
  name: "Alexandria English Hub",
  role: "Manager",
  count: "124 students"
}, {
  id: "giz",
  initials: "GS",
  name: "Giza Speaking School",
  role: "Finance",
  count: "88 students"
}];
function WorkspaceSwitcher({
  current = "clc",
  open: openProp,
  onSwitch
}) {
  const [openS, setOpen] = React.useState(false);
  const open = openProp != null ? openProp : openS;
  const ws = WORKSPACES.find(w => w.id === current);
  const tile = (w, sz) => /*#__PURE__*/React.createElement("div", {
    style: {
      width: sz,
      height: sz,
      borderRadius: 8,
      background: "var(--sg-primary-soft-2)",
      color: "var(--sg-primary-ink)",
      fontSize: 11,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, w.initials);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, open ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      insetInline: 0,
      bottom: "calc(100% + 8px)",
      background: "var(--sg-surface)",
      border: "1px solid var(--sg-border)",
      borderRadius: 12,
      boxShadow: "var(--sg-e-md)",
      padding: 6,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--sg-ink-muted)",
      padding: "6px 8px 6px"
    }
  }, "Workspaces"), WORKSPACES.map(w => /*#__PURE__*/React.createElement("div", {
    key: w.id,
    onClick: () => {
      setOpen(false);
      onSwitch && onSwitch(w.id);
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "8px",
      borderRadius: 8,
      cursor: "pointer",
      background: w.id === current ? "var(--sg-nav-active)" : "transparent"
    }
  }, tile(w, 28), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--sg-ink)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, w.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-ink-muted)"
    }
  }, w.role, " \xB7 ", w.count)), w.id === current ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sg-link)",
      fontWeight: 700
    }
  }, "\u2713") : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--sg-divider)",
      margin: "6px -6px 0",
      padding: "10px 14px 6px",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--sg-link)",
      cursor: "pointer"
    }
  }, "+ Create workspace")) : null, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(!open),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: 10,
      border: "1px solid var(--sg-border)",
      borderRadius: 12,
      cursor: "pointer",
      background: "var(--sg-surface)"
    }
  }, tile(ws, 30), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--sg-ink)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, ws.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-ink-muted)"
    }
  }, ws.role, " \xB7 ", ws.count)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: "var(--sg-ink-muted)"
    }
  }, "\u25BE")));
}
function OtpInput({
  length = 6,
  value = "4821",
  activeIndex
}) {
  const act = activeIndex != null ? activeIndex : value.length;
  return /*#__PURE__*/React.createElement("div", {
    dir: "ltr",
    style: {
      display: "flex",
      gap: 10
    }
  }, Array.from({
    length
  }, (_, i) => {
    const a = i === act;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        width: 52,
        height: 52,
        borderRadius: 10,
        border: "1px solid " + (a ? "var(--sg-primary)" : "var(--sg-border-strong)"),
        boxShadow: a ? "var(--sg-focus-input)" : "none",
        background: "var(--sg-surface)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 22,
        fontWeight: 700,
        fontVariantNumeric: "tabular-nums",
        color: "var(--sg-ink)"
      }
    }, value[i] || (a ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 2,
        height: 22,
        background: "var(--sg-primary)"
      }
    }) : ""));
  }));
}
function KV({
  rows
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--sg-border)",
      borderRadius: 12
    }
  }, rows.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 16,
      padding: "11px 16px",
      borderTop: i ? "1px solid var(--sg-divider)" : 0,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sg-ink-muted)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--sg-ink)",
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap"
    }
  }, v))));
}
function PaymentSuccessModal({
  inline,
  onClose
}) {
  return /*#__PURE__*/React.createElement(SG.SgModal, {
    open: true,
    inline: inline,
    onClose: onClose,
    width: 480,
    overline: "Billing",
    title: "Payment successful",
    subtitle: "1,000 hours were added to the Cairo Language Center wallet.",
    primaryLabel: "Done",
    secondaryLabel: "Download receipt"
  }, /*#__PURE__*/React.createElement(KV, {
    rows: [["Transaction ID", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--sg-mono)",
        fontSize: 12
      }
    }, "TXN-2026-08-18-4471")], ["Amount", "E£45,000"], ["Hours added", "1,000"], ["Method", "Visa ·· 4242"], ["Date", "Aug 18, 2026 · 09:51"]]
  }));
}
function PaymentFailureModal({
  inline,
  onClose
}) {
  return /*#__PURE__*/React.createElement(SG.SgModal, {
    open: true,
    inline: inline,
    onClose: onClose,
    destructive: true,
    width: 480,
    overline: "Billing",
    title: "Payment failed",
    subtitle: "No hours were added and your card was not charged.",
    primaryLabel: "Try again",
    secondaryLabel: "Cancel"
  }, /*#__PURE__*/React.createElement(SG.SgAlert, {
    tone: "danger",
    title: "Card declined by issuer.",
    description: "The bank rejected the transaction (code 05). Use another card or contact your bank."
  }), /*#__PURE__*/React.createElement(KV, {
    rows: [["Amount", "E£45,000"], ["Method", "Visa ·· 4242"], ["Attempted", "Aug 18, 2026 · 09:49"]]
  }));
}
function AppDownloadModal({
  inline,
  onClose
}) {
  const slot = (store, os) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12,
      padding: 18,
      border: "1px solid var(--sg-border)",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 132,
      height: 132,
      borderRadius: 10,
      border: "1px dashed var(--sg-border-strong)",
      background: "var(--sg-surface-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      textAlign: "center"
    }
  }, "QR code", /*#__PURE__*/React.createElement("br", null), os), /*#__PURE__*/React.createElement(SG.SgButton, {
    variant: "secondary",
    size: "sm",
    fullWidth: true
  }, store));
  return /*#__PURE__*/React.createElement(SG.SgModal, {
    open: true,
    inline: inline,
    onClose: onClose,
    width: 520,
    overline: "Welcome",
    title: "Get the Speaking Genie app",
    subtitle: "Your account is ready. Scan a code with your phone to start your first speaking session.",
    primaryLabel: "Done",
    secondaryLabel: "Email me the link"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, slot("App Store", "iOS"), slot("Google Play", "Android")));
}
function AssignTierModal({
  inline,
  onClose
}) {
  const [tier, setTier] = React.useState("regular");
  const chips = ["Mahmoud Youssef", "Ahmed Osman", "Nour Samir", "Salma Adel"];
  return /*#__PURE__*/React.createElement(SG.SgModal, {
    open: true,
    inline: inline,
    onClose: onClose,
    width: 520,
    overline: "Students",
    title: "Assign tier",
    subtitle: "Changing a tier's ceiling applies from the next billing month.",
    primaryLabel: "Assign tier",
    secondaryLabel: "Cancel",
    footnote: "4 students selected"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 8
    }
  }, "Selected students"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, chips.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 30,
      padding: "0 10px",
      borderRadius: 999,
      background: "var(--sg-surface-muted)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--sg-ink)"
    }
  }, c, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sg-ink-muted)",
      cursor: "pointer"
    }
  }, "\xD7"))))), /*#__PURE__*/React.createElement(SG.SgRadioGroup, {
    label: "Consumption tier",
    value: tier,
    onChange: setTier,
    options: [{
      value: "light",
      label: "Light · 10 hrs",
      note: "Occasional practice"
    }, {
      value: "regular",
      label: "Regular · 20 hrs",
      note: "Average students"
    }, {
      value: "heavy",
      label: "Heavy · 35 hrs",
      note: "Active students"
    }, {
      value: "intensive",
      label: "Intensive · 50 hrs",
      note: "Exam preparation"
    }]
  }));
}
const AI_LEVELS = [{
  level: "A1",
  title: "Everyday basics",
  tasks: ["Introduce yourself", "Order at a café"],
  vocab: ["greeting", "menu", "bill"],
  idioms: ["break the ice"]
}, {
  level: "A2",
  title: "Getting around",
  tasks: ["Ask for directions", "Book a hotel room"],
  vocab: ["platform", "reservation", "receipt"],
  idioms: ["on the way", "call it a day"]
}, {
  level: "B1",
  title: "Work and study",
  tasks: ["Describe your job", "Join a meeting"],
  vocab: ["deadline", "colleague", "agenda"],
  idioms: ["get the ball rolling"]
}];
function AiGenerateCard() {
  const {
    SgCard,
    SgButton,
    SgSelect,
    SgTextarea
  } = SG;
  return /*#__PURE__*/React.createElement(SgCard, {
    title: "Generate a course plan",
    description: "Describe the cohort; the AI drafts levels, tasks, vocabulary and idioms for you to review."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(SgTextarea, {
    label: "Audience and goals",
    defaultValue: "Adult beginners at a Cairo language centre preparing for travel and entry-level office work.",
    rows: 3
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(SgSelect, {
    label: "From level",
    value: "A1"
  }), /*#__PURE__*/React.createElement(SgSelect, {
    label: "To level",
    value: "B1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(SgButton, {
    variant: "soft"
  }, "Generate plan"))));
}
function AiReviewDrawer({
  inline,
  onClose
}) {
  const list = (label, items, mono) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.07em",
      textTransform: "uppercase",
      color: "var(--sg-ink-muted)",
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, items.map(x => /*#__PURE__*/React.createElement(SG.SgTag, {
    key: x,
    variant: "meta"
  }, x)), /*#__PURE__*/React.createElement(SG.SgTag, {
    variant: "add"
  }, "+ Add")));
  return /*#__PURE__*/React.createElement(SG.SgModal, {
    open: true,
    inline: inline,
    onClose: onClose,
    placement: "drawer",
    width: 560,
    overline: "AI course setup",
    title: "Review course plan",
    subtitle: "Edit anything before applying. Nothing is published until you confirm.",
    primaryLabel: "Apply course plan",
    secondaryLabel: "Regenerate",
    footnote: "3 levels \xB7 6 tasks \xB7 9 words \xB7 4 idioms"
  }, AI_LEVELS.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.level,
    style: {
      border: "1px solid var(--sg-border)",
      borderRadius: 12,
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(SG.SgBadge, {
    tone: "brand"
  }, "Level " + l.level), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, l.title)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--sg-ink-muted)",
      cursor: "pointer"
    }
  }, "\u270E")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.07em",
      textTransform: "uppercase",
      color: "var(--sg-ink-muted)",
      marginBottom: 6
    }
  }, "Conversational tasks"), l.tasks.map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      fontSize: 13,
      color: "var(--sg-ink)",
      padding: "4px 0"
    }
  }, t))), list("Vocabulary", l.vocab), list("Idioms", l.idioms))));
}
function AiApplyingModal({
  inline,
  onClose
}) {
  return /*#__PURE__*/React.createElement(SG.SgModal, {
    open: true,
    inline: inline,
    onClose: onClose,
    width: 460,
    overline: "AI course setup",
    title: "Applying course plan",
    subtitle: "Creating content in General English. You can leave this page; we will notify you when it finishes.",
    secondaryLabel: "Run in background"
  }, /*#__PURE__*/React.createElement(SG.SgKpiBar, {
    name: "Levels",
    value: "3 / 3",
    pct: 100,
    tone: "var(--sg-success-solid)"
  }), /*#__PURE__*/React.createElement(SG.SgKpiBar, {
    name: "Conversational tasks",
    value: "4 / 6",
    pct: 67
  }), /*#__PURE__*/React.createElement(SG.SgKpiBar, {
    name: "Vocabulary",
    value: "5 / 9",
    pct: 56
  }), /*#__PURE__*/React.createElement(SG.SgKpiBar, {
    name: "Idioms",
    value: "0 / 4",
    pct: 0,
    note: "Queued"
  }));
}
function PageStates() {
  const {
    SgCard,
    SgEmptyState,
    SgButton,
    SgSkeleton,
    SgAlert
  } = SG;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SgAlert, {
    layout: "banner",
    tone: "warning",
    title: "Hour wallet is empty.",
    description: "Recharge to resume speaking sessions \u2014 3 students are already blocked.",
    action: /*#__PURE__*/React.createElement(SgButton, {
      variant: "warning",
      size: "sm"
    }, "Recharge hours")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SgCard, {
    padding: "8px"
  }, /*#__PURE__*/React.createElement(SgEmptyState, {
    title: "No groups yet",
    description: "Groups pair a course level with a teacher and a cohort of students.",
    action: /*#__PURE__*/React.createElement(SgButton, null, "Create group")
  })), /*#__PURE__*/React.createElement(SgCard, {
    padding: "22px 24px"
  }, /*#__PURE__*/React.createElement(SgSkeleton, {
    lines: 1,
    widths: ["40%"],
    height: 14
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 10,
      margin: "18px 0"
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      border: "1px solid var(--sg-border)",
      borderRadius: 12,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement(SgSkeleton, {
    lines: 2,
    widths: ["60%", "40%"],
    height: 10
  })))), /*#__PURE__*/React.createElement(SgSkeleton, {
    lines: 4,
    widths: ["100%", "92%", "96%", "70%"],
    height: 12
  }))));
}
function PatternsScreen() {
  const sec = (title, sub, body) => /*#__PURE__*/React.createElement("section", {
    style: {
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 17,
      fontWeight: 700
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 16px",
      fontSize: 13,
      color: "var(--sg-ink-muted)"
    }
  }, sub), body);
  const row = kids => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 20,
      alignItems: "flex-start"
    }
  }, kids);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Platform patterns",
    subtitle: "Compositions validated in the web platform build. Each is built from existing components."
  }), sec("Notifications", "Topbar dropdown and the detail drawer it opens.", row([/*#__PURE__*/React.createElement(NotificationsDropdown, {
    key: "d"
  }), /*#__PURE__*/React.createElement(NotificationDrawer, {
    key: "r",
    inline: true
  })])), sec("Workspace switcher", "Opens above the sidebar footer card.", /*#__PURE__*/React.createElement("div", {
    style: {
      width: 236,
      paddingTop: 250
    }
  }, /*#__PURE__*/React.createElement(WorkspaceSwitcher, {
    open: true
  }))), sec("AI course setup", "Generate → review and edit → apply with progress per content type.", row([/*#__PURE__*/React.createElement("div", {
    key: "g",
    style: {
      width: 420
    }
  }, /*#__PURE__*/React.createElement(AiGenerateCard, null)), /*#__PURE__*/React.createElement(AiReviewDrawer, {
    key: "r",
    inline: true
  }), /*#__PURE__*/React.createElement(AiApplyingModal, {
    key: "a",
    inline: true
  })])), sec("OTP verification", "Six digit boxes, always LTR. The active box carries the purple border and focus halo.", /*#__PURE__*/React.createElement(SG.SgCard, {
    padding: "22px 24px",
    style: {
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700
    }
  }, "Enter verification code"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--sg-ink-muted)",
      margin: "4px 0 16px"
    }
  }, "Sent to +20 100 *** 4821"), /*#__PURE__*/React.createElement(OtpInput, null))), sec("Payment results", "Success lists the transaction; failure states the reason in an alert.", row([/*#__PURE__*/React.createElement(PaymentSuccessModal, {
    key: "s",
    inline: true
  }), /*#__PURE__*/React.createElement(PaymentFailureModal, {
    key: "f",
    inline: true
  })])), sec("Students", "App download after self-registration, and bulk tier assignment.", row([/*#__PURE__*/React.createElement(AppDownloadModal, {
    key: "a",
    inline: true
  }), /*#__PURE__*/React.createElement(AssignTierModal, {
    key: "t",
    inline: true
  })])), sec("Page states", "Wallet-blocked banner, empty state, and a loading skeleton that mirrors the page layout.", /*#__PURE__*/React.createElement(PageStates, null)));
}
Object.assign(window, {
  NotificationsDropdown,
  NotificationDrawer,
  WorkspaceSwitcher,
  OtpInput,
  PaymentSuccessModal,
  PaymentFailureModal,
  AppDownloadModal,
  AssignTierModal,
  AiGenerateCard,
  AiReviewDrawer,
  AiApplyingModal,
  PageStates,
  PatternsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-dashboard/Patterns.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin-dashboard/RolesScreen.jsx
try { (() => {
function RolesScreen({
  open,
  toast
}) {
  const {
    SgButton,
    SgSideList,
    SgCard,
    SgTag,
    SgPermissionGroup
  } = SG;
  const D = window.SG_DATA;
  const allKeys = D.perms.flatMap(g => g.items.map(i => i[1]));
  const grantedFor = r => r.granted === "ALL" ? allKeys.slice() : r.granted.slice();
  const [roleId, setRoleId] = React.useState("manager");
  const [granted, setGranted] = React.useState(grantedFor(D.roles[1]));
  const role = D.roles.find(r => r.id === roleId);
  const select = id => {
    setRoleId(id);
    setGranted(grantedFor(D.roles.find(r => r.id === id)));
  };
  const toggle = k => setGranted(g => g.includes(k) ? g.filter(x => x !== k) : g.concat([k]));
  const toggleAll = grp => {
    const keys = grp.items.map(i => i[1]);
    const all = keys.every(k => granted.includes(k));
    setGranted(g => all ? g.filter(k => !keys.includes(k)) : g.concat(keys.filter(k => !g.includes(k))));
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Roles & permissions",
    subtitle: "Pick a role, then grant permissions by area. Changes apply to everyone holding the role.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SgButton, {
      variant: "secondary"
    }, "Audit matrix"), /*#__PURE__*/React.createElement(SgButton, {
      onClick: () => open("role.create")
    }, "Create role"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "296px 1fr",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(SgSideList, {
    value: roleId,
    onChange: select,
    items: D.roles.map(r => ({
      id: r.id,
      label: r.name,
      badge: r.kind,
      meta: r.meta
    }))
  }), /*#__PURE__*/React.createElement(SgCard, {
    flush: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      padding: "20px 24px",
      borderBottom: "1px solid var(--sg-divider)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700
    }
  }, role.name), /*#__PURE__*/React.createElement(SgTag, {
    variant: "key",
    style: {
      fontSize: 11,
      padding: "2px 7px",
      borderRadius: 6
    }
  }, role.slug)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--sg-ink-muted)",
      marginTop: 5
    }
  }, granted.length, " of ", allKeys.length, " permissions granted \xB7 ", role.users)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(SgButton, {
    variant: "secondary",
    size: "md",
    onClick: () => setGranted([])
  }, "Revoke all"), /*#__PURE__*/React.createElement(SgButton, {
    size: "md",
    onClick: () => toast("Role saved", granted.length + " permissions updated for " + role.name + ".")
  }, "Save changes"))), D.perms.map(g => /*#__PURE__*/React.createElement(SgPermissionGroup, {
    key: g.title,
    title: g.title,
    hint: g.hint,
    permissions: g.items.map(([label, key]) => ({
      label,
      key,
      on: granted.includes(key)
    })),
    onToggle: toggle,
    onToggleAll: () => toggleAll(g)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 24px",
      fontSize: 12,
      color: "var(--sg-ink-muted)"
    }
  }, "System roles cannot be deleted. Duplicate one to build a custom role from a known-good baseline."))));
}
window.RolesScreen = RolesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-dashboard/RolesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin-dashboard/StudentsScreen.jsx
try { (() => {
function StudentsScreen({
  go,
  open
}) {
  const {
    SgButton,
    SgTable,
    SgBadge,
    SgProgress,
    SgPagination
  } = SG;
  const [page, setPage] = React.useState(1);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Students",
    subtitle: "359 enrolled across 2 courses.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SgButton, {
      variant: "secondary"
    }, "Invitations"), /*#__PURE__*/React.createElement(SgButton, {
      onClick: () => open("student.create")
    }, "Add student"))
  }), /*#__PURE__*/React.createElement(Toolbar, {
    placeholder: "Search students\u2026",
    filters: ["Course", "Level", "Tier"]
  }), /*#__PURE__*/React.createElement(SgTable, {
    onRowClick: () => go("studentDetail"),
    rows: window.SG_DATA.students,
    columns: [{
      key: "name",
      label: "Student",
      width: "2.2fr",
      render: r => /*#__PURE__*/React.createElement(PersonCell, r)
    }, {
      key: "course",
      label: "Course & level",
      width: "1.4fr",
      render: r => /*#__PURE__*/React.createElement(TwoLine, {
        a: r.course,
        b: r.level
      })
    }, {
      key: "tier",
      label: "Tier",
      width: "1.1fr",
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13,
          fontWeight: 600,
          whiteSpace: "nowrap"
        }
      }, r.tier)
    }, {
      key: "pct",
      label: "Progress",
      width: "1.5fr",
      render: r => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SgProgress, {
        value: r.pct,
        height: 5,
        showValue: true
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11,
          color: "var(--sg-ink-muted)",
          marginTop: 4
        }
      }, r.hours))
    }, {
      key: "s",
      label: "Status",
      width: "100px",
      align: "right",
      render: () => /*#__PURE__*/React.createElement(SgBadge, {
        tone: "success"
      }, "Active")
    }],
    footer: /*#__PURE__*/React.createElement(SgPagination, {
      summary: "1\u20136 of 359",
      page: page,
      pageCount: 3,
      onChange: setPage
    })
  }));
}
function StudentDetailScreen({
  go,
  open
}) {
  const {
    SgButton,
    SgCard,
    SgAvatar,
    SgTag,
    SgMetricCard,
    SgListRow,
    SgBadge,
    SgKpiBar,
    SgProgress,
    SgBackLink
  } = SG;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SgBackLink, {
    onClick: () => go("students")
  }, "All students"), /*#__PURE__*/React.createElement(SgCard, {
    padding: 24,
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 32,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(SgAvatar, {
    initials: "MY",
    size: 56
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: "-0.02em"
    }
  }, "Mahmoud Youssef"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--sg-ink-muted)",
      marginTop: 5
    }
  }, "mahmoudyoussef100100@gmail.com \xB7 enrolled Aug 18, 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(SgTag, null, "General English"), /*#__PURE__*/React.createElement(SgTag, null, "Level A2: Basic User"), /*#__PURE__*/React.createElement(SgTag, {
    variant: "info"
  }, "Regular \xB7 20 hrs/mo")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(SgButton, {
    variant: "secondary",
    size: "md",
    onClick: () => open("student.edit")
  }, "Change tier"), /*#__PURE__*/React.createElement(SgButton, {
    variant: "secondary",
    size: "md",
    onClick: () => open("student.edit")
  }, "Move level"), /*#__PURE__*/React.createElement(SgButton, {
    size: "md",
    onClick: () => open("report.request")
  }, "Request report"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(SgMetricCard, {
    size: "md",
    label: "Course progress",
    value: "34%",
    note: "12 of 35 tasks completed"
  }), /*#__PURE__*/React.createElement(SgMetricCard, {
    size: "md",
    label: "Sessions",
    value: "24",
    note: "Last on Aug 17"
  }), /*#__PURE__*/React.createElement(SgMetricCard, {
    size: "md",
    label: "Avg score",
    value: "78",
    note: "+6 vs last month"
  }), /*#__PURE__*/React.createElement(SgMetricCard, {
    size: "md",
    label: "Streak",
    value: "9",
    note: "consecutive days"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(SgCard, {
    flush: true,
    title: "Recent speaking sessions",
    description: "Scored on range, accuracy and fluency"
  }, window.SG_DATA.sessions.map(s => /*#__PURE__*/React.createElement(SgListRow, {
    key: s.task,
    padding: "16px 20px",
    title: s.task,
    subtitle: s.meta,
    trailing: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--sg-ink-muted)",
        fontVariantNumeric: "tabular-nums"
      }
    }, s.duration), /*#__PURE__*/React.createElement(SgBadge, {
      tone: scoreTone(s.score),
      style: {
        fontSize: 13,
        fontWeight: 700,
        padding: "4px 11px"
      }
    }, s.score))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 24px",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "View all 24 sessions"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(SgCard, {
    title: "Speaking KPIs",
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SgKpiBar, {
    name: "Range",
    value: "80 / 100",
    pct: 80,
    note: "Produces simple phrases about people and places."
  }), /*#__PURE__*/React.createElement(SgKpiBar, {
    name: "Accuracy",
    value: "68 / 100",
    pct: 68,
    note: "Limited control of past tense; recurring article errors."
  }), /*#__PURE__*/React.createElement(SgKpiBar, {
    name: "Fluency",
    value: "74 / 100",
    pct: 74,
    note: "Short utterances, pauses shortening month over month."
  }))), /*#__PURE__*/React.createElement(SgCard, {
    title: "Hours this month",
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      marginTop: -2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 700,
      fontVariantNumeric: "tabular-nums"
    }
  }, "6.8"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--sg-ink-muted)"
    }
  }, "/ 20 hrs")), /*#__PURE__*/React.createElement(SgProgress, {
    value: 34,
    height: 8,
    style: {
      marginTop: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--sg-ink-muted)",
      marginTop: 10
    }
  }, "34% of the Regular tier used \xB7 resets Sep 1")))));
}
Object.assign(window, {
  StudentsScreen,
  StudentDetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-dashboard/StudentsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin-dashboard/data.js
try { (() => {
window.SG_DATA = {
  perms: [{
    title: "Courses & content",
    hint: "Levels, vocabulary, tasks, flashcards, scenarios",
    items: [["View courses", "courses.index"], ["Create & edit courses", "courses.write"], ["Manage levels", "courses.levels.write"], ["Manage content items", "courses.content.write"], ["Generate content with AI", "courses.ai.generate"], ["Delete courses", "courses.destroy"]]
  }, {
    title: "Students & groups",
    hint: "Enrolment, tiers, cohorts",
    items: [["View students", "students.index"], ["Add & invite students", "students.invite"], ["Assign tier & level", "students.assign"], ["Manage groups", "groups.write"]]
  }, {
    title: "Insights",
    hint: "Reports and hour consumption",
    items: [["View reports", "reports.index"], ["Request & schedule reports", "reports.request"], ["View consumption", "consumption.index"], ["Manage consumption tiers", "consumption.tiers.write"]]
  }, {
    title: "Administration",
    hint: "Users, roles, billing, company profile",
    items: [["View users", "users.index"], ["Invite & remove users", "users.write"], ["Manage roles & permissions", "rbac.roles.write"], ["View billing", "billing.index"], ["Recharge hours & change plan", "billing.write"], ["Edit company profile", "company.write"]]
  }],
  roles: [{
    id: "admin",
    name: "Admin",
    slug: "admin",
    kind: "System",
    meta: "Full access · 2 users",
    users: "2 users",
    granted: "ALL"
  }, {
    id: "manager",
    name: "Center manager",
    slug: "manager",
    kind: "Custom",
    meta: "14 permissions · 3 users",
    users: "3 users",
    granted: ["courses.index", "courses.write", "courses.levels.write", "courses.content.write", "courses.ai.generate", "students.index", "students.invite", "students.assign", "groups.write", "reports.index", "reports.request", "consumption.index", "consumption.tiers.write", "users.index"]
  }, {
    id: "teacher",
    name: "Teacher",
    slug: "teacher",
    kind: "Custom",
    meta: "5 permissions · 8 users",
    users: "8 users",
    granted: ["courses.index", "students.index", "groups.write", "reports.index", "consumption.index"]
  }, {
    id: "finance",
    name: "Finance",
    slug: "finance",
    kind: "Custom",
    meta: "4 permissions · 1 user",
    users: "1 user",
    granted: ["billing.index", "billing.write", "consumption.index", "reports.index"]
  }],
  students: [{
    initials: "MO",
    name: "Mostafa Moheb",
    email: "mostafamoheb2020@gmail.com",
    course: "General English",
    level: "Level A2: Basic User",
    tier: "Light · 10",
    pct: 18,
    hours: "10.4 / 10 hrs · over limit"
  }, {
    initials: "MY",
    name: "Mahmoud Youssef",
    email: "mahmoudyoussef100100@gmail.com",
    course: "General English",
    level: "Level A2: Basic User",
    tier: "Regular · 20",
    pct: 34,
    hours: "6.8 / 20 hrs"
  }, {
    initials: "AO",
    name: "Ahmed Osman",
    email: "osmanobeh@gmail.com",
    course: "Business English",
    level: "Level B1: Independent",
    tier: "Heavy · 35",
    pct: 72,
    hours: "22.4 / 35 hrs"
  }, {
    initials: "AA",
    name: "Ahmed Abosamra",
    email: "ahmed25.mahmoud@gmail.com",
    course: "General English",
    level: "Pre-A1",
    tier: "Regular · 20",
    pct: 8,
    hours: "20.2 / 20 hrs · over limit"
  }, {
    initials: "LS",
    name: "Layla Samir",
    email: "layla.samir@gmail.com",
    course: "Business English",
    level: "Level B2: Independent",
    tier: "Heavy · 35",
    pct: 61,
    hours: "33.1 / 35 hrs"
  }, {
    initials: "KA",
    name: "Karim Adel",
    email: "karim.adel@gmail.com",
    course: "General English",
    level: "Level A1: Basic User",
    tier: "Intensive · 50",
    pct: 44,
    hours: "31.5 / 50 hrs"
  }],
  sessions: [{
    task: "Describe your typical weekday",
    meta: "Monologue · Level A2 · Aug 17",
    duration: "4:12",
    score: 82
  }, {
    task: "Order food at a café",
    meta: "Role-play · Level A2 · Aug 15",
    duration: "6:40",
    score: 76
  }, {
    task: "Explain a photo to a friend",
    meta: "Picture prompt · Level A2 · Aug 14",
    duration: "2:55",
    score: 64
  }, {
    task: "Checking into a hotel",
    meta: "Scenario · Level A2 · Aug 12",
    duration: "9:20",
    score: 71
  }],
  levels: [{
    id: "pre",
    code: "P",
    name: "Pre-A1",
    meta: "15 words · 0.4 speed · 6 students",
    words: "15",
    speed: "0.4",
    students: "6",
    goals: ["Ask and answer simple personal questions (name, age, address).", "Use basic formulaic expressions and gestures."]
  }, {
    id: "a1",
    code: "A1",
    name: "Level A1: Basic User",
    meta: "30 words · 0.4 speed · 15 students",
    words: "30",
    speed: "0.4",
    students: "15",
    goals: ["Introduce yourself and others.", "Ask and answer questions about personal details."]
  }, {
    id: "a2",
    code: "A2",
    name: "Level A2: Basic User",
    meta: "60 words · 0.6 speed · 12 students",
    words: "60",
    speed: "0.6",
    students: "12",
    goals: ["Describe routines, background and immediate environment.", "Handle short social exchanges without preparation.", "Explain what you like and dislike and give simple reasons."]
  }, {
    id: "b1",
    code: "B1",
    name: "Level B1: Independent User",
    meta: "90 words · 0.8 speed · 9 students",
    words: "90",
    speed: "0.8",
    students: "9",
    goals: ["Deal with most situations while travelling."]
  }, {
    id: "b2",
    code: "B2",
    name: "Level B2: Independent User",
    meta: "140 words · 1.0 speed · 3 students",
    words: "140",
    speed: "1.0",
    students: "3",
    goals: ["Take an active part in discussion in familiar contexts."]
  }],
  content: {
    goals: {
      label: "Level goals & KPIs",
      hint: "What a student must demonstrate to advance",
      action: "Add goal",
      count: 5,
      form: "level.create",
      items: [["Range", "Can produce simple phrases about people and places", "KPI"], ["Accuracy", "Shows limited control of a few simple structures", "KPI"], ["Fluency", "Manages very short utterances with frequent pauses", "KPI"]]
    },
    vocab: {
      label: "Vocabulary & idioms",
      hint: "Target lexis practised in this level's tasks",
      action: "Add entry",
      count: 48,
      form: "content.vocab",
      items: [["run into someone", "Idiom · to meet unexpectedly", "Social"], ["get the hang of it", "Idiom · to learn how to do something", "Learning"], ["commute", "Verb · travel to work regularly", "Daily life"], ["on a tight budget", "Phrase · with little money to spend", "Money"], ["look forward to", "Phrasal verb · to anticipate with pleasure", "Social"]]
    },
    tasks: {
      label: "Conversational tasks",
      hint: "Live speaking prompts scored on range, accuracy and fluency",
      action: "Add task",
      count: 12,
      form: "content.task",
      items: [["Describe your typical weekday", "Monologue · 90 seconds · 3 target idioms", "Monologue"], ["Order food at a café", "Role-play · 2 turns minimum", "Role-play"], ["Disagree politely with a colleague", "Role-play · hedging language", "Business"], ["Explain a photo to a friend", "Picture prompt · 60 seconds", "Monologue"]]
    },
    cards: {
      label: "Flashcards",
      hint: "Spaced-repetition drills unlocked with each task",
      action: "Add card",
      count: 36,
      form: "content.vocab",
      items: [["commute → الانتقال اليومي", "Audio recorded · 0.6 speed", "Deck 1"], ["on a tight budget → بميزانية محدودة", "Audio recorded · 0.6 speed", "Deck 1"], ["get the hang of it → يتقن الأمر", "Awaiting audio", "Deck 2"]]
    },
    scenarios: {
      label: "Real-life scenarios",
      hint: "Multi-turn simulations combining the level's tasks and lexis",
      action: "Add scenario",
      count: 6,
      form: "content.task",
      items: [["Checking into a hotel", "5 turns · receptionist persona · 8 min", "Travel"], ["First day at a new job", "6 turns · manager persona · 10 min", "Business"], ["Renting an apartment", "7 turns · agent persona · 12 min", "Daily life"]]
    }
  },
  groupRows: [{
    name: "A2 Morning",
    students: "12",
    course: "General English",
    level: "Level A2: Basic User",
    teacher: "Nour Hassan",
    initials: "NH",
    days: "Sun · Tue · Thu",
    period: "09:00 – 10:30",
    progress: 48,
    status: "Active",
    tone: "success"
  }, {
    name: "B1 Evening",
    students: "9",
    course: "General English",
    level: "Level B1: Independent",
    teacher: "Nour Hassan",
    initials: "NH",
    days: "Mon · Wed",
    period: "18:00 – 19:30",
    progress: 62,
    status: "Active",
    tone: "success"
  }, {
    name: "Corporate A1",
    students: "18",
    course: "Business English",
    level: "Level A1: Basic User",
    teacher: "Youssef Tarek",
    initials: "YT",
    days: "Sat",
    period: "11:00 – 13:00",
    progress: 21,
    status: "Active",
    tone: "success"
  }, {
    name: "Pre-A1 Intensive",
    students: "6",
    course: "General English",
    level: "Pre-A1",
    teacher: "Nour Hassan",
    initials: "NH",
    days: "Daily",
    period: "16:00 – 17:00",
    progress: 9,
    status: "Starting",
    tone: "info"
  }, {
    name: "B2 Exam Prep",
    students: "3",
    course: "Business English",
    level: "Level B2: Independent",
    teacher: "Unassigned",
    initials: "—",
    days: "Not scheduled",
    period: "—",
    progress: 0,
    status: "Draft",
    tone: "brand"
  }],
  roster: [{
    initials: "MY",
    name: "Mahmoud Youssef",
    tier: "Regular · 20",
    pct: 34,
    hours: "6.8 / 20",
    last: "Yesterday",
    flag: "Review",
    tone: "warning"
  }, {
    initials: "HE",
    name: "Hana Ezz",
    tier: "Regular · 20",
    pct: 52,
    hours: "9.2 / 20",
    last: "2 days ago"
  }, {
    initials: "MO",
    name: "Mostafa Moheb",
    tier: "Light · 10",
    pct: 18,
    hours: "10.4 / 10",
    last: "4 days ago",
    flag: "Over limit",
    tone: "danger"
  }, {
    initials: "KA",
    name: "Karim Adel",
    tier: "Intensive · 50",
    pct: 71,
    hours: "31.5 / 50",
    last: "Today"
  }, {
    initials: "SN",
    name: "Salma Nabil",
    tier: "Regular · 20",
    pct: 44,
    hours: "8.1 / 20",
    last: "Today",
    flag: "Review",
    tone: "warning"
  }, {
    initials: "TA",
    name: "Tarek Aziz",
    tier: "Light · 10",
    pct: 9,
    hours: "1.2 / 10",
    last: "11 days ago",
    flag: "Inactive",
    tone: "info"
  }],
  tiers: [{
    name: "Light user",
    desc: "Minimal usage",
    hours: "10 hrs",
    students: "84 students",
    color: "var(--sg-tier-light)"
  }, {
    name: "Regular user",
    desc: "Average students",
    hours: "20 hrs",
    students: "201 students",
    color: "var(--sg-tier-regular)",
    isDefault: true
  }, {
    name: "Heavy user",
    desc: "Active students",
    hours: "35 hrs",
    students: "62 students",
    color: "var(--sg-tier-heavy)"
  }, {
    name: "Intensive user",
    desc: "Highly engaged students",
    hours: "50 hrs",
    students: "12 students",
    color: "var(--sg-tier-intensive)"
  }],
  usageRows: [{
    initials: "MM",
    name: "Mostafa Moheb",
    tier: "Light · 10",
    used: "10.4 / 10",
    pct: 100,
    tone: "danger"
  }, {
    initials: "AA",
    name: "Ahmed Abosamra",
    tier: "Regular · 20",
    used: "20.2 / 20",
    pct: 100,
    tone: "danger"
  }, {
    initials: "LS",
    name: "Layla Samir",
    tier: "Heavy · 35",
    used: "33.1 / 35",
    pct: 94,
    tone: "warning"
  }, {
    initials: "MY",
    name: "Mahmoud Yossif",
    tier: "Regular · 20",
    used: "16.8 / 20",
    pct: 84,
    tone: "warning"
  }, {
    initials: "KA",
    name: "Karim Adel",
    tier: "Intensive · 50",
    used: "31.5 / 50",
    pct: 63,
    tone: "brand"
  }, {
    initials: "HE",
    name: "Hana Ezz",
    tier: "Regular · 20",
    used: "9.2 / 20",
    pct: 46,
    tone: "brand"
  }],
  invoices: [["Aug 01, 2026", "Hour recharge · 1,000 hrs", "+1,000", "E£45,000"], ["Jul 03, 2026", "Hour recharge · 1,500 hrs", "+1,500", "E£67,500"], ["Jun 02, 2026", "Hour recharge · 1,000 hrs", "+1,000", "E£45,000"], ["Jan 12, 2026", "Enterprise plan · annual", "—", "E£120,000"]],
  reviewQueue: [{
    initials: "MY",
    name: "Mahmoud Youssef",
    task: "Describe your typical weekday · 4:12",
    when: "2 days ago"
  }, {
    initials: "HE",
    name: "Hana Ezz",
    task: "Order food at a café · 5:03",
    when: "2 days ago"
  }, {
    initials: "KA",
    name: "Karim Adel",
    task: "Checking into a hotel · 9:20",
    when: "Yesterday"
  }, {
    initials: "MO",
    name: "Mostafa Moheb",
    task: "Explain a photo to a friend · 2:44",
    when: "4 hours ago"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-dashboard/data.js", error: String((e && e.message) || e) }); }

// ui_kits/admin-dashboard/i18n.js
try { (() => {
/* Speaking Genie — prototype Arabic translation layer.
   Translates rendered text nodes + placeholders in place (MutationObserver), so screens stay written in English.
   Production should use real i18n keys; this file doubles as the EN→AR glossary. */
(function () {
  const PAIRS = [
  // web platform build (Genie Web Platform Redesign)
  ["Performance", "الأداء"], ["Engagement", "التفاعل"], ["Usage & hours", "الاستخدام والساعات"], ["7 days", "7 أيام"], ["30 days", "30 يومًا"], ["This term", "هذا الفصل"], ["Export PDF", "تصدير PDF"], ["Average overall score", "متوسط الدرجة الإجمالية"], ["Task completion rate", "معدل إكمال المهام"], ["Students improving", "طلاب في تحسّن"], ["Students at risk", "طلاب معرّضون للخطر"], ["Score trend by skill", "اتجاه الدرجات حسب المهارة"], ["Skill breakdown", "تفصيل المهارات"], ["Score distribution", "توزيع الدرجات"], ["Level progression", "التقدّم بين المستويات"], ["Ready to move up", "جاهز للانتقال"], ["Still practising", "ما زال يتدرّب"], ["Group comparison", "مقارنة المجموعات"], ["Change", "التغيّر"], ["On track", "على المسار"], ["Watch", "متابعة"], ["Needs support", "يحتاج إلى دعم"], ["Reason", "السبب"], ["Score", "الدرجة"], ["Remind", "تذكير"], ["Most improved", "الأكثر تحسنًا"], ["AI insights", "رؤى الذكاء الاصطناعي"], ["Weekly active students", "الطلاب النشطون أسبوعيًا"], ["Sessions per student", "الجلسات لكل طالب"], ["Average session length", "متوسط مدة الجلسة"], ["Inactive 7+ days", "غير نشط منذ 7 أيام أو أكثر"], ["When students practise", "متى يتدرّب الطلاب"], ["Task funnel", "مسار المهام"], ["Assigned", "مُسندة"], ["Reviewed by teacher", "راجعها المعلّم"], ["Active students per week", "الطلاب النشطون أسبوعيًا"], ["Time in session", "الوقت داخل الجلسة"], ["Teacher review backlog", "المراجعات المتأخرة للمعلّمين"], ["Waiting", "بانتظار"], ["Oldest", "الأقدم"], ["Reviewed this week", "تمت مراجعتها هذا الأسبوع"], ["Speaking hours this month", "ساعات التحدث هذا الشهر"], ["Hours per active student", "الساعات لكل طالب نشط"], ["Over or near their tier", "تجاوزوا فئتهم أو قاربوها"], ["Tier utilisation", "استخدام الفئات"], ["Hours by group", "الساعات حسب المجموعة"], ["Per student", "لكل طالب"], ["Over tier", "تجاوز الفئة"], ["Fewer", "أقل"], ["More", "أكثر"], ["Enrolled", "المسجّلون"], ["Student speaking", "تحدّث الطالب"], ["Listening to AI partner", "الاستماع إلى الشريك الذكي"], ["Silence", "الصمت"], ["No speaking data yet", "لا توجد بيانات تحدث بعد"], ["Achievements", "الإنجازات"], ["AI characters", "شخصيات الذكاء الاصطناعي"], ["Onboarding analytics", "تحليلات التهيئة"], ["Incentive program", "برنامج الحوافز"], ["Help center", "مركز المساعدة"], ["Support", "الدعم"], ["Recharge", "شحن"], ["View weekly reports", "عرض التقارير الأسبوعية"], ["Speaking hours this week", "ساعات التحدث هذا الأسبوع"], ["Average fluency score", "متوسط درجة الطلاقة"], ["Active speaking students", "الطلاب النشطون في التحدث"], ["Sessions completed", "الجلسات المكتملة"], ["This week", "هذا الأسبوع"], ["Students needing attention", "طلاب يحتاجون إلى متابعة"], ["Common speaking issues", "مشكلات التحدث الشائعة"], ["Top students", "أفضل الطلاب"], ["Recent activities", "الأنشطة الأخيرة"], ["Latest speaking practice updates", "آخر تحديثات ممارسة التحدث"], ["AI recommendations", "توصيات الذكاء الاصطناعي"], ["Implement", "تطبيق"], ["Hours spoken", "ساعات التحدث"], ["Mark all as read", "تحديد الكل كمقروء"], ["All", "الكل"], ["Archived", "مؤرشفة"], ["Settings", "الإعدادات"], ["Earlier", "سابقًا"], ["New", "جديد"], ["Save settings", "حفظ الإعدادات"], ["Reset to defaults", "استعادة الافتراضيات"], ["Search courses", "البحث في الدورات"], ["Levels", "المستويات"], ["Created", "تاريخ الإنشاء"], ["Course details", "تفاصيل الدورة"], ["Set up with AI", "الإعداد بالذكاء الاصطناعي"], ["Edit course", "تعديل الدورة"], ["Learning goals", "أهداف التعلّم"], ["Content summary", "ملخص المحتوى"], ["Course levels", "مستويات الدورة"], ["Analysis", "التحليل"], ["Total levels", "إجمالي المستويات"], ["Student distribution", "توزيع الطلاب"], ["Top performers", "الأفضل أداءً"], ["Progress timeline", "الجدول الزمني للتقدّم"], ["Edit level", "تعديل المستوى"], ["Add vocabulary", "إضافة مفردات"], ["Add idiom", "إضافة تعبير"], ["Key performance indicators", "مؤشرات الأداء الرئيسية"], ["Learning materials", "مواد التعلّم"], ["Vocabularies", "المفردات"], ["Idioms", "التعابير"], ["Task", "المهمة"], ["Duration", "المدة"], ["Priority", "الأولوية"], ["Word", "الكلمة"], ["Category", "الفئة"], ["Present", "المضارع"], ["Past", "الماضي"], ["Past participle", "التصريف الثالث"], ["Present participle", "صيغة -ing"], ["Example", "مثال"], ["Edit task", "تعديل المهمة"], ["Delete task", "حذف المهمة"], ["Task brief", "موجز المهمة"], ["Recent attempts", "المحاولات الأخيرة"], ["Completion", "الإكمال"], ["Time-based", "حسب الوقت"], ["Topic-based", "حسب الموضوع"], ["High", "عالية"], ["Medium", "متوسطة"], ["Low", "منخفضة"], ["Create character", "إنشاء شخصية"], ["Search characters", "البحث في الشخصيات"], ["Background", "الخلفية"], ["Interests", "الاهتمامات"], ["Conversation topics", "مواضيع المحادثة"], ["Used in", "مستخدمة في"], ["Edit character", "تعديل الشخصية"], ["Delete", "حذف"], ["Character information", "معلومات الشخصية"], ["Name", "الاسم"], ["Import students", "استيراد الطلاب"], ["Blocked", "محظور"], ["Edit", "تعديل"], ["Send reminder", "إرسال تذكير"], ["Student reports", "تقارير الطالب"], ["Learning progress", "تقدّم التعلّم"], ["Performance statistics", "إحصاءات الأداء"], ["Student information", "معلومات الطالب"], ["Phone number", "رقم الهاتف"], ["Address", "العنوان"], ["Student invitations", "دعوات الطلاب"], ["Create invitation", "إنشاء دعوة"], ["Active invitations", "الدعوات النشطة"], ["Total registrations", "إجمالي التسجيلات"], ["Expiring soon", "تنتهي قريبًا"], ["Total invitations", "إجمالي الدعوات"], ["Uses", "الاستخدامات"], ["Expires", "تنتهي في"], ["Copy link", "نسخ الرابط"], ["Disable", "تعطيل"], ["Enable", "تفعيل"], ["Expired", "منتهية"], ["Disabled", "معطّلة"], ["Max reached", "بلغت الحد"], ["Period", "الفترة"], ["Invite students", "دعوة الطلاب"], ["Upcoming", "قادمة"], ["Ended", "منتهية"], ["Specialty", "التخصص"], ["Delete user", "حذف المستخدم"], ["Groups taught", "المجموعات التي يدرّسها"], ["Roles", "الأدوار"], ["Permission matrix", "مصفوفة الصلاحيات"], ["Module", "الوحدة"], ["Permission", "الصلاحية"], ["Pending", "قيد الانتظار"], ["Active schedules", "الجداول النشطة"], ["Completed this week", "المكتملة هذا الأسبوع"], ["Individual reports", "التقارير الفردية"], ["Group analysis", "تحليل المجموعة"], ["Schedules only", "الجداول فقط"], ["Requests only", "الطلبات فقط"], ["Created by", "أنشأه"], ["View", "عرض"], ["Download", "تنزيل"], ["Generated", "تم الإنشاء"], ["Paused", "متوقف"], ["Resume", "استئناف"], ["Retry", "إعادة المحاولة"], ["Weekly practice report", "تقرير الممارسة الأسبوعي"], ["Open student", "فتح الطالب"], ["Total practice", "إجمالي الممارسة"], ["Speaking time", "وقت التحدث"], ["Listening time", "وقت الاستماع"], ["Silence time", "وقت الصمت"], ["Fluency score", "درجة الطلاقة"], ["Teacher focus areas", "مجالات تركيز المعلّم"], ["Strengths", "نقاط القوة"], ["Areas for improvement", "مجالات التحسين"], ["Topics discussed", "المواضيع التي نوقشت"], ["Grammar analysis", "تحليل القواعد"], ["Pronunciation analysis", "تحليل النطق"], ["Vocabulary analysis", "تحليل المفردات"], ["Wallet balance", "رصيد المحفظة"], ["Hours used this month", "الساعات المستخدمة هذا الشهر"], ["Over their tier", "تجاوزوا فئتهم"], ["Avg per student", "المتوسط لكل طالب"], ["Consumption tiers", "فئات الاستهلاك"], ["Highest usage", "الاستخدام الأعلى"], ["Billing & subscription", "الفوترة والاشتراك"], ["View all plans", "عرض كل الخطط"], ["Hide plans", "إخفاء الخطط"], ["Plan", "الخطة"], ["Avg daily usage", "متوسط الاستخدام اليومي"], ["Est. days left", "الأيام المتبقية تقديريًا"], ["Total usage", "إجمالي الاستخدام"], ["Usage trends", "اتجاهات الاستخدام"], ["Top consumers this month", "الأكثر استهلاكًا هذا الشهر"], ["Transaction history", "سجل المعاملات"], ["Subscriptions", "الاشتراكات"], ["Select plan", "اختيار الخطة"], ["Most popular", "الأكثر شيوعًا"], ["Request payout", "طلب صرف"], ["Incentive wallet", "محفظة الحوافز"], ["Your referral link", "رابط الإحالة الخاص بك"], ["Copy", "نسخ"], ["Clicks", "النقرات"], ["Sign-ups", "التسجيلات"], ["Total referrals", "إجمالي الإحالات"], ["Active subscriptions", "الاشتراكات النشطة"], ["Conversion rate", "معدل التحويل"], ["Monthly growth", "النمو الشهري"], ["Monthly earnings", "الأرباح الشهرية"], ["Payout history", "سجل الصرف"], ["Joined", "تاريخ الانضمام"], ["Earnings", "الأرباح"], ["Total earned", "إجمالي الأرباح"], ["Total withdrawn", "إجمالي المسحوب"], ["Personal information", "المعلومات الشخصية"], ["Password", "كلمة المرور"], ["Preferences", "التفضيلات"], ["Leave", "مغادرة"], ["Organisation", "المؤسسة"], ["Company name", "اسم الشركة"], ["Proficiency levels", "مستويات الكفاءة"], ["Browse by category", "التصفح حسب الفئة"], ["Popular articles", "المقالات الشائعة"], ["Frequently asked questions", "الأسئلة الشائعة"], ["Need more help?", "تحتاج إلى مساعدة إضافية؟"], ["Contact support", "التواصل مع الدعم"], ["Search", "بحث"], ["Send us a message", "أرسل لنا رسالة"], ["Send message", "إرسال الرسالة"], ["Department", "القسم"], ["Subject", "الموضوع"], ["Message", "الرسالة"], ["Other ways to reach us", "طرق أخرى للتواصل"], ["Response time", "وقت الاستجابة"], ["Related articles", "مقالات ذات صلة"], ["Was this article helpful?", "هل كانت هذه المقالة مفيدة؟"], ["Yes", "نعم"], ["No", "لا"], ["Share", "مشاركة"], ["Sign in to your account", "تسجيل الدخول إلى حسابك"], ["Sign in", "تسجيل الدخول"], ["Remember me", "تذكّرني"], ["Forgot password?", "نسيت كلمة المرور؟"], ["Create an account", "إنشاء حساب"], ["Create your account", "أنشئ حسابك"], ["Create account", "إنشاء الحساب"], ["Forgot password", "نسيت كلمة المرور"], ["Send reset link", "إرسال رابط إعادة التعيين"], ["Join as a student", "الانضمام كطالب"], ["Register now", "سجّل الآن"], ["Join group", "الانضمام إلى المجموعة"], ["Page not found", "الصفحة غير موجودة"], ["Return to home", "العودة إلى الرئيسية"],
  // platform patterns
  ["Platform patterns", "أنماط المنصّة"], ["Reference", "مرجع"], ["2 unread", "2 غير مقروءة"], ["View all notifications", "عرض كل الإشعارات"], ["Hour wallet is empty", "محفظة الساعات فارغة"], ["3 students are blocked from speaking sessions", "3 طلاب محظورون من جلسات المحادثة"], ["Report ready: Student progress", "التقرير جاهز: تقدّم الطلاب"], ["Requested by Admin User", "بطلب من مستخدم مسؤول"], ["Payment received", "تم استلام الدفعة"], ["10 min ago", "منذ 10 دقائق"], ["1 hr ago", "منذ ساعة"], ["Notification", "إشعار"], ["Recharge to resume speaking sessions. Blocked students keep their progress.", "اشحن لاستئناف جلسات المحادثة. يحتفظ الطلاب المحظورون بتقدّمهم."], ["Mark as read", "تعليم كمقروء"], ["Archive", "أرشفة"], ["Severity", "الخطورة"], ["Critical", "حرج"], ["Wallet", "المحفظة"], ["Received", "تاريخ الاستلام"], ["Affected students", "الطلاب المتأثرون"], ["Balance", "الرصيد"], ["Workspaces", "مساحات العمل"], ["+ Create workspace", "+ إنشاء مساحة عمل"], ["Manager", "مدير"], ["Enter verification code", "أدخل رمز التحقق"], ["Payment successful", "تمت عملية الدفع بنجاح"], ["Done", "تم"], ["Download receipt", "تنزيل الإيصال"], ["Transaction ID", "رقم المعاملة"], ["Hours added", "الساعات المضافة"], ["Method", "طريقة الدفع"], ["Payment failed", "فشلت عملية الدفع"], ["No hours were added and your card was not charged.", "لم تُضَف أي ساعات ولم يتم خصم أي مبلغ من بطاقتك."], ["Try again", "أعد المحاولة"], ["Card declined by issuer.", "رفض البنك المُصدِر البطاقة."], ["Attempted", "وقت المحاولة"], ["Welcome", "مرحبًا"], ["Get the Speaking Genie app", "حمّل تطبيق Speaking Genie"], ["Email me the link", "أرسل لي الرابط بالبريد"], ["Assign tier", "تعيين الفئة"], ["Selected students", "الطلاب المحدّدون"], ["4 students selected", "تم تحديد 4 طلاب"], ["Generate a course plan", "إنشاء خطة دورة"], ["Audience and goals", "الجمهور والأهداف"], ["From level", "من المستوى"], ["To level", "إلى المستوى"], ["Generate plan", "إنشاء الخطة"], ["AI course setup", "إعداد الدورة بالذكاء الاصطناعي"], ["Review course plan", "مراجعة خطة الدورة"], ["Apply course plan", "تطبيق خطة الدورة"], ["Regenerate", "إعادة الإنشاء"], ["Vocabulary", "المفردات"], ["Applying course plan", "جارٍ تطبيق خطة الدورة"], ["Run in background", "التشغيل في الخلفية"], ["Queued", "في قائمة الانتظار"], ["Page states", "حالات الصفحة"], ["OTP verification", "التحقق برمز لمرة واحدة"], ["Payment results", "نتائج الدفع"], ["Workspace switcher", "مبدّل مساحات العمل"],
  // shell
  ["Search…", "بحث…"], ["Overview", "نظرة عامة"], ["Teaching", "التدريس"], ["Insights", "الرؤى"], ["Administration", "الإدارة"], ["Account", "الحساب"], ["Dashboard", "لوحة التحكم"], ["Courses", "الدورات"], ["Groups", "المجموعات"], ["Students", "الطلاب"], ["Reports", "التقارير"], ["Consumption", "الاستهلاك"], ["Users", "المستخدمون"], ["Roles & permissions", "الأدوار والصلاحيات"], ["Billing", "الفوترة"], ["Company profile", "ملف الشركة"], ["My groups", "مجموعاتي"], ["Course content", "محتوى الدورة"], ["VIEWING AS", "العرض بصفة"], ["Admin", "مسؤول"], ["Teacher", "معلّم"], ["Admin User", "مستخدم مسؤول"], ["Cairo Language Center", "مركز القاهرة للغات"], ["General English", "الإنجليزية العامة"], ["Business English", "الإنجليزية للأعمال"], ["My profile", "ملفي الشخصي"], ["Student progress", "تقدّم الطلاب"], ["English", "الإنجليزية"], ["Workspace", "مساحة العمل"], ["all students", "كل الطلاب"],
  // common
  ["Cancel", "إلغاء"], ["Save changes", "حفظ التغييرات"], ["Active", "نشط"], ["Invited", "مدعو"], ["Draft", "مسودة"], ["Starting", "قيد البدء"], ["Ready", "جاهز"], ["Processing", "قيد المعالجة"], ["Failed", "فشل"], ["Paid", "مدفوعة"], ["Empty", "فارغة"], ["Review", "مراجعة"], ["Over limit", "تجاوز الحد"], ["Inactive", "غير نشط"], ["Complete", "مكتمل"], ["Behind", "متأخر"], ["Current", "الحالي"], ["Scheduled", "مجدول"], ["In progress", "قيد التنفيذ"], ["System", "نظامي"], ["Custom", "مخصّص"], ["Yesterday", "أمس"], ["Today", "اليوم"], ["Never", "أبدًا"], ["Last 30 days", "آخر 30 يومًا"], ["Export CSV", "تصدير CSV"], ["Import CSV", "استيراد CSV"], ["Student", "الطالب"], ["Course", "الدورة"], ["Level", "المستوى"], ["Tier", "الفئة"], ["Progress", "التقدّم"], ["Status", "الحالة"], ["Course & level", "الدورة والمستوى"], ["Group", "المجموعة"], ["Schedule", "الجدول"], ["Hours", "الساعات"], ["Last session", "آخر جلسة"], ["Flag", "تنبيه"], ["User", "المستخدم"], ["Role", "الدور"], ["Last active", "آخر نشاط"], ["Type", "النوع"], ["Target", "الهدف"], ["Range", "النطاق"], ["Accuracy", "الدقة"], ["Fluency", "الطلاقة"], ["Requested by", "مقدّم الطلب"], ["Date", "التاريخ"], ["Description", "الوصف"], ["Amount", "المبلغ"], ["Tasks", "المهام"], ["Trend", "الاتجاه"], ["Used", "المستخدم"], ["Avg score", "متوسط الدرجة"], ["of", "من"], ["Unassigned", "غير معيّن"], ["Not scheduled", "غير مجدول"], ["Daily", "يوميًا"], ["Enterprise", "المؤسسات"], ["Unlimited", "غير محدود"], ["Role: All", "الدور: الكل"], ["Status: Active", "الحالة: نشط"], ["Type: All", "النوع: الكل"], ["Status: All", "الحالة: الكل"], ["Columns", "الأعمدة"], ["Load more", "تحميل المزيد"],
  // dashboard
  ["Good morning, Admin", "صباح الخير، مسؤول النظام"], ["Enterprise plan", "خطة المؤسسات"], ["Add student", "إضافة طالب"], ["Hour wallet is empty.", "محفظة الساعات فارغة."], ["Recharge to resume speaking sessions — 3 students are already blocked.", "اشحن المحفظة لاستئناف جلسات المحادثة — تم إيقاف 3 طلاب بالفعل."], ["Recharge hours", "شحن الساعات"], ["Active students", "الطلاب النشطون"], ["Hours delivered", "الساعات المقدَّمة"], ["Avg completion", "متوسط الإكمال"], ["Tasks reviewed", "المهام المراجَعة"], ["24 awaiting a teacher", "24 بانتظار المعلّم"], ["Speaking hours per week", "ساعات المحادثة أسبوعيًا"], ["Delivered across all groups", "عبر جميع المجموعات"], ["Hours used", "الساعات المستخدمة"], ["Tier ceiling", "سقف الفئة"], ["Needs attention", "يحتاج إلى متابعة"], ["Ranked by urgency", "مرتبة حسب الأولوية"], ["Students over their tier", "طلاب تجاوزوا فئتهم"], ["Sessions blocked until recharge", "الجلسات موقوفة حتى الشحن"], ["Sessions awaiting feedback", "جلسات بانتظار الملاحظات"], ["Oldest is 6 days old", "أقدمها منذ 6 أيام"], ["Invites not accepted", "دعوات لم تُقبل"], ["Sent more than 7 days ago", "أُرسلت قبل أكثر من 7 أيام"], ["Levels with no content", "مستويات بلا محتوى"], ["Level B2 has no scenarios", "المستوى B2 بلا سيناريوهات"], ["Recent activity", "النشاط الأخير"], ["You created the Finance role with 4 permissions", "أنشأتَ دور المالية بأربع صلاحيات"],
  // roles
  ["Pick a role, then grant permissions by area. Changes apply to everyone holding the role.", "اختر دورًا ثم امنح الصلاحيات حسب المجال. تُطبَّق التغييرات على كل من يحمل هذا الدور."], ["Audit matrix", "مصفوفة التدقيق"], ["Create role", "إنشاء دور"], ["Center manager", "مدير المركز"], ["Finance", "المالية"], ["Full access · 2 users", "وصول كامل · مستخدمان"], ["Revoke all", "إلغاء الكل"], ["Grant all", "منح الكل"], ["permissions granted ·", "صلاحية ممنوحة ·"], ["Role saved", "تم حفظ الدور"], ["System roles cannot be deleted. Duplicate one to build a custom role from a known-good baseline.", "لا يمكن حذف أدوار النظام. انسخ أحدها لبناء دور مخصّص من أساس موثوق."], ["Courses & content", "الدورات والمحتوى"], ["Levels, vocabulary, tasks, flashcards, scenarios", "المستويات والمفردات والمهام والبطاقات والسيناريوهات"], ["Students & groups", "الطلاب والمجموعات"], ["Enrolment, tiers, cohorts", "التسجيل والفئات والدفعات"], ["Reports and hour consumption", "التقارير واستهلاك الساعات"], ["Users, roles, billing, company profile", "المستخدمون والأدوار والفوترة وملف الشركة"], ["View courses", "عرض الدورات"], ["Create & edit courses", "إنشاء الدورات وتعديلها"], ["Manage levels", "إدارة المستويات"], ["Manage content items", "إدارة عناصر المحتوى"], ["Generate content with AI", "إنشاء المحتوى بالذكاء الاصطناعي"], ["Delete courses", "حذف الدورات"], ["View students", "عرض الطلاب"], ["Add & invite students", "إضافة الطلاب ودعوتهم"], ["Assign tier & level", "تعيين الفئة والمستوى"], ["Manage groups", "إدارة المجموعات"], ["View reports", "عرض التقارير"], ["Request & schedule reports", "طلب التقارير وجدولتها"], ["View consumption", "عرض الاستهلاك"], ["Manage consumption tiers", "إدارة فئات الاستهلاك"], ["View users", "عرض المستخدمين"], ["Invite & remove users", "دعوة المستخدمين وإزالتهم"], ["Manage roles & permissions", "إدارة الأدوار والصلاحيات"], ["View billing", "عرض الفوترة"], ["Recharge hours & change plan", "شحن الساعات وتغيير الخطة"], ["Edit company profile", "تعديل ملف الشركة"],
  // students
  ["359 enrolled across 2 courses.", "359 طالبًا مسجّلًا في دورتين."], ["Invitations", "الدعوات"], ["Search students…", "ابحث عن الطلاب…"], ["All students", "كل الطلاب"], ["Change tier", "تغيير الفئة"], ["Move level", "نقل المستوى"], ["Request report", "طلب تقرير"], ["Course progress", "تقدّم الدورة"], ["12 of 35 tasks completed", "12 من 35 مهمة مكتملة"], ["Sessions", "الجلسات"], ["Streak", "أيام متتالية"], ["consecutive days", "أيام متواصلة"], ["Recent speaking sessions", "جلسات المحادثة الأخيرة"], ["Scored on range, accuracy and fluency", "تُقيَّم على النطاق والدقة والطلاقة"], ["View all 24 sessions", "عرض كل الجلسات (24)"], ["Speaking KPIs", "مؤشرات أداء المحادثة"], ["Produces simple phrases about people and places.", "يُنتج عبارات بسيطة عن الأشخاص والأماكن."], ["Limited control of past tense; recurring article errors.", "تحكّم محدود في الزمن الماضي؛ أخطاء متكررة في أدوات التعريف."], ["Short utterances, pauses shortening month over month.", "عبارات قصيرة، والتوقفات تقصر شهرًا بعد شهر."], ["Hours this month", "ساعات هذا الشهر"], ["/ 20 hrs", "/ 20 ساعة"], ["34% of the Regular tier used · resets Sep 1", "استُخدم 34% من الفئة العادية · يُعاد الضبط في 1 سبتمبر"],
  // course
  ["Generate with AI", "إنشاء بالذكاء الاصطناعي"], ["Course settings", "إعدادات الدورة"], ["Publish changes", "نشر التغييرات"], ["Outline", "المخطط"], ["+ Level", "+ مستوى"], ["Goals & KPIs", "الأهداف ومؤشرات الأداء"], ["Vocabulary & idioms", "المفردات والتعابير"], ["Conversational tasks", "مهام المحادثة"], ["Flashcards", "البطاقات التعليمية"], ["Real-life scenarios", "سيناريوهات واقعية"], ["Level goals & KPIs", "أهداف المستوى ومؤشرات الأداء"], ["Add goal", "إضافة هدف"], ["Add entry", "إضافة مدخل"], ["Add task", "إضافة مهمة"], ["Add card", "إضافة بطاقة"], ["Add scenario", "إضافة سيناريو"], ["Reorder", "إعادة الترتيب"], ["items in", "عنصرًا في"], ["Target lexis practised in this level's tasks", "المفردات المستهدفة في مهام هذا المستوى"], ["Live speaking prompts scored on range, accuracy and fluency", "محفزات محادثة مباشرة تُقيَّم على النطاق والدقة والطلاقة"], ["Spaced-repetition drills unlocked with each task", "تدريبات تكرار متباعد تُفتح مع كل مهمة"], ["Multi-turn simulations combining the level's tasks and lexis", "محاكاة متعددة الأدوار تجمع مهام المستوى ومفرداته"], ["What a student must demonstrate to advance", "ما يجب أن يُظهره الطالب للتقدّم"], ["Applied to every speaking task generated at this level.", "تُطبَّق على كل مهمة محادثة تُنشأ في هذا المستوى."], ["Max output words", "الحد الأقصى لكلمات الإخراج"], ["Speaking speed", "سرعة التحدث"], ["Students at level", "طلاب المستوى"], ["Goals", "الأهداف"], ["+ Add goal", "+ إضافة هدف"],
  // groups
  ["A group pairs a course level with a teacher and a cohort of students.", "تجمع المجموعة بين مستوى دورة ومعلّم ودفعة من الطلاب."], ["Create group", "إنشاء مجموعة"], ["Search groups…", "ابحث عن المجموعات…"], ["All groups", "كل المجموعات"], ["Edit group", "تعديل المجموعة"], ["Add students", "إضافة طلاب"], ["Avg progress", "متوسط التقدّم"], ["Hours this month", "ساعات هذا الشهر"], ["Needs review", "بحاجة لمراجعة"], ["Oldest 2 days old", "أقدمها منذ يومين"], ["Roster", "قائمة الطلاب"], ["Content & pacing", "المحتوى والجدولة"], ["Analytics", "التحليلات"], ["Export roster", "تصدير القائمة"], ["Tasks completed per week", "المهام المكتملة أسبوعيًا"], ["Group total across 12 students", "إجمالي المجموعة لـ12 طالبًا"], ["Average KPIs", "متوسط مؤشرات الأداء"], ["Group mean, last 30 days", "متوسط المجموعة، آخر 30 يومًا"], ["Completed", "مكتملة"], ["Pacing plan", "خطة الجدولة"], ["content unlocks on schedule", "يُفتح المحتوى حسب الجدول"], ["Course content →", "محتوى الدورة ←"], ["Introductions & routines", "التعارف والروتين"], ["Describing places", "وصف الأماكن"], ["Shopping & money", "التسوق والمال"], ["Travel & directions", "السفر والاتجاهات"], ["Work & colleagues", "العمل والزملاء"], ["Pacing is 1 week behind", "الجدولة متأخرة أسبوعًا واحدًا"], ["Week 3 tasks are at 41% completion. Consider unlocking week 5 later or reducing the weekly task count.", "مهام الأسبوع 3 مكتملة بنسبة 41%. فكّر في تأجيل فتح الأسبوع 5 أو تقليل عدد المهام الأسبوعية."], ["Adjust schedule", "تعديل الجدول"], ["Teacher view — progress and session feedback. Course content and billing are read-only.", "عرض المعلّم — التقدّم وملاحظات الجلسات. محتوى الدورة والفوترة للقراءة فقط."], ["Export progress", "تصدير التقدّم"], ["Oldest first", "الأقدم أولًا"],
  // consumption / billing
  ["Speaking hours used against each student's monthly tier.", "ساعات المحادثة المستخدمة مقابل الفئة الشهرية لكل طالب."], ["New tier", "فئة جديدة"], ["Sessions are paused for 359 students until the workspace is recharged.", "الجلسات متوقفة لـ359 طالبًا حتى يُعاد شحن مساحة العمل."], ["Total students", "إجمالي الطلاب"], ["Sessions blocked", "جلسات موقوفة"], ["Avg monthly usage", "متوسط الاستخدام الشهري"], ["hours per student", "ساعة لكل طالب"], ["Used this month", "المستخدم هذا الشهر"], ["hours across the workspace", "ساعة عبر مساحة العمل"], ["Tiers", "الفئات"], ["Monthly hour ceiling per student", "سقف الساعات الشهري لكل طالب"], ["Light user", "مستخدم خفيف"], ["Regular user", "مستخدم عادي"], ["Heavy user", "مستخدم نشط"], ["Intensive user", "مستخدم مكثّف"], ["Minimal usage", "استخدام محدود"], ["Average students", "طلاب متوسطو النشاط"], ["Highly engaged students", "طلاب شديدو التفاعل"], ["DEFAULT", "افتراضي"], ["Highest usage this month", "الأعلى استخدامًا هذا الشهر"], ["Sorted by share of tier consumed", "مرتبة حسب نسبة استهلاك الفئة"], ["August 2026", "أغسطس 2026"], ["Plan, hour wallet and invoices.", "الخطة ومحفظة الساعات والفواتير."], ["Change plan", "تغيير الخطة"], ["Current plan", "الخطة الحالية"], ["Rate per hour", "السعر لكل ساعة"], ["Max students", "الحد الأقصى للطلاب"], ["Started", "تاريخ البدء"], ["Renews", "التجديد"], ["Hour wallet", "محفظة الساعات"], ["hours remaining", "ساعة متبقية"], ["Purchased", "المشتراة"], ["Avg daily use", "متوسط الاستخدام اليومي"], ["Days left", "الأيام المتبقية"], ["Invoices & recharges", "الفواتير وعمليات الشحن"], ["Billed to Cairo Language Center", "تُصدر باسم مركز القاهرة للغات"], ["Payment method", "طريقة الدفع"], ["Hour recharge", "شحن ساعات"], ["annual", "سنوي"], ["Showing the last 4 of 11 documents", "عرض آخر 4 من 11 مستندًا"],
  // users
  ["Staff accounts for this workspace. Students live under Students.", "حسابات الموظفين في مساحة العمل هذه. الطلاب موجودون ضمن قسم الطلاب."], ["Pending invites", "دعوات معلّقة"], ["Invite user", "دعوة مستخدم"], ["Search by name or email…", "ابحث بالاسم أو البريد الإلكتروني…"], ["Pending assignment", "بانتظار التعيين"], ["All users", "كل المستخدمين"], ["Reset password", "إعادة تعيين كلمة المرور"], ["Edit user", "تعديل المستخدم"], ["21 students in reach", "21 طالبًا ضمن النطاق"], ["Sessions reviewed", "الجلسات المراجَعة"], ["Avg turnaround", "متوسط وقت الاستجابة"], ["Feedback after a session", "الملاحظات بعد الجلسة"], ["Awaiting review", "بانتظار المراجعة"], ["Assigned groups", "المجموعات المعيّنة"], ["Determines which students this user can see", "تحدد الطلاب الذين يمكن لهذا المستخدم رؤيتهم"], ["Assign", "تعيين"], ["Audit log", "سجل التدقيق"], ["Actions taken by this user", "الإجراءات التي اتخذها هذا المستخدم"], ["Open full audit log", "فتح سجل التدقيق الكامل"], ["Effective permissions", "الصلاحيات الفعلية"], ["Inherited from the Teacher role", "موروثة من دور المعلّم"], ["Edit role", "تعديل الدور"], ["Permissions are granted by role only. To give this user more access, change their role or edit the Teacher role.", "تُمنح الصلاحيات عبر الأدوار فقط. لمنح هذا المستخدم وصولًا أكبر، غيّر دوره أو عدّل دور المعلّم."], ["Deactivate user", "إلغاء تفعيل المستخدم"], ["Sessions end immediately and their groups become unassigned. History is kept for reporting.", "تنتهي الجلسات فورًا وتصبح مجموعاته غير معيّنة. يُحتفظ بالسجل لأغراض التقارير."], ["Deactivate", "إلغاء التفعيل"], ["Role: Teacher →", "الدور: معلّم ←"],
  // reports
  ["Request a one-off report or put it on a schedule.", "اطلب تقريرًا لمرة واحدة أو جدوله."], ["Group summary", "ملخص المجموعة"], ["Teacher activity", "نشاط المعلّمين"], ["Per-student levels, tasks and KPI trend for a date range.", "مستويات كل طالب ومهامه واتجاه مؤشرات أدائه لفترة محددة."], ["Cohort completion and average scores by level.", "إكمال الدفعة ومتوسط الدرجات حسب المستوى."], ["Hours used against tier, per student or workspace-wide.", "الساعات المستخدمة مقابل الفئة، لكل طالب أو لمساحة العمل كاملة."], ["Sessions reviewed and feedback turnaround time.", "الجلسات المراجَعة ووقت الاستجابة للملاحظات."], ["Request →", "اطلب ←"], ["History", "السجل"], ["Schedules", "الجداول"], ["All teachers", "كل المعلّمين"], ["monthly", "شهري"], ["All reports", "كل التقارير"], ["Share link", "مشاركة الرابط"], ["Download PDF", "تنزيل PDF"], ["Filters", "عوامل التصفية"], ["Min. 1 session", "جلسة واحدة على الأقل"], ["Students covered", "الطلاب المشمولون"], ["47 with no session excluded", "استُبعد 47 بلا جلسات"], ["Tasks completed", "المهام المكتملة"], ["Completion by level", "الإكمال حسب المستوى"], ["Students enrolled vs tasks completed", "الطلاب المسجّلون مقابل المهام المكتملة"], ["Completion %", "نسبة الإكمال"], ["KPI averages", "متوسطات مؤشرات الأداء"], ["Weighted across 359 students", "مرجّحة عبر 359 طالبًا"], ["Scores are averaged per attempt, not per student, so heavy users weigh more.", "تُحسب الدرجات لكل محاولة لا لكل طالب، لذا يكون للمستخدمين الأكثر نشاطًا وزن أكبر."], ["Per-student detail", "تفاصيل كل طالب"], ["Sorted by tasks completed", "مرتبة حسب المهام المكتملة"],
  // company / profile
  ["Workspace identity, contact details and defaults for new students.", "هوية مساحة العمل وبيانات الاتصال والإعدادات الافتراضية للطلاب الجدد."], ["Identity & contact", "الهوية والاتصال"], ["Student defaults", "إعدادات الطلاب الافتراضية"], ["Branding", "العلامة التجارية"], ["Languages", "اللغات"], ["Integrations", "التكاملات"], ["Identity", "الهوية"], ["Logo", "الشعار"], ["Workspace logo", "شعار مساحة العمل"], ["SVG or PNG, square, at least 256×256. Shown to students in the app.", "SVG أو PNG، مربع، بحجم 256×256 على الأقل. يظهر للطلاب في التطبيق."], ["Upload", "رفع"], ["Remove", "إزالة"], ["Legal name", "الاسم القانوني"], ["Display name", "الاسم المعروض"], ["Primary contact", "جهة الاتصال الرئيسية"], ["Contact email", "بريد التواصل"], ["Phone", "الهاتف"], ["Tax / VAT number", "الرقم الضريبي"], ["Country", "الدولة"], ["Time zone", "المنطقة الزمنية"], ["Defaults for new students", "الإعدادات الافتراضية للطلاب الجدد"], ["Applied on enrolment unless overridden.", "تُطبَّق عند التسجيل ما لم تُغيَّر."], ["Consumption tier", "فئة الاستهلاك"], ["Interface language", "لغة الواجهة"], ["English (EN)", "الإنجليزية (EN)"], ["Students may self-enrol with an invite link", "يمكن للطلاب التسجيل ذاتيًا عبر رابط دعوة"], ["Seats are still counted against the plan", "تُحتسب المقاعد ضمن الخطة"], ["Block sessions when a student passes their tier", "إيقاف الجلسات عند تجاوز الطالب فئته"], ["Off means the workspace wallet absorbs the overage", "عند الإيقاف، تتحمّل محفظة مساحة العمل الزيادة"], ["Weekly progress digest to group teachers", "ملخص أسبوعي للتقدّم لمعلّمي المجموعات"], ["Sent Monday 08:00 local time", "يُرسل الاثنين 08:00 بالتوقيت المحلي"], ["Discard", "تجاهل"], ["Your account, security and notification preferences.", "حسابك والأمان وتفضيلات الإشعارات."], ["Change photo", "تغيير الصورة"], ["Full name", "الاسم الكامل"], ["Email", "البريد الإلكتروني"], ["Job title", "المسمى الوظيفي"], ["Notifications", "الإشعارات"], ["Wallet running low", "رصيد المحفظة منخفض"], ["Below 7 days of hours at current usage", "أقل من 7 أيام من الساعات بالاستخدام الحالي"], ["in-app", "داخل التطبيق"], ["In-app", "داخل التطبيق"], ["Student passes their tier", "تجاوز طالب لفئته"], ["Immediate, per student", "فوري، لكل طالب"], ["Report ready", "التقرير جاهز"], ["When a requested report finishes", "عند اكتمال تقرير مطلوب"], ["Weekly workspace digest", "ملخص أسبوعي لمساحة العمل"], ["Monday morning summary", "ملخص صباح الاثنين"], ["Security", "الأمان"], ["Last password change 4 months ago", "آخر تغيير لكلمة المرور منذ 4 أشهر"], ["Change password", "تغيير كلمة المرور"], ["Two-factor auth", "المصادقة الثنائية"], ["Authenticator app", "تطبيق المصادقة"], ["Active sessions", "الجلسات النشطة"], ["THIS DEVICE", "هذا الجهاز"], ["This device", "هذا الجهاز"], ["Revoke", "إلغاء"], ["Cairo, EG", "القاهرة، مصر"], ["Alexandria, EG", "الإسكندرية، مصر"], ["active now", "نشط الآن"], ["Leave workspace", "مغادرة مساحة العمل"], ["You will lose access to Cairo Language Center immediately. Another admin must re-invite you.", "ستفقد الوصول إلى مركز القاهرة للغات فورًا. يجب أن يعيد مسؤول آخر دعوتك."],
  // flows
  ["Create & edit flows", "مسارات الإنشاء والتعديل"], ["Flows", "المسارات"], ["Roles & permissions", "الأدوار والصلاحيات"], ["Edit student", "تعديل الطالب"], ["Add course", "إضافة دورة"], ["Add level", "إضافة مستوى"], ["Delete level", "حذف المستوى"], ["Vocabulary entry", "مدخل مفردات"], ["Conversational task", "مهمة محادثة"], ["Courses · content", "الدورات · المحتوى"], ["Start from a baseline, then grant permissions on the role page.", "ابدأ من أساس، ثم امنح الصلاحيات من صفحة الدور."], ["You will land on the role's permission editor after creating it.", "ستنتقل إلى محرر صلاحيات الدور بعد إنشائه."], ["Role name", "اسم الدور"], ["Key", "المفتاح"], ["Generated from the name. Used in the API and cannot change later.", "يُولَّد من الاسم. يُستخدم في واجهة البرمجة ولا يمكن تغييره لاحقًا."], ["Start from", "البدء من"], ["No permissions", "بلا صلاحيات"], ["Grant everything manually", "امنح كل شيء يدويًا"], ["Copy Center manager", "نسخ مدير المركز"], ["14 permissions", "14 صلاحية"], ["Copy Teacher", "نسخ المعلّم"], ["5 permissions", "5 صلاحيات"], ["They receive an email link valid for 7 days.", "يتلقى رابطًا بالبريد الإلكتروني صالحًا لمدة 7 أيام."], ["Send invite", "إرسال الدعوة"], ["Work email", "البريد الإلكتروني للعمل"], ["Assign to groups", "التعيين في مجموعات"], ["Send a welcome message with the invite", "إرسال رسالة ترحيب مع الدعوة"], ["Seats: 5 of 25 used. Invited users occupy a seat once they accept.", "المقاعد: 5 من 25 مستخدمة. يشغل المستخدم المدعو مقعدًا بمجرد قبوله."], ["Enrol one student. Use Import CSV for a cohort.", "سجّل طالبًا واحدًا. استخدم استيراد CSV لدفعة كاملة."], ["Hours are drawn from the workspace wallet, capped by the student's tier.", "تُخصم الساعات من محفظة مساحة العمل بحد أقصى حسب فئة الطالب."], ["Starting level", "مستوى البدء"], ["Run a placement task before assigning a level", "إجراء مهمة تحديد مستوى قبل التعيين"], ["Email the app invite now", "إرسال دعوة التطبيق بالبريد الآن"], ["Moving a level keeps completed tasks in history.", "نقل المستوى يُبقي المهام المكتملة في السجل."], ["6.8 hrs already used this month.", "استُخدمت 6.8 ساعة هذا الشهر بالفعل."], ["Reset this month's hour usage", "إعادة ضبط استخدام الساعات لهذا الشهر"], ["Delete student", "حذف الطالب"], ["A group pairs a course level with a teacher and a cohort.", "تجمع المجموعة بين مستوى دورة ومعلّم ودفعة."], ["Group name", "اسم المجموعة"], ["Days", "الأيام"], ["Capacity", "السعة"], ["Enrolment is blocked past capacity.", "يُمنع التسجيل بعد بلوغ السعة."], ["Term", "الفصل"], ["Students are added after the group exists, from the Students table or the group page.", "يُضاف الطلاب بعد إنشاء المجموعة، من جدول الطلاب أو صفحة المجموعة."], ["Levels and content are added next.", "تُضاف المستويات والمحتوى لاحقًا."], ["Create course", "إنشاء دورة"], ["Course name", "اسم الدورة"], ["Language", "اللغة"], ["Level framework", "إطار المستويات"], ["Target audiences", "الفئات المستهدفة"], ["Professionals", "المهنيون"], ["General", "عام"], ["Business", "الأعمال"], ["Create the framework's levels automatically", "إنشاء مستويات الإطار تلقائيًا"], ["Six empty levels with CEFR goals and KPIs pre-filled.", "ستة مستويات فارغة بأهداف ومؤشرات CEFR معبأة مسبقًا."], ["Level name", "اسم المستوى"], ["Caps the length of AI turns.", "يحدّ من طول ردود الذكاء الاصطناعي."], ["1.0 is native pace.", "1.0 هي سرعة المتحدث الأصلي."], ["Goals — one per line", "الأهداف — هدف في كل سطر"], ["KPIs (range, accuracy, fluency) are inherited from the framework and editable per level.", "تُورث مؤشرات الأداء (النطاق والدقة والطلاقة) من الإطار ويمكن تعديلها لكل مستوى."], ["Add vocabulary entry", "إضافة مدخل مفردات"], ["Term or idiom", "المصطلح أو التعبير"], ["Meaning", "المعنى"], ["Translation (AR)", "الترجمة (AR)"], ["Generate reference audio at level speed", "إنشاء صوت مرجعي بسرعة المستوى"], ["Entries feed both flashcards and the lexis targets of conversational tasks.", "تُغذي المدخلات البطاقات التعليمية ومفردات مهام المحادثة."], ["Add conversational task", "إضافة مهمة محادثة"], ["Save task", "حفظ المهمة"], ["Task title", "عنوان المهمة"], ["Format", "الصيغة"], ["Monologue", "حديث فردي"], ["Student speaks alone against a prompt", "يتحدث الطالب منفردًا استجابةً لمحفز"], ["Role-play", "لعب أدوار"], ["AI takes a persona and responds", "يتقمص الذكاء الاصطناعي شخصية ويرد"], ["Picture prompt", "محفز صوري"], ["Describe an image", "صِف صورة"], ["Prompt given to the student", "المحفز المقدم للطالب"], ["Target duration (seconds)", "المدة المستهدفة (ثوانٍ)"], ["Minimum turns", "الحد الأدنى للأدوار"], ["Scored on", "يُقيَّم على"], ["Pronunciation", "النطق"], ["Send to the group teacher for feedback after each attempt", "الإرسال لمعلّم المجموعة لإبداء الملاحظات بعد كل محاولة"], ["New consumption tier", "فئة استهلاك جديدة"], ["A monthly hour ceiling you can assign to students.", "سقف ساعات شهري يمكنك تعيينه للطلاب."], ["Create tier", "إنشاء الفئة"], ["Tier name", "اسم الفئة"], ["Monthly hours", "الساعات الشهرية"], ["Marker colour", "لون العلامة"], ["Unused hours", "الساعات غير المستخدمة"], ["Make this the default tier for new students", "جعلها الفئة الافتراضية للطلاب الجدد"], ["Changing a tier's ceiling applies from the next billing month.", "يسري تغيير سقف الفئة من شهر الفوترة التالي."], ["Ready reports appear in History and can be emailed.", "تظهر التقارير الجاهزة في السجل ويمكن إرسالها بالبريد."], ["Report", "التقرير"], ["Levels, tasks and KPI trend", "المستويات والمهام واتجاه مؤشرات الأداء"], ["Cohort completion and scores", "إكمال الدفعة والدرجات"], ["Hours used against tier", "الساعات المستخدمة مقابل الفئة"], ["Date range", "الفترة الزمنية"], ["Email me when it is ready", "راسلني عندما يجهز"], ["Hours land in the workspace wallet immediately.", "تُضاف الساعات إلى محفظة مساحة العمل فورًا."], ["At the current usage of 15.3 hrs/day this lasts about 65 days.", "بمعدل الاستخدام الحالي 15.3 ساعة يوميًا تكفي نحو 65 يومًا."], ["Total", "الإجمالي"], ["Auto-recharge when the wallet drops below 100 hours", "الشحن التلقائي عند انخفاض المحفظة عن 100 ساعة"], ["An invoice is issued to Cairo Language Center LLC, VAT 100-234-556.", "تُصدر فاتورة باسم مركز القاهرة للغات ذ.م.م، الرقم الضريبي 100-234-556."], ["This cannot be undone.", "لا يمكن التراجع عن هذا الإجراء."], ["Students at this level", "الطلاب في هذا المستوى"], ["Content items", "عناصر المحتوى"], ["Move affected students to", "نقل الطلاب المتأثرين إلى"], ["Their completed tasks stay in history and in reports.", "تبقى مهامهم المكتملة في السجل والتقارير."], ["Type the level name to confirm in the real product.", "اكتب اسم المستوى للتأكيد في المنتج الفعلي."], ["Prototype only; nothing was saved.", "نموذج أولي فقط؛ لم يُحفظ شيء."], ["Do not roll over", "لا تُرحَّل"], ["Purple", "بنفسجي"], ["Idiom", "تعبير اصطلاحي"], ["One-off", "لمرة واحدة"], ["Edit student", "تعديل الطالب"]];
  const D = new Map(PAIRS);
  const MON = {
    Jan: "يناير",
    Feb: "فبراير",
    Mar: "مارس",
    Apr: "أبريل",
    May: "مايو",
    Jun: "يونيو",
    Jul: "يوليو",
    Aug: "أغسطس",
    Sep: "سبتمبر",
    Oct: "أكتوبر",
    Nov: "نوفمبر",
    Dec: "ديسمبر"
  };
  const DAY = {
    Sun: "الأحد",
    Mon: "الاثنين",
    Tue: "الثلاثاء",
    Wed: "الأربعاء",
    Thu: "الخميس",
    Fri: "الجمعة",
    Sat: "السبت"
  };
  const LVL = {
    Basic: "مستخدم أساسي",
    Independent: "مستخدم مستقل"
  };
  const TIER = {
    Light: "خفيف",
    Regular: "عادي",
    Heavy: "نشط",
    Intensive: "مكثّف"
  };
  const UNIT = {
    minute: "دقيقة",
    minutes: "دقيقة",
    min: "دقيقة",
    hour: "ساعة",
    hours: "ساعات",
    hr: "ساعة",
    day: "يوم",
    days: "أيام",
    week: "أسبوع",
    weeks: "أسابيع",
    month: "شهر",
    months: "أشهر"
  };
  const date = (m, d, y) => d + " " + MON[m] + (y ? " " + y : "");
  const R = [[/^(\d[\d,.]*) students?$/, m => m[1] + " طالب"], [/^(\d+) users?$/, m => m[1] === "2" ? "مستخدمان" : m[1] + " مستخدمين"], [/^(\d+) groups?$/, m => m[1] + " مجموعات"], [/^(\d+) rows$/, m => m[1] + " صف"], [/^(\d+) permissions$/, m => m[1] + " صلاحية"], [/^(\d+) levels$/, m => m[1] + " مستويات"], [/^(\d+) (words|vocab)$/, m => m[1] + (m[2] === "words" ? " كلمة" : " مفردات")], [/^([\d.]+) speed$/, m => "سرعة " + m[1]], [/^(\d+) tasks?$/, m => m[1] + " مهام"], [/^(\d+) scenarios?$/, m => m[1] + " سيناريو"], [/^([\d,.]+) hrs?$/, m => m[1] + " ساعة"], [/^([\d.]+) \/ ([\d.]+) hrs$/, m => m[1] + " / " + m[2] + " ساعة"], [/^over limit$/, () => "تجاوز الحد"], [/^(\d+)–(\d+) of ([\d,]+)$/, m => m[1] + "–" + m[2] + " من " + m[3]], [/^(\d+) of (\d+) (users|groups|requests)$/, m => m[1] + " من " + m[2] + " " + {
    users: "مستخدمين",
    groups: "مجموعات",
    requests: "طلبات"
  }[m[3]]], [/^(\d+) of (\d+) done$/, m => m[1] + " من " + m[2] + " مكتملة"], [/^Week (\d+) of (\d+)$/, m => "الأسبوع " + m[1] + " من " + m[2]], [/^Seats: (\d+) of (\d+) used$/, m => "المقاعد: " + m[1] + " من " + m[2] + " مستخدمة"], [/^capacity (\d+)$/i, m => "السعة " + m[1]], [/^(\d+) (minutes?|min|hours?|hr|days?|weeks?|months?) ago$/, m => "منذ " + m[1] + " " + UNIT[m[2]]], [/^(last active|updated) (.+)$/, (m, t) => (m[1] === "updated" ? "حُدّث " : "آخر نشاط ") + t(m[2])], [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2})(?:, (\d{4}))?$/, m => date(m[1], m[2], m[3])], [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2}), (\d\d:\d\d)$/, m => date(m[1], m[2]) + "، " + m[3]], [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})$/, m => MON[m[1]] + " " + m[2]], [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2}) – (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2})(?:, (\d{4}))?$/, m => date(m[1], m[2]) + " – " + date(m[3], m[4], m[5])], [/^Yesterday, (\d\d:\d\d)$/, m => "أمس، " + m[1]], [/^(Requested|generated|joined|enrolled|Last on|Unlocks|resets) (.+?)(?: by (.+))?$/, (m, t) => ({
    Requested: "طُلب في ",
    generated: "أُنشئ في ",
    joined: "انضم في ",
    enrolled: "سُجّل في ",
    "Last on": "آخر جلسة في ",
    Unlocks: "يُفتح في ",
    resets: "يُعاد الضبط في "
  })[m[1]] + t(m[2]) + (m[3] ? " بواسطة " + m[3] : "")], [/^((?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)(?: · (?:Sun|Mon|Tue|Wed|Thu|Fri|Sat))*)(, .+)?$/, m => m[1].split(" · ").map(d => DAY[d]).join(" · ") + (m[2] ? "، " + m[2].slice(2) : "")], [/^(Sun|Mon|Tue|Wed|Thu|Fri|Sat)$/, m => DAY[m[1]]], [/^Level ([A-C]\d): (Basic|Independent)( User)?$/, m => "المستوى " + m[1] + ": " + LVL[m[2]]], [/^Level ([A-C]\d)$/, m => "المستوى " + m[1]], [/^Level settings · (.+)$/, (m, t) => "إعدادات المستوى · " + t(m[1])], [/^(Light|Regular|Heavy|Intensive)(?: User)?$/, m => TIER[m[1]]], [/^(Light|Regular|Heavy|Intensive) · (\d+)( hrs(?:\/mo)?)?$/, m => TIER[m[1]] + " · " + m[2] + (m[3] ? m[3].includes("/mo") ? " ساعة/شهريًا" : " ساعة" : "")], [/^(Light|Regular|Heavy|Intensive) User · (\d+) hrs$/, m => TIER[m[1]] + " · " + m[2] + " ساعة"], [/^(Course|Level|Group|Tier): (.+)$/, (m, t) => ({
    Course: "الدورة",
    Level: "المستوى",
    Group: "المجموعة",
    Tier: "الفئة"
  })[m[1]] + ": " + ({
    All: "الكل"
  }[m[2]] || t(m[2]))], [/^([↑↓→]) (\d+%?) (this month|vs July|pts vs July|vs previous period)$/, m => m[1] + " " + m[2] + " " + {
    "this month": "هذا الشهر",
    "vs July": "مقارنةً بيوليو",
    "pts vs July": "نقاط مقارنةً بيوليو",
    "vs previous period": "مقارنةً بالفترة السابقة"
  }[m[3]]], [/^([+−-]\d+) (this month|vs last month|vs previous period)$/, m => m[1] + " " + {
    "this month": "هذا الشهر",
    "vs last month": "مقارنةً بالشهر الماضي",
    "vs previous period": "مقارنةً بالفترة السابقة"
  }[m[2]]], [/^Capacity (\d+)$/, m => "السعة " + m[1]], [/^Group median (\d+%)$/, m => "وسيط المجموعة " + m[1]], [/^([\d.]+) avg per student$/, m => m[1] + " في المتوسط لكل طالب"], [/^Oldest (\d+) days old$/, m => "أقدمها منذ " + m[1] + " أيام"], [/^VAT (.+)$/, m => "الرقم الضريبي " + m[1]], [/^Pay (.+)$/, m => "ادفع " + m[1]], [/^Total at (.+)$/, m => "الإجمالي بسعر " + m[1]], [/^Delete (Level \w+)\?$/, (m, t) => "حذف " + t(m[1]) + "؟"], [/^(.+) — done$/, (m, t) => t(m[1]) + " — تم"], [/^(\d+) (vocab|tasks) · (\d+) (tasks|scenarios)$/, (m, t) => t(m[1] + " " + m[2]) + " · " + t(m[3] + " " + m[4])]];
  function tr(s) {
    if (D.has(s)) return D.get(s);
    for (const [re, f] of R) {
      const m = s.match(re);
      if (m) return f(m, trOr);
    }
    if (s.includes(" · ")) {
      const parts = s.split(" · ");
      const out = parts.map(trOr);
      if (out.some((o, i) => o !== parts[i])) return out.join(" · ");
    }
    return null;
  }
  function trOr(s) {
    const r = tr(s);
    return r == null ? s : r;
  }
  let lang = "en",
    root = null,
    obs = null;
  const tracked = new Map(); // node -> { en, ar }
  function doText(n) {
    const v = n.nodeValue;
    if (!v || !v.trim()) return;
    const rec = tracked.get(n);
    if (rec && v === rec.ar) return;
    const core = v.trim();
    const ar = tr(core);
    if (ar == null) {
      tracked.delete(n);
      return;
    }
    const full = v.replace(core, ar);
    tracked.set(n, {
      en: v,
      ar: full
    });
    n.nodeValue = full;
  }
  function doEl(el) {
    if (el.hasAttribute && el.hasAttribute("placeholder")) {
      const cur = el.getAttribute("placeholder");
      const en = el.dataset.phEn;
      if (cur !== el.dataset.phAr) {
        const ar = tr(cur.trim());
        if (ar) {
          el.dataset.phEn = cur;
          el.dataset.phAr = ar;
          el.setAttribute("placeholder", ar);
        }
      } else if (!en) {}
    }
  }
  function walk(node) {
    if (node.nodeType === 3) {
      if (!skip(node.parentNode)) doText(node);
      return;
    }
    if (node.nodeType !== 1 || skip(node)) return;
    doEl(node);
    const w = document.createTreeWalker(node, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    let c;
    while (c = w.nextNode()) {
      if (c.nodeType === 3) {
        if (!skip(c.parentNode)) doText(c);
      } else doEl(c);
    }
  }
  function skip(el) {
    return !el || el.closest && el.closest("script,style,[data-no-translate],input,textarea");
  }
  function restore() {
    tracked.forEach((rec, n) => {
      if (n.nodeValue === rec.ar) n.nodeValue = rec.en;
    });
    tracked.clear();
    (root || document).querySelectorAll("[data-ph-en]").forEach(el => {
      if (el.getAttribute("placeholder") === el.dataset.phAr) el.setAttribute("placeholder", el.dataset.phEn);
      delete el.dataset.phEn;
      delete el.dataset.phAr;
    });
  }
  function setLang(l, r) {
    root = r || root || document.body;
    lang = l;
    if (obs) {
      obs.disconnect();
      obs = null;
    }
    if (l === "ar") {
      walk(root);
      obs = new MutationObserver(ms => ms.forEach(m => {
        if (m.type === "characterData") {
          if (!skip(m.target.parentNode)) doText(m.target);
        } else if (m.type === "attributes") doEl(m.target);else m.addedNodes.forEach(walk);
      }));
      obs.observe(root, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true,
        attributeFilter: ["placeholder"]
      });
    } else restore();
  }
  window.SG_I18N = {
    setLang,
    t: s => lang === "ar" ? trOr(s) : s,
    glossary: PAIRS
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-dashboard/i18n.js", error: String((e && e.message) || e) }); }

// ui_kits/web-platform/animations-v3.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// animations-v3.jsx — continuous-composition animation engine.
//
// THE MODEL: the animation is ONE element tree rendered as a pure function
// of one authored-time axis. Nothing mounts or unmounts at section
// boundaries, so any element can move, morph, or persist across them by
// ordinary interpolation. The scene list (OM_SCENES) is the user-control
// view — names, order, playback durations — and the engine derives the cue
// table from it, so structure has exactly one source and cannot drift.
//
// API INDEX (every export is a window global):
//   <CompositionStage width height scenes={window.OM_SCENES}
//                     playback={window.OM_PLAYBACK} bg>
//     <Piece />   — ONE component, the whole animation
//   </CompositionStage>
//   useComposition() -> {T, CUES, time, duration, authoredTotal, playing}
//     T: authored seconds (warped per-section by user trims/speeds) —
//        key ALL choreography to T, never to wall-clock time
//     CUES: {SectionName: authoredStart} derived from OM_SCENES; an unknown
//        name returns NaN and raises a preview-only badge (never exports);
//        duplicate section names bind to the first occurrence
//   <Shot from={CUES.Build} to={CUES.Close}> — children visible between two
//     authored times (an authored hard cut in one line); children stay
//     mounted (media keeps its readiness) and are hidden outside the window
//   <Captions items={[{at, until?, text}, ...]} /> — ONE caption element,
//     at most one visible at a time, keyed to T; 'until' defaults to the
//     next item's 'at'; a last item with no 'until' stays to the end
//   WATERCOLOR (only when the Watercolor illustration skill is active —
//   otherwise ignore these entries). A painting is a function(p) written
//   against the paint kit, on a width x height sheet; it needs
//   watercolor_kit.js loaded by a <script> tag before this engine, must
//   be a stable function defined once (module scope, never an inline
//   arrow), and every component below renders <img> elements, so it all
//   exports by construction.
//   <WatercolorPainting painting={fn} from={CUES.X} to={CUES.Y} width height
//     seed scale quality style /> — the painting assembled from its own
//     STROKES: each wash / ink line / splatter is a separate layer
//     stacked over the paper, appearing in painting order between two
//     authored times (washes bloom in, ink draws tip to tail). This is the
//     default way to show a watercolor being painted. It keeps the sheet's
//     aspect ratio (size it with style, e.g. {position:'absolute', left,
//     top, width}). scale is the layers' render resolution over width x
//     height (default 1, a deliberate weight-over-dpi trade — raise it
//     toward the zoom factor if the composition zooms into the painting,
//     or toward the devicePixelRatio for a hero-sized sheet); quality is
//     0..1 layer image quality (default 0.92; 1 is the encoder's maximum).
//   useWatercolorLayers(fn, {width, height, seed, scale, quality}) -> L
//     (null if the kit isn't loaded — load watercolor_kit.js before the
//     engine — or if the painting fails to build) — the painting taken apart into strokes, for
//     choreography beyond in-order painting: L.count strokes, L.kind(i)
//     ('wash' | 'gradedWash' | 'glaze' | 'ink' | 'hatch' | 'splatter' |
//     'dryStroke' | 'reserve' | 'caption'), L.span(i) = the stroke's
//     {from, to} share of the painting's 0..1 timeline; call L.warm()
//     once after load so finished strokes pre-render off the critical
//     path (WatercolorPainting does this itself). Compose with:
//   <WatercolorSheet layers={L} style>children</WatercolorSheet> — the
//     paper the strokes sit on (keeps the sheet's aspect ratio), and
//   <WatercolorStroke index={i} at={0..1} style /> — stroke i as its own
//     element, placed where it was painted; at is its painting progress
//     (0 hidden, 1 finished — drive it from T with animate()); style lets
//     you move, scale, rotate, or fade the stroke (transform / opacity).
//     Strokes are paint, so they multiply: overlapping strokes darken
//     where they cross, as in the still image, within a few 8-bit levels
//     (tighter still at quality 1). The sheet clips to its
//     box — for strokes that fly in from outside it, set
//     style={{overflow: 'visible'}} on the WatercolorSheet. 'reserve' strokes
//     are erasures (lifted paper) — keep them where they were painted and
//     reveal them in order after the strokes they erase; moving an erase
//     around has no sensible meaning.
//   <WatercolorReveal painting={fn} from={CUES.X} to={CUES.Y} width height
//     seed steps scale format quality style />, or <WatercolorReveal
//     frames={[src, ...]} from to /> — the whole painting as ONE flat
//     image that paints on (frames pre-baked in the background, so it is
//     the lightest option and the one to zoom or pan over as a single
//     picture). Prefer WatercolorPainting when the strokes themselves
//     should appear one by one or be individually animated. format is
//     the image MIME type (default image/jpeg), quality 0..1 (default
//     0.88). Frames bake at width x height times scale (default: the
//     device pixel ratio, capped at 2) — if the composition zooms INTO
//     the painting, raise scale toward the maximum zoom so frames stay
//     crisp. The kit caps a sheet at ~12M pixels and the components clamp
//     scale to stay under it; exported video sharpness also depends on
//     the export dialog's own resolution choice.
//   Motion: Easing.{linear, easeIn|Out|InOutQuad/Cubic/Quart/Expo/Sine,
//     easeIn|Out|InOutBack, easeOutElastic}, interpolate(input, output, ease),
//     animate({from, to, start, end, ease}) -> fn(T), clamp(v, min, max)
//   Plumbing (rarely needed): Stage, PlaybackBar, TimelineContext,
//     useTime, useTimeline
//   Seek event (host/export transport): 'data-om-seek-to-time-frame',
//     detail {time, sync, playing} — the stage owns it; never implement it
//     yourself
//
// THE AUTHORING CONTRACT — this is what makes the host timeline's trim and
// speed gestures write back into YOUR file, so follow it exactly:
//   1. Declare the scene list as a JSON string literal in a plain inline
//      <script> of the main document (NOT type="text/babel", NOT a sibling
//      .jsx — only vanilla inline scripts are addressable for write-back):
//        <script>window.OM_SCENES = '[{"name":"Opening","dur":3,"desc":"The logo fades in and the title settles"},{"name":"Build","dur":5,"desc":"Bars grow to their final values"}]';</script>
//      Give every entry a "desc": one short plain-words sentence saying
//      what happens in that section. The user reads it in the timeline's
//      section popover — keep it true whenever you edit the section.
//   2. Pass the string through untouched:
//        <CompositionStage scenes={window.OM_SCENES} ...>
//   3. ALSO declare the playback setting the same way:
//        <script>window.OM_PLAYBACK = '{"mode":"loop"}';</script>
//      and pass it through untouched (values: '{"mode":"loop"}' or
//      '{"mode":"times","count":N}'; omitting keeps loop behavior but
//      leaves the host Repeat control read-only for this document).
//   IMPORTANT — the exportable-video contract: CompositionStage/Stage OWNS
//   it (the data-om-exportable-video-with-duration-secs attribute, the
//   data-om-seek-to-time-frame listener, the svg/foreignObject wrapper,
//   and font inlining). NEVER put the exportable attribute on any other
//   element — a second "exportable root" makes the host timeline and the
//   video exporter bind to the wrong element, and playback control /
//   export silently break.
//
// HOW TIME WORKS: each OM_SCENES entry is a named slice of the authored
// timeline. CUES.Name is that section's authored start (the running sum of
// authored lengths, in literal order). useComposition().T is the authored
// clock: when the user trims or speeds a section on the host timeline, the
// engine replays that section's SAME authored slice over the new playback
// length — your choreography retimes, never cuts off. The optional "nat"
// field on an entry is the engine's authored-length anchor — the host
// timeline stamps it on the first retime; don't set it by hand.
//
// CUE-FIRST DISCIPLINE (what makes a piece read as one continuous video):
//   1. Write the OM_SCENES literal FIRST — it is the piece's outline.
//   2. One helper component per section for readability, but ALL of them
//      render ALL the time inside the one tree, keyed to CUES — never
//      conditionally mounted per section.
//   3. Define exactly three motion helpers up front (e.g.
//      MOTION = {enter, draw, pop} wrapping Easing curves) and use no
//      easing or transform outside them; one caption element, one visible
//      at a time (<Captions> has this built in).
//   A shared element that crosses a boundary is just motion whose start
//   and end straddle a cue: animate({from, to, start: CUES.Build - 0.4,
//   end: CUES.Build + 0.6})(T) glides through the boundary, and a user
//   slowing either section slows the glide without breaking it.
//
// RENDER FROM T ONLY: the exporter seeks each frame with a synchronous
// commit and may serialize the stage the moment the seek event returns —
// anything painted from useEffect or your own requestAnimationFrame lags
// that commit and exports stale. Render everything visible from T and this
// is automatic. A seeked frame is a deterministic render at that time.
//
// HARD CUTS are content now, not structure: wrap a shot's elements in
// <Shot from to> (visibility toggles at the cues; children stay mounted so
// images and videos hold their readiness). Shot also doubles as the
// perf gate for heavy far-away beats.
//
// LOOP SEAMS are the one surviving boundary rule: a looping piece shows
// its last authored frame immediately before its first — make them match
// (settle your choreography by authoredTotal, open it at 0).
//
// DIAGNOSTICS: choreography that references an unknown section name (a
// rename or deletion in OM_SCENES) shows a badge below the stage in the
// preview, outside the exportable svg — visible in preview screenshots,
// never in the exported video. An OM_SCENES section with no choreography
// keyed to it is a valid empty beat, not an error.
/* END USAGE */

// ─────────────────────────────────────────────────────────────────────────────

// ── Easing functions (hand-rolled, Popmotion-style) ─────────────────────────
// All easings take t ∈ [0,1] and return eased t ∈ [0,1] (may overshoot for back/elastic).
const Easing = {
  linear: t => t,
  // Quad
  easeInQuad: t => t * t,
  easeOutQuad: t => t * (2 - t),
  easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  // Cubic
  easeInCubic: t => t * t * t,
  easeOutCubic: t => --t * t * t + 1,
  easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  // Quart
  easeInQuart: t => t * t * t * t,
  easeOutQuart: t => 1 - --t * t * t * t,
  easeInOutQuart: t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  // Expo
  easeInExpo: t => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
  easeOutExpo: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  easeInOutExpo: t => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    if (t < 0.5) return 0.5 * Math.pow(2, 20 * t - 10);
    return 1 - 0.5 * Math.pow(2, -20 * t + 10);
  },
  // Sine
  easeInSine: t => 1 - Math.cos(t * Math.PI / 2),
  easeOutSine: t => Math.sin(t * Math.PI / 2),
  easeInOutSine: t => -(Math.cos(Math.PI * t) - 1) / 2,
  // Back (overshoot)
  easeOutBack: t => {
    const c1 = 1.70158,
      c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
  easeInBack: t => {
    const c1 = 1.70158,
      c3 = c1 + 1;
    return c3 * t * t * t - c1 * t * t;
  },
  easeInOutBack: t => {
    const c1 = 1.70158,
      c2 = c1 * 1.525;
    return t < 0.5 ? Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2) / 2 : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
  },
  // Elastic
  easeOutElastic: t => {
    const c4 = 2 * Math.PI / 3;
    if (t === 0) return 0;
    if (t === 1) return 1;
    return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  }
};

// ── Core interpolation helpers ──────────────────────────────────────────────

// Clamp a value to [min, max]
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

// interpolate([0, 0.5, 1], [0, 100, 50], ease?) -> fn(t)
// Popmotion-style: linearly maps t across input keyframes to output values,
// with optional easing per segment (single fn or array of fns).
function interpolate(input, output, ease = Easing.linear) {
  return t => {
    if (t <= input[0]) return output[0];
    if (t >= input[input.length - 1]) return output[output.length - 1];
    for (let i = 0; i < input.length - 1; i++) {
      if (t >= input[i] && t <= input[i + 1]) {
        const span = input[i + 1] - input[i];
        const local = span === 0 ? 0 : (t - input[i]) / span;
        const easeFn = Array.isArray(ease) ? ease[i] || Easing.linear : ease;
        const eased = easeFn(local);
        return output[i] + (output[i + 1] - output[i]) * eased;
      }
    }
    return output[output.length - 1];
  };
}

// animate({from, to, start, end, ease})(t) — simpler single-segment tween.
// Returns `from` before `start`, `to` after `end`.
function animate({
  from = 0,
  to = 1,
  start = 0,
  end = 1,
  ease = Easing.easeInOutCubic
}) {
  return t => {
    if (t <= start) return from;
    if (t >= end) return to;
    const local = (t - start) / (end - start);
    return from + (to - from) * ease(local);
  };
}

// ── Timeline context ────────────────────────────────────────────────────────

const TimelineContext = React.createContext({
  time: 0,
  duration: 10,
  playing: false
});
const useTime = () => React.useContext(TimelineContext).time;
const useTimeline = () => React.useContext(TimelineContext);

// How long a marked (detail.playing === true) host seek keeps the
// external-playback latch alive with no successor. The host play bar's
// seek pump is one-in-flight/latest-wins, so its inter-seek gap is tens
// of milliseconds in the worst case — 400ms is far above that, so a
// marked stream that dies mid-play decays the latch promptly.
var SS_EXT_PLAY_MS = 400;

// ── Font inlining ───────────────────────────────────────────────────────────
// Copy every @font-face rule from the page into a <style> inside the svg's
// foreignObject, with font URLs rewritten to data: URLs. Makes the svg
// self-describing so serializing it alone (video export fast path) still
// renders with the right fonts. Sets data-om-fonts-inlined on the svg when
// done so the exporter can wait for it.

function useInlineFontsInto(svgRef) {
  React.useEffect(() => {
    const svg = svgRef.current;
    const host = svg && svg.querySelector('foreignObject > div');
    if (!svg || !host) return;
    let cancelled = false;
    (async () => {
      const rules = [];
      for (const ss of document.styleSheets) {
        let cssRules;
        try {
          cssRules = ss.cssRules;
        } catch {
          // Cross-origin sheet without crossorigin attr (e.g. the standard
          // fonts.googleapis.com <link>) — fetch the CSS text directly and
          // regex-extract the @font-face blocks.
          if (ss.href) {
            try {
              const txt = await fetch(ss.href).then(r => {
                if (!r.ok) throw 0;
                return r.text();
              });
              for (const ff of txt.match(/@font-face\s*{[^}]*}/g) || []) rules.push({
                css: ff,
                base: ss.href
              });
            } catch {}
          }
          continue;
        }
        if (!cssRules) continue;
        for (const r of cssRules) {
          if (r.type === CSSRule.FONT_FACE_RULE) {
            rules.push({
              css: r.cssText,
              base: ss.href || location.href
            });
          }
        }
      }
      const toDataURL = url => fetch(url).then(r => {
        if (!r.ok) throw 0;
        return r.blob();
      }).then(b => new Promise(res => {
        const fr = new FileReader();
        fr.onload = () => res(fr.result);
        fr.onerror = () => res(url);
        fr.readAsDataURL(b);
      })).catch(() => url);
      const parts = await Promise.all(rules.map(async ({
        css,
        base
      }) => {
        const re = /url\((['"]?)([^'")]+)\1\)/g;
        let out = css,
          m;
        while (m = re.exec(css)) {
          const u = m[2];
          if (u.startsWith('data:')) continue;
          let abs;
          try {
            abs = new URL(u, base).href;
          } catch {
            continue;
          }
          out = out.split(m[0]).join(`url("${await toDataURL(abs)}")`);
        }
        return out;
      }));
      if (cancelled || !parts.length) {
        svg.setAttribute('data-om-fonts-inlined', 'true');
        return;
      }
      const style = document.createElement('style');
      style.textContent = parts.join('\n');
      host.insertBefore(style, host.firstChild);
      svg.setAttribute('data-om-fonts-inlined', 'true');
    })();
    return () => {
      cancelled = true;
    };
  }, []);
}
function Stage({
  width = 1280,
  height = 720,
  duration = 10,
  background = '#f6f4ef',
  fps = 60,
  loop = true,
  autoplay = true,
  // Parsed playback object ({mode:'loop'} | {mode:'times',count:N}) or
  // null. When present it overrides the legacy loop prop — CompositionStage
  // passes the validated value from the OM_PLAYBACK authoring contract.
  playback = null,
  persistKey = 'animstage-v3',
  children
}) {
  // Props arrive as strings when Stage is mounted via <x-import> (DC
  // projects) — coerce so style={{width}} gets a number React can px-ify.
  width = +width || 1280;
  height = +height || 720;
  duration = +duration || 10;
  fps = +fps || 60;
  if (typeof loop === 'string') loop = loop !== 'false';
  if (typeof autoplay === 'string') autoplay = autoplay !== 'false';
  const playTimes = playback && playback.mode === 'times' ? playback.count : null;
  const loopEff = playback ? playback.mode === 'loop' : loop;
  const [time, setTime] = React.useState(() => {
    try {
      const v = parseFloat(localStorage.getItem(persistKey + ':t') || '0');
      return isFinite(v) ? clamp(v, 0, duration) : 0;
    } catch {
      return 0;
    }
  });
  const [playing, setPlaying] = React.useState(autoplay);
  // The external-playback latch: true while the HOST play bar is driving
  // time forward as genuine continuous playback (its play-loop seeks
  // carry detail.playing === true). The engine's own clock stays paused
  // the whole time — exactly one clock ever drives — so this is a
  // separate bit, not a second meaning for `playing`. Set and cleared
  // in the seek handler below; decays via SS_EXT_PLAY_MS when the
  // marked stream stops without a parting unmarked seek.
  const [extPlay, setExtPlay] = React.useState(false);
  const extPlayTimerRef = React.useRef(null);
  const [hoverTime, setHoverTime] = React.useState(null);
  const [scale, setScale] = React.useState(1);
  const stageRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const rafRef = React.useRef(null);
  const lastTsRef = React.useRef(null);

  // Persist playhead
  React.useEffect(() => {
    try {
      localStorage.setItem(persistKey + ':t', String(time));
    } catch {}
  }, [time, persistKey]);

  // Auto-scale to fit viewport
  React.useEffect(() => {
    if (!stageRef.current) return;
    const el = stageRef.current;
    const measure = () => {
      const barH = 44; // playback bar height
      const s = Math.min(el.clientWidth / width, (el.clientHeight - barH) / height);
      setScale(Math.max(0.05, s));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [width, height]);

  // Passes completed since playback last started. Lives in a ref so the
  // per-frame wrap can count without re-running this effect; reset on
  // every (re)start so a fresh play (or a host restart) gets the full
  // run count again.
  const passesRef = React.useRef(0);

  // Animation loop
  React.useEffect(() => {
    if (!playing) {
      lastTsRef.current = null;
      return;
    }
    passesRef.current = 0;
    const step = ts => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;
      setTime(t => {
        let next = t + dt;
        if (next >= duration) {
          if (playTimes !== null) {
            // Play N times then hold the last frame — the partial pass a
            // mid-timeline start produces counts as a pass, so the piece
            // never runs longer than N full durations.
            passesRef.current += 1;
            if (passesRef.current >= playTimes) {
              next = duration;
              setPlaying(false);
            } else {
              next = next % duration;
            }
          } else if (loopEff) {
            next = next % duration;
          } else {
            next = duration;
            setPlaying(false);
          }
        }
        return next;
      });
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, [playing, duration, loopEff, playTimes]);

  // Keyboard: space = play/pause, ← → = seek
  React.useEffect(() => {
    const onKey = e => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (e.code === 'Space') {
        e.preventDefault();
        setPlaying(p => !p);
      } else if (e.code === 'ArrowLeft') {
        setTime(t => clamp(t - (e.shiftKey ? 1 : 0.1), 0, duration));
      } else if (e.code === 'ArrowRight') {
        setTime(t => clamp(t + (e.shiftKey ? 1 : 0.1), 0, duration));
      } else if (e.key === '0' || e.code === 'Home') {
        setTime(0);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [duration]);

  // Video-export protocol + the editor's play bar: hosts dispatch this
  // event per frame; pause + sync the playhead so the frame shows exactly
  // that timestamp. The host play bar marks its play-loop seeks with
  // detail.playing === true — the mark latches extPlay (playback is
  // playback even when a host clock drives it), while ANY unmarked seek
  // (scrub, step, export frame, the transport's pause park) clears the
  // latch in the same commit it retimes, so a seeked frame still renders
  // exactly one scene's state. The engine's own clock pauses either way.
  React.useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    // Sync-seek capability: a dispatcher that marks its seek with
    // detail.sync === true gets the commit applied via ReactDOM.flushSync,
    // so the stage DOM reflects the seeked frame the moment dispatchEvent
    // returns. The video exporter keys off the data-om-sync-seek
    // advertisement to drop its two-display-refresh settle (that wait only
    // exists to let React's async commit land — serialization needs the
    // committed DOM, not the paint). Feature-detected: a runtime without
    // ReactDOM.flushSync never advertises and every seek takes the async
    // path. Unmarked seeks (scrubs, the host play bar) stay async — a
    // forced sync render per pointermove would tax the editor for no one.
    const canSyncSeek = typeof ReactDOM !== 'undefined' && typeof ReactDOM.flushSync === 'function';
    const onSeek = e => {
      const apply = () => {
        setPlaying(false);
        const hostPlay = !!(e.detail && e.detail.playing === true);
        if (extPlayTimerRef.current) {
          clearTimeout(extPlayTimerRef.current);
          extPlayTimerRef.current = null;
        }
        if (hostPlay) {
          // Watchdog: the latch is only as alive as its seek stream. If the
          // host stops without a parting seek (tab jank, bar unmount), the
          // latch decays on its own rather than stranding extPlaying true.
          extPlayTimerRef.current = setTimeout(() => {
            extPlayTimerRef.current = null;
            setExtPlay(false);
          }, SS_EXT_PLAY_MS);
        }
        setExtPlay(hostPlay);
        setTime(clamp(e.detail.time, 0, duration));
      };
      // flushSync is safe here: a native DOM listener runs outside React's
      // lifecycle, and the exporter's dispatchEvent is synchronous, so the
      // commit lands in the same JS task — the engine's own rAF loop can
      // never interleave between seek and serialize.
      if (canSyncSeek && e.detail && e.detail.sync === true) {
        ReactDOM.flushSync(apply);
      } else {
        apply();
      }
    };
    el.addEventListener('data-om-seek-to-time-frame', onSeek);
    if (canSyncSeek) el.setAttribute('data-om-sync-seek', 'true');
    return () => {
      el.removeEventListener('data-om-seek-to-time-frame', onSeek);
      el.removeAttribute('data-om-sync-seek');
      if (extPlayTimerRef.current) {
        clearTimeout(extPlayTimerRef.current);
        extPlayTimerRef.current = null;
      }
      // Drop the latch too: this cleanup runs on every duration change
      // (an agent edit can retime mid-host-play, no gesture involved) and
      // the new effect instance arms no watchdog — clearing only the
      // timer could strand extPlay true forever if the marked stream died
      // in the gap. Fail toward cut: the next marked seek re-latches.
      setExtPlay(false);
    };
  }, [duration]);

  // Inline @font-face rules into the svg's foreignObject so the svg is
  // self-describing — serializing it alone (for video export) then renders
  // with the right fonts. Sets data-om-fonts-inlined once done.
  useInlineFontsInto(canvasRef);
  const displayTime = hoverTime != null ? hoverTime : time;
  const ctxValue = React.useMemo(
  // extPlaying is ADDITIVE: "time is advancing under an external
  // driver's continuous playback". `playing` keeps meaning the
  // engine's OWN clock — the hidden PlaybackBar glyph (and through it
  // the host's clock-reporter/adoption channel) reads that — and
  // CompositionClock is the one consumer that widens to either.
  () => ({
    time: displayTime,
    duration,
    playing,
    extPlaying: extPlay,
    setTime,
    setPlaying
  }), [displayTime, duration, playing, extPlay]);
  return (
    /*#__PURE__*/
    // data-om-starter: inert presence marker — Claude Design's starter-usage
    // probe reads it; it renders nothing. Keep it on this root element.
    React.createElement("div", {
      ref: stageRef,
      "data-om-starter": "animations-v3",
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#0a0a0a',
        fontFamily: 'Inter, system-ui, sans-serif'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement("svg", {
      ref: canvasRef,
      width: width,
      height: height,
      "data-om-exportable-video-with-duration-secs": duration,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: 'center',
        flexShrink: 0,
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        display: 'block'
      }
    }, /*#__PURE__*/React.createElement("foreignObject", {
      x: "0",
      y: "0",
      width: "100%",
      height: "100%"
    }, /*#__PURE__*/React.createElement("div", {
      xmlns: "http://www.w3.org/1999/xhtml",
      style: {
        width,
        height,
        background,
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(TimelineContext.Provider, {
      value: ctxValue
    }, children))))), /*#__PURE__*/React.createElement(PlaybackBar, {
      time: displayTime,
      actualTime: time,
      duration: duration,
      playing: playing,
      onPlayPause: () => setPlaying(p => !p),
      onReset: () => {
        setTime(0);
      },
      onSeek: t => setTime(t),
      onHover: t => setHoverTime(t)
    }))
  );
}

// ── Playback bar ────────────────────────────────────────────────────────────
// Play/pause, return-to-begin, scrub track, time display.
// Uses fixed-width time fields so layout doesn't thrash.

function PlaybackBar({
  time,
  duration,
  playing,
  onPlayPause,
  onReset,
  onSeek,
  onHover
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const timeFromEvent = React.useCallback(e => {
    const rect = trackRef.current.getBoundingClientRect();
    const x = clamp((e.clientX - rect.left) / rect.width, 0, 1);
    return x * duration;
  }, [duration]);
  const onTrackMove = e => {
    if (!trackRef.current) return;
    const t = timeFromEvent(e);
    if (dragging) {
      onSeek(t);
    } else {
      onHover(t);
    }
  };
  const onTrackLeave = () => {
    if (!dragging) onHover(null);
  };
  const onTrackDown = e => {
    setDragging(true);
    const t = timeFromEvent(e);
    onSeek(t);
    onHover(null);
  };
  React.useEffect(() => {
    if (!dragging) return;
    const onUp = () => setDragging(false);
    const onMove = e => {
      if (!trackRef.current) return;
      const t = timeFromEvent(e);
      onSeek(t);
    };
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mousemove', onMove);
    };
  }, [dragging, timeFromEvent, onSeek]);
  const pct = duration > 0 ? time / duration * 100 : 0;
  const fmt = t => {
    const total = Math.max(0, t);
    const m = Math.floor(total / 60);
    const s = Math.floor(total % 60);
    const cs = Math.floor(total * 100 % 100);
    return `${String(m).padStart(1, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
  };
  const mono = 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace';
  return /*#__PURE__*/React.createElement("div", {
    "data-omelette-chrome": true,
    style: {
      // Slimmed to visually match the host editor bar's basic row (the
      // single-scrubber look): transport first, tighter metrics, quieter
      // chrome. Shown only outside the app — the host bar suppresses this
      // whenever it is present.
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 12px',
      background: 'rgba(20,20,20,0.92)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      width: '100%',
      maxWidth: 680,
      alignSelf: 'center',
      borderRadius: 6,
      color: '#f6f4ef',
      fontFamily: 'Inter, system-ui, sans-serif',
      userSelect: 'none',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    onClick: onPlayPause,
    title: "Play/pause (space)"
  }, playing ? /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "2",
    width: "3",
    height: "10",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "2",
    width: "3",
    height: "10",
    fill: "currentColor"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 2l9 5-9 5V2z",
    fill: "currentColor"
  }))), /*#__PURE__*/React.createElement(IconButton, {
    onClick: onReset,
    title: "Return to start (0)"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 2v10M12 2L5 7l7 5V2z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 12,
      fontVariantNumeric: 'tabular-nums',
      width: 64,
      textAlign: 'right',
      color: '#f6f4ef'
    }
  }, fmt(time)), /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    onMouseMove: onTrackMove,
    onMouseLeave: onTrackLeave,
    onMouseDown: onTrackDown,
    style: {
      flex: 1,
      height: 22,
      position: 'relative',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 4,
      background: 'rgba(255,255,255,0.12)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      width: `${pct}%`,
      height: 4,
      background: 'oklch(72% 0.12 250)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `${pct}%`,
      top: '50%',
      width: 12,
      height: 12,
      marginLeft: -6,
      marginTop: -6,
      background: '#fff',
      borderRadius: 6,
      boxShadow: '0 2px 4px rgba(0,0,0,0.4)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 12,
      fontVariantNumeric: 'tabular-nums',
      width: 64,
      textAlign: 'left',
      color: 'rgba(246,244,239,0.55)'
    }
  }, fmt(duration)), typeof VideoEncoder !== 'undefined' && /*#__PURE__*/React.createElement(IconButton, {
    title: "Export video",
    onClick: () => window.parent.postMessage({
      type: 'omelette:request-video-export'
    }, '*')
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 2v7m0 0L4 6m3 3l3-3M2 12h10",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
function IconButton({
  children,
  onClick,
  title
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    title: title,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 24,
      height: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: hover ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 5,
      color: '#f6f4ef',
      cursor: 'pointer',
      padding: 0,
      transition: 'background 120ms'
    }
  }, children);
}

// ── Scene-list plumbing ──────────────────────────────────────────────────
// Guest-side validation of a scene list (the engine's own inputs: the
// authored prop, and host-dispatched updates). Mirrors the host parser's
// shape rules and constants — keep in sync with parseTimelineScenes in
// apps/web/src/shared/timeline.ts (16KB raw cap, 50 entries, dur finite in
// (0, 300]); returns null on any violation.
function ssParse(raw) {
  if (typeof raw !== 'string' || !raw || raw.length > 16 * 1024) return null;
  var parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    return null;
  }
  if (!Array.isArray(parsed) || parsed.length === 0 || parsed.length > 50) return null;
  for (var i = 0; i < parsed.length; i++) {
    var s = parsed[i];
    if (typeof s !== 'object' || s === null) return null;
    if (typeof s.name !== 'string' || typeof s.dur !== 'number') return null;
    if (!isFinite(s.dur) || s.dur <= 0 || s.dur > 300) return null;
  }
  return parsed;
}

// Guest-side validation of the playback value — mirrors the host parser
// (shared/timeline.ts parseTimelinePlayback): {"mode":"loop"} or
// {"mode":"times","count":1..99}, strict all-or-nothing, null otherwise.
// Callers treat null as the loop default.
function ppParse(raw) {
  if (typeof raw !== 'string' || !raw || raw.length > 256) return null;
  var parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    return null;
  }
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) return null;
  var keys = Object.keys(parsed);
  if (parsed.mode === 'loop') return keys.length === 1 ? {
    mode: 'loop'
  } : null;
  if (parsed.mode === 'times') {
    if (keys.length !== 2) return null;
    var c = parsed.count;
    if (typeof c !== 'number' || c !== Math.floor(c) || c < 1 || c > 99) return null;
    return {
      mode: 'times',
      count: c
    };
  }
  return null;
}

// Stamps the playback attribute VERBATIM from the authored raw string (the
// host's write-back anchors on that exact value) and listens for the
// host's post-write update event. Same shape as SceneSync; only rendered
// when the document authors a playback literal — an absent contract means
// the attribute stays absent and the document plays its default.
function PlaybackSync(props) {
  var ref = React.useRef(null);
  var raw = props.raw;
  var onUpdate = props.onUpdate;
  React.useEffect(function () {
    var el = ref.current;
    if (!el) return;
    var root = el.closest('[data-om-exportable-video-with-duration-secs]');
    if (!root) return;
    root.setAttribute('data-om-timeline-playback', raw);
    var onEvent = function (e) {
      var next = e && e.detail;
      if (ppParse(next)) onUpdate(next);
    };
    root.addEventListener('data-om-timeline-playback-update', onEvent);
    return function () {
      root.removeEventListener('data-om-timeline-playback-update', onEvent);
      root.removeAttribute('data-om-timeline-playback');
    };
  }, [raw, onUpdate]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'none'
    }
  });
}

// Renders inside the Stage (so it can reach the exportable root via
// closest()): stamps the scenes attribute VERBATIM from the current raw
// string — the host's write-back anchors on that exact value — and listens
// for the host's post-write update event.
function SceneSync(props) {
  var ref = React.useRef(null);
  var raw = props.raw;
  var onUpdate = props.onUpdate;
  React.useEffect(function () {
    var el = ref.current;
    if (!el) return;
    var root = el.closest('[data-om-exportable-video-with-duration-secs]');
    if (!root) return;
    root.setAttribute('data-om-timeline-scenes', raw);
    var onEvent = function (e) {
      var next = e && e.detail;
      // Ignore anything that doesn't validate — a bad update must not tear
      // down a working composition.
      if (ssParse(next)) onUpdate(next);
    };
    root.addEventListener('data-om-timeline-scenes-update', onEvent);
    return function () {
      root.removeEventListener('data-om-timeline-scenes-update', onEvent);
      root.removeAttribute('data-om-timeline-scenes');
    };
  }, [raw, onUpdate]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'none'
    }
  });
}

// ── Continuous composition ──────────────────────────────────────────────

var CompositionContext = React.createContext(null);
function useComposition() {
  var ctx = React.useContext(CompositionContext);
  if (!ctx) throw new Error('useComposition() must be called inside <CompositionStage>');
  return ctx;
}
function ccDerive(scenes) {
  var playStart = 0;
  var authStart = 0;
  var sections = [];
  var table = Object.create(null);
  for (var i = 0; i < scenes.length; i++) {
    var s = scenes[i];
    var nat = typeof s.nat === 'number' && isFinite(s.nat) && s.nat > 0 ? s.nat : s.dur;
    sections.push({
      name: s.name,
      playStart: playStart,
      dur: s.dur,
      authStart: authStart,
      nat: nat
    });
    if (!Object.prototype.hasOwnProperty.call(table, s.name)) {
      table[s.name] = Math.round(authStart * 1000) / 1000;
    }
    playStart += s.dur;
    authStart += nat;
  }
  return {
    sections: sections,
    table: table,
    total: Math.round(playStart * 1000) / 1000,
    authoredTotal: Math.round(authStart * 1000) / 1000
  };
}
function ccWarp(d, t) {
  var ss = d.sections;
  if (ss.length === 0) return 0;
  var idx = ss.length - 1;
  for (var i = 0; i < ss.length; i++) {
    if (t < ss[i].playStart + ss[i].dur) {
      idx = i;
      break;
    }
  }
  var s = ss[idx];
  var local = Math.min(Math.max(t - s.playStart, 0), s.dur);
  var T = s.authStart + (s.dur > 0 ? local * (s.nat / s.dur) : 0);
  return Math.min(T, d.authoredTotal);
}
var CC_META = Object.assign(Object.create(null), {
  toString: 1,
  toLocaleString: 1,
  valueOf: 1,
  toJSON: 1,
  then: 1,
  constructor: 1,
  hasOwnProperty: 1,
  isPrototypeOf: 1,
  propertyIsEnumerable: 1,
  default: 1
});
function ccCueProxy(table, unknownRef) {
  if (typeof Proxy !== 'function') return table;
  return new Proxy(table, {
    get: function (target, prop) {
      if (typeof prop !== 'string' || prop in target) return target[prop];
      if (CC_META[prop] || prop.indexOf('@@') === 0) return Object.prototype[prop];
      unknownRef.current[prop] = true;
      return NaN;
    }
  });
}
function CcUnknownWatch(props) {
  var tl = useTimeline();
  React.useEffect(function () {
    var next = Object.keys(props.unknownRef.current).sort().join(', ');
    if (next !== props.badge) props.setBadge(next);
  }, [tl.time]);
  return null;
}
function CompositionClock(props) {
  var tl = useTimeline();
  var d = props.derived;
  var T = ccWarp(d, tl.time);
  var value = React.useMemo(function () {
    return {
      T: T,
      CUES: props.cues,
      time: tl.time,
      duration: tl.duration,
      authoredTotal: d.authoredTotal,
      playing: tl.playing || tl.extPlaying === true
    };
  }, [T, props.cues, tl.time, tl.duration, d, tl.playing, tl.extPlaying]);
  return /*#__PURE__*/React.createElement(CompositionContext.Provider, {
    value: value
  }, props.children);
}
function Shot(props) {
  var c = useComposition();
  var from = +props.from;
  var to = props.to == null ? Infinity : +props.to;
  var on = isFinite(from) && c.T >= from && c.T < to;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      visibility: on ? 'visible' : 'hidden'
    }
  }, props.children);
}
var CAPTION_FADE = 0.18;
function Captions(props) {
  var c = useComposition();
  var t = c.T;
  var items = (props.items || []).filter(function (it) {
    return it && isFinite(+it.at);
  }).sort(function (a, b) {
    return a.at - b.at;
  });
  var active = null;
  var end = Infinity;
  for (var i = 0; i < items.length; i++) {
    if (t < items[i].at) break;
    active = items[i];
    end = typeof active.until === 'number' && isFinite(active.until) ? active.until : i + 1 < items.length ? items[i + 1].at : Infinity;
  }
  if (!active || t >= end) return null;
  var o = Math.min(1, (t - active.at) / CAPTION_FADE);
  if (isFinite(end)) o = Math.min(o, (end - t) / CAPTION_FADE);
  o = Math.max(0, Math.min(1, o));
  return /*#__PURE__*/React.createElement("div", {
    "data-om-caption": true,
    style: Object.assign({
      position: 'absolute',
      left: '8%',
      right: '8%',
      bottom: '7%',
      textAlign: 'center',
      opacity: o,
      pointerEvents: 'none',
      font: '500 30px Inter, system-ui, sans-serif',
      color: '#f6f4ef',
      textShadow: '0 1px 14px rgba(0,0,0,0.45)'
    }, props.style)
  }, active.text);
}
function CompositionStage(props) {
  var width = +props.width || 1280;
  var height = +props.height || 720;
  var bg = props.bg || '#0b0b0e';
  var autoplay = props.autoplay == null ? true : String(props.autoplay) !== 'false';
  var loop = props.loop == null ? true : String(props.loop) !== 'false';
  var state = React.useState(props.scenes);
  var raw = state[0];
  var setRaw = state[1];
  var scenes = React.useMemo(function () {
    return ssParse(raw);
  }, [raw]);
  var pstate = React.useState(props.playback);
  var praw = pstate[0];
  var setPraw = pstate[1];
  var pb = React.useMemo(function () {
    return ppParse(praw);
  }, [praw]);
  var unknownRef = React.useRef({});
  var badgeState = React.useState('');
  var badge = badgeState[0];
  var setBadge = badgeState[1];
  var derived = React.useMemo(function () {
    unknownRef.current = {};
    return scenes ? ccDerive(scenes) : null;
  }, [scenes]);
  var cues = React.useMemo(function () {
    return derived ? ccCueProxy(derived.table, unknownRef) : null;
  }, [derived]);
  React.useEffect(function () {
    var next = Object.keys(unknownRef.current).sort().join(', ');
    if (next !== badge) setBadge(next);
  });
  if (!scenes) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0b0b0e',
        color: '#c96442',
        font: '500 16px Inter, system-ui, sans-serif',
        textAlign: 'center'
      }
    }, "animations-v3: the scenes prop isn't a valid JSON scene list", /*#__PURE__*/React.createElement("br", null), "(expected '[", '{', "\"name\":\"\u2026\",\"dur\":N", '}', ", \u2026]')");
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Stage, {
    width: width,
    height: height,
    duration: derived.total,
    background: bg,
    autoplay: autoplay,
    loop: loop,
    playback: pb
  }, /*#__PURE__*/React.createElement(SceneSync, {
    raw: raw,
    onUpdate: setRaw
  }), typeof praw === 'string' && praw !== '' && /*#__PURE__*/React.createElement(PlaybackSync, {
    raw: praw,
    onUpdate: setPraw
  }), /*#__PURE__*/React.createElement(CompositionClock, {
    derived: derived,
    cues: cues
  }, props.children), /*#__PURE__*/React.createElement(CcUnknownWatch, {
    unknownRef: unknownRef,
    badge: badge,
    setBadge: setBadge
  })), badge !== '' &&
  /*#__PURE__*/
  // Sibling of Stage, outside the exportable <svg>: visible in the
  // preview (and its screenshots), never in the exported video.
  React.createElement("div", {
    "data-om-unknown-cues": true,
    style: {
      position: 'absolute',
      left: 12,
      bottom: 56,
      zIndex: 10,
      padding: '6px 10px',
      borderRadius: 6,
      background: 'rgba(0,0,0,0.72)',
      color: '#e8906a',
      font: '500 12px Inter, system-ui, sans-serif',
      pointerEvents: 'none'
    }
  }, "choreography references unknown section", badge.indexOf(',') >= 0 ? 's' : '', ": ", badge));
}

// Strokes as layers: paint multiplies, so stroke images stacked with
// mix-blend-mode:multiply over the paper reproduce the flat render.

var WC_PIXEL_CAP = 11000000;
function wcLayerOpts(props) {
  var w = +props.width || 900,
    h = +props.height || 1200;
  var askScale = +props.scale || 1;
  return {
    width: w,
    height: h,
    scale: Math.min(askScale, Math.sqrt(WC_PIXEL_CAP / (w * h))),
    seed: props.seed == null ? undefined : +props.seed,
    quality: props.quality == null ? undefined : +props.quality
  };
}
var wcWarned = {};
function wcWarnOnce(key, message, err) {
  if (wcWarned[key]) return;
  wcWarned[key] = true;
  console.warn(message, err);
}
function useWatercolorLayers(painting, opts) {
  var kit = window.WatercolorKit;
  if (typeof painting !== 'function' || !kit || typeof kit.layers !== 'function') return null;
  try {
    return kit.layers(painting, wcLayerOpts(opts || {}));
  } catch (e) {
    wcWarnOnce('layers:' + e, 'watercolor painting failed to build; rendering the fallback sheet', e);
    return null;
  }
}
var WatercolorSheetContext = React.createContext(null);
function WatercolorSheet(props) {
  var L = props.layers || null;
  var style = Object.assign({
    position: 'relative',
    display: 'block',
    width: '100%',
    aspectRatio: L ? L.width + ' / ' + L.height : '3 / 4',
    isolation: 'isolate',
    overflow: 'hidden'
  }, props.style);
  if (!L) {
    return /*#__PURE__*/React.createElement("div", {
      style: Object.assign(style, {
        background: '#f4f1e8',
        color: '#8a8270',
        font: '12px system-ui, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      })
    }, "watercolor-kit.js not loaded (or the painting failed to build)");
  }
  return /*#__PURE__*/React.createElement(WatercolorSheetContext.Provider, {
    value: L
  }, /*#__PURE__*/React.createElement("div", {
    style: style,
    "data-om-watercolor-sheet": true
  }, /*#__PURE__*/React.createElement("img", {
    src: L.paper,
    alt: props.alt || '',
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      display: 'block'
    }
  }), props.children));
}
function WatercolorStroke(props) {
  var fromSheet = React.useContext(WatercolorSheetContext);
  var L = props.layers || fromSheet;
  if (!L) return null;
  var i = +props.index;
  if (!(i >= 0) || i >= L.count) return null;
  var at = props.at == null ? 1 : clamp(+props.at, 0, 1);
  if (!(at > 0)) return null;
  var box, src;
  try {
    box = L.box(i);
    src = box ? L.src(i, at) : null;
  } catch (e) {
    wcWarnOnce('stroke:' + i + ':' + e, 'watercolor stroke ' + i + ' failed to render; skipping it', e);
    return null;
  }
  if (!box || !src) return null;
  var style = Object.assign({
    position: 'absolute',
    display: 'block',
    left: box.x * 100 + '%',
    top: box.y * 100 + '%',
    width: box.w * 100 + '%',
    height: box.h * 100 + '%',
    mixBlendMode: L.kind(i) === 'reserve' ? 'normal' : 'multiply',
    pointerEvents: 'none'
  }, props.style);
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    "data-om-watercolor-stroke": i,
    "data-om-stroke-kind": L.kind(i),
    style: style
  });
}

// The default watercolor moment: the painting assembled from its strokes,
// each appearing in painting order (a pure function of T).
function WatercolorPainting(props) {
  var c = useComposition();
  var from = +props.from || 0;
  var to = props.to == null ? from + 6 : +props.to;
  var u = clamp((c.T - from) / Math.max(to - from, 0.001), 0, 1);
  var eased = Easing.easeInOutQuad(u);
  var L = useWatercolorLayers(props.painting, props);
  var tick = React.useState(0)[1];
  var warmed = React.useRef(null);
  React.useEffect(function () {
    if (!L || typeof L.warm !== 'function') return;
    var p = L.warm();
    if (warmed.current === p) return;
    var live = true;
    p.then(function () {
      warmed.current = p;
      if (live) tick(function (x) {
        return x + 1;
      });
    });
    return function () {
      live = false;
    };
  }, [L && L.paper, props.painting]);
  var strokes = [];
  if (L) {
    for (var i = 0; i < L.count; i++) {
      var sp = L.span(i);
      var at = clamp((eased - sp.from) / Math.max(sp.to - sp.from, 1e-6), 0, 1);
      if (at <= 0) break;
      strokes.push(/*#__PURE__*/React.createElement(WatercolorStroke, {
        key: i,
        layers: L,
        index: i,
        at: at
      }));
    }
  }
  return /*#__PURE__*/React.createElement(WatercolorSheet, {
    layers: L,
    style: props.style,
    alt: props.alt
  }, strokes);
}

// Paint-on watercolor reveal as a pure function of T — an <img> with a data:
// URL (the exporter serializes those as-is; a live canvas would export blank).
function WatercolorReveal(props) {
  var c = useComposition();
  var from = +props.from || 0;
  var to = props.to == null ? from + 6 : +props.to;
  var u = clamp((c.T - from) / Math.max(to - from, 0.001), 0, 1);
  var style = Object.assign({
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  }, props.style);
  var frames = Array.isArray(props.frames) && props.frames.length ? props.frames : null;
  var steps = frames ? frames.length - 1 : Math.max(1, Math.round(+props.steps || 36));
  var i = Math.min(steps, Math.round(Easing.easeInOutQuad(u) * steps));
  var painting = typeof props.painting === 'function' ? props.painting : null;
  var kit = window.WatercolorKit;
  var w = +props.width || 900,
    h = +props.height || 1200;
  var askScale = +props.scale || Math.min(2, window.devicePixelRatio || 1);
  var opts = {
    width: w,
    height: h,
    scale: Math.min(askScale, Math.sqrt(11000000 / (w * h))),
    seed: props.seed == null ? undefined : +props.seed,
    steps: steps,
    type: props.format || 'image/jpeg',
    quality: props.quality == null ? 0.88 : +props.quality
  };
  var key = opts.width + 'x' + opts.height + '#' + opts.seed + '@' + opts.scale + '/' + steps + ':' + opts.type + '/' + opts.quality;
  var cache = React.useRef({
    fn: null,
    key: '',
    frames: {},
    baking: false
  }).current;
  var tick = React.useState(0)[1];
  if (cache.fn !== painting && String(cache.fn) !== String(painting) || cache.key !== key) {
    cache.key = key;
    cache.frames = {};
    cache.baking = false;
  }
  cache.fn = painting;
  React.useEffect(function () {
    if (frames || cache.baking || !painting || !kit || typeof kit.bake !== 'function') return;
    cache.baking = true;
    var target = cache.frames;
    try {
      kit.bake(painting, opts, function (n, _t, url) {
        target[n] = url;
      }).then(function (all) {
        if (cache.frames !== target) return;
        for (var n = 0; n < all.length; n++) target[n] = all[n];
        tick(function (x) {
          return x + 1;
        });
      }).catch(function () {
        /* failed bake: the guarded lazy path below still renders */
      });
    } catch (e) {
      /* oversized painting: the guarded lazy path below still renders */
    }
  });
  if (frames) return /*#__PURE__*/React.createElement("img", {
    src: frames[i],
    alt: props.alt || '',
    style: style
  });
  if (!kit || !painting) {
    return /*#__PURE__*/React.createElement("div", {
      style: Object.assign({
        width: '100%',
        height: '100%',
        background: '#f4f1e8',
        color: '#8a8270',
        font: '12px system-ui, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }, props.style)
    }, "watercolor-kit.js not loaded (or no painting function)");
  }
  if (!cache.frames[i]) {
    try {
      cache.frames[i] = kit.frame(painting, Object.assign({}, opts, {
        at: i / steps
      }));
    } catch (e) {
      return /*#__PURE__*/React.createElement("div", {
        style: Object.assign({
          width: '100%',
          height: '100%',
          background: '#f4f1e8',
          color: '#8a8270',
          font: '12px system-ui, sans-serif',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }, props.style)
      }, "painting too large to render (", String(e && e.message).slice(0, 80), ")");
    }
  }
  return /*#__PURE__*/React.createElement("img", {
    src: cache.frames[i],
    alt: props.alt || '',
    style: style
  });
}
Object.assign(window, {
  Easing,
  interpolate,
  animate,
  clamp,
  TimelineContext,
  useTime,
  useTimeline,
  Stage,
  PlaybackBar,
  CompositionStage,
  useComposition,
  Shot,
  Captions,
  WatercolorReveal,
  WatercolorPainting,
  WatercolorSheet,
  WatercolorStroke,
  useWatercolorLayers
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-platform/animations-v3.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-platform/i18n.js
try { (() => {
/* Speaking Genie — prototype Arabic translation layer.
   Translates rendered text nodes + placeholders in place (MutationObserver), so screens stay written in English.
   Production should use real i18n keys; this file doubles as the EN→AR glossary. */
(function () {
  const PAIRS = [
  // platform additions
  ["Student progress report", "تقرير تقدّم الطالب"], ["Monthly progress report", "تقرير التقدّم الشهري"], ["Weekly progress report", "تقرير التقدّم الأسبوعي"], ["Overall progress", "التقدّم العام"], ["Learning metrics", "مقاييس التعلّم"], ["Areas to improve", "مجالات التحسين"], ["Problem", "المشكلة"], ["Suggestion", "الاقتراح"], ["What the student said", "ما قاله الطالب"], ["Current level", "المستوى الحالي"], ["Sessions in this period", "الجلسات في هذه الفترة"], ["Message to the student", "رسالة إلى الطالب"], ["Share with student", "مشاركة مع الطالب"], ["Regenerate", "إعادة الإنشاء"], ["Not completed", "غير مكتملة"], ["Result", "النتيجة"], ["Messages", "الرسائل"], ["Overall", "الإجمالي"], ["Task goal", "هدف المهمة"], ["Transcript", "نص المحادثة"], ["Areas for improvement", "مجالات التحسين"], ["Assign again", "إسناد مرة أخرى"], ["Excellent", "ممتاز"], ["Good progress", "تقدّم جيد"], ["Needs practice", "يحتاج إلى تدريب"], ["Needs improvement", "يحتاج إلى تحسين"], ["Weekly", "أسبوعي"], ["Monthly", "شهري"], ["Tasks completed", "المهام المكتملة"], ["vs previous", "مقارنة بالسابق"], ["Task execution", "تنفيذ المهمة"], ["What students said this week", "ما قاله الطلاب هذا الأسبوع"], ["Copy for lesson", "نسخ للدرس"], ["Practice time", "وقت الممارسة"], ["vs last week", "مقارنة بالأسبوع الماضي"], ["Weakness", "نقطة ضعف"], ["Strength", "نقطة قوة"], ["Teaching tip · ", "نصيحة تدريس · "], ["Ranking", "الترتيب"], ["This week", "هذا الأسبوع"], ["This month", "هذا الشهر"], ["By practice hours", "حسب ساعات الممارسة"], ["By sessions", "حسب الجلسات"], ["Share with group", "مشاركة مع المجموعة"], ["Sessions", "الجلسات"], ["Hours", "الساعات"], ["Practice hours", "ساعات الممارسة"], ["Avg / session", "المتوسط لكل جلسة"], ["Move", "التغيّر"], ["From the conversation", "من المحادثة"], ["Suggested next step", "الخطوة التالية المقترحة"], ["Review session", "مراجعة الجلسة"], ["Assign practice", "إسناد تدريب"], ["Play recording", "تشغيل التسجيل"], ["Overall", "الإجمالي"], ["Past simple errors", "أخطاء الماضي البسيط"], ["Performance", "الأداء"], ["Engagement", "التفاعل"], ["Usage & hours", "الاستخدام والساعات"], ["7 days", "7 أيام"], ["30 days", "30 يومًا"], ["This term", "هذا الفصل"], ["Export PDF", "تصدير PDF"], ["Average overall score", "متوسط الدرجة الإجمالية"], ["Task completion rate", "معدل إكمال المهام"], ["Students improving", "طلاب في تحسّن"], ["Students at risk", "طلاب معرّضون للخطر"], ["Score trend by skill", "اتجاه الدرجات حسب المهارة"], ["Skill breakdown", "تفصيل المهارات"], ["Range", "المدى"], ["Accuracy", "الدقة"], ["Fluency", "الطلاقة"], ["Pronunciation", "النطق"], ["Score distribution", "توزيع الدرجات"], ["Level progression", "التقدّم بين المستويات"], ["Ready to move up", "جاهز للانتقال"], ["Still practising", "ما زال يتدرّب"], ["Group comparison", "مقارنة المجموعات"], ["Active", "نشط"], ["Avg score", "متوسط الدرجة"], ["Change", "التغيّر"], ["On track", "على المسار"], ["Watch", "متابعة"], ["Needs support", "يحتاج إلى دعم"], ["Reason", "السبب"], ["Last session", "آخر جلسة"], ["Score", "الدرجة"], ["Remind", "تذكير"], ["Most improved", "الأكثر تحسنًا"], ["AI insights", "رؤى الذكاء الاصطناعي"], ["Weekly active students", "الطلاب النشطون أسبوعيًا"], ["Sessions per student", "الجلسات لكل طالب"], ["Average session length", "متوسط مدة الجلسة"], ["Inactive 7+ days", "غير نشط منذ 7 أيام أو أكثر"], ["When students practise", "متى يتدرّب الطلاب"], ["Task funnel", "مسار المهام"], ["Assigned", "مُسندة"], ["Started", "بدأت"], ["Reviewed by teacher", "راجعها المعلّم"], ["Active students per week", "الطلاب النشطون أسبوعيًا"], ["Time in session", "الوقت داخل الجلسة"], ["Teacher review backlog", "المراجعات المتأخرة للمعلّمين"], ["Waiting", "بانتظار"], ["Oldest", "الأقدم"], ["Avg turnaround", "متوسط وقت الاستجابة"], ["Reviewed this week", "تمت مراجعتها هذا الأسبوع"], ["Speaking hours this month", "ساعات التحدث هذا الشهر"], ["Hours per active student", "الساعات لكل طالب نشط"], ["Over or near their tier", "تجاوزوا فئتهم أو قاربوها"], ["Tier utilisation", "استخدام الفئات"], ["Hours by group", "الساعات حسب المجموعة"], ["Hours used", "الساعات المستخدمة"], ["Per student", "لكل طالب"], ["Over tier", "تجاوز الفئة"], ["Fewer", "أقل"], ["More", "أكثر"], ["Enrolled", "المسجّلون"], ["Student speaking", "تحدّث الطالب"], ["Listening to AI partner", "الاستماع إلى الشريك الذكي"], ["Silence", "الصمت"], ["No speaking data yet", "لا توجد بيانات تحدث بعد"], ["Notifications", "الإشعارات"], ["Achievements", "الإنجازات"], ["AI characters", "شخصيات الذكاء الاصطناعي"], ["Onboarding analytics", "تحليلات التهيئة"], ["Incentive program", "برنامج الحوافز"], ["Help center", "مركز المساعدة"], ["Support", "الدعم"], ["Recharge", "شحن"], ["hours remaining", "ساعة متبقية"], ["View weekly reports", "عرض التقارير الأسبوعية"], ["Add student", "إضافة طالب"], ["Speaking hours this week", "ساعات التحدث هذا الأسبوع"], ["Average fluency score", "متوسط درجة الطلاقة"], ["Active speaking students", "الطلاب النشطون في التحدث"], ["Sessions completed", "الجلسات المكتملة"], ["This week", "هذا الأسبوع"], ["Students needing attention", "طلاب يحتاجون إلى متابعة"], ["Ranked by urgency", "مرتبة حسب الأولوية"], ["Common speaking issues", "مشكلات التحدث الشائعة"], ["Top students", "أفضل الطلاب"], ["Recent activities", "الأنشطة الأخيرة"], ["Latest speaking practice updates", "آخر تحديثات ممارسة التحدث"], ["AI recommendations", "توصيات الذكاء الاصطناعي"], ["Implement", "تطبيق"], ["Hours spoken", "ساعات التحدث"], ["Tier ceiling", "سقف الفئة"], ["Speaking hours per week", "ساعات التحدث أسبوعيًا"], ["Mark all as read", "تحديد الكل كمقروء"], ["All", "الكل"], ["Archived", "مؤرشفة"], ["Settings", "الإعدادات"], ["Today", "اليوم"], ["Yesterday", "أمس"], ["Earlier", "سابقًا"], ["New", "جديد"], ["Save settings", "حفظ الإعدادات"], ["Reset to defaults", "استعادة الافتراضيات"], ["Add course", "إضافة دورة"], ["Search courses", "البحث في الدورات"], ["Course", "الدورة"], ["Language", "اللغة"], ["Target audiences", "الفئات المستهدفة"], ["Levels", "المستويات"], ["Created", "تاريخ الإنشاء"], ["Course details", "تفاصيل الدورة"], ["Create course", "إنشاء دورة"], ["Description", "الوصف"], ["Set up with AI", "الإعداد بالذكاء الاصطناعي"], ["Edit course", "تعديل الدورة"], ["Add level", "إضافة مستوى"], ["Learning goals", "أهداف التعلّم"], ["Content summary", "ملخص المحتوى"], ["Course levels", "مستويات الدورة"], ["Analysis", "التحليل"], ["Total levels", "إجمالي المستويات"], ["Total students", "إجمالي الطلاب"], ["Tasks", "المهام"], ["Avg completion", "متوسط الإكمال"], ["Student distribution", "توزيع الطلاب"], ["Top performers", "الأفضل أداءً"], ["Progress timeline", "الجدول الزمني للتقدّم"], ["Edit level", "تعديل المستوى"], ["Add task", "إضافة مهمة"], ["Add vocabulary", "إضافة مفردات"], ["Add idiom", "إضافة تعبير"], ["Key performance indicators", "مؤشرات الأداء الرئيسية"], ["Learning materials", "مواد التعلّم"], ["Vocabularies", "المفردات"], ["Idioms", "التعابير"], ["Task", "المهمة"], ["Type", "النوع"], ["Duration", "المدة"], ["Priority", "الأولوية"], ["Status", "الحالة"], ["Word", "الكلمة"], ["Category", "الفئة"], ["Present", "المضارع"], ["Past", "الماضي"], ["Past participle", "التصريف الثالث"], ["Present participle", "صيغة -ing"], ["Idiom", "التعبير"], ["Meaning", "المعنى"], ["Example", "مثال"], ["Edit task", "تعديل المهمة"], ["Delete task", "حذف المهمة"], ["Task brief", "موجز المهمة"], ["Recent attempts", "المحاولات الأخيرة"], ["Completion", "الإكمال"], ["Completed", "مكتمل"], ["Time-based", "حسب الوقت"], ["Topic-based", "حسب الموضوع"], ["High", "عالية"], ["Medium", "متوسطة"], ["Low", "منخفضة"], ["Create character", "إنشاء شخصية"], ["Search characters", "البحث في الشخصيات"], ["Background", "الخلفية"], ["Interests", "الاهتمامات"], ["Conversation topics", "مواضيع المحادثة"], ["Used in", "مستخدمة في"], ["Edit character", "تعديل الشخصية"], ["Delete", "حذف"], ["Character information", "معلومات الشخصية"], ["Name", "الاسم"], ["Invitations", "الدعوات"], ["Import students", "استيراد الطلاب"], ["Student", "الطالب"], ["Course & level", "الدورة والمستوى"], ["Tier", "الفئة"], ["Hours this month", "ساعات هذا الشهر"], ["Enrolled", "تاريخ التسجيل"], ["Over limit", "تجاوز الحد"], ["Blocked", "محظور"], ["All students", "كل الطلاب"], ["Edit", "تعديل"], ["Send reminder", "إرسال تذكير"], ["Request report", "طلب تقرير"], ["Student reports", "تقارير الطالب"], ["Recent activity", "النشاط الأخير"], ["Learning progress", "تقدّم التعلّم"], ["Performance statistics", "إحصاءات الأداء"], ["Student information", "معلومات الطالب"], ["Full name", "الاسم الكامل"], ["Email", "البريد الإلكتروني"], ["Level", "المستوى"], ["Phone number", "رقم الهاتف"], ["Address", "العنوان"], ["Consumption tier", "فئة الاستهلاك"], ["Student invitations", "دعوات الطلاب"], ["Create invitation", "إنشاء دعوة"], ["Active invitations", "الدعوات النشطة"], ["Total registrations", "إجمالي التسجيلات"], ["Expiring soon", "تنتهي قريبًا"], ["Total invitations", "إجمالي الدعوات"], ["Target", "الهدف"], ["Uses", "الاستخدامات"], ["Expires", "تنتهي في"], ["Copy link", "نسخ الرابط"], ["Disable", "تعطيل"], ["Enable", "تفعيل"], ["Expired", "منتهية"], ["Disabled", "معطّلة"], ["Max reached", "بلغت الحد"], ["Create group", "إنشاء مجموعة"], ["Group", "المجموعة"], ["Period", "الفترة"], ["All groups", "كل المجموعات"], ["Edit group", "تعديل المجموعة"], ["Invite students", "دعوة الطلاب"], ["Content & pacing", "المحتوى والإيقاع"], ["Analytics", "التحليلات"], ["Pacing plan", "خطة الإيقاع"], ["Upcoming", "قادمة"], ["Ended", "منتهية"], ["Invite user", "دعوة مستخدم"], ["User", "المستخدم"], ["Role", "الدور"], ["Specialty", "التخصص"], ["Last active", "آخر نشاط"], ["All users", "كل المستخدمين"], ["Delete user", "حذف المستخدم"], ["Groups taught", "المجموعات التي يدرّسها"], ["Roles", "الأدوار"], ["Permission matrix", "مصفوفة الصلاحيات"], ["Create role", "إنشاء دور"], ["Publish changes", "نشر التغييرات"], ["Grant all", "منح الكل"], ["System", "نظام"], ["Custom", "مخصص"], ["Module", "الوحدة"], ["Permission", "الصلاحية"], ["Pending", "قيد الانتظار"], ["Active schedules", "الجداول النشطة"], ["Processing", "قيد المعالجة"], ["Completed this week", "المكتملة هذا الأسبوع"], ["Individual reports", "التقارير الفردية"], ["Group analysis", "تحليل المجموعة"], ["Schedules only", "الجداول فقط"], ["Requests only", "الطلبات فقط"], ["Date range", "النطاق الزمني"], ["Schedule", "الجدول"], ["Created by", "أنشأه"], ["View", "عرض"], ["Download", "تنزيل"], ["Generated", "تم الإنشاء"], ["Failed", "فشل"], ["Paused", "متوقف"], ["Resume", "استئناف"], ["Retry", "إعادة المحاولة"], ["Weekly practice report", "تقرير الممارسة الأسبوعي"], ["All reports", "كل التقارير"], ["Open student", "فتح الطالب"], ["Download PDF", "تنزيل PDF"], ["Total practice", "إجمالي الممارسة"], ["Speaking time", "وقت التحدث"], ["Listening time", "وقت الاستماع"], ["Silence time", "وقت الصمت"], ["Fluency score", "درجة الطلاقة"], ["Teacher focus areas", "مجالات تركيز المعلّم"], ["Strengths", "نقاط القوة"], ["Areas for improvement", "مجالات التحسين"], ["Topics discussed", "المواضيع التي نوقشت"], ["Grammar analysis", "تحليل القواعد"], ["Pronunciation analysis", "تحليل النطق"], ["Vocabulary analysis", "تحليل المفردات"], ["Wallet balance", "رصيد المحفظة"], ["Hours used this month", "الساعات المستخدمة هذا الشهر"], ["Over their tier", "تجاوزوا فئتهم"], ["Avg per student", "المتوسط لكل طالب"], ["Consumption tiers", "فئات الاستهلاك"], ["Highest usage", "الاستخدام الأعلى"], ["Export CSV", "تصدير CSV"], ["Billing & subscription", "الفوترة والاشتراك"], ["View all plans", "عرض كل الخطط"], ["Hide plans", "إخفاء الخطط"], ["Recharge hours", "شحن الساعات"], ["Current plan", "الخطة الحالية"], ["Plan", "الخطة"], ["Rate per hour", "السعر لكل ساعة"], ["Max students", "الحد الأقصى للطلاب"], ["Started", "بدأت في"], ["Hour wallet", "محفظة الساعات"], ["Avg daily usage", "متوسط الاستخدام اليومي"], ["Est. days left", "الأيام المتبقية تقديريًا"], ["Total usage", "إجمالي الاستخدام"], ["Usage trends", "اتجاهات الاستخدام"], ["Top consumers this month", "الأكثر استهلاكًا هذا الشهر"], ["Transaction history", "سجل المعاملات"], ["Subscriptions", "الاشتراكات"], ["Paid", "مدفوع"], ["Select plan", "اختيار الخطة"], ["Most popular", "الأكثر شيوعًا"], ["Request payout", "طلب صرف"], ["Incentive wallet", "محفظة الحوافز"], ["Your referral link", "رابط الإحالة الخاص بك"], ["Copy", "نسخ"], ["Clicks", "النقرات"], ["Sign-ups", "التسجيلات"], ["Total referrals", "إجمالي الإحالات"], ["Active subscriptions", "الاشتراكات النشطة"], ["Conversion rate", "معدل التحويل"], ["Monthly growth", "النمو الشهري"], ["Monthly earnings", "الأرباح الشهرية"], ["Payout history", "سجل الصرف"], ["Joined", "تاريخ الانضمام"], ["Earnings", "الأرباح"], ["Total earned", "إجمالي الأرباح"], ["Total withdrawn", "إجمالي المسحوب"], ["Personal information", "المعلومات الشخصية"], ["Password", "كلمة المرور"], ["Preferences", "التفضيلات"], ["Active sessions", "الجلسات النشطة"], ["Leave workspace", "مغادرة مساحة العمل"], ["Leave", "مغادرة"], ["Organisation", "المؤسسة"], ["Company name", "اسم الشركة"], ["Phone", "الهاتف"], ["Proficiency levels", "مستويات الكفاءة"], ["Browse by category", "التصفح حسب الفئة"], ["Popular articles", "المقالات الشائعة"], ["Frequently asked questions", "الأسئلة الشائعة"], ["Need more help?", "تحتاج إلى مساعدة إضافية؟"], ["Contact support", "التواصل مع الدعم"], ["Search", "بحث"], ["Send us a message", "أرسل لنا رسالة"], ["Send message", "إرسال الرسالة"], ["Department", "القسم"], ["Subject", "الموضوع"], ["Message", "الرسالة"], ["Other ways to reach us", "طرق أخرى للتواصل"], ["Response time", "وقت الاستجابة"], ["Related articles", "مقالات ذات صلة"], ["Was this article helpful?", "هل كانت هذه المقالة مفيدة؟"], ["Yes", "نعم"], ["No", "لا"], ["Share", "مشاركة"], ["Sign in to your account", "تسجيل الدخول إلى حسابك"], ["Sign in", "تسجيل الدخول"], ["Remember me", "تذكّرني"], ["Forgot password?", "نسيت كلمة المرور؟"], ["Create an account", "إنشاء حساب"], ["Create your account", "أنشئ حسابك"], ["Create account", "إنشاء الحساب"], ["Forgot password", "نسيت كلمة المرور"], ["Send reset link", "إرسال رابط إعادة التعيين"], ["Reset password", "إعادة تعيين كلمة المرور"], ["Join as a student", "الانضمام كطالب"], ["Register now", "سجّل الآن"], ["Join group", "الانضمام إلى المجموعة"], ["Page not found", "الصفحة غير موجودة"], ["Return to home", "العودة إلى الرئيسية"],
  // shell
  ["Search…", "بحث…"], ["Overview", "نظرة عامة"], ["Teaching", "التدريس"], ["Insights", "الرؤى"], ["Administration", "الإدارة"], ["Account", "الحساب"], ["Dashboard", "لوحة التحكم"], ["Courses", "الدورات"], ["Groups", "المجموعات"], ["Students", "الطلاب"], ["Reports", "التقارير"], ["Consumption", "الاستهلاك"], ["Users", "المستخدمون"], ["Roles & permissions", "الأدوار والصلاحيات"], ["Billing", "الفوترة"], ["Company profile", "ملف الشركة"], ["My groups", "مجموعاتي"], ["Course content", "محتوى الدورة"], ["VIEWING AS", "العرض بصفة"], ["Admin", "مسؤول"], ["Teacher", "معلّم"], ["Admin User", "مستخدم مسؤول"], ["Cairo Language Center", "مركز القاهرة للغات"], ["General English", "الإنجليزية العامة"], ["Business English", "الإنجليزية للأعمال"], ["My profile", "ملفي الشخصي"], ["Student progress", "تقدّم الطلاب"], ["English", "الإنجليزية"], ["Workspace", "مساحة العمل"], ["all students", "كل الطلاب"],
  // common
  ["Cancel", "إلغاء"], ["Save changes", "حفظ التغييرات"], ["Active", "نشط"], ["Invited", "مدعو"], ["Draft", "مسودة"], ["Starting", "قيد البدء"], ["Ready", "جاهز"], ["Processing", "قيد المعالجة"], ["Failed", "فشل"], ["Paid", "مدفوعة"], ["Empty", "فارغة"], ["Review", "مراجعة"], ["Over limit", "تجاوز الحد"], ["Inactive", "غير نشط"], ["Complete", "مكتمل"], ["Behind", "متأخر"], ["Current", "الحالي"], ["Scheduled", "مجدول"], ["In progress", "قيد التنفيذ"], ["System", "نظامي"], ["Custom", "مخصّص"], ["Yesterday", "أمس"], ["Today", "اليوم"], ["Never", "أبدًا"], ["Last 30 days", "آخر 30 يومًا"], ["Export CSV", "تصدير CSV"], ["Import CSV", "استيراد CSV"], ["Student", "الطالب"], ["Course", "الدورة"], ["Level", "المستوى"], ["Tier", "الفئة"], ["Progress", "التقدّم"], ["Status", "الحالة"], ["Course & level", "الدورة والمستوى"], ["Group", "المجموعة"], ["Schedule", "الجدول"], ["Hours", "الساعات"], ["Last session", "آخر جلسة"], ["Flag", "تنبيه"], ["User", "المستخدم"], ["Role", "الدور"], ["Last active", "آخر نشاط"], ["Type", "النوع"], ["Target", "الهدف"], ["Range", "النطاق"], ["Accuracy", "الدقة"], ["Fluency", "الطلاقة"], ["Requested by", "مقدّم الطلب"], ["Date", "التاريخ"], ["Description", "الوصف"], ["Amount", "المبلغ"], ["Tasks", "المهام"], ["Trend", "الاتجاه"], ["Used", "المستخدم"], ["Avg score", "متوسط الدرجة"], ["of", "من"], ["Unassigned", "غير معيّن"], ["Not scheduled", "غير مجدول"], ["Daily", "يوميًا"], ["Enterprise", "المؤسسات"], ["Unlimited", "غير محدود"], ["Role: All", "الدور: الكل"], ["Status: Active", "الحالة: نشط"], ["Type: All", "النوع: الكل"], ["Status: All", "الحالة: الكل"], ["Columns", "الأعمدة"], ["Load more", "تحميل المزيد"],
  // dashboard
  ["Good morning, Admin", "صباح الخير، مسؤول النظام"], ["Enterprise plan", "خطة المؤسسات"], ["Add student", "إضافة طالب"], ["Hour wallet is empty.", "محفظة الساعات فارغة."], ["Recharge to resume speaking sessions — 3 students are already blocked.", "اشحن المحفظة لاستئناف جلسات المحادثة — تم إيقاف 3 طلاب بالفعل."], ["Recharge hours", "شحن الساعات"], ["Active students", "الطلاب النشطون"], ["Hours delivered", "الساعات المقدَّمة"], ["Avg completion", "متوسط الإكمال"], ["Tasks reviewed", "المهام المراجَعة"], ["24 awaiting a teacher", "24 بانتظار المعلّم"], ["Speaking hours per week", "ساعات المحادثة أسبوعيًا"], ["Delivered across all groups", "عبر جميع المجموعات"], ["Hours used", "الساعات المستخدمة"], ["Tier ceiling", "سقف الفئة"], ["Needs attention", "يحتاج إلى متابعة"], ["Ranked by urgency", "مرتبة حسب الأولوية"], ["Students over their tier", "طلاب تجاوزوا فئتهم"], ["Sessions blocked until recharge", "الجلسات موقوفة حتى الشحن"], ["Sessions awaiting feedback", "جلسات بانتظار الملاحظات"], ["Oldest is 6 days old", "أقدمها منذ 6 أيام"], ["Invites not accepted", "دعوات لم تُقبل"], ["Sent more than 7 days ago", "أُرسلت قبل أكثر من 7 أيام"], ["Levels with no content", "مستويات بلا محتوى"], ["Level B2 has no scenarios", "المستوى B2 بلا سيناريوهات"], ["Recent activity", "النشاط الأخير"], ["You created the Finance role with 4 permissions", "أنشأتَ دور المالية بأربع صلاحيات"],
  // roles
  ["Pick a role, then grant permissions by area. Changes apply to everyone holding the role.", "اختر دورًا ثم امنح الصلاحيات حسب المجال. تُطبَّق التغييرات على كل من يحمل هذا الدور."], ["Audit matrix", "مصفوفة التدقيق"], ["Create role", "إنشاء دور"], ["Center manager", "مدير المركز"], ["Finance", "المالية"], ["Full access · 2 users", "وصول كامل · مستخدمان"], ["Revoke all", "إلغاء الكل"], ["Grant all", "منح الكل"], ["permissions granted ·", "صلاحية ممنوحة ·"], ["Role saved", "تم حفظ الدور"], ["System roles cannot be deleted. Duplicate one to build a custom role from a known-good baseline.", "لا يمكن حذف أدوار النظام. انسخ أحدها لبناء دور مخصّص من أساس موثوق."], ["Courses & content", "الدورات والمحتوى"], ["Levels, vocabulary, tasks, flashcards, scenarios", "المستويات والمفردات والمهام والبطاقات والسيناريوهات"], ["Students & groups", "الطلاب والمجموعات"], ["Enrolment, tiers, cohorts", "التسجيل والفئات والدفعات"], ["Reports and hour consumption", "التقارير واستهلاك الساعات"], ["Users, roles, billing, company profile", "المستخدمون والأدوار والفوترة وملف الشركة"], ["View courses", "عرض الدورات"], ["Create & edit courses", "إنشاء الدورات وتعديلها"], ["Manage levels", "إدارة المستويات"], ["Manage content items", "إدارة عناصر المحتوى"], ["Generate content with AI", "إنشاء المحتوى بالذكاء الاصطناعي"], ["Delete courses", "حذف الدورات"], ["View students", "عرض الطلاب"], ["Add & invite students", "إضافة الطلاب ودعوتهم"], ["Assign tier & level", "تعيين الفئة والمستوى"], ["Manage groups", "إدارة المجموعات"], ["View reports", "عرض التقارير"], ["Request & schedule reports", "طلب التقارير وجدولتها"], ["View consumption", "عرض الاستهلاك"], ["Manage consumption tiers", "إدارة فئات الاستهلاك"], ["View users", "عرض المستخدمين"], ["Invite & remove users", "دعوة المستخدمين وإزالتهم"], ["Manage roles & permissions", "إدارة الأدوار والصلاحيات"], ["View billing", "عرض الفوترة"], ["Recharge hours & change plan", "شحن الساعات وتغيير الخطة"], ["Edit company profile", "تعديل ملف الشركة"],
  // students
  ["359 enrolled across 2 courses.", "359 طالبًا مسجّلًا في دورتين."], ["Invitations", "الدعوات"], ["Search students…", "ابحث عن الطلاب…"], ["All students", "كل الطلاب"], ["Change tier", "تغيير الفئة"], ["Move level", "نقل المستوى"], ["Request report", "طلب تقرير"], ["Course progress", "تقدّم الدورة"], ["12 of 35 tasks completed", "12 من 35 مهمة مكتملة"], ["Sessions", "الجلسات"], ["Streak", "أيام متتالية"], ["consecutive days", "أيام متواصلة"], ["Recent speaking sessions", "جلسات المحادثة الأخيرة"], ["Scored on range, accuracy and fluency", "تُقيَّم على النطاق والدقة والطلاقة"], ["View all 24 sessions", "عرض كل الجلسات (24)"], ["Speaking KPIs", "مؤشرات أداء المحادثة"], ["Produces simple phrases about people and places.", "يُنتج عبارات بسيطة عن الأشخاص والأماكن."], ["Limited control of past tense; recurring article errors.", "تحكّم محدود في الزمن الماضي؛ أخطاء متكررة في أدوات التعريف."], ["Short utterances, pauses shortening month over month.", "عبارات قصيرة، والتوقفات تقصر شهرًا بعد شهر."], ["Hours this month", "ساعات هذا الشهر"], ["/ 20 hrs", "/ 20 ساعة"], ["34% of the Regular tier used · resets Sep 1", "استُخدم 34% من الفئة العادية · يُعاد الضبط في 1 سبتمبر"],
  // course
  ["Generate with AI", "إنشاء بالذكاء الاصطناعي"], ["Course settings", "إعدادات الدورة"], ["Publish changes", "نشر التغييرات"], ["Outline", "المخطط"], ["+ Level", "+ مستوى"], ["Goals & KPIs", "الأهداف ومؤشرات الأداء"], ["Vocabulary & idioms", "المفردات والتعابير"], ["Conversational tasks", "مهام المحادثة"], ["Flashcards", "البطاقات التعليمية"], ["Real-life scenarios", "سيناريوهات واقعية"], ["Level goals & KPIs", "أهداف المستوى ومؤشرات الأداء"], ["Add goal", "إضافة هدف"], ["Add entry", "إضافة مدخل"], ["Add task", "إضافة مهمة"], ["Add card", "إضافة بطاقة"], ["Add scenario", "إضافة سيناريو"], ["Reorder", "إعادة الترتيب"], ["items in", "عنصرًا في"], ["Target lexis practised in this level's tasks", "المفردات المستهدفة في مهام هذا المستوى"], ["Live speaking prompts scored on range, accuracy and fluency", "محفزات محادثة مباشرة تُقيَّم على النطاق والدقة والطلاقة"], ["Spaced-repetition drills unlocked with each task", "تدريبات تكرار متباعد تُفتح مع كل مهمة"], ["Multi-turn simulations combining the level's tasks and lexis", "محاكاة متعددة الأدوار تجمع مهام المستوى ومفرداته"], ["What a student must demonstrate to advance", "ما يجب أن يُظهره الطالب للتقدّم"], ["Applied to every speaking task generated at this level.", "تُطبَّق على كل مهمة محادثة تُنشأ في هذا المستوى."], ["Max output words", "الحد الأقصى لكلمات الإخراج"], ["Speaking speed", "سرعة التحدث"], ["Students at level", "طلاب المستوى"], ["Goals", "الأهداف"], ["+ Add goal", "+ إضافة هدف"],
  // groups
  ["A group pairs a course level with a teacher and a cohort of students.", "تجمع المجموعة بين مستوى دورة ومعلّم ودفعة من الطلاب."], ["Create group", "إنشاء مجموعة"], ["Search groups…", "ابحث عن المجموعات…"], ["All groups", "كل المجموعات"], ["Edit group", "تعديل المجموعة"], ["Add students", "إضافة طلاب"], ["Avg progress", "متوسط التقدّم"], ["Hours this month", "ساعات هذا الشهر"], ["Needs review", "بحاجة لمراجعة"], ["Oldest 2 days old", "أقدمها منذ يومين"], ["Roster", "قائمة الطلاب"], ["Content & pacing", "المحتوى والجدولة"], ["Analytics", "التحليلات"], ["Export roster", "تصدير القائمة"], ["Tasks completed per week", "المهام المكتملة أسبوعيًا"], ["Group total across 12 students", "إجمالي المجموعة لـ12 طالبًا"], ["Average KPIs", "متوسط مؤشرات الأداء"], ["Group mean, last 30 days", "متوسط المجموعة، آخر 30 يومًا"], ["Completed", "مكتملة"], ["Pacing plan", "خطة الجدولة"], ["content unlocks on schedule", "يُفتح المحتوى حسب الجدول"], ["Course content →", "محتوى الدورة ←"], ["Introductions & routines", "التعارف والروتين"], ["Describing places", "وصف الأماكن"], ["Shopping & money", "التسوق والمال"], ["Travel & directions", "السفر والاتجاهات"], ["Work & colleagues", "العمل والزملاء"], ["Pacing is 1 week behind", "الجدولة متأخرة أسبوعًا واحدًا"], ["Week 3 tasks are at 41% completion. Consider unlocking week 5 later or reducing the weekly task count.", "مهام الأسبوع 3 مكتملة بنسبة 41%. فكّر في تأجيل فتح الأسبوع 5 أو تقليل عدد المهام الأسبوعية."], ["Adjust schedule", "تعديل الجدول"], ["Teacher view — progress and session feedback. Course content and billing are read-only.", "عرض المعلّم — التقدّم وملاحظات الجلسات. محتوى الدورة والفوترة للقراءة فقط."], ["Export progress", "تصدير التقدّم"], ["Oldest first", "الأقدم أولًا"],
  // consumption / billing
  ["Speaking hours used against each student's monthly tier.", "ساعات المحادثة المستخدمة مقابل الفئة الشهرية لكل طالب."], ["New tier", "فئة جديدة"], ["Sessions are paused for 359 students until the workspace is recharged.", "الجلسات متوقفة لـ359 طالبًا حتى يُعاد شحن مساحة العمل."], ["Total students", "إجمالي الطلاب"], ["Sessions blocked", "جلسات موقوفة"], ["Avg monthly usage", "متوسط الاستخدام الشهري"], ["hours per student", "ساعة لكل طالب"], ["Used this month", "المستخدم هذا الشهر"], ["hours across the workspace", "ساعة عبر مساحة العمل"], ["Tiers", "الفئات"], ["Monthly hour ceiling per student", "سقف الساعات الشهري لكل طالب"], ["Light user", "مستخدم خفيف"], ["Regular user", "مستخدم عادي"], ["Heavy user", "مستخدم نشط"], ["Intensive user", "مستخدم مكثّف"], ["Minimal usage", "استخدام محدود"], ["Average students", "طلاب متوسطو النشاط"], ["Highly engaged students", "طلاب شديدو التفاعل"], ["DEFAULT", "افتراضي"], ["Highest usage this month", "الأعلى استخدامًا هذا الشهر"], ["Sorted by share of tier consumed", "مرتبة حسب نسبة استهلاك الفئة"], ["August 2026", "أغسطس 2026"], ["Plan, hour wallet and invoices.", "الخطة ومحفظة الساعات والفواتير."], ["Change plan", "تغيير الخطة"], ["Current plan", "الخطة الحالية"], ["Rate per hour", "السعر لكل ساعة"], ["Max students", "الحد الأقصى للطلاب"], ["Started", "تاريخ البدء"], ["Renews", "التجديد"], ["Hour wallet", "محفظة الساعات"], ["hours remaining", "ساعة متبقية"], ["Purchased", "المشتراة"], ["Avg daily use", "متوسط الاستخدام اليومي"], ["Days left", "الأيام المتبقية"], ["Invoices & recharges", "الفواتير وعمليات الشحن"], ["Billed to Cairo Language Center", "تُصدر باسم مركز القاهرة للغات"], ["Payment method", "طريقة الدفع"], ["Hour recharge", "شحن ساعات"], ["annual", "سنوي"], ["Showing the last 4 of 11 documents", "عرض آخر 4 من 11 مستندًا"],
  // users
  ["Staff accounts for this workspace. Students live under Students.", "حسابات الموظفين في مساحة العمل هذه. الطلاب موجودون ضمن قسم الطلاب."], ["Pending invites", "دعوات معلّقة"], ["Invite user", "دعوة مستخدم"], ["Search by name or email…", "ابحث بالاسم أو البريد الإلكتروني…"], ["Pending assignment", "بانتظار التعيين"], ["All users", "كل المستخدمين"], ["Reset password", "إعادة تعيين كلمة المرور"], ["Edit user", "تعديل المستخدم"], ["21 students in reach", "21 طالبًا ضمن النطاق"], ["Sessions reviewed", "الجلسات المراجَعة"], ["Avg turnaround", "متوسط وقت الاستجابة"], ["Feedback after a session", "الملاحظات بعد الجلسة"], ["Awaiting review", "بانتظار المراجعة"], ["Assigned groups", "المجموعات المعيّنة"], ["Determines which students this user can see", "تحدد الطلاب الذين يمكن لهذا المستخدم رؤيتهم"], ["Assign", "تعيين"], ["Audit log", "سجل التدقيق"], ["Actions taken by this user", "الإجراءات التي اتخذها هذا المستخدم"], ["Open full audit log", "فتح سجل التدقيق الكامل"], ["Effective permissions", "الصلاحيات الفعلية"], ["Inherited from the Teacher role", "موروثة من دور المعلّم"], ["Edit role", "تعديل الدور"], ["Permissions are granted by role only. To give this user more access, change their role or edit the Teacher role.", "تُمنح الصلاحيات عبر الأدوار فقط. لمنح هذا المستخدم وصولًا أكبر، غيّر دوره أو عدّل دور المعلّم."], ["Deactivate user", "إلغاء تفعيل المستخدم"], ["Sessions end immediately and their groups become unassigned. History is kept for reporting.", "تنتهي الجلسات فورًا وتصبح مجموعاته غير معيّنة. يُحتفظ بالسجل لأغراض التقارير."], ["Deactivate", "إلغاء التفعيل"], ["Role: Teacher →", "الدور: معلّم ←"],
  // reports
  ["Request a one-off report or put it on a schedule.", "اطلب تقريرًا لمرة واحدة أو جدوله."], ["Group summary", "ملخص المجموعة"], ["Teacher activity", "نشاط المعلّمين"], ["Per-student levels, tasks and KPI trend for a date range.", "مستويات كل طالب ومهامه واتجاه مؤشرات أدائه لفترة محددة."], ["Cohort completion and average scores by level.", "إكمال الدفعة ومتوسط الدرجات حسب المستوى."], ["Hours used against tier, per student or workspace-wide.", "الساعات المستخدمة مقابل الفئة، لكل طالب أو لمساحة العمل كاملة."], ["Sessions reviewed and feedback turnaround time.", "الجلسات المراجَعة ووقت الاستجابة للملاحظات."], ["Request →", "اطلب ←"], ["History", "السجل"], ["Schedules", "الجداول"], ["All teachers", "كل المعلّمين"], ["monthly", "شهري"], ["All reports", "كل التقارير"], ["Share link", "مشاركة الرابط"], ["Download PDF", "تنزيل PDF"], ["Filters", "عوامل التصفية"], ["Min. 1 session", "جلسة واحدة على الأقل"], ["Students covered", "الطلاب المشمولون"], ["47 with no session excluded", "استُبعد 47 بلا جلسات"], ["Tasks completed", "المهام المكتملة"], ["Completion by level", "الإكمال حسب المستوى"], ["Students enrolled vs tasks completed", "الطلاب المسجّلون مقابل المهام المكتملة"], ["Completion %", "نسبة الإكمال"], ["KPI averages", "متوسطات مؤشرات الأداء"], ["Weighted across 359 students", "مرجّحة عبر 359 طالبًا"], ["Scores are averaged per attempt, not per student, so heavy users weigh more.", "تُحسب الدرجات لكل محاولة لا لكل طالب، لذا يكون للمستخدمين الأكثر نشاطًا وزن أكبر."], ["Per-student detail", "تفاصيل كل طالب"], ["Sorted by tasks completed", "مرتبة حسب المهام المكتملة"],
  // company / profile
  ["Workspace identity, contact details and defaults for new students.", "هوية مساحة العمل وبيانات الاتصال والإعدادات الافتراضية للطلاب الجدد."], ["Identity & contact", "الهوية والاتصال"], ["Student defaults", "إعدادات الطلاب الافتراضية"], ["Branding", "العلامة التجارية"], ["Languages", "اللغات"], ["Integrations", "التكاملات"], ["Identity", "الهوية"], ["Logo", "الشعار"], ["Workspace logo", "شعار مساحة العمل"], ["SVG or PNG, square, at least 256×256. Shown to students in the app.", "SVG أو PNG، مربع، بحجم 256×256 على الأقل. يظهر للطلاب في التطبيق."], ["Upload", "رفع"], ["Remove", "إزالة"], ["Legal name", "الاسم القانوني"], ["Display name", "الاسم المعروض"], ["Primary contact", "جهة الاتصال الرئيسية"], ["Contact email", "بريد التواصل"], ["Phone", "الهاتف"], ["Tax / VAT number", "الرقم الضريبي"], ["Country", "الدولة"], ["Time zone", "المنطقة الزمنية"], ["Defaults for new students", "الإعدادات الافتراضية للطلاب الجدد"], ["Applied on enrolment unless overridden.", "تُطبَّق عند التسجيل ما لم تُغيَّر."], ["Consumption tier", "فئة الاستهلاك"], ["Interface language", "لغة الواجهة"], ["English (EN)", "الإنجليزية (EN)"], ["Students may self-enrol with an invite link", "يمكن للطلاب التسجيل ذاتيًا عبر رابط دعوة"], ["Seats are still counted against the plan", "تُحتسب المقاعد ضمن الخطة"], ["Block sessions when a student passes their tier", "إيقاف الجلسات عند تجاوز الطالب فئته"], ["Off means the workspace wallet absorbs the overage", "عند الإيقاف، تتحمّل محفظة مساحة العمل الزيادة"], ["Weekly progress digest to group teachers", "ملخص أسبوعي للتقدّم لمعلّمي المجموعات"], ["Sent Monday 08:00 local time", "يُرسل الاثنين 08:00 بالتوقيت المحلي"], ["Discard", "تجاهل"], ["Your account, security and notification preferences.", "حسابك والأمان وتفضيلات الإشعارات."], ["Change photo", "تغيير الصورة"], ["Full name", "الاسم الكامل"], ["Email", "البريد الإلكتروني"], ["Job title", "المسمى الوظيفي"], ["Notifications", "الإشعارات"], ["Wallet running low", "رصيد المحفظة منخفض"], ["Below 7 days of hours at current usage", "أقل من 7 أيام من الساعات بالاستخدام الحالي"], ["in-app", "داخل التطبيق"], ["In-app", "داخل التطبيق"], ["Student passes their tier", "تجاوز طالب لفئته"], ["Immediate, per student", "فوري، لكل طالب"], ["Report ready", "التقرير جاهز"], ["When a requested report finishes", "عند اكتمال تقرير مطلوب"], ["Weekly workspace digest", "ملخص أسبوعي لمساحة العمل"], ["Monday morning summary", "ملخص صباح الاثنين"], ["Security", "الأمان"], ["Last password change 4 months ago", "آخر تغيير لكلمة المرور منذ 4 أشهر"], ["Change password", "تغيير كلمة المرور"], ["Two-factor auth", "المصادقة الثنائية"], ["Authenticator app", "تطبيق المصادقة"], ["Active sessions", "الجلسات النشطة"], ["THIS DEVICE", "هذا الجهاز"], ["This device", "هذا الجهاز"], ["Revoke", "إلغاء"], ["Cairo, EG", "القاهرة، مصر"], ["Alexandria, EG", "الإسكندرية، مصر"], ["active now", "نشط الآن"], ["Leave workspace", "مغادرة مساحة العمل"], ["You will lose access to Cairo Language Center immediately. Another admin must re-invite you.", "ستفقد الوصول إلى مركز القاهرة للغات فورًا. يجب أن يعيد مسؤول آخر دعوتك."],
  // flows
  ["Create & edit flows", "مسارات الإنشاء والتعديل"], ["Flows", "المسارات"], ["Roles & permissions", "الأدوار والصلاحيات"], ["Edit student", "تعديل الطالب"], ["Add course", "إضافة دورة"], ["Add level", "إضافة مستوى"], ["Delete level", "حذف المستوى"], ["Vocabulary entry", "مدخل مفردات"], ["Conversational task", "مهمة محادثة"], ["Courses · content", "الدورات · المحتوى"], ["Start from a baseline, then grant permissions on the role page.", "ابدأ من أساس، ثم امنح الصلاحيات من صفحة الدور."], ["You will land on the role's permission editor after creating it.", "ستنتقل إلى محرر صلاحيات الدور بعد إنشائه."], ["Role name", "اسم الدور"], ["Key", "المفتاح"], ["Generated from the name. Used in the API and cannot change later.", "يُولَّد من الاسم. يُستخدم في واجهة البرمجة ولا يمكن تغييره لاحقًا."], ["Start from", "البدء من"], ["No permissions", "بلا صلاحيات"], ["Grant everything manually", "امنح كل شيء يدويًا"], ["Copy Center manager", "نسخ مدير المركز"], ["14 permissions", "14 صلاحية"], ["Copy Teacher", "نسخ المعلّم"], ["5 permissions", "5 صلاحيات"], ["They receive an email link valid for 7 days.", "يتلقى رابطًا بالبريد الإلكتروني صالحًا لمدة 7 أيام."], ["Send invite", "إرسال الدعوة"], ["Work email", "البريد الإلكتروني للعمل"], ["Assign to groups", "التعيين في مجموعات"], ["Send a welcome message with the invite", "إرسال رسالة ترحيب مع الدعوة"], ["Seats: 5 of 25 used. Invited users occupy a seat once they accept.", "المقاعد: 5 من 25 مستخدمة. يشغل المستخدم المدعو مقعدًا بمجرد قبوله."], ["Enrol one student. Use Import CSV for a cohort.", "سجّل طالبًا واحدًا. استخدم استيراد CSV لدفعة كاملة."], ["Hours are drawn from the workspace wallet, capped by the student's tier.", "تُخصم الساعات من محفظة مساحة العمل بحد أقصى حسب فئة الطالب."], ["Starting level", "مستوى البدء"], ["Run a placement task before assigning a level", "إجراء مهمة تحديد مستوى قبل التعيين"], ["Email the app invite now", "إرسال دعوة التطبيق بالبريد الآن"], ["Moving a level keeps completed tasks in history.", "نقل المستوى يُبقي المهام المكتملة في السجل."], ["6.8 hrs already used this month.", "استُخدمت 6.8 ساعة هذا الشهر بالفعل."], ["Reset this month's hour usage", "إعادة ضبط استخدام الساعات لهذا الشهر"], ["Delete student", "حذف الطالب"], ["A group pairs a course level with a teacher and a cohort.", "تجمع المجموعة بين مستوى دورة ومعلّم ودفعة."], ["Group name", "اسم المجموعة"], ["Days", "الأيام"], ["Capacity", "السعة"], ["Enrolment is blocked past capacity.", "يُمنع التسجيل بعد بلوغ السعة."], ["Term", "الفصل"], ["Students are added after the group exists, from the Students table or the group page.", "يُضاف الطلاب بعد إنشاء المجموعة، من جدول الطلاب أو صفحة المجموعة."], ["Levels and content are added next.", "تُضاف المستويات والمحتوى لاحقًا."], ["Create course", "إنشاء دورة"], ["Course name", "اسم الدورة"], ["Language", "اللغة"], ["Level framework", "إطار المستويات"], ["Target audiences", "الفئات المستهدفة"], ["Professionals", "المهنيون"], ["General", "عام"], ["Business", "الأعمال"], ["Create the framework's levels automatically", "إنشاء مستويات الإطار تلقائيًا"], ["Six empty levels with CEFR goals and KPIs pre-filled.", "ستة مستويات فارغة بأهداف ومؤشرات CEFR معبأة مسبقًا."], ["Level name", "اسم المستوى"], ["Caps the length of AI turns.", "يحدّ من طول ردود الذكاء الاصطناعي."], ["1.0 is native pace.", "1.0 هي سرعة المتحدث الأصلي."], ["Goals — one per line", "الأهداف — هدف في كل سطر"], ["KPIs (range, accuracy, fluency) are inherited from the framework and editable per level.", "تُورث مؤشرات الأداء (النطاق والدقة والطلاقة) من الإطار ويمكن تعديلها لكل مستوى."], ["Add vocabulary entry", "إضافة مدخل مفردات"], ["Term or idiom", "المصطلح أو التعبير"], ["Meaning", "المعنى"], ["Translation (AR)", "الترجمة (AR)"], ["Generate reference audio at level speed", "إنشاء صوت مرجعي بسرعة المستوى"], ["Entries feed both flashcards and the lexis targets of conversational tasks.", "تُغذي المدخلات البطاقات التعليمية ومفردات مهام المحادثة."], ["Add conversational task", "إضافة مهمة محادثة"], ["Save task", "حفظ المهمة"], ["Task title", "عنوان المهمة"], ["Format", "الصيغة"], ["Monologue", "حديث فردي"], ["Student speaks alone against a prompt", "يتحدث الطالب منفردًا استجابةً لمحفز"], ["Role-play", "لعب أدوار"], ["AI takes a persona and responds", "يتقمص الذكاء الاصطناعي شخصية ويرد"], ["Picture prompt", "محفز صوري"], ["Describe an image", "صِف صورة"], ["Prompt given to the student", "المحفز المقدم للطالب"], ["Target duration (seconds)", "المدة المستهدفة (ثوانٍ)"], ["Minimum turns", "الحد الأدنى للأدوار"], ["Scored on", "يُقيَّم على"], ["Pronunciation", "النطق"], ["Send to the group teacher for feedback after each attempt", "الإرسال لمعلّم المجموعة لإبداء الملاحظات بعد كل محاولة"], ["New consumption tier", "فئة استهلاك جديدة"], ["A monthly hour ceiling you can assign to students.", "سقف ساعات شهري يمكنك تعيينه للطلاب."], ["Create tier", "إنشاء الفئة"], ["Tier name", "اسم الفئة"], ["Monthly hours", "الساعات الشهرية"], ["Marker colour", "لون العلامة"], ["Unused hours", "الساعات غير المستخدمة"], ["Make this the default tier for new students", "جعلها الفئة الافتراضية للطلاب الجدد"], ["Changing a tier's ceiling applies from the next billing month.", "يسري تغيير سقف الفئة من شهر الفوترة التالي."], ["Ready reports appear in History and can be emailed.", "تظهر التقارير الجاهزة في السجل ويمكن إرسالها بالبريد."], ["Report", "التقرير"], ["Levels, tasks and KPI trend", "المستويات والمهام واتجاه مؤشرات الأداء"], ["Cohort completion and scores", "إكمال الدفعة والدرجات"], ["Hours used against tier", "الساعات المستخدمة مقابل الفئة"], ["Date range", "الفترة الزمنية"], ["Email me when it is ready", "راسلني عندما يجهز"], ["Hours land in the workspace wallet immediately.", "تُضاف الساعات إلى محفظة مساحة العمل فورًا."], ["At the current usage of 15.3 hrs/day this lasts about 65 days.", "بمعدل الاستخدام الحالي 15.3 ساعة يوميًا تكفي نحو 65 يومًا."], ["Total", "الإجمالي"], ["Auto-recharge when the wallet drops below 100 hours", "الشحن التلقائي عند انخفاض المحفظة عن 100 ساعة"], ["An invoice is issued to Cairo Language Center LLC, VAT 100-234-556.", "تُصدر فاتورة باسم مركز القاهرة للغات ذ.م.م، الرقم الضريبي 100-234-556."], ["This cannot be undone.", "لا يمكن التراجع عن هذا الإجراء."], ["Students at this level", "الطلاب في هذا المستوى"], ["Content items", "عناصر المحتوى"], ["Move affected students to", "نقل الطلاب المتأثرين إلى"], ["Their completed tasks stay in history and in reports.", "تبقى مهامهم المكتملة في السجل والتقارير."], ["Type the level name to confirm in the real product.", "اكتب اسم المستوى للتأكيد في المنتج الفعلي."], ["Prototype only; nothing was saved.", "نموذج أولي فقط؛ لم يُحفظ شيء."], ["Do not roll over", "لا تُرحَّل"], ["Purple", "بنفسجي"], ["Idiom", "تعبير اصطلاحي"], ["One-off", "لمرة واحدة"], ["Edit student", "تعديل الطالب"]];
  const D = new Map(PAIRS);
  const MON = {
    Jan: "يناير",
    Feb: "فبراير",
    Mar: "مارس",
    Apr: "أبريل",
    May: "مايو",
    Jun: "يونيو",
    Jul: "يوليو",
    Aug: "أغسطس",
    Sep: "سبتمبر",
    Oct: "أكتوبر",
    Nov: "نوفمبر",
    Dec: "ديسمبر"
  };
  const DAY = {
    Sun: "الأحد",
    Mon: "الاثنين",
    Tue: "الثلاثاء",
    Wed: "الأربعاء",
    Thu: "الخميس",
    Fri: "الجمعة",
    Sat: "السبت"
  };
  const LVL = {
    Basic: "مستخدم أساسي",
    Independent: "مستخدم مستقل"
  };
  const TIER = {
    Light: "خفيف",
    Regular: "عادي",
    Heavy: "نشط",
    Intensive: "مكثّف"
  };
  const UNIT = {
    minute: "دقيقة",
    minutes: "دقيقة",
    min: "دقيقة",
    hour: "ساعة",
    hours: "ساعات",
    hr: "ساعة",
    day: "يوم",
    days: "أيام",
    week: "أسبوع",
    weeks: "أسابيع",
    month: "شهر",
    months: "أشهر"
  };
  const date = (m, d, y) => d + " " + MON[m] + (y ? " " + y : "");
  const R = [[/^(\d[\d,.]*) students?$/, m => m[1] + " طالب"], [/^(\d+) users?$/, m => m[1] === "2" ? "مستخدمان" : m[1] + " مستخدمين"], [/^(\d+) groups?$/, m => m[1] + " مجموعات"], [/^(\d+) rows$/, m => m[1] + " صف"], [/^(\d+) permissions$/, m => m[1] + " صلاحية"], [/^(\d+) levels$/, m => m[1] + " مستويات"], [/^(\d+) (words|vocab)$/, m => m[1] + (m[2] === "words" ? " كلمة" : " مفردات")], [/^([\d.]+) speed$/, m => "سرعة " + m[1]], [/^(\d+) tasks?$/, m => m[1] + " مهام"], [/^(\d+) scenarios?$/, m => m[1] + " سيناريو"], [/^([\d,.]+) hrs?$/, m => m[1] + " ساعة"], [/^([\d.]+) \/ ([\d.]+) hrs$/, m => m[1] + " / " + m[2] + " ساعة"], [/^over limit$/, () => "تجاوز الحد"], [/^(\d+)–(\d+) of ([\d,]+)$/, m => m[1] + "–" + m[2] + " من " + m[3]], [/^(\d+) of (\d+) (users|groups|requests)$/, m => m[1] + " من " + m[2] + " " + {
    users: "مستخدمين",
    groups: "مجموعات",
    requests: "طلبات"
  }[m[3]]], [/^(\d+) of (\d+) done$/, m => m[1] + " من " + m[2] + " مكتملة"], [/^Week (\d+) of (\d+)$/, m => "الأسبوع " + m[1] + " من " + m[2]], [/^Seats: (\d+) of (\d+) used$/, m => "المقاعد: " + m[1] + " من " + m[2] + " مستخدمة"], [/^capacity (\d+)$/i, m => "السعة " + m[1]], [/^(\d+) (minutes?|min|hours?|hr|days?|weeks?|months?) ago$/, m => "منذ " + m[1] + " " + UNIT[m[2]]], [/^(last active|updated) (.+)$/, (m, t) => (m[1] === "updated" ? "حُدّث " : "آخر نشاط ") + t(m[2])], [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2})(?:, (\d{4}))?$/, m => date(m[1], m[2], m[3])], [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2}), (\d\d:\d\d)$/, m => date(m[1], m[2]) + "، " + m[3]], [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})$/, m => MON[m[1]] + " " + m[2]], [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2}) – (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2})(?:, (\d{4}))?$/, m => date(m[1], m[2]) + " – " + date(m[3], m[4], m[5])], [/^Yesterday, (\d\d:\d\d)$/, m => "أمس، " + m[1]], [/^(Requested|generated|joined|enrolled|Last on|Unlocks|resets) (.+?)(?: by (.+))?$/, (m, t) => ({
    Requested: "طُلب في ",
    generated: "أُنشئ في ",
    joined: "انضم في ",
    enrolled: "سُجّل في ",
    "Last on": "آخر جلسة في ",
    Unlocks: "يُفتح في ",
    resets: "يُعاد الضبط في "
  })[m[1]] + t(m[2]) + (m[3] ? " بواسطة " + m[3] : "")], [/^((?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)(?: · (?:Sun|Mon|Tue|Wed|Thu|Fri|Sat))*)(, .+)?$/, m => m[1].split(" · ").map(d => DAY[d]).join(" · ") + (m[2] ? "، " + m[2].slice(2) : "")], [/^(Sun|Mon|Tue|Wed|Thu|Fri|Sat)$/, m => DAY[m[1]]], [/^Level ([A-C]\d): (Basic|Independent)( User)?$/, m => "المستوى " + m[1] + ": " + LVL[m[2]]], [/^Level ([A-C]\d)$/, m => "المستوى " + m[1]], [/^Level settings · (.+)$/, (m, t) => "إعدادات المستوى · " + t(m[1])], [/^(Light|Regular|Heavy|Intensive)(?: User)?$/, m => TIER[m[1]]], [/^(Light|Regular|Heavy|Intensive) · (\d+)( hrs(?:\/mo)?)?$/, m => TIER[m[1]] + " · " + m[2] + (m[3] ? m[3].includes("/mo") ? " ساعة/شهريًا" : " ساعة" : "")], [/^(Light|Regular|Heavy|Intensive) User · (\d+) hrs$/, m => TIER[m[1]] + " · " + m[2] + " ساعة"], [/^(Course|Level|Group|Tier): (.+)$/, (m, t) => ({
    Course: "الدورة",
    Level: "المستوى",
    Group: "المجموعة",
    Tier: "الفئة"
  })[m[1]] + ": " + ({
    All: "الكل"
  }[m[2]] || t(m[2]))], [/^([↑↓→]) (\d+%?) (this month|vs July|pts vs July|vs previous period)$/, m => m[1] + " " + m[2] + " " + {
    "this month": "هذا الشهر",
    "vs July": "مقارنةً بيوليو",
    "pts vs July": "نقاط مقارنةً بيوليو",
    "vs previous period": "مقارنةً بالفترة السابقة"
  }[m[3]]], [/^([+−-]\d+) (this month|vs last month|vs previous period)$/, m => m[1] + " " + {
    "this month": "هذا الشهر",
    "vs last month": "مقارنةً بالشهر الماضي",
    "vs previous period": "مقارنةً بالفترة السابقة"
  }[m[2]]], [/^Capacity (\d+)$/, m => "السعة " + m[1]], [/^Group median (\d+%)$/, m => "وسيط المجموعة " + m[1]], [/^([\d.]+) avg per student$/, m => m[1] + " في المتوسط لكل طالب"], [/^Oldest (\d+) days old$/, m => "أقدمها منذ " + m[1] + " أيام"], [/^VAT (.+)$/, m => "الرقم الضريبي " + m[1]], [/^Pay (.+)$/, m => "ادفع " + m[1]], [/^Total at (.+)$/, m => "الإجمالي بسعر " + m[1]], [/^Delete (Level \w+)\?$/, (m, t) => "حذف " + t(m[1]) + "؟"], [/^(.+) — done$/, (m, t) => t(m[1]) + " — تم"], [/^(\d+) (vocab|tasks) · (\d+) (tasks|scenarios)$/, (m, t) => t(m[1] + " " + m[2]) + " · " + t(m[3] + " " + m[4])]];
  function tr(s) {
    if (D.has(s)) return D.get(s);
    for (const [re, f] of R) {
      const m = s.match(re);
      if (m) return f(m, trOr);
    }
    if (s.includes(" · ")) {
      const parts = s.split(" · ");
      const out = parts.map(trOr);
      if (out.some((o, i) => o !== parts[i])) return out.join(" · ");
    }
    return null;
  }
  function trOr(s) {
    const r = tr(s);
    return r == null ? s : r;
  }
  let lang = "en",
    root = null,
    obs = null;
  const tracked = new Map(); // node -> { en, ar }
  function doText(n) {
    const v = n.nodeValue;
    if (!v || !v.trim()) return;
    const rec = tracked.get(n);
    if (rec && v === rec.ar) return;
    const core = v.trim();
    const ar = tr(core);
    if (ar == null) {
      tracked.delete(n);
      return;
    }
    const full = v.replace(core, ar);
    tracked.set(n, {
      en: v,
      ar: full
    });
    n.nodeValue = full;
  }
  function doEl(el) {
    if (el.hasAttribute && el.hasAttribute("placeholder")) {
      const cur = el.getAttribute("placeholder");
      const en = el.dataset.phEn;
      if (cur !== el.dataset.phAr) {
        const ar = tr(cur.trim());
        if (ar) {
          el.dataset.phEn = cur;
          el.dataset.phAr = ar;
          el.setAttribute("placeholder", ar);
        }
      } else if (!en) {}
    }
  }
  function walk(node) {
    if (node.nodeType === 3) {
      if (!skip(node.parentNode)) doText(node);
      return;
    }
    if (node.nodeType !== 1 || skip(node)) return;
    doEl(node);
    const w = document.createTreeWalker(node, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    let c;
    while (c = w.nextNode()) {
      if (c.nodeType === 3) {
        if (!skip(c.parentNode)) doText(c);
      } else doEl(c);
    }
  }
  function skip(el) {
    return !el || el.closest && el.closest("script,style,[data-no-translate],input,textarea");
  }
  function restore() {
    tracked.forEach((rec, n) => {
      if (n.nodeValue === rec.ar) n.nodeValue = rec.en;
    });
    tracked.clear();
    (root || document).querySelectorAll("[data-ph-en]").forEach(el => {
      if (el.getAttribute("placeholder") === el.dataset.phAr) el.setAttribute("placeholder", el.dataset.phEn);
      delete el.dataset.phEn;
      delete el.dataset.phAr;
    });
  }
  function setLang(l, r) {
    root = r || root || document.body;
    lang = l;
    if (obs) {
      obs.disconnect();
      obs = null;
    }
    if (l === "ar") {
      walk(root);
      obs = new MutationObserver(ms => ms.forEach(m => {
        if (m.type === "characterData") {
          if (!skip(m.target.parentNode)) doText(m.target);
        } else if (m.type === "attributes") doEl(m.target);else m.addedNodes.forEach(walk);
      }));
      obs.observe(root, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true,
        attributeFilter: ["placeholder"]
      });
    } else restore();
  }
  window.SG_I18N = {
    setLang,
    t: s => lang === "ar" ? trOr(s) : s,
    glossary: PAIRS
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-platform/i18n.js", error: String((e && e.message) || e) }); }

// ui_kits/web-platform/onboarding-video.jsx
try { (() => {
// Speaking Genie — 56s onboarding explainer. Built on animations-v3 (CompositionStage) with real Sg* design-system components.
(function () {
  const {
    useComposition,
    CompositionStage,
    Shot,
    Captions,
    Easing,
    animate,
    interpolate,
    clamp
  } = window;
  const SG = () => window.SpeakingGenieDesignSystem_9bb41a || {};
  const MOTION = {
    enter: (start, dur = 0.6) => animate({
      from: 0,
      to: 1,
      start,
      end: start + dur,
      ease: Easing.easeOutCubic
    }),
    draw: (start, dur = 1.2) => animate({
      from: 0,
      to: 1,
      start,
      end: start + dur,
      ease: Easing.easeInOutCubic
    }),
    pop: (start, dur = 0.5) => animate({
      from: 0,
      to: 1,
      start,
      end: start + dur,
      ease: Easing.easeOutBack
    })
  };
  const rise = (p, d = 24) => ({
    opacity: p,
    transform: `translateY(${(1 - p) * d}px)`
  });
  const ink = {
      color: "#0F1729"
    },
    muted = {
      color: "#64748B"
    };
  const font = "'Plus Jakarta Sans', system-ui, sans-serif";
  function Frame({
    children,
    zoom = 1,
    ox = 50,
    oy = 50
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        transform: `scale(${zoom})`,
        transformOrigin: `${ox}% ${oy}%`
      }
    }, children);
  }
  function Window({
    children,
    title,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        background: "#fff",
        border: "1px solid #E7E9EF",
        borderRadius: 22,
        boxShadow: "0 24px 64px -16px rgba(15,23,41,.25)",
        overflow: "hidden",
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 54,
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "0 24px",
        borderBottom: "1px solid #F1F3F7"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/logo-light.png",
      style: {
        height: 24
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        ...muted
      }
    }, title)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        padding: 32
      }
    }, children));
  }
  function Bubble({
    who,
    text,
    me,
    p,
    chars
  }) {
    const shown = chars == null ? text : text.slice(0, Math.floor(chars));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: me ? "flex-end" : "flex-start",
        gap: 8,
        ...rise(p)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        ...muted
      }
    }, who), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 820,
        padding: "20px 26px",
        borderRadius: 22,
        fontSize: 30,
        lineHeight: 1.45,
        background: me ? "#F5F3FF" : "#fff",
        border: `1px solid ${me ? "#D9C9F7" : "#E7E9EF"}`,
        ...ink
      }
    }, shown));
  }
  function Hook({
    T,
    C
  }) {
    const a = MOTION.pop(C.Hook + 0.2, 0.7)(T),
      b = MOTION.enter(C.Hook + 1.0)(T),
      c = MOTION.enter(C.Hook + 2.0)(T);
    const z = interpolate([C.Hook, C.Speak], [1, 1.06], Easing.linear)(T);
    return /*#__PURE__*/React.createElement(Shot, {
      from: C.Hook,
      to: C.Speak
    }, /*#__PURE__*/React.createElement(Frame, {
      zoom: z
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 36
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/logo-light.png",
      style: {
        height: 96,
        opacity: a,
        transform: `scale(${0.8 + 0.2 * a})`
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 76,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        textAlign: "center",
        ...ink,
        ...rise(b)
      }
    }, "Your students speak.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#6D28D9"
      }
    }, "Speaking Genie listens.")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 30,
        ...muted,
        ...rise(c)
      }
    }, "AI speaking practice with feedback teachers can act on."))));
  }
  function Speak({
    T,
    C
  }) {
    const S = C.Speak,
      z = interpolate([S, C.Feedback], [1, 1.07], Easing.linear)(T);
    const k = (C.Feedback - S) / 8,
      at = x => S + x * k;
    const w = MOTION.enter(S + 0.1)(T),
      g = MOTION.enter(S + 0.6)(T);
    // who is talking: AI 0.8–2.8, student 3.0–6.6, AI 6.8–7.8
    const aiTalk = T > at(0.8) && T < at(2.8) || T > at(6.8) && T < at(7.8),
      stTalk = T > at(3.0) && T < at(6.6);
    const topics = [["Greet the tourist", at(2.9)], ["Give the route step by step", at(5.0)], ["Name a landmark to look for", at(6.4)]];
    const bars = (on, seed) => Array.from({
      length: 40
    }).map((_, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        width: 7,
        height: on ? 10 + Math.abs(Math.sin(T * 8 + i * 0.6 + seed)) * 46 : 6,
        borderRadius: 4,
        background: on ? "#A78BFA" : "#E7E9EF"
      }
    }));
    const secs = Math.max(0, Math.floor(T - S - 0.8));
    return /*#__PURE__*/React.createElement(Shot, {
      from: S,
      to: C.Feedback
    }, /*#__PURE__*/React.createElement(Frame, {
      zoom: z,
      oy: 55
    }, /*#__PURE__*/React.createElement(Window, {
      title: "Give travel directions \xB7 Level A2 \xB7 Topic-based task",
      style: {
        left: 200,
        top: 150,
        width: 1520,
        height: 700,
        ...rise(w, 40)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.25fr 1fr",
        gap: 32
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 26,
        padding: "34px 0",
        border: "1px solid #E7E9EF",
        borderRadius: 22,
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 170,
        height: 170,
        borderRadius: 999,
        background: "#EDE9FE",
        color: "#5B21B6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 56,
        fontWeight: 700,
        boxShadow: aiTalk ? "0 0 0 14px rgba(109,40,217,.14), 0 0 0 28px rgba(109,40,217,.06)" : "none"
      }
    }, "LM"), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 30,
        fontWeight: 700,
        ...ink
      }
    }, "Layla \xB7 AI tourist"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        marginTop: 6,
        color: aiTalk ? "#6D28D9" : stTalk ? "#047857" : "#64748B",
        fontWeight: 600
      }
    }, aiTalk ? "Layla is speaking…" : stTalk ? "You're speaking…" : "Listening")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 5,
        height: 64
      }
    }, bars(aiTalk || stTalk, stTalk ? 2 : 0)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 76,
        height: 76,
        borderRadius: 999,
        background: stTalk ? "#6D28D9" : "#EDE9FE",
        color: stTalk ? "#fff" : "#5B21B6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 26
      }
    }, "\u25CF"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 28,
        fontVariantNumeric: "tabular-nums",
        ...muted
      }
    }, "00:", String(secs).padStart(2, "0"), " / 08:00"), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "12px 22px",
        borderRadius: 12,
        border: "1px solid #D9DDE5",
        fontSize: 22,
        fontWeight: 600,
        ...ink
      }
    }, "End call"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 20,
        ...rise(g)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid #D9C9F7",
        background: "#F5F3FF",
        borderRadius: 20,
        padding: "24px 26px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "#6D28D9"
      }
    }, "Task goal"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 27,
        lineHeight: 1.45,
        marginTop: 10,
        ...ink
      }
    }, "Help a tourist reach the Egyptian Museum with clear, step-by-step directions.")), /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid #E7E9EF",
        borderRadius: 20,
        padding: "22px 26px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        ...muted
      }
    }, "Discussion topics"), topics.map(([label, at]) => {
      const d = MOTION.pop(at, 0.4)(T);
      return /*#__PURE__*/React.createElement("div", {
        key: label,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginTop: 16,
          fontSize: 24,
          ...ink
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 36,
          height: 36,
          borderRadius: 999,
          flexShrink: 0,
          background: d > 0.5 ? "#047857" : "#EDEFF3",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          fontWeight: 700,
          transform: `scale(${0.85 + 0.15 * d})`
        }
      }, d > 0.5 ? "✓" : ""), label);
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid #E7E9EF",
        borderRadius: 20,
        padding: "20px 26px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        ...muted
      }
    }, "Try to use"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        marginTop: 12
      }
    }, ["go straight", "turn left", "next to", "on your right"].map(x => /*#__PURE__*/React.createElement("span", {
      key: x,
      style: {
        fontSize: 21,
        padding: "6px 14px",
        borderRadius: 10,
        background: "#F1F3F7",
        ...ink
      }
    }, x)))))))));
  }
  function Feedback({
    T,
    C
  }) {
    const F = C.Feedback,
      sg = SG();
    const k = (C.Teacher - F) / 9,
      at = x => F + x * k;
    const w = MOTION.enter(F)(T),
      sc = MOTION.draw(at(0.6), 1.4)(T),
      r1 = MOTION.enter(at(2.2))(T),
      fix = MOTION.draw(at(3.0), 0.8)(T),
      r2 = MOTION.enter(at(4.6))(T),
      r3 = MOTION.enter(at(6.0))(T);
    const z = interpolate([F, F + 3, C.Teacher], [1, 1.06, 1.09], Easing.easeInOutSine)(T);
    return /*#__PURE__*/React.createElement(Shot, {
      from: F,
      to: C.Teacher
    }, /*#__PURE__*/React.createElement(Frame, {
      zoom: z,
      ox: 50,
      oy: 45
    }, /*#__PURE__*/React.createElement(Window, {
      title: "Session summary \xB7 Mahmoud Youssef",
      style: {
        left: 300,
        top: 70,
        width: 1320,
        height: 800,
        ...rise(w, 40)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 88,
        fontWeight: 700,
        fontVariantNumeric: "tabular-nums",
        ...ink
      }
    }, Math.round(65 * sc), "%"), sg.SgBadge ? /*#__PURE__*/React.createElement(sg.SgBadge, {
      tone: "warning"
    }, "Needs practice") : null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        fontSize: 24,
        ...muted
      }
    }, "4 messages \xB7 01:37")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 12,
        borderRadius: 999,
        background: "#EDEFF3",
        margin: "14px 0 34px",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: `${65 * sc}%`,
        background: "#B45309"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid #E7E9EF",
        borderRadius: 18,
        padding: "24px 28px",
        ...rise(r1)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 28,
        fontWeight: 700,
        ...ink
      }
    }, "Grammar"), sg.SgBadge ? /*#__PURE__*/React.createElement(sg.SgBadge, {
      tone: "danger",
      caps: true
    }, "High priority") : null), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 26,
        marginTop: 16,
        ...ink
      }
    }, "\u201COnce you ", /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        color: "#B91C1C"
      }
    }, "had the ground", /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        top: "55%",
        height: 3,
        width: `${fix * 100}%`,
        background: "#B91C1C"
      }
    })), ", walk straight\u2026\u201D"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 26,
        marginTop: 10,
        color: "#047857",
        fontWeight: 600,
        opacity: fix
      }
    }, "\u2192 when you get to the ground floor")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 22,
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 18,
        padding: "22px 26px",
        background: "#ECFDF5",
        border: "1px solid #A7F3D0",
        ...rise(r2)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 24,
        fontWeight: 700,
        color: "#047857"
      }
    }, "\u2713 Strength"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        marginTop: 8,
        ...ink
      }
    }, "Used \u201Cwalk straight\u201D and \u201Cturn left\u201D correctly.")), /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 18,
        padding: "22px 26px",
        background: "#EFF6FF",
        border: "1px solid #BFDBFE",
        ...rise(r3)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 24,
        fontWeight: 700,
        color: "#1D4ED8"
      }
    }, "Practice tip"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        marginTop: 8,
        ...ink
      }
    }, "Say five routes starting with \u201CWhen you get to\u2026\u201D."))))));
  }
  function Teacher({
    T,
    C
  }) {
    const R = C.Teacher,
      w = MOTION.enter(R)(T);
    const rows = [["LA", "Laila Adel", 7, 58, 82], ["MY", "Mahmoud Youssef", 6, 49, 77], ["HE", "Hana Ezzat", 5, 46, 80], ["KS", "Karim Saleh", 6, 44, 66], ["NA", "Nadia Amin", 5, 38, 73]];
    const z = interpolate([R, C.Dashboard], [1.04, 1], Easing.linear)(T);
    const q = MOTION.enter(R + 4.2)(T);
    return /*#__PURE__*/React.createElement(Shot, {
      from: R,
      to: C.Dashboard
    }, /*#__PURE__*/React.createElement(Frame, {
      zoom: z
    }, /*#__PURE__*/React.createElement(Window, {
      title: "A2 Morning \xB7 Ranking \xB7 Aug 11\u201317",
      style: {
        left: 120,
        top: 120,
        width: 1060,
        height: 840,
        ...rise(w, 40)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "60px 1.6fr 1fr 1fr 110px",
        gap: 18,
        fontSize: 17,
        fontWeight: 700,
        letterSpacing: "0.07em",
        textTransform: "uppercase",
        paddingBottom: 14,
        borderBottom: "1px solid #E7E9EF",
        ...muted
      }
    }, /*#__PURE__*/React.createElement("span", null, "#"), /*#__PURE__*/React.createElement("span", null, "Student"), /*#__PURE__*/React.createElement("span", null, "Sessions"), /*#__PURE__*/React.createElement("span", null, "Practice"), /*#__PURE__*/React.createElement("span", null, "Score")), rows.map(([i, n, s, m, sc], k) => {
      const p = MOTION.enter(R + 0.6 + k * 0.35)(T),
        bar = MOTION.draw(R + 0.9 + k * 0.35, 1)(T);
      return /*#__PURE__*/React.createElement("div", {
        key: n,
        style: {
          display: "grid",
          gridTemplateColumns: "60px 1.6fr 1fr 1fr 110px",
          gap: 18,
          alignItems: "center",
          height: 100,
          borderBottom: "1px solid #F1F3F7",
          fontSize: 24,
          ...ink,
          ...rise(p, 16)
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 700
        }
      }, k + 1), /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 14
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 46,
          height: 46,
          borderRadius: 999,
          background: "#EDE9FE",
          color: "#5B21B6",
          fontSize: 17,
          fontWeight: 700,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center"
        }
      }, i), n), /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          height: 8,
          borderRadius: 9,
          background: "#EDEFF3"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: "block",
          height: "100%",
          width: `${s / 7 * 100 * bar}%`,
          background: "#047857",
          borderRadius: 9
        }
      })), s), /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          height: 8,
          borderRadius: 9,
          background: "#EDEFF3"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: "block",
          height: "100%",
          width: `${m / 58 * 100 * bar}%`,
          background: "#6D28D9",
          borderRadius: 9
        }
      })), m, "m"), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 700,
          color: sc >= 75 ? "#047857" : "#B45309"
        }
      }, sc));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 1220,
        top: 260,
        width: 580,
        background: "#fff",
        border: "1px solid #E7E9EF",
        borderRadius: 22,
        padding: 30,
        boxShadow: "0 16px 40px -12px rgba(16,24,40,.22)",
        ...rise(q, 40)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        ...muted
      }
    }, "What students said"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 26,
        fontWeight: 700,
        marginTop: 10,
        ...ink
      }
    }, "Past simple \xB7 14 of 24 students"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18,
        padding: "16px 20px",
        borderRadius: 16,
        background: "#F5F3FF",
        border: "1px solid #D9C9F7",
        fontSize: 22,
        lineHeight: 1.5,
        ...ink
      }
    }, "\u201COn Friday I ", /*#__PURE__*/React.createElement("s", {
      style: {
        color: "#B91C1C"
      }
    }, "buyed"), " new shoes.\u201D"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        marginTop: 10,
        color: "#047857",
        fontWeight: 600
      }
    }, "\u2192 bought"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        marginTop: 16,
        ...muted
      }
    }, "Teaching tip \xB7 run a \u201Cyesterday\u201D chain game."))));
  }
  function Dashboard({
    T,
    C
  }) {
    const D = C.Dashboard,
      w = MOTION.enter(D)(T);
    const kpis = [["Average overall score", 71, ""], ["Task completion", 68, "%"], ["Students improving", 62, "%"], ["Students at risk", 23, ""]];
    const z = interpolate([D, C.Setup], [1, 1.07], Easing.linear)(T);
    return /*#__PURE__*/React.createElement(Shot, {
      from: D,
      to: C.Setup
    }, /*#__PURE__*/React.createElement(Frame, {
      zoom: z,
      oy: 30
    }, /*#__PURE__*/React.createElement(Window, {
      title: "Dashboard \xB7 Performance \xB7 30 days",
      style: {
        left: 160,
        top: 90,
        width: 1600,
        height: 900,
        ...rise(w, 40)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 22
      }
    }, kpis.map(([l, v, u], k) => {
      const p = MOTION.enter(D + 0.3 + k * 0.2)(T),
        n = MOTION.draw(D + 0.5 + k * 0.2, 1.2)(T);
      return /*#__PURE__*/React.createElement("div", {
        key: l,
        style: {
          border: "1px solid #E7E9EF",
          borderRadius: 18,
          padding: "22px 26px",
          ...rise(p)
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 20,
          ...muted
        }
      }, l), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 56,
          fontWeight: 700,
          fontVariantNumeric: "tabular-nums",
          marginTop: 6,
          color: k === 3 ? "#B91C1C" : "#0F1729"
        }
      }, Math.round(v * n), u));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid #E7E9EF",
        borderRadius: 18,
        padding: "26px 30px",
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 26,
        fontWeight: 700,
        ...ink
      }
    }, "Score trend by skill"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-end",
        gap: 34,
        height: 380,
        marginTop: 20
      }
    }, [[60, 64, 58], [62, 64, 60], [63, 66, 61], [64, 67, 63], [66, 68, 64], [67, 70, 66], [68, 70, 67], [70, 72, 69]].map((v, k) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-end",
        gap: 5,
        height: 330,
        width: "100%",
        justifyContent: "center"
      }
    }, v.map((x, j) => /*#__PURE__*/React.createElement("div", {
      key: j,
      style: {
        width: "26%",
        height: `${x * MOTION.draw(D + 1.2 + k * 0.12, 0.9)(T)}%`,
        borderRadius: "6px 6px 0 0",
        background: ["#D9C9F7", "#A78BFA", "#6D28D9"][j]
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        ...muted
      }
    }, "W", k + 1))))))));
  }
  function Setup({
    T,
    C
  }) {
    const S = C.Setup;
    const steps = [["Pick a course template", "AI drafts 5 levels, 86 tasks and 420 words"], ["Create your first group", "A2 Morning · Nour Hassan · Sun · Tue · Thu"], ["Share the invite link", "cairolc.speakingenie.com/join/a2m"]];
    const t0 = MOTION.enter(S + 0.1)(T);
    return /*#__PURE__*/React.createElement(Shot, {
      from: S,
      to: C.Close
    }, /*#__PURE__*/React.createElement(Frame, {
      zoom: interpolate([S, C.Close], [1, 1.05], Easing.linear)(T)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 150,
        textAlign: "center",
        fontSize: 64,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        ...ink,
        ...rise(t0)
      }
    }, "Set up your centre in 5 minutes"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 460,
        width: 1000,
        top: 330,
        display: "flex",
        flexDirection: "column",
        gap: 24
      }
    }, steps.map(([a, b], k) => {
      const p = MOTION.enter(S + 0.6 + k * 1.3)(T),
        ck = MOTION.pop(S + 1.3 + k * 1.3)(T);
      return /*#__PURE__*/React.createElement("div", {
        key: a,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 26,
          background: "#fff",
          border: "1px solid #E7E9EF",
          borderRadius: 22,
          padding: "28px 34px",
          ...rise(p, 30)
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 64,
          height: 64,
          borderRadius: 999,
          background: ck > 0.5 ? "#047857" : "#EDE9FE",
          color: ck > 0.5 ? "#fff" : "#5B21B6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 30,
          fontWeight: 700,
          transform: `scale(${0.85 + 0.15 * ck})`
        }
      }, ck > 0.5 ? "✓" : k + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 34,
          fontWeight: 700,
          ...ink
        }
      }, a), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 24,
          marginTop: 4,
          ...muted
        }
      }, b)));
    }))));
  }
  function Close({
    T,
    C,
    end
  }) {
    const K = C.Close,
      a = MOTION.pop(K + 0.1, 0.7)(T),
      b = MOTION.enter(K + 0.7)(T);
    const out = 1 - MOTION.enter(end - 0.5, 0.5)(T);
    return /*#__PURE__*/React.createElement(Shot, {
      from: K,
      to: end + 1
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 34,
        opacity: out
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/logo-light.png",
      style: {
        height: 90,
        opacity: a,
        transform: `scale(${0.85 + 0.15 * a})`
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 56,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        ...ink,
        ...rise(b)
      }
    }, "Start with a 60-second speaking test."), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "22px 44px",
        borderRadius: 16,
        background: "#6D28D9",
        color: "#fff",
        fontSize: 30,
        fontWeight: 700,
        ...rise(b)
      }
    }, "Try it now")));
  }

  // Egyptian voice-over: one file, 14 lines. Each line's audio segment [start, end] (s) is played when its caption starts.
  const VO_SEGS = [[0.10, 3.06], [3.48, 7.60], [8.06, 11.22], [11.60, 14.72], [15.04, 17.72], [18.16, 20.92], [21.22, 24.82], [25.18, 28.40], [28.84, 32.90], [33.18, 36.66], [37.04, 40.64], [41.12, 43.02], [43.46, 46.36], [46.86, 49.64]];
  function VoiceOver({
    T,
    C,
    playing,
    on
  }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const a = ref.current;
      if (!a) return;
      let target = -1;
      LINES.forEach((l, i) => {
        const at = C[l[0]] + l[1],
          d = VO_SEGS[i][1] - VO_SEGS[i][0];
        if (T >= at && T < at + d) target = VO_SEGS[i][0] + (T - at);
      });
      if (on && playing && target >= 0) {
        if (Math.abs(a.currentTime - target) > 0.25) a.currentTime = target;
        if (a.paused) a.play().catch(() => {});
      } else if (!a.paused) a.pause();
    });
    return /*#__PURE__*/React.createElement("audio", {
      ref: ref,
      src: "assets/vo-eg.mp3",
      preload: "auto"
    });
  }
  function Piece({
    lang,
    vo
  }) {
    const {
      T,
      CUES: C,
      authoredTotal,
      playing
    } = useComposition();
    return /*#__PURE__*/React.createElement("div", {
      "data-screen-label": "Video " + Math.floor(T) + "s",
      style: {
        position: "absolute",
        inset: 0,
        background: "#F7F8FB",
        fontFamily: font,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(Hook, {
      T: T,
      C: C
    }), /*#__PURE__*/React.createElement(Speak, {
      T: T,
      C: C
    }), /*#__PURE__*/React.createElement(Feedback, {
      T: T,
      C: C
    }), /*#__PURE__*/React.createElement(Teacher, {
      T: T,
      C: C
    }), /*#__PURE__*/React.createElement(Dashboard, {
      T: T,
      C: C
    }), /*#__PURE__*/React.createElement(Setup, {
      T: T,
      C: C
    }), /*#__PURE__*/React.createElement(Close, {
      T: T,
      C: C,
      end: authoredTotal
    }), /*#__PURE__*/React.createElement(VoiceOver, {
      T: T,
      C: C,
      playing: playing,
      on: vo
    }), lang !== "off" ? /*#__PURE__*/React.createElement(Captions, {
      style: {
        left: "50%",
        right: "auto",
        transform: "translateX(-50%)",
        bottom: 40,
        width: "max-content",
        maxWidth: "80%",
        font: lang === "ar" || lang === "eg" ? "600 32px 'IBM Plex Sans Arabic', system-ui, sans-serif" : "600 30px 'Plus Jakarta Sans', system-ui, sans-serif",
        direction: lang === "ar" || lang === "eg" ? "rtl" : "ltr",
        lineHeight: 1.5,
        color: "#fff",
        textShadow: "none",
        background: "rgba(15,23,41,.86)",
        borderRadius: 14,
        padding: "14px 28px"
      },
      items: window.SG_VIDEO_SCRIPT(C)[lang] || []
    }) : null);
  }
  function OnboardingVideo() {
    const [t, setTweak] = window.useTweaks(window.SG_VIDEO_TWEAKS || {
      motionEditor: true
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CompositionStage, {
      width: 1920,
      height: 1080,
      scenes: window.OM_SCENES,
      playback: window.OM_PLAYBACK,
      bg: "#F7F8FB"
    }, /*#__PURE__*/React.createElement(Piece, {
      lang: new URLSearchParams(location.search).get("cc") || t.captions || "eg",
      vo: t.voiceOver !== false
    })), /*#__PURE__*/React.createElement(window.TweaksPanel, null, /*#__PURE__*/React.createElement(window.TweakSection, {
      label: "Video"
    }), /*#__PURE__*/React.createElement(window.TweakToggle, {
      label: "Motion editor",
      value: t.motionEditor,
      onChange: v => setTweak("motionEditor", v)
    }), /*#__PURE__*/React.createElement(window.TweakToggle, {
      label: "Voice-over (Egyptian)",
      value: t.voiceOver !== false,
      onChange: v => setTweak("voiceOver", v)
    }), /*#__PURE__*/React.createElement(window.TweakRadio, {
      label: "Captions",
      value: t.captions || "eg",
      options: ["eg", "en", "ar", "off"],
      onChange: v => setTweak("captions", v)
    })));
  }
  // Voice-over script = captions. One line per beat; "at" is seconds from the section start.
  const LINES = [["Hook", 0.6, "Your students speak. Speaking Genie listens.", "طلابك يتحدثون، وSpeaking Genie يستمع.", "طلابك بيتكلموا، وSpeaking Genie بيسمعهم."], ["Hook", 4.0, "AI speaking practice, with feedback your teachers can act on.", "تدريب على التحدث بالذكاء الاصطناعي، مع ملاحظات يستفيد منها معلّموك.", "AI speaking practice، مع feedback المدرسين يقدروا يشتغلوا عليه."], ["Speak", 0.4, "Each student gets a real-life task and a clear goal.", "يحصل كل طالب على مهمة من الحياة الواقعية وهدف واضح.", "كل طالب بياخد real-life task وgoal واضح."], ["Speak", 3.9, "Then they just talk, with an AI character, out loud.", "ثم يتحدث بصوت عالٍ مع شخصية ذكاء اصطناعي.", "وبعدها يتكلم بصوت عالي مع AI character."], ["Speak", 7.4, "Topics tick off as they cover them.", "تُحدَّد المواضيع تلقائيًا كلما تناولها.", "والـtopics بتتعلّم عليها أول ما يتكلم فيها."], ["Feedback", 0.4, "When the call ends, the feedback is ready.", "عند انتهاء المكالمة تكون الملاحظات جاهزة.", "أول ما الـcall تخلص، الـfeedback بيكون جاهز."], ["Feedback", 3.5, "A score, the exact words that need fixing, and how to say them.", "درجة، والكلمات التي تحتاج إلى تصحيح، وطريقة قولها الصحيحة.", "Score، والكلمات اللي محتاجة تتصلح، وإزاي تتقال صح."], ["Feedback", 7.5, "Plus one strength and one tip to practise next.", "بالإضافة إلى نقطة قوة ونصيحة للتدريب التالي.", "وكمان نقطة قوة وtip يتمرّن عليه المرة الجاية."], ["Teacher", 0.4, "Teachers see every student ranked by sessions and practice time.", "يرى المعلّمون جميع الطلاب مرتبين حسب الجلسات ووقت الممارسة.", "المدرسين بيشوفوا كل الطلاب مترتبين بالـsessions ووقت الـpractice."], ["Teacher", 4.8, "And real examples of what the class got wrong, ready for the next lesson.", "وأمثلة حقيقية على أخطاء الصف، جاهزة للدرس التالي.", "وأمثلة حقيقية على غلطات الفصل، جاهزة للحصة الجاية."], ["Dashboard", 0.4, "Admins track performance across every group, at a glance.", "ويتابع المشرفون أداء كل المجموعات بنظرة واحدة.", "والـadmins بيتابعوا الـperformance بتاع كل الـgroups في نظرة واحدة."], ["Setup", 0.4, "Setting up takes about five minutes.", "الإعداد يستغرق نحو خمس دقائق.", "الـsetup بياخد حوالي خمس دقايق."], ["Setup", 2.7, "Pick a template, create a group, share one link.", "اختر قالبًا، وأنشئ مجموعة، وشارك رابطًا واحدًا.", "اختار template، اعمل group، وابعت link واحد."], ["Close", 0.3, "Start with a 60-second speaking test.", "ابدأ باختبار تحدث مدته 60 ثانية.", "ابدأ بـspeaking test مدته 60 ثانية."]];
  window.SG_VIDEO_LINES = LINES;
  window.SG_VIDEO_SCRIPT = C => {
    const mk = col => LINES.map((l, i) => {
      const next = LINES[i + 1];
      const at = C[l[0]] + l[1];
      const d = VO_SEGS[i][1] - VO_SEGS[i][0];
      return {
        at,
        until: next ? Math.min(C[next[0]] + next[1], at + d + 0.3) : at + d + 0.4,
        text: l[col]
      };
    });
    return {
      en: mk(2),
      ar: mk(3),
      eg: mk(4)
    };
  };
  window.OnboardingVideo = OnboardingVideo;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-platform/onboarding-video.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-platform/sg-helpers.js
try { (() => {
/* Shared table-cell renderers for the Speaking Genie prototype. Called lazily from SgTable column render fns. */
(function () {
  const h = (...a) => window.React.createElement(...a);
  const SG = () => window.SpeakingGenieDesignSystem_9bb41a;
  const ell = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  };
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
    const st = document.createElement("style");
    st.textContent = css;
    document.head.appendChild(st);
    const tag = () => document.querySelectorAll("div").forEach(el => {
      const hd = el.firstElementChild;
      if (!hd || el.hasAttribute("data-sgt-done")) return;
      if (hd.style && hd.style.display === "grid" && hd.style.textTransform === "uppercase" && el.style.overflow === "hidden") {
        el.setAttribute("data-sgt", "");
        const cols = (hd.style.gridTemplateColumns || "").split(" ").length;
        if (cols >= 5) el.setAttribute("data-sgt-wide", "");
      }
      if (el.hasAttribute("data-sgt")) {
        [...el.children].forEach((c, i) => {
          if (i === 0) return;
          if (c.style.display === "grid") c.setAttribute("data-sgt-row", "");else c.setAttribute("data-sgt-foot", "");
        });
        const r = el.querySelector("[data-sgt-row]");
        if (r && parseInt(r.style.minHeight) <= 52) el.setAttribute("data-sgt-dense", "");
      }
    });
    let q = 0;
    new MutationObserver(() => {
      if (!q) q = setTimeout(() => {
        q = 0;
        tag();
      }, 30);
    }).observe(document.documentElement, {
      childList: true,
      subtree: true
    });
    document.addEventListener("DOMContentLoaded", tag);
    tag();
  }
  window.SGH = {
    person: (i, n, e) => h("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        minWidth: 0
      }
    }, h(SG().SgAvatar, {
      initials: i,
      size: 30
    }), h("div", {
      style: {
        minWidth: 0
      }
    }, h("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: "var(--sg-ink)",
        ...ell
      }
    }, n), e ? h("div", {
      style: {
        fontSize: 12,
        color: "var(--sg-ink-muted)",
        ...ell
      }
    }, e) : null)),
    two: (a, b) => h("div", {
      style: {
        minWidth: 0
      }
    }, h("div", {
      style: {
        fontSize: 13,
        color: "var(--sg-ink)",
        ...ell
      }
    }, a), b ? h("div", {
      style: {
        fontSize: 12,
        color: "var(--sg-ink-muted)",
        marginTop: 2,
        ...ell
      }
    }, b) : null),
    strong: (a, b) => h("div", {
      style: {
        minWidth: 0
      }
    }, h("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: "var(--sg-ink)",
        ...ell
      }
    }, a), b ? h("div", {
      style: {
        fontSize: 12,
        color: "var(--sg-ink-muted)",
        marginTop: 2,
        ...ell
      }
    }, b) : null),
    badge: (tone, t, dot) => h(SG().SgBadge, {
      tone,
      dot: dot !== false,
      style: {
        whiteSpace: "nowrap"
      }
    }, t),
    tag: (t, v) => h(SG().SgTag, {
      variant: v || "meta"
    }, t),
    tags: (arr, v) => h("div", {
      style: {
        display: "flex",
        gap: 6,
        flexWrap: "wrap"
      }
    }, arr.map(t => h(SG().SgTag, {
      key: t,
      variant: v || "meta"
    }, t))),
    num: (v, c) => h("span", {
      style: {
        fontVariantNumeric: "tabular-nums",
        fontSize: 13,
        fontWeight: 600,
        color: c || "var(--sg-ink)"
      }
    }, v),
    muted: t => h("span", {
      style: {
        fontSize: 13,
        color: "var(--sg-ink-muted)",
        fontVariantNumeric: "tabular-nums"
      }
    }, t),
    mono: t => h("span", {
      style: {
        fontFamily: "var(--sg-mono)",
        fontSize: 12,
        color: "var(--sg-ink-2)"
      }
    }, t),
    meter: (v, label, tone) => h("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, h(SG().SgProgress, {
      value: Math.min(v, 100),
      height: 5,
      width: 84,
      tone: tone || (v >= 100 ? "danger" : v >= 80 ? "warning" : "brand")
    }), h("span", {
      style: {
        fontSize: 12,
        color: "var(--sg-ink-2)",
        fontVariantNumeric: "tabular-nums",
        whiteSpace: "nowrap"
      }
    }, label)),
    score: s => h("span", {
      style: {
        fontVariantNumeric: "tabular-nums",
        fontSize: 14,
        fontWeight: 700,
        color: s >= 75 ? "var(--sg-success)" : s >= 62 ? "var(--sg-warning)" : "var(--sg-danger)"
      }
    }, s),
    more: onClick => h(SG().SgButton, {
      variant: "tertiary",
      size: "sm",
      iconOnly: true,
      onClick: e => {
        e.stopPropagation();
        onClick && onClick();
      }
    }, "⋯"),
    btn: (label, onClick, variant) => h(SG().SgButton, {
      variant: variant || "secondary",
      size: "sm",
      onClick: e => {
        e.stopPropagation();
        onClick && onClick();
      }
    }, label),
    btns: list => h("div", {
      style: {
        display: "flex",
        gap: 6,
        justifyContent: "flex-end"
      }
    }, list.map(([l, f, v], i) => h(SG().SgButton, {
      key: i,
      variant: v || "tertiary",
      size: "sm",
      onClick: e => {
        e.stopPropagation();
        f && f();
      }
    }, l))),
    sw: on => h(SG().SgSwitch, {
      on
    }),
    dot: (color, t) => h("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontSize: 13,
        color: "var(--sg-ink-2)",
        whiteSpace: "nowrap"
      }
    }, h("i", {
      style: {
        width: 6,
        height: 6,
        borderRadius: 999,
        background: color,
        display: "inline-block"
      }
    }), t),
    empty: (title, desc, label, onClick) => h(SG().SgEmptyState, {
      title,
      description: desc,
      action: label ? h(SG().SgButton, {
        size: "md",
        onClick
      }, label) : null,
      style: {
        margin: 20
      }
    })
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-platform/sg-helpers.js", error: String((e && e.message) || e) }); }

// ui_kits/web-platform/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  // data-om-starter: inert presence marker — Claude Design's starter-usage
  // probe reads it. The closed panel renders nothing, so the marker rides
  // the <html> element as an attribute instead of a rendered node — zero
  // elements added, so page CSS (even structural selectors like
  // :nth-child) can never observe it. It records that the page WIRES a
  // tweaks panel, whether or not the panel is open. Keep this effect.
  React.useEffect(() => {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return () => document.documentElement.removeAttribute('data-om-starter');
  }, []);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-platform/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.SgButton = __ds_scope.SgButton;

__ds_ns.SgAvatar = __ds_scope.SgAvatar;

__ds_ns.SgBarChart = __ds_scope.SgBarChart;

__ds_ns.SgCard = __ds_scope.SgCard;

__ds_ns.SgKpiBar = __ds_scope.SgKpiBar;

__ds_ns.SgListRow = __ds_scope.SgListRow;

__ds_ns.SgMetricCard = __ds_scope.SgMetricCard;

__ds_ns.SgStat = __ds_scope.SgStat;

__ds_ns.SgTable = __ds_scope.SgTable;

__ds_ns.SgPermissionGroup = __ds_scope.SgPermissionGroup;

__ds_ns.SgAlert = __ds_scope.SgAlert;

__ds_ns.SgBadge = __ds_scope.SgBadge;

__ds_ns.SgEmptyState = __ds_scope.SgEmptyState;

__ds_ns.SgProgress = __ds_scope.SgProgress;

__ds_ns.SgSkeleton = __ds_scope.SgSkeleton;

__ds_ns.SgTag = __ds_scope.SgTag;

__ds_ns.SgToast = __ds_scope.SgToast;

__ds_ns.SgCheckbox = __ds_scope.SgCheckbox;

__ds_ns.SgChipGroup = __ds_scope.SgChipGroup;

__ds_ns.SgField = __ds_scope.SgField;

__ds_ns.SgInput = __ds_scope.SgInput;

__ds_ns.SgRadioGroup = __ds_scope.SgRadioGroup;

__ds_ns.SgSelect = __ds_scope.SgSelect;

__ds_ns.SgSwitch = __ds_scope.SgSwitch;

__ds_ns.SgTextarea = __ds_scope.SgTextarea;

__ds_ns.SgBackLink = __ds_scope.SgBackLink;

__ds_ns.SgBreadcrumbs = __ds_scope.SgBreadcrumbs;

__ds_ns.SgPagination = __ds_scope.SgPagination;

__ds_ns.SgSideList = __ds_scope.SgSideList;

__ds_ns.SgSidebar = __ds_scope.SgSidebar;

__ds_ns.SgTabs = __ds_scope.SgTabs;

__ds_ns.SgTopbar = __ds_scope.SgTopbar;

__ds_ns.SgModal = __ds_scope.SgModal;

})();
