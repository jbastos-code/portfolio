import{t as e}from"./jsx-runtime-C0r-jb24.js";import{i as t,n,o as r,r as i}from"./index-CTHf4ssM.js";import{n as a,t as o}from"./NextProject-rqr4-Me7.js";import{n as s,t as c}from"./MotionImage-F0atT_Y5.js";import{n as l,r as u,t as d}from"./DesignMd-Cd7gSMIw.js";var f=`---
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
- Bright green \`{colors.green}\` is the brand color: start page, cart and every added ingredient.
- Four fruit colors (Green, Orange, Yellow, Blue) on white, always with black text.
- Everything interactive has a thick black outline (3px) — a cartoon, sticker-like look.
- Two Baloo fonts: Baloo 2 Bold for titles and buttons, Baloo Thambi 2 Regular for text.
- Mobile-first: one product card at a time, big touch targets, no clutter.

## Colors
### Brand
- **Green** (\`{colors.green}\` — \`#9ABF11\`): Brand surface (start page, cart) and the "added" state of a product. Also the "hinzufügen" button.
- **Orange** (\`{colors.orange}\` — \`#F36513\`): Remove and forward actions — "entfernen", "Weiter", "Bestellen".
- **Yellow** (\`{colors.yellow}\` — \`#F2BB16\`): The start call to action ("MyMixx aufbauen") and the cart button ("MyMixx" / "Zurück").
- **Blue** (\`{colors.blue}\` — \`#22DDF2\`): Accent for illustrations and the packaging. Not used for actions.

### Neutrals
- **Ink** (\`{colors.ink}\` — \`#000000\`): All text, icons and outlines.
- **Paper** (\`{colors.paper}\` — \`#FFFFFF\`): Product cards and the product choice page.
- **Frost** (\`{colors.frost}\` — white 50%): Overlay behind the cart, combined with a 15px background blur.

### Contrast
Black text works on every color: 9.8:1 on Green, 6.7:1 on Orange, 11.9:1 on Yellow, 12.7:1 on Blue. White text fails on all of them (1.7–3.1:1), so text is always black.

## Typography
| Token                   | Font           | Size | Weight | Line Height | Use                          |
|-------------------------|----------------|------|--------|-------------|------------------------------|
| \`{typography.title}\`    | Baloo 2        | 22px | 700    | 80%         | Product names, prices        |
| \`{typography.category}\` | Baloo Thambi 2 | 24px | 400    | 130%        | Category tabs (22px tablet, 18px mobile) |
| \`{typography.body}\`     | Baloo Thambi 2 | 18px | 400    | 130%        | Body copy, portions          |
| \`{typography.button}\`   | Baloo 2        | 20px | 700    | 130%        | Buttons, cart totals         |
| \`{typography.small}\`    | Baloo 2        | 14px | 700    | 100%        | Small buttons inside the cart |

Titles use a tight line height (0.8) so the rounded letters sit close together, like on the packaging. The active category tab switches to Baloo 2 Bold.

## Layout
- Mobile-first. Every screen is one viewport high (100svh) and does not scroll as a page.
- Product cards are \`calc(100vw - 110px)\` wide, max 340px, centered. One card at a time, swiped horizontally.
- \`{spacing.page-x}\` (20px) side padding on mobile, 10vw on tablet and desktop.
- \`{spacing.card-padding}\` (16px) inside cards, \`{spacing.stack}\` (16px) between buttons, \`{spacing.section}\` (24px) between cart categories.

### Breakpoints
| Name    | Width       | Key Changes                                   |
|---------|-------------|-----------------------------------------------|
| Mobile  | < 768px     | Category tabs scroll sideways, 20px padding.  |
| Tablet  | 768–1439px  | Tabs centered, 10vw padding, bigger logo.     |
| Desktop | ≥ 1440px    | Same as tablet.                               |

## Elevation & Depth
- No shadows. Depth comes from the 3px black outlines and from layering.
- The cart opens as a layer above the page: a Frost overlay (\`{colors.frost}\` + 15px backdrop blur) and the green cart card on top.
- On the start page, three cards fan out with a slight rotation (−10° / +10°) to suggest a stack.

## Shapes
- \`{rounded.card}\` 32px — product cards and the cart.
- \`{rounded.pill}\` — all buttons, the portion stepper and category tabs.
- Borders: 3px black on cards, buttons and the cart. 2px black on the portion stepper.

## Motion & Micro-interaction
- \`{motion.card-in}\` — 1.5s with a spring overshoot: the start cards scale in from 50% and fan out.
- \`{motion.fade}\` — 0.3s: product images fade when a card changes state.
- Adding a product switches the whole card from Paper to Green and the button from "hinzufügen" (Green) to "entfernen" (Orange). The state change is the feedback; no toasts.

## Voice & Content Strategy
- German, informal ("du"), short and active: "Kreiere dein individuelles Müsli", "MyMixx aufbauen".
- Card actions are verbs in lower case ("hinzufügen", "entfernen"); navigation buttons are capitalized ("Weiter", "Bestellen", "Zurück").
- Quantities are concrete: weight and price on every card (e.g. "50g", "0.52€"), portions as "1 Portion" / "2 Portionen".
- A little humor is welcome where nothing happens yet: the empty cart says "Füge Produkte hinzu :D".

## Components
- **Product card** (\`{components.product-card}\`): White card, 3px black outline, \`{rounded.card}\`. Centered title, weight and bold price, product photo cut out without background, then portion stepper and action button.
- **Product card, added** (\`{components.product-card-added}\`): Same card on Green. The action button becomes "entfernen".
- **Add / remove button** (\`{components.button-add}\`, \`{components.button-remove}\`): Full-width pill, 40px high, 3px outline. Green to add, Orange to remove.
- **Portion stepper** (\`{components.portion-stepper}\`): Pill with a 2px outline: "-", "1 Portion", "+". The minus and plus have no border of their own.
- **Category tabs** (\`{components.category-tab}\`): Horizontal row of text tabs (Basis, Früchte, Süßigkeit, Nüsse, Superfood, Flüssigkeit). The active tab gets a Green outline and bold text.
- **Navigation buttons** (\`{components.button-start}\`, \`{components.button-next}\`): Yellow for "MyMixx aufbauen" and the cart toggle ("MyMixx" / "Zurück"), Orange for "Weiter" — "Bestellen" on the last category.
- **Cart** (\`{components.cart}\`): Green card over the Frost overlay, max 350px wide, 3:4, scrolls inside. Ingredients grouped by category, each with a small Orange "x" button to remove it, and the total ("Total: … €").

## Do's and Don'ts
- Do keep the black outline on everything interactive — it is the brand's signature.
- Do use color to show state: Green means "in your mix", Orange means "take it out".
- Do show products as cut-out photos, big and centered.
- Don't use white text on any brand color.
- Don't add shadows, gradients or sharp corners.
- Don't put more than one product card in focus at a time on mobile.
`,p=e();function m(){return(0,p.jsxs)(`div`,{className:`MyMixx`,children:[(0,p.jsx)(r,{}),(0,p.jsxs)(`main`,{className:`project`,children:[(0,p.jsx)(a,{name:`MyMixx`,logo:`/portfolio/project/MyMixx/logo.svg`,video:`/portfolio/project/MyMixx/cover.mp4`,description:(0,p.jsxs)(p.Fragment,{children:[`Mymixx ist ein Müsli-Store, in dem sich jeder sein persönliches Müsli zusammenstellen kann. Von der Basis bis zu den Toppings.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Zu meinen Aufgaben gehörte die Erweiterung der visuellen Identität, die digitale Umsetzung des Brandings sowie die Gestaltung und Programmierung des Bestellsystems.`]}),descriptionEn:(0,p.jsxs)(p.Fragment,{children:[`Mymixx is a muesli store where anyone can create their own personal muesli. From the base to the toppings.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`My responsibilities included expanding the visual identity, implementing the branding digitally, and designing and developing the ordering system.`]}),media:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{img:`/portfolio/project/MyMixx/bilder/07.webp`,noMobile:!0,extraClass:`img-05`}),(0,p.jsx)(c,{img:`/portfolio/project/MyMixx/bilder/09.webp`,padding:!0,onlyMobile:!0})]})}),(0,p.jsx)(i,{textTitel:`Bunt. Vielfältig. Möglich`,textSubtitel:`Design`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`Für das Design habe ich eine bunte und vielfältige Bildsprache entwickelt, die die zahlreichen Mix-Möglichkeiten widerspiegelt.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Die lebendige Farbwelt betont die Pluralität der Zutaten und vermittelt visuell dieselbe Vielfalt und Freiheit, die auch die Marke selbst verkörpert.`]})}),(0,p.jsx)(t,{textTitel:`Colorful. Diverse. Possible.`,textSubtitel:`Design`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`For the design, I developed a vibrant and diverse visual language that reflects the countless mixing possibilities.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`The lively color palette emphasizes the variety of ingredients and visually conveys the same diversity and freedom that the brand itself embodies.`]})}),(0,p.jsx)(l,{visual:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`img`,{loading:`lazy`,decoding:`async`,className:`img-project padding no-mobile`,src:`/portfolio/project/MyMixx/bilder/05.webp`,alt:`bild`}),(0,p.jsx)(`img`,{loading:`lazy`,decoding:`async`,className:`img-project padding only-mobile`,src:`/portfolio/project/MyMixx/bilder/03.webp`,alt:`bild`}),(0,p.jsx)(`img`,{loading:`lazy`,decoding:`async`,className:`img-project img-04 no-mobile`,src:`/portfolio/project/MyMixx/bilder/08.webp`,alt:`bild`}),(0,p.jsx)(`img`,{loading:`lazy`,decoding:`async`,className:`img-project img-02 only-mobile`,src:`/portfolio/project/MyMixx/bilder/08.webp`,alt:`bild`}),(0,p.jsx)(u,{name:`Baloo 2`,font:`'Baloo 2', cursive`})]}),md:(0,p.jsx)(d,{file:`mymixx/DESIGN.md`,content:f,tone:`dark`})}),(0,p.jsx)(i,{textTitel:`Components`,textSubtitel:`Funktionalität`}),(0,p.jsx)(t,{textTitel:`Components`,textSubtitel:`Functionality`}),(0,p.jsxs)(`div`,{className:`img-mobile`,children:[(0,p.jsx)(`img`,{loading:`lazy`,decoding:`async`,src:`/portfolio/project/MyMixx/bilder/10.webp`,alt:`bild`}),(0,p.jsx)(`img`,{loading:`lazy`,decoding:`async`,src:`/portfolio/project/MyMixx/bilder/11.webp`,alt:`bild`})]}),(0,p.jsx)(i,{textTheme:`Button “Hinzufügen”, “Entfernen”`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`Jedes Produktcard verwaltet seinen Zustand über useState, das einen booleschen Wert isAdded speichert. Abhängig davon wechselt das Card zwischen zwei visuellen Zuständen: weißer Hintergrund mit „Hinzufügen"-Button oder farbiger Hintergrund mit „Entfernen"-Button. Das Styling wird dabei nicht per direktem DOM-Zugriff geändert, sondern durch dynamisches Setzen von CSS-Klassen basierend auf dem State.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Ein Klick auf den Button triggert eine Funktion, die isAdded togglet und gleichzeitig das Produkt im globalen My Mixx-State hinzufügt oder entfernt. Dieser globale State verwaltet über useContext oder ein State-Management wie Redux stellt sicher, dass die Produktauswahl komponentenübergreifend konsistent bleibt.`]})}),(0,p.jsx)(t,{textTheme:`"Add" / "Remove" Button`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`Each product card manages its state via useState, storing a boolean value isAdded. Depending on this, the card switches between two visual states: a white background with an "Add" button, or a colored background with a "Remove" button. The styling is not changed through direct DOM manipulation, but by dynamically applying CSS classes based on the state.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Clicking the button triggers a function that toggles isAdded while simultaneously adding or removing the product from the global My Mixx state. This global state, managed via useContext or a state management solution like Redux, ensures that the product selection remains consistent across components.`]})}),(0,p.jsx)(s,{tone:`dark`,lines:[{content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-red`,children:`const`}),` [`,(0,p.jsx)(`span`,{className:`code-blue`,children:`isAdded`}),`, `,(0,p.jsx)(`span`,{className:`code-blue`,children:`setIsAdded`}),`] = `,(0,p.jsx)(`span`,{className:`code-red`,children:`useState`}),`(`,(0,p.jsx)(`span`,{className:`code-purple`,children:`false`}),`)`]})},{content:(0,p.jsx)(p.Fragment,{})},{content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-red`,children:`const`}),` `,(0,p.jsx)(`span`,{className:`code-blue`,children:`handleClick`}),` = () => `,`{`]})},{gap:1,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-blue`,children:`setIsAdded`}),`(`,(0,p.jsx)(`span`,{className:`code-blue`,children:`prev`}),` => !`,(0,p.jsx)(`span`,{className:`code-blue`,children:`prev`}),`)`]})},{gap:1,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-purple`,children:`if`}),` (!`,(0,p.jsx)(`span`,{className:`code-blue`,children:`isAdded`}),`) `,`{`]})},{gap:2,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-blue`,children:`addToMyMixx`}),`(`,(0,p.jsx)(`span`,{className:`code-blue`,children:`product`}),`)`]})},{gap:1,content:(0,p.jsxs)(p.Fragment,{children:[`}`,` `,(0,p.jsx)(`span`,{className:`code-purple`,children:`else`}),` `,`{`]})},{gap:2,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-blue`,children:`removeFromMyMixx`}),`(`,(0,p.jsx)(`span`,{className:`code-blue`,children:`product`}),`)`]})},{gap:1,content:(0,p.jsx)(p.Fragment,{children:`}`})},{content:(0,p.jsx)(p.Fragment,{children:`}`})},{content:(0,p.jsx)(p.Fragment,{})},{content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-rosa`,children:`<div `}),(0,p.jsx)(`span`,{className:`code-purple`,children:`className`}),`=`,(0,p.jsxs)(`span`,{className:`code-red`,children:[`{`,`isAdded ? `,(0,p.jsx)(`span`,{className:`code-blue`,children:`'card card--added'`}),` : `,(0,p.jsx)(`span`,{className:`code-blue`,children:`'card'`}),`}`]}),(0,p.jsx)(`span`,{className:`code-rosa`,children:`>`})]})},{gap:1,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-rosa`,children:`<button `}),(0,p.jsx)(`span`,{className:`code-purple`,children:`onClick`}),`=`,(0,p.jsx)(`span`,{className:`code-red`,children:`{`}),(0,p.jsx)(`span`,{className:`code-blue`,children:`handleClick`}),(0,p.jsx)(`span`,{className:`code-red`,children:`}`}),(0,p.jsx)(`span`,{className:`code-rosa`,children:`>`})]})},{gap:2,content:(0,p.jsxs)(p.Fragment,{children:[`{`,`isAdded ? `,(0,p.jsx)(`span`,{className:`code-blue`,children:`'Entfernen'`}),` : `,(0,p.jsx)(`span`,{className:`code-blue`,children:`'Hinzufügen'`}),`}`]})},{gap:1,content:(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(`span`,{className:`code-rosa`,children:`</button>`})})},{content:(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(`span`,{className:`code-rosa`,children:`</div>`})})}]}),(0,p.jsx)(`div`,{className:`img-mobile`,children:(0,p.jsx)(`img`,{loading:`lazy`,decoding:`async`,src:`/portfolio/project/MyMixx/bilder/12.webp`,alt:`bild`})}),(0,p.jsx)(i,{textTheme:`Einkaufswagen „My Mixx"`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`Der My-Mixx-Bildschirm zeigt in Echtzeit alle vom Nutzer hinzugefügten Produkte, geordnet nach Kategorie: Basis, Früchte, Süßungsmittel und Nüsse... und der Gesamtpreis`,(0,p.jsx)(`br`,{}),`Jedes Produkt wird mit Name und Einzelpreis angezeigt und kann direkt über den X-Button entfernt werden.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Ein Klick auf den X-Button setzt den booleschen useState isAdded des entsprechenden Produkts auf false zurück. Dadurch verschwindet das Produkt aus der My-Mixx-Liste und der Button im Produktcard wechselt wieder von „Entfernen" zurück zu „Hinzufügen". Der Gesamtpreis wird dabei automatisch neu berechnet und sofort aktualisiert.`]})}),(0,p.jsx)(t,{textTheme:`Shopping Cart "My Mixx"`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`The My Mixx screen displays in real time all products added by the user, organized by category: base, fruits, sweeteners, and nuts. Along with the total price.`,(0,p.jsx)(`br`,{}),`Each product is shown with its name and individual price, and can be removed directly via the X button.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Clicking the X button resets the boolean useState isAdded of the corresponding product to false. This removes the product from the My Mixx list and switches the button in the product card back from "Remove" to "Add". The total price is automatically recalculated and updated instantly.`]})}),(0,p.jsx)(s,{tone:`dark`,lines:[{content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-red`,children:`const`}),` `,(0,p.jsx)(`span`,{className:`code-blue`,children:`totalPreis`}),` = `,(0,p.jsx)(`span`,{className:`code-blue`,children:`myMixx`}),`.`,(0,p.jsx)(`span`,{className:`code-red`,children:`reduce`}),`((`,(0,p.jsx)(`span`,{className:`code-blue`,children:`acc`}),`, `,(0,p.jsx)(`span`,{className:`code-blue`,children:`product`}),`) => `,`{`]})},{gap:1,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-purple`,children:`return`}),` `,(0,p.jsx)(`span`,{className:`code-blue`,children:`acc`}),` + `,(0,p.jsx)(`span`,{className:`code-blue`,children:`product`}),`.`,(0,p.jsx)(`span`,{className:`code-blue`,children:`preis`})]})},{content:(0,p.jsxs)(p.Fragment,{children:[`}`,`, `,(0,p.jsx)(`span`,{className:`code-purple`,children:`0`}),`)`]})},{content:(0,p.jsx)(p.Fragment,{})},{content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-red`,children:`const`}),` `,(0,p.jsx)(`span`,{className:`code-blue`,children:`handleRemove`}),` = (`,(0,p.jsx)(`span`,{className:`code-blue`,children:`product`}),`) => `,`{`]})},{gap:1,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-blue`,children:`setIsAdded`}),`(`,(0,p.jsx)(`span`,{className:`code-purple`,children:`false`}),`)`]})},{gap:1,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-blue`,children:`removeFromMyMixx`}),`(`,(0,p.jsx)(`span`,{className:`code-blue`,children:`product`}),`)`]})},{content:(0,p.jsx)(p.Fragment,{children:`}`})},{content:(0,p.jsx)(p.Fragment,{})},{content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-rosa`,children:`<div `}),(0,p.jsx)(`span`,{className:`code-purple`,children:`className`}),`=`,(0,p.jsx)(`span`,{className:`code-red`,children:`"my-mixx"`}),(0,p.jsx)(`span`,{className:`code-rosa`,children:`>`})]})},{gap:1,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-rosa`,children:`<p>`}),`Total: `,`{`,`totalPreis.`,(0,p.jsx)(`span`,{className:`code-red`,children:`toFixed`}),`(`,(0,p.jsx)(`span`,{className:`code-purple`,children:`2`}),`)`,`}`,`€`,(0,p.jsx)(`span`,{className:`code-rosa`,children:`</p>`})]})},{gap:1,content:(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(`span`,{className:`code-rosa`,children:`<ul>`})})},{gap:2,content:(0,p.jsxs)(p.Fragment,{children:[`{`,`myMixx.`,(0,p.jsx)(`span`,{className:`code-red`,children:`map`}),`(`,(0,p.jsx)(`span`,{className:`code-blue`,children:`product`}),` => (`]})},{gap:3,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-rosa`,children:`<li `}),(0,p.jsx)(`span`,{className:`code-purple`,children:`key`}),`=`,(0,p.jsx)(`span`,{className:`code-red`,children:`{`}),(0,p.jsx)(`span`,{className:`code-blue`,children:`product`}),`.`,(0,p.jsx)(`span`,{className:`code-blue`,children:`name`}),(0,p.jsx)(`span`,{className:`code-red`,children:`}`}),(0,p.jsx)(`span`,{className:`code-rosa`,children:`>`})]})},{gap:4,content:(0,p.jsxs)(p.Fragment,{children:[`{`,`product.`,(0,p.jsx)(`span`,{className:`code-blue`,children:`name`}),`}`,` — `,`{`,`product.`,(0,p.jsx)(`span`,{className:`code-blue`,children:`preis`}),`.`,(0,p.jsx)(`span`,{className:`code-red`,children:`toFixed`}),`(`,(0,p.jsx)(`span`,{className:`code-purple`,children:`2`}),`)`,`}`,`€`]})},{gap:4,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-rosa`,children:`<button `}),(0,p.jsx)(`span`,{className:`code-purple`,children:`onClick`}),`=`,(0,p.jsx)(`span`,{className:`code-red`,children:`{`}),`() => `,(0,p.jsx)(`span`,{className:`code-blue`,children:`handleRemove`}),`(`,(0,p.jsx)(`span`,{className:`code-blue`,children:`product`}),`)`,(0,p.jsx)(`span`,{className:`code-red`,children:`}`}),(0,p.jsx)(`span`,{className:`code-rosa`,children:`>`}),`X`,(0,p.jsx)(`span`,{className:`code-rosa`,children:`</button>`})]})},{gap:3,content:(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(`span`,{className:`code-rosa`,children:`</li>`})})},{gap:2,content:(0,p.jsxs)(p.Fragment,{children:[`))`,`}`]})},{gap:1,content:(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(`span`,{className:`code-rosa`,children:`</ul>`})})},{content:(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(`span`,{className:`code-rosa`,children:`</div>`})})}]}),(0,p.jsx)(`img`,{loading:`lazy`,decoding:`async`,className:`img-project img-01`,src:`/portfolio/project/MyMixx/bilder/13.webp`,alt:`bild`}),(0,p.jsx)(i,{textTheme:`Verwendung von JSON zur Sortierung der Produkte`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`Der Schwerpunkt lag darauf, die Produktdaten klar zu strukturieren und die UI-Elemente dynamisch zu generieren.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Um die Produkte zu organisieren, habe ich ein JavaScript Datei erstellt, wo ich die Array von Objekten mit allen relevanten Informationen enthalten(Name, Preis, Menge und Bild) enthält. Dadurch wird sowohl die Pflege als auch das Rendering im Frontend vereinfacht.`]})}),(0,p.jsx)(t,{textTheme:`Using JSON to Sort Products`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`The focus was on clearly structuring the product data and dynamically generating the UI elements.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`To organize the products, I created a JavaScript file containing an array of objects with all relevant information (name, price, quantity, and image). This simplifies both maintenance and rendering on the frontend.`]})}),(0,p.jsx)(i,{textParagraph:(0,p.jsxs)(p.Fragment,{children:[`Die Struktur in dem Jason Datei wird in Objects kategorisiert.`,(0,p.jsx)(`br`,{}),`Anbei ist ein Beispiel, wie die Früchtensorte sortiert wird:`]})}),(0,p.jsx)(t,{textParagraph:(0,p.jsxs)(p.Fragment,{children:[`The structure in the JSON file is organized into objects.`,(0,p.jsx)(`br`,{}),`Below is an example of how the fruit category is sorted:`]})}),(0,p.jsx)(s,{tone:`dark`,lines:[{content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-red`,children:`const`}),` `,(0,p.jsx)(`span`,{className:`code-blue`,children:`arrayFruechte`}),` = [`]})},{gap:1,indent:1,content:(0,p.jsxs)(p.Fragment,{children:[`{ `,(0,p.jsx)(`span`,{className:`code-purple`,children:`name`}),`: 'Cranberries', `,(0,p.jsx)(`span`,{className:`code-purple`,children:`preis`}),`: 0.40, `,(0,p.jsx)(`span`,{className:`code-purple`,children:`amount`}),`: 65, `,(0,p.jsx)(`span`,{className:`code-purple`,children:`pic`}),`: ''`,`}`,`,`]})},{gap:1,indent:1,content:(0,p.jsxs)(p.Fragment,{children:[`{ `,(0,p.jsx)(`span`,{className:`code-purple`,children:`name`}),`: 'Ananasstücke', `,(0,p.jsx)(`span`,{className:`code-purple`,children:`preis`}),`: 0.60, `,(0,p.jsx)(`span`,{className:`code-purple`,children:`amount`}),`: 50, `,(0,p.jsx)(`span`,{className:`code-purple`,children:`pic`}),`: ''`,`}`,`,`]})},{gap:1,indent:1,content:(0,p.jsxs)(p.Fragment,{children:[`{ `,(0,p.jsx)(`span`,{className:`code-purple`,children:`name`}),`: 'Apfelringe', `,(0,p.jsx)(`span`,{className:`code-purple`,children:`preis`}),`: 0.70, `,(0,p.jsx)(`span`,{className:`code-purple`,children:`amount`}),`: 35, `,(0,p.jsx)(`span`,{className:`code-purple`,children:`pic`}),`: ''`,`}`,`,`]})},{gap:1,indent:1,content:(0,p.jsxs)(p.Fragment,{children:[`{ `,(0,p.jsx)(`span`,{className:`code-purple`,children:`name`}),`: 'Datteln', `,(0,p.jsx)(`span`,{className:`code-purple`,children:`preis`}),`: 0.42, `,(0,p.jsx)(`span`,{className:`code-purple`,children:`amount`}),`: 65, `,(0,p.jsx)(`span`,{className:`code-purple`,children:`pic`}),`: ''`,`}`,`,`]})},{content:(0,p.jsx)(p.Fragment,{children:`]`})}]}),(0,p.jsx)(i,{textParagraph:(0,p.jsx)(p.Fragment,{children:`Und die Nutzung ist ebenso einfach.`})}),(0,p.jsx)(t,{textParagraph:(0,p.jsx)(p.Fragment,{children:`And the usage is just as simple.`})}),(0,p.jsx)(s,{tone:`dark`,lines:[{content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-blue`,children:`arrayFruechte`}),(0,p.jsx)(`span`,{className:`code-red`,children:`.forEach`}),`(`,(0,p.jsx)(`span`,{className:`code-blue`,children:`product`}),` => `,`{`]})},{gap:1,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-blue`,children:`productListBasis`}),`.innerHTML += `,"`"]})},{gap:2,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-rosa`,children:`<div `}),(0,p.jsx)(`span`,{className:`code-purple`,children:`class`}),`=`,(0,p.jsx)(`span`,{className:`code-red`,children:`"product"`}),(0,p.jsx)(`span`,{className:`code-rosa`,children:`>`})]})},{gap:3,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-rosa`,children:`<p `}),(0,p.jsx)(`span`,{className:`code-purple`,children:`class`}),`=`,(0,p.jsx)(`span`,{className:`code-red`,children:`"product-name"`}),(0,p.jsx)(`span`,{className:`code-rosa`,children:`>`}),`$`,`{`,(0,p.jsx)(`span`,{className:`code-blue`,children:`product`}),`.`,(0,p.jsx)(`span`,{className:`code-blue`,children:`name`}),`}`,(0,p.jsx)(`span`,{className:`code-rosa`,children:`</p>`})]})},{gap:3,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-rosa`,children:`<img `}),(0,p.jsx)(`span`,{className:`code-purple`,children:`src`}),` = `,(0,p.jsxs)(`span`,{className:`code-red`,children:[`"$`,`{`,`product.pic`,`}`,`"`]}),(0,p.jsx)(`span`,{className:`code-rosa`,children:`>`})]})},{gap:3,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-rosa`,children:`<p `}),(0,p.jsx)(`span`,{className:`code-purple`,children:`class`}),`=`,(0,p.jsx)(`span`,{className:`code-red`,children:`'menge'`}),(0,p.jsx)(`span`,{className:`code-rosa`,children:`>`}),`$`,`{`,(0,p.jsx)(`span`,{className:`code-blue`,children:`product`}),`.`,(0,p.jsx)(`span`,{className:`code-blue`,children:`amount`}),`}`,`g`,(0,p.jsx)(`span`,{className:`code-rosa`,children:`</p>`})]})},{gap:3,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-rosa`,children:`<p `}),(0,p.jsx)(`span`,{className:`code-purple`,children:`class`}),`=`,(0,p.jsx)(`span`,{className:`code-red`,children:`'preis'`}),(0,p.jsx)(`span`,{className:`code-rosa`,children:`>`}),`$`,`{`,(0,p.jsx)(`span`,{className:`code-blue`,children:`product`}),`.`,(0,p.jsx)(`span`,{className:`code-blue`,children:`preis`}),`.`,(0,p.jsx)(`span`,{className:`code-red`,children:`toFixed`}),`(2)`,`}`,`€`,(0,p.jsx)(`span`,{className:`code-rosa`,children:`</p>`})]})},{gap:2,content:(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(`span`,{className:`code-rosa`,children:`</div>`})})},{gap:1,content:(0,p.jsx)(p.Fragment,{children:"`"})},{content:(0,p.jsx)(p.Fragment,{children:`});`})}]}),(0,p.jsx)(c,{img:`/portfolio/project/MyMixx/bilder/06.webp`,extraClass:`img-06`}),(0,p.jsx)(o,{thisProject:`MyMixx`})]}),(0,p.jsx)(n,{})]})}export{m as default};