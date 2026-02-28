"use client";

import { useState } from "react";
import { ProjectCard } from "./project-card";

type Project = {
  _id: string;
  name: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  techStack?: string[];
};

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");

  const filtered = projects.filter((p) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q) ||
      p.techStack?.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <div style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both" }}>
      <div className="mb-8">
        <div className="relative max-w-sm">
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 dark:text-stone-600"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="Search by name, description, or tech..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-transparent border border-stone-200 dark:border-stone-800 rounded-lg text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-600 focus:outline-none focus:border-accent-500 dark:focus:border-accent-500 focus-visible:ring-2 focus-visible:ring-accent-500/35 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50 dark:focus-visible:ring-offset-stone-950 transition-colors"
          />
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project) => (
            <ProjectCard key={project._id} {...project} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-stone-400 dark:text-stone-600 py-8">
          No projects matching &ldquo;{query}&rdquo;
        </p>
      )}
    </div>
  );
}
