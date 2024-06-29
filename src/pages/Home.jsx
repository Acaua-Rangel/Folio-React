import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import Header from "../Header"
import "./Home.css"

function Home() {
    return (
        <div>
            <Header page="Home"/>
            <main>
                <section className="about-container">
                    <img className="about-image" src="/Person Icon.svg" alt="Foto de Acauã"/>
                    <div className="about-info">
                        <h1 className="about-name">ACAUÃ RANGEL BRAZIL</h1>
                        <h2 className="about-description">
                            I'm a FullStack Developer who has been studying
                            the subject for over 3 years and has developed
                            projects for the web, mobile and desktop. I've
                            also developed Discord bots with Roblox integration
                            and MySQL databases.
                        </h2>
                        <a href="https://wa.me/5571981717609?text=Estou%20interessado%20em%20seus%20serviços">
                            <button className="about-button">CONTACT US</button>
                        </a>

                        <div className="hiper-links">
                            <a className="hiper-links-item" href="https://www.linkedin.com/in/Acauã-Rangel/">
                                <FaLinkedin fontSize={60}/>
                            </a>
                            <a className="hiper-links-item" href="https://github.com/Acaua-Rangel/">
                                <FaGithub fontSize={60}/>
                            </a>
                            <a className="hiper-links-item" href="/CV.pdf" download="CV - Acauã Rangel Brazil.pdf">
                                <SiGoogledocs fontSize={55}/>
                            </a>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    )
}

export default Home