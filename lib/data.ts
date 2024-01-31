import React from "react";
import { BiTask, BiBriefcase, BiBookContent, BiCodeAlt } from "react-icons/bi";
import proj1Design from "./portfolio-details/portfolio1/proj1-design.png";
import proj3Pg1 from "./portfolio-details/portfolio3/proj3-pg1.png";
import proj5Pg1 from "./portfolio-details/portfolio5/proj5-pg1.png";
import proj6Pg3 from "./portfolio-details/portfolio6/proj6-pg3.png";
import certIcon1 from "./cert-icons/hands-phone.png";
import certIcon2 from "./cert-icons/hands-phone-2.png";
import certIcon3 from "./cert-icons/hands-folder.png"
import certIcon4 from "./cert-icons/Stuck at Home - Working from Home.png";
import certIcon5 from "./cert-icons/Stuck at Home - Monitor.png"
import certIcon6 from "./cert-icons/Hands - Show.png";
import certIcon7 from "./cert-icons/Power Moves - Calendar.png"
import certIcon8 from "./cert-icons/Women Power - Home Office.png";
import certIcon9 from "./cert-icons/Cool Kids - Bust.png";

export const navLinks = [
    {
        name: "Home",
        hash: "#home"
    },
    {
        name: "About",
        hash: "#about"
    },
    {
        name: "Projects",
        hash: "#projects"
    },
    {
        name: "Skills",
        hash: "#skills"
    },
    {
        name: "Competencies",
        hash: "#competencies"
    },
    {
        name: "Contact",
        hash: "#contact"
    },
] as const;

export const projectsData = [
    {
        title: "workout tracker",
        description: "A fitness tracker app inspired by the goal of my friends to be more active. The app uses react, context, and firebase as a Baas/backend service. Users can signup and login via firebase authentication",
        tags: ["react", "firebase", "authentication"],
        imageUrl: proj1Design,
        url: "https://github.com/alex-reason/squadg",
        id: "proj1",
        code: ""
    },
    {
        title: "cozy videos: youtube inspired app",
        description: "This app attempts to recreate certain aspects of Youtube. It uses firebase and youtube api with React. The homepage displays a certain number of videos. This project is based on a NetNinja tutorial. It was one of my first attempts with firebase, and it was challenging but fun.",
        tags: ["react", "firebase", "api",],
        imageUrl: proj3Pg1,
        url: "https://willowy-clafoutis-50448b.netlify.app/",
        id: "proj3",
        code: ""
    },
    {
        title: "alternative portfolio",
        description: "My alternative responsive portfolio website was created with react, Next.js, and vercel. The code is on github, and I regularly update, manage changes, do version control via Git. Routing is done via Next.js 13 App Router. The styling uses SASS/SCSS and animations.",
        tags: ["react", "Next.js", "version control", "SASS/SCSS"],
        imageUrl: proj5Pg1,
        url: "https://portfolio-git-master-alexreason.vercel.app/",
        id: "proj4",
        code: ""
    },
    {
        title: "this portfolio site",
        description: "This responsive and accessible portfolio website was created with react, Next.js 13, typescript, tailwind css, and vercel",
        tags: ["react", "Next.js", "version control", "tailwind css", "typescript"],
        imageUrl: proj6Pg3,
        url: "https://github.com/alex-reason/my-portfolio",
        id: "proj5",
        code: "https://github.com/alex-reason/my-portfolio"
    },
] as const;

