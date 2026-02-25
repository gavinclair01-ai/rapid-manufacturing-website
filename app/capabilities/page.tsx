import type { Metadata } from "next";
import CapabilitiesPageContent from "@/components/capabilities-page-content";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities | Rapid Manufacturing Australia",
  description:
    "Explore our full range of precision manufacturing capabilities — CNC machining, sheet metal, 3D printing, injection molding, die casting and more.",
};

export default function CapabilitiesPage() {
  return <CapabilitiesPageContent />;
}
