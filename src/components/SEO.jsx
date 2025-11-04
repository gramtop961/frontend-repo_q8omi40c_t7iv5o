import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url, image, type = 'website', keywords = [], jsonLd }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}        
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      {image && <meta name="twitter:image" content={image} />}

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
