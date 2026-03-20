// Server Component — no "use client" needed
import React from "react";

/**
 * ProjectHero — Hero section for the Projects/Portfolio page
 * Matches site theme (light gradient bg)
 */
export default function ProjectHero() {
  return (
    <section
      className="relative w-full pt-36 pb-16 md:pt-44 md:pb-20 lg:pt-48 lg:pb-24 overflow-hidden"
      style={{
        backgroundImage: "url(/slider-grident-bg.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      aria-labelledby="project-hero-heading"
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <span className="w-2 h-2 rounded-full bg-[#6658EA]" aria-hidden="true" />
          <span className="text-[13px] font-bold text-gray-700 tracking-wide">
            Portfolios
          </span>
          <span className="w-2 h-2 rounded-full bg-[#6658EA]" aria-hidden="true" />
        </div>

        {/* Main Heading */}
        <h1
          id="project-hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-[#1a1a1a] leading-[1.08] tracking-tight max-w-4xl mb-6"
        >
          Making vibrant brands and{" "}
          <br className="hidden md:block" />
          unforgettable digital{" "}
          <br className="hidden md:block" />
          presence.
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
          We craft exceptional digital experiences that transform ideas into
          powerful brands and drive real business results.
        </p>
      </div>
    </section>
  );
}
