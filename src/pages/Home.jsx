import { FaGithub, FaLinkedin, FaNetworkWired, FaDiscord, FaReact } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import Header from "../Header"
import "./Home.css"

function Home() {
    return (
        <>
            <Header page="Home"/>
            <main>
                <section className="about-container">
                    <img className="about-image" src="/Person Icon.svg" alt="Foto de Acauã"/>
                    <div className="about-info">
                        <h1 className="about-name">ACAUÃ RANGEL BRAZIL</h1>
                        <h2 className="about-description">
                            I'm a FullStack Developer who has been studying
                            the subject for over 3 years and has developed
                            projects for the web, mobile and desktop. I've
                            also developed Discord bots with Roblox integration
                            and MySQL databases.
                        </h2>
                        <a href="https://wa.me/5571981717609?text=Estou%20interessado%20em%20seus%20serviços">
                            <button className="about-button">CONTACT US</button>
                        </a>

                        <div className="hiper-links">
                            <a className="hiper-links-item" href="https://www.linkedin.com/in/Acauã-Rangel/">
                                <FaLinkedin fontSize={60}/>
                            </a>
                            <a className="hiper-links-item" href="https://github.com/Acaua-Rangel/">
                                <FaGithub fontSize={60}/>
                            </a>
                            <a className="hiper-links-item" href="/CV.pdf" download="CV - Acauã Rangel Brazil.pdf">
                                <SiGoogledocs fontSize={55}/>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="projects">
                    <h1>PROJECTS</h1>
                    <div>
                        <a>
                            <img src="/Valkyrio.png" alt="Valkyrio bot image" />
                            <h2>VALKYRIO</h2>
                            <h3>XP - DISCORD BOT</h3>
                            <p>INTEGRATION WITH ROBLOX API</p>
                        </a>
                        <a href="https://phoenixligajovem.netlify.app/">
                            <img src="/Phoenix.png" alt="Phoenix website image" />
                            <h2>PHOENIX</h2>
                            <h3>REACT WEBSITE</h3>
                            <p>INTEGRATION WITH GEMINI</p>
                        </a>
                        <a href="https://top.gg/bot/921954829352468572">
                            <img src="/Pitanga.png" alt="Pitanga bot image" />
                            <h2>PITANGA</h2>
                            <h3>DISCORD BOT</h3>
                            <p>MUSIC, TTS, ECONOMY, FUN</p>
                        </a>
                    </div>
                </section>

                <section className="services">
                    <h1>SERVICES</h1>
                    <div className="services-container">
                        <div>
                            <div>
                                <FaNetworkWired color="#71C829"/>
                                <h3>API</h3>
                            </div>
                            <p>
                                I can develop your API in a variety of ways, from 
                                website servers with TCP/IP protocol or socket, to 
                                game servers with UDP or socket
                            </p>
                        </div>
                        <div>
                            <div>
                                <FaDiscord color="#71C829"/>
                                <h3>Discord Bots</h3>
                            </div>
                            <p>
                            I've been developing Discord bots for 
                            a few years now, with economy systems, 
                            music, tts and integration with roblox, 
                            I can develop the bot you want
                            </p>
                        </div>
                        <div>
                            <div>
                                <FaReact color="#71C829"/>
                                <h3>Website</h3>
                            </div>
                            <p>
                            As a Fullstack dev, it is already implicit 
                            the development of websites, both the front-end 
                            and back-end, I use the react js library, but I 
                            have no problem learning a new technology to develop yours
                            </p>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Home