import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { VENTURES_QUERY } from "@/sanity/lib/queries";
import { VentureCard } from "@/components/venture-card";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "Companies and ventures founded by Joel Fickson Ngozo - Sekuire, Elior Health Labs, Vwaza Multimedia.",
};

const fallbackVentures = [
  {
    _id: "sekuire",
    name: "Sekuire",
    description:
      "Runtime control infrastructure for AI agents. Ensuring autonomous systems remain safe, aligned, and within operational boundaries.",
    url: "https://sekuire.com",
    role: "Founder & CEO",
    status: "active",
    order: 1,
  },
  {
    _id: "elior",
    name: "Elior Health Labs",
    description:
      "Digital healthcare solutions bringing accessible medical infrastructure to underserved communities across Africa.",
    role: "Founder",
    status: "active",
    order: 2,
  },
  {
    _id: "vwaza",
    name: "Vwaza Multimedia",
    description:
      "Music streaming platform connecting African artists with global audiences. Enabling discovery and fair compensation for creators.",
    role: "Founder",
    status: "active",
    order: 3,
  },
];

export default async function VenturesPage() {
  let ventures = await client.fetch(VENTURES_QUERY);
  if (!ventures || ventures.length === 0) {
    ventures = fallbackVentures;
  }

  const featured = ventures[0];
  const others = ventures.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
      <div className="animate-fade-in">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 gradient-line" />
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent-600 dark:text-accent-400">
            Ventures
          </p>
        </div>
      </div>
      <h1
        className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-stone-900 dark:text-stone-100 mb-6 leading-[1.05]"
        style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both" }}
      >
        What I&apos;m Building
      </h1>
      <p
        className="text-lg text-stone-500 dark:text-stone-400 max-w-2xl mb-16 leading-relaxed"
        style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both" }}
      >
        Companies and projects I&apos;ve founded, each addressing a different challenge with
        technology as the lever.
      </p>

      <div style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both" }}>
        {featured && <VentureCard {...featured} variant="featured" />}
        {others.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {others.map((venture: any) => (
              <VentureCard key={venture._id} {...venture} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
