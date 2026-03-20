"use client";

import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="bg-[#2ecc71] hover:bg-[#27ae60] text-white rounded-[6px] w-11 h-11 flex items-center justify-center shadow-md transition-all duration-200 hover:-translate-y-0.5"
    >
      <ChevronUp className="w-5 h-5 stroke-2" />
    </button>
  );
}
