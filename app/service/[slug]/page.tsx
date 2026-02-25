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
  return {
    title: `${service.name} | Rapid Manufacturing Australia`,
    description: service.shortDescription + ' Sourced from our global network of audited suppliers.',
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  return <ServicePageContent service={service} />;
}
