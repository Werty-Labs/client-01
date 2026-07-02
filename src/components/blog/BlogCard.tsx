'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { ArrowUpRight } from '@phosphor-icons/react';
import type { BlogPost } from '@/lib/blog';

export function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  // Magnetic hover for the button icon
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct * 20); // Move max 20px
    y.set(yPct * 20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: index * 0.1 }}
      className="group h-full flex"
    >
      <Link href={`/blog/${post.slug}`} className="block flex-1" aria-label={`Read article: ${post.title}`}>
        <motion.div
          whileHover={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative p-2 rounded-[2rem] bg-black/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 h-full flex flex-col"
        >
          <div className="relative rounded-[calc(2rem-0.5rem)] overflow-hidden bg-card shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] flex flex-col flex-1 min-h-[400px]">
            <div className="relative h-64 w-full overflow-hidden shrink-0">
              <Image 
                src={post.image || `https://picsum.photos/seed/${post.slug}/800/600`} 
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
              />
            </div>
            
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="rounded-full px-3 py-1 bg-muted text-[10px] uppercase tracking-[0.2em] font-medium">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              
              <h2 className="font-display text-2xl font-bold leading-tight mb-4 text-foreground">
                {post.title}
              </h2>
              
              <p className="text-muted-foreground line-clamp-3 mb-8 flex-1">
                {post.summary}
              </p>
              
              <div 
                className="flex items-center justify-between mt-auto"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <span className="font-medium text-sm uppercase tracking-wider">Read Article</span>
                <motion.div 
                  style={{ x: springX, y: springY }}
                  className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  <ArrowUpRight weight="light" size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
