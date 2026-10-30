export type StaticPost = {
  slug: string;
  href: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  minutes: number;
  categories: string[];
};

export const staticPosts: StaticPost[] = [
  {
    slug: "human-in-the-loop-is-not-the-solution",
    href: "/human-in-the-loop-is-not-the-solution.html",
    title: "Human In The Loop Is Not The Solution",
    excerpt:
      "Agents produce more work than humans can review. What Toyota and a 1983 paper on automation teach us about staying in control.",
    publishedAt: "2026-10-30",
    minutes: 6,
    categories: ["AI", "Engineering"],
  },
];
