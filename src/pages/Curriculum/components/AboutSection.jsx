function AboutSection() {
    return (
        <div className="flex flex-col gap-4 sm:gap-5">
            <h1 className="cv-name text-4xl sm:text-5xl lg:text-7xl font-extrabold">
                ACAUÃ RANGEL BRAZIL
            </h1>
            <h2 className="cv-role text-xl sm:text-2xl lg:text-3xl font-bold">
                AI AGENT ENGINEER
            </h2>
            <h3 className="cv-description text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
                I started studying programming in 2020, at the age of 12, and since then I have been dedicated to learning and applying development concepts in practice. My journey began with a keen interest in applying Artificial Intelligence (AI) to Discord bots, which led me to explore both front-end and back-end development. My current focus is on creating corporate AI agents, applying reasoning methodologies (CoT, ReAct) to increase the accuracy and usefulness of AI in internal business processes.
            </h3>
        </div>
    );
}

export default AboutSection;
