import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen bg-background antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
