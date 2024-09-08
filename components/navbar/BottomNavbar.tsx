'use client';

import React, {useState} from 'react';
import Hamburger from './Hamburger';
import Socials from '@/components/socials/Social';
import RightNav from './RightNav';
import CustomLink from '../ui/customLink/CustomLink';
import CustomBtn from '../ui/customButton/CustomBtn';
import {MdCallMade} from 'react-icons/md';
import {usePathname} from 'next/navigation';

const BottomNavbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleEmailClick = () => {
    window.location.href = 'mailto:deulo.dev@gmail.com';
  };

  const pathname = usePathname();
  let heading: string | JSX.Element;

  switch (pathname) {
    case '/about':
      heading = (
        <>
          Meet Francis U. <span className="text-purple">Okpoluaefe</span>
        </>
      );
      break;
    case '/portfolio':
      heading = 'Portfolio';
      break;
    case '/contact':
      heading = 'Contact';
      break;
    default:
      heading = 'Welcome';
      break;
  }
  return (
    <nav className="bg-black fixed top-0 w-full h-max pt-5 border-b border-b-[rgba(255,255,255,0.125)] z-[1000]">
      <div className="flex justify-between md:justify-evenly items-center w-screen pl-4 font-semibold">
        <div className="block md:hidden">
          <Socials className="socials-navbar" />
        </div>
        <RightNav open={open} setOpen={setOpen} /> {/* Pass both open and setOpen */}
        <Hamburger open={open} setOpen={setOpen} /> {/* Pass both open and setOpen */}
        <div className="items-center gap-12 hidden md:flex">
          <div className="">
            <Socials className="socials-navbar" />
          </div>
          <div className="flex gap-2">
            <CustomLink
              className="btn btn_nav-call"
              href="https://calendly.com/deulo-careers/meeting-with-francis-u-okpoluaefe"
              text="Book call"
              icon={<MdCallMade />}
            />

            <div className="divider2"></div>
            <CustomBtn
              className="btn btn_nav-message"
              text="Message"
              onClick={handleEmailClick}
              icon={<MdCallMade />}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 pb-[2rem] md:pb-[2.5rem] pt-[5rem] md:pt-[5.5rem]">
        <h1 className="heading px-3">{heading}</h1>
        <div className="bg-purple w-20 h-2 rounded-full mt-2"></div>
      </div>
    </nav>
  );
};

export default BottomNavbar;
