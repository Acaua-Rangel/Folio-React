import { resumeData } from "../../../data/resumeData";

function ExperienceSection() {
    return (
        <div className="experiences-section flex flex-col gap-6 sm:gap-7 lg:gap-8">
            <h2 className="experience-title text-2xl sm:text-2xl lg:text-3xl font-semibold">
                EXPERIENCE
            </h2>

            {resumeData.experience.filter(exp => exp.type === 'work').map((exp, index) => (
                <div key={`work-${index}`} className="experience-item flex flex-col gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold pb-1">
                        <strong>{exp.title} - {exp.role}</strong>
                    </h3>
                    <h3 className="text-lg sm:text-xl font-semibold pb-1">
                        {exp.durationLocality}
                    </h3>
                    <h3 
                        className="text-base sm:text-lg lg:text-xl font-normal pl-4 sm:pl-5 pb-1 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: exp.description }}
                    />
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                        Technologies: <strong>{exp.technologies}</strong>
                    </h3>
                </div>
            ))}

            <div className="projects-container flex flex-col gap-6 sm:gap-7 lg:gap-8 mt-2">
                {resumeData.experience.filter(exp => exp.type === 'project').map((proj, index) => (
                    <div key={`proj-${index}`} className="project-item flex flex-col gap-2 sm:gap-2.5">
                        <h3 className="text-base sm:text-lg lg:text-xl font-normal">
                            <strong>{proj.title} (<a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-[#71C829] hover:underline transition-colors duration-300">Project link</a>)</strong>
                        </h3>
                        <h3 
                            className="text-base sm:text-lg lg:text-xl font-normal pl-4 sm:pl-5 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: proj.description }}
                        />
                        <h3 className="text-base sm:text-lg lg:text-xl font-normal">
                            Technologies: <strong>{proj.technologies}</strong>
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExperienceSection;
