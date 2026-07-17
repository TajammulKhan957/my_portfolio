import mypic from './assets/images/Tajammulpic.jpeg';

const logotext = "Tajammul";

const meta = {
  title: "Tajammul Khan — Full-Stack Engineer | React | Next.js | .NET | AI",
  description: "Full-Stack Engineer with 3 years delivering enterprise web applications — React, Next.js, TypeScript, FastAPI, ASP.NET Core, Node.js, PostgreSQL, AI/LLM integration. Government platforms serving 10M+ users. Open to Frontend, Full-Stack, and AI Engineer roles.",
};

const introdata = {
  title: "I'm Tajammul Khan",
  animated: [
    "Full-Stack Engineer",
    "Frontend Specialist",
    "React & Next.js Expert",
    "AI Integration Developer",
    "Enterprise App Builder",
  ],
  description: "Full-Stack Engineer with 3 years building enterprise-grade applications end-to-end — from pixel-perfect React interfaces to scalable APIs, databases, and cloud deployments. Delivered government platforms serving 10M+ users and AI-powered analytics for Fortune 500s.",
  your_img_url: mypic,
};

const dataabout = {
  title: "About Me",
  aboutme: "I'm a Full-Stack Engineer at Tibil Solutions, Bengaluru, with 3 years of end-to-end development experience. I specialize in building complete production-ready applications — from React and Next.js frontends to FastAPI and Node.js backends, PostgreSQL and MongoDB databases, and cloud deployments on AWS and Azure. I led frontend development of PM Kisan eMitra (Government of India, 10M+ beneficiaries), built Agentic AI analytics for Aditya Birla Group, and independently architected full-stack AI applications with LLM and RAG integrations. My edge is bridging design precision with backend engineering — delivering scalable, WCAG-accessible, and blazing-fast applications at enterprise scale. B.E. Computer Science (8.19 CGPA), JAIN Institute of Technology. Spot Award recipient at Tibil Solutions.",
};

const worktimeline = [
  {
    jobtitle: "Software Developer — Full-Stack (UI/Frontend Lead)",
    where: "Tibil Solutions",
    location: "Bengaluru, India",
    date: "Dec 2023 – Present",
    type: "Full-time",
    achievements: [
      "Led end-to-end frontend for PM Kisan eMitra (Govt. of India) — React + Next.js + REST APIs serving 10M+ beneficiaries",
      "Built full-stack Agentic AI analytics platform for Aditya Birla Group — React + FastAPI + PostgreSQL + OpenAI",
      "Architected AI Coding Mentor with Next.js Server Components + Prisma + PostgreSQL — 60% faster initial load",
      "Created reusable component library (Tailwind + TypeScript) used across 3 enterprise projects — 40% velocity gain",
      "Received Spot Award for exceptional delivery, architecture decisions, and mentoring junior developers",
    ],
  },
];

const skills = [
  { name: "React.js / Next.js", value: 92 },
  { name: "TypeScript",         value: 88 },
  { name: "Node.js / Express",  value: 75 },
  { name: "FastAPI / Python",   value: 70 },
  { name: "ASP.NET Core / C#",  value: 62 },
  { name: "PostgreSQL / MongoDB", value: 78 },
  { name: "AI / LLM Integration", value: 80 },
  { name: "Docker / CI/CD",     value: 74 },
  { name: "AWS / Azure",        value: 65 },
  { name: "Tailwind CSS",       value: 92 },
];

