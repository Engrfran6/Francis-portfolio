import {MdOutlineDoubleArrow} from 'react-icons/md';
import ProjectCard from '../../../components/projectCard/ProjectCard';
import {projectList} from '../../../components/projectList';

import {Metadata} from 'next';

export const metadata: Metadata = {
  title: `Portfolio | Francis's Portfolio`,
  description: 'Modern & Minimal Software Engineer Portfolio',
};

export default function Porfolio() {
  return (
    <>
      <section className="flex flex-col justify-center items-center gap-12 w-[65.9%] mx-auto h-[77vh]">
        <div>
          {/* <span>List view</span> */}
          {/* <span>Grid view</span> */}
        </div>
        {/* 
        {projectList?.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))} */}
        <h2>COMING SOON!!!</h2>

        {/* <button className="btn btn_primary">
          SEE MORE
          <MdOutlineDoubleArrow />
        </button> */}
      </section>
    </>
  );
}
