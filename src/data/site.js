// Change `url` here if the site moves to a custom domain — canonical tags,
// sitemap, Open Graph and the JSON-LD graph are all generated from it.
//
// Every fact on this page — titles, dates, numbers — comes from the resume
// (public/Darshit_Jani_Resume.pdf). Update both together, never one alone.
export const site = {
  url: "https://darshitdev.vercel.app",
  locale: "en_IN",
  ogImage: "/og-image.jpg",
};

export const profile = {
  name: "Darshit Jani",
  handle: "Darshit.dev",
  role: "Full Stack Developer (MERN)",
  headline: "Node.js · React · Next.js · TypeScript | LLM Integration",
  location: "Ahmedabad, India",
  locality: "Ahmedabad",
  region: "Gujarat",
  country: "IN",
  geo: { lat: 23.0225, lng: 72.5714 },
  timezone: "Asia/Kolkata",
  email: "darshitdeveloper300@gmail.com",
  resume: "/Darshit_Jani_Resume.pdf",
  experience: "2 years",
  currentRole: "Backend Developer @ Media Clock",
  previously: "Traveltekpro · Conceptserve",
  availability: "Open to freelance projects and full-time roles",
  available: true,
  description:
    "Darshit Jani is a Full Stack Developer (MERN) in Ahmedabad, India with 2 years of experience building production platforms with Node.js, Express, TypeScript, React/Next.js, MongoDB and PostgreSQL, including LLM features shipped to production.",
  intro:
    "Full stack developer with 2 years building and deploying production platforms — REST APIs, real-time systems on Socket.IO and FCM, and LLM features shipped to production — with Node.js, Express, TypeScript, React/Next.js, MongoDB and PostgreSQL.",
  bio: [
    "I'm a full stack developer based in Ahmedabad, currently a Backend Developer at Media Clock. Most of my work lives on the server: REST APIs with JWT and RBAC, Socket.IO chat, FCM push notifications, Redis caching and cron jobs, deployed on DigitalOcean with Nginx and PM2.",
    "I've shipped an AI audio pipeline to production on OpenAI Whisper, GPT-4o and Replicate, and on the frontend I build with React and Next.js. I'm currently learning RAG and AI agents.",
  ],
};

export const socials = [
  {
    label: "LinkedIn",
    handle: "darshit-jani",
    href: "https://www.linkedin.com/in/darshit-jani/",
  },
  {
    label: "GitHub",
    handle: "darshitjani300",
    href: "https://github.com/darshitjani300",
  },
  {
    label: "X",
    handle: "darshit_life1",
    href: "https://x.com/darshit_life1",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const skills = [
  { group: "Languages", items: ["JavaScript (ES6+)", "TypeScript"] },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Socket.IO",
      "JWT",
      "RBAC",
      "Stripe",
      "Cron Jobs",
    ],
  },
  {
    group: "Frontend",
    items: [
      "React.js",
      "Next.js (SSR/SSG)",
      "React Native",
      "Redux Toolkit",
      "Recoil",
      "Tailwind CSS",
      "Bootstrap",
      "Motion",
    ],
  },
  {
    group: "Databases",
    items: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma", "Redis", "Firebase (FCM)"],
  },
  {
    group: "AI / LLM",
    items: ["OpenAI API (Whisper, GPT-4o)", "Replicate", "AI chatbot integration"],
    learning: "RAG and AI agents",
  },
  {
    group: "DevOps & Tools",
    items: ["DigitalOcean", "Nginx", "PM2", "SSL", "Git", "Figma", "SEO/AEO/GEO"],
  },
];

/** Flat list for the JSON-LD graph, which wants plain skill names. */
export const stack = skills.flatMap((skill) => skill.items);

