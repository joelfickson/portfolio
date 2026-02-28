import type { ReactNode } from "react";

type PageIntroProps = {
  label: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

export function PageIntro({ label, title, description, className = "" }: PageIntroProps) {
  return (
    <header
      className={`section-surface px-6 py-8 md:px-10 md:py-10 ${className}`.trim()}
      style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both" }}
    >
      <div className="relative z-10">
        <div className="animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 gradient-line" />
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent-600 dark:text-accent-400">
              {label}
            </p>
          </div>
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-stone-900 dark:text-stone-100 leading-[1.05]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-3xl text-lg text-stone-500 dark:text-stone-400 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
