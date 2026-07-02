'use client';
import { motion } from 'motion/react';

export function AnswerBlock({ answer }: { answer: string }) {
  if (!answer) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 64, filter: 'blur(12px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
      className="my-20 p-1.5 rounded-[2rem] bg-black/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 max-w-3xl mx-auto"
    >
      <div className="p-8 md:p-14 rounded-[calc(2rem-0.375rem)] bg-[#FDFBF7] dark:bg-[#080808] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex flex-col sm:flex-row gap-10 items-start border border-black/5 dark:border-white/5 relative overflow-hidden">
        {/* Subtle glow effect behind */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-dest-teal/5 dark:bg-dest-teal/10 blur-[60px] rounded-full pointer-events-none -mr-20 -mt-20" />
        
        <div className="hidden sm:flex shrink-0 font-display1 text-[5rem] text-dest-teal/15 dark:text-dest-teal/20 leading-[0.8] select-none italic font-medium -mt-2">
          A.
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-dest-teal/40 dark:bg-dest-teal/60" />
            <h3 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-dest-teal dark:text-dest-teal">
              Executive Summary
            </h3>
          </div>
          <p className="text-xl md:text-2xl font-medium leading-[1.7] text-zinc-800 dark:text-zinc-200 text-pretty tracking-[-0.01em]">
            {answer}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
