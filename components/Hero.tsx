import {FaLocationArrow} from 'react-icons/fa6';
import {motion} from 'framer-motion';
import MagicButton from './MagicButton';
import {Spotlight} from './ui/Spotlight';
import {TextGenerateEffect} from './ui/TextGenerateEffect';
import {socialMedia} from '@/data';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="">
      {/* <div>
        <Spotlight className=" -top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full overflow-hidden" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div> */}

      <div
        className="h-screen w-full dark:bg-[#111111] bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#111111]
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-start md:justify-center flex-col items-center relative my-20 z-10 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
        <motion.h3
          className="py-3 px-1 md:px-6 md:rounded md:bg-black-300 text-sm md:text-xl"
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
          words="   A Full-Stack Software Engineer with a strong focus on frontend development,
          dedicated to turning complex challenges into scalable, user-friendly solutions by blending
          innovative design and cutting-edge technology,"
          className="text-center  text-[16px]  md:text-3xl lg:text-4xl"
        />

        <motion.div
          className="flex gap-2 md:gap-8 items-end mt-8 md:mt-4"
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
    </div>
  );
};

export default Hero;
