import { link } from "fs";

export interface SkillIcon {
  name: string;
  icon: string; // Changed from IconType to string
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icons: SkillIcon[];
}

export const skillset: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "I build dynamic and responsive user interfaces using React, Next.js, and Tailwind CSS, focusing on smooth UX and clean, modern design. I also work with HTML and CSS for structure and styling, with occasional use of Bootstrap for quick layouts.",

    icons: [
      { name: "Html", icon: "/skills/Html.svg" },
      { name: "React", icon: "/skills/React.svg"},
      { name: "NextJs", icon: "/skills/Next.js.svg" },
      { name: "Tailwind", icon: "/skills/TailwindCSS.svg" },
      { name: "Css", icon: "/skills/Css.svg" },
     
    ]
  },
  
  
  {
    id: "programming",
    title: "Programming Languages",
    description: "I primarily work with JavaScript and TypeScript for development and logic implementation. I use Python mainly for DSA practice and problem-solving, and have a basic understanding of PHP for backend concepts.",

    icons: [
      { name: "JavaScript", icon: "/skills/javascript.svg" },
      { name: "Typescript", icon: "/skills/TypeScript.svg" },
      { name: "Python", icon: "/skills/Python.svg" },
      { name: "php", icon: "/skills/php.svg" },
    ]
  },
  {
    id: "backend",
    title: "Backend & Database",
    description:"I specialize in building robust server-side applications using Node.js & Express, with MongoDB as my primary database. I also have experience working with Firebase and Postgres SQl for backend integration and data handling.",
    icons: [
      { name: "Node.js", icon: "/skills/Node.js.svg" },
      { name: "Express", icon: "/skills/Express.svg" },
      { name: "MongoDB", icon: "/skills/MongoDB.svg" },
      { name: "PostgresSQl", icon: "/skills/PostgresSQL.svg" },
      { name: "FireBase", icon: "/skills/Firebase.svg" }
    ]
  },
];



export const tools = [
  { name: "Git", icon: "/skills/Git.svg" },
  { name: "GitHub", icon: "/skills/GitHub.svg" },
  { name: "Figma", icon: "/skills/Figma.svg" },
  { name: "Postman", icon: "/skills/Postman.svg" },
  { name: "Vercel", icon: "/skills/Vercel.svg" },
  { name: "Netlify", icon: "/skills/netlify.svg" },
  { name: "Heroku", icon: "/skills/Heroku.svg" },
  { name: "Linux", icon: "/skills/Linux.svg" },
  { name: "Windows", icon: "/skills/Windows.svg" },
  { name: "Vite", icon: "/skills/Vite.svg" },
  { name: "ChatGPT", icon: "/skills/chatgpt.svg" },
  { name: "Cursor Ai", icon: "/skills/Cursorai.svg" },
  { name: "Gemini", icon: "/skills/google-gemini-icon.svg" },
  { name: "Clerk", icon: "/skills/Clerk.svg" },
];



