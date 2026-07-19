"use client";

import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { Section } from "@/components/Section";
import { education, educationSection } from "@/data/portfolio";

function schoolInitials(school: string) {
  return school
    .split(/\s+/)
    .filter((w) => w.length > 2 && /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Education() {
  return (
    <Section
      id="education"
      label="Education"
      title={educationSection.title}
      description={educationSection.description}
      className="border-t border-slate-800/60 bg-slate-900/20"
    >
      <div className="relative">
        <div
          className="absolute left-[1.65rem] top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-brand-500/40 via-brand-400/25 to-transparent md:block"
          aria-hidden
        />

        <motion.div className="space-y-6 md:space-y-8">
          {education.map((item, index) => {
            const accent = item.accent ?? "text-brand-400";
            const glow = item.glow ?? "from-brand-500/20";
            const initials = schoolInitials(item.school);

            return (
              <motion.article
                key={item.id}
                className="group relative md:pl-14"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <motion.div className="absolute left-0 top-6 hidden md:flex">
                  <motion.div
                    className={`relative z-10 flex size-[3.25rem] items-center justify-center rounded-2xl border border-slate-700/90 bg-slate-950 font-mono text-xs font-bold tracking-tight ${accent}`}
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
                    className={`pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-gradient-to-br ${glow} to-transparent opacity-50 blur-3xl transition group-hover:opacity-80`}
                  />
                  <motion.div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand-500/80 via-brand-500/20 to-transparent" />

                  <motion.div className="relative p-5 sm:p-6">
                    <motion.div className="flex flex-wrap items-start justify-between gap-3">
                      <motion.div className="flex gap-4 md:hidden">
                        <motion.div
                          className={`flex size-12 shrink-0 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-950 font-mono text-xs font-bold ${accent}`}
                        >
                          {initials}
                        </motion.div>
                        <motion.div className="min-w-0">
                          <span
                            className={`inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-950/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${accent}`}
                          >
                            <GraduationCap className="size-3" />
                            {item.badge}
                          </span>
                          <h3 className="mt-2 text-lg font-semibold leading-snug text-white sm:text-xl">
                            {item.program}
                          </h3>
                        </motion.div>
                      </motion.div>

                      <motion.div className="hidden min-w-0 flex-1 md:block">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${accent}`}
                        >
                          <GraduationCap className="size-3" />
                          {item.badge}
                        </span>
                        <h3 className="mt-3 text-xl font-semibold leading-snug text-white">
                          {item.program}
                        </h3>
                      </motion.div>

                      {item.status && (
                        <span className="inline-flex items-center gap-1 rounded-lg border border-brand-500/30 bg-brand-500/10 px-2.5 py-1 text-xs font-medium text-brand-300">
                          <Sparkles className="size-3" />
                          {item.status}
                        </span>
                      )}
                    </motion.div>

                    <p className="mt-3 text-base font-medium text-brand-400">
                      {item.school}
                    </p>

                    <motion.div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="size-3.5 shrink-0 text-slate-600" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-3.5 shrink-0 text-slate-600" />
                        {item.location}
                      </span>
                    </motion.div>

                    <motion.ul className="mt-5 grid gap-2 sm:grid-cols-3">
                      {item.highlights.map((point, i) => (
                        <motion.li
                          key={point}
                          className="rounded-lg border border-slate-800/60 bg-slate-950/40 px-3 py-2.5 text-sm leading-relaxed text-slate-400"
                        >
                          <span
                            className={`mb-1 block text-[10px] font-semibold uppercase tracking-wider ${accent}`}
                          >
                            {item.highlightLabels[i]}
                          </span>
                          {point}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
