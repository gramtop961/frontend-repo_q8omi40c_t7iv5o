import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import BlogPage from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { site } from './data/siteData';

export default function App() {
  const [open, setOpen] = useState(false);
  const openBooking = () => setOpen(true);
  const closeBooking = () => setOpen(false);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
          <HeaderNav onBook={openBooking} />
          <div className="flex-1">
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
          </div>
          <Footer />
          <BookingModal open={open} onClose={closeBooking} />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
