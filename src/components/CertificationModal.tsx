"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Certification } from "@/data/portfolio";

type CertificationModalProps = {
  cert: Certification | null;
  onClose: () => void;
};

export function CertificationModal({ cert, onClose }: CertificationModalProps) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [cert?.id]);

  useEffect(() => {
    if (!cert) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [cert, onClose]);

  const handleBackdrop = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-end justify-center p-4 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdrop}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm" />

          <motion.div
            className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div className="flex items-start justify-between gap-4 border-b border-slate-800 px-5 py-4 sm:px-6">
              <motion.div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-400">
                  {cert.issuer} | {cert.date}
                </p>
                <h2
                  id="cert-modal-title"
                  className="mt-1 text-lg font-semibold text-white sm:text-xl"
                >
                  {cert.name}
                </h2>
              </motion.div>
              <button
                type="button"
                onClick={onClose}
                className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-950 text-slate-400 transition hover:border-slate-600 hover:text-white"
                aria-label="Close"
              >
                <X className="size-5" />
              </button>
            </motion.div>

            <motion.div className="overflow-y-auto">
              <motion.div className="border-b border-slate-800/80 bg-slate-950/50 p-4 sm:p-5">
                <motion.div className="relative mx-auto aspect-video max-h-[min(50vh,420px)] w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                  {!imageError ? (
                    <Image
                      src={cert.credentialImage}
                      alt={`${cert.shortName} credential`}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, 720px"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <motion.div className="flex h-full min-h-[200px] flex-col items-center justify-center gap-2 px-6 text-center">
                      <p className="text-sm font-medium text-slate-300">
                        Credential image not found yet
                      </p>
                      <p className="max-w-sm text-xs leading-relaxed text-slate-500">
                        Add your certificate to{" "}
                        <code className="rounded bg-slate-800 px-1.5 py-0.5 text-brand-300">
                          public/certifications/{cert.id}.png
                        </code>
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>

              <motion.div className="px-5 py-5 sm:px-6">
                <motion.div className="mb-5 flex flex-wrap items-center gap-3 border-b border-slate-800/80 pb-5">
                  {cert.credentialId && (
                    <p className="text-xs text-slate-400">
                      Credential ID: {cert.credentialId}
                    </p>
                  )}
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-300 transition hover:text-brand-200"
                  >
                    Verify on Salesforce
                    <ExternalLink className="size-3.5" />
                  </a>
                </motion.div>
                <motion.div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <BookOpen className="size-4 text-brand-400" />
                  What I learned & practiced
                </motion.div>
                <motion.ul className="mt-3 space-y-2.5">
                  {cert.learned.map((item) => (
                    <motion.li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
