import { resumeData } from "../../../data/resumeData";

function EducationSection() {
    return (
        <div className="education-section flex flex-col gap-4 sm:gap-5">
            <h2 className="text-2xl sm:text-2xl lg:text-3xl font-semibold">
                EDUCATION
            </h2>
            <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8">
                {resumeData.education.map((item, index) => (
                    <div key={index} className="education-item flex flex-col gap-1 sm:gap-1.5">
                        <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                            <strong>{item.institution}</strong>
                        </h3>
                        <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                            Course: <strong>{item.course}</strong>
                        </h3>
                        <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                            Duration: <strong>{item.duration}</strong>
                        </h3>
                        <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                            Locality: <strong>{item.locality}</strong>
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EducationSection;
