export const siteConfig = {
  name: "Parvez Shaik",
  title: "Salesforce Developer",
  tagline:
    "5+ years delivering Salesforce CRM development, automation, integrations, and release management across complex business environments",
  email: "parvezshaik3008@gmail.com",
  phone: "+1 (930) 904-4515",
  location: "Bloomington, Indiana | Open to relocate across the U.S.",
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
    "Salesforce development, CRM business analysis, release ownership, and platform delivery across Snowflake, Indiana University, IBM, and Cognizant.",
};

export const aboutContent = {
  label: "About",
  title: "Salesforce developer focused on CRM delivery and release reliability",
  lead: "Salesforce Developer with 5+ years of experience delivering CRM development, automation, integrations, and release management across enterprise Salesforce environments.",
  bioParagraphs: [
    "I work across Apex, LWC, Salesforce Flow, Platform Events, SOQL, REST APIs, Gearset, Git, Salesforce DX, CI/CD, metadata deployments, sandbox management, and post-deployment validation.",
    "My experience includes current Salesforce release and GTM workflow work at Snowflake, CRM business systems analysis at Indiana University, senior Salesforce development at IBM, and Salesforce development at Cognizant.",
    "I collaborate with developers, administrators, QA teams, business analysts, and stakeholders to clarify requirements, resolve integration and release issues, improve workflows, and strengthen platform reliability.",
  ],
  proofPoints: [
    { label: "Experience", value: "5+ years on Salesforce CRM" },
    { label: "Scale", value: "5,000+ users on production CRM" },
    { label: "Release review", value: "28% faster review cycle" },
    { label: "Credentials", value: "4 Salesforce certifications" },
  ],
  focusAreas: [
    {
      title: "CRM development",
      description:
        "Build and optimize Apex, LWC, Aura, Visualforce, SOQL, Apex Triggers, Salesforce Flow, Platform Events, Custom Metadata, and validation logic for CRM workflows.",
      highlights: ["Apex & LWC", "Salesforce Flow", "SOQL & triggers"],
    },
    {
      title: "Integrations and release work",
      description:
        "Support REST integrations, HTTP callouts, Named Credentials, OAuth, authentication troubleshooting, error handling, retry logic, integration logging, and metadata deployments.",
      highlights: ["REST & OAuth", "Gearset & Git", "Salesforce DX"],
    },
    {
      title: "Delivery and platform reliability",
      description:
        "Translate requirements into user stories, acceptance criteria, UAT notes, defect triage, release checks, rollback planning, and post-deployment validation.",
      highlights: ["UAT & defects", "Release management", "Agile delivery"],
    },
  ],
};

/** @deprecated Use aboutContent.bioParagraphs for the About section */
export const summary = [aboutContent.lead, ...aboutContent.bioParagraphs].join(" ");

export const skillCategories = [
  {
    title: "Salesforce Platform",
    skills: [
      "CRM",
      "Service Cloud",
      "Lightning Experience",
      "Agentforce",
      "Data Cloud",
      "Einstein Trust Layer",
      "Reports",
      "Dashboards",
    ],
  },
  {
    title: "Development & Automation",
    skills: [
      "Apex",
      "Apex Triggers",
      "Batch Apex",
      "Queueable Apex",
      "Scheduled Apex",
      "LWC",
      "Aura",
      "Visualforce",
      "SOQL",
      "Salesforce Flow",
      "Platform Events",
      "Custom Metadata",
      "Validation Rules",
    ],
  },
  {
    title: "Integrations & APIs",
    skills: [
      "REST APIs",
      "HTTP Callouts",
      "Named Credentials",
      "OAuth",
      "AWS Services",
      "ERP Integrations",
      "Payment Integrations",
      "Authentication",
      "Error Handling",
      "Retry Logic",
      "Integration Logging",
    ],
  },
  {
    title: "DevOps & Testing",
    skills: [
      "Gearset",
      "Git",
      "Salesforce DX",
      "CI/CD",
      "Metadata Deployments",
      "Apex Testing",
      "Automated Validation",
      "Sandbox Management",
      "Rollback Planning",
      "Post-Deployment Validation",
    ],
  },
  {
    title: "Architecture & Security",
    skills: [
      "Event-Driven Architecture",
      "Asynchronous Processing",
      "Bulkification",
      "Governor-Limit Optimization",
      "Performance Tuning",
      "Profiles",
      "Permission Sets",
      "SLA Automation",
    ],
  },
  {
    title: "Business Analysis & Delivery",
    skills: [
      "Requirements Gathering",
      "User Stories",
      "Acceptance Criteria",
      "Gap Analysis",
      "Process Mapping",
      "UAT",
      "Defect Triage",
      "Stakeholder Management",
      "Requirements Traceability",
      "Release Management",
      "Agile/Scrum",
    ],
  },
];

