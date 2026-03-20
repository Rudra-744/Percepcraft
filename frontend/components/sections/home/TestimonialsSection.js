"use client";

import Image from "next/image";

// ─── Testimonial Data ─────────────────────────────────────────────────────────

const testimonials = [
  {
    id: 1,
    quote:
      "Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it.",
    name: "Wade Warren",
    title: "Founder of Edardx",
    rating: 5,
    colors: {
      bg: "bg-[#FCFBF6]",
      iconBg: "bg-[#F4C750]",
      stars: "text-[#F4C750]",
    },
    avatar: "/placeholder-avatar.png",
  },
  {
    id: 2,
    quote:
      "He works very smart always fast and ahead of time. He's also a team player Looking forward to working with him in the future",
    name: "Marvin McKinney",
    title: "Founder of Edardx",
    rating: 5,
    colors: {
      bg: "bg-[#ECFDF5]",
      iconBg: "bg-[#2DCD7A]",
      stars: "text-[#2DCD7A]",
    },
    avatar: "/placeholder-avatar.png",
  },
  {
    id: 3,
    quote:
      "Sixmart is an Excellent Writer, His magical words added value in growth of our business. Highly Recommended",
    name: "Savannah Nguyen",
    title: "Founder of Edardx",
    rating: 5,
    colors: {
      bg: "bg-[#F3F4FB]",
      iconBg: "bg-[#6568F1]",
      stars: "text-[#6568F1]",
    },
    avatar: "/placeholder-avatar.png",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const QuoteIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M10 11L8 15H11V17H5V11L7 7H10L10 11ZM19 11L17 15H20V17H14V11L16 7H19L19 11Z" />
  </svg>
);

const StarIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// ─── TestimonialsSection ──────────────────────────────────────────────────────

export default function TestimonialsSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24 relative flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
      {/* LEFT — sticky heading */}
      <div className="lg:w-1/2 lg:sticky lg:top-[30vh] z-10 flex flex-col items-start lg:pr-8">
        <div className="inline-flex items-center gap-2.5 bg-white px-5 py-2 rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] mb-8 border border-gray-50">
          <span className="w-2 h-2 rounded-full bg-[#E8C053]" aria-hidden="true" />
          <span className="text-[14px] font-semibold text-gray-800 tracking-wide">
            Happy customer feedback
          </span>
          <span className="w-2 h-2 rounded-full bg-[#E8C053]" aria-hidden="true" />
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-[#111827] leading-[1.1] tracking-tight">
          <span className="whitespace-nowrap">Happy customer</span>
          <br className="hidden sm:block" />
          feedback
        </h2>
      </div>

      {/* RIGHT — scrollable cards */}
      <div className="lg:w-1/2 flex flex-col gap-8 w-full">
        {testimonials.map((t) => (
          <article
            key={t.id}
            className={`${t.colors.bg} rounded-[2rem] p-8 md:p-12 transition-transform duration-300 hover:-translate-y-1`}
          >
            <div
              className={`w-14 h-14 ${t.colors.iconBg} rounded-full flex items-center justify-center mb-8 shadow-sm`}
            >
              <QuoteIcon className="w-6 h-6 text-white" />
            </div>

            <p className="text-xl md:text-[22px] text-gray-800 font-medium leading-[1.6] mb-10">
              {t.quote}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-[70px] h-[70px] bg-white rounded-xl overflow-hidden shadow-sm flex-shrink-0 relative">
                  <Image
                    src={t.avatar}
                    alt={`${t.name} profile photo`}
                    fill
                    className="object-cover"
                    sizes="70px"
                  />
                  {/* Fallback placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <svg
                      className="w-8 h-8 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900">{t.name}</h3>
                  <p className="text-[15px] text-gray-600 font-medium mt-0.5">
                    {t.title}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-[18px] h-[18px] ${t.colors.stars}`}
                  />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
