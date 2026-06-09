export const siteConfig = {
  name: "Parvez Shaik",
  title: "Salesforce Developer",
  tagline:
    "Apex, LWC, integrations, and CI/CD for CRM platforms serving 5,000+ users, plus Agentforce and Data Cloud",
  email: "parvezshaik3008@gmail.com",
  phone: "+1 (930) 904-4515",
  location: "Bloomington, Indiana | Open to relocate (U.S.)",
  website: "https://www.parvezshaik.com",
  linkedin: "https://www.linkedin.com/in/parvezshaik44/",
  github: "https://github.com/ParvezSK3",
  trailhead: "https://www.salesforce.com/trailblazer/parvez",
  availability: "Open to Salesforce Opportunities",
  /** Place PDF in public/parvez-shaik-resume-sd.pdf */
  resumeUrl: "/parvez-shaik-resume-sd.pdf",
  resumeDownloadName: "Parvez_Shaik_Resume.pdf",
};

export const experienceSection = {
  title: "Professional experience",
  description:
    "Salesforce and Service Cloud delivery at Cognizant, AI engineering at MyEdMaster, and graduate study at Indiana University.",
};

export const aboutContent = {
  label: "About",
  title: "Salesforce developer across CRM, Service Cloud & AI",
  lead: "Three-plus years on CRM platforms for 5,000+ users, with Apex, LWC, release automation, Data Cloud, and Agentforce builds teams can ship with confidence.",
  bioParagraphs: [
    "I work across Apex, LWC, Flows, Platform Events, REST APIs, release automation, Data Cloud, and Salesforce security. At Cognizant I fixed slow components for 5,000+ users (27.8% speed gain, 19.6% fewer SLA breaches), migrated 22 Visualforce pages to LWC for 2.3x faster loads, and built Service Cloud case solutions with strong test coverage.",
    "I support CI/CD with Gearset, Git, Jenkins, and Salesforce DX, and I validate Permission Sets, sharing, and field-level security before UAT so Sales Cloud and Service Cloud changes land cleanly. Agentforce work includes Prompt Builder, RAG, and Einstein Trust Layer, including a support agent with a 63.9% auto-resolution rate.",
    "I am a four-time Salesforce certified Trailblazer, active on Trailhead, and completing an MS in Computer Science at Indiana University Bloomington (May 2026). I bring platform depth together with hands-on integration, data, and AI delivery.",
  ],
  proofPoints: [
    { label: "Experience", value: "3+ years on Salesforce CRM" },
    { label: "Scale", value: "5,000+ users on production CRM" },
    { label: "Modernization", value: "2.3x faster loads after LWC migration" },
    { label: "Credentials", value: "4 Salesforce certifications" },
  ],
  focusAreas: [
    {
      title: "CRM & Service Cloud",
      description:
        "I build workflows, case automation, and consoles with Apex, LWC, Flows, triggers, and Approval Processes. Recent work includes case triage flows, Service Cloud consoles with SLA routing, and integrations that cut manual case review and overdue follow-up in test scenarios.",
      highlights: ["Sales & Service Cloud", "Case automation", "Apex & LWC"],
    },
    {
      title: "Integrations & DevOps",
      description:
        "I connect Salesforce to payment, ERP, and marketing systems with REST APIs, Named Credentials, OAuth, External Services, and Salesforce Connect. I support Salesforce DX, Git, Gearset, Jenkins, and deployment automation to reduce release rework and keep environments stable.",
      highlights: ["REST & OAuth", "Gearset & Jenkins", "Salesforce DX"],
    },
    {
      title: "AI & platform security",
      description:
        "I design Agentforce solutions with Prompt Builder, Data Cloud, RAG, and Einstein Trust Layer controls. I also review Permission Sets, sharing rules, and FLS before UAT so AI and CRM changes stay secure and testable.",
      highlights: ["Agentforce & RAG", "Data Cloud", "Trust Layer & FLS"],
    },
  ],
};

/** @deprecated Use aboutContent.bioParagraphs for the About section */
export const summary = [aboutContent.lead, ...aboutContent.bioParagraphs].join(" ");

export const skillCategories = [
  {
    title: "Certifications",
    skills: [
      "Platform Developer I",
      "Administrator",
      "Platform App Builder",
      "Agentforce Specialist",
    ],
  },
  {
    title: "Salesforce Clouds",
    skills: [
      "Sales Cloud",
      "Service Cloud",
      "Experience Cloud",
      "Data Cloud",
    ],
  },
  {
    title: "Salesforce Development",
    skills: [
      "Apex",
      "LWC",
      "Triggers",
      "Test Classes",
      "Aura",
      "Visualforce",
      "Batch & Scheduler",
    ],
  },
  {
    title: "Automation & Platform",
    skills: [
      "Flows",
      "Platform Events",
      "Validation Rules",
      "Process Builder",
      "Approval Processes",
    ],
  },
  {
    title: "Integrations & APIs",
    skills: [
      "REST APIs",
      "SOAP APIs",
      "Named Credentials",
      "OAuth",
      "External Services",
      "Salesforce Connect",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Salesforce DX",
      "Gearset",
      "Git",
      "Jenkins",
      "CI/CD",
      "Deployment Automation",
    ],
  },
  {
    title: "Data & Security",
    skills: [
      "SOQL / SOSL",
      "Data Loader",
      "ETL",
      "Permission Sets",
      "Sharing Rules",
      "Field-Level Security",
    ],
  },
  {
    title: "AI & Data Cloud",
    skills: [
      "Agentforce",
      "Prompt Builder",
      "Einstein Trust Layer",
      "Generative AI",
      "RAG",
      "Data Cloud",
    ],
  },
];

