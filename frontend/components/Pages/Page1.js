import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Pen, Activity, Play } from "lucide-react";

export default function Page1() {
  return (
    <>
      {/* ════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden flex items-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/slider-grident-bg.png)" }}
        aria-labelledby="page1-heading"
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
              id="page1-heading"
              className="text-5xl md:text-6xl lg:text-[72px] leading-[1.1] font-bold text-[#1a1a1a] mb-6 tracking-tight"
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

              {/* Decorative squiggly arrow */}
              <div
                className="absolute left-[110%] -bottom-10 hidden lg:block opacity-90 rotate-12"
                aria-hidden="true"
              >
                <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                  <path
                    d="M10 60 C 20 60, 40 80, 50 50 C 60 20, 30 20, 30 50 C 30 70, 60 70, 100 20"
                    stroke="#6658EA" strokeWidth="3" strokeLinecap="round" fill="none"
                  />
                  <path
                    d="M85 18 L 102 18 L 98 35"
                    stroke="#6658EA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* ── Right Image ── */}
          <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none flex justify-center">
            <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square max-w-[550px]">

              <div
                className="absolute inset-4 border border-white/20 rounded-t-[250px] rounded-b-[100px] z-0"
                aria-hidden="true"
              />

              {/* Floating star shapes */}
              <div className="absolute top-16 right-4 lg:-right-4 z-20 animate-float" aria-hidden="true">
                <Image src="/hero-star-shape.png" alt="" width={64} height={64} />
              </div>

              <div className="absolute -top-4 right-24 z-20 animate-spin-slow" aria-hidden="true">
                <Image src="/hero-star-sm-shape.png" alt="" width={24} height={24} />
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

      {/* ════════════════════════════════════════════
          FEATURES SECTION (part of Page 1)
      ════════════════════════════════════════════ */}
      <section
        className="w-full bg-[#f8f9fa] py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
        aria-label="Features"
      >
        <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24">

          {/* Left Side: Experience & Quote */}
          <div className="flex-1 flex flex-col gap-8 max-w-xl">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] tracking-tight">
                24 Year of Experience
              </h2>
              <p className="text-xl md:text-2xl text-gray-500 italic font-medium leading-relaxed">
                &ldquo;Percept Craft — We are a creative team that believes in
                making your perceptions come true.&rdquo;
              </p>
            </div>

            {/* Founder info */}
            <div className="flex items-center gap-5 mt-4">
              <div className="relative w-[74px] h-[71px] bg-gray-200 rounded-lg overflow-hidden shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="Darrell Steward — Founder"
                  fill
                  sizes="74px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-[#1a1a1a]">Darrell Steward</h3>
                <p className="text-sm text-gray-600">
                  Founder of Perceptcraft{" "}
                  <span className="text-yellow-500" aria-label="5 star">★</span> — 5 star Agency
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Feature Cards */}
          <div className="flex-1 w-full flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10">

            {/* Card 1 */}
            <Link 
              href="/services"
              className="flex-1 bg-white p-10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all flex flex-col items-start gap-8 group"
            >
              <div className="w-16 h-16 bg-[#2ecc71] rounded-full flex items-center justify-center text-white" aria-hidden="true">
                <Pen className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] leading-tight">
                Service we can <br /> help you with
              </h3>
              <div
                className="flex items-center gap-3 text-xs font-bold tracking-widest text-gray-500 group-hover:text-[#1a1a1a] transition-colors uppercase rounded"
              >
                <span className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:text-white transition-all" aria-hidden="true">
                  <ArrowRight className="w-4 h-4" />
                </span>
                Our Service
              </div>
            </Link>

            {/* Card 2 */}
            <Link
              href="/about" 
              className="flex-1 bg-white p-10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all flex flex-col items-start gap-8 group"
            >
              <div className="w-16 h-16 bg-[#f4d160] rounded-full flex items-center justify-center text-white" aria-hidden="true">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] leading-tight">
                Why you should <br /> choose us
              </h3>
              <div
                className="flex items-center gap-3 text-xs font-bold tracking-widest text-gray-500 group-hover:text-[#1a1a1a] transition-colors uppercase rounded"
              >
                <span className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:text-white transition-all" aria-hidden="true">
                  <ArrowRight className="w-4 h-4" />
                </span>
                About Us
              </div>
            </Link>

          </div>
        </div>
      </section>
    </>
  );
}
