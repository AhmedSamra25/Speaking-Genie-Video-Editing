/* @ds-bundle: {"format":4,"namespace":"SpeakingGenieDesignSystem_ac4dbc","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Pill","sourcePath":"components/feedback/Pill.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"FilterChip","sourcePath":"components/forms/FilterChip.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"SegmentedTabs","sourcePath":"components/forms/SegmentedTabs.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"AchievementBadge","sourcePath":"components/identity/AchievementBadge.jsx"},{"name":"Avatar","sourcePath":"components/identity/Avatar.jsx"},{"name":"BarChart","sourcePath":"components/motion/BarChart.jsx"},{"name":"Celebration","sourcePath":"components/motion/Celebration.jsx"},{"name":"ConnectingState","sourcePath":"components/motion/ConnectingState.jsx"},{"name":"CountUp","sourcePath":"components/motion/CountUp.jsx"},{"name":"FlipCard","sourcePath":"components/motion/FlipCard.jsx"},{"name":"GeneratingState","sourcePath":"components/motion/GeneratingState.jsx"},{"name":"Reveal","sourcePath":"components/motion/Reveal.jsx"},{"name":"ScoreRing","sourcePath":"components/motion/ScoreRing.jsx"},{"name":"TimeBudgetRing","sourcePath":"components/motion/TimeBudgetRing.jsx"},{"name":"ViewTransition","sourcePath":"components/motion/ViewTransition.jsx"},{"name":"Waveform","sourcePath":"components/motion/Waveform.jsx"},{"name":"BottomNav","sourcePath":"components/patterns/BottomNav.jsx"},{"name":"GenieOrb","sourcePath":"components/patterns/GenieOrb.jsx"},{"name":"HeroCard","sourcePath":"components/patterns/HeroCard.jsx"},{"name":"ListRow","sourcePath":"components/patterns/ListRow.jsx"},{"name":"PhoneFrame","sourcePath":"components/patterns/PhoneFrame.jsx"},{"name":"StatTile","sourcePath":"components/patterns/StatTile.jsx"}],"sourceHashes":{"components/core/Button.jsx":"ae813608780b","components/core/Card.jsx":"7612c21f34be","components/core/Icon.jsx":"41a401e96819","components/core/IconButton.jsx":"b57a5da97a90","components/feedback/Alert.jsx":"d27fa3bb4e2c","components/feedback/Modal.jsx":"a44e83a5a0a1","components/feedback/Pill.jsx":"3b2200896c12","components/feedback/ProgressBar.jsx":"f313f7586287","components/forms/FilterChip.jsx":"3f4560f80439","components/forms/Input.jsx":"62407394e98c","components/forms/SearchInput.jsx":"85df98f9c95d","components/forms/SegmentedTabs.jsx":"2f23d00d15e6","components/forms/Switch.jsx":"62f9599918aa","components/identity/AchievementBadge.jsx":"95773e916b20","components/identity/Avatar.jsx":"d415e10ed016","components/motion/BarChart.jsx":"38558100a752","components/motion/Celebration.jsx":"3a54e0f13aa0","components/motion/ConnectingState.jsx":"f90cf342adc8","components/motion/CountUp.jsx":"8a19528032b0","components/motion/FlipCard.jsx":"66c5e9fdb0b9","components/motion/GeneratingState.jsx":"a441c889f15a","components/motion/Reveal.jsx":"6f2c9fce19dd","components/motion/ScoreRing.jsx":"48d50f2b8149","components/motion/TimeBudgetRing.jsx":"b79ce9cefb5c","components/motion/ViewTransition.jsx":"501c5bb4bcf6","components/motion/Waveform.jsx":"559ae5d189ca","components/patterns/BottomNav.jsx":"d7a6aa6e8cdc","components/patterns/GenieOrb.jsx":"578227af7d0a","components/patterns/HeroCard.jsx":"f8c4949f9368","components/patterns/ListRow.jsx":"4f95267b3963","components/patterns/PhoneFrame.jsx":"7b31bcc0204a","components/patterns/StatTile.jsx":"cef1d5272d21","ui_kits/mobile_app/AiCallScreen.jsx":"b9d850e1667b","ui_kits/mobile_app/AiPartnersScreen.jsx":"80fdf51210b9","ui_kits/mobile_app/App.jsx":"ad36bfa86c12","ui_kits/mobile_app/AppHeader.jsx":"445a18e427a7","ui_kits/mobile_app/ConnectScreen.jsx":"0b7058552cc7","ui_kits/mobile_app/HomeScreen.jsx":"5a1721adacb9","ui_kits/mobile_app/PracticeScreen.jsx":"c6b1d04b699c","ui_kits/mobile_app/ProfileScreen.jsx":"4cc1c805f733","ui_kits/mobile_app/ReportsScreen.jsx":"2bb1f086f58a","ui_kits/mobile_app/TasksScreen.jsx":"4a6138e9501f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SpeakingGenieDesignSystem_ac4dbc = window.SpeakingGenieDesignSystem_ac4dbc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
const PADS = {
  none: 0,
  sm: '14px',
  md: '18px',
  lg: '22px'
};
const TONES = {
  default: {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-subtle)'
  },
  sunken: {
    background: 'var(--surface-sunken)',
    border: '1px solid var(--border-subtle)'
  },
  tint: {
    background: 'var(--gradient-tint)',
    border: '1px solid var(--border-brand)'
  },
  warn: {
    background: 'var(--gradient-tint-warn)',
    border: '1px solid var(--danger-200)'
  },
  brand: {
    background: 'var(--gradient-brand)',
    border: 0,
    color: 'var(--white)'
  },
  outline: {
    background: 'var(--surface-card)',
    border: '2px solid var(--border-subtle)'
  }
};
const SH = {
  none: 'none',
  hairline: 'var(--shadow-hairline)',
  card: 'var(--shadow-card)',
  lift: 'var(--shadow-lift)'
};

/** The app's surface container: white, 1px subtle border, 16px radius, soft shadow. */
function Card({
  children,
  tone = 'default',
  padding = 'md',
  radius = 'var(--radius-3xl)',
  elevation = 'card',
  interactive = false,
  onClick,
  style = {}
}) {
  const t = TONES[tone] || TONES.default;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: Object.assign({
      background: t.background,
      border: t.border,
      color: t.color,
      borderRadius: radius,
      padding: PADS[padding] != null ? PADS[padding] : padding,
      boxShadow: interactive && hover ? SH.lift : SH[elevation],
      borderColor: interactive && hover && tone === 'outline' ? 'var(--border-strong)' : undefined,
      cursor: interactive ? 'pointer' : undefined,
      transition: 'box-shadow var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)'
    }, style)
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const LUCIDE_URL = 'https://unpkg.com/lucide@0.474.0/dist/umd/lucide.js';
function ensureLucide() {
  if (typeof window === 'undefined') return;
  if (window.lucide || document.querySelector('script[data-sg-lucide]')) return;
  const s = document.createElement('script');
  s.src = LUCIDE_URL;
  s.async = true;
  s.setAttribute('data-sg-lucide', '');
  document.head.appendChild(s);
}

/** Lucide glyph, sized in px. The whole product uses Lucide at stroke-width 2. */
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    ensureLucide();
    let tries = 0,
      timer = null;
    const paint = () => {
      const el = ref.current;
      if (!el) return;
      const L = window.lucide;
      if (!L || !L.createIcons) {
        if (tries++ < 60) timer = setTimeout(paint, 50);
        return;
      }
      el.innerHTML = '<i data-lucide="' + name + '"></i>';
      try {
        L.createIcons({
          root: el,
          attrs: {
            width: size,
            height: size,
            'stroke-width': strokeWidth
          }
        });
      } catch (e) {/* unknown glyph name: leave the box empty rather than break layout */}
    };
    paint();
    return () => timer && clearTimeout(timer);
  }, [name, size, strokeWidth]);
  return React.createElement('span', {
    ref,
    'aria-hidden': 'true',
    style: Object.assign({
      display: 'inline-flex',
      width: size,
      height: size,
      flexShrink: 0,
      color
    }, style)
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const PAD = {
  sm: '9px 14px',
  md: '10px 16px',
  lg: '12px 16px',
  cta: '16px 20px'
};
const FS = {
  sm: '13px',
  md: '14px',
  lg: '14px',
  cta: '15px'
};
const TONE = {
  primary: {
    background: 'var(--action-primary)',
    color: 'var(--white)',
    border: 0,
    hover: 'var(--action-primary-hover)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--action-primary)',
    border: '1px solid currentColor',
    hover: '#f9fafb'
  },
  secondary: {
    background: 'var(--action-secondary)',
    color: 'var(--text-heading)',
    border: 0,
    hover: 'var(--action-secondary-hover)'
  },
  white: {
    background: 'var(--white)',
    color: 'var(--action-primary)',
    border: 0,
    hover: 'var(--primary-50)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body-color)',
    border: 0,
    hover: 'var(--secondary-100)'
  }
};

/** The app's text button. Three documented variants plus the full-width CTA size. */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  trailingIcon,
  fullWidth = false,
  elevated = false,
  disabled = false,
  onClick,
  type = 'button',
  style = {}
}) {
  const t = TONE[variant] || TONE.primary;
  const [hover, setHover] = React.useState(false);
  const isCta = size === 'cta';
  const s = Object.assign({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-sans)',
    fontSize: FS[size],
    fontWeight: isCta ? 700 : 500,
    padding: PAD[size],
    borderRadius: isCta ? 'var(--radius-3xl)' : 'var(--radius-md)',
    minHeight: isCta ? '52px' : undefined,
    background: hover && !disabled ? t.hover : t.background,
    color: t.color,
    border: t.border,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    width: fullWidth || isCta ? '100%' : undefined,
    boxShadow: elevated || isCta ? variant === 'primary' ? isCta ? 'var(--shadow-cta)' : 'var(--shadow-button-primary)' : 'var(--shadow-hairline)' : 'none',
    transition: 'background var(--duration-fast) var(--ease-standard)',
    whiteSpace: 'nowrap'
  }, style);
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: isCta ? 18 : 16
  }) : null, children, trailingIcon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: trailingIcon,
    size: isCta ? 18 : 16
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const IB = {
  tint: {
    background: 'var(--primary-100)',
    color: 'var(--primary-600)',
    border: 0,
    hover: 'var(--primary-200)',
    radius: 'var(--radius-full)'
  },
  outline: {
    background: 'var(--white)',
    color: 'var(--text-body-color)',
    border: '1px solid var(--border-default)',
    hover: 'var(--secondary-50)',
    radius: 'var(--radius-xl)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body-color)',
    border: 0,
    hover: 'var(--secondary-100)',
    radius: 'var(--radius-full)'
  },
  glass: {
    background: 'rgba(255,255,255,0.12)',
    color: 'var(--white)',
    border: 0,
    hover: 'rgba(255,255,255,0.22)',
    radius: 'var(--radius-full)'
  },
  danger: {
    background: 'var(--danger-500)',
    color: 'var(--white)',
    border: 0,
    hover: 'var(--danger-600)',
    radius: 'var(--radius-full)'
  },
  brand: {
    background: 'var(--action-primary)',
    color: 'var(--white)',
    border: 0,
    hover: 'var(--action-primary-hover)',
    radius: 'var(--radius-full)'
  }
};

/** Square-ish icon-only control: audio playback, header actions, call controls, back. */
function IconButton({
  icon,
  tone = 'tint',
  size = 40,
  iconSize,
  label,
  onClick,
  badge,
  style = {}
}) {
  const t = IB[tone] || IB.tint;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: Object.assign({
      position: 'relative',
      width: size,
      height: size,
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: t.radius,
      background: hover ? t.hover : t.background,
      color: t.color,
      border: t.border,
      cursor: 'pointer',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }, style)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize || Math.round(size * 0.5)
  }), badge != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -2,
      right: -2,
      minWidth: '16px',
      height: '16px',
      padding: '0 4px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--danger-500)',
      color: 'var(--white)',
      fontFamily: 'var(--font-sans)',
      fontSize: '9px',
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, badge) : null);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const A = {
  info: {
    icon: 'info',
    bg: 'var(--info-50)',
    border: 'var(--info-200)',
    ic: 'var(--info-500)',
    title: 'var(--info-700)',
    body: 'var(--info-600)'
  },
  success: {
    icon: 'check-circle',
    bg: 'var(--success-50)',
    border: 'var(--success-200)',
    ic: 'var(--success-500)',
    title: 'var(--success-700)',
    body: 'var(--success-600)'
  },
  warning: {
    icon: 'alert-circle',
    bg: 'var(--warning-50)',
    border: 'var(--warning-200)',
    ic: 'var(--warning-500)',
    title: 'var(--warning-700)',
    body: 'var(--warning-600)'
  },
  error: {
    icon: 'x-circle',
    bg: 'var(--danger-50)',
    border: 'var(--danger-200)',
    ic: 'var(--danger-500)',
    title: 'var(--danger-700)',
    body: 'var(--danger-600)'
  },
  brand: {
    icon: 'sparkles',
    bg: 'var(--primary-50)',
    border: 'var(--primary-200)',
    ic: 'var(--primary-600)',
    title: 'var(--primary-800)',
    body: 'var(--primary-700)'
  }
};

