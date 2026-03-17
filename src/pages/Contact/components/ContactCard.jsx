import { MdEmail, FaWhatsapp, FaDiscord, FaGithub, FaLinkedin } from "../icons";

function ContactCard() {
    return (
        <div className="contact-card relative -top-4 sm:-top-3.75 w-full flex flex-col rounded-2xl sm:rounded-[15px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            {/* Profile Image */}
            <img 
                className="profile-img relative -top-16 sm:-top-18.75 left-8 sm:left-11.25 w-32 h-32 sm:w-36 sm:h-36 lg:w-37.5 lg:h-37.5 rounded-full border-4 border-white shadow-xl" 
                src="/Perfil.jpeg" 
                alt="Profile picture"
            />
            
            {/* Content */}
            <div className="flex flex-col relative -top-10 sm:-top-11.25 px-6 sm:px-8 gap-4 sm:gap-3.75">
                {/* Name and Role */}
                <div className="flex flex-col gap-1 sm:gap-2">
                    <h2 className="contact-name font-bold text-xl sm:text-2xl lg:text-3xl w-full">
                        ACAUÃ RANGEL BRAZIL
                    </h2>
                    <p className="contact-role text-base sm:text-lg text-gray-600 font-medium">
                        AI Agent Engineer & Full-Stack Developer
                    </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-200 my-1"></div>

                {/* Contact Links */}
                <div className="flex flex-col gap-3 sm:gap-4">
                    <a 
                        className="contact-link flex items-center text-base sm:text-lg lg:text-xl font-light text-black/90 hover:text-[#EA4335] transition-all duration-300 gap-2.5 sm:gap-3 group" 
                        href="mailto:acauarangel17@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MdEmail className="text-2xl sm:text-[26px] shrink-0 duration-300"/>
                        <p className="group-hover:translate-x-1 transition-transform duration-300 break-all">
                            acauarangel17@gmail.com
                        </p>
                    </a>

                    <a 
                        className="contact-link flex items-center text-base sm:text-lg lg:text-xl font-light text-black/90 hover:text-[#25D366] transition-all duration-300 gap-2.5 sm:gap-3 group" 
                        href="https://wa.me/5571981717609"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp className="text-2xl sm:text-[26px] shrink-0 duration-300"/>
                        <p className="group-hover:translate-x-1 transition-transform duration-300">
                            +55 (71) 98171-7609
                        </p>
                    </a>

                    <a 
                        className="contact-link flex items-center text-base sm:text-lg lg:text-xl font-light text-black/90 hover:text-[#5865F2] transition-all duration-300 gap-2.5 sm:gap-3 group" 
                        href="https://discord.com/users/kunkchroma"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaDiscord className="text-2xl sm:text-[26px] shrink-0 duration-300"/>
                        <p className="group-hover:translate-x-1 transition-transform duration-300">
                            kunkchroma
                        </p>
                    </a>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-200 my-1"></div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-6 sm:gap-8">
                    <a 
                        className="social-link text-gray-700 hover:text-[#0A66C2] transition-colors duration-300" 
                        href="https://www.linkedin.com/in/Acauã-Rangel/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="text-3xl sm:text-4xl"/>
                    </a>
                    <a 
                        className="social-link text-gray-700 hover:text-black transition-colors duration-300" 
                        href="https://github.com/Acaua-Rangel/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub className="text-3xl sm:text-4xl"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;
