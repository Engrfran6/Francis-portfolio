"use client";

import {AnimatedSection} from "@/components/Animated-Section";
import {Card, CardContent} from "@/components/ui/card";
import {getAboutInfo, getTechnicalSkillsInfo} from "@/lib/data";

import {CredentialsSection} from "@/components/credentials-section";
import {EnhancedProfile} from "@/components/enhance-profile";
import {AboutNavigation} from "@/components/navbar/about-navigation";
import {CodeIcon} from "lucide-react";
import Link from "next/link";
import type React from "react";

const SkillTagComponent = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="px-2 py-1 bg-zinc-800 rounded-full text-xs font-medium text-zinc-400">
      {children}
    </div>
  );
};

const AboutMe = () => {
  const technicalSkills = getTechnicalSkillsInfo();
  const aboutInfo = getAboutInfo();
  return (
    <div className="flex container mx-auto p-3 sm:p-4 pt-20 sm:pt-24 pb-6 sm:pb-8">
      <section className="flex flex-col justify-center items-center md:gap-32 md:pb-32">
        <div className="relative z-10">
          {/* Main Content Grid */}
          <div className="">
            {/* Enhanced Profile Section */}
            <div className="w-full">
              <AnimatedSection animation="slide-right">
                <EnhancedProfile />
              </AnimatedSection>
            </div>

            <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-4 sm:space-y-6 ">
              {/* Skills Section */}
              <AnimatedSection animation="fade-up" id="skills">
                <Card className="bg-black border-zinc-800 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center mb-4">
                      <CodeIcon className="w-5 h-5 mr-2 text-cyan-400" />
                      <h3 className="text-lg font-medium">Technical Skills</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      {Object.entries(technicalSkills).map(([category, skills], index) => (
                        <AnimatedSection
                          key={category}
                          animation={index % 2 === 0 ? "slide-right" : "slide-left"}
                          delay={100 * (index + 1)}>
                          <div className="space-y-3">
                            <h4 className="text-sm font-medium text-zinc-400 capitalize">
                              {category
                                .replace(/([A-Z])/g, " $1")
                                .replace(/^./, (str) => str.toUpperCase())}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {skills.map((skill, i) => (
                                <SkillTagComponent key={i}>
                                  <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className="w-4 h-4 mr-1 inline-block"
                                  />
                                  {skill.name}
                                </SkillTagComponent>
                              ))}
                            </div>
                          </div>
                        </AnimatedSection>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Credentials Section */}
              <AnimatedSection animation="fade-up" id="credentials">
                <CredentialsSection />
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fade-up" id="credentials">
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm mt-6">
                <CardContent className="p-4 sm:p-6 text-lg">
                  I've leveraged these skills to build products like{" "}
                  <a href="" className="text-blue-200 underline">
                    huntledger.com
                  </a>
                  , a job application tracker, and contributed to{" "}
                  <a href="" className="text-blue-200 underline">
                    clusta.co
                  </a>
                  , an estate management platform. You can explore these projects in detail{" "}
                  <Link href="/experience" className="italic underline text-blue-500">
                    here
                  </Link>
                  .
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <AboutNavigation />
    </div>
  );
};
export default AboutMe;
