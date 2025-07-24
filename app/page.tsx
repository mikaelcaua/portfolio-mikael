
import { HeaderSection } from "@/components/HeaderSection";
import { HeroSection } from "@/components/HeroSection";



import { useContactData } from "@/hooks/useContactData";
import { useExperienceData } from "@/hooks/useExperienceData";
import { useHeaderData } from "@/hooks/useHeaderData";
import { useAboutData } from "@/hooks/useAboutData";
import { useHeroData } from "@/hooks/useHeroData";
import { useProjectsData } from "@/hooks/useProjectsData";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  const aboutData = useAboutData();
  const contactData = useContactData();
  const experienceData = useExperienceData();
  const heroData = useHeroData();
  const projectsData = useProjectsData();

  return (
    <main className="min-h-screen bg-white">
      <HeroSection {...heroData} />
      <AboutSection {...aboutData} />
      <ExperienceSection {...experienceData} />
      <ProjectsSection {...projectsData} />
      <ContactSection {...contactData} buttons={heroData.buttons} />
    </main>
  )
}
