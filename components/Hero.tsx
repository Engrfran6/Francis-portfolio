"use client";

import {getPersonalInfo} from "@/lib/data";
import {motion} from "framer-motion";
import {ArrowUpRight} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroBackground from "./HeroBackground";
import ME from "./image/profilephoto.png";
import MagicButton from "./MagicButton";
import {SocialLinks} from "./social-links";

const Hero = () => {
  const personalInfo = getPersonalInfo();
  return (
    <div className="container flex flex-col items-center justify-center h-[95vh]">
      <HeroBackground />

      <div className="hidden md:flex flex-row gap-[10%] items-center justify-center h-full z-10  mx-auto">
        <div className="flex flex-1 flex-col justify-center gap-8">
          <h3 className="text-6xl font-extrabold uppercase text-white-100/95">
            {personalInfo.title}
          </h3>

          <motion.div
            initial={{y: -60, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{
              delay: 0.1,
              type: "spring",
              stiffness: 120,
            }}>
            <motion.span className="text-white/50 text-2xl leading-10 tracking-wide pt-0">
              <span className="highlight">A {personalInfo.title} with Full-Stack Proficiency.</span>{" "}
              I specialize in building modern, scalable, and user-centric web applications with{" "}
              <span className="highlight">React, Next.js, and TypeScript</span> which I leverage
              alongside the{" "}
              <span className="highlight">MERN stack (MongoDB, Express.js, Node.js)</span> to
              deliver complete and performant full-stack solutions...
            </motion.span>

            <motion.span
              className="inline-flex font-bold text-sm md:text-xl transition-transform duration-300 group-hover:scale-105 group"
              initial={{x: 100, y: 100, opacity: 0}}
              animate={{x: 0, y: 0, opacity: 1}}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 120,
              }}>
              <Link href="/about" passHref legacyBehavior>
                <a className="relative underline underline-offset-8 decoration-1 hover:no-underline">
                  Read more
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </Link>
            </motion.span>
          </motion.div>

          <motion.div
            className="flex gap-2 md:gap-8 items-end mt-8 md:mt-4 justify-center sm:justify-start"
            initial={{x: 100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{
              delay: 0.9,
              type: "spring",
              stiffness: 120,
            }}>
            <div className="flex items-center md:gap-3 gap-6 ">
              <SocialLinks socialLinks={personalInfo.social} />
            </div>

            <a href="https://calendly.com/deulo-careers/meeting-with-francis-u-okpoluaefe">
              <MagicButton
                title="Book call"
                icon={<ArrowUpRight size={16} />}
                position="right"
                className="bg-cyan-400/60 text-white  hover:bg-[hsl(var(--accent))]/60"
              />
            </a>

            <MagicButton
              title="Message"
              icon={<ArrowUpRight size={16} />}
              position="right"
              handleClick={() => (window.location.href = "mailto:deulo.dev@gmail.com")}
              // otherClasses="bg-transparent"
              className="hover:border hover:border-cyan-400/60 text-cyan-400/60"
            />
          </motion.div>
        </div>

        <motion.div
          className=""
          initial={{y: -100, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{
            delay: 0.5,
            type: "spring",
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
