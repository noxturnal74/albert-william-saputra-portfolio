"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";

const focusAreas = [
  "Fullstack product development",
  "Database design and query logic",
  "Data science workflows",
  "Computer vision applications",
];

export function AboutSection() {
  return (
    <AnimatedSection
      id="about"
      eyebrow="About"
      title="An Informatics student turning technical curiosity into useful software."
      description="Albert is an Informatics student at Universitas Ma Chung with a strong interest in building practical systems across web development, databases, data science, and computer vision."
    >
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
          <p>
            His work sits at the intersection of fullstack engineering and applied AI:
            building interfaces people can use, backends that make the product reliable,
            and models or data pipelines that make the experience smarter.
          </p>
          <p>
            With experience ranging from enterprise internship work to teaching Java and
            developing computer vision projects, Albert brings a grounded, hands-on
            approach to learning and shipping.
          </p>
        </div>

        <div className="space-y-4">
          <motion.div 
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/70 bg-white/70 shadow-card backdrop-blur-xl group cursor-pointer"
          >
            <Image
              src="/visuals/about-workflow.svg"
              alt="Applied software workflow connecting frontend, database, and AI data work"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover transition duration-700 group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5" />
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area}
                whileHover={{ y: -3, scale: 1.02, boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.15)" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="rounded-lg border border-white/70 bg-white/75 p-5 shadow-card backdrop-blur-xl cursor-pointer"
              >
                <span className="font-mono text-sm font-semibold text-electric">
                  0{index + 1}
                </span>
                <p className="mt-4 font-semibold leading-7 text-ink">{area}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
