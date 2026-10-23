"use client";

import { useEffect, useState } from "react";

export function ArticleToc({ items }: { items: { id: string; text: string }[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "0px 0px -70% 0px" },
    );
    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Contents"
      className="sticky top-8 self-start font-ui text-[13px] leading-snug max-md:hidden"
    >
      <b className="mb-2.5 block font-medium text-faint">Contents</b>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`block py-1 transition-colors hover:text-ink ${
            active === item.id ? "text-ink" : "text-faint"
          }`}
        >
          {item.text}
        </a>
      ))}
    </nav>
  );
}
