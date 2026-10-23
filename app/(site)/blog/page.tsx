import { PageHeader } from "@/components/page-header";
import { type WritingItem, WritingList } from "@/components/writing-list";
import { monthYear, readingMinutes } from "@/lib/format";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on engineering, building companies from Malawi and Berlin, and technology in Africa.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await client.fetch(POSTS_QUERY);
  const items: WritingItem[] = posts.map((p: any) => ({
    _id: p._id,
    title: p.title,
    slug: p.slug.current,
    excerpt: p.excerpt ?? undefined,
    year: new Date(p.publishedAt).getFullYear().toString(),
    date: monthYear(p.publishedAt),
    minutes: readingMinutes(p.plain),
    categories: p.categories ?? [],
  }));

  return (
    <div className="shell">
      <div className="mx-auto max-w-[868px]">
        <PageHeader
          title="Writing"
          intro="Notes on engineering, building companies from Malawi and Berlin, and what AI looks like from the African side of the gap."
        />
        <section className="border-t border-rule pt-[52px] pb-16">
          <WritingList posts={items} />
        </section>
      </div>
    </div>
  );
}
