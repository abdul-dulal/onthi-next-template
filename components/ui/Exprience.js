import React from "react";

const Exprience = ({ title, summary, time }) => {
  return (
    <div className="group space-y-5">
      <div className="flex justify-between">
        <div className="space-y-5">
          <h4 className="text-[#1b1b1b] sm:text-xl text-sm font-bold">
            {title}
          </h4>
          <h4 className="sm:text-[15px] text-[13px]  font-normal text-[#767676]">
            {summary}
          </h4>
        </div>
        <h4 className="text-[#1b1b1b] sm:text-base text-xs font-bold">
          {time}
        </h4>
      </div>
      <p className="group-hover:border-black duration-1000 border-b border-[#dddddd] mt-3"></p>
    </div>
  );
};

export default Exprience;
