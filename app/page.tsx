import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Main } from '@/components/main';

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-6xl flex-col px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
