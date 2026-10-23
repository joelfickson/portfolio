import { type Citation, blockText } from "@/lib/citations";
import { hostname, slugify } from "@/lib/format";
import { urlFor } from "@/sanity/lib/image";
import {
  type PortableTextComponents,
  PortableText as PortableTextRenderer,
} from "@portabletext/react";
import Image from "next/image";

function makeComponents(citations: Map<string, Citation>): PortableTextComponents {
  return {
    block: {
      h2: ({ children, value }) => <h2 id={slugify(blockText(value))}>{children}</h2>,
      h3: ({ children }) => <h3>{children}</h3>,
      h4: ({ children }) => <h3>{children}</h3>,
      blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    },
    marks: {
      link: ({ children, value }) => {
        const citation = value?._key ? citations.get(value._key) : undefined;
        if (!citation) {
          return <a href={value?.href}>{children}</a>;
        }
        return (
          <>
            <a href={citation.href} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
            <a href={`#source-${citation.n}`} className="ref" aria-label={`Source ${citation.n}`}>
              {citation.n}
            </a>
            <span className="sn">
              <b>{citation.n}</b>
              <a href={citation.href} target="_blank" rel="noopener noreferrer">
                {hostname(citation.href)}
              </a>
            </span>
          </>
        );
      },
    },
    types: {
      image: ({ value }) => {
        if (!value?.asset) return null;
        return (
          <figure>
            <Image
              src={urlFor(value).width(1280).url()}
              alt={value.alt || ""}
              width={1280}
              height={720}
              sizes="(min-width: 820px) 640px, 100vw"
              className="h-auto w-full"
            />
            {value.caption && <figcaption>{value.caption}</figcaption>}
          </figure>
        );
      },
    },
  };
}

export function PortableText({
  value,
  citations = new Map(),
}: {
  value: any;
  citations?: Map<string, Citation>;
}) {
  return <PortableTextRenderer value={value} components={makeComponents(citations)} />;
}
