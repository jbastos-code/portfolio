import './Mova.css'
import '../Projectpage.css'
import Nav from '../../components/Nav/Nav'
import ProjectHeader from '../../components/Project/Header/ProjectHeader'
import ProjectFacts from '../../components/Project/Facts/ProjectFacts'
import { ProjectText, ProjectTextEn } from '../../components/ProjectText/ProjectText'
import Footer from '../../components/Footer/Footer'
import NextProject from '../../components/NextProject/NextProject'
import Typo from '../../components/Typo/Typo'
import DesignToggle from '../../components/Project/DesignToggle/DesignToggle'
import DesignMd from '../../components/Project/DesignMd/DesignMd'
import movaDesignMd from './DESIGN.md?raw'

function Mova() {

  return (
    <div className='Mova'>
      <Nav />

      <main className='project'>
        <ProjectHeader
          name='Mova'
          logo='/portfolio/project/Mova/logo.svg'
          img='/portfolio/project/Mova/cover.webp'
          description={<>
            Mova ist ein Online-Shop-Konzept für handgefertigte Keramikvasen, das ein digitales Zuhause schafft, das genauso ruhig und zeitlos wirkt wie die Produkte selbst.
            <br /><br />
            Bei Mova werden Wert und Qualität ernst genommen. Ein Geschäft, das nicht nur den Einkauf erleichtert, sondern auch die Ästhetik der Marke durch visuelle Sprache kommuniziert.
            <br /><br />
            Mein Ziel war es, Ehrlichkeit in den digitalen Raum zu bringen. Klares Layout, intuitive Navigation, nur das Notwendige.
          </>}
          descriptionEn={<>
            Mova is an e-commerce concept for handcrafted ceramic vases, creating a digital home that feels just as calm and timeless as the products themselves.
            <br /><br />
            At Mova, value and quality are taken seriously. A store that not only makes shopping easier, but also communicates the brand's aesthetic through visual language.
            <br /><br />
            My goal was to bring honesty into the digital space. Clean layout, intuitive navigation, only what's necessary.
          </>}
          media={<>
            <img loading="lazy" decoding="async" className='img-project no-mobile' src="/portfolio/project/Mova/bilder/01.webp" alt="bild" />
            <img loading="lazy" decoding="async" className='img-project only-mobile' src="/portfolio/project/Mova/bilder/02.webp" alt="bild" />
          </>}
        />

        {/* TODO: confirm the role and add further tools */}
        <ProjectFacts
          facts={[
            { label: 'Projektart', labelEn: 'Project type', value: 'Konzeptprojekt, Online-Shop', valueEn: 'Concept project, online shop' },
            { label: 'Rolle', labelEn: 'Role', value: 'UX/UI Design' },
            { label: 'Tools', value: 'Figma' },
          ]}
        />

        {/* ---------- Ausgangslage ---------- */}
        {/* TODO: optionally add how the project started (own project, course, fictional client) */}
        <ProjectText
          textTitel='Handgemacht braucht Ruhe – und Orientierung'
          textSubtitel='Ausgangslage'
          textParagraph={<>
            Handgefertigte Keramik wird online oft in einem von zwei Extremen verkauft: in überladenen Marktplätzen, in denen das einzelne Stück zwischen Bannern, Rabatten und Empfehlungen untergeht – oder auf reinen Galerie-Websites, die schön aussehen, aber das Einkaufen erschweren.
            <br /><br />
            Für ein Produkt, dessen Wert in Form, Material und Handarbeit liegt, ist beides ein Problem: Im ersten Fall fehlt die Wertigkeit, im zweiten die Orientierung.
            <br /><br />
            Die zentrale Frage für Mova lautete deshalb: Wie gestaltet man einen Shop, der so ruhig wirkt wie ein Galerieraum und trotzdem so klar funktioniert wie ein guter Online-Shop?
          </>}
        />
        <ProjectTextEn
          textTitel='Handmade needs calm – and orientation'
          textSubtitel='The challenge'
          textParagraph={<>
            Handmade ceramics are often sold online in one of two extremes: crowded marketplaces where a single piece gets lost between banners, discounts and recommendations – or pure gallery websites that look beautiful but make shopping hard.
            <br /><br />
            For a product whose value lies in its shape, material and craftsmanship, both are a problem: the first lacks a sense of value, the second lacks orientation.
            <br /><br />
            So the key question for Mova was: how do you design a shop that feels as calm as a gallery and still works as clearly as a good online store?
          </>}
        />

        {/* ---------- Ziele ---------- */}
        <ProjectText
          textTitel='Was Mova leisten muss'
          textSubtitel='Ziele'
          textParagraph={<>
            <strong>Nutzer:innen-Ziele</strong>
            <br />– Schnell einen Überblick über das Sortiment bekommen und eine Vase finden, die zum eigenen Raum passt.
            <br />– Größe, Material und Farbe einer Vase vor dem Kauf sicher einschätzen.
            <br />– Ohne Umwege und Überraschungen bezahlen.
            <br /><br />
            <strong>Business-Ziele</strong>
            <br />– Die Wertigkeit der Handarbeit sichtbar und den Preis nachvollziehbar machen.
            <br />– Kollektionen als Marke erzählen, nicht nur Einzelprodukte verkaufen.
            <br />– Stöbern innerhalb einer Kollektion fördern, um den Warenkorbwert zu erhöhen.
          </>}
        />
        <ProjectTextEn
          textTitel='What Mova has to deliver'
          textSubtitel='Goals'
          textParagraph={<>
            <strong>User goals</strong>
            <br />– Get a quick overview of the range and find a vase that fits their own space.
            <br />– Confidently judge a vase's size, material and color before buying.
            <br />– Pay without detours or surprises.
            <br /><br />
            <strong>Business goals</strong>
            <br />– Make the value of the craftsmanship visible and the price understandable.
            <br />– Tell collections as a brand instead of only selling single products.
            <br />– Encourage browsing within a collection to increase the basket value.
          </>}
        />

        {/* ---------- Zielgruppe ---------- */}
        {/* TODO: adapt the proto-persona to your own assumptions */}
        <ProjectText
          textTitel='Für wen ich gestaltet habe'
          textSubtitel='Zielgruppe'
          textParagraph={<>
            Ich habe mit einer Proto-Persona gearbeitet – einer Annahme auf Basis von Desk Research, die im nächsten Schritt mit echten Interviews überprüft werden sollte.
            <br /><br />
            Lena, 34, arbeitet im Kreativbereich und richtet ihre Wohnung bewusst ein. Sie kauft wenige, dafür hochwertige Objekte. Sie stöbert gern, entscheidet aber erst, wenn sie Maße und Material genau kennt. Rabatt-Banner und Pop-ups wirken auf sie billig.
            <br /><br />
            <strong>Bedürfnisse:</strong> Ruhe beim Stöbern, ehrliche Produktinformationen, ein schneller Checkout.
            <br />
            <strong>Frustrationen:</strong> Produktbilder ohne Größenbezug, versteckte Versandkosten, überladene Seiten.
          </>}
        />
        <ProjectTextEn
          textTitel='Who I designed for'
          textSubtitel='Target group'
          textParagraph={<>
            I worked with a proto-persona – an assumption based on desk research that should be validated with real interviews as a next step.
            <br /><br />
            Lena, 34, works in a creative field and furnishes her home with intention. She buys few but high-quality objects. She enjoys browsing, but only decides once she knows the exact dimensions and material. Discount banners and pop-ups feel cheap to her.
            <br /><br />
            <strong>Needs:</strong> calm while browsing, honest product information, a fast checkout.
            <br />
            <strong>Frustrations:</strong> product photos without a sense of scale, hidden shipping costs, cluttered pages.
          </>}
        />

        {/* ---------- Research ---------- */}
        {/* TODO: name the 3–5 shops you analysed and confirm or replace the insights below */}
        <ProjectText
          textTitel='Was andere Shops gut und schlecht machen'
          textSubtitel='Research'
          textParagraph={<>
            <strong>Verglichen habe ich:</strong> Startseite und Navigation, Produktdarstellung im Grid, Informationen auf der Produktseite (Maße, Material, Pflege) sowie Warenkorb und Checkout.
            <br /><br />
            <strong>Zentrale Erkenntnisse</strong>
            <br />– Freigestellte Produkte auf einem ruhigen Hintergrund lassen Formen besser wirken als Lifestyle-Fotos im Grid.
            <br />– Maße stehen oft nur als Zahl im Text – bei einem Objekt, das man in den Raum stellt, schwer vorstellbar.
            <br />– Versandkosten und Lieferzeit tauchen häufig erst im letzten Schritt auf und sorgen dort für Abbrüche.
          </>}
        />
        <ProjectTextEn
          textTitel='What other shops do well and badly'
          textSubtitel='Research'
          textParagraph={<>
            <strong>I compared:</strong> home page and navigation, product presentation in the grid, information on the product page (dimensions, material, care) as well as cart and checkout.
            <br /><br />
            <strong>Key insights</strong>
            <br />– Cut-out products on a calm background show their shapes better than lifestyle photos in the grid.
            <br />– Dimensions are often just a number in the text – hard to imagine for an object you place in a room.
            <br />– Shipping costs and delivery times often only appear in the last step, where they cause drop-offs.
          </>}
        />

        {/* ---------- User Flow ---------- */}
        {/* TODO: add a sitemap or user flow diagram as an image */}
        <ProjectText
          textTitel='Von der Kollektion zur Bestellung'
          textSubtitel='User Flow'
          textParagraph={<>
            Der Hauptpfad hat fünf Schritte: Startseite → Store mit allen Kollektionen → Produktseite → Einkaufstasche → Checkout (Versand, Adresse, Zahlung).
            <br /><br />
            Kollektionen sind das ordnende Prinzip. Jede Vase trägt ihren Kollektionsnamen schon im Grid, und auf der Produktseite führen weitere Stücke derselben Kollektion zurück ins Stöbern. So entsteht keine Sackgasse: Wer eine Vase mag, findet direkt ihre „Verwandten“.
          </>}
        />
        <ProjectTextEn
          textTitel='From collection to order'
          textSubtitel='User Flow'
          textParagraph={<>
            The main path has five steps: home → store with all collections → product page → shopping bag → checkout (shipping, address, payment).
            <br /><br />
            Collections are the organising principle. Every vase shows its collection name right in the grid, and on the product page more pieces from the same collection lead back into browsing. There is no dead end: if you like a vase, you immediately find its "relatives".
          </>}
        />

        {/* ---------- Design ---------- */}
        <ProjectText
          textTitel='Ästhetik. Erdig. Zeitlos'
          textSubtitel='Design'
          textParagraph={<>
            Für das Design habe ich eine warme und erdige Bildsprache entwickelt, die die natürliche Ruhe der handgefertigten Vasen widerspiegelt.
            <br /><br />
            Die zwei Blautöne in der Palette wurden bewusst für einen Hauch von Eleganz und Sanftheit gewählt, während die erdigen Farben die organischen Formen der Kollektionen betonen und dieselbe Klarheit und Beständigkeit vermitteln, die auch die Marke selbst verkörpert.
            <br /><br />
            <strong>Farbe:</strong> Ceramic-Rot (#651A14) ist die Fläche, auf der alles steht – warm wie gebrannter Ton. Sand und Clay rahmen die Produkte, ohne mit ihnen zu konkurrieren. Die zwei Blautöne sind die einzigen kühlen Farben und werden sparsam eingesetzt, damit sie Aufmerksamkeit genau dort lenken, wo sie gebraucht wird.
            <br /><br />
            <strong>Typografie:</strong> Eine einzige Schrift, Afacad, in einer ruhigen Hierarchie. Hierarchie entsteht über Größe und Gewicht, nicht über viele Farben.
            <br /><br />
            <strong>Formen:</strong> Weiche, abgerundete Ecken greifen die Formen der Vasen auf. Keine Schatten – Tiefe entsteht durch Farbe und Fläche.
            <br /><br />
            Diese Regeln habe ich in einer DESIGN.md festgehalten, damit sie konsistent bleiben – auch wenn später andere Personen oder KI-Tools am Shop weiterarbeiten.
          </>}
        />
        <ProjectTextEn
          textTitel='Aesthetic. Earthy. Timeless'
          textSubtitel='Design'
          textParagraph={<>
            For the design, I developed a warm and earthy visual language that reflects the natural calm of the handcrafted vases.
            <br /><br />
            The two shades of blue in the palette were deliberately chosen for a touch of elegance and softness, while the earthy tones highlight the organic shapes of the collections and convey the same clarity and consistency that the brand itself embodies.
            <br /><br />
            <strong>Color:</strong> Ceramic red (#651A14) is the surface everything sits on – warm like fired clay. Sand and Clay frame the products without competing with them. The two blues are the only cool colors and are used sparingly, so they draw attention exactly where it is needed.
            <br /><br />
            <strong>Typography:</strong> A single typeface, Afacad, in a calm hierarchy. Hierarchy comes from size and weight, not from many colors.
            <br /><br />
            <strong>Shapes:</strong> Soft, rounded corners echo the forms of the vases. No shadows – depth comes from color and surface.
            <br /><br />
            I documented these rules in a DESIGN.md so they stay consistent – even when other people or AI tools work on the shop later.
          </>}
        />

        <DesignToggle
          visual={
            <>
              <img loading="lazy" decoding="async" className='img-project no-mobile' src="/portfolio/project/Mova/bilder/05.webp" alt="bild" />
              <img loading="lazy" decoding="async" className='img-project only-mobile' src="/portfolio/project/Mova/bilder/06.webp" alt="bild" />

              <img loading="lazy" decoding="async" className='img-project padding no-mobile' src="/portfolio/project/Mova/bilder/07.webp" alt="bild" />
              <img loading="lazy" decoding="async" className='img-project padding only-mobile' src="/portfolio/project/Mova/bilder/08.webp" alt="bild" />

              <img loading="lazy" decoding="async" className='img-project padding no-mobile' src="/portfolio/project/Mova/bilder/03.webp" alt="bild" />
              <img loading="lazy" decoding="async" className='img-project padding only-mobile' src="/portfolio/project/Mova/bilder/04.webp" alt="bild" />
              <Typo />
            </>
          }
          md={<DesignMd file='mova/DESIGN.md' content={movaDesignMd} />}
        />

        {/* ---------- Barrierefreiheit ---------- */}
        <ProjectText
          textTitel='Ruhig, aber lesbar'
          textSubtitel='Barrierefreiheit'
          textParagraph={<>
            Eine dunkle, warme Fläche wirkt atmosphärisch – aber nur, wenn der Text darauf lesbar bleibt. Deshalb habe ich jede Textfarbe gegen den Ceramic-Hintergrund geprüft. WCAG AA verlangt mindestens 4.5:1 für normalen Text.
            <br /><br />
            – <strong>Weiß</strong> 12.3:1 – Standard für Text und Überschriften
            <br />– <strong>Muted #EBCECC</strong> 8.3:1 – Bildunterschriften und Meta-Texte
            <br />– <strong>Accent #92BFD8</strong> 6.2:1 – Labels und Highlights
            <br />– <strong>Sand #A3948C</strong> 4.2:1 – nur für Flächen und Rahmen, nicht für kleinen Text
            <br />– <strong>Dark #02304B</strong> 1.1:1 – nie als Text auf Ceramic, nur als Button-Fläche mit weißem Text (13.7:1)
          </>}
        />
        <ProjectTextEn
          textTitel='Calm, but readable'
          textSubtitel='Accessibility'
          textParagraph={<>
            A dark, warm surface feels atmospheric – but only if the text on it stays readable. That's why I checked every text color against the Ceramic background. WCAG AA requires at least 4.5:1 for normal text.
            <br /><br />
            – <strong>White</strong> 12.3:1 – default for text and headings
            <br />– <strong>Muted #EBCECC</strong> 8.3:1 – captions and meta text
            <br />– <strong>Accent #92BFD8</strong> 6.2:1 – labels and highlights
            <br />– <strong>Sand #A3948C</strong> 4.2:1 – only for surfaces and borders, not for small text
            <br />– <strong>Dark #02304B</strong> 1.1:1 – never as text on Ceramic, only as a button surface with white text (13.7:1)
          </>}
        />

        {/* ---------- Screens ---------- */}
        <ProjectText
          textTitel='Components'
          textSubtitel='Tracking'
          textTheme='Store-Übersicht'
          textParagraph={<>
            Die Store-Seite zeigt alle Vasen aus den verschiedenen Kollektionen in einem übersichtlichen Grid.
            <br /><br />
            Jedes Produkt wird mit Kollektionsname, Vasenname und Preis angezeigt, sodass Nutzer schnell einen Überblick über das gesamte Sortiment erhalten und gezielt nach ihrem Favoriten stöbern können.
            <br /><br />
            <strong>Warum so:</strong> Alle Karten zeigen dieselben drei Informationen in derselben Reihenfolge. Diese Konsistenz macht das Grid schnell scannbar. Der Preis steht bewusst schon auf der Karte – bei hochwertigen Einzelstücken schafft Preistransparenz Vertrauen, statt erst auf der Produktseite zu überraschen.
            <br /><br />
            Die Vasen sind freigestellt und stehen alle auf demselben ruhigen Hintergrund. So vergleichen Nutzer:innen Formen und nicht Fotostile. Das 4er-Grid gibt jeder Silhouette genug Fläche und zeigt trotzdem genug Auswahl auf einen Blick.
          </>}
        />
        <ProjectTextEn
          textTitel='Components'
          textSubtitel='Tracking'
          textTheme='Store Overview'
          textParagraph={<>
            The store page displays all vases from the different collections in a clean grid layout.
            <br /><br />
            Each product shows the collection name, vase name, and price, giving users a quick overview of the full range and making it easy to browse for their favorite piece.
            <br /><br />
            <strong>Why:</strong> Every card shows the same three pieces of information in the same order. This consistency makes the grid easy to scan. The price is deliberately on the card – for high-quality single pieces, price transparency builds trust instead of surprising people on the product page.
            <br /><br />
            The vases are cut out and all sit on the same calm background, so users compare shapes rather than photo styles. The 4-column grid gives every silhouette enough room while still showing enough choice at a glance.
          </>}
        />

        <img loading="lazy" decoding="async" src="/portfolio/project/Mova/bilder/09.gif" alt="" className='img-project padding video01' />

        <ProjectText
          textTheme='PDP (Product Detail Page)'
          textParagraph={<>
            Auf der Produktseite werden alle relevanten Informationen zur ausgewählten Vase übersichtlich dargestellt: Name, Preis, verfügbare Farboptionen sowie Maße, Beschreibung und Material in separaten Tabs.
            <br /><br />
            Am unteren Rand der Seite werden zusätzlich weitere Produkte aus derselben Kollektion gezeigt, um Nutzer zum Weiterstöbern einzuladen.
            <br /><br />
            <strong>Warum so:</strong> Bei einer handgemachten Vase sind Maße und Material kaufentscheidend – und online am schwersten einzuschätzen. Deshalb bekommen sie eigene Tabs, statt in einem langen Fließtext zu verschwinden. Das Wichtigste steht oben, Details gibt es auf Abruf (Progressive Disclosure).
            <br /><br />
            Name, Preis und Farboptionen stehen ganz oben, weil sie die erste Entscheidung bestimmen. Die Kollektion am Seitenende verhindert eine Sackgasse und erhöht die Chance auf einen zweiten Artikel.
          </>}
        />
        <ProjectTextEn
          textTheme='PDP (Product Detail Page)'
          textParagraph={<>
            The product page displays all relevant information about the selected vase in a clear layout: name, price, available color options, as well as dimensions, description, and material shown in separate tabs.
            <br /><br />
            At the bottom of the page, additional products from the same collection are featured, inviting users to keep browsing.
            <br /><br />
            <strong>Why:</strong> For a handmade vase, dimensions and material decide the purchase – and they are the hardest things to judge online. That's why they get their own tabs instead of disappearing in a long text. The essentials come first, details on demand (progressive disclosure).
            <br /><br />
            Name, price and color options sit at the top because they drive the first decision. The collection at the bottom avoids a dead end and increases the chance of a second item.
          </>}
        />

        <img loading="lazy" decoding="async" className='img-project padding' src="/portfolio/project/Mova/bilder/10.webp" alt="bild" />

        <ProjectText
          textTheme='Einkaufstasche & Bestellung'
          textParagraph={<>
            In der Einkaufstasche werden alle ausgewählten Produkte übersichtlich mit Bild, Name, Kollektion, Farboption, Menge und Preis dargestellt. Nutzer:innen können die Menge direkt anpassen und behalten den Gesamtpreis jederzeit im Blick.
            <br /><br />
            Im nächsten Schritt führt der Bestellprozess durch Versandinformationen, Lieferadresse und Zahlungsmethode. Wählbare Versandoptionen mit unterschiedlichen Lieferzeiten sowie ein Feld für Rabattcodes sorgen für einen klaren, geführten Checkout-Flow bis zum Abschluss der Bestellung.
            <br /><br />
            <strong>Warum so:</strong> Die Menge lässt sich direkt in der Tasche ändern, ohne zurück zur Produktseite zu müssen. Der Gesamtpreis bleibt jederzeit sichtbar, damit es am Ende keine Überraschung gibt. Der Checkout ist in drei klare Schritte geteilt, und jeder Schritt stellt nur die Fragen, die gerade nötig sind. Die Versandoptionen zeigen ihre Lieferzeit direkt an, damit Nutzer:innen Preis und Geschwindigkeit selbst abwägen können.
            <br /><br />
            <strong>Reflexion:</strong> Ein sichtbares Rabattcode-Feld kann Nutzer:innen ohne Code dazu bringen, den Shop zu verlassen, um nach einem Code zu suchen. In einer nächsten Version würde ich es hinter einen Link wie „Rabattcode hinzufügen“ legen.
          </>}
        />
        <ProjectTextEn
          textTheme='Shopping Bag & Checkout'
          textParagraph={<>
            The shopping bag clearly displays all selected products with image, name, collection, color option, quantity and price. Users can adjust the quantity directly and always keep track of the total price.
            <br /><br />
            The next step guides users through shipping information, delivery address and payment method. Selectable shipping options with different delivery times, along with a promo code field, ensure a clear, guided checkout flow through to order completion.
            <br /><br />
            <strong>Why:</strong> The quantity can be changed right in the bag, without going back to the product page. The total stays visible at all times, so there are no surprises at the end. Checkout is split into three clear steps, each asking only what is needed at that moment. Shipping options show their delivery time directly, so users can weigh price against speed themselves.
            <br /><br />
            <strong>Reflection:</strong> A visible promo code field can make users without a code leave the shop to search for one. In a next version I would hide it behind a link like "Add promo code".
          </>}
        />

        <img loading="lazy" decoding="async" src="/portfolio/project/Mova/bilder/11.gif" alt="" className='img-project padding video01' />

        <img loading="lazy" decoding="async" className='logo-pattern' src="/portfolio/project/Mova/logo.svg" alt="logo" />

        <img loading="lazy" decoding="async" className='img-project padding no-mobile' src="/portfolio/project/Mova/bilder/12.webp" alt="bild" />
        <img loading="lazy" decoding="async" className='img-project padding only-mobile' src="/portfolio/project/Mova/bilder/13.webp" alt="bild" />

        {/* ---------- Validierung ---------- */}
        {/* TODO: if you ran a test, replace the plan with your results */}
        <ProjectText
          textTitel='Wie ich das Konzept teste'
          textSubtitel='Validierung'
          textParagraph={<>
            Als nächster Schritt ist ein moderierter Usability-Test mit fünf Personen aus der Zielgruppe geplant, mit vier Aufgaben:
            <br />1. Finde eine Vase aus der Voluta-Kollektion unter 25 €.
            <br />2. Finde heraus, wie hoch die Vase ist und aus welchem Material sie besteht.
            <br />3. Lege zwei Stück in die Tasche und ändere die Menge auf eins.
            <br />4. Schließe die Bestellung mit Standardversand ab.
            <br /><br />
            Gemessen werden die Erfolgsquote pro Aufgabe, die Zeit bis zum Abschluss und die Stellen, an denen Nutzer:innen zögern.
          </>}
        />
        <ProjectTextEn
          textTitel='How I test the concept'
          textSubtitel='Validation'
          textParagraph={<>
            As a next step, I plan a moderated usability test with five people from the target group and four tasks:
            <br />1. Find a vase from the Voluta collection under €25.
            <br />2. Find out how tall the vase is and what it is made of.
            <br />3. Put two of them in the bag and change the quantity to one.
            <br />4. Complete the order with standard shipping.
            <br /><br />
            I will measure the success rate per task, the time to completion and the moments where users hesitate.
          </>}
        />

        {/* ---------- Learnings ---------- */}
        {/* TODO: replace or extend with your own learnings */}
        <ProjectText
          textTitel='Was ich mitnehme'
          textSubtitel='Learnings & nächste Schritte'
          textParagraph={<>
            – Ruhe ist eine Designentscheidung, die man aktiv verteidigen muss: Jedes zusätzliche Element habe ich daran gemessen, ob es beim Kaufen hilft.
            <br />– Bei physischen Produkten ist Informationsdesign genauso wichtig wie Bildsprache.
            <br /><br />
            <strong>Nächste Schritte:</strong> Filter nach Kollektion, Farbe und Größe · Größenvergleich auf der Produktseite · Merkliste · Usability-Test mit der Zielgruppe.
          </>}
        />
        <ProjectTextEn
          textTitel='What I take away'
          textSubtitel='Learnings & next steps'
          textParagraph={<>
            – Calm is a design decision you have to defend actively: I measured every additional element by whether it helps people buy.
            <br />– For physical products, information design matters just as much as visual language.
            <br /><br />
            <strong>Next steps:</strong> filters by collection, color and size · size comparison on the product page · wishlist · usability test with the target group.
          </>}
        />

        <NextProject thisProject='Mova' />

      </main>

      <Footer />
    </div>
  )
}

export default Mova
