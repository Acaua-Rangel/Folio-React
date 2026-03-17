import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TbBrain, TbCode, TbCloud, TbApi, TbDatabase, TbRobot } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

const skills = [
    {
        title: "AI Agent Engineering",
        description: "Development of corporate AI agents with CoT and ReAct methodologies, applying structured reasoning for high-precision internal process automation.",
        icon: TbBrain
    },
    {
        title: "Full-Stack Development",
        description: "Expert in React, Angular, Node.js, and Python. Creation of complete and scalable web applications with modern architecture and clean code.",
        icon: TbCode
    },
    {
        title: "Cloud & Infrastructure",
        description: "Expertise in AWS and Google Cloud Platform. Infrastructure implementation with Docker, Kubernetes, and operational cost optimization.",
        icon: TbCloud
    },
    {
        title: "API Development",
        description: "Development of RESTful APIs, WebSockets, TCP/IP, and UDP. Creation of robust servers for web applications and multiplayer game systems.",
        icon: TbApi
    },
    {
        title: "Database Architecture",
        description: "Design and optimization of relational databases (PostgreSQL, MySQL) and NoSQL (Firebase, Firestore). Vector Search and advanced search systems.",
        icon: TbDatabase
    },
    {
        title: "Discord Bot Development",
        description: "Creation of multifunctional bots with Discord.py. Economy systems, music, TTS, and complex integrations with external APIs.",
        icon: TbRobot
    }
];

function SkillsSection() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.fromTo(".skills-title", 
                { opacity: 0, y: 80, rotateX: 45 },
                {
                    opacity: 1, y: 0, rotateX: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".skills-title",
                        start: "top 85%",
                        end: "top 50%",
                        scrub: 1,
                    }
                }
            );

            // Subtitle
            gsap.fromTo(".skills-subtitle",
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".skills-subtitle",
                        start: "top 85%",
                        end: "top 60%",
                        scrub: 1,
                    }
                }
            );

            // 3D card animations
            const cards = document.querySelectorAll(".skill-card-3d");
            cards.forEach((card, i) => {
                const isLeft = i % 2 === 0;
                gsap.fromTo(card,
                    {
                        opacity: 0,
                        z: -300,
                        rotateY: isLeft ? -25 : 25,
                        rotateX: 10,
                        x: isLeft ? -120 : 120,
                        scale: 0.7,
                    },
                    {
                        opacity: 1,
                        z: 0,
                        rotateY: 0,
                        rotateX: 0,
                        x: 0,
                        scale: 1,
                        duration: 1.5,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                            end: "top 40%",
                            scrub: 1,
                        }
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="skills" className="skills-section pt-32 sm:pt-40 pb-24 sm:pb-32 bg-black relative overflow-hidden -mt-8 z-[-1]" style={{ perspective: "1200px" }}>
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#71C829]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-40 right-10 w-96 h-96 bg-[#71C829]/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#71C829]/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20 sm:mb-28" style={{ transformStyle: "preserve-3d" }}>
                    <h1 className="skills-title text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-6">
                        SKILLS
                    </h1>
                    <p className="skills-subtitle text-lg sm:text-xl lg:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                        Technical expertise built over 5 years of development, 
                        from Discord bots to corporate AI agents.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10" style={{ transformStyle: "preserve-3d" }}>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-card-3d group relative"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <div className="relative p-8 sm:p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-[#71C829]/40 hover:shadow-[0_0_40px_rgba(113,200,41,0.15)]">
                                {/* Icon */}
                                <div className="mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                                    <skill.icon className="text-4xl sm:text-5xl text-[#71C829]" />
                                </div>
                                {/* Green accent line */}
                                <div className="w-12 h-1 bg-[#71C829] mb-5 transition-all duration-500 group-hover:w-20" />
                                {/* Title */}
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#71C829]">
                                    {skill.title}
                                </h2>
                                {/* Description */}
                                <p className="text-base sm:text-lg text-white/60 leading-relaxed transition-colors duration-300 group-hover:text-white/80">
                                    {skill.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
