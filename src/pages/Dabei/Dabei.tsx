import './Dabei.css'
import '../Projectpage.css'
import Nav from '../../components/Nav/Nav'
import ProjectHeader from '../../components/Project/Header/ProjectHeader'
import Footer from '../../components/Footer/Footer'
import NextProject from '../../components/NextProject/NextProject'

function Dabei() {

  return (
    <div className='Dabei'>
        <Nav/>

        <main className='project'>
          <ProjectHeader
            name='Dabei'
            logo='/portfolio/project/Dabei/logo.svg'
            img='/portfolio/project/Dabei/cover.webp'
            description={<>
            Dabei ist ein Social-Media-Netzwerk, das dich über alle Events in deiner Nähe auf dem Laufenden hält. Entdecke, was gerade um dich herum passiert, folge deinen Freunden oder den Hosts deiner Lieblingsveranstaltungen.  Verpasse nie wieder ein spannendes Event.
            <br /><br />
            Der MVP wird derzeit entwickelt. Vom Design bis zum Frontend und Backend.
            </>}
            descriptionEn={<>
            Dabei is a social network that keeps you up to date on all the events near you. Discover what's happening around you right now, follow your friends or the hosts of your favourite events. Never miss an exciting event again.
            <br /><br />
            The MVP is currently in development, from design to frontend and backend.
            </>}
            /* tools={[
              { key: 'icon-figma', label: 'Figma'},
              { key: 'icon-ae', label: 'AfterEffects'},
              { key: 'icon-ai', label: 'Illustrator'},
            ]} */
          />

          <NextProject thisProject='Dabei'/>

        </main>

        <Footer/>
    </div>
  )
}

export default Dabei