export const experience = [
  {
    role: "Salesforce Developer",
    company: "Snowflake",
    period: "Jun 2025 - Present",
    location: "Chicago, USA",
    category: "Salesforce",
    accent: "text-brand-400",
    glow: "from-brand-500/20",
    highlights: [
      "Reduced Salesforce release rework by 18% by governing GTM application deployments through Gearset, Git, Salesforce DX, and CI/CD.",
      "Decreased repeat support tickets by 12% by resolving Salesforce, cloud-hosted service, and REST API integration failures through response analysis, authentication troubleshooting, exception handling, retry logic, and integration logging.",
      "Cut release-review time by 28%, from 90 to 65 minutes, by standardizing Gearset deployment checks, automated Apex testing, Flow activation, and metadata validation.",
      "Coordinated releases with Salesforce developers, QA engineers, business analysts, and GTM stakeholders across sandbox, validation, rollback, and production verification activities.",
      "Improved GTM workflow reliability by developing and optimizing Apex, LWC, Salesforce Flow, and SOQL logic for lead, account, opportunity, and customer-service processes.",
    ],
  },
  {
    role: "CRM Business Systems Analyst",
    company: "Kelley School of Business, Indiana University",
    period: "Aug 2024 - Jun 2025",
    location: "Indiana, USA",
    category: "CRM",
    accent: "text-brand-400",
    glow: "from-brand-500/20",
    highlights: [
      "Reduced sprint-review clarification cycles by 15% by converting admissions and student-support CRM needs into Salesforce user stories, acceptance criteria, field updates, reports, and UAT documentation.",
      "Accelerated workflow reviews by 10% by diagnosing recurring CRM support issues with Salesforce administrators and QA analysts.",
      "Orchestrated UAT defect triage across admissions, support, Salesforce administrators, and QA while preserving issue-to-requirement traceability.",
      "Improved CRM data accuracy by 12% by identifying duplicate records, incomplete fields, and reporting inconsistencies and coordinating validation rules, field mappings, and corrective updates.",
    ],
  },
  {
    role: "Senior Salesforce Developer",
    company: "IBM",
    period: "Sep 2022 - Jun 2024",
    location: "Bengaluru, India",
    category: "Salesforce",
    accent: "text-brand-400",
    glow: "from-brand-500/25",
    highlights: [
      "Improved transaction performance and reduced SLA breaches by optimizing Apex and LWC components for a global Salesforce CRM serving 5,000+ users.",
      "Increased page-load speed 2.3x by migrating legacy Visualforce pages to LWC and removing deprecated components and duplicate code.",
      "Reduced manual case-handling effort by 34% by architecting Salesforce Flow and Platform Events automation for routing, escalation, status synchronization, and support workflow execution.",
      "Strengthened Apex test coverage by expanding automated test scenarios, validating case-processing logic, and coordinating defect resolution before production releases.",
      "Improved release stability by standardizing Gearset, Git, Salesforce DX, automated validation, conflict detection, and CI/CD practices with QA and deployment teams.",
    ],
  },
  {
    role: "Salesforce Developer",
    company: "Cognizant",
    period: "Jan 2021 - Sep 2022",
    location: "Hyderabad, India",
    category: "Salesforce",
    accent: "text-brand-400",
    glow: "from-brand-500/25",
    highlights: [
      "Improved CRM process completion by 27% by architecting Apex, LWC, Aura, SOQL, and Apex Trigger workflows for 3,180 users.",
      "Reduced reconciliation delays by integrating Salesforce with payment gateways, ERP, and marketing platforms through REST APIs, Named Credentials, OAuth, error handling, and secure authentication workflows.",
      "Decreased manual follow-up by 18% by reengineering delayed CRM updates through Batch Apex, Scheduled Apex, Queueable Apex, bulk processing, retry logic, and governor-limit optimization.",
      "Strengthened automation maintainability by migrating legacy Process Builder workflows to record-triggered Salesforce Flow and Validation Rules.",
      "Improved data quality and SLA execution by validating workflow logic, monitoring asynchronous jobs, and coordinating configuration updates with Salesforce administrators and operational stakeholders.",
    ],
  },
];

export const projectsSection = {
  title: "Featured work",
  description:
    "Resume-aligned Salesforce projects covering case automation, Agentforce triage, support consoles, integrations, and release validation.",
};

