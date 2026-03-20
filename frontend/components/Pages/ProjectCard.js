"use client";

import { memo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = memo(function ProjectCard({ project, index, onMouseEnter, onMouseLeave }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index % 2 === 0 ? 0 : 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group w-full sm:w-fit"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link
        href={`/projects/${project.id}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6658EA] focus-visible:ring-offset-4 rounded-2xl"
        aria-label={`View project: ${project.title}`}
      >
        {/* Image Container */}
        <div className="relative w-full sm:w-[400px] md:w-[500px] lg:w-[650px] xl:w-[560px] h-[450px] sm:h-[400px] md:h-[450px] lg:h-[550px] xl:h-[750px] rounded-2xl overflow-hidden bg-[#1a1a1a] mb-5 md:mb-6">
          {/* Gradient placeholder — replace with next/image when real images are available */}
          <div
            className={`
              absolute inset-0 w-full h-full transition-transform duration-700 ease-out
              group-hover:scale-110 ${project.gradient}
            `}
            role="img"
            aria-label={project.title}
          >
            {/* Decorative overlay pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                backgroundSize: "24px 24px",
              }}
            />

            {/* Placeholder content */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 mx-auto mb-3 opacity-20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm font-bold opacity-30">
                  {project.title}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-2.5">
          {/* Project Name + Decorative Line */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-white tracking-wide">
              {project.client}
            </span>
            <span
              className="flex-1 h-px bg-white/20 max-w-[100px]"
              aria-hidden="true"
            />
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
            {project.title}
          </h3>

          {/* Tags */}
          <p className="text-sm text-gray-400 font-medium">
            {project.tags.join(", ")}
          </p>
        </div>
      </Link>
    </motion.article>
  );
});

export default ProjectCard;
