import "./globals.css";

import type { Metadata } from "next";
import { Barlow_Condensed, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const GA_ID = "G-KH75NSB4XK";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Rapid Manufacturing Australia — CNC Machining & Precision Parts",
  description:
    "Australia's precision manufacturing sourcing specialists. CNC milling, turning, EDM, sheet metal, 3D printing and more. Fast quotes, audited suppliers, Australia-wide.",
  keywords: [
    "CNC machining Australia",
    "precision manufacturing Australia",
    "CNC milling Australia",
    "CNC turning Australia",
    "sheet metal fabrication Australia",
    "rapid prototyping Australia",
    "EDM machining Australia",
    "5 axis machining Australia",
    "custom parts manufacturing Australia",
    "precision parts supplier Australia",
  ],
  metadataBase: new URL("https://rapidmanufacturing.com.au"),
  alternates: {
    canonical: "https://rapidmanufacturing.com.au",
  },
  openGraph: {
    title: "Rapid Manufacturing Australia — CNC Machining & Precision Parts",
    description:
      "Australia's precision manufacturing sourcing specialists. CNC milling, turning, EDM, sheet metal, 3D printing and more. Fast quotes, audited suppliers, Australia-wide.",
    url: "https://rapidmanufacturing.com.au",
    siteName: "Rapid Manufacturing Australia",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rapid Manufacturing Australia — Precision Manufacturing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rapid Manufacturing Australia — CNC Machining & Precision Parts",
    description:
      "Australia's precision manufacturing sourcing specialists. Fast quotes, audited suppliers, Australia-wide.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rapid Manufacturing Australia",
  url: "https://rapidmanufacturing.com.au",
  logo: "https://rapidmanufacturing.com.au/images/logo.png",
  description:
    "Australia's precision manufacturing sourcing specialists. CNC machining, sheet metal fabrication, 3D printing, injection molding and more.",
  areaServed: "AU",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AU",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://rapidmanufacturing.com.au/quote",
    areaServed: "AU",
  },
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Precision Manufacturing Services",
    itemListElement: [
      "CNC Milling",
      "CNC Turning",
      "5-Axis Machining",
      "EDM",
      "Wire EDM",
      "Precision Grinding",
      "Gear & Spline Cutting",
      "Die Casting",
      "Sheet Metal Fabrication",
      "Laser Cutting",
      "Aluminum Extrusion",
      "Injection Molding",
      "3D Printing",
      "CMM Inspection",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${barlowCondensed.variable} ${outfit.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <Analytics />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
