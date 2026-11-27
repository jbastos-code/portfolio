import{t as e}from"./jsx-runtime-C0r-jb24.js";import{i as t,n,o as r,r as i}from"./index-CTHf4ssM.js";import{n as a,t as o}from"./NextProject-rqr4-Me7.js";import{n as s,t as c}from"./MotionImage-F0atT_Y5.js";import{n as l,r as u,t as d}from"./DesignMd-Cd7gSMIw.js";var f=`---
version: alpha
name: Caflex
description: App to discover the best cafés in your city, from cozy corner cafés to specialty coffee shops. Calm, focused, inviting.
colors:
  primary: "#002B8A"
  coffee: "#4B3124"
  secondary: "#7485A9"
  accent: "#CAD2E4"
  light: "#F9F0E9"
  muted: "rgba(0, 43, 138, 0.7)"
  glass: "rgba(75, 49, 36, 0.2)"
typography:
  display:
    fontFamily: Libre Franklin
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.2
  section:
    fontFamily: Libre Franklin
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.2
  card-title:
    fontFamily: Libre Franklin
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.2
  body:
    fontFamily: Libre Franklin
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.3
  button:
    fontFamily: Libre Franklin
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.2
  meta:
    fontFamily: Libre Franklin
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.2
rounded:
  thumb: 8px
  sm: 12px
  md: 16px
  lg: 24px
  sheet: 52px
  pill: 50px
spacing:
  sm: 12px
  md: 24px
  lg: 32px
components:
  cafe-card:
    textColor: "{colors.primary}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
  cafe-card-large:
    textColor: "{colors.primary}"
    typography: "{typography.card-title}"
    rounded: "{rounded.md}"
  cafe-card-small:
    textColor: "{colors.primary}"
    typography: "{typography.card-title}"
    rounded: "{rounded.thumb}"
  city-selector:
    backgroundColor: "{colors.light}"
    textColor: "{colors.primary}"
    typography: "{typography.body}"
    rounded: 20px
  back-button:
    backgroundColor: "{colors.glass}"
    rounded: "{rounded.pill}"
    size: 50px
  map-button:
    backgroundColor: "{colors.coffee}"
    textColor: "{colors.light}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  cafe-sheet:
    backgroundColor: "{colors.coffee}"
    textColor: "{colors.light}"
    rounded: "{rounded.sheet}"
---

# Caflex — DESIGN.md

## Overview
Caflex is an app that helps you find the best cafés in your city, from cozy corner cafés to modern specialty coffee shops. The interface is calm, focused and inviting: warm coffee tones feel familiar and grounded, while blue accents bring freshness and orientation. The photos of the cafés do the talking; the interface stays quiet around them.

**Key Characteristics:**
- Two worlds: the city overview in Primary blue on Light cream, and the café page in Coffee brown over a full-screen photo.
- One typeface, Libre Franklin, in calm sizes. Hierarchy comes from size and opacity, not from many weights.
- Photos are always large and rounded; text sits below them, never on top (except on the café page sheet).
- Content scrolls sideways in rows, like flipping through a stack of cafés.

## Colors
### Brand
- **Primary** (\`{colors.primary}\` — \`#002B8A\`): All text, icons and outlines on the overview. 10.9:1 on Light.
- **Coffee** (\`{colors.coffee}\` — \`#4B3124\`): Café page sheet and the map button. Light text on Coffee: 10.6:1.
- **Light** (\`{colors.light}\` — \`#F9F0E9\`): Page background of the overview, text on Coffee.

### Accent
- **Secondary** (\`{colors.secondary}\` — \`#7485A9\`): Icons and large text only — 3.3:1 on Light is too low for small text.
- **Accent** (\`{colors.accent}\` — \`#CAD2E4\`): Soft blue surfaces and highlights on Primary (8.1:1). Never as text on Light (1.3:1).

### Text
- **Muted** (\`{colors.muted}\` — Primary at 70%): District names, ratings count, meta text. 5.0:1 on Light. Don't go lower: Primary at 60% is only 3.8:1.
- **Glass** (\`{colors.glass}\` — Coffee at 20%): Floating buttons over photos, always with an 11px background blur.

## Typography
| Token                     | Font           | Size | Weight | Use                              |
|---------------------------|----------------|------|--------|----------------------------------|
| \`{typography.display}\`    | Libre Franklin | 32px | 700    | Café name on the café page       |
| \`{typography.section}\`    | Libre Franklin | 20px | 400    | Section titles ("Entdeck Köln")  |
| \`{typography.card-title}\` | Libre Franklin | 18px | 400    | Café names in large/small cards  |
| \`{typography.body}\`       | Libre Franklin | 16px | 400    | Body, city selector              |
| \`{typography.button}\`     | Libre Franklin | 16px | 500    | Buttons and links                |
| \`{typography.meta}\`       | Libre Franklin | 12px | 400    | District, rating count (Muted)   |

Café names in the square cards and the slogans use 14px. Light (300) and ExtraLight (200) are loaded but reserved; keep the interface at Regular and Medium.

## Layout
- Mobile-only app: no breakpoints. Widths are capped with \`min()\` so the layout simply stops growing on large screens (e.g. large cards \`min(80vw + 10px, 410px)\`, cards \`min(40vw, 200px)\`).
- \`{spacing.md}\` (24px) side padding, \`{spacing.lg}\` (32px) between sections, \`{spacing.sm}\` (12px) between cards in a row.
- The overview is a vertical list of horizontal rows: large featured cards, a row of square cards ("Entdeck Köln"), a row for the Little Tokyo district, then a 3×3 grid of small cards for the other city ("Was es in anderer Stadt gibt").
- The café page: the photo fills the screen, the Coffee sheet starts at 75% of the viewport height and slides over it.

## Elevation & Depth
- No shadows. Depth comes from layering and blur.
- The café sheet uses a gradient from Coffee at 30% to solid Coffee, with an 11px background blur over the photo.
- The back button floats over the photo as Glass (Coffee 20% + blur).
- The city selector floats above the page with a 1px Primary outline on Light.

## Shapes
- \`{rounded.thumb}\` 8px — thumbnails in small cards.
- \`{rounded.sm}\` 12px — square café cards.
- \`{rounded.md}\` 16px — large cards and gallery photos.
- \`{rounded.lg}\` 24px — the map.
- \`{rounded.sheet}\` 52px — top corners of the café page sheet and photo.
- \`{rounded.pill}\` — buttons, the back button and (20px) the city selector.

## Motion & Micro-interaction
- The café page snaps softly between photo and sheet (\`scroll-snap-type: y proximity\`).
- Opening the gallery hides the map, enlarges the photos to full width and lets them scroll sideways; the map button inverts to Light with Coffee text.
- The city selector expands in place: the arrow rotates 180° and the options appear below the current city.
- No decorative animation — movement only follows the user's gesture.

## Voice & Content Strategy
- German, informal ("du"), short and warm: "Entdeck Köln", "Was es in anderer Stadt gibt", "Karte schauen".
- Taglines speak to the user directly: "Finde das Café, das mit dir matcht."
- Every café has a one-line slogan in its own voice (e.g. "Kaffee in Premiumqualität"), plus district, rating and number of reviews.

## Components
- **Café card** (\`{components.cafe-card}\`): Square photo (\`{rounded.sm}\`), name (14px) and district (12px, Muted) below.
- **Large café card** (\`{components.cafe-card-large}\`): 16:9 photo (\`{rounded.md}\`), name (18px), slogan (14px) and district (Muted). Used for featured cafés at the top.
- **Small café card** (\`{components.cafe-card-small}\`): Row with an 80px square thumbnail (\`{rounded.thumb}\`), name, slogan and district. Used in the 3×3 grid.
- **City selector** (\`{components.city-selector}\`): Floating pill with the current city and an arrow. Opens into a list of cities ("Stadt auswählen").
- **Back button** (\`{components.back-button}\`): 50px Glass circle with an arrow, fixed top left on the café page.
- **Map button** (\`{components.map-button}\`): Coffee pill with Light text ("Karte schauen"), centered at the bottom of the map.
- **Café sheet** (\`{components.cafe-sheet}\`): Coffee sheet over the photo with name, slogan, rating, city and district, links to Instagram and website, the map and the gallery.

## Do's and Don'ts
- Do let the café photos lead — big, rounded, never cropped awkwardly.
- Do keep the overview in Primary on Light and the café page in Light on Coffee.
- Do use Muted (Primary 70%) for meta text, not lower.
- Don't use Secondary or Accent for small text on Light.
- Don't add shadows or extra colors; blue and coffee are enough.
- Don't place text directly on café photos without the Coffee sheet or Glass behind it.
`,p=e();function m(){return(0,p.jsxs)(`div`,{className:`Caflex`,children:[(0,p.jsx)(r,{}),(0,p.jsxs)(`main`,{className:`project`,children:[(0,p.jsx)(a,{name:`Caflex`,logo:`/portfolio/project/Caflex/logo.svg`,img:`/portfolio/project/Caflex/cover.webp`,description:(0,p.jsxs)(p.Fragment,{children:[`Wo gibt's den besten Kaffee in der Stadt?`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Caflex ist eine App, die dir hilft, die besten Cafés in deiner Stadt zu entdecken. Von gemütlichen Eckcafés bis hin zu modernen Specialty-Coffee-Shops.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Zu meinen Aufgaben gehörten die Gestaltung der visuellen Identität sowie die Konzeption und Entwicklung der App.`]}),descriptionEn:(0,p.jsxs)(p.Fragment,{children:[`Where's the best coffee in town?`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Caflex is an app that helps you discover the best cafés in your city. From cozy neighborhood spots to modern specialty coffee shops.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`My responsibilities included designing the visual identity as well as conceptualizing and developing the app.`]}),media:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{img:`/portfolio/project/Caflex/bilder/01.webp`,noMobile:!0,extraClass:`img-03`}),(0,p.jsx)(c,{img:`/portfolio/project/Caflex/bilder/01.webp`,onlyMobile:!0,extraClass:`img-01`})]})}),(0,p.jsx)(i,{textTitel:`Ruhig. Fokussiert. Einladend.`,textSubtitel:`Design`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`Für das Design habe ich eine zurückhaltende und bewusste Bildsprache entwickelt, die das Wesen der App widerspiegelt. Die besten Cafés der Stadt zu entdecken.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Die Farbpalette greift warme Kaffeetöne auf, vertraut und geerdet, kontrastiert durch Akzente in Blau, die Frische und Klarheit bringen. Diese Kombination schafft eine visuelle Balance zwischen Gemütlichkeit und Orientierung.`]})}),(0,p.jsx)(t,{textTitel:`Sober. Focused. Inviting.`,textSubtitel:`Design`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`For the design, I developed a restrained and intentional visual language that reflects the essence of the app. Discovering great coffee in the city.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`The color palette draws from warm coffee tones, grounded and familiar, contrasted by touches of blue that bring freshness and clarity. This combination creates a visual balance between coziness and orientation.`]})}),(0,p.jsx)(l,{visual:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`img`,{loading:`lazy`,decoding:`async`,className:`img-project padding no-mobile`,src:`/portfolio/project/Caflex/bilder/06.webp`,alt:`bild`}),(0,p.jsx)(`img`,{loading:`lazy`,decoding:`async`,className:`img-project padding only-mobile`,src:`/portfolio/project/Caflex/bilder/07.webp`,alt:`bild`}),(0,p.jsx)(u,{name:`Libre Franklin`,font:`'Libre Franklin', sans-serif`})]}),md:(0,p.jsx)(d,{file:`caflex/DESIGN.md`,content:f})}),(0,p.jsx)(i,{textTitel:`Components`,textSubtitel:`Funktionalität`}),(0,p.jsx)(t,{textTitel:`Components`,textSubtitel:`Funktionality`}),(0,p.jsx)(`div`,{className:`img-mobile`,children:(0,p.jsx)(`img`,{loading:`lazy`,decoding:`async`,src:`/portfolio/project/Caflex/videos/03.gif`,alt:``})}),(0,p.jsx)(i,{textTheme:`Stadt auswählen`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`Die Stadtauswahl wird über useState verwaltet, wobei die gewählte Stadt im localStorage persistiert wird. So bleibt sie auch nach einem Seitenreload erhalten.Ein zweiter Boolean-State steuert das Auswahlmenü, dessen Sichtbarkeit per dynamischer CSS-Klasse geregelt wird.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Da das Projekt noch früh in der Entwicklung ist, sind aktuell nur Düsseldorf und Köln verfügbar. Die Café-Daten werden je nach aktiver Stadt aus einem typisierten Objekt geladen, die andere Stadt wird automatisch berechnet und separat angezeigt.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Die zufälligen Empfehlungen werden mit useMemo nur neu berechnet, wenn sich die Stadt ändert.`]})}),(0,p.jsx)(t,{textTheme:`City Selection`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`The city selection is managed via useState, with the chosen city persisted in localStorage so it remains intact after a page reload. A second boolean state controls the selection menu, whose visibility is handled through a dynamic CSS class.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Since the project is still in early development, only Düsseldorf and Cologne are currently available. The café data is loaded from a typed object based on the active city, while the other city is automatically derived and displayed separately.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`The random recommendations are recalculated with useMemo only when the city changes.`]})}),(0,p.jsx)(`img`,{loading:`lazy`,decoding:`async`,src:`/portfolio/project/Caflex/videos/02.gif`,className:`video-02`,alt:``}),(0,p.jsx)(s,{lines:[{content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-blue`,children:`const`}),` [`,(0,p.jsx)(`span`,{className:`code-blue`,children:`city`}),`, `,(0,p.jsx)(`span`,{className:`code-blue`,children:`setCity`}),`] = `,(0,p.jsx)(`span`,{className:`code-red`,children:`useState`}),`(`,(0,p.jsx)(`span`,{className:`code-blue`,children:`() =>`}),` `,`{`]})},{gap:1,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-blue`,children:`return`}),` `,(0,p.jsx)(`span`,{className:`code-blue`,children:`localStorage`}),`.`,(0,p.jsx)(`span`,{className:`code-red`,children:`getItem`}),`(`,(0,p.jsx)(`span`,{className:`code-red`,children:`"city"`}),`) ?? `,(0,p.jsx)(`span`,{className:`code-red`,children:`"Düsseldorf"`}),`;`]})},{content:(0,p.jsx)(p.Fragment,{children:`});`})},{content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-blue`,children:`const`}),` `,(0,p.jsx)(`span`,{className:`code-blue`,children:`cafes`}),` = `,(0,p.jsx)(`span`,{className:`code-blue`,children:`cafesTyped`}),`[`,(0,p.jsx)(`span`,{className:`code-blue`,children:`city`}),`];`]})}]}),(0,p.jsx)(i,{textTheme:`Cafés sortieren`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`Die Café-Cards sind wiederverwendbare React-Komponenten wie “CafeCard”, “CafeCardLarge” und “CafeCardSmall”, die ihre Daten über Props empfangen. Per .map() wird das Array iteriert und die Eigenschaften jedes Cafés direkt an die Komponente übergeben.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Diese Struktur macht das Projekt leicht skalierbar: Die Daten liegen aktuell in einem typisierten JSON-Objekt, könnten aber problemlos durch einen API-Call ersetzt werden, ohne die Komponentenstruktur anzupassen.`]})}),(0,p.jsx)(t,{textTheme:`Sorting Cafés`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`The café cards are reusable React components such as "CafeCard", "CafeCardLarge", and "CafeCardSmall", which receive their data via props. The array is iterated using .map(), passing each café's properties directly to the component.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`This structure makes the project easily scalable: the data currently lives in a typed JSON object, but could seamlessly be replaced by an API call without modifying the component structure.`]})}),(0,p.jsx)(`img`,{loading:`lazy`,decoding:`async`,src:`/portfolio/project/Caflex/videos/01.gif`,className:`video-01`,alt:``}),(0,p.jsx)(s,{lines:[{content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-rosa`,children:`<div `}),(0,p.jsx)(`span`,{className:`code-purple`,children:`className`}),`=`,(0,p.jsx)(`span`,{className:`code-red`,children:`"scroll CafesList"`}),(0,p.jsx)(`span`,{className:`code-rosa`,children:`>`})]})},{gap:1,content:(0,p.jsxs)(p.Fragment,{children:[`{`,`cafes.`,(0,p.jsx)(`span`,{className:`code-red`,children:`map`}),`((`,(0,p.jsx)(`span`,{className:`code-blue`,children:`cafe`}),`) => (`]})},{gap:2,content:(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(`span`,{className:`code-rosa`,children:`<CafeCard`})})},{gap:3,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-purple`,children:`id`}),`=`,`{`,`cafe.`,(0,p.jsx)(`span`,{className:`code-blue`,children:`id`}),`}`]})},{gap:3,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-purple`,children:`img`}),`=`,`{`,`cafe.`,(0,p.jsx)(`span`,{className:`code-blue`,children:`foto`}),`}`]})},{gap:3,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-purple`,children:`name`}),`=`,`{`,`cafe.`,(0,p.jsx)(`span`,{className:`code-blue`,children:`name`}),`}`]})},{gap:3,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-purple`,children:`stadtteil`}),`=`,`{`,`cafe.`,(0,p.jsx)(`span`,{className:`code-blue`,children:`stadtteil`}),`}`]})},{gap:2,content:(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(`span`,{className:`code-rosa`,children:`/>`})})},{gap:1,content:(0,p.jsx)(p.Fragment,{children:`))`})},{content:(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(`span`,{className:`code-rosa`,children:`</div>`})})}]}),(0,p.jsxs)(`div`,{className:`img-mobile`,children:[(0,p.jsx)(`img`,{loading:`lazy`,decoding:`async`,src:`/portfolio/project/Caflex/bilder/04.webp`,alt:`bild`}),(0,p.jsx)(`img`,{loading:`lazy`,decoding:`async`,src:`/portfolio/project/Caflex/bilder/05.webp`,alt:`bild`})]}),(0,p.jsx)(i,{textTheme:`Einkaufswagen `,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`Der My-Mixx-Bildschirm zeigt in Echtzeit alle vom Nutzer hinzugefügten Produkte, geordnet nach Kategorie: Basis, Früchte, Süßungsmittel und Nüsse... und der Gesamtpreis`,(0,p.jsx)(`br`,{}),`Jedes Produkt  wird mit Name und Einzelpreis angezeigt und kann direkt über den X-Button entfernt werden.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Ein Klick auf den X-Button setzt den booleschen useState isAdded des entsprechenden Produkts auf false zurück. Dadurch verschwindet das Produkt aus der My-Mixx-Liste und der Button im Produktcard wechselt wieder von „Entfernen" zurück zu „Hinzufügen".  Der Gesamtpreis wird dabei automatisch neu berechnet und sofort aktualisiert.`]})}),(0,p.jsx)(t,{textTheme:`Shopping Cart`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`The My Mixx screen displays in real time all products added by the user, organized by category: base, fruits, sweeteners, and nuts. Along with the total price. `,(0,p.jsx)(`br`,{}),`Each product is shown with its name and individual price, and can be removed directly via the X button.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Clicking the X button resets the boolean useState isAdded of the corresponding product to false. This removes the product from the My Mixx list and switches the button in the product card back from "Remove" to "Add". The total price is automatically recalculated and updated instantly.`]})}),(0,p.jsx)(c,{img:`/portfolio/project/Caflex/bilder/08.webp`,extraClass:`img-02`}),(0,p.jsx)(o,{thisProject:`Caflex`})]}),(0,p.jsx)(n,{})]})}export{m as default};