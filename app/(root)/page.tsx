'use client';

import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import Approach from '@/components/Approach';
import Experience from '@/components/Experience';
import Technologies from '@/components/technologies/Technologies';
import {projectList} from '@/components/projectList';
import ProjectCard, {ProjectCardProps} from '@/components/projectCard/ProjectCard';
import MagicButton from '@/components/MagicButton';
import {FaLocationArrow} from 'react-icons/fa6';

const Home = () => {
  return (
    <main
      className="relative mx-auto
       flex flex-col justify-center items-center verflow-hidden">
      <section className="max-w-7xl w-full flex flex-col items-center justify-center h-[70vh] md:h-[100vh] ">
        <Hero />
      </section>

      <section
        className="flex flex-col justify-center items-center gap-10   py-12 w-[100%] mx-auto sm:px-10 px-5 bg-black-100"
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
          {projectList?.slice(0, 7).map((project: ProjectCardProps, index) => (
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
        <Clients />
      </section>
    </main>
  );
};

export default Home;
