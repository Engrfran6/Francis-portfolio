'use client';

import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import Approach from '@/components/Approach';
import Experience from '@/components/Experience';
import Technologies from '@/components/technologies/Technologies';
import ProjectCard, {ProjectCardProps} from '@/components/projectCard/ProjectCard';
import MagicButton from '@/components/MagicButton';
import {FaLocationArrow} from 'react-icons/fa6';
import {projectList} from '@/data';

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

      <section
        className="flex flex-col justify-center items-center gap-10   py-12 w-[100%] mx-auto sm:px-10 px-5 bg-[#000000]"
        style={{borderTop: '1px solid #3d3e41', borderBottom: '1px solid #3d3e41'}}>
        <h1 className="heading">
          Favourite <span className="text-purple"> Tools</span>
        </h1>
        <Technologies />
        <h4>Among many others</h4>
      </section>

      <section className="max-w-7xl w-full verflow-hidden mx-auto sm:px-10 px-5">
        <Experience />
      </section>

      <section className="max-w-7xl w-full flex flex-col justify-center items-center gap-10  py-12 verflow-hidden mx-auto sm:px-10 px-5">
        <h1 className="heading">
          Projects <span className="text-purple"> Completed</span>
        </h1>
        <div className="flex flex-col gap-20 md:gap-16 ">
          {projectList?.slice(0, 4).map((project: ProjectCardProps, index) => (
            <ProjectCard key={`p_${index}`} {...project} index={index} />
          ))}
        </div>

        <a href="/portfolio">
          <MagicButton title="MORE PROJECTS" icon={<FaLocationArrow />} position="right" />
        </a>
      </section>

      <section className="max-w-7xl w-full verflow-hidden mx-auto sm:px-10 px-5">
        <Approach />
      </section>
      {/* <Grid /> */}
      {/* <RecentProjects /> */}
      <section className="max-w-7xl w-full mx-auto pb-28 sm:px-10 px-5">
        {/* <Clients /> */}
      </section>
    </main>
  );
};

export default Home;
