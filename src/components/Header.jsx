import { useState, useLayoutEffect, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";

const LogoSVG = ({ isFirstLoad }) => {
    const pathRef = useRef(null);

    useLayoutEffect(() => {
        if (pathRef.current && isFirstLoad) {
            const path = pathRef.current;
            const length = path.getTotalLength();
            
            gsap.fromTo(
                path,
                {
                    strokeDasharray: length,
                    strokeDashoffset: length
                },
                {
                    strokeDashoffset: 0,
                    duration: 2,
                    ease: "power2.inOut"
                }
            );
        }
    }, [isFirstLoad]);

    return (
        <svg className="h-12" viewBox="0 0 106 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                ref={pathRef}
                d="M26.4818 74C31.3653 38.8875 33.2531 -24.9829 47.969 14.4152C61.7465 51.301 69.5188 87.0269 54.6811 68.3235C22.8868 28.2457 -68.3957 27.8893 104 27.8893" 
                stroke="currentColor" 
                strokeWidth="4" 
                strokeLinecap="round"
                style={!isFirstLoad ? { strokeDasharray: "none" } : {}}
            />
        </svg>
    );
};

const Header = ({ page }) => {
    const [clicked, setClicked] = useState(false);
    const [hasScroll, setHasScroll] = useState(false);
    const [isFirstLoad, setIsFirstLoad] = useState(false);
    const [inTrajectory, setInTrajectory] = useState(false);
    
    const headerRef = useRef(null);
    const location = useLocation();

    const handleClick = () => {
        setClicked(!clicked);
    };

    // Smooth scroll to hash on navigation
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }, [location]);

    useLayoutEffect(() => {
        // Verificar se é a primeira carga do site
        const hasAnimated = sessionStorage.getItem("logoAnimated");
        if (!hasAnimated) {
            setIsFirstLoad(true);
            sessionStorage.setItem("logoAnimated", "true");
        }
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            
            gsap.from(headerRef.current, {
                opacity: 0,
                duration: 1.5,
                ease: "power2.out"
            });

            gsap.from("li, #mobile", {
                opacity: 0,
                y: -10,
                duration: 1,
                delay: 0.2,
                stagger: 0.1
            });

        }, headerRef);

        return () => ctx.revert();
    }, []);

    useLayoutEffect(() => {
        const handleScroll = () => {
            setHasScroll(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const trajectoryEl = document.getElementById("trajectory");
        if (!trajectoryEl) return;

        const observer = new IntersectionObserver(
            ([entry]) => setInTrajectory(entry.isIntersecting),
            { threshold: 0.1 }
        );
        observer.observe(trajectoryEl);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <header ref={headerRef} className={`flex flex-row items-center justify-between w-full px-5 py-5 z-1000 fixed top-0 left-0 right-0 transition-all duration-300 ${inTrajectory ? "bg-transparent text-white" : hasScroll ? "bg-white/70 backdrop-blur-md shadow-sm text-black" : page === "Resume" ? "bg-transparent text-black" : page === "Contact" ? "bg-transparent text-white" : "bg-transparent text-white"}`}>
                <Link to="/" className="flex items-center h-12">
                    <LogoSVG isFirstLoad={isFirstLoad} />
                </Link>
                
                {/* Menu Desktop */}
                <div className="hidden md:flex">
                    <ul className="flex flex-row items-center gap-10 font-light text-lg">
                        <li className="relative list-none">
                            <Link className={`hover:text-[#71C829] transition-colors duration-300 ${page === "Home" ? "font-medium" : ""}`} to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link>
                        </li>
                        <li className="relative list-none">
                            <Link className="hover:text-[#71C829] transition-colors duration-300" to="/#skills">Skills</Link>
                        </li>
                        <li className="relative list-none">
                            <Link className="hover:text-[#71C829] transition-colors duration-300" to="/#projects">Projects</Link>
                        </li>
                        <li className="relative list-none">
                            <Link className="hover:text-[#71C829] transition-colors duration-300" to="/#trajectory">Trajectory</Link>
                        </li>
                        <li className="relative list-none">
                            <Link className={`hover:text-[#71C829] transition-colors duration-300 ${page === "Resume" ? "font-medium" : ""}`} to="/resume">Resume</Link>
                        </li>
                        <li className="relative list-none">
                            <Link to="/contact" className="contact-border-btn rounded-full shadow-md">
                                <span className="flex items-center gap-2 bg-white text-black pl-6 pr-1.5 py-1.5 rounded-full leading-none">
                                    <span className="translate-y-0.5">Contact</span>
                                    <img src="/arrow-sm.svg" alt="Arrow Right" className="w-9 p-1 rounded-full bg-[#23A147]" />
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Hamburger Button */}
                <button 
                    onClick={handleClick}
                    className="md:hidden flex flex-col gap-1.5 focus:outline-none"
                >
                    <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${clicked ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${clicked ? "opacity-0" : ""}`}></span>
                    <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${clicked ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>

                {/* Menu Mobile */}
                {clicked && (
                    <div className={`absolute top-20 left-0 right-0 md:hidden border-b shadow-lg animateSlideDown transition-all duration-300 ${inTrajectory ? "bg-black/50 backdrop-blur-md border-gray-700 text-white" : hasScroll ? "bg-white/70 backdrop-blur-md border-gray-200 text-black" : page === "Resume" ? "bg-white/70 backdrop-blur-md border-gray-200 text-black" : page === "Contact" ? "bg-black/50 backdrop-blur-md border-gray-700 text-white" : "bg-black/50 backdrop-blur-md border-gray-700 text-white"}`}>
                        <ul className="flex flex-col gap-0 font-light text-lg">
                            <li className="border-b border-gray-100">
                                <Link 
                                    className={`block px-6 py-4 hover:text-[#71C829] transition-colors duration-300 ${page === "Home" ? "font-medium" : ""}`} 
                                    to="/"
                                    onClick={() => { setClicked(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="border-b border-gray-100">
                                <Link 
                                    className="block px-6 py-4 hover:text-[#71C829] transition-colors duration-300"
                                    to="/#skills"
                                    onClick={() => setClicked(false)}
                                >
                                    Skills
                                </Link>
                            </li>
                            <li className="border-b border-gray-100">
                                <Link 
                                    className="block px-6 py-4 hover:text-[#71C829] transition-colors duration-300"
                                    to="/#projects"
                                    onClick={() => setClicked(false)}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li className="border-b border-gray-100">
                                <Link 
                                    className="block px-6 py-4 hover:text-[#71C829] transition-colors duration-300"
                                    to="/#trajectory"
                                    onClick={() => setClicked(false)}
                                >
                                    Trajectory
                                </Link>
                            </li>
                            <li className="border-b border-gray-100">
                                <Link 
                                    className={`block px-6 py-4 hover:text-[#71C829] transition-colors duration-300 ${page === "Resume" ? "font-medium" : ""}`} 
                                    to="/resume"
                                    onClick={() => setClicked(false)}
                                >
                                    Resume
                                </Link>
                            </li>
                            <li className="px-6 py-4">
                                <Link 
                                    to="/contact" 
                                    className="contact-border-btn rounded-full w-fit shadow-md"
                                    onClick={() => setClicked(false)}
                                >
                                    <span className="flex items-center text-center gap-2 bg-white text-black pl-6 pr-1.5 py-1.5 rounded-full leading-none">
                                        <span className="translate-y-0.5">Contact</span>
                                        <img src="/arrow-sm.svg" alt="Arrow Right" className="w-8 p-1 rounded-full bg-[#23A147]" />
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;