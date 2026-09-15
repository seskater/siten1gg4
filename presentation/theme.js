/**
 * Shared palette, geometry and slide primitives for both decks
 * (build.js — full 15-slide version; build4.js — condensed 4-page version).
 */

// ---------------------------------------------------------------- palette ---
const C = {
  ink: '0E1A2B', // dominant dark
  navy: '182E4A', // dark card
  navySoft: '24405F', // dark card, lighter
  paper: 'F5F7FA', // light background
  white: 'FFFFFF',
  line: 'DDE3EC',
  red: 'D42A3C', // accent: action / overdue
  amber: 'E8A33D', // accent: approaching deadline
  green: '2E9E6B', // accent: on time
  muted: '7B8AA0',
  mutedDark: '9FB0C4',
  redSoft: 'FBDDE1', // body text on a red ground
};

const F = { head: 'Cambria', body: 'Calibri' };
const W = 13.3;
const H = 7.5;
const M = 0.62; // side margin

// ---------------------------------------------------------------- helpers ---
const shadow = (o = {}) => ({
  type: 'outer', color: '0E1A2B', blur: 10, offset: 2, angle: 90, opacity: 0.1, ...o,
});

/** Full-bleed background rectangle. */
function bg(slide, color) {
  slide.addShape('rect', { x: 0, y: 0, w: W, h: H, fill: { color }, line: { color, width: 0 } });
}

/** Slide title + optional kicker, light or dark ground. */
function title(slide, text, opts = {}) {
  const dark = !!opts.dark;
  const y = opts.y != null ? opts.y : 0.5;
  if (opts.kicker) {
    slide.addText(opts.kicker.toUpperCase(), {
      x: M, y: y, w: W - 2 * M, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: 11, bold: true, charSpacing: 2.4,
      color: dark ? C.mutedDark : C.muted,
    });
  }
  slide.addText(text, {
    x: M, y: opts.kicker ? y + 0.34 : y, w: opts.w || W - 2 * M, h: opts.h || 0.82,
    isTextBox: true, margin: 0, fontFace: F.head, fontSize: opts.size || 34, bold: true,
    color: dark ? C.white : C.ink, valign: 'top',
  });
}

/** Sub-line under a title. */
function lede(slide, text, y, opts = {}) {
  slide.addText(text, {
    x: opts.x != null ? opts.x : M, y, w: opts.w || W - 2 * M, h: opts.h || 0.5,
    isTextBox: true, margin: 0,
    fontFace: F.body, fontSize: opts.size || 14.5, color: opts.dark ? C.mutedDark : C.muted,
    lineSpacingMultiple: 1.15,
  });
}

/** Card with a subtle tint + shadow (no edge stripes). */
function card(slide, x, y, w, h, opts = {}) {
  slide.addShape('roundRect', {
    x, y, w, h, rectRadius: 0.07,
    fill: { color: opts.fill || C.white },
    line: { color: opts.line || C.line, width: opts.lineW != null ? opts.lineW : 0.75 },
    shadow: opts.shadow === false ? undefined : shadow(opts.shadowOpts),
  });
}

/** Circular badge holding a short glyph (number or 1–2 letters). */
function badge(slide, x, y, d, label, opts = {}) {
  slide.addShape('ellipse', {
    x, y, w: d, h: d,
    fill: { color: opts.fill || C.red },
    line: { color: opts.fill || C.red, width: 0 },
  });
  slide.addText(String(label), {
    x, y, w: d, h: d, isTextBox: true, margin: 0, align: 'center', valign: 'middle',
    fontFace: F.body, fontSize: opts.size || 13, bold: true, color: opts.color || C.white,
  });
}

/** Small filled status dot — the repeating motif across both decks. */
function dot(slide, x, y, d, color) {
  slide.addShape('ellipse', { x, y, w: d, h: d, fill: { color }, line: { color, width: 0 } });
}

/** Heading + body text inside a card. */
function cardText(slide, x, y, w, head, body, opts = {}) {
  const dark = !!opts.dark;
  slide.addText(head, {
    x, y, w, h: opts.headH || 0.3, isTextBox: true, margin: 0,
    fontFace: F.body, fontSize: opts.headSize || 14.5, bold: true,
    color: dark ? C.white : C.ink,
  });
  if (body) {
    slide.addText(body, {
      x, y: y + (opts.headH || 0.3) + 0.06, w, h: opts.bodyH || 0.8, isTextBox: true, margin: 0,
      fontFace: F.body, fontSize: opts.bodySize || 11.5,
      color: dark ? C.mutedDark : C.muted, lineSpacingMultiple: 1.12,
    });
  }
}

/** Page number, bottom-right. */
function foot(slide, n, dark) {
  slide.addText(String(n), {
    x: W - M - 0.6, y: H - 0.52, w: 0.6, h: 0.25, isTextBox: true, margin: 0, align: 'right',
    fontFace: F.body, fontSize: 10, color: dark ? C.mutedDark : C.muted,
  });
}

module.exports = { C, F, W, H, M, shadow, bg, title, lede, card, badge, dot, cardText, foot };
