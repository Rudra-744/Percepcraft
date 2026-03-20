"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

// ─── Testimonial Data ─────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "A creative office is something we are blessed with. We consider it the little secret; it is wanting to come here afterward difficult to leave it. Our office is additionally a big name.",
    name: "Robert Fox",
    role: "Founder of Edardx",
    image: "/ab-inner-1.jpg",
    color: "#F5A623",
  },
  {
    id: 2,
    quote:
      "When potential customers are researching you online, they're getting to know you through the content on your website. So understandably, many businesses invest heavily in content.",
    name: "Bessie Cooper",
    role: "Founder of Edardx",
    image: "/ab-inner-2.jpg",
    color: "#6658EA",
  },
  {
    id: 3,
    quote:
      "Honest endorsement of your product or service that usually comes from a customer, colleague, or peer who has benefited from or experienced your business.",
    name: "Dianne Russell",
    role: "Founder of Edardx",
    image: "/ab-inner-3.jpg",
    color: "#2ecc71",
  },
  {
    id: 4,
    quote:
      "A formal statement that testifies to a persons character or their qualifications, or the quality of a product or service.",
    name: "Bessie Cooper",
    role: "Founder of Edardx",
    image: "/ab-inner-1.jpg",
    color: "#E74C3C",
  },
  {
    id: 5,
    quote:
      "We believe in creating outstanding designs that stays in the memories of our clients. Our passion and creative endeavors make us different from others.",
    name: "Sarah Johnson",
    role: "CEO of TechVault",
    image: "/ab-inner-2.jpg",
    color: "#F5A623",
  },
  {
    id: 6,
    quote:
      "Their team delivered exceptional results. The attention to detail, creativity, and professionalism was outstanding throughout the entire project.",
    name: "Mark Williams",
    role: "Director at Brandr",
    image: "/ab-inner-3.jpg",
    color: "#6658EA",
  },
];

const ITEMS = [...TESTIMONIALS, ...TESTIMONIALS];

// ─── Quote Icon SVG ───────────────────────────────────────────────────────────
function QuoteIcon({ color }) {
  return (
    <div
      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 mb-5"
      style={{ backgroundColor: color }}
    >
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
      </svg>
    </div>
  );
}

// ─── Single Testimonial Card ──────────────────────────────────────────────────
function TestimonialCard({ item }) {
  return (
    <div className="shrink-0 w-[260px] sm:w-[300px] lg:w-[320px] bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-7 sm:p-8 flex flex-col select-none cursor-grab active:cursor-grabbing">
      {/* Quote Icon */}
      <QuoteIcon color={item.color} />

      {/* Quote Text */}
      <p className="text-[13px] sm:text-[14px] text-gray-500 leading-[1.8] font-normal mb-6 flex-grow">
        {item.quote}
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-gray-100 mb-5" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="relative w-[48px] h-[48px] rounded-lg overflow-hidden shrink-0">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <p className="text-[14px] font-bold text-gray-900 leading-tight">{item.name}</p>
          <p className="text-[12px] text-gray-400 font-medium">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function TestimonialSlider() {
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const animFrame = useRef(null);
  const [, setDrag] = useState(false);

  const handleScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    if (el.scrollLeft >= half) el.scrollLeft -= half;
    else if (el.scrollLeft <= 0) el.scrollLeft += half;
  }, []);

  const onMouseDown = useCallback((e) => {
    const el = trackRef.current;
    if (!el) return;
    isDragging.current = true;
    setDrag(true);
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
    setDrag(false);
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
    setDrag(false);
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
    <section className="w-full bg-[#f7f7f7] py-20 lg:py-28 overflow-hidden" aria-labelledby="testimonial-heading">
      {/* Header — Centered */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 mb-12 lg:mb-16 text-center">
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#6658EA]" aria-hidden="true" />
          <span className="text-[13px] font-bold text-gray-700 tracking-wide">Testimonial</span>
          <span className="w-2 h-2 rounded-full bg-[#6658EA]" aria-hidden="true" />
        </div>
        <h2
          id="testimonial-heading"
          className="text-4xl sm:text-5xl lg:text-[58px] font-black text-[#1a1a1a] leading-[1.1] tracking-tight"
        >
          Trusted by<br /> Clients.
        </h2>
      </div>

      {/* Draggable Track */}
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-scroll px-6 md:px-12 lg:px-20 pb-4 cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", userSelect: "none" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        aria-label="Draggable testimonial carousel"
        role="region"
      >
        {ITEMS.map((item, index) => (
          <TestimonialCard key={`${item.id}-${index}`} item={item} />
        ))}
      </div>
    </section>
  );
}
