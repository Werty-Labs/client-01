"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavigationItem } from "@/types/site";

type DesktopNavLinksProps = {
  items: NavigationItem[];
};

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopNavLinks({ items }: DesktopNavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {items.map((item) => {
        const active = isActivePath(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-lg font-medium text-white/90 transition-colors hover:text-primary",
              active && "font-semibold text-primary",
            )}
            prefetch
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
//TEST