export const experience = [
  {
    role: "Software Developer Intern",
    company: "MyEdMaster",
    period: "Jun 2025 to Aug 2025",
    location: "Herndon, VA",
    category: "AI Engineering",
    accent: "text-violet-400",
    glow: "from-violet-500/20",
    highlights: [
      "Built a Python-based AI content pipeline using MySQL, Redis, and GraphRAG; added AutoGen agents to the review flow and cut manual evaluation time by 23%.",
      "Improved LLM retrieval with LlamaIndex and SpaCy, supporting 2,800+ assessment items and raising content relevancy from 72% to 83%.",
      "Deployed a Flask backend on AWS EC2 with Docker and Apache; fixed 4 recurring deployment issues and improved model evaluation speed by 18%.",
    ],
  },
  {
    role: "Senior Salesforce Developer",
    company: "Cognizant",
    period: "Sep 2022 to Apr 2024",
    location: "India",
    category: "Salesforce",
    accent: "text-brand-400",
    glow: "from-brand-500/25",
    highlights: [
      "Fixed slow Apex and LWC components in a CRM used by 5,000+ users, improving speed by 27.8% and reducing SLA breaches by 19.6%.",
      "Migrated 22 Visualforce pages to LWC after reviewing support issues; improved page load speed 2.3x and cut technical debt by 41.3%.",
      "Built Service Cloud case solutions with Apex Triggers, Flows, Platform Events, and Approval Processes, reducing manual effort by 33.7% at 92.4% Apex test coverage.",
      "Supported CI/CD with Gearset, Git, Jenkins, Salesforce DX, and deployment automation, reducing release-related issues by 21.4%.",
      "Validated Permission Sets, Sharing Rules, role hierarchy, and FLS before UAT for Sales Cloud and Service Cloud changes, reducing access-related rework during testing.",
    ],
  },
  {
    role: "Salesforce Developer",
    company: "Cognizant",
    period: "Jan 2021 to Sep 2022",
    location: "India",
    category: "Salesforce",
    accent: "text-brand-400",
    glow: "from-brand-500/25",
    highlights: [
      "Built CRM workflows for 3,180 users using Apex, LWC, Aura, and Validation Rules, improving process efficiency by 26.7%.",
      "Integrated Salesforce with payment, ERP, and marketing systems via REST APIs, Named Credentials, and OAuth; supported External Services and Salesforce Connect.",
      "Reduced reconciliation time from 3.1 hours to 2.6 hours by improving external data flow and API checks.",
      "Moved delayed CRM updates into Apex Batch and Scheduler jobs, reducing manual follow-up by 17.8%.",
      "Supported data cleanup with Data Loader, ETL checks, SOQL, and SOSL; manual data errors fell by 18.9% while SLA compliance rose by 14.2%.",
    ],
  },
];

export const projectsSection = {
  title: "Featured work",
  description:
    "Case automation, Service Cloud consoles, release stability, and Agentforce triage with measurable outcomes.",
};

export const projects = [
  {
    id: "crm-case-automation",
    title: "CRM Case Automation & Release Stability",
    period: "Enterprise delivery",
    featured: true,
    accent: "text-brand-400",
    glow: "from-brand-500/30",
    tech: [
      "Apex",
      "LWC",
      "Flows",
      "Platform Events",
      "Permission Sets",
      "REST APIs",
      "Salesforce DX",
      "Git",
      "Jenkins",
    ],
    metrics: [
      { label: "Manual case review", value: "−29.4%" },
      { label: "Release rework", value: "−18%" },
    ],
    demoUrl:
      "https://parvezsk3.github.io/crm-case-automation-release-stability/",
    description:
      "Built a case triage flow using LWC, Apex, SOQL, Flows, Platform Events, and Permission Sets, reducing manual case review steps by 29.4% in test scenarios. Connected an external status service through REST APIs and added validation checks before Salesforce DX, Git, and Jenkins deployments, cutting release rework by 18%.",
  },
  {
    id: "service-case-console",
    title: "Service Case Automation and Support Console",
    period: "Service Cloud",
    featured: false,
    accent: "text-cyan-400",
    glow: "from-cyan-500/25",
    tech: [
      "Apex",
      "LWC",
      "Flows",
      "Platform Events",
      "REST APIs",
      "Named Credentials",
      "Batch Apex",
      "Queueable Apex",
    ],
    metrics: [
      { label: "Manual case review", value: "−31.2%" },
      { label: "Overdue follow-up", value: "−22.8%" },
    ],
    demoUrl:
      "https://parvezsk3.github.io/service-case-automation-support-console/",
    description:
      "Built a Service Cloud case console with LWC, Apex, SOQL, Flows, Apex Triggers, and Test Classes, reducing manual case review by 31.2% in test scenarios. Added SLA routing, REST status lookup, and integration logs with Custom Metadata, Platform Events, Batch and Queueable Apex, Named Credentials, OAuth, Data Loader, and ETL checks, cutting overdue case follow-up time by 22.8%.",
  },
  {
    id: "case-triage",
    title: "AI-Driven Case Triage & Resolution System",
    period: "Agentforce",
    featured: false,
    accent: "text-violet-400",
    glow: "from-violet-500/25",
    tech: [
      "Agentforce",
      "Prompt Builder",
      "Generative AI",
      "RAG",
      "Data Cloud",
      "Einstein Trust Layer",
      "Apex",
      "LWC",
      "REST APIs",
    ],
    metrics: [{ label: "Average handling time", value: "−24.6%" }],
    demoUrl: "https://parvezsk3.github.io/ai-driven-case-triage-resolution/",
    description:
      "Built an Agentforce case triage system with Prompt Builder, Generative AI, RAG, Apex, LWC, and Flows, with Einstein Trust Layer controls for sensitive data. Pulled CRM context from Data Cloud through REST APIs and surfaced case recommendations in a custom LWC, cutting average handling time by 24.6%.",
  },
];

