import type { Metadata } from 'next';
import { services } from '@/lib/services-data';
import { cities, getCityBySlug } from '@/lib/cities-data';
import { cityIndustryData } from '@/lib/city-industries';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type Props = { params: Promise<{ slug: string; city: string }> };

export async function generateStaticParams() {
  return services.flatMap((service) =>
    cities.map((city) => ({
      slug: service.slug,
      city: city.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, city: citySlug } = await params;
  const service = services.find((s) => s.slug === slug);
  const city = getCityBySlug(citySlug);
  if (!service || !city) return {};

  const title = `${service.name} ${city.name} — Precision Machined Components | Rapid Manufacturing`;
  const description = `Source precision ${service.name.toLowerCase()} components for ${city.name} businesses through Rapid Manufacturing's audited supplier network. Competitive quotes, managed from Australia, delivered to ${city.name} and across ${city.state}.`;

  return {
    title,
    description,
    keywords: [
      `${service.name.toLowerCase()} ${city.name}`,
      `${service.name.toLowerCase()} ${city.stateShort}`,
      `${service.name.toLowerCase()} components ${city.name}`,
      `${service.name.toLowerCase()} parts ${city.name}`,
      `precision machined components ${city.name}`,
      `custom machined parts ${city.name}`,
      `CNC machined components ${city.name}`,
      `machined parts supplier ${city.name}`,
      `${service.name.toLowerCase()} supplier ${city.name}`,
    ],
    alternates: {
      canonical: `https://rapidmanufacturing.com.au/service/${slug}/${citySlug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://rapidmanufacturing.com.au/service/${slug}/${citySlug}`,
      siteName: 'Rapid Manufacturing Australia',
      locale: 'en_AU',
      type: 'website',
    },
  };
}

export default async function ServiceCityPage({ params }: Props) {
  const { slug, city: citySlug } = await params;
  const service = services.find((s) => s.slug === slug);
  const city = getCityBySlug(citySlug);
  if (!service || !city) notFound();

  const cityData = cityIndustryData[city.slug];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in ${city.name}`,
    description: `Source precision ${service.name.toLowerCase()} components for ${city.name} businesses. ${service.shortDescription}`,
    provider: {
      "@type": "Organization",
      name: "Rapid Manufacturing Australia",
      url: "https://rapidmanufacturing.com.au",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: city.state,
        containedInPlace: {
          "@type": "Country",
          name: "Australia",
        },
      },
    },
    url: `https://rapidmanufacturing.com.au/service/${service.slug}/${city.slug}`,
  };

  const faqSchema = cityData ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cityData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <main className="min-h-screen bg-[#0a0a0a] text-white">
        {/* Nav */}
        <nav className="border-b border-white/10 px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link href="/" className="text-white font-semibold text-lg tracking-tight">
              Rapid Manufacturing
            </Link>
            <Link
              href="/quote"
              className="bg-[#f97316] hover:bg-[#ea6c0a] text-white text-sm font-medium px-4 py-2 rounded transition-colors"
            >
              Request a Quote →
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="px-6 py-16 max-w-6xl mx-auto">
          <div className="mb-4">
            <Link href={`/service/${service.slug}`} className="text-[#f97316] text-sm hover:underline">
              ← {service.name}
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {service.name} Components in {city.name}, {city.stateShort}
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mb-8">
            Rapid Manufacturing sources precision {service.name.toLowerCase()} components for businesses in {city.name} and across {city.state}.
            We manage your job end-to-end — from quote through to delivery.
          </p>
          <Link
            href="/quote"
            className="inline-block bg-[#f97316] hover:bg-[#ea6c0a] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Quote for {city.name} →
          </Link>
        </section>

        {/* Service Details */}
        <section className="px-6 py-12 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">{service.name} Components for {city.name} Businesses</h2>
            <p className="text-white/70 mb-8 max-w-3xl">
              {service.description} Whether you&apos;re sourcing one-off prototype parts or ongoing production quantities, 
              we match your job to the most capable supplier in our network and manage the process from quote to delivery.
            </p>

            {service.whatWeSource && service.whatWeSource.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">What We Source</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.whatWeSource.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <span className="text-[#f97316] mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specs */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {service.specs.map((spec, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-4">
                  <div className="text-[#f97316] text-sm font-medium mb-1">{spec.label}</div>
                  <div className="text-white font-semibold">{spec.value}</div>
                </div>
              ))}
            </div>

            {service.materials && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Materials</h3>
                <p className="text-white/70">{service.materials}</p>
              </div>
            )}

            {service.tolerances && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Tolerances</h3>
                <p className="text-white/70">{service.tolerances}</p>
              </div>
            )}

            {service.applications && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Common Applications</h3>
                <p className="text-white/70">{service.applications}</p>
              </div>
            )}
          </div>
        </section>

        {/* City Industry Context */}
        {cityData && (
          <section className="px-6 py-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">
                {service.name} for {city.name}&apos;s Industries
              </h2>
              <p className="text-white/70 mb-8 max-w-3xl">{cityData.intro}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Industries We Serve in {city.name}</h3>
                  <ul className="space-y-2">
                    {cityData.industries.map((industry, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/70">
                        <span className="text-[#f97316]">→</span>
                        {industry}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Common Parts We Source for {city.name}</h3>
                  <ul className="space-y-2">
                    {cityData.commonParts.map((part, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/70">
                        <span className="text-[#f97316]">→</span>
                        {part}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Why Rapid Mfg */}
        <section className="px-6 py-12 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">
              Why {city.name} Businesses Choose Rapid Manufacturing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Audited Supplier Network',
                  desc: 'Every supplier in our network is quality-vetted. You get precision parts without the supplier search headache.',
                },
                {
                  title: 'Australian-Managed',
                  desc: `We work in your timezone, speak your language, and understand Australian quality standards and compliance requirements.`,
                },
                {
                  title: 'End-to-End Service',
                  desc: 'From quote to quality inspection to delivery — we manage the whole process so you can focus on your business.',
                },
                {
                  title: 'One-Off to Production',
                  desc: 'Prototype quantities through to full production runs. We scale with your project needs.',
                },
                {
                  title: 'Competitive Pricing',
                  desc: `Access to global manufacturing capability, managed from Australia. Quality without the premium.`,
                },
                {
                  title: 'Simple to Get Started',
                  desc: 'Send us your drawings and specifications. We handle the rest.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-6">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {cityData && cityData.faqs.length > 0 && (
          <section className="px-6 py-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">
                Frequently Asked Questions — {service.name} in {city.name}
              </h2>
              <div className="space-y-6">
                {cityData.faqs.map((faq, i) => (
                  <div key={i} className="border-b border-white/10 pb-6">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other Cities */}
        <section className="px-6 py-12 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">{service.name} Across Australia</h2>
            <div className="flex flex-wrap gap-3">
              {cities
                .filter((c) => c.slug !== city.slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/service/${service.slug}/${c.slug}`}
                    className="bg-white/10 hover:bg-white/20 text-white/70 hover:text-white px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    {service.name} {c.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">More Machined Components for {city.name}</h2>
            <div className="flex flex-wrap gap-3">
              {services
                .filter((s) => s.slug !== service.slug)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/service/${s.slug}/${city.slug}`}
                    className="bg-white/10 hover:bg-white/20 text-white/70 hover:text-white px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    {s.name} Components
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Need {service.name} Components in {city.name}?
            </h2>
            <p className="text-white/60 mb-8">
              Send us your drawings or describe what you need — we&apos;ll come back with a competitive quote.
            </p>
            <Link
              href="/quote"
              className="inline-block bg-[#f97316] hover:bg-[#ea6c0a] text-white font-bold px-10 py-4 rounded-lg text-lg transition-colors"
            >
              Request a Quote →
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 px-6 py-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Rapid Manufacturing Australia. ABN 81 994 894 894 143
            </p>
            <div className="flex gap-6 text-sm text-white/40">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/capabilities" className="hover:text-white transition-colors">Capabilities</Link>
              <Link href="/quote" className="hover:text-white transition-colors">Get a Quote</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
