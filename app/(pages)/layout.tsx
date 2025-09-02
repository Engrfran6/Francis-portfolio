import {AnimatedSection} from "@/components/Animated-Section";
import Footer from "@/components/Footer";
import {AnimationProvider} from "@/contexts/animation-context";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative">
      <AnimationProvider>
        {children}
        {/* Footer */}
        <AnimatedSection
          animation="fade-in"
          delay={500}
          className="mt-8 sm:mt-12 py-4 sm:py-6 text-center text-xs sm:text-sm text-zinc-500">
          <Footer />
        </AnimatedSection>
      </AnimationProvider>
    </main>
  );
}
