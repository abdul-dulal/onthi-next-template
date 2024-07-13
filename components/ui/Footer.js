import Image from "next/image";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import xlogo from "/public/img/xlogo.png";
import ScrollToTop from "react-scroll-up";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="max-w-[1360px]  bg-[url('/img/footer-bg.png')] bg-no-repeat bg-contain bg-primary pt-20 pb-10 mt-20">
          <div
            className="max-w-[1170px] mx-auto xl:px-0 px-3"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="xs:flex justify-between pr-3">
              <h3 className="text-white xs:mb-0 mb-4">Let’s get in touch</h3>
              <div className="flex ">
                <input
                  type="email"
                  className="lg:w-[370px] md:w-[300px] sm:w-[240px] xs:w-[200px] h-12 border border-white bg-transparent"
                />
                <button className="bg-secondary lg:w-[200px] md:w-[180px] sm:w-[140px] xs:w-[100px] w-24 h-12 text-sm font-bold">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="mt-20">
              <h1
                className="sm:text-[80px] xs:text-[50px] text-3xl text-secondary font-bold text-center"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                hello@onthi.com
              </h1>
              <p
                className="text-center text-white text-xl xs:mt-8 mt-3"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                nss.com established 2014 in Sordar para
              </p>
              <Image
                src={xlogo}
                className="mx-auto mt-10 mb-20"
                alt="Footer logo"
                data-aos="fade-up"
                data-aos-duration="1200"
              ></Image>
              <div className="flex justify-between">
                <ul className="flex text-white xs:gap-8 gap-4 cursor-pointer">
                  <li>About</li>
                  <li>Portfolio</li>
                  <li>Service</li>
                  <li>Contact</li>
                </ul>

                <ScrollToTop showUnder={160} style={{ right: 15, bottom: -10 }}>
                  <div className="w-8 h-8 bg-[#292929] rounded-full flex items-center justify-center shadow-md animate-bounce">
                    <FaArrowUpLong color="white" />
                  </div>
                </ScrollToTop>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
