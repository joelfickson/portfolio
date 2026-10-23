import { PageHeader } from "@/components/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Joel Fickson Ngozo.",
  alternates: {
    canonical: "/contact",
  },
};

const links = [
  { label: "GitHub", handle: "joelfickson", href: "https://github.com/joelfickson" },
  { label: "LinkedIn", handle: "in/joelfickson", href: "https://linkedin.com/in/joelfickson" },
  { label: "X", handle: "@joelfickson", href: "https://x.com/joelfickson" },
  { label: "Medium", handle: "@joelfickson", href: "https://medium.com/@joelfickson" },
];

const columns = "grid grid-cols-1 gap-x-12 md:grid-cols-[180px_minmax(0,640px)]";
const label = "self-start pt-1.5 pb-[18px] font-ui text-[13px] font-medium text-faint";

export default function ContactPage() {
  return (
    <div className="shell">
      <div className="mx-auto max-w-[868px]">
        <PageHeader
          title="Say hello."
          intro="I’m happy to hear about engineering roles, interesting problems, early-stage companies in Africa, or something you read here. I reply to most email within a few days."
        />
        <section className={`${columns} border-t border-rule pt-[52px] pb-12`}>
          <h2 className={label}>Email</h2>
          <p className="text-[34px] leading-tight max-md:text-[26px]">
            <a
              href="mailto:hi@joelfickson.com"
              className="underline decoration-accent decoration-2 underline-offset-8 hover:text-accent"
            >
              hi@joelfickson.com
            </a>
          </p>
        </section>
        <section className={`${columns} border-t border-rule pt-[52px] pb-16`}>
          <h2 className={label}>Elsewhere</h2>
          <ul>
            {links.map((l) => (
              <li
                key={l.label}
                className="grid grid-cols-[110px_1fr] border-b border-rule py-[13px] first:pt-0 last:border-b-0 max-md:grid-cols-[90px_1fr]"
              >
                <span className="pt-[5px] font-ui text-[13px] text-faint">{l.label}</span>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[19px] hover:text-accent"
                >
                  {l.handle}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