export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skillset" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I’m a passionate developer who enjoys turning creative ideas into functional, visually appealing digital experiences. With a strong focus on planning, clean design, and efficient development, I aim to build projects that combine performance with user-friendly design. I believe in continuous learning, refining my skills through hands-on work, and implementing innovative solutions to real-world challenges.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Download my resume here",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Tech enthusiast with a passion for development",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Disney-MovieApp",
    des: "Our application provides comprehensive movie information, including reviews, trailers, and cast details. Users can create accounts, authenticate securely, and maintain personalized watchlists to track and manage their favorite movies and shows.",
    img: "/projects/Disney.png",
    iconLists: ["/skills/Next.js.svg", "/skills/React.svg", "/skills/Clerk.svg", "/skills/MongoDB.svg", "/skills/Node.js.svg","/skills/TailwindCSS.svg"],
    link: "https://github.com/Shannuu2409/Disney-Movies",
  },
  {
    id: 2,
    title: "Focus-Blocker Chrome Extension",
    des: "A lightweight Chrome extension designed to enhance productivity and user experience. It seamlessly integrates with the browser to perform quick tasks, fetch real-time data, and provide instant access to essential tools — all within a simple and intuitive interface.",
    img: "/projects/focusBlocker.png",
    iconLists: ["/skills/React.svg", "/skills/TailwindCSS.svg", "/skills/Vite.svg", "/skills/javascript.svg"],
    link: "https://github.com/Shannuu2409/Focus-Blocker-ChromeExtension",
  },
  {
    id: 3,
    title: "Google Gemini Clone",
    des: "ReCreated a Gemini Clone using gemini api which works same as gppgle gemini",
    img: "/projects/geminiclone.png",
    iconLists: ["/skills/React.svg", "/skills/google-gemini-icon.svg", "/skills/Vite.svg", "/skills/javascript.svg"],
    link: "https://github.com/Shannuu2409/Gemini-Clone",
  },
  {
    id: 4,
    title: "Notes App",
    des: "Created a Notes App to create notes with CURD operations and authentication features, User can store any notes easily and securly ",
    img: "/projects/notesapp.png",
    iconLists: ["/skills/Node.js.svg", "/skills/React.svg", "/skills/Express.svg", "/skills/MongoDB.svg", "/skills/TailwindCSS.svg","/skills/Postman.svg"],
    link: "https://github.com/Shannuu2409/Note-app",
  },
  {
    id: 5,
    title: "Smdb-Movie-App",
    des: "SMDB is a movie database web application that provides detailed information about movies, including ratings, reviews, cast details, and trailers. It features a modern, Netflix-inspired interface with user authentication, personalized watchlists, and a powerful search system to help users discover and save their favorite films effortlessly.",
    img: "/projects/smdb.png",
    iconLists: ["/skills/Firebase.svg", "/skills/React.svg", "/skills/Express.svg", "/skills/MongoDB.svg", "/skills/TailwindCSS.svg"],
    link: "https://github.com/Shannuu2409/SMDB-Movie-app",
  },
];

export const testimonials = [
  {
    quote:
      "Working with him is always fun! We’ve spent countless hours coding together in class, solving problems, and helping each other improve. He’s focused, creative, and never gives up until we find the perfect solution.",
    name: "Phani Varma",
    title: "Classmate",
  },
  {
    quote:
      "He’s an interesting and curious student — always quick to answer questions and eager to learn more. His enthusiasm for coding and problem-solving truly stands out in class.",
    name: "Prof. Jaya Prakash",
    title: "Lecturer,Information Technology Department",
  },
  {
    quote:
      "He’s the kind of teammate everyone wants — completes his tasks quickly, efficiently, and often goes the extra mile to help others. His consistency and reliability make teamwork smooth and enjoyable.",
    name: "Vinay",
    title: "Project Team Member",
  },
  {
    quote:
      "He’s super passionate about tech! I’ve seen him stay late just to finish a project or try something new. It’s inspiring to work with someone who genuinely loves what he does.",
    name: "Raghava Ram",
    title: "Friend",
  },
  
  
];



export const workExperience = [
  {
    id: 1,
    title: "Open Source & GitHub Contributions",
    desc: "Practiced version control using Git and contributed to small open-source projects to improve code collaboration skills.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 2,
    title: "MERN Stack Training (Self learning)",
    desc: "Gained experience in building full-stack web apps with MongoDB, Express, React, and Node.js.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Frontend Practice Projects (Self learning)",
    desc: "Developed UI components Build web Apps and chrome extensions",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },

];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Shannuu2409",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/Shannu_2409",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/shanmukha-kumar-karra-7a79ba350/",
  },
];


export const timelineData = [
  {
    title: "2020",
    content: ["Completed SSD with 9.3 GPA."],
  },
  {
    title: "2023",
    content: [
      "Completed Diploma in Computer Science at Andhra Polytechnic, Kakinada with 7.8%.",
    ],
  },
  {
    title: "2026",
    content: [
      "Completed B.Tech in Information Technology at Sri Venkateswara College of Engineering, Tirupathi with 8.1 CGPA.",
      "Currently looking for jobs and internships.",
    ],
  },
];
