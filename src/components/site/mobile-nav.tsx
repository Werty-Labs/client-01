"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/site-data";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="md:hidden">
      <button
        className="rounded-md p-2 hover:bg-white/10 transition-colors"
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={open}
      >
        <Menu className="size-6 text-white" />
      </button>

      {mounted && typeof document !== "undefined" ? createPortal(
        <AnimatePresence>
          {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-black text-white p-6 justify-between"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => setOpen(false)} prefetch className="flex items-center gap-2">
                <Image
                  src={images.logo}
                  alt={siteConfig.name}
                  width={150}
                  height={60}
                  className="h-8 w-auto"
                />
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-2 bg-white/10 hover:bg-white/20 transition-colors focus:outline-none"
                aria-label="Close navigation menu"
              >
                <X className="size-6 text-white" />
              </button>
            </div>

            {/* Centered navigation links */}
            <nav className="flex flex-col items-center gap-8 my-auto">
              {items.map((item, index) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + index * 0.06,
                      type: "spring",
                      stiffness: 120,
                      damping: 14,
                    }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "text-3xl font-display font-bold transition-all duration-300 hover:text-green-400 hover:scale-105",
                        active ? "text-green-500" : "text-white/80"
                      )}
                      prefetch
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* CTA Button at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + items.length * 0.06, type: "spring" }}
              className="w-full"
            >
              <Button asChild className="w-full h-12 rounded-full bg-green-600 hover:bg-green-700 text-white text-base font-semibold">
                <Link href="/contact" prefetch onClick={() => setOpen(false)}>
                  Plan your trip
                </Link>
              </Button>
            </motion.div>
          </motion.div>
            )}
        </AnimatePresence>,
        document.body
      ) : null}
    </div>
  );
}
