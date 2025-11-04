export const site = {
  name: 'Spotles Solutions',
  domain: 'https://spotles.app',
  phone: '+1 (555) 123-4567',
  email: 'support@spotles.app',
  address: '123 Market Street, Suite 400, San Francisco, CA',
  socials: {
    instagram: 'https://instagram.com/spotles',
    facebook: 'https://facebook.com/spotles',
  },
  stores: {
    android: 'https://play.google.com/store/search?q=spotles&c=apps',
    ios: 'https://apps.apple.com/us/search?term=spotles',
  },
};

export const services = [
  {
    slug: 'home-cleaning',
    name: 'Home Cleaning',
    description: 'Deep, standard, and move-out packages performed by vetted professionals.',
    priceFrom: 79,
    image: 'https://images.unsplash.com/photo-1686178827149-6d55c72d81df?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIb21lJTIwQ2xlYW5pbmd8ZW58MHwwfHx8MTc2MjI1MDIzMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    keywords: ['home cleaning', 'maid service', 'deep clean'],
    features: [
      'Background-checked pros',
      'Supplies included',
      'Flexible scheduling',
      'Satisfaction guarantee',
    ],
    faqs: [
      { q: 'What is included in a standard clean?', a: 'Bathrooms, kitchen surfaces, dusting, vacuuming, and mopping of common areas.' },
      { q: 'Do I need to be home?', a: 'No—just share access instructions. We’ll handle the rest.' },
    ],
  },
  {
    slug: 'apartment-turnover',
    name: 'Apartment Turnover',
    description: 'Move-in/move-out cleaning with checklist-based quality control for landlords and tenants.',
    priceFrom: 129,
    image: 'https://images.unsplash.com/photo-1724281946137-c637f58ecbdc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcGFydG1lbnQlMjBUdXJub3ZlcnxlbnwwfDB8fHwxNzYyMjUwMjMxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    keywords: ['apartment cleaning', 'move out clean'],
    features: ['Fridge/oven interior', 'Baseboards & blinds', 'Spot wall cleaning', 'Final walk-through'],
    faqs: [
      { q: 'Do you bring equipment?', a: 'Yes, our teams bring professional-grade tools and eco-friendly supplies.' },
    ],
  },
  {
    slug: 'handyman-maintenance',
    name: 'Handyman & Maintenance',
    description: 'On-demand handyman for small fixes—mounting, minor plumbing, patch & paint, more.',
    priceFrom: 59,
    image: 'https://images.unsplash.com/photo-1584677191047-38f48d0db64e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIYW5keW1hbiUyMCUyNiUyME1haW50ZW5hbmNlfGVufDB8MHx8fDE3NjIyNTAyMzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    keywords: ['handyman', 'home maintenance', 'repairs'],
    features: ['Transparent hourly pricing', 'Upfront scope confirmation', 'Parts pick-up available'],
    faqs: [
      { q: 'Is there a minimum?', a: 'One-hour minimum. Additional time billed in 30-minute increments.' },
    ],
  },
  {
    slug: 'deep-clean',
    name: 'Deep Clean',
    description: 'Top-to-bottom attention for high-traffic areas, grout, appliances, and more.',
    priceFrom: 139,
    image: 'https://images.unsplash.com/photo-1686178827149-6d55c72d81df?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZWVwJTIwQ2xlYW58ZW58MHwwfHx8MTc2MjI1MDIzMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    keywords: ['deep clean', 'spring clean'],
    features: ['Inside cabinets (optional)', 'Appliance detailing', 'High-touch sanitization'],
    faqs: [
      { q: 'How long does it take?', a: 'Typically 3–5 hours depending on home size and add-ons.' },
    ],
  },
];

export const posts = [
  {
    slug: 'guest-ready-habits',
    title: '5 quick habits that keep your home guest‑ready',
    excerpt: 'Tiny routines that make a big impact—without spending your whole weekend cleaning.',
    date: '2025-10-01',
    author: 'Spotles Team',
    tags: ['Home Tips', 'Routines'],
    cover: 'https://images.unsplash.com/photo-1556910110-c23fa4a4e0f5?q=80&w=1400&auto=format&fit=crop',
    content: [
      'Keeping a home guest-ready is easier when you build micro-habits into your day. Here are five that take under five minutes each.',
      '1) Wipe kitchen counters after each meal. 2) Do a two-minute entryway reset. 3) Keep a laundry basket in the living room. 4) Squeegee the shower. 5) Run the dishwasher nightly.',
      'These tiny steps reduce the weekend workload and keep your space consistently calm.',
    ],
  },
  {
    slug: 'how-we-vet-pros',
    title: 'How we vet and train service pros',
    excerpt: 'Behind the scenes of quality checks, background screening, and performance reviews.',
    date: '2025-09-12',
    author: 'Ops Team',
    tags: ['Inside Spotles', 'Quality'],
    cover: 'https://images.unsplash.com/photo-1604881987929-3f61b1f2d862?q=80&w=1400&auto=format&fit=crop',
    content: [
      'Quality is non-negotiable. All providers undergo identity verification, background checks, and practical assessments.',
      'We continuously monitor ratings and retrain on updated checklists and safety protocols.',
    ],
  },
  {
    slug: 'first-booking-guide',
    title: 'What to expect on your first booking',
    excerpt: 'From app download to doorstep—how the process works and how to get the best results.',
    date: '2025-08-20',
    author: 'Support Team',
    tags: ['Guides'],
    cover: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1400&auto=format&fit=crop',
    content: [
      'Booking with Spotles takes minutes. Download the app, select your service, pick a time, and confirm.',
      'Prepare your space by clearing counters and picking up items. Your pro will handle the rest.',
    ],
  },
  {
    slug: 'eco-cleaning',
    title: 'Eco cleaning that actually works',
    excerpt: 'Green doesn’t have to mean less effective. Here’s how we balance planet and performance.',
    date: '2025-07-05',
    author: 'Spotles Team',
    tags: ['Sustainability'],
    cover: 'https://images.unsplash.com/photo-1598300042247-2f6f64c58ed5?q=80&w=1400&auto=format&fit=crop',
    content: [
      'We select products that meet third-party safety standards and pass our internal performance tests.',
      'Our teams are trained on proper dilution ratios, microfiber systems, and waste reduction.',
    ],
  },
];
