import './Caflex.css'
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
import caflexDesignMd from './DESIGN.md?raw'

function Caflex() {

  return (
    <div className='Caflex'>
        <Nav/>

        <main className='project'>
          <ProjectHeader
          name='Caflex'
          logo='/portfolio/project/Caflex/logo.svg'
          img='/portfolio/project/Caflex/cover.webp'
          description={<>
            Wo gibt's den besten Kaffee in der Stadt?
            <br /><br />
            Caflex ist eine App, die dir hilft, die besten Cafés in deiner Stadt zu entdecken. Von gemütlichen Eckcafés bis hin zu modernen Specialty-Coffee-Shops.
            <br /><br />
            Zu meinen Aufgaben gehörten die Gestaltung der visuellen Identität sowie die Konzeption und Entwicklung der App.
          </>}
          descriptionEn={<>
            Where's the best coffee in town?
            <br /><br />
            Caflex is an app that helps you discover the best cafés in your city. From cozy neighborhood spots to modern specialty coffee shops.
            <br /><br />
            My responsibilities included designing the visual identity as well as conceptualizing and developing the app.
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
              linkGithub='https://github.com/jbastos-code/caflex'
              linkWebsite='https://jbastos-code.github.io/caflex/'
              ]} */

            media={<>
              <MotionImage
                img='/portfolio/project/Caflex/bilder/01.webp'
                noMobile
                extraClass='img-03'
              />
              <MotionImage
                img='/portfolio/project/Caflex/bilder/01.webp'
                onlyMobile
                extraClass='img-01'
              />
            </>}
          />

          {/* ---------- Ausgangslage ---------- */}
          {/* TODO: optionally add how the project started */}
          <ProjectText
            textTitel='Ein Café findet man über das Gefühl'
            textSubtitel='Ausgangslage'
            textParagraph={<>
            Wer ein neues Café sucht, landet meist in Karten- oder Bewertungs-Apps: lange Listen, Sterne, kleine Fotos. Dabei entscheidet man sich für ein Café selten nach der Bewertung allein, sondern nach der Atmosphäre – Licht, Plätze, Stimmung.
            <br /><br />
            Die zentrale Frage für Caflex lautete deshalb: Wie hilft man Menschen, ein Café nach seinem Gefühl zu entdecken – schnell, ohne Informationsflut und mit allem, was man braucht, um wirklich hinzugehen?
            <br /><br />
            <strong>Nutzer:innen-Ziele</strong>
            <br />– Schnell gute Cafés in der eigenen Stadt entdecken.
            <br />– Die Atmosphäre eines Cafés einschätzen, bevor man hingeht.
            <br />– Ohne Umwege dorthin finden.
            <br /><br />
            <strong>Produkt-Ziele</strong>
            <br />– Cafés so zeigen, dass ihre Persönlichkeit sichtbar wird.
            <br />– Zum Entdecken anregen – auch über den eigenen Stadtteil oder die eigene Stadt hinaus.
            <br />– Eine Struktur, die mit weiteren Städten wachsen kann.
            </>}
          />
          <ProjectTextEn
            textTitel='You find a café by feeling'
            textSubtitel='The challenge'
            textParagraph={<>
            When looking for a new café, most people end up in map or review apps: long lists, stars, small photos. Yet we rarely choose a café by its rating alone – we choose it by its atmosphere: light, seats, mood.
            <br /><br />
            So the key question for Caflex was: how do you help people discover a café by how it feels – quickly, without information overload and with everything they need to actually go there?
            <br /><br />
            <strong>User goals</strong>
            <br />– Quickly discover good cafés in your own city.
            <br />– Judge a café's atmosphere before going there.
            <br />– Get there without detours.
            <br /><br />
            <strong>Product goals</strong>
            <br />– Show cafés in a way that makes their personality visible.
            <br />– Encourage exploring – beyond your own district or city.
            <br />– A structure that can grow with more cities.
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
            Mia, 29, ist vor Kurzem nach Düsseldorf gezogen und arbeitet oft remote. Am Wochenende probiert sie gern neue Cafés aus, unter der Woche sucht sie einen ruhigen Ort zum Arbeiten. Sie entscheidet nach Fotos und Stimmung, nicht nach der längsten Liste.
            <br /><br />
            <strong>Bedürfnisse:</strong> große, ehrliche Fotos, die wichtigsten Infos auf einen Blick, ein schneller Weg zur Karte.
            <br />
            <strong>Frustrationen:</strong> endlose Listen, kleine Vorschaubilder, Apps, die sich wie ein Branchenverzeichnis anfühlen.
            </>}
          />
          <ProjectTextEn
            textTitel='Who I designed for'
            textSubtitel='Target group'
            textParagraph={<>
            I worked with a proto-persona – an assumption based on desk research that should be validated with real interviews as a next step.
            <br /><br />
            Mia, 29, recently moved to Düsseldorf and often works remotely. On weekends she likes trying new cafés; during the week she looks for a quiet place to work. She decides by photos and mood, not by the longest list.
            <br /><br />
            <strong>Needs:</strong> big, honest photos, the key information at a glance, a quick way to the map.
            <br />
            <strong>Frustrations:</strong> endless lists, tiny thumbnails, apps that feel like a business directory.
            </>}
          />

          {/* ---------- Research ---------- */}
          {/* TODO: name the apps you analysed and confirm or replace the insights below */}
          <ProjectText
            textTitel='Wie man heute Cafés sucht'
            textSubtitel='Research'
            textParagraph={<>
            <strong>Verglichen habe ich:</strong> Karten-Apps, Bewertungsplattformen und Café-Guides – wie Cafés aufgelistet werden, welche Informationen zuerst kommen und wie man von der Liste zum Café findet.
            <br /><br />
            <strong>Zentrale Erkenntnisse</strong>
            <br />– Listen werden von Sternen und Zahlen dominiert, die Atmosphäre bleibt in kleinen Fotos versteckt.
            <br />– Zu viele Filter und Details machen die Entscheidung schwerer statt leichter.
            <br />– Der Weg zum Café ist in Karten-Apps schon gelöst – dorthin sollte man nahtlos übergeben, statt ihn nachzubauen.
            </>}
          />
          <ProjectTextEn
            textTitel='How people search for cafés today'
            textSubtitel='Research'
            textParagraph={<>
            <strong>I compared:</strong> map apps, review platforms and café guides – how cafés are listed, which information comes first and how you get from the list to the café.
            <br /><br />
            <strong>Key insights</strong>
            <br />– Lists are dominated by stars and numbers; the atmosphere stays hidden in small photos.
            <br />– Too many filters and details make the decision harder, not easier.
            <br />– Getting to the café is already solved by map apps – it's better to hand over to them than to rebuild it.
            </>}
          />

          <ProjectText
            textTitel='Ruhig. Fokussiert. Einladend.'
            textSubtitel='Design'
            textParagraph={<>
            Für das Design habe ich eine zurückhaltende und bewusste Bildsprache entwickelt, die das Wesen der App widerspiegelt. Die besten Cafés der Stadt zu entdecken.
            <br /><br />
            Die Farbpalette greift warme Kaffeetöne auf, vertraut und geerdet, kontrastiert durch Akzente in Blau, die Frische und Klarheit bringen. Diese Kombination schafft eine visuelle Balance zwischen Gemütlichkeit und Orientierung.
            <br /><br />
            <strong>Farbe:</strong> Die App hat zwei Welten. Die Übersicht ist Blau auf Creme – klar und ruhig, zum Orientieren. Die Café-Seite wechselt zu Kaffeebraun über dem Foto – warm, zum Ankommen. Beide Kombinationen liegen deutlich über WCAG AA (10.9:1 und 10.6:1).
            <br /><br />
            <strong>Typografie:</strong> Eine Schrift, Libre Franklin, in ruhigen Größen. Hierarchie entsteht über Größe und Transparenz statt über viele Schriftschnitte, damit die Fotos die lautesten Elemente bleiben.
            <br /><br />
            <strong>Formen:</strong> Abgerundete Fotos und ein Info-Panel mit großen Radien, keine Schatten. Tiefe entsteht durch Ebenen und Unschärfe – das Panel liegt wie Milchglas über dem Foto.
            <br /><br />
            Diese Regeln habe ich in einer DESIGN.md festgehalten, damit sie konsistent bleiben – auch wenn später andere Personen oder KI-Tools an der App weiterarbeiten.
            </>}
          />

          <ProjectTextEn
            textTitel='Sober. Focused. Inviting.'
            textSubtitel='Design'
            textParagraph={<>
            For the design, I developed a restrained and intentional visual language that reflects the essence of the app. Discovering great coffee in the city.
            <br /><br />
            The color palette draws from warm coffee tones, grounded and familiar, contrasted by touches of blue that bring freshness and clarity. This combination creates a visual balance between coziness and orientation.
            <br /><br />
            <strong>Color:</strong> The app has two worlds. The overview is blue on cream – clear and calm, for orientation. The café page switches to coffee brown over the photo – warm, for arriving. Both combinations are well above WCAG AA (10.9:1 and 10.6:1).
            <br /><br />
            <strong>Typography:</strong> One typeface, Libre Franklin, in calm sizes. Hierarchy comes from size and transparency instead of many weights, so the photos remain the loudest elements.
            <br /><br />
            <strong>Shapes:</strong> Rounded photos and an info panel with large radii, no shadows. Depth comes from layers and blur – the panel sits over the photo like frosted glass.
            <br /><br />
            I documented these rules in a DESIGN.md so they stay consistent – even when other people or AI tools work on the app later.
            </>}
          />

          <DesignToggle
            visual={
              <>
                <img loading="lazy" decoding="async" className='img-project padding no-mobile' src="/portfolio/project/Caflex/bilder/06.webp" alt="bild" />
                <img loading="lazy" decoding="async" className='img-project padding only-mobile' src="/portfolio/project/Caflex/bilder/07.webp" alt="bild" />

                <Typo name='Libre Franklin' font="'Libre Franklin', sans-serif" />
              </>
            }
            md={<DesignMd file='caflex/DESIGN.md' content={caflexDesignMd} />}
          />


          <ProjectText
            textTitel='Components'
            textSubtitel='Funktionalität'
          />

          <ProjectTextEn
            textTitel='Components'
            textSubtitel='Funktionality'
          />


          <div className="img-mobile">
            <img loading="lazy" decoding="async" src="/portfolio/project/Caflex/videos/03.gif" alt=""/>
          </div>

          <ProjectText
            textTheme='Stadt auswählen'
            textParagraph={<>
            Die Stadtauswahl wird über useState verwaltet, wobei die gewählte Stadt im localStorage persistiert wird. So bleibt sie auch nach einem Seitenreload erhalten.Ein zweiter Boolean-State steuert das Auswahlmenü, dessen Sichtbarkeit per dynamischer CSS-Klasse geregelt wird.
            <br /><br />
            Da das Projekt noch früh in der Entwicklung ist, sind aktuell nur Düsseldorf und Köln verfügbar. Die Café-Daten werden je nach aktiver Stadt aus einem typisierten Objekt geladen, die andere Stadt wird automatisch berechnet und separat angezeigt.
            <br /><br />
            Die zufälligen Empfehlungen werden mit useMemo nur neu berechnet, wenn sich die Stadt ändert.
            <br /><br />
            <strong>Warum so:</strong> Die gewählte Stadt bleibt gespeichert – wer Caflex öffnet, landet direkt in seiner Stadt, ohne jedes Mal neu zu wählen. Der Auswahlschalter sitzt klein oben auf der Seite und klappt erst beim Antippen auf – so nimmt er den Fotos keinen Platz. Die andere Stadt wird am Ende der Seite gezeigt und lädt dazu ein, auch beim nächsten Ausflug Neues zu entdecken.
            </>}
          />

          <ProjectTextEn
            textTheme='City Selection'
            textParagraph={<>
            The city selection is managed via useState, with the chosen city persisted in localStorage so it remains intact after a page reload. A second boolean state controls the selection menu, whose visibility is handled through a dynamic CSS class.
            <br /><br />
            Since the project is still in early development, only Düsseldorf and Cologne are currently available. The café data is loaded from a typed object based on the active city, while the other city is automatically derived and displayed separately.
            <br /><br />
            The random recommendations are recalculated with useMemo only when the city changes.
            <br /><br />
            <strong>Why:</strong> The selected city is remembered – when you open Caflex you land straight in your city without choosing again. The selector sits small at the top of the page and only expands when tapped – so it takes no space from the photos. The other city is shown at the end of the page and invites you to discover something new on your next trip.
            </>}
          />

          <img loading="lazy" decoding="async" src="/portfolio/project/Caflex/videos/02.gif" className='video-02' alt=""/>

          <ProjectCode
            lines={[
              {
                content: <><span className="code-blue">const</span> [<span className="code-blue">city</span>, <span className="code-blue">setCity</span>] = <span className="code-red">useState</span>(<span className="code-blue">() =&gt;</span> {'{'}</>
              },
              {
                gap: 1,
                content: <><span className="code-blue">return</span> <span className="code-blue">localStorage</span>.<span className="code-red">getItem</span>(<span className="code-red">"city"</span>) ?? <span className="code-red">"Düsseldorf"</span>;</>
              },
              {
                content: <>{'});'}</>
              },
              {
                content: <><span className="code-blue">const</span> <span className="code-blue">cafes</span> = <span className="code-blue">cafesTyped</span>[<span className="code-blue">city</span>];</>
              },
            ]}
          />

          <ProjectText
            textTheme='Cafés sortieren'
            textParagraph={<>
            Die Café-Cards sind wiederverwendbare React-Komponenten wie “CafeCard”, “CafeCardLarge” und “CafeCardSmall”, die ihre Daten über Props empfangen. Per .map() wird das Array iteriert und die Eigenschaften jedes Cafés direkt an die Komponente übergeben.
            <br /><br />
            Diese Struktur macht das Projekt leicht skalierbar: Die Daten liegen aktuell in einem typisierten JSON-Objekt, könnten aber problemlos durch einen API-Call ersetzt werden, ohne die Komponentenstruktur anzupassen.
            <br /><br />
            <strong>Warum so:</strong> Drei Kartengrößen schaffen eine klare Hierarchie: große Karten im 16:9-Format für Empfehlungen ganz oben, quadratische Karten in seitlich scrollbaren Reihen für das Stöbern und kleine Karten mit Vorschaubild für die andere Stadt. Die seitlichen Reihen zeigen am Rand schon die nächste Karte – ein Hinweis, dass es weitergeht, ohne die Seite endlos lang zu machen. Überall steht das Foto zuerst, Name und Stadtteil folgen darunter.
            </>}
          />

          <ProjectTextEn
            textTheme='Sorting Cafés'
            textParagraph={<>
            The café cards are reusable React components such as "CafeCard", "CafeCardLarge", and "CafeCardSmall", which receive their data via props. The array is iterated using .map(), passing each café's properties directly to the component.
            <br /><br />
            This structure makes the project easily scalable: the data currently lives in a typed JSON object, but could seamlessly be replaced by an API call without modifying the component structure.
            <br /><br />
            <strong>Why:</strong> Three card sizes create a clear hierarchy: large 16:9 cards for recommendations at the top, square cards in sideways-scrolling rows for browsing, and small cards with a thumbnail for the other city. The sideways rows already show the next card at the edge – a hint that there is more, without making the page endlessly long. The photo always comes first, with name and district below.
            </>}
          />

          <img loading="lazy" decoding="async" src="/portfolio/project/Caflex/videos/01.gif" className='video-01' alt=""/>

          <ProjectCode
            lines={[
              {
                content: <><span className="code-rosa">&lt;div </span><span className="code-purple">className</span>=<span className="code-red">"scroll CafesList"</span><span className="code-rosa">&gt;</span></>
              },
              {
                gap: 1,
                content: <>{'{'}cafes.<span className="code-red">map</span>((<span className="code-blue">cafe</span>) =&gt; (</>
              },
              {
                gap: 2,
                content: <><span className="code-rosa">&lt;CafeCard</span></>
              },
              {
                gap: 3,
                content: <><span className="code-purple">id</span>={'{'}cafe.<span className="code-blue">id</span>{'}'}</>
              },
              {
                gap: 3,
                content: <><span className="code-purple">img</span>={'{'}cafe.<span className="code-blue">foto</span>{'}'}</>
              },
              {
                gap: 3,
                content: <><span className="code-purple">name</span>={'{'}cafe.<span className="code-blue">name</span>{'}'}</>
              },
              {
                gap: 3,
                content: <><span className="code-purple">stadtteil</span>={'{'}cafe.<span className="code-blue">stadtteil</span>{'}'}</>
              },
              {
                gap: 2,
                content: <><span className="code-rosa">/&gt;</span></>
              },
              {
                gap: 1,
                content: <>))</>
              },
              {
                content: <><span className="code-rosa">&lt;/div&gt;</span></>
              },
            ]}
          />

          <div className="img-mobile">
            <img loading="lazy" decoding="async" src="/portfolio/project/Caflex/bilder/04.webp" alt="bild" />
            <img loading="lazy" decoding="async" src="/portfolio/project/Caflex/bilder/05.webp" alt="bild" />
          </div>

          <ProjectText
            textTheme='Café-Seite'
            textParagraph={<>
            Das Foto des Cafés füllt den ganzen Bildschirm. Darüber liegt ein Panel mit Name, Slogan, Bewertung samt Anzahl der Bewertungen, Stadt und Stadtteil sowie Links zu Instagram und Website. Darunter folgen eine Karte mit dem Button „Karte schauen“ und eine Galerie, die sich zu großen, seitlich scrollbaren Fotos öffnet.
            <br /><br />
            <strong>Warum so:</strong> Das Foto kommt zuerst, weil die Atmosphäre das wichtigste Entscheidungskriterium ist. Das Panel legt sich darüber, statt das Foto zu ersetzen – so bleibt die Stimmung beim Lesen spürbar. Bewertung und Anzahl stehen nebeneinander, weil eine 4.8 erst mit vielen Bewertungen Vertrauen schafft. Der Stadtteil zeigt, wie weit es ungefähr ist.
            <br /><br />
            „Karte schauen“ öffnet die Adresse direkt in der Karten-App, statt eine eigene Navigation nachzubauen – dort, wo Nutzer:innen den Weg ohnehin planen. Der Zurück-Button schwebt halbtransparent mit Unschärfe über dem Foto und bleibt so auf jedem Bild lesbar.
            </>}
          />
          <ProjectTextEn
            textTheme='Café Page'
            textParagraph={<>
            The café's photo fills the whole screen. On top sits a panel with the name, slogan, rating including the number of reviews, city and district, plus links to Instagram and the website. Below follow a map with a "Karte schauen" (view map) button and a gallery that opens into large, sideways-scrolling photos.
            <br /><br />
            <strong>Why:</strong> The photo comes first because atmosphere is the most important decision criterion. The panel lies over the photo instead of replacing it, so the mood stays present while reading. Rating and number of reviews sit side by side, because a 4.8 only builds trust with many reviews. The district shows roughly how far away it is.
            <br /><br />
            "Karte schauen" opens the address directly in the maps app instead of rebuilding navigation – where users plan their route anyway. The back button floats semi-transparent with a blur over the photo, so it stays readable on any image.
            </>}
          />

          <MotionImage
            img='/portfolio/project/Caflex/bilder/08.webp'
            extraClass='img-02'
          />

          {/* ---------- Validierung ---------- */}
          {/* TODO: if you ran a test, replace the plan with your results */}
          <ProjectText
            textTitel='Wie ich das Konzept teste'
            textSubtitel='Validierung'
            textParagraph={<>
            Als nächster Schritt ist ein moderierter Usability-Test mit fünf Personen aus der Zielgruppe geplant, mit vier Aufgaben:
            <br />1. Wechsle zu Köln und finde ein Café, das dich anspricht.
            <br />2. Finde heraus, wie gut das Café bewertet ist und in welchem Stadtteil es liegt.
            <br />3. Sieh dir weitere Fotos des Cafés an.
            <br />4. Öffne den Weg zum Café in deiner Karten-App.
            <br /><br />
            Gemessen werden die Erfolgsquote pro Aufgabe, die Zeit bis zum Abschluss und die Stellen, an denen Nutzer:innen zögern.
            </>}
          />
          <ProjectTextEn
            textTitel='How I test the concept'
            textSubtitel='Validation'
            textParagraph={<>
            As a next step, I plan a moderated usability test with five people from the target group and four tasks:
            <br />1. Switch to Cologne and find a café that appeals to you.
            <br />2. Find out how well the café is rated and which district it is in.
            <br />3. Look at more photos of the café.
            <br />4. Open the route to the café in your maps app.
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
            – Weniger Information kann die bessere Entscheidungshilfe sein, wenn die richtige Information zuerst kommt – hier das Foto.
            <br />– Nicht alles muss neu gebaut werden: Die Übergabe an die Karten-App ist für Nutzer:innen besser als jede eigene Lösung.
            <br />– Meta-Texte mit 60 % Deckkraft sind auf Creme zu schwach (3.8:1). In der nächsten Version nutze ich mindestens 70 %.
            <br /><br />
            <strong>Nächste Schritte:</strong> Öffnungszeiten und Filter wie „zum Arbeiten geeignet“ · Favoriten speichern · weitere Städte · Usability-Test mit der Zielgruppe.
            </>}
          />
          <ProjectTextEn
            textTitel='What I take away'
            textSubtitel='Learnings & next steps'
            textParagraph={<>
            – Less information can be the better decision aid when the right information comes first – here, the photo.
            <br />– Not everything has to be built from scratch: handing over to the maps app is better for users than any custom solution.
            <br />– Meta text at 60% opacity is too weak on cream (3.8:1). In the next version I'll use at least 70%.
            <br /><br />
            <strong>Next steps:</strong> opening hours and filters like "good for working" · save favourites · more cities · usability test with the target group.
            </>}
          />

          <NextProject thisProject='Caflex'/>

        </main>

        <Footer/>
    </div>
  )
}

export default Caflex