import {socialMedia} from '@/data';
import {motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {FaLocationArrow} from 'react-icons/fa6';
import ME from './image/profilephoto.png';
import MagicButton from './MagicButton';
import {Spotlight} from './ui/Spotlight';
import {TextGenerateEffect} from './ui/TextGenerateEffect';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[95vh] pt-16">
      <div
        className="h-[95vh] w-full dark:bg-[#111111] bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center">
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#101010]
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="hidden md:block">
        <Spotlight className=" -top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        {/* <Spotlight className="bg-red-700 h-[80vh] w-[50vw] top-10 left-full" fill="purple overflow-hidden" /> */}
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="flex flex-col-reverse sm:flex-row md:gap-24 gap-2 justify-center items-center relative mt-16 mb-20 md:my-20 z-10">
        <div className="flex flex-col justify-center sm:justify-start max-w-[89vw] md:max-w-2xl lg:max-w-[50vw]">
          <motion.h3
            className="py-1 sm:py-3 px-1 md:px-6 md:rounded w-max md:bg-black-300 text-lg md:text-xl mx-auto sm:mx-0"
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{
              delay: 0.5,
              type: 'spring',
              stiffness: 120,
            }}>
            HI 👋, I&apos;M FRANCIS ULOHO OKPOLUAEFE
          </motion.h3>

          <TextGenerateEffect
            words="A Full-Stack Software Engineer with a strong focus on frontend development,
          dedicated to turning complex challenges into scalable, user-friendly solutions by blending
          innovative design and cutting-edge technology,"
            className="text-center sm:text-left  text-[18px] sm:text-[16px]  md:text-3xl lg:text-3xl pt-0 sm:pt-2 sm:pl-4"
          />

          <motion.div
            className="flex gap-2 md:gap-8 items-end mt-8 md:mt-4 justify-center sm:justify-start"
            initial={{x: 100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{
              delay: 3,
              type: 'spring',
              stiffness: 120,
            }}>
            <div className="hidden  md:block">
              <div className="flex items-center md:gap-3 gap-6 ">
                {socialMedia.map((info) => (
                  <Link
                    href={info.link}
                    target="_blank"
                    key={info.id}
                    className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-300 rounded-lg border border-black-300">
                    <img src={info.img} alt="icons" width={20} height={20} />
                  </Link>
                ))}
              </div>
            </div>
            {/* <div className="h-12 w-1 bg-[#090909] hidden  md:block"></div> */}

            <a href="https://calendly.com/deulo-careers/meeting-with-francis-u-okpoluaefe">
              <MagicButton
                title="Book call"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="bg-transparent"
              />
            </a>

            {/* <div className="h-12 w-1 bg-[#020617]"></div> */}
            <MagicButton
              title="Message"
              icon={<FaLocationArrow />}
              position="right"
              handleClick={() => (window.location.href = 'mailto:deulo.dev@gmail.com')}
              otherClasses="bg-transparent"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{y: -100, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{
            delay: 0.5,
            type: 'spring',
            stiffness: 120,
          }}>
          <Image
            src={ME}
            alt="Francis Photo"
            width={300}
            height={300}
            className="rounded-3xl border-8 border-[#373737] w-60 h-65 sm:w-72 sm:h-82 md:w-86 md:h-94"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
