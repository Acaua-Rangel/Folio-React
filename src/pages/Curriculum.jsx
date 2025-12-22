import Header from "../components/Header";
import "./Curriculum.css"

function Curriculum() {
    return (
        <div>
            <Header page="Curriculum"/>
            <main className="corpo">
            <section className="left">
                <div className="about">
                    <h1 className="name">ACAUÃ RANGEL BRAZIL</h1>
                    <h2 className="role">FULLSTACK DEVELOPER</h2>
                    <h3 className="description">
                        Developer with 3 years of programming experience, mainly focused 
                        on automation projects. I have skills on both <strong>the front-end</strong> 
                        and <strong>back-end</strong>. I started my career as a <strong>freelancer</strong> in 
                        August of the year 2023, currently, I am focused on developing 
                        bots for Discord and developing websites in React.js and web services APIs.
                    </h3>
                </div>

                <div className="experiences">
                    <h2 className="title">EXPERIENCE</h2>

                    <div className="last-exp">
                        <h3>
                            <strong>FreeLancer</strong>, Salvador
                        </h3>
                        <h3>
                            <strong>FullStack Developer</strong>
                        </h3>

                        <h3>
                            August 2023-2024 | Home Office
                        </h3>
                    </div>

                    <div className="project">
                        <h3>Project: <strong>Phoenix (<a href="https://phoenixligajovem.netlify.app/">Project link</a>)</strong></h3>

                        <h3 className="project-content">
                            The purpose of the project is to assist teachers with the schedules and 
                            location of classes, making this information available in graphs and 
                            providing an AI called Ignis that has access to this information.
                        </h3>

                        <h3>Technologies: <strong>React.js, Gemini API, Node.js, Express</strong></h3>
                    </div>

                    <div className="project">
                        <h3>Project: <strong>Pitanga - Discord Bot (<a href="https://top.gg/bot/921954829352468572">Project link</a>)</strong></h3>

                        <h3 className="project-content">
                            This bot has several systems, namely, <strong>economy, TTS, mini games</strong>. 
                            Its main system is TTS, I used <strong>the ElevenLabs</strong> API to clone the 
                            voice of a model and create the audios and <strong>Discord API</strong> to communicate 
                            with himself.
                        </h3>

                        <h3>Technologies: <strong>Python, ElevenLabs API, Pillow, MySQL, Numpy, Lavalink</strong></h3>
                    </div>

                    <div className="project">
                        <h3>Project: <strong>Factory Rebellion - Plataform Game (<a href="https://gamejolt.com/games/factory-rebellion/742724">Project link</a>)</strong></h3>

                        <h3 className="project-content">
                            This is a critique of the <strong>Luddism</strong> labor movement, where a team (Luddites) are 
                            responsible for breaking down the machines of one factory, while the other team (elite) 
                            tries to prevent this from happening in a certain period.
                        </h3>

                        <h3>Technologies: <strong>Game Maker Studio 2, Node.js, dgram, Figma</strong></h3>
                    </div>
                </div>
            </section>

            <section className="rigth">
                <div className="rigth-item">
                    <h2 className="title">CONTACT LINKS</h2>

                    <div className="content">
                        <h3><strong>GitHub:</strong> <a href="https://github.com/Acaua-Rangel/">https://github.com/Acaua-Rangel/</a></h3>
                        <h3><strong>Telephone:</strong> <a href="tel:+5571981717609">+55 (71) 98171-7609</a></h3>
                        <h3><strong>E-mail:</strong> <a href="mailto:acauarangel17@gmail.com">acauarangel17@gmail.com</a></h3>
                    </div>
                </div>

                <div className="rigth-item">
                    <h2 className="title">TECHNOLOGIES</h2>

                    <div className="content">
                        <h3>JavaScript</h3>
                        <h3>Node.js</h3>
                        <h3>React</h3>
                        <h3>Python</h3>
                        <h3>OpenCV</h3>
                        <h3>Pillow</h3>
                        <h3>MySQL</h3>
                        <h3>AWS</h3>
                        <h3>Oracle Cloud</h3>
                    </div>
                </div>

                <div className="rigth-item">
                    <h2 className="title">TRAINING</h2>

                    <div className="formation">
                        <div className="content">
                            <h3><strong>SESI Djalma Pessoa School</strong></h3>
                            <h3>Course: <strong>High School</strong></h3>
                            <h3>Duration: <strong>2022 - 2024</strong></h3>
                            <h3>Locality: <strong>Salvador - BA</strong></h3>
                        </div>
                        <div className="content">
                            <h3><strong>SENAI Cimatec</strong></h3>
                            <h3>Course: <strong>Mechatronics Technician</strong></h3>
                            <h3>Duration: <strong>2022 - 2024</strong></h3>
                            <h3>Locality: <strong>Salvador - BA</strong></h3>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </div>
    )
}

export default Curriculum
