function ContactLinksSection() {
    return (
        <div className="contact-section flex flex-col gap-4 sm:gap-5">
            <h2 className="text-2xl sm:text-2xl lg:text-3xl font-semibold">
                CONTACT LINKS
            </h2>
            <div className="flex flex-col gap-1 sm:gap-1.5">
                <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                    <strong>GitHub:</strong> <a href="https://github.com/Acaua-Rangel/" target="_blank" rel="noopener noreferrer" className="text-[#71C829] hover:underline transition-colors duration-300 break-all">https://github.com/Acaua-Rangel/</a>
                </h3>
                <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                    <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/acauã-rangel" target="_blank" rel="noopener noreferrer" className="text-[#71C829] hover:underline transition-colors duration-300">linkedin.com/in/acauã-rangel</a>
                </h3>
                <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                    <strong>Telephone:</strong> <a href="tel:+5571981717609" className="text-[#71C829] hover:underline transition-colors duration-300">+55 (71) 98171-7609</a>
                </h3>
                <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                    <strong>E-mail:</strong> <a href="mailto:acauarangel17@gmail.com" className="text-[#71C829] hover:underline transition-colors duration-300 break-all">acauarangel17@gmail.com</a>
                </h3>
            </div>
        </div>
    );
}

export default ContactLinksSection;
