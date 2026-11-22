import './Startseite.css'
import Nav from '../../components/Nav/Nav'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { ProjectText, ProjectTextEn } from '../../components/ProjectText/ProjectText'
import { useLang } from '../../hooks/LangContext'
import Footer from '../../components/Footer/Footer'

function Startseite() {
    const { lang } = useLang()

    return (
        <div className='Startseite'>
            <Nav />
            <header className='screen'>
                <video autoPlay loop muted playsInline>
                    <source src="/portfolio/video/header.mp4" type="video/mp4" />
                </video>
                <article>
                    <h1 className='deutsch'>
                        {lang === "de" ? "Hallo, ich bin" : "Hello, I'm"}
                        <br />
                        <span>João Bastos</span>
                    </h1>


                    <ProjectText
                        textParagraph={<>
                            In Brasilien geboren und seit 2017 in Deutschland. Ich schreibe Code, der wie Design aussieht, und mache Designs, die sich wie Code anfühlen.
                            <br /><br />
                            Ich bin ein eher ruhiger, aber kommunikativer Typ, der mit Leidenschaft programmiert, gerne Schach spielt und sich über Popkultur austauscht.
                        </>}
                    />

                    <ProjectTextEn
                        textParagraph={<>
                            Born in Brazil, living in Germany since 2017. I write code that looks like design, and make design that feels like code.
                            <br /><br />
                            I'm a rather quiet but communicative person who codes with passion, enjoys playing chess, and loves talking about pop culture.
                        </>}
                    />
                </article>
            </header>

            <main>
                <section className='about'>
                    <article>
                        <div className="tecnologie">
                            <h2> Design Engineer</h2>

                            <ul>
                                <li>Frontend Dev</li>
                                <li>UX/UI</li>
                                <li>Product Designer</li>
                            </ul>
                        </div>

                        <div className="text">

                            <ProjectText
                                textParagraph={<>
                                    Mit der Zeit habe ich gemerkt, dass Design nicht nur mein Job ist, es ist auch das, was mir richtig Spaß macht.
                                    <br /><br />
                                    User Interfaces sind für mich eine Art Challenge. Jedes neue Layout, jedes Interaktionsmuster und jedes visuelle Detail ist für mich eine Gelegenheit, etwas Neues zu entdecken und besser zu werden.
                                    <br /><br />
                                    Ich bin einfach neugierig, wenn es um die Gestaltung von Interfaces geht, und das hält mich immer am Lernen. Genau das liebe ich an diesem Beruf.
                                </>}
                            />

                            <ProjectTextEn
                                textParagraph={<>
                                    Over time, I've realized that design isn't just my job, it's also what genuinely makes me happy.
                                    <br /><br />
                                    User interfaces are a kind of challenge for me. Every new layout, every interaction pattern, and every visual detail is an opportunity to discover something new and get better.
                                    <br /><br />
                                    I'm simply curious when it comes to crafting interfaces, and that's what keeps me learning. That's exactly what I love about this profession.
                                </>}
                            />

                            <div className="socialmedia">
                                <a href="https://github.com/Jaobast" target="_blank" rel="noreferrer">
                                    <img src="/portfolio/svg/socialmedia-github.svg" alt="github link" />
                                </a>
                                <a href="https://www.instagram.com/joaobastos.web" target="_blank" rel="noreferrer">
                                    <img src="/portfolio/svg/socialmedia-insta.svg" alt="insta link" />
                                </a>
                                <a href="https://www.linkedin.com/in/joao-bastos-profil/" target="_blank" rel="noreferrer">
                                    <img src="/portfolio/svg/socialmedia-linkedin.svg" alt="linkedin link" />
                                </a>
                            </div>
                        </div>

                        <div className="buttons">
                            <a className="lebenslauf" href="/portfolio/#/cv" target="_blank" rel="noreferrer">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 2H6C5.46957 2 4.96086 2.21072 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8M14 2C14.3166 1.99949 14.6301 2.06161 14.9225 2.18277C15.215 2.30394 15.4806 2.48176 15.704 2.706L19.292 6.294C19.5168 6.51751 19.6952 6.78335 19.8167 7.07616C19.9382 7.36898 20.0005 7.68297 20 8M14 2V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8L20 8M10 9H8M16 13H8M16 17H8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                                </svg>
                                {lang === "de" ? "Lebenslauf" : "Resume"}
                            </a>
                        </div>
                    </article>

                    <div className="polaroids">
                        <img className="pic_01" src="/portfolio/img/polaroid_01.png" alt="picture of me 01" />
                        <img className="pic_02" src="/portfolio/img/polaroid_02.png" alt="picture of me 02" />
                        <img className="pic_03" src="/portfolio/img/polaroid_03.png" alt="picture of me 03" />

                    </div>
                </section>


                <section className='projects'>
                    <h2 className='text-block'>Projekte</h2>
                    <div className="grid">
                        <ProjectCard
                            name='Mova'
                            img='/portfolio/project/Mova/card.jpg'
                            tag='Ein Online-Shop-Konzept für handgefertigte Keramikvasen. Ruhig und zeitlos im Design.'
                        />

                        <ProjectCard
                            name='MyMixx'
                            img='/portfolio/project/MyMixx/card.jpg'
                            tag='Mixx deine Wünsche zusammen. Ein Müsli-Store für dein ganz eigenes, persönliches Müsli.'
                        />

                        <ProjectCard
                            name='Caflex'
                            img='/portfolio/project/Caflex/card.jpg'
                            tag='Wo gibts den besten Kaffee in der Stadt? Caflex hilft dir, die besten Cafés deinem Ort zu entdecken.'
                        />

                        <ProjectCard
                            name='Essencial'
                            img='/portfolio/project/Essencial/card.jpg'
                            tag='Essencial ist ein Massage-Salon, der Ruhe und Wohlbefinden in den Mittelpunkt stellt.'
                        />

                        <ProjectCard
                            name='Targobank'
                            img='/portfolio/project/Targobank/card.jpg'
                            tag='Targobank ist eine der größten Banken Deutschlands. Position: UI/UX Designer.'
                        />

                        <ProjectCard
                            name='Praxis Lounge'
                            nameLink='Praxis'
                            img='/portfolio/project/Praxis/card.jpg'
                            tag='Eine mobile-first Chat-App für schnelle, klare Kommunikation im Krankenhausalltag.'
                        />

                        <ProjectCard
                            name='Dabei'
                            img='/portfolio/project/Dabei/card.jpg'
                            tag='Eine mobile-first Chat-App für schnelle, klare Kommunikation im Krankenhausalltag.'
                        />

                        <ProjectCard
                            name='Gleichklang'
                            img='/portfolio/project/Gleichklang/card.jpg'
                            tag='Eine mobile-first Chat-App für schnelle, klare Kommunikation im Krankenhausalltag.'
                        />
                    </div>


                </section>
            </main>

            <Footer />
        </div>
    )

}

export default Startseite
