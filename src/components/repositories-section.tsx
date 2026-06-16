"use client";

import { motion, type Variants } from "framer-motion";
import { Code2, ExternalLink, GitFork, Star, FolderGit2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { repositories } from "@/data/portfolio";

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

export function RepositoriesSection() {
  const getGradientClass = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "vercel":
        return "from-slate-900 to-indigo-900";
      case "render":
        return "from-teal-800 to-electric";
      case "hugging face":
        return "from-amber-500 to-purple-700";
      case "github pages":
        return "from-purple-800 to-pink-600";
      default:
        return "from-slate-600 to-slate-900";
    }
  };

  return (
    <AnimatedSection
      id="repositories"
      eyebrow="Repositories"
      title="Deployed Repositories"
      description="A collection of my open-source code repositories that have been fully deployed on various cloud hosting platforms like Vercel, Render, and Hugging Face."
    >
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {repositories.map((repo, index) => {
          return (
            <motion.article
              key={repo.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -6 }}
              className="group flex flex-col justify-between overflow-hidden rounded-lg border border-white/70 bg-white/78 shadow-card backdrop-blur-xl transition hover:shadow-lg"
            >
              {/* Top gradient accent line/area */}
              <div className={`h-2 w-full bg-gradient-to-r ${getGradientClass(repo.deployedPlatform)}`} />

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-electric">
                      <FolderGit2 size={16} className="shrink-0" />
                      <span className="font-mono text-xs font-semibold">noxturnal74</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 border border-emerald-100">
                      <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-ink transition group-hover:text-electric leading-tight">
                    {repo.name}
                  </h3>
                  
                  <p className="mt-3 text-xs leading-5 text-slate-600 line-clamp-3">
                    {repo.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {repo.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-blue-50 bg-blue-50/50 px-2.5 py-1 text-[10px] font-semibold text-blue-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-3 text-[11px] font-medium text-slate-500">
                    <div className="flex items-center gap-1">
                      <Star size={12} className="text-amber-500 fill-amber-500" />
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={12} className="text-slate-400" />
                      <span>{repo.forks}</span>
                    </div>
                    <span className="text-slate-400 font-mono text-[10px]">@{repo.deployedPlatform}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={repo.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex size-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-electric hover:text-electric"
                      aria-label="View GitHub repository"
                    >
                      <Code2 size={14} />
                    </a>
                    <a
                      href={repo.deployUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-8 items-center justify-center gap-1 rounded-full bg-ink px-3 text-[11px] font-semibold text-white shadow-glow transition hover:bg-blue-900"
                    >
                      <span>Visit</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
