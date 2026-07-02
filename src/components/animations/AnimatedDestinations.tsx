"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Destination } from "@/types/site";

const customBezier = [0.32, 0.72, 0, 1] as const;

export function AnimatedDestinations({
  destinations,
}: {
  destinations: Destination[];
}) {
  const [filter, setFilter] = useState("ALL");

  const categories = ["ALL", "WILDLIFE", "HERITAGE", "COASTAL", "HILLS"];

  const filteredDestinations = destinations.filter((dest) => {
    if (filter === "ALL") return true;
    return dest.category === filter;
  });

  return (
    <div className="relative min-h-[100dvh] bg-[#FDFCF8] text-[#0B3B24] overflow-hidden">
      {/* Noise Texture Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:py-40">
        {/* Asymmetric Split Hero Zone */}
        <header className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20 items-end">
          {/* Left Column: Eyebrow, Heading, Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: customBezier }}
              className="inline-flex items-center gap-2 rounded-full border border-[#0B3B24]/10 bg-[#0B3B24]/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#0B3B24]/80"
            >
              <span>Destinations</span>
              <span className="opacity-40">/</span>
              <span>Sri Lanka</span>
              <span className="opacity-40">/</span>
              <span className="text-[#1A6B6B]">Rev 1.0</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: customBezier, delay: 0.15 }}
              className="font-display1 font-semibold text-[#0B3B24] tracking-tight leading-[0.95]"
              style={{
                fontSize: "clamp(3rem, 6.5vw, 6.5rem)",
              }}
            >
              Travel Without Limits
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: customBezier, delay: 0.25 }}
              className="text-base text-[#667085] leading-relaxed max-w-[55ch] font-medium"
            >
              From the mist-shrouded emerald tea estates of Ella to the sun-soaked golden shores of Galle, explore the ancient sanctuaries and curated escapes of Sri Lanka. Handpicked destinations crafted for the discerning traveler.
            </motion.p>
          </div>

          {/* Right Column: Concentric Double-Bezel Stats Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: customBezier, delay: 0.35 }}
            className="lg:col-span-5 w-full"
          >
            {/* Outer Bezel */}
            <div className="relative rounded-[2rem] bg-black/[0.02] p-1.5 ring-1 ring-black/5">
              {/* Inner Core */}
              <div className="rounded-[calc(2rem-0.375rem)] bg-white p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] shadow-sm">


                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-1">
                    <p className="font-mono text-3xl font-bold text-[#0B3B24]">
                      {String(destinations.length).padStart(2, '0')}
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-[#667085]">
                      Locations
                    </p>
                  </div>
                  <div className="border-l border-black/5 space-y-1">
                    <p className="font-mono text-3xl font-bold text-[#0B3B24]">05</p>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-[#667085]">
                      Provinces
                    </p>
                  </div>
                  <div className="border-l border-black/5 space-y-1">
                    <p className="font-mono text-3xl font-bold text-[#0B3B24]">03</p>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-[#667085]">
                      Seasons
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Floating Glass Filter Dock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: customBezier, delay: 0.45 }}
          className="mb-16 flex justify-start sm:justify-center"
        >
          <div className="relative inline-flex items-center gap-1 rounded-full border border-[#0B3B24]/10 bg-white/40 backdrop-blur-md p-1.5 shadow-[0_8px_32px_rgba(11,59,36,0.04)] max-w-full overflow-x-auto scrollbar-none">
            {categories.map((cat) => {
              const isActive = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`relative z-10 rounded-full px-5 py-2 font-mono text-xs uppercase tracking-widest transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.96] shrink-0 ${
                    isActive ? "text-[#FDFCF8]" : "text-[#667085] hover:text-[#0B3B24]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 -z-10 rounded-full bg-[#0B3B24]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Asymmetric Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-12 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((dest, index) => {
              const patternClasses = [
                "md:col-span-8 row-span-2",
                "md:col-span-4",
                "md:col-span-4",
                "md:col-span-8",
                "md:col-span-4",
                "md:col-span-4",
                "md:col-span-8",
                "md:col-span-4",
                "md:col-span-4",
                "md:col-span-4",
                "md:col-span-8",
                "md:col-span-4",
              ];
              const spanClass = `col-span-12 ${patternClasses[index % patternClasses.length]}`;

              return (
                <motion.div
                  key={dest.slug}
                  layout
                  initial={{ opacity: 0, y: 60, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    ease: customBezier,
                    delay: (index % 4) * 0.1,
                  }}
                  className={`${spanClass} flex flex-col h-full`}
                >
                  <Link href={`/destinations/${dest.slug}`} className="group flex flex-1 flex-col h-full">
                    {/* Double-Bezel Outer Shell */}
                    <div className="relative flex flex-1 flex-col rounded-[2.5rem] bg-black/[0.01] p-2 border border-black/5 shadow-[0_24px_48px_-15px_rgba(11,59,36,0.03)] hover:shadow-[0_32px_64px_-20px_rgba(11,59,36,0.08)] transition-all duration-500 h-full group/card">
                      {/* Double-Bezel Inner Core */}
                      <div className="relative flex flex-1 flex-col overflow-hidden rounded-[calc(2.5rem-0.5rem)] bg-white h-full">
                        <div className="relative flex-1 w-full min-h-[350px] sm:min-h-[400px] lg:min-h-[420px] overflow-hidden">
                          <Image
                            src={dest.image}
                            alt={dest.name}
                            fill
                            className={`object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/card:scale-105 ${
                              dest.slug === "yala" ? "object-[20%_35%]" : dest.slug === "kandy" ? "object-top" : ""
                            }`}
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          
                          {/* Gradient overlay for text legibility */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                          {/* Floating Arrow Indicator */}
                          <div className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/10 text-white backdrop-blur-md opacity-0 scale-75 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/card:opacity-100 group-hover/card:scale-100">
                            <ArrowUpRight className="size-4" strokeWidth={1.5} />
                          </div>

                          {/* Content Overlay */}
                          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                            <h2 className="font-display text-2xl font-bold text-white md:text-3xl tracking-tight leading-tight">
                              {dest.name}
                            </h2>

                            {/* Hover reveal blurb */}
                            <div className="grid grid-rows-[0fr] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/card:grid-rows-[1fr]">
                              <p className="mt-2 overflow-hidden text-sm text-white/80 line-clamp-2 md:text-base opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] delay-100">
                                {dest.blurb}
                              </p>
                            </div>

                            {/* Telemetry Overlay */}
                            <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-4 font-mono text-[10px] uppercase tracking-widest text-white/60 group-hover/card:text-white transition-colors duration-500">
                              <span>[ SRI LANKA / {dest.slug.toUpperCase()} ]</span>
                              <div className="flex gap-4">
                                <span>D-0{index + 1}</span>
                                {dest.bestSeason && (
                                  <span className="hidden md:inline-block">REV: {dest.bestSeason}</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customBezier }}
          className="mt-24 flex justify-center"
        >
          <Link
            href="/tours"
            className="group flex items-center rounded-full bg-[#0B3B24] py-3 pl-6 pr-3 text-sm font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#072617] hover:shadow-[0_8px_30px_rgba(11,59,36,0.12)] active:scale-[0.98]"
          >
            <span>Explore all tours</span>
            <div className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-[1px] group-hover:translate-x-1 group-hover:scale-105">
              <ArrowUpRight className="size-5" strokeWidth={1.5} />
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
