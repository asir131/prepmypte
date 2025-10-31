import React from "react";
import banner from "@public/hero/banner.png";
import Image from "next/image";
import girl from "@public/hero/girl.png";
const Hero = () => {
  return (
    <div className="-mt-[500px] lg:-mt-30 relative min-h-[100px] lg:min-h-[620px]">
      <div className="w-full relative">
        <Image src={banner} height={80} width={1500} alt="" />
        <div className="absolute hidden lg:block bottom-1 -left-5">
          <Image src={girl} height={100} width={510} alt="" />
        </div>
        <div className=" absolute top-0 hidden lg:block  justify-center lg:right-35 lg:top-30">
          <div className="font-bold text-2xl lg:text-[70px] text-center   text-white ">
            Excel in Your PTE Exam <br /> with Advanced AI Scoring
          </div>
          <div className="mt-2 lg:mt-5 ">
            <p className="text-center text-white text-xs  lg:text-[20px]">
              Boost your performance with real-time feedback and realistic{" "}
              <br /> mock tests, and maximize your results.
            </p>
            <div className="flex gap-5  items-center justify-center mt-2 lg:mt-8">
              <button className="bg-white cursor-pointer px-2  lg:px-5 lg:py-3 rounded-md">
                Get Started Today
              </button>
              <button className="border cursor-pointer border-white text-white px-2  lg:px-5 lg:py-3 rounded-md">
                Explore Features
              </button>
            </div>
          </div>
        </div>

        <div className=" absolute top-5 left-8 xs:top-8 xs:left-15 sm:top-20 sm:left-40 md:top-25 md:left-60  lg:hidden  justify-center lg:right-15 lg:top-20">
          <div className="font-bold  text-2xl sm:text-3xl lg:text-[50px] text-center   text-white ">
            Excel in Your PTE Exam <br /> with Advanced AI Scoring
          </div>
          <div className="mt-2 lg:mt-5 ">
            <p className="text-center text-white text-xs sm:text-base  lg:text-[20px]">
              Boost your performance with real-time feedback and realistic{" "}
              <br /> mock tests, and maximize your results.
            </p>
            <div className="flex gap-5  items-center justify-center mt-2 lg:mt-8">
              <button className="bg-white cursor-pointer px-2  lg:px-5 lg:py-3 rounded-md">
                Get Started Today
              </button>
              <button className="border cursor-pointer border-white text-white px-2  lg:px-5 lg:py-3 rounded-md">
                Explore Features
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
