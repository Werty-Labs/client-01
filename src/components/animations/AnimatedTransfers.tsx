"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/lib/site-config";
import { AnimatedHeading, StaggerContainer, AntiGravityCard } from "@/components/animations/AnimatedSection";

// ─── Types ─────────────────────────────────────────────────────────────────────
type TransferRoute = {
  id: number;
  route: string;
  car: number;
  van: number;
  isTour?: boolean;
};

// ─── Data (verified against new_page/price_list.md) ───────────────────────────
const TRANSFERS: TransferRoute[] = [
  { id: 1, route: "From Mirissa to Colombo (Drop Off / Pickup)", car: 22000, van: 28000 },
  { id: 2, route: "From Mirissa to Yala (Drop Off / Pickup)", car: 20000, van: 24000 },
  { id: 3, route: "Yala safari tour (both ways with 4 hour stay for safari)", car: 25000, van: 35000, isTour: true },
  { id: 4, route: "From Mirissa to Udawalawa (Drop Off / Pickup)", car: 18000, van: 25000 },
  { id: 5, route: "Udawalawa tour (both ways with 4 hour stay for safari)", car: 26000, van: 35000, isTour: true },
  { id: 6, route: "From Mirissa to Mattala (Drop Off)", car: 20000, van: 25000 },
  { id: 7, route: "From Mattala to Mirissa (Pickup with paging and parking)", car: 20000, van: 25000 },
  { id: 8, route: "From Mirissa to Negombo (Drop Off / Pickup)", car: 25000, van: 30000 },
  { id: 9, route: "From Mirissa to Airport Katunayake (Drop Off)", car: 23000, van: 29000 },
  { id: 10, route: "From Airport Katunayake to Mirissa (Pickup with paging)", car: 24000, van: 30000 },
  { id: 11, route: "From Mirissa to Dambulla (Drop Off / Pickup)", car: 37000, van: 42000 },
  { id: 12, route: "From Mirissa to Nuwara Eliya (Drop Off / Pickup)", car: 31000, van: 36000 },
  { id: 13, route: "From Mirissa to Kandy (Drop Off / Pickup)", car: 33000, van: 38000 },
  { id: 14, route: "From Mirissa to Galle (Drop Off / Pickup)", car: 8000, van: 13000 },
  { id: 15, route: "Galle round tour", car: 18000, van: 23000, isTour: true },
  { id: 16, route: "From Mirissa to Unawatuna (Drop Off / Pickup)", car: 8000, van: 12000 },
  { id: 17, route: "From Mirissa to Weligama (Drop Off / Pickup)", car: 5000, van: 8000 },
  { id: 18, route: "From Mirissa to Hiriketiya (Drop Off / Pickup)", car: 12000, van: 16000 },
  { id: 19, route: "From Mirissa to Hikkaduwa (Drop Off / Pickup)", car: 12000, van: 16000 },
  { id: 20, route: "From Mirissa to Arugam Bay (Drop Off / Pickup)", car: 35000, van: 43000 },
  { id: 21, route: "From Mirissa to Ella (Drop Off / Pickup)", car: 24000, van: 30000 },
  { id: 22, route: "Ella round tour", car: 30000, van: 40000, isTour: true },
];

const DAY_TOURS = TRANSFERS.filter((t) => t.isTour);
const POINT_TO_POINT = TRANSFERS.filter((t) => !t.isTour);

type FaqItem = { q: string; a: string };

const FAQS: FaqItem[] = [
  {
    q: "How much is a taxi from Mirissa to Colombo?",
    a: "A private car transfer from Mirissa to Colombo costs LKR 22,000 and a KDH van costs LKR 28,000. These are fixed prices with no hidden charges — highway tolls and fuel surcharges are included.",
  },
  {
    q: "How do I get from Mirissa to Ella?",
    a: "The most comfortable way to get from Mirissa to Ella is by private chauffeur transfer. We offer this route for LKR 24,000 (private car) or LKR 30,000 (KDH van), with door-to-door hotel pickup included.",
  },
  {
    q: "Do your transfer prices include highway tolls?",
    a: "Yes. No additional charges will apply for relevant locations — highway tolls and fuel surcharges are all included in the listed price.",
  },
  {
    q: "How quickly can a vehicle be arranged?",
    a: "Vehicle arrangements can be made within a maximum of 1 hour (between 15 minutes and 1 hour). For best availability, we recommend booking in advance via WhatsApp.",
  },
  {
    q: "What vehicles do you offer for private transfers in Sri Lanka?",
    a: "We offer two vehicle types: a private air-conditioned car (suitable for 1–3 passengers with luggage) and a KDH flat-roof van (ideal for larger groups or passengers with significant luggage). Both come with an English-speaking chauffeur-guide.",
  },
  {
    q: "How do I book a private transfer from Mirissa?",
    a: "Simply message us on WhatsApp with your route, date, time, and number of passengers. We'll confirm your booking within minutes.",
  },
];

