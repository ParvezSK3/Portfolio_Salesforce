"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  CheckCircle2,
  Code2,
  MapPin,
} from "lucide-react";
import { Section } from "@/components/Section";
import { experience, experienceSection } from "@/data/portfolio";

const categoryIcons: Record<string, typeof Briefcase> = {
  Salesforce: Code2,
};

function companyInitial(company: string) {
  return company
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title={experienceSection.title}
      description={experienceSection.description}
      className="border-t border-slate-800/40"
    >
      <motion.div className="relative">
        <motion.div
          className="absolute left-[1.65rem] top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-brand-500/50 via-slate-700/80 to-transparent md:block"
          aria-hidden
        />

        <motion.div className="space-y-6 md:space-y-8">
          {experience.map((job, index) => {
            const Icon = categoryIcons[job.category ?? ""] ?? Briefcase;
            const accent = job.accent ?? "text-brand-400";
            const glow = job.glow ?? "from-brand-500/20";
            const initials = companyInitial(job.company);

            return (
              <motion.article
                key={`${job.company}-${job.role}-${job.period}`}
                className="group relative md:pl-14"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <motion.div className="absolute left-0 top-6 hidden md:flex md:flex-col md:items-center">
                  <motion.div
                    className={`relative z-10 flex size-[3.25rem] items-center justify-center rounded-2xl border border-slate-700/90 bg-slate-950 font-mono text-xs font-bold tracking-tight ${accent} shadow-[0_0_20px_-4px_rgba(59,130,246,0.4)]`}
                    whileHover={{ scale: 1.06 }}
                  >
                    {initials}
                  </motion.div>
                </motion.div>

                <motion.div
                  className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/70 to-slate-950/90 transition hover:border-slate-600"
                  whileHover={{ y: -2 }}
                >
                  <motion.div
                    className={`pointer-events-none absolute -right-12 -top-12 size-48 rounded-full bg-gradient-to-br ${glow} to-transparent opacity-40 blur-3xl transition group-hover:opacity-70`}
                  />
                  <motion.div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand-500 via-brand-500/30 to-transparent" />

                  <motion.div className="relative flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:p-6">
                    <motion.div className="flex gap-4 md:hidden">
                      <motion.div
                        className={`flex size-12 shrink-0 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-950 font-mono text-xs font-bold ${accent}`}
                      >
                        {initials}
                      </motion.div>
                      <motion.div className="min-w-0">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-950/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${accent}`}
                        >
                          <Icon className="size-3" />
                          {job.category}
                        </span>
                        <h3 className="mt-2 text-lg font-semibold text-white">
                          {job.role}
                        </h3>
                        <p className="mt-0.5 text-sm text-brand-400">
                          {job.company}
                        </p>
                      </motion.div>
                    </motion.div>

                    <motion.div className="hidden min-w-0 flex-1 md:block">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${accent}`}
                      >
                        <Icon className="size-3" />
                        {job.category}
                      </span>
                      <h3 className="mt-3 text-xl font-semibold text-white">
                        {job.role}
                      </h3>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-brand-400">
                        <Building2 className="size-3.5 opacity-80" />
                        {job.company}
                      </p>
                    </motion.div>

                    <motion.div className="flex shrink-0 flex-wrap items-center gap-2 sm:flex-col sm:items-end sm:gap-1.5 sm:text-right">
                      <span className="rounded-lg border border-slate-700/70 bg-slate-950/80 px-2.5 py-1 text-xs font-medium text-slate-300">
                        {job.period}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="size-3 shrink-0" />
                        {job.location}
                      </span>
                    </motion.div>
                  </motion.div>

                  <motion.ul className="relative grid gap-2 border-t border-slate-800/60 bg-slate-950/30 px-5 py-4 sm:grid-cols-2 sm:px-6 sm:py-5">
                    {job.highlights.map((point, i) => {
                      const spansFullRow =
                        job.highlights.length % 2 === 1 &&
                        i === job.highlights.length - 1;

                      return (
                        <motion.li
                          key={point}
                          className={`flex gap-3 rounded-lg border border-slate-800/50 border-l-2 border-l-brand-500/50 bg-slate-900/40 py-2.5 pl-3 pr-3 text-sm leading-relaxed text-slate-400 transition group-hover:border-slate-700/60 group-hover:border-l-brand-400/70 ${spansFullRow ? "sm:col-span-2" : ""}`}
                        >
                          <CheckCircle2
                            className={`mt-0.5 size-4 shrink-0 ${accent}`}
                            strokeWidth={1.75}
                          />
                          {point}
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </Section>
  );
}
