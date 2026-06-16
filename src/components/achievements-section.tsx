"use client";

import { motion } from "framer-motion";
import { CircleCheck, Trophy } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { achievements } from "@/data/portfolio";

export function AchievementsSection() {
  return (
    <AnimatedSection
      id="achievements"
      eyebrow="Achievements"
      title="Signals of consistency, curiosity, and execution."
      description="A compact view of competitive, academic, and professional learning milestones."
    >
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {achievements.map((achievement, index) => (
          <motion.article
            key={achievement.title}
            whileHover={{ y: -4, scale: 1.01, boxShadow: "0 20px 40px -15px rgba(29, 78, 216, 0.08)" }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-white/70 bg-white/78 p-6 shadow-card backdrop-blur-xl flex flex-col justify-between cursor-pointer transition-colors duration-300 hover:border-blue-100"
          >
            <div>
              <div className="flex items-center justify-between gap-4">
                <div className="grid size-12 place-items-center rounded-xl bg-blue-50 text-electric">
                  {index === 0 ? (
                    <Trophy size={23} aria-hidden="true" />
                  ) : (
                    <CircleCheck size={23} aria-hidden="true" />
                  )}
                </div>
                <span className="font-mono text-sm font-semibold text-slate-400">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-8 text-ink">
                {achievement.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {achievement.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
