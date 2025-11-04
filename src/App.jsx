import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import BlogPreview from './components/BlogPreview';
import FooterCTA from './components/FooterCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <main>
        <Services />
        <BlogPreview />
        <FooterCTA />
      </main>
    </div>
  );
}
