import proj1Pg3 from './portfolio-details/portfolio1/proj1-pg3.png';
import proj2Pg5 from './portfolio-details/portfolio2/proj2-pg5.png';
import proj3Pg1 from './portfolio-details/portfolio3/proj3-pg1.png';
import proj5Pg1 from './portfolio-details/portfolio5/proj5-pg1.png';
import proj6Pg1 from './portfolio-details/portfolio6/proj6-pg1.png';

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
        name: "Experience",
        hash: "#experience"
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
        imageUrl: proj1Pg3,
        url: "https://fitness-tracker-ffa4d.web.app/",
        id: "proj1",
    },
    {
        title: "Sticky notes: project tracker",
        description: "This project is inspired by the software I use as a paralegal. It uses React, firebase, and SASS. I think the UI/UX of the software we use at work is very lacking. I am hoping to improve it enough for my colleagues to use as well. The app uses firebase as a backend service.",
        tags: ["react", "firebase", "authentication", "project management", "SASS/SCSS"],
        imageUrl: proj2Pg5,
        url: "https://github.com/alex-reason/sticky-notes",
        id: "proj2"
    },
    {
        title: "cozy videos: youtube inspired app",
        description: "This app attempts to recreate certain aspects of Youtube. It uses firebase and youtube api with React. The homepage displays a certain number of videos. This project is based on a NetNinja tutorial. It was one of my first attempts with firebase, and it was challenging but fun.",
        tags: ["react", "firebase", "api",],
        imageUrl: proj3Pg1,
        url: "https://willowy-clafoutis-50448b.netlify.app/",
        id: "proj3"
    },
    {
        title: "alternative portfolio",
        description: "My alternative responsive portfolio website was created with react, Next.js, and vercel. The code is on github, and I regularly update, manage changes, do version control via Git. Routing is done via Next.js 13 App Router. The styling uses SASS/SCSS and animations.",
        tags: ["react", "Next.js", "version control", "SASS/SCSS"],
        imageUrl: proj5Pg1,
        url: "https://willowy-clafoutis-50448b.netlify.app/",
        id: "proj4"
    },
    {
        title: "this portfolio site",
        description: "This responsive portfolio website was created with react, Next.js 13, typescript, tailwind css, and vercel.",
        tags: ["react", "Next.js", "version control", "tailwind css", "typescript"],
        imageUrl: proj6Pg1,
        url: "",
        id: "proj5"
    },
] as const;


export const certData = [
    {
        title: 'Meta: Front-end Developer Professional Certificate',
        url: 'https://www.coursera.org/account/accomplishments/professional-cert/CX4XLA2FQN8R',
        detail: 'coursera',
        id: 'cert1',
        skills: ['React', 'scss/css', 'js', 'version control', 'ux/ui']
    },

    {
        title: 'Principles of UX/UI Design',
        url: 'https://coursera.org/share/c738eb5af53384d48be56badf890d0e9',
        detail: 'coursera by Meta',
        id: 'cert2',
        skills: ['Figma', 'ux/ui']
    },

    {
        title: 'Responsive Web Design',
        url: 'https://www.freecodecamp.org/certification/mai-reason/responsive-web-design',
        detail: 'freecodecamp',
        id: 'cert3',
        skills: ['SCSS/CSS', 'media queries']
    },
    {
        title: 'Javascript Algorithms and Data Structures',
        url: 'https://www.freecodecamp.org/certification/mai-reason/javascript-algorithms-and-data-structures',
        detail: 'freecodecamp',
        id: 'cert4',
        skills: ['javascript', 'algorithms', 'Object Oriented Programming', 'Functional Programming']
    },
    {
        title: 'Advanced CSS and SASS',
        url: 'https://www.udemy.com/certificate/UC-d81b2395-2c38-44fe-8c36-80b9d47777cb/',
        detail: 'Udemy',
        id: 'cert5',
        skills: ['flexbox and grids', 'responsive design', 'SASS']
    },
    {
        title: 'Complete jQuery Course',
        url: 'https://www.udemy.com/certificate/UC-66914547-14c7-4ed5-a444-2caff107cf51/',
        detail: 'Udemy',
        id: 'cert6',
        skills: ['dynamic websites', 'user events']
    },
    {
        title: 'Modern React with Redux',
        url: 'https://www.udemy.com/certificate/UC-e4cba17d-9e2e-4b03-9a98-765145da4ea1/',
        detail: 'Udemy',
        id: 'cert7',
        skills: ['redux', 'toolchains', 'ES6 js']
    },
    {
        title: 'Web Apps with React and Firebase',
        url: 'https://www.udemy.com/certificate/UC-57f2b319-cd41-4289-ba89-81dce39193ff/',
        detail: 'Udemy',
        id: 'cert8',
        skills: ['backend cloud computing services', 'react and firebase',]
    }

] as const;

export const skillsData = [
    {
        title: 'Technology',
        details: ['HTML', 'CSS', 'javascript', 'SASS/SCSS', 'React JS', 'Next.js', 'firebase', 'typescript', 'Redux Toolkit', 'Visual Code Studio', 'Node.js', 'Git', 'unit-testing', 'version control', 'Microsoft Office suite & Google suite',],
    },
    {
        title: 'Soft skills',
        details: ['Legal Support', 'Administrative support', 'Event planning', 'Time management', 'Document & Data organization', 'Client Relations', 'Client management systems', 'Collaboration','Research & Writing'],
    },
    {
        title: 'Education',
        details: ['Masters in Global Politics', 'Bachelors in Political Science'],
    },
    {
        title: 'Languages',
        details: ['English (fluent/native)', 'Tagalog (fluent/native)', 'French (intermediate)', 'Japanese (intermediate)'],
    },
] as const;