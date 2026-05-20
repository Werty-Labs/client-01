"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/site-data";
import { MessageCircle, Phone, Mail, MapPin, Camera, Share2, Play } from "lucide-react";

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
          className="font-display1 text-4xl sm:text-5xl font-bold tracking-tight text-[#052b36] mb-6"
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
            <MessageCircle className="size-5" />
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
              Prefer email? Fill out the details below and we'll craft your perfect itinerary.
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
                  title: "Global Office",
                  detail: "+1 (800) 555-0199",
                },
                {
                  icon: <Mail className="size-4" strokeWidth={2.5} />,
                  title: "General Inquiries",
                  detail: "concierge@tarragon.com",
                },
                {
                  icon: <MapPin className="size-4" strokeWidth={2.5} />,
                  title: "Headquarters",
                  detail: (
                    <span className="whitespace-pre-line leading-relaxed">
                      100 Serenity Way,<br />
                      Suite 400<br />
                      New York, NY 10001
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
            <h3 className="font-display text-2xl text-[#0B3B24] mb-6 tracking-tight">Follow Our Journeys</h3>
            <motion.div
              className="flex gap-4"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 1.3 } } }}
            >
              {[
                { icon: <Camera className="size-[18px]" strokeWidth={2} /> },
                { icon: <Share2 className="size-[18px]" strokeWidth={2} /> },
                { icon: <Play className="size-[18px]" strokeWidth={2} /> },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="flex size-11 items-center justify-center rounded-full bg-[#f2f5f4] text-[#0B3B24] hover:bg-[#e8ecea] transition-colors"
                  variants={fadeInScale}
                  transition={springTransition(0)}
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
