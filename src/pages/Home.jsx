import { useLayoutEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import cvPdf from '/cv-acaua-rangel.pdf';
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function Home() {
    const mainRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            
            const tl = gsap.timeline();

            // About image animation
            tl.from(".about-image", {
                x: -100,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            })
            // Hero elements animation
            .from(".hero-element", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "back.out(1.7)"
            }, "-=0.5");

            // Progressive Skills animation
            const skillItems = document.querySelectorAll(".skill-item");
            skillItems.forEach((item, index) => {
                gsap.fromTo(item, 
                    {
                        opacity: 0,
                        y: 100
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 70%",
                            end: "top 30%",
                            toggleActions: "play none none reverse",
                            scrub: 1
                        }
                    }
                );
            });

            // Projects animation
            const projectSections = document.querySelectorAll(".project-section");
            projectSections.forEach((section) => {
                gsap.from(section.querySelector(".project-content"), {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
                        toggleActions: "play none none reverse"
                    },
                    opacity: 0,
                    y: 30,
                    duration: 1,
                    ease: "power2.out"
                });

                gsap.from(section.querySelector(".project-image"), {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
                        toggleActions: "play none none reverse"
                    },
                    opacity: 0,
                    scale: 0.9,
                    duration: 1,
                    ease: "power2.out"
                });
            });

        }, mainRef);

        return () => ctx.revert();
    }, []);

    const skills = [
        {
            title: "AI Agent Engineering",
            description: "Development of corporate AI agents with CoT and ReAct methodologies, applying structured reasoning for high-precision internal process automation."
        },
        {
            title: "Full-Stack Development",
            description: "Expert in React, Angular, Node.js, and Python. Creation of complete and scalable web applications with modern architecture and clean code."
        },
        {
            title: "Cloud & Infrastructure",
            description: "Expertise in AWS and Google Cloud Platform. Infrastructure implementation with Docker, Kubernetes, and operational cost optimization."
        },
        {
            title: "API Development",
            description: "Development of RESTful APIs, WebSockets, TCP/IP, and UDP. Creation of robust servers for web applications and multiplayer game systems."
        },
        {
            title: "Database Architecture",
            description: "Design and optimization of relational databases (PostgreSQL, MySQL) and NoSQL (Firebase, Firestore). Vector Search and advanced search systems."
        },
        {
            title: "Discord Bot Development",
            description: "Creation of multifunctional bots with Discord.py. Economy systems, music, TTS, and complex integrations with external APIs."
        }
    ];

    const projects = [
        {
            title: "Monan SDK",
            subtitle: "Open Source Framework",
            description: "Open-source framework in Bun for conversational AI agents with MDC Lovelace API, Qwen, and integration with Hyper and PgBoss for data management.",
            image: "/Monan Icon.png",
            link: "https://github.com/monan-ai/monan-sdk",
            technologies: "Bun, TypeScript, Ollama"
        },
        {
            title: "Researcher IEL - Ford Motor Company",
            subtitle: "Full-Stack Development + AI Agent Engineering",
            description: "Development of internal tools using LangChain/LangGraph with SQL database integration and enterprise process automation.",
            image: "/Ford-picture.jpg",
            link: null,
            technologies: "LangChain, LangGraph, PostgreSQL, Python, Nginx, React"
        },
        {
            title: "Freelancer - Castly",
            subtitle: "Multistreaming Platform",
            description: "Multistreaming system with Twitch/YouTube integration. Automated video upload without the need for a high-cost computer.",
            image: "/Castly Icon.png",
            link: null,
            technologies: "Node.js, Kubernetes, Docker, FFmpeg, MySQL, Nginx, React"
        },
        {
            title: "Phoenix",
            subtitle: "React Website + AI Agent Chatbot",
            description: "Responsive website developed in React with Gemini AI integration for interactive chatbot and scheduling system.",
            image: "/Phoenix.png",
            link: "https://phoenixligajovem.netlify.app/",
            technologies: "React, Gemini API, Tailwind CSS, Node.js, Google Cloud Platform"
        },
        {
            title: "Valkyrio",
            subtitle: "XP - Discord Bot",
            description: "XP bot for Discord with Roblox API integration, ranking system, and automatic rewards.",
            image: "/Valkyrio.png",
            link: null,
            technologies: "Discord.py, Roblox API, AWS"
        },
        {
            title: "Pitanga",
            subtitle: "Multifunctional Discord Bot",
            description: "Multifunctional bot with music system, TTS, virtual economy, mini-games, and fun commands for communities.",
            image: "/Pitanga.png",
            link: "https://top.gg/bot/921954829352468572",
            technologies: "Discord.py, FFmpeg, MySQL, ElevenLabs API"
        },
    ];

    return (
        <>
            <Header page="Home"/>
            <main ref={mainRef}>
                <section className="flex flex-col lg:flex-row flex-wrap items-center justify-center lg:justify-around pb-12 lg:pb-25 px-4 lg:px-0 gap-8 lg:gap-7.5 min-h-[90vh]">
                    <img 
                        className="w-full max-w-62.5 sm:max-w-75 lg:max-w-2/5 about-image" 
                        src="/Person Icon.svg" 
                        alt="Acauã's illustration"
                        fetchpriority="high"
                        loading="eager"
                        decoding="async"
                    />
                    
                    <div className="flex pt-8 lg:pt-25 flex-col gap-6 lg:gap-7.5 w-full lg:w-auto px-4 lg:px-0">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold w-full lg:w-146.5 hero-element text-center lg:text-left">
                            ACAUÃ RANGEL BRAZIL
                        </h1>
                        
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-normal w-full lg:w-146.5 hero-element text-center lg:text-left">
                            Coding since <strong>2020 (age 12)</strong>, I evolved from building AI Discord bots to architecting <strong>Corporate AI Agents</strong>. I use <strong>CoT</strong> and <strong>ReAct</strong> methodologies to deliver high-precision automation for internal business processes.
                        </h2>
                        
                        <div className="hero-element flex justify-center lg:justify-start">
                            <a href="https://wa.me/5571981717609?text=I'm%20interested%20in%20your%20services" target="blank" className="w-full sm:w-auto">
                                <button className="bg-white border-2 text-base sm:text-lg border-black text-black w-full sm:w-77.75 h-14 sm:h-15.25 font-semibold duration-300 hover:bg-[#71C829] hover:border-[#71C829] hover:text-white cursor-pointer">
                                    CONTACT ME
                                </button>
                            </a>
                        </div>

                        <div className="flex flex-row items-center justify-center lg:justify-start gap-5 sm:gap-7 hero-element">
                            <a 
                                className="text-black hover:text-[#71C829] duration-300" 
                                href="https://www.linkedin.com/in/Acauã-Rangel/"
                                target="blank"
                            >
                                <FaLinkedin className="text-[45px] sm:text-[60px]"/>
                            </a>
                            <a 
                                className="text-black hover:text-[#71C829] duration-300" 
                                href="https://github.com/Acaua-Rangel/"
                                target="blank"
                            >
                                <FaGithub className="text-[45px] sm:text-[60px]"/>
                            </a>
                            <a 
                                className="text-black hover:text-[#71C829] duration-300" 
                                href={cvPdf}
                                download="CV Acauã Rangel Brazil.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiGoogledocs className="text-[40px] sm:text-[55px]"/>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="skills-section relative">
                    <div className="skill-item min-h-screen flex items-center justify-center bg-black sticky top-0">
                        <div className="max-w-5xl mx-auto px-8 text-white">
                            <h1 className="text-7xl font-bold mb-6">SKILLS</h1>
                            <p className="text-2xl leading-relaxed max-w-3xl">
                                Technical expertise built over 5 years of development, 
                                from Discord bots to corporate AI agents.
                            </p>
                        </div>
                    </div>

                    {skills.map((skill, index) => (
                        <div 
                            key={index}
                            className="skill-item min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-white sticky top-0"
                        >
                            <div className="max-w-5xl mx-auto px-8">
                                <div className="mb-8">
                                    <h2 className="text-6xl font-bold mb-4">{skill.title}</h2>
                                    <div className="w-24 h-1 bg-[#71C829]"></div>
                                </div>
                                <p className="text-2xl text-gray-700 leading-relaxed max-w-3xl">
                                    {skill.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="projects-section py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-8">
                        <h1 className="text-6xl font-bold text-center mb-20">MY WORK</h1>
                        <div className="space-y-32">
                            {projects.map((project, index) => (
                                <div 
                                    key={index}
                                    className={`project-section flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                                >
                                    <div className="w-full lg:w-1/2">
                                        {project.link ? (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                <div className="project-image overflow-hidden rounded-2xl shadow-2xl">
                                                    <img 
                                                        src={project.image} 
                                                        alt={project.title}
                                                        className="w-full h-auto transition-transform duration-500 hover:scale-110"
                                                    />
                                                </div>
                                            </a>
                                        ) : (
                                            <div className="project-image overflow-hidden rounded-2xl shadow-2xl">
                                                <img 
                                                    src={project.image} 
                                                    alt={project.title}
                                                    className="w-full h-auto transition-transform duration-500 hover:scale-110"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <div className="project-content w-full lg:w-1/2 space-y-6">
                                        <div>
                                            <h2 className="text-5xl font-bold mb-2">{project.title}</h2>
                                            <h3 className="text-2xl text-[#71C829] font-semibold mb-4">{project.subtitle}</h3>
                                        </div>
                                        <p className="text-xl text-gray-700 leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="pt-4">
                                            <p className="text-sm text-gray-600 font-semibold mb-2">TECHNOLOGIES:</p>
                                            <p className="text-base text-gray-800">{project.technologies}</p>
                                        </div>
                                        {project.link && (
                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="inline-block mt-4"
                                            >
                                                <button className="bg-[#71C829] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5da821] transition-colors duration-300">
                                                    VIEW PROJECT
                                                </button>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;