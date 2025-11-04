import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';
import { services as allServices } from '../data/siteData';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Home({ onBook, site }) {
  const services = allServices.slice(0, 6);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.domain,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${site.domain}/services?query={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <SEO
        title={`Spotles Solutions — On-demand home services`}
        description="Book trusted home services in minutes. Cleaning, maintenance, and more—via the Spotles mobile app."
        url={`${site.domain}/`}
        image={`${site.domain}/og-home.jpg`}
        keywords={["home services", "cleaning", "handyman", "on-demand"]}
        jsonLd={jsonLd}
      />
      <header className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-900/10 via-gray-900/40 to-gray-900/80" />
        </div>
        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
                <Sparkles className="h-4 w-4" />
                <span>Fast. Modern. Spotlessly simple.</span>
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
                Book trusted services in minutes
              </h1>
              <p className="mt-4 text-white/80 text-lg">
                Mobile-first platform for cleaning, maintenance, and move-outs. Transparent pricing and vetted pros.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={onBook} className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 text-white hover:bg-indigo-600 transition">
                  Book in App <ArrowRight className="h-4 w-4" />
                </button>
                <Link to="/services" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-white hover:bg-white/20 transition">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Services tailored to your home</h2>
            <p className="mt-3 text-gray-600">Pick what you need and book from your phone. Clear pricing, real-time availability, and trusted pros.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <article key={svc.slug} className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition" itemScope itemType="https://schema.org/Service">
                <img src={svc.image} alt={`${svc.name} example`} loading="lazy" className="h-40 w-full object-cover rounded-xl" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900" itemProp="name">{svc.name}</h3>
                <p className="mt-2 text-gray-600" itemProp="description">{svc.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">From ${svc.priceFrom}</span>
                  <div className="flex gap-2">
                    <Link to={`/services/${svc.slug}`} className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">Details</Link>
                    <button onClick={onBook} className="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md px-3 py-1.5">Book</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
