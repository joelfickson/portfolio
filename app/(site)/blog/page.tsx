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
    <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
      <div className="animate-fade-in">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent-600 dark:text-accent-400 mb-6">
          Blog
        </p>
      </div>
      <h1
        className="font-display text-5xl md:text-6xl text-stone-900 dark:text-stone-100 mb-6 leading-tight"
        style={{ animation: "slide-up 0.7s ease-out 0.1s both" }}
      >
        Writing
      </h1>
      <p
        className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mb-16 leading-relaxed"
        style={{ animation: "slide-up 0.7s ease-out 0.2s both" }}
      >
        Thoughts on engineering, building companies, and making technology work for people who need
        it most.
      </p>

      {posts.length > 0 ? (
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ animation: "slide-up 0.7s ease-out 0.3s both" }}
        >
          {posts.map((post: any) => (
            <BlogCard key={post._id} {...post} />
          ))}
        </div>
      ) : (
        <div
          className="text-center py-24"
          style={{ animation: "slide-up 0.7s ease-out 0.3s both" }}
        >
          <p className="font-display text-2xl text-stone-400 dark:text-stone-600 mb-4">
            Nothing here yet.
          </p>
          <p className="text-sm text-stone-500">
            Posts will appear here once published in the Studio.
          </p>
        </div>
      )}
    </div>
  );
}
