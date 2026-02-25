"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 80, suffix: "+", label: "Manufacturing Partners", desc: "Audited global network" },
  { value: 120, suffix: "+", label: "Countries Shipped", desc: "Worldwide delivery" },
  { value: 100000, suffix: "+", label: "Parts Manufactured", desc: "And counting" },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 2000;
    const step = 16;
    const increment = target / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [active, target]);

  const display = count >= 1000 ? count.toLocaleString() : count;

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[var(--rm-navy)] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--rm-orange)] opacity-[0.04] blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-3"
          >
            Our Reach
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-barlow font-800 uppercase text-white leading-tight"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Our <span className="text-[var(--rm-orange)]">Locations</span>
          </motion.h2>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-[var(--rm-border)] divide-y sm:divide-y-0 sm:divide-x divide-[var(--rm-border)] mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center py-12 px-8 text-center bg-[var(--rm-surface)] hover:bg-[var(--rm-surface-2)] transition-colors relative group"
            >
              {/* Accent top line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--rm-orange)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <p
                className="stat-number mb-2"
                style={{ fontSize: "clamp(3.5rem, 6vw, 5rem)" }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} active={inView} />
              </p>
              <p className="font-barlow font-700 uppercase text-white text-lg tracking-wide mb-1">
                {stat.label}
              </p>
              <p className="text-[var(--rm-muted)] text-sm font-outfit">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* World map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative"
        >
          <div className="bg-[var(--rm-surface)] border border-[var(--rm-border)] rounded-sm overflow-hidden p-6 sm:p-10">
            <img
              src="https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/world-map-business-infographic_5758202.htmfromViewsearchpage1position1uuidf893f084-81f9-4262-a88d-aa2d87e778af.svg"
              alt="Global manufacturing network"
              className="w-full opacity-60"
              style={{ filter: "brightness(1.5) saturate(0.3)" }}
              onError={(e) => {
                // Fallback if SVG fails
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            {/* Overlay text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-[var(--rm-muted)] text-sm font-outfit text-center px-4">
                Manufacturing partners across Australia, Asia, Europe and Americas
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
