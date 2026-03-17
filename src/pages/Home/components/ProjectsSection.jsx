import { useCallback } from "react";
import gsap from "gsap";

const projects = [
    {
        title: "Monan SDK",
        subtitle: "Open Source Framework",
        description: "Open source framework in Bun for local conversational AI agents or internal agents for secret data. Focused on usability and native Bun performance.",
        image: "/Monan Icon.png",
        link: "https://github.com/monan-ai/monan-sdk",
        technologies: ["Bun", "TypeScript", "Ollama"]
    },
    {
        title: "Researcher IEL - Ford Motor Company",
        subtitle: "Full-Stack Development + AI Agent Engineering",
        description: "Development of internal agents using LangChain/LangGraph with integration into internal documentation. Complete system for searching and creating code based on internal workflow.",
        image: "/Ford-picture.jpg",
        link: null,
        technologies: ["LangChain", "LangGraph", "PostgreSQL", "Python", "Nginx", "React"]
    },
    {
        title: "Freelancer - Castly",
        subtitle: "Multistreaming Platform",
        description: "Multistreaming system with integration based on FFMpeg and Nginx. Automated VOD for multiple platforms.",
        image: "/Castly Icon.png",
        link: null,
        technologies: ["Node.js", "Kubernetes", "Docker", "FFmpeg", "MySQL", "Nginx", "React"]
    },
    {
        title: "Phoenix",
        subtitle: "React Website + AI Agent Chatbot",
        description: "Responsive website developed in React with Gemini API integration for an interactive chatbot for SENAI Cimatec teachers, facilitating the consultation and creation of curriculum grids.",
        image: "/Phoenix.png",
        link: "https://phoenixligajovem.netlify.app/",
        technologies: ["React", "Gemini API", "Tailwind CSS", "Node.js", "GCP"]
    },
    {
        title: "Valkyrio",
        subtitle: "XP - Discord Bot",
        description: "XP bot for Discord with Roblox API integration, ranking system, and automatic rewards.",
        image: "/Valkyrio.png",
        link: null,
        technologies: ["Discord.py", "Roblox API", "AWS"]
    },
    {
        title: "Pitanga",
        subtitle: "Multifunctional Discord Bot",
        description: "Multifunctional bot with music system, TTS, virtual economy, mini-games, and fun commands for communities. Early versions featured a chatbot system using Python's Chatterbot library.",
        image: "/Pitanga.png",
        link: "https://top.gg/bot/921954829352468572",
        technologies: ["Discord.py", "FFmpeg", "MySQL", "ElevenLabs API"]
    },
];

function ProjectsSection() {
    const handleMouseMove = useCallback((e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;

        gsap.to(card, {
            rotateX,
            rotateY,
            scale: 1.05,
            z: 30,
            duration: 0.4,
            ease: "power2.out",
            transformPerspective: 800,
        });

        const shine = card.querySelector(".card-shine");
        if (shine) {
            gsap.to(shine, {
                background: `radial-gradient(circle at ${x}px ${y}px, rgba(113,200,41,0.12) 0%, transparent 60%)`,
                duration: 0.3,
            });
        }
    }, []);

    const handleMouseLeave = useCallback((e) => {
        const card = e.currentTarget;
        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            z: 0,
            duration: 0.6,
            ease: "power3.out",
        });
        const shine = card.querySelector(".card-shine");
        if (shine) {
            gsap.to(shine, {
                background: "radial-gradient(circle at 50% 50%, transparent 0%, transparent 60%)",
                duration: 0.4,
            });
        }
    }, []);

    return (
        <section id="projects" className="projects-section py-20 sm:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center mb-16 sm:mb-20">MY WORK</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card group relative cursor-pointer will-change-transform"
                            style={{ perspective: "800px" }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="card-shine absolute inset-0 rounded-2xl pointer-events-none z-20" />
                            <div className="relative h-full flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm transition-shadow duration-500 group-hover:shadow-xl group-hover:border-[#71C829]/40">
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden bg-gray-100">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1 p-6">
                                    <h3 className="text-sm font-semibold text-[#71C829] uppercase tracking-wider mb-1">
                                        {project.subtitle}
                                    </h3>
                                    <h2 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-[#062A0D]">
                                        {project.title}
                                    </h2>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-[#062A0D]/5 text-[#062A0D] font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link */}
                                    {project.link && (
                                        <a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#062A0D] hover:text-[#71C829] transition-colors duration-300"
                                        >
                                            View Project
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;
