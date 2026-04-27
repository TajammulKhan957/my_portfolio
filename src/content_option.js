import profilePic from './assets/images/mypic.jpg';
import calculator from './assets/images/calculator.jpg'
import Library from './assets/images/LibraryManagment.jpg'
import todo from './assets/images/todoapp.jpg'
import yamltodocs from './assets/images/yamltodocs.jpg'
import mypic from './assets/images/1752514915082.jpg'


const logotext = "Tajammul";
const meta = {
    title: "Tajammul Khan — Frontend Developer",
    description: "Frontend Developer with 2+ years building high-scale web applications using React.js, Angular, and Next.js for government and enterprise clients.",
};

const introdata = {
    title: "I’m Tajammul Khan",
    animated: {
        first: "Frontend Developer",
        second: "React & Next.js Expert",
        third: "UI/UX Implementor",
    },
    description: "Frontend Developer with 2+ years of experience crafting high-performance, scalable web applications. I’ve built platforms serving 10M+ users, led frontend teams, and delivered 90+ Lighthouse scores. Currently open to new opportunities.",
    your_img_url: mypic,
};

const dataabout = {
    title: "About Me",
    aboutme: "I’m a Software Developer (UI/Frontend) at Tibil Solutions, Bengaluru, specializing in React.js, Angular 14+, and Next.js 13. I’ve led the frontend development of PM Kisan Yojana — a Government of India portal serving 10+ million beneficiaries — and built AI-driven platforms like Consolidated Insights and AI Coding Mentor. I hold a B.E. in Computer Science (8.19 CGPA) from JAIN Institute of Technology and was honored with the Spot Award at Tibil Solutions. I thrive on performance optimization, clean component architecture, and mentoring teams to ship quality code.",
};

const worktimeline = [
    {
        jobtitle: "Software Developer (UI/Frontend)",
        where: "Tibil Solutions, Bengaluru",
        date: "Dec 2023 – Present",
    },
];

const skills = [
    { name: "React.js", value: 90 },
    { name: "Next.js", value: 85 },
    { name: "Angular 14+", value: 85 },
    { name: "TypeScript", value: 82 },
    { name: "JavaScript ES6+", value: 92 },
    { name: "Tailwind CSS", value: 88 },
    { name: "HTML5 / CSS3", value: 95 },
    { name: "Redux Toolkit", value: 80 },
    { name: "Node.js / Express", value: 60 },
    { name: "Git / Docker / CI/CD", value: 75 },
];

const services = [
    {
        title: "React & Next.js Development",
        description: "Building production-grade SPAs and SSR applications using React.js, Next.js 13, TypeScript, and Tailwind CSS. Experienced with server components, route-based code splitting, and achieving 90+ Lighthouse performance scores.",
    },
    {
        title: "Angular Enterprise Apps",
        description: "Developing scalable enterprise UIs with Angular 14+, RxJS, and TypeScript. Skilled in module architecture, lazy loading, form-driven development, and integrating RESTful APIs for complex business workflows.",
    },
    {
        title: "UI/UX Implementation",
        description: "Translating designs into pixel-perfect, accessible interfaces using Tailwind CSS, Material-UI, and Styled Components. Strong focus on WCAG compliance, responsive design (CSS Grid/Flexbox), and cross-device compatibility.",
    },
    {
        title: "Performance Optimization",
        description: "Achieving measurable gains through code splitting, lazy loading, SSR, and bundle analysis — including a 35% reduction in page load times and 60% improvement in initial load performance on AI Coding Mentor.",
    },
    {
        title: "State Management & Architecture",
        description: "Implementing scalable state solutions with Redux Toolkit and Context API. Building reusable component libraries that improved team development efficiency by 40% and ensured UI consistency across projects.",
    },
    {
        title: "Data Visualization",
        description: "Creating interactive dashboards and analytics interfaces using Recharts, Chart.js, and ApexCharts. Delivered real-time insights UIs for AI analytics platforms handling multi-step agent-based query flows.",
    },
];

const dataportfolio = [
    {
        img: calculator,
        name: "PM Kisan Beneficiary Portal",
        description: "Government of India portal serving 10M+ beneficiaries — chatbot interface, real-time dashboards, and dynamic registration modules.",
        tech: ["React.js", "Next.js", "TypeScript", "Recharts", "Tailwind CSS"],
        link: "https://github.com/TajammulKhan957",
        featured: true,
    },
    {
        img: yamltodocs,
        name: "Consolidated Insights",
        description: "AI analytics platform for submitting queries and visualizing multi-step agent-based AI responses. Led team to 80% code coverage.",
        tech: ["React.js", "TypeScript", "FastAPI", "OpenAI", "CSS3"],
        link: "https://github.com/TajammulKhan957",
        featured: true,
    },
    {
        img: Library,
        name: "Leap — Learning Platform",
        description: "SSR-powered course management, progress tracking, and assessments with a reusable Tailwind CSS component library.",
        tech: ["Next.js 13", "TypeScript", "Tailwind CSS"],
        link: "https://github.com/TajammulKhan957",
        featured: false,
    },
    {
        img: todo,
        name: "AI Coding Mentor",
        description: "AI-powered mentorship platform — server components improved initial load by 60%. WCAG-compliant, fully cross-device compatible.",
        tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
        link: "https://github.com/TajammulKhan957",
        featured: false,
    },
];

const contactConfig = {
    YOUR_EMAIL: "tajammulkhan957@gmail.com",
    YOUR_FONE: "+91-9916391310",
    description: "I'm currently open to new frontend opportunities. Whether you have a project, a role, or just want to connect — feel free to reach out. I'll get back to you promptly.",
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
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};  