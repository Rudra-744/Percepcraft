"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const CATEGORIES = [
  "All",
  "E-commerce",
  "UI Design",
  "Branding",
  "3D",
  "Webflow",
  "Custom Development",
];

/**
 * ProjectFilter — Horizontal filter tabs with animated underline
 * Uses framer-motion layoutId for smooth indicator transitions
 */
export default function ProjectFilter({ activeFilter, onFilterChange }) {
  const scrollRef = useRef(null);

  return (
    <div className="w-full border-b border-white/10">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
        <nav
          ref={scrollRef}
          className="flex gap-1 overflow-x-auto scrollbar-hide -mb-px"
          aria-label="Project categories"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => onFilterChange(category)}
                className={`
                  relative whitespace-nowrap px-5 py-4 text-[13px] md:text-[14px]
                  font-semibold tracking-wide transition-colors duration-200
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-[#6658EA] focus-visible:ring-offset-2 rounded-t-lg
                  ${isActive ? "text-white" : "text-gray-400 hover:text-gray-200"}
                `}
                aria-current={isActive ? "page" : undefined}
              >
                {category}

                {/* Animated underline indicator */}
                {isActive && (
                  <motion.div
                    layoutId="project-filter-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
