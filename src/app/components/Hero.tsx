import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-black w-full h-[100vh] relative">
      <div className="gap-8 flex flex-col justify-center items-center p-12 absolute w-full h-full">
        <div className="content-hero flex flex-col justify-center items-center z-10 gap-16">
          <div className="heading">
            <h1 className="website-title uppercase text-bright-yellow text-6xl md:text-8xl text-center xl:text-9xl tracking-tighter font-black font-area">
              Andromeda <br /> Coffee
            </h1>
          </div>
          <div className="cta">
            <Link
              href="/#menu"
              className="bg-transparent uppercase hover:bg-white hover:text-black border-4 border-white py-2 md:py-3 text-base md:text-xl px-8 md:px-14 rounded-xl text-white font-bold font-area hover:scale-110 transition-all duration-250"
            >
              Menu
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`hero bg-[url('/hero.jpeg')] h-full bg-cover absolute w-full blur-sm`}
      ></div>
    </div>
  );
};

export default Hero;
