'use client';

import React, {useState} from 'react';
import Hamburger from './Hamburger';
import RightNav from './RightNav';
import Socials from '../socials/Social';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between md:justify-center items-center h-[4.5rem] w-screen pl-6 font-semibold z-[1000] fixed top-0 backdrop-blur-[16px] backdrop-saturate-[180%] bg-black border-b border-b-[rgba(255,255,255,0.125) ">
      <div className="block md:hidden">
        <Socials className="socials-navbar" />
      </div>
      <RightNav open={open} setOpen={setOpen} />
      <Hamburger open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
