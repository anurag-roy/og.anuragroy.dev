import Head from 'next/head';

export function Meta() {
  const siteUrl = 'https://og.anuragroy.dev';
  const title =
    'og.anuragroy.dev - OpenGraph Image Generator for anuragroy.dev';
  const description =
    'Generate dynamic OpenGraph images on the edge using @vercel/og and Vercel Edge functions.';
  const ogImageLink = 'https://og.anuragroy.dev/og.png';

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.png" />

      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageLink} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImageLink} />

      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />
    </Head>
  );
}
