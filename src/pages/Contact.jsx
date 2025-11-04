import React, { useState } from 'react';
import SEO from '../components/SEO';

export default function Contact({ site }) {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact',
    url: `${site.domain}/contact`,
  };

  return (
    <main className="container mx-auto px-6 py-12">
      <SEO
        title={`Contact — ${site.name}`}
        description="Request a callback or quote. No login needed."
        url={`${site.domain}/contact`}
        jsonLd={jsonLd}
      />
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">Contact</h1>
      <p className="mt-2 text-gray-600">We’ll get back within one business day.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 p-6 space-y-4" aria-label="Contact form">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input id="name" name="name" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input id="phone" name="phone" className="mt-1 w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <button type="submit" className="rounded-lg bg-indigo-600 text-white px-5 py-3 hover:bg-indigo-700">Request Callback</button>
          {submitted && <p className="text-sm text-green-600">Thanks! We’ll be in touch.</p>}
        </form>
        <aside className="rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900">Company</h2>
          <p className="mt-2 text-sm text-gray-600">{site.address}</p>
          <p className="mt-1 text-sm text-gray-600">{site.phone}</p>
          <p className="mt-1 text-sm text-gray-600">{site.email}</p>
        </aside>
      </div>
    </main>
  );
}
