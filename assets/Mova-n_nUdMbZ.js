import{t as e}from"./jsx-runtime-C0r-jb24.js";import{i as t,n,o as r,r as i}from"./index-q1YVZW9W.js";import{n as a,t as o}from"./NextProject-Dmh9Y2zG.js";import{n as s,r as c,t as l}from"./DesignMd-B2hOifVl.js";var u=`---
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
- Ceramic red \`{colors.ceramic}\` is the brand surface — every page sits on it.
- Earthy neutrals (Sand, Clay) frame the products without competing with them.
- Two blues (Dark, Accent) are the only cool tones — used sparingly for emphasis.
- One typeface, Afacad, in a quiet hierarchy. Inter only for technical values.
- Soft, rounded shapes echo the forms of the vases. No sharp corners, no shadows.

## Colors
### Brand
- **Ceramic** (\`{colors.ceramic}\` — \`#651A14\`): Page background and brand surface.
- **Sand** (\`{colors.sand}\` — \`#A3948C\`): Card borders and soft neutral surfaces. Not for small text on Ceramic (contrast 4.2:1).
- **Clay** (\`{colors.clay}\` — \`#654D40\`): Product backdrops, earthy mid-tone. Surface only, never text on Ceramic.

### Accent
- **Dark** (\`{colors.dark}\` — \`#02304B\`): Background of primary actions, always with white text (13.7:1). Never use Dark as text on Ceramic (1.1:1, unreadable).
- **Accent** (\`{colors.accent}\` — \`#92BFD8\`): Labels, eyebrows and highlights (6.2:1 on Ceramic).

### Text
- **On Ceramic** (\`{colors.on-ceramic}\` — \`#FFFFFF\`): Default text and headings (12.3:1).
- **Muted** (\`{colors.muted}\` — \`#EBCECC\`): Captions, color values, meta text (8.3:1).

## Typography
| Token                  | Font   | Size | Weight | Line Height | Use                |
|------------------------|--------|------|--------|-------------|--------------------|
| \`{typography.h2}\`      | Afacad | 32px | 400    | 100%        | Section headlines  |
| \`{typography.h3}\`      | Afacad | 24px | 700    | 150%        | Sub-sections       |
| \`{typography.body}\`    | Afacad | 20px | 400    | 130%        | Body copy, buttons |
| \`{typography.caption}\` | Inter  | 13px | 300    | 100%        | Color values, meta |

Hierarchy comes from size and weight, never from color: headings and body share On Ceramic, only captions step down to Muted.

## Layout
- Canvas 1440px, content width 1320px, \`{spacing.page-margin}\` (60px) side margins.
- \`{spacing.section-gap}\` (100px) between sections, \`{spacing.stack-sm}\`–\`{spacing.stack}\` (20–24px) inside sections.
- Product grid 4-up with 330px tiles.

### Breakpoints
| Name    | Width      | Key Changes                      |
|---------|------------|----------------------------------|
| Mobile  | < 768px    | Grid 1-up, navigation collapses. |
| Tablet  | 768–1023px | Grid 2-up.                       |
| Desktop | ≥ 1024px   | Grid 4-up, full layout.          |

## Shapes
- \`{rounded.md}\` 12px — buttons and chips.
- \`{rounded.lg}\` 24px — color cards and product tiles.
- \`{rounded.xl}\` 50px — large content panels.
- Borders: 1px On Ceramic on secondary buttons, 2px Sand on color cards.

## Components
- **Primary button** (\`{components.button-primary}\`): Dark fill, white Afacad body text, \`{rounded.md}\`. One per view, for the main action.
- **Secondary button** (\`{components.button-secondary}\`): Transparent with a 1px On Ceramic border. For everything that is not the main action.
- **Product tile** (\`{components.product-tile}\`): Clay backdrop with the vase cut out on top, \`{rounded.lg}\`. Collection name as eyebrow, vase name and price below.
- **Color card** (\`{components.color-card}\`): Shows a palette color with its HEX/RGB values in Muted caption text, 2px Sand border, \`{rounded.lg}\`.
- **Eyebrow** (\`{components.eyebrow}\`): Small Accent label above a title, e.g. the collection name.

## Do's and Don'ts
- Do let the products breathe — generous whitespace, only what's necessary.
- Do use the Accent blue sparingly, for labels and highlights only.
- Do keep body text in On Ceramic or Muted — both pass WCAG AA on Ceramic.
- Don't introduce saturated colors outside the palette.
- Don't put Dark, Clay or Sand text on Ceramic.
- Don't add shadows or sharp corners.
`,d=e();function f(){return(0,d.jsxs)(`div`,{className:`Mova`,children:[(0,d.jsx)(r,{}),(0,d.jsxs)(`main`,{className:`project`,children:[(0,d.jsx)(a,{name:`Mova`,logo:`/portfolio/project/Mova/logo.svg`,img:`/portfolio/project/Mova/cover.webp`,description:(0,d.jsxs)(d.Fragment,{children:[`Mova ist ein Online-Shop-Konzept für handgefertigte Keramikvasen, das ein digitales Zuhause schafft, das genauso ruhig und zeitlos wirkt wie die Produkte selbst.`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`Bei Mova werden Wert und Qualität ernst genommen. Ein Geschäft, das nicht nur den Einkauf erleichtert, sondern auch die Ästhetik der Marke durch visuelle Sprache kommuniziert.`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`Mein Ziel war es, Ehrlichkeit in den digitalen Raum zu bringen. Klares Layout, intuitive Navigation, nur das Notwendige.`]}),descriptionEn:(0,d.jsxs)(d.Fragment,{children:[`Mova is an e-commerce concept for handcrafted ceramic vases, creating a digital home that feels just as calm and timeless as the products themselves.`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`At Mova, value and quality are taken seriously. A store that not only makes shopping easier, but also communicates the brand's aesthetic through visual language.`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`My goal was to bring honesty into the digital space. Clean layout, intuitive navigation, only what's necessary.`]}),media:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`img`,{loading:`lazy`,decoding:`async`,className:`img-project no-mobile`,src:`/portfolio/project/Mova/bilder/01.webp`,alt:`bild`}),(0,d.jsx)(`img`,{loading:`lazy`,decoding:`async`,className:`img-project only-mobile`,src:`/portfolio/project/Mova/bilder/02.webp`,alt:`bild`})]})}),(0,d.jsx)(i,{textTitel:`Ästhetik. Erdig. Zeitlos`,textSubtitel:`Design`,textParagraph:(0,d.jsxs)(d.Fragment,{children:[`Für das Design habe ich eine warme und erdige Bildsprache entwickelt, die die natürliche Ruhe der handgefertigten Vasen widerspiegelt.`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`Die zwei Blautöne in der Palette wurden bewusst für einen Hauch von Eleganz und Sanftheit gewählt, während die erdigen Farben die organischen Formen der Kollektionen betonen und dieselbe Klarheit und Beständigkeit vermitteln, die auch die Marke selbst verkörpert.`]})}),(0,d.jsx)(t,{textTitel:`Aesthetic. Earthy. Timeless`,textSubtitel:`Design`,textParagraph:(0,d.jsxs)(d.Fragment,{children:[`For the design, I developed a warm and earthy visual language that reflects the natural calm of the handcrafted vases.`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`The two shades of blue in the palette were deliberately chosen for a touch of elegance and softness, while the earthy tones highlight the organic shapes of the collections and convey the same clarity and consistency that the brand itself embodies.`]})}),(0,d.jsx)(s,{visual:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`img`,{loading:`lazy`,decoding:`async`,className:`img-project no-mobile`,src:`/portfolio/project/Mova/bilder/05.webp`,alt:`bild`}),(0,d.jsx)(`img`,{loading:`lazy`,decoding:`async`,className:`img-project only-mobile`,src:`/portfolio/project/Mova/bilder/06.webp`,alt:`bild`}),(0,d.jsx)(`img`,{loading:`lazy`,decoding:`async`,className:`img-project padding no-mobile`,src:`/portfolio/project/Mova/bilder/07.webp`,alt:`bild`}),(0,d.jsx)(`img`,{loading:`lazy`,decoding:`async`,className:`img-project padding only-mobile`,src:`/portfolio/project/Mova/bilder/08.webp`,alt:`bild`}),(0,d.jsx)(`img`,{loading:`lazy`,decoding:`async`,className:`img-project padding no-mobile`,src:`/portfolio/project/Mova/bilder/03.webp`,alt:`bild`}),(0,d.jsx)(`img`,{loading:`lazy`,decoding:`async`,className:`img-project padding only-mobile`,src:`/portfolio/project/Mova/bilder/04.webp`,alt:`bild`}),(0,d.jsx)(c,{})]}),md:(0,d.jsx)(l,{file:`mova/DESIGN.md`,content:u})}),(0,d.jsx)(i,{textTitel:`Components`,textSubtitel:`Tracking`,textTheme:`Store-Übersicht`,textParagraph:(0,d.jsxs)(d.Fragment,{children:[`Die Store-Seite zeigt alle Vasen aus den verschiedenen Kollektionen in einem übersichtlichen Grid.`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`Jedes Produkt wird mit Kollektionsname, Vasenname und Preis angezeigt, sodass Nutzer schnell einen Überblick über das gesamte Sortiment erhalten und gezielt nach ihrem Favoriten stöbern können.`]})}),(0,d.jsx)(t,{textTitel:`Components`,textSubtitel:`Tracking`,textTheme:`Store Overview`,textParagraph:(0,d.jsxs)(d.Fragment,{children:[`The store page displays all vases from the different collections in a clean grid layout.`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`Each product shows the collection name, vase name, and price, giving users a quick overview of the full range and making it easy to browse for their favorite piece.`]})}),(0,d.jsx)(`img`,{loading:`lazy`,decoding:`async`,src:`/portfolio/project/Mova/bilder/09.gif`,alt:``,className:`img-project padding video01`}),(0,d.jsx)(i,{textTheme:`PDP (Product Detail Page)`,textParagraph:(0,d.jsxs)(d.Fragment,{children:[`Auf der Produktseite werden alle relevanten Informationen zur ausgewählten Vase übersichtlich dargestellt: Name, Preis, verfügbare Farboptionen sowie Maße, Beschreibung und Material in separaten Tabs.`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`Am unteren Rand der Seite werden zusätzlich weitere Produkte aus derselben Kollektion gezeigt, um Nutzer zum Weiterstöbern einzuladen.`]})}),(0,d.jsx)(t,{textTheme:`PDP (Product Detail Page)`,textParagraph:(0,d.jsxs)(d.Fragment,{children:[`The product page displays all relevant information about the selected vase in a clear layout: name, price, available color options, as well as dimensions, description, and material shown in separate tabs.`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`At the bottom of the page, additional products from the same collection are featured, inviting users to keep browsing.`]})}),(0,d.jsx)(`img`,{loading:`lazy`,decoding:`async`,className:`img-project padding`,src:`/portfolio/project/Mova/bilder/10.webp`,alt:`bild`}),(0,d.jsx)(i,{textTheme:`Einkaufstasche & Bestellung`,textParagraph:(0,d.jsxs)(d.Fragment,{children:[`In der Einkaufstasche werden alle ausgewählten Produkte übersichtlich mit Bild, Name, Kollektion, Farboption, Menge und Preis dargestellt. Nutzer:innen können die Menge direkt anpassen und behalten den Gesamtpreis jederzeit im Blick.`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`Im nächsten Schritt führt der Bestellprozess durch Versandinformationen, Lieferadresse und Zahlungsmethode. Wählbare Versandoptionen mit unterschiedlichen Lieferzeiten sowie ein Feld für Rabattcodes sorgen für einen klaren, geführten Checkout-Flow bis zum Abschluss der Bestellung.`]})}),(0,d.jsx)(t,{textTheme:`Shopping Bag & Checkout`,textParagraph:(0,d.jsxs)(d.Fragment,{children:[`The shopping bag clearly displays all selected products with image, name, collection, color option, quantity and price. Users can adjust the quantity directly and always keep track of the total price.`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`The next step guides users through shipping information, delivery address and payment method. Selectable shipping options with different delivery times, along with a promo code field, ensure a clear, guided checkout flow through to order completion.`]})}),(0,d.jsx)(`img`,{loading:`lazy`,decoding:`async`,src:`/portfolio/project/Mova/bilder/11.gif`,alt:``,className:`img-project padding video01`}),(0,d.jsx)(`img`,{loading:`lazy`,decoding:`async`,className:`logo-pattern`,src:`/portfolio/project/Mova/logo.svg`,alt:`logo`}),(0,d.jsx)(`img`,{loading:`lazy`,decoding:`async`,className:`img-project padding no-mobile`,src:`/portfolio/project/Mova/bilder/12.webp`,alt:`bild`}),(0,d.jsx)(`img`,{loading:`lazy`,decoding:`async`,className:`img-project padding only-mobile`,src:`/portfolio/project/Mova/bilder/13.webp`,alt:`bild`}),(0,d.jsx)(o,{thisProject:`Mova`})]}),(0,d.jsx)(n,{})]})}export{f as default};