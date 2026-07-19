"use client";

import { useState, FormEvent } from "react";
import { Section } from "@/components/Section";
import { siteConfig } from "@/data/portfolio";
import { Globe, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  const links = [
    {
      icon: Mail,
      label: "Email",
      href: `mailto:${siteConfig.email}`,
      value: siteConfig.email,
    },
    {
      icon: Phone,
      label: "Phone",
      href: `tel:${siteConfig.phone.replace(/\D/g, "")}`,
      value: siteConfig.phone,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: siteConfig.linkedin,
      value: "parvezshaik44",
    },
    {
      icon: Globe,
      label: "Website",
      href: siteConfig.website,
      value: "parvezshaik.com",
    },
    {
      icon: MapPin,
      label: "Location",
      href: "#",
      value: siteConfig.location,
    },
  ];

  return (
    <Section
      id="contact"
      label="Contact"
      title="Let's connect"
      description="Open to Salesforce developer roles across the U.S. Reach out for opportunities or collaboration."
    >
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "LinkedIn" ? "_blank" : undefined}
              rel={
                link.label === "LinkedIn" ? "noopener noreferrer" : undefined
              }
              className="glass-card flex items-center gap-4 p-4 transition hover:border-slate-700"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-brand-500/15">
                <link.icon className="size-4 text-brand-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500">{link.label}</p>
                <p className="truncate text-sm text-slate-200">{link.value}</p>
              </div>
            </a>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-card lg:col-span-3 p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-sm text-slate-400">Name</span>
              <input
                name="name"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950/50 px-4 py-2.5 text-sm text-white outline-none transition focus:border-brand-500 focus:ring-1 focus:ring-brand-500/30"
                placeholder="Your name"
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-sm text-slate-400">Email</span>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950/50 px-4 py-2.5 text-sm text-white outline-none transition focus:border-brand-500 focus:ring-1 focus:ring-brand-500/30"
                placeholder="you@email.com"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm text-slate-400">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950/50 px-4 py-2.5 text-sm text-white outline-none transition focus:border-brand-500 focus:ring-1 focus:ring-brand-500/30"
                placeholder="Tell me about the role or project..."
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-400 sm:w-auto"
          >
            <Send className="size-4" />
            {status === "sent" ? "Opening email client..." : "Send message"}
          </button>
        </form>
      </div>
    </Section>
  );
}
