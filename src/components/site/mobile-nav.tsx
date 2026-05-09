"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { NavigationItem } from "@/types/site";

type MobileNavProps = {
  items: NavigationItem[];
};

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNav({ items }: MobileNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        className="rounded-md p-2"
        onClick={() => setOpen((current) => !current)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open ? (
        <div className="border-t border-border bg-background">
          <nav className="flex flex-col gap-3 p-4">
            {items.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "py-1 text-base font-medium",
                    active && "text-primary",
                  )}
                  prefetch
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button asChild className="mt-2">
              <Link href="/contact" prefetch onClick={() => setOpen(false)}>
                Plan your trip
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
