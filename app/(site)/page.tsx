import { SectionHead } from "@/components/section-head";
import { type Venture, VentureGrid } from "@/components/venture-grid";
import { experience, stack, yearRange } from "@/lib/experience";
import { monthYear, readingMinutes } from "@/lib/format";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY, VENTURES_QUERY } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Joel Fickson Ngozo - Engineer and founder",
  alternates: {
    canonical: "/",
  },
};

export default async function HomePage() {
  const [posts, ventures] = await Promise.all([
    client.fetch(POSTS_QUERY),
    client.fetch<Venture[]>(VENTURES_QUERY),
  ]);
  const [lead, ...recent] = posts;
  const current = experience[0];

  return (
    <div className="shell">
      <header className="grid grid-cols-12 items-end gap-x-8 pt-24 pb-[88px] max-md:pt-12 max-md:pb-14">
        <div className="col-span-full lg:col-span-8">
          <h1 className="reveal text-[clamp(40px,4.6vw,62px)] leading-[1.1] tracking-[-0.02em] nums">
            <span>Engineer</span> <span>and</span>{" "}
            <span>
              <em className="text-accent">founder</em>.
            </span>
          </h1>
          <p className="fade-late mt-7 max-w-[560px] text-xl leading-[1.55] text-mute">
            Senior full-stack engineer with ten years of shipping production software: commerce
            APIs, fintech, security and developer platforms. From Malawi, living in Berlin.
          </p>
        </div>
        <aside
          aria-label="Now"
          className="fade-late col-span-full pb-1.5 font-ui max-lg:mt-9 lg:col-start-10 lg:col-end-13"
        >
          <div className="flex items-center gap-2.5 text-[13px] text-faint">
            <span className="pulse" aria-hidden="true" />
            Now
          </div>
          <b className="mt-2 block font-serif text-[30px] font-medium leading-tight">
            {current.company}
          </b>
          <span className="mt-1 block text-sm text-mute">{current.role}</span>
        </aside>
      </header>

      <section className="grid grid-cols-12 gap-x-8 border-t border-rule pt-14 pb-16">
        <SectionHead title="Experience" href="/about" linkLabel="Full story" />
        <div className="col-span-full">
          {experience.slice(0, 5).map((r) => (
            <div
              key={r.company}
              className="grid grid-cols-12 items-baseline gap-x-8 border-b border-rule py-5 first:pt-0"
            >
              <time className="col-span-full font-ui text-[13px] text-faint nums md:col-span-2">
                {yearRange(r)}
              </time>
              <div className="col-span-full max-md:mt-1 md:col-span-4">
                <b className="block text-[22px] font-medium leading-tight">{r.company}</b>
                <span className="block text-base italic text-mute">
                  {r.role}
                  {r.location ? `, ${r.location.split(",")[0]}` : ""}
                </span>
              </div>
              <p className="col-span-full text-[17px] leading-relaxed text-mute max-md:mt-1.5 md:col-span-6">
                {r.summary}
              </p>
            </div>
          ))}
        </div>
        <p className="col-span-full mt-7 max-w-[720px] font-ui text-sm text-mute">{stack}</p>
      </section>

      {ventures.length > 0 && (
        <section className="grid grid-cols-12 gap-x-8 border-t border-rule pt-14 pb-16">
          <SectionHead title="Things I’ve built" href="/ventures" linkLabel="All ventures" />
          <VentureGrid ventures={ventures} />
        </section>
      )}

      {lead && (
        <section className="grid grid-cols-12 gap-x-8 border-t border-rule pt-14 pb-16">
          <SectionHead title="Writing" href="/blog" linkLabel="All writing" />
          <Link
            href={`/blog/${lead.slug.current}`}
            className="group col-span-full grid grid-cols-12 gap-x-8 border-b border-rule pb-10"
          >
            <h3 className="col-span-full text-[clamp(30px,3.2vw,42px)] leading-[1.15] tracking-[-0.015em] transition-colors group-hover:text-accent lg:col-span-7">
              {lead.title}
            </h3>
            <div className="col-span-full self-end max-lg:mt-4 lg:col-start-8 lg:col-end-13">
              {lead.excerpt && <p className="text-lg leading-relaxed text-mute">{lead.excerpt}</p>}
              <div className="mt-2 font-ui text-[13px] text-faint nums">
                {monthYear(lead.publishedAt)}
                {readingMinutes(lead.plain) && ` · ${readingMinutes(lead.plain)} min`}
              </div>
            </div>
          </Link>
          <div className="col-span-full">
            {recent.slice(0, 3).map((p: any) => (
              <Link
                key={p._id}
                href={`/blog/${p.slug.current}`}
                className="group flex items-baseline justify-between gap-4 border-b border-rule py-4"
              >
                <span className="text-xl font-medium transition-colors group-hover:text-accent">
                  {p.title}
                </span>
                <time className="shrink-0 font-ui text-[13px] text-faint nums">
                  {monthYear(p.publishedAt)}
                </time>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-rule pt-24 pb-[104px] max-md:pt-16 max-md:pb-[72px]">
        <p className="max-w-[1000px] text-[clamp(32px,4vw,54px)] leading-[1.15] tracking-[-0.02em]">
          Hiring, or building something that has to hold up in production? Write to me at{" "}
          <a
            href="mailto:hi@joelfickson.com"
            className="text-accent underline decoration-2 underline-offset-8 hover:text-ink"
          >
            hi@joelfickson.com
          </a>
        </p>
        <div className="mt-7 flex gap-7 font-ui text-[15px]">
          <a
            href="https://linkedin.com/in/joelfickson"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-rule underline-offset-[5px] hover:text-accent hover:decoration-accent"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/joelfickson"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-rule underline-offset-[5px] hover:text-accent hover:decoration-accent"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
