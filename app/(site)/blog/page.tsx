import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { BlogCard } from "@/components/blog-card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on engineering, building companies, and technology in Africa by Joel Fickson Ngozo.",
};

export default async function BlogPage() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
      <div className="animate-fade-in">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 gradient-line" />
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent-600 dark:text-accent-400">
            Blog
          </p>
        </div>
      </div>
      <h1
        className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-stone-900 dark:text-stone-100 mb-6 leading-[1.05]"
        style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both" }}
      >
        Writing
      </h1>
      <p
        className="text-lg text-stone-500 dark:text-stone-400 max-w-2xl mb-16 leading-relaxed"
        style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both" }}
      >
        Thoughts on engineering, building companies, and making technology work for people who need
        it most.
      </p>

      {posts.length > 0 ? (
        <div
          className="space-y-0"
          style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both" }}
        >
          {posts.map((post: any, i: number) => (
            <BlogCard key={post._id} index={i} {...post} />
          ))}
        </div>
      ) : (
        <div
          className="py-24 text-center"
          style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both" }}
        >
          <p className="font-display text-2xl text-stone-300 dark:text-stone-700 mb-3">
            Nothing here yet.
          </p>
          <p className="text-sm text-stone-400 dark:text-stone-600">
            Posts will appear here once published in the Studio.
          </p>
        </div>
      )}
    </div>
  );
}