/** Tinted inline message with a matching hairline border. Never a toast — the app has none. */
function Alert({
  tone = 'info',
  title,
  children,
  icon,
  style = {}
}) {
  const t = A[tone] || A.info;
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      display: 'flex',
      gap: '12px',
      padding: '14px',
      borderRadius: 'var(--radius-xl)',
      background: t.bg,
      border: '1px solid ' + t.border
    }, style)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.ic,
      display: 'flex',
      paddingTop: '2px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 600,
      color: t.title,
      marginBottom: '2px'
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-meta)',
      color: t.body,
      lineHeight: 1.5
    }
  }, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
/** Centred dialog over a 55% slate scrim: 26px radius, 28px top padding, deep drop shadow. */
function Modal({
  open = true,
  eyebrow,
  title,
  children,
  icon,
  iconTone = 'brand',
  align = 'left',
  primaryLabel,
  onPrimary,
  secondaryLabel,
  onSecondary,
  footer,
  onDismiss,
  style = {}
}) {
  if (!open) return null;
  const tones = {
    brand: {
      bg: 'var(--gradient-brand)',
      fg: 'var(--white)',
      shadow: '0 14px 28px -10px rgba(124,58,237,0.7)',
      radius: 'var(--radius-full)',
      size: 82,
      glyph: 36
    },
    warning: {
      bg: 'var(--warning-100)',
      fg: 'var(--warning-700)',
      shadow: 'none',
      radius: '18px',
      size: 56,
      glyph: 26
    },
    danger: {
      bg: 'var(--danger-100)',
      fg: 'var(--danger-700)',
      shadow: 'none',
      radius: '18px',
      size: 56,
      glyph: 26
    }
  };
  const t = tones[iconTone] || tones.brand;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onDismiss,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--surface-scrim)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      position: 'relative',
      width: '100%',
      background: 'var(--surface-card)',
      borderRadius: '26px',
      padding: '28px 24px 24px',
      textAlign: align,
      boxShadow: '0 30px 60px -20px rgba(15,23,42,0.5)'
    }, style)
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: t.size + 'px',
      height: t.size + 'px',
      borderRadius: t.radius,
      background: t.bg,
      color: t.fg,
      boxShadow: t.shadow,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '18px',
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: t.glyph
  })) : null, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-overline)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--primary-600)',
      marginBottom: '8px'
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 700,
      color: 'var(--text-heading)',
      margin: '0 0 8px'
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body)',
      color: 'var(--text-body-color)',
      lineHeight: 1.6,
      textWrap: 'pretty'
    }
  }, children) : null, primaryLabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '20px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "cta",
    onClick: onPrimary,
    style: {
      borderRadius: 'var(--radius-2xl)',
      minHeight: '50px',
      boxShadow: 'none'
    }
  }, primaryLabel)) : null, secondaryLabel ? /*#__PURE__*/React.createElement("div", {
    onClick: onSecondary,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 600,
      color: 'var(--text-muted)',
      marginTop: '14px',
      cursor: 'pointer',
      textAlign: align === 'center' ? 'center' : 'left'
    }
  }, secondaryLabel) : null, footer));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Pill.jsx
try { (() => {
const P = {
  success: ['var(--success-100)', 'var(--success-800)'],
  warning: ['var(--warning-100)', 'var(--warning-800)'],
  danger: ['var(--danger-100)', 'var(--danger-800)'],
  brand: ['var(--primary-100)', 'var(--primary-800)'],
  brandSoft: ['var(--primary-100)', 'var(--primary-700)'],
  info: ['var(--info-100)', 'var(--info-800)'],
  neutral: ['var(--secondary-100)', 'var(--secondary-600)'],
  flame: ['var(--flame-100)', 'var(--flame-600)'],
  onBrand: ['rgba(255,255,255,0.15)', 'var(--white)']
};

/** Status pill: full-radius, 12px semibold, optional 12px leading glyph. */
function Pill({
  children,
  tone = 'neutral',
  icon,
  size = 'md',
  style = {}
}) {
  const [bg, fg] = P[tone] || P.neutral;
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("span", {
    style: Object.assign({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      padding: sm ? '3px 9px' : '4px 10px',
      borderRadius: 'var(--radius-full)',
      fontFamily: 'var(--font-sans)',
      fontSize: sm ? 'var(--text-overline)' : 'var(--text-meta)',
      fontWeight: 600,
      background: bg,
      color: fg,
      whiteSpace: 'nowrap'
    }, style)
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: sm ? 12 : 13
  }) : null, children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Pill.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
const H = {
  sm: 6,
  md: 8,
  lg: 10
};
const FILLS = {
  gradient: 'var(--gradient-progress)',
  brand: 'var(--primary-600)',
  brandLight: 'var(--primary-500)',
  success: 'var(--success-500)',
  cert: 'var(--gradient-cert)',
  onBrand: 'var(--white)'
};

/** Rounded track + fill. Labels sit above it, never inside. */
function ProgressBar({
  value = 0,
  max = 100,
  size = 'md',
  fill = 'gradient',
  label,
  valueLabel,
  track,
  inset = false,
  animate = false,
  delay = 0,
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const [shown, setShown] = React.useState(animate ? 0 : pct);
  React.useEffect(() => {
    if (!animate) {
      setShown(pct);
      return;
    }
    const id = setTimeout(() => setShown(pct), 40 + delay);
    return () => clearTimeout(id);
  }, [pct, animate, delay]);
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      width: '100%'
    }, style)
  }, label || valueLabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-meta)',
      color: 'var(--text-muted)',
      marginBottom: '6px'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", null, valueLabel)) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: H[size] + 'px',
      background: track || 'var(--secondary-100)',
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden',
      boxShadow: inset ? 'var(--shadow-inset-track)' : undefined
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: shown + '%',
      height: '100%',
      background: FILLS[fill] || fill,
      borderRadius: 'var(--radius-full)',
      transition: 'width ' + (animate ? 'var(--duration-chart)' : 'var(--duration-slow)') + ' var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/FilterChip.jsx
try { (() => {
/** Pill filter above a list: solid primary when active, white with a hairline ring when not. */
function FilterChip({
  children,
  active = false,
  onClick,
  icon,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: Object.assign({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      border: 0,
      borderRadius: 'var(--radius-full)',
      padding: '7px 14px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-meta)',
      fontWeight: 600,
      background: active ? 'var(--primary-600)' : 'var(--white)',
      color: active ? 'var(--white)' : 'var(--text-muted)',
      boxShadow: active ? 'none' : 'inset 0 0 0 1px var(--border-default)',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }, style)
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }) : null, children);
}
Object.assign(__ds_scope, { FilterChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FilterChip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
/** Labelled text field. "field" is the filled slate-100 login input; "outlined" is the white in-app input. */
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  variant = 'field',
  icon,
  trailing,
  error,
  hint,
  name,
  style = {}
}) {
  const [focus, setFocus] = React.useState(false);
  const filled = variant === 'field';
  const box = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-body)',
    color: 'var(--text-heading)',
    outline: 'none',
    background: filled ? 'var(--surface-field)' : 'var(--surface-card)',
    border: error ? '1px solid var(--danger-500)' : filled ? 0 : '1px solid var(--border-default)',
    borderRadius: filled ? 'var(--radius-md)' : 'var(--radius-lg)',
    padding: filled ? '12px 16px' : '11px 14px',
    paddingLeft: icon ? '40px' : undefined,
    paddingRight: trailing ? '40px' : undefined,
    borderColor: focus && !error && !filled ? 'var(--primary-400)' : undefined,
    boxShadow: focus && filled && !error ? 'var(--focus-ring)' : 'none'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      width: '100%'
    }, style)
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: name,
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 500,
      color: 'var(--secondary-700)',
      marginBottom: '4px'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-subtle)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })) : null, /*#__PURE__*/React.createElement("input", {
    id: name,
    name: name,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: box
  }), trailing ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: trailing,
    size: 18
  })) : null), error ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-meta)',
      color: 'var(--danger-500)'
    }
  }, error) : null, !error && hint ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-meta)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
/** The in-app search row: white, 10px radius, Lucide search glyph inset left. */
function SearchInput({
  placeholder = 'Search...',
  value,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Input, {
    variant: "outlined",
    icon: "search",
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: style
  });
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedTabs.jsx
try { (() => {
/** Two-up segmented control on a slate-100 track; the active segment is a white 9px-radius card. */
function SegmentedTabs({
  items = [],
  value,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      display: 'flex',
      gap: '4px',
      background: 'var(--secondary-100)',
      borderRadius: 'var(--radius-xl)',
      padding: '4px'
    }, style)
  }, items.map(it => {
    const on = it.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      onClick: () => onChange && onChange(it.id),
      style: {
        flex: 1,
        border: 0,
        borderRadius: '9px',
        padding: '9px 0',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-body-sm)',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        background: on ? 'var(--white)' : 'transparent',
        color: on ? 'var(--primary-600)' : 'var(--text-muted)',
        boxShadow: on ? '0 1px 2px rgba(15,23,42,0.08)' : 'none'
      }
    }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 16
    }) : null, it.label);
  }));
}
Object.assign(__ds_scope, { SegmentedTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedTabs.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** 46×26 track, 20px white knob. Used in Settings, Speak To Hire visibility and live captions. */
function Switch({
  checked = false,
  onChange,
  size = 'md',
  label,
  style = {}
}) {
  const w = size === 'sm' ? 40 : 46,
    h = size === 'sm' ? 22 : 26,
    k = size === 'sm' ? 16 : 20;
  const track = /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    role: "switch",
    "aria-checked": checked,
    "aria-label": label,
    style: {
      flexShrink: 0,
      width: w + 'px',
      height: h + 'px',
      borderRadius: 'var(--radius-full)',
      padding: '3px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: checked ? 'flex-end' : 'flex-start',
      background: checked ? 'var(--primary-600)' : 'var(--secondary-300)',
      transition: 'background var(--duration-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: k + 'px',
      height: k + 'px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--white)',
      boxShadow: '0 1px 2px rgba(15,23,42,0.2)'
    }
  }));
  if (!label) return React.cloneElement(track, {
    style: Object.assign({}, track.props.style, style)
  });
  return /*#__PURE__*/React.createElement("span", {
    style: Object.assign({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--secondary-700)'
    }, style)
  }, label, track);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/identity/AchievementBadge.jsx
