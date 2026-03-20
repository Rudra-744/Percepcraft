"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export default function ProjectsShowcaseSection() {
  const [offsets, setOffsets] = useState([0, 0, 0, 0]);
  const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const handleScroll = () => {
      const newOffsets = cardRefs.map((ref) => {
        if (!ref.current) return 0;
        const rect = ref.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        const cardCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const distanceFromCenter = cardCenter - viewportCenter;
        
        return distanceFromCenter * 0.1;
      });
      setOffsets(newOffsets);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = PROJECTS.slice(0, 4);

  return (
    <section 
      className="w-full py-20 lg:py-32 relative overflow-hidden"
      aria-labelledby="projects-showcase-heading"
      style={{
        backgroundImage: "url(/slider-grident-bg.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white shadow-sm border border-gray-100 mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2ecc71]" aria-hidden="true" />
            <span className="text-[14px] font-bold text-gray-700 tracking-wide">Check our Work</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#2ecc71]" aria-hidden="true" />
          </div>
          <h2 id="projects-showcase-heading" className="text-5xl sm:text-6xl lg:text-[72px] font-bold text-[#111111] leading-[1.1] tracking-tight">
            Some of our recent Work
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16 lg:mb-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              ref={cardRefs[index]}
              className="group relative rounded-[32px] overflow-hidden bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 h-[400px] sm:h-[450px] lg:h-[500px]"
            >
              {/* Image Container with Parallax */}
              <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[32px] bg-gray-100">
                <div 
                  className="relative w-full h-[120%] -top-[10%] transition-transform duration-100 ease-out"
                  style={{ transform: `translateY(${offsets[index]}px)` }}
                >
                  <div className="w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out bg-gradient-to-br flex flex-col items-center justify-center p-8 text-center text-gray-400"
                       style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))` }}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient || 'from-gray-100 to-gray-200'} opacity-50`} />
                    <span className="relative z-10 mb-4 transition-transform duration-300 group-hover:-translate-y-2">
                       <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                       </svg>
                    </span>
                    <h3 className="relative z-10 font-bold text-gray-800 text-2xl tracking-tight mb-2 opacity-90 transition-transform duration-300 group-hover:-translate-y-2">{project.client || project.title}</h3>
                    <p className="relative z-10 font-medium text-gray-500 uppercase tracking-widest text-xs transition-transform duration-300 group-hover:-translate-y-2">{project.category || 'Project'}</p>
                  </div>
                </div>
              </div>

              {/* Hover Overlay Arrow */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                <div className="w-20 h-20 bg-[#2ecc71] rounded-full flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500 ease-out shadow-xl">
                  <ArrowUpRight className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
              </div>
              
              <Link href={`/projects/${project.id}`} className="absolute inset-0 z-30" aria-label={`View ${project.client || project.title}`} />
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-12 py-[22px] bg-[#6658EA] hover:bg-[#5748D8] text-white font-bold text-[13px] tracking-[0.16em] rounded-xl transition-all duration-300 shadow-[0_16px_36px_-8px_rgba(102,88,234,0.55)] hover:shadow-[0_20px_44px_-6px_rgba(102,88,234,0.65)] hover:-translate-y-1 uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6658EA] focus-visible:ring-offset-2"
          >
            All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
