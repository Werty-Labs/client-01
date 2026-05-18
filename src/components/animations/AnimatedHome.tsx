"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HeroParallax,
  HeroContentParallax,
  HeroHeadline,
  HeroSubtext,
  HeroButtons,
  HeroButton,
  ScrollProgressBar,
} from "@/components/animations/HeroAnimations";
import {
  AnimatedHeading,
  StaggeredWords,
  StaggerContainer,
  AntiGravityCard,
  MagneticScrollCard,
} from "@/components/animations/AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { images } from "@/lib/site-data";
import type { Category, Destination, Tour, Service } from "@/types/site";

type AnimatedHomeProps = {
  categories: Category[];
  destinations: Destination[];
  popularTours: Tour[];
  services: Service[];
};

export function AnimatedHome({
  categories,
  destinations,
  popularTours,
  services,
}: AnimatedHomeProps) {
  const [activeService, setActiveService] = useState(1);

  const prevService = () => {
    setActiveService((prev) => (prev - 1 + services.length) % services.length);
  };
  const nextService = () => {
    setActiveService((prev) => (prev + 1) % services.length);
  };

  return (
    <>
      {/* Scroll progress bar at top of viewport */}
      <ScrollProgressBar />

      {/* ── Fixed hero (stays in place while you scroll) ── */}
      <section className="fixed inset-0 z-0 flex items-center">
        <HeroParallax>
          <Image
            src={images.hero}
            alt="Sigiriya rock fortress at sunset"
            fill
            priority
            className="object-cover brightness-70"
            sizes="100vw"
          />
        </HeroParallax>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/30 to-black/10" />
        <HeroContentParallax className="w-full mx-auto max-w-7xl px-4 py-24 z-10 text-[#F2F0EF] sm:px-6">
          <HeroHeadline className=" mt-3 max-w-3xl font-display1 text-4xl font-normal leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl ">
            Discover Sri Lanka Like Never Before
          </HeroHeadline>
          <HeroSubtext className="mt-5 max-w-2xl text-lg opacity-90  ">
            Wildlife safaris, ancient cities, hill-country trains and palm-fringed
            beaches - crafted into one unforgettable journey.
          </HeroSubtext>
          <HeroButtons>
            <HeroButton>
              <Button asChild size="lg" className={'rounded-full'}>
                <Link href="/tours" prefetch>
                  Browse tours
                </Link>
              </Button>
            </HeroButton>
            <HeroButton>
              <Button asChild size="lg" variant="secondary" className={'rounded-full'}>
                <Link href="/contact" prefetch>
                  Plan with us
                </Link>
              </Button>
            </HeroButton>
          </HeroButtons>
        </HeroContentParallax>
      </section>

      {/* Spacer: pushes scrollable content below the full-screen hero */}
      <div className="h-screen" />

      {/* ── Scrollable content (slides over the hero) ── */}
      <div className="relative z-10 bg-background rounded-t-[2.5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.15)]">
      {/* ── Experience section ── */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <AnimatedHeading threshold={0.2} variant="fadeUp">
            <p className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.5l-1.3 2.6c-.2.4-.1 1 .3 1.3L9 14l-4 4-3-1-1 1 4 4 1-1-1-3 4-4 3.4 6.3c.3.5.9.6 1.3.3l2.6-1.3c.4-.2.6-.6.5-1.1z"/></svg>{" "}
              Explore by Experience
            </p>
          </AnimatedHeading>
          <StaggeredWords
            text="Experience Diverse Worlds On One Planet"
            className="mt-4 font-display1 text-4xl sm:text-5xl font-bold tracking-tight text-[#052b36]"
            threshold={0.3}
            staggerMs={60}
          />
        </div>
        <StaggerContainer
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 items-start"
          threshold={0.15}
          staggerDelay={0.2}
        >
          {categories.map((category, index) => {
            const isTextTop = index % 2 !== 0;
            return (
              <AntiGravityCard key={category.title} className="flex flex-col gap-4 group cursor-pointer">
                {isTextTop && (
                  <div>
                    <h3 className="font-display font-bold text-xl text-[#052b36] group-hover:text-primary transition-colors">{category.title}</h3>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-3">{category.blurb}</p>
                  </div>
                )}
                <div className={`relative w-full overflow-hidden rounded-[24px] ${isTextTop ? 'aspect-[4/5]' : 'aspect-[3/4]'}`}>
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                </div>
                {!isTextTop && (
                  <div>
                    <h3 className="font-display font-bold text-xl text-[#052b36] group-hover:text-primary transition-colors">{category.title}</h3>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-3">{category.blurb}</p>
                  </div>
                )}
              </AntiGravityCard>
            );
          })}
        </StaggerContainer>

        <AnimatedHeading threshold={0.2} delay={0.2}>
          <div className="mt-16 flex items-center justify-between gap-6">
            <p className="whitespace-nowrap text-sm text-gray-500 font-medium">Explore more journeys waiting for you</p>
            <div className="h-px flex-1 bg-gray-300"></div>
            <Button asChild size="lg" className="rounded-full bg-[#052b36] hover:bg-[#031d24] text-white pl-6 pr-2 gap-4">
              <Link href="/tours" prefetch>
                View Packages
                <span className="bg-white/10 p-2 rounded-full">
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </Button>
          </div>
        </AnimatedHeading>
      </section>

      {/* ── Tours section ── */}
      <section className="bg-[#f4f5fb] py-18 sm:py-22 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div>
              <AnimatedHeading threshold={0.25} variant="scaleIn">
                <h2 className="font-display1 text-3xl font-semibold tracking-tight text-[#101828] sm:text-4xl lg:text-5xl">
                  Explore Popular Tours
                </h2>
              </AnimatedHeading>
              <AnimatedHeading threshold={0.3} variant="blurIn" delay={0.2}>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#667085] sm:text-lg">
                  Find your next Sri Lanka journey with Tarragon Leisure. From wildlife safaris
                  and surf escapes to cultural landmarks, we&apos;ve got the perfect tour for you.
                </p>
              </AnimatedHeading>
            </div>
          </div>

          <StaggerContainer
            className="mt-12 grid gap-x-7 gap-y-10 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3"
            threshold={0.1}
            staggerDelay={0.18}
          >
            {popularTours.map((tour) => (
              <MagneticScrollCard key={tour.slug}>
                <Link
                  href={`/tours/${tour.slug}`}
                  className="group block"
                  prefetch
                >
                  <div className="relative aspect-[16/12] overflow-hidden rounded-[26px] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-all duration-400 group-hover:-translate-y-3 group-hover:shadow-[0_24px_56px_rgba(15,23,42,0.14)]">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 z-10 flex items-start opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="mx-4 mt-4 flex w-full items-center justify-between rounded-full bg-white/95 px-4 py-3 text-[#101828] shadow-[0_14px_30px_rgba(15,23,42,0.12)] backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_18px_36px_rgba(15,23,42,0.18)] sm:mx-6 sm:mt-6">
                        <span className="flex items-center gap-2 text-sm font-medium text-[#667085] sm:text-base">
                          <Clock className="size-4 text-[#344054]" />
                          {tour.duration}
                        </span>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#101828] sm:text-base">
                          Explore Now
                          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 px-1">
                    <div className="flex items-end gap-1.5 text-[#101828]">
                      <span className="text-[1.1rem] font-semibold leading-none tracking-tight sm:text-[1.45rem]">
                        {tour.price !== null
                          ? `$${tour.price.toFixed(2)}`
                          : "Enquire"}
                      </span>
                    </div>
                    <h3 className="mt-4 text-[1.45rem] font-sm leading-tight text-[#101828] transition-colors duration-300 group-hover:text-[#0f4c81] sm:text-[1.55rem] font-semibold">
                      {tour.title}
                    </h3>
                    <div className="mt-3 flex items-center gap-2 text-base text-[#667085] sm:text-[1.1rem]">
                      <MapPin className="size-4 shrink-0 text-[#344054] sm:size-4" />
                      <span>{tour.location}</span>
                    </div>
                  </div>
                </Link>
              </MagneticScrollCard>
            ))}
          </StaggerContainer>

          <AnimatedHeading threshold={0.2} delay={0.3}>
            <div className="mt-12 flex justify-center sm:mt-14">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group h-14 rounded-full border-green-600 bg-white px-7 text-base font-medium text-[#101828] shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:border-green-700 hover:bg-[#eef3ff] hover:text-[#101828] hover:shadow-[0_16px_32px_rgba(95,141,255,0.18)] sm:px-8"
              >
                <Link href="/tours" prefetch>
                  Browse All Tours
                  <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </AnimatedHeading>
        </div>
      </section>

      {/* ── Destinations section ── */}
      <section className="bg-[#fdfcf8] py-18 sm:py-22 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedHeading threshold={0.25} variant="scaleIn">
              <h2 className="font-display1 text-4xl font-semibold tracking-tight text-[#101828] sm:text-5xl lg:text-6xl">
                Top Destinations in Sri Lanka
              </h2>
            </AnimatedHeading>
            <AnimatedHeading threshold={0.3} variant="blurIn" delay={0.2}>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#667085] sm:text-lg">
                From wildlife parks and misty hill towns to heritage cities and coastal escapes,
                discover the places travelers return to again and again.
              </p>
            </AnimatedHeading>
          </div>

          <StaggerContainer
            className="mt-12 grid gap-x-7 gap-y-10 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3"
            threshold={0.1}
            staggerDelay={0.18}
          >
            {destinations.map((destination) => (
              <MagneticScrollCard key={destination.slug}>
                <Link
                  href={`/destinations/${destination.slug}`}
                  className="group block"
                  prefetch
                >
                  <div className="relative aspect-[16/12] overflow-hidden rounded-[26px] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-all duration-400 group-hover:-translate-y-3 group-hover:shadow-[0_24px_56px_rgba(15,23,42,0.14)]">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="mt-5 px-1">
                    <h3 className="font-display text-[1rem] leading-tight text-[#101828] sm:text-[1.65rem]">
                      {destination.name}
                    </h3>
                    <p className="mt-3 max-w-md text-base leading-8 text-[#667085] line-clamp-2">
                      {destination.blurb}
                    </p>
                  </div>
                </Link>
              </MagneticScrollCard>
            ))}
          </StaggerContainer>

          <AnimatedHeading threshold={0.2} delay={0.3}>
            <div className="mt-12 flex justify-center sm:mt-14">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 rounded-full border-[#84adff] bg-white px-7 text-base font-medium text-[#101828] shadow-none transition hover:bg-white hover:text-[#101828] sm:px-8"
              >
                <Link href="/destinations" prefetch className={'hover:scale-105 cursor-pointer'}>
                  Browse All Destinations
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
            </div>
          </AnimatedHeading>
        </div>
      </section>

      {/* ── Services carousel section ── */}
      <section className="py-12 sm:py-16 overflow-hidden bg-white relative">
        <div className="mx-auto mb-8 max-w-2xl text-center px-4 sm:px-6">
          <AnimatedHeading threshold={0.2} variant="fadeUp">
            <p className="text-sm uppercase tracking-widest text-[#287A71] font-bold">
              Our services
            </p>
          </AnimatedHeading>
          <AnimatedHeading threshold={0.2} variant="fadeUp" delay={0.15}>
            <h2 className="mt-2 font-display1 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827]">
              Curated trips for every traveler
            </h2>
          </AnimatedHeading>
        </div>

        <ServiceCarousel services={services} activeService={activeService} prevService={prevService} nextService={nextService} />
      </section>

      {/* ── CTA Hero section ── */}
      <section className="relative isolate h-[40vh] min-h-[350px] flex items-center justify-center">
        <Image
          src={images.teaching}
          alt="Smiling travelers in Sri Lanka"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white sm:px-6">
          <AnimatedHeading threshold={0.2} variant="scaleIn">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight drop-shadow-md">
              Discover Sri Lanka with Tarragon Leisure
            </h2>
          </AnimatedHeading>
          <AnimatedHeading threshold={0.2} variant="blurIn" delay={0.2}>
            <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-base sm:text-lg font-medium drop-shadow-md">
              Expert knowledge. Tailored experiences. 24/7 support. Let us craft a
              journey you&apos;ll remember forever.
            </p>
          </AnimatedHeading>
        </div>
      </section>

      {/* ── Features section ── */}
      <section className="bg-[#FCFAF5] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <AnimatedHeading threshold={0.2} variant="fadeUp">
            <h2 className="font-display1 text-3xl font-bold text-[#344454] sm:text-4xl">
              Our Services
            </h2>
          </AnimatedHeading>

          <StaggerContainer
            className="mt-12 grid gap-10 text-center sm:grid-cols-3 sm:gap-2 lg:mt-16 lg:gap-4"
            threshold={0.15}
            staggerDelay={0.15}
          >
            {[
              {
                title: "Expert Knowledge",
                description:
                  "Our team is well-versed in Sri Lanka's best-kept secrets and tourist favorites.",
                icon: (
                  <svg width="68" height="68" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                    <path d="M10 20L24 16L38 20L52 16V36C52 36 48 37.14 42 38.86" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 20V44L24 40L38 44L41 43.14" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24 16V40" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M38 20V32" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="44" cy="42" r="10" stroke="#1A1A1A" strokeWidth="2" fill="#FCFAF5"/>
                    <path d="M51 49L58 56" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Tailored Experiences",
                description:
                  "We design each itinerary to fit your unique preferences.",
                icon: (
                  <svg width="68" height="68" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                    <path d="M30 22C30 18.69 27.31 16 24 16C20.69 16 18 18.69 18 22C18 26 24 32 24 32C24 32 30 26 30 22Z" stroke="#1A1A1A" strokeWidth="2" strokeLinejoin="round"/>
                    <circle cx="24" cy="22" r="2" fill="#1A1A1A"/>
                    <path d="M12 36C12 32 20 28 28 30C36 32 36 38 28 40C20 42 12 40 12 46C12 50 18 50 24 50" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 4" fill="none"/>
                    <circle cx="48" cy="38" r="14" stroke="#1A1A1A" strokeWidth="2"/>
                    <path d="M48 26V28M48 48V50M36 38H38M58 38H60" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M44 42L46 34L52 32L50 40L44 42Z" stroke="#1A1A1A" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: "24/7 Support",
                description:
                  "Enjoy peace of mind with our dedicated customer support, available anytime.",
                icon: (
                  <svg width="68" height="68" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                    <circle cx="32" cy="36" r="14" stroke="#1A1A1A" strokeWidth="2" fill="#FCFAF5"/>
                    <path d="M32 30V36L36 40" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 36V26C14 16.06 22.06 8 32 8C41.94 8 50 16.06 50 26V36" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M14 30C11.79 30 10 31.79 10 34V42C10 44.21 11.79 46 14 46" stroke="#1A1A1A" strokeWidth="2"/>
                    <path d="M50 30C52.21 30 54 31.79 54 34V42C54 44.21 52.21 46 50 46" stroke="#1A1A1A" strokeWidth="2"/>
                    <path d="M50 44C50 49.52 45.52 54 40 54H32" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="30" cy="54" r="2" fill="#1A1A1A"/>
                    <path d="M32 22V24M32 48V50M18 36H20M44 36H46" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.2
                }}
              >
                <div className="mb-6 flex h-[72px] w-[72px] items-center justify-center text-[#1A1A1A]">
                  {feature.icon}
                </div>
                <h3 className="font-display text-[1.35rem] font-bold text-[#111827]">{feature.title}</h3>
                <p className="mt-2 text-sm text-[#374151] sm:text-[0.95rem] leading-relaxed max-w-[280px]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>

          <AnimatedHeading threshold={0.2} delay={0.4}>
            <div className="mt-14 sm:mt-16">
              <Button asChild size="lg" className="bg-[#344454] hover:bg-[#2A3744] text-white rounded-lg px-8 h-12 font-medium">
                <Link href="/services" prefetch>
                  Explore our services
                </Link>
              </Button>
            </div>
          </AnimatedHeading>
        </div>
      </section>
      </div>
    </>
  );
}

// ─── Service Carousel with Framer Motion ─────────────────────────────────────
function ServiceCarousel({
  services,
  activeService,
  prevService,
  nextService,
}: {
  services: Service[];
  activeService: number;
  prevService: () => void;
  nextService: () => void;
}) {
  const { ref, inView } = useScrollAnimation(0.15);

  // Compute card positions based on offset
  function getCardStyle(index: number) {
    let offset = index - activeService;
    if (offset > services.length / 2) offset -= services.length;
    if (offset < -services.length / 2) offset += services.length;

    const cardWidth = 'clamp(300px, 40vw, 560px)';

    let xPercent: number;
    let scale: number;
    let opacity: number;
    let zIndex: number;

    if (offset === 0) {
      xPercent = 0;
      scale = 1;
      opacity = 1;
      zIndex = 5;
    } else if (offset === -1) {
      xPercent = -95;
      scale = 0.8;
      opacity = 1;
      zIndex = 4;
    } else if (offset === 1) {
      xPercent = 95;
      scale = 0.8;
      opacity = 1;
      zIndex = 4;
    } else {
      xPercent = offset < 0 ? -180 : 180;
      scale = 0.6;
      opacity = 0;
      zIndex = 1;
    }

    return { xPercent, scale, opacity, zIndex, cardWidth, offset };
  }

  return (
    <div
      ref={ref}
      className="relative mx-auto w-full max-w-[1536px]"
      style={{ height: 'clamp(320px, 35vw, 480px)' }}
    >
      {/* Left/Right Fade Overlays */}
      <div className="absolute top-0 left-0 w-24 sm:w-48 lg:w-64 h-full bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 sm:w-48 lg:w-64 h-full bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

      {/* Left arrow */}
      <motion.button
        onClick={prevService}
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute left-4 sm:left-12 lg:left-24 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:text-black hover:border-gray-400 transition-colors duration-300 shadow-sm"
        aria-label="Previous service"
      >
        <ChevronLeft className="size-5 sm:size-6" />
      </motion.button>

      {/* Carousel cards */}
      <div className="absolute inset-0 flex justify-center items-center">
        {services.map((service, index) => {
          const { xPercent, scale, opacity, zIndex, cardWidth } = getCardStyle(index);

          return (
            <motion.div
              key={service.title}
              className="absolute top-0 h-full"
              initial={{
                x: '0%',
                scale: 0.5,
                opacity: 0,
                rotateY: 15,
              }}
              animate={
                inView
                  ? {
                      x: `${xPercent}%`,
                      scale,
                      opacity,
                      rotateY: 0,
                    }
                  : {
                      x: '0%',
                      scale: 0.5,
                      opacity: 0,
                      rotateY: 15,
                    }
              }
              transition={{
                type: 'spring',
                stiffness: 70,
                damping: 18,
                mass: 0.9,
                restDelta: 0.001,
              }}
              style={{
                width: cardWidth,
                zIndex,
                transformOrigin: 'center center',
                perspective: 1200,
                willChange: 'transform, opacity',
              }}
            >
              <div className="relative w-full h-full overflow-hidden rounded-[32px] shadow-[0_12px_48px_rgba(0,0,0,0.12)]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Glassmorphism text overlay */}
                <motion.div
                  className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 rounded-[20px] bg-gradient-to-br from-white/95 to-white/75 backdrop-blur-xl backdrop-saturate-150 px-5 py-4 sm:px-6 sm:py-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/60"
                  initial={{ y: 30, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                    delay: 0.3,
                  }}
                >
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-[#111827] text-center tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#4b5563] text-center leading-relaxed font-medium">
                    {service.blurb}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Right arrow */}
      <motion.button
        onClick={nextService}
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute right-4 sm:right-12 lg:right-24 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:text-black hover:border-gray-400 transition-colors duration-300 shadow-sm"
        aria-label="Next service"
      >
        <ChevronRight className="size-6" />
      </motion.button>
    </div>
  );
}
