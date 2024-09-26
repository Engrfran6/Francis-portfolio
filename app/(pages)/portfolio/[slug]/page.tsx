import {Metadata} from 'next';
import DisplaySingleProject from './DisplaySingleProject';
import {notFound} from 'next/navigation';
import {reverseTitle} from '@/lib/utils';
import {projectList} from '@/data';

export const metadata: Metadata = {
  title: `Portfolio | Francis's Portfolio`,
  description: 'Modern & Minimal Software Engineer Portfolio',
};

export default function Porfolio({params}: {params: {slug: string}}) {
  const decodedUrlParams = reverseTitle(params.slug);

  const project = projectList?.find((item) => item.title === decodedUrlParams);

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