export const experience = [
  {
    role: "Backend Developer",
    company: "Media Clock",
    location: "Ahmedabad (Remote)",
    period: "Feb 2026 – Present",
    points: [
      "Shipped an AI audio pipeline to production using OpenAI Whisper, GPT-4o and Replicate.",
      "Designed and built 30+ REST API endpoints with Express.js, JWT authentication and RBAC.",
      "Built backends for a multi-tenant e-commerce platform (headless storefront APIs; Express.js, TypeScript, PostgreSQL/Prisma) and a parking reservation platform (MongoDB/Mongoose, Firebase), with RBAC and third-party API integrations.",
      "Added real-time features with Socket.IO chat and FCM push notifications.",
      "Developed multiple Next.js websites (SSR/SSG) scoring 90+ on Lighthouse.",
      "Reduced stale data by 30% with cron-based cleanup jobs.",
      "Deployed and maintained services on DigitalOcean with Nginx reverse proxy, SSL and PM2.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Traveltekpro IT Solutions",
    location: "Ahmedabad",
    period: "May 2024 – Jun 2025",
    points: [
      "Built responsive web apps with React.js, Next.js (SSG), TypeScript, Tailwind CSS and Bootstrap.",
      "Converted Figma designs into reusable components and integrated REST APIs with Redux Toolkit and Recoil, cutting code duplication by 25%.",
      "Implemented SEO, AEO and GEO for visibility across search and AI answer engines.",
    ],
  },
  {
    role: "React Developer (Internship)",
    company: "Conceptserve Technologies",
    location: "Ahmedabad",
    period: "Dec 2023 – Mar 2024",
    points: [
      "Developed mobile and web apps with React Native and React.js in an Agile team.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (Online)",
    school: "Manipal University Jaipur",
    period: "Aug 2025 – Present",
  },
  {
    degree: "Bachelor of Commerce (B.Com)",
    school: "Maharaja Sayajirao University of Baroda",
    period: "Jul 2021 – Apr 2024",
  },
];

export const capabilities = [
  {
    index: "01",
    title: "Backend & real-time",
    body: "REST APIs with JWT authentication and role-based access, Socket.IO chat, FCM push notifications, Redis caching and cron jobs — deployed on DigitalOcean behind Nginx with PM2.",
    tools: ["Node.js", "Express", "TypeScript", "MongoDB", "PostgreSQL", "Socket.IO", "Redis"],
  },
  {
    index: "02",
    title: "LLM integration",
    body: "LLM features shipped to production — an AI audio pipeline on OpenAI Whisper, GPT-4o and Replicate, plus an AI chatbot integrated into a real estate platform. Currently learning RAG and AI agents.",
    tools: ["OpenAI", "Whisper", "GPT-4o", "Replicate"],
  },
  {
    index: "03",
    title: "Frontend engineering",
    body: "React and Next.js interfaces built from Figma designs, rendered with SSR/SSG and tuned to score 90+ on Lighthouse.",
    tools: ["React", "Next.js", "React Native", "Redux Toolkit", "Tailwind CSS"],
  },
];

/** Production work built for employers. Only Shelynx has a public URL. */
export const work = [
  {
    title: "Shelynx",
    company: "Media Clock",
    link: "https://shelynx.com",
    tagline: "Order-aggregation platform",
    description:
      "Customers order SHEIN products through local agents, and admins consolidate those orders into bulk purchases.",
    points: [
      "Architected the shared Node.js/Express.js (TypeScript) backend for the mobile app, web portal and admin dashboard, with JWT and RBAC across customer, agent and admin roles.",
      "Socket.IO live chat, FCM push notifications, Redis caching, cron automation, third-party APIs and AI features.",
    ],
    tech: ["Node.js", "Express.js", "TypeScript", "Socket.IO", "Redis", "FCM"],
  },
  {
    title: "Real Estate Platform",
    company: "Media Clock",
    tagline: "Property management, end to end",
    description: "A full-stack property management system, built end to end.",
    points: [
      "Next.js/React/TypeScript frontend (Tailwind CSS, Motion, Redux Toolkit, Recoil).",
      "Node.js/Express.js REST backend on MongoDB/Mongoose, with an integrated AI chatbot and cron jobs.",
    ],
    tech: ["Next.js", "React.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Flight Booking Platform",
    company: "Traveltekpro",
    tagline: "End-to-end travel portal",
    description:
      "A travel portal covering search, listing, booking and confirmation.",
    points: [
      "Next.js, TypeScript and Tailwind CSS from Figma designs; debounced search and filters with Recoil.",
      "Raised the Lighthouse score from 60 to 90 with SSG, code splitting and lazy loading.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Recoil"],
  },
];

/**
 * Personal side projects, each with a live demo and public repo.
 *
 * `imageName` is the stem of the responsive set in /public/img that
 * <Picture> renders; `image` is a single concrete file for the JSON-LD
 * graph, which wants one URL rather than a srcset.
 */
export const sideProjects = [
  {
    title: "Ebookify",
    year: "2025",
    period: "December 2025",
    tagline: "AI eBook creation platform",
    description:
      "An AI-powered eBook creation platform that helps users generate structured content and build complete eBooks through a guided, seamless workflow.",
    imageName: "ebook",
    image: "/img/ebook-1400.jpg",
    link: "https://ebookify.vercel.app/",
    github: "https://github.com/darshitjani300/mern-ai-ebook-creator",
    tech: ["React", "Node.js", "MongoDB", "AI"],
  },
  {
    title: "PingXo",
    year: "2025",
    period: "October 2025",
    tagline: "Real-time messaging",
    description:
      "A real-time chat application for instant one-to-one messaging — secure, low-latency communication with protected access and a smooth experience across devices.",
    imageName: "pingxo",
    image: "/img/pingxo-1400.jpg",
    link: "https://pingxo.vercel.app",
    github: "https://github.com/darshitjani300/mern-pingxo-frontend",
    tech: ["React", "Node.js", "MongoDB", "Real-time"],
  },
  {
    title: "Car Rental",
    year: "2023",
    period: "September 2023",
    tagline: "Booking experience",
    description:
      "An online rental platform where users search, compare and reserve cars for personal or business use, built around a fast browsing and booking flow.",
    imageName: "car-rental",
    image: "/img/car-rental-1400.jpg",
    link: "https://rental-car300.netlify.app",
    github: "https://github.com/darshitjani300/react-car-rental",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "GYMNITE",
    year: "2023",
    period: "September 2023",
    tagline: "Fitness storefront",
    description:
      "A fitness resource and storefront with a deliberately clean, simple design and swipeable product browsing, so customers can find and buy what they need quickly.",
    imageName: "gym-ecom",
    image: "/img/gym-ecom-1400.jpg",
    link: "https://gym-ecom.netlify.app",
    github: "https://github.com/darshitjani300/react-gym-ecom",
    tech: ["React", "Tailwind CSS", "Swiper"],
  },
];
