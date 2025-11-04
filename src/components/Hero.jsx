import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

const StoreButtons = () => (
  <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
    <a
      href="https://play.google.com/store/search?q=spotles&c=apps"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur hover:bg-white/20 transition"
      aria-label="Get on Google Play"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="h-5 w-5 mr-2"
        aria-hidden
        focusable="false"
      >
        <path fill="currentColor" d="M325.3 234.3 104.7 13.7C98.7 7.7 91.1 4 82.7 4c-7.6 0-14.6 2.6-20.1 7.6C52.2 21 49 29.4 49 38.2v435.6c0 8.8 3.2 17.3 13.6 26.6 5.5 5 12.5 7.6 20.1 7.6 8.4 0 16-3.7 22-9.7l220.6-220.6c10.9-10.9 10.9-28.6-.1-39.4z" />
        <path fill="currentColor" d="M361.4 198.1 313 169.8 86.9 396 135 424.1l226.4-226zM398.6 315.4 171.9 88.6 136 113.1 363 340l35.6-24.6z" />
        <path fill="currentColor" d="M462.4 211.8 421 187.8l-44 44 41.4 24c8.6 5 13.6 13.6 13.6 23.4s-5 18.4-13.6 23.4l-41.4 24 44 44 41.4-24c26.1-15.1 42-42.7 42-72.4s-15.9-57.3-42-72.4z" />
      </svg>
      <span className="font-medium">Get it on Google Play</span>
    </a>
    <a
      href="https://apps.apple.com/us/search?term=spotles"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-4 py-3 hover:bg-gray-100 transition"
      aria-label="Download on the App Store"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        className="h-5 w-5 mr-2"
        aria-hidden
        focusable="false"
      >
        <path d="M318.7 268.7c-.5-53.9 44.1-79.6 46.1-80.8-25.1-36.7-64.1-41.8-78-42.3-33.2-3.4-64.8 19.6-81.6 19.6-16.8 0-42.9-19.1-70.5-18.6-36.3.5-69.7 21.1-88.3 53.6-37.5 65.1-9.6 162 26.9 215.1 17.8 25.7 39 54.5 66.8 53.5 26.8-1.1 36.9-17.3 69.2-17.3 32.3 0 41.2 17.3 69.5 16.8 28.8-.5 47.1-26.3 64.8-52 20.3-29.7 28.7-58.4 29.1-59.9-.6-.3-55.7-21.4-56-84.7z" />
        <path d="M260.2 104.7c14.7-17.8 24.7-42.7 22-67.7-21.3.9-47.2 14.2-62.6 31.9-13.7 15.9-25.5 41.5-22.3 66.1 23.7 1.8 48.2-12.1 62.9-30.3z" />
      </svg>
      <span className="font-medium">Download on the App Store</span>
    </a>
  </div>
);

export default function Hero() {
  return (
    <header className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-900/20 via-gray-900/40 to-gray-900/80" />
      </div>
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
              <Rocket className="h-4 w-4" />
              <span>Fast. Modern. Spotlessly simple.</span>
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
              Spotles Solutions
              <span className="block text-white/90">Book trusted services in minutes</span>
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              A mobile-first platform for on-demand home services. Compare, book, and manage appointments with ease.
            </p>
            <div className="mt-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 text-white hover:bg-indigo-600 transition"
              >
                Explore services
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <StoreButtons />
          </div>
        </div>
      </div>
    </header>
  );
}
