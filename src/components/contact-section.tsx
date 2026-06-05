import { Camera, GitBranch, Link2, Mail, type LucideIcon } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { personal } from "@/data/portfolio";

const socialIcons: Record<string, LucideIcon> = {
  GitHub: GitBranch,
  LinkedIn: Link2,
  Instagram: Camera,
};

export function ContactSection() {
  return (
    <AnimatedSection
      id="contact"
      eyebrow="Contact"
      title="Open to internships, collaborations, and applied AI conversations."
      description="For recruiters, collaborators, and teams looking for a motivated fullstack developer with AI and computer vision interests."
      className="pb-24"
    >
      <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-lg border border-white/70 bg-ink p-8 text-white shadow-glow">
          <p className="font-mono text-sm font-semibold text-skyglow">Email</p>
          <h3 className="mt-4 text-2xl font-semibold leading-9 sm:text-3xl">
            Let us build something practical, intelligent, and useful.
          </h3>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
            The fastest way to reach Albert is by email. The CV button in the
            navigation and hero section downloads the current resume PDF.
          </p>
          <a
            href={`mailto:${personal.email}`}
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-blue-50"
          >
            <Mail size={18} aria-hidden="true" />
            {personal.email}
          </a>
        </div>

        <div className="grid gap-3">
          {personal.socials.map((social) => {
            const Icon = socialIcons[social.label as keyof typeof socialIcons] ?? Mail;

            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 rounded-lg border border-white/70 bg-white/78 p-5 shadow-card backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-glow"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-blue-50 text-electric">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-ink">{social.label}</span>
                    <span className="block truncate text-sm text-slate-500">
                      {social.handle}
                    </span>
                  </span>
                </span>
                <span className="text-sm font-semibold text-slate-400 transition group-hover:text-electric">
                  Open
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
