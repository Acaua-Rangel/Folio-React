function EducationSection() {
    return (
        <div className="education-section flex flex-col gap-4 sm:gap-5">
            <h2 className="text-2xl sm:text-2xl lg:text-3xl font-semibold">
                EDUCATION
            </h2>
            <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8">
                {/* Estácio */}
                <div className="education-item flex flex-col gap-1 sm:gap-1.5">
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                        <strong>Estácio</strong>
                    </h3>
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                        Course: <strong>Analysis and Systems Development</strong>
                    </h3>
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                        Duration: <strong>2025 - 2027</strong>
                    </h3>
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                        Locality: <strong>Salvador - BA</strong>
                    </h3>
                </div>

                {/* Ford <Enter> */}
                <div className="education-item flex flex-col gap-1 sm:gap-1.5">
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                        <strong>SENAI Cimatec</strong>
                    </h3>
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                        Course: <strong>Ford &lt;Enter&gt;</strong>
                    </h3>
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                        Duration: <strong>Jan 2025 - May 2025</strong>
                    </h3>
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                        Locality: <strong>Salvador - BA</strong>
                    </h3>
                </div>

                {/* Mechatronics */}
                <div className="education-item flex flex-col gap-1 sm:gap-1.5">
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                        <strong>SENAI Cimatec</strong>
                    </h3>
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                        Course: <strong>Mechatronics Technician</strong>
                    </h3>
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                        Duration: <strong>2022 - 2024</strong>
                    </h3>
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                        Locality: <strong>Salvador - BA</strong>
                    </h3>
                </div>

                {/* High School */}
                <div className="education-item flex flex-col gap-1 sm:gap-1.5">
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                        <strong>SESI Djalma Pessoa School</strong>
                    </h3>
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                        Course: <strong>High School</strong>
                    </h3>
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                        Duration: <strong>2022 - 2024</strong>
                    </h3>
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                        Locality: <strong>Salvador - BA</strong>
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default EducationSection;
