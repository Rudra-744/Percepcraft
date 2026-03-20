import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Pen, Activity } from "lucide-react";

export default function FeaturesSection() {
  return (
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
  );
}
