import {Badge} from "@/components/ui/badge";
import {cn} from "@/lib/utils";
import {ArrowUpRight, CheckCircle2} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {Card} from "./ui/card";

interface ProjectCardProps {
  role: string;
  title: string;
  entity: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  imageUrl?: string;
  projectLink?: string;
  githubLink?: string;
  type?: string;
}

export function ProjectCard({
  role,
  title,
  entity,
  period,
  description,
  achievements,
  technologies,
  imageUrl,
  projectLink,
  githubLink,
  type = "professional",
}: ProjectCardProps) {
  const renderImageSection = () => {
    if (!imageUrl) {
      return <div className="mb-4"></div>;
    }

    const imageContent = (
      <Card className="bg-zinc-800/50 border-zinc-700 overflow-hidden group hover:border-cyan-500/50 transition-all h-40 sm:h-48">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={`Screenshot of the ${title} project`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={false}
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div> */}
        </div>
      </Card>
    );

    if (projectLink) {
      return (
        <Link
          href={projectLink}
          className="block h-full mb-4"
          aria-label={`View details of the ${title} project`}
          target="_blank"
          rel="noopener noreferrer">
          {imageContent}
        </Link>
      );
    }

    return <div className="mb-4">{imageContent}</div>;
  };

  const getTypeBadgeVariant = (type: string) => {
    switch (type) {
      case "professional":
        return "default";
      case "personal":
        return "outline";
      default:
        return "outline";
    }
  };

  return (
    <div className="border-b bg-black p-4 sm:p-8 rounded-md border-zinc-800 last:border-0">
      <div className="space-y-4 pb-2">
        {/* Header with Type Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
          <div className="flex items-start gap-2">
            <div>
              <h4 className="font-medium text-base sm:text-lg">{role}</h4>

              {projectLink && imageUrl && (
                <Link
                  href={projectLink}
                  className="relative font-light group inline-block"
                  target="_blank"
                  rel="noopener noreferrer">
                  <div>
                    <span className="text-sm text-cyan-400"> {entity}</span>
                    <span className="px-1">|</span>
                    <span className="text-sm text-cyan-200">{title}</span>
                  </div>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5  bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )}
            </div>
            <Badge
              variant={getTypeBadgeVariant(type)}
              className={`text-[10px] capitalize ${
                type === "professional"
                  ? "bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30"
                  : "bg-green-500/20 text-green-300 border-green-500/30 hover:bg-green-500/30"
              }`}>
              {type}
            </Badge>
          </div>
          <div className="text-xs text-zinc-400 bg-zinc-800/70 px-2 py-1 sm:px-3 sm:py-1 rounded-full self-start mt-1 sm:mt-0 sm:self-auto">
            {period}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-300">{description}</p>

        <div
          className={cn(
            "space-y-6 sm:space-y-0",
            imageUrl && "grid grid-cols-1 md:grid-cols-3  md:gap-10"
          )}>
          <div className={cn("space-y-4", imageUrl && "col-span-2 ")}>
            {/* Key Achievements */}
            <div className="space-y-3">
              <h5 className="text-sm font-medium text-zinc-400">Key Achievements</h5>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Technologies & Skills */}
            <div>
              <h5 className="text-sm font-medium text-zinc-400 mb-2">Technologies & Skills</h5>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs bg-zinc-800/50 hover:bg-zinc-800 text-zinc-200">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {renderImageSection()}
        </div>

        <div className="pt-6 flex items-center gap-8">
          {projectLink && imageUrl && (
            <Link
              href={projectLink}
              className="group relative text-sm text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer">
              View Live Project <ArrowUpRight size={16} />
              <span className="absolute bottom-0 left-0 w-0 h-0.5  bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          )}

          {githubLink && type !== "professional" && (
            <Link
              href={githubLink}
              className="group relative text-sm text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer">
              View codebase <ArrowUpRight size={16} />
              <span className="absolute bottom-0 left-0 w-0 h-0.5  bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
