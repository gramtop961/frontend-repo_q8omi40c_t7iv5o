import React from 'react';

const posts = [
  {
    title: '5 quick habits that keep your home guest‑ready',
    excerpt: 'Tiny routines that make a big impact—without spending your whole weekend cleaning.',
    date: 'Oct 2025',
    category: 'Home Tips',
  },
  {
    title: 'How we vet and train service pros',
    excerpt: 'Behind the scenes of quality checks, background screening, and performance reviews.',
    date: 'Sep 2025',
    category: 'Inside Spotles',
  },
  {
    title: 'What to expect on your first booking',
    excerpt: 'From app download to doorstep—how the process works and how to get the best results.',
    date: 'Aug 2025',
    category: 'Guides',
  },
];

export default function BlogPreview() {
  return (
    <section aria-labelledby="blog-heading" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 id="blog-heading" className="text-3xl md:text-4xl font-semibold text-gray-900">From the Spotles blog</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">Practical advice, behind-the-scenes stories, and updates to help you get the most out of on-demand services.</p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex text-indigo-600 hover:text-indigo-700 font-medium"
            aria-label="Read all blog posts"
          >
            View all
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.title} className="group rounded-2xl bg-white border border-gray-200 p-6 hover:shadow-lg transition">
              <div className="text-xs text-indigo-600 font-medium">{post.category}</div>
              <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                <a href="#" aria-label={`Read: ${post.title}`}>{post.title}</a>
              </h3>
              <p className="mt-2 text-gray-600">{post.excerpt}</p>
              <time className="mt-4 block text-sm text-gray-500">{post.date}</time>
            </article>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <a
            href="#"
            className="inline-flex text-indigo-600 hover:text-indigo-700 font-medium"
            aria-label="Read all blog posts"
          >
            View all
          </a>
        </div>
      </div>
    </section>
  );
}
