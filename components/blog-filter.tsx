"use client";

import { useState } from "react";
import { BlogCard } from "./blog-card";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
  mainImage?: any;
  author?: string;
  categories?: string[];
};

export function BlogFilter({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState<string | null>(null);

  const allCategories = Array.from(new Set(posts.flatMap((p) => p.categories || []))).sort();

  const featured = posts[0];
  const rest = posts.slice(1);
  const filtered = active ? rest.filter((p) => p.categories?.includes(active)) : rest;

  return (
    <>
      {featured && (
        <div
          className="mb-14"
          style={{
            animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both",
          }}
        >
          <BlogCard variant="featured" {...featured} />
        </div>
      )}

      {allCategories.length > 0 && (
        <div
          className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none"
          style={{
            animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both",
          }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 dark:text-stone-600 shrink-0 mr-1">
            Filter
          </span>
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-pressed={active === null}
            className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50 dark:focus-visible:ring-offset-stone-950 ${
              active === null
                ? "bg-stone-900 dark:bg-stone-100 border-stone-900 dark:border-stone-100 text-stone-100 dark:text-stone-900 shadow-sm"
                : "bg-stone-100 dark:bg-stone-900 border-stone-200 dark:border-stone-800 text-stone-500 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 hover:border-stone-300 dark:hover:border-stone-700"
            }`}
          >
            All
          </button>
          {allCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(active === cat ? null : cat)}
              aria-pressed={active === cat}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50 dark:focus-visible:ring-offset-stone-950 ${
                active === cat
                  ? "bg-stone-900 dark:bg-stone-100 border-stone-900 dark:border-stone-100 text-stone-100 dark:text-stone-900 shadow-sm"
                  : "bg-stone-100 dark:bg-stone-900 border-stone-200 dark:border-stone-800 text-stone-500 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 hover:border-stone-300 dark:hover:border-stone-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div
        style={{
          animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both",
        }}
      >
        {filtered.length > 0 ? (
          <div className="divide-y divide-stone-200/60 dark:divide-stone-800/60">
            {filtered.map((post, i) => (
              <BlogCard key={post._id} index={i} variant="editorial" {...post} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="font-display text-xl text-stone-300 dark:text-stone-700">
              No posts in this category yet.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