export const projects = [
  {
    id: "crm-case-automation",
    title: "CRM Case Automation & Release Stability",
    period: "CRM Automation",
    category: "CRM Automation",
    featured: true,
    accent: "text-brand-400",
    glow: "from-brand-500/30",
    tech: [
      "Apex",
      "LWC",
      "Salesforce Flow",
      "Platform Events",
      "Permission Sets",
      "REST APIs",
      "Salesforce DX",
      "Git",
    ],
    metrics: [
      { label: "Manual case review", value: "-29%" },
      { label: "Release rework", value: "-18%" },
    ],
    demoUrl:
      "https://parvezsk3.github.io/crm-case-automation-release-stability/",
    description:
      "Built a case-triage and escalation workflow using LWC, Apex, Salesforce Flow, and Platform Events, reducing manual case-review steps by 29% during testing. Integrated an external status service through REST APIs and a custom LWC, adding pre-deployment validation for Salesforce DX and Git to reduce release rework by 18%.",
  },
  {
    id: "case-triage",
    title: "AI-Driven Case Triage & Resolution System",
    period: "Agentforce",
    category: "Agentforce",
    featured: false,
    accent: "text-brand-400",
    glow: "from-brand-500/20",
    tech: [
      "Agentforce",
      "Data Cloud",
      "Einstein Trust Layer",
      "REST APIs",
      "Apex",
      "LWC",
    ],
    metrics: [{ label: "Average handling time", value: "-24%" }],
    demoUrl: "https://parvezsk3.github.io/ai-driven-case-triage-resolution/",
    description:
      "Built an Agentforce case-triage solution to classify customer cases by intent and urgency, with Einstein Trust Layer controls to protect sensitive customer data. Integrated CRM context from Data Cloud through REST APIs and displayed recommendations in a custom LWC, reducing average handling time by 24%.",
  },
  {
    id: "service-case-console",
    title: "Service Case Automation and Support Console",
    period: "Service Cloud",
    category: "Service Cloud",
    featured: false,
    accent: "text-brand-400",
    glow: "from-brand-500/20",
    tech: [
      "LWC",
      "Apex",
      "SOQL",
      "Salesforce Flow",
      "Platform Events",
      "REST APIs",
      "Named Credentials",
      "Salesforce DX",
    ],
    metrics: [
      { label: "Manual case review", value: "-31.2%" },
      { label: "Overdue follow-up", value: "-22%" },
    ],
    demoUrl:
      "https://parvezsk3.github.io/service-case-automation-support-console/",
    description:
      "Built a support case console using LWC, Apex, SOQL, and Salesforce Flow to create, route, update, and escalate cases, reducing manual review steps by 31.2% during testing. Implemented SLA-based routing, REST API status lookups, and integration logging using Custom Metadata, Platform Events, Batch Apex, Queueable Apex, Named Credentials, and OAuth, reducing overdue case follow-up time by 22%.",
  },
];

export const achievementsSection = {
  title: "Achievements",
  description:
    "Supplemental proof of technical problem solving, community readiness, and applied project work beyond the resume.",
};

export const achievements = [
  {
    id: "red-cross-cpr-aed",
    title: "Adult First Aid/CPR/AED Certification",
    issuer: "American Red Cross",
    period: "May 2025 - May 2027",
    result: "Life-safety certification",
    summary:
      "Completed hands-on Adult First Aid/CPR/AED training through IU Recreational Sports at Indiana University Bloomington.",
    highlights: [
      "Certified by American Red Cross Training Services.",
      "Completed through IU Recreational Sports Aquatics.",
      "Added practical emergency-readiness training outside technical work.",
    ],
    tags: ["CPR", "First Aid", "AED", "IU Bloomington"],
    proofLinks: [
      {
        label: "View certificate",
        href: "/achievements/red-cross-cpr-aed-certificate.png",
      },
    ],
  },
  {
    id: "team-pluto-luddy-2025",
    title: "Team Pluto - Luddy Hackathon 2025",
    issuer: "Luddy School of Informatics, Computing, and Engineering",
    period: "2025",
    result: "2nd Runner-Up",
    summary:
      "Built an idea-prioritization agent for product and innovation teams during Luddy Hackathon 2025.",
    highlights: [
      "Used ReAct reasoning with transparent decision logic.",
      "Evaluated ideas across ROI, feasibility, effort, risk, adoption, and strategic alignment.",
      "Built a Streamlit dashboard with Plotly visualizations and adjustable scoring weights.",
    ],
    tags: ["Python", "LangChain", "Ollama", "Streamlit", "Plotly", "ReAct"],
    proofLinks: [
      {
        label: "View proof",
        href: "/achievements/luddy-hackathon-2025-team-pluto.png",
      },
      {
        label: "Project demo",
        href: "https://lnkd.in/gRu7ZbzZ",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/ParvezSK3/project-pluto",
      },
    ],
  },
  {
    id: "indiana-toxicity-watch",
    title: "Indiana Toxicity Watch - Luddy Hackathon Third Edition",
    issuer: "Center of Distributed Confidential Computing",
    period: "Nov 2024",
    result: "1st Runner-Up",
    summary:
      "Built a public-impact platform to help assess environmental health risks using toxic chemical data.",
    highlights: [
      "Created search by zip code or city to check contamination risk.",
      "Mapped schools and contamination sites using geolocation APIs.",
      "Added time-series analysis to forecast contaminant presence over 10 years.",
    ],
    tags: ["Data Science", "Geolocation", "Forecasting", "Public Health", "Impact Tech"],
    proofLinks: [
      {
        label: "View proof",
        href: "/achievements/luddy-hackathon-third-edition-runner-up.png",
      },
      {
        label: "Submission",
        href: "https://lnkd.in/gszVG6WT",
      },
      {
        label: "Docs & data",
        href: "http://bit.ly/3ZtnnHo",
      },
    ],
  },
];

