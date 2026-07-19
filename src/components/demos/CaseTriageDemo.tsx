"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle2, Loader2, Shield } from "lucide-react";
import { DemoShell } from "./DemoShell";

const INTENTS = [
  { label: "Billing dispute", priority: "High", route: "Payments queue" },
  { label: "Login / access", priority: "Medium", route: "Identity & access" },
  { label: "Product how-to", priority: "Low", route: "Self-service KB" },
  { label: "Outage / incident", priority: "Critical", route: "Major incident" },
];

export function CaseTriageDemo() {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<(typeof INTENTS)[0] | null>(null);
  const [masked, setMasked] = useState("");

  async function triage(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    await new Promise((r) => setTimeout(r, 1200));
    const pick = INTENTS[Math.floor(Math.random() * INTENTS.length)];
    setResult(pick);
    const sample = description || subject;
    setMasked(
      sample
        .replace(/\b[\w.-]+@[\w.-]+\.\w+\b/g, "[EMAIL_REDACTED]")
        .replace(/\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/g, "[PHONE_REDACTED]"),
    );
    setLoading(false);
  }

  return (
    <DemoShell
      title="AI-Driven Case Triage & Resolution"
      subtitle="Simulates Agentforce classification, Data Cloud context, and Einstein Trust Layer masking before routing."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <form
          onSubmit={triage}
          className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-5 sm:p-6"
        >
          <h2 className="text-sm font-semibold text-white">New case</h2>
          <label className="mt-4 block text-xs text-slate-500">Subject</label>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-brand-500/50"
            placeholder="Cannot access billing portal after password reset"
          />
          <label className="mt-4 block text-xs text-slate-500">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={5}
            className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-brand-500/50"
            placeholder="Customer email: user@example.com. Error since yesterday..."
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 py-2.5 text-sm font-medium text-white transition hover:bg-brand-400 disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="size-4 animate-spin" /> Classifying...
              </>
            ) : (
              "Run triage (Agentforce)"
            )}
          </button>
        </form>

        <div className="space-y-4">
          {result ? (
            <>
              <div className="rounded-2xl border border-brand-500/30 bg-brand-500/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-400">
                  Classification
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{result.label}</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg bg-slate-950/60 px-3 py-2">
                    <span className="text-slate-500">Priority</span>
                    <p className="font-medium text-white">{result.priority}</p>
                  </div>
                  <div className="rounded-lg bg-slate-950/60 px-3 py-2">
                    <span className="text-slate-500">Route</span>
                    <p className="font-medium text-white">{result.route}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-5">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-400">
                  <CheckCircle2 className="size-4" /> Recommended actions
                </p>
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-400">
                  <li>Assign to {result.route}</li>
                  <li>Attach Data Cloud customer 360 profile</li>
                  <li>Suggest LWC macro: refund eligibility check</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-5">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-400">
                  <Shield className="size-4" /> Trust Layer (masked)
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{masked}</p>
              </div>
            </>
          ) : (
            <div className="flex min-h-[240px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700/80 bg-slate-900/30 p-8 text-center text-sm text-slate-500">
              <AlertTriangle className="mb-3 size-8 text-slate-600" />
              Submit a case to see AI triage output
            </div>
          )}
        </div>
      </div>
    </DemoShell>
  );
}
