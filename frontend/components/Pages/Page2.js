import Image from "next/image";
import Link from "next/link";
import ScrollToTop from "@/components/ui/ScrollToTop";


export default function Page2() {
  return (
    <section
      className="relative w-full bg-white overflow-hidden"
      aria-labelledby="page2-heading"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6">

          {/* ══════════════════════════════════
              LEFT — Oval Image + Decorators
          ══════════════════════════════════ */}
          <div className="relative w-full lg:w-[46%] flex justify-center lg:justify-start">

            {/* Green sparkle cross — decorative */}
            <span
              aria-hidden="true"
              className="absolute top-4 left-6 sm:left-10 lg:left-0 z-20 text-[#2ecc71] text-2xl font-black leading-none select-none animate-spin-slow"
            >
              ✦
            </span>

            {/* Yellow star image — decorative, floating */}
            <div
              aria-hidden="true"
              className="absolute top-8 left-10 sm:left-16 lg:left-8 w-12 h-12 sm:w-[52px] sm:h-[52px] z-20 animate-float"
            >
              <Image
                src="/hero-star-sm-shape copy.png"
                alt=""
                fill
                sizes="52px"
                className="object-contain"
                priority
              />
            </div>

            {/* Yellow circle outline — decorative */}
            <div
              aria-hidden="true"
              className="absolute bottom-[90px] right-[20%] sm:right-[26%] lg:right-6 w-3 h-3 rounded-full border-2 border-[#e8c547] z-20"
            />

            {/* ── Oval / Pill shaped image container ── */}
            <div className="relative z-10 w-[260px] h-[330px] sm:w-[350px] sm:h-[440px] md:w-[420px] md:h-[530px] rounded-[50%_50%_50%_50%/45%_45%_55%_55%] overflow-hidden border border-gray-100 bg-gray-50">

              {/* ─── IMAGE PLACEHOLDER ───────────────────────────────────
                  Replace this <div> with <Image> when you have the photo:

                  <Image
                    src="/team-photo.jpg"
                    alt="Perceptcraft creative team"
                    fill
                    sizes="(max-width:640px) 260px, (max-width:1024px) 420px, 480px"
                    className="object-cover grayscale"
                    priority
                  />
              ─────────────────────────────────────────────────────────── */}
              <div className="absolute inset-0 bg-linear-to-br from-gray-100 via-gray-50 to-white flex flex-col items-center justify-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-14 h-14 text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-sm font-semibold text-gray-300">Team Photo</p>
                <p className="text-xs text-gray-300">Replace with actual image</p>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════
              RIGHT — Content
          ══════════════════════════════════ */}
          <div className="w-full lg:w-[54%] flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* "Who we are?" badge */}
            <div
              className="inline-flex items-center gap-2.5 px-5 py-[9px] rounded-full bg-white shadow-[0_2px_16px_rgba(0,0,0,0.07)] border border-gray-100 mb-10"
              role="note"
            >
              <span className="w-[9px] h-[9px] rounded-full bg-[#2ecc71] shrink-0" aria-hidden="true" />
              <span className="text-[13px] font-semibold text-gray-600 tracking-wide">
                Who we are?
              </span>
              <span className="w-[9px] h-[9px] rounded-full bg-[#2ecc71] shrink-0" aria-hidden="true" />
            </div>

            {/* Main heading — h2 since h1 is in Hero */}
            <h2
              id="page2-heading"
              className="text-[34px] sm:text-[42px] md:text-[52px] lg:text-[52px] xl:text-[60px] leading-[1.07] font-semibold  text-[#111111] mb-8 md:mb-10 max-w-[900px]"
            >
              We are dynamic team of creative design and development
            </h2>

            {/* Description */}
            <p className="text-[15px] sm:text-[16px] text-gray-500 font-light max-w-[520px] leading-[1.9] mb-12 md:mb-14">
              We have almost 12+ years of experience for helping consulting
              services and business solutions and best protect.
            </p>

            {/* CTA — uses Link, no full page reload */}
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-10 py-[18px] bg-[#6658EA] hover:bg-[#5748D8] text-white font-bold text-[11px] tracking-[0.18em] rounded-lg transition-all duration-300 shadow-[0_16px_36px_-8px_rgba(102,88,234,0.55)] hover:shadow-[0_20px_44px_-6px_rgba(102,88,234,0.65)] hover:-translate-y-[2px] uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6658EA] focus-visible:ring-offset-2"
            >
              About Our Agency
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll-to-top — isolated client component (minimal JS) */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-40">
        <ScrollToTop />
      </div>
    </section>
  );
}
