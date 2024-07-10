import Image from "next/image";
import React from "react";
import twiter from "/public/img/twiter.png";
const Social = ({ social, socialName, title }) => {
  return (
    <div
      className="mt-12"
      data-aos="fade-right"
      data-aos-duration="700"
      data-aos-delay="300"
    >
      <div className="flex items-center gap-7  ">
        <div>
          <Image src={social} alt="Twiter"></Image>
        </div>
        <div>
          <h6 className="text-lg font-bold text-primary">{socialName}</h6>
          <p className="text-[15px] text-base font-normal ">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Social;
