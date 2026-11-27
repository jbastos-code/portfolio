---
version: alpha
name: MyMixx
description: Muesli store where everyone mixes their own muesli, from the base to the toppings. Colorful, playful, bold.
colors:
  primary: "#9ABF11"
  green: "{colors.primary}"
  orange: "#F36513"
  yellow: "#F2BB16"
  blue: "#22DDF2"
  ink: "#000000"
  paper: "#FFFFFF"
  frost: "rgba(255, 255, 255, 0.5)"
typography:
  title:
    fontFamily: Baloo 2
    fontSize: 22px
    fontWeight: 700
    lineHeight: 0.8
  category:
    fontFamily: Baloo Thambi 2
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: Baloo Thambi 2
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.3
  button:
    fontFamily: Baloo 2
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.3
  small:
    fontFamily: Baloo 2
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1
rounded:
  card: 32px
  pill: 100px
spacing:
  page-x: 20px
  card-padding: 16px
  stack: 16px
  stack-sm: 12px
  section: 24px
motion:
  card-in:
    duration: 1500
    timingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
  fade:
    duration: 300
    timingFunction: ease
components:
  product-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: 16px
  product-card-added:
    backgroundColor: "{colors.green}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: 16px
  button-add:
    backgroundColor: "{colors.green}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    height: 40px
  button-remove:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    height: 40px
  button-start:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
  button-next:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
  portion-stepper:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
  category-tab:
    textColor: "{colors.ink}"
    typography: "{typography.category}"
    rounded: "{rounded.pill}"
  cart:
    backgroundColor: "{colors.green}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: 40px 20px 20px
---

# MyMixx — DESIGN.md

## Overview
MyMixx is a muesli store where everyone mixes their own personal muesli, from the base to the toppings. The interface is as colorful and varied as the ingredients: bright fruit colors, bold black outlines and rounded, sticker-like shapes. It should feel playful and free, like building something of your own, never like a technical order form.

**Key Characteristics:**
- Bright green `{colors.green}` is the brand color: start page, cart and every added ingredient.
- Four fruit colors (Green, Orange, Yellow, Blue) on white, always with black text.
- Everything interactive has a thick black outline (3px) — a cartoon, sticker-like look.
- Two Baloo fonts: Baloo 2 Bold for titles and buttons, Baloo Thambi 2 Regular for text.
- Mobile-first: one product card at a time, big touch targets, no clutter.

## Colors
### Brand
- **Green** (`{colors.green}` — `#9ABF11`): Brand surface (start page, cart) and the "added" state of a product. Also the "hinzufügen" button.
- **Orange** (`{colors.orange}` — `#F36513`): Remove and forward actions — "entfernen", "Weiter", "Bestellen".
- **Yellow** (`{colors.yellow}` — `#F2BB16`): The start call to action ("MyMixx aufbauen") and the cart button ("MyMixx" / "Zurück").
- **Blue** (`{colors.blue}` — `#22DDF2`): Accent for illustrations and the packaging. Not used for actions.

### Neutrals
- **Ink** (`{colors.ink}` — `#000000`): All text, icons and outlines.
- **Paper** (`{colors.paper}` — `#FFFFFF`): Product cards and the product choice page.
- **Frost** (`{colors.frost}` — white 50%): Overlay behind the cart, combined with a 15px background blur.

### Contrast
Black text works on every color: 9.8:1 on Green, 6.7:1 on Orange, 11.9:1 on Yellow, 12.7:1 on Blue. White text fails on all of them (1.7–3.1:1), so text is always black.

## Typography
| Token                   | Font           | Size | Weight | Line Height | Use                          |
|-------------------------|----------------|------|--------|-------------|------------------------------|
| `{typography.title}`    | Baloo 2        | 22px | 700    | 80%         | Product names, prices        |
| `{typography.category}` | Baloo Thambi 2 | 24px | 400    | 130%        | Category tabs (22px tablet, 18px mobile) |
| `{typography.body}`     | Baloo Thambi 2 | 18px | 400    | 130%        | Body copy, portions          |
| `{typography.button}`   | Baloo 2        | 20px | 700    | 130%        | Buttons, cart totals         |
| `{typography.small}`    | Baloo 2        | 14px | 700    | 100%        | Small buttons inside the cart |