export const certifications = [
  {
    id: "platform-developer-i",
    name: "Salesforce Certified Platform Developer I",
    shortName: "Platform Developer I",
    issuer: "Salesforce",
    date: "Aug 2025",
    credentialImage: "/certifications/platform-developer-i.png",
    learned: [
      "Apex triggers, batch jobs, schedulers, and test classes with governor-limit awareness.",
      "LWC composition, wire adapters, and Apex-backed APIs for Lightning experiences.",
      "SOQL, DML, security (sharing, FLS), and debugging in enterprise-style scenarios.",
    ],
  },
  {
    id: "platform-administrator",
    name: "Salesforce Certified Administrator",
    shortName: "Administrator",
    issuer: "Salesforce",
    date: "Jun 2025",
    credentialImage: "/certifications/platform-administrator.png",
    learned: [
      "Org setup, users, profiles, permission sets, and role hierarchies for secure access.",
      "Standard and custom objects, page layouts, and productivity features for end users.",
      "Data management, imports, and core automation from an administrator's perspective.",
    ],
  },
  {
    id: "platform-app-builder",
    name: "Salesforce Certified Platform App Builder",
    shortName: "Platform App Builder",
    issuer: "Salesforce",
    date: "Jul 2025",
    credentialImage: "/certifications/platform-app-builder.png",
    learned: [
      "Declarative data modeling, apps, and Lightning record pages tailored to business processes.",
      "Flows, validation rules, and automation design without over-relying on custom code.",
      "Reporting, dashboards, and app deployment patterns for maintainable solutions.",
    ],
  },
  {
    id: "agentforce-specialist",
    name: "Salesforce Certified Agentforce Specialist",
    shortName: "Agentforce Specialist",
    issuer: "Salesforce",
    date: "2025",
    credentialImage: "/certifications/agentforce-specialist.png",
    learned: [
      "Designing Agentforce agents, topics, and actions grounded in CRM context.",
      "Prompt Builder, Einstein Trust Layer, and safe generative AI on the Salesforce platform.",
      "Connecting Data Cloud and retrieval patterns for accurate, measurable agent outcomes.",
    ],
  },
];

export type Certification = (typeof certifications)[number];

export const educationSection = {
  title: "Academic journey",
  description:
    "Graduate work in computer science at Indiana University and engineering foundations from India.",
};

export const education = [
  {
    id: "iu-ms",
    badge: "Graduate",
    program: "MS in Computer Science",
    school: "Indiana University Bloomington",
    period: "Aug 2024 to May 2026",
    location: "Bloomington, Indiana",
    status: "Graduated May 2026",
    accent: "text-sky-400",
    glow: "from-sky-500/25",
    highlightLabels: ["Academics", "Research & projects", "Platform & AI"],
    highlights: [
      "Coursework in AI, data systems, and software engineering",
      "Applied research alongside Salesforce and Agentforce projects",
      "Built production-style AI pipelines and platform integrations",
    ],
  },
  {
    id: "gvp-btech",
    badge: "B.Tech",
    program:
      "Bachelor of Technology in Computer Science & Engineering",
    school: "Gayatri Vidya Parishad College of Engineering",
    period: "Aug 2017 to Apr 2021",
    location: "Visakhapatnam, Andhra Pradesh, India",
    accent: "text-amber-400",
    glow: "from-amber-500/20",
    highlightLabels: ["Core curriculum", "Engineering depth", "Achievement"],
    highlights: [
      "Core CS: algorithms, OS, databases, and software engineering",
      "Programming fundamentals that underpin Apex and LWC today",
      "Strong analytical and problem-solving focus",
    ],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
