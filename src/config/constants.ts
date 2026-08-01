export const CONSTANTS = {
  logo: "/logo.png",
  bkg: "./svg/bk/bkg.svg",
  name: "wdev-studio",
  role: "",
  email: "wrm.net@gmail.com",
  phone: "(21) 98778-3808",
  location: "Rio de Janeiro, RJ",
  portfolio: "wdev-studio.com",
  experience: "15 anos",
  social: {
    github: "https://github.com/wellingtondev",
    linkedin: "https://www.linkedin.com/in/wellingtonrm",
    whatsapp: "https://wa.me/5521987783808",
  },
  nav: [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Contato", href: "#contato" },
  ],
  skills: {
    frontend: "JavaScript, TypeScript, React, Next.js, Electron",
    mobile: "React Native, Flutter, Kotlin, Java",
    backend: "Node.js, NestJS, Python (FastAPI), C#, PHP, Laravel, CodeIgniter, Prisma",
    cloud: "AWS (EC2, RDS, S3, Lambda), GCP, Firebase, Docker, Kubernetes",
    database: "PostgreSQL, MySQL, MongoDB, ElasticSearch, Prisma",
    messaging: "Kafka, RabbitMQ, Redis Streams, WebSocket, gRPC",
  },
  projects: [
    {
      title: "Plataforma de Gestão Financeira para Fintech",
      description:
        "Sistema completo com dashboards analíticos em tempo real, automação de cobrança e conciliação financeira. Integrado a 5 gateways de pagamento e APIs bancárias. Processa aproximadamente R$ 2 milhões em transações mensais.",
      tech: "Next.js, Node.js, NestJS, PostgreSQL, Redis, AWS",
    },
    {
      title: "Assistente Jurídico com Inteligência Generativa",
      description:
        "Chatbot treinado para atendimento jurídico, utilizando GPT-4, RAG (Retrieval-Augmented Generation) e banco de dados vetorial (Pinecone). Reduziu em 70% o tempo de resposta a consultas legais, atendendo mais de 300 interações por dia.",
      tech: "Python (FastAPI), LangChain, Pinecone, Docker, GCP",
    },
    {
      title: "Dashboard Logístico com Rastreamento em Tempo Real",
      description:
        "Painel administrativo integrado a APIs de transportadoras, com gestão de etiquetas, rastreio e expedição em massa. Suportou mais de 2 mil usuários ativos com atualizações em tempo real via SSE e WebSocket.",
      tech: "React, Tailwind CSS, Node.js, Express, MongoDB, ElasticSearch, RabbitMQ",
    },
  ],
  experiences: [
    {
      role: "Desenvolvedor Full Stack Freelancer",
      period: "2021 – 2024",
      subtitle: "Atendimento a startups e empresas consolidadas",
      items: [
        "Desenvolvi plataforma de gestão de clientes para fintech, com integração a três gateways de pagamento (Stripe, PagSeguro, Mercado Pago) e automação de cobrança recorrente, processando mais de 10 mil transações mensais.",
        "Construí aplicativo mobile multiplataforma (Flutter) para startup do setor esportivo, com funcionalidades em tempo real via WebSocket e gamificação, alcançando mais de 50 mil downloads nos primeiros seis meses.",
        "Projetei e implementei APIs escaláveis para sistema logístico, atendendo picos de 5 mil requisições simultâneas, com redução de 35% no tempo médio de resposta.",
        "Implementei pipelines de CI/CD com testes automatizados (unitários, integração e end-to-end), garantindo entregas contínuas e redução de 40% no tempo de deploy.",
      ],
    },
    {
      role: "Desenvolvedor Web",
      period: "Riomarca – 2021 (3 meses)",
      subtitle: "",
      items: [
        "Desenvolvi sistemas web completos utilizando Laravel e React, com APIs RESTful e integrações robustas para gestão interna e atendimento ao cliente.",
        "Otimizei consultas SQL e refatorei endpoints críticos, reduzindo o tempo de resposta da aplicação em 40% e aumentando a capacidade de usuários simultâneos de 400 para 1.200.",
        "Atuei em estreita colaboração com equipes de design e produto, garantindo alinhamento entre soluções técnicas e expectativas do negócio.",
      ],
    },
  ],
  education: {
    degree: "Bacharelado em Ciência da Computação",
    university: "Universidade Estácio de Sá – Rio de Janeiro, RJ",
    certifications: [
      "AWS Certified Cloud Practitioner (2023)",
      "MongoDB Certified Developer (2021)",
    ],
  },
}