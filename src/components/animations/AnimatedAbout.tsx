"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "motion/react";
import { ArrowRight, Compass, Heart, Shield, Users, Waves, Building2, Binoculars, LayoutTemplate } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/site-data";
import { siteConfig } from "@/lib/site-config";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { services as allServices } from "@/lib/site-data";

// ─── Animation variants (matching contact page style) ────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(6px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

const transition = (delay: number = 0) => ({
  duration: 0.9,
  delay,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
});

const springTransition = (delay: number = 0) => ({
  type: "spring" as const,
  stiffness: 80,
  damping: 18,
  mass: 0.8,
  delay,
});

// ─── Stats data ──────────────────────────────────────────────────────────────
const stats = [
  { number: "10+", label: "Years experience" },
  { number: "1,200+", label: "Happy travelers" },
  { number: "100%", label: "Positive reviews" },
  { number: "25+", label: "Destinations covered" },
];

// ─── Values data ─────────────────────────────────────────────────────────────
const values = [
  {
    icon: <Compass className="size-6" strokeWidth={1.5} />,
    title: "Local Expertise",
    description:
      "Our guides are born and raised across Sri Lanka — they don't just know the routes, they know the stories behind every turn.",
  },
  {
    icon: <Heart className="size-6" strokeWidth={1.5} />,
    title: "Crafted with Care",
    description:
      "Every itinerary is handcrafted to match your pace, passions, and curiosity. No cookie-cutter trips here.",
  },
  {
    icon: <Shield className="size-6" strokeWidth={1.5} />,
    title: "Safe & Supported",
    description:
      "From your first inquiry to your last sunset, our 24/7 concierge team ensures a seamless, worry-free experience.",
  },
  {
    icon: <Users className="size-6" strokeWidth={1.5} />,
    title: "Community First",
    description:
      "We partner with local families, eco-lodges, and artisans — your journey directly supports Sri Lankan communities.",
  },
];

// ─── Animated counter ────────────────────────────────────────────────────────
// Parses "10+", "1,200+", "100%", "25+" into { target, suffix }.
function parseStatNumber(raw: string): { target: number; suffix: string } {
  // Strip commas, then split at the first non-digit char
  const cleaned = raw.replace(/,/g, "");
  const match = cleaned.match(/^([\d.]+)(.*)$/);
  if (!match) return { target: 0, suffix: raw };
  return { target: parseFloat(match[1]), suffix: match[2] };
}

function AnimatedStat({ number, label }: { number: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  const { target, suffix } = parseStatNumber(number);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1600;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Expo easeOut: feels punchy then settles
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(target);
    };

    // Small delay so the fade-in animation plays first
    const id = setTimeout(() => requestAnimationFrame(tick), 200);
    return () => clearTimeout(id);
  }, [isInView, target]);

  // Format: if the original had a comma (e.g. 1,200) use toLocaleString
  const hasComma = number.includes(",");
  const formatted = hasComma
    ? Math.round(display).toLocaleString("en-US")
    : Number.isInteger(target)
    ? Math.round(display).toString()
    : display.toFixed(0);

  return (
    <motion.div
      ref={ref}
      className="text-left"
      variants={fadeInScale}
      transition={springTransition(0)}
    >
      <motion.p
        className="font-display1 text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight text-[#0B3B24]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {formatted}
        <span>{suffix}</span>
      </motion.p>
      <motion.p
        className="mt-2 text-sm sm:text-[15px] text-[#667085] font-medium"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
export function AnimatedAbout() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.97]);

  return (
    <div className="relative overflow-hidden bg-[#f8f9fa]">
      {/* ── Hero Section — minimalist with stats (inspired by reference) ── */}
      <motion.section
        ref={heroRef}
        className="relative py-24 sm:py-32 lg:py-40"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        {/* Subtle textured background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(5,43,54,0.03) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: Title + description */}
            <div>
              <motion.p
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#667085] tracking-wide uppercase"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={transition(0.2)}
              >
                <span className="flex size-2 rounded-full bg-[#0B3B24]" />
                About Us
              </motion.p>

              <motion.h1
                className="mt-6 font-display1 text-[2.75rem] sm:text-[3.5rem] lg:text-[4rem] font-semibold leading-[1.05] tracking-[-0.03em] text-[#0B3B24]"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={transition(0.35)}
              >
                {siteConfig.name}
              </motion.h1>

              <motion.p
                className="mt-6 max-w-lg text-[17px] leading-[1.75] text-[#667085]"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={transition(0.5)}
              >
                For over a decade, we&apos;ve been dedicated to crafting deeply
                personal journeys across Sri Lanka. Because to us, your trip
                isn&apos;t just a booking — it&apos;s a story waiting to unfold.
              </motion.p>

              <motion.div
                className="mt-8"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={transition(0.65)}
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-[#0B3B24] hover:bg-[#072617] text-white pl-6 pr-2 gap-4 h-12"
                >
                  <Link href="/contact" prefetch>
                    Plan Your Trip
                    <span className="bg-white/10 p-2 rounded-full">
                      <ArrowRight className="size-4" />
                    </span>
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Right: Stats grid */}
            <motion.div
              className="grid grid-cols-2 gap-x-12 gap-y-10 sm:gap-y-12 lg:pt-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.15, delayChildren: 0.5 },
                },
              }}
            >
              {stats.map((stat) => (
                <AnimatedStat
                  key={stat.label}
                  number={stat.number}
                  label={stat.label}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── Story Section — large image with overlaid text ── */}
      <StorySection />

      {/* ── Values Section ── */}
      <ValuesSection />

      {/* ── Services Section (merged from /services) ── */}
      <ServicesSection />

      {/* ── Team / Gallery Section ── */}
      <GallerySection />

      {/* ── CTA Section ── */}
      <CTASection />
    </div>
  );
}

