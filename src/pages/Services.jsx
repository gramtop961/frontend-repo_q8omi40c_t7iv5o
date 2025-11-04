import React from 'react';
import { services } from '../data/siteData';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function ServicesPage({ onBook, site }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Services',
    url: `${site.domain}/services`,
  };

  return (
    <main className="container mx-auto px-6 py-12">
      <SEO
        title={`Services — ${site.name}`}
        description="Explore Spotles services: cleaning, deep clean, handyman and more."
        url={`${site.domain}/services`}
        keywords={["services", "cleaning", "handyman"]}
        jsonLd={jsonLd}
      />
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">All Services</h1>
      <p className="mt-2 text-gray-600">Browse and tap book to download the app.</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc) => (
          <article key={svc.slug} className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition">
            <img src={svc.image} alt={`${svc.name} example`} loading="lazy" className="h-40 w-full object-cover rounded-xl" />
            <h2 className="mt-4 text-lg font-semibold text-gray-900">
              <Link to={`/services/${svc.slug}`}>{svc.name}</Link>
            </h2>
            <p className="mt-2 text-gray-600">{svc.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-gray-500">From ${svc.priceFrom}</span>
              <button onClick={onBook} className="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md px-3 py-1.5">Book</button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
