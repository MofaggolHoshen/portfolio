import type {
  Project,
  Skill,
  ExperienceItem,
  Testimonial,
  BlogPost,
} from "../types/content";

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with cart, checkout, and admin dashboard. Optimized for performance and mobile.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/MofaggolHoshen",
  },
  {
    id: "project-2",
    title: "Task Management App",
    description:
      "Real-time collaborative task manager with drag-and-drop boards, notifications, and team sharing.",
    tags: ["Next.js", "Prisma", "WebSockets", "Tailwind"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/MofaggolHoshen",
  },
  {
    id: "project-3",
    title: "Developer Portfolio CLI",
    description:
      "A terminal-based interactive portfolio generator that scaffolds personal sites from a config file.",
    tags: ["Node.js", "TypeScript", "Vite", "CLI"],
    repoUrl: "https://github.com/MofaggolHoshen",
  },
];

export const SKILLS: Skill[] = [
  { label: "React", category: "frontend" },
  { label: "TypeScript", category: "frontend" },
  { label: "CSS / SCSS", category: "frontend" },
  { label: "Next.js", category: "frontend" },
  { label: "Accessibility", category: "frontend" },
  { label: "Node.js", category: "backend" },
  { label: "REST APIs", category: "backend" },
  { label: "PostgreSQL", category: "backend" },
  { label: "GraphQL", category: "backend" },
  { label: "Vite", category: "tooling" },
  { label: "Git", category: "tooling" },
  { label: "Docker", category: "tooling" },
  { label: "CI/CD", category: "tooling" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Placeholder Corp",
    role: "Senior Frontend Developer",
    period: "2023 – Present",
    description:
      "Led the frontend architecture for the core product. Reduced bundle size by 40% and improved Lighthouse score from 62 to 95.",
    tags: ["React", "TypeScript", "Performance"],
  },
  {
    id: "exp-2",
    company: "Startup XYZ",
    role: "Full Stack Developer",
    period: "2021 – 2023",
    description:
      "Built and shipped three major product features end-to-end. Owned the API design and frontend implementation.",
    tags: ["Node.js", "React", "PostgreSQL"],
  },
  {
    id: "exp-3",
    company: "Freelance",
    role: "Web Developer",
    period: "2019 – 2021",
    description:
      "Delivered custom websites and web apps for clients across retail, healthcare, and education sectors.",
    tags: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-1",
    quote:
      "One of the most reliable developers I have worked with. Delivers clean, well-tested code on time, every time.",
    author: "Jane Smith",
    role: "Engineering Manager",
    company: "Placeholder Corp",
  },
  {
    id: "testi-2",
    quote:
      "Mofaggol has a rare ability to turn complex requirements into elegant, simple UIs. Highly recommended.",
    author: "Alex Johnson",
    role: "Product Lead",
    company: "Startup XYZ",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    title: "Why I Moved from Create React App to Vite",
    excerpt:
      "A practical breakdown of the migration process, the wins, and what I learned about modern build tooling.",
    date: "2026-04-10",
    slug: "cra-to-vite",
    tags: ["Vite", "React", "Tooling"],
  },
  {
    id: "post-2",
    title: "Accessible Forms: The Checklist I Use Every Time",
    excerpt:
      "Keyboard nav, ARIA labels, error messages — here is the practical list I run through on every form I build.",
    date: "2026-03-22",
    slug: "accessible-forms",
    tags: ["Accessibility", "HTML", "CSS"],
  },
  {
    id: "post-3",
    title: "TypeScript Strict Mode: What It Catches and Why It Matters",
    excerpt:
      "Turning on strict mode felt painful at first. Now I would not start a project without it.",
    date: "2026-02-14",
    slug: "ts-strict-mode",
    tags: ["TypeScript", "Best Practices"],
  },
];
