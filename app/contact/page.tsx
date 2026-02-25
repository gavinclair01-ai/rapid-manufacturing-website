import type { Metadata } from "next";
import ContactPageContent from "@/components/contact-page-content";

export const metadata: Metadata = {
  title: "Contact Us | Rapid Manufacturing Australia",
  description:
    "Get in touch with Rapid Manufacturing Australia. Talk to our team about your precision manufacturing requirements.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
