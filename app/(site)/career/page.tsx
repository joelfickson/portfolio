import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { EXPERIENCE_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Career highlights and experience of Joel Fickson Ngozo - Senior Software Engineer and Technical Founder.",
  openGraph: {
    title: "Career",
    description:
      "Career highlights and experience of Joel Fickson Ngozo - Senior Software Engineer and Technical Founder.",
    url: "/career",
  },
  twitter: {
    title: "Career",
    description:
      "Career highlights and experience of Joel Fickson Ngozo - Senior Software Engineer and Technical Founder.",
  },
  alternates: {
    canonical: "/career",
  },
};

const skills = [
  { category: "Languages", items: ["TypeScript", "Go", "Rust", "Java", "PHP", "JavaScript"] },
  { category: "Frontend", items: ["React", "Next.js", "Svelte", "Flutter"] },
  { category: "Backend", items: ["Node.js", "Express", "Fastify", "GraphQL", "REST APIs"] },
  { category: "Data", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
  {
    category: "Infrastructure",
    items: ["AWS", "GCP", "Cloudflare", "Azure", "Docker", "Kubernetes"],
  },
  { category: "Practices", items: ["CI/CD", "GitHub Actions", "TDD", "System Design"] },
];

export default async function CareerPage() {
  const experience = await client.fetch(EXPERIENCE_QUERY);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
      <div className="animate-fade-in">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 gradient-line" />
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent-600 dark:text-accent-400">
            Career
          </p>
        </div>
      </div>
      <h1
        className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-stone-900 dark:text-stone-100 mb-6 leading-[1.05]"
        style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both" }}
      >
        Career Highlights
      </h1>
      <p
        className="text-lg text-stone-500 dark:text-stone-400 max-w-2xl mb-20 leading-relaxed"
        style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both" }}
      >
        10+ years building web, mobile, and desktop applications across fintech, healthcare,
        security, and commerce.
      </p>

      {/* Experience */}
      <div style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both" }}>
        <div className="flex items-center gap-4 mb-14">
          <span className="font-mono text-[10px] text-stone-300 dark:text-stone-700">01</span>
          <div className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 dark:text-stone-600">
            Experience
          </span>
        </div>

        <div className="relative">
          <div className="absolute left-[3px] md:left-[99px] top-0 bottom-0 w-px bg-stone-200 dark:bg-stone-800" />
          {experience.map((exp: any, i: number) => (
            <div
              key={exp._id}
              className="relative grid md:grid-cols-[200px,1fr] gap-4 md:gap-10 pb-12 last:pb-0"
            >
              <div className="relative pl-6 md:pl-0">
                <div className="absolute left-0 md:left-auto md:right-[-24px] top-2 w-[7px] h-[7px] rounded-full bg-accent-500 ring-2 ring-stone-50 dark:ring-stone-950" />
                <p className="font-mono text-xs text-accent-600 dark:text-accent-400">
                  {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                </p>
                {exp.location && (
                  <p className="text-xs text-stone-400 dark:text-stone-600 mt-0.5">
                    {exp.location}
                  </p>
                )}
              </div>
              <div className="pl-6 md:pl-0">
                <h3 className="font-display font-bold text-stone-900 dark:text-stone-100">
                  {exp.role}
                </h3>
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-500 transition-colors"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <p className="text-sm text-stone-500">{exp.company}</p>
                )}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {exp.highlights.map((h: string, j: number) => (
                      <li
                        key={j}
                        className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-px before:bg-stone-300 dark:before:bg-stone-700"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div
        className="mt-24"
        style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both" }}
      >
        <div className="flex items-center gap-4 mb-14">
          <span className="font-mono text-[10px] text-stone-300 dark:text-stone-700">02</span>
          <div className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 dark:text-stone-600">
            Skills & Tools
          </span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400 mb-3">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded-md border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
