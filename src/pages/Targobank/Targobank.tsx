import './Targobank.css'
import '../Projectpage.css'
import Nav from '../../components/Nav/Nav'
import ProjectHeader from '../../components/Project/Header/ProjectHeader'
import Footer from '../../components/Footer/Footer'
import NextProject from '../../components/NextProject/NextProject'

function Targobank() {

  return (
    <div className='Targobank'>
        <Nav/>

        <main className='project'>
          <ProjectHeader
            name='Targobank'
            logo='/portfolio/project/Targobank/logo.svg'
            img='/portfolio/project/Targobank/cover.webp'
            description={<>
            Projekt in Bearbeitung...
            </>}
            descriptionEn={<>
            Project in progress...
            </>}
          />

          <NextProject thisProject='Targobank'/>

        </main>

        <Footer/>
    </div>
  )
}

export default Targobank