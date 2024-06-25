"use client";
import CircleType from "circletype";
import React, { useEffect, useRef } from "react";

const Circle = () => {
  const textRef = useRef(null);
  useEffect(() => {
    if (textRef.current) {
      const circleType = new CircleType(textRef.current);
      circleType.radius(45);
    }
  }, []);
  return (
    <div className="h-[220px] w-[220px]">
      <div
        ref={textRef}
        className="circle-text circle  uppercase text-sm font-bold text-[#a4a4a4]"
      >
        Experience award winner
      </div>
    </div>
  );
};

export default Circle;
