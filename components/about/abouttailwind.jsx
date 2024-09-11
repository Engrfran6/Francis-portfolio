'use client';

import ME from '../image/Francis.jpeg';
import Image from 'next/image';
import {MdEmail} from 'react-icons/md';
import {FaRegStar} from 'react-icons/fa';
import {RiHomeOfficeLine} from 'react-icons/ri';
import {SlLocationPin} from 'react-icons/sl';
import Typescript from '../../tools/typescript.svg';
import NextJs from '../../tools/nextjs.webp';
import NodeJs from '../../tools/nodejs.png';
import Figma from '../../tools/figma.png';
import ReactJs from '../../tools/react.png';
import {BsLinkedin, BsTwitterX} from 'react-icons/bs';
import {AiOutlineGithub} from 'react-icons/ai';
import {useEffect, useRef, useState} from 'react';
import {projectList} from '../projectList';
import {aboutMe} from '@/data';

export default function About() {
  const startYear = 2020;
  const startMonth = 3;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Calculate years of experience
  let numberOfYears = currentYear - startYear;
  if (currentMonth < startMonth) {
    numberOfYears -= 1;
  }

  const projectsCompleted = projectList.length + 30;

  const [isReadMore, setIsReadMore] = useState(false);
  const containerRef = useRef(null);
  const [readingTime, setReadingTime] = useState(0);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsReadMore(false); // Collapse the section when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // useEffect(() => {
  //   const time = calculateReadingTime(description);
  //   setReadingTime(time);
  // }, [description]);
  return (
    <section className="w-full flex flex-col gap-10 p-4">
      {/* about me */}
      <div className="w-full">
        <h2 className="text-xl border-b border-white/10 mb-2">
          About <span className="text-purple">me</span>
        </h2>
        <div ref={containerRef} className="about_me-text ">
          <p className="">
            {aboutMe.about.paragragh1}
            {isReadMore && (
              <p style={{display: 'flex', flexDirection: 'column', gap: '.8rem'}}>
                <br />
                {aboutMe.about.paragragh2}
                <n />
                {aboutMe.about.paragragh3}
                <n />
                {aboutMe.about.paragragh4}
              </p>
            )}
            <button
              onClick={toggleReadMore}
              style={{
                textDecoration: isReadMore === 'Read Less' || 'Read More' ? 'underline' : '',
                color: 'purple',
              }}>
              {isReadMore ? 'Read Less' : 'Read More'}
            </button>
          </p>
        </div>
      </div>

      {/* about me cards */}
      <div className="w-4/5 mx-auto flex justify-center gap-6">
        {/* highlights */}
        <div className="w-2/5 flex flex-col bg-black rounded-md p-3 border border-white/10">
          <h2 className="text-xl border-b border-white/10 mb-2">Highlights</h2>
          <div>
            <div className="flex items-center gap-5">
              <div>
                <Image
                  className="w-full h-full rounded-[1rem] object-contain"
                  src={ME}
                  width={70}
                  height={100}
                  quality={100}
                  priority={true}
                  alt="Picture of Francis Uloho Okpoluaefe _ Frontend Developer"
                />
              </div>
              <ul className="w-[70%] text-sm flex flex-col gap-1">
                <li className="flex items-center gap-2">
                  <FaRegStar />
                  <span>Front-End Developer</span>
                </li>
                <li className="flex items-center gap-2">
                  <SlLocationPin />
                  <span>Port Harcourt, NG</span>
                </li>
                <li className="flex items-center gap-2">
                  <RiHomeOfficeLine />
                  <span>Freelancer</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4 w-max">
              <div className="text-center p-2 rounded-md mt-5 bg-gray-120">
                <span className="text-2xl">{numberOfYears}+</span>
                <p className="text-sm">Years of experience</p>
              </div>
              <div className="text-center p-2 rounded-md mt-5 bg-gray-120">
                <span className="text-2xl">{projectsCompleted}+</span>
                <p className="text-sm">Projects Completed</p>
              </div>
            </div>

            <p className="py-2 px-4 text-center rounded-md mt-5 bg-gray-120">
              Fullstack experience (frontend heavy)
            </p>
          </div>
        </div>

        <div className="max-w-lg h-full flex flex-col justify-between bg-black rounded-md p-3 border border-white/10">
          {/* favourite */}
          <div className="favourite">
            <h2 className="text-xl border-b border-white/10 mb-2">Favourite tools</h2>
            <ul className="flex flex-wrap items-center gap-3 text-sm">
              <li className="flex items-center gap-1">
                <Image width={30} height={30} alt="ReactJs" src={ReactJs} title="ReactJs" />
                <span>ReactJS</span>
              </li>
              <li className="flex items-center gap-1">
                <Image
                  width={30}
                  height={30}
                  alt="Typescript"
                  src={Typescript}
                  title="Typescript"
                />
                <span>Typescript</span>
              </li>
              <li className="flex items-center gap-1">
                <Image width={30} height={30} alt="Figma" src={Figma} title="Figma" />
              </li>
              <li className="flex items-center gap-1">
                <Image width={30} height={30} alt="NextJS" src={NextJs} title="NextJS" />
                <span>NextJs</span>
              </li>
              <li className="flex items-center gap-1">
                <Image width={30} height={30} alt="NodeJS" src={NodeJs} title="NodeJS" />
                <span>NodeJS</span>
              </li>
            </ul>
          </div>

          {/* connects */}
          <div className="">
            <h2 className="text-xl border-b border-white/10 mb-2">Connect</h2>
            <ul className="flex flex-wrap items-center gap-3 text-sm">
              <li className="py-1 px-3 bg-gray-120 rounded">
                <a
                  className="flex items-center gap-1"
                  href="https://github.com/Engrfran6"
                  target="_blank"
                  rel="noopener noreferrer">
                  <MdEmail />
                  <span>Email</span>
                </a>
              </li>
              <li className="py-1 px-3 bg-gray-120 rounded">
                <a
                  className="flex items-center gap-1"
                  href="https://linkedin.com/in/deulo"
                  target="_blank"
                  rel="noopener noreferrer">
                  <BsLinkedin />
                  <span>Linkedin</span>
                </a>
              </li>
              <li className="py-1 px-3 bg-gray-120 rounded">
                <a
                  className="flex items-center gap-1"
                  href="https://github.com/Engrfran6"
                  target="_blank"
                  rel="noopener noreferrer">
                  <AiOutlineGithub />
                  <span>GitHub</span>
                </a>
              </li>
              <li className="py-1 px-3 bg-gray-120 rounded">
                <a
                  className="flex items-center gap-1"
                  href="https://x.com/deulodev"
                  target="_blank"
                  rel="noopener noreferrer">
                  <BsTwitterX />
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* about  me skills */}
      <div className="key_skills w-full bg-black rounded-md p-3 pt-1 pb-1 pl-1 pr-1 border border-white/10">
        <h2 className="text-xl border-b border-white/10 mb-2">
          Key <span className="text-purple">Skills</span>
        </h2>
        <ul className="key_skills-list flex flex-col gap-[0.6rem] pl-[1.5rem]">
          <li className="key_skills-listitems p-[0.3rem 0.5rem] bg-[#111111] rounded-md text-[0.9rem] list-disc">
            Front-End Development: React, Next.js, Redux, Recoil, JavaScript, HTML5, CSS3
          </li>
          <li className="p-[0.3rem 0.5rem] bg-[#111111] rounded-md text-[0.9rem] list-disc">
            Back-End Development: Node.js, Express.js, Firebase, Appwrite{' '}
          </li>
          <li className="p-[0.3rem 0.5rem] bg-[#111111] rounded-md text-[0.9rem] list-disc">
            Design Frameworks: Tailwind CSS, Bootstrap, Vanilla CSS, Styled Components
          </li>
          <li className="p-[0.3rem 0.5rem] bg-[#111111] rounded-md text-[0.9rem] list-disc">
            Version Control: Git, GitFlow
          </li>
          <li className="p-[0.3rem 0.5rem] bg-[#111111] rounded-md text-[0.9rem] list-disc">
            Responsive Design: Mobile-first approach, cross-browser compatibility
          </li>
          <li className="p-[0.3rem 0.5rem] bg-[#111111] rounded-md text-[0.9rem] list-disc">
            Certifications: Front-End Developer Professional Certificate from Meta And Front-End
            Developer (React) Certificate from HackerRank
          </li>
          <li className="p-[0.3rem 0.5rem] bg-[#111111] rounded-md text-[0.9rem] list-disc">
            Collaborative Tools: GitHub, Jira, Slack
          </li>
        </ul>
      </div>

      {/* ==============================coming soon=============================== */}
      <div className="communities">
        <h2 className="text-xl border-b border-white/10 mb-2">
          Com<span className="text-purple">munities</span>
        </h2>

        <p>COMING SOON!</p>
        {/* <div>
            <p>
              I contribute to many communities in different forms, to mention a few, I am a
              contributor/mentor at ForbesBLK, Calyptus, and ADPList, amongst others.
            </p>

            <div>
              <div>
                <span>Logo</span>
                <h2>AppList</h2>
              </div>
              <div>
                <p>
                  Join ADPList as a mentee or mentor with this <span>referral link.</span>
                  <a href="/">Book mentorship session</a>
                </p>
              </div>
            </div>
          </div> */}
      </div>

      {/* ==============================coming soon=============================== */}

      <div className="tech_journey">
        <h2 className="text-xl border-b border-white/10 mb-2">
          Jour<span className="text-purple">ney</span>
        </h2>
        <p>COMING SOON!</p>
        {/* <p>
              He currently works at checkout.com's Headquater in London (UK) with the Fraud
              Detection team to facilitate secure payments across the world, mitigate fraud, and
              maximize approval rates, <span>read more</span>.
            </p>
            <p>
              Checkout.com, is an international financial technology company which processes
              payments for other companies. Founded as Opus Payments in 2009, it is headquartered in
              London, United Kingdom. It had a valuation of $40 billion USD in 2022, making it the
              most valuable European fintech startup.
            </p>
            <p>
              Prior to checkout.com, he worked at Kloud Commerce (formerly PayPecker) as the
              Frontend Lead, where he collaborativley pioneered the development of a customer-facing
              and merchant-facing e-commerce/FinTech solution which facilitated synchronized sales
              data across multiple channels (e.g. Woo-Commerce and Point of Sale (P.O.S) outlets in
              multiple locations) with internal tools for administrative management e.g. handling
              Know Your Customer (K.Y.C) processes, <span>read more</span>.
            </p>
            <p>
              Over the years, he has consulted for and worked with different companies in diverse
              industries & sectors like Advertising & Marketing, Oil & gas, Education e.t.c in
              designing and building solutions from the ground up through the SDLC (Software
              Development Life Cycle) from conceptualisation/ideation phase to production stage with
              the company's OKRs (Objective Key Results) in view.
            </p> */}
      </div>

      <div className="hobbies">
        <h2 className="text-xl border-b border-white/10 mb-2">
          Ho<span className="text-purple">bbies</span>
        </h2>
        <p>
          Although not deeply into music, Francis enjoys it, with Jon Bellion&apos;s songs being
          among his favorites. A creative at heart, he loves traveling, exploring, and appreciating
          art. When he&apos;s not immersed in writing code, designing, building, or learning
          something new, you&apos;ll likely find him playing video games (FIFA, PES, Mortal Kombat),
          swimming, playing a game of snooker, catching up with family, friends, and acquaintances,
          or simply enjoying some downtime with good food and rest.
        </p>
      </div>
    </section>
  );
}
