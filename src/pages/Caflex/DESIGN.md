---
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
- **Primary** (`{colors.primary}` — `#002B8A`): All text, icons and outlines on the overview. 10.9:1 on Light.
- **Coffee** (`{colors.coffee}` — `#4B3124`): Café page sheet and the map button. Light text on Coffee: 10.6:1.
- **Light** (`{colors.light}` — `#F9F0E9`): Page background of the overview, text on Coffee.

### Accent
- **Secondary** (`{colors.secondary}` — `#7485A9`): Icons and large text only — 3.3:1 on Light is too low for small text.
- **Accent** (`{colors.accent}` — `#CAD2E4`): Soft blue surfaces and highlights on Primary (8.1:1). Never as text on Light (1.3:1).

### Text
- **Muted** (`{colors.muted}` — Primary at 70%): District names, ratings count, meta text. 5.0:1 on Light. Don't go lower: Primary at 60% is only 3.8:1.
- **Glass** (`{colors.glass}` — Coffee at 20%): Floating buttons over photos, always with an 11px background blur.

## Typography
| Token                     | Font           | Size | Weight | Use                              |
|---------------------------|----------------|------|--------|----------------------------------|
| `{typography.display}`    | Libre Franklin | 32px | 700    | Café name on the café page       |
| `{typography.section}`    | Libre Franklin | 20px | 400    | Section titles ("Entdeck Köln")  |
| `{typography.card-title}` | Libre Franklin | 18px | 400    | Café names in large/small cards  |
| `{typography.body}`       | Libre Franklin | 16px | 400    | Body, city selector              |
| `{typography.button}`     | Libre Franklin | 16px | 500    | Buttons and links                |
| `{typography.meta}`       | Libre Franklin | 12px | 400    | District, rating count (Muted)   |

Café names in the square cards and the slogans use 14px. Light (300) and ExtraLight (200) are loaded but reserved; keep the interface at Regular and Medium.

## Layout
- Mobile-only app: no breakpoints. Widths are capped with `min()` so the layout simply stops growing on large screens (e.g. large cards `min(80vw + 10px, 410px)`, cards `min(40vw, 200px)`).
- `{spacing.md}` (24px) side padding, `{spacing.lg}` (32px) between sections, `{spacing.sm}` (12px) between cards in a row.
- The overview is a vertical list of horizontal rows: large featured cards, a row of square cards ("Entdeck Köln"), a row for the Little Tokyo district, then a 3×3 grid of small cards for the other city ("Was es in anderer Stadt gibt").
- The café page: the photo fills the screen, the Coffee sheet starts at 75% of the viewport height and slides over it.

## Elevation & Depth
- No shadows. Depth comes from layering and blur.
- The café sheet uses a gradient from Coffee at 30% to solid Coffee, with an 11px background blur over the photo.
- The back button floats over the photo as Glass (Coffee 20% + blur).
- The city selector floats above the page with a 1px Primary outline on Light.

## Shapes
- `{rounded.thumb}` 8px — thumbnails in small cards.
- `{rounded.sm}` 12px — square café cards.
- `{rounded.md}` 16px — large cards and gallery photos.
- `{rounded.lg}` 24px — the map.
- `{rounded.sheet}` 52px — top corners of the café page sheet and photo.
- `{rounded.pill}` — buttons, the back button and (20px) the city selector.

## Motion & Micro-interaction
- The café page snaps softly between photo and sheet (`scroll-snap-type: y proximity`).
- Opening the gallery hides the map, enlarges the photos to full width and lets them scroll sideways; the map button inverts to Light with Coffee text.
- The city selector expands in place: the arrow rotates 180° and the options appear below the current city.
- No decorative animation — movement only follows the user's gesture.

## Voice & Content Strategy
- German, informal ("du"), short and warm: "Entdeck Köln", "Was es in anderer Stadt gibt", "Karte schauen".
- Taglines speak to the user directly: "Finde das Café, das mit dir matcht."
- Every café has a one-line slogan in its own voice (e.g. "Kaffee in Premiumqualität"), plus district, rating and number of reviews.

## Components
- **Café card** (`{components.cafe-card}`): Square photo (`{rounded.sm}`), name (14px) and district (12px, Muted) below.
- **Large café card** (`{components.cafe-card-large}`): 16:9 photo (`{rounded.md}`), name (18px), slogan (14px) and district (Muted). Used for featured cafés at the top.
- **Small café card** (`{components.cafe-card-small}`): Row with an 80px square thumbnail (`{rounded.thumb}`), name, slogan and district. Used in the 3×3 grid.
- **City selector** (`{components.city-selector}`): Floating pill with the current city and an arrow. Opens into a list of cities ("Stadt auswählen").
- **Back button** (`{components.back-button}`): 50px Glass circle with an arrow, fixed top left on the café page.
- **Map button** (`{components.map-button}`): Coffee pill with Light text ("Karte schauen"), centered at the bottom of the map.
- **Café sheet** (`{components.cafe-sheet}`): Coffee sheet over the photo with name, slogan, rating, city and district, links to Instagram and website, the map and the gallery.

## Do's and Don'ts
- Do let the café photos lead — big, rounded, never cropped awkwardly.
- Do keep the overview in Primary on Light and the café page in Light on Coffee.
- Do use Muted (Primary 70%) for meta text, not lower.
- Don't use Secondary or Accent for small text on Light.
- Don't add shadows or extra colors; blue and coffee are enough.
- Don't place text directly on café photos without the Coffee sheet or Glass behind it.
