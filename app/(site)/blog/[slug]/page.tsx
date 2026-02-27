import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { POST_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@/components/portable-text";

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
  return {
    title: post.title,
    description: post.excerpt || `${post.title} by Joel Fickson Ngozo`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      ...(post.mainImage?.asset && {
        images: [urlFor(post.mainImage).width(1200).height(630).url()],
      }),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug });

  if (!post) notFound();

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <article className="max-w-3xl mx-auto px-6 pt-24 pb-16">
      <div className="animate-fade-in">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs text-stone-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors mb-10"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to blog
        </Link>
      </div>

      <header style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both" }}>
        {post.categories && post.categories.length > 0 && (
          <div className="flex gap-3 mb-4">
            {post.categories.map((cat: string) => (
              <span
                key={cat}
                className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400"
              >
                {cat}
              </span>
            ))}
          </div>
        )}
        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-stone-900 dark:text-stone-100 leading-[1.1] mb-6">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-stone-400 dark:text-stone-500 mb-12">
          {post.author?.name && <span>{post.author.name}</span>}
          {date && (
            <>
              <span className="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-700" />
              <time className="font-mono text-xs">{date}</time>
            </>
          )}
        </div>
      </header>

      {post.mainImage?.asset && (
        <div
          className="aspect-[16/9] rounded-xl overflow-hidden mb-14 bg-stone-100 dark:bg-stone-900"
          style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both" }}
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

      <div style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both" }}>
        {post.body && <PortableText value={post.body} />}
      </div>
    </article>
  );
}
