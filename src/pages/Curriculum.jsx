import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";

gsap.registerPlugin(ScrollTrigger);

function Curriculum() {
    const mainRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // About section animation
            tl.from(".cv-name", {
                x: -100,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            })
            .from(".cv-role", {
                x: -80,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.7")
            .from(".cv-description", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.5");

            // Experience title animation
            gsap.from(".experience-title", {
                scrollTrigger: {
                    trigger: ".experience-title",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                x: -50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            });

            // Experience items animation (staggered)
            gsap.from(".experience-item", {
                scrollTrigger: {
                    trigger: ".experiences-section",
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });

            // Project items animation (staggered)
            gsap.from(".project-item", {
                scrollTrigger: {
                    trigger: ".projects-container",
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                },
                x: -30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out"
            });

            // Right section animations
            gsap.from(".contact-section", {
                scrollTrigger: {
                    trigger: ".contact-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            gsap.from(".tech-section", {
                scrollTrigger: {
                    trigger: ".tech-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                scale: 0.9,
                opacity: 0,
                duration: 0.8,
                ease: "back.out(1.7)"
            });

            // Tech items animation with stagger
            gsap.from(".tech-item", {
                scrollTrigger: {
                    trigger: ".tech-section",
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                },
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.05,
                ease: "power2.out"
            });

            gsap.from(".education-section", {
                scrollTrigger: {
                    trigger: ".education-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            // Education items animation (staggered)
            gsap.from(".education-item", {
                scrollTrigger: {
                    trigger: ".education-section",
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out"
            });

        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="max-w-full overflow-x-hidden">
            <Header page="Curriculum"/>
            <main ref={mainRef} className="flex flex-col lg:flex-row flex-wrap justify-center px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16 gap-12 sm:gap-16 lg:gap-20">
                {/* Left Section */}
                <section className="flex flex-col gap-12 sm:gap-16 lg:gap-20 w-full lg:w-[50vw]">
                    {/* About */}
                    <div className="flex flex-col gap-4 sm:gap-5">
                        <h1 className="cv-name text-4xl sm:text-5xl lg:text-7xl font-extrabold">
                            ACAUÃ RANGEL BRAZIL
                        </h1>
                        <h2 className="cv-role text-xl sm:text-2xl lg:text-3xl font-bold">
                            AI AGENT ENGINEER
                        </h2>
                        <h3 className="cv-description text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
                            I started studying programming in 2020, at the age of 12, and since then I have been dedicated to learning and applying development concepts in practice. My journey began with a keen interest in applying Artificial Intelligence (AI) to Discord bots, which led me to explore both front-end and back-end development. My current focus is on creating corporate AI agents, applying reasoning methodologies (CoT, ReAct) to increase the accuracy and usefulness of AI in internal business processes.
                        </h3>
                    </div>

                    {/* Experiences */}
                    <div className="experiences-section flex flex-col gap-6 sm:gap-7 lg:gap-8">
                        <h2 className="experience-title text-2xl sm:text-2xl lg:text-3xl font-semibold">
                            EXPERIENCE
                        </h2>

                        {/* Ford Motor Company */}
                        <div className="experience-item flex flex-col gap-2">
                            <h3 className="text-lg sm:text-xl font-semibold pb-1">
                                <strong>IEL Researcher - Hybrid: Ford Motor Company</strong>
                            </h3>
                            <h3 className="text-lg sm:text-xl font-semibold pb-1">
                                <strong>AI Agent Developer & Full-Stack Developer</strong>
                            </h3>
                            <h3 className="text-lg sm:text-xl font-semibold pb-1">
                                2025 - | Salvador - BA
                            </h3>
                            <h3 className="text-base sm:text-lg lg:text-xl font-normal pl-4 sm:pl-5 pb-1 leading-relaxed">
                                Development of AI agents with LangChain/LangGraph and integrations with 
                                vector databases and internal documentation. In addition to carpooling 
                                system for company workers.
                            </h3>
                            <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                                Technologies: <strong>Prisma, NestJS, React, Google Cloud, Tekton, Terraform, LangChain/LangGraph, PGVector, Elastic Search, PostgreSQL</strong>
                            </h3>
                        </div>

                        {/* Castly */}
                        <div className="experience-item flex flex-col gap-2">
                            <h3 className="text-lg sm:text-xl font-semibold pb-1">
                                <strong>Freelancer - Castly</strong>
                            </h3>
                            <h3 className="text-lg sm:text-xl font-semibold pb-1">
                                <strong>Full-Stack Developer & DevOps</strong>
                            </h3>
                            <h3 className="text-lg sm:text-xl font-semibold pb-1">
                                2024 - 2025 | Home Office
                            </h3>
                            <h3 className="text-base sm:text-lg lg:text-xl font-normal pl-4 sm:pl-5 pb-1 leading-relaxed">
                                The application aims to facilitate video streaming to multiple platforms 
                                at the same time, without the need for a high-cost computer for the Streamer.
                            </h3>
                            <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                                Technologies: <strong>Node.js, MySQL, Nginx RTMP, React.js, Figma</strong>
                            </h3>
                        </div>

                        {/* Projects Container */}
                        <div className="projects-container flex flex-col gap-6 sm:gap-7 lg:gap-8">
                            {/* Monan SDK */}
                            <div className="project-item flex flex-col gap-2 sm:gap-2.5">
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal">
                                    Project: <strong>Monan SDK - Framework (<a href="https://github.com/monan-ai/monan-sdk" target="_blank" rel="noopener noreferrer" className="text-[#71C829] hover:underline transition-colors duration-300">Project link</a>)</strong>
                                </h3>
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal pl-4 sm:pl-5 leading-relaxed">
                                    Development of open-source framework in Bun for orchestration of AI Agents. 
                                    Offering hybrid inference (Local and API), native RAG with SQLite (Vector Store) 
                                    and masking of sensitive data (PII) by default. I implemented Hyper Agents 
                                    architectures and type-safe tools system, allowing the creation of complex 
                                    and secure workflows.
                                </h3>
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal">
                                    Technologies: <strong>Bun, ElysiaJS, Zod, SQLite (Vector Search), Ollama, OpenRouter, HuggingFace (Embeddings)</strong>
                                </h3>
                            </div>

                            {/* Pitanga */}
                            <div className="project-item flex flex-col gap-2 sm:gap-2.5">
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal">
                                    Project: <strong>Pitanga - Discord Bot (<a href="https://top.gg/bot/921954829352468572" target="_blank" rel="noopener noreferrer" className="text-[#71C829] hover:underline transition-colors duration-300">Project link</a>)</strong>
                                </h3>
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal pl-4 sm:pl-5 leading-relaxed">
                                    This bot has several systems, including economy, TTS, mini games, and music. 
                                    Its main system is TTS, I used the ElevenLabs API to clone a model's voice 
                                    and create the audios, and the Discord API to play them in the call.
                                </h3>
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal">
                                    Technologies: <strong>Python, ElevenLabs API, MySQL, Numpy, Lavalink, Wavelink</strong>
                                </h3>
                            </div>

                            {/* Phoenix */}
                            <div className="project-item flex flex-col gap-2 sm:gap-2.5">
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal">
                                    Project: <strong>Phoenix (<a href="https://phoenixligajovem.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-[#71C829] hover:underline transition-colors duration-300">Project link</a>)</strong>
                                </h3>
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal pl-4 sm:pl-5 leading-relaxed">
                                    The purpose of the project is to assist teachers with schedules and 
                                    location of classes, making this information available in graphs and 
                                    providing an AI called Ignis that has access to this information.
                                </h3>
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal">
                                    Technologies: <strong>React.js, Gemini API, Node.js, Express</strong>
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Right Section */}
                <section className="flex flex-col gap-12 sm:gap-16 lg:gap-20 w-full lg:w-auto">
                    {/* Contact Links */}
                    <div className="contact-section flex flex-col gap-4 sm:gap-5">
                        <h2 className="text-2xl sm:text-2xl lg:text-3xl font-semibold">
                            CONTACT LINKS
                        </h2>
                        <div className="flex flex-col gap-1 sm:gap-1.5">
                            <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                                <strong>GitHub:</strong> <a href="https://github.com/Acaua-Rangel/" target="_blank" rel="noopener noreferrer" className="text-[#71C829] hover:underline transition-colors duration-300 break-all">https://github.com/Acaua-Rangel/</a>
                            </h3>
                            <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/acauã-rangel" target="_blank" rel="noopener noreferrer" className="text-[#71C829] hover:underline transition-colors duration-300">linkedin.com/in/acauã-rangel</a>
                            </h3>
                            <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                                <strong>Telephone:</strong> <a href="tel:+5571981717609" className="text-[#71C829] hover:underline transition-colors duration-300">+55 (71) 98171-7609</a>
                            </h3>
                            <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                                <strong>E-mail:</strong> <a href="mailto:acauarangel17@gmail.com" className="text-[#71C829] hover:underline transition-colors duration-300 break-all">acauarangel17@gmail.com</a>
                            </h3>
                        </div>
                    </div>

                    {/* Technologies */}
                    <div className="tech-section flex flex-col gap-4 sm:gap-5">
                        <h2 className="text-2xl sm:text-2xl lg:text-3xl font-semibold">
                            TECHNOLOGIES
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-1 sm:gap-1.5">
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">HTML/CSS</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">React</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">Angular</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">Prisma</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">NestJS</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">Node.js</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">Discord.py</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">Lavalink</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">FFmpeg</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">Docker</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">Nginx</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">MySQL</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">Firebase</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">AWS</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">Oracle Cloud</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">Google Cloud</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">Hetzner</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">LangChain</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">LangGraph</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">FastAPI</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">Ollama</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">PostgreSQL</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">PGVector</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">Elastic Search</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">HuggingFace</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">Tekton</h3>
                            <h3 className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">Terraform</h3>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="education-section flex flex-col gap-4 sm:gap-5">
                        <h2 className="text-2xl sm:text-2xl lg:text-3xl font-semibold">
                            EDUCATION
                        </h2>
                        <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8">
                            {/* Estácio */}
                            <div className="education-item flex flex-col gap-1 sm:gap-1.5">
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                                    <strong>Estácio</strong>
                                </h3>
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                                    Course: <strong>Analysis and Systems Development</strong>
                                </h3>
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                                    Duration: <strong>2025 - 2027</strong>
                                </h3>
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                                    Locality: <strong>Salvador - BA</strong>
                                </h3>
                            </div>

                            {/* Ford <Enter> */}
                            <div className="education-item flex flex-col gap-1 sm:gap-1.5">
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                                    <strong>SENAI Cimatec</strong>
                                </h3>
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                                    Course: <strong>Ford &lt;Enter&gt;</strong>
                                </h3>
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                                    Duration: <strong>Jan 2025 - May 2025</strong>
                                </h3>
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                                    Locality: <strong>Salvador - BA</strong>
                                </h3>
                            </div>

                            {/* Mechatronics */}
                            <div className="education-item flex flex-col gap-1 sm:gap-1.5">
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                                    <strong>SENAI Cimatec</strong>
                                </h3>
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                                    Course: <strong>Mechatronics Technician</strong>
                                </h3>
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                                    Duration: <strong>2022 - 2024</strong>
                                </h3>
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                                    Locality: <strong>Salvador - BA</strong>
                                </h3>
                            </div>

                            {/* High School */}
                            <div className="education-item flex flex-col gap-1 sm:gap-1.5">
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                                    <strong>SESI Djalma Pessoa School</strong>
                                </h3>
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                                    Course: <strong>High School</strong>
                                </h3>
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                                    Duration: <strong>2022 - 2024</strong>
                                </h3>
                                <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                                    Locality: <strong>Salvador - BA</strong>
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Curriculum