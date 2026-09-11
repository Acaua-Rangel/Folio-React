import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiDownload } from "react-icons/fi";
import { generateAndDownloadDocx } from "../../utils/generateDocx";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactLinksSection from "./components/ContactLinksSection";
import TechnologiesSection from "./components/TechnologiesSection";
import EducationSection from "./components/EducationSection";
import LinkPreview from "./components/LinkPreview";

gsap.registerPlugin(ScrollTrigger);

function Resume() {
    const mainRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDownloadDocx = (language) => {
        generateAndDownloadDocx(language);
        setIsModalOpen(false);
    };

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
            <Header page="Resume"/>
            <LinkPreview />
            <main id="resume-main-content" ref={mainRef} className="flex flex-col lg:flex-row flex-wrap justify-center px-4 sm:px-6 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 lg:pb-16 gap-12 sm:gap-16 lg:gap-20">
                {/* Left Section */}
                <section className="flex flex-col gap-12 sm:gap-16 lg:gap-20 w-full lg:w-[50vw]">
                    <AboutSection />
                    <ExperienceSection />
                </section>

                {/* Right Section */}
                <section className="flex flex-col gap-12 sm:gap-16 lg:gap-20 w-full lg:w-auto">
                    <ContactLinksSection />
                    <TechnologiesSection />
                    <EducationSection />
                </section>
            </main>
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
                {isModalOpen && (
                    <div className="bg-[#062A0D] text-white rounded-lg shadow-xl p-2 mb-3 flex flex-col gap-1 w-48 border border-green-900/30">
                        <button 
                            onClick={() => handleDownloadDocx('en')}
                            className="text-left px-4 py-2 hover:bg-[#0a4214] rounded-md transition-colors text-sm font-medium cursor-pointer border-none bg-transparent text-white"
                        >
                            English (EN)
                        </button>
                        <button 
                            onClick={() => handleDownloadDocx('pt')}
                            className="text-left px-4 py-2 hover:bg-[#0a4214] rounded-md transition-colors text-sm font-medium cursor-pointer border-none bg-transparent text-white"
                        >
                            Português (BR)
                        </button>
                    </div>
                )}
                <button 
                    onClick={() => setIsModalOpen(!isModalOpen)}
                    className="download-cv-btn rounded-full shadow-lg border-0 cursor-pointer"
                >
                    <span className="flex items-center gap-2 bg-[#062A0D] text-white px-5 py-2.5 rounded-full text-sm font-medium">
                        <FiDownload className="text-lg" />
                        Download CV (DOCX)
                    </span>
                </button>
            </div>
            <Footer />
        </div>
    )
}

export default Resume;
