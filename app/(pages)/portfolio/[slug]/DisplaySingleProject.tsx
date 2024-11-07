import {ProjectCardProps} from '@/components/projectCard/ProjectCard';
import Image from 'next/image';

type SlugProps = {
  title: string;
  image: string;
  tech: string;
  description: string;
};

const DisplaySingleProject = ({title, image, tech, description}: ProjectCardProps) => {
  return (
    <section className="flex flex-col gap-10">
      <header className="flex items-center justify-center pb-6 px-2 sm:px-0 bg-[#000000] border-b  border-b-[rgba(255,255,255,0.125)]">
        <Image src={image} alt="me" width={1000} height={1000} />
      </header>

      <div className="flex w-full sm:w-[60%] mx-auto pb-20">
        <div className="px-2 sm:px-10 py-6 flex flex-col items-start">
          <h2 className="w-full bg-black-200 py-5 px-8 text-lg rounded-lg">{title}</h2>
          <p className="py-6 px-4 text-[0.9rem] sm:text-lg">{description}</p>
          <h4 className="bg-black-200 py-4 px-8 rounded-lg">{tech}</h4>
        </div>

        {/* <div className="bg-red-400 px-10 py-6">
          <p>come</p>
          <p>come</p>
          <p>come</p>
          <p>come</p>
          <p>come</p>
        </div> */}
      </div>
    </section>
  );
};

export default DisplaySingleProject;