// ─── Story section ───────────────────────────────────────────────────────────
function StorySection() {
  const { ref, inView } = useScrollAnimation(0.15);

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.08)]"
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={springTransition(0.2)}
          >
            <Image
              src={images.teaching}
              alt="Tarragon Leisure team with travelers"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={springTransition(0.4)}
          >
            <p className="text-sm font-semibold text-[#287A71] tracking-wide uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-display1 text-3xl sm:text-4xl font-semibold tracking-tight text-[#0B3B24] leading-tight">
              Born from a love for
              <br />
              Sri Lanka
            </h2>
            <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-[#667085]">
              <p>
                Tarragon Leisure began with a simple belief: the best way to
                experience Sri Lanka is through the eyes of those who call it
                home. Our founders, born and raised across the island, wanted to
                share the Sri Lanka they knew — beyond the guidebooks.
              </p>
              <p>
                Our team of local guides, naturalists, and experience designers
                has decades of combined experience and an obsessive love for this
                island — from the leopards of Yala to the tea trains of Ella, the
                surf of Arugam Bay and the cobbled streets of Galle Fort.
              </p>
              <p>
                Every itinerary we build is unique. We listen first, suggest
                second, and stay with you the whole way through.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Values section ──────────────────────────────────────────────────────────
function ValuesSection() {
  const { ref, inView } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-[#fdfcf8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={transition(0.1)}
        >
          <p className="text-sm font-semibold text-[#287A71] tracking-wide uppercase mb-4">
            Our Philosophy
          </p>
          <h2 className="font-display1 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0B3B24]">
            What sets us apart
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-[16px] leading-relaxed text-[#667085]">
            We don&apos;t just plan trips. We create transformative experiences
            rooted in authenticity, sustainability, and genuine human connection.
          </p>
        </motion.div>

        {/* Values grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.3 },
            },
          }}
        >
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              className="group relative bg-white rounded-[24px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-border/40 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1"
              variants={fadeInScale}
              transition={springTransition(0)}
            >
              {/* Icon */}
              <div className="flex size-14 items-center justify-center rounded-2xl bg-[#f2f5f4] text-[#0B3B24] mb-6 group-hover:bg-[#0B3B24] group-hover:text-white transition-colors duration-500">
                {value.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-[#0B3B24] mb-3">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#667085]">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Gallery section ─────────────────────────────────────────────────────────
function GallerySection() {
  const { ref, inView } = useScrollAnimation(0.1);

  const galleryImages = [
    { src: images.sigiriya2, alt: "Sigiriya Rock Fortress", span: "col-span-2 row-span-2" },
    { src: images.yala, alt: "Yala National Park Safari", span: "" },
    { src: images.ella, alt: "Ella Hill Country", span: "" },
    { src: images.arugamWebp, alt: "Arugam Bay Beach", span: "col-span-2" },
  ];

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={transition(0.1)}
        >
          <p className="text-sm font-semibold text-[#287A71] tracking-wide uppercase mb-4">
            Our World
          </p>
          <h2 className="font-display1 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0B3B24]">
            Sri Lanka through our eyes
          </h2>
        </motion.div>

        {/* Mosaic grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-[200px] sm:auto-rows-[240px]"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
          }}
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.alt}
              className={`relative rounded-[20px] overflow-hidden group ${img.span}`}
              variants={fadeInScale}
              transition={springTransition(0)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              {/* Hover overlay with location name */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="absolute bottom-4 left-5 text-white text-sm font-medium">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── CTA section ─────────────────────────────────────────────────────────────
function CTASection() {
  const { ref, inView } = useScrollAnimation(0.15);

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.kandy}
          alt="Sri Lanka landscape"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#000000]/70 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <motion.h2
          className="font-display1 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={transition(0.1)}
        >
          Ready to discover your
          <br />
          Sri Lanka story?
        </motion.h2>

        <motion.p
          className="mt-5 text-[17px] leading-relaxed text-white/80 max-w-xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={transition(0.25)}
        >
          Let our team of local experts craft a journey as unique as you are.
          Your adventure begins with a conversation.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={transition(0.4)}
        >
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white text-[#0B3B24] hover:bg-white/90 font-semibold px-8 h-13 text-base shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
          >
            <Link href="/contact" prefetch>
              Start Planning
              <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="rounded-full border-2 border-white/60 bg-transparent text-white hover:bg-white/15 hover:border-white font-medium px-8 h-13 text-base shadow-none"
          >
            <Link href="/tours" prefetch>
              Browse Tours
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Service icon map ────────────────────────────────────────────────────────
const serviceIconMap: Record<string, ReactNode> = {
  "Family-Friendly Tours": <Users className="size-[18px]" strokeWidth={1.6} />,
  "Beach Holidays":        <Waves className="size-[18px]" strokeWidth={1.6} />,
  "City Tours":            <Building2 className="size-[18px]" strokeWidth={1.6} />,
  "Honeymoon Tours":       <Heart className="size-[18px]" strokeWidth={1.6} />,
  "Wildlife Safaris":      <Binoculars className="size-[18px]" strokeWidth={1.6} />,
  "Customized Tours":      <LayoutTemplate className="size-[18px]" strokeWidth={1.6} />,
};

// ─── Services section — compact interactive panel ────────────────────────────
function ServicesSection() {
  const { ref, inView } = useScrollAnimation(0.08);
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1); // 1 = down, -1 = up
  const prevActive = useRef(0);

  const ease = [0.16, 1, 0.3, 1] as const;
  const cinematic: [number, number, number, number] = [0.76, 0, 0.24, 1];

  function handleActivate(i: number) {
    if (i === prevActive.current) return;
    setDir(i > prevActive.current ? 1 : -1);
    prevActive.current = i;
    setActive(i);
  }

  // Smooth opacity crossfade + directional drift — no background bleed
  const imgVariants = {
    enter: (d: number) => ({
      opacity: 0,
      scale: 1.04,
      y: d > 0 ? 16 : -16,
    }),
    center: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.65, ease: cinematic },
    },
    exit: (d: number) => ({
      opacity: 0,
      scale: 0.97,
      y: d > 0 ? -10 : 10,
      transition: { duration: 0.45, ease: cinematic },
    }),
  };

  // Text variants — directional slide
  const textVariants = {
    enter: (d: number) => ({ opacity: 0, y: d > 0 ? 22 : -22, filter: "blur(4px)" }),
    center: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.45, ease, delay: 0.18 } },
    exit: (d: number) => ({ opacity: 0, y: d > 0 ? -14 : 14, filter: "blur(4px)", transition: { duration: 0.25, ease } }),
  };

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-[#FAFAF8] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* ── Compact header row ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <motion.p
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#287A71] mb-3"
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
              transition={{ duration: 0.55, ease, delay: 0.05 }}
            >
              <motion.span
                className="flex size-[5px] rounded-full bg-[#287A71]"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.18 }}
              />
              What We Offer
            </motion.p>
            <motion.h2
              className="font-display1 text-[2rem] sm:text-[2.5rem] font-semibold leading-[1.1] tracking-[-0.03em] text-[#0B3B24]"
              initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 18, filter: "blur(6px)" }}
              transition={{ duration: 0.7, ease, delay: 0.12 }}
            >
              Curated for every traveller
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, ease, delay: 0.25 }}
          >
            <Button
              asChild
              className="rounded-sm bg-[#111111] hover:bg-[#2a2a2a] text-white font-medium px-6 h-10 text-sm shadow-none active:scale-[0.98] transition-all duration-200"
            >
              <Link href="/contact" prefetch>
                Plan your journey
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* ── Two-panel interactive layout ── */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-0 rounded-2xl overflow-hidden border border-[#EAEAEA] bg-white"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          style={{ boxShadow: "0 2px 32px rgba(0,0,0,0.04)" }}
        >
          {/* LEFT — service list */}
          <div className="flex flex-col border-r border-[#EAEAEA]">
            {allServices.map((service, i) => (
              <button
                key={service.title}
                onMouseEnter={() => handleActivate(i)}
                onClick={() => handleActivate(i)}
                className={`group relative flex items-center gap-4 px-6 py-5 text-left transition-colors duration-200 focus:outline-none ${
                  i < allServices.length - 1 ? "border-b border-[#EAEAEA]" : ""
                } ${active === i ? "bg-[#F4F8F6]" : "hover:bg-[#FAFAFA]"}`}
              >
                {/* Active bar */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#0B3B24] rounded-r-full"
                  initial={false}
                  animate={{ scaleY: active === i ? 1 : 0, opacity: active === i ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  style={{ originY: 0.5 }}
                />

                {/* Icon chip */}
                <motion.span
                  className="shrink-0 flex size-9 items-center justify-center rounded-lg border"
                  animate={active === i
                    ? { borderColor: "rgba(11,59,36,0.2)", backgroundColor: "#EDF3EC", color: "#0B3B24" }
                    : { borderColor: "#EAEAEA", backgroundColor: "#ffffff", color: "#AAAAAA" }}
                  transition={{ duration: 0.25 }}
                >
                  {serviceIconMap[service.title] ?? <Compass className="size-[18px]" strokeWidth={1.6} />}
                </motion.span>

                {/* Title */}
                <span className={`font-display text-[0.95rem] font-semibold leading-tight transition-colors duration-200 ${active === i ? "text-[#0B3B24]" : "text-[#444444]"}`}>
                  {service.title}
                </span>

                {/* Arrow indicator */}
                <motion.span
                  className="ml-auto text-[#0B3B24]"
                  animate={{ x: active === i ? 0 : -4, opacity: active === i ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="size-3.5" />
                </motion.span>
              </button>
            ))}
          </div>

          {/* RIGHT — cinematic image panel with direction-aware curtain wipe */}
          <div className="relative min-h-[320px] lg:min-h-0 overflow-hidden bg-[#1a2e20]">
            {/* Images layer — sync so enter+exit overlap */}
            <AnimatePresence mode="sync" custom={dir}>
              <motion.div
                key={`img-${active}`}
                className="absolute inset-0"
                custom={dir}
                variants={imgVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <Image
                  src={allServices[active].image}
                  alt={allServices[active].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />

                {/* Gradient for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-transparent" />

                {/* Shimmer glint — sweeps diagonally on enter */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)",
                    backgroundSize: "200% 100%",
                  }}
                  initial={{ backgroundPosition: "-100% 0" }}
                  animate={{ backgroundPosition: "200% 0" }}
                  transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Text overlay — directional slide, independent from image */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10 pointer-events-none z-30">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={`text-${active}`}
                  custom={dir}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <p className="font-display text-xl sm:text-2xl font-semibold text-white leading-snug drop-shadow-sm">
                    {allServices[active].title}
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.7] text-white/80 max-w-sm">
                    {allServices[active].blurb}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



