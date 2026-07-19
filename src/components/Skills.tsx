"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  GitBranch,
  Plug,
  Shield,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/Section";
import { skillCategories } from "@/data/portfolio";

const categoryMeta: Record<
  string,
  { icon: LucideIcon; accent: string; glow: string }
> = {
  "Salesforce Platform": {
    icon: Cloud,
    accent: "text-brand-400",
    glow: "from-brand-500/20",
  },
  "Development & Automation": {
    icon: Workflow,
    accent: "text-brand-400",
    glow: "from-brand-500/25",
  },
  "Integrations & APIs": {
    icon: Plug,
    accent: "text-brand-400",
    glow: "from-brand-500/20",
  },
  "DevOps & Testing": {
    icon: GitBranch,
    accent: "text-brand-400",
    glow: "from-brand-500/20",
  },
  "Architecture & Security": {
    icon: Shield,
    accent: "text-brand-400",
    glow: "from-brand-500/20",
  },
  "Business Analysis & Delivery": {
    icon: Sparkles,
    accent: "text-brand-400",
    glow: "from-brand-500/20",
  },
};

const defaultMeta = {
  icon: Cloud,
  accent: "text-brand-400",
  glow: "from-brand-500/20",
};

export function Skills() {
  return (
    <Section
      id="skills"
      label="Skills"
      title="Technical expertise"
      description="Salesforce platform development, automation, integrations, DevOps, security, and delivery skills from the current resume."
      spacing="tight-top"
      className="bg-slate-900/20"
    >
      <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => {
          const meta = categoryMeta[category.title] ?? defaultMeta;
          const Icon = meta.icon;

          return (
            <motion.article
              key={category.title}
              className="group relative h-full overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 backdrop-blur-sm transition hover:border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <motion.div
                className={`pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-gradient-to-br ${meta.glow} to-transparent opacity-60 blur-2xl transition group-hover:opacity-100`}
              />
              <div className="relative flex items-start gap-3">
                <motion.div
                  className={`flex size-10 shrink-0 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-950/80 ${meta.accent}`}
                  whileHover={{ scale: 1.05, rotate: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon className="size-5" strokeWidth={1.75} />
                </motion.div>
                <h3 className="pt-2 text-sm font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <ul className="relative mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 + skillIndex * 0.03 }}
                  >
                    <span className="inline-block rounded-lg border border-slate-700/60 bg-slate-950/60 px-2.5 py-1 text-xs text-slate-300 transition group-hover:border-slate-600 group-hover:text-white">
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
