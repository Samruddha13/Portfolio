import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import CertificationsSection from "@/components/certifications-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import ParticleBackground from "@/components/particle-background";
import CustomCursor from "@/components/custom-cursor";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Effects */}
      <ParticleBackground />
      <CustomCursor />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
