import Link from "next/link";
import { ArrowRight, Code, Smartphone, Settings } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-32" aria-labelledby="services-heading">
      <div className="max-w-[1500px] mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 relative">
          
          {/* ── LEFT SIDE: Sticky — Pins while right scrolls ── */}
          <div className="w-full lg:w-[45%]">
            <div className="lg:sticky lg:top-24 flex flex-col gap-10 lg:h-[calc(100vh-6rem)] lg:justify-center">
              {/* Badge */}
              <div>
                <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 mb-10">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E5C148]" aria-hidden="true"></span>
                  <span className="text-[14px] font-bold text-gray-700 tracking-wide">
                    What we can do for you?
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E5C148]" aria-hidden="true"></span>
                </div>

                {/* Main Heading */}
                <h2
                  id="services-heading"
                  className="text-5xl sm:text-6xl lg:text-[60px] xl:text-[76px] text-[#1a1a1a] leading-[1.05] tracking-tight mb-8"
                >
                  Service we can <br className="hidden sm:block" /> help you with
                </h2>
              </div>

              {/* Bottom Content */}
              <div className="pb-4">
                <h3 className="text-[24px] sm:text-[28px] text-[#1a1a1a] leading-[1.4] mb-10 max-w-[400px]">
                  We&apos;ll ensure you always get the best Digital Service
                </h3>
                
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-10 py-[22px] bg-[#6658EA] hover:bg-[#5748D8] text-white font-bold text-[13px] tracking-[0.15em] rounded-[10px] transition-all duration-300 shadow-[0_16px_36px_-8px_rgba(102,88,234,0.55)] hover:shadow-[0_20px_44px_-6px_rgba(102,88,234,0.65)] hover:-translate-y-1 uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6658EA] focus-visible:ring-offset-2"
                >
                  See All Services
                </Link>
              </div>
            </div>
          </div>

          {/* ── RIGHT SIDE: Service Cards ── */}
          <div className="w-full lg:w-[55%] flex flex-col gap-8">
            
            {/* Card 1: Web Development */}
            <Link href="/projects" className="block bg-[#fcfaf5] rounded-[32px] p-10 sm:p-12 lg:p-14 transition-transform duration-300 hover:-translate-y-2 relative group">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-10">
                <div className="order-2 sm:order-1">
                  <h3 className="text-[32px] sm:text-[38px] font-bold text-[#1a1a1a] leading-[1.2] mb-10 max-w-[300px]">
                    Web <br/> Development
                  </h3>
                  <div className="inline-flex items-center gap-4 bg-white px-5 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow group-hover:bg-gray-50">
                    <span className="w-[36px] h-[36px] rounded-full bg-[#E5C148] flex items-center justify-center shrink-0">
                      <ArrowRight className="w-5 h-5 text-white" aria-hidden="true" />
                    </span>
                    <span className="text-[13px] font-bold text-[#1a1a1a] tracking-[0.15em] uppercase px-1">Read More</span>
                  </div>
                </div>
                <div className="order-1 sm:order-2 w-[80px] h-[80px] sm:w-[96px] sm:h-[96px] rounded-full bg-[#E5C148] flex items-center justify-center shrink-0 shadow-[0_8px_24px_rgba(229,193,72,0.3)]">
                  <Code className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={2.5} aria-hidden="true" />
                </div>
              </div>
            </Link>

            {/* Card 2: Mobile App Development */}
            <Link href="/projects" className="block bg-[#eefaf2] rounded-[32px] p-10 sm:p-12 lg:p-14 transition-transform duration-300 hover:-translate-y-2 relative group">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-10">
                <div className="order-2 sm:order-1">
                  <h3 className="text-[32px] sm:text-[38px] font-bold text-[#1a1a1a] leading-[1.2] mb-10 max-w-[300px]">
                    Social Media <br/> Marketing
                  </h3>
                  <div className="inline-flex items-center gap-4 bg-white px-5 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow group-hover:bg-gray-50">
                    <span className="w-[36px] h-[36px] rounded-full bg-[#2ecc71] flex items-center justify-center shrink-0">
                      <ArrowRight className="w-5 h-5 text-white" aria-hidden="true" />
                    </span>
                    <span className="text-[13px] font-bold text-[#1a1a1a] tracking-[0.15em] uppercase px-1">Read More</span>
                  </div>
                </div>
                <div className="order-1 sm:order-2 w-[80px] h-[80px] sm:w-[96px] sm:h-[96px] rounded-full bg-[#2ecc71] flex items-center justify-center shrink-0 shadow-[0_8px_24px_rgba(46,204,113,0.3)]">
                  <Smartphone className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={2.5} aria-hidden="true" />
                </div>
              </div>
            </Link>

            {/* Card 3: Any kind Custom Solution */}
            <Link href="/projects" className="block bg-[#f4f3ff] rounded-[32px] p-10 sm:p-12 lg:p-14 transition-transform duration-300 hover:-translate-y-2 relative group">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-10">
                <div className="order-2 sm:order-1">
                  <h3 className="text-[32px] sm:text-[38px] font-bold text-[#1a1a1a] leading-[1.2] mb-10 max-w-[300px]">
                    Any kind Custom <br/> Solution
                  </h3>
                  <div className="inline-flex items-center gap-4 bg-white px-5 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow group-hover:bg-gray-50">
                    <span className="w-[36px] h-[36px] rounded-full bg-[#7264F6] flex items-center justify-center shrink-0">
                      <ArrowRight className="w-5 h-5 text-white" aria-hidden="true" />
                    </span>
                    <span className="text-[13px] font-bold text-[#1a1a1a] tracking-[0.15em] uppercase px-1">Read More</span>
                  </div>
                </div>
                <div className="order-1 sm:order-2 w-[80px] h-[80px] sm:w-[96px] sm:h-[96px] rounded-full bg-[#7264F6] flex items-center justify-center shrink-0 shadow-[0_8px_24px_rgba(114,100,246,0.3)]">
                  <Settings className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={2.5} aria-hidden="true" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
