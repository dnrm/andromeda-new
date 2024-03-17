"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-white w-full h-full overflow-hidden">
      <Slider {...settings}>
        <div className="slide h-[70vh] w-full relative">
          <Image src="/IMG_0573.JPEG" alt="" fill={true} objectFit="cover"  />
        </div>
        <div className="slide h-[70vh] w-full relative">
          <Image src="/hero.jpeg" alt="" fill={true} objectFit="cover"  />
        </div>
        <div className="slide h-[70vh] w-full relative">
          <Image src="/IMG_4277.JPEG" alt="" fill={true} objectFit="cover"  />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
