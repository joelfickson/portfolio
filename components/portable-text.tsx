import {
  PortableText as PortableTextRenderer,
  type PortableTextComponents,
} from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

let isFirstParagraph = true;

function resetFirstParagraph() {
  isFirstParagraph = true;
}

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="font-display font-bold text-3xl md:text-4xl text-stone-900 dark:text-stone-100 mt-16 mb-5">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-display font-bold text-2xl md:text-3xl text-stone-900 dark:text-stone-100 mt-14 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display font-bold text-xl md:text-2xl text-stone-900 dark:text-stone-100 mt-10 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-display font-semibold text-lg text-stone-900 dark:text-stone-100 mt-8 mb-2">
        {children}
      </h4>
    ),
    normal: ({ children }) => {
      if (isFirstParagraph) {
        isFirstParagraph = false;
        return (
          <p className="text-stone-600 dark:text-stone-400 leading-[1.85] mb-6 text-[1.05rem] first-letter:font-display first-letter:text-[3.2rem] first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:mt-1 first-letter:leading-[0.85] first-letter:text-stone-900 dark:first-letter:text-stone-100">
            {children}
          </p>
        );
      }
      return <p className="text-stone-600 dark:text-stone-400 leading-[1.85] mb-6">{children}</p>;
    },
    blockquote: ({ children }) => (
      <blockquote className="relative pl-6 my-10 py-2 text-stone-500 dark:text-stone-400 leading-[1.85] italic">
        <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-accent-500 to-accent-500/20" />
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
      <code className="font-mono text-[0.875em] bg-stone-100 dark:bg-stone-800/80 px-1.5 py-0.5 rounded text-accent-700 dark:text-accent-400 border border-stone-200/50 dark:border-stone-700/50">
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent-600 dark:text-accent-400 underline decoration-accent-500/30 underline-offset-[3px] hover:decoration-accent-500 transition-colors"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="pl-5 mb-6 space-y-2.5 list-none">{children}</ul>,
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2.5 marker:text-accent-500/60 marker:font-mono marker:text-sm marker:font-medium">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-stone-600 dark:text-stone-400 leading-[1.85] relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[12px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent-500/40">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="text-stone-600 dark:text-stone-400 leading-[1.85] pl-1">{children}</li>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-12 -mx-4 sm:mx-0">
          <div className="rounded-xl overflow-hidden ring-1 ring-stone-200/50 dark:ring-stone-800/50">
            <Image
              src={urlFor(value).width(1200).url()}
              alt={value.alt || ""}
              width={1200}
              height={675}
              className="w-full"
            />
          </div>
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
  resetFirstParagraph();
  return <PortableTextRenderer value={value} components={components} />;
}
