import './MyMixx.css'
import '../Projectpage.css'
import Nav from '../../components/Nav/Nav'
import ProjectHeader from '../../components/Project/Header/ProjectHeader'
import {ProjectText, ProjectTextEn} from '../../components/ProjectText/ProjectText'
import ProjectCode from '../../components/Project/Code/ProjectCode'
import Footer from '../../components/Footer/Footer'
import NextProject from '../../components/NextProject/NextProject'
import MotionImage from '../../components/MotionImage/MotionImage'
import Typo from '../../components/Typo/Typo'
import DesignToggle from '../../components/Project/DesignToggle/DesignToggle'
import DesignMd from '../../components/Project/DesignMd/DesignMd'
import mymixxDesignMd from './DESIGN.md?raw'

function MyMixx() {

  return (
    <div className='MyMixx'>
        <Nav/>

        <main className='project'>
          <ProjectHeader
            name='MyMixx'
            logo='/portfolio/project/MyMixx/logo.svg'
            video='/portfolio/project/MyMixx/cover.mp4'
            description={<>
            Mymixx ist ein Müsli-Store, in dem sich jeder sein persönliches Müsli zusammenstellen kann. Von der Basis bis zu den Toppings.
            <br /><br />
            Zu meinen Aufgaben gehörte die Erweiterung der visuellen Identität, die digitale Umsetzung des Brandings sowie die Gestaltung und Programmierung des Bestellsystems.
            </>}
            descriptionEn={<>
            Mymixx is a muesli store where anyone can create their own personal muesli. From the base to the toppings.
            <br /><br />
            My responsibilities included expanding the visual identity, implementing the branding digitally, and designing and developing the ordering system.
            </>}
            /* tools={[
              { key: 'icon-react', label: 'React'},
              { key: 'icon-node', label: 'Node.js'},
              { key: 'icon-tsx', label: 'TypeScript'},
              { key: 'icon-html', label: 'HTML'},
              { key: 'icon-css', label: 'CSS'},
              { key: 'icon-js', label: 'JavaScript'},
              { key: 'icon-figma', label: 'Figma'},
              { key: 'icon-git', label: 'Github'},
              linkGithub='https://github.com/jbastos-code/MyMixx'
              linkWebsite='https://jbastos-code.github.io/MyMixx/'
              ]} */
            media={<>
              <MotionImage
                img='/portfolio/project/MyMixx/bilder/07.webp'
                noMobile
                extraClass='img-05'
              />
              <MotionImage
                img='/portfolio/project/MyMixx/bilder/09.webp'
                padding
                onlyMobile
              />
            </>}
          />

          {/* ---------- Ausgangslage ---------- */}
          {/* TODO: optionally add how the project started (client, course or own project) */}
          <ProjectText
            textTitel='Über 50 Zutaten, ohne den Überblick zu verlieren'
            textSubtitel='Ausgangslage'
            textParagraph={<>
            Ein eigenes Müsli zusammenzustellen klingt nach Freiheit – kann sich aber schnell wie Arbeit anfühlen. Bei über 50 Zutaten in sechs Kategorien droht genau das, was die Marke nicht sein will: eine lange, technische Bestellliste.
            <br /><br />
            Gleichzeitig lebt MyMixx von Spaß und Vielfalt. Die zentrale Frage lautete deshalb: Wie macht man aus vielen Entscheidungen ein Erlebnis, das sich leicht und verspielt anfühlt – ohne dass man den Überblick über Auswahl und Preis verliert?
            <br /><br />
            <strong>Nutzer:innen-Ziele</strong>
            <br />– Schnell und ohne Vorwissen ein eigenes Müsli zusammenstellen.
            <br />– Jederzeit sehen, was schon im Mix ist und was er kostet.
            <br />– Entscheidungen leicht rückgängig machen können.
            <br /><br />
            <strong>Business-Ziele</strong>
            <br />– Die verspielte, bunte Marke digital erlebbar machen.
            <br />– Zum Entdecken neuer Zutaten anregen.
            <br />– Ein Bestellsystem, das vor allem auf dem Smartphone schnell und einfach funktioniert.
            </>}
          />
          <ProjectTextEn
            textTitel='Over 50 ingredients without losing track'
            textSubtitel='The challenge'
            textParagraph={<>
            Mixing your own muesli sounds like freedom – but it can quickly feel like work. With more than 50 ingredients in six categories, there is a real risk of exactly what the brand doesn't want to be: a long, technical order form.
            <br /><br />
            At the same time, MyMixx lives from fun and variety. So the key question was: how do you turn many decisions into an experience that feels light and playful – without losing track of your choices and the price?
            <br /><br />
            <strong>User goals</strong>
            <br />– Build your own muesli quickly, without prior knowledge.
            <br />– Always see what is already in the mix and what it costs.
            <br />– Easily undo a decision.
            <br /><br />
            <strong>Business goals</strong>
            <br />– Bring the playful, colorful brand to life digitally.
            <br />– Encourage people to discover new ingredients.
            <br />– An ordering system that works quickly and easily, above all on a phone.
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
            Jonas, 27, frühstückt oft unterwegs und achtet auf seine Ernährung, will dafür aber keine Zeit mit Recherche verbringen. Er bestellt fast alles am Smartphone, probiert gern Neues aus und bricht ab, sobald ein Formular zu lang wird.
            <br /><br />
            <strong>Bedürfnisse:</strong> schnelle Entscheidungen, klare Preise, ein Ergebnis, das sich nach „seinem“ Müsli anfühlt.
            <br />
            <strong>Frustrationen:</strong> lange Listen ohne Bilder, unklare Mengen, ein Gesamtpreis, der erst am Ende auftaucht.
            </>}
          />
          <ProjectTextEn
            textTitel='Who I designed for'
            textSubtitel='Target group'
            textParagraph={<>
            I worked with a proto-persona – an assumption based on desk research that should be validated with real interviews as a next step.
            <br /><br />
            Jonas, 27, often has breakfast on the go and cares about what he eats, but doesn't want to spend time researching. He orders almost everything on his phone, likes to try new things and drops off as soon as a form gets too long.
            <br /><br />
            <strong>Needs:</strong> quick decisions, clear prices, a result that feels like "his" muesli.
            <br />
            <strong>Frustrations:</strong> long lists without pictures, unclear quantities, a total that only shows up at the end.
            </>}
          />

          {/* ---------- Research ---------- */}
          {/* TODO: name the configurators/shops you analysed and confirm or replace the insights below */}
          <ProjectText
            textTitel='Wie andere Konfiguratoren funktionieren'
            textSubtitel='Research'
            textParagraph={<>
            <strong>Verglichen habe ich:</strong> den Einstieg in die Zusammenstellung, die Darstellung der Zutaten, wie der aktuelle Mix angezeigt wird und wann der Preis sichtbar wird.
            <br /><br />
            <strong>Zentrale Erkenntnisse</strong>
            <br />– Alle Zutaten auf einer Seite überfordern – besonders auf dem Smartphone.
            <br />– Wer nicht sieht, was schon ausgewählt ist, wählt doppelt oder verliert die Lust.
            <br />– Ein Preis, der sich erst am Ende zeigt, sorgt für Überraschungen und Abbrüche.
            </>}
          />
          <ProjectTextEn
            textTitel='How other configurators work'
            textSubtitel='Research'
            textParagraph={<>
            <strong>I compared:</strong> how the mixing starts, how ingredients are presented, how the current mix is shown and when the price becomes visible.
            <br /><br />
            <strong>Key insights</strong>
            <br />– All ingredients on one page are overwhelming – especially on a phone.
            <br />– If you can't see what is already selected, you pick things twice or lose interest.
            <br />– A price that only appears at the end causes surprises and drop-offs.
            </>}
          />

          <ProjectText
            textTitel='Bunt. Vielfältig. Möglich'
            textSubtitel='Design'
            textParagraph={<>
            Für das Design habe ich eine bunte und vielfältige Bildsprache entwickelt, die die zahlreichen Mix-Möglichkeiten widerspiegelt.
            <br /><br />
            Die lebendige Farbwelt betont die Pluralität der Zutaten und vermittelt visuell dieselbe Vielfalt und Freiheit, die auch die Marke selbst verkörpert.
            <br /><br />
            <strong>Farbe:</strong> Grün ist die Markenfarbe und bedeutet im Interface immer „ist in deinem Mix“. Orange steht für Entfernen und Weitergehen, Gelb für den Einstieg. Jede Farbe hat also eine feste Bedeutung – so wird Farbe zur Orientierung, nicht nur zur Dekoration. Text ist immer schwarz, weil er auf allen Markenfarben gut lesbar bleibt.
            <br /><br />
            <strong>Typografie:</strong> Baloo 2 Bold für Titel und Buttons, Baloo Thambi 2 für Text. Die runden Buchstaben greifen die Verpackung auf und machen das Interface freundlich, ohne verspielt unleserlich zu werden.
            <br /><br />
            <strong>Formen:</strong> Dicke schwarze Konturen, runde Karten und Pillen-Buttons erinnern an Sticker. Alles, was man antippen kann, hat diese Kontur – so erkennt man interaktive Elemente sofort.
            <br /><br />
            Diese Regeln habe ich in einer DESIGN.md festgehalten, damit sie konsistent bleiben – auch wenn später andere Personen oder KI-Tools am Shop weiterarbeiten.
            </>}
          />

          <ProjectTextEn
            textTitel='Colorful. Diverse. Possible.'
            textSubtitel='Design'
            textParagraph={<>
            For the design, I developed a vibrant and diverse visual language that reflects the countless mixing possibilities.
            <br /><br />
            The lively color palette emphasizes the variety of ingredients and visually conveys the same diversity and freedom that the brand itself embodies.
            <br /><br />
            <strong>Color:</strong> Green is the brand color and always means "in your mix" in the interface. Orange stands for removing and moving on, yellow for getting started. Every color has a fixed meaning – so color becomes orientation, not just decoration. Text is always black because it stays readable on every brand color.
            <br /><br />
            <strong>Typography:</strong> Baloo 2 Bold for titles and buttons, Baloo Thambi 2 for text. The round letters echo the packaging and make the interface friendly without becoming hard to read.
            <br /><br />
            <strong>Shapes:</strong> Thick black outlines, rounded cards and pill buttons feel like stickers. Everything you can tap has this outline, so interactive elements are recognisable at once.
            <br /><br />
            I documented these rules in a DESIGN.md so they stay consistent – even when other people or AI tools work on the shop later.
            </>}
          />

          <DesignToggle
            visual={
              <>
                <img loading="lazy" decoding="async" className='img-project padding no-mobile' src="/portfolio/project/MyMixx/bilder/05.webp" alt="bild" />
                <img loading="lazy" decoding="async" className='img-project padding only-mobile' src="/portfolio/project/MyMixx/bilder/03.webp" alt="bild" />

                <img loading="lazy" decoding="async" className='img-project img-04 no-mobile' src="/portfolio/project/MyMixx/bilder/08.webp" alt="bild" />
                <img loading="lazy" decoding="async" className='img-project img-02 only-mobile' src="/portfolio/project/MyMixx/bilder/08.webp" alt="bild" />

                <Typo name='Baloo 2' font="'Baloo 2', cursive" />
              </>
            }
            md={<DesignMd file='mymixx/DESIGN.md' content={mymixxDesignMd} tone='dark' />}
          />

          <ProjectText
            textTitel='Components'
            textSubtitel='Funktionalität'
          />

          <ProjectTextEn
            textTitel='Components'
            textSubtitel='Functionality'
          />

          <ProjectText
            textTheme='Kategorien & Navigation'
            textParagraph={<>
            Die über 50 Zutaten sind in sechs Kategorien aufgeteilt – von der Basis über Früchte und Süßungsmittel bis zu Nüssen, Superfoods und Flüssigkeiten. Oben wechselt man frei zwischen den Kategorien, unten führt „Weiter“ Schritt für Schritt durch alle – in der letzten Kategorie wird daraus „Bestellen“.
            <br /><br />
            <strong>Warum so:</strong> Statt einer langen Liste trifft man immer nur wenige Entscheidungen auf einmal. Die Reihenfolge folgt dem Aufbau einer Müslischale – von der Basis bis zur Flüssigkeit. Wer will, folgt dem geführten Weg; wer schon weiß, was er sucht, springt direkt in die passende Kategorie. Auf dem Smartphone steht immer nur eine Produktkarte im Fokus, groß genug für Bild, Menge und Preis.
            </>}
          />
          <ProjectTextEn
            textTheme='Categories & Navigation'
            textParagraph={<>
            The more than 50 ingredients are split into six categories – from the base through fruits and sweeteners to nuts, superfoods and liquids. At the top you can switch freely between categories, at the bottom "Weiter" (next) guides you through all of them step by step – in the last category it becomes "Bestellen" (order).
            <br /><br />
            <strong>Why:</strong> Instead of one long list, you only make a few decisions at a time. The order follows how a bowl of muesli is built – from the base to the liquid. If you like, you follow the guided path; if you already know what you want, you jump straight to the right category. On a phone only one product card is in focus at a time, big enough for picture, quantity and price.
            </>}
          />

          <div className="img-mobile">
            <img loading="lazy" decoding="async" src="/portfolio/project/MyMixx/bilder/10.webp" alt="bild" />
            <img loading="lazy" decoding="async" src="/portfolio/project/MyMixx/bilder/11.webp" alt="bild" />
          </div>

          <ProjectText
            textTheme='Button “Hinzufügen”, “Entfernen”'
            textParagraph={<>
            Jedes Produktcard verwaltet seinen Zustand über useState, das einen booleschen Wert isAdded speichert. Abhängig davon wechselt das Card zwischen zwei visuellen Zuständen: weißer Hintergrund mit „Hinzufügen"-Button oder farbiger Hintergrund mit „Entfernen"-Button. Das Styling wird dabei nicht per direktem DOM-Zugriff geändert, sondern durch dynamisches Setzen von CSS-Klassen basierend auf dem State.
            <br /><br />
            Ein Klick auf den Button triggert eine Funktion, die isAdded togglet und gleichzeitig das Produkt im globalen My Mixx-State hinzufügt oder entfernt. Dieser globale State verwaltet über useContext oder ein State-Management wie Redux stellt sicher, dass die Produktauswahl komponentenübergreifend konsistent bleibt.
            <br /><br />
            <strong>Warum so:</strong> Der Zustand ist an der ganzen Karte sichtbar, nicht nur am Button: Eine hinzugefügte Zutat wird komplett grün. Beim Durchwischen erkennt man so auf einen Blick, was schon im Mix ist – ohne Häkchen, Zähler oder Pop-ups. Die Buttons sind breit und 40px hoch, damit man sie auch mit dem Daumen sicher trifft.
            </>}
          />

          <ProjectTextEn
            textTheme='"Add" / "Remove" Button'
            textParagraph={<>
            Each product card manages its state via useState, storing a boolean value isAdded. Depending on this, the card switches between two visual states: a white background with an "Add" button, or a colored background with a "Remove" button. The styling is not changed through direct DOM manipulation, but by dynamically applying CSS classes based on the state.
            <br /><br />
            Clicking the button triggers a function that toggles isAdded while simultaneously adding or removing the product from the global My Mixx state. This global state, managed via useContext or a state management solution like Redux, ensures that the product selection remains consistent across components.
            <br /><br />
            <strong>Why:</strong> The state is visible on the whole card, not just the button: an added ingredient turns completely green. While swiping you can see at a glance what is already in the mix – without checkmarks, counters or pop-ups. The buttons are wide and 40px tall, so they are easy to hit with a thumb.
            </>}
          />

          <ProjectCode
            tone='dark'
            lines={[
              {
                content: <><span className="code-red">const</span> [<span className="code-blue">isAdded</span>, <span className="code-blue">setIsAdded</span>] = <span className="code-red">useState</span>(<span className="code-purple">false</span>)</>
              },
              {
                content: <></>
              },
              {
                content: <><span className="code-red">const</span> <span className="code-blue">handleClick</span> = () =&gt; {'{'}</>
              },
              {
                gap: 1,
                content: <><span className="code-blue">setIsAdded</span>(<span className="code-blue">prev</span> =&gt; !<span className="code-blue">prev</span>)</>
              },
              {
                gap: 1,
                content: <><span className="code-purple">if</span> (!<span className="code-blue">isAdded</span>) {'{'}</>
              },
              {
                gap: 2,
                content: <><span className="code-blue">addToMyMixx</span>(<span className="code-blue">product</span>)</>
              },
              {
                gap: 1,
                content: <>{'}'} <span className="code-purple">else</span> {'{'}</>
              },
              {
                gap: 2,
                content: <><span className="code-blue">removeFromMyMixx</span>(<span className="code-blue">product</span>)</>
              },
              {
                gap: 1,
                content: <>{'}'}</>
              },
              {
                content: <>{'}'}</>
              },
              {
                content: <></>
              },
              {
                content: <><span className="code-rosa">&lt;div </span><span className="code-purple">className</span>=<span className="code-red">{'{'}isAdded ? <span className="code-blue">'card card--added'</span> : <span className="code-blue">'card'</span>{'}'}</span><span className="code-rosa">&gt;</span></>
              },
              {
                gap: 1,
                content: <><span className="code-rosa">&lt;button </span><span className="code-purple">onClick</span>=<span className="code-red">{'{'}</span><span className="code-blue">handleClick</span><span className="code-red">{'}'}</span><span className="code-rosa">&gt;</span></>
              },
              {
                gap: 2,
                content: <>{'{'}isAdded ? <span className="code-blue">'Entfernen'</span> : <span className="code-blue">'Hinzufügen'</span>{'}'}</>
              },
              {
                gap: 1,
                content: <><span className="code-rosa">&lt;/button&gt;</span></>
              },
              {
                content: <><span className="code-rosa">&lt;/div&gt;</span></>
              },
            ]}
          />

          <div className="img-mobile">
            <img loading="lazy" decoding="async" src="/portfolio/project/MyMixx/bilder/12.webp" alt="bild" />
          </div>

          <ProjectText
            textTheme='Einkaufswagen „My Mixx"'
            textParagraph={<>
            Der My-Mixx-Bildschirm zeigt in Echtzeit alle vom Nutzer hinzugefügten Produkte, geordnet nach Kategorie: Basis, Früchte, Süßungsmittel und Nüsse... und der Gesamtpreis<br />
            Jedes Produkt wird mit Name und Einzelpreis angezeigt und kann direkt über den X-Button entfernt werden.
            <br /><br />
            Ein Klick auf den X-Button setzt den booleschen useState isAdded des entsprechenden Produkts auf false zurück. Dadurch verschwindet das Produkt aus der My-Mixx-Liste und der Button im Produktcard wechselt wieder von „Entfernen" zurück zu „Hinzufügen". Der Gesamtpreis wird dabei automatisch neu berechnet und sofort aktualisiert.
            <br /><br />
            <strong>Warum so:</strong> Der Warenkorb ist nach denselben Kategorien geordnet wie die Auswahl – so findet man jede Zutat dort wieder, wo man sie ausgesucht hat. Er öffnet sich als Ebene über der Seite, sodass man beim Prüfen nicht verliert, wo man gerade war. Der Gesamtpreis ist immer sichtbar, und auch der leere Warenkorb spricht die Sprache der Marke: „Füge Produkte hinzu :D“.
            </>}
          />

          <ProjectTextEn
            textTheme='Shopping Cart "My Mixx"'
            textParagraph={<>
            The My Mixx screen displays in real time all products added by the user, organized by category: base, fruits, sweeteners, and nuts. Along with the total price.<br />
            Each product is shown with its name and individual price, and can be removed directly via the X button.
            <br /><br />
            Clicking the X button resets the boolean useState isAdded of the corresponding product to false. This removes the product from the My Mixx list and switches the button in the product card back from "Remove" to "Add". The total price is automatically recalculated and updated instantly.
            <br /><br />
            <strong>Why:</strong> The cart is organised by the same categories as the selection, so you find every ingredient where you picked it. It opens as a layer above the page, so checking it doesn't make you lose your place. The total is always visible, and even the empty cart speaks the brand's language: "Füge Produkte hinzu :D" (add some products :D).
            </>}
          />

          <ProjectCode
            tone='dark'
            lines={[
              {
                content: <><span className="code-red">const</span> <span className="code-blue">totalPreis</span> = <span className="code-blue">myMixx</span>.<span className="code-red">reduce</span>((<span className="code-blue">acc</span>, <span className="code-blue">product</span>) =&gt; {'{'}</>
              },
              {
                gap: 1,
                content: <><span className="code-purple">return</span> <span className="code-blue">acc</span> + <span className="code-blue">product</span>.<span className="code-blue">preis</span></>
              },
              {
                content: <>{'}'}, <span className="code-purple">0</span>)</>
              },
              {
                content: <></>
              },
              {
                content: <><span className="code-red">const</span> <span className="code-blue">handleRemove</span> = (<span className="code-blue">product</span>) =&gt; {'{'}</>
              },
              {
                gap: 1,
                content: <><span className="code-blue">setIsAdded</span>(<span className="code-purple">false</span>)</>
              },
              {
                gap: 1,
                content: <><span className="code-blue">removeFromMyMixx</span>(<span className="code-blue">product</span>)</>
              },
              {
                content: <>{'}'}</>
              },
              {
                content: <></>
              },
              {
                content: <><span className="code-rosa">&lt;div </span><span className="code-purple">className</span>=<span className="code-red">"my-mixx"</span><span className="code-rosa">&gt;</span></>
              },
              {
                gap: 1,
                content: <><span className="code-rosa">&lt;p&gt;</span>Total: {'{'}totalPreis.<span className="code-red">toFixed</span>(<span className="code-purple">2</span>){'}'}&euro;<span className="code-rosa">&lt;/p&gt;</span></>
              },
              {
                gap: 1,
                content: <><span className="code-rosa">&lt;ul&gt;</span></>
              },
              {
                gap: 2,
                content: <>{'{'}myMixx.<span className="code-red">map</span>(<span className="code-blue">product</span> =&gt; (</>
              },
              {
                gap: 3,
                content: <><span className="code-rosa">&lt;li </span><span className="code-purple">key</span>=<span className="code-red">{'{'}</span><span className="code-blue">product</span>.<span className="code-blue">name</span><span className="code-red">{'}'}</span><span className="code-rosa">&gt;</span></>
              },
              {
                gap: 4,
                content: <>{'{'}product.<span className="code-blue">name</span>{'}'} — {'{'}product.<span className="code-blue">preis</span>.<span className="code-red">toFixed</span>(<span className="code-purple">2</span>){'}'}&euro;</>
              },
              {
                gap: 4,
                content: <><span className="code-rosa">&lt;button </span><span className="code-purple">onClick</span>=<span className="code-red">{'{'}</span>() =&gt; <span className="code-blue">handleRemove</span>(<span className="code-blue">product</span>)<span className="code-red">{'}'}</span><span className="code-rosa">&gt;</span>X<span className="code-rosa">&lt;/button&gt;</span></>
              },
              {
                gap: 3,
                content: <><span className="code-rosa">&lt;/li&gt;</span></>
              },
              {
                gap: 2,
                content: <>)){'}'}</>
              },
              {
                gap: 1,
                content: <><span className="code-rosa">&lt;/ul&gt;</span></>
              },
              {
                content: <><span className="code-rosa">&lt;/div&gt;</span></>
              },
            ]}
          />

          <img loading="lazy" decoding="async" className='img-project img-01' src="/portfolio/project/MyMixx/bilder/13.webp" alt="bild" />

          <ProjectText
            textTheme='Verwendung von JSON zur Sortierung der Produkte'
            textParagraph={<>
            Der Schwerpunkt lag darauf, die Produktdaten klar zu strukturieren und die UI-Elemente dynamisch zu generieren.
            <br /><br />
            Um die Produkte zu organisieren, habe ich ein JavaScript Datei erstellt, wo ich die Array von Objekten mit allen relevanten Informationen enthalten(Name, Preis, Menge und Bild) enthält. Dadurch wird sowohl die Pflege als auch das Rendering im Frontend vereinfacht.
            </>}
          />

          <ProjectTextEn
            textTheme='Using JSON to Sort Products'
            textParagraph={<>
            The focus was on clearly structuring the product data and dynamically generating the UI elements.
            <br /><br />
            To organize the products, I created a JavaScript file containing an array of objects with all relevant information (name, price, quantity, and image). This simplifies both maintenance and rendering on the frontend.
            </>}
          />


          <ProjectText
            textParagraph={<>
            Die Struktur in dem Jason Datei wird in Objects kategorisiert.<br />
            Anbei ist ein Beispiel, wie die Früchtensorte sortiert wird:
            </>}
          />

          <ProjectTextEn
            textParagraph={<>
            The structure in the JSON file is organized into objects.<br />
            Below is an example of how the fruit category is sorted:
            </>}
          />

          <ProjectCode
            tone='dark'
            lines={[
              {
                content: <><span className="code-red">const</span> <span className="code-blue">arrayFruechte</span> = [</>
              },
              {
                gap: 1,
                indent: 1,
                content: <>{'{ '}<span className="code-purple">name</span>: 'Cranberries', <span className="code-purple">preis</span>: 0.40, <span className="code-purple">amount</span>: 65, <span className="code-purple">pic</span>: ''{'}'},{}</>
              },
              {
                gap: 1,
                indent: 1,
                content: <>{'{ '}<span className="code-purple">name</span>: 'Ananasstücke', <span className="code-purple">preis</span>: 0.60, <span className="code-purple">amount</span>: 50, <span className="code-purple">pic</span>: ''{'}'},{}</>
              },
              {
                gap: 1,
                indent: 1,
                content: <>{'{ '}<span className="code-purple">name</span>: 'Apfelringe', <span className="code-purple">preis</span>: 0.70, <span className="code-purple">amount</span>: 35, <span className="code-purple">pic</span>: ''{'}'},{}</>
              },
              {
                gap: 1,
                indent: 1,
                content: <>{'{ '}<span className="code-purple">name</span>: 'Datteln', <span className="code-purple">preis</span>: 0.42, <span className="code-purple">amount</span>: 65, <span className="code-purple">pic</span>: ''{'}'},{}</>
              },
              {
                content: <>]</>
              }
            ]}
          />

          <ProjectText
            textParagraph={<>
            Und die Nutzung ist ebenso einfach.
            </>}
          />

          <ProjectTextEn
            textParagraph={<>
            And the usage is just as simple.
            </>}
          />

          <ProjectCode
            tone='dark'
            lines={[
              {
                content: <><span className="code-blue">arrayFruechte</span><span className="code-red">.forEach</span>(<span className="code-blue">product</span> =&gt; {'{'}</>
              },
              {
                gap: 1,
                content: <><span className="code-blue">productListBasis</span>.innerHTML += {'`'}</>
              },
              {
                gap: 2,
                content: <><span className="code-rosa">&lt;div </span><span className="code-purple">class</span>=<span className="code-red">"product"</span><span className="code-rosa">&gt;</span></>
              },
              {
                gap: 3,
                content: <><span className="code-rosa">&lt;p </span><span className="code-purple">class</span>=<span className="code-red">"product-name"</span><span className="code-rosa">&gt;</span>${'{'}<span className="code-blue">product</span>.<span className="code-blue">name</span>{'}'}<span className="code-rosa">&lt;/p&gt;</span></>
              },
              {
                gap: 3,
                content: <><span className="code-rosa">&lt;img </span><span className="code-purple">src</span> = <span className="code-red">"${'{'}product.pic{'}'}"</span><span className="code-rosa">&gt;</span></>
              },
              {
                gap: 3,
                content: <><span className="code-rosa">&lt;p </span><span className="code-purple">class</span>=<span className="code-red">'menge'</span><span className="code-rosa">&gt;</span>${'{'}<span className="code-blue">product</span>.<span className="code-blue">amount</span>{'}'}g<span className="code-rosa">&lt;/p&gt;</span></>
              },
              {
                gap: 3,
                content: <><span className="code-rosa">&lt;p </span><span className="code-purple">class</span>=<span className="code-red">'preis'</span><span className="code-rosa">&gt;</span>${'{'}<span className="code-blue">product</span>.<span className="code-blue">preis</span>.<span className="code-red">toFixed</span>(2){'}'}&euro;<span className="code-rosa">&lt;/p&gt;</span></>
              },
              {
                gap: 2,
                content: <><span className="code-rosa">&lt;/div&gt;</span></>
              },
              {
                gap: 1,
                content: <>{'`'}</>
              },
              {
                content: <>{'});'}</>
              },
            ]}
          />


          <MotionImage
            img='/portfolio/project/MyMixx/bilder/06.webp'
            extraClass='img-06'
          />

          

          {/* ---------- Validierung ---------- */}
          {/* TODO: if you ran a test, replace the plan with your results */}
          <ProjectText
            textTitel='Wie ich das Konzept teste'
            textSubtitel='Validierung'
            textParagraph={<>
            Als nächster Schritt ist ein moderierter Usability-Test mit fünf Personen aus der Zielgruppe geplant, mit vier Aufgaben:
            <br />1. Stelle ein Müsli mit einer Basis, zwei Früchten und einem Süßungsmittel zusammen.
            <br />2. Finde heraus, wie viel dein Mix gerade kostet.
            <br />3. Entferne eine Zutat wieder aus deinem Mix.
            <br />4. Schließe die Bestellung ab.
            <br /><br />
            Gemessen werden die Erfolgsquote pro Aufgabe, die Zeit bis zum Abschluss und die Stellen, an denen Nutzer:innen zögern.
            </>}
          />
          <ProjectTextEn
            textTitel='How I test the concept'
            textSubtitel='Validation'
            textParagraph={<>
            As a next step, I plan a moderated usability test with five people from the target group and four tasks:
            <br />1. Build a muesli with one base, two fruits and one sweetener.
            <br />2. Find out how much your mix currently costs.
            <br />3. Remove an ingredient from your mix again.
            <br />4. Complete the order.
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
            – Verspielt und klar schließen sich nicht aus: Wenn jede Farbe eine feste Bedeutung hat, wird die bunte Marke selbst zur Orientierung.
            <br />– Viele Entscheidungen fühlen sich leicht an, wenn man sie in kleine Schritte teilt.
            <br /><br />
            <strong>Nächste Schritte:</strong> Nährwerte des Mixes anzeigen · Mixe speichern und erneut bestellen · eigenes Layout für Desktop · Usability-Test mit der Zielgruppe.
            </>}
          />
          <ProjectTextEn
            textTitel='What I take away'
            textSubtitel='Learnings & next steps'
            textParagraph={<>
            – Playful and clear are not opposites: when every color has a fixed meaning, the colorful brand itself becomes orientation.
            <br />– Many decisions feel light when you split them into small steps.
            <br /><br />
            <strong>Next steps:</strong> show the nutrition facts of the mix · save mixes and reorder them · a dedicated desktop layout · usability test with the target group.
            </>}
          />

          <NextProject thisProject='MyMixx'/>

        </main>

        <Footer/>
    </div>
  )
}

export default MyMixx