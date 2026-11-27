import './Nav.css'
import { Link } from 'react-router-dom'
import { LangToggle } from '../../hooks/LangToogle'

function Nav() {
  return (
    <>
      <nav>
          <Link to="/" aria-label="Startseite">
              <img src="/portfolio/svg/logo.svg" alt="João Bastos logo" className="logo"/>
          </Link>
          <div className='lang-mail'>
            <a className="no-mobile" href="mailto:joaobastos@outlook.de">
                <p>joaobastos@outlook.de</p>
            </a>
          </div>
      </nav>

      <LangToggle />
    </>
  )
}

export default Nav