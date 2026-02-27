import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description: "Open source projects and technical work by Joel Fickson Ngozo.",
};

const fallbackProjects = [
  {
    _id: "pawapay",
    name: "PawaPay PHP API",
    description:
      "PHP SDK for the PawaPay mobile money API. Enables seamless integration with African mobile payment systems.",
    githubUrl: "https://github.com/joaborun/pawapay-php-api",
    techStack: ["PHP", "REST API", "Mobile Money"],
    featured: true,
  },
  {
    _id: "afrimomo",
    name: "afrimomo",
    description:
      "Mobile money integration library for African payment providers. Unified interface for MTN MoMo, Airtel Money, and more.",
    githubUrl: "https://github.com/joaborun/afrimomo",
    techStack: ["JavaScript", "Node.js", "Fintech"],
    featured: true,
  },
  {
    _id: "r2-migration",
    name: "r2-aws-s3-migration",
    description:
      "Tool for migrating files from AWS S3 to Cloudflare R2. Handles large-scale migrations with progress tracking.",
    githubUrl: "https://github.com/joaborun/r2-aws-s3-migration",
    techStack: ["TypeScript", "Cloudflare", "AWS"],
    featured: true,
  },
];

export default async function ProjectsPage() {
  let projects = await client.fetch(PROJECTS_QUERY);
  if (!projects || projects.length === 0) {
    projects = fallbackProjects;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
      <div className="animate-fade-in">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent-600 dark:text-accent-400 mb-6">
          Projects
        </p>
      </div>
      <h1
        className="font-display text-5xl md:text-6xl text-stone-900 dark:text-stone-100 mb-6 leading-tight"
        style={{ animation: "slide-up 0.7s ease-out 0.1s both" }}
      >
        Open Source &amp; Side Projects
      </h1>
      <p
        className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mb-16 leading-relaxed"
        style={{ animation: "slide-up 0.7s ease-out 0.2s both" }}
      >
        Tools and libraries I&apos;ve built, mostly focused on African fintech infrastructure and
        developer experience.
      </p>

      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        style={{ animation: "slide-up 0.7s ease-out 0.3s both" }}
      >
        {projects.map((project: any) => (
          <ProjectCard key={project._id} {...project} />
        ))}
      </div>
    </div>
  );
}
