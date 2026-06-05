import { BrainCircuit, Code2, Database, Layers } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { skillGroups } from "@/data/portfolio";

const icons = [Code2, Layers, Database, Code2, BrainCircuit];

export function SkillsSection() {
  return (
    <AnimatedSection
      id="skills"
      eyebrow="Skills"
      title="A practical stack for web products, databases, and AI experiments."
      description="A blend of frontend polish, backend fundamentals, database fluency, and applied computer vision tooling."
      className="bg-white/42"
    >
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {skillGroups.map((group, index) => {
          const Icon = icons[index] ?? Code2;

          return (
            <div
              key={group.title}
              className="rounded-lg border border-white/70 bg-white/75 p-5 shadow-card backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-glow"
            >
              <div className="grid size-11 place-items-center rounded-lg bg-blue-50 text-electric">
                <Icon size={21} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
