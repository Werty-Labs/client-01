'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { FAQItem } from '@/lib/blog';

export function FAQAccordion({ faqs }: { faqs?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t border-black/5 dark:border-white/5">
      <h2 className="font-display1 text-3xl font-bold mb-8 text-foreground">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden bg-card"
            >
              {/* Question as a heading wrapping the button (WAI-ARIA accordion
                  pattern), so crawlers read it as a question/answer pair. */}
              <h3>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-display font-medium text-lg text-foreground pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
              </h3>
              
              {/* Answer stays in the HTML when collapsed (CSS grid-rows collapse),
                  so crawlers and the FAQPage schema see the same text. */}
              <div
                id={`faq-answer-${index}`}
                className={cn(
                  "grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="p-5 pt-0 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
