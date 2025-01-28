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
                            <button className="about-button">CONTACT ME</button>
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
                        <a href="https://castly.gg/release">
                            <img src="/Castly.png" alt="Castly website image" />
                            <h2>CASTLY</h2>
                            <h3>REACT WEBSITE</h3>
                            <p>FFMPEG, NGINX RTMP, NODE.JS</p>
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
                    <div className="">
                        <div className="bg-black/20 w-11/12">
                            <div className="flex flex-row gap-2 text-xl items-center">
                                <FaNetworkWired color="#71C829"/>
                                <h3 className="text-white">API</h3>
                            </div>
                            <p className="text-white opacity-80">
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
                                As a Fullstack dev, it is already 
                                implicit the development of websites, 
                                I use the react js library, but I can 
                                learning a new technology to develop yours
                            </p>
                        </div>
                    </div>
                </section>

            </main>
            <footer className="flex flex-col w-full">
                <div className="flex flex-row w-full items-center justify-between">
                    <img src="/Acauã - Icon.svg" alt="Logo" />
                    <div class="flex flex-row gap-4">
                        <a href="">
                            <i class="fa-brands opacity-100 hover:opacity-70 fa-x-twitter text-[#71C829] text-lg"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands opacity-100 hover:opacity-70 fa-instagram text-[#71C829] text-lg"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands opacity-100 hover:opacity-70 fa-discord text-[#71C829] text-lg"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2024 - 2025 Acauã Rangel. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Home