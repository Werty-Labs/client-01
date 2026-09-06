"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/lib/site-config";

const STORAGE_KEY = "tl_transfer_popup_dismissed";

/**
 * TransferPricingPopup
 *
 * Appears as a bottom-right floating spring card — not a full-screen takeover.
 * Trigger: 8 seconds after mount OR when the user scrolls past the first viewport,
 * whichever comes first. Dismissed state is stored in sessionStorage so it does
 * not re-appear within the same session.
 *
 * z-index: 40 — below WhatsAppFabGlobal (z-50) to avoid collision.
 */
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
          initial={{ opacity: 0, y: 80, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.96 }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 24,
          }}
          className="fixed bottom-24 right-4 z-40 w-[300px] sm:bottom-6 sm:right-24 sm:w-[320px]"
        >
          {/* Double-bezel outer shell */}
          <div className="relative rounded-[2rem] bg-[#1A6B6B]/12 p-2 ring-1 ring-[#1A6B6B]/20 shadow-[0_12px_48px_rgba(26,107,107,0.18)]">
            {/* Inner core */}
            <div className="relative overflow-hidden rounded-[calc(2rem-0.5rem)] bg-[#1A6B6B] shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">

              {/* Subtle background glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.12]"
                aria-hidden="true"
                style={{
                  backgroundImage: "radial-gradient(circle at 80% 0%, #F5A623 0%, transparent 55%)",
                }}
              />

              {/* Dismiss button */}
              <button
                onClick={dismiss}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 flex size-6 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors duration-200 hover:bg-white/20 hover:text-white"
              >
                <svg viewBox="0 0 12 12" className="size-3 stroke-current" strokeWidth="1.5" fill="none" aria-hidden="true">
                  <path d="M2 2l8 8M10 2l-8 8" strokeLinecap="round" />
                </svg>
              </button>

              <div className="relative px-5 py-5">
                {/* Amber badge */}
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#F5A623]/20 px-3 py-1 ring-1 ring-[#F5A623]/25">
                  <span className="size-1.5 rounded-full bg-[#F5A623]" aria-hidden="true" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F5A623]">
                    🚗 Live Prices Available
                  </span>
                </div>

                <h2 className="font-display1 text-[1.1rem] font-normal leading-[1.2] tracking-[-0.01em] text-white" style={{ textWrap: "balance" } as React.CSSProperties}>
                  Private Transfers from Mirissa
                </h2>

                <p className="mt-2 text-[0.78rem] leading-relaxed text-white/70">
                  Private car from LKR 5,000 — Airport, Yala, Ella, Kandy & 20+ routes. Fixed prices, English-speaking chauffeur.
                </p>

                <div className="mt-4 flex items-center gap-2">
                  {/* Primary CTA */}
                  <Link
                    href="/transfers"
                    onClick={dismiss}
                    className="group flex flex-1 items-center justify-center gap-2 rounded-full bg-[#F5A623] px-4 py-2.5 text-[0.78rem] font-semibold text-white transition-colors duration-300 hover:bg-[#e09611] active:scale-[0.97]"
                  >
                    See all prices
                    <span className="flex size-5 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
                      <svg viewBox="0 0 10 10" className="size-2.5 fill-none stroke-current" strokeWidth="1.5" aria-hidden="true">
                        <path d="M2 5h6M5 2l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>

                  {/* Secondary: WhatsApp */}
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book on WhatsApp"
                    onClick={dismiss}
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/20"
                  >
                    <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
                      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.12 1.6 5.92L0 24l6.42-1.68a11.84 11.84 0 0 0 5.63 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.38-8.43ZM12.05 21.3h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.21-3.81 1 1.02-3.71-.23-.38a9.46 9.46 0 1 1 17.55-4.84c0 5.21-4.24 9.46-9.35 9.46Zm5.42-7.08c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.41-1.49-.89-.79-1.5-1.77-1.67-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.57-.49-.5-.66-.5h-.56c-.2 0-.5.07-.77.37-.27.3-1.02 1-1.02 2.43s1.04 2.82 1.19 3.02c.15.2 2.06 3.13 5 4.39.7.3 1.24.48 1.66.62.7.22 1.34.19 1.84.12.56-.08 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
