"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/about", label: "About", num: "01" },
  { href: "/career", label: "Career", num: "02" },
  { href: "/ventures", label: "Ventures", num: "03" },
  { href: "/projects", label: "Projects", num: "04" },
  { href: "/blog", label: "Blog", num: "05" },
  { href: "/contact", label: "Contact", num: "06" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-bold text-lg tracking-tight text-stone-900 dark:text-stone-100 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
        >
          JFN
          <span className="text-accent-500">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? "text-accent-600 dark:text-accent-400"
                    : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
                }`}
              >
                <span className="font-mono text-[10px] text-stone-300 dark:text-stone-700 mr-1">
                  {link.num}
                </span>
                {link.label}
              </Link>
            );
          })}
          <div className="ml-2 pl-3 border-l border-stone-200 dark:border-stone-800">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="w-9 h-9 flex items-center justify-center text-stone-600 dark:text-stone-400 cursor-pointer"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur-xl border-t border-stone-200/50 dark:border-stone-800/50">
          <div className="px-6 py-6 flex flex-col gap-1">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 py-2.5 transition-colors ${
                    active
                      ? "text-accent-600 dark:text-accent-400"
                      : "text-stone-600 dark:text-stone-400"
                  }`}
                >
                  <span className="font-mono text-[10px] text-stone-300 dark:text-stone-700 w-5">
                    {link.num}
                  </span>
                  <span className="text-sm">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
