import { type Venture, VentureGrid } from "@/components/venture-grid";
import { client } from "@/sanity/lib/client";
import { VENTURES_QUERY } from "@/sanity/lib/queries";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Ventures",
  description: "Companies founded by Joel Fickson Ngozo: Chia, Kazuni, Sekuire, Vwaza and Luwawa.",
  alternates: {
    canonical: "/ventures",
  },
};

export default async function VenturesPage() {
  const ventures = await client.fetch<Venture[]>(VENTURES_QUERY);

  return (
    <div className="shell">
      <header className="grid grid-cols-12 gap-x-8 pt-24 pb-[88px] max-md:pt-12 max-md:pb-14">
        <div className="col-span-full lg:col-span-8">
          <h1 className="text-[clamp(40px,4.6vw,62px)] leading-[1.1] tracking-[-0.02em]">
            Ventures
          </h1>
          <p className="mt-7 max-w-[560px] text-xl leading-[1.55] text-mute">
            Companies I’ve started. Chia, Kazuni and Luwawa are built by Fickson Limited, my company
            in Malawi, and run on each other: Luwawa sends email through Kazuni, and both bill
            through Chia.
          </p>
        </div>
      </header>
      <section className="grid grid-cols-12 gap-x-8 border-t border-rule pt-14 pb-16">
        <VentureGrid ventures={ventures} withDescription />
      </section>
    </div>
  );
}
