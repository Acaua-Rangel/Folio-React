import { useState, useEffect, useRef } from "react";

const phrases = [
    { line1: " I'm a", line2: "AI Engineer" },
    { line1: " my name is", line2: "Acauã" },
];

function HeroSection() {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [displayedLine1, setDisplayedLine1] = useState("");
    const [displayedLine2, setDisplayedLine2] = useState("");
    const [cursorOn, setCursorOn] = useState(1);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setHasScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        let cancelled = false;

        function wait(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        async function typeText(setText, text, speed) {
            for (let i = 1; i <= text.length; i++) {
                if (cancelled) return;
                setText(text.slice(0, i));
                await wait(speed);
            }
        }

        async function eraseText(setText, text, speed) {
            for (let i = text.length - 1; i >= 0; i--) {
                if (cancelled) return;
                setText(text.slice(0, i));
                await wait(speed);
            }
        }

        async function run() {
            let idx = 0;
            await wait(500);

            while (!cancelled) {
                const { line1, line2 } = phrases[idx];

                // Type line1
                setCursorOn(1);
                await typeText(setDisplayedLine1, line1, 100);

                await wait(200);

                // Type line2
                setCursorOn(2);
                await typeText(setDisplayedLine2, line2, 100);

                // Pause
                await wait(3000);

                // Erase line2
                setCursorOn(2);
                await eraseText(setDisplayedLine2, line2, 50);

                await wait(200);

                // Erase line1
                setCursorOn(1);
                await eraseText(setDisplayedLine1, line1, 50);

                await wait(400);

                idx = (idx + 1) % phrases.length;
            }
        }

        run();
        return () => { cancelled = true; };
    }, []);

    const showCursorLine1 = cursorOn === 1;
    const showCursorLine2 = cursorOn === 2;

    return (
        <section className="relative h-screen rounded-b-3xl overflow-hidden z-10">
            <img
                src="/hero/frame-1.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <video
                autoPlay
                muted
                loop
                playsInline
                src="/hero/bg-hero.mp4"
                onCanPlay={() => setVideoLoaded(true)}
                className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black/70 to-transparent z-5 pointer-events-none rounded-b-3xl" />
            <div className="relative z-10 h-full flex items-end pb-24 sm:items-center text-white justify-center px-6 lg:justify-end lg:pr-[5%]">
                <div className="w-full lg:w-[40%]">
                    <h2 className="text-lg sm:text-xl lg:text-2xl">
                        Hi,
                        {displayedLine1}
                        {showCursorLine1 && <span className="inline-block w-[0.6em] h-[1.1em] bg-white align-middle animate-pulse ml-px" />}
                    </h2>
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-semibold">
                        {displayedLine2}
                        {showCursorLine2 && <span className="inline-block w-[0.55em] h-[1.05em] bg-white align-middle animate-pulse ml-px" />}
                    </h1>
                    <h2 className="text-base sm:text-lg lg:text-xl font-normal hero-element max-w-lg">
                        Coding since <strong>2020 (age 12)</strong>, I evolved from building AI Discord bots to architecting <strong>Corporate AI Agents</strong>. I use <strong>CoT</strong> and <strong>ReAct</strong> methodologies to deliver high-precision automation for internal business processes.
                    </h2>
                </div>
            </div>
            {/* Scroll down indicator */}
            <div
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 cursor-pointer transition-opacity duration-500 ${hasScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <span className="text-white/70 text-xs font-medium tracking-[0.25em] uppercase">Scroll Down</span>
                <div className="w-6 h-10 rounded-full border-2 border-white/60 flex justify-center pt-2">
                    <div className="w-1.5 h-3 rounded-full bg-white animate-scroll-mouse" />
                </div>
                <div className="flex flex-col items-center gap-1 animate-bounce">
                    <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    <svg className="w-4 h-4 text-white/50 -mt-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
