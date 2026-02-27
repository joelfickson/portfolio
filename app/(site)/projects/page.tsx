import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { ProjectGrid } from "@/components/project-grid";

export const metadata: Metadata = {
  title: "Projects",
  description: "Open source projects and technical work by Joel Fickson Ngozo.",
  openGraph: {
    title: "Projects",
    description: "Open source projects and technical work by Joel Fickson Ngozo.",
    url: "/projects",
  },
  twitter: {
    title: "Projects",
    description: "Open source projects and technical work by Joel Fickson Ngozo.",
  },
  alternates: {
    canonical: "/projects",
  },
};

const fallbackProjects = [
  {
    _id: "pawapay-api",
    name: "pawapay_api",
    description:
      "TypeScript implementation of the PawaPay payment gateway. Mobile money integration for African markets.",
    githubUrl: "https://github.com/joelfickson/pawapay_api",
    techStack: ["TypeScript", "Payments", "Mobile Money"],
    featured: true,
  },
  {
    _id: "pawapay-tutorial",
    name: "pawapay-payment-tutorial",
    description:
      "Tutorial and reference implementation for integrating PawaPay widget payments into web applications.",
    githubUrl: "https://github.com/joelfickson/pawapay-payment-tutorial",
    techStack: ["TypeScript", "PawaPay", "Tutorial"],
    featured: true,
  },
  {
    _id: "nyasa-data-hub",
    name: "NyasaDataHub",
    description: "A data platform that collects, labels, and provides access to Malawi's data.",
    githubUrl: "https://github.com/joelfickson/NyasaDataHub",
    techStack: ["TypeScript", "Data Platform"],
    featured: true,
  },
  {
    _id: "zizo",
    name: "zizo",
    description:
      "Zinthu Zothandiza - a JavaScript utility package with a wide range of helper functions.",
    githubUrl: "https://github.com/joelfickson/zizo",
    techStack: ["TypeScript", "Utilities"],
    featured: true,
  },
  {
    _id: "polana",
    name: "Polana",
    description: "A design system created for Tech Malawi.",
    githubUrl: "https://github.com/joelfickson/Polana",
    techStack: ["TypeScript", "Design System"],
    featured: true,
  },
  {
    _id: "afrimomo",
    name: "afrimomo",
    description: "Mobile money integration library for African payment providers.",
    githubUrl: "https://github.com/joelfickson/afrimomo",
    techStack: ["TypeScript", "Fintech"],
    featured: true,
  },
  {
    _id: "r2-migration",
    name: "r2-aws-s3-migration",
    description: "Simple Python tool for migrating files from Cloudflare R2 to AWS S3.",
    githubUrl: "https://github.com/joelfickson/r2-aws-s3-migration",
    techStack: ["Python", "Cloudflare", "AWS"],
    featured: true,
  },
  {
    _id: "blockchain-tx",
    name: "blockchain-transaction-service",
    description: "A service to check blockchain transaction status.",
    githubUrl: "https://github.com/joelfickson/blockchain-transaction-service",
    techStack: ["Python", "Blockchain"],
    featured: true,
  },
  {
    _id: "pawapay-flutter",
    name: "pawapay_flutter",
    description: "PawaPay Flutter SDK for mobile money payments in mobile apps.",
    githubUrl: "https://github.com/joelfickson/pawapay_flutter",
    techStack: ["Dart", "Flutter", "Payments"],
    featured: true,
  },
  {
    _id: "upload-to-cloud",
    name: "upload-to-cloud",
    description: "A library to upload files to the cloud.",
    githubUrl: "https://github.com/joelfickson/upload-to-cloud",
    techStack: ["TypeScript", "Cloud Storage"],
    featured: true,
  },
  {
    _id: "fhir-types",
    name: "fhir-types",
    description:
      "FHIR type definitions for TypeScript. Typed interfaces for healthcare interoperability standards.",
    githubUrl: "https://github.com/joelfickson/fhir-types",
    techStack: ["TypeScript", "FHIR", "Healthcare"],
    featured: true,
  },
  {
    _id: "chipereganyu",
    name: "chipereganyu-app",
    description: "Monorepo for a Svelte frontend with a Rust backend.",
    githubUrl: "https://github.com/joelfickson/chipereganyu-app",
    techStack: ["Rust", "Svelte"],
    featured: true,
  },
  {
    _id: "js-array-rust",
    name: "javascript-array-methods-in-rust",
    description: "Implementing JavaScript array methods in Rust using vectors.",
    githubUrl: "https://github.com/joelfickson/javascript-array-methods-in-rust",
    techStack: ["Rust"],
    featured: true,
  },
  {
    _id: "go-learning",
    name: "go-lang-learning",
    description: "A journey learning Go - patterns, exercises, and mini-projects.",
    githubUrl: "https://github.com/joelfickson/go-lang-learning",
    techStack: ["Go"],
    featured: true,
  },
  {
    _id: "eli-portal",
    name: "ELI-Student-Portal",
    description: "English Language Institute student portal for managing courses and grades.",
    githubUrl: "https://github.com/joelfickson/ELI-Student-Portal",
    techStack: ["React", "Node.js"],
    featured: true,
  },
  {
    _id: "node-template",
    name: "backend-node-template",
    description: "Simple Node.js backend template for quick project bootstrapping.",
    githubUrl: "https://github.com/joelfickson/backend-node-template",
    techStack: ["TypeScript", "Node.js"],
    featured: true,
  },
  {
    _id: "posewerela",
    name: "Posewerela",
    description: "Pamalo Panga Poyesera Zinthu - a place for Rust experiments.",
    githubUrl: "https://github.com/joelfickson/Posewerela",
    techStack: ["Rust"],
    featured: true,
  },
  {
    _id: "php-rest-api",
    name: "PHP-Rest-API",
    description: "REST API built with PHP, MySQL, jQuery, and Bootstrap.",
    githubUrl: "https://github.com/joelfickson/PHP-Rest-API",
    techStack: ["PHP", "MySQL", "REST API"],
    featured: true,
  },
];

export default async function ProjectsPage() {
  let projects = await client.fetch(PROJECTS_QUERY);
  if (!projects || projects.length === 0) {
    projects = fallbackProjects;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
      <div className="animate-fade-in">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 gradient-line" />
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent-600 dark:text-accent-400">
            Projects
          </p>
        </div>
      </div>
      <h1
        className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-stone-900 dark:text-stone-100 mb-6 leading-[1.05]"
        style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both" }}
      >
        Open Source &amp; Side Projects
      </h1>
      <p
        className="text-lg text-stone-500 dark:text-stone-400 max-w-2xl mb-16 leading-relaxed"
        style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both" }}
      >
        Tools, libraries, and experiments I&apos;ve built - from payment integrations and data
        platforms to design systems and blockchain services.
      </p>

      <ProjectGrid projects={projects} />
    </div>
  );
}
