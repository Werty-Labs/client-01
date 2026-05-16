"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavItemWrapper } from "@/components/animations/AnimatedSection";
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

export function DesktopNavLinksAnimated({ items }: DesktopNavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {items.map((item, index) => {
        const active = isActivePath(pathname, item.href);
        return (
          <NavItemWrapper key={item.href} index={index}>
            <Link
              href={item.href}
              className={cn(
                "text-md font-medium text-white/90 transition-colors hover:text-green-500 hover:scale-105",
                active && "font-semibold text-green-600",
              )}
              prefetch
            >
              {item.label}
            </Link>
          </NavItemWrapper>
        );
      })}
    </>
  );
}
