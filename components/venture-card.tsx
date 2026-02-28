import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

type VentureCardProps = {
  name: string;
  description: string;
  url?: string;
  logo?: any;
  role: string;
  status?: string;
  variant?: "featured" | "default";
};

export function VentureCard({
  name,
  description,
  url,
  logo,
  role,
  status,
  variant = "default",
}: VentureCardProps) {
  const Wrapper = url ? "a" : "div";
  const wrapperProps = url
    ? { href: url, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  if (variant === "featured") {
    return (
      <Wrapper
        {...wrapperProps}
        className="group relative block p-8 md:p-10 rounded-2xl border border-stone-200/70 dark:border-stone-800/70 bg-stone-950 dark:bg-stone-100 text-stone-100 dark:text-stone-900 overflow-hidden shadow-[0_32px_90px_-58px_rgba(28,25,23,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_32px_90px_-50px_rgba(28,25,23,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50 dark:focus-visible:ring-offset-stone-950"
      >
        <div className="absolute inset-0 dot-grid opacity-10 [--dot-color:rgba(255,255,255,0.12)]" />
        <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-accent-400/20 blur-3xl" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            {status === "active" && (
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-accent-400">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
                Active
              </span>
            )}
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
              {role}
            </span>
          </div>
          <div className="flex items-start gap-5">
            {logo && (
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-stone-800 dark:bg-stone-200 flex-shrink-0">
                <Image
                  src={urlFor(logo).width(112).height(112).url()}
                  alt={name}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div>
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-3">{name}</h3>
              <p className="text-stone-400 dark:text-stone-600 max-w-lg leading-relaxed">
                {description}
              </p>
            </div>
          </div>
          {url && (
            <div className="mt-6 text-sm text-accent-400 group-hover:text-accent-300 transition-colors flex items-center gap-2">
              Visit
              <svg
                aria-hidden="true"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          )}
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper
      {...wrapperProps}
      className="group block p-6 md:p-8 rounded-2xl border border-stone-200/80 dark:border-stone-800/80 bg-stone-100/45 dark:bg-stone-900/45 hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50 dark:focus-visible:ring-offset-stone-950"
    >
      <div className="flex items-start gap-4 mb-4">
        {logo && (
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-stone-100 dark:bg-stone-800 flex-shrink-0">
            <Image
              src={urlFor(logo).width(80).height(80).url()}
              alt={name}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <h3 className="font-display font-bold text-lg text-stone-900 dark:text-stone-100 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
              {name}
            </h3>
            {status === "active" && (
              <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </span>
            )}
          </div>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400 mt-0.5">
            {role}
          </p>
        </div>
      </div>
      <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">{description}</p>
      {url && (
        <div className="mt-4 text-xs text-stone-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors flex items-center gap-1">
          Visit
          <svg
            aria-hidden="true"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="transition-transform group-hover:translate-x-0.5"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      )}
    </Wrapper>
  );
}
