import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Meta } from '../components/Meta';

export default function Home() {
  return (
    <>
      <Meta />
      <div className="mx-auto flex min-h-svh w-full max-w-6xl flex-col px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