try { (() => {
/** Achievement tile. Unlocked carries the violet wash and gradient disc; locked goes flat slate with a progress line. */
function AchievementBadge({
  name,
  description,
  icon = 'award',
  locked = false,
  progress,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '16px',
      borderRadius: 'var(--radius-3xl)',
      background: locked ? 'var(--secondary-100)' : 'linear-gradient(135deg,#ede9fe,#ddd6fe)',
      boxShadow: locked ? 'none' : '0 4px 6px -1px rgba(0,0,0,0.08)'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '58px',
      height: '58px',
      borderRadius: 'var(--radius-full)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '12px',
      background: locked ? 'var(--secondary-200)' : 'linear-gradient(135deg,#8b5cf6,#6d28d9)',
      color: locked ? 'var(--text-subtle)' : 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 700,
      marginBottom: '4px',
      textAlign: 'center',
      color: locked ? 'var(--text-muted)' : 'var(--primary-800)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-overline)',
      color: 'var(--text-muted)',
      textAlign: 'center',
      lineHeight: 1.45
    }
  }, description), locked && progress != null ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-overline)',
      fontWeight: 700,
      color: 'var(--primary-600)',
      marginTop: '8px'
    }
  }, progress, "%") : null);
}
Object.assign(__ds_scope, { AchievementBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/identity/AchievementBadge.jsx", error: String((e && e.message) || e) }); }

// components/identity/Avatar.jsx
try { (() => {
const SIZES = {
  sm: [32, 12],
  md: [40, 14],
  lg: [56, 18],
  xl: [72, 22]
};
const STATUS = {
  online: 'var(--status-online)',
  away: 'var(--status-away)',
  busy: 'var(--status-busy)',
  offline: 'var(--status-offline)'
};

/** Initials avatar on the brand gradient. Circle by default; 16px-radius squircle in partner lists. */
function Avatar({
  initials = '',
  size = 'md',
  tone = 'brand',
  shape = 'circle',
  status,
  ring = false,
  style = {}
}) {
  const [px, fs] = typeof size === 'number' ? [size, Math.round(size * 0.34)] : SIZES[size] || SIZES.md;
  const bg = tone === 'soft' ? 'var(--gradient-avatar-soft)' : tone === 'neutral' ? 'var(--secondary-100)' : 'var(--gradient-avatar)';
  const fg = tone === 'soft' ? 'var(--primary-900)' : tone === 'neutral' ? 'var(--secondary-500)' : 'var(--white)';
  return /*#__PURE__*/React.createElement("span", {
    style: Object.assign({
      position: 'relative',
      display: 'inline-flex',
      flexShrink: 0,
      width: px + 'px',
      height: px + 'px'
    }, style)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: shape === 'squircle' ? 'var(--radius-3xl)' : 'var(--radius-full)',
      background: bg,
      color: fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: fs + 'px',
      fontWeight: 700,
      border: ring ? '2px solid var(--primary-100)' : undefined,
      boxSizing: 'border-box'
    }
  }, initials), status ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: '13px',
      height: '13px',
      borderRadius: 'var(--radius-full)',
      background: STATUS[status],
      border: '2px solid var(--white)'
    }
  }) : null);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/identity/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/motion/BarChart.jsx
try { (() => {
/** Weekly speaking-time bars, growing in sequence. */
function BarChart({
  data = [],
  max,
  height = 110,
  fill = 'var(--primary-500)',
  emptyFill = 'var(--secondary-100)',
  unit = 'm',
  stagger = 70,
  highlightMax = false,
  style = {}
}) {
  const top = max || Math.max(1, ...data.map(d => d.value));
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      display: 'flex',
      alignItems: 'flex-end',
      gap: '10px',
      height: height + 'px',
      fontFamily: 'var(--font-sans)'
    }, style)
  }, data.map((d, i) => {
    const has = d.value > 0;
    const h = Math.max(4, Math.round(d.value / top * (height - 38)));
    const best = highlightMax && d.value === top && has;
    return /*#__PURE__*/React.createElement("div", {
      key: d.label + i,
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        height: '100%',
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-micro)',
        fontWeight: 600,
        color: 'var(--text-subtle)',
        opacity: 0,
        animation: 'sgFadeIn var(--duration-base) var(--ease-out) ' + (i * stagger + 260) + 'ms both'
      }
    }, has ? d.value + unit : '—'), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: h + 'px',
        borderRadius: '8px',
        background: has ? best ? 'var(--gradient-progress)' : fill : emptyFill,
        transformOrigin: 'bottom',
        animation: 'sgGrowY var(--duration-chart) var(--ease-out) ' + i * stagger + 'ms both'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '10px',
        fontWeight: has ? 600 : 400,
        color: has ? 'var(--secondary-600)' : 'var(--text-subtle)'
      }
    }, d.label));
  }));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/motion/Celebration.jsx
