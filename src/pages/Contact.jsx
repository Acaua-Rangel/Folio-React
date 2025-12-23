import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaDiscord } from "react-icons/fa";
import Header from "../components/Header";
import "./Contact.css";

function Contact() {
    return (
        <div>
            <Header page="Contact"/>
            <main className="pt-15">
                <section className="flex flex-col items-center justify-center">
                    <div className="banner"/>
                    <div className="contentContact">
                        <img className="relative -top-18.75 left-11.25 w-37.5 h-37.5 rounded-full" src="/Perfil.png" alt="Profile picture"/>
                        <div className="flex relative flex-col -top-11.25 left-10 gap-3.75">
                            <h2 className="font-bold text-2xl">ACAUÃ RANGEL BRAZIL</h2>
                            <a 
                                className="flex items-center text-xl font-light text-black/90 hover:text-[#71C829] duration-300 gap-2.5" 
                                href="mailto:acauarangel17@gmail.com"
                            >
                                <MdEmail fontSize={26}/>
                                <p>acauarangel17@gmail.com</p>
                            </a>
                            <a 
                                className="flex items-center text-xl font-light text-black/90 hover:text-[#71C829] duration-300 gap-2.5" 
                                href="https://wa.me/5571981717609"
                            >
                                <FaWhatsapp fontSize={26}/>
                                <p>+55 (71) 98171-7609</p>
                            </a>
                            <a 
                                className="flex items-center text-xl font-light text-black/90 hover:text-[#71C829] duration-300 gap-2.5" 
                                href="https://discord.com/users/kunkchroma"
                            >
                                <FaDiscord fontSize={26}/>
                                <p>kunkchroma</p>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Contact