"use client";

// ─── Brand Logos ──────────────────────────────────────────────────────────────

const brands = [
  {
    id: "walmart",
    label: "Walmart",
    logo: (
      <span className="flex items-center gap-1.5 font-bold text-[#0071CE] text-xl select-none">
        Walmart
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFC220" aria-hidden="true">
          <path d="M12 2l1.5 4.5H18l-3.75 2.75 1.43 4.4L12 11.1l-3.68 2.65 1.43-4.4L6 6.5h4.5z" />
          <path d="M12 13.5l1.5 4.5H18l-3.75 2.75 1.43 4.4L12 22.6l-3.68 2.65 1.43-4.4L6 18h4.5z" opacity=".5" />
        </svg>
      </span>
    ),
  },
  {
    id: "paysafe",
    label: "Paysafe",
    logo: (
      <span className="flex items-center font-bold text-gray-900 text-xl select-none">
        Paysafe
        <span className="text-[#005EB8] ml-0.5">:</span>
      </span>
    ),
  },
  {
    id: "mollie",
    label: "mollie",
    logo: (
      <span className="font-bold text-gray-900 text-xl tracking-tight select-none">
        mollie
      </span>
    ),
  },
  {
    id: "qlik",
    label: "Qlik",
    logo: (
      <span className="flex items-center gap-1 font-bold text-gray-800 text-xl select-none">
        Qlik
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="#8DC63F" />
          <circle cx="12" cy="12" r="5" fill="white" />
          <circle cx="14" cy="10" r="2.5" fill="#8DC63F" />
        </svg>
      </span>
    ),
  },
  {
    id: "square",
    label: "Square",
    logo: (
      <span className="flex items-center gap-2 font-semibold text-gray-800 text-xl select-none">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <rect x="7" y="7" width="10" height="10" rx="1" />
        </svg>
        Square
      </span>
    ),
  },
  {
    id: "stripe",
    label: "Stripe",
    logo: (
      <span className="font-bold text-[#635BFF] text-xl tracking-tight select-none">
        stripe
      </span>
    ),
  },
  {
    id: "shopify",
    label: "Shopify",
    logo: (
      <span className="font-bold text-[#95BF47] text-xl select-none">
        shopify
      </span>
    ),
  },
];

// ─── Marquee Track ────────────────────────────────────────────────────────────

function MarqueeTrack({ items, speed = 35 }) {
  const duration = `${speed}s`;

  return (
    <div
      className="overflow-hidden w-full"
      aria-label="Partner logos"
      role="marquee"
    >
      <div
        className="flex w-max"
        style={{
          animation: `marquee-scroll ${duration} linear infinite`,
          animationDirection: "reverse",
          willChange: "transform",
        }}
      >
        {[...items, ...items].map((brand, i) => (
          <div
            key={`${brand.id}-${i}`}
            className="flex items-center justify-center px-10 md:px-14 py-2 shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-200"
          >
            {brand.logo}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-strip { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

// ─── BrandMarqueeSection ─────────────────────────────────────────────────────

export default function BrandMarqueeSection() {
  return (
    <section
      className="w-full border-t border-gray-100 mt-1 pb-16 bg-white"
      aria-labelledby="partners-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 mb-10">
        <p
          id="partners-heading"
          className="text-[25px] font-semibold text-gray-700"
        >
          <span className="text-[#6568F1]">Over 250+</span> business growing
          with us
        </p>
      </div>

      {/* Edge fade masks */}
      <div className="relative">
        <div
          className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, white 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, white 0%, transparent 100%)",
          }}
        />
        <MarqueeTrack items={brands} speed={30} />
      </div>
    </section>
  );
}
