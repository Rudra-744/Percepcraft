"use client";

import { useState, useMemo, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectHero from "./ProjectHero";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";

import { PROJECTS } from "../../data/projects";

export default function Project() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredBg, setHoveredBg] = useState("#212121");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = useCallback((category) => {
    setActiveFilter(category);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <ProjectHero />

      <div 
        className="w-full min-h-screen transition-colors duration-800 ease-in-out"
        style={{ backgroundColor: hoveredBg }}
      >
        {/* Filter Tabs */}
      <ProjectFilter
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      {/* Project Grid — Offset Masonry Layout */}
      <section
        className="w-full py-16 md:py-20 lg:py-28"
        aria-label="Projects gallery"
      >
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-14 md:gap-y-16 lg:gap-y-20"
            >
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`${
                    index % 2 === 1 ? "md:mt-24 lg:mt-32" : ""
                  }`}
                >
                  <ProjectCard 
                    project={project} 
                    index={index} 
                    onMouseEnter={() => setHoveredBg(project.hoverBg)}
                    onMouseLeave={() => setHoveredBg("#212121")}
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <p className="text-lg font-semibold text-gray-300">
                No projects found in this category
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Try selecting a different filter above
              </p>
            </motion.div>
          )}
        </div>
      </section>
      </div>
    </div>
  );
}
