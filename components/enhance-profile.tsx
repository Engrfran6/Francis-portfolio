"use client";

import {Briefcase, Languages, MapPin, User} from "lucide-react";
import Image from "next/image";
import {useEffect, useState} from "react";

import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";
import {getAboutInfo, getPersonalInfo} from "@/lib/data";
import ME from "./image/profilephoto.png";
import {SocialLinks} from "./social-links";

interface GithubData {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  public_repos: number;
  top_repos: {
    name: string;
    html_url: string;
    description: string;
    stars: number;
    language: string;
  }[];
}

export function EnhancedProfile() {
  const personalInfo = getPersonalInfo();
  const aboutInfo = getAboutInfo();
  const [githubData, setGithubData] = useState<GithubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGithubInfo() {
      try {
        const res = await fetch("/api/github");
        const data = await res.json();
        setGithubData(data);
      } catch (error) {
        console.error("GitHub fetch failed:", error);
        setGithubData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchGithubInfo();
  }, []);

  return (
    <Card className="bg-black border-zinc-800 backdrop-blur-sm col-span-1 flex flex-col mb-6">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row w-full">
          {/* LEFT: Profile Sidebar */}
          <div className="md:w-[45%] bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 p-4 sm:p-6 flex flex-col items-center border-b md:border-b-0 md:border-r border-zinc-800 shadow-md rounded-lg transition hover:scale-[1.01] hover:shadow-lg duration-300">
            <div className="flex flex-col items-center w-full">
              {/* Profile Image */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 border-2 border-cyan-400/20 ring-4 ring-zinc-800/50">
                <Image
                  src={githubData?.avatar_url || ME}
                  alt={`Profile photo of ${githubData?.name || personalInfo.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Name, Title, Location */}
              <div className="text-center mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {githubData?.name || personalInfo.name}
                </h2>
                <p className="text-sm text-cyan-400">{personalInfo.title}</p>
                <div className="flex items-center justify-center text-xs text-zinc-400 mt-1">
                  <MapPin className="w-3 h-3 mr-1" aria-hidden="true" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {personalInfo.badges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-zinc-800/50 hover:bg-zinc-700 border border-zinc-700 text-xs px-3 py-1 rounded-md transition">
                    {badge}
                  </Badge>
                ))}
              </div>

              {/* GitHub Section */}
              <div className="w-full mt-6 border-t border-zinc-800 pt-4">
                {loading && (
                  <p className="text-sm text-gray-400 text-center">Loading GitHub data...</p>
                )}

                {!loading && !githubData && (
                  <p className="text-sm text-red-400 text-center">
                    Unable to load GitHub data at the moment.
                  </p>
                )}

                {githubData && (
                  <div className="flex flex-col justify-center items-center bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 text-sm space-y-2">
                    <div className="flex justify-center gap-4 text-xs text-gray-400">
                      <span>👥 {githubData.followers} followers</span>
                      <span>📦 {githubData.public_repos} repos</span>
                    </div>
                    <a
                      className="text-green-400 underline text-sm block text-center hover:text-green-300 transition"
                      href={githubData.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub profile">
                      View GitHub Profile
                    </a>
                  </div>
                )}
              </div>

              {/* Social Links */}
              <div className="mt-6 w-full">
                <SocialLinks socialLinks={personalInfo.social} />
              </div>
            </div>
          </div>

          {/* RIGHT: Main Content */}
          <div className="w-full">
            <div className="p-4 sm:p-6 space-y-6 focus:outline-none">
              {/* About Me */}
              <section className="space-y-3">
                <h3 className="text-sm font-medium text-zinc-400 flex items-center">
                  <User className="w-4 h-4 mr-2 text-cyan-400" />
                  About Me
                </h3>
                <p className="text-sm text-zinc-100">{aboutInfo.bio}</p>
              </section>

              {/* Professional Focus */}
              <section className="space-y-3 border-t border-zinc-800 pt-4">
                <h3 className="text-sm font-medium text-zinc-400 flex items-center">
                  <Briefcase className="w-4 h-4 mr-2 text-cyan-400" />
                  Professional Focus
                </h3>
                <p className="text-sm">My development approach is guided by:</p>
                <ul className="space-y-2">
                  {aboutInfo.focus.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <p className="text-sm">{item}</p>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Languages */}
              <section className="space-y-3 border-t border-zinc-800 pt-4">
                <h3 className="text-sm font-medium text-zinc-400 flex items-center">
                  <Languages className="w-4 h-4 mr-2 text-cyan-400" />
                  Languages
                </h3>
                <div className="space-y-3">
                  {aboutInfo.languages.map((language, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">{language.name}</span>
                        {/* <span className="text-xs text-zinc-400">{language.proficiency}</span> */}
                      </div>
                      {/* <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                          style={{width: `${language.level}%`}}></div>
                      </div> */}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-zinc-800 flex items-center justify-center">
          <div className="flex items-center">
            <span
              className={`w-2 h-2 rounded-full mr-2 ${
                personalInfo.availableForWork ? "bg-green-500" : "bg-red-500"
              }`}></span>
            <span className="text-xs text-zinc-400">
              {personalInfo.availableForWork
                ? "Available for new projects"
                : "Not available for new projects"}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
