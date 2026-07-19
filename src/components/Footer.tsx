import { siteConfig } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 py-10">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          &copy; {year} {siteConfig.name}.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm sm:justify-end">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-white"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-slate-400 transition hover:text-white"
          >
            Email
          </a>
          <a
            href={siteConfig.trailhead}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition hover:text-white"
          >
            Trailhead
          </a>
        </div>
      </div>
    </footer>
  );
}
