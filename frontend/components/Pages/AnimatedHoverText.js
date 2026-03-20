"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  { id: "think", text: "Think.", image: "/cta-2.png" },
  { id: "make", text: "Make.", image: "/cta-4.png" },
  { id: "solve", text: "Solve.", image: "/cta-3.png" },
];

export default function AnimatedHoverText() {
  const [hoveredWordId, setHoveredWordId] = useState(null);

  return (
    <section className="relative w-full py-0 lg:py-10 bg-white border-t border-gray-100 flex flex-col justify-center items-center px-4">
      
      {/* Interactive Text Layer */}
      <h2 className="relative z-10 text-[40px] sm:text-[50px] md:text-[70px] lg:text-[120px] font-bold text-center tracking-normal text-transparent cursor-default select-none [-webkit-text-stroke:1px_#1a1a1a] flex flex-wrap justify-center items-center">
        {words.map((item, index) => (
          <span key={item.id} className="flex">
            <span
              onMouseEnter={() => setHoveredWordId(item.id)}
              onMouseLeave={() => setHoveredWordId(null)}
              className="transition-colors duration-500 hover:text-[#1a1a1a] relative group"
            >
              {/* Individual Image layered behind/above specific word */}
              <AnimatePresence>
                {hoveredWordId === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, x: "-50%", scale: 0.8 }}
                    animate={{ opacity: 1, y: -1, x: "-50%", scale: 1 }}
                    exit={{ opacity: 0, y: 0, x: "-50%", scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24, mass: 0.8 }}
                    className="absolute left-1/2 bottom-[60%] pointer-events-none drop-shadow-lg z-[-1]"
                  >
                    <div className="relative w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px]">
                      <Image
                        src={item.image}
                        alt={item.text}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {item.text}
            </span>
            {index < words.length - 1 && (
              <span className="w-2 md:w-4 lg:w-5" /> // Natural spacing
            )}
          </span>
        ))}
      </h2>
      
    </section>
  );
}
