"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HeroMobile from "@/components/HeroMobile";

const Home = () => {
  return (
    <main className="h-screen relative">
      <div className="hidden md:block h-screen">
        <Hero />
        <div className="container px-5">
          <Footer />
        </div>
      </div>

      <HeroMobile />

      {/* to be removed
      <main>
        <Hero />
        <section className="flex flex-col justify-center items-center md:gap-32 md:pb-32">
          <TechnicalSkills />

          <Education />
          <Certifications />

          <Experience />

          <Projects />

          <PortfolioDesktop />

          <Approach />

          <About />

          <Contact />
        </section>
      </main> */}
    </main>
  );
};

export default Home;