try { (() => {
const COLORS = ['#7c3aed', '#d946ef', '#10b981', '#f59e0b', '#a78bfa', '#4f46e5'];

/** Confetti burst for a genuine first: a new best score, a level up, a certificate earned. */
function Celebration({
  active = false,
  pieces = 26,
  colors = COLORS,
  duration,
  spread = 300,
  origin = 'top',
  onDone,
  style = {}
}) {
  const ms = duration || 1800;
  const [run, setRun] = React.useState(active);
  React.useEffect(() => {
    if (!active) {
      setRun(false);
      return;
    }
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      onDone && onDone();
      return;
    }
    setRun(true);
    const id = setTimeout(() => {
      setRun(false);
      onDone && onDone();
    }, ms + 200);
    return () => clearTimeout(id);
  }, [active, ms, onDone]);
  if (!run) return null;
  const bits = Array.from({
    length: pieces
  }).map((_, i) => {
    const seed = i * 2654435761 % 1000 / 1000;
    const seed2 = i * 40503 % 997 / 997;
    return {
      left: 8 + seed * 84,
      dx: Math.round((seed2 - 0.5) * spread * 0.5) + 'px',
      dy: Math.round(spread * (0.7 + seed2 * 0.6)) * (origin === 'top' ? 1 : -1) + 'px',
      dr: Math.round(360 + seed * 720) + 'deg',
      delay: Math.round(seed2 * 260),
      size: 5 + Math.round(seed * 5),
      color: colors[i % colors.length],
      round: i % 3 === 0
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: Object.assign({
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 70
    }, style)
  }, bits.map((b, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      top: origin === 'top' ? '-14px' : 'auto',
      bottom: origin === 'top' ? 'auto' : '-14px',
      left: b.left + '%',
      width: b.size + 'px',
      height: (b.round ? b.size : b.size * 2) + 'px',
      borderRadius: b.round ? 'var(--radius-full)' : '2px',
      background: b.color,
      '--sg-dx': b.dx,
      '--sg-dy': b.dy,
      '--sg-dr': b.dr,
      animation: 'sgConfetti ' + ms + 'ms var(--ease-out) ' + b.delay + 'ms forwards'
    }
  })));
}
Object.assign(__ds_scope, { Celebration });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Celebration.jsx", error: String((e && e.message) || e) }); }

// components/motion/ConnectingState.jsx
try { (() => {
/** Pre-call state: expanding rings behind the partner, an animated status line, and a cancel control. */
function ConnectingState({
  name,
  initials,
  role,
  status = 'connecting',
  note,
  onCancel,
  cancelLabel = 'Cancel',
  onAnswer,
  answerLabel = 'Answer',
  style = {}
}) {
  const labels = {
    connecting: 'Connecting',
    ringing: 'Ringing',
    joining: 'Joining the room'
  };
  const text = labels[status] || labels.connecting;
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      height: '100%',
      minHeight: '100%',
      boxSizing: 'border-box',
      background: 'var(--gradient-call)',
      padding: '76px 24px 36px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      textAlign: 'center'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-meta)',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(196,181,253,0.9)'
    }
  }, role), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '220px',
      height: '220px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '34px 0 8px'
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      width: '150px',
      height: '150px',
      borderRadius: 'var(--radius-full)',
      border: '1px solid rgba(196,181,253,0.55)',
      animation: 'sgRipple var(--duration-ripple) var(--ease-out) ' + i * 700 + 'ms infinite'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '104px',
      height: '104px',
      borderRadius: 'var(--radius-full)',
      background: 'linear-gradient(135deg,#a78bfa,#e879f9)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: '32px',
      fontWeight: 700,
      boxShadow: 'var(--glow-orb)',
      animation: 'sgPulse var(--duration-ripple) var(--ease-in-out) infinite'
    }
  }, initials)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 700,
      marginTop: '18px'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '2px',
      fontSize: 'var(--text-body)',
      color: 'rgba(226,232,240,0.85)',
      marginTop: '6px'
    }
  }, text, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      animation: 'sgDots 1.4s var(--ease-in-out) ' + i * 180 + 'ms infinite'
    }
  }, "."))), note ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'rgba(196,181,253,0.9)',
      lineHeight: 1.55,
      margin: '18px 0 0',
      maxWidth: '280px'
    }
  }, note) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '28px'
    }
  }, onCancel ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onCancel,
    "aria-label": cancelLabel,
    style: {
      width: '64px',
      height: '64px',
      borderRadius: 'var(--radius-full)',
      border: 0,
      background: 'var(--danger-500)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone-off",
    size: 26
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      color: 'rgba(226,232,240,0.75)'
    }
  }, cancelLabel)) : null, onAnswer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onAnswer,
    "aria-label": answerLabel,
    style: {
      width: '64px',
      height: '64px',
      borderRadius: 'var(--radius-full)',
      border: 0,
      background: 'var(--success-500)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      animation: 'sgPulse 1.6s var(--ease-in-out) infinite'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 26
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      color: 'rgba(226,232,240,0.75)'
    }
  }, answerLabel)) : null));
}
Object.assign(__ds_scope, { ConnectingState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/ConnectingState.jsx", error: String((e && e.message) || e) }); }

// components/motion/CountUp.jsx
try { (() => {
/** Ticks a number up to its value. Used for XP, streak days, scores and stat tiles. */
function CountUp({
  value = 0,
  duration,
  decimals = 0,
  prefix = '',
  suffix = '',
  separator = ',',
  start = 0,
  style = {}
}) {
  const [n, setN] = React.useState(start);
  const raf = React.useRef(null);
  const ms = duration || 900;
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // No frames will be delivered to a hidden document (thumbnail capture, background tab):
    // show the real number rather than an animated zero.
    if (reduce || document.hidden) {
      setN(value);
      return;
    }
    const from = n,
      t0 = performance.now();
    let framed = false,
      done = false;
    const finish = () => {
      if (!done) {
        done = true;
        setN(value);
      }
    };
    const step = t => {
      framed = true;
      const p = Math.min(1, (t - t0) / ms);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(from + (value - from) * eased);
      if (p < 1 && !done) raf.current = requestAnimationFrame(step);else done = true;
    };
    raf.current = requestAnimationFrame(step);
    const guard = setTimeout(() => {
      if (!framed) finish();
    }, Math.max(1000, ms + 200));
    const onVis = () => {
      if (document.hidden) finish();
    };
    document.addEventListener('visibilitychange', onVis);
    return () => {
      clearTimeout(guard);
      document.removeEventListener('visibilitychange', onVis);
      raf.current && cancelAnimationFrame(raf.current);
    };
  }, [value, ms]);
  const fixed = n.toFixed(decimals);
  const [int, dec] = fixed.split('.');
  const grouped = separator ? int.replace(/\B(?=(\d{3})+(?!\d))/g, separator) : int;
  return /*#__PURE__*/React.createElement("span", {
    style: style
  }, prefix, grouped, dec ? '.' + dec : '', suffix);
}
Object.assign(__ds_scope, { CountUp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/CountUp.jsx", error: String((e && e.message) || e) }); }

// components/motion/FlipCard.jsx
try { (() => {
/** Two-sided card for spaced-review drills: the idiom on the front, its meaning on the back. */
function FlipCard({
  front,
  back,
  flipped,
  defaultFlipped = false,
  onFlip,
  height = 260,
  radius = 'var(--radius-5xl)',
  frontTone = 'var(--surface-card)',
  backTone = 'var(--gradient-brand)',
  duration,
  style = {}
}) {
  const [self, setSelf] = React.useState(defaultFlipped);
  const on = flipped === undefined ? self : flipped;
  const ms = duration || 520;
  const face = {
    position: 'absolute',
    inset: 0,
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    borderRadius: radius,
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'var(--font-sans)',
    boxShadow: 'var(--shadow-card)'
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => {
      if (flipped === undefined) setSelf(v => !v);
      onFlip && onFlip(!on);
    },
    style: Object.assign({
      perspective: '1200px',
      height: height + 'px',
      cursor: 'pointer'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      transformStyle: 'preserve-3d',
      transition: 'transform ' + ms + 'ms var(--ease-spring)',
      transform: on ? 'rotateY(180deg)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: Object.assign({}, face, {
      background: frontTone,
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-heading)'
    })
  }, front), /*#__PURE__*/React.createElement("div", {
    style: Object.assign({}, face, {
      background: backTone,
      color: '#fff',
      transform: 'rotateY(180deg)'
    })
  }, back)));
}
Object.assign(__ds_scope, { FlipCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/FlipCard.jsx", error: String((e && e.message) || e) }); }

// components/motion/GeneratingState.jsx
try { (() => {
const DEFAULT_STEPS = ['Transcribing the session', 'Scoring fluency and pronunciation', 'Matching error patterns', 'Writing your report'];

/** "Analysing your session" — the wait between a call ending and its report existing. */
function GeneratingState({
  title = 'Analysing your session',
  steps = DEFAULT_STEPS,
  stepDuration = 1100,
  onComplete,
  tone = 'onLight',
  note,
  style = {}
}) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    if (i >= steps.length) {
      onComplete && onComplete();
      return;
    }
    const id = setTimeout(() => setI(v => v + 1), stepDuration);
    return () => clearTimeout(id);
  }, [i, steps.length, stepDuration, onComplete]);
  const dark = tone === 'onDark';
  const done = Math.min(i, steps.length);
  const pct = Math.round(done / steps.length * 100);
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '26px',
      padding: '40px 24px',
      fontFamily: 'var(--font-sans)',
      color: dark ? '#fff' : 'var(--text-heading)',
      textAlign: 'center'
    }, style)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: '112px',
      height: '112px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "112",
    height: "112",
    style: {
      position: 'absolute',
      inset: 0,
      animation: 'sgSpin var(--duration-spin) linear infinite'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "56",
    cy: "56",
    r: "51",
    fill: "none",
    strokeWidth: "4",
    stroke: dark ? 'rgba(255,255,255,0.14)' : 'var(--primary-100)'
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "56",
    cy: "56",
    r: "51",
    fill: "none",
    strokeWidth: "4",
    strokeLinecap: "round",
    stroke: "var(--primary-500)",
    strokeDasharray: "80 240"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '64px',
      height: '64px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--gradient-orb)',
      boxShadow: 'var(--glow-orb)',
      animation: 'sgGlow var(--duration-orb) var(--ease-in-out) infinite'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      fontWeight: 700,
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-meta)',
      color: dark ? 'rgba(226,232,240,0.75)' : 'var(--text-muted)',
      marginTop: '6px'
    }
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      alignItems: 'stretch',
      width: '100%',
      maxWidth: '300px',
      textAlign: 'start'
    }
  }, steps.map((s, idx) => {
    const complete = idx < i,
      current = idx === i;
    return /*#__PURE__*/React.createElement("div", {
      key: s,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 12px',
        borderRadius: 'var(--radius-xl)',
        background: current ? dark ? 'rgba(255,255,255,0.1)' : 'var(--primary-50)' : 'transparent',
        opacity: complete || current ? 1 : 0.45,
        transition: 'background var(--duration-base) var(--ease-standard), opacity var(--duration-base) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '20px',
        height: '20px',
        flexShrink: 0,
        borderRadius: 'var(--radius-full)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: complete ? 'var(--success-500)' : current ? 'var(--primary-600)' : dark ? 'rgba(255,255,255,0.18)' : 'var(--secondary-200)',
        color: '#fff',
        animation: current ? 'sgPulse 1.2s var(--ease-in-out) infinite' : 'none'
      }
    }, complete ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 12
    }) : null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-body-sm)',
        fontWeight: current ? 600 : 500,
        color: dark ? 'rgba(226,232,240,0.9)' : 'var(--secondary-700)'
      }
    }, s));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: '300px',
      height: '6px',
      borderRadius: 'var(--radius-full)',
      background: dark ? 'rgba(255,255,255,0.16)' : 'var(--secondary-100)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      borderRadius: 'var(--radius-full)',
      background: 'var(--gradient-progress)',
      transition: 'width var(--duration-slow) var(--ease-out)'
    }
  })), note ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-meta)',
      color: dark ? 'rgba(196,181,253,0.9)' : 'var(--text-muted)',
      margin: 0,
      maxWidth: '280px',
      lineHeight: 1.55
    }
  }, note) : null);
}
Object.assign(__ds_scope, { GeneratingState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/GeneratingState.jsx", error: String((e && e.message) || e) }); }

// components/motion/Reveal.jsx
try { (() => {
const MODES = {
  up: 'sgRise',
  fade: 'sgFadeIn',
  slide: 'sgSlideInEnd',
  pop: 'sgPopIn',
  rise: 'sgSlideUp'
};

/** Staggers its children in, one after another. Used for report sections and error patterns. */
function Reveal({
  children,
  mode = 'up',
  stagger = 70,
  delay = 0,
  duration,
  whenVisible = false,
  style = {},
  itemStyle = {}
}) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(!whenVisible);
  React.useEffect(() => {
    if (!whenVisible || on || !ref.current || !window.IntersectionObserver) return;
    const io = new IntersectionObserver(es => {
      if (es.some(e => e.isIntersecting)) {
        setOn(true);
        io.disconnect();
      }
    }, {
      threshold: 0.2
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [whenVisible, on]);
  const name = MODES[mode] || MODES.up;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: style
  }, React.Children.map(children, (child, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: Object.assign({
      opacity: on ? undefined : 0,
      animation: on ? name + ' ' + (duration || 420) + 'ms var(--ease-out) ' + (delay + i * stagger) + 'ms both' : 'none'
    }, itemStyle)
  }, child)));
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/motion/ScoreRing.jsx
try { (() => {
/** The weekly / session score: a ring that fills while the number counts up. */
function ScoreRing({
  value = 0,
  max = 100,
  size = 96,
  thickness = 10,
  label = 'SCORE',
  duration,
  color = 'var(--primary-600)',
  track = 'var(--primary-100)',
  suffix = '',
  style = {}
}) {
  const ms = duration || 1200;
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // A hidden document gets no frames — render the real score instead of an animated zero.
    if (reduce || document.hidden) {
      setV(value);
      return;
    }
    let raf,
      t0 = performance.now(),
      framed = false,
      done = false;
    const finish = () => {
      if (!done) {
        done = true;
        setV(value);
      }
    };
    const step = t => {
      framed = true;
      const p = Math.min(1, (t - t0) / ms);
      setV(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1 && !done) raf = requestAnimationFrame(step);else done = true;
    };
    raf = requestAnimationFrame(step);
    const guard = setTimeout(() => {
      if (!framed) finish();
    }, Math.max(1000, ms + 200));
    const onVis = () => {
      if (document.hidden) finish();
    };
    document.addEventListener('visibilitychange', onVis);
    return () => {
      clearTimeout(guard);
      document.removeEventListener('visibilitychange', onVis);
      cancelAnimationFrame(raf);
    };
  }, [value, ms]);
  const r = (size - thickness) / 2,
    c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(1, v / (max || 1)));
  return /*#__PURE__*/React.createElement("span", {
    style: Object.assign({
      position: 'relative',
      display: 'inline-flex',
      width: size + 'px',
      height: size + 'px',
      flexShrink: 0
    }, style)
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    strokeWidth: thickness,
    stroke: track
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    strokeWidth: thickness,
    stroke: color,
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: c * (1 - pct)
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: Math.round(size * 0.25) + 'px',
      fontWeight: 700,
      color: 'var(--text-heading)',
      lineHeight: 1
    }
  }, Math.round(v), suffix), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '10px',
      fontWeight: 600,
      color: 'var(--text-subtle)',
      marginTop: '2px'
    }
  }, label) : null));
}
Object.assign(__ds_scope, { ScoreRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/ScoreRing.jsx", error: String((e && e.message) || e) }); }

// components/motion/TimeBudgetRing.jsx
try { (() => {
function fmt(sec) {
  const s = Math.max(0, Math.round(sec));
  const h = Math.floor(s / 3600),
    m = Math.floor(s % 3600 / 60),
    r = s % 60;
  if (h) return h + ' h ' + String(m).padStart(2, '0') + ' m';
  return String(m).padStart(2, '0') + ':' + String(r).padStart(2, '0');
}

/** Depleting ring for the session clock and the 10-hour practice allowance. */
function TimeBudgetRing({
  remaining = 0,
  total = 1,
  size = 88,
  thickness = 6,
  live = false,
  onExpire,
  label = 'left',
  tone = 'onDark',
  showBar = false,
  style = {}
}) {
  const [left, setLeft] = React.useState(remaining);
  React.useEffect(() => setLeft(remaining), [remaining]);
  React.useEffect(() => {
    if (!live) return;
    const id = setInterval(() => setLeft(v => {
      const n = v - 1;
      if (n <= 0) {
        clearInterval(id);
        onExpire && onExpire();
        return 0;
      }
      return n;
    }), 1000);
    return () => clearInterval(id);
  }, [live, onExpire]);
  const pct = Math.max(0, Math.min(1, left / (total || 1)));
  const r = (size - thickness) / 2,
    c = 2 * Math.PI * r;
  const low = pct <= 0.15;
  const dark = tone === 'onDark';
  const fill = low ? 'var(--danger-500)' : dark ? 'var(--primary-300)' : 'var(--primary-600)';
  if (showBar) {
    return /*#__PURE__*/React.createElement("div", {
      style: Object.assign({
        width: '100%'
      }, style)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-meta)',
        color: dark ? 'rgba(226,232,240,0.8)' : 'var(--text-muted)',
        marginBottom: '6px'
      }
    }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: low ? 'var(--danger-500)' : undefined
      }
    }, fmt(left))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: '6px',
        borderRadius: 'var(--radius-full)',
        background: dark ? 'rgba(255,255,255,0.16)' : 'var(--secondary-100)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: pct * 100 + '%',
        height: '100%',
        borderRadius: 'var(--radius-full)',
        background: fill,
        transition: 'width 1s linear, background var(--duration-base) var(--ease-standard)'
      }
    })));
  }
  return /*#__PURE__*/React.createElement("span", {
    style: Object.assign({
      position: 'relative',
      display: 'inline-flex',
      width: size + 'px',
      height: size + 'px'
    }, style)
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    strokeWidth: thickness,
    stroke: dark ? 'rgba(255,255,255,0.16)' : 'var(--secondary-100)'
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    strokeWidth: thickness,
    stroke: fill,
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: c * (1 - pct),
    style: {
      transition: 'stroke-dashoffset 1s linear, stroke var(--duration-base) var(--ease-standard)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      color: dark ? '#fff' : 'var(--text-heading)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: Math.round(size * 0.2) + 'px',
      fontWeight: 700,
      lineHeight: 1,
      animation: low ? 'sgBlink 1.4s var(--ease-in-out) infinite' : 'none'
    }
  }, fmt(left)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      fontWeight: 600,
      color: dark ? 'rgba(226,232,240,0.75)' : 'var(--text-subtle)',
      marginTop: '3px'
    }
  }, label)));
}
Object.assign(__ds_scope, { TimeBudgetRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/TimeBudgetRing.jsx", error: String((e && e.message) || e) }); }

// components/motion/ViewTransition.jsx
try { (() => {
const MODES = {
  fade: 'sgFadeIn',
  up: 'sgSlideUp',
  slide: 'sgSlideInEnd',
  pop: 'sgPopIn'
};

/** Re-animates its content whenever viewKey changes — tab switches, and a call handing off to its report. */
function ViewTransition({
  children,
  viewKey,
  mode = 'fade',
  duration,
  style = {}
}) {
  const ms = duration || 260;
  return /*#__PURE__*/React.createElement("div", {
    key: viewKey,
    style: Object.assign({
      animation: (MODES[mode] || MODES.fade) + ' ' + ms + 'ms var(--ease-out) both'
    }, style)
  }, children);
}
Object.assign(__ds_scope, { ViewTransition });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/ViewTransition.jsx", error: String((e && e.message) || e) }); }

// components/motion/Waveform.jsx
try { (() => {
/** Live speech waveform. Bars loop while active and flatten when not. */
function Waveform({
  bars = 9,
  active = true,
  height = 36,
  barWidth = 5,
  gap = 5,
  color = 'var(--primary-300)',
  speed,
  align = 'center',
  style = {}
}) {
  const dur = speed || 900;
  const pattern = [0.45, 0.7, 1, 0.8, 0.55, 0.9, 0.65, 1, 0.5];
  return /*#__PURE__*/React.createElement("span", {
    style: Object.assign({
      display: 'inline-flex',
      alignItems: align === 'center' ? 'center' : 'flex-end',
      gap: gap + 'px',
      height: height + 'px'
    }, style)
  }, Array.from({
    length: bars
  }).map((_, i) => {
    const h = Math.round(height * pattern[i % pattern.length]);
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: barWidth + 'px',
        height: (active ? h : Math.max(3, Math.round(height * 0.18))) + 'px',
        borderRadius: 'var(--radius-full)',
        background: color,
        flexShrink: 0,
        transformOrigin: align === 'center' ? 'center' : 'bottom',
        transition: 'height var(--duration-base) var(--ease-standard)',
        animation: active ? 'sgBar ' + dur + 'ms var(--ease-in-out) ' + i * 80 + 'ms infinite' : 'none'
      }
    });
  }));
}
Object.assign(__ds_scope, { Waveform });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Waveform.jsx", error: String((e && e.message) || e) }); }

// components/patterns/BottomNav.jsx
try { (() => {
const DEFAULT_ITEMS = [{
  id: 'home',
  label: 'Home',
  icon: 'house'
}, {
  id: 'practice',
  label: 'Practice',
  icon: 'graduation-cap'
}, {
  id: 'ai',
  label: 'AI Partners',
  icon: 'bot'
}, {
  id: 'connect',
  label: 'Connect',
  icon: 'users'
}, {
  id: 'reports',
  label: 'Reports',
  icon: 'chart-bar'
}];

/** Five destinations in a floating white card; the active item is filled with primary-50. */
function BottomNav({
  items = DEFAULT_ITEMS,
  value = 'home',
  onChange,
  floating = true,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign(floating ? {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '10px 12px 18px',
      background: 'var(--fade-page-up)',
      zIndex: 20
    } : {}, style)
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '4px',
      background: 'var(--surface-glass)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-3xl)',
      padding: '6px',
      boxShadow: 'var(--shadow-tabbar)'
    }
  }, items.map(it => {
    const on = it.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      onClick: () => onChange && onChange(it.id),
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        padding: '8px 0',
        border: 0,
        borderRadius: 'var(--radius-xl)',
        cursor: 'pointer',
        background: on ? 'var(--nav-active-bg)' : 'transparent',
        color: on ? 'var(--nav-active-fg)' : 'var(--nav-idle-fg)',
        transition: 'background var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        transform: on ? 'translateY(-1px) scale(1.06)' : 'none',
        transition: 'transform var(--duration-base) var(--ease-spring)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 20
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-micro)',
        fontWeight: on ? 700 : 500,
        whiteSpace: 'nowrap'
      }
    }, it.label));
  })));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/patterns/GenieOrb.jsx
try { (() => {
/** The Genie mark: a soft radial orb with a violet glow. Breathes on splash and during calls. */
function GenieOrb({
  size = 52,
  glow = 'md',
  breathing = false,
  rings = 0,
  icon,
  floating = false,
  onClick,
  style = {}
}) {
  const shadow = glow === 'lg' ? 'var(--glow-orb-lg)' : glow === 'sm' ? 'var(--glow-orb-sm)' : 'var(--glow-orb)';
  if (rings > 0) {
    return /*#__PURE__*/React.createElement("span", {
      style: Object.assign({
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size * 2 + 'px',
        height: size * 2 + 'px',
        flexShrink: 0
      }, style)
    }, Array.from({
      length: rings
    }).map((_, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        position: 'absolute',
        width: size * 1.5 + 'px',
        height: size * 1.5 + 'px',
        borderRadius: 'var(--radius-full)',
        border: '1px solid rgba(196,181,253,0.55)',
        animation: 'sgRipple var(--duration-ripple) var(--ease-out) ' + i * 700 + 'ms infinite'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        width: size + 'px',
        height: size + 'px',
        borderRadius: 'var(--radius-full)',
        background: 'var(--gradient-orb)',
        boxShadow: shadow,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--primary-800)',
        cursor: onClick ? 'pointer' : undefined,
        animation: breathing ? 'sgGlow var(--duration-orb) var(--ease-in-out) infinite' : undefined
      },
      onClick: onClick
    }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: icon,
      size: Math.round(size * 0.42)
    }) : null));
  }
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: Object.assign(floating ? {
      position: 'absolute',
      bottom: '112px',
      right: '18px',
      zIndex: 30
    } : {}, {
      width: size + 'px',
      height: size + 'px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--gradient-orb)',
      boxShadow: shadow,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--primary-800)',
      cursor: onClick ? 'pointer' : undefined,
      animation: breathing ? 'sgGlow var(--duration-orb) var(--ease-in-out) infinite' : undefined
    }, style)
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.42)
  }) : null);
}
Object.assign(__ds_scope, { GenieOrb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/GenieOrb.jsx", error: String((e && e.message) || e) }); }

// components/patterns/HeroCard.jsx
try { (() => {
const TONES = {
  brand: {
    bg: 'var(--gradient-brand)',
    soft: 'var(--primary-100)',
    fg: 'var(--primary-600)',
    shadow: 'var(--shadow-hero)'
  },
  info: {
    bg: 'var(--info-600)',
    soft: 'var(--info-100)',
    fg: 'var(--info-700)',
    shadow: '0 12px 24px -10px rgba(37,99,235,0.6)'
  },
  violet: {
    bg: 'var(--violet-600)',
    soft: 'var(--violet-100)',
    fg: 'var(--violet-700)',
    shadow: '0 12px 24px -10px rgba(147,51,234,0.6)'
  },
  deep: {
    bg: 'var(--gradient-brand-deep)',
    soft: 'var(--primary-200)',
    fg: 'var(--primary-900)',
    shadow: 'var(--shadow-banner)'
  }
};

/** The gradient card that opens Home and every program screen. Blurred highlight disc, top right. */
function HeroCard({
  eyebrow,
  eyebrowIcon,
  title,
  body,
  tone = 'brand',
  meta,
  progressLabel = "Today's goal",
  progressValue,
  actionLabel,
  actionIcon = 'play',
  onAction,
  style = {}
}) {
  const t = TONES[tone] || TONES.brand;
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      background: t.bg,
      borderRadius: 'var(--radius-3xl)',
      padding: '20px',
      color: 'var(--white)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '180px',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: t.shadow,
      fontFamily: 'var(--font-sans)'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-32px',
      right: '-32px',
      width: '112px',
      height: '112px',
      borderRadius: 'var(--radius-full)',
      background: 'rgba(255,255,255,0.1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '6px',
      color: t.soft
    }
  }, eyebrowIcon ? /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'rgba(255,255,255,0.15)',
      borderRadius: 'var(--radius-md)',
      padding: '6px',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: eyebrowIcon,
    size: 16
  })) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-overline)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase'
    }
  }, eyebrow)) : null, meta ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '8px'
    }
  }, meta) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-hero)',
      fontWeight: 700,
      margin: '0 0 6px'
    }
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: t.soft,
      lineHeight: 1.5,
      margin: '0 0 18px'
    }
  }, body) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: '14px',
      marginTop: 'auto'
    }
  }, progressValue != null ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-overline)',
      color: t.soft,
      marginBottom: '5px'
    }
  }, /*#__PURE__*/React.createElement("span", null, progressLabel), /*#__PURE__*/React.createElement("span", null, progressValue, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '6px',
      background: 'rgba(91,33,182,0.5)',
      borderRadius: 'var(--radius-full)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: progressValue + '%',
      height: '100%',
      background: 'var(--white)',
      borderRadius: 'var(--radius-full)'
    }
  }))) : null, actionLabel ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "white",
    size: "sm",
    icon: actionIcon,
    onClick: onAction,
    style: {
      color: t.fg,
      fontWeight: 600
    }
  }, actionLabel) : null)));
}
Object.assign(__ds_scope, { HeroCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/HeroCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/ListRow.jsx
try { (() => {
/** Settings / activity / session row: square icon tile, title, hint, then a value, control or chevron. */
function ListRow({
  icon,
  iconTint = 'var(--secondary-100)',
  iconColor = 'var(--primary-600)',
  title,
  hint,
  value,
  control,
  chevron = false,
  divider = true,
  onClick,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: Object.assign({
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 0',
      borderBottom: divider ? '1px solid var(--border-subtle)' : 'none',
      cursor: onClick ? 'pointer' : undefined,
      fontFamily: 'var(--font-sans)'
    }, style)
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: '36px',
      height: '36px',
      flexShrink: 0,
      borderRadius: 'var(--radius-lg)',
      background: iconTint,
      color: iconColor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 600,
      color: 'var(--secondary-700)'
    }
  }, title), hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-overline)',
      color: 'var(--text-subtle)',
      marginTop: '2px'
    }
  }, hint) : null), value ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-meta)',
      fontWeight: 700,
      color: 'var(--primary-600)',
      flexShrink: 0
    }
  }, value) : null, control, chevron ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--border-strong)',
      display: 'flex',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 18
  })) : null);
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/patterns/PhoneFrame.jsx
try { (() => {
/** 390×844 device shell with status bar, notch and home indicator — how every screen is presented. */
function PhoneFrame({
  children,
  tone = 'light',
  scrollable = true,
  style = {}
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      width: '390px',
      height: '844px',
      borderRadius: 'var(--radius-phone-outer)',
      background: 'var(--secondary-900)',
      padding: '11px',
      flexShrink: 0,
      boxShadow: 'var(--shadow-phone)'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: 'var(--radius-phone-inner)',
      overflow: 'hidden',
      background: 'var(--surface-page)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 'var(--status-bar-height)',
      zIndex: 35,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 26px',
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      pointerEvents: 'none',
      color: dark ? 'var(--white)' : 'var(--text-heading)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "signal",
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '22px',
      height: '11px',
      border: '1px solid currentColor',
      borderRadius: '3px',
      display: 'inline-block',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: '1.5px',
      right: '6px',
      background: 'currentColor',
      borderRadius: '1px'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '9px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '118px',
      height: '30px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--secondary-900)',
      zIndex: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "sg-scroll",
    style: {
      flex: 1,
      overflowY: scrollable ? 'auto' : 'hidden',
      overflowX: 'hidden'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '7px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '132px',
      height: '5px',
      borderRadius: 'var(--radius-full)',
      background: dark ? 'rgba(255,255,255,0.6)' : 'rgba(15,23,42,0.35)',
      zIndex: 45
    }
  })));
}
Object.assign(__ds_scope, { PhoneFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/PhoneFrame.jsx", error: String((e && e.message) || e) }); }

// components/patterns/StatTile.jsx
try { (() => {
/** Small metric tile: tinted icon disc, Poppins number, caption. Laid out three across. */
function StatTile({
  value,
  label,
  icon,
  tint = 'var(--primary-100)',
  color = 'var(--primary-600)',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-2xl)',
      padding: '14px 10px',
      textAlign: 'center',
      boxShadow: '0 4px 6px -2px rgba(15,23,42,0.04)',
      fontFamily: 'var(--font-sans)'
    }, style)
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      padding: '7px',
      borderRadius: 'var(--radius-full)',
      background: tint,
      color
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '17px',
      fontWeight: 700,
      color: 'var(--text-heading)',
      marginTop: '8px'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-micro)',
      color: 'var(--text-muted)',
      lineHeight: 1.3
    }
  }, label));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/StatTile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/AiCallScreen.jsx
