"use client";

import { useState } from "react";
import { ArrowRight, Send } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SupplierCta() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Supplier subscribe email:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[var(--rm-surface)] relative overflow-hidden">
      {/* Orange glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-48 bg-[var(--rm-orange)] opacity-[0.07] blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-3"
          >
            Partner With Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-barlow font-800 uppercase text-white leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            Become a{" "}
            <span className="text-[var(--rm-orange)]">Supplier</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[var(--rm-steel)] text-base leading-relaxed mb-8 font-outfit"
          >
            Join Rapid Manufacturing as a supplier and become part of our expanding global network. We are continually onboarding new partners — connect with us to receive an onboarding information pack.
          </motion.p>

          {/* Subscribe form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {submitted ? (
              <div className="flex items-center gap-3 bg-[var(--rm-surface-3)] border border-[var(--rm-orange)] px-5 py-4 rounded-sm">
                <div className="w-2 h-2 rounded-full bg-[var(--rm-orange)] flex-shrink-0" />
                <p className="text-white text-sm font-outfit">
                  Thank you! We&apos;ll be in touch with your onboarding information pack.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-[var(--rm-surface-3)] border border-[var(--rm-border)] focus:border-[var(--rm-orange)] outline-none px-4 py-3 text-sm text-white placeholder-[var(--rm-muted)] rounded-sm transition-colors font-outfit"
                />
                <button
                  type="submit"
                  className="btn-orange px-6 py-3 text-sm rounded-sm flex items-center justify-center gap-2 flex-shrink-0"
                >
                  Get Info Pack
                  <Send size={14} />
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-sm overflow-hidden border border-[var(--rm-border)]">
            <img
              src="https://rapidmanufacturing.com.au/wp-content/uploads/2024/09/footer-img2.png"
              alt="Precision machined parts"
              className="w-full object-contain bg-[var(--rm-surface-3)] p-6"
            />
          </div>
          {/* Orange corner accent */}
          <div className="absolute -bottom-2 -right-2 w-16 h-16 border-r-2 border-b-2 border-[var(--rm-orange)]" />
        </motion.div>
      </div>
    </section>
  );
}
