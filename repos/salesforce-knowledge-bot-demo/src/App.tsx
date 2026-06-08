import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowLeft, BookOpen, Search, Sparkles } from "lucide-react";

const ARTICLES = [
  {
    id: "KB-2044",
    title: "API latency incident playbook",
    snippet: "Steps to verify org health, enable maintenance banner, and notify stakeholders.",
    score: 0.96,
  },
  {
    id: "KB-1892",
    title: "Refund eligibility for enterprise accounts",
    snippet: "Partial credits within 30 days when usage threshold is below 80%.",
    score: 0.91,
  },
  {
    id: "KB-1730",
    title: "Agentforce grounding with Data Cloud",
    snippet: "Connect retrieval indexes and apply Trust Layer policies before generation.",
    score: 0.88,
  },
  {
    id: "KB-1601",
    title: "LWC case console extension guide",
    snippet: "Embed recommendations component and wire Apex for case context.",
    score: 0.84,
  },
];

function DemoShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-slate-950 text-slate-200">
      <header className="border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a
            href="https://github.com/ParvezSK3"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Back to portfolio
          </a>
          <img
            src="/salesforce-logo.png"
            alt="Salesforce"
            className="h-6 w-auto"
          />
        </div>
        <div className="mx-auto max-w-6xl px-5 pb-6 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
            Live demo
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
            {title}
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-400 sm:text-base">
            {subtitle}
          </p>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8">{children}</main>
    </div>
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<typeof ARTICLES>([]);
  const [answer, setAnswer] = useState("");

  async function search(e: FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    const q = query.toLowerCase();
    const ranked = ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.snippet.toLowerCase().includes(q) ||
        q.length < 4,
    ).sort((a, b) => b.score - a.score);
    setResults(ranked.length ? ranked : ARTICLES);
    setAnswer(
      `Grounded answer (${Math.round((ranked[0]?.score ?? 0.96) * 100)}% confidence): ${ranked[0]?.snippet ?? ARTICLES[0].snippet} Source: ${ranked[0]?.id ?? "KB-2044"}.`,
    );
    setLoading(false);
  }

  return (
    <DemoShell
      title="Intelligent Knowledge Retrieval Bot"
      subtitle="Simulates NLP search, RAG retrieval over knowledge articles, and grounded generative answers in Salesforce."
    >
      <form
        onSubmit={search}
        className="flex flex-col gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/50 p-4 sm:flex-row sm:items-center sm:p-5"
      >
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-full border border-slate-700 bg-slate-950 py-2.5 pl-10 pr-4 text-sm text-white outline-none focus:ring-2 focus:ring-brand-500/50"
            placeholder="Search knowledge (e.g. refund, Agentforce, API outage)"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-brand-400 disabled:opacity-60"
        >
          <Sparkles className="size-4" />
          {loading ? "Retrieving..." : "Search with RAG"}
        </button>
      </form>

      {answer && (
        <div className="mt-6 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Generated answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">{answer}</p>
        </div>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {results.map((article) => (
          <article
            key={article.id}
            className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 transition hover:border-slate-600"
          >
            <p className="flex items-center gap-2 text-xs font-medium text-brand-400">
              <BookOpen className="size-3.5" />
              {article.id} · {Math.round(article.score * 100)}% match
            </p>
            <h3 className="mt-2 font-semibold text-white">{article.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{article.snippet}</p>
          </article>
        ))}
      </div>

      {!results.length && !loading && (
        <p className="mt-8 text-center text-sm text-slate-500">
          Run a search to see ranked knowledge articles
        </p>
      )}
    </DemoShell>
  );
}
