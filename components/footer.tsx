import Link from "next/link";

const socials = [
  { label: "GitHub", href: "https://github.com/joaborun" },
  { label: "LinkedIn", href: "https://linkedin.com/in/joelfickson" },
  { label: "X", href: "https://x.com/joaborun" },
  { label: "Medium", href: "https://medium.com/@joelfickson" },
];

export function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 mt-32">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-stone-500 dark:text-stone-500">
          &copy; {new Date().getFullYear()} Joel Fickson Ngozo
        </p>
        <div className="flex items-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-500 dark:text-stone-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
