import HeroBackground from "@/components/HeroBackground";
import MagicButton from "@/components/MagicButton";
import {getNavItems, getPersonalInfo} from "@/lib/data";
import Link from "next/link";
import {FaBlog, FaEnvelope, FaFileAlt, FaFolderOpen, FaUser} from "react-icons/fa";
import {FaLocationArrow} from "react-icons/fa6";
import {SocialLinks} from "./social-links";

const HeroMobile = () => {
  const links = getNavItems();
  const personalInfo = getPersonalInfo();

  const iconComponents = {
    FaUser: <FaUser />,
    FaFolderOpen: <FaFolderOpen />,
    FaEnvelope: <FaEnvelope />,
    FaBlog: <FaBlog />,
    FaFileAlt: <FaFileAlt />,
  };

  type IconKey = keyof typeof iconComponents;

  const linksWithIcons = links
    .filter((link) => link.href !== "/")
    .map((link) => ({
      ...link,
      iconComponent: iconComponents[link.icon as IconKey] || null,
    }));

  return (
    <div className="relative flex flex-col items-center justify-center gap-6 px-6 py-10 min-h-screen sm:hidden text-[hsl(var(--foreground))]">
      <HeroBackground />

      {linksWithIcons.map((link, index) => (
        <div
          key={index}
          className="w-full  max-w-xs bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] rounded-xl p-5 text-center shadow-md border border-[hsl(var(--border))] hover:bg-[hsl(var(--accent))] transition duration-200 relative z-10 flex items-center gap-3 justify-start">
          {link.icon && (
            <span className="text-xl text-[hsl(var(--accent-foreground))]">
              {link.iconComponent}
            </span>
          )}
          <Link
            href={link.href}
            className="text-lg font-semibold tracking-wide hover:text-[hsl(var(--accent-foreground))]">
            {link.label}
          </Link>
        </div>
      ))}

      <div className="mt-10">
        {/* <Socials /> */}
        <SocialLinks socialLinks={personalInfo.social} />
      </div>

      <div className="action flex items-center gap-4 mt-10">
        <MagicButton
          title="Book call"
          icon={<FaLocationArrow />}
          position="right"
          handleClick={() =>
            window.open(
              "https://calendly.com/deulo-careers/meeting-with-francis-u-okpoluaefe",
              "_blank"
            )
          }
        />
        <MagicButton
          title="Message"
          icon={<FaLocationArrow />}
          position="right"
          handleClick={() => (window.location.href = "mailto:deulo.dev@gmail.com")}
          className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border border-[hsl(var(--border))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]"
        />
      </div>
    </div>
  );
};
export default HeroMobile;
