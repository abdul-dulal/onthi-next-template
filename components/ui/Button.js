import React from "react";

const Button = ({ title }) => {
  return (
    <div className="relative">
      <button className="btn font-semibold text-base border border-black text-[#1b1b1b] h-11 px-8 hover:border-[#3b71fe] ">
        {title}
      </button>
    </div>
  );
};

export default Button;
