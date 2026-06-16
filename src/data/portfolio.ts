export const siteConfig = {
  name: "Parvez Shaik",
  title: "Salesforce Developer",
  tagline:
    "5+ years building Salesforce CRM solutions across Sales Cloud, Service Cloud, Data Cloud, integrations, releases, and Agentforce",
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
    "Salesforce delivery across MyEdMaster, Indiana University, IBM, and Cognizant, with CRM release, automation, integration, and support outcomes.",
};

export const aboutContent = {
  label: "About",
  title: "Salesforce developer across CRM, releases & AI",
  lead: "Salesforce Developer with 5+ years of experience building, supporting, and releasing CRM solutions across Sales Cloud, Service Cloud, Data Cloud, and Agentforce.",
  bioParagraphs: [
    "I work across Apex, LWC, Flows, Platform Events, REST and SOAP APIs, Salesforce DX, Gearset, Copado, Git, Jenkins, and Salesforce security. I have supported CRM platforms used by 5,000+ users, improved performance by 27.8%, migrated 22 Visualforce pages to LWC, and increased page load speed by 2.3 times.",
    "Recent work includes Salesforce release management at MyEdMaster, CRM business systems analysis at Indiana University, enterprise Salesforce development at IBM, and custom CRM workflows at Cognizant. I translate user needs into Salesforce stories, field changes, report updates, UAT notes, release checks, and stable deployments.",
    "I also build Agentforce and Data Cloud solutions with Prompt Builder, RAG, and Einstein Trust Layer controls, including an autonomous support agent that reached a 63.9% auto-resolution rate. I am a Salesforce certified Trailblazer with an MS in Computer Science from Indiana University Bloomington.",
  ],
  proofPoints: [
    { label: "Experience", value: "5+ years on Salesforce CRM" },
    { label: "Scale", value: "5,000+ users on production CRM" },
    { label: "Modernization", value: "2.3x faster loads after LWC migration" },
    { label: "Credentials", value: "3 Salesforce certifications" },
  ],
  focusAreas: [
    {
      title: "CRM & Service Cloud",
      description:
        "I build workflows, case automation, and support consoles with Apex, LWC, Aura, Flows, Validation Rules, Process Builder, Platform Events, and Approval Processes. Recent work includes case triage, SLA routing, report updates, UAT support, and reduced manual case review.",
      highlights: ["Sales & Service Cloud", "Case automation", "Apex, LWC & Flows"],
    },
    {
      title: "Integrations & DevOps",
      description:
        "I connect Salesforce to payment, ERP, marketing, AWS-hosted services, and internal REST endpoints with REST/SOAP APIs, Named Credentials, OAuth, External Services, and Salesforce Connect. I support Salesforce DX, Gearset, Copado, Git, Jenkins, runbooks, and deployment automation to reduce release rework.",
      highlights: ["REST, SOAP & OAuth", "Gearset, Copado & Jenkins", "Salesforce DX"],
    },
    {
      title: "AI & platform security",
      description:
        "I design Agentforce solutions with Prompt Builder, Data Cloud, RAG, and Einstein Trust Layer controls. I also review Profiles, Permission Sets, OWDs, sharing rules, role hierarchy, FLS, and Custom Metadata before UAT so AI and CRM changes stay secure and testable.",
      highlights: ["Agentforce & RAG", "Data Cloud", "Security & UAT"],
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
      "Lightning Web Components",
      "Apex Triggers",
      "Test Classes",
      "Aura Components",
      "Visualforce",
      "Asynchronous Apex",
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
      "Bulkification",
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
      "Hyperforce",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Salesforce DX",
      "Gearset",
      "Copado",
      "Git",
      "Jenkins",
      "CI/CD",
      "Deployment Automation",
    ],
  },
  {
    title: "Data & Security",
    skills: [
      "SOQL",
      "SOSL",
      "Data Loader",
      "ETL Tools",
      "Profiles",
      "Permission Sets",
      "OWDs",
      "Sharing Rules",
      "Role Hierarchy",
      "Field-Level Security",
      "Custom Metadata Types",
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
    role: "Salesforce Developer",
    company: "MyEdMaster",
    period: "Jun 2025 to May 2026",
    location: "Virginia, USA",
    category: "Salesforce",
    accent: "text-violet-400",
    glow: "from-violet-500/20",
    highlights: [
      "Managed Salesforce releases through Gearset by reviewing metadata changes for Apex, LWC, Flows, and permissions before deployment, reducing release rework by 18%.",
      "Investigated failed Salesforce API calls connected to AWS-hosted services and internal REST endpoints.",
      "Enhanced Apex/API error handling and logging for AWS-connected REST integrations, reducing repeat support tickets by 12%.",
      "Updated the Salesforce release runbook with Gearset deployment checks, Apex test runs, Flow activation steps, and sandbox refresh notes, cutting routine release reviews from 90 minutes to 65 minutes.",
    ],
  },
  {
    role: "CRM Business Systems Analyst",
    company: "Kelley School of Business, Indiana University",
    period: "Aug 2024 to Jun 2025",
    location: "Indiana, USA",
    category: "CRM",
    accent: "text-sky-400",
    glow: "from-sky-500/25",
    highlights: [
      "Translated CRM requests from admissions and student support users into Salesforce user stories, field changes, report updates, and UAT notes.",
      "Helped reduce back-and-forth during sprint review by 15%.",
      "Reviewed recurring CRM support requests and identified fixes in Flows, reports, and validation rules, reducing test workflow review time by 10-15%.",
      "Tracked UAT feedback for CRM changes and matched each issue to the right user story, field update, report, and permission request so the team could close defects faster before release.",
    ],
  },
  {
    role: "Senior Salesforce Developer",
    company: "IBM",
    period: "Sep 2022 to Jun 2024",
    location: "Bengaluru, India",
    category: "Salesforce",
    accent: "text-brand-400",
    glow: "from-brand-500/25",
    highlights: [
      "Fixed performance bottlenecks for a global Salesforce CRM supporting 5,000+ users by tuning Apex and LWC components, improving speed by 27% and reducing SLA breaches by 19.6%.",
      "Migrated 22 legacy Visualforce pages to LWC after reviewing support pain points and page load issues, improving page load speed by 2.3 times and cutting technical debt by 24.3%.",
      "Built case-handling automation with Flows and Platform Events, reducing manual effort by 34% while maintaining 92% Apex test coverage.",
      "Worked with QA and deployment teams to stabilize Salesforce releases using Gearset, Git, and Salesforce DX, reducing release-related issues by 21%.",
    ],
  },
  {
    role: "Salesforce Developer",
    company: "Cognizant",
    period: "Jan 2021 to Sep 2022",
    location: "Hyderabad, India",
    category: "Salesforce",
    accent: "text-brand-400",
    glow: "from-brand-500/25",
    highlights: [
      "Built custom CRM workflows for 3,180 users using Apex, LWC, and Aura, improving process efficiency by 27%.",
      "Integrated Salesforce with payment gateways, ERP, and marketing platforms through REST APIs, reducing reconciliation time from 3.1 hours to 2.6 hours.",
      "Moved delayed CRM updates into batch and scheduled Apex jobs, reducing manual follow-up by 18% and improving scheduled data update reliability.",
      "Automated routine operations using Flows, Process Builder, and Validation Rules; manual data errors fell by 19% while SLA compliance rose by 14%.",
    ],
  },
];

export const projectsSection = {
  title: "Featured work",
  description:
    "Case automation, Service Cloud consoles, release stability, and Agentforce triage with measurable Salesforce outcomes.",
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
      { label: "Manual case review", value: "-29%" },
      { label: "Release rework", value: "-18%" },
    ],
    demoUrl:
      "https://parvezsk3.github.io/crm-case-automation-release-stability/",
    description:
      "Built a case triage and escalation flow using LWC, Apex, Flows, Platform Events, and Permission Sets, reducing manual case review steps by 29% in test scenarios. Connected an external status service through REST APIs, surfaced case updates in a custom LWC, and added validation checks before Salesforce DX and Git deployments, reducing release rework by 18%.",
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
      { label: "Manual case review", value: "-31.2%" },
      { label: "Overdue follow-up", value: "-22%" },
    ],
    demoUrl:
      "https://parvezsk3.github.io/service-case-automation-support-console/",
    description:
      "Built a case console using LWC, Apex, SOQL, and Flows to create, route, update, and escalate support cases, reducing manual case review by 31.2% in test scenarios. Added SLA routing, REST API status lookup, and integration logs using Custom Metadata, Platform Events, Batch Apex, Queueable Apex, Named Credentials, and OAuth, cutting overdue case follow-up time by 22%.",
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
    metrics: [{ label: "Average handling time", value: "-24%" }],
    demoUrl: "https://parvezsk3.github.io/ai-driven-case-triage-resolution/",
    description:
      "Built an Agentforce case triage system to sort cases by intent and urgency, with Einstein Trust Layer controls to protect sensitive customer data. Pulled CRM context from Data Cloud through REST APIs and surfaced case recommendations in a custom LWC, cutting average handling time by 24%.",
  },
];

