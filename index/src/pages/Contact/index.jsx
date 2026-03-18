import { useLayoutEffect, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import Header from "../../components/Header";
import ContactBanner from "./components/ContactBanner";
import ContactCard from "./components/ContactCard";

function BackgroundParticles() {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const rafRef = useRef(null);

    const handleMouseMove = useCallback((e) => {
        mouseRef.current = { x: e.clientX, y: e.clientY };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);

        // Spawn initial particles
        const count = 80;
        particlesRef.current = [];
        for (let i = 0; i < count; i++) {
            particlesRef.current.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                baseX: Math.random() * canvas.width,
                baseY: Math.random() * canvas.height,
                size: 1 + Math.random() * 2.5,
                alpha: 0.15 + Math.random() * 0.35,
                driftX: (Math.random() - 0.5) * 0.3,
                driftY: (Math.random() - 0.5) * 0.3,
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const { x: mx, y: my } = mouseRef.current;

            particlesRef.current.forEach(p => {
                // Drift slowly
                p.baseX += p.driftX;
                p.baseY += p.driftY;

                // Wrap around edges
                if (p.baseX < 0) p.baseX = canvas.width;
                if (p.baseX > canvas.width) p.baseX = 0;
                if (p.baseY < 0) p.baseY = canvas.height;
                if (p.baseY > canvas.height) p.baseY = 0;

                // Attract toward cursor
                const dx = mx - p.baseX;
                const dy = my - p.baseY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const attractRadius = 180;

                if (dist < attractRadius) {
                    const force = (1 - dist / attractRadius) * 40;
                    p.x += (p.baseX + (dx / dist) * force - p.x) * 0.08;
                    p.y += (p.baseY + (dy / dist) * force - p.y) * 0.08;
                } else {
                    p.x += (p.baseX - p.x) * 0.05;
                    p.y += (p.baseY - p.y) * 0.05;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(113, 200, 41, ${p.alpha})`;
                ctx.fill();
            });

            // Draw connections between nearby particles
            const particles = particlesRef.current;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(113, 200, 41, ${0.08 * (1 - dist / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [handleMouseMove]);

    return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}

function IdleRobot() {
    const robotRef = useRef(null);
    const idleTimerRef = useRef(null);
    const activeRef = useRef(false);
    const cursorRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const tlRef = useRef(null);
    const hitLoopRef = useRef(null);

    useEffect(() => {
        const dismiss = () => {
            if (!activeRef.current) return;
            activeRef.current = false;
            if (tlRef.current) tlRef.current.kill();
            if (hitLoopRef.current) hitLoopRef.current.kill();
            const robot = robotRef.current;
            if (robot) {
                gsap.to(robot, {
                    opacity: 0,
                    y: "+=30",
                    duration: 0.4,
                    ease: "power2.in",
                    onComplete: () => {
                        gsap.set(robot, { rotation: 0 });
                    }
                });
            }
        };

        const resetTimer = () => {
            clearTimeout(idleTimerRef.current);
            idleTimerRef.current = setTimeout(triggerRobot, 5000);
        };

        const handleMove = (e) => {
            cursorRef.current = { x: e.clientX, y: e.clientY };
            if (activeRef.current) {
                dismiss();
                resetTimer();
            } else {
                resetTimer();
            }
        };

        const startHitting = (robot, cx, cy, targetX, targetY) => {
            const dirX = targetX < cx ? -1 : 1;
            const loop = gsap.timeline({ repeat: -1 });
            hitLoopRef.current = loop;

            loop
                // Wind up (pull back)
                .to(robot, {
                    rotation: dirX * -20,
                    x: cx + 30 + (dirX * 10),
                    duration: 0.25,
                    ease: "power2.in",
                })
                // Hit! (lunge forward)
                .to(robot, {
                    rotation: dirX * 25,
                    x: cx + 30 - (dirX * 15),
                    duration: 0.15,
                    ease: "power4.out",
                })
                // Bounce back
                .to(robot, {
                    rotation: 0,
                    x: cx + 30,
                    duration: 0.3,
                    ease: "elastic.out(1, 0.5)",
                })
                // Brief pause
                .to(robot, { duration: 0.4 });
        };

        const triggerRobot = () => {
            if (activeRef.current) return;
            const whatsapp = document.getElementById("whatsapp-link");
            const robot = robotRef.current;
            if (!whatsapp || !robot) return;

            activeRef.current = true;
            const waRect = whatsapp.getBoundingClientRect();
            const targetX = waRect.left + waRect.width / 2;
            const targetY = waRect.top + waRect.height / 2;
            const cx = cursorRef.current.x;
            const cy = cursorRef.current.y;

            const startX = window.innerWidth + 20;
            const startY = window.innerHeight - 60;
            const dirX = targetX < cx ? -1 : 1;

            gsap.set(robot, { x: startX, y: startY, opacity: 1, scaleX: dirX === 1 ? -1 : 1, rotation: 0 });

            const tl = gsap.timeline({
                onComplete: () => {
                    startHitting(robot, cx, cy, targetX, targetY);
                }
            });
            tlRef.current = tl;

            // Walk to cursor
            tl.to(robot, {
                x: cx + 30,
                y: cy,
                duration: 1.2,
                ease: "power2.inOut",
            })
            // Face toward WhatsApp
            .to(robot, {
                scaleX: dirX === 1 ? -1 : 1,
                duration: 0.15,
            });
        };

        window.addEventListener("mousemove", handleMove);
        idleTimerRef.current = setTimeout(triggerRobot, 5000);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            clearTimeout(idleTimerRef.current);
            if (tlRef.current) tlRef.current.kill();
            if (hitLoopRef.current) hitLoopRef.current.kill();
        };
    }, []);

    return (
        <div
            ref={robotRef}
            className="fixed z-50 pointer-events-none"
            style={{ opacity: 0, top: 0, left: 0 }}
        >
            <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Antenna */}
                <line x1="32" y1="2" x2="32" y2="12" stroke="#71C829" strokeWidth="2" strokeLinecap="round" />
                <circle cx="32" cy="2" r="2.5" fill="#71C829" />
                {/* Head */}
                <rect x="16" y="12" width="32" height="22" rx="5" fill="#1a1a1a" stroke="#71C829" strokeWidth="1.5" />
                {/* Eyes */}
                <circle cx="25" cy="23" r="3.5" fill="#71C829">
                    <animate attributeName="r" values="3.5;2;3.5" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="39" cy="23" r="3.5" fill="#71C829">
                    <animate attributeName="r" values="3.5;2;3.5" dur="2s" repeatCount="indefinite" />
                </circle>
                {/* Mouth */}
                <path d="M25 29 Q32 33 39 29" stroke="#71C829" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                {/* Body */}
                <rect x="20" y="36" width="24" height="16" rx="4" fill="#1a1a1a" stroke="#71C829" strokeWidth="1.5" />
                {/* Arms */}
                <line x1="18" y1="40" x2="10" y2="46" stroke="#71C829" strokeWidth="2" strokeLinecap="round" />
                <line x1="46" y1="40" x2="54" y2="46" stroke="#71C829" strokeWidth="2" strokeLinecap="round" />
                {/* Legs */}
                <line x1="27" y1="52" x2="27" y2="60" stroke="#71C829" strokeWidth="2" strokeLinecap="round">
                    <animate attributeName="x1" values="27;25;27;29;27" dur="0.4s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="27;25;27;29;27" dur="0.4s" repeatCount="indefinite" />
                </line>
                <line x1="37" y1="52" x2="37" y2="60" stroke="#71C829" strokeWidth="2" strokeLinecap="round">
                    <animate attributeName="x1" values="37;39;37;35;37" dur="0.4s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="37;39;37;35;37" dur="0.4s" repeatCount="indefinite" />
                </line>
                {/* Belly button / detail */}
                <circle cx="32" cy="44" r="2" fill="#71C829" opacity="0.5" />
            </svg>
        </div>
    );
}

function Contact() {
    const mainRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Banner animation
            tl.fromTo(".contact-banner", 
                { y: -50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
            )
            // Card container animation
            .fromTo(".contact-card",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" },
                "-=0.4"
            )
            // Profile image animation
            .fromTo(".profile-img",
                { scale: 0, rotation: 180, opacity: 0 },
                { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" },
                "-=0.7"
            )
            // Name animation
            .fromTo(".contact-name",
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
                "-=0.5"
            )
            // Role animation
            .fromTo(".contact-role",
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
                "-=0.4"
            )
            // Contact links animation (staggered)
            .fromTo(".contact-link",
                { x: -20, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
                "-=0.3"
            )
            // Social links animation
            .fromTo(".social-link",
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(2)" },
                "-=0.3"
            );

            // Hover animations for contact links
            const contactLinks = document.querySelectorAll(".contact-link");
            contactLinks.forEach(link => {
                link.addEventListener("mouseenter", () => {
                    gsap.to(link.querySelector("svg"), {
                        scale: 1.2,
                        rotation: 10,
                        duration: 0.3,
                        ease: "back.out(2)"
                    });
                });
                
                link.addEventListener("mouseleave", () => {
                    gsap.to(link.querySelector("svg"), {
                        scale: 1,
                        rotation: 0,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            });

            // Hover animations for social links
            const socialLinks = document.querySelectorAll(".social-link");
            socialLinks.forEach(link => {
                link.addEventListener("mouseenter", () => {
                    gsap.to(link, {
                        y: -5,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
                
                link.addEventListener("mouseleave", () => {
                    gsap.to(link, {
                        y: 0,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            });

        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="max-w-full overflow-x-hidden min-h-screen bg-[#062A0D] relative">
            <BackgroundParticles />
            <IdleRobot />
            <Header page="Contact"/>
            <main ref={mainRef} className="flex items-center justify-center min-h-screen px-4 py-28 sm:py-32">
                <section className="flex flex-col items-center justify-center w-full max-w-3xl">
                    <ContactBanner />
                    <ContactCard />
                </section>
            </main>
        </div>
    )
}

export default Contact;
