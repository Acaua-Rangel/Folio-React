import { resumeData } from "../../../data/resumeData";

function ContactLinksSection() {
    return (
        <div className="contact-section flex flex-col gap-4 sm:gap-5">
            <h2 className="text-2xl sm:text-2xl lg:text-3xl font-semibold">
                CONTACT LINKS
            </h2>
            <div className="flex flex-col gap-1 sm:gap-1.5">
                {resumeData.contact.map((item, index) => (
                    <h3 key={index} className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                        <strong>{item.label}:</strong> <a href={item.link} target={item.label === 'GitHub' || item.label === 'LinkedIn' ? "_blank" : undefined} rel={item.label === 'GitHub' || item.label === 'LinkedIn' ? "noopener noreferrer" : undefined} className={`text-[#71C829] hover:underline transition-colors duration-300 ${item.label === 'GitHub' || item.label === 'E-mail' ? 'break-all' : ''}`}>{item.value}</a>
                    </h3>
                ))}
            </div>
        </div>
    );
}

export default ContactLinksSection;
