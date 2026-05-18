import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DesktopNavLinks } from "@/components/site/desktop-nav-links";
import { MobileNav } from "@/components/site/mobile-nav";
import { images } from "@/lib/site-data";
import { mainNavigation, siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="fixed top-4 left-0 right-0 z-40  bg-black/75 backdrop-blur text-white py-[0.5px] w-4/5 mx-auto rounded-full px-2 pr-[0.001px]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch>
          <Image
            src={images.logo}
            alt={siteConfig.name}
            width={180}
            height={72}
            loading={"eager"}
            className="h-8 w-auto invert-0 dark:invert"
            priority
          />
          {/*<span className="hidden text-lg font-semibold sm:inline font-display">*/}
          {/*  {siteConfig.name}*/}
          {/*</span>*/}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <DesktopNavLinks items={mainNavigation} />
        </nav>

        <div className="hidden md:block hover:scale-105 mr-0">
          <Button asChild size="lg" className={"rounded-full"}>
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
