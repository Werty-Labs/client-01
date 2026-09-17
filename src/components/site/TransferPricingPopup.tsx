"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const STORAGE_KEY = "tl_transfer_popup_dismissed";

// All four layers share the same 1536×1024 canvas, so they stack with plain `fill`.
const ISLAND_DIR = "/assets/transfers/Island";

export function TransferPricingPopup() {
  const [visible, setVisible] = useState(false);

  const show = useCallback(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY)) return;
    setVisible(true);
  }, []);

  const dismiss = useCallback(() => {
    setVisible(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "1");
    }
  }, []);

  useEffect(() => {
    // Already dismissed this session
    if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY)) return;

    // Trigger 1 — 8 second delay
    const timer = setTimeout(show, 8000);

    // Trigger 2 — scroll past first viewport height
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        show();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [show]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="complementary"
          aria-label="Transfer pricing offer"
          initial={{ opacity: 0, y: 60, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.94 }}
          transition={{ type: "spring", stiffness: 220, damping: 24 }}
          className="fixed bottom-24 right-4 z-40 w-[280px] sm:bottom-6 sm:right-24 sm:w-[360px]"
          style={{ filter: "drop-shadow(0 14px 32px rgba(0,0,0,0.35))" }}
        >
          {/* Dismiss button — frosted glass, readable over any backdrop */}
          <button
            onClick={dismiss}
            aria-label="Close"
            className="absolute right-0 top-0 z-20 flex size-7 items-center justify-center rounded-full border border-white/40 bg-black/35 text-white/90 shadow-[0_2px_8px_rgba(0,0,0,0.35)] backdrop-blur-md transition-colors duration-200 hover:bg-black/55 hover:text-white"
          >
            <svg viewBox="0 0 12 12" className="size-3 stroke-current" strokeWidth="1.5" fill="none" aria-hidden="true">
              <path d="M2 2l8 8M10 2l-8 8" strokeLinecap="round" />
            </svg>
          </button>

          {/* Island scene — layered transparent PNGs, no card background */}
          <div className="relative w-full" style={{ aspectRatio: "1536 / 1024" }}>
            {/* Soft ambient glow so the cutout doesn't sit flat on the page */}
            <div
              className="pointer-events-none absolute inset-[-14%] -z-10"
              aria-hidden="true"
              style={{
                background: "radial-gradient(ellipse at 50% 55%, rgba(255,250,235,0.35) 0%, rgba(255,250,235,0.12) 45%, transparent 72%)",
                filter: "blur(6px)",
              }}
            />

            {/* Base: water, sand, rocks & bushes (trees + board cut out) */}
            <Image
              src={`${ISLAND_DIR}/Island_Base.png`}
              alt=""
              fill
              sizes="360px"
              className="pointer-events-none select-none object-contain"
              priority={false}
            />

            {/* Grounding shadow on the sand — breathes opposite the board's float */}
            <motion.div
              className="pointer-events-none absolute rounded-[50%] bg-black/35 blur-md"
              aria-hidden="true"
              style={{ left: "34%", top: "76%", width: "32%", height: "6%" }}
              animate={{ opacity: [0.55, 0.3, 0.55], scale: [1, 0.85, 1] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Wooden signboard — floats gently above the sand, text riding along with it */}
            <motion.div
              className="absolute inset-0"
              animate={{ y: [-6, 6, -6], rotate: [-0.6, 0.6, -0.6] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src={`${ISLAND_DIR}/Island_Board.png`}
                alt=""
                fill
                sizes="360px"
                className="pointer-events-none select-none object-contain"
              />

              {/* Soft vignette grounds the text against the wood grain regardless of lighting */}
              <div
                className="pointer-events-none absolute rounded-[50%]"
                aria-hidden="true"
                style={{
                  left: "27%",
                  top: "58%",
                  width: "46%",
                  height: "16%",
                  transform: "translateY(-50%)",
                  background:
                    "radial-gradient(ellipse at center, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.22) 55%, rgba(0,0,0,0) 75%)",
                }}
              />

              {/* Price, painted onto the wooden board — centered on the flat plank area */}
              <div
                className="pointer-events-none absolute flex flex-col items-center justify-center text-center"
                style={{ left: "50%", top: "58%", width: "46%", transform: "translate(-50%, -50%)" }}
              >
                <span
                  className="font-sans whitespace-nowrap text-[0.9rem] font-bold leading-none text-[#FFFBF2] sm:text-[1.1rem]"
                  style={{ textShadow: "0 2px 5px rgba(0,0,0,0.85)" }}
                >
                  From LKR 5,000
                </span>
              </div>

              {/* "Special Offer" ribbon — the first thing the eye should land on */}
              <div
                className="pointer-events-none absolute"
                style={{ left: "50%", top: "35%", transform: "translate(-50%, -50%)" }}
              >
                {/* Pulsing glow ring behind the badge */}
                <motion.span
                  className="absolute inset-0 rounded-full bg-[#FF3B30]"
                  aria-hidden="true"
                  animate={{ opacity: [0.55, 0, 0.55], scale: [1, 1.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.span
                  className="relative flex items-center gap-1 whitespace-nowrap rounded-full bg-gradient-to-b from-[#FF6659] to-[#D62828] px-3 py-1 text-[9px] font-extrabold uppercase tracking-wide text-white shadow-[0_6px_16px_rgba(0,0,0,0.5)] ring-1 ring-white/50 sm:px-3.5 sm:py-1.5 sm:text-[11px]"
                  style={{ rotate: -4 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="size-1.5 rounded-full bg-white" aria-hidden="true" />
                  Special Offer
                </motion.span>
              </div>
            </motion.div>

            {/* Left palm — swaying around its own trunk base */}
            <motion.div
              className="absolute inset-0"
              style={{ transformOrigin: "26.5% 67.9%" }}
              animate={{ rotate: [-4, 4, -4] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src={`${ISLAND_DIR}/Island_left_tree.png`}
                alt=""
                fill
                sizes="360px"
                className="pointer-events-none select-none object-contain"
              />
            </motion.div>

            {/* Right palm — swaying out of phase for a natural breeze */}
            <motion.div
              className="absolute inset-0"
              style={{ transformOrigin: "82.7% 65.4%" }}
              animate={{ rotate: [3, -5, 3] }}
              transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            >
              <Image
                src={`${ISLAND_DIR}/Island_right_tree.png`}
                alt=""
                fill
                sizes="360px"
                className="pointer-events-none select-none object-contain"
              />
            </motion.div>

            {/* CTA button — planted on the sand */}
            <Link
              href="/transfers"
              onClick={dismiss}
              className="group absolute flex items-center gap-1.5 rounded-full px-4 py-2 text-[11px] font-semibold text-[#4A2A05] shadow-[0_8px_20px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/50 transition-transform duration-200 hover:scale-105 active:scale-95 sm:text-[12.5px]"
              style={{
                left: "50%",
                top: "86%",
                transform: "translate(-50%, -50%)",
                background: "linear-gradient(180deg, #FFD98A 0%, #F5A623 55%, #DD8B0F 100%)",
              }}
            >
              See Transfer Prices
              <span className="flex size-4 items-center justify-center rounded-full bg-[#4A2A05]/15 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
                <svg viewBox="0 0 10 10" className="size-2.5 fill-none stroke-current" strokeWidth="1.5" aria-hidden="true">
                  <path d="M2 5h6M5 2l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
