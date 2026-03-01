import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Joel Fickson Ngozo - Senior full-stack engineer at CommerceTools and founder of Sekuire, Elior Health, and Vwaza. Based in Berlin.",
  openGraph: {
    title: "About",
    description:
      "Joel Fickson Ngozo - Senior full-stack engineer at CommerceTools and founder of Sekuire, Elior Health, and Vwaza. Based in Berlin.",
    url: "/about",
  },
  twitter: {
    title: "About",
    description:
      "Joel Fickson Ngozo - Senior full-stack engineer at CommerceTools and founder of Sekuire, Elior Health, and Vwaza. Based in Berlin.",
  },
  alternates: {
    canonical: "/about",
  },
};

const timeline = [
  {
    year: "2022",
    title: "Senior Engineer, CommerceTools",
    description: "Building APIs and B2B enterprise starter-kits for commerce solutions in Berlin.",
  },
  {
    year: "2022",
    title: "Senior Engineer, ScalingFunds",
    description:
      "GraphQL APIs, React front-ends, and blockchain microservices for fintech in Berlin.",
  },
  {
    year: "2021",
    title: "Engineer, AKTEK",
    description: "Security product APIs and geospatial integrations in London.",
  },
  {
    year: "2020",
    title: "Engineer, CollabWorks",
    description: "Full-stack Node.js and React applications in Redwood City, California.",
  },
  {
    year: "2017",
    title: "Founded Elior Health Labs",
    description:
      "Digital healthcare platform with Flutter, React Native, and Node.js. Malawi and California.",
  },
  {
    year: "2016",
    title: "Founded TECULES",
    description: "Edtech startup for high school learners in Lilongwe, Malawi.",
  },
  {
    year: "2015",
    title: "Software Engineer",
    description:
      "Started building professionally. University of Malawi, Cisco certifications, open source.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
      <div className="animate-fade-in">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 gradient-line" />
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent-600 dark:text-accent-400">
            About
          </p>
        </div>
      </div>
      <h1
        className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-stone-900 dark:text-stone-100 mb-20 max-w-4xl leading-[1.05]"
        style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both" }}
      >
        Engineer first, <span className="text-stone-300 dark:text-stone-700">founder always.</span>
      </h1>

      <div
        className="grid md:grid-cols-[1fr,2fr] gap-12 md:gap-20 mb-28"
        style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both" }}
      >
        <div className="relative max-w-[200px]">
          <div className="aspect-square rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-900">
            <Image
              src="/og.jpeg"
              alt="Joel Fickson Ngozo"
              width={400}
              height={400}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-16 h-16 border-2 border-accent-500/20 rounded-2xl" />
        </div>
        <div className="space-y-6 text-stone-600 dark:text-stone-400 leading-[1.8]">
          <p>
            I&apos;m Joel Fickson Ngozo, a senior full-stack engineer based in Berlin with over a
            decade of experience shipping software. I currently work at CommerceTools, building APIs
            and enterprise commerce solutions. Before that I worked across fintech, security, and
            SaaS at companies like ScalingFunds, AKTEK, and CollabWorks - from London to San
            Francisco.
          </p>
          <p>
            Outside of my engineering work, I build ventures. Sekuire is my current focus - runtime
            control infrastructure for AI agents. I also founded Elior Health Labs (digital
            healthcare) and Vwaza Multimedia (music streaming for African artists).
          </p>
          <p>
            I&apos;m from Malawi and studied computer science at the University of Malawi. My career
            has taken me through California, London, and now Berlin. I thrive on solving complex
            problems and learning new technologies - from Rust and Go to Kubernetes and blockchain.
          </p>
          <p>
            When I&apos;m not shipping code, I&apos;m contributing to open source, writing about
            engineering, or exploring the next thing that catches my curiosity.
          </p>
        </div>
      </div>

      <div style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both" }}>
        <div className="flex items-center gap-4 mb-14">
          <span className="font-mono text-[10px] text-stone-300 dark:text-stone-700">01</span>
          <div className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 dark:text-stone-600">
            Journey
          </span>
        </div>
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <div
              key={i}
              className="group grid grid-cols-[72px,1fr] md:grid-cols-[100px,1fr] gap-6 md:gap-8 py-8 border-t border-stone-200 dark:border-stone-800 last:border-b"
            >
              <span className="font-mono text-sm text-accent-600 dark:text-accent-400 pt-0.5">
                {item.year}
              </span>
              <div>
                <h3 className="font-display font-bold text-stone-900 dark:text-stone-100 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-500 dark:text-stone-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