// ─── Utilities ─────────────────────────────────────────────────────────────────
function fmt(n: number) {
  return `LKR ${n.toLocaleString("en-LK")}`;
}

// ─── WhatsApp CTA link ──────────────────────────────────────────────────────────
function WhatsAppCTA({
  label = "Book via WhatsApp",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp"
      className={`group inline-flex items-center gap-2.5 rounded-full bg-[#1A6B6B] px-6 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#155858] active:scale-[0.97] ${className}`}
    >
      {label}
      <span className="flex size-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="size-3.5 fill-current" aria-hidden="true">
          <path d="M20.52 3.48A11.78 11.78 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.12 1.6 5.92L0 24l6.42-1.68a11.84 11.84 0 0 0 5.63 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.38-8.43ZM12.05 21.3h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.21-3.81 1 1.02-3.71-.23-.38a9.46 9.46 0 1 1 17.55-4.84c0 5.21-4.24 9.46-9.35 9.46Zm5.42-7.08c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.41-1.49-.89-.79-1.5-1.77-1.67-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.57-.49-.5-.66-.5h-.56c-.2 0-.5.07-.77.37-.27.3-1.02 1-1.02 2.43s1.04 2.82 1.19 3.02c.15.2 2.06 3.13 5 4.39.7.3 1.24.48 1.66.62.7.22 1.34.19 1.84.12.56-.08 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </span>
    </a>
  );
}

