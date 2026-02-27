import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { FEATURED_POSTS_QUERY, VENTURES_QUERY } from "@/sanity/lib/queries";
import { BlogCard } from "@/components/blog-card";

const ventures = [
  {
    name: "Sekuire",
    tagline: "Runtime control for AI agents",
    role: "Founder & CEO",
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

export default async function HomePage() {
  const posts = await client.fetch(FEATURED_POSTS_QUERY);

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-32 md:pt-36 md:pb-40">
        <div className="animate-fade-in">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent-600 dark:text-accent-400 mb-8">
            Founder & Engineer
          </p>
        </div>
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-stone-900 dark:text-stone-100 mb-8"
          style={{ animation: "slide-up 0.7s ease-out 0.1s both" }}
        >
          Joel Fickson
          <br />
          <span className="text-stone-400 dark:text-stone-600">Ngozo</span>
        </h1>
        <p
          className="max-w-lg text-lg text-stone-600 dark:text-stone-400 leading-relaxed"
          style={{ animation: "slide-up 0.7s ease-out 0.25s both" }}
        >
          Building products that move Africa forward.
          <br />
          10+ years shipping software, from Malawi to the world.
        </p>
        <div
          className="mt-10 flex items-center gap-6"
          style={{ animation: "slide-up 0.7s ease-out 0.4s both" }}
        >
          <Link
            href="/about"
            className="text-sm font-mono tracking-wider text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-500 transition-colors flex items-center gap-2"
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
            className="text-sm font-mono tracking-wider text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 transition-colors"
          >
            Ventures
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-display text-3xl text-stone-900 dark:text-stone-100">
            What I&apos;m Building
          </h2>
          <Link
            href="/ventures"
            className="text-xs font-mono tracking-wider text-stone-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
          >
            View all
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {ventures.map((v) => (
            <div
              key={v.name}
              className="p-6 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 hover:border-accent-500/40 dark:hover:border-accent-500/40 transition-all duration-300"
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400 mb-2">
                {v.role}
              </p>
              <h3 className="font-display text-xl text-stone-900 dark:text-stone-100 mb-2">
                {v.name}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400">{v.tagline}</p>
            </div>
          ))}
        </div>
      </section>

      {posts.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-3xl text-stone-900 dark:text-stone-100">
              From the Blog
            </h2>
            <Link
              href="/blog"
              className="text-xs font-mono tracking-wider text-stone-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
            >
              All posts
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <BlogCard key={post._id} {...post} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
