import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroSection from "./components/HeroSection";
import TechCarousel from "./components/TechCarousel";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import TrajectorySection from "./components/TrajectorySection";
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

    return (
        <>
            <Header page="Home"/>
            <main ref={mainRef}>
                <HeroSection />
                <TechCarousel />
                <SkillsSection />
                <ProjectsSection />
            </main>
            <TrajectorySection />
            <Footer />
        </>
    )
}

export default Home;
