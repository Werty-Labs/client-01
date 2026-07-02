"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface GalleryCarouselProps {
  gallery: string[];
  destinationName: string;
}

export function DestinationGalleryCarousel({
  gallery,
  destinationName,
}: GalleryCarouselProps) {
  return (
    <div className="mt-8">
      {/* Container displaying all photos at the same time with original frame sizes */}
      <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
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
            className="relative aspect-square w-[80vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 overflow-hidden rounded-2xl border border-primary/5 bg-[#FDFCF8] shadow-[0_10px_30px_rgba(11,59,36,0.01)] group/item cursor-pointer"
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
