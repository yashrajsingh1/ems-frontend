"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

type Props = {};

const HeroSection: React.FC<Props> = (props: Props) => {
  const textControls = useAnimation();
  const buttonControls = useAnimation();

  useEffect(() => {
    textControls.start({ opacity: 1, y: 0 });
    buttonControls.start({ opacity: 1, y: 0 });
  }, [textControls, buttonControls]);

  return (
    <div className="w-full min-h-screen bg-slate-50 rounded-lg shadow-lg">
      <div className="w-[90%] mx-auto text-center flex justify-center items-center flex-col p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={textControls}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-Poppins text-3xl md:text-5xl leading-1 truncate mt-10 md:mt-24 mb-4 md:mb-8"
        >
          <span className="inline-block">Revolutionizing</span>
          <br />
          <span className="inline-block">Democracy</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={textControls}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-[90%] md:w-[50%] mx-auto font-mono text-gray-700 text-sm md:text-base"
        >
          By bridging the gap between policymakers and the public, leveraging
          artificial intelligence and data analysis to identify user needs,
          generate surveys, and assess the impact of policies.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={buttonControls}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center mt-6 md:mt-10 space-y-4 md:space-y-0 md:space-x-6"
        >
          <button className="bg-black hover:bg-gray-700 text-white hover:text-slate-50 px-4 py-2 rounded-lg shadow-md transition duration-300">
            Get Started
          </button>
          <button className="bg-gray-200 hover:bg-gray-400 font-semibold text-gray-900 px-4 py-2 rounded-lg shadow-md transition duration-300">
            Learn more..
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
