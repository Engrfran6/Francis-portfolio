'use client';

import About from '@/components/about/About';
import Approach from '@/components/Approach';
import Certifications from '@/components/Certifications';
import Contact from '@/components/contact/Contact';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import MagicButton from '@/components/MagicButton';
import PortfolioDesktop from '@/components/projectCard/PortfolioDesktop';
import ProjectCard from '@/components/projectCard/ProjectCard';
import Technologies from '@/components/technologies/Technologies';
import {projects} from '@/data';
import {FaLocationArrow} from 'react-icons/fa6';

const Home = () => {
  return (
    <main
      className="relative mx-auto
       flex flex-col justify-center items-center verflow-hidden">
      <section className="relative flex flex-col items-center justify-center h-[95vh] pt-8 w-full ">
        <div
          className="h-[95vh] w-full dark:bg-[#111111] bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center">
          <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#101010]
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>
        <Hero />
      </section>

      <Technologies />

      <Education />
      <Certifications />

      <section className="max-w-7xl w-full verflow-hidden mx-auto sm:px-10 px-5">
        <Experience />
      </section>

      <section className="flex max-w-7xl w-full md:hidden flex-col justify-center items-center gap-10  py-12 verflow-hidden mx-auto sm:px-10 px-5">
        <h1 className="heading">
          Projects <span className="text-purple"> Completed</span>
        </h1>
        <div className="flex flex-col gap-8 md:gap-16 ">
          {projects?.slice(0, 4).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <a href="/portfolio">
          <MagicButton title="MORE PROJECTS" icon={<FaLocationArrow />} position="right" />
        </a>
      </section>

      <section className="hidden md:flex max-w-7xl w-full flex-col justify-center items-center gap-10  py-12 verflow-hidden mx-auto sm:px-10 px-5">
        <PortfolioDesktop />
      </section>

      <section className="max-w-7xl w-full verflow-hidden mx-auto sm:px-10 px-5">
        <Approach />
      </section>
      {/* <section className="max-w-7xl w-full mx-auto pb-28 sm:px-10 px-5">
        <Clients />
      </section> */}
      <section className="max-w-7xl w-full mx-auto pb-28 sm:px-10 px-5">
        <About />
      </section>
      <section className="w-full mx-auto pb-20 sm:px-10 px-5">
        <h1 className="heading mb-12">Get in Touch</h1>
        <Contact />
      </section>
    </main>
  );
};

export default Home;
