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
  categories?: string[];
  index?: number;
  variant?: "featured" | "editorial" | "compact";
};

const categoryColors: Record<string, string> = {
  AI: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  Engineering: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
  Startups: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  Career: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  Malawi: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
  Personal: "bg-stone-500/10 text-stone-600 dark:text-stone-400 border-stone-500/20",
  Tutorials: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
  Leadership: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
};

const defaultCategoryColor =
  "bg-stone-500/10 text-stone-600 dark:text-stone-400 border-stone-500/20";

function CategoryPill({ name }: { name: string }) {
  const color = categoryColors[name] || defaultCategoryColor;
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-[0.15em] rounded-full border ${color}`}
    >
      {name}
    </span>
  );
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function BlogCard({
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  categories,
  index = 0,
  variant = "editorial",
}: BlogCardProps) {
  if (variant === "featured")
    return (
      <FeaturedCard {...{ title, slug, excerpt, publishedAt, mainImage, categories, index }} />
    );
  if (variant === "compact") return <CompactCard {...{ title, slug, publishedAt, categories }} />;
  return <EditorialCard {...{ title, slug, excerpt, publishedAt, mainImage, categories, index }} />;
}

function FeaturedCard({ title, slug, excerpt, publishedAt, mainImage, categories }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug.current}`}
      className="group relative block rounded-2xl overflow-hidden bg-stone-900 dark:bg-stone-100"
    >
      <div className="grid lg:grid-cols-[1.2fr,1fr]">
        {mainImage?.asset ? (
          <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] overflow-hidden">
            <Image
              src={urlFor(mainImage).width(900).height(600).url()}
              alt={mainImage.alt || title}
              width={900}
              height={600}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900/0 via-stone-900/0 to-stone-900/60 dark:to-stone-100/60 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent lg:hidden" />
          </div>
        ) : (
          <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] bg-stone-800 dark:bg-stone-200 dot-grid opacity-30" />
        )}

        <div className="relative p-8 lg:p-12 flex flex-col justify-center -mt-20 lg:mt-0">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent-400">
              Latest
            </span>
            {publishedAt && (
              <>
                <span className="w-1 h-1 rounded-full bg-stone-600 dark:bg-stone-400" />
                <span className="text-[10px] font-mono text-stone-500">
                  {formatDate(publishedAt)}
                </span>
              </>
            )}
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-stone-100 dark:text-stone-900 leading-[1.1] mb-4 group-hover:text-accent-400 dark:group-hover:text-accent-600 transition-colors duration-300">
            {title}
          </h2>

          {excerpt && (
            <p className="text-stone-400 dark:text-stone-600 leading-relaxed line-clamp-3 mb-6 max-w-md">
              {excerpt}
            </p>
          )}

          {categories && categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((cat) => (
                <CategoryPill key={cat} name={cat} />
              ))}
            </div>
          )}

          <span className="inline-flex items-center gap-2 text-sm text-accent-400 group-hover:text-accent-300 transition-colors">
            Read article
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

function EditorialCard({
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  categories,
  index = 0,
}: BlogCardProps) {
  const stripeColors = [
    "from-violet-500 to-violet-600",
    "from-sky-500 to-sky-600",
    "from-amber-500 to-amber-600",
    "from-emerald-500 to-emerald-600",
    "from-rose-500 to-rose-600",
    "from-cyan-500 to-cyan-600",
    "from-orange-500 to-orange-600",
  ];
  const stripe = stripeColors[index % stripeColors.length];

  return (
    <Link
      href={`/blog/${slug.current}`}
      className="group relative flex gap-5 py-7 border-b border-stone-200/60 dark:border-stone-800/60 last:border-b-0"
    >
      <div
        className={`hidden sm:block absolute left-0 top-8 bottom-8 w-[3px] rounded-full bg-gradient-to-b ${stripe} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      <div className="hidden sm:flex flex-col items-end w-14 shrink-0 pt-1">
        <span className="font-display font-bold text-3xl text-stone-200 dark:text-stone-800 leading-none group-hover:text-accent-500/40 transition-colors duration-300">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex-1 min-w-0 sm:pl-2">
        <div className="flex items-center gap-2.5 mb-2.5">
          {categories && categories.length > 0 && <CategoryPill name={categories[0]} />}
          {publishedAt && (
            <span className="text-[11px] font-mono text-stone-400 dark:text-stone-600">
              {formatDate(publishedAt)}
            </span>
          )}
        </div>

        <h3 className="font-display font-bold text-lg md:text-xl text-stone-900 dark:text-stone-100 leading-snug group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-200 mb-1.5">
          {title}
        </h3>

        {excerpt && (
          <p className="text-sm text-stone-500 dark:text-stone-400 line-clamp-2 leading-relaxed max-w-xl">
            {excerpt}
          </p>
        )}
      </div>

      {mainImage?.asset && (
        <div className="hidden md:block w-28 h-20 rounded-lg overflow-hidden bg-stone-100 dark:bg-stone-900 shrink-0 self-center">
          <Image
            src={urlFor(mainImage).width(224).height(160).url()}
            alt={mainImage.alt || title}
            width={224}
            height={160}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}
    </Link>
  );
}

function CompactCard({ title, slug, publishedAt, categories }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug.current}`}
      className="group block py-4 border-b border-stone-200/40 dark:border-stone-800/40 last:border-b-0"
    >
      <div className="flex items-center gap-2 mb-1.5">
        {categories && categories.length > 0 && <CategoryPill name={categories[0]} />}
        {publishedAt && (
          <span className="text-[10px] font-mono text-stone-400 dark:text-stone-600">
            {formatDate(publishedAt)}
          </span>
        )}
      </div>
      <h3 className="font-display font-semibold text-sm text-stone-900 dark:text-stone-100 leading-snug group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
        {title}
      </h3>
    </Link>
  );
}

export function BlogCardFeaturedHome({
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  categories,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug.current}`}
      className="group relative block rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-900 h-full"
    >
      {mainImage?.asset ? (
        <div className="absolute inset-0">
          <Image
            src={urlFor(mainImage).width(800).height(500).url()}
            alt={mainImage.alt || title}
            width={800}
            height={500}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent" />
        </div>
      ) : (
        <div className="absolute inset-0 dot-grid bg-stone-200 dark:bg-stone-800" />
      )}
      <div className="relative p-6 flex flex-col justify-end h-full min-h-[280px]">
        <div className="flex items-center gap-2 mb-3">
          {categories && categories.length > 0 && (
            <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-accent-400">
              {categories[0]}
            </span>
          )}
          {publishedAt && (
            <>
              <span className="w-1 h-1 rounded-full bg-stone-500" />
              <span className="text-[10px] font-mono text-stone-400">
                {formatDate(publishedAt)}
              </span>
            </>
          )}
        </div>
        <h3 className="font-display font-bold text-lg text-white leading-snug group-hover:text-accent-400 transition-colors duration-200">
          {title}
        </h3>
        {excerpt && (
          <p className="mt-2 text-xs text-stone-300 line-clamp-2 leading-relaxed">{excerpt}</p>
        )}
      </div>
    </Link>
  );
}
