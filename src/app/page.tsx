import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { PositioningSection } from "@/components/sections/PositioningSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WorkSection } from "@/components/sections/WorkSection";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <SiteHeader />

      <main id="contenu">
        <HeroSection />
        <PositioningSection />
        <ServicesSection />
        <MethodSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
        <FinalCtaSection />
      </main>

      <SiteFooter />
    </>
  );
}
