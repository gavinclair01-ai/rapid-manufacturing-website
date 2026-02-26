import "./globals.css";

import type { Metadata } from "next";
import { Barlow_Condensed, Outfit } from "next/font/google";

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
  title: "Rapid Manufacturing Australia — From Prototype to Production",
  description:
    "Precision manufacturing services in Australia. CNC machining, sheet metal fabrication, 3D printing, injection molding and more. Audited global supplier network.",
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
        {children}
      </body>
    </html>
  );
}
