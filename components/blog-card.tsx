import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type BlogCardProps = {
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
  mainImage?: any;
  author?: string;
};

export function BlogCard({ title, slug, excerpt, publishedAt, mainImage, author }: BlogCardProps) {
  const date = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <Link href={`/blog/${slug.current}`} className="group block">
      {mainImage?.asset && (
        <div className="aspect-[16/9] rounded-lg overflow-hidden mb-4 bg-stone-100 dark:bg-stone-900">
          <Image
            src={urlFor(mainImage).width(800).height(450).url()}
            alt={mainImage.alt || title}
            width={800}
            height={450}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="space-y-2">
        {date && (
          <p className="text-xs font-mono text-stone-500 dark:text-stone-500 tracking-wider uppercase">
            {date}
          </p>
        )}
        <h3 className="font-display text-xl text-stone-900 dark:text-stone-100 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
          {title}
        </h3>
        {excerpt && (
          <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">
            {excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}