export const achievementsSection = {
  title: "Achievements",
  description:
    "Recognition that reflects technical problem solving, community readiness, and product thinking beyond day-to-day Salesforce delivery.",
};

export const achievements = [
  {
    id: "red-cross-cpr-aed",
    title: "Adult First Aid/CPR/AED Certification",
    issuer: "American Red Cross",
    period: "Completed May 2025 | Valid through May 2027",
    result: "Life-safety certification",
    summary:
      "Completed hands-on Adult First Aid/CPR/AED training through IU Recreational Sports at Indiana University Bloomington, adding practical emergency readiness alongside technical delivery skills.",
    highlights: [
      "Certified by American Red Cross Training Services.",
      "Completed through IU Recreational Sports Aquatics.",
      "Strengthened workplace and community readiness in critical situations.",
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
      "Built Pluto, an AI-driven idea prioritization agent for innovation teams evaluating ideas across ROI, feasibility, effort, risk, adoption, and strategic alignment.",
    highlights: [
      "Used a ReAct reasoning framework with transparent AI decision logic.",
      "Designed multi-dimensional scoring across 12 prioritization metrics.",
      "Built an interactive Streamlit dashboard with Plotly visualizations and adjustable weights.",
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
      "Built a public-impact platform in under 2.5 days to aggregate toxic chemical data and help citizens, researchers, and policymakers assess environmental health risks.",
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
    id: "platform-developer-i",
    name: "Salesforce Certified Platform Developer I",
    shortName: "Platform Developer I",
    issuer: "Salesforce",
    date: "Aug 2025",
    credentialImage: "/certifications/platform-developer-i.png",
    learned: [
      "Apex triggers, batch jobs, schedulers, and test classes with governor-limit awareness.",
      "LWC composition, wire adapters, and Apex-backed APIs for Lightning experiences.",
      "SOQL, DML, security, sharing, FLS, and debugging in enterprise-style scenarios.",
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
      "Standard and custom objects, page layouts, reports, and productivity features for end users.",
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
];

export type Certification = (typeof certifications)[number];

export const educationSection = {
  title: "Academic journey",
  description:
    "Graduate study in computer science at Indiana University with a Salesforce development foundation built through enterprise CRM delivery.",
};

export const education = [
  {
    id: "iu-ms",
    badge: "Graduate",
    program: "MS in Computer Science",
    school: "Indiana University Bloomington",
    period: "Aug 2024 to May 2026",
    location: "Bloomington, Indiana",
    status: "May 2026",
    accent: "text-sky-400",
    glow: "from-sky-500/25",
    highlightLabels: ["Academics", "CRM systems", "Platform & AI"],
    highlights: [
      "Coursework in computer science, data systems, and software engineering",
      "CRM business systems analysis with admissions and student support users",
      "Salesforce, Data Cloud, and Agentforce projects aligned with enterprise workflows",
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
      "Core CS: algorithms, operating systems, databases, and software engineering",
      "Programming fundamentals that underpin Apex, LWC, integrations, and CRM automation",
      "Strong analytical and problem-solving foundation",
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
