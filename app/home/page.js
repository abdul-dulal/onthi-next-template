"use client";
import Creative from "@/components/ui/creative";
import flower from "/public/img/flower.png";
import Image from "next/image";
import { MdEmail, MdOutlineCheckCircle } from "react-icons/md";
import signature from "/public/img/signature-black.png";
import lady from "/public/img/style-lady.png";
import exprience from "/public/img/exprience.png";
import { GrMap } from "react-icons/gr";
import laptop from "/public/img/laptop.png";
import innovate from "/public/img/inovate.png";
import express from "/public/img/express.png";
import brand from "/public/img/brand.png";
import best from "/public/img/best-award.png";
import developer from "/public/img/developer-award.png";
import award from "/public/img/w.png";
import webby from "/public/img/webby.png";

import Button from "@/components/ui/Button";
import Exprience from "@/components/ui/Exprience";
import Award from "@/components/ui/Award";

const Home = () => {
  return (
    <div className="">
      <Creative />
      {/* Hero----area--------------------------------------- */}
      <div className="max-w-[1170px] mx-auto xl:px-0 px-4 my-[130px] grid lg:grid-cols-2 gap-7">
        <div className="">
          <h3>
            I run agency smartly with
            <br /> my team members.
          </h3>
          <p className="mt-8 text-[#767676]">
            Hi, my name is David Clacrk and I began using WordPress when <br />
            first began. I’ve spent most of my waking hours for the last ten{" "}
            <br />
            years designing, programming and operating
          </p>
          <div className="flex gap-7 mt-8">
            <div className="flex flex-col gap-3 justify-center  w-[170px] h-[220px] bg-[#f4f4f4] pl-11">
              <Image src={flower} alt="flower" />
              <h4 className="text-xl font-bold text-[#1b1b1b]">14+</h4>
              <p>
                Years of <br />
                Experience
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold tracking-[0px]">
                01. What I do
              </h4>
              <div className="flex gap-4 items-center mt-2">
                <MdOutlineCheckCircle size={20} color="#7ebbf2" />
                <h4 className="text-lg font-normal text-[#767676]">
                  Always give high quality
                </h4>
              </div>
              <div className="flex gap-4 items-center mt-3">
                <MdOutlineCheckCircle size={20} color="#7ebbf2" />
                <h4 className="text-lg font-normal text-[#767676]">
                  Care about design trendecy
                </h4>
              </div>
              <h4 className="text-xl font-semibold mt-3">02. Note my info</h4>
              <div className="flex gap-4 items-center mt-2">
                <MdEmail size={20} color="#7ebbf2" />
                <h4 className="text-lg font-normal text-[#767676]">
                  needhelponthi@gmail.com
                </h4>
              </div>
              <div className="flex gap-4 items-center mt-3">
                <GrMap size={20} color="#7ebbf2" />
                <h4 className="text-lg font-normal text-[#767676]">
                  Berlyin main street. Germany
                </h4>
              </div>
            </div>
          </div>
          <div className="flex gap-20 mt-14  ">
            <button className=" w-[222px] bg-[#3b71fe] text-[#1b1b1b]  h-[58px]   rounded text-lg font-bold">
              Download CV
            </button>
            <div>
              <Image src={signature} alt="black-signature" />
            </div>
          </div>
        </div>
        <div className="flex justify-end relative mt-24">
          <div className="w-[150px] h-[150px] exprience absolute xl:left-10 lg:left-0 md:left-[40%] sm:left-[25%] left-0 xl:top-9 lg:top-5 md:top-2">
            <Image src={exprience} alt="exprience" />
          </div>
          <div className="card absolute lg:left-0 md:left-[24%] sm:left-[10%] left-0 xl:bottom-4 lg:bottom-0 bottom-0 z-10">
            <Image src={laptop} alt="laptop" />
          </div>
          <div className=" h-[474px] w-[470px] bg-[#7ebbf2] rounded-t-[220px] bg-right bg-no-repeat flex justify-end">
            <div className="content">
              <Image
                src={lady}
                className="relative -top-[85px] right-7 "
                alt="styles lady"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Exprience-area-------------------------------- */}

      <section>
        <div className="max-w-[1170px] mx-auto xl:px-0 px-3 grid lg:grid-cols-2 mt-28">
          <div className="space-y-12">
            <h3 className="lg:text-left text-center">Experience & tools</h3>
            <div className="flex flex-wrap gap-3 ">
              <Button title="Figma" />
              <Button title="Principle" />
              <Button title="After effect" />
              <Button title="Adobe illustrator" />
              <Button title="Adobe photshop" />
              <Button title="Prototype" />
              <Button title="Whimsicale" />
            </div>
            <div className="flex lg:mt-0 pb-12 gap-[68px]">
              <Image src={innovate} alt="innovate" />
              <Image src={express} alt="express" />
              <Image src={brand} alt="brand" />
            </div>
          </div>
          <div className="space-y-4">
            <Exprience
              title="Art director and ui/ux designer"
              summary="Selise multinational company"
              time="Currently"
            />
            <Exprience
              title="Creative photographer"
              summary="Selise multinational company"
              time="June 2020-April 2023"
            />
            <Exprience
              title="UI/UX Designer"
              summary="Selise multinational company"
              time="May 2019-July 2020"
            />
            <Exprience
              title="Web developer"
              summary="Selise multinational company"
              time="June 2020-April 2023"
            />
          </div>
        </div>
      </section>

      {/* Award-Section */}

      <section>
        <div className="mt-28 max-w-[1170px] mx-auto xl:px-0 px-3">
          <h3 className="text-center sm:text-[40px] text-[25px]  mb-14">
            My awards achivement
          </h3>
          <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-7">
            <Award img={best} title="Developer Award" type="Winner" />
            <Award img={developer} title="Developer Award" type="Nominee" />
            <Award img={award} title="Developer Award" type="Winner" />
            <Award img={webby} title="Developer Award" type="Runner-Up" />
          </div>
        </div>
      </section>

      {/* Service-Sectin */}
      <section>
        <div className="bg-[#f6f6f7] mt-28">
          <div className="max-w-[1170px] mx-auto xl:px-0 px-3 py-28">
            <p className="text-[#767676]">My Service</p>
            <h3 class="mt-4 relative w-fit after:content-[''] after:absolute after:w-[170px] after:h-8 after:-right-14 after:top-6 after:bg-[url('/img/line.png')] after:bg-no-repeat after:bg-contain ">
              Check my services
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
