// Change `url` here if the site moves to a custom domain — canonical tags,
// sitemap, Open Graph and the JSON-LD graph are all generated from it.
export const site = {
  url: "https://darshitdev.vercel.app",
  locale: "en_IN",
  ogImage: "/og-image.jpg",
};

export const profile = {
  name: "Darshit Jani",
  handle: "Darshit.dev",
  role: "Full Stack Developer",
  location: "Ahmedabad, India",
  locality: "Ahmedabad",
  region: "Gujarat",
  country: "IN",
  geo: { lat: 23.0225, lng: 72.5714 },
  timezone: "Asia/Kolkata",
  email: "darshitdeveloper300@gmail.com",
  experience: "1.5+ years",
  currentRole: "Backend Developer @ Mediaclock",
  previously: "Traveltekpro · Conceptserve",
  available: true,
  intro:
    "Full stack developer with 1.5+ years shipping production platforms — real-time multi-tenant systems, headless storefronts and AI pipelines, built with React, Next.js, Node and TypeScript.",
  bio: [
    "I'm a full stack developer based in Ahmedabad, currently building backend systems at Mediaclock. I work across React, Next.js, Node and TypeScript, with PostgreSQL or MongoDB underneath depending on what the problem actually needs.",
    "A lot of my work lives in the parts users never see — multi-tenant architecture, role-based access, real-time messaging over Socket.IO, background jobs and caching. I care about systems that stay fast under load, and code the next person can read without a tour.",
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
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const stack = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Redis",
  "Socket.IO",
  "Firebase",
  "Stripe",
  "Tailwind CSS",
  "Git",
];

export const capabilities = [
  {
    index: "01",
    title: "Frontend engineering",
    body: "Interfaces built component-first in React and Next.js — sharp on every screen size, quick to load, and structured so your team can extend them later.",
    tools: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
  },
  {
    index: "02",
    title: "Backend & real-time",
    body: "APIs, authentication and live features that hold up under load: multi-tenant architecture, role-based access, scheduled jobs and caching.",
    tools: ["Node.js", "Express", "PostgreSQL", "Prisma", "Socket.IO", "Redis"],
  },
  {
    index: "03",
    title: "Integrations & AI",
    body: "Payments, notifications and third-party services wired in end to end — plus AI features built on Whisper, GPT-4o and Replicate.",
    tools: ["Stripe", "Firebase", "FCM", "OpenAI", "Replicate"],
  },
];

/**
 * `imageName` is the stem of the responsive set in /public/img that
 * <Picture> renders; `image` is a single concrete file for the JSON-LD
 * graph, which wants one URL rather than a srcset.
 */
export const projects = [
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
    github: "https://github.com/darshitjani300/react-rental-car",
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

/** Production work built for employers — no public repo or live link. */
export const clientWork = [
  {
    title: "Shelynx",
    tagline: "Full stack application suite",
    description:
      "A multi-platform ecosystem — mobile app, web portal and admin dashboard — with RBAC and JWT auth, real-time Socket.IO features, push notifications, scheduled cron workflows and Redis caching to cut database load.",
    tech: ["React Native", "Node.js", "Socket.IO", "Redis", "JWT"],
  },
  {
    title: "Traveltek Flights",
    tagline: "End-to-end travel booking",
    description:
      "A complete flight booking platform covering search, listing, booking and confirmation flows, with debounced dynamic filtering and Recoil state management to keep unnecessary re-renders down.",
    tech: ["React", "Next.js", "Recoil", "REST APIs"],
  },
];
