import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Joel Fickson Ngozo - Technical founder and full-stack engineer from Malawi, building products across healthcare, AI safety, and music streaming.",
};

const timeline = [
  {
    year: "Now",
    title: "Founder & CEO, Sekuire",
    description: "Building runtime control infrastructure for AI agents.",
  },
  {
    year: "2020",
    title: "Founder, Elior Health Labs",
    description: "Digital healthcare solutions for underserved communities.",
  },
  {
    year: "2018",
    title: "Founder, Vwaza Multimedia",
    description: "Music streaming platform connecting African artists with global audiences.",
  },
  {
    year: "2015",
    title: "Software Engineer",
    description: "Began building full-stack applications professionally. Open source contributor.",
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
        From Malawi to the world,{" "}
        <span className="text-stone-300 dark:text-stone-700">one product at a time.</span>
      </h1>

      <div
        className="grid md:grid-cols-[1fr,2fr] gap-12 md:gap-20 mb-28"
        style={{ animation: "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both" }}
      >
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 gradient-line-v rounded-full" />
          <p className="pl-6 font-display text-xl text-stone-400 dark:text-stone-500 leading-relaxed">
            &ldquo;The best way to predict the future is to build it.&rdquo;
          </p>
        </div>
        <div className="space-y-6 text-stone-600 dark:text-stone-400 leading-[1.8]">
          <p>
            I&apos;m Joel Fickson Ngozo, a full-stack engineer and technical founder with over a
            decade of experience building software. Born and raised in Malawi, I&apos;ve spent my
            career at the intersection of technology and real-world impact.
          </p>
          <p>
            I currently lead Sekuire, where we&apos;re building runtime control infrastructure for
            AI agents - ensuring autonomous systems remain safe and aligned. Before that, I founded
            Elior Health Labs to bring digital healthcare to underserved communities, and Vwaza
            Multimedia to give African artists a platform for their music.
          </p>
          <p>
            My approach to building is grounded in first principles: understand the problem deeply,
            choose the right tools, ship fast, iterate with real users. I believe the most impactful
            technology is built close to the problems it solves.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me contributing to open source, writing about
            engineering challenges, or exploring ways to make technology more accessible across
            Africa.
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
