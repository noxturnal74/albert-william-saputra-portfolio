"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Download, Mail, MapPin, Sparkles } from "lucide-react";
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
  { label: "Focus", value: "Fullstack + AI" },
  { label: "Based at", value: "Universitas Ma Chung" },
  { label: "Building", value: "CV-powered products" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-5 pb-20 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pt-40"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(130deg,#F8FAFC_0%,#EEF6FF_48%,#F5F3FF_100%)]" />
      <div className="soft-grid absolute inset-0 -z-10 opacity-70" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-mist to-transparent" />

      <motion.div
        className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]"
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
            className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.04] text-ink text-balance sm:text-6xl lg:text-7xl"
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
              Contact Me
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

        <motion.div 
          variants={item} 
          className="relative mx-auto w-full max-w-[420px] lg:mr-0 group cursor-pointer"
          whileHover={{ y: -6, rotate: -1, scale: 1.01 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/80 bg-white/50 p-3 shadow-glow backdrop-blur-xl">
            <div className="relative h-full overflow-hidden rounded-[22px] border border-blue-100 bg-[linear-gradient(145deg,#DBEAFE_0%,#FFFFFF_46%,#EDE9FE_100%)]">
              <Image
                src="/photos/albert-profile.png"
                alt="Albert William Saputra at a Google Student Ambassador graduation event"
                fill
                priority
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover object-[58%_center] transition duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-lg border border-white/80 bg-white/78 p-4 shadow-card backdrop-blur-xl">
                <p className="text-sm font-semibold text-ink">Google Student Ambassador</p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Informatics student building at the edge of web, AI, and data.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mx-auto mt-14 grid max-w-6xl gap-3 sm:grid-cols-3"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {quickFacts.map((fact) => (
          <motion.div
            key={fact.label}
            variants={item}
            className="rounded-lg border border-white/70 bg-white/70 p-5 shadow-card backdrop-blur-xl"
          >
            <p className="font-mono text-xs font-semibold uppercase text-slate-500">
              {fact.label}
            </p>
            <p className="mt-2 text-lg font-semibold text-ink">{fact.value}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
