import { useLayoutEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaNetworkWired, FaDiscord, FaReact } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "../components/Header";
import "./Home.css";

gsap.registerPlugin(ScrollTrigger);

function Home() {
    const mainRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            
            const tl = gsap.timeline();

            tl.from(".about-image", {
                x: -100,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            })
            .from(".hero-element", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "back.out(1.7)"
            }, "-=0.5");

            gsap.from(".project-card", {
                scrollTrigger: {
                    trigger: ".projects-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });

            gsap.from(".service-card", {
                scrollTrigger: {
                    trigger: ".services-section",
                    start: "top 85%",
                },
                scale: 0.8,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: "back.out(1.7)"
            });

        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <Header page="Home"/>
            <main ref={mainRef}>
                <section className="flex flex-row flex-wrap items-center justify-around pb-25 gap-7.5 min-h-[90vh]">
                    <img className="max-w-2/5 about-image" src="/Person Icon.svg" alt="Foto de Acauã"/>
                    
                    <div className="flex pt-25 flex-col gap-7.5">
                        <h1 className="text-7xl font-bold w-146.5 hero-element">ACAUÃ RANGEL BRAZIL</h1>
                        
                        <h2 className="text-2xl font-normal w-146.5 hero-element">
                            Coding since <strong>2020 (age 12)</strong>, I evolved from building AI Discord bots to architecting <strong>Corporate AI Agents</strong>. I use <strong>CoT</strong> and <strong>ReAct</strong> methodologies to deliver high-precision automation for internal business processes.
                        </h2>
                        
                        <div className="hero-element">
                            <a href="https://wa.me/5571981717609?text=Estou%20interessado%20em%20seus%20serviços" target="blank">
                                <button className="bg-white border-2 text-lg border-black text-black w-77.75 h-15.25 font-semibold duration-300 hover:bg-[#71C829] hover:border-[#71C829] hover:text-white cursor-pointer">
                                    CONTACT ME
                                </button>
                            </a>
                        </div>

                        <div className="flex flex-row items-center justify-start gap-7 hero-element">
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

                <section className="projects projects-section">
                    <h1>PROJECTS</h1>
                    <div>
                        <a className="project-card">
                            <img src="/Valkyrio.png" alt="Valkyrio bot image" />
                            <h2>VALKYRIO</h2>
                            <h3>XP - DISCORD BOT</h3>
                            <p>INTEGRATION WITH ROBLOX API</p>
                        </a>
                        <a href="https://phoenixligajovem.netlify.app/" className="project-card">
                            <img src="/Phoenix.png" alt="Phoenix website image" />
                            <h2>PHOENIX</h2>
                            <h3>REACT WEBSITE</h3>
                            <p>INTEGRATION WITH GEMINI</p>
                        </a>
                        <a href="https://top.gg/bot/921954829352468572" className="project-card">
                            <img src="/Pitanga.png" alt="Pitanga bot image" />
                            <h2>PITANGA</h2>
                            <h3>DISCORD BOT</h3>
                            <p>MUSIC, TTS, ECONOMY, FUN</p>
                        </a>
                    </div>
                </section>

                <section className="services services-section">
                    <h1>SERVICES</h1>
                    <div className="services-container">
                        <div className="service-card">
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
                        <div className="service-card">
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
                        <div className="service-card">
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

export default Home;