'use client';
import { motion } from 'motion/react';
import { useAnalytics } from '@/hooks/use-analytics';
import { siteConfig } from '@/lib/site-config';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function BlogWhatsAppStrip() {
  const { track } = useAnalytics();

  return (
    <motion.div
      initial={{ opacity: 0, y: 64, filter: 'blur(12px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
      className="my-12 p-1.5 rounded-2xl bg-[#1A6B6B]/10 dark:bg-[#1A6B6B]/15 ring-1 ring-[#1A6B6B]/20 dark:ring-[#1A6B6B]/30 max-w-3xl mx-auto"
    >
      <div className="p-6 md:p-8 rounded-[calc(1rem-0.375rem)] bg-[#1A6B6B]/5 dark:bg-black/20 flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between border border-[#1A6B6B]/10 dark:border-[#1A6B6B]/20 relative overflow-hidden">
        
        <div className="relative z-10 flex-1 text-center md:text-left">
          <h3 className="font-display1 text-2xl md:text-3xl font-bold tracking-tight text-[#0B3B24] dark:text-zinc-100 mb-3 text-balance leading-[1.1]">
            Planning a trip to Sri Lanka?
          </h3>
          <p className="font-sans text-sm md:text-base text-[#1A6B6B] dark:text-zinc-300 font-medium leading-[1.6] max-w-[42ch] mx-auto md:mx-0 text-pretty">
            We guide you from visa to hotels, beaches to hidden temples &mdash; and everything in between. Just drop us a WhatsApp, we reply in minutes.
          </p>
        </div>

        <div className="relative z-10 shrink-0 w-full md:w-auto">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("whatsapp_clicked", { location: "blog_strip" })}
            className="group flex w-full md:w-auto items-center justify-center gap-2.5 rounded-full px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold tracking-wide text-sm transition-all duration-300 active:scale-[0.98] shadow-sm hover:shadow-[0_8px_16px_-4px_rgba(37,211,102,0.4)]"
          >
            <WhatsAppIcon className="size-5" />
            WhatsApp Us
            <span className="font-sans text-lg leading-none transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
