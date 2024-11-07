'use client';

import {projects} from '@/data';

import Oldcard from './PortfolioDesktopCard';

const PortfolioDesktop = () => {
  return (
    <section className=" mt-20 hidden md:block">
      <h1 className="heading ">
        Projects <span className="text-purple"> Completed</span>
      </h1>
      <div className="md:px-8 md:py-12 border-x-2 border-b-2 border-[#2b2a2a]">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-2 md:gap-4 mt-3 md:mt-5">
          {projects?.slice(0, 3).map((project, index) => (
            <Oldcard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default PortfolioDesktop;
