const socials = [
  { label: "GitHub", href: "https://github.com/joelfickson" },
  { label: "LinkedIn", href: "https://linkedin.com/in/joelfickson" },
  { label: "X", href: "https://x.com/joelfickson" },
  { label: "Medium", href: "https://medium.com/@joelfickson" },
];

export function Footer() {
  return (
    <footer className="shell">
      <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-rule pt-12 pb-[72px] font-ui text-sm text-mute">
        <span className="text-[13px] text-faint">
          &copy; {new Date().getFullYear()} Joel Fickson Ngozo
        </span>
        <div className="flex flex-wrap gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-ink"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
