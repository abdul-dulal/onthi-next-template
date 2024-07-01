import React from "react";

const Exprience = ({ title, summary, time }) => {
  return (
    <div className="group space-y-5 relative">
      <div className="flex justify-between">
        <div className="space-y-5">
          <h4 className="text-[#1b1b1b] sm:text-xl text-base font-bold">
            {title}
          </h4>
          <h4 className="text-[15px]   font-normal text-[#767676]">
            {summary}
          </h4>
        </div>
        <h4 className="text-[#1b1b1b] sm:text-base text-sm font-bold">
          {time}
        </h4>
      </div>
    </div>
  );
};

export default Exprience;
