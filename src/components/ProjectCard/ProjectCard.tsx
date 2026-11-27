import * as motion from "motion/react-client"
import { useNavigate } from "react-router-dom";
import './ProjectCard.css'

type cardProps= {
    img: string,
    nameLink?: string,
    name: string,
    tag: string,
}

function ProjectCard({img, name, nameLink, tag}: cardProps) {

    const navigate = useNavigate();

    function openProject() {
        setTimeout(() => {
            if (nameLink) {
                navigate(`/${nameLink}`);
            } else{
                navigate(`/${name}`);
            }
        }, 500);
    }

  return (
    <div
        className='ProjectCard'
        role="link"
        tabIndex={0}
        aria-label={name}
        onClick={openProject}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openProject() } }}
    >
        <div className="img-container">
            <motion.img loading="lazy" decoding="async" src={img} alt="project cover"
                initial={{ opacity: 0, scale: 0.8 }}

                whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.5, bounce: 0.4 },
                }
                }}
                whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: 1.2,
                        ease: "easeInOut",
                    }
                }}
                viewport={{
                amount: "some",
                }}
            />
            <button className="bttn" tabIndex={-1} aria-hidden="true">
                <img loading="lazy" decoding="async" src="/portfolio/svg/arrow-open.svg" alt="arrow icon" />
            </button>
        </div>
        <div className="name-container">
            <h3 className="name">{name}</h3>
            <p className="tag">{tag}</p>

        </div>
    </div>
  )
}

export default ProjectCard
