"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

type AnimatedSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function AnimatedSection({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={cn("relative px-5 py-20 sm:px-6 lg:px-8", className)}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="font-mono text-sm font-semibold uppercase text-electric">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </motion.section>
  );
}
