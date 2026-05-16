"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// ─── Stagger container for cards ─────────────────────────────────────────────
export function StaggerContainer({
  children,
  className,
  threshold = 0.15,
  staggerDelay = 0.2,
}: {
  children: ReactNode;
  className?: string;
  threshold?: number;
  staggerDelay?: number;
}) {
  const { ref, inView } = useScrollAnimation(threshold);

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: staggerDelay } },
        }}
        style={{ display: "contents" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ─── Anti-gravity card (Experience section) ──────────────────────────────────
// Bounces up slightly past target before settling with spring physics.
// No useReducedMotion branching — motion handles it internally.
export function AntiGravityCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 80, scale: 0.95, rotateX: 5 },
        visible: { opacity: 1, y: 0, scale: 1, rotateX: 0 },
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 12,
        mass: 1.2,
      }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

// ─── Magnetic scroll card (Tours section) ────────────────────────────────────
// Floats up with a "magnetic snap" effect using rotateY for perspective.
export function MagneticScrollCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 100, rotateY: 5 },
        visible: { opacity: 1, y: 0, rotateY: 0 },
      }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 15,
        mass: 0.8,
      }}
      style={{ willChange: "transform, opacity", perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}

// ─── Animated section header (scroll reveal) ─────────────────────────────────
export function AnimatedHeading({
  children,
  className,
  threshold = 0.25,
  delay = 0,
  variant = "fadeUp",
}: {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  variant?: "fadeUp" | "scaleIn" | "blurIn";
}) {
  const { ref, inView } = useScrollAnimation(threshold);

  const variantMap = {
    fadeUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.97 },
      visible: { opacity: 1, scale: 1 },
    },
    blurIn: {
      hidden: { opacity: 0, filter: "blur(8px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
    },
  };

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variantMap[variant]}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay,
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ─── Staggered word reveal (for section headlines) ───────────────────────────
// Always renders motion.spans — no conditional DOM branching.
export function StaggeredWords({
  text,
  className,
  threshold = 0.3,
  staggerMs = 60,
}: {
  text: string;
  className?: string;
  threshold?: number;
  staggerMs?: number;
}) {
  const { ref, inView } = useScrollAnimation(threshold);
  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            delay: i * (staggerMs / 1000),
          }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </div>
  );
}

// ─── WhatsApp floating animation ─────────────────────────────────────────────
// Always renders motion.div — never conditionally change the DOM tree.
export function FloatingWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── Nav stagger animation ───────────────────────────────────────────────────
// Always uses the same initial values — no useReducedMotion branching.
export function NavItemWrapper({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: 0.3 + index * 0.08,
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── Logo fade-in animation ──────────────────────────────────────────────────
export function LogoAnimation({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: 0.1,
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── CTA button slide-in ────────────────────────────────────────────────────
export function CTASlideIn({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: 0.4,
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── Price counter animation ─────────────────────────────────────────────────
export { PriceCounter } from "./PriceCounter";
