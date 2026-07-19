"use client";

import { motion } from "framer-motion";
import { Cloud, GitBranch, Sparkles } from "lucide-react";
import { Section } from "@/components/Section";
import { aboutContent } from "@/data/portfolio";

const focusIcons = [Cloud, Sparkles, GitBranch];
const focusStyles = [
  {
    iconClass: "text-brand-400",
    glow: "from-brand-500/25",
    border: "group-hover:border-brand-500/40",
  },
  {
    iconClass: "text-brand-400",
    glow: "from-brand-500/20",
    border: "group-hover:border-brand-500/40",
  },
  {
    iconClass: "text-brand-400",
    glow: "from-brand-500/20",
    border: "group-hover:border-brand-500/40",
  },
];

export function About() {
  return (
    <Section
      id="about"
      label={aboutContent.label}
      title={aboutContent.title}
      spacing="tight-top"
      className="!pb-4"
    >
      <motion.div
        className="-mt-6 overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45 }}
      >
        <div className="border-b border-slate-800/80 bg-slate-950/50 px-5 py-4 sm:px-6">
          <p className="text-sm font-medium leading-relaxed text-brand-300 sm:text-base">
            {aboutContent.lead}
          </p>
        </div>
        <div className="space-y-5 px-5 py-5 sm:space-y-6 sm:px-6 sm:py-6">
          {aboutContent.bioParagraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              className="max-w-none text-sm leading-[1.75] text-slate-400 sm:text-[0.9375rem]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.div>

      <motion.ul
        className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        {aboutContent.proofPoints.map((item) => (
          <li
            key={item.label}
            className="rounded-xl border border-slate-800/80 bg-gradient-to-br from-slate-900/60 to-slate-950/40 px-4 py-3"
          >
            <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-400/90">
              {item.label}
            </span>
            <span className="mt-1 block text-sm font-medium leading-snug text-white">
              {item.value}
            </span>
          </li>
        ))}
      </motion.ul>

      <div className="mt-10 border-t border-slate-800/60 pt-8">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
          Core focus areas
        </h3>
        <p className="mt-2 max-w-2xl text-sm text-slate-500">
          Three lenses I use on every engagement: platform engineering,
          integration reliability, and release-ready delivery.
        </p>

        <motion.div
          className="mt-5 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-1 scrollbar-none sm:mx-0 sm:grid sm:snap-none sm:grid-cols-1 sm:overflow-visible sm:px-0 lg:grid-cols-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
        >
          {aboutContent.focusAreas.map((area, index) => {
            const Icon = focusIcons[index] ?? Cloud;
            const style = focusStyles[index] ?? focusStyles[0];
            return (
              <motion.article
                key={area.title}
                className={`group relative w-[min(88vw,360px)] shrink-0 snap-center overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 transition sm:w-auto sm:shrink ${style.border}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06 * index }}
                whileHover={{ y: -3 }}
              >
                <div
                  className={`pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-gradient-to-br ${style.glow} to-transparent opacity-70 blur-2xl transition group-hover:opacity-100`}
                />
                <div className="relative flex items-center gap-3">
                  <motion.div
                    className={`flex size-10 shrink-0 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-950/80 ${style.iconClass}`}
                  >
                    <Icon className="size-[18px]" strokeWidth={1.75} />
                  </motion.div>
                  <h4 className="font-semibold text-white">{area.title}</h4>
                </div>
                <p className="relative mt-3 text-sm leading-relaxed text-slate-400">
                  {area.description}
                </p>
                <ul className="relative mt-3 flex flex-wrap gap-2">
                  {area.highlights.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-slate-700/60 bg-slate-950/50 px-2 py-0.5 text-[11px] font-medium text-slate-400"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
