import React from "react";

import Image from "next/image";
const Award = ({ img, title, type }) => {
  return (
    <div className="relative award group cursor-pointer">
      <div class=" w-full bg-gradient-to-b  from-[#CEE3F5] to-transparent group-hover:bg-none duration-500 h-10 "></div>
      <div className="flex flex-col items-center justify-center mt-2">
        <Image src={img} className="	" alt="Best-award" />
        <h4 className="text-[#181818] text-lg font-semibold mt-12">{title}</h4>
        <h6 className="text-[#77b1e5] group-hover:text-black duration-500 text-base font-normal mt-3 mb-14">
          {type}
        </h6>
      </div>
    </div>
  );
};

export default Award;
