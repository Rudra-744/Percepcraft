"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MapPin, Globe, Instagram, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-gray-900 pt-32 lg:pt-48 pb-24">
      
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
              Contact us
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center text-[13px] font-bold tracking-[0.15em] text-gray-800 uppercase"
            >
              <Link href="/" className="hover:text-[#6658EA] transition-colors">HOME</Link>
              <span className="mx-2">&gt;</span>
              <span>CONTACT US</span>
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

      {/* ── FORM SECTION ── */}
      <section className="w-full max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col md:flex-row w-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 bg-white"
        >
          {/* Overlapping OR Badge (Desktop Only) */}
          <div className="hidden md:flex absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#5d4fec] text-white border-[3px] border-white items-center justify-center z-20 text-[11px] font-bold tracking-wider uppercase shadow-md pointer-events-none">
            OR
          </div>

          {/* LEFT: Contact Directly */}
          <div className="w-full md:w-[40%] bg-gradient-to-b from-[#5d4fec] to-[#4c3ce6] text-white p-10 md:p-12 lg:p-16 flex flex-col relative overflow-hidden">
            {/* Decorative background shape */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <h3 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-14 tracking-tight leading-tight z-10">
              Contact<br />Directly
            </h3>

            <div className="flex flex-col gap-8 flex-1 z-10 mb-12">
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-indigo-200" strokeWidth={1.5} />
                <a href="tel:+917285865665" className="text-[15px] font-medium hover:text-indigo-200 transition-colors tracking-wide">
                  (+91) 728 586 5665
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-indigo-200" strokeWidth={1.5} />
                <span className="text-[15px] font-medium tracking-wide">
                  Ahmedabad, Sweden
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Globe className="w-5 h-5 text-indigo-200" strokeWidth={1.5} />
                <a href="mailto:info.perceptcraft@gmail.com" className="text-[15px] font-medium hover:text-indigo-200 transition-colors tracking-wide">
                  info.perceptcraft@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 z-10">
              <a href="#" className="hover:-translate-y-1 transition-transform" aria-label="Instagram"><Instagram className="w-5 h-5 text-white" /></a>
              <a href="#" className="hover:-translate-y-1 transition-transform" aria-label="Facebook"><Facebook className="w-5 h-5 text-white" fill="currentColor" strokeWidth={0}/></a>
              <a href="#" className="hover:-translate-y-1 transition-transform" aria-label="LinkedIn"><Linkedin className="w-5 h-5 text-white" fill="currentColor" strokeWidth={0}/></a>
              <a href="#" className="hover:-translate-y-1 transition-transform" aria-label="Twitter"><Twitter className="w-5 h-5 text-white" fill="currentColor" strokeWidth={0}/></a>
              <a href="#" className="hover:-translate-y-1 transition-transform" aria-label="YouTube"><Youtube className="w-5 h-5 text-white" /></a>
            </div>
          </div>

          {/* RIGHT: Send a Message */}
          <div className="w-full md:w-[60%] bg-[#F4F5F7] p-10 md:p-12 lg:p-16 flex flex-col justify-center">
            <h3 className="text-[26px] md:text-3xl font-bold text-gray-900 mb-10 tracking-tight">
              Send us a Message
            </h3>

            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-white px-6 py-4 rounded-xl text-[15px] text-gray-700 placeholder:text-gray-400 border border-gray-200 focus:border-[#6658EA] focus:outline-none focus:ring-4 focus:ring-[#6658EA]/10 transition-all font-medium shadow-sm"
                required
              />
              <input
                type="email"
                placeholder="Enter your mail"
                className="w-full bg-white px-6 py-4 rounded-xl text-[15px] text-gray-700 placeholder:text-gray-400 border border-gray-200 focus:border-[#6658EA] focus:outline-none focus:ring-4 focus:ring-[#6658EA]/10 transition-all font-medium shadow-sm"
                required
              />
              <textarea
                placeholder="Enter your message"
                rows={4}
                className="w-full bg-white px-6 py-4 rounded-xl text-[15px] text-gray-700 placeholder:text-gray-400 border border-gray-200 focus:border-[#6658EA] focus:outline-none focus:ring-4 focus:ring-[#6658EA]/10 transition-all resize-none font-medium shadow-sm"
                required
              />
              <button
                type="submit"
                className="w-max mt-4 bg-[#6658EA] hover:bg-[#5748D8] text-white px-10 py-[18px] rounded-xl text-[13px] font-bold tracking-[0.15em] uppercase transition-all shadow-[0_8px_20px_rgba(102,88,234,0.3)] hover:shadow-[0_12px_24px_rgba(102,88,234,0.4)] hover:-translate-y-0.5"
              >
                LET&apos;S TALK
              </button>
            </form>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
