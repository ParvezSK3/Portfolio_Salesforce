"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Award,
  Cloud,
  Linkedin,
  MapPin,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/data/portfolio";

const stats: {
  value: string;
  label: string;
  tag: string;
  icon: LucideIcon;
  accent: string;
  glow: string;
}[] = [
  {
    value: "5+",
    label: "Years Salesforce",
    tag: "Experience",
    icon: Cloud,
    accent: "text-brand-400",
    glow: "from-brand-500/30",
  },
  {
    value: "5K+",
    label: "CRM users supported",
    tag: "Scale",
    icon: Users,
    accent: "text-cyan-400",
    glow: "from-cyan-500/25",
  },
  {
    value: "63.9%",
    label: "AI auto-resolution",
    tag: "Automation",
    icon: Sparkles,
    accent: "text-violet-400",
    glow: "from-violet-500/25",
  },
  {
    value: "3",
    label: "Certifications",
    tag: "Credentials",
    icon: Award,
    accent: "text-amber-400",
    glow: "from-amber-500/25",
  },
];

function HeroMetrics() {
  return (
    <motion.div
      className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/50 p-4 sm:p-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 + i * 0.06 }}
            whileHover={{ y: -3 }}
          >
            <div
              className={`pointer-events-none absolute -right-4 -top-4 size-20 rounded-full bg-gradient-to-br ${stat.glow} to-transparent opacity-0 blur-xl transition group-hover:opacity-100`}
            />
            <div className="relative flex items-start justify-between gap-2">
              <div
                className={`flex size-9 shrink-0 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-950/80 ${stat.accent}`}
              >
                <Icon className="size-4" strokeWidth={1.75} />
              </div>
              <span className="text-[10px] font-medium uppercase tracking-wider text-slate-600">
                {stat.tag}
              </span>
            </div>
            <p className="relative mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {stat.value}
            </p>
            <p className="relative mt-1 text-xs leading-snug text-slate-500 sm:text-sm">
              {stat.label}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28">
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 grid-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="pointer-events-none absolute -top-32 left-1/2 z-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10 grid min-h-[calc(100dvh-7.5rem)] max-h-[900px] items-center gap-10 pb-6 lg:grid-cols-[1fr_auto] lg:gap-14 lg:pb-8">
        <motion.div
          className="relative order-1 mx-auto lg:order-2"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="portrait-ring relative size-[260px] rounded-full sm:size-[280px] lg:size-[300px]">
            <motion.div
              className="relative size-full overflow-hidden rounded-full bg-slate-900 ring-2 ring-slate-800/80"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/parvez-headshot.png"
                alt={`Portrait of ${siteConfig.name}`}
                width={600}
                height={600}
                priority
                unoptimized
                className="size-full object-cover object-[center_18%]"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
              <Cloud className="size-3.5 text-brand-400" />
              {siteConfig.availability}
            </span>
          </motion.div>

          <motion.h1
            className="mt-8 max-w-4xl leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="block text-4xl font-semibold sm:text-6xl lg:text-7xl">
              <span className="gradient-text">{siteConfig.name}</span>
            </span>
            <span className="mt-2 block text-xl font-medium text-slate-400 sm:text-2xl lg:text-3xl">
              {siteConfig.title}
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4 text-brand-400" />
              {siteConfig.location}
            </span>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-400"
            >
              Contact me
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-600 hover:bg-slate-800"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
            <a
              href={siteConfig.trailhead}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-600 hover:bg-slate-800"
            >
              <Cloud className="size-4 text-brand-400" />
              Trailhead
            </a>
          </motion.div>

          <HeroMetrics />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 text-slate-500 transition hover:text-brand-400 sm:inline-flex"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to about"
      >
        <ArrowDown className="size-5" />
      </motion.a>
    </section>
  );
}