export const certifications = [
  {
    id: "agentforce-specialist",
    name: "Salesforce Certified Agentforce Specialist",
    shortName: "Agentforce Specialist",
    issuer: "Salesforce",
    date: "Jul 2026",
    credentialImage: "/certifications/agentforce-specialist.png",
    credentialId: "7946500",
    verificationUrl: "https://www.salesforce.com/trailblazer/parvez",
    learned: [
      "Agentforce concepts, agent planning, topics, actions, and deployment lifecycle.",
      "Prompt design, grounding, testing, and responsible generative AI practices.",
      "Data Cloud, Einstein Trust Layer, security, and agent performance monitoring.",
    ],
  },
  {
    id: "platform-developer-i",
    name: "Salesforce Certified Platform Developer I",
    shortName: "Platform Developer I",
    issuer: "Salesforce",
    date: "Aug 2025",
    credentialImage: "/certifications/platform-developer-i.png",
    credentialId: null,
    verificationUrl: "https://www.salesforce.com/trailblazer/parvez",
    learned: [
      "Apex, triggers, asynchronous processing, and test coverage.",
      "Lightning Web Components and Apex-backed Lightning experiences.",
      "SOQL, DML, security, sharing, FLS, and platform debugging.",
    ],
  },
  {
    id: "platform-app-builder",
    name: "Salesforce Certified Platform App Builder",
    shortName: "Platform App Builder",
    issuer: "Salesforce",
    date: "Jul 2025",
    credentialImage: "/certifications/platform-app-builder.png",
    credentialId: null,
    verificationUrl: "https://www.salesforce.com/trailblazer/parvez",
    learned: [
      "Declarative data modeling, Lightning pages, and app configuration.",
      "Flows, validation rules, reports, and dashboards.",
      "App deployment patterns for maintainable Salesforce solutions.",
    ],
  },
  {
    id: "platform-administrator",
    name: "Salesforce Certified Administrator",
    shortName: "Administrator",
    issuer: "Salesforce",
    date: "Jun 2025",
    credentialImage: "/certifications/platform-administrator.png",
    credentialId: null,
    verificationUrl: "https://www.salesforce.com/trailblazer/parvez",
    learned: [
      "Users, profiles, permission sets, and role hierarchy.",
      "Objects, page layouts, reports, dashboards, and productivity features.",
      "Data management, automation, and platform administration.",
    ],
  },
];

export type Certification = (typeof certifications)[number];

export const educationSection = {
  title: "Academic journey",
  description:
    "Graduate study in computer science at Indiana University Bloomington.",
};

export const education = [
  {
    id: "iu-ms",
    badge: "Graduate",
    program: "MS in Computer Science",
    school: "Indiana University Bloomington",
    period: "Aug 2024 - May 2026",
    location: "Bloomington, Indiana, USA",
    status: "Graduated May 2026",
    accent: "text-brand-400",
    glow: "from-brand-500/20",
    highlightLabels: ["Graduate study", "CRM delivery", "Platform work"],
    highlights: [
      "Graduate coursework in computer science",
      "CRM business systems analysis with admissions and student-support teams",
      "Salesforce delivery work alongside software engineering coursework",
    ],
  },
  {
    id: "gvp-btech",
    badge: "B.Tech",
    program:
      "Bachelor of Technology in Computer Science & Engineering",
    school: "Gayatri Vidya Parishad College of Engineering",
    period: "Aug 2017 - Apr 2021",
    location: "Visakhapatnam, Andhra Pradesh, India",
    accent: "text-brand-400",
    glow: "from-brand-500/20",
    highlightLabels: ["Core curriculum", "Engineering depth", "Foundation"],
    highlights: [
      "Core computer science foundations",
      "Programming, databases, and software engineering",
      "Analytical and problem-solving foundation for Salesforce development",
    ],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#certifications", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