Titles use a tight line height (0.8) so the rounded letters sit close together, like on the packaging. The active category tab switches to Baloo 2 Bold.

## Layout
- Mobile-first. Every screen is one viewport high (100svh) and does not scroll as a page.
- Product cards are `calc(100vw - 110px)` wide, max 340px, centered. One card at a time, swiped horizontally.
- `{spacing.page-x}` (20px) side padding on mobile, 10vw on tablet and desktop.
- `{spacing.card-padding}` (16px) inside cards, `{spacing.stack}` (16px) between buttons, `{spacing.section}` (24px) between cart categories.

### Breakpoints
| Name    | Width       | Key Changes                                   |
|---------|-------------|-----------------------------------------------|
| Mobile  | < 768px     | Category tabs scroll sideways, 20px padding.  |
| Tablet  | 768–1439px  | Tabs centered, 10vw padding, bigger logo.     |
| Desktop | ≥ 1440px    | Same as tablet.                               |

## Elevation & Depth
- No shadows. Depth comes from the 3px black outlines and from layering.
- The cart opens as a layer above the page: a Frost overlay (`{colors.frost}` + 15px backdrop blur) and the green cart card on top.
- On the start page, three cards fan out with a slight rotation (−10° / +10°) to suggest a stack.

## Shapes
- `{rounded.card}` 32px — product cards and the cart.
- `{rounded.pill}` — all buttons, the portion stepper and category tabs.
- Borders: 3px black on cards, buttons and the cart. 2px black on the portion stepper.

## Motion & Micro-interaction
- `{motion.card-in}` — 1.5s with a spring overshoot: the start cards scale in from 50% and fan out.
- `{motion.fade}` — 0.3s: product images fade when a card changes state.
- Adding a product switches the whole card from Paper to Green and the button from "hinzufügen" (Green) to "entfernen" (Orange). The state change is the feedback; no toasts.

## Voice & Content Strategy
- German, informal ("du"), short and active: "Kreiere dein individuelles Müsli", "MyMixx aufbauen".
- Card actions are verbs in lower case ("hinzufügen", "entfernen"); navigation buttons are capitalized ("Weiter", "Bestellen", "Zurück").
- Quantities are concrete: weight and price on every card (e.g. "50g", "0.52€"), portions as "1 Portion" / "2 Portionen".
- A little humor is welcome where nothing happens yet: the empty cart says "Füge Produkte hinzu :D".

## Components
- **Product card** (`{components.product-card}`): White card, 3px black outline, `{rounded.card}`. Centered title, weight and bold price, product photo cut out without background, then portion stepper and action button.
- **Product card, added** (`{components.product-card-added}`): Same card on Green. The action button becomes "entfernen".
- **Add / remove button** (`{components.button-add}`, `{components.button-remove}`): Full-width pill, 40px high, 3px outline. Green to add, Orange to remove.
- **Portion stepper** (`{components.portion-stepper}`): Pill with a 2px outline: "-", "1 Portion", "+". The minus and plus have no border of their own.
- **Category tabs** (`{components.category-tab}`): Horizontal row of text tabs (Basis, Früchte, Süßigkeit, Nüsse, Superfood, Flüssigkeit). The active tab gets a Green outline and bold text.
- **Navigation buttons** (`{components.button-start}`, `{components.button-next}`): Yellow for "MyMixx aufbauen" and the cart toggle ("MyMixx" / "Zurück"), Orange for "Weiter" — "Bestellen" on the last category.
- **Cart** (`{components.cart}`): Green card over the Frost overlay, max 350px wide, 3:4, scrolls inside. Ingredients grouped by category, each with a small Orange "x" button to remove it, and the total ("Total: … €").

## Do's and Don'ts
- Do keep the black outline on everything interactive — it is the brand's signature.
- Do use color to show state: Green means "in your mix", Orange means "take it out".
- Do show products as cut-out photos, big and centered.
- Don't use white text on any brand color.
- Don't add shadows, gradients or sharp corners.
- Don't put more than one product card in focus at a time on mobile.
