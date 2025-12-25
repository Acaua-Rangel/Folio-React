import { useState, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./Header.css";

const Header = ({ page }) => {
    const [clicked, setClicked] = useState(false);
    
    const headerRef = useRef(null);

    const handleClick = () => {
        setClicked(!clicked);
    };

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            
            gsap.from(headerRef.current, {
                opacity: 0,
                duration: 1.5,
                ease: "power2.out"
            });

            gsap.from("li, img, #mobile", {
                opacity: 0,
                y: -10,
                duration: 1,
                delay: 0.2,
                stagger: 0.1
            });

        }, headerRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <header ref={headerRef} className="flex flex-row items-center justify-between w-full px-5 pt-5 bg-white z-1000">
                <Link to="/">
                    <img className="h-15" src="/Acauã - Icon.svg" alt="Logo" />
                </Link>
                <div>
                    <ul id="navbar" className={clicked ? "active" : ""}>
                        <li className="relative px-7.5 list-none">
                            <Link className={page === "Home" ? "active" : ""} to="/">Home</Link>
                        </li>
                        <li className="relative px-7.5 list-none">
                            <Link className={page === "Curriculum" ? "active" : ""} to="/curriculum">Curriculum</Link>
                        </li>
                        <li className="relative px-7.5 list-none">
                            <Link className={page === "Contact" ? "active" : ""} to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div id="mobile" onClick={handleClick}>
                    <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </header>
        </>
    );
};

export default Header;