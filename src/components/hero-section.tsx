"use client";

import { useState } from "react";
import NextImage from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { 
  ArrowUpRight, 
  Download, 
  Mail, 
  MapPin, 
  Sparkles, 
  Cpu, 
  GraduationCap, 
  Terminal, 
  Code2, 
  Mic, 
  RefreshCw 
} from "lucide-react";
import { personal } from "@/data/portfolio";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

const quickFacts = [
  { 
    label: "Focus", 
    value: "Fullstack + AI",
    icon: Cpu,
    color: "text-blue-600 bg-blue-50 border-blue-100"
  },
  { 
    label: "Based at", 
    value: "Universitas Ma Chung",
    icon: GraduationCap,
    color: "text-indigo-600 bg-indigo-50 border-indigo-100"
  },
  { 
    label: "Building", 
    value: "CV-powered products",
    icon: Terminal,
    color: "text-purple-600 bg-purple-50 border-purple-100"
  },
];

const photoCards = [
  {
    id: 0,
    title: "Google Student Ambassador",
    desc: "Albert at Google Student Ambassador event, sharing tech insights.",
    src: "/photos/albert-profile.png",
    type: "image",
    tag: "GSA Graduation"
  },
  {
    id: 1,
    title: "Tech Speaker & Mentor",
    desc: "Educating 200+ students on Generative AI and prompt engineering.",
    src: "",
    type: "placeholder",
    placeholderIcon: Mic,
    tag: "Speaker Event"
  },
  {
    id: 2,
    title: "National Coding Competition",
    desc: "Gold medalist solving algorithms and building clean code.",
    src: "",
    type: "placeholder",
    placeholderIcon: Code2,
    tag: "Coding Contest"
  }
];

export function HeroSection() {
  const [stack, setStack] = useState(photoCards);

  const handleNextCard = () => {
    setStack((prev) => {
      const next = [...prev];
      const first = next.shift();
      if (first) next.push(first);
      return next;
    });
  };

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-5 pb-20 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pt-40"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(130deg,#F8FAFC_0%,#EEF6FF_48%,#F5F3FF_100%)]" />
      <div className="soft-grid absolute inset-0 -z-10 opacity-70" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-mist to-transparent" />

      <motion.div
        className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/75 px-4 py-2 text-sm font-semibold text-electric shadow-card backdrop-blur"
          >
            <Sparkles size={16} aria-hidden="true" />
            Available for internship and developer roles
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.04] text-ink text-balance sm:text-6xl lg:text-7.5xl"
          >
            {personal.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-electric sm:text-2xl"
          >
            {personal.title}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            {personal.intro}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-700"
            >
              View Projects
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a
              href={personal.cvHref}
              download
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-blue-200 bg-white/80 px-6 py-3 text-sm font-semibold text-electric shadow-card backdrop-blur transition hover:border-electric hover:bg-white"
            >
              Download CV
              <Download size={18} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/70 px-6 py-3 text-sm font-semibold text-ink shadow-card backdrop-blur transition hover:border-slate-400 hover:bg-white"
            >
              Contact
              <Mail size={18} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-9 flex items-center gap-2 text-sm font-medium text-slate-600"
          >
            <MapPin size={17} aria-hidden="true" />
            Malang, Indonesia
          </motion.div>
        </div>

        {/* Interactive Photo Stack */}
        <motion.div 
          variants={item} 
          className="relative mx-auto w-full max-w-[380px] h-[480px] lg:mr-0 flex flex-col justify-center items-center select-none"
        >
          <div className="relative w-full h-[400px]">
            <AnimatePresence mode="popLayout">
              {stack.map((card, idx) => {
                // Determine layout properties based on index in stack
                const isTop = idx === 0;
                const scale = 1 - idx * 0.05;
                const yOffset = idx * 15;
                const zIndex = stack.length - idx;

                const CardIcon = card.placeholderIcon as React.ComponentType<{ size?: number }> | undefined;

                return (
                  <motion.div
                    key={card.id}
                    style={{ zIndex }}
                    animate={{
                      scale,
                      y: yOffset,
                      opacity: isTop ? 1 : 0.7 - idx * 0.1,
                    }}
                    exit={{
                      x: 240,
                      opacity: 0,
                      scale: 0.85,
                      rotate: 12,
                      transition: { duration: 0.35, ease: "easeInOut" }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    onClick={isTop ? handleNextCard : undefined}
                    className={`absolute inset-0 w-full h-full p-3 bg-white border border-slate-100 shadow-xl rounded-2xl cursor-pointer ${isTop ? "hover:border-electric transition-colors" : ""}`}
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-xl border border-blue-50 bg-slate-50 flex flex-col justify-between">
                      {card.type === "image" ? (
                        <div className="relative flex-1 w-full">
                          <NextImage
                            src={card.src}
                            alt={card.title}
                            fill
                            priority
                            sizes="(min-width: 1024px) 380px, 90vw"
                            className="object-cover object-[58%_center]"
                          />
                        </div>
                      ) : (
                        <div className="flex-1 w-full bg-[linear-gradient(135deg,#eff6ff_0%,#dbeafe_100%)] flex flex-col items-center justify-center p-6 text-center">
                          <div className="size-16 rounded-full bg-white border border-blue-100 text-electric flex items-center justify-center shadow-card mb-4 transition-transform group-hover:scale-[1.05] duration-300">
                            {CardIcon && <CardIcon size={28} />}
                          </div>
                          <span className="rounded-full bg-white/80 border border-blue-200 px-3 py-1 text-[10px] font-bold text-electric uppercase tracking-wider">
                            {card.tag}
                          </span>
                          <h4 className="mt-4 text-base font-bold text-ink">
                            {card.title}
                          </h4>
                          <p className="mt-2 text-xs text-slate-500 max-w-[200px] leading-relaxed">
                            {card.desc}
                          </p>
                          <span className="mt-6 text-[10px] text-slate-400 font-mono italic">
                            Placeholder (Add photo in /photos)
                          </span>
                        </div>
                      )}

                      {/* Card Info Overlay / Footer */}
                      {card.type === "image" && (
                        <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-white/80 bg-white/80 p-3 shadow-card backdrop-blur-md">
                          <div className="flex items-center justify-between">
                            <p className="text-xs font-bold text-ink">{card.title}</p>
                            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[9px] font-bold text-electric">
                              {card.tag}
                            </span>
                          </div>
                          <p className="mt-1 text-[10px] leading-relaxed text-slate-500">
                            {card.desc}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Controller Hint */}
          <button
            type="button"
            onClick={handleNextCard}
            className="group mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-electric hover:text-electric"
          >
            <RefreshCw size={12} className="transition-transform duration-500 group-hover:rotate-180" />
            <span>Next Slide / Photo</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Styled Quick Facts Section */}
      <motion.div
        className="mx-auto mt-16 grid max-w-6xl gap-4 sm:grid-cols-3"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {quickFacts.map((fact) => {
          const FactIcon = fact.icon;
          return (
            <motion.div
              key={fact.label}
              variants={item}
              whileHover={{ y: -4, scale: 1.02, boxShadow: "0 20px 40px -15px rgba(29, 78, 216, 0.1)" }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-white/70 bg-white/75 p-6 shadow-card backdrop-blur-xl flex items-center gap-5 cursor-pointer"
            >
              <div className={`size-12 rounded-xl border flex items-center justify-center shrink-0 ${fact.color}`}>
                <FactIcon size={22} />
              </div>
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {fact.label}
                </p>
                <p className="mt-1 text-base font-bold text-ink">{fact.value}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
