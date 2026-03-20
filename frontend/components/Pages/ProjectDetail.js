"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";

export default function ProjectDetail({ project }) {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-gray-900 pt-32 lg:pt-48 pb-24">
      {/* ── 1. HERO SECTION ── */}
      <section className="relative w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-20 mb-16 md:mb-24 overflow-hidden bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="z-10 w-full md:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight text-[#1a1a1a] mb-6 md:mb-8"
            >
              Case Details
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center text-[13px] font-bold tracking-[0.15em] text-gray-800 uppercase"
            >
              <Link href="/" className="hover:text-[#6658EA] transition-colors">
                HOME
              </Link>
              <span className="mx-2">&gt;</span>
              <Link
                href="/projects"
                className="hover:text-[#6658EA] transition-colors"
              >
                OUR PROJECT
              </Link>
              <span className="mx-2">&gt;</span>
              <span className="truncate max-w-[120px] sm:max-w-none">
                {project.client}
              </span>
            </motion.div>
          </div>

          {/* Decorative Bubbles (Desktop) */}
          <div className="hidden md:block w-1/2 relative h-[250px] lg:h-[350px]">
            {/* Base gradient solid circle utilizing project's assigned aesthetic gradient */}
            <div
              className={`absolute top-1/2 right-10 lg:right-20 -translate-y-1/2 w-[200px] lg:w-[280px] aspect-square rounded-full ${project.gradient} shadow-2xl`}
            />
            {/* White frosted glass circle */}
            <div className="absolute top-1/2 right-28 lg:right-48 -translate-y-1/2 w-[200px] lg:w-[280px] aspect-square rounded-full bg-white/40 backdrop-blur-xl border border-white/80 shadow-[10px_0_30px_rgba(0,0,0,0.05)]" />
          </div>
        </div>
      </section>

      {/* ── 2. LARGE VIDEO CONTAINER ── */}
      <section className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-20 mb-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[40vh] sm:h-[50vh] md:h-[65vh] lg:h-[80vh] rounded-[2rem] overflow-hidden group cursor-pointer"
          style={{ backgroundColor: project.hoverBg }}
        >
          {/* Mock Video Gradient/Pattern */}
          <div
            className={`absolute inset-0 w-full h-full ${project.gradient} opacity-80 mix-blend-multiply`}
          />

          {/* Central Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-28 md:h-28 bg-[#6658EA] rounded-full flex items-center justify-center text-white shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#5748D8]">
              <Play
                className="w-8 h-8 md:w-10 md:h-10 ml-2"
                fill="currentColor"
              />
            </div>
            {/* Huge mock dimensions text matching reference */}
            <div className="absolute font-black text-white/20 text-[10vw] md:text-[8rem] tracking-tighter pointer-events-none select-none z-0 mix-blend-overlay">
              1290 X 541
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── 3. PROJECT DETAIL BRIEF (Clean White Section) ── */}
      <section className="w-full bg-white text-gray-900 py-24 md:py-32">
        <div className="max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-block bg-gray-100 px-4 py-2 rounded-sm text-[11px] font-bold tracking-[0.15em] uppercase text-gray-600"
          >
            Published in 2024
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium mb-16 leading-[1.15] max-w-[800px] text-gray-900"
          >
            {project.client} <br />
            <span className="text-[#6658EA]">{project.title}</span>
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-16 lg:gap-24">
            {/* Description & Button Array */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full lg:w-[50%]"
            >
              <p className="text-[17px] md:text-[19px] text-gray-600 font-normal leading-relaxed mb-12">
                {project.description}
              </p>

              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noreferrer wmoopener"
                className="inline-flex items-center gap-3 bg-[#6658EA] hover:bg-[#5748D8] text-white px-8 py-4 rounded-full font-medium transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(102,88,234,0.3)]"
              >
                Official Website
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </motion.div>

            {/* Meta Lists Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-full lg:w-[40%] flex flex-col sm:flex-row gap-16 sm:gap-12"
            >
              <div className="flex-1">
                <h4 className="text-[12px] font-bold tracking-[0.15em] text-gray-900 uppercase mb-6">
                  Services
                </h4>
                <ul className="flex flex-col gap-4">
                  {project.services.map((service) => (
                    <li
                      key={service}
                      className="text-[15px] font-medium text-gray-600"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h4 className="text-[12px] font-bold tracking-[0.15em] text-gray-900 uppercase mb-6">
                  Industries
                </h4>
                <ul className="flex flex-col gap-4">
                  {project.industries.map((industry) => (
                    <li
                      key={industry}
                      className="text-[15px] font-medium text-gray-600"
                    >
                      {industry}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. GALLERY SHOWCASE (1-8 CUSTOM LAYOUT) ── */}
      <section className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-20 py-24 md:py-10">
        <div className="flex flex-col gap-16 md:gap-5">
          {/* Row 1: 4 Boxes (2x2 Grid), Large Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-5">
            {[0, 1, 2, 3].map((i) => {
              const bg =
                project.gallery[i]?.color ||
                ["#f8fafc", "#f1f5f9", "#e2e8f0", "#cbd5e1"][i];
              return (
                <motion.div
                  key={`box-${i}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative rounded-2xl md:rounded-[0.5rem] overflow-hidden shadow-sm aspect-[4/5] md:aspect-[4/4]"
                  style={{ backgroundColor: bg }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-40">
                    <span className="text-[12px] md:text-[14px] font-bold tracking-widest text-gray-800 mix-blend-overlay">
                      IMAGE {i + 1}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Row 2: 1 Extremely Large Centered Box */}
          <div className="w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full rounded-[1rem] overflow-hidden shadow-md aspect-video md:aspect-[16/9]"
              style={{
                backgroundColor: project.gallery[4]?.color || "#f3f4f6",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-40">
                <span className="text-[16px] md:text-[20px] font-bold tracking-widest text-gray-800 mix-blend-overlay">
                  LARGE CENTERED SHOWCASE
                </span>
              </div>
            </motion.div>
          </div>

          {/* Row 3: 3 Horizontal Medium Sizes (scaled drastically larger) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
            {[5, 6, 7].map((i) => {
              const bg =
                project.gallery[i]?.color ||
                ["#e5e7eb", "#d1d5db", "#9ca3af"][i - 5];
              return (
                <motion.div
                  key={`med-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: (i - 5) * 0.15 }}
                  className="relative rounded-2xl md:rounded-[0.5rem] overflow-hidden shadow-sm aspect-[4/5] md:aspect-square lg:aspect-[3/4]"
                  style={{ backgroundColor: bg }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-40">
                    <span className="text-[12px] md:text-[14px] font-bold tracking-widest text-gray-800 mix-blend-overlay">
                      SHOWCASE {i + 1}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
