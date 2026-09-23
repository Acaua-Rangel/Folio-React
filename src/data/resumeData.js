export const resumeData = {
    about: {
        name: "ACAUÃ RANGEL BRAZIL",
        role: "AI AGENT ENGINEER",
        description: "I started studying programming in 2020, at the age of 12, and since then I have been dedicated to learning and applying development concepts in practice. My journey began with a keen interest in applying Artificial Intelligence (AI) to Discord bots, which led me to explore both front-end and back-end development. My current focus is on creating corporate AI agents, applying reasoning methodologies (CoT, ReAct) to increase the precision and utility of AI in companies' internal processes."
    },
    contact: [
        { label: "GitHub", value: "https://github.com/Acaua-Rangel/", link: "https://github.com/Acaua-Rangel/" },
        { label: "LinkedIn", value: "linkedin.com/in/acauã-rangel", link: "https://www.linkedin.com/in/acauã-rangel" },
        { label: "Phone", value: "+55 (71) 98171-7609", link: "tel:+5571981717609" },
        { label: "Email", value: "acauarangel17@gmail.com", link: "mailto:acauarangel17@gmail.com" }
    ],
    education: [
        { institution: "Estácio", course: "Systems Analysis and Development", duration: "2025 - 2027", locality: "Salvador - BA" },
        { institution: "SENAI Cimatec", course: "Ford <Enter> - Frontend", duration: "Jan - May 2025", locality: "Salvador - BA" },
        { institution: "SENAI Cimatec", course: "Ford <Enter> - Backend", duration: "Feb - Jun 2026", locality: "Salvador - BA" },
        { institution: "SENAI Cimatec", course: "Mechatronics Technician", duration: "2022 - 2024", locality: "Salvador - BA" },
        { institution: "SESI Djalma Pessoa School", course: "High School", duration: "2022 - 2024", locality: "Salvador - BA" }
    ],
    experience: [
        {
            title: "Ford Motor Company",
            role: "AI Agent Developer & Full-Stack Developer",
            durationLocality: "2025 - | Camaçari - BA",
            description: "Engineered scalable AI agents integrated with vector databases (PGVector) and Elasticsearch, automating internal workflows and <strong>reducing manual documentation search time by 60%</strong>. I successfully led an architecture migration from LangChain to <strong>LlamaIndex</strong> to optimize the AI system. Additionally, I developed a specialized AI agent using <strong>Databricks</strong> and <strong>LangChain</strong> to assist in training executive teams. This agent utilizes RAG by accessing internal papers, meeting transcripts, Microsoft Teams conversations, and the user's personal OneDrive files for deep contextualization. I also developed a full-stack corporate carpool application focused on <strong>cost reduction for employees</strong>, allowing them to split the trip cost equally while significantly <strong>improving commute comfort</strong> between cities.",
            technologies: "Prisma, NestJS, React, Google Cloud, Tekton, Terraform, LlamaIndex, LangChain/LangGraph, PGVector, Elastic Search, PostgreSQL, Databricks",
            type: "work"
        },
        {
            title: "Kakacomics",
            role: "Full-Stack Developer",
            durationLocality: "2026 | Remote",
            description: "Led critical integrations for a robust Laravel/React platform. Implemented <strong>Google Identity Services (GIS)</strong> for seamless authentication without OAuth redirects, bypassing shared hosting ModSecurity blocks. Developed the full <strong>MercadoPago integration</strong> for payment processing and subscription management, including role-based ad visibility and an admin dashboard. Additionally, I achieved <strong>100% test coverage</strong> for the entire authentication and user management flow.",
            technologies: "Laravel, PHP, React, TypeScript, MercadoPago API, Google Identity Services, PHPUnit",
            type: "work"
        },
        {
            title: "Nouva Company Ltda",
            role: "Software Engineer",
            durationLocality: "2026 | Remote",
            description: "Maintained the <strong>Shopify Returns Hub</strong>, an AI-powered system for managing e-commerce returns. I led a critical security overhaul, implementing strict <strong>Row-Level Security (RLS)</strong> policies in PostgreSQL and server-side role validation across Supabase Edge Functions. I successfully identified and patched severe vulnerabilities, including cross-tenant data leaks and unauthorized AI executions. Additionally, I developed a comprehensive <strong>Role-Based Access Control (RBAC)</strong> system with store-level isolation and engineered secure internal communication protocols.",
            technologies: "React, TypeScript, Supabase, PostgreSQL, Edge Functions, TailwindCSS",
            type: "work"
        },
        {
            title: "Convoke LLC (Folkward)",
            role: "Software Engineer & AI Developer",
            durationLocality: "2026 | Remote",
            description: "Worked on the development of <strong>Vinegar</strong>, a high-performance web backend tool (built with Bun and Hono) powering a browser extension. I was responsible for implementing the <strong>product suggestion system</strong>, which analyzes user shopping intent to fetch real-time alternatives with <strong>better pricing and higher internet reputation</strong>. The architecture strictly followed <strong>Domain-Driven Design (DDD) and SOLID</strong> principles to guarantee extreme scalability.",
            technologies: "Bun, Hono, Next.js, React, Node.js, AI Infrastructure, Web Scraping",
            type: "work"
        },
        {
            title: "Castly",
            role: "Full-Stack Developer & DevOps",
            durationLocality: "2024 - 2025 | Remote",
            description: "Architected and developed the entire project <strong>from absolute scratch</strong>, ranging from configuring <strong>load balancers (Nginx)</strong> to the core backend and frontend code. I built a video streaming application that processes RTMP, allowing users to stream simultaneously without requiring high-end hardware. This solution delivered a <strong>99% reduction in upfront costs for users</strong>, replacing the need to buy a $1500 computer with a simple <strong>$15 monthly subscription</strong>.",
            technologies: "Node.js, MySQL, Nginx RTMP, React.js, Figma",
            type: "work"
        },
        {
            title: "High-Frequency Trading (HFT) Engine",
            link: "https://github.com/Acaua-Rangel/HFT",
            description: "<strong>Developed an open-source</strong> High-Frequency Trading (HFT) engine aimed at democratizing algorithmic trading. I designed low-latency execution pipelines capable of processing thousands of trades per second, achieving a <strong>35% reduction in execution latency</strong>. I optimized data ingestion algorithms, resulting in a <strong>25% increase in profitable trade identification</strong>.",
            technologies: "Bun, TypeScript, React, Vite, SQLite, Python, WebSockets, Domain-Driven Design (DDD), AWS",
            type: "project"
        },
        {
            title: "Monan SDK - Framework",
            link: "https://github.com/monan-ai/monan-sdk",
            description: "<strong>Created an open-source</strong> AI Agent orchestration framework using Bun and ElysiaJS, featuring hybrid inference and native RAG. I implemented PII data masking and Hyper Agent architectures, <strong>reducing development time for complex AI pipelines by 40%</strong>. I built a type-safe tooling system, resulting in a <strong>35% decrease in runtime errors</strong>.",
            technologies: "Bun, ElysiaJS, Zod, SQLite (Vector Search), Ollama, OpenRouter, HuggingFace (Embeddings)",
            type: "project"
        }
    ],
    technologies: [
        { category: "Frontend", items: ["HTML/CSS", "React", "Next.js", "Angular", "Vite", "TailwindCSS", "Figma"] },
        { category: "Backend", items: ["Node.js", "Bun", "TypeScript", "Python", "PHP", "Laravel", "NestJS", "FastAPI", "ElysiaJS", "Discord.py"] },
        { category: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "Prisma", "Supabase", "Firebase", "PGVector", "Elastic Search"] },
        { category: "Cloud & DevOps", items: ["AWS", "Google Cloud", "Oracle Cloud", "Hetzner", "Docker", "Nginx", "Tekton", "Terraform", "Databricks"] },
        { category: "AI Ecosystem", items: ["LangChain", "LangGraph", "LlamaIndex", "Ollama", "HuggingFace", "OpenRouter", "Gemini API", "ElevenLabs API"] },
        { category: "Architecture & Others", items: ["WebSockets", "Domain-Driven Design (DDD)", "Lavalink", "FFmpeg", "Zod"] }
    ]
};

