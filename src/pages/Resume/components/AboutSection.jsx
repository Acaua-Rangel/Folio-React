import { resumeData } from "../../../data/resumeData";

function AboutSection() {
    return (
        <div className="flex flex-col gap-4 sm:gap-5">
            <h1 className="cv-name text-4xl sm:text-5xl lg:text-7xl font-extrabold">
                {resumeData.about.name}
            </h1>
            <h2 className="cv-role text-xl sm:text-2xl lg:text-3xl font-bold">
                {resumeData.about.role}
            </h2>
            <h3 className="cv-description text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
                {resumeData.about.description}
            </h3>
        </div>
    );
}

export default AboutSection;
