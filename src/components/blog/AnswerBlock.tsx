'use client';
import { motion } from 'motion/react';

export function AnswerBlock({ answer }: { answer: string }) {
  if (!answer) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
      className="my-16 md:my-20 p-1.5 rounded-3xl bg-black/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 max-w-3xl mx-auto"
    >
      <div className="p-8 md:p-10 rounded-[calc(1.5rem-0.375rem)] bg-[#FDFBF7] dark:bg-[#080808] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex flex-col gap-6 border border-black/5 dark:border-white/5 relative overflow-hidden">
        {/* Subtle glow effect behind */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-dest-teal/5 dark:bg-dest-teal/10 blur-[60px] rounded-full pointer-events-none -mr-20 -mt-20" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-dest-amber shrink-0">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
            </svg>
            <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-[#0B3B24] dark:text-zinc-300">
              The Short Version
            </h3>
          </div>
          <p className="text-lg md:text-xl font-medium leading-[1.6] text-zinc-700 dark:text-zinc-300 text-pretty tracking-tight">
            {answer}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
