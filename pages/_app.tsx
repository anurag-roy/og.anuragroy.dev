import type { AppProps } from 'next/app';
import { Geist } from 'next/font/google';
import '../styles/globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${geist.variable} min-h-svh font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
