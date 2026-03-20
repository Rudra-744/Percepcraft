import Link from "next/link";

export default function ServiceHeroSection() {
  return (
    <section className="relative w-full pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24 lg:pb-32 flex items-center overflow-hidden bg-[#FAFAFA] border-b border-gray-100">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col text-left mb-10 md:mb-0">
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black text-[#1a1a1a] mb-6 tracking-tight">
            Service
          </h1>
          <nav className="flex items-center gap-2 text-xs md:text-[13px] font-bold tracking-widest text-[#1a1a1a] uppercase">
            <Link
              href="/"
              className="hover:text-indigo-600 transition-colors"
            >
              HOME
            </Link>
            <span className="font-light text-gray-400 mx-1">&gt;</span>
            <span className="text-gray-600">OUR SERVICE</span>
          </nav>
        </div>

        {/* Decorative Spheres Graphic */}
        <div className="relative w-[320px] h-[320px] lg:w-[450px] lg:h-[450px] hidden md:block select-none pointer-events-none mr-2 lg:mr-10">
          {/* Base Sphere */}
          <div className="absolute right-0 bottom-0 w-[220px] h-[220px] lg:w-[320px] lg:h-[320px] rounded-full bg-gradient-to-tr from-[#65D4F9] to-[#3B82F6] opacity-95" />

          {/* Top Sphere (Glassmorphic) */}
          <div className="absolute left-0 top-6 lg:top-8 w-[220px] h-[220px] lg:w-[320px] lg:h-[320px] rounded-full bg-white/40 backdrop-blur-[25px] border border-white/70 shadow-[0_8px_32px_0_rgba(255,255,255,0.4)] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E1C5FF]/50 via-white/20 to-transparent mix-blend-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}
