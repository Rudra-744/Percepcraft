"use client";

import { useEffect, useState, useRef, useCallback } from "react";

export default function AnimatedCounter({ end, duration = 2200, label }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const startAnimation = useCallback(() => {
    if (hasAnimated) return;
    setHasAnimated(true);

    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutQuart — smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.round(eased * end);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, hasAnimated]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Trigger earlier for better UX
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [startAnimation]);

  return (
    <div ref={ref} className="flex flex-col items-center select-none">
      {/* Number with stroke + purple accent */}
      <div className="relative text-[56px] sm:text-[68px] md:text-[80px] font-black leading-none mb-3 flex items-baseline justify-center">
        {/* Purple circle accent behind first digit */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-indigo-400/25 rounded-full -z-10" />
        
        {/* Number with outline/stroke effect */}
        <span
          className="text-transparent"
          style={{
            WebkitTextStroke: '1.5px #222',
            paintOrder: 'stroke fill',
          }}
        >
          {count}
        </span>
        <span
          className="text-transparent text-[40px] sm:text-[50px] md:text-[60px] ml-0.5"
          style={{
            WebkitTextStroke: '1.5px #222',
          }}
        >
          +
        </span>
      </div>

      {/* Label */}
      <p className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-gray-900 text-center max-w-[160px]">
        {label}
      </p>
    </div>
  );
}
