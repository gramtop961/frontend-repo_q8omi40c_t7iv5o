import React from 'react';
import { Shield, Clock, Sparkles, CheckCircle } from 'lucide-react';

const services = [
  {
    title: 'Home Cleaning',
    description: 'Deep, standard, and move-out packages performed by vetted professionals.',
    icon: Sparkles,
  },
  {
    title: 'Maintenance',
    description: 'Handyman, plumbing, and electrical fixes scheduled around your day.',
    icon: Clock,
  },
  {
    title: 'Safety & Quality',
    description: 'Background-checked providers, transparent pricing, and quality guarantees.',
    icon: Shield,
  },
  {
    title: 'Satisfaction First',
    description: 'Clear communication and simple re-booking if anything isn’t perfect.',
    icon: CheckCircle,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Services tailored to your home</h2>
          <p className="mt-3 text-gray-600">Pick what you need and book from your phone. Clear pricing, real-time availability, and trusted pros.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
