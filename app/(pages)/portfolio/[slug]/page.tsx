import {projects} from '@/data';
import {reverseTitle} from '@/lib/utils';
import {Metadata} from 'next';
import {notFound} from 'next/navigation';
import DisplaySingleProject from './DisplaySingleProject';

export const metadata: Metadata = {
  title: `Portfolio | Francis's Portfolio`,
  description: 'Modern & Minimal Software Engineer Portfolio',
};

export default function Porfolio({params}: {params: {slug: string}}) {
  const decodedUrlParams = reverseTitle(params.slug);

  const project = projects?.find((item) => item.title === decodedUrlParams);

  if (!project) {
    return notFound();
  }

  return (
    <>
      <section>
        <div>
          {/* <span>List view</span> */}
          {/* <span>Grid view</span> */}
        </div>
        {/* 
        {projectList?.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))} */}
        <DisplaySingleProject {...project} />

        {/* <button className="btn btn_primary">
          SEE MORE
          <MdOutlineDoubleArrow />
        </button> */}
      </section>
    </>
  );
}
