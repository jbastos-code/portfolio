import{t as e}from"./jsx-runtime-C0r-jb24.js";import{i as t,n,o as r,r as i}from"./index-C0P_xuqM.js";import{n as a,t as o}from"./NextProject-Bj7XfE6c.js";import{n as s,t as c}from"./MotionImage-Bp6foaes.js";import{n as l,r as u,t as d}from"./DesignMd-Cd7gSMIw.js";var f=`---
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
`,p=e();function m(){return(0,p.jsxs)(`div`,{className:`Caflex`,children:[(0,p.jsx)(r,{}),(0,p.jsxs)(`main`,{className:`project`,children:[(0,p.jsx)(a,{name:`Caflex`,logo:`/portfolio/project/Caflex/logo.svg`,img:`/portfolio/project/Caflex/cover.webp`,description:(0,p.jsxs)(p.Fragment,{children:[`Wo gibt's den besten Kaffee in der Stadt?`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Caflex ist eine App, die dir hilft, die besten Cafés in deiner Stadt zu entdecken. Von gemütlichen Eckcafés bis hin zu modernen Specialty-Coffee-Shops.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Zu meinen Aufgaben gehörten die Gestaltung der visuellen Identität sowie die Konzeption und Entwicklung der App.`]}),descriptionEn:(0,p.jsxs)(p.Fragment,{children:[`Where's the best coffee in town?`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Caflex is an app that helps you discover the best cafés in your city. From cozy neighborhood spots to modern specialty coffee shops.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`My responsibilities included designing the visual identity as well as conceptualizing and developing the app.`]}),media:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{img:`/portfolio/project/Caflex/bilder/01.webp`,noMobile:!0,extraClass:`img-03`}),(0,p.jsx)(c,{img:`/portfolio/project/Caflex/bilder/01.webp`,onlyMobile:!0,extraClass:`img-01`})]})}),(0,p.jsx)(i,{textTitel:`Ein Café findet man über das Gefühl`,textSubtitel:`Ausgangslage`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`Wer ein neues Café sucht, landet meist in Karten- oder Bewertungs-Apps: lange Listen, Sterne, kleine Fotos. Dabei entscheidet man sich für ein Café selten nach der Bewertung allein, sondern nach der Atmosphäre – Licht, Plätze, Stimmung.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Die zentrale Frage für Caflex lautete deshalb: Wie hilft man Menschen, ein Café nach seinem Gefühl zu entdecken – schnell, ohne Informationsflut und mit allem, was man braucht, um wirklich hinzugehen?`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Nutzer:innen-Ziele`}),(0,p.jsx)(`br`,{}),`– Schnell gute Cafés in der eigenen Stadt entdecken.`,(0,p.jsx)(`br`,{}),`– Die Atmosphäre eines Cafés einschätzen, bevor man hingeht.`,(0,p.jsx)(`br`,{}),`– Ohne Umwege dorthin finden.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Produkt-Ziele`}),(0,p.jsx)(`br`,{}),`– Cafés so zeigen, dass ihre Persönlichkeit sichtbar wird.`,(0,p.jsx)(`br`,{}),`– Zum Entdecken anregen – auch über den eigenen Stadtteil oder die eigene Stadt hinaus.`,(0,p.jsx)(`br`,{}),`– Eine Struktur, die mit weiteren Städten wachsen kann.`]})}),(0,p.jsx)(t,{textTitel:`You find a café by feeling`,textSubtitel:`The challenge`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`When looking for a new café, most people end up in map or review apps: long lists, stars, small photos. Yet we rarely choose a café by its rating alone – we choose it by its atmosphere: light, seats, mood.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`So the key question for Caflex was: how do you help people discover a café by how it feels – quickly, without information overload and with everything they need to actually go there?`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`User goals`}),(0,p.jsx)(`br`,{}),`– Quickly discover good cafés in your own city.`,(0,p.jsx)(`br`,{}),`– Judge a café's atmosphere before going there.`,(0,p.jsx)(`br`,{}),`– Get there without detours.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Product goals`}),(0,p.jsx)(`br`,{}),`– Show cafés in a way that makes their personality visible.`,(0,p.jsx)(`br`,{}),`– Encourage exploring – beyond your own district or city.`,(0,p.jsx)(`br`,{}),`– A structure that can grow with more cities.`]})}),(0,p.jsx)(i,{textTitel:`Für wen ich gestaltet habe`,textSubtitel:`Zielgruppe`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`Ich habe mit einer Proto-Persona gearbeitet – einer Annahme auf Basis von Desk Research, die im nächsten Schritt mit echten Interviews überprüft werden sollte.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Mia, 29, ist vor Kurzem nach Düsseldorf gezogen und arbeitet oft remote. Am Wochenende probiert sie gern neue Cafés aus, unter der Woche sucht sie einen ruhigen Ort zum Arbeiten. Sie entscheidet nach Fotos und Stimmung, nicht nach der längsten Liste.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Bedürfnisse:`}),` große, ehrliche Fotos, die wichtigsten Infos auf einen Blick, ein schneller Weg zur Karte.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Frustrationen:`}),` endlose Listen, kleine Vorschaubilder, Apps, die sich wie ein Branchenverzeichnis anfühlen.`]})}),(0,p.jsx)(t,{textTitel:`Who I designed for`,textSubtitel:`Target group`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`I worked with a proto-persona – an assumption based on desk research that should be validated with real interviews as a next step.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Mia, 29, recently moved to Düsseldorf and often works remotely. On weekends she likes trying new cafés; during the week she looks for a quiet place to work. She decides by photos and mood, not by the longest list.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Needs:`}),` big, honest photos, the key information at a glance, a quick way to the map.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Frustrations:`}),` endless lists, tiny thumbnails, apps that feel like a business directory.`]})}),(0,p.jsx)(i,{textTitel:`Wie man heute Cafés sucht`,textSubtitel:`Research`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`strong`,{children:`Verglichen habe ich:`}),` Karten-Apps, Bewertungsplattformen und Café-Guides – wie Cafés aufgelistet werden, welche Informationen zuerst kommen und wie man von der Liste zum Café findet.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Zentrale Erkenntnisse`}),(0,p.jsx)(`br`,{}),`– Listen werden von Sternen und Zahlen dominiert, die Atmosphäre bleibt in kleinen Fotos versteckt.`,(0,p.jsx)(`br`,{}),`– Zu viele Filter und Details machen die Entscheidung schwerer statt leichter.`,(0,p.jsx)(`br`,{}),`– Der Weg zum Café ist in Karten-Apps schon gelöst – dorthin sollte man nahtlos übergeben, statt ihn nachzubauen.`]})}),(0,p.jsx)(t,{textTitel:`How people search for cafés today`,textSubtitel:`Research`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`strong`,{children:`I compared:`}),` map apps, review platforms and café guides – how cafés are listed, which information comes first and how you get from the list to the café.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Key insights`}),(0,p.jsx)(`br`,{}),`– Lists are dominated by stars and numbers; the atmosphere stays hidden in small photos.`,(0,p.jsx)(`br`,{}),`– Too many filters and details make the decision harder, not easier.`,(0,p.jsx)(`br`,{}),`– Getting to the café is already solved by map apps – it's better to hand over to them than to rebuild it.`]})}),(0,p.jsx)(i,{textTitel:`Ruhig. Fokussiert. Einladend.`,textSubtitel:`Design`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`Für das Design habe ich eine zurückhaltende und bewusste Bildsprache entwickelt, die das Wesen der App widerspiegelt. Die besten Cafés der Stadt zu entdecken.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Die Farbpalette greift warme Kaffeetöne auf, vertraut und geerdet, kontrastiert durch Akzente in Blau, die Frische und Klarheit bringen. Diese Kombination schafft eine visuelle Balance zwischen Gemütlichkeit und Orientierung.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Farbe:`}),` Die App hat zwei Welten. Die Übersicht ist Blau auf Creme – klar und ruhig, zum Orientieren. Die Café-Seite wechselt zu Kaffeebraun über dem Foto – warm, zum Ankommen. Beide Kombinationen liegen deutlich über WCAG AA (10.9:1 und 10.6:1).`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Typografie:`}),` Eine Schrift, Libre Franklin, in ruhigen Größen. Hierarchie entsteht über Größe und Transparenz statt über viele Schriftschnitte, damit die Fotos die lautesten Elemente bleiben.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Formen:`}),` Abgerundete Fotos und ein Info-Panel mit großen Radien, keine Schatten. Tiefe entsteht durch Ebenen und Unschärfe – das Panel liegt wie Milchglas über dem Foto.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Diese Regeln habe ich in einer DESIGN.md festgehalten, damit sie konsistent bleiben – auch wenn später andere Personen oder KI-Tools an der App weiterarbeiten.`]})}),(0,p.jsx)(t,{textTitel:`Sober. Focused. Inviting.`,textSubtitel:`Design`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`For the design, I developed a restrained and intentional visual language that reflects the essence of the app. Discovering great coffee in the city.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`The color palette draws from warm coffee tones, grounded and familiar, contrasted by touches of blue that bring freshness and clarity. This combination creates a visual balance between coziness and orientation.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Color:`}),` The app has two worlds. The overview is blue on cream – clear and calm, for orientation. The café page switches to coffee brown over the photo – warm, for arriving. Both combinations are well above WCAG AA (10.9:1 and 10.6:1).`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Typography:`}),` One typeface, Libre Franklin, in calm sizes. Hierarchy comes from size and transparency instead of many weights, so the photos remain the loudest elements.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Shapes:`}),` Rounded photos and an info panel with large radii, no shadows. Depth comes from layers and blur – the panel sits over the photo like frosted glass.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`I documented these rules in a DESIGN.md so they stay consistent – even when other people or AI tools work on the app later.`]})}),(0,p.jsx)(l,{visual:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`img`,{loading:`lazy`,decoding:`async`,className:`img-project padding no-mobile`,src:`/portfolio/project/Caflex/bilder/06.webp`,alt:`bild`}),(0,p.jsx)(`img`,{loading:`lazy`,decoding:`async`,className:`img-project padding only-mobile`,src:`/portfolio/project/Caflex/bilder/07.webp`,alt:`bild`}),(0,p.jsx)(u,{name:`Libre Franklin`,font:`'Libre Franklin', sans-serif`})]}),md:(0,p.jsx)(d,{file:`caflex/DESIGN.md`,content:f})}),(0,p.jsx)(i,{textTitel:`Components`,textSubtitel:`Funktionalität`}),(0,p.jsx)(t,{textTitel:`Components`,textSubtitel:`Funktionality`}),(0,p.jsx)(`div`,{className:`img-mobile`,children:(0,p.jsx)(`img`,{loading:`lazy`,decoding:`async`,src:`/portfolio/project/Caflex/videos/03.gif`,alt:``})}),(0,p.jsx)(i,{textTheme:`Stadt auswählen`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`Die Stadtauswahl wird über useState verwaltet, wobei die gewählte Stadt im localStorage persistiert wird. So bleibt sie auch nach einem Seitenreload erhalten.Ein zweiter Boolean-State steuert das Auswahlmenü, dessen Sichtbarkeit per dynamischer CSS-Klasse geregelt wird.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Da das Projekt noch früh in der Entwicklung ist, sind aktuell nur Düsseldorf und Köln verfügbar. Die Café-Daten werden je nach aktiver Stadt aus einem typisierten Objekt geladen, die andere Stadt wird automatisch berechnet und separat angezeigt.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Die zufälligen Empfehlungen werden mit useMemo nur neu berechnet, wenn sich die Stadt ändert.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Warum so:`}),` Die gewählte Stadt bleibt gespeichert – wer Caflex öffnet, landet direkt in seiner Stadt, ohne jedes Mal neu zu wählen. Der Auswahlschalter sitzt klein oben auf der Seite und klappt erst beim Antippen auf – so nimmt er den Fotos keinen Platz. Die andere Stadt wird am Ende der Seite gezeigt und lädt dazu ein, auch beim nächsten Ausflug Neues zu entdecken.`]})}),(0,p.jsx)(t,{textTheme:`City Selection`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`The city selection is managed via useState, with the chosen city persisted in localStorage so it remains intact after a page reload. A second boolean state controls the selection menu, whose visibility is handled through a dynamic CSS class.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Since the project is still in early development, only Düsseldorf and Cologne are currently available. The café data is loaded from a typed object based on the active city, while the other city is automatically derived and displayed separately.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`The random recommendations are recalculated with useMemo only when the city changes.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Why:`}),` The selected city is remembered – when you open Caflex you land straight in your city without choosing again. The selector sits small at the top of the page and only expands when tapped – so it takes no space from the photos. The other city is shown at the end of the page and invites you to discover something new on your next trip.`]})}),(0,p.jsx)(`img`,{loading:`lazy`,decoding:`async`,src:`/portfolio/project/Caflex/videos/02.gif`,className:`video-02`,alt:``}),(0,p.jsx)(s,{lines:[{content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-blue`,children:`const`}),` [`,(0,p.jsx)(`span`,{className:`code-blue`,children:`city`}),`, `,(0,p.jsx)(`span`,{className:`code-blue`,children:`setCity`}),`] = `,(0,p.jsx)(`span`,{className:`code-red`,children:`useState`}),`(`,(0,p.jsx)(`span`,{className:`code-blue`,children:`() =>`}),` `,`{`]})},{gap:1,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-blue`,children:`return`}),` `,(0,p.jsx)(`span`,{className:`code-blue`,children:`localStorage`}),`.`,(0,p.jsx)(`span`,{className:`code-red`,children:`getItem`}),`(`,(0,p.jsx)(`span`,{className:`code-red`,children:`"city"`}),`) ?? `,(0,p.jsx)(`span`,{className:`code-red`,children:`"Düsseldorf"`}),`;`]})},{content:(0,p.jsx)(p.Fragment,{children:`});`})},{content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-blue`,children:`const`}),` `,(0,p.jsx)(`span`,{className:`code-blue`,children:`cafes`}),` = `,(0,p.jsx)(`span`,{className:`code-blue`,children:`cafesTyped`}),`[`,(0,p.jsx)(`span`,{className:`code-blue`,children:`city`}),`];`]})}]}),(0,p.jsx)(i,{textTheme:`Cafés sortieren`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`Die Café-Cards sind wiederverwendbare React-Komponenten wie “CafeCard”, “CafeCardLarge” und “CafeCardSmall”, die ihre Daten über Props empfangen. Per .map() wird das Array iteriert und die Eigenschaften jedes Cafés direkt an die Komponente übergeben.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Diese Struktur macht das Projekt leicht skalierbar: Die Daten liegen aktuell in einem typisierten JSON-Objekt, könnten aber problemlos durch einen API-Call ersetzt werden, ohne die Komponentenstruktur anzupassen.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Warum so:`}),` Drei Kartengrößen schaffen eine klare Hierarchie: große Karten im 16:9-Format für Empfehlungen ganz oben, quadratische Karten in seitlich scrollbaren Reihen für das Stöbern und kleine Karten mit Vorschaubild für die andere Stadt. Die seitlichen Reihen zeigen am Rand schon die nächste Karte – ein Hinweis, dass es weitergeht, ohne die Seite endlos lang zu machen. Überall steht das Foto zuerst, Name und Stadtteil folgen darunter.`]})}),(0,p.jsx)(t,{textTheme:`Sorting Cafés`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`The café cards are reusable React components such as "CafeCard", "CafeCardLarge", and "CafeCardSmall", which receive their data via props. The array is iterated using .map(), passing each café's properties directly to the component.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`This structure makes the project easily scalable: the data currently lives in a typed JSON object, but could seamlessly be replaced by an API call without modifying the component structure.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Why:`}),` Three card sizes create a clear hierarchy: large 16:9 cards for recommendations at the top, square cards in sideways-scrolling rows for browsing, and small cards with a thumbnail for the other city. The sideways rows already show the next card at the edge – a hint that there is more, without making the page endlessly long. The photo always comes first, with name and district below.`]})}),(0,p.jsx)(`img`,{loading:`lazy`,decoding:`async`,src:`/portfolio/project/Caflex/videos/01.gif`,className:`video-01`,alt:``}),(0,p.jsx)(s,{lines:[{content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-rosa`,children:`<div `}),(0,p.jsx)(`span`,{className:`code-purple`,children:`className`}),`=`,(0,p.jsx)(`span`,{className:`code-red`,children:`"scroll CafesList"`}),(0,p.jsx)(`span`,{className:`code-rosa`,children:`>`})]})},{gap:1,content:(0,p.jsxs)(p.Fragment,{children:[`{`,`cafes.`,(0,p.jsx)(`span`,{className:`code-red`,children:`map`}),`((`,(0,p.jsx)(`span`,{className:`code-blue`,children:`cafe`}),`) => (`]})},{gap:2,content:(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(`span`,{className:`code-rosa`,children:`<CafeCard`})})},{gap:3,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-purple`,children:`id`}),`=`,`{`,`cafe.`,(0,p.jsx)(`span`,{className:`code-blue`,children:`id`}),`}`]})},{gap:3,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-purple`,children:`img`}),`=`,`{`,`cafe.`,(0,p.jsx)(`span`,{className:`code-blue`,children:`foto`}),`}`]})},{gap:3,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-purple`,children:`name`}),`=`,`{`,`cafe.`,(0,p.jsx)(`span`,{className:`code-blue`,children:`name`}),`}`]})},{gap:3,content:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`code-purple`,children:`stadtteil`}),`=`,`{`,`cafe.`,(0,p.jsx)(`span`,{className:`code-blue`,children:`stadtteil`}),`}`]})},{gap:2,content:(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(`span`,{className:`code-rosa`,children:`/>`})})},{gap:1,content:(0,p.jsx)(p.Fragment,{children:`))`})},{content:(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(`span`,{className:`code-rosa`,children:`</div>`})})}]}),(0,p.jsxs)(`div`,{className:`img-mobile`,children:[(0,p.jsx)(`img`,{loading:`lazy`,decoding:`async`,src:`/portfolio/project/Caflex/bilder/04.webp`,alt:`bild`}),(0,p.jsx)(`img`,{loading:`lazy`,decoding:`async`,src:`/portfolio/project/Caflex/bilder/05.webp`,alt:`bild`})]}),(0,p.jsx)(i,{textTheme:`Café-Seite`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`Das Foto des Cafés füllt den ganzen Bildschirm. Darüber liegt ein Panel mit Name, Slogan, Bewertung samt Anzahl der Bewertungen, Stadt und Stadtteil sowie Links zu Instagram und Website. Darunter folgen eine Karte mit dem Button „Karte schauen“ und eine Galerie, die sich zu großen, seitlich scrollbaren Fotos öffnet.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Warum so:`}),` Das Foto kommt zuerst, weil die Atmosphäre das wichtigste Entscheidungskriterium ist. Das Panel legt sich darüber, statt das Foto zu ersetzen – so bleibt die Stimmung beim Lesen spürbar. Bewertung und Anzahl stehen nebeneinander, weil eine 4.8 erst mit vielen Bewertungen Vertrauen schafft. Der Stadtteil zeigt, wie weit es ungefähr ist.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`„Karte schauen“ öffnet die Adresse direkt in der Karten-App, statt eine eigene Navigation nachzubauen – dort, wo Nutzer:innen den Weg ohnehin planen. Der Zurück-Button schwebt halbtransparent mit Unschärfe über dem Foto und bleibt so auf jedem Bild lesbar.`]})}),(0,p.jsx)(t,{textTheme:`Café Page`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`The café's photo fills the whole screen. On top sits a panel with the name, slogan, rating including the number of reviews, city and district, plus links to Instagram and the website. Below follow a map with a "Karte schauen" (view map) button and a gallery that opens into large, sideways-scrolling photos.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Why:`}),` The photo comes first because atmosphere is the most important decision criterion. The panel lies over the photo instead of replacing it, so the mood stays present while reading. Rating and number of reviews sit side by side, because a 4.8 only builds trust with many reviews. The district shows roughly how far away it is.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`"Karte schauen" opens the address directly in the maps app instead of rebuilding navigation – where users plan their route anyway. The back button floats semi-transparent with a blur over the photo, so it stays readable on any image.`]})}),(0,p.jsx)(c,{img:`/portfolio/project/Caflex/bilder/08.webp`,extraClass:`img-02`}),(0,p.jsx)(i,{textTitel:`Wie ich das Konzept teste`,textSubtitel:`Validierung`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`Als nächster Schritt ist ein moderierter Usability-Test mit fünf Personen aus der Zielgruppe geplant, mit vier Aufgaben:`,(0,p.jsx)(`br`,{}),`1. Wechsle zu Köln und finde ein Café, das dich anspricht.`,(0,p.jsx)(`br`,{}),`2. Finde heraus, wie gut das Café bewertet ist und in welchem Stadtteil es liegt.`,(0,p.jsx)(`br`,{}),`3. Sieh dir weitere Fotos des Cafés an.`,(0,p.jsx)(`br`,{}),`4. Öffne den Weg zum Café in deiner Karten-App.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`Gemessen werden die Erfolgsquote pro Aufgabe, die Zeit bis zum Abschluss und die Stellen, an denen Nutzer:innen zögern.`]})}),(0,p.jsx)(t,{textTitel:`How I test the concept`,textSubtitel:`Validation`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`As a next step, I plan a moderated usability test with five people from the target group and four tasks:`,(0,p.jsx)(`br`,{}),`1. Switch to Cologne and find a café that appeals to you.`,(0,p.jsx)(`br`,{}),`2. Find out how well the café is rated and which district it is in.`,(0,p.jsx)(`br`,{}),`3. Look at more photos of the café.`,(0,p.jsx)(`br`,{}),`4. Open the route to the café in your maps app.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),`I will measure the success rate per task, the time to completion and the moments where users hesitate.`]})}),(0,p.jsx)(i,{textTitel:`Was ich mitnehme`,textSubtitel:`Learnings & nächste Schritte`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`– Weniger Information kann die bessere Entscheidungshilfe sein, wenn die richtige Information zuerst kommt – hier das Foto.`,(0,p.jsx)(`br`,{}),`– Nicht alles muss neu gebaut werden: Die Übergabe an die Karten-App ist für Nutzer:innen besser als jede eigene Lösung.`,(0,p.jsx)(`br`,{}),`– Meta-Texte mit 60 % Deckkraft sind auf Creme zu schwach (3.8:1). In der nächsten Version nutze ich mindestens 70 %.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Nächste Schritte:`}),` Öffnungszeiten und Filter wie „zum Arbeiten geeignet“ · Favoriten speichern · weitere Städte · Usability-Test mit der Zielgruppe.`]})}),(0,p.jsx)(t,{textTitel:`What I take away`,textSubtitel:`Learnings & next steps`,textParagraph:(0,p.jsxs)(p.Fragment,{children:[`– Less information can be the better decision aid when the right information comes first – here, the photo.`,(0,p.jsx)(`br`,{}),`– Not everything has to be built from scratch: handing over to the maps app is better for users than any custom solution.`,(0,p.jsx)(`br`,{}),`– Meta text at 60% opacity is too weak on cream (3.8:1). In the next version I'll use at least 70%.`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`br`,{}),(0,p.jsx)(`strong`,{children:`Next steps:`}),` opening hours and filters like "good for working" · save favourites · more cities · usability test with the target group.`]})}),(0,p.jsx)(o,{thisProject:`Caflex`})]}),(0,p.jsx)(n,{})]})}export{m as default};