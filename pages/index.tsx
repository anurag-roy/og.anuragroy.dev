import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>OG Image Generator</title>
        <meta
          name="description"
          content="Open graph image generator for anuragroy.dev"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-rose-600">Hello</main>
    </>
  );
}
