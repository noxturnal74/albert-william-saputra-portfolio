"use client";


import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  ExternalLink,
  Layers,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

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
      title="Selected Work & Technology"
      description="Projects span AI-assisted healthcare, computer vision fitness feedback, database systems, image processing, and simulation."
    >
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
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
              whileHover={{ y: -8, scale: 1.01, boxShadow: "0 20px 40px -15px rgba(29, 78, 216, 0.12)" }}
              transition={{ duration: 0.3 }}
              className={cn(
                "group overflow-hidden rounded-lg border border-white/70 bg-white/78 shadow-card backdrop-blur-xl flex flex-col justify-between cursor-pointer",
                index < 2 ? "lg:col-span-3" : "lg:col-span-2"
              )}
            >
              <div>
                <div
                  className={cn(
                    "relative overflow-hidden border-b border-white/80 bg-blue-50/50",
                    index < 2 ? "h-60 sm:h-64" : "h-52"
                  )}
                >
                  <img
                    src={project.cover.src}
                    alt={project.cover.alt}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-white/10" />
                  <div className="absolute left-5 top-5 grid size-12 place-items-center rounded-lg border border-white/70 bg-white/45 text-ink shadow-card backdrop-blur-xl group-hover:text-electric transition-colors duration-300">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                    {project.signals.map((signal) => (
                      <span
                        key={signal}
                        className="rounded-full border border-white/80 bg-white/80 px-3 py-1.5 text-xs font-semibold text-ink shadow-card backdrop-blur-xl"
                      >
                        {signal}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <p className="font-mono text-sm font-semibold text-electric">
                    {project.category}
                  </p>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold leading-8 text-ink group-hover:text-electric transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={22}
                      className="mt-1 shrink-0 text-slate-400 transition group-hover:text-electric group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{project.summary}</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {project.links?.length ? (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.links.map((link) => {
                      const LinkIcon = link.label === "GitHub" ? Code2 : ExternalLink;

                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-ink shadow-sm transition hover:border-electric hover:text-electric hover:bg-blue-50/20"
                        >
                          <LinkIcon size={15} aria-hidden="true" />
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </motion.article>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
