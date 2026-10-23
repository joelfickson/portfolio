import { ArticleToc } from "@/components/article-toc";
import { PortableText } from "@/components/portable-text";
import { blockText, collectCitations, collectHeadings } from "@/lib/citations";
import { hostname, monthYear, readingMinutes, slugify } from "@/lib/format";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { ADJACENT_POSTS_QUERY, POSTS_QUERY, POST_QUERY } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 60;
export const dynamicParams = true;

type Props = {
  params: Promise<{ slug: string }>;
};

const columns =
  "grid grid-cols-1 gap-x-12 md:grid-cols-[180px_minmax(0,640px)] min-[1180px]:grid-cols-[180px_minmax(0,640px)_200px]";

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

  const adjacent = post.publishedAt
    ? await client.fetch(ADJACENT_POSTS_QUERY, { publishedAt: post.publishedAt })
    : { previous: null, next: null };
  const body: any[] = post.body ?? [];
  const content =
    body[0]?._type === "block" && blockText(body[0]).trim() === post.title.trim()
      ? body.slice(1)
      : body;
  const citations = collectCitations(content);
  const headings = collectHeadings(content);
  const sources = Array.from(citations.values());
  const minutes = readingMinutes(post.plain);
  const topic = post.categories?.[0];
  const authorImage = post.author?.image?.asset
    ? urlFor(post.author.image).width(96).height(96).url()
    : "/og.jpeg";

  const avatar = (size: number) => (
    <Image
      src={authorImage}
      alt=""
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className="shrink-0 rounded-full object-cover object-top"
    />
  );

  return (
    <div className="shell-article">
      <header className={`${columns} pt-[88px] pb-14 max-md:pt-12 max-md:pb-9`}>
        <div className="md:col-start-2">
          <div className="mb-[18px] font-ui text-[13px] text-faint nums">
            {[monthYear(post.publishedAt), minutes && `${minutes} min read`]
              .filter(Boolean)
              .join(" · ")}
            {topic && (
              <>
                {" · "}
                <Link href={`/blog?topic=${slugify(topic)}`} className="text-accent">
                  {topic}
                </Link>
              </>
            )}
          </div>
          <h1 className="text-[42px] leading-[1.18] tracking-[-0.012em] nums max-md:text-[32px]">
            {post.title}
          </h1>
          <div className="mt-7 flex items-center gap-3 font-ui text-sm text-mute">
            {avatar(36)}
            <div>
              <b className="block font-medium text-ink">Joel Fickson Ngozo</b>
              Berlin
            </div>
          </div>
        </div>
      </header>

      {post.mainImage?.asset && (
        <div className={`${columns} mb-14`}>
          <Image
            src={urlFor(post.mainImage).width(1280).url()}
            alt={post.mainImage.alt || post.title}
            width={1280}
            height={720}
            priority
            sizes="(min-width: 820px) 640px, 100vw"
            className="h-auto w-full md:col-start-2"
          />
        </div>
      )}

      <div className={columns}>
        <ArticleToc items={headings} />
        <article className="prose-article md:col-start-2">
          <PortableText value={content} citations={citations} />
        </article>
      </div>

      {sources.length > 0 && (
        <section id="sources" className={`${columns} mt-[72px] border-t border-rule py-[52px]`}>
          <h2 className="pt-1.5 pb-[18px] font-ui text-[13px] font-medium text-faint">Sources</h2>
          <ol className="font-ui text-sm text-mute">
            {sources.map((s) => (
              <li
                key={s.n}
                id={`source-${s.n}`}
                className="grid scroll-mt-6 grid-cols-[28px_1fr] py-1.5 nums"
              >
                <span className="font-semibold text-accent">{s.n}</span>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-rule underline-offset-[3px] hover:text-accent"
                >
                  {s.label.trim() || hostname(s.href)}
                  <span className="text-faint"> · {hostname(s.href)}</span>
                </a>
              </li>
            ))}
          </ol>
        </section>
      )}

      <section className={`${columns} border-t border-rule py-[52px]`}>
        <div className="flex items-start gap-4 font-ui text-[15px] leading-relaxed text-mute md:col-start-2">
          {avatar(48)}
          <div>
            <b className="block font-medium text-ink">Joel Fickson Ngozo</b>
            Engineer at Vercel and founder. I write about engineering and technology in Africa.{" "}
            <Link href="/contact" className="text-accent">
              Get in touch.
            </Link>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-start-2">
          {adjacent.previous ? (
            <Link href={`/blog/${adjacent.previous.slug.current}`} className="group">
              <span className="mb-1 block font-ui text-[13px] text-faint">Previous</span>
              <b className="text-xl font-medium leading-snug group-hover:text-accent">
                {adjacent.previous.title}
              </b>
            </Link>
          ) : (
            <span />
          )}
          <Link
            href={adjacent.next ? `/blog/${adjacent.next.slug.current}` : "/blog"}
            className="group sm:text-right"
          >
            <span className="mb-1 block font-ui text-[13px] text-faint">
              {adjacent.next ? "Next" : "More"}
            </span>
            <b className="text-xl font-medium leading-snug group-hover:text-accent">
              {adjacent.next ? adjacent.next.title : "All writing"}
            </b>
          </Link>
        </div>
      </section>
    </div>
  );
}
