import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const slides = [
    {
        image: "/history/1.png",
        year: "2020",
        title: "The Beginning of Programming",
        description:
            "I started programming at age 12, driven by the dream of creating an AI assistant that could provide better answers than what was available at the time. Back then, only GPT-2 existed in closed beta. So I built two versions of my own assistant: one using DistilBERT and another with Python's ChatterBot library.",
    },
    {
        image: "/history/2.png",
        year: "2022",
        title: "Scientific Research at SESI",
        description:
            "I joined the scientific research program at SESI in 2022, motivated by my family of researchers. The desire to contribute to science has always been present in my family environment.",
    },
    {
        image: "/history/3.png",
        year: "2023",
        title: "Skills for Innovation — Intel & CRT-BA",
        description:
            "I completed the Intel Skills for Innovation course, in partnership with CRT-BA (Regional Council of Technicians of Bahia). I had the opportunity to participate by standing out in the Mechatronics course I took during high school.",
    },
    {
        image: "/history/4.png",
        year: "2024",
        title: "FENIC Science Fair",
        description:
            "After three years of research — and having switched projects along the way, from Microalgae Spray Dryer to Autonomous Zagi Wing — I had the opportunity to present my research at the FENIC science fair, its first edition held here in Salvador, Bahia.",
    },
    {
        image: "/history/5.png",
        year: "2025",
        title: "Ford Enter Program",
        description:
            "After the research period, I wanted to focus on programming, especially since I was already working at Castly, a Texas-based multistreaming startup. I joined the first class in Salvador of the Ford Enter program — a frontend developer training program — after a selection process with over 1,500 applicants, where only 60 people were selected (40 in the morning and 20 in the afternoon).",
    },
    {
        image: "/history/6.png",
        year: "2025",
        title: "Joining Ford",
        description:
            "Thanks to the Ford Enter program, I got the opportunity to enter Ford's selection process and was accepted, being one of only two students who made it in.",
    },
];

function TrajectorySection() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const totalSlides = slides.length;
            const segmentDuration = 1; // each slide occupies 1 unit in the timeline

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${totalSlides * 100}%`,
                    pin: true,
                    pinSpacing: true,
                    scrub: 0.5,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const activeIndex = Math.min(
                            Math.floor(progress * totalSlides),
                            totalSlides - 1
                        );
                        const dots = containerRef.current.querySelectorAll("[data-dot]");
                        dots.forEach((dot, j) => {
                            dot.style.backgroundColor =
                                j === activeIndex ? "#71C829" : "transparent";
                        });
                    },
                },
            });

            for (let i = 1; i < totalSlides; i++) {
                const slideEl = containerRef.current.querySelector(
                    `[data-slide="${i}"]`
                );
                const textEl = containerRef.current.querySelector(
                    `[data-text="${i}"]`
                );
                const prevTextEl = containerRef.current.querySelector(
                    `[data-text="${i - 1}"]`
                );

                const pos = (i - 1) * segmentDuration;

                // Fade out previous text
                tl.to(prevTextEl, {
                    opacity: 0,
                    y: -40,
                    duration: segmentDuration * 0.4,
                    ease: "power1.in",
                }, pos);

                // Crossfade image
                tl.to(slideEl, {
                    opacity: 1,
                    duration: segmentDuration * 0.6,
                    ease: "none",
                }, pos + segmentDuration * 0.2);

                // Fade in new text
                tl.fromTo(textEl,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: segmentDuration * 0.4,
                        ease: "power1.out",
                    },
                    pos + segmentDuration * 0.6
                );
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="trajectory">
            <div
                ref={containerRef}
                className="relative w-screen h-screen overflow-hidden"
            >
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        data-slide={i}
                        className="absolute inset-0 w-full h-full"
                        style={{ opacity: i === 0 ? 1 : 0, zIndex: i }}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                            loading={i < 2 ? "eager" : "lazy"}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/10" />
                    </div>
                ))}

                {slides.map((slide, i) => (
                    <div
                        key={`text-${i}`}
                        data-text={i}
                        className="absolute bottom-0 left-0 right-0 z-50 px-6 sm:px-12 md:px-20 pb-16 sm:pb-20 pointer-events-none"
                        style={{ opacity: i === 0 ? 1 : 0 }}
                    >
                        <div className="max-w-3xl">
                            <span className="inline-block text-[#71C829] text-sm sm:text-base font-semibold tracking-widest uppercase mb-3">
                                {slide.year}
                            </span>
                            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                                {slide.title}
                            </h2>
                            <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
                                {slide.description}
                            </p>
                        </div>
                    </div>
                ))}

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none">
                    <svg
                        className="w-6 h-10 text-white/60"
                        viewBox="0 0 24 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="1"
                            y="1"
                            width="22"
                            height="38"
                            rx="11"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        <circle
                            className="animate-scroll-mouse"
                            cx="12"
                            cy="12"
                            r="3"
                            fill="currentColor"
                        />
                    </svg>
                </div>

                <div className="absolute right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 pointer-events-none">
                    {slides.map((_, i) => (
                        <div
                            key={`dot-${i}`}
                            data-dot={i}
                            className="w-2.5 h-2.5 rounded-full border border-white/50 transition-all duration-500"
                            style={{
                                backgroundColor: i === 0 ? "#71C829" : "transparent",
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TrajectorySection;
