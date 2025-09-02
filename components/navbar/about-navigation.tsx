"use client";

import {getAboutNavItems} from "@/lib/data";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {useEffect, useState} from "react";

export function AboutNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = getAboutNavItems();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = navItems
        .filter((item) => item.href.startsWith("#"))
        .map((item) => item.href.substring(1));

      // Find the current section in view
      for (const section of sections.reverse()) {
        // Check from bottom to top
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            // If section is at or above 150px from viewport top
            setActiveSection(section);
            break;
          }
        }
      }

      // If scrolled to top, set Home as active
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <header className="sticky top-20 self-start hidden lg:block">
      <div className="px-4">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-col items-start space-x-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? activeSection === "" : activeSection === item.href.substring(1);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm relative group transition-all duration-300",
                  isActive ? "text-cyan-400" : "text-zinc-400 hover:text-white"
                )}>
                <span className="relative z-10">{item.label}</span>

                <span className="absolute inset-0 bg-cyan-500/0 rounded-md group-hover:bg-cyan-500/10 transition-all duration-300"></span>

                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-4/5",
                    isActive && "w-4/5"
                  )}></span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
