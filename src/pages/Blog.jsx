import React from 'react';
import { posts } from '../data/siteData';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function BlogPage({ site }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${site.name} Blog`,
    url: `${site.domain}/blog`,
  };

  return (
    <main className="container mx-auto px-6 py-12">
      <SEO
        title={`Blog — ${site.name}`}
        description="Tips, guides, and updates from Spotles."
        url={`${site.domain}/blog`}
        jsonLd={jsonLd}
      />
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">Spotles Blog</h1>
      <p className="mt-2 text-gray-600">Articles are public and indexable—no login required.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-2xl bg-white border border-gray-200 p-6 hover:shadow-lg transition" itemScope itemType="https://schema.org/BlogPosting">
            <img src={post.cover} alt={`${post.title} cover`} loading="lazy" className="h-40 w-full object-cover rounded-xl" />
            <div className="text-xs text-indigo-600 font-medium mt-3">{post.tags[0]}</div>
            <h2 className="mt-2 text-xl font-semibold text-gray-900" itemProp="headline">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="mt-2 text-gray-600" itemProp="description">{post.excerpt}</p>
            <time className="mt-4 block text-sm text-gray-500" dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
          </article>
        ))}
      </div>
    </main>
  );
}
