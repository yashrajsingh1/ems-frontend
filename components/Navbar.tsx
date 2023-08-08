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
  { href: "/product", label: "Product" },
  { href: "/about", label: "About Us" },
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
      className="hidden md:block bg-slate-50"
    >
      <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo />
            <span className="ml-4 font-Logo text-[30px]">OpenPolticia</span>
          </div>
          <div className="hidden md:block flex-shrink-0 ">
            <div className="ml-16 flex items-center justify-center space-x-8 ">
              {navLinks.map((link, index) => (
                <NavLink key={index} href={link.href} label={link.label} />
              ))}
            </div>
          </div>
          <div className="flex justify-center space-x-2 ml-2">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500  dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black hover:text-black/60 dark:bg-gray-900 rounded-md ">
                Log in
              </span>
            </button>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-black/90   hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-[120] bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Sign Up
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
