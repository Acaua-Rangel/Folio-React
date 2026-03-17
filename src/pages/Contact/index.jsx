import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Header from "../../components/Header";
import ContactBanner from "./components/ContactBanner";
import ContactCard from "./components/ContactCard";

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
        <div className="max-w-full overflow-x-hidden min-h-screen ">
            <Header page="Contact"/>
            <main ref={mainRef} className="pt-8 sm:pt-12 lg:pt-15 px-4 flex items-center justify-center">
                <section className="flex flex-col items-center justify-center w-full max-w-3xl">
                    <ContactBanner />
                    <ContactCard />
                </section>
            </main>
        </div>
    )
}

export default Contact;
