import Image from "next/image";
import { siteConfig } from "@/data/portfolio";

type LogoProps = {
  /** Show role title beside logo. */
  showName?: boolean;
  className?: string;
};

export function Logo({ showName = true, className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <span className="inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-950 shadow-sm ring-1 ring-brand-500/35 sm:size-11">
        <Image
          src="/parvez-logo.png"
          alt={siteConfig.name}
          width={512}
          height={512}
          className="size-[82%] object-contain"
          priority
          unoptimized
        />
      </span>
      {showName && (
        <span className="hidden flex-col leading-tight sm:flex">
          <span className="text-sm font-semibold tracking-tight text-white">
            {siteConfig.name}
          </span>
          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-500">
            {siteConfig.title}
          </span>
        </span>
      )}
    </span>
  );
}
