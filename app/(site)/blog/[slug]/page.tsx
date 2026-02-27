import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { POST_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@/components/portable-text";
import { ReadingProgress } from "@/components/reading-progress";
import { BlogCard } from "@/components/blog-card";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await client.fetch(POSTS_QUERY);
  return posts.map((post: any) => ({ slug: post.slug.current }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug });
  if (!post) return { title: "Post Not Found" };
  const description = post.excerpt || `${post.title} by Joel Fickson Ngozo`;
  const images = post.mainImage?.asset
    ? [urlFor(post.mainImage).width(1200).height(630).url()]
    : undefined;
  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Joel Fickson Ngozo"],
      ...(images && { images }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      ...(images && { images }),
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug });

  if (!post) notFound();

  const allPosts = await client.fetch(POSTS_QUERY);
  const related = allPosts.filter((p: any) => p._id !== post._id).slice(0, 3);

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const readingTime = post.body
    ? Math.max(
        1,
        Math.ceil(
          post.body
            .filter((b: any) => b._type === "block")
            .reduce(
              (acc: number, b: any) =>
                acc +
                (b.children || []).reduce(
                  (a: number, c: any) => a + (c.text?.split(/\s+/).length || 0),
                  0,
                ),
              0,
            ) / 200,
        ),
      )
    : null;

  return (
    <>
      <ReadingProgress />

      <article className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <div className="animate-fade-in">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs text-stone-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors mb-12 group"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform group-hover:-translate-x-1"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to blog
          </Link>
        </div>

        <header
          style={{
            animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both",
          }}
        >
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {post.categories.map((cat: string) => (
                <span
                  key={cat}
                  className="inline-flex items-center px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-[0.15em] rounded-full border bg-accent-500/10 text-accent-600 dark:text-accent-400 border-accent-500/20"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-[2.75rem] text-stone-900 dark:text-stone-100 leading-[1.1] mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-stone-400 dark:text-stone-500 pb-8 mb-10 border-b border-stone-200/60 dark:border-stone-800/60">
            {post.author?.image?.asset && (
              <Image
                src={urlFor(post.author.image).width(40).height(40).url()}
                alt={post.author.name}
                width={40}
                height={40}
                className="w-8 h-8 rounded-full object-cover ring-2 ring-stone-200 dark:ring-stone-800"
              />
            )}
            {post.author?.name && (
              <span className="font-medium text-stone-600 dark:text-stone-300">
                {post.author.name}
              </span>
            )}
            {date && (
              <>
                <span className="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-700" />
                <time className="font-mono text-xs">{date}</time>
              </>
            )}
            {readingTime && (
              <>
                <span className="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-700" />
                <span className="font-mono text-xs">{readingTime} min read</span>
              </>
            )}
          </div>
        </header>

        {post.mainImage?.asset && (
          <div
            className="aspect-[16/9] rounded-xl overflow-hidden mb-14 bg-stone-100 dark:bg-stone-900 ring-1 ring-stone-200/50 dark:ring-stone-800/50"
            style={{
              animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both",
            }}
          >
            <Image
              src={urlFor(post.mainImage).width(1200).height(675).url()}
              alt={post.mainImage.alt || post.title}
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        )}

        <div
          className="prose-article"
          style={{
            animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both",
          }}
        >
          {post.body && <PortableText value={post.body} />}
        </div>
      </article>

      {related.length > 0 && (
        <aside className="max-w-5xl mx-auto px-6 lg:px-8 pb-20">
          <div className="border-t border-stone-200/60 dark:border-stone-800/60 pt-14">
            <div className="flex items-center gap-4 mb-10">
              <span className="font-mono text-[10px] text-stone-300 dark:text-stone-700">More</span>
              <div className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 dark:text-stone-600">
                Keep Reading
              </span>
            </div>
            <div className="divide-y divide-stone-200/60 dark:divide-stone-800/60">
              {related.map((p: any, i: number) => (
                <BlogCard key={p._id} index={i} variant="editorial" {...p} />
              ))}
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
