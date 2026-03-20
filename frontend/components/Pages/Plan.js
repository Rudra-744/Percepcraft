"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ContactSection from "./ContactSection";

const PLANS = [
  {
    name: "Basic",
    target: "For individuals",
    desc: "Show social proof notifications to increase leads and sales.",
    price: "$59",
    period: "/monthly",
    features: [
      { name: "All analytics features", included: true },
      { name: "Up to 250,000 tracked visits", included: true },
      { name: "Normal support", included: true },
      { name: "Up to 3 team members", included: false },
      { name: "Up to 250,000 tracked visits", included: false },
      { name: "Normal support", included: false },
    ],
  },
  {
    name: "Standard",
    target: "For individuals",
    desc: "Show social proof notifications to increase leads and sales.",
    price: "$99",
    period: "/monthly",
    features: [
      { name: "All analytics features", included: true },
      { name: "Up to 250,000 tracked visits", included: true },
      { name: "Normal support", included: true },
      { name: "Up to 3 team members", included: true },
      { name: "Up to 250,000 tracked visits", included: true },
      { name: "Normal support", included: true },
    ],
  },
];

export default function Plan() {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-gray-900 pt-32 lg:pt-48">
      
      {/* ── HERO SECTION ── */}
      <section className="relative w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-20 mb-20 md:mb-32 overflow-hidden bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="z-10 w-full md:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight text-[#1a1a1a] mb-6 md:mb-8"
            >
              Pricing Plan
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center text-[13px] font-bold tracking-[0.15em] text-gray-800 uppercase"
            >
              <Link href="/" className="hover:text-[#6658EA] transition-colors">HOME</Link>
              <span className="mx-2">&gt;</span>
              <span>PRICE & PLAN</span>
            </motion.div>
          </div>
          
          {/* Decorative Bubbles (Desktop) */}
          <div className="hidden md:block w-1/2 relative h-[300px] lg:h-[400px]">
            {/* Base Blue solid circle */}
            <div className="absolute top-1/2 right-10 lg:right-20 -translate-y-1/2 w-[240px] lg:w-[320px] aspect-square rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-[#6658EA] shadow-2xl" />
            {/* White frosted glass circle */}
            <div className="absolute top-1/2 right-28 lg:right-48 -translate-y-1/2 w-[240px] lg:w-[320px] aspect-square rounded-full bg-white/40 backdrop-blur-xl border border-white/80 shadow-[10px_0_30px_rgba(0,0,0,0.05)]" />
          </div>
        </div>
      </section>

      {/* ── PRICING SECTION ── */}
      <section className="w-full max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-20 mb-32 relative bg-white">
        <div className="flex flex-col gap-12 lg:gap-16">
          {PLANS.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col md:flex-row w-full rounded-[2.5rem] overflow-hidden shadow-[0_4px_40px_rgba(0,0,0,0.03)] border border-gray-100"
            >
              {/* Left Side: Plan Info */}
              <div className="w-full md:w-[45%] bg-white p-10 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#F3F1FF] flex items-center justify-center shadow-sm">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" fill="#E8F0FE" />
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22V2Z" fill="#6658EA"/>
                     </svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-gray-500">{plan.target}</p>
                    <h3 className="text-[22px] font-bold text-gray-900">{plan.name}</h3>
                  </div>
                </div>
                
                <p className="text-[15px] text-gray-500 mb-10 leading-relaxed max-w-[280px]">
                  {plan.desc}
                </p>
                
                <div className="flex items-baseline gap-2 mb-12">
                  <span className="text-[52px] font-black text-gray-900 tracking-tight leading-none">{plan.price}</span>
                  <span className="text-[15px] text-gray-500 font-medium">{plan.period}</span>
                </div>
                
                <button className="w-full max-w-[280px] py-[18px] rounded-full bg-[#6658EA] hover:bg-[#5748D8] focus:ring-4 focus:ring-[#8B7CF7]/50 transition-all text-white font-bold text-[13px] tracking-[0.1em] uppercase shadow-[0_8px_20px_rgba(102,88,234,0.3)] hover:shadow-[0_12px_24px_rgba(102,88,234,0.4)] hover:-translate-y-0.5">
                  Get Started
                </button>
              </div>

              {/* Right Side: Features List */}
              <div className="w-full md:w-[55%] bg-[#F9F9FB] p-10 md:p-12 lg:p-16 flex flex-col justify-center">
                <h4 className="text-[22px] font-bold text-gray-900 mb-8 tracking-tight">What&apos;s included</h4>
                
                <ul className="space-y-[18px]">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-4">
                      {feature.included ? (
                        <div className="w-[22px] h-[22px] rounded-full bg-[#6658EA] flex items-center justify-center shrink-0 shadow-sm">
                           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                             <polyline points="20 6 9 17 4 12"></polyline>
                           </svg>
                        </div>
                      ) : (
                        <div className="w-[22px] h-[22px] rounded-full bg-gray-300 flex items-center justify-center shrink-0">
                           <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                             <line x1="18" y1="6" x2="6" y2="18"></line>
                             <line x1="6" y1="6" x2="18" y2="18"></line>
                           </svg>
                        </div>
                      )}
                      <span className={`text-[15px] ${feature.included ? 'text-gray-600 font-medium' : 'text-gray-400 font-medium'}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CONTACT FORM SECTION ── */}
      <div className="pb-16 lg:pb-24">
         <ContactSection />
      </div>
    </div>
  );
}
