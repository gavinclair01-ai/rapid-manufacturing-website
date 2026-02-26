"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    name: "CNC Milling",
    image: "/images/CNC-Milling-1.jpg",
    description: "High-precision milling from our audited global supplier network. Complex geometries, tight tolerances, any material.",
  },
  {
    name: "CNC Turning",
    image: "/images/CNC-Turning-1.jpg",
    description: "Precision turned parts — shafts, bushings, sleeves, flanges and all manner of cylindrical components.",
  },
  {
    name: "EDM Machining",
    image: "/images/EDM-1.jpg",
    description: "Controlled electrical sparks erode material with extreme precision — cutting shapes that conventional tools cannot.",
  },
  {
    name: "Wire EDM",
    image: "/images/Wire-EDM.jpg",
    description: "Fine electrically charged wire cuts precise profiles through conductive materials with no cutting force.",
  },
  {
    name: "Sheet Metal Fabrication",
    image: "/images/Sheet-Metal.jpg",
    description: "From simple brackets to complex enclosures. Cutting, bending, forming and welding in any material.",
  },
  {
    name: "3D Printing",
    image: "/images/imgg1.jpg",
    description: "Industrial-grade 3D printing from rapid prototypes to end-use production parts, all technologies available.",
  },
  {
    name: "5-Axis Machining",
    image: "/images/5-Axis.jpg",
    description: "Complex geometries machined in a single setup — reducing handling, improving accuracy, and cutting lead times.",
  },
  {
    name: "Die Casting",
    image: "/images/Die-Casting-1.jpg",
    description: "Molten metal forced into steel moulds under high pressure — dimensionally accurate, high-volume components.",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="service-card rounded-sm flex flex-col overflow-hidden group"
    >
      {/* Image area */}
      <div className="bg-[var(--rm-surface-3)] aspect-[4/3] flex items-center justify-center p-6 overflow-hidden border-b border-[var(--rm-border)]">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-barlow font-700 uppercase text-white text-xl leading-tight mb-2">
          {service.name}
        </h3>
        <p className="text-[var(--rm-muted)] text-sm leading-relaxed mb-5 flex-1 font-outfit">
          {service.description}
        </p>
        <Link
          href="/quote"
          className="flex items-center gap-2 text-[var(--rm-orange)] font-barlow font-700 uppercase text-sm tracking-wider hover:gap-3 transition-all duration-200"
        >
          Request a Quote
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 bg-[var(--rm-navy)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-3"
          >
            What We Offer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
          >
            <h2
              className="font-barlow font-800 uppercase text-white leading-tight"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Our Manufacturing{" "}
              <span className="text-[var(--rm-orange)]">Services</span>
            </h2>
            <p className="text-[var(--rm-steel)] text-sm max-w-sm leading-relaxed font-outfit">
              A full range of advanced manufacturing solutions — precision, quality, and efficiency for all your production needs.
            </p>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ transformOrigin: "left" }}
            className="mt-5 orange-line"
          />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.name} service={service} index={i} />
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 btn-ghost-orange px-8 py-4 text-sm rounded-sm"
          >
            View All 14 Services
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
