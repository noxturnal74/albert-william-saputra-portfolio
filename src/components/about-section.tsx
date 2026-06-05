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
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
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

        <div className="grid gap-3 sm:grid-cols-2">
          {focusAreas.map((area, index) => (
            <div
              key={area}
              className="rounded-lg border border-white/70 bg-white/75 p-5 shadow-card backdrop-blur-xl"
            >
              <span className="font-mono text-sm font-semibold text-electric">
                0{index + 1}
              </span>
              <p className="mt-4 font-semibold leading-7 text-ink">{area}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
