"use client"

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-white w-full h-[100vh] relative">
      <div className="gap-8 flex flex-col justify-center items-center p-12 pt-18 absolute w-full h-full">
        <div className="content-hero flex flex-col justify-center items-center z-10 gap-16">
          <div className="heading">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-white website-title uppercase text-bright-yellow text-6xl md:text-8xl text-center xl:text-9xl tracking-tighter font-black font-area"
            >
              Andromeda
              <br />
              Coffee
            </motion.h1>
          </div>
          <div className="cta">
            <Link
              href="/menu"
              className="bg-transparent uppercase hover:bg-white hover:text-teal-600 border-4 border-white py-2 md:py-3 text-base md:text-lg px-8 md:px-14 rounded-xl text-white hover:font-bold font-area hover:scale-110 transition-all duration-250"
            >
              Menu
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`hero bg-[url('/prenzlauerberg.jpg')] h-full bg-cover absolute w-full blur-sm`}
      ></div>
    </div>
  );
};

export default Hero;
