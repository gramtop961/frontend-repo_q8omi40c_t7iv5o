import React from 'react';
import { site } from '../data/siteData';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-semibold text-lg">{site.name}</h3>
          <p className="mt-2 text-sm">{site.address}</p>
          <p className="mt-1 text-sm">{site.phone}</p>
          <p className="mt-1 text-sm">{site.email}</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Follow us</h4>
          <div className="mt-3 flex items-center gap-4">
            <a href={site.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
            <a href={site.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold">Get the app</h4>
          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            <a href={site.stores.android} target="_blank" rel="noreferrer" className="rounded-lg bg-white text-gray-900 px-4 py-2 text-sm hover:bg-gray-100">Google Play</a>
            <a href={site.stores.ios} target="_blank" rel="noreferrer" className="rounded-lg bg-white text-gray-900 px-4 py-2 text-sm hover:bg-gray-100">App Store</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6 text-sm flex items-center justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a href="/sitemap.xml" className="hover:text-white">Sitemap</a>
            <a href="/robots.txt" className="hover:text-white">Robots</a>
            <a href="/" className="hover:text-white">Home</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
