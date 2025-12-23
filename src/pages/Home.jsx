import { FaGithub, FaLinkedin, FaNetworkWired, FaDiscord, FaReact } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import Header from "../components/Header";
import "./Home.css"

function Home() {
    return (
        <>
            <Header page="Home"/>
            <main>
                <section className="flex flex-row flex-wrap items-center justify-around pb-25 gap-7.5">
                    <img className="max-w-2/5 about-image" src="/Person Icon.svg" alt="Foto de Acauã"/>
                    <div className="flex pt-25 flex-col gap-7.5">
                        <h1 className="text-7xl font-bold w-146.5">ACAUÃ RANGEL BRAZIL</h1>
                        <h2 className="text-2xl font-normal w-146.5">
                            Coding since <strong>2020 (age 12)</strong>, I evolved from building AI Discord bots to architecting <strong>Corporate AI Agents</strong>. I use <strong>CoT</strong> and <strong>ReAct</strong> methodologies to deliver high-precision automation for internal business processes.
                        </h2>
                        <a href="https://wa.me/5571981717609?text=Estou%20interessado%20em%20seus%20serviços" target="blank">
                            <button className="bg-white border-2 text-lg border-black text-black w-77.75 h-15.25 font-semibold duration-300 hover:bg-[#71C829] hover:border-[#71C829] hover:text-white">CONTACT ME</button>
                        </a>

                        <div className="flex flex-row items-center justify-start gap-7">
                            <a 
                                className="text-black hover:text-[#71C829] duration-300" 
                                href="https://www.linkedin.com/in/Acauã-Rangel/"
                                target="blank"
                            >
                                <FaLinkedin fontSize={60}/>
                            </a>
                            <a 
                                className="text-black hover:text-[#71C829] duration-300" 
                                href="https://github.com/Acaua-Rangel/"
                                target="blank"
                            >
                                <FaGithub fontSize={60}/>
                            </a>
                            <a 
                                className="text-black hover:text-[#71C829] duration-300" 
                                href="/CV - Acauã Rangel Brazil.pdf" 
                                download="CV - Acauã Rangel Brazil.pdf"
                            >
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
                                As a Fullstack dev, it is already 
                                implicit the development of websites, 
                                I use the react js library, but I can 
                                learning a new technology to develop yours
                            </p>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Home