export const certData = [
    {
        title: "Front-end Developer Professional Certificate",
        url: "https://www.coursera.org/account/accomplishments/professional-cert/CX4XLA2FQN8R",
        detail: "coursera by Meta",
        id: "cert1",
        skills: ["React", "scss/css", "js", "version control", "ux/ui"],
        icon: certIcon1
    },

    {
        title: "Principles of UX/UI Design",
        url: "https://coursera.org/share/c738eb5af53384d48be56badf890d0e9",
        detail: "coursera by Meta",
        id: "cert2",
        skills: ["Figma", "ux/ui"],
        icon: certIcon2
    },

    {
        title: "Responsive Web Design",
        url: "https://www.freecodecamp.org/certification/mai-reason/responsive-web-design",
        detail: "freecodecamp",
        id: "cert3",
        skills: ["SCSS/CSS", "media queries"],
        icon: certIcon3
    },
    {
        title: "Javascript Algorithms and Data Structures",
        url: "https://www.freecodecamp.org/certification/mai-reason/javascript-algorithms-and-data-structures",
        detail: "freecodecamp",
        id: "cert4",
        skills: ["javascript", "algorithms", "Object Oriented Programming", "Functional Programming"],
        icon: certIcon4
    },
    {
        title: "Advanced CSS and SASS",
        url: "https://www.udemy.com/certificate/UC-d81b2395-2c38-44fe-8c36-80b9d47777cb/",
        detail: "Udemy",
        id: "cert5",
        skills: ["flexbox and grids", "responsive design", "SASS"],
        icon: certIcon5
    },
    {
        title: "Complete jQuery Course",
        url: "https://www.udemy.com/certificate/UC-66914547-14c7-4ed5-a444-2caff107cf51/",
        detail: "Udemy",
        id: "cert6",
        skills: ["dynamic websites", "user events"],
        icon: certIcon6
    },
    {
        title: "Modern React with Redux",
        url: "https://www.udemy.com/certificate/UC-e4cba17d-9e2e-4b03-9a98-765145da4ea1/",
        detail: "Udemy",
        id: "cert7",
        skills: ["redux", "toolchains", "ES6 js"],
        icon: certIcon7
    },
    {
        title: "Web Apps with React and Firebase",
        url: "https://www.udemy.com/certificate/UC-57f2b319-cd41-4289-ba89-81dce39193ff/",
        detail: "Udemy",
        id: "cert8",
        skills: ["backend cloud computing services", "react and firebase",],
        icon: certIcon8
    },
    {
        title: "WordPress",
        url: "https://www.udemy.com/certificate/UC-502c3760-7fb7-4b04-ad50-21c3373e5154/",
        detail: "Udemy",
        id: "cert9",
        skills: ["WordPress"],
        icon: certIcon9
    }

] as const;

export const skillsData = [
    {
        title: "Technology",
        details: ["HTML", "CSS", "javascript", "SASS/SCSS", "React JS", "Next.js", "firebase", "typescript", "VS Code", "Node.js", "Git", "unit-testing", "version control", "Microsoft Office suite & Google suite", "Wordpress"],
    },
    {
        title: "Soft skills",
        details: ["Legal Support", "Administrative support", "Event planning", "Time management", "Document & Data organization", "Client Relations", "Client management systems", "Collaboration", "Research & Writing"],
    },
    {
        title: "Education",
        details: ["Professional Certificate: Meta Front-End Developer", "Masters in Global Politics", "Bachelors in Political Science",],
    },
    {
        title: "Languages",
        details: ["English (fluent/native)", "Tagalog (fluent/native)", "French (intermediate)", "Japanese (intermediate)"],
    },
] as const;

export const experienceData = [
    {
        id: "experience1",
        label: "Front end web developer / designer",
        minorContent: "Freelance",
        date: "December 2023 - present",
        content: [
            "Develops responsive websites and applications",
            "Designs websites that reflect the goals of organizations using wireframes, sitemaps and mockups via Figma",
            "Addresses complex problems regarding accessibility, interactivity, and performance via testing and version controls"
        ],
        icon: React.createElement(BiCodeAlt)
    },
    {
        id: "experience2",
        label: "Paralegal",
        minorContent: "Tancinco Law PC",
        date: "September 2020 - present",
        content: [
            "Uses AWS and other web services to efficiently file applications",
            "Works on 10-20 immigration related cases a week with minimal supervision",
            "Maintains relationships with around 100 clients yearly",
            "Organizes and maintains the electronic database of clients",
        ],
        icon: React.createElement(BiBriefcase)
    },
    {
        id: "experience3",
        label: "Legal Assistant",
        minorContent: "Tancinco Law PC",
        date: "November 2018 - March 2020",
        content: [
            "Prepared immigration related applications with the supervision of 1-2 attorneys",
            "Handled accounting by billing and documenting income / expenses",
            "Stayed in constant communication with around 10 new, potential, and current clients daily",
            "Managed schedules of 5 attorneys"
        ],
        icon: React.createElement(BiTask)
    },
    {
        id: "experience4",
        label: "Coordinator",
        minorContent: "Kwan Academy and Music",
        date: "April 2018 - March 2020",
        content: [
            "Class coordinator and assistant to the music school director",
            "Proposed music classes schedules for around 10 clients a week ",
            "Managed the 3-4 recitals twice a year for about 30 students",
            "Created a system for tracking inquiries and potential clients",
        ],
        icon: React.createElement(BiBookContent)
    },
] as const;