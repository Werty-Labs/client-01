"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface GalleryCarouselProps {
  gallery: string[];
  destinationName: string;
}

export function DestinationGalleryCarousel({
  gallery,
  destinationName,
}: GalleryCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollLimits = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollWidth - scrollLeft - clientWidth > 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScrollLimits);
      // Run once on load to set initial arrow visibility
      checkScrollLimits();
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScrollLimits);
    };
  }, [gallery]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll by 80% of current viewport width
      const offset = clientWidth * 0.8;
      const scrollTo = direction === "left" ? scrollLeft - offset : scrollLeft + offset;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group/carousel mt-8">
      {/* Navigation Buttons */}
      <AnimatePresence>
        {showLeftArrow && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, x: -10, y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: 0, y: "-50%" }}
            exit={{ opacity: 0, scale: 0.8, x: -10, y: "-50%" }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            onClick={() => handleScroll("left")}
            className="absolute -left-4 top-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0B3B24] shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5 hover:scale-105 active:scale-[0.95]"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={1.5} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showRightArrow && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, x: 10, y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: 0, y: "-50%" }}
            exit={{ opacity: 0, scale: 0.8, x: 10, y: "-50%" }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            onClick={() => handleScroll("right")}
            className="absolute -right-4 top-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0B3B24] shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5 hover:scale-105 active:scale-[0.95]"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" strokeWidth={1.5} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory scroll-smooth px-4 md:px-0"
      >
        {gallery.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              ease: [0.32, 0.72, 0, 1],
              delay: i * 0.1,
            }}
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="relative aspect-square w-[80vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start overflow-hidden rounded-2xl border border-primary/5 bg-[#FDFCF8] shadow-[0_10px_30px_rgba(11,59,36,0.01)] group/item cursor-pointer"
          >
            <Image
              src={img}
              alt={`${destinationName} gallery image ${i + 1}`}
              fill
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/item:scale-105"
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
