import React from "react";
import Image from "next/image";
import quote from "/public/img/quote.png";
import slider from "/public/img/slider.png";
import signature from "/public/img/slider-signture.png";

const SliderContent = () => {
  return (
    <div className="xs:flex  sm:gap-10 xs:gap-24 items-center">
      <div className="flex items-center">
        <Image src={quote} className="relative left-7 -z-20" alt="quote" />
        <Image src={slider} alt="slider" />
      </div>
      <div className="sm:mt-10 xs:ml-0 ml-7">
        <h6 className=" text-white md:text-xl sm:text-base xs:text-sm font-semibold mt-10 sm:mb-8 mb-3">
          If you need to redesign your new project, new visual <br /> strategy,
          ux structure or you do have some <br /> cool ideas for collaboration
        </h6>
        <Image src={signature} className="" alt="" />
      </div>
    </div>
  );
};

export default SliderContent;
