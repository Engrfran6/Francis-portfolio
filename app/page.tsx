'use client';

import About from '@/components/about/About';
import Approach from '@/components/Approach';
import Certifications from '@/components/Certifications';
import Contact from '@/components/contact/Contact';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import PortfolioDesktop from '@/components/projectCard/PortfolioDesktop';
import Projects from '@/components/projectCard/Projects';
import TechnicalSkills from '@/components/TechnicalSkills';

const Home = () => {
  return (
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
    </main>
  );
};

export default Home;
