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
        {/* Hero Header Zone */}
        <header className="mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: customBezier }}
            className="mb-8"
          >
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-[#667085]">
              [ DESTINATIONS / SRI LANKA ]&nbsp;&nbsp;REV 1.0&nbsp;&nbsp;{String(destinations.length).padStart(2, '0')} LOCS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: customBezier, delay: 0.1 }}
            className="font-display1 font-semibold text-[#0B3B24]"
            style={{
              fontSize: "clamp(3.5rem, 7vw, 8rem)",
              letterSpacing: "-0.03em",
              lineHeight: 0.92,
            }}
          >
            Where Every Road Leads
            <br />
            to Something Extraordinary
          </motion.h1>

          {/* Stats Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-12 flex items-center gap-4 font-mono text-sm uppercase tracking-widest text-[#1A6B6B]"
          >
            <span>[{String(destinations.length).padStart(2, '0')} Destinations]</span>
            <span className="text-[#F5A623]">•</span>
            <span>[5 Provinces]</span>
            <span className="text-[#F5A623]">•</span>
            <span>[3 Seasons]</span>
          </motion.div>
        </header>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: customBezier, delay: 0.4 }}
          className="mb-16 flex flex-wrap justify-center gap-3 md:gap-6"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 font-mono text-xs uppercase tracking-widest transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                filter === cat
                  ? "bg-[#0B3B24] text-[#FDFCF8]"
                  : "bg-transparent text-[#667085] hover:bg-[#EAEAEA]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Asymmetric Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-12 gap-4 md:gap-6"
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
                  className={`${spanClass} flex flex-col`}
                >
                  <Link href={`/destinations/${dest.slug}`} className="group flex flex-1 flex-col">
                    {/* Double-Bezel Outer Shell */}
                    <motion.div
                      whileHover={{ y: -8, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative flex flex-1 flex-col rounded-[2rem] bg-[#FDFCF8]/5 p-1.5 ring-1 ring-black/5"
                    >
                      {/* Double-Bezel Inner Core */}
                      <div className="relative flex flex-1 flex-col overflow-hidden rounded-[calc(2rem-0.375rem)] bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                        <div className="relative flex-1 w-full min-h-[300px] sm:min-h-[350px]">
                          <Image
                            src={dest.image}
                            alt={dest.name}
                            fill
                            className={`object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105 ${
                              dest.slug === "yala" ? "object-[20%_35%]" : dest.slug === "kandy" ? "object-top" : ""
                            }`}
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          
                          {/* Gradient overlay for text legibility */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

                          {/* Content */}
                          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                            <h2 className="font-display text-3xl text-white md:text-4xl">
                              {dest.name}
                            </h2>
                            
                            {/* Hover reveal blurb */}
                            <div className="grid grid-rows-[0fr] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:grid-rows-[1fr]">
                              <p className="mt-2 overflow-hidden text-sm text-white/80 line-clamp-2 md:text-base">
                                {dest.blurb}
                              </p>
                            </div>
                            
                            {/* Telemetry Overlay */}
                            <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-4 font-mono text-[10px] uppercase tracking-widest text-white/70">
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
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customBezier }}
          className="mt-24 flex justify-center"
        >
          <Link
            href="/tours"
            className="group flex items-center rounded-full bg-[#0B3B24] py-3 pl-6 pr-3 text-sm font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#1A6B6B] active:scale-[0.98]"
          >
            <span>Explore all tours</span>
            <div className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-[1px] group-hover:translate-x-1 group-hover:scale-105">
              <ArrowUpRight className="size-5" strokeWidth={2} />
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
