"use client";

import { slugify } from "@/lib/format";
import Link from "next/link";
import { useEffect, useState } from "react";

export type WritingItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  year: string;
  date: string | null;
  minutes: number | null;
  categories: string[];
};

export function WritingList({ posts }: { posts: WritingItem[] }) {
  const [active, setActive] = useState<string | null>(null);
  const topics = Array.from(new Set(posts.flatMap((p) => p.categories))).sort();

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("topic");
    const match = posts.flatMap((p) => p.categories).find((t) => slugify(t) === q);
    if (match) setActive(match);
  }, [posts]);

  function choose(topic: string | null) {
    setActive(topic);
    const url = new URL(window.location.href);
    if (topic) url.searchParams.set("topic", slugify(topic));
    else url.searchParams.delete("topic");
    window.history.replaceState(null, "", url);
  }

  const visible = active ? posts.filter((p) => p.categories.includes(active)) : posts;
  const years = Array.from(new Set(visible.map((p) => p.year)));
  const filters: [string | null, string, number][] = [
    [null, "All", posts.length],
    ...topics.map(
      (t) =>
        [t, t, posts.filter((p) => p.categories.includes(t)).length] as [string, string, number],
    ),
  ];

  return (
    <div className="grid grid-cols-1 gap-x-12 md:grid-cols-[180px_minmax(0,640px)]">
      <fieldset
        aria-label="Filter by topic"
        className="flex flex-wrap gap-x-[18px] gap-y-1.5 self-start pb-6 font-ui text-sm text-mute md:sticky md:top-8 md:flex-col md:pb-0"
      >
        {filters.map(([value, label, count]) => (
          <button
            key={label}
            type="button"
            aria-pressed={active === value}
            onClick={() => choose(value)}
            className={`cursor-pointer text-left leading-relaxed transition-colors hover:text-ink ${
              active === value ? "font-medium text-ink" : ""
            }`}
          >
            {label}
            <sup className="ml-0.5 text-[11px] font-normal text-faint nums">{count}</sup>
            {active === value && (
              <span
                aria-hidden="true"
                className="ml-2 inline-block h-[5px] w-[5px] rounded-full bg-accent align-[2px]"
              />
            )}
          </button>
        ))}
      </fieldset>
      <div>
        {years.map((year) => (
          <div key={year} className="pb-6">
            <div className="pb-1 font-ui text-[13px] text-faint nums">{year}</div>
            {visible
              .filter((p) => p.year === year)
              .map((p) => (
                <Link
                  key={p._id}
                  href={`/blog/${p.slug}`}
                  className="group block border-b border-rule py-[18px] last:border-b-0"
                >
                  <h3 className="text-[22px] font-medium leading-snug transition-colors group-hover:text-accent">
                    {p.title}
                  </h3>
                  {p.excerpt && <p className="mt-1 text-[17px] text-mute">{p.excerpt}</p>}
                  <div className="mt-2 font-ui text-[13px] text-faint nums">
                    {[p.date, p.minutes && `${p.minutes} min`].filter(Boolean).join(" · ")}
                    {p.categories.length > 0 && (
                      <span className="text-mute"> · {p.categories.join(", ")}</span>
                    )}
                  </div>
                </Link>
              ))}
          </div>
        ))}
        {visible.length === 0 && <p className="py-5 italic text-mute">Nothing here yet.</p>}
      </div>
    </div>
  );
}
