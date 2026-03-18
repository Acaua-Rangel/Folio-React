function ExperienceSection() {
    return (
        <div className="experiences-section flex flex-col gap-6 sm:gap-7 lg:gap-8">
            <h2 className="experience-title text-2xl sm:text-2xl lg:text-3xl font-semibold">
                EXPERIENCE
            </h2>

            {/* Ford Motor Company */}
            <div className="experience-item flex flex-col gap-2">
                <h3 className="text-lg sm:text-xl font-semibold pb-1">
                    <strong>IEL Researcher - Hybrid: Ford Motor Company</strong>
                </h3>
                <h3 className="text-lg sm:text-xl font-semibold pb-1">
                    <strong>AI Agent Developer & Full-Stack Developer</strong>
                </h3>
                <h3 className="text-lg sm:text-xl font-semibold pb-1">
                    2025 - | Salvador - BA
                </h3>
                <h3 className="text-base sm:text-lg lg:text-xl font-normal pl-4 sm:pl-5 pb-1 leading-relaxed">
                    Development of AI agents with LangChain/LangGraph and integrations with 
                    vector databases and internal documentation. In addition to carpooling 
                    system for company workers.
                </h3>
                <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                    Technologies: <strong>Prisma, NestJS, React, Google Cloud, Tekton, Terraform, LangChain/LangGraph, PGVector, Elastic Search, PostgreSQL</strong>
                </h3>
            </div>

            {/* Castly */}
            <div className="experience-item flex flex-col gap-2">
                <h3 className="text-lg sm:text-xl font-semibold pb-1">
                    <strong>Freelancer - Castly</strong>
                </h3>
                <h3 className="text-lg sm:text-xl font-semibold pb-1">
                    <strong>Full-Stack Developer & DevOps</strong>
                </h3>
                <h3 className="text-lg sm:text-xl font-semibold pb-1">
                    2024 - 2025 | Home Office
                </h3>
                <h3 className="text-base sm:text-lg lg:text-xl font-normal pl-4 sm:pl-5 pb-1 leading-relaxed">
                    The application aims to facilitate video streaming to multiple platforms 
                    at the same time, without the need for a high-cost computer for the Streamer.
                </h3>
                <h3 className="text-base sm:text-lg lg:text-xl font-normal pb-1">
                    Technologies: <strong>Node.js, MySQL, Nginx RTMP, React.js, Figma</strong>
                </h3>
            </div>

            {/* Projects Container */}
            <div className="projects-container flex flex-col gap-6 sm:gap-7 lg:gap-8">
                {/* Monan SDK */}
                <div className="project-item flex flex-col gap-2 sm:gap-2.5">
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal">
                        Project: <strong>Monan SDK - Framework (<a href="https://github.com/monan-ai/monan-sdk" target="_blank" rel="noopener noreferrer" className="text-[#71C829] hover:underline transition-colors duration-300">Project link</a>)</strong>
                    </h3>
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal pl-4 sm:pl-5 leading-relaxed">
                        Development of open-source framework in Bun for orchestration of AI Agents. 
                        Offering hybrid inference (Local and API), native RAG with SQLite (Vector Store) 
                        and masking of sensitive data (PII) by default. I implemented Hyper Agents 
                        architectures and type-safe tools system, allowing the creation of complex 
                        and secure workflows.
                    </h3>
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal">
                        Technologies: <strong>Bun, ElysiaJS, Zod, SQLite (Vector Search), Ollama, OpenRouter, HuggingFace (Embeddings)</strong>
                    </h3>
                </div>

                {/* Pitanga */}
                <div className="project-item flex flex-col gap-2 sm:gap-2.5">
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal">
                        Project: <strong>Pitanga - Discord Bot (<a href="https://top.gg/bot/921954829352468572" target="_blank" rel="noopener noreferrer" className="text-[#71C829] hover:underline transition-colors duration-300">Project link</a>)</strong>
                    </h3>
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal pl-4 sm:pl-5 leading-relaxed">
                        This bot has several systems, including economy, TTS, mini games, and music. 
                        Its main system is TTS, I used the ElevenLabs API to clone a model's voice 
                        and create the audios, and the Discord API to play them in the call.
                    </h3>
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal">
                        Technologies: <strong>Python, ElevenLabs API, MySQL, Numpy, Lavalink, Wavelink</strong>
                    </h3>
                </div>

                {/* Phoenix */}
                <div className="project-item flex flex-col gap-2 sm:gap-2.5">
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal">
                        Project: <strong>Phoenix (<a href="https://phoenixligajovem.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-[#71C829] hover:underline transition-colors duration-300">Project link</a>)</strong>
                    </h3>
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal pl-4 sm:pl-5 leading-relaxed">
                        The purpose of the project is to assist teachers with schedules and 
                        location of classes, making this information available in graphs and 
                        providing an AI called Ignis that has access to this information.
                    </h3>
                    <h3 className="text-base sm:text-lg lg:text-xl font-normal">
                        Technologies: <strong>React.js, Gemini API, Node.js, Express</strong>
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default ExperienceSection;
