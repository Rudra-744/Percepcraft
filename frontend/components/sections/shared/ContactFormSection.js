"use client";

import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden bg-white" aria-labelledby="contact-heading">
      {/* Decorative gradient blob (top-right) */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] opacity-60 pointer-events-none -z-0">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-violet-300 via-indigo-200 to-sky-200 blur-[80px]" />
      </div>

      {/* Decorative gradient blob (bottom-left) */}
      <div className="absolute bottom-10 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] opacity-40 pointer-events-none -z-0">
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-purple-300 via-pink-200 to-orange-100 blur-[70px]" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

          {/* ── LEFT: Contact Info ── */}
          <div className="w-full lg:w-[45%]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#6658EA]" aria-hidden="true" />
              <span className="text-[13px] font-bold text-gray-700 tracking-wide">Contact me</span>
              <span className="w-2 h-2 rounded-full bg-[#6658EA]" aria-hidden="true" />
            </div>

            <h2
              id="contact-heading"
              className="text-4xl sm:text-5xl lg:text-[56px] font-black text-[#1a1a1a] leading-[1.1] tracking-tight mb-10"
            >
              Let&apos;s Work<br /> Together.
            </h2>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-4.5 h-4.5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">
                    B-803, Infinity tower Corporate road, beside<br />
                    Ramada Hotel, Prahlad Nagar, Ahmedabad, Gujarat<br />
                    380015
                  </p>
                </div>
              </div>

              <div className="w-full max-w-[380px] h-px bg-gray-100" />

              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shrink-0 shadow-md">
                  <Mail className="w-4.5 h-4.5 text-white" strokeWidth={2} />
                </div>
                <a href="mailto:info.perceptcraft@gmail.com" className="text-[13px] sm:text-[14px] text-gray-600 hover:text-indigo-600 transition-colors">
                  info.perceptcraft@gmail.com
                </a>
              </div>

              <div className="w-full max-w-[380px] h-px bg-gray-100" />

              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-4.5 h-4.5 text-white" strokeWidth={2} />
                </div>
                <a href="tel:+917285865665" className="text-[13px] sm:text-[14px] text-gray-600 hover:text-indigo-600 transition-colors">
                  (+91) 728 586 5665
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Glassmorphism Form ── */}
          <div className="w-full lg:w-[55%]">
            <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-8 sm:p-10 lg:p-12">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-violet-200/30 via-transparent to-indigo-200/20 -z-10 blur-xl" />

              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">📋</span>
                <h3 className="text-[20px] sm:text-[22px] font-bold text-gray-900">Fill the form</h3>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl text-[14px] text-gray-700 placeholder:text-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400/40 focus:border-indigo-300 transition-all duration-200"
                  aria-label="Company name"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl text-[14px] text-gray-700 placeholder:text-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400/40 focus:border-indigo-300 transition-all duration-200"
                  aria-label="Email address"
                />

                <textarea
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl text-[14px] text-gray-700 placeholder:text-gray-400 font-medium resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400/40 focus:border-indigo-300 transition-all duration-200"
                  aria-label="Your message"
                />

                <button
                  type="submit"
                  className="w-full sm:w-auto self-start px-10 py-4 bg-gradient-to-r from-[#6658EA] to-[#8B7CF7] hover:from-[#5748D8] hover:to-[#7A6BF0] text-white font-bold text-[13px] tracking-[0.15em] rounded-xl transition-all duration-300 shadow-[0_12px_28px_-6px_rgba(102,88,234,0.5)] hover:shadow-[0_16px_36px_-4px_rgba(102,88,234,0.6)] hover:-translate-y-0.5 uppercase"
                >
                  LET&apos;S TALK
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
