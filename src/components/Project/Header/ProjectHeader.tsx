import './ProjectHeader.css'
import { useLang } from '../../../hooks/useLang'
import Tools from '../../Tools/Tools'
import LoopVideo from '../../LoopVideo/LoopVideo'

type ProjectHeaderProps = {
    video?: string,
    img?: string,
    logo: string,
    name: string,
    linkWebsite?: string,
    linkGithub?: string,
    description?: React.ReactNode,
    descriptionEn?: React.ReactNode,
    tools?: {
        key: string
        label: string
    }[]
    /** Image(s) shown right below the description. On tablet/desktop the
     *  description + media fill exactly one viewport (below the h1). */
    media?: React.ReactNode
}

function ProjectHeader({video, img, logo, name, description, descriptionEn, tools, linkWebsite, linkGithub, media}: ProjectHeaderProps) {
    const { lang } = useLang()

    return (
        <header className='ProjectHeader'>
            <section className="screen">
                <img src={logo} alt={`${name} logo`} className="logo" fetchPriority="high" />

                {img ? (
                    <img src={img} alt={`${name} cover`} className="cover" fetchPriority="high" />
                ) : (
                    video && <LoopVideo src={video} lazy={false} />
                )}

                <h1 className='text-block'>{name}</h1>
            </section>

            <section className={`description ${media ? 'has-media' : ''}`}>
                <div className="description-content text-block">
                <p className="text">
                    {lang === "de" ? description : descriptionEn}
                    </p>

                <Tools tools={tools} />

                <div className="buttons-container">
                    {linkWebsite && (
                        <a className='bttn website' href={linkWebsite} target="_blank" rel="noopener noreferrer">
                            {lang === "de" ? "Projekt live sehen" : "View project live"}
                        </a>
                    )}
                    {linkGithub && (
                        <a className='bttn github' href={linkGithub} target="_blank" rel="noopener noreferrer">
                            GitHub Code
                        </a>
                    )}
                </div>
                </div>

                {media && <div className="media">{media}</div>}
            </section>
        </header>
    )
}

export default ProjectHeader