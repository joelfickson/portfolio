import { hostname } from "@/lib/format";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export type Venture = {
  _id: string;
  name: string;
  tagline?: string;
  description?: string;
  url?: string;
  role?: string;
  banner: {
    alt?: string;
    hotspot?: { x: number; y: number };
  };
};

export function VentureGrid({
  ventures,
  withDescription = false,
}: {
  ventures: Venture[];
  withDescription?: boolean;
}) {
  return (
    <div className="col-span-full grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {ventures.map((v) => {
        const domain = hostname(v.url);
        const position = v.banner.hotspot
          ? `${v.banner.hotspot.x * 100}% ${v.banner.hotspot.y * 100}%`
          : "left center";
        return (
          <a
            key={v._id}
            href={v.url ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <Image
              src={urlFor(v.banner).width(1200).url()}
              alt={v.banner.alt || v.name}
              width={1200}
              height={400}
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              className="aspect-[2/1] w-full object-cover transition-opacity duration-200 group-hover:opacity-90"
              style={{ objectPosition: position }}
            />
            <div className="mt-3.5 flex items-baseline justify-between gap-3">
              <h3 className="text-[22px] font-medium leading-tight transition-colors group-hover:text-accent">
                {v.name}
              </h3>
              {domain && <span className="font-ui text-[13px] text-faint">{domain}</span>}
            </div>
            {v.tagline && (
              <p className="mt-1 text-base italic leading-normal text-mute">{v.tagline}</p>
            )}
            {withDescription && v.description && (
              <p className="mt-2.5 text-[17px] leading-relaxed">{v.description}</p>
            )}
          </a>
        );
      })}
    </div>
  );
}
