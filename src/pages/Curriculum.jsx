import Header from "../components/Header";
import "./Curriculum.css"

function Curriculum() {
    return (
        <div>
            <Header page="Curriculum"/>
            <main className="corpo">
            <section className="left">
                <div className="about">
                    <h1 className="name">ACAUÃ RANGEL BRAZIL</h1>
                    <h2 className="role">AI AGENT ENGINEER</h2>
                    <h3 className="description">
                        I started studying programming in 2020, at the age of 12, and since then I have been dedicated to learning and applying development concepts in practice. My journey began with a keen interest in applying Artificial Intelligence (AI) to Discord bots, which led me to explore both front-end and back-end development. My current focus is on creating corporate AI agents, applying reasoning methodologies (CoT, ReAct) to increase the accuracy and usefulness of AI in internal business processes.
                    </h3>
                </div>

                <div className="experiences">
                    <h2 className="title">EXPERIENCE</h2>

                    <div className="last-exp">
                        <h3>
                            <strong>IEL Researcher - Hybrid: Ford Motor Company</strong>
                        </h3>
                        <h3>
                            <strong>AI Agent Developer & Full-Stack Developer</strong>
                        </h3>

                        <h3>
                            2024-2025 | Salvador - BA
                        </h3>

                        <h3 className="project-content">
                            Development of AI agents with LangChain/LangGraph and integrations with 
                            vector databases and internal documentation. In addition to carpooling 
                            system for company workers.
                        </h3>

                        <h3>Technologies: <strong>Prisma, NestJS, React, Google Cloud, Tekton, Terraform, LangChain/LangGraph, PGVector, Elastic Search, PostgreSQL</strong></h3>
                    </div>

                    <div className="last-exp">
                        <h3>
                            <strong>Freelancer - Castly</strong>
                        </h3>
                        <h3>
                            <strong>Full-Stack Developer & DevOps</strong>
                        </h3>

                        <h3>
                            2023-2024 | Home Office
                        </h3>

                        <h3 className="project-content">
                            The application aims to facilitate video streaming to multiple platforms 
                            at the same time, without the need for a high-cost computer for the Streamer.
                        </h3>

                        <h3>Technologies: <strong>Node.js, MySQL, Nginx RTMP, React.js, Figma</strong></h3>
                    </div>

                    <div className="project">
                        <h3>Project: <strong>Monan SDK - Framework (<a href="https://github.com/monan-ai/monan-sdk" target="_blank" rel="noopener noreferrer">Project link</a>)</strong></h3>

                        <h3 className="project-content">
                            Development of open-source framework in Bun for orchestration of AI Agents. 
                            Offering hybrid inference (Local and API), native RAG with SQLite (Vector Store) 
                            and masking of sensitive data (PII) by default. I implemented Hyper Agents 
                            architectures and type-safe tools system, allowing the creation of complex 
                            and secure workflows.
                        </h3>

                        <h3>Technologies: <strong>Bun, ElysiaJS, Zod, SQLite (Vector Search), Ollama, OpenRouter, HuggingFace (Embeddings)</strong></h3>
                    </div>

                    <div className="project">
                        <h3>Project: <strong>Pitanga - Discord Bot (<a href="https://top.gg/bot/921954829352468572" target="_blank" rel="noopener noreferrer">Project link</a>)</strong></h3>

                        <h3 className="project-content">
                            This bot has several systems, including economy, TTS, mini games, and music. 
                            Its main system is TTS, I used the ElevenLabs API to clone a model's voice 
                            and create the audios, and the Discord API to play them in the call.
                        </h3>

                        <h3>Technologies: <strong>Python, ElevenLabs API, MySQL, Numpy, Lavalink, Wavelink</strong></h3>
                    </div>

                    <div className="project">
                        <h3>Project: <strong>Phoenix (<a href="https://phoenixligajovem.netlify.app/" target="_blank" rel="noopener noreferrer">Project link</a>)</strong></h3>

                        <h3 className="project-content">
                            The purpose of the project is to assist teachers with schedules and 
                            location of classes, making this information available in graphs and 
                            providing an AI called Ignis that has access to this information.
                        </h3>

                        <h3>Technologies: <strong>React.js, Gemini API, Node.js, Express</strong></h3>
                    </div>
                </div>
            </section>

            <section className="rigth">
                <div className="rigth-item">
                    <h2 className="title">CONTACT LINKS</h2>

                    <div className="content">
                        <h3><strong>GitHub:</strong> <a href="https://github.com/Acaua-Rangel/" target="_blank" rel="noopener noreferrer">https://github.com/Acaua-Rangel/</a></h3>
                        <h3><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/acauã-rangel" target="_blank" rel="noopener noreferrer">linkedin.com/in/acauã-rangel</a></h3>
                        <h3><strong>Telephone:</strong> <a href="tel:+5571981717609">+55 (71) 98171-7609</a></h3>
                        <h3><strong>E-mail:</strong> <a href="mailto:acauarangel17@gmail.com">acauarangel17@gmail.com</a></h3>
                    </div>
                </div>

                <div className="rigth-item">
                    <h2 className="title">TECHNOLOGIES</h2>

                    <div className="content">
                        <h3>HTML/CSS</h3>
                        <h3>React</h3>
                        <h3>Angular</h3>
                        <h3>Prisma</h3>
                        <h3>NestJS</h3>
                        <h3>Node.js</h3>
                        <h3>Discord.py</h3>
                        <h3>Lavalink</h3>
                        <h3>FFmpeg</h3>
                        <h3>Docker</h3>
                        <h3>Nginx</h3>
                        <h3>MySQL</h3>
                        <h3>Firebase</h3>
                        <h3>AWS</h3>
                        <h3>Oracle Cloud</h3>
                        <h3>Google Cloud</h3>
                        <h3>Hetzner</h3>
                        <h3>LangChain</h3>
                        <h3>LangGraph</h3>
                        <h3>FastAPI</h3>
                        <h3>Ollama</h3>
                        <h3>PostgreSQL</h3>
                        <h3>PGVector</h3>
                        <h3>Elastic Search</h3>
                        <h3>HuggingFace</h3>
                        <h3>Tekton</h3>
                        <h3>Terraform</h3>
                    </div>
                </div>

                <div className="rigth-item">
                    <h2 className="title">EDUCATION</h2>

                    <div className="formation">
                        <div className="content">
                            <h3><strong>Estácio</strong></h3>
                            <h3>Course: <strong>Analysis and Systems Development</strong></h3>
                            <h3>Duration: <strong>2025 - 2027</strong></h3>
                            <h3>Locality: <strong>Salvador - BA</strong></h3>
                        </div>
                        <div className="content">
                            <h3><strong>SENAI Cimatec</strong></h3>
                            <h3>Course: <strong>Ford &lt;Enter&gt;</strong></h3>
                            <h3>Duration: <strong>Jan 2025 - May 2025</strong></h3>
                            <h3>Locality: <strong>Salvador - BA</strong></h3>
                        </div>
                        <div className="content">
                            <h3><strong>SENAI Cimatec</strong></h3>
                            <h3>Course: <strong>Mechatronics Technician</strong></h3>
                            <h3>Duration: <strong>2022 - 2024</strong></h3>
                            <h3>Locality: <strong>Salvador - BA</strong></h3>
                        </div>
                        <div className="content">
                            <h3><strong>SESI Djalma Pessoa School</strong></h3>
                            <h3>Course: <strong>High School</strong></h3>
                            <h3>Duration: <strong>2022 - 2024</strong></h3>
                            <h3>Locality: <strong>Salvador - BA</strong></h3>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </div>
    )
}

export default Curriculum