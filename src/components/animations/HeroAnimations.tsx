"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

// ─── Premium easing ──────────────────────────────────────────────────────────
const premiumEase = [0.43, 0.13, 0.23, 0.96] as [number, number, number, number];

// ─── Hero parallax wrapper (background image) ───────────────────────────────
// Background scrolls slower than the page, creating depth.
// Always renders the same DOM structure to avoid hydration mismatch.
export function HeroParallax({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll();
  const shouldReduce = useReducedMotion();
  const y = useTransform(scrollY, [0, 1000], [0, shouldReduce ? 0 : -200]);
  const scale = useTransform(scrollY, [0, 800], [1, shouldReduce ? 1 : 1.15]);

  return (
    <motion.div style={{ y, scale, willChange: "transform" }} className="absolute inset-0 overflow-hidden">
      {children}
    </motion.div>
  );
}

// ─── Hero content parallax (text, buttons) ──────────────────────────────────
// Fades out, scales down, and drifts upward as user scrolls past the hero,
// creating the effect that below-content rises up and overtakes the hero.
export function HeroContentParallax({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { scrollY } = useScroll();
  const shouldReduce = useReducedMotion();
  const opacity = useTransform(scrollY, [0, 500], [1, shouldReduce ? 1 : 0]);
  const y = useTransform(scrollY, [0, 600], [0, shouldReduce ? 0 : -150]);
  const scale = useTransform(scrollY, [0, 600], [1, shouldReduce ? 1 : 0.9]);
  const filter = useTransform(scrollY, [0, 500], ["blur(0px)", shouldReduce ? "blur(0px)" : "blur(6px)"]);

  return (
    <motion.div
      style={{ opacity, y, scale, filter, willChange: "transform, opacity, filter" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Hero headline with staggered word reveal ───────────────────────────────
// Always renders motion.spans — reduced motion just skips the spring delay.
export function HeroHeadline({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const words = children.split(" ");

  return (
    <h1 className={className} style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block mr-[0.25em] last:mr-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 14,
            delay: 0.6 + i * 0.05,
          }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}

// ─── Hero subtext with blur fade ────────────────────────────────────────────
export function HeroSubtext({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay: 1.0, ease: premiumEase }}
    >
      {children}
    </motion.p>
  );
}

// ─── Hero buttons with scale-in stagger ─────────────────────────────────────
export function HeroButtons({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="mt-8 flex flex-wrap gap-3"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15, delayChildren: 1.2 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroButton({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

// ─── Scroll progress bar ────────────────────────────────────────────────────
// Always renders the element (just 2px tall) — no conditional DOM.
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left"
      style={{
        background: "#10B981",
        scaleX: scrollYProgress,
        willChange: "transform",
      }}
    />
  );
}
