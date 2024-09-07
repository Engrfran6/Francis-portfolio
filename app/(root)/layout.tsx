import Footer from '@/components/Footer';
import Navbar from '@/components/navbar/Navbar';

import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: `Home | Francis's Portfolio`,
  description: 'Modern & Minimal Software Engineer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      {children}
      <section className="relative w-full bg-black overflow-hidden">
        <div className="w-full absolute left-0 bottom-0 min-h-96">
          <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-30 " />
        </div>
        <div className="max-w-7xl w-full verflow-hidden mx-auto sm:px-10 px-5">
          <Footer />
        </div>
      </section>
    </main>
  );
}
