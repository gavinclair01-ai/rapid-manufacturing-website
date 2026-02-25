"use client";

import Navbar from "@/components/navbar";
import SiteFooter from "@/components/site-footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { services, type Service } from "@/lib/services-data";
import { ArrowRight } from "lucide-react";

const categories: { title: string; services: Service[] }[] = [
  {
    title: "CNC Machining",
    services: services.filter((s) => s.category === "CNC Machining"),
  },
  {
    title: "Special Processes",
    services: services.filter((s) => s.category === "Special Processes"),
  },
  {
    title: "Forming & Casting",
    services: services.filter((s) => s.category === "Forming & Casting"),
  },
  {
    title: "Fabrication & Finishing",
    services: services.filter((s) => s.category === "Fabrication & Finishing"),
  },
  {
    title: "Inspection & Additive",
    services: services.filter((s) => s.category === "Inspection & Additive"),
  },
];

export default function CapabilitiesPageContent() {
  console.log("CapabilitiesPageContent rendered");

  return (
    <div className="min-h-screen bg-[var(--rm-navy)]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--rm-surface)] via-[var(--rm-navy)] to-[var(--rm-navy)]" />
        <div className="absolute inset-0 bg-grid opacity-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-4">What We Offer</p>
            <h1
              className="font-barlow font-extrabold uppercase text-white leading-[0.95] mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Our <span className="text-[var(--rm-orange)]">Capabilities</span>
            </h1>
            <p className="text-[var(--rm-steel)] max-w-2xl text-lg leading-relaxed font-outfit">
              Rapid Manufacturing provides access to 14 advanced manufacturing processes through our global network of audited suppliers. Each service is managed end-to-end from Australia with competitive pricing and fast turnaround times.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[3px] bg-[var(--rm-orange)]" />
                <h2 className="font-barlow font-bold text-2xl lg:text-3xl text-white uppercase">
                  {category.title}
                </h2>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                  >
                    <Link
                      href={`/service/${service.slug}`}
                      className="service-card rounded-sm flex flex-col overflow-hidden group h-full"
                    >
                      {/* Image */}
                      <div className="bg-[var(--rm-surface-2)] aspect-[4/3] flex items-center justify-center p-6 border-b border-[var(--rm-border)] overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-5 flex flex-col flex-grow">
                        <h3 className="font-barlow font-bold uppercase text-white text-lg leading-tight mb-2">
                          {service.name}
                        </h3>
                        <p className="text-[var(--rm-muted)] text-sm font-outfit line-clamp-2 mb-4 flex-grow">
                          {service.shortDescription}
                        </p>
                        <div className="flex items-center justify-between pt-3 border-t border-[var(--rm-border)]">
                          <span className="text-[var(--rm-orange)] text-xs font-barlow font-semibold uppercase tracking-wider">
                            Learn More
                          </span>
                          <ArrowRight size={16} className="text-[var(--rm-orange)] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 border-t border-[var(--rm-border)] bg-[var(--rm-surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label mb-4">Need Something Else?</p>
            <h2 className="font-barlow font-bold text-2xl lg:text-3xl text-white uppercase mb-4">
              Don&apos;t See What You Need?
            </h2>
            <p className="text-[var(--rm-steel)] text-lg font-outfit mb-8 max-w-2xl mx-auto">
              We&apos;re always expanding our supplier network. If you have a specific manufacturing requirement not listed here, we can likely source it through our extended network.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/quote"
                className="btn-orange inline-flex items-center gap-2 px-8 py-4 text-sm rounded-sm"
              >
                Request a Quote
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="btn-ghost-orange inline-flex items-center gap-2 px-8 py-4 text-sm rounded-sm"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
