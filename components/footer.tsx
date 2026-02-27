import Link from "next/link";

const socials = [
  { label: "GitHub", href: "https://github.com/joelfickson" },
  { label: "LinkedIn", href: "https://linkedin.com/in/joelfickson" },
  { label: "X", href: "https://x.com/joelfickson" },
  { label: "Medium", href: "https://medium.com/@joelfickson" },
];

export function Footer() {
  return (
    <footer className="mt-32 border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <Link
              href="/"
              className="font-display font-bold text-lg text-stone-900 dark:text-stone-100"
            >
              JFN<span className="text-accent-500">.</span>
            </Link>
            <p className="mt-3 text-sm text-stone-500 dark:text-stone-500 leading-relaxed max-w-xs">
              Senior engineer and founder. Solving complex problems across commerce, fintech, and
              AI.
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 dark:text-stone-600 mb-4">
              Navigate
            </p>
            <div className="grid grid-cols-2 gap-2">
              {["About", "Career", "Ventures", "Projects", "Blog", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 dark:text-stone-600 mb-4">
              Elsewhere
            </p>
            <div className="flex flex-col gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-stone-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-stone-100 dark:border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-400 dark:text-stone-600">
            &copy; {new Date().getFullYear()} Joel Fickson Ngozo
          </p>
          <p className="text-xs font-mono text-stone-300 dark:text-stone-700">
            Lilongwe / San Francisco / Berlin
          </p>
        </div>
      </div>
    </footer>
  );
}
