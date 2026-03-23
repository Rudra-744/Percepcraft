import HeroSection from "@/components/sections/home/HeroSection";
import FeaturesSection from "@/components/sections/home/FeaturesSection";
import WhoWeAreSection from "@/components/sections/home/WhoWeAreSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import ProjectsShowcaseSection from "@/components/sections/home/ProjectsShowcaseSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import BrandMarqueeSection from "@/components/sections/home/BrandMarqueeSection";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col pt-0">
      {/* Hero — gradient background with CTA */}
      <HeroSection />
      {/* Features — 24yr experience + service/about cards */}
      <FeaturesSection />
      <WhoWeAreSection />
      <ServicesSection />
      <ProjectsShowcaseSection />
      <div className="min-h-screen bg-white font-sans">
        <TestimonialsSection />
        <BrandMarqueeSection />
      </div>
    </main>
  );
}
