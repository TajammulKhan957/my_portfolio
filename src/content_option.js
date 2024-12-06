import profilePic from './assets/images/mypic.jpg';
import calculator from './assets/images/calculator.jpg'
import Library from './assets/images/LibraryManagment.jpg'
import todo from './assets/images/todoapp.jpg'
import yamltodocs from './assets/images/yamltodocs.jpg'
import mypic2 from './assets/images/mypic2.jpeg'


const logotext = "Tajammul";
const meta = {
    title: "Tajammul Khan",
    description: "I’m Tajammul Khan UI Associate _ Full stack developer,currently working in bangalore",
};

const introdata = {
    title: "I’m Tajammul Khan",
    animated: {
        first: "I am Developer",
        second: "I code cool websites",
        third: "I develop applications",
    },
    description: "Myself, a developer who brings ideas to life through code. From stunning UI designs to robust backend systems, I'm committed to creating exceptional digital products. Let's build something amazing together!",
    your_img_url: mypic2,
};

const dataabout = {
    title: "About my self",
    aboutme: "Dedicated UI Developer with a strong foundation in Computer Science, holding a BE-CSE degree with an 8.6 CGPA. Currently contributing to innovative projects at Tibil Solutions.",
};
const worktimeline = [{
        jobtitle: "UI Developer",
        where: "Tibil Solutions, Bangalore",
        date: "2023 - present",
    }
];

const skills = [{
        name: "HTML",
        value: 100,
    },
    {
        name: "CSS",
        value: 100,
    },
    {
        name: "Javascript",
        value: 90,
    },
    {
        name:"TypeScript",
        value:80,
    },
    {
        name: "ReactJs",
        value: 80,
    },
    {
        name: "Angular",
        value: 85,
    },
    {
        name:"NodeJs",
        value:50,
    }
];

const services = [ {
    title: "Frontend Development",
    description: "Strong knowledge in HTML5, CSS (Grid, Flexbox, Responsive Design), JavaScript, and modern frameworks like React.js. Expertise in creating single-page and multi-page applications with dynamic and interactive user interfaces.",
},
{
    title: "Backend Development",
    description: "Good understanding of database concepts, including DBMS and RDBMS. Hands-on experience with SQL, creating views, stored procedures, and handling joins. Familiarity with building and managing backend functionality.",
},
{
    title: "Problem Solving and Coding",
    description: "Recognized for participation in coding contests and ideathons. Knowledge of competitive programming and problem-solving through languages like Java and Python.",
},
{
    title: "Certifications and Training",
    description: "Certified in programming through NPTEL courses in Java and C, with additional training from TCS iON Career Edge and Tequad Labs internship.",
},
];

const dataportfolio = [{
        img: calculator,
        description: "A feature-rich scientific calculator built with ReactJS, leveraging the power of MathJS for complex calculations. ",
        link: "https://github.com/TajammulKhan957/Scientific-Calculator.git ",
    },
    {
        img: Library,
        description: "A robust Library Management System built with ReactJS for a seamless user interface and NodeJS for efficient backend operations.",
        link: "https://github.com/TajammulKhan957/Library_Managment_System.git",
    },
    {
        img: todo,
        description: "A minimalist To-Do app crafted with Flutter, offering a seamless task management experience.",
        link: "https://github.com/TajammulKhan957/flutter_todo_app.git",
    },
    {
        img: yamltodocs,
        description: "A user-friendly web application that simplifies the process of converting YAML files to DOCX or PDF formats.",
        link: "https://github.com/TajammulKhan957/YAML-to-DOCX-Converter.git",
    },
];

const contactConfig = {
    YOUR_EMAIL: "tajammulkhan957@gmail.com",
    YOUR_FONE: "9916391310",
    description: "",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_5x2qe0b",
    YOUR_TEMPLATE_ID: "template_0yisse6",
    YOUR_PUBLIC_KEY: "CUXqaPOxiVj6B2ehm",      
};

const socialprofils = {
    github: "https://github.com/TajammulKhan957",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/tajammul-khan-a81bb0200/",
    twitter: "https://twitter.com",
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