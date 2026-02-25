"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/navbar";
import SiteFooter from "@/components/site-footer";
import type { Service } from "@/lib/services-data";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";

interface ServicePageContentProps {
  service: Service;
}

export default function ServicePageContent({ service }: ServicePageContentProps) {
  console.log("ServicePageContent rendered for:", service.name);

  return (
    <div className="min-h-screen bg-[var(--rm-navy)]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--rm-surface)] via-[var(--rm-navy)] to-[var(--rm-navy)]" />
        <div className="absolute inset-0 bg-grid opacity-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm mb-8"
          >
            <Link href="/" className="text-[var(--rm-muted)] hover:text-white transition-colors font-outfit">
              Home
            </Link>
            <ChevronRight size={14} className="text-[var(--rm-muted)]" />
            <Link href="/capabilities" className="text-[var(--rm-muted)] hover:text-white transition-colors font-outfit">
              Capabilities
            </Link>
            <ChevronRight size={14} className="text-[var(--rm-muted)]" />
            <span className="text-white font-outfit">{service.name}</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="section-label mb-4">{service.category}</p>
              <h1
                className="font-barlow font-extrabold uppercase text-white leading-[0.95] mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                {service.name}
              </h1>
              <p className="text-[var(--rm-steel)] text-lg leading-relaxed font-outfit mb-8 max-w-xl">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/quote"
                  className="btn-orange inline-flex items-center gap-2 px-8 py-4 text-sm rounded-sm"
                >
                  Request a Quote
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/capabilities"
                  className="btn-ghost-orange inline-flex items-center gap-2 px-8 py-4 text-sm rounded-sm"
                >
                  All Capabilities
                </Link>
              </div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[var(--rm-border)] bg-[var(--rm-surface)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--rm-surface-2)] to-[var(--rm-surface)]" />
                <img
                  src={service.image}
                  alt={service.name}
                  className="absolute inset-0 w-full h-full object-contain p-8"
                />
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[var(--rm-orange)] to-transparent opacity-20" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[var(--rm-orange)] to-transparent opacity-10" />
              </div>
              {/* Floating spec badges */}
              <div className="absolute -bottom-4 -left-4 bg-[var(--rm-surface-2)] border border-[var(--rm-border)] rounded-sm px-4 py-3 shadow-xl">
                <p className="text-xs text-[var(--rm-muted)] uppercase tracking-wider font-barlow">Lead Time</p>
                <p className="text-white font-barlow font-bold text-lg">{service.specs.find(s => s.label === "Lead Time")?.value || service.leadTimes}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specs Bar */}
      <section className="border-y border-[var(--rm-border)] bg-[var(--rm-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 divide-x divide-[var(--rm-border)]">
            {service.specs.slice(0, 3).map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="py-6 px-4 text-center"
              >
                <p className="text-xs text-[var(--rm-muted)] uppercase tracking-wider font-barlow mb-1">
                  {spec.label}
                </p>
                <p className="text-[var(--rm-orange)] font-barlow font-bold text-xl lg:text-2xl">
                  {spec.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:col-span-3 space-y-10"
            >
              {/* What We Source */}
              <div>
                <h2 className="font-barlow font-bold text-2xl text-white uppercase mb-6 flex items-center gap-3">
                  <span className="w-8 h-[3px] bg-[var(--rm-orange)]" />
                  What We Source
                </h2>
                <ul className="space-y-4">
                  {service.whatWeSource.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={20} className="text-[var(--rm-orange)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--rm-steel)] font-outfit">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Materials */}
              {service.materials && (
                <div className="bg-[var(--rm-surface)] border border-[var(--rm-border)] rounded-sm p-6">
                  <h3 className="font-barlow font-bold text-lg text-white uppercase mb-3">Materials</h3>
                  <p className="text-[var(--rm-steel)] font-outfit leading-relaxed">{service.materials}</p>
                </div>
              )}

              {/* Tolerances */}
              {service.tolerances && (
                <div className="bg-[var(--rm-surface)] border border-[var(--rm-border)] rounded-sm p-6">
                  <h3 className="font-barlow font-bold text-lg text-white uppercase mb-3">Tolerances</h3>
                  <p className="text-[var(--rm-steel)] font-outfit leading-relaxed">{service.tolerances}</p>
                </div>
              )}

              {/* Lead Times */}
              {service.leadTimes && (
                <div className="bg-[var(--rm-surface)] border border-[var(--rm-border)] rounded-sm p-6">
                  <h3 className="font-barlow font-bold text-lg text-white uppercase mb-3">Lead Times</h3>
                  <p className="text-[var(--rm-steel)] font-outfit leading-relaxed">{service.leadTimes}</p>
                </div>
              )}
            </motion.div>

            {/* Right column - Image & Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="sticky top-24 space-y-6">
                {/* Large image card */}
                <div className="bg-[var(--rm-surface)] border border-[var(--rm-border)] rounded-sm overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-[var(--rm-surface-2)] to-[var(--rm-surface-3)] flex items-center justify-center p-8">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-5 border-t border-[var(--rm-border)]">
                    <p className="text-[var(--rm-muted)] text-sm font-outfit">
                      All parts sourced through our audited global supplier network, managed end-to-end from Australia.
                    </p>
                  </div>
                </div>

                {/* Quick specs */}
                <div className="bg-[var(--rm-surface-2)] border border-[var(--rm-border)] rounded-sm p-5">
                  <h3 className="font-barlow font-bold text-sm text-white uppercase tracking-wider mb-4">
                    Specifications
                  </h3>
                  <dl className="space-y-3">
                    {service.specs.map((spec) => (
                      <div key={spec.label} className="flex justify-between items-center py-2 border-b border-[var(--rm-border)] last:border-0">
                        <dt className="text-[var(--rm-muted)] text-sm font-outfit">{spec.label}</dt>
                        <dd className="text-white font-barlow font-semibold text-sm">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Section (if exists) */}
      {service.applications && (
        <section className="py-16 bg-[var(--rm-surface)] border-y border-[var(--rm-border)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <h2 className="font-barlow font-bold text-2xl text-white uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-[3px] bg-[var(--rm-orange)]" />
                Applications
              </h2>
              <p className="text-[var(--rm-steel)] text-lg font-outfit leading-relaxed">
                {service.applications}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--rm-surface)] to-[var(--rm-navy)]" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center"
        >
          <p className="section-label mb-4">Get Started</p>
          <h2 className="font-barlow font-extrabold uppercase text-white text-3xl lg:text-4xl mb-6">
            Ready to source {service.name}?
          </h2>
          <p className="text-[var(--rm-steel)] text-lg font-outfit mb-10 max-w-2xl mx-auto">
            Request your quote today. We&apos;ll match your project to the most capable supplier in our audited network and provide a detailed quote within 2 business days.
          </p>
          <Link
            href="/quote"
            className="btn-orange inline-flex items-center gap-3 px-10 py-5 text-base rounded-sm"
          >
            Request a Quote
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}
