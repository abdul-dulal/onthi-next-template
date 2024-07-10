"use client";
import React, { useEffect } from "react";
import { FaArrowDown } from "react-icons/fa6";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import portfolio from "/public/img/Portfolio_Details.png";
import Image from "next/image";

import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import Service from "@/components/ui/Service";
import service2 from "/public/img/service2.png";
import webDevelopment from "/public/img/web-development.png";
import productDesign from "/public/img/product-design.png";
import AOS from "aos";
import "aos/dist/aos.css";

const PoftfolioDetails = ({ params }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const services = [
    { id: 2, img: service2, title: "Brand identity" },
    { id: 3, img: webDevelopment, title: "Web development" },
    { id: 4, img: productDesign, title: "Brand identity" },
  ];
  return (
    <div className="max-w-[1350px] md:h-[670px] xs:h-[450px] h-[400px] bg-[#181818] ">
      <div className="max-w-[1170px] mx-auto xl:pl-0 px-3">
        <div className="flex flex-col items-center justify-center pt-[15%]">
          <h3
            className="text-white"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Omnis Stylious
          </h3>
          <p
            className="mt-7 xs:text-[#8ea0b1] text-white"
            data-aos="fade-up"
            data-aos-duration="1700"
          >
            At Canvas Agency we stand behind our artists. We want our artists to
            reign supreme and achieve success in
          </p>
          <p
            className="mt-1 xs:text-[#8ea0b1] text-white"
            data-aos="fade-up"
            data-aos-duration="1700"
          >
            an environment that fosters individuality while creating a secure
            space for them to thrive under
          </p>
          <div className="my-14 w-8 h-8 bg-[#292929] rounded-full flex items-center justify-center shadow-md animate-bounce">
            <FaArrowDown color="white" />
          </div>
          <Image
            src={portfolio}
            alt="Portfolio_Details"
            data-aos="fade-up"
            data-aos-duration="600"
          ></Image>
        </div>
        <div className="xs:grid grid-cols-12 gap-7 mt-14">
          <div className="xs:col-span-4 flex-1 xs:text-left text-center">
            <div>
              <h6
                className="text-[26px] font-bold text-black"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                Client
              </h6>
              <p
                className="text-primary"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                Saiful Islam
              </p>
              <h6
                className="mt-5 text-[26px] font-bold text-black"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                Client
              </h6>
              <p
                className="text-primary"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                Wed deveopment, Design
              </p>
              <h6
                className="mt-5 text-[26px] font-bold text-black"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Year
              </h6>
              <p
                className="text-primary"
                data-aos="fade-up"
                data-aos-duration="1100"
              >
                2024
              </p>
              <ul
                className="flex xs:justify-start justify-center  gap-4 mt-6"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <Link
                  href={"https://www.facebook.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="flex items-center justify-center cursor-pointer h-[38px] w-[38px] bg-[#4661c5] rounded-full">
                    <FaFacebookF color="white" />
                  </li>
                </Link>
                <Link
                  href={"https://x.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="flex items-center justify-center cursor-pointer h-[38px] w-[38px] bg-[#1da1f2] rounded-full">
                    <FaTwitter color="white" />
                  </li>
                </Link>
                <Link
                  href={"https://www.instagram.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="flex items-center justify-center cursor-pointer h-[38px] w-[38px] bg-[#ff2e2e] rounded-full">
                    <FaInstagram color="white" />
                  </li>
                </Link>
                <Link
                  href={"https://www.linkedin.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="flex items-center justify-center cursor-pointer h-[38px] w-[38px] bg-[#0073b0] rounded-full">
                    <FaLinkedinIn color="white" />
                  </li>
                </Link>
              </ul>
              <Link href="#" data-aos="fade-up" data-aos-duration="1500">
                <button className=" my-8 mt-8 xs:w-[200px] w-[190px] bg-[#3b71fe] text-[#1b1b1b]  h-[58px]   rounded text-lg font-bold">
                  Visit more
                </button>
              </Link>
            </div>
          </div>
          <div className="xs:col-span-8 flex-1">
            <h3 data-aos="fade-up" data-aos-duration="600">
              Event Presentation
            </h3>
            <p
              className="text-secondary mb-4"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              Sed ut perspiciatis unde omnis iste natus error <br />
              sit voluptatem accusantium.
            </p>
            <h6
              className="text-[24px] font-bold mb-5"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              The Process
            </h6>
            <p data-aos="fade-up" data-aos-duration="900">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p className="my-7" data-aos="fade-up" data-aos-duration="1000">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
            <p data-aos="fade-up" data-aos-duration="1100">
              Ellentesque sit amet odio nisi. Phasellus quis lorem leo. s,
              libero diam finibus tellus, at sagittis tellus eros vitae nisi.
              Sed dignissim augue sit amet diam laoreet venenatis. Aliquam
              bibendum erat eu nisi faucibus dignissim. Phasellus dignissim est
              tempor eros pulvinar luctus. Nam vulputate, risus a efficitur
              cursus, felis dolor vulputate mi, ac eleifend libero velit sed
              nunc.
            </p>
            <h6
              className="text-[24px] font-bold mb-5"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              The Result
            </h6>
            <p data-aos="fade-up" data-aos-duration="1300">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p className="my-7" data-aos="fade-up" data-aos-duration="1300">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
            <p data-aos="fade-up" data-aos-duration="1400">
              Ellentesque sit amet odio nisi. Phasellus quis lorem leo. s,
              libero diam finibus tellus, at sagittis tellus eros vitae nisi.
              Sed dignissim augue sit amet diam laoreet venenatis. Aliquam
              bibendum erat eu nisi faucibus dignissim. Phasellus dignissim est
              tempor eros pulvinar luctus. Nam vulputate, risus a efficitur
              cursus, felis dolor vulputate mi, ac eleifend libero velit sed
              nunc.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1170px] w-full mx-auto xl:px-0 px-3 mt-16">
        <div className="flex justify-center w-full">
          <h3
            class="text-center mt-4 mb-10 relative w-fit after:content-[''] after:absolute after:w-[170px] after:h-8 after:-right-14 after:top-6 after:bg-[url('/img/line.png')] after:bg-no-repeat after:bg-contain "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            View more projects
          </h3>
        </div>
        <div
          className=" grid  md:grid-cols-3 xs:grid-cols-2 gap-8 mb-24"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          {services.map((service) => {
            return (
              <Link
                key={service.id}
                class="relative group"
                href={`/portfolio-details/${service.id}`}
              >
                <div class="image-container relative overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    class="w-full rounded"
                  ></Image>
                  <div class="absolute  duration-500 opacity-0 group-hover:opacity-100 inset-0  bg-gradient-to-t from-white to-transparent p-8 ">
                    <div class="hover-content absolute bottom-0 left-0 w-full p-8  ">
                      <h6 class="mt-2 text-secondary">Branding</h6>
                      <h6 class="text-[22px] font-bold text-primary">
                        {service.title}
                      </h6>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default PoftfolioDetails;
