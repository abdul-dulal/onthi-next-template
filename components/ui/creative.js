"ues client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import CircleType from "circletype";
import arrow from "@/public/img/highlight.png";
import singtunare from "@/public/img/signature.png";

import { FaAnglesRight } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";

const Creative = () => {
  const textRef = useRef(null);
  useEffect(() => {
    if (textRef.current) {
      const circleType = new CircleType(textRef.current);
      circleType.radius(0);
    }
  }, []);
  return (
    <div className="bg-[#1b1b1b] pt-12 ">
      <div className="container xl:h-[650px] lg:h-[400px] md:h-[580px] mx-auto sm:grid grid-cols-12  gap-7">
        <div className="col-span-5">
          <div
            className="women w-full h-full relative xl:-left-[78px] lg:-left-4 bg-contain bg-no-repeat "
            style={{
              backgroundImage: 'url("/img/women.png")',
            }}
          >
            <div className="h-full flex flex-col  justify-between">
              <div className="h-[200px] w-[200px]">
                <div
                  ref={textRef}
                  className="circle-text circle  uppercase text-sm font-bold text-[#a4a4a4]"
                >
                  ________senior graphic designer
                </div>
              </div>
              <div className=" flex gap-10  items-center relative -left-12 bottom-11">
                <div className="card bg-white w-[200px]  rounded-lg drop-shadow-lg">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold flex items-center ">
                      10k+
                    </h3>
                    <h3 className="text-[#1b1b1b] text-[20px] font-normal">
                      Real Customers
                    </h3>

                    <div class="mt-3 flex items-center -space-x-2 overflow-hidden">
                      <Image
                        class="inline-block h-8 w-8 rounded-full ring-2 ring-white cursor-pointer"
                        src={"/img/man1.png"}
                        height={36}
                        width={36}
                        alt=""
                      />
                      <Image
                        class="inline-block h-8 w-8 rounded-full ring-2 ring-white cursor-pointer"
                        src={"/img/man2.png"}
                        height={36}
                        width={36}
                        alt=""
                      />
                      <Image
                        class="inline-block h-8 w-8 rounded-full ring-2 ring-white cursor-pointer"
                        src={"/img/man3.png"}
                        height={36}
                        width={36}
                        alt=""
                      />
                      <Image
                        class="inline-block h-8 w-8 rounded-full ring-2 ring-white cursor-pointer"
                        src={"/img/man4.png"}
                        height={36}
                        width={36}
                        alt=""
                      />
                      <IoIosArrowRoundForward class="bg-[#7ebbf2] inline-block h-9 w-9 rounded-full cursor-pointer ring-white" />
                    </div>
                  </div>
                </div>
                <div>
                  <Image src={singtunare} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-6 flex items-center ">
          <div>
            <div className="flex items-center justify-between">
              <p className="text-[#7ebbf2]">Hey ! I am Vapez miller</p>
              <Image src={arrow} className="topbar-shape" alt="" />
            </div>
            <h1 className="xl:text-7xl lg:text-[55px] md:text-[48px] xl:leading-[80px] lg:leading-[60px] md:leading-[50px] text-white tracking-[-2px] font-bold pb-4">
              Creative <br />
              Web designer
            </h1>
            <p className="text-[#8ea0b1] pb-4">
              There are many variations of passages of Ipsum available, majority
              have suffered.We put your ideas and thus your wishes
            </p>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 xl:px-9 lg:px-7 md:px-5 xl:py-5 lg:py-4 md:py-3 text-lg text-white text-[ #1b1b1b] font-bold  hover:bg-[#7dbbf1] hover:text-black duration-1000 rounded">
                About Me
                <span className="">
                  <FaAnglesRight />
                </span>
              </button>

              <button
                className="underline underline-offset-4 xl:px-9 lg:px-7 md:px-5 xl:py-5 lg:py-4 md:py-3 text-lg text-white text-[ #1b1b1b] font-bold    hover:bg-[#7dbbf1] hover:text-black duration-1000 rounded"
                style={{ textDecorationColor: "#7ebbf2" }}
              >
                Available now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creative;
