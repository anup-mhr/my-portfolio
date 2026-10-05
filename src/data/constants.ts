import type { Education, Experience, Project, SkillGroup } from "../types";

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

// EmailJS public identifiers (safe to ship to the browser by design).
export const EMAILJS = {
  serviceId: "service_nggjn6l",
  templateId: "template_4wcup6p",
  publicKey: "QYyW67Kc2sn-aN8n4",
};

export const Bio = {
  name: "Anup Maharjan",
  title: "Software Engineer",
  tagline: "Software Engineer | AWS | Serverless",
  location: "Kathmandu, Nepal",
  email: "anupmhrzn16@gmail.com",
  phone: "+977 9803874819",
  description:
    "Software Engineer specializing in TypeScript, Node.js, React and AWS, with experience building production-grade serverless, microservice and multi-tenant SaaS platforms. Experienced in system architecture, AI applications, cloud infrastructure, security and payment systems.",
  github: "https://github.com/anup-mhr",
  resume: "/assets/resume/CV-Anup-Maharjan.pdf",
  linkedin: "https://www.linkedin.com/in/anup-mhr/",
  insta: "https://www.instagram.com/_anup_mhrzn/",
  facebook: "https://www.facebook.com/anup.mhr.004",
};

export const stats = [
  { value: 3, suffix: "+", label: "Years of experience" },
  { value: 15, suffix: "+", label: "Projects shipped" },
  { value: 3, suffix: "", label: "Companies worked with" },
  { value: 25, suffix: "+", label: "Technologies used" },
];

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      {
        name: "TypeScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "SQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg",
      },
      {
        name: "Python",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Java",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Vite",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Apollo Client",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apollographql/apollographql-original.svg",
      },
      {
        name: "Zustand",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "React Native",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "GraphQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      },
      {
        name: "Apollo Server",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apollographql/apollographql-original.svg",
      },
      {
        name: "Express.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "NestJS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
      },
      {
        name: "REST APIs",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "Socket.io",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MySQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Postgres",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Redis",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
      {
        name: "DynamoDB",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg",
      },
      {
        name: "OpenSearch",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opensearch/opensearch-original.svg",
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      {
        name: "AWS Lambda",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "API Gateway",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "RDS / S3 / SES / SQS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "EventBridge",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Bedrock",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "EC2 / Firehose / Athena",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "AWS CDK",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Serverless Framework",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "GitHub Actions",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
      },
      {
        name: "Docker",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 0,
    role: "Mid Full Stack Developer",
    company: "Ghum Nepal Innovation",
    location: "Kathmandu, Nepal",
    date: "Feb 2026 - Present",
    desc: "Building production SaaS and marketplace systems using TypeScript, Node.js, GraphQL, React and AWS.",
    highlights: [
      "Architected a multi-tenant SaaS platform with tenant-isolated data, subscription and entitlement management, billing, automated tenant provisioning and database migrations.",
      "Architected and shipped ghumSign, an e-signature platform with OTP-verified signing, PDF stamping, tamper-evident audit trails, document verification and Nepal NPKI/DSC certificate sealing.",
      "Resolved 15 security audit findings, including a cross-tenant authorization vulnerability, and implemented centralized entitlement and product-access controls.",
      "Built an Amazon Bedrock AI trip planner, OpenSearch-powered property search, Stripe payment workflows, loyalty and coupon systems, and multi-channel notifications.",
      "Owned AWS infrastructure and CI/CD using AWS CDK and GitHub Actions, while developing Next.js and React applications across products.",
    ],
    skills: [
      "TypeScript",
      "Node.js",
      "GraphQL",
      "React",
      "Next.js",
      "AWS CDK",
      "Bedrock",
      "OpenSearch",
      "Stripe",
      "GitHub Actions",
    ],
  },
  {
    id: 1,
    img: "https://palmmind.com/images/palmmind-logo.webp",
    role: "Full Stack Developer",
    company: "Palmmind Technology",
    location: "Lalitpur, Nepal",
    date: "Nov 2025 - Feb 2026",
    desc: "Worked across backend architecture, infrastructure and frontend performance.",
    highlights: [
      "Contributed to backend architecture and performance optimization, improving API response times by 35%.",
      "Reduced Docker image size by 57%, improving development and deployment efficiency.",
      "Integrated 10+ third-party APIs and optimized shared modules and frontend performance, reducing page load times by 25%.",
    ],
    skills: ["Node.js", "NestJS", "React", "Docker", "MongoDB", "AWS"],
  },
  {
    id: 2,
    img: "https://www.amniltech.com/assets/img/logo.png",
    role: "Node Intern",
    company: "Amnil Technology",
    location: "Lalitpur, Nepal",
    date: "Jan 2024 - Apr 2024",
    desc: "Backend services and chatbot automation.",
    highlights: [
      "Developed backend services with Node.js, Express.js and Botpress for chatbot workflows and automation, integrating 3+ external APIs for dynamic responses.",
      "Optimized database queries, reducing API latency by 15%.",
    ],
    skills: [
      "Node.js",
      "Express.js",
      "Botpress",
      "Postgres",
      "MongoDB",
      "Jest",
    ],
  },
];

export const education: Education[] = [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBYt3mOD3WetX0pCeXndLLLa7MdrkTSOSEg&s",
    school: "Virinchi College, AeU",
    date: "May 2021 - May 2025",
    grade: "3.32 CGPA",
    desc: "I graduated from Virinchi College with a Bachelor in Information & Communication Technology.",
    degree: "Bachelor in Information and Communication Technology",
  },
  {
    id: 1,
    img: "https://th.bing.com/th/id/OIP.fhRkXCrpGSOq8oPX6kw38QHaHa?w=160&h=180&c=7&r=0&o=5&pid=1.7",
    school: "Laboratory Secondary School",
    date: "2018-2020",
    grade: "3.24 CGPA",
    desc: "I completed my class 12 high school education at Laboratory Secondary School Kirtipur, where I studied Science.",
    degree: "12th, Science",
  },
];

export const projects: Project[] = [
  {
    id: 0,
    title: "talk-to-ai-agent-openai-webRTC",
    date: "Dec 2024 - Jan 2025",
    description:
      "Demonstrates how to connect your business with AI Agent (Openai WebRTC) with RAG functionalities",
    image: "/assets/ai-agent-webrtc.png",
    tags: ["React Js", "Node Js", "Express Js", "Typescript", "Open AI"],
    categories: ["Fullstack", "Frontend", "Backend", "AI Integration"],
    github: "https://github.com/anup-mhr/talk-to-ai-agent-openai-webRTC-.git",
  },
  {
    id: 1,
    title: "twilio-openai-RTC",
    date: "Dec 2025 - Dec 2025",
    description:
      "Using OpenAI Realtime API to build a Twilio Voice AI assistant with Node.js",
    image:
      "https://th.bing.com/th/id/OIP.q7Qs4-t2b1KXdSzUh8_w5wHaHa?rs=1&pid=ImgDetMain",
    tags: ["Open AI", "Twilio", "Node Js", "Express Js", "ws", "Socket.io"],
    categories: ["AI Integration", "Backend"],
    github: "https://github.com/anup-mhr/twilio-openai-RTC.git",
  },

  {
    id: 2,
    title: "Lets-Meet",
    date: "Feb 2024 - Mar 2024",
    description:
      "Google Meet like appication where one can create room and share room id and chat as well as video call",
    image: "/assets/lets-meet.jpeg",
    tags: [
      "React Js",
      "Postgres",
      "Node Js",
      "Express Js",
      "Typescript",
      "TypeORM",
      "Socket.io",
    ],
    categories: ["Fullstack", "Frontend", "Backend"],
    github: "https://github.com/anup-mhr/Lets-meet.git",
    webapp: "https://letss-meet.netlify.app/",
  },
  {
    id: 3,
    title: "ArtCanvas",
    date: "May 2024 - May 2024",
    description:
      "All time solution for instantly drawing your ideas and downloading",
    image: "/assets/ArtCanvas.jpeg",
    tags: ["HTML", "CSS", "javascript", "React", "Shadcn"],
    categories: ["Frontend"],
    github: "https://github.com/anup-mhr/ArtCanvas.git",
    webapp: "https://art-canvass.netlify.app/",
  },
  {
    id: 4,
    title: "EveryShop",
    date: "Oct 2024 - Oct 2023",
    description:
      "Everyday use of shopping with our E-commerce Web App. User-friendly interface and seamless synchronization across devices make it a must-have for staying productive on the go",
    image: "/assets/everyshop.jpeg",
    tags: ["HTML", "CSS", "Javascript"],
    categories: ["Frontend"],
    github: "https://github.com/anup-mhr/E-commerce-vanilla-js.git",
    webapp: "https://everyshop-anup.netlify.app/",
  },
  {
    id: 5,
    title: "NewsWave",
    date: "July 2023 - July 2023",
    description:
      "A news portal with an easy-to-use interface where different types of news can be found",
    image: "/assets/newswave.PNG",
    tags: ["React Js", "Bootstrap", "Api"],
    categories: ["Frontend"],
    github: "https://github.com/anup-mhr/NewsWave.git",
    webapp: "https://anup-newswave.netlify.app/",
  },

  {
    id: 6,
    title: "Movie Ticket Booking System",
    date: "Fev 2023- Apr 2023",
    description:
      "A portal for efficiently booking desired seats and tickets for your upcoming movies",
    image: "/assets/AM-Movies-pic.png",
    tags: ["Html", "CSS", "Javascript", "Java", "MySQL"],
    categories: ["Fullstack", "Frontend", "Backend"],
    github: "https://github.com/anup-mhr/movie-ticket-booking.github.io.git",
  },
  {
    id: 7,
    title: "Viper Vision",
    date: "Nov 2023 - Jan 2024",
    description:
      "IoT project where locomotion of Snake is implemented along with camera and mobile control.",
    image: "/assets/viper-vision.jpg",
    tags: ["IoI", "C++"],
    categories: ["IoT"],
    github: "https://github.com/anup-mhr/Viper-Vision.git",
    member: [
      {
        name: "Anish",
        img: "/assets/anish.jpg",
        linkedin: "https://www.linkedin.com/in/anish-shrestha-131218264",
      },
      { name: "Reema", img: "/assets/Reema.jpg" },
      {
        name: "Abiral",
        img: "/assets/abiral.jpeg",
        linkedin: "https://www.linkedin.com/in/abiral-shrestha-762603267/",
      },
      {
        name: "Bijen",
        img: "/assets/bijen.jpeg",
        linkedin: "https://www.linkedin.com/in/bijen-risal-33468228b/",
      },
    ],
  },
  {
    id: 8,
    title: "Todo-List",
    date: "Oct 2023 - Oct 2023 ",
    description:
      "A simple Todo-List app where user can create a list of tasks and mark them as done.",
    image: "/assets/todo.png",
    tags: ["HTML", "CSS", "Javascript"],
    categories: ["Frontend"],
    github: "https://github.com/anup-mhr/todo-javascript.git",
    webapp: "https://mytodo-vanilla-js.netlify.app",
  },

  {
    id: 9,
    title: "Trafalgal",
    date: " Dec 2022 - Jan 2023",
    description:
      "A healthcare website where user can book appointments with doctors and see their respective timings.",
    image: "/assets/trafagal-pic.PNG",
    tags: ["Html", "CSS", "Javascript"],
    categories: ["Frontend"],
    github: "https://github.com/anup-mhr/healthcare-website.git",
    webapp: "https://anup-mhr.github.io/healthcare-website/",
  },
];
