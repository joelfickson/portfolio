import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Joel Fickson Ngozo.",
};

const links = [
  {
    label: "GitHub",
    href: "https://github.com/joaborun",
    description: "Open source work and code",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/joelfickson",
    description: "Professional profile",
  },
  {
    label: "X / Twitter",
    href: "https://x.com/joaborun",
    description: "Thoughts and updates",
  },
  {
    label: "Medium",
    href: "https://medium.com/@joelfickson",
    description: "Long-form writing",
  },
  {
    label: "Email",
    href: "mailto:joel@joelfickson.com",
    description: "Direct contact",
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
      <div className="animate-fade-in">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent-600 dark:text-accent-400 mb-6">
          Contact
        </p>
      </div>
      <h1
        className="font-display text-5xl md:text-6xl text-stone-900 dark:text-stone-100 mb-6 leading-tight"
        style={{ animation: "slide-up 0.7s ease-out 0.1s both" }}
      >
        Let&apos;s Connect
      </h1>
      <p
        className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mb-16 leading-relaxed"
        style={{ animation: "slide-up 0.7s ease-out 0.2s both" }}
      >
        Whether you want to talk about a project, a collaboration, or just say hello - I&apos;m
        always happy to hear from you.
      </p>

      <div className="max-w-xl space-y-0" style={{ animation: "slide-up 0.7s ease-out 0.3s both" }}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="group flex items-center justify-between py-5 border-t border-stone-200 dark:border-stone-800 last:border-b"
          >
            <div>
              <h3 className="font-display text-lg text-stone-900 dark:text-stone-100 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                {link.label}
              </h3>
              <p className="text-sm text-stone-500">{link.description}</p>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-stone-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-all group-hover:translate-x-1"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
