import { AboutSection } from "@/components/about-section";
import { AchievementsSection } from "@/components/achievements-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { Navigation } from "@/components/navigation";
import { ProjectsSection } from "@/components/projects-section";
import { SiteFooter } from "@/components/site-footer";
import { SkillsSection } from "@/components/skills-section";
import { SmoothScroll } from "@/components/smooth-scroll";

export function PortfolioPage() {
  return (
    <>
      <SmoothScroll />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
