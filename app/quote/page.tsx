import type { Metadata } from "next";
import QuotePageContent from "@/components/quote-page-content";

export const metadata: Metadata = {
  title: "Request a Quote | Rapid Manufacturing Australia",
  description:
    "Upload your drawings or CAD files and receive a detailed quote from Rapid Manufacturing Australia within 2 business days.",
};

export default function QuotePage() {
  return <QuotePageContent />;
}
