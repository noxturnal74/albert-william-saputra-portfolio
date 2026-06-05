"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, BrainCircuit, Code2, Database, Layers } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { projects } from "@/data/portfolio";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.56,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const projectIcons = [BrainCircuit, BrainCircuit, Database, Layers, Code2];

export function ProjectsSection() {
  return (
    <AnimatedSection
      id="projects"
      eyebrow="Projects"
      title="Selected work with a bias toward useful, applied technology."
      description="Projects span AI-assisted healthcare, computer vision fitness feedback, database systems, image processing, and simulation."
    >
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = projectIcons[index] ?? Code2;

          return (
            <motion.article
              key={project.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-lg border border-white/70 bg-white/78 shadow-card backdrop-blur-xl"
            >
              <div className={`relative h-36 bg-gradient-to-br ${project.visual}`}>
                <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0.04)_42%,rgba(15,23,42,0.2)_100%)]" />
                <div className="absolute left-5 top-5 grid size-12 place-items-center rounded-lg border border-white/50 bg-white/20 text-white backdrop-blur">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="h-2 w-28 rounded-full bg-white/75" />
                  <div className="mt-3 grid grid-cols-[1fr_0.7fr] gap-2">
                    <div className="h-2 rounded-full bg-white/45" />
                    <div className="h-2 rounded-full bg-white/35" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="font-mono text-sm font-semibold text-electric">
                  {project.category}
                </p>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold leading-8 text-ink">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={22}
                    className="mt-1 shrink-0 text-slate-400 transition group-hover:text-electric"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
