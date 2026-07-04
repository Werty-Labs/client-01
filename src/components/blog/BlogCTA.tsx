'use client';
import { useRef } from 'react';
import { motion, useMotionValue } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';

export function BlogCTA() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 64, filter: 'blur(12px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
      className="my-32 w-full p-2 rounded-[3rem] bg-black/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10"
    >
      <div 
        className="rounded-[calc(3rem-0.5rem)] px-8 py-20 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
        style={{ backgroundColor: '#050505' }}
      >
        {/* Subtle mesh glow inside the dark void */}
        <div className="absolute inset-0 bg-gradient-to-br from-dest-teal/40 via-black/80 to-black pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-dest-teal/20 blur-[100px] rounded-full pointer-events-none -mr-20 -mt-20" />
        
        <div className="relative z-10 max-w-xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] font-medium text-white mb-8 ring-1 ring-white/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Bespoke Journeys
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="font-display1 text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.02em] leading-[1.1] text-white"
          >
            Ready to design your ultimate Sri Lanka escape?
          </motion.h2>
        </div>
        
        <div className="relative z-10 flex-shrink-0 w-full lg:w-auto">
          <motion.div
            style={{ x, y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            className="flex w-full lg:w-auto justify-center"
          >
            <Link 
              href="/contact" 
              ref={buttonRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="group relative inline-flex items-center gap-4 rounded-full pl-8 pr-3 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 active:scale-[0.98] ring-1 ring-white/10 text-white hover:bg-[#072617]"
              style={{ backgroundColor: '#0B3B24' }}
            >
              <span className="font-semibold tracking-[0.1em] text-xs uppercase pt-[1px]">Plan My Trip</span>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white/15 group-hover:scale-105 group-hover:translate-x-1 group-hover:-translate-y-[1px]">
                <ArrowRight weight="regular" size={18} />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
