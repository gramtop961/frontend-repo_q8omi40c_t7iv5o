import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../data/siteData';
import SEO from '../components/SEO';

export default function BlogDetail({ site }) {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);
  if (!post) {
    return (
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-2xl font-semibold">Article not found</h1>
      </main>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    image: post.cover,
    url: `${site.domain}/blog/${post.slug}`,
  };

  return (
    <main className="container mx-auto px-6 py-12">
      <SEO
        title={`${post.title} — ${site.name}`}
        description={post.excerpt}
        url={`${site.domain}/blog/${post.slug}`}
        image={post.cover}
        type="article"
        jsonLd={jsonLd}
      />
      <article className="prose prose-indigo max-w-none">
        <img src={post.cover} alt={`${post.title} cover`} className="w-full h-72 object-cover rounded-2xl" />
        <h1 className="mt-6">{post.title}</h1>
        <p className="text-sm text-gray-500">By {post.author} • {new Date(post.date).toLocaleDateString()}</p>
        {post.content.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className="mt-6 text-sm text-gray-600">Tags: {post.tags.join(', ')}</div>
      </article>
    </main>
  );
}
