'use client';

import MagicButton from '@/components/MagicButton';
import ProjectCard from '@/components/projectCard/ProjectCard';
import {projectList, projects} from '@/data';
import {useState} from 'react';
import {FaLocationArrow} from 'react-icons/fa';

const Portfolio = () => {
  const [showmore, setShowmore] = useState<number>(4);

  const handleClick = () => {
    if (showmore < projects.length) {
      setShowmore((prev) => prev + 4);
    }
  };
  return (
    <section className="max-w-7xl w-full flex flex-col justify-center items-center gap-10  py-12 verflow-hidden mx-auto sm:px-10 px-5">
      <h1 className="heading">
        Projects <span className="text-purple"> Completed</span>
      </h1>
      <div className="flex flex-col gap-20 md:gap-16 ">
        {projects?.slice(0, showmore).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {showmore < projectList.length && (
        <MagicButton
          handleClick={handleClick}
          title="VIEW MORE"
          icon={<FaLocationArrow />}
          position="right"
        />
      )}
    </section>
  );
};

export default Portfolio;
