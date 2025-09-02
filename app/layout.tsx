import {Header} from "@/components/navbar/Header";
import SchemaMarkup from "@/components/SeoSchema";
import {AnimationProvider} from "@/contexts/animation-context";
import {Metadata} from "next";
import "./globals.css";
import {ThemeProvider} from "./provider";

export const metadata: Metadata = {
  title: "Francis Okpoluaefe | Software Developer Portfolio | React & Next.js",
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
        <AnimationProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
            {/* <NewNavbar /> */}
            <Header />
            {children}
          </ThemeProvider>
        </AnimationProvider>
      </body>
    </html>
  );
}
