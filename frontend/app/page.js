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
      {/* Who We Are — oval image + description */}
      <WhoWeAreSection />
      {/* Services — sticky left + scrollable service cards */}
      <ServicesSection />
      {/* Projects — parallax grid of recent work */}
      <ProjectsShowcaseSection />
      {/* Testimonials — sticky heading + scrollable cards */}
      <div className="min-h-screen bg-white font-sans">
        <TestimonialsSection />
        {/* Brand Marquee — partner logos infinite scroll */}
        <BrandMarqueeSection />
      </div>
    </main>
  );
}