// ─── FAQ accordion item ─────────────────────────────────────────────────────────
function FaqItem({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.06 }}
      className="border-b border-[oklch(0.9_0.02_90)] last:border-0"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors duration-200 hover:text-[#1A6B6B]"
      >
        <span className="font-display text-base font-semibold leading-snug text-foreground">
          {item.q}
        </span>
        <span
          className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-[oklch(0.9_0.02_90)] text-[#1A6B6B] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 12 12" className="size-3 fill-current" aria-hidden="true">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main component ─────────────────────────────────────────────────────────────
export function AnimatedTransfers() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#1A6B6B] px-5 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40">
        {/* Subtle topographic texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, #F5A623 0%, transparent 60%), radial-gradient(circle at 75% 20%, #ffffff 0%, transparent 50%)`,
          }}
        />

        <div className="relative mx-auto max-w-5xl">
          {/* Amber badge — genuine content, not a decorative eyebrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#F5A623]/20 px-4 py-1.5 ring-1 ring-[#F5A623]/30"
          >
            <span className="size-1.5 rounded-full bg-[#F5A623]" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F5A623]">
              Fixed Prices · No Hidden Fees
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.32, 0.72, 0, 1] }}
            className="max-w-3xl font-display1 text-[2.4rem] font-normal leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Private Chauffeur Transfers & Day Tours from Mirissa — Transparent Pricing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32, ease: [0.32, 0.72, 0, 1] }}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Air-conditioned private car or KDH van with an English-speaking chauffeur-guide.
            Door-to-door hotel pickup across the south coast. All prices include southern expressway tolls.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.44, ease: [0.32, 0.72, 0, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <WhatsAppCTA label="Book Instantly on WhatsApp" />
            <a
              href="#rates"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white/80 transition-colors duration-300 hover:border-white/40 hover:text-white"
            >
              See all rates
              <svg viewBox="0 0 16 16" className="size-3.5 fill-none stroke-current" strokeWidth="1.5" aria-hidden="true">
                <path d="M8 3v10M3 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3"
          >
            {[
              "22+ routes covered",
              "Private car & KDH van",
              "Available within 1 hour",
              "Prices valid September 2026",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2 text-xs font-medium text-white/60">
                <span className="size-1.5 rounded-full bg-[#F5A623]/60" aria-hidden="true" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Rate Table ── */}
      <section id="rates" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <AnimatedHeading threshold={0.2} variant="fadeUp">
          <h2 className="font-display1 text-3xl font-bold tracking-tight text-[#0B3B24] sm:text-4xl">
            Transfer Routes & Prices
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            All prices are per vehicle (not per person) for a fixed-price private transfer from Mirissa.
            The <strong>southern expressway route</strong> is used for airport and Colombo transfers to save time.
          </p>
        </AnimatedHeading>

        {/* Table — desktop */}
        <div className="mt-10 hidden overflow-hidden rounded-2xl ring-1 ring-[oklch(0.9_0.02_90)] sm:block">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#1A6B6B] text-white">
                <th className="px-6 py-4 text-left font-semibold tracking-wide">#</th>
                <th className="px-6 py-4 text-left font-semibold tracking-wide">Destination / Route</th>
                <th className="px-6 py-4 text-right font-semibold tracking-wide">
                  <span className="block text-xs font-normal opacity-70">Private Car</span>
                  LKR
                </th>
                <th className="px-6 py-4 text-right font-semibold tracking-wide">
                  <span className="block text-xs font-normal opacity-70">KDH Van (Flat Roof)</span>
                  LKR
                </th>
              </tr>
            </thead>
            <tbody>
              {TRANSFERS.map((row, i) => (
                <motion.tr
                  key={row.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{
                    duration: 0.4,
                    delay: Math.min(i * 0.04, 0.4),
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={`group border-t border-[oklch(0.9_0.02_90)] transition-colors duration-200 hover:bg-[#1A6B6B]/5 ${
                    i % 2 === 0 ? "bg-white" : "bg-[oklch(0.99_0.005_95)]"
                  }`}
                >
                  <td className="px-6 py-4 tabular-nums text-muted-foreground">{row.id}</td>
                  <td className="px-6 py-4 font-medium text-[#0B3B24]">
                    {row.route}
                    {row.isTour && (
                      <span className="ml-2 inline-flex rounded-full bg-[#F5A623]/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#b87a00]">
                        Day tour
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right tabular-nums font-semibold text-[#0B3B24] group-hover:text-[#F5A623] transition-colors duration-200">
                    {fmt(row.car)}
                  </td>
                  <td className="px-6 py-4 text-right tabular-nums font-semibold text-[#0B3B24] group-hover:text-[#F5A623] transition-colors duration-200">
                    {fmt(row.van)}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards — mobile */}
        <div className="mt-8 flex flex-col gap-3 sm:hidden">
          {TRANSFERS.map((row, i) => (
            <motion.div
              key={row.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.3), ease: [0.25, 0.46, 0.45, 0.94] }}
              className="rounded-2xl bg-white px-5 py-4 ring-1 ring-[oklch(0.9_0.02_90)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-sm font-semibold leading-snug text-[#0B3B24]">{row.route}</p>
                  {row.isTour && (
                    <span className="mt-1 inline-flex rounded-full bg-[#F5A623]/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#b87a00]">
                      Day tour
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-3 flex gap-4 border-t border-[oklch(0.93_0.02_90)] pt-3 text-xs">
                <div>
                  <span className="block text-muted-foreground">Private Car</span>
                  <span className="mt-0.5 block font-bold text-[#0B3B24]">{fmt(row.car)}</span>
                </div>
                <div>
                  <span className="block text-muted-foreground">KDH Van</span>
                  <span className="mt-0.5 block font-bold text-[#0B3B24]">{fmt(row.van)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-10 rounded-2xl bg-[#1A6B6B]/6 px-6 py-5 ring-1 ring-[#1A6B6B]/12"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#1A6B6B]">Pricing Notes</p>
          <ol className="flex flex-col gap-1.5 text-xs leading-relaxed text-muted-foreground">
            <li>1. Prices are subject to change depending on fluctuations in fuel costs and other unforeseen circumstances such as global crises or pandemics.</li>
            <li>2. No additional charges will apply for relevant locations (e.g., highway tolls or fuel surcharges).</li>
            <li>3. Vehicle arrangements can be made within a maximum of 1 hour (between 15 mins up to 1 hour).</li>
          </ol>
        </motion.div>
      </section>

      {/* ── Day Tours Section ── */}
      <section className="bg-[oklch(0.97_0.01_90)] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <AnimatedHeading threshold={0.2} variant="fadeUp">
            <h2 className="font-display1 text-3xl font-bold tracking-tight text-[#0B3B24] sm:text-4xl">
              Day Tours & Safari Packages
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Full-day round trips from Mirissa — both ways included. Perfect for couples, honeymooners, and digital nomads wanting to explore Sri Lanka without the hassle.
            </p>
          </AnimatedHeading>

          <StaggerContainer
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            threshold={0.15}
            staggerDelay={0.12}
          >
            {DAY_TOURS.map((tour) => (
              <AntiGravityCard key={tour.id}>
                {/* Double-bezel card */}
                <div className="group relative rounded-[2rem] bg-[#1A6B6B]/8 p-2 ring-1 ring-[#1A6B6B]/15">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(2rem-0.5rem)] bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] transition-shadow duration-500 hover:shadow-[0_12px_40px_rgba(26,107,107,0.14)]">
                    {/* Amber top accent */}
                    <div className="h-1.5 w-full rounded-full bg-[#F5A623]" />
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-base font-bold leading-snug text-[#0B3B24]" style={{ textWrap: "balance" } as React.CSSProperties}>
                        {tour.route}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {tour.route.toLowerCase().includes("safari") ? "4 hour safari stay included" : "Full-day round trip from Mirissa"}
                      </p>
                      <div className="mt-5 flex flex-col gap-2 border-t border-[oklch(0.92_0.02_90)] pt-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Private Car</span>
                          <span className="font-bold text-[#0B3B24]">{fmt(tour.car)}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">KDH Van</span>
                          <span className="font-bold text-[#0B3B24]">{fmt(tour.van)}</span>
                        </div>
                      </div>
                      <a
                        href={`https://wa.me/${siteConfig.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 block rounded-full bg-[#1A6B6B] py-2.5 text-center text-xs font-semibold text-white transition-colors duration-300 hover:bg-[#155858] active:scale-[0.97]"
                      >
                        Book this tour
                      </a>
                    </div>
                  </div>
                </div>
              </AntiGravityCard>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Vehicles Section ── */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
        <AnimatedHeading threshold={0.2} variant="fadeUp">
          <h2 className="font-display1 text-3xl font-bold tracking-tight text-[#0B3B24] sm:text-4xl">
            Our Fleet — Private Car & KDH Van
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Both vehicles are air-conditioned, well-maintained, and driven by an English-speaking chauffeur-guide with local route knowledge.
          </p>
        </AnimatedHeading>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {/* Car card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="group rounded-[2rem] bg-[#1A6B6B]/8 p-2 ring-1 ring-[#1A6B6B]/15"
          >
            <div className="rounded-[calc(2rem-0.5rem)] bg-white px-7 py-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-[#0B3B24]">Private Car</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Sedan / hatchback</p>
                </div>
                <span className="rounded-full bg-[#1A6B6B]/10 px-3 py-1 text-xs font-semibold text-[#1A6B6B]">
                  From LKR 5,000
                </span>
              </div>
              <ul className="mt-6 flex flex-col gap-2.5 text-sm text-muted-foreground">
                {[
                  "Air-conditioned & comfortable",
                  "Ideal for 1–3 passengers + luggage",
                  "English-speaking chauffeur-guide",
                  "Door-to-door hotel pickup",
                  "Fixed price — no meter surprises",
                  "Available within 1 hour",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-0.5 size-4 shrink-0 rounded-full bg-[#1A6B6B]/15 text-[#1A6B6B] flex items-center justify-center text-[10px]" aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Van card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.32, 0.72, 0, 1] }}
            className="group rounded-[2rem] bg-[#F5A623]/10 p-2 ring-1 ring-[#F5A623]/20"
          >
            <div className="rounded-[calc(2rem-0.5rem)] bg-white px-7 py-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-[#0B3B24]">KDH Van</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Flat-roof, high-roof available</p>
                </div>
                <span className="rounded-full bg-[#F5A623]/20 px-3 py-1 text-xs font-semibold text-[#b87a00]">
                  From LKR 8,000
                </span>
              </div>
              <ul className="mt-6 flex flex-col gap-2.5 text-sm text-muted-foreground">
                {[
                  "Air-conditioned & spacious",
                  "Ideal for 4–8 passengers + luggage",
                  "English-speaking chauffeur-guide",
                  "Door-to-door hotel pickup",
                  "Fixed price — no meter surprises",
                  "Flat-roof design for panoramic views",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-0.5 size-4 shrink-0 rounded-full bg-[#F5A623]/25 text-[#b87a00] flex items-center justify-center text-[10px]" aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── How to Book ── */}
      <section className="bg-[#1A6B6B] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <h2 className="font-display1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How to Book
            </h2>
            <p className="mt-4 text-white/70">
              Three steps. Confirmed in minutes via WhatsApp.
            </p>
          </motion.div>

          {/* Genuine sequential 3-step flow */}
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { step: "1", title: "Message us on WhatsApp", body: "Send your route, date, time, pickup location, and number of passengers." },
              { step: "2", title: "Get your confirmation", body: "We confirm availability and price — usually within a few minutes." },
              { step: "3", title: "We pick you up", body: "Your chauffeur meets you at your hotel or guesthouse at the agreed time." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-[#F5A623] font-display1 text-xl font-bold text-white shadow-[0_4px_20px_rgba(245,166,35,0.4)]">
                  {item.step}
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="mt-12"
          >
            <WhatsAppCTA
              label="Message us now"
              className="bg-white text-[#1A6B6B] hover:bg-white/90 [&>span]:bg-[#1A6B6B]/15 [&>span]:text-[#1A6B6B]"
            />
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
        <AnimatedHeading threshold={0.2} variant="fadeUp">
          <h2 className="font-display1 text-3xl font-bold tracking-tight text-[#0B3B24] sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </AnimatedHeading>

        <div className="mt-10">
          {FAQS.map((item, i) => (
            <FaqItem key={i} item={item} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-10 text-sm text-muted-foreground"
        >
          Still have questions?{" "}
          <Link href="/contact" className="font-semibold text-[#1A6B6B] hover:underline">
            Contact us
          </Link>{" "}
          or message us directly on WhatsApp.
        </motion.div>
      </section>
    </div>
  );
}
