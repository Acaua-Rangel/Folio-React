import { useLayoutEffect, useRef } from "react";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import Header from "../components/Header";

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
        <div className="max-w-full overflow-x-hidden">
            <Header page="Contact"/>
            <main ref={mainRef} className="pt-8 sm:pt-12 lg:pt-15 px-4 min-h-screen flex items-center justify-center">
                <section className="flex flex-col items-center justify-center w-full max-w-3xl">
                    {/* Banner */}
                    <div className="contact-banner flex justify-center bg-linear-to-r from-[#A8CB8B] to-[#71C829] h-32 sm:h-36 lg:h-37.5 w-full rounded-t-2xl sm:rounded-t-[15px]"/>
                    
                    {/* Card */}
                    <div className="contact-card relative -top-4 sm:-top-3.75 w-full flex flex-col rounded-2xl sm:rounded-[15px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                        {/* Profile Image */}
                        <img 
                            className="profile-img relative -top-16 sm:-top-18.75 left-8 sm:left-11.25 w-32 h-32 sm:w-36 sm:h-36 lg:w-37.5 lg:h-37.5 rounded-full border-4 border-white shadow-xl" 
                            src="/Perfil.jpeg" 
                            alt="Profile picture"
                        />
                        
                        {/* Content */}
                        <div className="flex flex-col relative -top-10 sm:-top-11.25 px-6 sm:px-8 gap-4 sm:gap-3.75">
                            {/* Name and Role */}
                            <div className="flex flex-col gap-1 sm:gap-2 mb-2">
                                <h2 className="contact-name font-bold text-xl sm:text-2xl lg:text-3xl w-full">
                                    ACAUÃ RANGEL BRAZIL
                                </h2>
                                <p className="contact-role text-base sm:text-lg text-gray-600 font-medium">
                                    AI Agent Engineer & Full-Stack Developer
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-px bg-gray-200 mb-2"></div>

                            {/* Contact Links */}
                            <div className="flex flex-col gap-3 sm:gap-4">
                                <a 
                                    className="contact-link flex items-center text-base sm:text-lg lg:text-xl font-light text-black/90 hover:text-[#EA4335] transition-all duration-300 gap-2.5 sm:gap-3 group" 
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
                                    className="contact-link flex items-center text-base sm:text-lg lg:text-xl font-light text-black/90 hover:text-[#25D366] transition-all duration-300 gap-2.5 sm:gap-3 group" 
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
                                    className="contact-link flex items-center text-base sm:text-lg lg:text-xl font-light text-black/90 hover:text-[#5865F2] transition-all duration-300 gap-2.5 sm:gap-3 group" 
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
                            <div className="w-full h-px bg-gray-200 mt-2 mb-1"></div>

                            {/* Social Links */}
                            <div className="flex items-center justify-center gap-6 sm:gap-8 mt-2">
                                <a 
                                    className="social-link text-gray-700 hover:text-[#0A66C2] transition-colors duration-300" 
                                    href="https://www.linkedin.com/in/Acauã-Rangel/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin className="text-3xl sm:text-4xl"/>
                                </a>
                                <a 
                                    className="social-link text-gray-700 hover:text-black transition-colors duration-300" 
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
                </section>
            </main>
        </div>
    )
}

export default Contact