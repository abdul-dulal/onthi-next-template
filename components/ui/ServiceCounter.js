"use client";
import React, { useState } from "react";
import CounterUp from "./CounterUp";
import ScrollTrigger from "react-scroll-trigger";
const ServiceCounter = () => {
  const [counterOn, setCounteron] = useState(false);
  return (
    <div className="my-14" data-aos="fade-up" data-aos-duration="900">
      <ScrollTrigger
        onEnter={() => setCounteron(true)}
        onExit={() => setCounteron(false)}
      >
        {counterOn && (
          <div className="flex flex-wrap items-center xs:gap-0 gap-10 justify-evenly">
            <CounterUp end="25" title="Project completed" text="k" />
            <CounterUp end="10" title="Years experience" text="+" />
            <CounterUp end="26" title="Award achievement" text="+" />
            <CounterUp end="26" title="Folowers worldwide" text="k" />
          </div>
        )}
      </ScrollTrigger>
    </div>
  );
};

export default ServiceCounter;
