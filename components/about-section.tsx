"use client";

import Link from "next/link";
import { ArrowRight, Shield, Award, Globe } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const certifications = [
  { label: "ISO 9001:2015", desc: "Quality Management" },
  { label: "ISO 13485:2016", desc: "Medical Devices" },
  { label: "AS9100-D", desc: "Aerospace Supply Chain" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[var(--rm-surface)] relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 40px, var(--rm-orange) 40px, var(--rm-orange) 41px)",
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left: Images */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main image */}
            <div className="rounded-sm overflow-hidden border border-[var(--rm-border)] shadow-2xl">
              <img
                src="https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/about-img2.png"
                alt="Precision manufacturing"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            {/* Overlapping second image */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute -bottom-8 -right-6 w-2/3 rounded-sm overflow-hidden border-2 border-[var(--rm-orange)] shadow-[0_0_40px_var(--rm-orange-glow)]"
            >
              <img
                src="https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/about-img.png"
                alt="CMM inspection"
                className="w-full aspect-[4/3] object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Orange vertical accent line */}
          <div className="absolute left-0 top-8 bottom-8 w-[3px] bg-gradient-to-b from-[var(--rm-orange)] to-transparent" />
        </div>

        {/* Right: Content */}
        <div className="lg:pl-4 pb-8 lg:pb-0">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-3"
          >
            Who We Are
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-barlow font-800 uppercase text-white leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            About Rapid{" "}
            <span className="text-[var(--rm-orange)]">Manufacturing</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 text-[var(--rm-steel)] text-base leading-relaxed font-outfit mb-8"
          >
            <p>
              With years of expertise, our engineers bring decades of industry knowledge — with deep understanding of GD&T and cutting-edge inspection technologies including Zeiss CMM, Hexagon non-contact vision measurement systems, and TESA Micro-Hite.
            </p>
            <p>
              Our partnerships with leading manufacturers across Australia and worldwide allow us to uphold exceptional industry standards. <strong className="text-white font-semibold">Every partner holds at least ISO 9001:2015 certification</strong>, with many certified to higher standards for medical and aerospace manufacturing.
            </p>
            <p>
              All our suppliers have signed NDAs with Rapid Manufacturing — ensuring your intellectual property is fully protected.
            </p>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {certifications.map((cert) => (
              <div
                key={cert.label}
                className="flex items-center gap-2 bg-[var(--rm-surface-3)] border border-[var(--rm-border)] px-4 py-2.5 rounded-sm"
              >
                <Shield size={14} className="text-[var(--rm-orange)] flex-shrink-0" />
                <div>
                  <p className="font-barlow font-700 uppercase text-white text-sm leading-none">
                    {cert.label}
                  </p>
                  <p className="text-[var(--rm-muted)] text-xs mt-0.5 font-outfit">{cert.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/quote"
              className="btn-orange inline-flex items-center gap-2 px-7 py-3.5 text-sm rounded-sm"
            >
              Start a New Quote
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
