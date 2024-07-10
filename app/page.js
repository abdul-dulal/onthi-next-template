/* eslint-disable react/no-unescaped-entities */
"use client";
import flower from "/public/img/flower.png";
import Image from "next/image";
import { MdEmail, MdOutlineCheckCircle } from "react-icons/md";
import signature from "/public/img/signature-black.png";
import hero from "/public/img/hero.png";
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
import Project from "@/components/ui/Project";
import Marquee from "react-fast-marquee";
import designer from "/public/img/desinger.png";
import { FaAnglesRight } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import React, { useEffect, useState } from "react";
import arrow from "@/public/img/highlight.png";
import singtunare from "@/public/img/signature.png";
import Link from "next/link";
import Slider from "@/components/ui/Slider";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";
import Service from "@/components/ui/Service";
import Blog from "@/components/ui/Blog";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const Home = () => {
  const [counterOn, setCounteron] = useState(false);
  return (
    <div>
      <section>
        <div className="w-full bg-primary   md:bg-[url('/img/bg-main.png')] bg-none bg-no-repeat bg-right-bottom ">
          <div className="max-w-[1170px] mx-auto xl:0 px-3 xl:h-[830px] lg:h-[800px]  md:h-[580px] h-[420px]  md:grid grid-cols-12  gap-7">
            <div className=" col-span-5  ">
              <div
                className="xl:w-[520px] lg:w-[450px] h-full relative xl:-left-[75px] lg:-left-4 bg-left-bottom bg-contain bg-no-repeat"
                style={{
                  backgroundImage: 'url("/img/hero-main.png")',
                }}
              >
                <div className="h-full flex flex-col  justify-around relative -top-8">
                  <div className="md:flex hidden lg:w-[140px] lg:h-[150px] md:w-28 md:h-28 relative left-10 lg:left-6 xl:top-0 lg:top-12 circle">
                    <Image
                      src={designer}
                      alt="Senior graphic designer"
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                      data-aos-delay="300"
                    ></Image>
                  </div>
                  <div className=" md:flex hidden gap-10  items-center relative  -bottom-28">
                    <div className="card bg-white lg:w-[200px] w-[150px]  rounded-lg drop-shadow-lg">
                      <div className="lg:p-6 p-3">
                        <h3 className=" ">
                          <ScrollTrigger
                            onEnter={() => setCounteron(true)}
                            onExit={() => setCounteron(false)}
                          >
                            {counterOn && (
                              <CountUp
                                start={0}
                                end={10}
                                duration={4}
                                delay={0}
                              >
                                {({ countUpRef }) => (
                                  <div className="flex">
                                    <span
                                      className="text-[26px] font-bold flex items-center"
                                      ref={countUpRef}
                                    />
                                    <h3 className="text-[26px]  font-bold flex items-center ">
                                      k+
                                    </h3>
                                  </div>
                                )}
                              </CountUp>
                            )}
                          </ScrollTrigger>
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
                            alt="Customer"
                          ></Image>
                          <Image
                            class="inline-block h-8 w-8 rounded-full ring-2 ring-white cursor-pointer"
                            src={"/img/man2.png"}
                            height={36}
                            width={36}
                            alt="Customer"
                          ></Image>
                          <Image
                            class="inline-block h-8 w-8 rounded-full ring-2 ring-white cursor-pointer"
                            src={"/img/man3.png"}
                            height={36}
                            width={36}
                            alt="Customer"
                          ></Image>
                          <Image
                            class="inline-block h-8 w-8 rounded-full ring-2 ring-white cursor-pointer"
                            src={"/img/man4.png"}
                            height={36}
                            width={36}
                            alt="Customer"
                          ></Image>
                          <IoIosArrowRoundForward class="bg-[#7ebbf2] inline-block h-9 w-9 rounded-full cursor-pointer ring-white" />
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <Image src={singtunare} alt="signature"></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" md:col-span-6 w-full h-full md:px-0 px-3   flex items-center ">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-[#7ebbf2]">Hey ! I am Vapez miller</p>
                  <Image src={arrow} className="topbar-shape" alt="" />
                </div>
                <h2
                  className="xl:text-7xl lg:text-[55px] md:text-[48px] xs:text-5xl text-3xl  xl:leading-[80px] lg:leading-[60px] xs:leading-[50px] text-white tracking-[-2px] font-bold pb-4"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  Creative <br />
                  Web designer
                </h2>
                <p className="text-[#8ea0b1] pb-4">
                  There are many variations of passages of Ipsum available,
                  majority have suffered.We put your ideas and thus your wishes
                </p>
                <div className="flex gap-2">
                  <Link href="#">
                    <h6 className="flex items-center gap-2 xl:px-9 lg:px-7 xs:px-5  px-3 xl:py-5 lg:py-4 py-3 xs:text-lg text-base text-white text-[ #1b1b1b] font-bold  hover:bg-[#7dbbf1] hover:text-black duration-1000 rounded">
                      About Me
                      <span className="">
                        <FaAnglesRight />
                      </span>
                    </h6>
                  </Link>

                  <Link href="#">
                    <h6
                      className="underline underline-offset-4 xl:px-9 lg:px-7 xs:px-5 px-3 xl:py-5 lg:py-4 py-3 xs:text-lg text-base text-white text-[ #1b1b1b] font-bold    hover:bg-[#7dbbf1] hover:text-black duration-1000 rounded"
                      style={{ textDecorationColor: "#7ebbf2" }}
                    >
                      Available now
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About----area--------------------------------------- */}

      <section id="about">
        <div className="grid lg:grid-cols-2 gap-7 max-w-[1170px] mx-auto xl:px-0 px-4 xl:my-[130px] my-24 ">
          <div className="">
            <h3
              className="xl:text-left text-center aos-init "
              data-aos="fade-up"
              data-aos-duration="500"
            >
              I run agency smartly with my team members.
            </h3>

            <p
              className="mt-8 text-[#767676] xl:text-left text-center"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Hi, my name is David Clacrk and I began using WordPress when first
              began. I’ve spent most of my waking hours for the last ten years
              designing, programming and operating
            </p>
            <div>
              <div className="xl:flex grid xs:grid-cols-2  xs:gap-7 gap-2 mt-8">
                <div className="flex flex-col gap-3  justify-center lg:items-start items-center  xl:w-[190px] w-full xl:h-[220px] lg:h-[250px] h-[218px] bg-[#f4f4f4] lg:pl-11">
                  <Image src={flower} alt="flower" />
                  <h4 className="xs:text-xl text-2xl font-bold text-[#1b1b1b]">
                    14+
                  </h4>
                  <p>
                    Years of <br />
                    Experience
                  </p>
                </div>
                <div className=" xs:mt-0  mt-8">
                  <h4 className="text-xl font-bold tracking-[0px]">
                    01. What I do
                  </h4>
                  <div className="flex xs:gap-4 gap-2 items-center mt-2">
                    <MdOutlineCheckCircle size={20} color="#7ebbf2" />
                    <h4 className="text-lg  font-normal text-[#767676]">
                      Always give high quality
                    </h4>
                  </div>
                  <div className="flex gap-4  items-center mt-3">
                    <MdOutlineCheckCircle size={20} color="#7ebbf2" />
                    <h4 className="text-lg  font-normal text-[#767676]">
                      Care about design trendecy
                    </h4>
                  </div>
                  <h4 className="text-xl font-semibold mt-3 ">
                    02. Note my info
                  </h4>
                  <div className="flex gap-4  items-center mt-2">
                    <MdEmail size={20} color="#7ebbf2" />
                    <h4 className="text-lg  font-normal text-[#767676]">
                      needhelponthi@gmail.com
                    </h4>
                  </div>
                  <div className="flex gap-4  items-center mt-3">
                    <GrMap size={20} color="#7ebbf2" />
                    <h4 className="text-lg  font-normal text-[#767676]">
                      Berlyin main street. Germany
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex xs:justify-center xs:gap-20 gap-7 mt-14  ">
                <Link href="#">
                  <button className=" xs:w-[222px] w-[190px] bg-[#3b71fe] text-[#1b1b1b]  h-[58px]   rounded text-lg font-bold">
                    Download CV
                  </button>
                </Link>
                <div>
                  <Image src={signature} alt="black-signature" />
                </div>
              </div>
            </div>
          </div>
          <div className="xs:flex hidden justify-end relative mt-24">
            <div className="w-[150px] h-[150px] exprience absolute xl:left-10 lg:left-0 md:left-[45%] sm:left-[40%] xs:left-[20%] left-0 xl:top-9 lg:top-5 md:top-2">
              <Image
                src={exprience}
                alt="exprience"
                data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-delay="300"
              />
            </div>
            <div className="card absolute lg:left-0 md:left-[24%] sm:left-[10%] left-0 xl:bottom-4 lg:bottom-0 bottom-0 z-[1]">
              <Image src={laptop} alt="laptop" />
            </div>
            <div className=" h-[474px] w-[470px] bg-[#7ebbf2] rounded-t-[220px] bg-right bg-no-repeat flex justify-end">
              <div className="content">
                <Image
                  src={hero}
                  className="relative -top-[85px] right-7 "
                  alt="Hero Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exprience-area-------------------------------- */}

      <section>
        <div className="max-w-[1170px] mx-auto xl:px-0 px-3 grid lg:grid-cols-2 mt-28">
          <div className="space-y-12">
            <h3
              className="lg:text-left text-center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Experience & tools
            </h3>
            <div
              className="flex flex-wrap gap-3 "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <Button title="Figma" />
              <Button title="Principle" />
              <Button title="After effect" />
              <Button title="Adobe illustrator" />
              <Button title="Adobe photshop" />
              <Button title="Prototype" />
              <Button title="Whimsicale" />
            </div>
            <div className=" lg:mt-0 pb-12 xl:mr-32 ">
              <Marquee>
                <div className="flex flex-wrap">
                  <Image src={innovate} className="ml-24 " alt="innovate" />
                  <Image src={express} className="ml-24 " alt="express" />
                  <Image src={brand} className="ml-24 " alt="brand" />
                  <Image src={innovate} className="ml-24 " alt="innovate" />
                  <Image src={express} className="ml-24 " alt="express" />
                  <Image src={brand} className="ml-24 " alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
          <div
            className="space-y-4 "
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="relative">
              <Exprience
                title="Art director and ui/ux designer"
                summary="Selise multinational company"
                time="Currently"
              />
              <p className="line group-hover:border-black duration-1000 border-b border-[#dddddd] mt-3"></p>
            </div>
            <div className="relative">
              <Exprience
                title="Creative photographer"
                summary="Selise multinational company"
                time="June 2020-April 2023"
              />
              <p className="line2 group-hover:border-black duration-1000 border-b border-[#dddddd] mt-3"></p>
            </div>
            <div className="relative">
              <Exprience
                title="UI/UX Designer"
                summary="Selise multinational company"
                time="May 2019-July 2020"
              />
              <p className="line3 group-hover:border-black duration-1000 border-b border-[#dddddd] mt-3"></p>
            </div>
            <div className="relative">
              <Exprience
                title="Web developer"
                summary="Selise multinational company"
                time="June 2020-April 2023"
              />
              <p className="line2 group-hover:border-black duration-1000 border-b border-[#dddddd] mt-3"></p>
            </div>
          </div>
        </div>
      </section>

      {/* Award-Section */}

      <section>
        <div className="mt-28 max-w-[1170px] mx-auto xl:px-0 px-3">
          <h3
            className="text-center sm:text-[40px] text-[25px]  mb-14"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            My awards achivement
          </h3>
          <div
            className=" grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 gap-7"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Award img={best} title="Developer Award" type="Winner" />
            <Award img={developer} title="Developer Award" type="Nominee" />
            <Award img={award} title="Developer Award" type="Winner" />
            <Award img={webby} title="Developer Award" type="Runner-Up" />
          </div>
        </div>
      </section>

      {/* Service-Section */}
      <section id="service">
        <div className="bg-[#f6f6f7] mt-28 max-w-[1350px] mx-auto">
          <div className="max-w-[1170px] mx-auto xl:px-0 px-3 py-28">
            <p
              className="text-[#767676]"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              My Service
            </p>
            <h3
              class="mt-4 mb-10 relative w-fit after:content-[''] after:absolute after:w-[170px] after:h-8 after:-right-14 after:top-6 after:bg-[url('/img/line.png')] after:bg-no-repeat after:bg-contain "
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Check my services
            </h3>
            <div>
              <Project />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio-Section */}
      <section id="portfolio">
        <div className="max-w-[1290px] w-full mx-auto xl:px-0 px-3 mt-16">
          <p className="text-center" data-aos="fade-up" data-aos-duration="600">
            My portfolio
          </p>
          <div className="flex justify-center w-full ">
            <h3
              class="text-center mt-4 mb-10 relative w-fit after:content-[''] after:absolute after:w-[170px] after:h-8 after:-right-14 after:top-6 after:bg-[url('/img/line.png')] after:bg-no-repeat after:bg-contain  "
              data-aos="fade-up"
              data-aos-duration="600"
            >
              My latest project
            </h3>
          </div>
          <Service />
        </div>
      </section>

      {/* Slider-are */}
      <section id="review">
        <div className="max-w-full bg-black bg-opacity-95 py-[100px] bg-[url('/img/slider-bg.png')]  bg-cover">
          <div
            className="max-w-[1030px]  mx-auto xl:px-0 px-3"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            <Slider />
          </div>
        </div>
      </section>
      {/* Contact-section */}
      <section>
        <Contact />
      </section>
      {/* Blog-sectin */}
      <section id="blog">
        <div className="max-w-[1170px] mx-auto xl:px-0 px-3 mt-20">
          <p className="text-center" data-aos="fade-up" data-aos-duration="600">
            Blog & articles
          </p>
          <h3
            className="text-center mb-10"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Latest blog post
          </h3>
          <Blog />
        </div>
      </section>
      {/* Footer-section */}
      <Footer />
    </div>
  );
};

export default Home;
