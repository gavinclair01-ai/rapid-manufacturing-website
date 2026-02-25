"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import SiteFooter from "@/components/site-footer";
import { Upload, Send, CheckCircle2, X } from "lucide-react";

const services = [
  "CNC Milling", "CNC Turning", "EDM Machining", "Wire EDM",
  "5-Axis Machining", "Precision Grinding", "Gear & Spline Cutting",
  "Die Casting", "Aluminum Extrusion", "Laser Cutting",
  "Sheet Metal Fabrication", "Injection Molding", "3D Printing", "CMM Inspection",
];

export default function QuotePageContent() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", service: "", quantity: "", notes: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const removeFile = (i: number) => setFiles((prev) => prev.filter((_, idx) => idx !== i));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote form submitted:", { ...form, files: files.map((f) => f.name) });
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-[var(--rm-surface-3)] border border-[var(--rm-border)] focus:border-[var(--rm-orange)] outline-none px-4 py-3 text-sm text-white placeholder-[var(--rm-muted)] rounded-sm transition-colors font-outfit";

  return (
    <div className="min-h-screen bg-[var(--rm-navy)]">
      <Navbar />

      <div className="pt-32 pb-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <p className="section-label mb-3">Start Your Project</p>
        <h1
          className="font-barlow font-extrabold uppercase text-white leading-tight mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Request a <span className="text-[var(--rm-orange)]">Quote</span>
        </h1>
        <p className="text-[var(--rm-steel)] max-w-lg text-base leading-relaxed mb-3 font-outfit">
          Upload your drawings or CAD files and receive a detailed quote within 2 business days.
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-3 mb-12">
          {["Free DFM Analysis", "2-Day Turnaround", "ISO 9001:2015 Partners", "NDA Protected"].map((badge) => (
            <div key={badge} className="flex items-center gap-1.5 bg-[var(--rm-surface-2)] border border-[var(--rm-border)] px-3 py-1.5 rounded-sm">
              <CheckCircle2 size={12} className="text-[var(--rm-orange)]" />
              <span className="text-[var(--rm-steel)] text-xs font-outfit">{badge}</span>
            </div>
          ))}
        </div>

        {submitted ? (
          <div className="max-w-xl bg-[var(--rm-surface)] border border-[var(--rm-orange)] rounded-sm p-10 text-center mx-auto">
            <div className="w-14 h-14 rounded-full bg-[var(--rm-orange-glow)] flex items-center justify-center mx-auto mb-5">
              <Send size={22} className="text-[var(--rm-orange)]" />
            </div>
            <h2 className="font-barlow font-700 uppercase text-white text-3xl mb-3">
              Quote Requested!
            </h2>
            <p className="text-[var(--rm-steel)] text-sm font-outfit leading-relaxed">
              Thank you! Our team will review your files and get back to you with a detailed quotation within 2 business days.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[var(--rm-muted)] text-xs font-barlow uppercase tracking-widest mb-2">Full Name *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[var(--rm-muted)] text-xs font-barlow uppercase tracking-widest mb-2">Email *</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[var(--rm-muted)] text-xs font-barlow uppercase tracking-widest mb-2">Phone</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+61 (0) 000 000 000" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[var(--rm-muted)] text-xs font-barlow uppercase tracking-widest mb-2">Company</label>
                    <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company name" className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[var(--rm-muted)] text-xs font-barlow uppercase tracking-widest mb-2">Service Required</label>
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={`${inputClass} cursor-pointer`}>
                      <option value="">Select a service...</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[var(--rm-muted)] text-xs font-barlow uppercase tracking-widest mb-2">Quantity</label>
                    <input type="text" value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} placeholder="e.g. 50 units" className={inputClass} />
                  </div>
                </div>

                {/* File upload */}
                <div>
                  <label className="block text-[var(--rm-muted)] text-xs font-barlow uppercase tracking-widest mb-2">
                    Upload Files (CAD, drawings, PDF)
                  </label>
                  <label className="flex flex-col items-center justify-center gap-3 bg-[var(--rm-surface-3)] border border-dashed border-[var(--rm-border)] hover:border-[var(--rm-orange)] rounded-sm p-8 cursor-pointer transition-colors group">
                    <Upload size={24} className="text-[var(--rm-muted)] group-hover:text-[var(--rm-orange)] transition-colors" />
                    <div className="text-center">
                      <p className="text-[var(--rm-steel)] text-sm font-outfit">Drag & drop files here or <span className="text-[var(--rm-orange)]">browse</span></p>
                      <p className="text-[var(--rm-muted)] text-xs mt-1 font-outfit">STEP, IGES, DXF, DWG, PDF — up to 50MB each</p>
                    </div>
                    <input type="file" multiple onChange={handleFileChange} className="hidden" accept=".step,.stp,.iges,.igs,.dxf,.dwg,.pdf,.stl" />
                  </label>
                  {files.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {files.map((f, i) => (
                        <li key={i} className="flex items-center justify-between bg-[var(--rm-surface-2)] border border-[var(--rm-border)] px-3 py-2 rounded-sm">
                          <span className="text-[var(--rm-steel)] text-xs font-outfit truncate max-w-xs">{f.name}</span>
                          <button type="button" onClick={() => removeFile(i)} className="text-[var(--rm-muted)] hover:text-white transition-colors ml-2 flex-shrink-0">
                            <X size={14} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  <label className="block text-[var(--rm-muted)] text-xs font-barlow uppercase tracking-widest mb-2">Additional Notes</label>
                  <textarea rows={4} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Material requirements, surface finish, tolerances, delivery timeline..." className={`${inputClass} resize-none`} />
                </div>

                <button type="submit" className="btn-orange w-full py-4 text-sm rounded-sm flex items-center justify-center gap-2">
                  Submit Quote Request
                  <Send size={14} />
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-[var(--rm-surface)] border border-[var(--rm-border)] rounded-sm p-6">
                <h3 className="font-barlow font-700 uppercase text-white text-sm tracking-widest mb-4">How It Works</h3>
                {[
                  { step: "01", title: "Submit Your Files", desc: "Upload drawings or CAD files with your requirements." },
                  { step: "02", title: "DFM Review", desc: "We review your design for manufacturability — free of charge." },
                  { step: "03", title: "Receive Quote", desc: "Detailed quotation within 2 business days." },
                  { step: "04", title: "Production Begins", desc: "Approve and we source the best-fit supplier from our network." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3 mb-4 last:mb-0">
                    <span className="font-barlow font-800 text-[var(--rm-orange)] text-lg flex-shrink-0 leading-tight">{item.step}</span>
                    <div>
                      <p className="font-barlow font-600 uppercase text-white text-sm">{item.title}</p>
                      <p className="text-[var(--rm-muted)] text-xs font-outfit mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <SiteFooter />
    </div>
  );
}
