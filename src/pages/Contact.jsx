import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaDiscord } from "react-icons/fa";
import CopyButton from "../CopyButton";
import Header from "../Header";
import "./Contact.css";

function Contact() {
    return (
        <div>
            <Header page="Contact"/>
            <main className="contactMain">
                <section className="card">
                    <div className="banner"/>
                    <div className="contentContact">
                        <img className="perfil" src="/Perfil.png" alt="Foto de perfil" height={150} width={150}/>
                        <div className="infos">
                            <h2>ACAUÃ RANGEL BRAZIL</h2>
                            <a className="info-item" href="mailto:acauarangel17@gmail.com">
                                <MdEmail fontSize={26}/>
                                <p>acauarangel17@gmail.com</p>
                            </a>
                            <a className="info-item" href="https://wa.me/5571981717609">
                                <FaWhatsapp fontSize={26}/>
                                <p>+55 (71) 98171-7609</p>
                            </a>
                            <div className="info-item">
                                <FaDiscord fontSize={26}/>
                                <p>kunkchroma</p>
                                <CopyButton/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Contact