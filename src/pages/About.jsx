import React from 'react';
import SEO from '../components/SEO';

export default function About({ site }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.domain,
    contactPoint: [{ '@type': 'ContactPoint', telephone: site.phone, contactType: 'customer service' }],
  };

  return (
    <main className="container mx-auto px-6 py-12">
      <SEO
        title={`About — ${site.name}`}
        description="Our story, values, and commitment to spotless experiences."
        url={`${site.domain}/about`}
        jsonLd={jsonLd}
      />
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">About {site.name}</h1>
      <p className="mt-3 text-gray-700 max-w-3xl">We built Spotles to make trusted home services as simple as ordering a ride. Our vetted pros, transparent pricing, and mobile-first experience help you get more time back in your week.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <img src="https://images.unsplash.com/photo-1563642396473-fe16405bf10f?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIyNTAyMzZ8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Our team collaborating" className="rounded-xl h-56 w-full object-cover" loading="lazy" />
        <img src="https://images.unsplash.com/photo-1761872936108-ddbafb75180a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWYWx1ZXMlMjBhbmQlMjBjdWx0dXJlfGVufDB8MHx8fDE3NjIyNTAyNDF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Values and culture" className="rounded-xl h-56 w-full object-cover" loading="lazy" />
        <img src="https://images.unsplash.com/photo-1759560245150-8dcbb7f01142?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBd2FyZCUyMHJlY29nbml0aW9ufGVufDB8MHx8fDE3NjIyNTAyNDF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Award recognition" className="rounded-xl h-56 w-full object-cover" loading="lazy" />
      </div>
    </main>
  );
}
