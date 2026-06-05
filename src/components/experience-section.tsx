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
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {experiences.map((experience, index) => {
          const Icon = icons[index] ?? Briefcase;

          return (
            <article
              key={experience.role}
              className="rounded-lg border border-white/70 bg-white/78 p-6 shadow-card backdrop-blur-xl"
            >
              <div className="grid size-12 place-items-center rounded-lg bg-ink text-white">
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
            </article>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
