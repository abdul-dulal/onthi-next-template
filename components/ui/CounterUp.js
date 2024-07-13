import React from "react";
import CountUp from "react-countup";

const CounterUp = ({ end, title, text }) => {
  return (
    <div className="lg:my-0 my-5 text-center -z-40">
      <CountUp start={0} end={end} duration={4} delay={0}>
        {({ countUpRef }) => (
          <div className="text-[#181818] ">
            <div className="flex">
              <h1
                className="text-[52px] text-[##181818] font-bold "
                ref={countUpRef}
              ></h1>
              <h1 className="text-[52px] text-[##181818] font-bold">{text}</h1>
            </div>
            <p>{title}</p>
          </div>
        )}
      </CountUp>
    </div>
  );
};

export default CounterUp;
