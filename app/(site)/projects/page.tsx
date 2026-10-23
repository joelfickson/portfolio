import { PageHeader } from "@/components/page-header";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Projects",
  description: "Open source projects and technical work by Joel Fickson Ngozo.",
  alternates: {
    canonical: "/projects",
  },
};

type Project = {
  _id: string;
  name: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  techStack?: string[];
};

export default async function ProjectsPage() {
  const projects = await client.fetch<Project[]>(PROJECTS_QUERY);

  return (
    <div className="shell">
      <div className="mx-auto max-w-[868px]">
        <PageHeader
          title="Projects"
          intro="Open source, mostly for African developers: payments, data, and the small utilities I wished existed."
        />
        <section className="grid grid-cols-1 gap-x-12 border-t border-rule pt-[52px] pb-16 md:grid-cols-[180px_minmax(0,640px)]">
          <h2 className="self-start pt-1.5 pb-[18px] font-ui text-[13px] font-medium text-faint">
            Open source
          </h2>
          <ul>
            {projects.map((p) => (
              <li
                key={p._id}
                className="grid grid-cols-[1fr_auto] gap-4 border-b border-rule py-[13px] first:pt-0 last:border-b-0"
              >
                <a
                  href={p.liveUrl || p.githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-[19px]"
                >
                  <span className="transition-colors group-hover:text-accent">{p.name}</span>
                  <span className="block text-base italic text-mute">{p.description}</span>
                </a>
                <span className="whitespace-nowrap pt-[5px] font-ui text-[13px] text-faint">
                  {p.techStack?.[0]}
                </span>
              </li>
            ))}
          </ul>
        </section>
        <p className="pb-16 font-ui text-sm md:pl-[228px]">
          <a
            href="https://github.com/joelfickson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline hover:underline-offset-4"
          >
            Everything else on GitHub &rarr;
          </a>
        </p>
      </div>
    </div>
  );
}
