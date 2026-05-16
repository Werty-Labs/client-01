"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for scroll-triggered animations.
 *
 * Uses IntersectionObserver to detect when an element enters the viewport.
 * Once triggered, the element stays "in view" (triggerOnce mode) so the
 * entrance animation doesn't replay on re-scroll.
 *
 * @param threshold - Fraction of the element that must be visible (0–1). Default 0.2.
 * @param triggerOnce - If true (default), only fires once.
 */
export function useScrollAnimation(threshold = 0.2, triggerOnce = true) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fallback: if IntersectionObserver isn't available, show immediately
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return { ref, inView };
}
