"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import StatsSection from "@/components/stats-section";
import SupplierCta from "@/components/supplier-cta";
import SiteFooter from "@/components/site-footer";

export default function HomePageContent() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <SupplierCta />
      <SiteFooter />
    </div>
  );
}
