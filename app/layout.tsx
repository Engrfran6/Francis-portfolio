import Footer from '@/components/Footer';
import Navbar from '@/components/navbar/Navbar';
import SchemaMarkup from '@/components/SeoSchema';
import {Metadata} from 'next';
import './globals.css';
import {ThemeProvider} from './provider';

export const metadata: Metadata = {
  title: 'Francis Okpoluaefe | Software Developer Portfolio | React & Next.js',
  description:
    "Explore Francis Okpoluaefe's portfolio showcasing modern, scalable frontend projects built with React, Next.js, TypeScript and Tailwind css.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/deulo_favicon.png" sizes="any" />
        <SchemaMarkup />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
