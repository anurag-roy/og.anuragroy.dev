import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>og.anuragroy.dev - OG Image Generator for anuragroy.dev</title>
        <meta
          name="description"
          content="Open graph image generator for anuragroy.dev"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
