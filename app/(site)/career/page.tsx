import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { EXPERIENCE_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Career highlights and experience of Joel Fickson Ngozo - Senior Software Engineer and Technical Founder.",
};

const skills = [
  "JavaScript",
  "TypeScript",
  "Go",
  "Rust",
  "Java",
  "PHP",
  "React",
  "Next.js",
  "Svelte",
  "Node.js",
  "Express",
  "Fastify",
  "GraphQL",
  "REST APIs",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "AWS",
  "GCP",
  "Cloudflare",
  "Azure",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "GitHub Actions",
  "Flutter",
  "Android/iOS",
];

export default async function ResumePage() {
  const experience = await client.fetch(EXPERIENCE_QUERY);

  return (
    <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
      <div className="animate-fade-in">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent-600 dark:text-accent-400 mb-6">
          Career
        </p>
      </div>
      <h1
        className="font-display text-5xl md:text-6xl text-stone-900 dark:text-stone-100 mb-6 leading-tight"
        style={{ animation: "slide-up 0.7s ease-out 0.1s both" }}
      >
        Career Highlights
      </h1>
      <p
        className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mb-20 leading-relaxed"
        style={{ animation: "slide-up 0.7s ease-out 0.2s both" }}
      >
        10+ years building web, mobile, and desktop applications across fintech, healthcare,
        security, and commerce.
      </p>

      <div style={{ animation: "slide-up 0.7s ease-out 0.3s both" }}>
        <h2 className="font-display text-2xl text-stone-900 dark:text-stone-100 mb-10">
          Experience
        </h2>
        <div className="space-y-0">
          {experience.map((exp: any) => (
            <div
              key={exp._id}
              className="grid md:grid-cols-[200px,1fr] gap-4 md:gap-8 py-8 border-t border-stone-200 dark:border-stone-800"
            >
              <div>
                <p className="font-mono text-xs text-accent-600 dark:text-accent-400 mb-1">
                  {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                </p>
                {exp.location && <p className="text-xs text-stone-500">{exp.location}</p>}
              </div>
              <div>
                <h3 className="font-display text-lg text-stone-900 dark:text-stone-100">
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
                    {exp.highlights.map((h: string, i: number) => (
                      <li
                        key={i}
                        className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed flex gap-2"
                      >
                        <span className="text-stone-400 dark:text-stone-600 mt-1.5 flex-shrink-0">
                          <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                            <circle cx="3" cy="3" r="3" />
                          </svg>
                        </span>
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

      <div className="mt-20" style={{ animation: "slide-up 0.7s ease-out 0.4s both" }}>
        <h2 className="font-display text-2xl text-stone-900 dark:text-stone-100 mb-10">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-sm font-mono px-3 py-1.5 rounded-full border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 bg-white dark:bg-stone-900/50"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
