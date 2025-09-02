"use client";

import {getNavItems, getPersonalInfo} from "@/lib/data";
import {cn} from "@/lib/utils";
import {ChevronLeft} from "lucide-react";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = getNavItems();
  const personalInfo = getPersonalInfo();

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 py-4")}>
      <div
        className={cn(
          "container px-4 flex items-center md:justify-between",
          pathname === "/" ? "justify-center" : "justify-start"
        )}>
        {pathname !== "/" && (
          <div className="absolute -right-4 -top-4 md:hidden bg-black-200  size-16 rounded-full flex items-center justify-center">
            <button onClick={() => router.push("/")}>
              <ChevronLeft size={40} className="font-extrabold mt-2 mr-3" />
            </button>
          </div>
        )}

        <Link href="/" className={cn("flex items-center group uppercase text-white-100/95")}>
          <div className="bg-clip-text font-bold text-sm md:text-xl relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
            {personalInfo.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5  bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </div>
          <span className="text-zinc-400 text-xs md:text-sm ml-2 transition-all duration-300 group-hover:text-zinc-300 highlight">
            / {personalInfo.title}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = item.href === pathname;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm relative group transition-all duration-300",
                  isActive ? "text-cyan-400" : "text-zinc-400 hover:text-white"
                )}>
                <span className="relative z-10 ">{item.label}</span>

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
