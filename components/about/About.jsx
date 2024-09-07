'use client';

import './about.css';
import ME from '../image/Francis.jpeg';
import Image from 'next/image';
import {MdEmail} from 'react-icons/md';
import {FaRegStar} from 'react-icons/fa';
import {RiHomeOfficeLine} from 'react-icons/ri';
import {SlLocationPin} from 'react-icons/sl';
import Typscript from '../../tools/typescript.svg';
import NextJs from '../../tools/nextjs.webp';
import NextJs2 from '../../tools/next.svg';
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

  const projectsCompleted = projectList.length + 10;

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
    <section className="about_container">
      <div className="about_me">
        <h2 className="sub_heading">
          About <span className="text-purple">me</span>
        </h2>
        <div className="about_content">
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
              <button onClick={toggleReadMore}>{isReadMore ? 'Red Less' : 'Read More'}</button>
            </p>
          </div>

          <div className="about_card">
            <div className="highlight">
              <h2 className="highlight_heading">Highlights</h2>
              <div className="profile">
                <div className="profile_image">
                  <Image
                    src={ME}
                    width={500}
                    height={500}
                    quality={100}
                    priority={true}
                    style={{objectFit: 'contain'}}
                    alt="Picture of Francis Uloho Okpoluaefe _ Frontent Developer"
                  />
                </div>
                <ul>
                  <li>
                    <FaRegStar />
                    <span>Front-End Developer</span>
                  </li>
                  <li>
                    <SlLocationPin />
                    <span>PortHacourt, NG</span>
                  </li>
                  <li>
                    <RiHomeOfficeLine />
                    <span>Franlancer</span>
                  </li>
                </ul>
              </div>

              <div className="project_deployed">
                <div className="years_of-experience">
                  <span>{numberOfYears}+</span>
                  <p>Years of experience</p>
                </div>
                <div className="projects_completed">
                  <span>{projectsCompleted}+</span>
                  <p>Projects Completed</p>
                </div>
              </div>

              <div className="position_description">
                <p>Fullstack experience (frontend heavy)</p>
              </div>
            </div>

            <div className="favourite_tools">
              <div className="favourite">
                <h2 className="favourite_heading">Favourite tools</h2>
                <ul>
                  <li>
                    <Image width={40} height={40} alt="ReactJs" src={ReactJs} title="ReactJs" />
                    <span>ReactJS</span>
                  </li>
                  <li>
                    <Image
                      width={40}
                      height={40}
                      alt="Typescript"
                      src={Typscript}
                      title="Typescript"
                    />
                    <span> Typescript</span>
                  </li>
                  <li>
                    <Image width={40} height={40} alt="Figma" src={Figma} title="Figma" />
                  </li>

                  <li>
                    <Image width={40} height={40} alt="NextJS" src={NextJs} title="NextJS" />
                    <span> NextJs</span>
                  </li>
                  <li>
                    <Image width={70} height={70} alt="NextJS" src={NextJs2} title="NextJS" />
                    <span> NextJs</span>
                  </li>
                  <li>
                    <Image width={40} height={40} alt="NodeJS" src={NodeJs} title="NodeJS" />
                    <span> NodeJS </span>
                  </li>
                </ul>
              </div>

              <div className="connect_links">
                <h2 className="connect_link-heading">Connect</h2>
                <ul>
                  <li>
                    <a
                      href="https://github.com/Engrfran6"
                      target="_blank"
                      rel="noopener noreferrer">
                      <MdEmail />
                      <span>Email</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/deulo"
                      target="_blank"
                      rel="noopener noreferrer">
                      <BsLinkedin />
                      <span>Linkedin </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Engrfran6"
                      target="_blank"
                      rel="noopener noreferrer">
                      <AiOutlineGithub />
                      <span> GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/deulodev" target="_blank" rel="noopener noreferrer">
                      <BsTwitterX />
                      <span> Twitter </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="key_skills">
            <h2 className="key_skills-heading">Key Skills</h2>
            <ul>
              <li>Front-End Development: React, Next.js, Redux, Recoil, JavaScript, HTML5, CSS3</li>
              <li>Back-End Development: Node.js, Express.js, Firebase, Appwrite </li>
              <li>Design Frameworks: Tailwind CSS, Bootstrap, Vanilla CSS, Styled Components</li>
              <li>Version Control: Git, GitFlow</li>
              <li>Responsive Design: Mobile-first approach, cross-browser compatibility</li>
              <li>
                Certifications: Front-End Developer Professional Certificate from Meta And Front-End
                Developer (React) Certificate from HackerRank
              </li>
              <li>Collaborative Tools: GitHub, Jira, Slack</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ==============================coming soon=============================== */}
      <div className="communities">
        <h2 className="sub_heading">
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
        <h2 className="sub_heading">
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
        <h2 className="sub_heading">
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
