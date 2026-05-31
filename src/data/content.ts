import type {
  Project,
  Skill,
  ExperienceItem,
  Testimonial,
  BlogPost,
} from "../types/content";

export const PROJECTS: Project[] = [
  {
    id: "dotnet-saas-multitenant-api",
    title: "SaaS Multi-Tenant API",
    description:
      "Scalable multi-tenant SaaS backend built with ASP.NET Core (.NET 10), Clean Architecture, and Domain-Driven Design. Features CQRS with MediatR, JWT auth with refresh token rotation, Redis caching, rate limiting, Docker + docker-compose, and comprehensive integration test coverage.",
    tags: ["ASP.NET Core", "C#", "Clean Architecture", "DDD", "CQRS", "PostgreSQL", "Redis", "Docker"],
    repoUrl: "https://github.com/MofaggolHoshen/dotnet-saas-multitenant-api",
  },
  {
    id: "habito",
    title: "Habito — Habit & Task Tracker",
    description:
      "Mobile-first React Native app for tracking daily habits, tasks, and mood. Features an interactive calendar, daily rating system (0–10 with emoji), pre-built templates, streak tracking, analytics dashboard with achievement badges, and SQLite persistence.",
    tags: ["React Native", "TypeScript", "SQLite", "React Navigation", "Context API"],
    repoUrl: "https://github.com/MofaggolHoshen/habito",
  },
  {
    id: "multi-tenant-http-client-factory",
    title: "Multi-Tenant HttpClientFactory",
    description:
      "A .NET library that extends IHttpClientFactory for multi-tenant apps — resolves the current tenant from headers, subdomains, or JWT claims, loads per-tenant config (endpoints, certificates, timeouts), and serves pooled HttpClient instances with hot-reload support.",
    tags: [".NET", "C#", "Library", "Multi-tenancy", "HttpClient", "Azure Key Vault"],
    repoUrl: "https://github.com/MofaggolHoshen/multi-tenant-http-client-factory",
  },
  {
    id: "dotnet-stripe-payment-demo",
    title: "Stripe Payment Integration",
    description:
      "ASP.NET Core demo integrating Stripe for payment processing. Covers checkout session creation, webhook handling, payment intent flow, and secure server-side validation.",
    tags: ["ASP.NET Core", "C#", "Stripe", "Payments", "Webhooks"],
    repoUrl: "https://github.com/MofaggolHoshen/dotnet-stripe-payment-demo",
  },
  {
    id: "dotnet-auth-service",
    title: "ASP.NET Core Auth Service",
    description:
      "Production-ready authentication microservice built with ASP.NET Core 9. Implements JWT + refresh tokens, email verification, password reset, configurable email providers (SMTP/SendGrid), FluentValidation, and comprehensive xUnit unit and integration test coverage.",
    tags: ["ASP.NET Core 9", "C#", "JWT", "Entity Framework Core", "SQL Server", "xUnit"],
    repoUrl: "https://github.com/MofaggolHoshen/dotnet-auth-service",
  },
  {
    id: "blood-pressure-log",
    title: "Blood Pressure Log",
    description:
      "Web app for patients to log daily health data (blood pressure, pulse, etc.) and for doctors to view patient progress and add comments. Built with ASP.NET, Entity Framework, and Azure SQL Database using MVC architecture.",
    tags: ["ASP.NET", "C#", "Entity Framework", "Azure", "MVC"],
  },
  {
    id: "face-detection-recognition",
    title: "Face Detection & Recognition",
    description:
      "Desktop application using the Viola-Jones object detection algorithm and Eigenfaces for face recognition. Built with C# and OpenCV via the Emgu CV wrapper library.",
    tags: ["C#", "OpenCV", "Emgu CV", "Computer Vision"],
  },
  {
    id: "speed-of-reading",
    title: "Speed of Reading",
    description:
      "WPF desktop app that improves reading speed by displaying text word-by-word at configurable speeds. Supports custom font styles and sizes. Built with WPF, .NET Framework, and MVVM architecture.",
    tags: ["C#", "WPF", ".NET Framework", "MVVM"],
  },
];

export const SKILLS: Skill[] = [
  { label: "React", category: "frontend" },
  { label: "TypeScript", category: "frontend" },
  { label: "CSS / Tailwind", category: "frontend" },
  { label: "Accessibility (WCAG)", category: "frontend" },
  { label: "C# / .NET", category: "backend" },
  { label: "ASP.NET Core", category: "backend" },
  { label: "REST APIs", category: "backend" },
  { label: "Entity Framework Core", category: "backend" },
  { label: "PostgreSQL / SQL Server", category: "backend" },
  { label: "Redis", category: "backend" },
  { label: "Azure Service Bus", category: "backend" },
  { label: "Docker", category: "tooling" },
  { label: "GitHub Actions / CI/CD", category: "tooling" },
  { label: "Git", category: "tooling" },
  { label: "xUnit / Testing", category: "tooling" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Quipu GmbH",
    role: "Software Engineer",
    period: "2018 – Present",
    description:
      "Over seven years delivering production software at a German software company. Building and maintaining full-stack features across backend services and frontend applications, with a focus on clean architecture, reliability, and long-term maintainability.",
    tags: ["C#", ".NET", "ASP.NET Core", "SQL Server", "Azure"],
  },
  {
    id: "exp-2",
    company: "Dr. Koch Consulting",
    role: "C# Developer Intern",
    period: "Sep 2015 – Jan 2016",
    description:
      "Developed add-ons for Microsoft PowerPoint using C#. Gained hands-on experience with the Office interop APIs and desktop application development.",
    tags: ["C#", ".NET", "Microsoft Office API"],
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
