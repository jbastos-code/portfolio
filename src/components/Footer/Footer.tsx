import './Footer.css'
import { useLang } from '../../hooks/useLang'
import LogoStroke from '../../hooks/LogoStroke'



function Footer() {
    const { lang } = useLang()


    return (
        <div className='Footer'>
            <div className="text-block">
                <p className='titel'>Thanks for visiting</p>

                <div className="infos-container">
                    <div className="info-column">
                        <div className="info">
                            <p className='bold'>
                                {lang === "de" ? "Aktualisiert:" : "Updated:"}
                            </p>
                            <p className='footer-link'>2026</p>
                        </div>
                        <a href="https://github.com/jbastos-code/portfolio" target="_blank" rel="noopener noreferrer">
                            <p className='bold'>GitHub Repository</p>
                            <div>
                                <p className='footer-link'>Portfolio</p>
                                <svg className='footer-link' width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.973693 6.69468C0.4216 6.70921 -0.0141827 7.16855 0.000346065 7.72064C0.0148748 8.27274 0.474213 8.70852 1.02631 8.69399L1 7.69434L0.973693 6.69468ZM20.7255 7.8826C21.1056 7.48193 21.0889 6.84899 20.6883 6.46887L14.1591 0.274528C13.7584 -0.105588 13.1255 -0.0889312 12.7454 0.311731C12.3652 0.712394 12.3819 1.34534 12.7826 1.72546L18.5863 7.23154L13.0802 13.0352C12.7001 13.4359 12.7167 14.0689 13.1174 14.449C13.5181 14.8291 14.151 14.8124 14.5311 14.4118L20.7255 7.8826ZM1 7.69434L1.02631 8.69399L20.0263 8.19399L20 7.19434L19.9737 6.19468L0.973693 6.69468L1 7.69434Z" fill="#818181" />
                                </svg>
                            </div>
                        </a>
                    </div>

                    <div className="info-column">
                        <a className="info" href="mailto:joaobastos@outlook.de">
                            <p className='bold'>
                                {lang === "de" ? "Für weitere Fragen:" : "Any questions?"}
                            </p>
                            <p className='footer-link'>joaobastos@outlook.de</p>
                        </a>

                        <a href="https://www.linkedin.com/in/joao-bastos-profil/" target="_blank" rel="noopener noreferrer">
                            <p className='bold'>
                                {lang === "de" ? "Lass uns vernetzen:" : "Let's connect"}
                            </p>
                            <div>
                                <p className='footer-link'>LinkedIn</p>
                                <svg className='footer-link' width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.973693 6.69468C0.4216 6.70921 -0.0141827 7.16855 0.000346065 7.72064C0.0148748 8.27274 0.474213 8.70852 1.02631 8.69399L1 7.69434L0.973693 6.69468ZM20.7255 7.8826C21.1056 7.48193 21.0889 6.84899 20.6883 6.46887L14.1591 0.274528C13.7584 -0.105588 13.1255 -0.0889312 12.7454 0.311731C12.3652 0.712394 12.3819 1.34534 12.7826 1.72546L18.5863 7.23154L13.0802 13.0352C12.7001 13.4359 12.7167 14.0689 13.1174 14.449C13.5181 14.8291 14.151 14.8124 14.5311 14.4118L20.7255 7.8826ZM1 7.69434L1.02631 8.69399L20.0263 8.19399L20 7.19434L19.9737 6.19468L0.973693 6.69468L1 7.69434Z" fill="#818181" />
                                </svg>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
            < LogoStroke />
        </div>
    )
}

export default Footer
