export type Project = {
  number: string;
  title: string;
  type: string;
  summary: string;
  metric: string;
  technologies: string;
  color: string;
  href?: string;
  linkLabel?: string;
  status?: string;
};

export const profile = {
  name: "Supakorn Udomsintuwat",
  initials: "SU",
  role: "Full Stack Software Engineer",
  location: "Chiang Mai, Thailand",
  email: "supakornboon5039@gmail.com",
  phone: "+66808656423",
  phoneDisplay: "+66 80 865 6423",
  resume: "/Supakorn-Udomsintuwat-Resume.pdf",
  intro:
    "I take complex products from architecture to production—across high-volume data platforms, multilingual web applications, and the infrastructure that keeps them reliable.",
  about:
    "I work across React and TypeScript frontends, Laravel and Go services, PostgreSQL data systems, and cloud delivery. My focus is practical engineering: understand the constraint, measure the bottleneck, make the system simpler, and leave behind code the next person can trust.",
  availability: "Full Stack Engineer · Chiang Mai, Thailand",
  socials: {
    github: "https://github.com/supakorn5039-boon",
  },
  highlights: [
    { value: "100M+", label: "production records" },
    { value: "1–2M", label: "events processed daily" },
    { value: "<1 sec", label: "search latency, down from 10+ sec" },
    { value: "10 wks", label: "from requirements to production" },
  ],
  skillGroups: [
    {
      number: "01",
      title: "Frontend",
      items: "React 19, Next.js, TypeScript, TanStack Query, Zustand, Tailwind CSS, shadcn/ui",
    },
    {
      number: "02",
      title: "Backend & Data",
      items: "Go, Gin, Laravel, GORM, REST APIs, PostgreSQL, TimescaleDB, Redis, Elasticsearch",
    },
    {
      number: "03",
      title: "Cloud & Delivery",
      items: "AWS EC2/RDS, Cloudflare R2, Docker, Kubernetes, nginx, GitHub Actions, GitLab CI",
    },
    {
      number: "04",
      title: "Quality & Operations",
      items: "Playwright, SonarQube, ELK, Linux, CI/CD, performance analysis, guarded migrations",
    },
  ],
  experience: [
    {
      period: "Jan 2026 — Now",
      company: "FireExit Cooperation Co., Ltd.",
      role: "Full Stack Software Developer",
      summary:
        "Own the Laravel and React application for CIB Vision end to end—from ingestion and search to access control, testing, containers, and Kubernetes delivery.",
    },
    {
      period: "Oct 2024 — Dec 2025",
      company: "FireExit Cooperation Co., Ltd.",
      role: "Software Developer, Frontend",
      summary:
        "Built reusable React foundations and real-time interfaces for industrial IoT, network monitoring, telemetry, vehicle tracking, utilities, and enterprise scheduling.",
    },
    {
      period: "Jan 2024 — Sep 2024",
      company: "Ocare Health Hub Co., Ltd.",
      role: "Software Engineer, Frontend",
      summary:
        "Delivered accessible React and Next.js clinician experiences for patient reports, medical history, diagnostic results, and record synchronization.",
    },
  ],
  projects: [
    {
      number: "01",
      title: "CIB Vision",
      type: "Government intelligence platform",
      summary:
        "A high-volume face-detection platform serving 1,800 cameras across 3,700 police units, with secure server-side access control and production-safe observability.",
      metric: "100M+ records · 1–2M events/day",
      technologies: "Laravel · React · TimescaleDB · Redis · Kubernetes",
      color: "coral",
      status: "Confidential production system",
    },
    {
      number: "02",
      title: "Wealthy Prime Estate",
      type: "Platform owner · full stack",
      summary:
        "A multilingual property-brokerage platform independently taken from requirements and architecture to production handover in approximately ten weeks.",
      metric: "~$30/month production infrastructure",
      technologies: "Go · Gin · React 19 · PostgreSQL · AWS · R2",
      color: "lime",
      href: "https://wealthyprimeestate.com",
      linkLabel: "Visit live platform",
    },
    {
      number: "03",
      title: "Search at production scale",
      type: "Performance engineering",
      summary:
        "Reworked indexing and aggregate-backed time-bucket searches on real production data, turning a critical person search from 10+ seconds into a sub-second interaction.",
      metric: "Over 10× faster search",
      technologies: "PostgreSQL · TimescaleDB · Query planning",
      color: "blue",
      status: "Production performance case",
    },
    {
      number: "04",
      title: "SaaS Task Management",
      type: "Open-source architecture build",
      summary:
        "A multi-user Go and React application built around production patterns: reversible migrations, typed errors, optimistic UI, RBAC, health checks, graceful shutdown, and full-stack CI.",
      metric: "Real PostgreSQL tests · full-stack CI",
      technologies: "Go · React 19 · TypeScript · PostgreSQL · Docker",
      color: "violet",
      href: "https://github.com/supakorn5039-boon/saas-task-management",
      linkLabel: "Explore source",
    },
  ] as Project[],
  education: {
    degree: "Bachelor of Engineering",
    field: "Information Systems and Network Engineering",
    school: "Chiang Mai University · International Program",
    score: "CMU E-Graduate: 78/100",
  },
  certifications: [
    "Full-Stack Development — LinkedIn Learning",
    "Cloud Security & Cybersecurity Essentials — Cisco",
  ],
  languages: ["Thai — Native", "English — Upper-Intermediate (B2)"],
};
