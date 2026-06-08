import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowLeft, Bot, Send, User } from "lucide-react";

type Message = { role: "user" | "agent"; text: string };

const REPLIES: { match: RegExp; text: string }[] = [
  {
    match: /refund|billing|charge/i,
    text: "I reviewed your account in Data Cloud. You qualify for a partial refund on the last invoice. I have opened case #88421 and applied the credit. Anything else?",
  },
  {
    match: /password|login|access/i,
    text: "I reset your session and sent a secure link via Prompt Builder template. Please sign in within 15 minutes. Trust Layer masked your email in logs.",
  },
  {
    match: /status|outage|down/i,
    text: "Our monitoring shows API latency normalized at 14:32 UTC. Your org is healthy. I attached the incident summary from knowledge article KB-2044.",
  },
  {
    match: /.*/,
    text: "Thanks for reaching out. I pulled context from Data Cloud and RAG over your knowledge base. Based on policy ART-112, here is the next step: update your shipping address under Account Settings, then retry checkout.",
  },
];

function replyFor(input: string) {
  return REPLIES.find((r) => r.match.test(input))!.text;
}

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
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "agent",
      text: "Hi, I am your autonomous support agent (Agentforce demo). How can I help?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  async function send(e: FormEvent) {
    e.preventDefault();
    if (!input.trim() || typing) return;
    const userText = input.trim();
    setInput("");
    setMessages((m) => [...m, { role: "user", text: userText }]);
    setTyping(true);
    await new Promise((r) => setTimeout(r, 900));
    setMessages((m) => [...m, { role: "agent", text: replyFor(userText) }]);
    setTyping(false);
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <DemoShell
      title="Customer Support Autonomous Agent"
      subtitle="Interactive chat simulating Agentforce, Prompt Builder, Data Cloud grounding, and RAG-backed responses."
    >
      <div className="flex h-[min(70vh,560px)] flex-col rounded-2xl border border-slate-800/80 bg-slate-900/50">
        <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-5">
          {messages.map((msg, i) => (
            <div
              key={`${i}-${msg.text.slice(0, 12)}`}
              className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}
            >
              {msg.role === "agent" && (
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/20 text-violet-400">
                  <Bot className="size-4" />
                </div>
              )}
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-brand-500 text-white"
                    : "border border-slate-700/80 bg-slate-950 text-slate-300"
                }`}
              >
                {msg.text}
              </div>
              {msg.role === "user" && (
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-slate-400">
                  <User className="size-4" />
                </div>
              )}
            </div>
          ))}
          {typing && (
            <p className="text-xs text-slate-500">Agent is typing (RAG + Trust Layer)...</p>
          )}
          <div ref={endRef} />
        </div>
        <form
          onSubmit={send}
          className="flex gap-2 border-t border-slate-800/80 p-4"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 rounded-full border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white outline-none focus:ring-2 focus:ring-brand-500/50"
            placeholder="Ask about billing, access, outages..."
          />
          <button
            type="submit"
            className="flex size-10 items-center justify-center rounded-full bg-brand-500 text-white transition hover:bg-brand-400"
            aria-label="Send"
          >
            <Send className="size-4" />
          </button>
        </form>
      </div>
    </DemoShell>
  );
}
