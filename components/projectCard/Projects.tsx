import {projects} from '@/data';
import {FaLocationArrow} from 'react-icons/fa6';
import MagicButton from '../MagicButton';
import HeaderTitle from '../ui/HeaderTitle';
import Wrapper from '../Wrapper';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <Wrapper className=" md:hidden">
      <HeaderTitle title="Projects" titleSpan="Completed" />
      <div className="flex flex-col gap-8 md:gap-16 ">
        {projects?.slice(0, 4).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <a href="/portfolio" className="mx-auto">
        <MagicButton title="MORE PROJECTS" icon={<FaLocationArrow />} position="right" />
      </a>
    </Wrapper>
  );
};
export default Projects;
