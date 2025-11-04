import React from 'react';
import { Phone } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Ready when you are</h2>
            <p className="mt-3 max-w-2xl">Download the Spotles app to browse services, pick a time, and confirm your booking. All requests route to our mobile app—there’s no web login.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://play.google.com/store/search?q=spotles&c=apps"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-500 text-white px-4 py-3 hover:bg-indigo-600 transition"
                aria-label="Get on Google Play"
              >
                Get it on Google Play
              </a>
              <a
                href="https://apps.apple.com/us/search?term=spotles"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-4 py-3 hover:bg-gray-100 transition"
                aria-label="Download on the App Store"
              >
                Download on the App Store
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/[0.03]">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
              <Phone className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-xl font-semibold text-white">Support</h3>
            <p className="mt-1 text-sm text-gray-400">Have questions about a booking?</p>
            <ul className="mt-4 space-y-1 text-sm">
              <li>Email: support@spotles.app</li>
              <li>Hours: Mon–Fri, 9am–6pm</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Spotles Solutions. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#" className="hover:text-white">Blog</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
