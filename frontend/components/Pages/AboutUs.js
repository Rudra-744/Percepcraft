import AboutHeroSection from "@/components/sections/about/AboutHeroSection";
import AboutContentSection from "@/components/sections/about/AboutContentSection";
import StatsCounterSection from "@/components/sections/about/StatsCounterSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import DraggablePortfolio from "@/components/Pages/DraggablePortfolio";
import TeamSection from "@/components/Pages/TeamSection";
import TestimonialSlider from "@/components/Pages/TestimonialSlider";
import ContactFormSection from "@/components/sections/shared/ContactFormSection";

export default function AboutUs() {
  return (
    <div className="w-full font-sans">
      {/* 1. HERO — Breadcrumb + heading */}
      <AboutHeroSection />

      {/* 2. MAIN CONTENT — Text + image grid */}
      <AboutContentSection />

      {/* 3. STATS COUNTER — Animated numbers */}
      <StatsCounterSection />

      {/* 4. SERVICES — Sticky left + scrollable cards */}
      <ServicesSection />

      {/* 5. DRAGGABLE PORTFOLIO */}
      <DraggablePortfolio />

      {/* 6. TEAM SECTION */}
      <TeamSection />

      {/* 7. TESTIMONIALS — Draggable Client Cards */}
      <TestimonialSlider />

      {/* 8. CONTACT FORM — Glassmorphism */}
      <ContactFormSection />
    </div>
  );
}
