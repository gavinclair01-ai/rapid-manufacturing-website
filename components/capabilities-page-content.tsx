"use client";

import Navbar from "@/components/navbar";
import SiteFooter from "@/components/site-footer";
import Link from "next/link";
import { ArrowRight, Construction } from "lucide-react";

const allServices = [
  { name: "CNC Milling", image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/CNC-Milling-1.png" },
  { name: "CNC Turning", image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/CNC-Turning-1.png" },
  { name: "EDM Machining", image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/EDM-1.png" },
  { name: "Wire EDM", image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/Wire-EDM.png" },
  { name: "5-Axis Machining", image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/5-Axis.png" },
  { name: "Precision Grinding", image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/Precision-Grinding.png" },
  { name: "Gear & Spline Cutting", image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/Gear-Spline-Cutting.png" },
  { name: "Die Casting", image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/Die-Casting-1.png" },
  { name: "Aluminum Extrusion", image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/Aluminium-Extrusion.png" },
  { name: "Laser Cutting", image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/Laser-Cutting.png" },
  { name: "Sheet Metal Fabrication", image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/Sheet-Metal.png" },
  { name: "Injection Molding", image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/Injection-Moulding.png" },
  { name: "3D Printing", image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/imgg1.png" },
  { name: "CMM Inspection", image: "https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/CMM-Inspection.png" },
];

export default function CapabilitiesPageContent() {
  console.log("CapabilitiesPageContent rendered");

  return (
    <div className="min-h-screen bg-[var(--rm-navy)]">
      <Navbar />

      {/* Header */}
      <div className="pt-32 pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <p className="section-label mb-3">What We Offer</p>
        <h1
          className="font-barlow font-extrabold uppercase text-white leading-tight mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Our <span className="text-[var(--rm-orange)]">Capabilities</span>
        </h1>
        <p className="text-[var(--rm-steel)] max-w-xl text-base leading-relaxed font-outfit">
          Rapid Manufacturing provides access to 14 advanced manufacturing processes through our global network of audited suppliers. Select a service to learn more.
        </p>
      </div>

      {/* Coming soon notice */}
      <div className="px-4 sm:px-6 pb-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 bg-[var(--rm-surface-2)] border border-[var(--rm-orange)] border-opacity-40 px-5 py-3.5 rounded-sm w-fit">
          <Construction size={16} className="text-[var(--rm-orange)] flex-shrink-0" />
          <p className="text-[var(--rm-steel)] text-sm font-outfit">
            Detailed service pages are <span className="text-white font-semibold">coming soon</span>. In the meantime, request a quote for any service below.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <div className="px-4 sm:px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {allServices.map((service) => (
            <Link
              key={service.name}
              href="/quote"
              className="service-card rounded-sm flex flex-col overflow-hidden group"
            >
              <div className="bg-[var(--rm-surface-3)] aspect-[4/3] flex items-center justify-center p-6 border-b border-[var(--rm-border)] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex items-center justify-between">
                <h3 className="font-barlow font-700 uppercase text-white text-lg leading-tight">
                  {service.name}
                </h3>
                <ArrowRight size={16} className="text-[var(--rm-orange)] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-[var(--rm-steel)] text-base mb-6 font-outfit">
            Don&apos;t see what you need? We&apos;re always expanding our network.
          </p>
          <Link href="/contact" className="btn-orange inline-flex items-center gap-2 px-8 py-4 text-sm rounded-sm">
            Contact Us
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
