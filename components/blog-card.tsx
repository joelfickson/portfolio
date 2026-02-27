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
  index?: number;
};

export function BlogCard({
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  index = 0,
}: BlogCardProps) {
  const date = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <Link
      href={`/blog/${slug.current}`}
      className="group grid md:grid-cols-[1fr,2fr] gap-4 md:gap-10 py-8 border-t border-stone-200 dark:border-stone-800 last:border-b"
    >
      <div>
        <span className="font-mono text-[10px] text-stone-300 dark:text-stone-700">
          {String(index + 1).padStart(2, "0")}
        </span>
        {date && (
          <p className="font-mono text-xs text-stone-400 dark:text-stone-600 mt-1">{date}</p>
        )}
        {mainImage?.asset && (
          <div className="mt-3 aspect-[16/9] rounded-lg overflow-hidden bg-stone-100 dark:bg-stone-900 max-w-[200px]">
            <Image
              src={urlFor(mainImage).width(400).height(225).url()}
              alt={mainImage.alt || title}
              width={400}
              height={225}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="font-display font-bold text-xl md:text-2xl text-stone-900 dark:text-stone-100 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors leading-tight">
          {title}
        </h3>
        {excerpt && (
          <p className="mt-2 text-sm text-stone-500 dark:text-stone-400 line-clamp-2 leading-relaxed max-w-lg">
            {excerpt}
          </p>
        )}
        <span className="mt-3 text-xs text-stone-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors flex items-center gap-1.5">
          Read
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
