"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { navLinks, siteConfig } from "@/data/portfolio";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function handleMobileNavigation(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    event.preventDefault();
    const targetId = href.slice(1);

    setMobileOpen(false);
    setActiveHash(href);
    window.history.pushState(null, "", href);

    // Wait for the menu state to render and release the body scroll lock.
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-slate-800/90 bg-slate-950 shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
          : "border-slate-950 bg-slate-950"
      }`}
    >
      <div className="section-container py-3 sm:py-3.5">
        <div
          className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
            scrolled
              ? "border border-slate-800/80 bg-slate-900/60"
              : "border border-slate-800/50 bg-slate-900/40"
          }`}
        >
          <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/35 to-transparent" />

          <div className="flex h-14 items-center justify-between gap-4 px-4 sm:h-[3.75rem] sm:px-5">
            <a
              href="#"
              className="group rounded-lg outline-none ring-brand-500/50 focus-visible:ring-2"
              aria-label="Back to top"
            >
              <Logo showName className="transition group-hover:opacity-90" />
            </a>

            <nav
              className="hidden items-center rounded-full border border-slate-800/80 bg-slate-950/80 p-1 lg:flex"
              aria-label="Main"
            >
              {navLinks.map((link) => {
                const isActive = activeHash === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-slate-800 ring-1 ring-slate-700/80"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={siteConfig.resumeUrl}
                download={siteConfig.resumeDownloadName}
                className="group hidden items-center gap-1.5 rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-400 md:inline-flex"
              >
                Resume
                <Download className="size-3.5 transition group-hover:translate-y-0.5" />
              </a>

              <button
                type="button"
                className="inline-flex rounded-xl border border-slate-800 bg-slate-950/80 p-2.5 text-slate-300 transition hover:border-slate-700 hover:bg-slate-800 lg:hidden"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-800 bg-slate-950 lg:hidden"
          >
            <nav className="section-container flex flex-col gap-0.5 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white"
                  onClick={(event) =>
                    handleMobileNavigation(event, link.href)
                  }
                >
                  {link.label}
                </a>
              ))}
              <a
                href={siteConfig.resumeUrl}
                download={siteConfig.resumeDownloadName}
                className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-brand-500 px-4 py-3 text-sm font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                Resume
                <Download className="size-3.5" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