try { (() => {
function AiCallScreen({
  partner,
  onEnd
}) {
  const {
    Icon,
    IconButton
  } = SG;
  const LINES = [['ai', 'So, tell me — how did the client meeting go this morning?', ''], ['me', 'It go well. We discuss the new timeline and they agree with us.', 'Past simple: "It went well. We discussed the new timeline and they agreed."'], ['ai', 'Good. What was their main concern about the timeline?', ''], ['me', 'They worried about the delivery date, so I explain the two phases.', 'Tense agreement: "They were worried… so I explained the two phases."']];
  const CONTROLS = [['mic', 'Mute', 'glass', 52], ['volume-2', 'Speaker', 'glass', 52], ['phone-off', 'End call', 'danger', 64], ['captions', 'Captions', 'glass', 52], ['flag', 'Report', 'glass', 52]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '822px',
      boxSizing: 'border-box',
      background: 'var(--gradient-call)',
      padding: '56px 20px 30px',
      display: 'flex',
      flexDirection: 'column',
      color: '#fff',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '22px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      background: 'rgba(255,255,255,0.12)',
      borderRadius: 'var(--radius-full)',
      padding: '6px 12px',
      fontSize: '11px',
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '7px',
      height: '7px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--success-400)'
    }
  }), "Live \xB7 08:12"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      background: 'rgba(255,255,255,0.12)',
      borderRadius: 'var(--radius-full)',
      padding: '6px 12px',
      fontSize: '11px',
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 13
  }), "3 h 48 m left")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: '118px',
      height: '118px',
      borderRadius: 'var(--radius-full)',
      background: 'rgba(196,181,253,0.25)',
      animation: 'sgGlow 2.4s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '88px',
      height: '88px',
      borderRadius: 'var(--radius-full)',
      background: 'linear-gradient(135deg,#a78bfa,#e879f9)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: '28px',
      fontWeight: 700
    }
  }, partner.initials)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      fontWeight: 700
    }
  }, partner.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'rgba(226,232,240,0.8)',
      marginTop: '3px'
    }
  }, "AI partner \xB7 ", partner.role, " \xB7 B1 pace")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      background: 'rgba(15,23,42,0.35)',
      border: '1px solid rgba(148,163,184,0.25)',
      borderRadius: 'var(--radius-4xl)',
      padding: '16px',
      marginBottom: '18px',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '10px',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'rgba(196,181,253,0.9)',
      flexShrink: 0
    }
  }, "Live transcript"), LINES.map(([who, text, fix], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: who === 'me' ? 'flex-end' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '250px',
      fontSize: '13px',
      lineHeight: 1.5,
      borderRadius: 'var(--radius-3xl)',
      padding: '10px 13px',
      background: who === 'me' ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.12)',
      color: who === 'me' ? 'var(--secondary-800)' : '#fff'
    }
  }, text), fix ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '6px',
      background: 'rgba(16,185,129,0.16)',
      borderRadius: 'var(--radius-lg)',
      padding: '7px 10px',
      marginTop: '6px',
      maxWidth: '250px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--success-300)',
      display: 'flex',
      flexShrink: 0,
      marginTop: '1px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 14
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      lineHeight: 1.4,
      color: 'var(--success-200)'
    }
  }, fix)) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: 'rgba(226,232,240,0.7)',
      fontSize: '11px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: '3px',
      height: '14px'
    }
  }, [8, 14, 10, 13, 6].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: '3px',
      height: h + 'px',
      borderRadius: '999px',
      background: '#c4b5fd',
      animation: 'sgBar .9s ease-in-out ' + i * 0.09 + 's infinite'
    }
  }))), "You are speaking\u2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '10px'
    }
  }, CONTROLS.map(([icon, label, tone, size]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: icon,
    tone: tone,
    size: size,
    label: label,
    onClick: label === 'End call' ? onEnd : undefined
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      color: 'rgba(226,232,240,0.75)'
    }
  }, label)))));
}
window.AiCallScreen = AiCallScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/AiCallScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/AiPartnersScreen.jsx
try { (() => {
function AiPartnersScreen({
  onCall
}) {
  const {
    Icon,
    Card,
    SearchInput,
    GenieOrb
  } = SG;
  const PARTNERS = [['Emma Wilson', 'English Teacher', 'Conversation Practice', '4.8', 'EW'], ['Michael Chen', 'Business English Coach', 'Professional Communication', '4.7', 'MC'], ['Sophia Garcia', 'Conversation Partner', 'Casual Conversation', '4.9', 'SG'], ['Dr. James Wilson', 'Academic English Tutor', 'Academic Writing', '4.6', 'JW'], ['Aisha Khan', 'Pronunciation Coach', 'Accent Reduction', '4.8', 'AK'], ['Alex Taylor', 'Travel English Guide', 'Travel Conversations', '4.7', 'AT']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      padding: '4px 20px var(--screen-padding-bottom)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "tint",
    padding: "16px",
    elevation: "none",
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-start',
      marginBottom: '22px'
    }
  }, /*#__PURE__*/React.createElement(GenieOrb, {
    size: 38,
    glow: "sm"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13px',
      color: 'var(--primary-800)',
      lineHeight: 1.5,
      margin: 0
    }
  }, "Meet your AI partners."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13px',
      color: 'var(--primary-700)',
      lineHeight: 1.5,
      margin: '2px 0 0'
    }
  }, "They're here to discuss topics you actually care about."))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-page-title)',
      fontWeight: 700,
      margin: '0 0 8px'
    }
  }, "AI Practice Partners"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13px',
      color: 'var(--text-muted)',
      lineHeight: 1.55,
      margin: '0 0 18px'
    }
  }, "Practice your language skills with our AI partners. Choose a partner that matches your learning goals."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement(SearchInput, {
    placeholder: "Search partners..."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: '10px 12px',
      fontSize: '13px',
      color: 'var(--secondary-700)',
      whiteSpace: 'nowrap'
    }
  }, "All Levels", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px'
    }
  }, PARTNERS.map(([name, role, specialty, rating, initials]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-3xl)',
      overflow: 'hidden',
      boxShadow: '0 4px 6px -2px rgba(15,23,42,0.06)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '64px',
      background: 'linear-gradient(135deg,#8b5cf6,#6d28d9)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '28px',
      transform: 'translateX(-50%)',
      width: '56px',
      height: '56px',
      borderRadius: 'var(--radius-full)',
      border: '4px solid #fff',
      background: 'var(--gradient-avatar-soft)',
      color: 'var(--primary-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-card-title)',
      fontWeight: 700,
      boxShadow: '0 4px 6px -1px rgba(15,23,42,0.15)'
    }
  }, initials)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '36px 12px 14px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '14px',
      fontWeight: 700,
      margin: 0,
      lineHeight: 1.2
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '11px',
      fontWeight: 500,
      color: 'var(--primary-600)',
      margin: '3px 0 0'
    }
  }, role), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '4px',
      marginTop: '8px',
      color: 'var(--warning-500)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--secondary-600)'
    }
  }, rating)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '11px',
      color: 'var(--text-muted)',
      margin: '8px 0 12px',
      flex: 1,
      lineHeight: 1.4
    }
  }, specialty), /*#__PURE__*/React.createElement("span", {
    onClick: () => onCall(name, initials, role),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      background: 'var(--primary-50)',
      color: 'var(--primary-700)',
      borderRadius: 'var(--radius-full)',
      padding: '7px 12px',
      fontSize: '11px',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 12
  }), "Start Practice"))))));
}
window.AiPartnersScreen = AiPartnersScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/AiPartnersScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/App.jsx
try { (() => {
function App() {
  const {
    BottomNav,
    GenieOrb,
    PhoneFrame,
    Modal,
    ViewTransition
  } = SG;
  const [tab, setTab] = React.useState('home');
  const [overlay, setOverlay] = React.useState(null); // 'tasks' | 'profile' | 'call'
  const [partner, setPartner] = React.useState({
    name: 'Emma Wilson',
    initials: 'EW',
    role: 'English Teacher'
  });
  const [genie, setGenie] = React.useState(false);
  const rootTab = !overlay;
  const dark = overlay === 'call';
  let body = null;
  if (overlay === 'tasks') body = /*#__PURE__*/React.createElement(TasksScreen, {
    onBack: () => setOverlay(null)
  });else if (overlay === 'profile') body = /*#__PURE__*/React.createElement(ProfileScreen, {
    onBack: () => setOverlay(null)
  });else if (overlay === 'call') body = /*#__PURE__*/React.createElement(AiCallScreen, {
    partner: partner,
    onEnd: () => setOverlay(null)
  });else if (tab === 'home') body = /*#__PURE__*/React.createElement(HomeScreen, {
    onProfile: () => setOverlay('profile'),
    onOpenHire: () => setTab('reports')
  });else if (tab === 'practice') body = /*#__PURE__*/React.createElement(PracticeScreen, {
    onOpenTasks: () => setOverlay('tasks')
  });else if (tab === 'ai') body = /*#__PURE__*/React.createElement(AiPartnersScreen, {
    onCall: (name, initials, role) => {
      setPartner({
        name,
        initials,
        role
      });
      setOverlay('call');
    }
  });else if (tab === 'connect') body = /*#__PURE__*/React.createElement(ConnectScreen, null);else body = /*#__PURE__*/React.createElement(ReportsScreen, null);
  return /*#__PURE__*/React.createElement(PhoneFrame, {
    tone: dark ? 'dark' : 'light',
    scrollable: overlay !== 'call'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '100%'
    }
  }, rootTab ? /*#__PURE__*/React.createElement(AppHeader, {
    onProfile: () => setOverlay('profile')
  }) : null, /*#__PURE__*/React.createElement(ViewTransition, {
    viewKey: overlay || tab,
    mode: overlay ? 'up' : 'fade',
    duration: overlay ? 300 : 220
  }, body)), rootTab ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GenieOrb, {
    floating: true,
    icon: "sparkles",
    onClick: () => setGenie(true)
  }), /*#__PURE__*/React.createElement(BottomNav, {
    value: tab,
    onChange: setTab
  })) : null, /*#__PURE__*/React.createElement(Modal, {
    open: genie,
    eyebrow: "Genie assistant",
    title: "Two things stood out today",
    icon: "sparkles",
    align: "left",
    primaryLabel: "Drill past simple endings",
    secondaryLabel: "Not now",
    onPrimary: () => setGenie(false),
    onSecondary: () => setGenie(false),
    onDismiss: () => setGenie(false)
  }, "You dropped past-simple endings twice in the call with Sarah, and your pace sped up after the third question."));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/AppHeader.jsx
