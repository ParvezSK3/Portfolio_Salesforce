"use client";

import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  ExternalLink,
  HeartPulse,
  ShieldCheck,
  Trophy,
} from "lucide-react";
import { Section } from "@/components/Section";
import { achievements, achievementsSection } from "@/data/portfolio";

const achievementIcons = [HeartPulse, Trophy, ShieldCheck];

export function Achievements() {
  return (
    <Section
      id="achievements"
      label="Achievements"
      title={achievementsSection.title}
      description={achievementsSection.description}
      className="border-t border-slate-800/60"
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {achievements.map((achievement, index) => {
          const Icon = achievementIcons[index] ?? Award;

          return (
            <motion.article
              key={achievement.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/70 to-slate-950/90 p-5 transition hover:border-slate-600 sm:p-6"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -3 }}
            >
              <div className="pointer-events-none absolute -right-14 -top-14 size-44 rounded-full bg-brand-500/10 blur-3xl transition group-hover:bg-brand-500/20" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-300">
                  {achievement.result}
                </span>
              </div>

              <div className="relative mt-5 flex flex-1 flex-col">
                <p className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <Calendar className="size-3.5 text-brand-400" />
                  {achievement.period}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-white transition group-hover:text-brand-300">
                  {achievement.title}
                </h3>
                <p className="mt-1 text-sm text-brand-400">
                  {achievement.issuer}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {achievement.summary}
                </p>

                <ul className="mt-4 grid gap-2">
                  {achievement.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2 rounded-lg border border-slate-800/60 bg-slate-950/40 px-3 py-2 text-sm leading-relaxed text-slate-400"
                    >
                      <Award className="mt-0.5 size-3.5 shrink-0 text-amber-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {achievement.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-slate-700/60 bg-slate-950/60 px-2 py-0.5 text-[11px] font-medium text-slate-400"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2 pt-1">
                  {achievement.proofLinks.map((link) => (
                    <a
                      key={`${achievement.id}-${link.label}`}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-brand-500/50 hover:text-white"
                    >
                      {link.label}
                      <ExternalLink className="size-3.5 text-brand-400" />
                    </a>
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
