import {AnimatedSection} from "@/components/Animated-Section";
import {ProjectCard} from "@/components/experience-card";

import {Card, CardContent} from "@/components/ui/card";
import {getExperienceInfo} from "@/lib/data";
import {BriefcaseIcon} from "lucide-react";

const Page = () => {
  const experienceInfo = getExperienceInfo();
  return (
    <div className="md:container mx-auto mt-20">
      <AnimatedSection animation="fade-up">
        <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center mb-4 sm:mb-6">
              <BriefcaseIcon className="w-5 h-5 mr-2 text-cyan-400" />
              <h3 className="text-lg font-medium">Works</h3>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {experienceInfo.map((experience, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={100 * (index + 1)}>
                  <ProjectCard
                    role={experience.role}
                    title={experience.title}
                    entity={experience.entity!}
                    period={experience.period}
                    description={experience.description}
                    achievements={experience.achievements}
                    technologies={experience.technologies}
                    projectLink={experience.projectLink}
                    githubLink={experience.githubLink}
                    imageUrl={experience.imageUrl}
                    type={experience.type}
                  />
                </AnimatedSection>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
};
export default Page;
