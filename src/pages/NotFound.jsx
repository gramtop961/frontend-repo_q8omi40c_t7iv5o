import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound({ site }) {
  return (
    <main className="container mx-auto px-6 py-24 text-center">
      <SEO
        title={`Page Not Found — ${site.name}`}
        description="The page you are looking for does not exist."
        url={`${site.domain}/404`}
      />
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <p className="mt-3 text-gray-600">Sorry, we couldn’t find that page.</p>
      <div className="mt-6">
        <Link to="/" className="rounded-lg bg-indigo-600 text-white px-5 py-3 hover:bg-indigo-700">Back to Home</Link>
      </div>
    </main>
  );
}