export const resumeDataPt = {
    about: {
        name: "ACAUÃ RANGEL BRAZIL",
        role: "ENGENHEIRO DE AGENTES DE IA",
        description: "Comecei a estudar programação em 2020, aos 12 anos, e desde então tenho me dedicado a aprender e aplicar conceitos de desenvolvimento na prática. Minha jornada começou com um grande interesse em aplicar Inteligência Artificial (IA) em bots do Discord, o que me levou a explorar desenvolvimento tanto front-end quanto back-end. Meu foco atual é na criação de agentes de IA corporativos, aplicando metodologias de raciocínio (CoT, ReAct) para aumentar a precisão e a utilidade da IA nos processos internos das empresas."
    },
    contact: [
        { label: "GitHub", value: "https://github.com/Acaua-Rangel/", link: "https://github.com/Acaua-Rangel/" },
        { label: "LinkedIn", value: "linkedin.com/in/acauã-rangel", link: "https://www.linkedin.com/in/acauã-rangel" },
        { label: "Telefone", value: "+55 (71) 98171-7609", link: "tel:+5571981717609" },
        { label: "E-mail", value: "acauarangel17@gmail.com", link: "mailto:acauarangel17@gmail.com" }
    ],
    education: [
        { institution: "Estácio", course: "Análise e Desenvolvimento de Sistemas", duration: "2025 - 2027", locality: "Salvador - BA" },
        { institution: "SENAI Cimatec", course: "Ford <Enter> - Frontend", duration: "Jan - Mai 2025", locality: "Salvador - BA" },
        { institution: "SENAI Cimatec", course: "Ford <Enter> - Backend", duration: "Fev - Jun 2026", locality: "Salvador - BA" },
        { institution: "SENAI Cimatec", course: "Técnico em Mecatrônica", duration: "2022 - 2024", locality: "Salvador - BA" },
        { institution: "Escola SESI Djalma Pessoa", course: "Ensino Médio", duration: "2022 - 2024", locality: "Salvador - BA" }
    ],
    experience: [
        {
            title: "Ford Motor Company",
            role: "Desenvolvedor de Agentes de IA & Desenvolvedor Full-Stack",
            durationLocality: "2025 - | Camaçari - BA",
            description: "Engenhei agentes de IA escaláveis integrados com bancos de dados vetoriais (PGVector) e Elasticsearch, automatizando fluxos de trabalho internos e <strong>reduzindo o tempo de busca de documentação em 60%</strong>. Conduzi com sucesso uma migração de arquitetura do LangChain para <strong>LlamaIndex</strong> para otimizar o sistema de IA. Adicionalmente, desenvolvi um agente de IA especializado utilizando <strong>Databricks</strong> e <strong>LangChain</strong> para auxiliar no treinamento de times de diretoria. Este agente utiliza RAG, acessando papers internos, transcrições de reuniões, conversas do Microsoft Teams e arquivos pessoais do OneDrive do usuário para contextualização profunda. Também desenvolvi uma aplicação full-stack de caronas corporativas focada na <strong>redução de custos para os trabalhadores</strong>, permitindo que dividam o custo da viagem em partes iguais, além de <strong>aumentar significativamente o conforto</strong> no trajeto entre diferentes cidades.",
            technologies: "Prisma, NestJS, React, Google Cloud, Tekton, Terraform, LlamaIndex, LangChain/LangGraph, PGVector, Elastic Search, PostgreSQL, Databricks",
            type: "work"
        },
        {
            title: "Kakacomics",
            role: "Desenvolvedor Full-Stack",
            durationLocality: "2026 | Remoto",
            description: "Liderei integrações críticas para uma robusta plataforma Laravel/React. Implementei autenticação via <strong>Google Identity Services (GIS)</strong> sem redirecionamentos OAuth, contornando bloqueios do ModSecurity em hospedagem compartilhada. Desenvolvi toda a <strong>integração com o MercadoPago</strong> para processamento de pagamentos e gestão de assinaturas, incluindo controle de anúncios baseado em planos e painel administrativo. Além disso, alcancei <strong>100% de cobertura de testes</strong> para todo o fluxo de autenticação e gestão de usuários.",
            technologies: "Laravel, PHP, React, TypeScript, MercadoPago API, Google Identity Services, PHPUnit",
            type: "work"
        },
        {
            title: "Nouva Company Ltda",
            role: "Engenheiro de Software",
            durationLocality: "2026 | Remoto",
            description: "Atuei na manutenção do <strong>Shopify Returns Hub</strong>, um sistema de gestão de devoluções de e-commerce impulsionado por IA. Liderei uma grande revisão de segurança, implementando políticas rigorosas de <strong>Row-Level Security (RLS)</strong> no PostgreSQL e validação de papéis no back-end (Supabase Edge Functions). Identifiquei e corrigi vulnerabilidades críticas, incluindo vazamentos de dados entre lojas (cross-tenant) e execuções não autorizadas de IA. Além disso, desenvolvi um sistema completo de <strong>Controle de Acesso Baseado em Funções (RBAC)</strong> com isolamento por loja e estruturei protocolos seguros de comunicação interna.",
            technologies: "React, TypeScript, Supabase, PostgreSQL, Edge Functions, TailwindCSS",
            type: "work"
        },
        {
            title: "Convoke LLC (Folkward)",
            role: "Engenheiro de Software & Desenvolvedor de IA",
            durationLocality: "2026 | Remoto",
            description: "Trabalhei no desenvolvimento do <strong>Vinegar</strong>, uma ferramenta web backend de alta performance (construída com Bun e Hono) que atua como o motor de uma extensão de navegador. Fui responsável por implementar o <strong>sistema de sugestões de produtos</strong>, que analisa a intenção de compra do usuário e busca em tempo real por opções com <strong>melhor preço e maior reputação na internet</strong>. A arquitetura seguiu rigorosamente princípios de <strong>Domain-Driven Design (DDD) e SOLID</strong> para garantir escalabilidade extrema.",
            technologies: "Bun, Hono, Next.js, React, Node.js, Infraestrutura de IA, Web Scraping",
            type: "work"
        },
        {
            title: "Castly",
            role: "Desenvolvedor Full-Stack & DevOps",
            durationLocality: "2024 - 2025 | Remoto",
            description: "Arquitetei e desenvolvi todo o projeto <strong>do absoluto zero</strong>, desde a configuração dos <strong>balanceadores de carga (Nginx)</strong> até a implementação do código backend e frontend. Criei um aplicativo de streaming de vídeo que processa RTMP, permitindo que usuários transmitam simultaneamente sem precisar de hardware de ponta. Essa solução entregou uma redução de <strong>99% nos custos iniciais para os usuários</strong>, substituindo a necessidade de comprar um computador de R$ 8000 por uma simples assinatura de <strong>R$ 50 mensais</strong>.",
            technologies: "Node.js, MySQL, Nginx RTMP, React.js, Figma",
            type: "work"
        },
        {
            title: "Motor de High-Frequency Trading (HFT)",
            link: "https://github.com/Acaua-Rangel/HFT",
            description: "<strong>Desenvolvi um sistema</strong> de High-Frequency Trading (HFT) de código aberto visando democratizar a negociação algorítmica. Projetei pipelines de execução de baixa latência capazes de processar milhares de negociações por segundo, alcançando uma <strong>redução de 35% na latência de execução</strong>. Otimizei a ingestão de dados, resultando em um <strong>aumento de 25% na identificação de negociações lucrativas</strong>.",
            technologies: "Bun, TypeScript, React, Vite, SQLite, Python, WebSockets, Domain-Driven Design (DDD), AWS",
            type: "project"
        },
        {
            title: "Monan SDK - Framework",
            link: "https://github.com/monan-ai/monan-sdk",
            description: "<strong>Criei um framework</strong> de orquestração de Agentes de IA de código aberto usando Bun e ElysiaJS, apresentando inferência híbrida e RAG nativo. Implementei mascaramento de dados PII e arquiteturas de Hyper Agent, <strong>reduzindo o tempo de desenvolvimento em 40%</strong>. Desenvolvi um sistema de ferramentas type-safe, resultando em uma <strong>diminuição de 35% nos erros em tempo de execução</strong>.",
            technologies: "Bun, ElysiaJS, Zod, SQLite (Vector Search), Ollama, OpenRouter, HuggingFace (Embeddings)",
            type: "project"
        }
    ],
    technologies: [
        { category: "Frontend", items: ["HTML/CSS", "React", "Next.js", "Angular", "Vite", "TailwindCSS", "Figma"] },
        { category: "Backend", items: ["Node.js", "Bun", "TypeScript", "Python", "PHP", "Laravel", "NestJS", "FastAPI", "ElysiaJS", "Discord.py"] },
        { category: "Bancos de Dados", items: ["PostgreSQL", "MySQL", "SQLite", "Prisma", "Supabase", "Firebase", "PGVector", "Elastic Search"] },
        { category: "Cloud & DevOps", items: ["AWS", "Google Cloud", "Oracle Cloud", "Hetzner", "Docker", "Nginx", "Tekton", "Terraform", "Databricks"] },
        { category: "Ecossistema de IA", items: ["LangChain", "LangGraph", "LlamaIndex", "Ollama", "HuggingFace", "OpenRouter", "Gemini API", "ElevenLabs API"] },
        { category: "Arquitetura & Outros", items: ["WebSockets", "Domain-Driven Design (DDD)", "Lavalink", "FFmpeg", "Zod"] }
    ]
};
