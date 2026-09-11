import { resumeData } from "../../../data/resumeData";

function TechnologiesSection() {
    return (
        <div className="tech-section flex flex-col gap-4 sm:gap-5">
            <h2 className="text-2xl sm:text-2xl lg:text-3xl font-semibold">
                TECHNOLOGIES
            </h2>
            <div className="flex flex-col gap-5 sm:gap-6 lg:gap-7">
                {resumeData.technologies.map((categoryGroup, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <h3 className="text-xl sm:text-xl lg:text-2xl font-bold pb-1 text-[#71C829]">
                            {categoryGroup.category}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-1 sm:gap-1.5">
                            {categoryGroup.items.map((tech, i) => (
                                <h3 key={i} className="tech-item text-base sm:text-lg lg:text-xl font-normal pb-1">
                                    {tech}
                                </h3>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TechnologiesSection;
