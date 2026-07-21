import type { Metadata } from 'next';
import { geist } from '@/lib/fonts';
import '@/styles/globals.css';

const siteUrl = 'https://og.anuragroy.dev';
const title =
  'og.anuragroy.dev - OpenGraph Image Generator for anuragroy.dev';
const description =
  'Generate dynamic OpenGraph images on the edge using @vercel/og and Vercel Edge functions.';
const ogImageLink = 'https://og.anuragroy.dev/og.png';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title,
    description,
    images: [ogImageLink],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImageLink],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.className} ${geist.variable}`}>
      <body className="min-h-screen bg-background antialiased">
        <div className="min-h-svh">{children}</div>
      </body>
    </html>
  );
}
