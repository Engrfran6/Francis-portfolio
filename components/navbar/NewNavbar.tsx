"use client";

import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";
import {useState} from "react";
import {FaHome} from "react-icons/fa";
import {FaBlog, FaEnvelope, FaFolderOpen, FaUser} from "react-icons/fa6";
import Hamburger from "./Hamburger";

const NewNavbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    {title: "Home", href: "/", icon: <FaHome />},
    {title: "About me", href: "/about", icon: <FaUser />},
    {title: "My portfolio", href: "/portfolio", icon: <FaFolderOpen />},
    {title: "Contact me", href: "/contact", icon: <FaEnvelope />},
    {title: "Blog posts", href: "/blog", icon: <FaBlog />},
  ];

  return (
    <nav>
      <Hamburger open={open} setOpen={setOpen} />

      <AnimatePresence>
        {open && (
          <>
            {/* Optional dark backdrop */}
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.3}}
              className="fixed inset-0 bg-black/10 bg-opacity-50 z-40"
              onClick={() => setOpen(false)}
            />

            {/* Sliding menu */}
            <motion.div
              key="menu"
              initial={{x: -300, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              exit={{x: -300, opacity: 0}}
              transition={{type: "spring", stiffness: 300, damping: 30}}
              className="flex flex-col gap-4 fixed top-28 left-4 z-50">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="w-full max-w-xs bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] rounded-xl p-5 text-center shadow-md border border-[hsl(var(--border))] hover:bg-[hsl(var(--accent))] transition duration-200 flex items-center gap-3 justify-start">
                  <span className="text-xl text-[hsl(var(--accent-foreground))]">{link.icon}</span>
                  <Link
                    href={link.href}
                    className="text-lg font-semibold tracking-wide hover:text-[hsl(var(--accent-foreground))]">
                    {link.title}
                  </Link>
                </div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NewNavbar;
