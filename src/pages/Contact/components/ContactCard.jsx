import { useCallback, useRef, useEffect } from "react";
import { MdEmail, FaWhatsapp, FaDiscord, FaGithub, FaLinkedin } from "../icons";

function ContactCard() {
    const cardRef = useRef(null);
    const canvasRef = useRef(null);
    const glowRef = useRef(null);
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: 0, y: 0, active: false });
    const rafRef = useRef(null);

    const handleMouseMove = useCallback((e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouseRef.current = { x, y, active: true };

        if (glowRef.current) {
            glowRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(113,200,41,0.07) 0%, transparent 50%)`;
        }
    }, []);

    const handleMouseLeave = useCallback(() => {
        mouseRef.current.active = false;
        if (glowRef.current) {
            glowRef.current.style.background = "transparent";
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const card = cardRef.current;
        if (!canvas || !card) return;

        const ctx = canvas.getContext("2d");
        let width, height;

        const resize = () => {
            width = card.offsetWidth;
            height = card.offsetHeight;
            canvas.width = width;
            canvas.height = height;
        };
        resize();
        window.addEventListener("resize", resize);

        const spawnParticle = (mx, my) => {
            const angle = Math.random() * Math.PI * 2;
            const speed = 0.3 + Math.random() * 0.8;
            particlesRef.current.push({
                x: mx + (Math.random() - 0.5) * 40,
                y: my + (Math.random() - 0.5) * 40,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 1,
                decay: 0.008 + Math.random() * 0.012,
                size: 1 + Math.random() * 2,
            });
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            const { x: mx, y: my, active } = mouseRef.current;

            if (active && particlesRef.current.length < 60) {
                for (let i = 0; i < 2; i++) spawnParticle(mx, my);
            }

            particlesRef.current = particlesRef.current.filter(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= p.decay;
                if (p.life <= 0) return false;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(113, 200, 41, ${p.life * 0.5})`;
                ctx.fill();
                return true;
            });

            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className="contact-card relative -top-4 sm:-top-3.75 w-full flex flex-col rounded-2xl sm:rounded-[15px] bg-[#0a0a0a] shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-white/10"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Glow overlay */}
            <div ref={glowRef} className="absolute inset-0 pointer-events-none z-10 rounded-2xl sm:rounded-[15px]" />
            {/* Particle canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />
            {/* Profile Image */}
            <img 
                className="profile-img relative -top-16 sm:-top-18.75 left-8 sm:left-11.25 w-32 h-32 sm:w-36 sm:h-36 lg:w-37.5 lg:h-37.5 rounded-full border-4 border-[#23A147] shadow-xl" 
                src="/Perfil.jpeg" 
                alt="Profile picture"
            />
            
            {/* Content */}
            <div className="flex flex-col relative -top-10 sm:-top-11.25 px-6 sm:px-8 gap-4 sm:gap-3.75">
                {/* Name and Role */}
                <div className="flex flex-col gap-1 sm:gap-2">
                    <h2 className="contact-name font-bold text-xl sm:text-2xl lg:text-3xl w-full text-white">
                        ACAUÃ RANGEL BRAZIL
                    </h2>
                    <p className="contact-role text-base sm:text-lg text-gray-400 font-medium">
                        AI Agent Engineer & Full-Stack Developer
                    </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 my-1"></div>

                {/* Contact Links */}
                <div className="flex flex-col gap-3 sm:gap-4">
                    <a 
                        className="contact-link flex items-center text-base sm:text-lg lg:text-xl font-light text-white/80 hover:text-[#EA4335] transition-all duration-300 gap-2.5 sm:gap-3 group" 
                        href="mailto:acauarangel17@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MdEmail className="text-2xl sm:text-[26px] shrink-0 duration-300"/>
                        <p className="group-hover:translate-x-1 transition-transform duration-300 break-all">
                            acauarangel17@gmail.com
                        </p>
                    </a>

                    <a 
                        id="whatsapp-link"
                        className="contact-link flex items-center text-base sm:text-lg lg:text-xl font-light text-white/80 hover:text-[#25D366] transition-all duration-300 gap-2.5 sm:gap-3 group" 
                        href="https://wa.me/5571981717609"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp className="text-2xl sm:text-[26px] shrink-0 duration-300"/>
                        <p className="group-hover:translate-x-1 transition-transform duration-300">
                            +55 (71) 98171-7609
                        </p>
                    </a>

                    <a 
                        className="contact-link flex items-center text-base sm:text-lg lg:text-xl font-light text-white/80 hover:text-[#5865F2] transition-all duration-300 gap-2.5 sm:gap-3 group" 
                        href="https://discord.com/users/kunkchroma"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaDiscord className="text-2xl sm:text-[26px] shrink-0 duration-300"/>
                        <p className="group-hover:translate-x-1 transition-transform duration-300">
                            kunkchroma
                        </p>
                    </a>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 my-1"></div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-6 sm:gap-8">
                    <a 
                        className="social-link text-white/60 hover:text-[#0A66C2] transition-colors duration-300" 
                        href="https://www.linkedin.com/in/Acauã-Rangel/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="text-3xl sm:text-4xl"/>
                    </a>
                    <a 
                        className="social-link text-white/60 hover:text-white transition-colors duration-300" 
                        href="https://github.com/Acaua-Rangel/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub className="text-3xl sm:text-4xl"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;
