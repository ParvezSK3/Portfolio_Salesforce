"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Database,
  ExternalLink,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";
import { Section } from "@/components/Section";
import { projects, projectsSection } from "@/data/portfolio";

const projectIcons = [Sparkles, Bot, Database];

export function Projects() {
  return (
    <Section
      id="projects"
      label="Projects"
      title={projectsSection.title}
      description={projectsSection.description}
      className="border-t border-slate-800/60 bg-slate-900/20"
    >
      <div className="grid gap-4 sm:gap-5 lg:grid-cols-12 lg:gap-5">
        {projects.map((project, index) => {
          const Icon = projectIcons[index] ?? Sparkles;
          const accent = project.accent ?? "text-brand-400";
          const glow = project.glow ?? "from-brand-500/20";
          const isFeatured = project.featured === true;

          return (
            <motion.article
              key={project.id}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 to-slate-950/90 transition hover:border-slate-600 ${
                isFeatured ? "lg:col-span-12" : "lg:col-span-6"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -3 }}
            >
              <div
                className={`pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-gradient-to-br ${glow} to-transparent opacity-50 blur-3xl transition group-hover:opacity-80`}
              />
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand-500 via-brand-500/30 to-transparent" />

              <div
                className={`relative flex flex-1 flex-col p-5 sm:p-6 ${
                  isFeatured ? "lg:flex-row lg:gap-8" : ""
                }`}
              >
                <div
                  className={`min-w-0 ${isFeatured ? "lg:flex-1" : ""}`}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${accent}`}
                    >
                      <Icon className="size-3" />
                      {project.category ?? project.period}
                    </span>
                    {isFeatured && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-brand-500/30 bg-brand-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-300">
                        <Star className="size-3 fill-amber-400/80" />
                        Flagship
                      </span>
                    )}
                  </div>

                  <h3
                    className={`mt-4 font-semibold leading-snug text-white transition group-hover:text-brand-300 ${
                      isFeatured ? "text-xl sm:text-2xl" : "text-lg"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`mt-3 leading-relaxed text-slate-400 ${
                      isFeatured ? "text-sm sm:text-base" : "text-sm"
                    }`}
                  >
                    {project.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-md border border-slate-700/60 bg-slate-950/60 px-2 py-0.5 text-[11px] font-medium text-slate-400"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  {"demoUrl" in project && project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/80 px-4 py-2 text-sm font-semibold ${accent} transition hover:border-slate-500 hover:bg-slate-900`}
                      aria-label={`Open live demo for ${project.title}`}
                    >
                      <ExternalLink className="size-4" />
                      Live demo
                    </a>
                  )}
                </div>

                <div
                  className={`mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:mt-0 ${
                    isFeatured
                      ? "lg:w-[min(100%,220px)] lg:shrink-0 lg:flex-col"
                      : ""
                  }`}
                >
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex min-w-[8.5rem] flex-1 flex-col rounded-xl border border-slate-800/70 bg-slate-950/50 px-4 py-3 sm:min-w-[9.5rem]"
                    >
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-slate-500">
                        <TrendingUp className={`size-3 ${accent}`} />
                        {metric.label}
                      </span>
                      <span
                        className={`mt-1 text-2xl font-semibold tracking-tight ${accent}`}
                      >
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
