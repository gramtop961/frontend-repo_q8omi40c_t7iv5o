import React from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../data/siteData';
import SEO from '../components/SEO';

export default function ServiceDetail({ onBook, site }) {
  const { slug } = useParams();
  const svc = services.find(s => s.slug === slug);
  if (!svc) {
    return (
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-2xl font-semibold">Service not found</h1>
        <p className="mt-2 text-gray-600">Please check the URL.</p>
      </main>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.name,
    description: svc.description,
    brand: site.name,
    areaServed: 'Local',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: svc.priceFrom,
      url: `${site.domain}/services/${svc.slug}`,
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <main className="container mx-auto px-6 py-12">
      <SEO
        title={`${svc.name} — ${site.name}`}
        description={svc.description}
        url={`${site.domain}/services/${svc.slug}`}
        image={svc.image}
        keywords={svc.keywords}
        type="product"
        jsonLd={jsonLd}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <img src={svc.image} alt={`${svc.name} showcase`} className="w-full h-72 md:h-96 object-cover rounded-2xl" />
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">{svc.name}</h1>
          <p className="mt-3 text-gray-600">{svc.description}</p>
          <div className="mt-4 text-gray-900 font-medium">From ${svc.priceFrom}</div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold">What’s included</h2>
            <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
              {svc.features.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
          {svc.faqs?.length ? (
            <div className="mt-6">
              <h2 className="text-lg font-semibold">FAQs</h2>
              <dl className="mt-2 space-y-3">
                {svc.faqs.map((f, i) => (
                  <div key={i}>
                    <dt className="font-medium text-gray-900">{f.q}</dt>
                    <dd className="text-gray-700">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : null}
          <div className="mt-8 flex gap-3">
            <button onClick={onBook} className="rounded-lg bg-indigo-600 text-white px-5 py-3 hover:bg-indigo-700">Book Service</button>
            <button onClick={onBook} className="rounded-lg bg-white border border-gray-300 text-gray-900 px-5 py-3 hover:bg-gray-50">Get Quote</button>
          </div>
        </div>
      </div>
    </main>
  );
}
