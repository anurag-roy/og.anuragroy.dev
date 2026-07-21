import { geist } from '@/lib/fonts';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={`${geist.className} min-h-svh`}>
        <Component {...pageProps} />
      </div>
      <style jsx global>{`
        :root {
          --font-geist-sans: ${geist.style.fontFamily};
        }
      `}</style>
    </>
  );
}
