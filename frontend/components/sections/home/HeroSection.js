"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/slider-grident-bg.png)" }}
      aria-labelledby="hero-heading"
    >
      <div className="max-w-[1500px] mx-auto w-full px-6 md:px-12 lg:px-20 flex flex-col-reverse lg:flex-row items-center pt-32 pb-12 lg:pt-40 lg:pb-20 gap-12 lg:gap-8 relative z-10">

        {/* ── Left Content ── */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500" aria-hidden="true" />
            <span className="text-sm font-semibold text-gray-700">
              Best solution we offer you
            </span>
            <span className="w-2 h-2 rounded-full bg-indigo-500" aria-hidden="true" />
          </div>

          {/* Main Heading */}
          <h1
            id="hero-heading"
            className="text-5xl md:text-6xl lg:text-[90px] leading-[1.1] font-bold text-[#1a1a1a] mb-6 tracking-tight"
          >
            Make a good{" "}
            <br className="hidden lg:block" />
            plan &amp; grow{" "}
            <br className="hidden lg:block" />
            your business
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-10 max-w-lg">
            We have almost 12+ years of experience for helping designing
            services and business solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 relative">
            <Link
              href="/projects"
              className="bg-[#6658EA] hover:bg-[#5749D0] text-white font-bold py-4 px-8 rounded-xl transition-all shadow-[0_4px_20px_rgba(102,88,234,0.3)] hover:shadow-[0_6px_25px_rgba(102,88,234,0.4)] w-full sm:w-auto text-center uppercase tracking-widest text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6658EA] focus-visible:ring-offset-2"
            >
              Work
            </Link>

            <button
              className="flex items-center gap-3 font-bold text-sm tracking-widest text-[#1a1a1a] hover:opacity-80 transition-opacity"
              aria-label="See inside video"
            >
              <span className="w-14 h-14 bg-[#F4D160] rounded-full flex items-center justify-center shadow-md shrink-0">
                <Play className="w-5 h-5 fill-black text-black ml-1" aria-hidden="true" />
              </span>
              See Inside
            </button>

          </div>
        </div>

        {/* ── Right Image ── */}
        <div className="flex-1 relative w-full max-w-[600px] lg:max-w-none flex justify-center">
          <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square max-w-[600px]">

            {/* Decorative squiggly arrow/angel shape */}
            <motion.div
              animate={{ x: [0, -50, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute -left-4 sm:-left-12 lg:-left-[90px] -bottom-8 sm:-bottom-12 lg:top-120 opacity-90 rotate-0 z-30 w-[100px] sm:w-[120px] lg:w-[160px] shrink-0"
              aria-hidden="true"
            >
              <Image 
                src="/hero-angel-shape copy.png" 
                alt="Decorative angel shape" 
                width={120} 
                height={80} 
                className="w-full h-auto object-contain drop-shadow-sm" 
              />
            </motion.div>

            <div
              className="absolute inset-4 border border-white/20 rounded-t-[250px] rounded-b-[100px] z-0"
              aria-hidden="true"
            />

            {/* Floating star shapes */}
            <div className="absolute top-16 right-4 lg:-right-4 z-20 animate-float" aria-hidden="true">
              <Image 
                src="/hero-star-shape.png" 
                alt="" 
                width={64} 
                height={64} 
                style={{ width: "auto", height: "auto" }}
              />
            </div>

            <div className="absolute -top-4 right-24 z-20 animate-spin-slow" aria-hidden="true">
              <Image 
                src="/hero-star-sm-shape.png" 
                alt="" 
                width={24} 
                height={24} 
                style={{ width: "auto", height: "auto" }}
              />
            </div>

            <div className="absolute bottom-12 -right-4 z-20" aria-hidden="true">
              <div className="w-3 h-3 rounded-full border-2 border-[#2ecc71]" />
            </div>

            {/* Hero image */}
            <Image
              src="/hero-1.png"
              alt="Business professional"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain object-bottom z-10 drop-shadow-2xl grayscale brightness-110 contrast-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
