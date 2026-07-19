"use client";

import { motion } from "framer-motion";
import {
  Award,
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
  { icon: LucideIcon; accent: string; glow: string; span: string }
> = {
  Certifications: {
    icon: Award,
    accent: "text-brand-400",
    glow: "from-brand-500/20",
    span: "sm:col-span-2 lg:col-span-2",
  },
  "Salesforce Platform": {
    icon: Cloud,
    accent: "text-brand-400",
    glow: "from-brand-500/20",
    span: "sm:col-span-2",
  },
  "Development & Automation": {
    icon: Workflow,
    accent: "text-brand-400",
    glow: "from-brand-500/25",
    span: "lg:row-span-2",
  },
  "Integrations & APIs": {
    icon: Plug,
    accent: "text-brand-400",
    glow: "from-brand-500/20",
    span: "",
  },
  "DevOps & Testing": {
    icon: GitBranch,
    accent: "text-brand-400",
    glow: "from-brand-500/20",
    span: "",
  },
  "Architecture & Security": {
    icon: Shield,
    accent: "text-brand-400",
    glow: "from-brand-500/20",
    span: "sm:col-span-2",
  },
  "Business Analysis & Delivery": {
    icon: Sparkles,
    accent: "text-brand-400",
    glow: "from-brand-500/20",
    span: "lg:col-span-2",
  },
};

const defaultMeta = {
  icon: Cloud,
  accent: "text-brand-400",
  glow: "from-brand-500/20",
  span: "",
};

function SkillsMarquee({ skills }: { skills: string[] }) {
  const track = [...skills, ...skills];

  return (
    <div className="relative -mt-4 mb-10 h-14 max-w-full overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-950/50 [contain:layout_paint]">
      <motion.div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-950 to-transparent"
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-slate-950 to-transparent"
        aria-hidden
      />
      <motion.div
        className="absolute left-0 top-1/2 flex w-max -translate-y-1/2 gap-3 px-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 55,
            ease: "linear",
          },
        }}
      >
        {track.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="shrink-0 rounded-full border border-slate-700/60 bg-slate-900/80 px-4 py-1.5 text-xs font-medium text-slate-300"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Skills() {
  const allSkills = skillCategories.flatMap((c) => c.skills);

  return (
    <Section
      id="skills"
      label="Skills"
      title="Technical expertise"
      description="Salesforce platform development, automation, integrations, DevOps, security, and delivery skills from the current resume."
      spacing="tight-top"
      className="bg-slate-900/20"
    >
      <SkillsMarquee skills={allSkills} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[auto_auto_auto]">
        {skillCategories.map((category, index) => {
          const meta = categoryMeta[category.title] ?? defaultMeta;
          const Icon = meta.icon;

          return (
            <motion.article
              key={category.title}
              className={`group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 backdrop-blur-sm transition hover:border-slate-700 ${meta.span}`}
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
