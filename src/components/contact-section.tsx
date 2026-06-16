"use client";

import { motion } from "framer-motion";
import { Camera, GitBranch, Link2, Mail, type LucideIcon } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { personal } from "@/data/portfolio";

const socialIcons: Record<string, LucideIcon> = {
  GitHub: GitBranch,
  LinkedIn: Link2,
  Instagram: Camera,
};

export function ContactSection() {
  return (
    <AnimatedSection
      id="contact"
      eyebrow="Contact"
      title="Open to internships, collaborations, and applied AI conversations."
      description="For recruiters, collaborators, and teams looking for a motivated fullstack developer with AI and computer vision interests."
      className="pb-24"
    >
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-white/70 bg-ink p-8 text-white shadow-glow flex flex-col justify-between items-start">
          <div>
            <p className="font-mono text-sm font-semibold text-skyglow">Email</p>
            <h3 className="mt-4 text-2xl font-semibold leading-9 sm:text-3xl">
              Let us build something practical, intelligent, and useful.
            </h3>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
              The fastest way to reach Albert is by email. The CV button in the
              navigation and hero section downloads the current resume PDF.
            </p>
          </div>
          <motion.a
            href={`mailto:${personal.email}`}
            whileHover={{ scale: 1.02, backgroundColor: "#f8fafc" }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors shadow-md"
          >
            <Mail size={18} aria-hidden="true" />
            {personal.email}
          </motion.a>
        </div>

        <div className="grid gap-4">
          {personal.socials.map((social) => {
            const Icon = socialIcons[social.label as keyof typeof socialIcons] ?? Mail;

            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.01, boxShadow: "0 20px 40px -15px rgba(29, 78, 216, 0.08)" }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-white/70 bg-white/78 p-5 shadow-card backdrop-blur-xl transition-colors duration-300 hover:border-blue-100 cursor-pointer"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-electric">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-bold text-ink">{social.label}</span>
                    <span className="block truncate text-sm text-slate-500">
                      {social.handle}
                    </span>
                  </span>
                </span>
                <span className="text-sm font-semibold text-slate-400 transition group-hover:text-electric">
                  Open
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