try { (() => {
// Sticky app header shown on the five root destinations.
function AppHeader({
  onProfile
}) {
  const {
    Icon,
    IconButton,
    Avatar
  } = SG;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 25,
      padding: '52px 16px 10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'var(--fade-page-down)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-full)',
      padding: '6px 12px',
      boxShadow: 'var(--shadow-hairline)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '20px',
      height: '20px',
      borderRadius: '6px',
      background: 'var(--primary-100)',
      color: 'var(--primary-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '10px',
      fontWeight: 700,
      fontFamily: 'var(--font-sans)'
    }
  }, "P"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      fontWeight: 700,
      color: 'var(--text-heading)'
    }
  }, "Personal"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: '40px',
      height: '40px',
      borderRadius: 'var(--radius-full)',
      background: 'linear-gradient(135deg,#f3e8ff,#fce7f3)',
      color: 'var(--violet-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '-2px',
      right: '-2px',
      width: '20px',
      height: '20px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--green-500)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: '10px',
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "3")), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Notifications",
    badge: 2
  }), /*#__PURE__*/React.createElement("span", {
    onClick: onProfile,
    style: {
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "AH",
    ring: true
  }))));
}
window.AppHeader = AppHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/AppHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/ConnectScreen.jsx
try { (() => {
function ConnectScreen() {
  const {
    Icon,
    Card,
    Avatar,
    Pill,
    SearchInput,
    FilterChip,
    SegmentedTabs
  } = SG;
  const [tab, setTab] = React.useState('connections');
  const [onlineOnly, setOnlineOnly] = React.useState(false);
  const PARTNERS = [['Anna Paulo', 'Travel Advisor', 'United States', 'English', 'Advanced', '4.8', 'none', '2 hours ago', false, 'AP'], ['Lina Beck', 'Content Creator', 'Germany', 'German', 'Intermediate', '4.5', 'pending', '5 hours ago', false, 'LB'], ['Ali Khalil', 'Professional Photographer', 'Egypt', 'Arabic', 'Beginner', '4.7', 'accepted', 'Just now', true, 'AK'], ['Sophie Martin', 'Marketing Specialist', 'France', 'French', 'Advanced', '4.6', 'none', '1 day ago', false, 'SM'], ['Carlos Rodriguez', 'Software Engineer', 'Spain', 'Spanish', 'Intermediate', '4.7', 'pending', '3 hours ago', false, 'CR'], ['Emma Wilson', 'English Teacher', 'United Kingdom', 'English', 'Advanced', '4.9', 'accepted', '30 minutes ago', true, 'EW']];
  const ACTIONS = {
    accepted: ['Call', 'phone', 'var(--primary-600)', '#fff'],
    pending: ['Pending', 'clock', 'var(--warning-50)', 'var(--warning-700)'],
    none: ['Connect', 'plus', 'var(--primary-50)', 'var(--primary-700)']
  };
  const rows = PARTNERS.filter(p => tab === 'connections' ? p[6] === 'accepted' : p[6] !== 'accepted').filter(p => !onlineOnly || p[8]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      padding: '4px 20px var(--screen-padding-bottom)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-page-title)',
      fontWeight: 700,
      margin: '12px 0 4px'
    }
  }, "Connect"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13px',
      color: 'var(--text-muted)',
      margin: '0 0 14px'
    }
  }, tab === 'connections' ? 'People you already practise with.' : 'Find a partner whose target language is your native one.'), /*#__PURE__*/React.createElement(SegmentedTabs, {
    value: tab,
    onChange: setTab,
    style: {
      marginBottom: '16px'
    },
    items: [{
      id: 'connections',
      label: 'My Connections',
      icon: 'users'
    }, {
      id: 'discover',
      label: 'Discover',
      icon: 'user'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement(SearchInput, {
    placeholder: "Search partners..."
  }), /*#__PURE__*/React.createElement(FilterChip, {
    icon: "signal",
    active: onlineOnly,
    onClick: () => setOnlineOnly(v => !v)
  }, "Online")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, rows.map(([name, occupation, country, language, level, rating, status, last, online, initials]) => {
    const [label, icon, bg, fg] = ACTIONS[status];
    return /*#__PURE__*/React.createElement(Card, {
      key: name,
      padding: "16px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      initials: initials,
      size: "lg",
      tone: "soft",
      shape: "squircle",
      status: online ? 'online' : undefined
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: '8px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-row-title)',
        fontWeight: 700,
        margin: 0,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, name), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '13px',
        color: 'var(--text-muted)',
        margin: '2px 0 0',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, occupation)), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--border-strong)',
        display: 'flex',
        flexShrink: 0,
        marginTop: '2px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 19
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '6px',
        marginTop: '8px'
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      tone: "brandSoft",
      icon: "globe",
      size: "sm"
    }, language), /*#__PURE__*/React.createElement(Pill, {
      size: "sm"
    }, level), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '3px',
        color: 'var(--warning-600)',
        fontSize: '11px',
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "star",
      size: 13
    }), rating)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        marginTop: '14px',
        paddingTop: '12px',
        borderTop: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '11px',
        color: 'var(--text-muted)'
      }
    }, country), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '3px',
        fontSize: '11px',
        fontWeight: 500,
        color: online ? 'var(--success-700)' : 'var(--text-muted)'
      }
    }, online ? 'Online now' : last)), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        background: bg,
        color: fg,
        borderRadius: 'var(--radius-full)',
        padding: '8px 14px',
        fontSize: '12px',
        fontWeight: 600,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 15
    }), label)));
  })));
}
window.ConnectScreen = ConnectScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/ConnectScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/HomeScreen.jsx
try { (() => {
function HomeScreen({
  onProfile,
  onOpenHire
}) {
  const {
    Icon,
    Card,
    Pill,
    ProgressBar,
    HeroCard,
    StatTile,
    Button
  } = SG;
  const [slide, setSlide] = React.useState(0);
  const [done, setDone] = React.useState({
    dc1: true,
    dc2: true,
    dc3: false
  });
  const CH = [['dc1', 'Practice 10 minutes', 20], ['dc2', 'Learn 5 new words', 25], ['dc3', 'Complete 1 conversation', 30]];
  const xp = CH.reduce((t, c) => t + (done[c[0]] ? c[2] : 0), 0);
  const STATS = [['42.5h', 'Practice time', 'clock', 'var(--primary-100)', 'var(--primary-600)'], ['124', 'Words learned', 'book-open', 'var(--info-100)', 'var(--info-600)'], ['18', 'Idioms learned', 'message-circle', 'var(--pink-100)', 'var(--pink-600)'], ['35', 'Tasks completed', 'check-circle', 'var(--success-100)', 'var(--success-600)'], ['4', 'Tips gained', 'zap', 'var(--warning-100)', 'var(--warning-600)'], ['1', 'Scenarios mastered', 'target', 'var(--indigo-100)', 'var(--indigo-600)']];
  const streak = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const sessions = [['AI Practice with Emma', 'Today, 2:30 PM', 15, 'bot', 'var(--primary-600)'], ['Partner Session with Alex', 'Yesterday', 30, 'users', 'var(--info-600)']];
  const heroes = [/*#__PURE__*/React.createElement(HeroCard, {
    key: "a",
    eyebrow: "Resume practice",
    title: "Describe your favourite room",
    body: "In a conversation, describe your favourite room to your partner and ask them about theirs.",
    progressValue: 40,
    actionLabel: "Resume"
  }), /*#__PURE__*/React.createElement(HeroCard, {
    key: "b",
    tone: "info",
    eyebrow: "Tip of the day \xB7 Grammar tip",
    eyebrowIcon: "zap",
    title: "Its vs It\u2019s",
    body: 'If "it is" fits in the sentence, write "it’s". If not, write "its".',
    actionLabel: "Review flash card",
    actionIcon: "book-open"
  }), /*#__PURE__*/React.createElement(HeroCard, {
    key: "c",
    tone: "violet",
    eyebrow: "Real-life scenario",
    eyebrowIcon: "message-circle",
    title: "Morning Routine",
    body: "Practice talking about your daily morning activities",
    actionLabel: "Start scenario",
    actionIcon: "arrow-right",
    meta: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Pill, {
      tone: "onBrand",
      size: "sm"
    }, "Level A1"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        fontSize: '11px',
        fontWeight: 500,
        color: 'var(--violet-100)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 13
    }), "5 min"))
  })];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      padding: '4px var(--screen-padding-x, 20px) var(--screen-padding-bottom)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '6px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-greeting)',
      fontWeight: 700,
      color: 'var(--text-heading)',
      margin: 0
    }
  }, "Hi, Ahmed"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-full)',
      padding: '3px 8px',
      boxShadow: 'var(--shadow-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px'
    }
  }, "\uD83C\uDDEC\uD83C\uDDE7"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 12
  }))), /*#__PURE__*/React.createElement(Pill, {
    tone: "brandSoft",
    icon: "clock",
    size: "sm"
  }, "2h / 10h used"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '24px',
      background: 'var(--gradient-brand-deep)',
      borderRadius: 'var(--radius-3xl)',
      padding: '18px',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-banner)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-40px',
      right: '-40px',
      width: '128px',
      height: '128px',
      borderRadius: 'var(--radius-full)',
      background: 'rgba(255,255,255,0.1)',
      filter: 'blur(24px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-card-title)',
      fontWeight: 700,
      marginBottom: '2px'
    }
  }, "Speak To Hire"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      color: 'var(--primary-200)'
    }
  }, "Your 30-hour BPO challenge")), /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    size: "sm",
    trailingIcon: "arrow-right",
    onClick: onOpenHire,
    style: {
      color: 'var(--primary-900)',
      position: 'relative'
    }
  }, "View program")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '24px'
    }
  }, heroes[slide]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '12px'
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setSlide(i),
    style: {
      height: '8px',
      width: slide === i ? '24px' : '8px',
      borderRadius: 'var(--radius-full)',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      background: slide === i ? 'var(--primary-600)' : 'var(--border-strong)'
    }
  }))), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginTop: '26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--flame-50)',
      color: 'var(--flame-600)',
      borderRadius: 'var(--radius-full)',
      padding: '8px',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flame",
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-row-title)',
      fontWeight: 700
    }
  }, "7-day streak"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      color: 'var(--text-muted)'
    }
  }, "Longest streak: 12 days"))), /*#__PURE__*/React.createElement(Pill, {
    tone: "flame",
    size: "sm"
  }, "Keep it up")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '6px'
    }
  }, streak.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '30px',
      height: '30px',
      borderRadius: 'var(--radius-full)',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      background: i < 5 ? 'var(--gradient-streak)' : 'var(--secondary-100)'
    }
  }, i < 5 ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-micro)',
      color: 'var(--text-subtle)',
      marginTop: '5px'
    }
  }, d))))), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginTop: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-row-title)',
      fontWeight: 700,
      margin: 0
    }
  }, "Today's challenges"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      fontWeight: 600,
      color: 'var(--primary-600)'
    }
  }, xp, " XP earned")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, CH.map(([id, title, x]) => {
    const on = !!done[id];
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      onClick: () => setDone(s => Object.assign({}, s, {
        [id]: !s[id]
      })),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 12px',
        borderRadius: 'var(--radius-xl)',
        cursor: 'pointer',
        background: on ? 'var(--primary-50)' : 'var(--secondary-50)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '22px',
        height: '22px',
        borderRadius: 'var(--radius-full)',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: on ? 'var(--primary-600)' : '#fff',
        border: on ? 0 : '2px solid var(--border-strong)',
        color: '#fff'
      }
    }, on ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14
    }) : null), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: '13px',
        fontWeight: 500,
        color: on ? 'var(--text-subtle)' : 'var(--secondary-700)',
        textDecoration: on ? 'line-through' : 'none'
      }
    }, title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '11px',
        fontWeight: 700,
        color: 'var(--primary-600)'
      }
    }, "+", x, " XP"));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '26px 0 12px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-section)',
      fontWeight: 700,
      margin: 0
    }
  }, "Your progress"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '12px',
      fontWeight: 600,
      color: 'var(--primary-600)'
    }
  }, "Full report", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14
  }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '36px',
      height: '36px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--gradient-brand)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: '14px',
      fontWeight: 700
    }
  }, "5"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      fontWeight: 700
    }
  }, "Fluent Speaker"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      color: 'var(--text-muted)'
    }
  }, "Level 5"))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      color: 'var(--text-muted)'
    }
  }, "2,350 / 3,000 XP")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 78
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '14px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '10px'
    }
  }, STATS.map(([v, l, ic, tint, color]) => /*#__PURE__*/React.createElement(StatTile, {
    key: l,
    value: v,
    label: l,
    icon: ic,
    tint: tint,
    color: color
  }))), /*#__PURE__*/React.createElement(Card, {
    tone: "tint",
    style: {
      marginTop: '14px',
      border: '1px solid var(--primary-100)',
      boxShadow: 'var(--shadow-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '40px',
      height: '40px',
      borderRadius: 'var(--radius-full)',
      background: 'linear-gradient(135deg,#a855f7,#ec4899)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "award",
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '14px',
      fontWeight: 700
    }
  }, "Next certificate"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      color: 'var(--text-muted)'
    }
  }, "Voice-Ready"))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '12px',
      fontWeight: 600,
      color: 'var(--primary-600)'
    }
  }, "View all", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14
  }))), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 75,
    size: "lg",
    fill: "cert",
    inset: true,
    track: "#fff",
    style: {
      marginBottom: '12px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--secondary-700)'
    }
  }, "15/20 hours"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: 'var(--text-muted)'
    }
  }, "5 hours to go", /*#__PURE__*/React.createElement(Pill, {
    tone: "brandSoft",
    size: "sm"
  }, "B2+")))), /*#__PURE__*/React.createElement(Card, {
    padding: "sm",
    radius: "var(--radius-2xl)",
    elevation: "hairline",
    style: {
      marginTop: '14px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '13px',
      fontWeight: 700,
      color: 'var(--secondary-700)',
      margin: '0 0 8px'
    }
  }, "Recent Sessions"), sessions.map(([t, when, mins, ic, color]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px 4px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '40px',
      height: '40px',
      flexShrink: 0,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--secondary-100)',
      color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      fontWeight: 500,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '11px',
      color: 'var(--text-muted)',
      marginTop: '2px'
    }
  }, /*#__PURE__*/React.createElement("span", null, when), /*#__PURE__*/React.createElement("span", null, "\u2022"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '3px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 12
  }), mins, " min")))))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-section)',
      fontWeight: 700,
      margin: '26px 0 12px'
    }
  }, "Keep improving"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, [['Track your errors', 'View your error patterns and get personalised practice', 'alert-circle', 'warn', 'var(--danger-100)', 'var(--danger-600)'], ['Flash cards', 'Master grammar, culture, and pronunciation rules', 'sparkles', 'tint', 'var(--primary-100)', 'var(--primary-600)']].map(([t, d, ic, tone, bg, fg]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    tone: tone,
    padding: "16px",
    interactive: true,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: bg,
      color: fg,
      borderRadius: 'var(--radius-full)',
      padding: '10px',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '14px',
      fontWeight: 700
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      color: 'var(--text-muted)',
      marginTop: '2px',
      lineHeight: 1.4
    }
  }, d)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 20
  }))))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/PracticeScreen.jsx
