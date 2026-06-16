"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
import { certifications, siteConfig } from "@/data/portfolio";

export function AboutSkillsBridge() {
  return (
    <div className="relative border-y border-slate-800/60 bg-slate-900/30 py-5 sm:py-6">
      <div className="section-container">
        <motion.div
          className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <motion.div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
              Certified & building
            </p>
            <p className="mt-1.5 max-w-xl text-sm text-slate-400">
              {siteConfig.availability}. Three Salesforce credentials across
              Apex, LWC, administration, and app building.
            </p>
          </motion.div>
          <a
            href="#skills"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-brand-500/50 hover:text-white"
          >
            View technical expertise
            <ArrowRight className="size-4 text-brand-400" />
          </a>
        </motion.div>

        <motion.ul
          className="mt-4 flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
        >
          {certifications.map((cert) => (
            <li
              key={cert.name}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/70 bg-slate-950/60 px-3 py-1.5 text-xs text-slate-300"
            >
              <Award className="size-3 shrink-0 text-amber-400/90" />
              {cert.shortName}
            </li>
          ))}
          <li>
            <a
              href={siteConfig.trailhead}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1.5 text-xs font-medium text-brand-300 transition hover:bg-brand-500/20"
            >
              Trailblazer profile
              <ArrowRight className="size-3" />
            </a>
          </li>
        </motion.ul>
      </div>
    </div>
  );
}
