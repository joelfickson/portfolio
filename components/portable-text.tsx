import {
  PortableText as PortableTextRenderer,
  type PortableTextComponents,
} from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="font-display font-bold text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mt-14 mb-5">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-display font-bold text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mt-12 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display font-bold text-xl md:text-2xl text-stone-900 dark:text-stone-100 mt-10 mb-3">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-stone-600 dark:text-stone-400 leading-[1.8] mb-6">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="relative pl-6 my-10 text-stone-500 dark:text-stone-400 leading-[1.8] italic">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 gradient-line-v rounded-full" />
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-stone-900 dark:text-stone-100">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="font-mono text-sm bg-stone-100 dark:bg-stone-800/80 px-1.5 py-0.5 rounded text-accent-700 dark:text-accent-400">
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent-600 dark:text-accent-400 underline underline-offset-4 decoration-accent-500/30 hover:decoration-accent-500 transition-colors"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="pl-5 mb-6 space-y-2 list-none">{children}</ul>,
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 marker:text-stone-400 marker:font-mono marker:text-sm">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-stone-600 dark:text-stone-400 leading-[1.8] relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-px before:bg-accent-500">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="text-stone-600 dark:text-stone-400 leading-[1.8]">{children}</li>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-10">
          <Image
            src={urlFor(value).width(1200).url()}
            alt={value.alt || ""}
            width={1200}
            height={675}
            className="rounded-xl w-full"
          />
          {value.caption && (
            <figcaption className="font-mono text-xs text-stone-400 dark:text-stone-600 mt-3 text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export function PortableText({ value }: { value: any }) {
  return <PortableTextRenderer value={value} components={components} />;
}
