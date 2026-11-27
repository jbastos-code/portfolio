---
version: alpha
name: Mova
description: Online shop concept for handcrafted ceramic vases. Calm, earthy and timeless.
omitted:
  - section: Elevation & Depth
    reason: Not defined yet. Mova uses no shadows; depth comes from color and rounded shapes.
  - section: Motion & Micro-interaction
    reason: Not defined yet.
  - section: Voice & Content Strategy
    reason: Not defined yet.
colors:
  primary: "#651A14"
  ceramic: "{colors.primary}"
  sand: "#A3948C"
  clay: "#654D40"
  dark: "#02304B"
  accent: "#92BFD8"
  on-ceramic: "#FFFFFF"
  muted: "#EBCECC"
typography:
  h2:
    fontFamily: Afacad
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1
  h3:
    fontFamily: Afacad
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.5
  body:
    fontFamily: Afacad
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.3
  caption:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 300
    lineHeight: 1
rounded:
  md: 12px
  lg: 24px
  xl: 50px
spacing:
  page-margin: 60px
  section-gap: 100px
  stack: 24px
  stack-sm: 20px
components:
  button-primary:
    backgroundColor: "{colors.dark}"
    textColor: "{colors.on-ceramic}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
  button-secondary:
    textColor: "{colors.on-ceramic}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
  product-tile:
    backgroundColor: "{colors.clay}"
    textColor: "{colors.on-ceramic}"
    rounded: "{rounded.lg}"
  color-card:
    textColor: "{colors.on-ceramic}"
    rounded: "{rounded.lg}"
  eyebrow:
    textColor: "{colors.accent}"
    typography: "{typography.caption}"
  panel:
    backgroundColor: "{colors.ceramic}"
    rounded: "{rounded.xl}"
---

# Mova — DESIGN.md

## Overview
Mova is an online shop concept for handcrafted ceramic vases. The interface is calm, earthy and timeless: a digital home that feels as quiet as the products themselves. Warm clay tones carry the brand, two blues add a touch of elegance and softness. Clear layout, intuitive navigation, only what's necessary.

**Key Characteristics:**
- Ceramic red `{colors.ceramic}` is the brand surface — every page sits on it.
- Earthy neutrals (Sand, Clay) frame the products without competing with them.
- Two blues (Dark, Accent) are the only cool tones — used sparingly for emphasis.
- One typeface, Afacad, in a quiet hierarchy. Inter only for technical values.
- Soft, rounded shapes echo the forms of the vases. No sharp corners, no shadows.

## Colors
### Brand
- **Ceramic** (`{colors.ceramic}` — `#651A14`): Page background and brand surface.
- **Sand** (`{colors.sand}` — `#A3948C`): Card borders and soft neutral surfaces. Not for small text on Ceramic (contrast 4.2:1).
- **Clay** (`{colors.clay}` — `#654D40`): Product backdrops, earthy mid-tone. Surface only, never text on Ceramic.

### Accent
- **Dark** (`{colors.dark}` — `#02304B`): Background of primary actions, always with white text (13.7:1). Never use Dark as text on Ceramic (1.1:1, unreadable).
- **Accent** (`{colors.accent}` — `#92BFD8`): Labels, eyebrows and highlights (6.2:1 on Ceramic).

### Text
- **On Ceramic** (`{colors.on-ceramic}` — `#FFFFFF`): Default text and headings (12.3:1).
- **Muted** (`{colors.muted}` — `#EBCECC`): Captions, color values, meta text (8.3:1).

## Typography
| Token                  | Font   | Size | Weight | Line Height | Use                |
|------------------------|--------|------|--------|-------------|--------------------|
| `{typography.h2}`      | Afacad | 32px | 400    | 100%        | Section headlines  |
| `{typography.h3}`      | Afacad | 24px | 700    | 150%        | Sub-sections       |
| `{typography.body}`    | Afacad | 20px | 400    | 130%        | Body copy, buttons |
| `{typography.caption}` | Inter  | 13px | 300    | 100%        | Color values, meta |

Hierarchy comes from size and weight, never from color: headings and body share On Ceramic, only captions step down to Muted.

## Layout
- Canvas 1440px, content width 1320px, `{spacing.page-margin}` (60px) side margins.
- `{spacing.section-gap}` (100px) between sections, `{spacing.stack-sm}`–`{spacing.stack}` (20–24px) inside sections.
- Product grid 4-up with 330px tiles.

### Breakpoints
| Name    | Width      | Key Changes                      |
|---------|------------|----------------------------------|
| Mobile  | < 768px    | Grid 1-up, navigation collapses. |
| Tablet  | 768–1023px | Grid 2-up.                       |
| Desktop | ≥ 1024px   | Grid 4-up, full layout.          |

## Shapes
- `{rounded.md}` 12px — buttons and chips.
- `{rounded.lg}` 24px — color cards and product tiles.
- `{rounded.xl}` 50px — large content panels.
- Borders: 1px On Ceramic on secondary buttons, 2px Sand on color cards.

## Components
- **Primary button** (`{components.button-primary}`): Dark fill, white Afacad body text, `{rounded.md}`. One per view, for the main action.
- **Secondary button** (`{components.button-secondary}`): Transparent with a 1px On Ceramic border. For everything that is not the main action.
- **Product tile** (`{components.product-tile}`): Clay backdrop with the vase cut out on top, `{rounded.lg}`. Collection name as eyebrow, vase name and price below.
- **Color card** (`{components.color-card}`): Shows a palette color with its HEX/RGB values in Muted caption text, 2px Sand border, `{rounded.lg}`.
- **Eyebrow** (`{components.eyebrow}`): Small Accent label above a title, e.g. the collection name.

## Do's and Don'ts
- Do let the products breathe — generous whitespace, only what's necessary.
- Do use the Accent blue sparingly, for labels and highlights only.
- Do keep body text in On Ceramic or Muted — both pass WCAG AA on Ceramic.
- Don't introduce saturated colors outside the palette.
- Don't put Dark, Clay or Sand text on Ceramic.
- Don't add shadows or sharp corners.
