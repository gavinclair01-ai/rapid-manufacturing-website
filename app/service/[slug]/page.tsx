import type { Metadata } from 'next';
import { services } from '@/lib/services-data';
import ServicePageContent from '@/components/service-page-content';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  const title = service.seoTitle || `${service.name} Australia — Rapid Manufacturing`;
  const description = service.seoDescription ||
    `${service.shortDescription} Sourced from our network of audited Australian and international suppliers. Fast quotes, Australia-wide delivery.`;

  return {
    title,
    description,
    keywords: service.keywords || [`${service.name} Australia`, `${service.name} supplier Australia`, `precision ${service.name.toLowerCase()} services`],
    alternates: {
      canonical: `https://rapidmanufacturing.com.au/service/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://rapidmanufacturing.com.au/service/${slug}`,
      siteName: 'Rapid Manufacturing Australia',
      locale: 'en_AU',
      type: 'website',
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDescription,
    provider: {
      "@type": "Organization",
      name: "Rapid Manufacturing Australia",
      url: "https://rapidmanufacturing.com.au",
    },
    areaServed: "AU",
    url: `https://rapidmanufacturing.com.au/service/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageContent service={service} />
    </>
  );
}
