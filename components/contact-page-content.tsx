"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import SiteFooter from "@/components/site-footer";
import { Mail, Send } from "lucide-react";

export default function ContactPageContent() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-[var(--rm-surface-3)] border border-[var(--rm-border)] focus:border-[var(--rm-orange)] outline-none px-4 py-3 text-sm text-white placeholder-[var(--rm-muted)] rounded-sm transition-colors font-outfit";

  return (
    <div className="min-h-screen bg-[var(--rm-navy)]">
      <Navbar />

      <div className="pt-32 pb-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <p className="section-label mb-3">Get In Touch</p>
        <h1
          className="font-barlow font-extrabold uppercase text-white leading-tight mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Contact <span className="text-[var(--rm-orange)]">Us</span>
        </h1>
        <p className="text-[var(--rm-steel)] max-w-lg text-base leading-relaxed mb-12 font-outfit">
          Have a question about your project, our capabilities, or becoming a supplier? We&apos;d love to hear from you.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact form */}
          <div>
            {submitted ? (
              <div className="bg-[var(--rm-surface)] border border-[var(--rm-orange)] rounded-sm p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-[var(--rm-orange-glow)] flex items-center justify-center mx-auto mb-4">
                  <Send size={20} className="text-[var(--rm-orange)]" />
                </div>
                <h2 className="font-barlow font-700 uppercase text-white text-2xl mb-2">
                  Message Sent!
                </h2>
                <p className="text-[var(--rm-steel)] text-sm font-outfit">
                  Thank you for reaching out. Our team will be in touch within 1–2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[var(--rm-muted)] text-xs font-barlow uppercase tracking-widest mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[var(--rm-muted)] text-xs font-barlow uppercase tracking-widest mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[var(--rm-muted)] text-xs font-barlow uppercase tracking-widest mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+61 (0) 000 000 000"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-[var(--rm-muted)] text-xs font-barlow uppercase tracking-widest mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project or enquiry..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button type="submit" className="btn-orange w-full py-3.5 text-sm rounded-sm flex items-center justify-center gap-2">
                  Send Message
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-[var(--rm-surface)] border border-[var(--rm-border)] rounded-sm p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[var(--rm-orange-glow)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={18} className="text-[var(--rm-orange)]" />
                </div>
                <div>
                  <p className="font-barlow font-700 uppercase text-white text-sm tracking-wide mb-1">
                    Email Us
                  </p>
                  <a
                    href="mailto:sales@rapidmanufacturing.com.au"
                    className="text-[var(--rm-steel)] hover:text-[var(--rm-orange)] text-sm transition-colors font-outfit"
                  >
                    sales@rapidmanufacturing.com.au
                  </a>
                  <p className="text-[var(--rm-muted)] text-xs mt-1.5 font-outfit">
                    We typically respond within 1–2 business days.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick facts */}
            <div className="bg-[var(--rm-surface)] border border-[var(--rm-border)] rounded-sm p-6 space-y-4">
              <h3 className="font-barlow font-700 uppercase text-white text-sm tracking-widest">
                Quick Facts
              </h3>
              {[
                { label: "Response Time", value: "Within 2 business days" },
                { label: "Quote Turnaround", value: "2 business days" },
                { label: "Supplier Network", value: "80+ audited partners" },
                { label: "Locations Shipped", value: "120+ countries" },
              ].map((fact) => (
                <div key={fact.label} className="flex items-center justify-between border-b border-[var(--rm-border)] pb-3 last:border-b-0 last:pb-0">
                  <span className="text-[var(--rm-muted)] text-sm font-outfit">{fact.label}</span>
                  <span className="text-white text-sm font-barlow font-600 uppercase tracking-wide">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
