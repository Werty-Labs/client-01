import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DesktopNavLinks } from "@/components/site/desktop-nav-links";
import { MobileNav } from "@/components/site/mobile-nav";
import { images } from "@/lib/site-data";
import { mainNavigation, siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-40  bg-black/95 backdrop-blur text-white py-2">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch>
          <Image
            src={images.logo}
            alt={siteConfig.name}
            width={180}
            height={72}
            className="h-9 w-auto invert-0 dark:invert"
            priority
          />
          {/*<span className="hidden text-lg font-semibold sm:inline font-display">*/}
          {/*  {siteConfig.name}*/}
          {/*</span>*/}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <DesktopNavLinks items={mainNavigation} />
        </nav>

        <div className="hidden md:block hover:scale-105">
          <Button asChild size="lg">
            <Link href="/contact" prefetch>
              Plan your trip
            </Link>
          </Button>
        </div>

        <MobileNav items={mainNavigation} />
      </div>
    </header>
  );
}
