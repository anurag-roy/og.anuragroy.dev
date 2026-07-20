import { geist } from '@/lib/fonts';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={`${geist.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
