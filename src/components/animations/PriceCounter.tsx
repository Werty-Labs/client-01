"use client";

import { useEffect, useState, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * Animates a price from 0 to the target value with an easeOut curve.
 * Triggers when the element scrolls into view.
 */
export function PriceCounter({
  value,
  prefix = "$",
  decimals = 2,
  duration = 1500,
  delay = 400,
}: {
  value: number;
  prefix?: string;
  decimals?: number;
  duration?: number;
  delay?: number;
}) {
  const { ref, inView } = useScrollAnimation(0.2);
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const timeout = setTimeout(() => {
      const start = performance.now();
      const animate = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // easeOut curve: 1 - (1 - t)^3
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(eased * value);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplay(value);
        }
      };
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [inView, value, duration, delay]);

  return (
    <span ref={ref}>
      {value !== null
        ? `${prefix}${display.toFixed(decimals)}`
        : "Enquire"}
    </span>
  );
}
