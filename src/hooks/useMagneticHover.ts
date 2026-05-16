"use client";

import { useCallback, useRef, useState, useEffect } from "react";

/**
 * Magnetic hover effect hook.
 *
 * When the cursor is within `radius` pixels of the element center,
 * the element gently follows the cursor (clamped to ±maxTranslate px).
 * Resets to origin on mouse leave.
 *
 * Disabled on touch devices to avoid jank from simulated hover events.
 *
 * @param radius - Detection radius in px (default 120)
 * @param maxTranslate - Maximum translation in px (default 15)
 */
export function useMagneticHover(radius = 120, maxTranslate = 15) {
  const ref = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  const [isTouch, setIsTouch] = useState(false);

  // Detect touch devices on mount
  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isTouch || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < radius) {
        // Strength falls off with distance from center
        const strength = 1 - distance / radius;
        const x = (deltaX / radius) * maxTranslate * strength;
        const y = (deltaY / radius) * maxTranslate * strength;
        setTransform({ x, y, scale: 1.05 });
      }
    },
    [isTouch, radius, maxTranslate],
  );

  const handleMouseLeave = useCallback(() => {
    setTransform({ x: 0, y: 0, scale: 1 });
  }, []);

  const style: React.CSSProperties = {
    transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
    transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
  };

  return {
    ref,
    style,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
    isTouch,
  };
}
