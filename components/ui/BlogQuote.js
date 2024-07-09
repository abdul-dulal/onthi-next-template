"use client";
import React, { useState } from "react";
import { LuQuote } from "react-icons/lu";

const BlogQuote = () => {
  const [quote, setQuote] = useState("prototype");

  return (
    <div>
      <div>
        <div className="mx-auto h-[90px] w-[90px] bg-secondary rounded-full flex items-center justify-center my-6">
          <LuQuote size={36} />
        </div>

        <blockquote className="max-w-[900px] xl:text-[26px] lg:text-2xl xs:text-xl text-[#181818] mx-auto text-center font-semibold mb-14 mt-6">
          {quote == "adobe"
            ? " Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus commodi ullam ad tenetur. Doloribus iste consequatur molestias eligendi, dolor magnam!"
            : quote == "prototype"
            ? "If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration your new project, new visual strategy, ux"
            : "          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus commodi ullam ad tenetur. Doloribus iste consequatur  dolor magnam!"}
        </blockquote>
      </div>
      <div className="xs:flex xs:gap-2   my-16">
        <button
          onClick={() => setQuote("adobe")}
          className={`font-semibold text-base border border-black text-black h-11 px-8 ${
            quote == "adobe" ? "h-11 bg-secondary border border-secondary" : " "
          } `}
        >
          Adobe illustrator
        </button>
        <button
          onClick={() => setQuote("prototype")}
          className={`font-semibold xs:my-0 my-3 xs:ml-0 ml-4 text-base border border-black text-black h-11 px-8 ${
            quote == "prototype"
              ? "h-11 bg-secondary border border-secondary"
              : " "
          } `}
        >
          Prototype
        </button>
        <button
          className={`font-semibold xs:ml-0 ml-3 text-base border border-black text-black h-11 px-8 ${
            quote == "whims" ? "h-11 bg-secondary border border-secondary" : " "
          } `}
          onClick={() => setQuote("whims")}
        >
          Whimsicale
        </button>
      </div>
    </div>
  );
};

export default BlogQuote;
