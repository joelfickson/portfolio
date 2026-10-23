"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/blog", label: "Writing" },
  { href: "/ventures", label: "Ventures" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav className="shell flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 pt-9 font-ui text-sm text-mute">
      <Link href="/" className="font-semibold text-ink">
        Joel Fickson Ngozo
      </Link>
      <div className="flex flex-wrap gap-x-[22px] gap-y-2">
        {links.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={
                active
                  ? "text-ink underline decoration-accent decoration-[1.5px] underline-offset-[6px]"
                  : "transition-colors hover:text-ink"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
