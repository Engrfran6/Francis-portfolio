'use client';

import {projects} from '@/data';

import HeaderTitle from '../ui/HeaderTitle';
import Wrapper from '../Wrapper';
import Oldcard from './PortfolioDesktopCard';

const PortfolioDesktop = () => {
  return (
    <Wrapper className="hidden md:flex">
      <HeaderTitle title="Projects" titleSpan="Completed" />
      <div className="md:px-8 md:pb-8 border-x-2 border-b-2 border-[#2b2a2a]">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-2 md:gap-4">
          {projects?.slice(0, 3).map((project, index) => (
            <Oldcard key={index} {...project} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
export default PortfolioDesktop;
