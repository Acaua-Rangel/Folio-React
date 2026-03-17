import { useState, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
                stroke="black" 
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
    
    const headerRef = useRef(null);

    const handleClick = () => {
        setClicked(!clicked);
    };

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

    return (
        <>
            <header ref={headerRef} className={`flex flex-row items-center justify-between w-full px-5 py-5 z-1000 fixed top-0 left-0 right-0 transition-all duration-300 ${hasScroll ? "header-scrolled" : "header-transparent"}`}>
                <Link to="/" className="flex items-center h-12">
                    <LogoSVG isFirstLoad={isFirstLoad} />
                </Link>
                
                {/* Menu Desktop */}
                <div className="hidden md:flex">
                    <ul className="flex flex-row items-center gap-10 font-light text-lg">
                        <li className="relative list-none">
                            <Link className={page === "Home" ? "font-medium" : ""} to="/">Home</Link>
                        </li>
                        <li className="relative list-none">
                            <Link to="/#about">About</Link>
                        </li>
                        <li className="relative list-none">
                            <Link to="/#projects">Projects</Link>
                        </li>
                        <li className="relative list-none">
                            <Link className={page === "Curriculum" ? "font-medium" : ""} to="/curriculum">Curriculum</Link>
                        </li>
                        <li className="relative list-none">
                            <Link to="/contact" className="flex items-center gap-2 bg-white pl-6 pr-1.5 py-1.5 rounded-full">
                                Contact
                                <img src="/arrow-sm.svg" alt="Arrow Right" className="w-9 p-1 rounded-full bg-[#23A147]" />
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Hamburger Button */}
                <button 
                    onClick={handleClick}
                    className="md:hidden flex flex-col gap-1.5 focus:outline-none"
                >
                    <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${clicked ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${clicked ? "opacity-0" : ""}`}></span>
                    <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${clicked ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>

                {/* Menu Mobile */}
                {clicked && (
                    <div className="absolute top-20 left-0 right-0 md:hidden bg-white border-b border-gray-200 shadow-lg animateSlideDown">
                        <ul className="flex flex-col gap-0 font-light text-lg">
                            <li className="border-b border-gray-100">
                                <Link 
                                    className={`block px-6 py-4 ${page === "Home" ? "font-medium" : ""}`} 
                                    to="/"
                                    onClick={() => setClicked(false)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="border-b border-gray-100">
                                <Link 
                                    className="block px-6 py-4"
                                    to="/#about"
                                    onClick={() => setClicked(false)}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="border-b border-gray-100">
                                <Link 
                                    className="block px-6 py-4"
                                    to="/#projects"
                                    onClick={() => setClicked(false)}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li className="border-b border-gray-100">
                                <Link 
                                    className={`block px-6 py-4 ${page === "Curriculum" ? "font-medium" : ""}`} 
                                    to="/curriculum"
                                    onClick={() => setClicked(false)}
                                >
                                    Curriculum
                                </Link>
                            </li>
                            <li className="px-6 py-4">
                                <Link 
                                    to="/contact" 
                                    className="flex items-center gap-2 bg-white border border-black pl-6 pr-1.5 py-1.5 rounded-full w-fit"
                                    onClick={() => setClicked(false)}
                                >
                                    Contact
                                    <img src="/arrow-sm.svg" alt="Arrow Right" className="w-8 p-1 rounded-full bg-[#23A147]" />
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