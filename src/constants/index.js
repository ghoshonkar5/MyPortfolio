export const myProjects = [
  {
  id: 1,
  title: "SkillSight an AI Resume Analyser",
  description:
    "A smart platform that analyzes resumes using AI to generate insights, identify key skills, and compare them with job requirements for better career guidance.",
  subDescription: [
    "Developed using React and React Router to create a smooth, responsive frontend experience.",  
    "Integrated Puter.js for effortless cloud storage, hosting, and file management.",  
    "Focused on building a clean, user-friendly interface with fast load times and modern design principles.",
  ],
  href: "https://skillsight-ai-resume-analyser.vercel.app/",
  logo: "",
  image: "/assets/projects/ai-resume-analyser.png",
  tags: [
    {
      id: 1,
      name: "React.js",
      path: "/assets/logos/react.svg",
    },
    {
      id: 2,
      name: "TailwindCSS",
      path: "/assets/logos/tailwindcss.svg",
    },
    {
      id: 3,
      name: "ReactRouter",
      path: "/assets/logos/router.svg",
    },
    {
      id: 4,
      name: "puter.js",
      path: "/assets/logos/puter.png",
    },
    {
      id: 5,
      name: "Vercel",
      path: "/assets/logos/vercel.jpg",
    },
  ],
},
  {
  id: 2,
  title: "Portfolio Website",
  description:
    "A visually engaging and interactive personal portfolio showcasing my projects, skills, and journey as a developer.",
  subDescription: [
    "Built with React and Vite for a fast, modular, and optimized development experience.",
    "Used TailwindCSS for modern, responsive styling and a clean aesthetic.",
    "Integrated Three.js, React Three Fiber, and Drei to add dynamic 3D visuals and animations.",
    "Enhanced user interaction with smooth motion effects using Framer Motion and modern UI kits like Aceternity UI and Magic UI.",
    "Added EmailJS for seamless contact form integration and real-time email delivery.",
  ],
  href: "",
  logo: "",
  image: "/assets/projects/portfolio.png",
  tags: [
    { id: 1, 
      name: "React", 
      path: "/assets/logos/react.svg" 
    },
    { id: 3, 
      name: "TailwindCSS", 
      path: "/assets/logos/tailwindcss.svg" 
    },
    { id: 4, 
      name: "Three.js", 
      path: "/assets/logos/threejs.svg"
     },
    { id: 8, 
      name: "ShadCn",
       path: "/assets/logos/shadcn.png" 
      },
    { id: 10,
       name: "EmailJS", 
       path: "/assets/logos/emailjs.png" 
      },
      { id: 10,
       name: "Vercel", 
       path: "/assets/logos/vercel.jpg" 
      },
  ],
},

 {
  id: 3,
  title: "PrepWise an AI Mock Interview Platform",
  description:
    "An AI-powered mock interview web app designed to simulate real interview environments with personalized, real-time feedback.",
  subDescription: [
    "Developed using React and Next.js for a dynamic, server-rendered, and highly responsive user experience.",
    "Styled with Tailwind CSS to achieve a clean, modern, and intuitive interface.",
    "Integrated Firebase for secure authentication and real-time database management, ensuring smooth user sessions and data handling.",
    "Integrated with Vapi for AI-driven interview sessions, enabling realistic question generation and evaluation.",
    "Deployed on Vercel for fast, reliable, and globally distributed hosting.",
    "Currently in its final development phase — around 95% complete — with final touches and optimizations underway before launch.",
  ],
  href: "",
  logo: "",
  image: "/assets/projects/ai-interview.png",
  tags: [
    { id: 1, 
      name: "React", 
      path: "/assets/logos/react.svg" 
    },
    { id: 2, 
      name: "Next.js", 
      path: "/assets/logos/nextjs-pink.jpg" 
    },
    { id: 3,
      name: "TailwindCSS", 
      path: "/assets/logos/tailwindcss.svg" 
    },
    { id: 4, 
      name: "Vapi", 
      path: "/assets/logos/Vapi.svg" 
    },
    { id: 5, 
      name: "Vercel", 
      path: "/assets/logos/vercel.svg" 
    },
  ],
},

 {
  id: 4,
  title: "Hotel Management System",
  description:
    "A Java-based desktop application designed to streamline hotel operations, reservations, and customer management.",
  subDescription: [
    "Developed using Java for a responsive and efficient desktop interface.",
    "Integrated MySQL for secure data storage and real-time booking management.",
    "Implemented modules for room allocation, billing, and staff management ,etc.",
    "Focused on delivering an intuitive user experience and smooth workflow automation.",
  ],
  href: "",
  logo: "",
  image: "/assets/projects/hotel-management.png",
  tags: [
    { id: 1, 
      name: "Java", 
      path: "/assets/logos/java.png" 
    },
    { id: 2, 
      name: "MySQL", 
      path: "/assets/logos/mysql.png" 
    },
  ],
},
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "www.linkedin.com/in/onkar-ghosh-778493395",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ghostonkar13?igsh=NnJyd29ocG80czU=",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
  title: "Foundations of Web Development",
  job: "Learning & Exploration Phase",
  date: "2023",
  contents: [
    "Began my coding journey by learning the fundamentals of HTML, CSS, and JavaScript to build simple and responsive web pages.",
    "Created small projects like a personal website and basic calculator to understand how the web works.",
 "Gained foundational knowledge of Git, GitHub, and version control for organizing and sharing code.",    
 "Explored basic problem-solving with C,Java and began understanding programming logic and structure.",
  ],
},
{
  title: "Expanding into Full-Stack Development",
  job: "Project Building & Skill Development",
  date: "2024",
  contents: [
    "Developed a Java-based Hotel Management System integrated with MySQL for handling bookings, customers, and billing operations.",
    "Expanded frontend knowledge with React and Tailwind CSS, experimenting with component-driven design and routing.",
    "Built multiple small-scale web apps to strengthen understanding of APIs, forms, and user interaction.",
    "Focused on strengthening database concepts, backend logic, and the connection between frontend and backend systems.",
  ],
},
{
  title: "Next-Gen Web Development",
  job: "Building Modern Projects & AI Integration",
  date: "2025–Present",
  contents: [
    "Developed an AI Resume Analyzer using React, Tailwind CSS, and Puter.js to evaluate and improve resumes with smart suggestions.",
    "Currently building an AI Mock Interview Platform using React, Next.js, Firebase, and Vapi — almost complete and ready for deployment.",
    "Created a 3D interactive portfolio using Three.js, React, Vite, and Framer Motion to showcase my work and technical journey.",
    "Continuing to explore AI, full-stack development, and cloud technologies while taking on freelance and experimental projects.",
  ],
},

];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
