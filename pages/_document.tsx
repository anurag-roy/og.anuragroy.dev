import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="bg-gray-50">
      <Head />
      <body className="max-w-6xl mx-auto p-10">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
