"use client";

import { motion, type Variants } from "framer-motion";
import { BrainCircuit, Code2, Database, Layers, Wrench } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { skillGroups } from "@/data/portfolio";

const icons = [Code2, Layers, Database, Wrench, BrainCircuit];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function SkillsSection() {
  return (
    <AnimatedSection
      id="skills"
      eyebrow="Skills"
      title="A practical stack for web products, databases, and AI experiments."
      description="A blend of frontend polish, backend fundamentals, database fluency, and applied computer vision tooling."
      className="bg-white/42"
    >
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
        {skillGroups.map((group, index) => {
          const Icon = icons[index] ?? Code2;
          
          // Asymmetric column span logic to balance tablet (sm) and desktop (lg)
          let colSpan = "";
          if (index === 0 || index === 1) {
            // Frontend & Backend
            colSpan = "sm:col-span-1 lg:col-span-3";
          } else if (index === 2 || index === 3) {
            // Database & Tools
            colSpan = "sm:col-span-1 lg:col-span-2";
          } else {
            // AI/Data (spans 2 columns on tablet to avoid empty spot, 2 columns on desktop)
            colSpan = "sm:col-span-2 lg:col-span-2";
          }

          return (
            <motion.div
              key={group.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4, scale: 1.015, boxShadow: "0 20px 40px -15px rgba(29, 78, 216, 0.08)" }}
              className={`rounded-2xl border border-white/70 bg-white/75 p-6 shadow-card backdrop-blur-xl flex flex-col justify-between cursor-pointer transition-colors duration-300 hover:border-blue-100 ${colSpan}`}
            >
              <div>
                <div className="grid size-11 place-items-center rounded-xl bg-blue-50 text-electric">
                  <Icon size={21} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-100 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors duration-200 hover:text-electric hover:border-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
