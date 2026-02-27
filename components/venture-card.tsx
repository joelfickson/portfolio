import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type VentureCardProps = {
  name: string;
  description: string;
  url?: string;
  logo?: any;
  role: string;
  status?: string;
};

export function VentureCard({ name, description, url, logo, role, status }: VentureCardProps) {
  const Wrapper = url ? "a" : "div";
  const wrapperProps = url
    ? { href: url, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group block p-6 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-accent-500/40 dark:hover:border-accent-500/40 transition-all duration-300 bg-white dark:bg-stone-900/50"
    >
      <div className="flex items-start gap-4 mb-4">
        {logo && (
          <div className="w-12 h-12 rounded-lg overflow-hidden bg-stone-100 dark:bg-stone-800 flex-shrink-0">
            <Image
              src={urlFor(logo).width(96).height(96).url()}
              alt={name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <h3 className="font-display text-lg text-stone-900 dark:text-stone-100 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
              {name}
            </h3>
            {status === "active" && (
              <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active
              </span>
            )}
          </div>
          <p className="text-xs font-mono text-accent-600 dark:text-accent-400 tracking-wider uppercase mt-0.5">
            {role}
          </p>
        </div>
      </div>
      <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{description}</p>
      {url && (
        <div className="mt-4 text-xs text-stone-500 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors flex items-center gap-1">
          Visit
          <svg
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
