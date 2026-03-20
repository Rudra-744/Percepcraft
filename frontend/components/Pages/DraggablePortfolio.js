"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── Portfolio Data ───────────────────────────────────────────────────────────
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "Branding",
    image: "/ab-inner-1.jpg",
    href: "/projects/brand-identity",
  },
  {
    id: 2,
    title: "Web Development",
    category: "Development",
    image: "/ab-inner-2.jpg",
    href: "/projects/web-development",
  },
  {
    id: 3,
    title: "UI/UX Strategy",
    category: "Design",
    image: "/ab-inner-3.jpg",
    href: "/projects/ui-ux-strategy",
  },
  {
    id: 4,
    title: "Motion Graphics",
    category: "Creative",
    image: "/ab-inner-1.jpg",
    href: "/projects/motion-graphics",
  },
  {
    id: 5,
    title: "Corporate Profile",
    category: "Branding",
    image: "/ab-inner-2.jpg",
    href: "/projects/corporate-profile",
  },
  {
    id: 6,
    title: "App Design",
    category: "Mobile",
    image: "/ab-inner-3.jpg",
    href: "/projects/app-design",
  },
];

// Duplicate for infinite loop effect
const ITEMS = [...PORTFOLIO_ITEMS, ...PORTFOLIO_ITEMS];

// ─── Single Card ─────────────────────────────────────────────────────────────
function PortfolioCard({ item, isDragging }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative shrink-0 w-[280px] sm:w-[380px] lg:w-[440px] h-[200px] sm:h-[280px] lg:h-[320px] rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing select-none group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        draggable={false}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 440px"
      />

      {/* Dark overlay on hover */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Category pill (top-left) */}
      <div className="absolute top-4 left-4 z-10">
        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30">
          {item.category}
        </span>
      </div>

      {/* Center hover button */}
      <div
        className={`absolute inset-0 flex items-center justify-center z-20 transition-all duration-300 ${
          hovered && !isDragging ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      >
        <Link
          href={item.href}
          onClick={(e) => isDragging && e.preventDefault()}
          className="w-[100px] h-[100px] rounded-full bg-[#111] hover:bg-[#222] flex flex-col items-center justify-center text-white text-center transition-colors duration-200 shadow-2xl"
          aria-label={`View ${item.title} case study`}
        >
          <span className="text-[12px] font-bold leading-tight tracking-wide">
            Case<br />Studies
          </span>
        </Link>
      </div>

      {/* Title (bottom) */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-5 z-10 transition-all duration-300 ${
          hovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        <p className="text-white font-bold text-[16px] sm:text-[18px] leading-tight">
          {item.title}
        </p>
      </div>
    </div>
  );
}

// ─── Main Draggable Section ───────────────────────────────────────────────────
export default function DraggablePortfolio() {
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const animFrame = useRef(null);
  const [dragging, setDragging] = useState(false);

  // ── Infinite Loop: reset scroll position seamlessly ──
  const handleScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    if (el.scrollLeft >= half) el.scrollLeft -= half;
    else if (el.scrollLeft <= 0) el.scrollLeft += half;
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    // Start at half so we can scroll in both directions
    el.scrollLeft = el.scrollWidth / 4;
  }, []);

  // ── Mouse Events ──────────────────────────────────────────────────────────
  const onMouseDown = useCallback((e) => {
    const el = trackRef.current;
    if (!el) return;
    isDragging.current = true;
    setDragging(true);
    startX.current = e.pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
    lastX.current = e.pageX;
    velocity.current = 0;
    if (animFrame.current) cancelAnimationFrame(animFrame.current);
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const el = trackRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    velocity.current = e.pageX - lastX.current;
    lastX.current = e.pageX;
    el.scrollLeft = scrollLeft.current - walk;
    handleScroll();
  }, [handleScroll]);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    setDragging(false);
    // Momentum / inertia
    const el = trackRef.current;
    if (!el) return;
    const decelerate = () => {
      velocity.current *= 0.92;
      el.scrollLeft -= velocity.current;
      handleScroll();
      if (Math.abs(velocity.current) > 0.5) {
        animFrame.current = requestAnimationFrame(decelerate);
      }
    };
    animFrame.current = requestAnimationFrame(decelerate);
  }, [handleScroll]);

  // ── Touch Events ──────────────────────────────────────────────────────────
  const onTouchStart = useCallback((e) => {
    const el = trackRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.touches[0].pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
    lastX.current = e.touches[0].pageX;
    velocity.current = 0;
    if (animFrame.current) cancelAnimationFrame(animFrame.current);
  }, []);

  const onTouchMove = useCallback((e) => {
    if (!isDragging.current) return;
    const el = trackRef.current;
    if (!el) return;
    const x = e.touches[0].pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    velocity.current = e.touches[0].pageX - lastX.current;
    lastX.current = e.touches[0].pageX;
    el.scrollLeft = scrollLeft.current - walk;
    handleScroll();
  }, [handleScroll]);

  const onTouchEnd = useCallback(() => {
    isDragging.current = false;
    setDragging(false);
    const el = trackRef.current;
    if (!el) return;
    const decelerate = () => {
      velocity.current *= 0.9;
      el.scrollLeft -= velocity.current;
      handleScroll();
      if (Math.abs(velocity.current) > 0.5) {
        animFrame.current = requestAnimationFrame(decelerate);
      }
    };
    animFrame.current = requestAnimationFrame(decelerate);
  }, [handleScroll]);

  return (
    <section
      className="w-full bg-white py-20 lg:py-28 overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      {/* Header — Centered */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 mb-12 lg:mb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#6658EA]" aria-hidden="true" />
          <span className="text-[13px] font-bold text-gray-700 tracking-wide">My Portfolio</span>
          <span className="w-2 h-2 rounded-full bg-[#6658EA]" aria-hidden="true" />
        </div>
        <h2
          id="portfolio-heading"
          className="text-4xl sm:text-5xl lg:text-[58px] font-black text-[#1a1a1a] leading-[1.1] tracking-tight"
        >
          Look at My Recent<br className="hidden sm:block" /> Work
        </h2>
        <p className="text-[13px] text-gray-400 mt-4 font-medium">
          ← Drag to explore →
        </p>
      </div>

      {/* Draggable Track */}
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-scroll scrollbar-hide px-6 md:px-12 lg:px-20 cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", userSelect: "none" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        aria-label="Draggable portfolio gallery"
        role="region"
      >
        {ITEMS.map((item, index) => (
          <PortfolioCard
            key={`${item.id}-${index}`}
            item={item}
            isDragging={dragging}
          />
        ))}
      </div>

      {/* Button — Centered below cards */}
      <div className="flex justify-center mt-10 lg:mt-14">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center px-10 py-4 bg-[#6658EA] hover:bg-[#5748D8] text-white font-bold text-[13px] tracking-[0.12em] rounded-[10px] transition-all duration-300 shadow-[0_12px_28px_-6px_rgba(102,88,234,0.5)] hover:-translate-y-0.5 uppercase"
        >
          More Work
        </Link>
      </div>
    </section>
  );
}
