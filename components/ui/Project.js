/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const Project = ({ title, title1, hoverImg }) => {
  return (
    <div class="flex gap-4  md:flex-row items-center justify-between group transition-all relative  xl:px-10 px-3 py-[50px] hover:bg-white group-hover:shadow-sm duration-500  ">
      <div className="group md:flex  ">
        <h6 className="w-[270px] text-[26px] font-bold group-hover:text-[#7ebbf2] duration-500">
          {title} <br />
          {title1}
        </h6>
        <p className="text-[#767676] ">
          Once the concept is established, I move on to the design phase. Here,
          create <br /> a visual representation of the website that reflects the
          client's brand and <br /> messaging eventually management
        </p>
      </div>
      <Image
        src={hoverImg}
        alt="Digital marketing"
        class="absolute scale-0  duration-500 transition-all w-[320px]   xl:right-0 lg:right-32 md:right-1/4 sm:right-[35%] xs:right-[46%] object-cover  group-hover:scale-[1] group-hover:rotate-40"
      />
    </div>
  );
};

export default Project;
