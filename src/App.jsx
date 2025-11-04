import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { site } from './data/siteData';

// Route-level code splitting for faster first load
const Home = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const BlogPage = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  const [open, setOpen] = useState(false);
  const openBooking = () => setOpen(true);
  const closeBooking = () => setOpen(false);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-indigo-600 text-white px-3 py-2 rounded">
          Skip to content
        </a>
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
          <HeaderNav onBook={openBooking} />
          <main id="main" className="flex-1">
            <Suspense fallback={<div className="px-6 py-10 text-center text-gray-600">Loading…</div>}>
              <Routes>
                <Route path="/" element={<Home onBook={openBooking} site={site} />} />
                <Route path="/services" element={<ServicesPage onBook={openBooking} site={site} />} />
                <Route path="/services/:slug" element={<ServiceDetail onBook={openBooking} site={site} />} />
                <Route path="/blog" element={<BlogPage site={site} />} />
                <Route path="/blog/:slug" element={<BlogDetail site={site} />} />
                <Route path="/about" element={<About site={site} />} />
                <Route path="/contact" element={<Contact site={site} />} />
                <Route path="*" element={<NotFound site={site} />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <BookingModal open={open} onClose={closeBooking} />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
