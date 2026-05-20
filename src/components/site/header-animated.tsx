"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DesktopNavLinksAnimated } from "@/components/site/desktop-nav-links-animated";
import { MobileNav } from "@/components/site/mobile-nav";
import { LogoAnimation, CTASlideIn } from "@/components/animations/AnimatedSection";
import { images } from "@/lib/site-data";
import { mainNavigation, siteConfig } from "@/lib/site-config";

export function HeaderAnimated() {
  return (
    <header className="fixed top-4 left-0 right-0 z-40  bg-black/75 backdrop-blur text-white py-[0.5px] w-[92%] sm:w-[90%] md:w-4/5 mx-auto rounded-full px-2 pr-[0.001px]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <LogoAnimation>
          <Link href="/" className="flex items-center gap-2" prefetch>
            <Image
              src={images.logo}
              alt={siteConfig.name}
              width={180}
              height={72}
              className="h-8 w-auto invert-0 dark:invert"
              priority
            />
          </Link>
        </LogoAnimation>

        <nav className="hidden items-center gap-8 md:flex">
          <DesktopNavLinksAnimated items={mainNavigation} />
        </nav>

        <CTASlideIn>
          <div className="hidden md:block hover:scale-105 mr-0">
            <Button asChild size="lg" className={"rounded-full"}>
              <Link href="/contact" prefetch>
                Plan your trip
              </Link>
            </Button>
          </div>
        </CTASlideIn>

        <MobileNav items={mainNavigation} />
      </div>
    </header>
  );
}
