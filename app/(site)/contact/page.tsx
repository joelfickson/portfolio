import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Joel Fickson Ngozo.",
  openGraph: {
    title: "Contact",
    description: "Get in touch with Joel Fickson Ngozo.",
    url: "/contact",
  },
  twitter: {
    title: "Contact",
    description: "Get in touch with Joel Fickson Ngozo.",
  },
  alternates: {
    canonical: "/contact",
  },
};

const links = [
  {
    label: "GitHub",
    href: "https://github.com/joelfickson",
    description: "Open source work and code",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/joelfickson",
    description: "Professional profile",
  },
  {
    label: "X / Twitter",
    href: "https://x.com/joelfickson",
    description: "Thoughts and updates",
  },
  {
    label: "Medium",
    href: "https://medium.com/@joelfickson",
    description: "Long-form writing",
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
      <div className="animate-fade-in">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 gradient-line" />
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent-600 dark:text-accent-400">
            Contact
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <h1
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-stone-900 dark:text-stone-100 mb-6 leading-[1.05]"
            style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both" }}
          >
            Let&apos;s Connect
          </h1>
          <p
            className="text-lg text-stone-500 dark:text-stone-400 leading-relaxed mb-10"
            style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both" }}
          >
            Whether you want to talk about a project, a collaboration, or just say hello.
          </p>
          <div style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both" }}>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 dark:text-stone-600 mb-3">
              Email
            </p>
            <a
              href="mailto:joel@joelfickson.com"
              className="font-display font-bold text-2xl md:text-3xl text-stone-900 dark:text-stone-100 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
            >
              joel@joelfickson.com
            </a>
          </div>
        </div>

        <div style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both" }}>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 dark:text-stone-600 mb-6">
            Elsewhere
          </p>
          <div className="space-y-0">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-5 border-t border-stone-200 dark:border-stone-800 last:border-b"
              >
                <div>
                  <h3 className="font-display font-bold text-stone-900 dark:text-stone-100 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-sm text-stone-400 dark:text-stone-500 mt-0.5">
                    {link.description}
                  </p>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-stone-300 dark:text-stone-700 group-hover:text-accent-500 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
