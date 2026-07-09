"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/over-planvista", label: "Over Planvista" },
  { href: "/diensten", label: "Diensten" },
  { href: "/tarieven", label: "Tarieven" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-cream/92 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-5 px-8 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Planvista"
            width={228}
            height={226}
            className="h-[50px] w-auto"
            priority
          />
        </Link>

        <nav className="flex flex-wrap items-center gap-6 text-[15px] tracking-[0.02em]">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "border-b-[1.5px] border-accent-light pb-0.5 font-semibold text-ink"
                    : "text-ink hover:text-ink-soft"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a
          href="mailto:info@planvista.nl"
          className="whitespace-nowrap rounded-full bg-ink px-[22px] py-[11px] text-sm font-medium text-cream transition-opacity hover:opacity-90"
        >
          Plan een kennismaking
        </a>
      </div>
    </header>
  );
}
