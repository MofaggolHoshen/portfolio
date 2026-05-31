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
    tags: [
      "ASP.NET Core",
      "C#",
      "Clean Architecture",
      "DDD",
      "CQRS",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    repoUrl: "https://github.com/MofaggolHoshen/dotnet-saas-multitenant-api",
  },
  {
    id: "habito",
    title: "Habito — Habit & Task Tracker",
    description:
      "Mobile-first React Native app for tracking daily habits, tasks, and mood. Features an interactive calendar, daily rating system (0–10 with emoji), pre-built templates, streak tracking, analytics dashboard with achievement badges, and SQLite persistence.",
    tags: [
      "React Native",
      "TypeScript",
      "SQLite",
      "React Navigation",
      "Context API",
    ],
    repoUrl: "https://github.com/MofaggolHoshen/habito",
  },
  {
    id: "multi-tenant-http-client-factory",
    title: "Multi-Tenant HttpClientFactory",
    description:
      "A .NET library that extends IHttpClientFactory for multi-tenant apps — resolves the current tenant from headers, subdomains, or JWT claims, loads per-tenant config (endpoints, certificates, timeouts), and serves pooled HttpClient instances with hot-reload support.",
    tags: [
      ".NET",
      "C#",
      "Library",
      "Multi-tenancy",
      "HttpClient",
      "Azure Key Vault",
    ],
    repoUrl:
      "https://github.com/MofaggolHoshen/multi-tenant-http-client-factory",
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
    tags: [
      "ASP.NET Core 9",
      "C#",
      "JWT",
      "Entity Framework Core",
      "SQL Server",
      "xUnit",
    ],
    repoUrl: "https://github.com/MofaggolHoshen/dotnet-auth-service",
  },
];

export const SKILLS: Skill[] = [
  // Frontend
  { label: "HTML5 / CSS3", category: "frontend" },
  { label: "JavaScript / jQuery", category: "frontend" },
  { label: "TypeScript", category: "frontend" },
  { label: "React", category: "frontend" },
  { label: "React Native", category: "frontend" },
  { label: "Angular", category: "frontend" },
  { label: "Blazor", category: "frontend" },
  { label: "Tailwind CSS", category: "frontend" },
  { label: "Bootstrap", category: "frontend" },
  // Backend
  { label: "C# / .NET", category: "backend" },
  { label: "ASP.NET Core 8/9/10", category: "backend" },
  { label: "Entity Framework Core", category: "backend" },
  { label: "REST APIs", category: "backend" },
  { label: "OAuth2 / JWT", category: "backend" },
  { label: "WPF / MVVM", category: "backend" },
  { label: "MS SQL / PostgreSQL", category: "backend" },
  { label: "MongoDB / Redis", category: "backend" },
  { label: "RabbitMQ / Azure Service Bus", category: "backend" },
  // Tooling & DevOps
  { label: "Docker", category: "tooling" },
  { label: "Azure DevOps / Pipelines", category: "tooling" },
  { label: "Git", category: "tooling" },
  { label: "xUnit / Unit Testing", category: "tooling" },
  { label: "PowerShell / CLI", category: "tooling" },
  // Architecture & Cloud
  { label: "CQRS / MediatR", category: "other" },
  { label: "Saga Pattern", category: "other" },
  { label: "Microservices", category: "other" },
  { label: "SOLID / Design Patterns", category: "other" },
  { label: "Azure (Functions, API Mgmt, VMs)", category: "other" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-quipu",
    company: "Quipu GmbH",
    role: "Software Developer",
    period: "May 2018 – Present",
    description:
      "Design and develop full-stack applications using C#, ASP.NET Core 8, Blazor, and Entity Framework Core. Build and maintain microservices and REST APIs on Microsoft Azure. Apply CQRS with MediatR, Saga orchestration patterns, Redis caching, and RabbitMQ messaging. Implement OAuth2/JWT authentication, Docker containerization, and CI/CD via Azure Pipelines. Conduct code reviews and mentor junior developers in an Agile team.",
    tags: [
      "C#",
      "ASP.NET Core",
      "Blazor",
      "Azure",
      "CQRS",
      "MediatR",
      "Docker",
      "Redis",
      "RabbitMQ",
    ],
  },
  {
    id: "exp-daenet",
    company: "Daenet GmbH",
    role: "Software Developer (Working Student)",
    period: "Jul 2016 – Apr 2018",
    description:
      "Developed IoT REST APIs and cloud integration tools on the Azure Cloud Platform using .NET Core 2.0. Built the UI for Gateway Management using Angular, Bootstrap, and HTML5. Worked on an SDK for IoT Edge module development and device connectivity.",
    tags: ["C#", ".NET Core", "Azure IoT", "Angular", "Bootstrap", "REST API"],
  },
  {
    id: "exp-fra-uas",
    company: "Frankfurt University of Applied Sciences",
    role: "Teaching Assistant",
    period: "Nov 2015 – Dec 2017",
    description:
      "Assisted in teaching .NET and the Azure Durable Task Framework. Guided student projects in machine learning and object recognition for HoloLens.",
    tags: [".NET", "Azure", "Machine Learning", "HoloLens"],
  },
  {
    id: "exp-ipvision",
    company: "IPVision Canada Inc.",
    role: "Customer Support Engineer",
    period: "Dec 2012 – Jul 2013",
    description:
      "Delivered technical support and issue resolution for network and software clients in Dhaka, Bangladesh.",
    tags: ["Technical Support", "Networking"],
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
