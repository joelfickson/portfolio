import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { FEATURED_POSTS_QUERY, VENTURES_QUERY } from "@/sanity/lib/queries";
import { BlogCardFeaturedHome } from "@/components/blog-card";
import { HeroScene } from "@/components/hero-scene";

export const metadata: Metadata = {
  title: "Joel Fickson Ngozo - Senior Engineer & Founder",
  description:
    "Senior full-stack engineer at CommerceTools and founder of Sekuire, Elior Health, and Vwaza. 10+ years building web, mobile, and desktop applications.",
  openGraph: {
    title: "Joel Fickson Ngozo - Senior Engineer & Founder",
    description:
      "Senior full-stack engineer at CommerceTools and founder of Sekuire, Elior Health, and Vwaza.",
    url: "/",
  },
  twitter: {
    title: "Joel Fickson Ngozo - Senior Engineer & Founder",
    description:
      "Senior full-stack engineer at CommerceTools and founder of Sekuire, Elior Health, and Vwaza.",
  },
  alternates: {
    canonical: "/",
  },
};

const ventures = [
  {
    name: "Sekuire",
    tagline: "Runtime control for AI agents",
    role: "Founder & CEO",
    href: "https://sekuire.com",
    featured: true,
  },
  {
    name: "Elior Health Labs",
    tagline: "Digital healthcare infrastructure",
    role: "Founder",
  },
  {
    name: "Vwaza Multimedia",
    tagline: "Music streaming for African artists",
    role: "Founder",
  },
];

const stats = [
  { value: "10+", label: "Years" },
  { value: "3", label: "Ventures" },
  { value: "6", label: "Countries" },
];

export default async function HomePage() {
  const posts = await client.fetch(FEATURED_POSTS_QUERY);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <HeroScene />
        <div className="absolute inset-0 dot-grid opacity-60 dark:opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-50 dark:to-stone-950" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="animate-fade-in">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-accent-500/20 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-950 flex-shrink-0">
                <Image
                  src="/og.jpeg"
                  alt="Joel Fickson Ngozo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
              <div className="h-px w-8 gradient-line" />
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent-600 dark:text-accent-400">
                Senior Engineer & Founder
              </p>
            </div>
          </div>
          <h1
            className="font-display font-extrabold text-[clamp(3rem,9vw,8rem)] leading-[0.9] tracking-tighter text-stone-900 dark:text-stone-100"
            style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both" }}
          >
            Joel Fickson
            <br />
            <span className="text-stone-300 dark:text-stone-700">Ngozo</span>
          </h1>
          <p
            className="mt-8 max-w-lg text-lg text-stone-600 dark:text-stone-400 leading-relaxed"
            style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both" }}
          >
            I build software that solves complex problems.
            <br />
            From enterprise commerce to AI safety, across three continents.
          </p>
          <div
            className="mt-8 flex items-center gap-6"
            style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both" }}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-500 transition-colors"
            >
              About me
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/ventures"
              className="text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              Ventures
            </Link>
          </div>

          {/* Stats */}
          <div
            className="mt-16 flex gap-12 md:gap-16"
            style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both" }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display font-bold text-3xl md:text-4xl text-stone-900 dark:text-stone-100">
                  {s.value}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 dark:text-stone-600 mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="flex items-center gap-4 mb-14">
          <span className="font-mono text-[10px] text-stone-300 dark:text-stone-700">01</span>
          <div className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 dark:text-stone-600">
            What I&apos;m Building
          </span>
        </div>

        {/* Featured venture */}
        <div className="mb-6">
          <Link
            href="/ventures"
            className="group relative block p-8 md:p-10 rounded-2xl bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 overflow-hidden noise"
          >
            <div className="absolute inset-0 dot-grid opacity-10 [--dot-color:rgba(255,255,255,0.12)]" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-accent-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
                  Active
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500 dark:text-stone-500">
                  Founder & CEO
                </span>
              </div>
              <h3 className="font-display font-bold text-3xl md:text-4xl mb-3">Sekuire</h3>
              <p className="text-stone-400 dark:text-stone-600 max-w-lg leading-relaxed">
                Runtime control infrastructure for AI agents. Ensuring autonomous systems remain
                safe, aligned, and within operational boundaries.
              </p>
              <div className="mt-6 text-sm text-accent-400 group-hover:text-accent-300 transition-colors flex items-center gap-2">
                Learn more
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Other ventures */}
        <div className="grid md:grid-cols-2 gap-6">
          {ventures
            .filter((v) => !v.featured)
            .map((v) => (
              <div
                key={v.name}
                className="group p-6 md:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-300"
              >
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400 mb-2">
                  {v.role}
                </p>
                <h3 className="font-display font-bold text-xl text-stone-900 dark:text-stone-100 mb-2">
                  {v.name}
                </h3>
                <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                  {v.tagline}
                </p>
              </div>
            ))}
        </div>
      </section>

      {/* Blog */}
      {posts.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
          <div className="flex items-center gap-4 mb-14">
            <span className="font-mono text-[10px] text-stone-300 dark:text-stone-700">02</span>
            <div className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 dark:text-stone-600">
              From the Blog
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {posts[0] && (
              <div className="md:row-span-2">
                <BlogCardFeaturedHome {...posts[0]} />
              </div>
            )}
            {posts[1] && <BlogCardFeaturedHome {...posts[1]} />}
            {posts[2] && <BlogCardFeaturedHome {...posts[2]} />}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors group"
            >
              View all posts
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
