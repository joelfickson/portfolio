import { PageHeader } from "@/components/page-header";
import { experience, stack, yearRange } from "@/lib/experience";
import type { Metadata } from "next";
import Image from "next/image";

const description =
  "Joel Fickson Ngozo - Developer Success Engineer at Vercel and founder of Chia, Kazuni, Sekuire, Vwaza and Luwawa. Based in Berlin.";

export const metadata: Metadata = {
  title: "About",
  description,
  openGraph: {
    title: "About",
    description,
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="shell">
      <div className="mx-auto max-w-[868px]">
        <PageHeader
          title={
            <>
              Engineer first, <em className="text-accent">founder always.</em>
            </>
          }
        >
          <Image
            src="/og.jpeg"
            alt="Joel Fickson Ngozo"
            width={280}
            height={280}
            priority
            className="aspect-square w-24 rounded-full object-cover object-top md:w-[140px]"
          />
        </PageHeader>

        <div className="grid grid-cols-1 gap-x-12 md:grid-cols-[180px_minmax(0,640px)]">
          <div className="space-y-[22px] text-[19px] leading-[1.65] md:col-start-2">
            <p>
              I’m Joel Fickson Ngozo, a senior full-stack engineer based in Berlin with over a
              decade of shipping software. I work at Vercel as a Developer Success Engineer. Before
              that I spent three and a half years at CommerceTools building APIs and enterprise
              commerce solutions, and worked across fintech, security and SaaS at ScalingFunds,
              AKTEK and CollabWorks, from London to California.
            </p>
            <p>
              Outside of that, I build companies. Sekuire puts guardrails and permissions around AI
              agents. Vwaza is an all-in-one platform for African creators. Through Fickson Limited,
              my company in Malawi, I build Chia for mobile money billing, Kazuni for notifications,
              and Luwawa for HR and hiring. Before all of these came Elior Health Labs and TECULES.
            </p>
            <p>
              I’m from Malawi and studied computer science at the University of Malawi. When I’m not
              shipping code I’m contributing to open source, writing, or picking up the next thing
              that catches my curiosity, lately Rust.
            </p>
          </div>
        </div>

        <section className="mt-16 grid grid-cols-1 gap-x-12 border-t border-rule pt-[52px] pb-12 md:grid-cols-[180px_minmax(0,640px)]">
          <h2 className="self-start pt-1.5 pb-[18px] font-ui text-[13px] font-medium text-faint">
            Experience
          </h2>
          <div>
            {experience.map((r) => (
              <div key={r.company} className="border-b border-rule py-6 first:pt-0 last:border-b-0">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[22px] font-medium leading-tight">
                    {r.url ? (
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent"
                      >
                        {r.company}
                      </a>
                    ) : (
                      r.company
                    )}
                  </h3>
                  <time className="shrink-0 font-ui text-[13px] text-faint nums">
                    {yearRange(r)}
                  </time>
                </div>
                <p className="text-base italic text-mute">
                  {r.role}
                  {r.location ? `, ${r.location}` : ""}
                </p>
                {r.highlights.length > 0 ? (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-[17px] leading-relaxed marker:text-faint">
                    {r.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-[17px] leading-relaxed">{r.summary}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-x-12 border-t border-rule pt-[52px] pb-16 md:grid-cols-[180px_minmax(0,640px)]">
          <h2 className="self-start pt-1.5 pb-[18px] font-ui text-[13px] font-medium text-faint">
            Tools
          </h2>
          <p className="text-[19px] leading-[1.65]">{stack}</p>
        </section>
      </div>
    </div>
  );
}