const techstack = [
  {
    category: "Frontend",
    color: "#7C3AED",
    items: [
      "React.js", "Next.js 14+", "Angular 14+",
      "TypeScript", "JavaScript ES6+", "HTML5 / CSS3",
      "Tailwind CSS", "Material-UI", "Framer Motion",
    ],
  },
  {
    category: "Backend",
    color: "#06B6D4",
    items: [
      "Node.js", "Express.js", "FastAPI",
      "ASP.NET Core", "C# / .NET", "REST APIs",
      "GraphQL", "Microservices", "WebSockets",
    ],
  },
  {
    category: "AI & LLM",
    color: "#8B5CF6",
    items: [
      "OpenAI API", "LangChain", "LangGraph",
      "RAG Pipelines", "Prompt Engineering",
      "Vector Databases", "AI Integration",
    ],
  },
  {
    category: "Databases",
    color: "#06B6D4",
    items: [
      "PostgreSQL", "MongoDB", "SQL Server",
      "MySQL", "Redis", "Firebase",
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "#7C3AED",
    items: [
      "Docker", "CI/CD Pipelines", "AWS",
      "Azure", "GCP", "JWT / OAuth 2.0",
      "Nginx", "System Design",
    ],
  },
  {
    category: "Tools & Practices",
    color: "#F59E0B",
    items: [
      "Git / GitHub", "Agile / Scrum",
      "Redux Toolkit", "Prisma ORM",
      "Performance Optimization", "WCAG / Accessibility",
    ],
  },
  // {
  //   category: "Currently Learning",
  //   color: "#10B981",
  //   items: [
  //     "Three.js / WebGL", "Micro-frontends",
  //     "Kubernetes", "LangGraph Agents",
  //   ],
  //   highlight: true,
  // },
];

const services = [
  {
    title: "Full-Stack Application Development",
    description: "Building complete production-ready applications end-to-end — React/Next.js frontends, Node.js/FastAPI/ASP.NET Core backends, PostgreSQL/MongoDB databases, authentication, and cloud deployments on AWS or Azure.",
  },
  {
    title: "React & Next.js Frontend Engineering",
    description: "Delivering pixel-perfect, WCAG-accessible SPAs and SSR applications with React, Next.js 14, TypeScript, and Tailwind CSS — consistently achieving 90+ Lighthouse performance scores.",
  },
  {
    title: "AI & LLM Integration",
    description: "Building conversational AI interfaces, RAG pipelines, agentic workflows, and analytics dashboards using OpenAI, LangChain, LangGraph, FastAPI, and real-time streaming responses.",
  },
  {
    title: "Backend API Development",
    description: "Designing and building scalable REST and GraphQL APIs using Node.js, Express, FastAPI (Python), and ASP.NET Core (.NET) — with JWT/OAuth authentication and PostgreSQL/MongoDB storage.",
  },
  {
    title: "Performance Engineering",
    description: "Achieving measurable gains through Next.js Server Components, code splitting, lazy loading, caching strategies, and bundle optimization — including 60% improvement in initial load time.",
  },
  {
    title: "Component Architecture & Leadership",
    description: "Building reusable TypeScript component libraries, enforcing design systems, implementing Redux/Context state solutions, and leading frontend teams to ship enterprise-grade software on schedule.",
  },
];

const dataportfolio = [
  {
    id: "pmkisan",
    name: "PM Kisan eMitra",
    tagline: "Government AI Platform · Full-Stack",
    description: "An AI-powered chatbot and beneficiary management platform for the Government of India's PM Kisan initiative — helping millions of farmers access scheme information, eligibility checks, FAQs, and guided application support through a conversational interface.",
    problem: "Millions of farmers lacked easy, guided access to PM Kisan scheme information — leading to under-registration, missed benefits, and dependency on middlemen.",
    contribution: "Led complete frontend engineering using React + Next.js + TypeScript. Integrated REST APIs for real-time beneficiary data, built dynamic registration flows and eligibility modules, and implemented Recharts analytics dashboards tracking nationwide scheme metrics.",
    features: [
      "AI chatbot with natural language farmer query resolution",
      "Real-time eligibility verification and registration modules",
      "Analytics dashboard for nationwide beneficiary metrics",
      "Multilingual and accessibility-first UI (WCAG 2.1 compliant)",
    ],
    challenge: "Delivering a performant, accessible UI on constrained government infrastructure serving 10M+ concurrent users with strict compliance requirements.",
    tech: ["React.js", "Next.js", "TypeScript", "Recharts", "Tailwind CSS", "REST APIs"],
    metrics: ["10M+ Beneficiaries", "Govt. of India", "90+ Lighthouse"],
    github: "https://github.com/TajammulKhan957",
    live: "https://kisanemitra.gov.in/Home/Index",
    featured: true,
    color: "green",
  },
  {
    id: "insights",
    name: "Consolidated Insights",
    tagline: "Agentic AI Analytics · Full-Stack",
    description: "An Agentic AI-powered analytics platform for enterprise users to upload structured data and receive intelligent business insights through natural language. Multi-step AI agents autonomously analyze datasets, generate visualizations, and surface actionable recommendations.",
    problem: "Enterprise teams at Aditya Birla Group couldn't extract actionable insights from complex datasets without expensive BI tools, data scientists, or lengthy ETL processes.",
    contribution: "Designed and built the full frontend and integrated FastAPI + OpenAI backend: natural language query interface, multi-step AI agent response streaming, CSV/Excel data upload pipeline, and Recharts-powered dynamic visualizations — with 80%+ test coverage.",
    features: [
      "Natural language query engine over uploaded business data",
      "Multi-step agentic AI workflow with streamed reasoning",
      "Dynamic chart and report generation via Recharts",
      "Secure enterprise data upload and processing pipeline",
    ],
    challenge: "Streaming multi-step AI agent reasoning and tool-call outputs in real time without blocking the UI — solved via server-sent events and optimistic loading states.",
    tech: ["React.js", "TypeScript", "FastAPI", "OpenAI", "LangChain", "PostgreSQL", "Recharts"],
    metrics: ["Aditya Birla Group", "80% Test Coverage", "Multi-step AI Agents"],
    github: "https://github.com/TajammulKhan957",
    live: null,
    featured: true,
    color: "purple",
  },
  {
    id: "leap",
    name: "Leap Learning Platform",
    tagline: "EdTech Platform · Full-Stack",
    description: "A modern SSR-powered learning management system (LMS) enabling learners to browse courses, track completion progress, take assessments, and earn certificates — with a responsive, intuitive interface built using Next.js 13 Server Components.",
    problem: "Learners needed a fast, organized platform to discover and track educational content without the poor performance and inconsistent UX of legacy LMS tools.",
    contribution: "Built course catalog with SSR filtering, JWT-based authentication flows, progress tracking system, and a Tailwind CSS component library (15+ components) reused across the entire product — plus assessment and certification modules.",
    features: [
      "SSR-powered course catalog with filtering and search",
      "JWT authentication with role-based access (learner / admin)",
      "Learning progress tracking and completion certificates",
      "Reusable Tailwind component library across 15+ screens",
    ],
    challenge: "Achieving sub-second Time-to-Interactive for large course catalogs using Next.js App Router and streaming server components with incremental static regeneration.",
    tech: ["Next.js 13", "TypeScript", "Tailwind CSS", "JWT Auth", "Prisma", "PostgreSQL"],
    metrics: ["15+ Reusable Components", "SSR-Powered", "Sub-second TTI"],
    github: "https://github.com/TajammulKhan957",
    live: null,
    featured: false,
    color: "orange",
  },
  {
    id: "mentor",
    name: "AI Coding Mentor",
    tagline: "AI Developer Tool · Full-Stack",
    description: "An AI-powered mentorship platform helping developers learn programming, solve coding problems, and track growth through real-time conversational AI, personalized recommendations, and analytics dashboards — built with a production-grade Next.js + Prisma + PostgreSQL stack.",
    problem: "Junior developers lacked affordable, always-available mentorship to accelerate their learning, get instant code reviews, and track skill progression.",
    contribution: "Architected the full-stack application: Next.js Server Components (60% faster load), Prisma + PostgreSQL for user and session persistence, real-time AI chat via OpenAI streaming, and a learning analytics dashboard with progress tracking and skill heatmaps.",
    features: [
      "Real-time AI chat with streaming code explanations and reviews",
      "Personalized learning paths and progress tracking dashboard",
      "Skill heatmaps and session analytics via Recharts",
      "WCAG 2.1 compliant, fully responsive across all devices",
    ],
    challenge: "Balancing Next.js Server Component architecture with real-time WebSocket-style AI streaming — solved via React Server Components for initial render and client components for live AI responses.",
    tech: ["Next.js", "TypeScript", "OpenAI", "Prisma", "PostgreSQL", "Tailwind CSS", "Recharts"],
    metrics: ["60% Faster Load", "WCAG 2.1 Compliant", "Full-Stack Architecture"],
    github: "https://github.com/TajammulKhan957",
    live: null,
    featured: false,
    color: "blue",
  },
];

const contactConfig = {
  YOUR_EMAIL: "tajammulkhan957@gmail.com",
  YOUR_FONE: "+91-9916391310",
  YOUR_LOCATION: "Bengaluru, India",
  description: "I'm currently open to Full-Stack, Frontend, and AI Engineer opportunities. Whether you have a project, a role, or just want to connect — I respond within 24 hours.",
  YOUR_SERVICE_ID: "service_5x2qe0b",
  YOUR_TEMPLATE_ID: "template_0yisse6",
  YOUR_PUBLIC_KEY: "CUXqaPOxiVj6B2ehm",
};

const socialprofils = {
  github: "https://github.com/TajammulKhan957",
  linkedin: "https://www.linkedin.com/in/tajammul-khan-a81bb0200/",
};

export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  techstack,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
