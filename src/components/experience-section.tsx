"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { experiences } from "@/data/portfolio";

const icons = [Briefcase, GraduationCap, Users];

export function ExperienceSection() {
  return (
    <AnimatedSection
      id="experience"
      eyebrow="Experience"
      title="Engineering practice, teaching, and leadership in the same story."
      description="Albert combines technical execution with communication and coordination experience, which is especially useful in internship and early-career engineering environments."
      className="bg-white/42"
    >
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {experiences.map((experience, index) => {
          const Icon = icons[index] ?? Briefcase;

          return (
            <motion.article
              key={experience.role}
              whileHover={{ y: -4, scale: 1.01, boxShadow: "0 20px 40px -15px rgba(29, 78, 216, 0.08)" }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-white/70 bg-white/78 p-6 shadow-card backdrop-blur-xl flex flex-col justify-between cursor-pointer transition-colors duration-300 hover:border-blue-100"
            >
              <div>
                <div className="grid size-12 place-items-center rounded-xl bg-ink text-white">
                  <Icon size={23} aria-hidden="true" />
                </div>
                <p className="mt-6 font-mono text-sm font-semibold text-electric">
                  {experience.organization}
                </p>
                <h3 className="mt-2 text-xl font-semibold leading-8 text-ink">
                  {experience.role}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {experience.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
