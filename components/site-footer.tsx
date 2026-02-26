import Link from "next/link";
import { Mail } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Contact Us", href: "/contact" },
  { label: "Request a Quote", href: "/quote" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[var(--rm-navy)] border-t border-[var(--rm-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <img
                src="/images/new-logo.png"
                alt="Rapid Manufacturing"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-[var(--rm-muted)] text-sm leading-relaxed font-outfit max-w-xs">
              Cost-effective precision manufacturing sourced from our network of audited Australian and international suppliers.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-barlow font-700 uppercase text-white text-sm tracking-widest mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--rm-muted)] hover:text-[var(--rm-orange)] text-sm transition-colors font-outfit"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-barlow font-700 uppercase text-white text-sm tracking-widest mb-5">
              Get In Touch
            </h3>
            <a
              href="mailto:sales@rapidmanufacturing.com.au"
              className="flex items-center gap-2 text-[var(--rm-muted)] hover:text-[var(--rm-orange)] text-sm transition-colors font-outfit group"
            >
              <Mail size={14} className="flex-shrink-0" />
              sales@rapidmanufacturing.com.au
            </a>
            <div className="mt-6">
              <Link
                href="/quote"
                className="btn-orange inline-flex px-5 py-2.5 text-sm rounded-sm"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[var(--rm-border)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p className="text-[var(--rm-muted)] text-xs font-outfit">
              © 2025 Rapid Manufacturing. All Rights Reserved.
            </p>
            <span className="hidden sm:block text-[var(--rm-border)]">|</span>
            <p className="text-[var(--rm-muted)] text-xs font-outfit">
              ABN 81 994 894 894 143
            </p>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--rm-orange)]" />
            <p className="text-[var(--rm-muted)] text-xs font-outfit">
              Australian Managed · Global Network
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
