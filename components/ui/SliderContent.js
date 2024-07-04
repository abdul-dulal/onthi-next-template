import React from "react";
import Image from "next/image";
import quote from "/public/img/quote.png";

import signature from "/public/img/slider-signture.png";

const SliderContent = ({ slider }) => {
  return (
    <div className="xs:flex  sm:gap-10 xs:gap-24 items-center">
      <div className="flex items-center">
        <Image
          src={quote}
          className="relative left-7 -z-20"
          alt="quote"
        ></Image>
        <Image
          src={slider}
          className="h-[168px] w-[168px] rounded-full"
          alt="slider"
        ></Image>
      </div>
      <div className="sm:mt-10 xs:ml-0 ml-7">
        <h6 className=" text-white md:text-xl sm:text-base xs:text-sm font-semibold mt-10 sm:mb-8 mb-3">
          If you need to redesign your new project, new visual <br /> strategy,
          ux structure or you do have some <br /> cool ideas for collaboration
        </h6>
        <Image src={signature} className="" alt=""></Image>
      </div>
    </div>
  );
};

export default SliderContent;
