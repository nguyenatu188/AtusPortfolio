import {
  fullstack,
  backend,
  freelancer,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  unity,
  sedu,
  tinasoft,
  free,
  sellphones,
  trello,
  vnhd,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Fullstack developer",
    icon: fullstack,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Freelancer",
    icon: freelancer,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "unity",
    icon: unity,
  },
];

const experiences = [
  {
    title: "English tutor",
    company_name: "Sedu",
    icon: sedu,
    iconBg: "#E6DEDD",
    date: "November 2023 - April 2024",
    points: [
      "Teaching conversational english to college or high school students.",
      "Teaching online and offline 3 skills of IELTS - listening, writing and speaking.",
      "Grading and helping students with their homeworks and assignments."
    ],
  },
  {
    title: "Intern developer",
    company_name: "Tinasoft",
    icon: tinasoft,
    iconBg: "#E6DEDD",
    date: "March 2024 - September 2024",
    points: [
      "Learning React.js and other related technologies.",
      "Learning the basics structure of web development.",
      "Joining one project as a front-end developer to fix minor UI problems.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelancer",
    icon: free,
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "SellphoneS",
    description:
      "This is a website that simulate a selling platform for mobile phone",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: sellphones,
    source_code_link: "https://github.com/nguyenatu188/Sellphones",
  },
  {
    name: "VNHD",
    description:
      "This is a UX-UI design for an app that allows users to purchase tickets or view the showtimes of movies",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
    ],
    image: vnhd,
    source_code_link: "https://www.figma.com/design/SkmkCCooib03XhozZTVZoF/app-%C4%91%E1%BA%B7t-v%C3%A9-xem-phim-VNHD?node-id=0-1&node-type=canvas&t=J0vdKm5wi1rqF0L0-0",
  },
  {
    name: "Trello clone",
    description:
      "This is the front-end for a Trello clone where users can create boards and add cards to monitor the progress of their projects",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: trello,
    source_code_link: "https://github.com/nguyenatu188/trello-web",
  },
];

export { services, technologies, experiences, projects };