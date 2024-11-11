'use client';

import {aboutMe, projectList} from '@/data';
import {useRef, useState} from 'react';
import Wrapper from '../Wrapper';
import './about.css';

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

  const projectsCompleted = projectList?.length + 25;

  const [isReadMore, setIsReadMore] = useState(false);
  const containerRef = useRef(null);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <section id="about" className=" bg-[#272727]">
      <Wrapper className="px-4 text-sm md:text-[16px] leading-6 md:p-20">
        <div className="about_me">
          <h2 className="about_heading">
            About <span className="text-purple">me</span>
          </h2>
          <div className="about_content ">
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
                    color: isReadMore === 'Read More' || 'Read Less' ? 'white' : '',
                    textDecoration: 'underline',
                    padding: '0 0.3rem',
                    fontWeight: 'bold',
                  }}>
                  {isReadMore ? 'Red Less' : 'Read More'}
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* ==============================coming soon=============================== */}
        <div className="communities">
          <h2 className="community_heading">
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
          <h2 className="journey_heading ">
            Jour<span className="text-purple">ney</span>
          </h2>
          <p>COMING SOON!</p>
          {/* <p>
          He currently works at checkout.com's Headquater in London (UK) with the Fraud Detection
          team to facilitate secure payments across the world, mitigate fraud, and maximize approval
          rates, <span>read more</span>.
        </p>
        <p>
          Checkout.com, is an international financial technology company which processes payments
          for other companies. Founded as Opus Payments in 2009, it is headquartered in London,
          United Kingdom. It had a valuation of $40 billion USD in 2022, making it the most valuable
          European fintech startup.
        </p>
        <p>
          Prior to checkout.com, he worked at Kloud Commerce (formerly PayPecker) as the Frontend
          Lead, where he collaborativley pioneered the development of a customer-facing and
          merchant-facing e-commerce/FinTech solution which facilitated synchronized sales data
          across multiple channels (e.g. Woo-Commerce and Point of Sale (P.O.S) outlets in multiple
          locations) with internal tools for administrative management e.g. handling Know Your
          Customer (K.Y.C) processes, <span>read more</span>.
        </p>
        <p>
          Over the years, he has consulted for and worked with different companies in diverse
          industries & sectors like Advertising & Marketing, Oil & gas, Education e.t.c in designing
          and building solutions from the ground up through the SDLC (Software Development Life
          Cycle) from conceptualisation/ideation phase to production stage with the company's OKRs
          (Objective Key Results) in view.
        </p> */}
        </div>

        <div className="hobbies">
          <h2 className="text-2xl border-b mb-2">
            Ho<span className="text-purple">bbies</span>
          </h2>
          <p>
            Although not deeply into music, Francis enjoys it, with Jon Bellion&apos;s songs being
            among his favorites. A creative at heart, he loves traveling, exploring, and
            appreciating art. When he&apos;s not immersed in writing code, designing, building, or
            learning something new, you&apos;ll likely find him playing video games (FIFA, PES,
            Mortal Kombat), swimming, playing a game of snooker, catching up with family, friends,
            and acquaintances, or simply enjoying some downtime with good food and rest.
          </p>
        </div>
      </Wrapper>
    </section>
  );
}
