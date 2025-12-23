import { useState, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./Header.css";

const Header = ({ page }) => {
    // 1. Convertendo o state { clicked: false } para useState
    const [clicked, setClicked] = useState(false);
    
    // 2. Criando uma referência para o GSAP controlar o elemento
    const headerRef = useRef(null);

    const handleClick = () => {
        setClicked(!clicked);
    };

    // 3. Configurando a animação de Fade In
    useLayoutEffect(() => {
        // Cria um contexto para garantir a limpeza da animação
        let ctx = gsap.context(() => {
            
            // Animação: Opacidade vai de 0 para 1 (Fade In puro)
            gsap.from(headerRef.current, {
                opacity: 0,
                duration: 1.5, // Duração de 1.5 segundos
                ease: "power2.out" // Suavização na entrada
            });

            // Opcional: Se quiser que os itens internos também tenham um leve movimento
            gsap.from("li, img, #mobile", {
                opacity: 0,
                y: -10, // Leve descida
                duration: 1,
                delay: 0.2, // Começa um pouco depois do header aparecer
                stagger: 0.1 // Um item aparece depois do outro
            });

        }, headerRef);

        return () => ctx.revert(); // Limpa a animação ao sair da tela
    }, []);

    return (
        <>
            {/* Adicionamos a ref={headerRef} para o GSAP saber quem animar */}
            <header ref={headerRef} className="flex flex-row items-center justify-between w-full px-5 pt-5 bg-white z-1000">
                <Link to="/">
                    <img className="h-15" src="/Acauã - Icon.svg" alt="Logo" />
                </Link>
                <div>
                    {/* Mantida a lógica original: this.state.clicked vira clicked */}
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