try { (() => {
function PracticeScreen({
  onOpenTasks
}) {
  const {
    Icon,
    Card,
    Pill,
    ProgressBar
  } = SG;
  const MODES = [['Conversation Tasks', 'Guided speaking challenges by topic', 'check', '3/18 done', 'var(--primary-50)', 'var(--primary-600)', true], ['Real-life Scenarios', 'Sharpen pronunciation with real-life scenarios', 'mic', '8 scenarios', 'var(--violet-50)', 'var(--violet-600)', false], ['Vocabulary & Idioms', 'Master the words and expressions you need', 'book-open', '12/40 mastered', 'var(--info-50)', 'var(--info-600)', false], ['Stories', 'Read level-matched stories aloud, then chat about them', 'book-marked', '6 stories', 'var(--indigo-50)', 'var(--indigo-600)', false], ['Speak To Hire', '30-hour challenge for a BPO referral', 'award', 'Active', 'var(--violet-100)', 'var(--violet-700)', false], ['Flash Cards', 'Master grammar, culture, and pronunciation rules', 'zap', 'Micro-learning', 'var(--flame-50)', 'var(--flame-600)', false]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      padding: '0 0 var(--screen-padding-bottom)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderBottom: '1px solid var(--border-default)',
      padding: '8px 20px 22px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-screen-title)',
      fontWeight: 700,
      margin: '0 0 4px'
    }
  }, "Practicing Lab"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13px',
      color: 'var(--text-muted)',
      margin: '0 0 16px'
    }
  }, "Your hub for guided speaking, pronunciation, and vocabulary."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      background: 'var(--secondary-50)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      padding: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-micro)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)',
      marginBottom: '3px'
    }
  }, "Level"), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--primary-100)',
      color: 'var(--primary-700)',
      borderRadius: '6px',
      padding: '2px 10px',
      fontSize: '13px',
      fontWeight: 700
    }
  }, "A1")), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '1px',
      height: '32px',
      background: 'var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '5px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-micro)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, "Progress"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      fontWeight: 700,
      color: 'var(--secondary-600)'
    }
  }, "3/18")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 17,
    fill: "brandLight",
    track: "var(--border-default)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, MODES.map(([title, desc, icon, progress, bg, fg, live]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    tone: "outline",
    interactive: true,
    elevation: "none",
    onClick: live ? onOpenTasks : undefined,
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '48px',
      height: '48px',
      borderRadius: 'var(--radius-xl)',
      background: bg,
      color: fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24
  })), /*#__PURE__*/React.createElement(Pill, {
    size: "sm"
  }, progress)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-card-title)',
      fontWeight: 700,
      margin: '0 0 4px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13px',
      color: 'var(--text-muted)',
      lineHeight: 1.45,
      margin: '0 0 14px'
    }
  }, desc), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '13px',
      fontWeight: 500,
      color: 'var(--text-subtle)'
    }
  }, "Open mode", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  }))))));
}
window.PracticeScreen = PracticeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/PracticeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/ProfileScreen.jsx
try { (() => {
function ProfileScreen({
  onBack
}) {
  const {
    Icon,
    Card,
    Avatar,
    Pill,
    Button,
    IconButton,
    AchievementBadge,
    ListRow
  } = SG;
  const STATS = [['24 h', 'Speaking time'], ['40', 'Tasks done'], ['3', 'Certificates']];
  const BADGES = [['Streak Champion', '23 of 30 days', 'flame', false], ['Grammar Guru', '90% on tests', 'check', false], ['Word Wizard', '68 of 100 words', 'book-open', true], ['Conversation Master', '12 of 20 sessions', 'message-circle', true]];
  const ACTIVITY = [['AI call with Sarah', 'Today, 2:30 PM', '+30 XP', 'bot'], ['Shadowing · Market Day', 'Yesterday', '92%', 'mic'], ['Peer call with Emma', '2 days ago', '+45 XP', 'users'], ['B1 certificate issued', '12 Aug 2026', '78/100', 'award']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      padding: '4px 20px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      paddingTop: '48px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'none',
      border: 0,
      color: 'var(--secondary-600)',
      cursor: 'pointer',
      display: 'flex',
      padding: '6px',
      marginLeft: '-6px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, "Back to Home")), /*#__PURE__*/React.createElement(Card, {
    radius: "var(--radius-4xl)",
    padding: "lg",
    elevation: "hairline",
    style: {
      margin: '12px 0 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '18px'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "AH",
    size: "xl"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      fontWeight: 700,
      margin: 0
    }
  }, "Ahmed Hassan"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13px',
      color: 'var(--text-muted)',
      margin: '3px 0 0'
    }
  }, "Arabic \u2192 English \xB7 B1"), /*#__PURE__*/React.createElement(Pill, {
    tone: "brandSoft",
    icon: "flame",
    size: "sm",
    style: {
      marginTop: '8px',
      fontWeight: 700
    }
  }, "23-day streak"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    fullWidth: true,
    style: {
      minHeight: '44px',
      borderRadius: 'var(--radius-xl)',
      color: 'var(--secondary-600)',
      border: '1px solid var(--border-default)',
      fontWeight: 700,
      fontSize: '13px'
    }
  }, "Edit profile"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "settings",
    tone: "outline",
    size: 44,
    label: "Settings"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      marginBottom: '26px'
    }
  }, STATS.map(([v, l]) => /*#__PURE__*/React.createElement(Card, {
    key: l,
    padding: "sm",
    elevation: "hairline",
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      fontWeight: 700
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      color: 'var(--text-muted)',
      marginTop: '3px'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: '12px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-card-title)',
      fontWeight: 700,
      margin: 0
    }
  }, "Badges"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      fontWeight: 600,
      color: 'var(--primary-600)'
    }
  }, "2 of 4 earned")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: '12px',
      marginBottom: '26px'
    }
  }, BADGES.map(([name, meta, icon, locked]) => /*#__PURE__*/React.createElement(AchievementBadge, {
    key: name,
    name: name,
    description: meta,
    icon: icon,
    locked: locked
  }))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-card-title)',
      fontWeight: 700,
      margin: '0 0 12px'
    }
  }, "Recent activity"), /*#__PURE__*/React.createElement(Card, {
    radius: "18px",
    padding: "6px 16px",
    elevation: "hairline"
  }, ACTIVITY.map(([title, when, value, icon], i) => /*#__PURE__*/React.createElement(ListRow, {
    key: title,
    icon: icon,
    title: title,
    hint: when,
    value: value,
    divider: i < ACTIVITY.length - 1
  }))));
}
window.ProfileScreen = ProfileScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/ProfileScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/ReportsScreen.jsx
try { (() => {
function ReportsScreen() {
  const {
    Icon,
    Card,
    Pill,
    ProgressBar,
    Button
  } = SG;
  const WEEK = [['Mon', 35], ['Tue', 20], ['Wed', 50], ['Thu', 0], ['Fri', 45], ['Sat', 30], ['Sun', 40]];
  const SKILLS = [['Fluency', 84, 'var(--primary-600)'], ['Vocabulary', 79, 'var(--primary-500)'], ['Grammar', 71, 'var(--accent-500)'], ['Pronunciation', 62, 'var(--warning-500)']];
  const ERRORS = [['Past simple endings', '12 times', 'I go to the market yesterday', 'I went to the market yesterday', 'Shadowing · Market Day'], ['Articles before nouns', '9 times', 'She is teacher', 'She is a teacher', 'AI session with Sarah']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      padding: '4px 20px var(--screen-padding-bottom)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      margin: '12px 0 20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '48px',
      height: '48px',
      borderRadius: 'var(--radius-3xl)',
      background: 'var(--info-100)',
      color: 'var(--info-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chart-bar",
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-page-title)',
      fontWeight: 700,
      margin: 0
    }
  }, "Reports"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13px',
      color: 'var(--text-muted)',
      margin: '2px 0 0'
    }
  }, "Week of 17\u201323 August"))), /*#__PURE__*/React.createElement(Card, {
    radius: "var(--radius-4xl)",
    elevation: "hairline",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '18px',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '96px',
      height: '96px',
      flexShrink: 0,
      borderRadius: 'var(--radius-full)',
      background: 'conic-gradient(#7c3aed 0% 78%, #ede9fe 78% 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '74px',
      height: '74px',
      borderRadius: 'var(--radius-full)',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 700,
      lineHeight: 1
    }
  }, "78"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-micro)',
      fontWeight: 600,
      color: 'var(--text-subtle)'
    }
  }, "SCORE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "success",
    icon: "trending-up",
    size: "sm",
    style: {
      marginBottom: '8px'
    }
  }, "+6 vs last week"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13px',
      color: 'var(--secondary-600)',
      lineHeight: 1.5,
      margin: 0
    }
  }, "Fluency is up. Pronunciation of consonant clusters is still the weakest area."))), /*#__PURE__*/React.createElement(Card, {
    radius: "var(--radius-4xl)",
    elevation: "hairline",
    style: {
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-card-title)',
      fontWeight: 700,
      margin: 0
    }
  }, "Speaking time"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--text-muted)'
    }
  }, "3 h 40 m this week")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: '10px',
      height: '110px'
    }
  }, WEEK.map(([day, mins]) => /*#__PURE__*/React.createElement("div", {
    key: day,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      height: '100%',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-micro)',
      fontWeight: 600,
      color: 'var(--text-subtle)'
    }
  }, mins ? mins + 'm' : '—'), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: Math.max(4, mins / 50 * 72) + 'px',
      borderRadius: '8px',
      background: mins ? 'var(--primary-500)' : 'var(--secondary-100)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      fontWeight: mins ? 600 : 400,
      color: mins ? 'var(--secondary-600)' : 'var(--text-subtle)'
    }
  }, day))))), /*#__PURE__*/React.createElement(Card, {
    radius: "var(--radius-4xl)",
    elevation: "hairline",
    style: {
      marginBottom: '24px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-card-title)',
      fontWeight: 700,
      margin: '0 0 16px'
    }
  }, "Skills"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, SKILLS.map(([name, v, color]) => /*#__PURE__*/React.createElement(ProgressBar, {
    key: name,
    value: v,
    fill: color,
    label: name,
    valueLabel: v + '/100'
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '12px',
      color: 'var(--warning-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert-circle",
    size: 18
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-card-title)',
      fontWeight: 700,
      color: 'var(--text-heading)',
      margin: 0
    }
  }, "Error patterns")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      marginBottom: '20px'
    }
  }, ERRORS.map(([name, count, wrong, right, source]) => /*#__PURE__*/React.createElement(Card, {
    key: name,
    padding: "16px",
    elevation: "hairline",
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '10px',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-row-title)',
      fontWeight: 700,
      margin: 0
    }
  }, name), /*#__PURE__*/React.createElement(Pill, {
    tone: "danger",
    size: "sm"
  }, count)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      flexWrap: 'wrap',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      background: 'var(--danger-50)',
      color: 'var(--danger-700)',
      borderRadius: 'var(--radius-md)',
      padding: '5px 10px',
      fontSize: '12px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x-circle",
    size: 14
  }), wrong), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      background: 'var(--success-50)',
      color: 'var(--success-700)',
      borderRadius: 'var(--radius-md)',
      padding: '5px 10px',
      fontSize: '12px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 14
  }), right)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: '10px',
      borderTop: '1px solid var(--secondary-50)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      fontWeight: 500,
      color: 'var(--text-subtle)'
    }
  }, source), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '11px',
      fontWeight: 700,
      color: 'var(--primary-600)'
    }
  }, "Drill this", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14
  })))))), /*#__PURE__*/React.createElement(Button, {
    size: "cta"
  }, "Build a practice set from these"));
}
window.ReportsScreen = ReportsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/ReportsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/TasksScreen.jsx
try { (() => {
function TasksScreen({
  onBack
}) {
  const {
    Icon,
    Card,
    SearchInput,
    FilterChip
  } = SG;
  const [filter, setFilter] = React.useState('all');
  const [done, setDone] = React.useState({
    '4': true
  });
  const GROUPS = [['Personal & social', [['1', 'Meet someone new', 'Role-play a conversation where you introduce yourselves and exchange basic personal details.', 'high'], ['2', 'Talk about your families', 'Have a conversation with a partner about your family members. Ask and answer questions about who is in your family and what they do.', 'medium'], ['3', 'Discuss daily routines', 'Take turns describing your daily routine to each other, from the moment you wake up.', 'low'], ['4', 'Share your hobbies', 'Have a simple conversation about your hobbies and what you like to do for fun.', 'medium']]], ['Simple descriptions', [['7', 'Describe your favorite rooms', 'In a conversation, describe your favorite room to your partner and ask them about theirs.', 'high'], ['8', 'Describe a person', "Have a conversation with a partner where you describe a friend or family member's appearance and personality.", 'medium'], ['9', 'Talk about pets', 'Ask your partner if they have any pets and tell them about yours.', 'low']]]];
  const PRIO = {
    high: ['var(--danger-100)', 'var(--danger-800)'],
    medium: ['var(--warning-100)', 'var(--warning-800)'],
    low: ['var(--secondary-100)', 'var(--secondary-600)']
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      padding: '0 0 var(--screen-padding-bottom)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: '#fff',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '54px 20px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'none',
      border: 0,
      color: 'var(--secondary-600)',
      cursor: 'pointer',
      display: 'flex',
      padding: '6px',
      marginLeft: '-6px',
      borderRadius: 'var(--radius-full)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 20
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '19px',
      fontWeight: 700,
      margin: 0
    }
  }, "Conversation Tasks")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px'
    }
  }, /*#__PURE__*/React.createElement(SearchInput, {
    placeholder: "Search tasks...",
    style: {
      marginBottom: '12px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      marginBottom: '20px'
    }
  }, [['all', 'All'], ['active', 'Active'], ['completed', 'Completed']].map(([id, label]) => /*#__PURE__*/React.createElement(FilterChip, {
    key: id,
    active: filter === id,
    onClick: () => setFilter(id)
  }, label))), /*#__PURE__*/React.createElement(Card, {
    tone: "tint",
    padding: "sm",
    radius: "var(--radius-2xl)",
    elevation: "none",
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '8px',
      color: 'var(--primary-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, "Recommended for you")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '12px',
      color: 'var(--primary-800)',
      lineHeight: 1.5,
      margin: 0
    }
  }, "Three high-priority tasks matched to your level: Meet someone new, Describe your favorite rooms, and Talk about your families.")), GROUPS.map(([name, items]) => {
    const shown = items.filter(([id]) => filter === 'all' || (filter === 'completed' ? done[id] : !done[id]));
    return /*#__PURE__*/React.createElement("div", {
      key: name,
      style: {
        marginBottom: '22px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '10px'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-row-title)',
        fontWeight: 700,
        margin: 0
      }
    }, name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '11px',
        color: 'var(--text-muted)'
      }
    }, items.filter(([id]) => done[id]).length, "/", items.length)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }
    }, shown.map(([id, title, desc, prio]) => {
      const on = !!done[id];
      const [bg, fg] = PRIO[prio];
      return /*#__PURE__*/React.createElement("div", {
        key: id,
        onClick: () => setDone(s => Object.assign({}, s, {
          [id]: !s[id]
        })),
        style: {
          display: 'flex',
          gap: '12px',
          background: '#fff',
          border: '1px solid ' + (on ? 'var(--success-100)' : 'var(--border-subtle)'),
          borderRadius: 'var(--radius-2xl)',
          padding: '14px',
          cursor: 'pointer',
          boxShadow: '0 1px 2px rgba(15,23,42,0.04)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: '22px',
          height: '22px',
          borderRadius: 'var(--radius-full)',
          flexShrink: 0,
          marginTop: '1px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: on ? 'var(--success-500)' : '#fff',
          border: on ? 0 : '2px solid var(--border-strong)',
          color: '#fff'
        }
      }, on ? /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 14
      }) : null), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '3px'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: '13px',
          fontWeight: 600,
          color: on ? 'var(--text-subtle)' : 'var(--text-heading)',
          textDecoration: on ? 'line-through' : 'none'
        }
      }, title), /*#__PURE__*/React.createElement("span", {
        style: {
          background: bg,
          color: fg,
          borderRadius: 'var(--radius-full)',
          padding: '2px 7px',
          fontSize: '9px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          flexShrink: 0
        }
      }, prio)), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: '12px',
          color: 'var(--text-muted)',
          lineHeight: 1.45,
          margin: 0
        }
      }, desc)), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--border-strong)',
          display: 'flex',
          alignSelf: 'center'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-right",
        size: 18
      })));
    })));
  })));
}
window.TasksScreen = TasksScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/TasksScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.FilterChip = __ds_scope.FilterChip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.SegmentedTabs = __ds_scope.SegmentedTabs;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.AchievementBadge = __ds_scope.AchievementBadge;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.Celebration = __ds_scope.Celebration;

__ds_ns.ConnectingState = __ds_scope.ConnectingState;

__ds_ns.CountUp = __ds_scope.CountUp;

__ds_ns.FlipCard = __ds_scope.FlipCard;

__ds_ns.GeneratingState = __ds_scope.GeneratingState;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.ScoreRing = __ds_scope.ScoreRing;

__ds_ns.TimeBudgetRing = __ds_scope.TimeBudgetRing;

__ds_ns.ViewTransition = __ds_scope.ViewTransition;

__ds_ns.Waveform = __ds_scope.Waveform;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.GenieOrb = __ds_scope.GenieOrb;

__ds_ns.HeroCard = __ds_scope.HeroCard;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.PhoneFrame = __ds_scope.PhoneFrame;

__ds_ns.StatTile = __ds_scope.StatTile;

})();
