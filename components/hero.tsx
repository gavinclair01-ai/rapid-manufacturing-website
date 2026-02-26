"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const heroFeatures = [
  "Free DFM analysis with every upload",
  "Quotations within 2 business days",
  "ISO 9001:2015 certified supplier network",
];

const quickServices = [
  { label: "CNC Machining", icon: "⚙️" },
  { label: "Sheet Metal", icon: "🔧" },
  { label: "Injection Molding", icon: "🏭" },
  { label: "3D Printing", icon: "🖨️" },
];

export default function Hero() {
  const handleScrollDown = () => {
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-grid">
      {/* Background gear image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/main-banner-image-1.png"
          alt=""
          className="absolute right-0 top-0 h-full w-[55%] object-cover object-left"
          style={{
            maskImage: "linear-gradient(to left, rgba(0,0,0,0.7) 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.7) 0%, transparent 100%)",
          }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--rm-navy)] via-[var(--rm-navy)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--rm-navy)] opacity-80" />
      </div>

      {/* Orange accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--rm-orange)] via-[var(--rm-orange)] to-transparent z-10" />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center pt-20 sm:pt-24 pb-12 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-label mb-4"
          >
            Precision Parts
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-barlow font-extrabold uppercase text-white leading-none mb-6"
            style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", letterSpacing: "-0.01em" }}
          >
            From{" "}
            <span className="text-[var(--rm-orange)]">Prototype</span>
            <br />
            to Production
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[var(--rm-steel)] text-lg leading-relaxed mb-8 max-w-lg font-outfit"
          >
            Cost-effective precision manufacturing sourced from our network of{" "}
            <strong className="text-white font-semibold">audited Australian and international suppliers</strong>.
          </motion.p>

          {/* Feature list */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col gap-2 mb-10"
          >
            {heroFeatures.map((f) => (
              <li key={f} className="flex items-center gap-2 text-[var(--rm-steel)] text-sm font-outfit">
                <CheckCircle2 size={14} className="text-[var(--rm-orange)] flex-shrink-0" />
                {f}
              </li>
            ))}
          </motion.ul>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              href="/quote"
              className="btn-orange px-8 py-4 text-base rounded-sm flex items-center justify-center gap-2"
            >
              Request a Quote
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/capabilities"
              className="btn-ghost-orange px-8 py-4 text-base rounded-sm flex items-center justify-center gap-2"
            >
              View Capabilities
            </Link>
          </motion.div>

          {/* Quick service icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-3"
          >
            {quickServices.map((s) => (
              <Link
                key={s.label}
                href="/capabilities"
                className="flex items-center gap-2 bg-[var(--rm-surface-2)] border border-[var(--rm-border)] hover:border-[var(--rm-orange)] px-4 py-2 rounded-sm text-sm text-[var(--rm-steel)] hover:text-white transition-all duration-200 font-outfit"
              >
                <span>{s.icon}</span>
                {s.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={handleScrollDown}
        className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-1 text-[var(--rm-muted)] hover:text-[var(--rm-steel)] transition-colors group cursor-pointer"
      >
        <span className="font-barlow text-xs uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
