"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/site-data";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(6px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

const bgReveal = {
  hidden: { opacity: 0, scale: 1.15 },
  visible: { opacity: 1, scale: 1.05 },
};

const transition = (delay: number = 0) => ({
  duration: 0.9,
  delay,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
});

const springTransition = (delay: number = 0) => ({
  type: "spring" as const,
  stiffness: 80,
  damping: 18,
  mass: 0.8,
  delay,
});

export function AnimatedContact() {
  return (
    <div className="relative min-h-[100dvh] py-20 pb-32 overflow-hidden bg-[#f8f9fa]">
      {/* Blurred Background Image — cinematic reveal */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        variants={bgReveal}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          key="contact-blur-lg"
          src={images.contact}
          alt="Blurred landscape background"
          fill
          className="object-cover object-bottom blur-[2px] scale-105 opacity-100"
          quality={100}
          priority
        />
        {/* Gradient to blend image smoothly into the background color */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(248,249,250,1) 0%, rgba(248,249,250,1) 30%, rgba(248,249,250,0.70) 52%, rgba(248,249,250,0.20) 72%, transparent 100%)' }} />
      </motion.div>

      {/* Hero text section — staggered entrance */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center mb-16 mt-8">
        <motion.h1
          className="font-display1 text-4xl sm:text-5xl font-bold tracking-tight text-[#0B3B24] mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={transition(0.3)}
        >
          Chat with a Travel Expert
        </motion.h1>
        <motion.p
          className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#667085] sm:text-lg mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={transition(0.5)}
        >
          Experience guided serenity before your journey even begins. Connect with our concierge
          team instantly for personalized recommendations and booking assistance.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={transition(0.7)}
        >
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3.5 text-white font-medium hover:bg-[#20bd5a] transition-colors shadow-sm"
          >
            <WhatsAppIcon className="size-5" />
            Start WhatsApp Chat
          </a>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-[#25D366]"></span>
            </span>
            Typically replies in minutes
          </div>
        </motion.div>
      </div>

      {/* Cards section — slide in from sides */}
      <div className="relative z-10 mx-auto grid max-w-[1000px] gap-8 px-4 sm:px-6 lg:grid-cols-5">
        {/* Form card — slides in from left */}
        <motion.div
          className="lg:col-span-3"
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
          transition={springTransition(0.6)}
        >
          <div className="bg-white rounded-[24px] p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-border/40">
            <h2 className="font-display text-[28px] text-[#0B3B24] mb-2 tracking-tight">Send an Enquiry</h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-8">
                Whether you&apos;re looking to customize an existing itinerary or
                want to start from scratch, fill out the details below and we&apos;ll craft your perfect itinerary.
            </p>
            <ContactForm />
          </div>
        </motion.div>

        {/* Sidebar — slides in from right with staggered children */}
        <motion.aside
          className="lg:col-span-2 space-y-6"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.8 } } }}
        >
          {/* Contact methods card */}
          <motion.div
            className="bg-white rounded-[24px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-border/40"
            variants={slideInRight}
            transition={springTransition(0)}
          >
            <h3 className="font-display text-2xl text-[#0B3B24] mb-6 tracking-tight">Other Ways to<br />Connect</h3>
            <motion.ul
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 1.0 } } }}
            >
              {[
                {
                  icon: <Phone className="size-4" strokeWidth={2.5} />,
                  title: "Global Office Phone Number",
                  detail: (
                    <span className="flex flex-col gap-0.5">
                      <a href="tel:+94777250794" className="hover:underline">+94 77 72 50 794</a>
                      <a href="tel:+94772294994" className="hover:underline">+94 77 22 94 994</a>
                    </span>
                  ),
                },
                {
                  icon: <WhatsAppIcon className="size-4" />,
                  title: "WhatsApp",
                  detail: (
                    <span className="whitespace-nowrap">
                      <a href="https://wa.me/94777250794" target="_blank" rel="noopener noreferrer" className="hover:underline">+94 77 72 50 794</a>
                    </span>
                  ),
                },
                {
                  icon: <Mail className="size-4" strokeWidth={2.5} />,
                  title: "General Inquiries",
                  detail: <a href={`mailto:${siteConfig.email}`} className="hover:underline">{siteConfig.email}</a>,
                },
                {
                  icon: <MapPin className="size-4" strokeWidth={2.5} />,
                  title: "Headquarters",
                  detail: (
                    <span className="whitespace-pre-line leading-relaxed">
                      No. 439/2, Galle Road,<br />
                      Pamburana,<br />
                      Matara
                    </span>
                  ),
                },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-4"
                  variants={fadeInScale}
                  transition={springTransition(0)}
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#f2f5f4] text-[#0B3B24]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-[15px] text-[#1c1c1c]">{item.title}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.detail}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Social card */}
          <motion.div
            className="bg-white rounded-[24px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-border/40"
            variants={slideInRight}
            transition={springTransition(0)}
          >
            <h3 className="font-display text-2xl text-[#0B3B24] mb-6 tracking-tight">Connect with Us</h3>
            <motion.div
              className="flex gap-4"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 1.3 } } }}
            >
              {[
                { 
                  icon: <WhatsAppIcon className="size-[18px]" />, 
                  href: `https://wa.me/${siteConfig.whatsapp}`,
                  label: "WhatsApp"
                },
                { 
                  icon: <InstagramIcon className="size-[18px]" />, 
                  href: "#",
                  label: "Instagram"
                },
                { 
                  icon: <FacebookIcon className="size-[18px]" />, 
                  href: "#",
                  label: "Facebook"
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex size-11 items-center justify-center rounded-full bg-[#f2f5f4] text-[#0B3B24] hover:bg-[#e8ecea] transition-colors"
                  variants={fadeInScale}
                  transition={springTransition(0)}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.aside>
      </div>
    </div>
  );
}

// ─── Custom Social Icons ──────────────────────────────────────────────────────

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M20.52 3.48A11.78 11.78 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.12 1.6 5.92L0 24l6.42-1.68a11.84 11.84 0 0 0 5.63 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.38-8.43ZM12.05 21.3h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.21-3.81 1 1.02-3.71-.23-.38a9.46 9.46 0 1 1 17.55-4.84c0 5.21-4.24 9.46-9.35 9.46Zm5.42-7.08c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.41-1.49-.89-.79-1.5-1.77-1.67-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.57-.49-.5-.66-.5h-.56c-.2 0-.5.07-.77.37-.27.3-1.02 1-1.02 2.43s1.04 2.82 1.19 3.02c.15.2 2.06 3.13 5 4.39.7.3 1.24.48 1.66.62.7.22 1.34.19 1.84.12.56-.08 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

