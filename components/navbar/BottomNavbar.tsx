'use client';

import React, {useEffect, useState} from 'react';
import Hamburger from './Hamburger';
import RightNav from './RightNav';
import CustomLink from '../ui/customLink/CustomLink';
import CustomBtn from '../ui/customButton/CustomBtn';
import {MdCallMade} from 'react-icons/md';
import {usePathname} from 'next/navigation';
import Socials from '../socials/Social';

const BottomNavbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Handle scroll event to toggle navbar fixed state
  useEffect(() => {
    const handleScroll = () => {
      const halfwayPoint = window.innerHeight / 2; // Halfway point of the viewport height
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition >= halfwayPoint) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll event listener to toggle text size
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.08; // Equivalent to -8%
      if (window.scrollY >= scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex flex-col gap-12 md:gap-16 bg-black sticky  w-full border-b border-b-[rgba(255,255,255,0.125)] z-[1000] pb-[2rem] pt-5 transition-all duration-300 ease-in-out ${
        isScrolled ? 'top-[-8%] md:top-[-10%]  text-[0.3rem] md:text-[0.2rem]' : ''
      }`}>
      <div className="flex justify-between md:justify-evenly items-center w-screen pl-4 font-semibold">
        <div className="block md:hidden">
          <Socials otherClassName="text-white" />
        </div>
        <RightNav open={open} setOpen={setOpen} /> {/* Pass both open and setOpen */}
        <Hamburger open={open} setOpen={setOpen} /> {/* Pass both open and setOpen */}
        <div className="items-center gap-12 hidden md:flex">
          <Socials otherClassName=" text-white" />

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

      <div className="flex flex-col items-center justify-center gap-2 ">
        <h1 className={`heading px-3 ${isScrolled ? 'text-[1rem] md:text-[1.8rem]' : ''}`}>
          {heading}
        </h1>
        <div className="bg-purple w-20 h-2 rounded-full mt-2"></div>
      </div>
    </nav>
  );
};

export default BottomNavbar;
