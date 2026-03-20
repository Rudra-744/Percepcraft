import ServiceHeroSection from "@/components/sections/services/ServiceHeroSection";
import ServiceGridSection from "@/components/sections/services/ServiceGridSection";
import WhoWeAreSection from "@/components/sections/home/WhoWeAreSection";
import ContactFormSection from "@/components/sections/shared/ContactFormSection";

export default function Service() {
  return (
    <div className="w-full font-sans bg-gray-50/20">
      {/* 1. HERO — Service heading + decorative spheres */}
      <ServiceHeroSection />

      {/* 2. SERVICES GRID — 6 service cards */}
      <ServiceGridSection />

      {/* 3. WHO WE ARE — Shared section (also used on home page) */}
      <WhoWeAreSection />

      {/* 4. CONTACT FORM — Shared glassmorphism form */}
      <div className="border-t border-gray-100">
        <ContactFormSection />
      </div>
    </div>
  );
}
