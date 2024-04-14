"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import Logo from "./Logo";
import NavLink from "./NavLink";

interface NavItem {
  href: string;
  label: string;
}

const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/agenda", label: "Our Agenda" },
];

const Navbar: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={controls}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="hidden md:block "
    >
      <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo />
            <span className="mt-4 font-Poppins  text-3xl">Bharatiya Liberal Party</span>

          </div>
          <div className="hidden md:block flex-shrink-0 ">
            <div className="ml-16 flex items-center justify-center space-x-8 ">
              {navLinks.map((link, index) => (
                <NavLink key={index} href={link.href} label={link.label} />
              ))}
            </div>
          </div>
          <div className="flex justify-center space-x-2 ml-2">
          
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  Join us
</button>



          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
