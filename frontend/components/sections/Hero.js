import Image from "next/image";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center min-h-screen"
      style={{
        backgroundImage: "url(/slider-grident-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1500px] mx-auto w-full px-6 md:px-12 lg:px-20 flex flex-col-reverse lg:flex-row items-center pt-32 pb-12 lg:pt-40 lg:pb-20 gap-12 lg:gap-8 relative z-10">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            <span className="text-sm font-semibold text-gray-700">
              Best solution we offer you
            </span>
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-[72px] leading-[1.1] font-bold text-[#1a1a1a] mb-6 tracking-tight animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            Make a good <br className="hidden lg:block" /> plan & grow{" "}
            <br className="hidden lg:block" /> your business
          </h1>

          <p
            className="text-lg text-gray-600 mb-10 max-w-lg animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            We have almost 12+ years of experience for helping designing
            services and business solutions.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center gap-6 animate-fade-in-up relative"
            style={{ animationDelay: "300ms" }}
          >
            <button className="bg-[#6658EA] hover:bg-[#5749D0] text-white font-bold py-4 px-8 rounded-xl transition-all shadow-[0_4px_20px_rgba(102,88,234,0.3)] hover:shadow-[0_6px_25px_rgba(102,88,234,0.4)] w-full sm:w-auto">
              WORK
            </button>

            <button className="flex items-center gap-3 font-bold text-sm tracking-widest text-[#1a1a1a] hover:opacity-80 transition-opacity">
              <div className="w-14 h-14 bg-[#F4D160] rounded-full flex items-center justify-center shadow-md">
                <Play className="w-5 h-5 fill-black text-black ml-1" />
              </div>
              SEE INSIDE
            </button>

            {/* Squiggly arrow pointing to the woman */}
            <div className="absolute left-[110%] -bottom-10 hidden lg:block opacity-90 rotate-12">
              <svg
                width="120"
                height="80"
                viewBox="0 0 120 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 60 C 20 60, 40 80, 50 50 C 60 20, 30 20, 30 50 C 30 70, 60 70, 100 20"
                  stroke="#6658EA"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M85 18 L 102 18 L 98 35"
                  stroke="#6658EA"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none flex justify-center animate-fade-in-up">
          <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square max-w-[550px]">
            {/* Removed background shapes as requested */}
            <div className="absolute inset-4 border border-white/20 rounded-t-[250px] rounded-b-[100px] z-0"></div>

            <div className="absolute top-16 right-4 lg:-right-4 z-20 animate-float drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              <Image
                src="/hero-star-shape.png"
                alt="Star Shape"
                width={64}
                height={64}
              />
            </div>

            <div className="absolute -top-4 right-24 z-20 animate-spin-slow">
              <Image
                src="/hero-star-sm-shape.png"
                alt="Small Star Shape"
                width={24}
                height={24}
              />
            </div>

            <div className="absolute bottom-12 -right-4 z-20">
              <div className="w-3 h-3 rounded-full border-2 border-[#2ecc71] bg-transparent"></div>
            </div>

            <Image
              src="/hero-1.png"
              alt="Business woman"
              fill
              priority
              className="object-contain object-bottom z-10 drop-shadow-2xl grayscale brightness-110 contrast-105"
              sizes="(max-w-768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
