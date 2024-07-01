"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";
import Drawer from "../ui/Drawer";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const header =
    "absolute after:content-[''] after:bottom-0 after:left-0  after:w-full after:h-[2px] after:origin-left	 after:scale-x-0 after:transition-all hover:after:scale-x-100";
  return (
    <header className={`header   ${isSticky ? "sticky" : ""}`}>
      <div
        className={`bg-[#1c1c1c] h-[110px] ${
          isOpen ? "shadow-lg" : "drop-shadow-xl"
        }`}
      >
        <div className="xl:grid xl:grid-cols-12 flex justify-between gap-2 max-w-[1170px] mx-auto xl:px-0 px-4 h-full items-center z-[9999]">
          <div className="col-span-2 brand">
            <Link href={"/home"}>
              <Image
                src={"/img/logo.png"}
                width={152}
                height={100}
                alt="logo"
              />
            </Link>
          </div>
          <div className="  col-span-8 pl-[70px]">
            <nav className="">
              <ul className=" xl:flex hidden gap-[55px]   text-[#8ea0b1] font-medium text-base">
                <li
                  style={{ animationDelay: "0s" }}
                  className="hover:text-white duration-[.3s]"
                >
                  <Link href="#" id="home">
                    Home
                  </Link>
                </li>
                <li
                  style={{ animationDelay: ".5s" }}
                  className="hover:text-white duration-[.3s]"
                >
                  <Link href="#">About Me</Link>
                </li>
                <li
                  style={{ animationDelay: "1s" }}
                  className="hover:text-white duration-[.3s]"
                >
                  <Link href="#">Services</Link>
                </li>
                <li
                  style={{ animationDelay: "1.5s" }}
                  className="hover:text-white duration-[.3s]"
                >
                  <Link href="#">Portfolio</Link>
                </li>
                <li
                  style={{ animationDelay: "2s" }}
                  className="hover:text-white duration-[.3s]"
                >
                  <Link href="#">Reviews</Link>
                </li>
                <li
                  style={{ animationDelay: "2.5s" }}
                  className="hover:text-white duration-[.3s]"
                >
                  <Link href="#">Blog</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className=" col-span-2 pl-12">
            <ul className="xl:flex hidden text-[#525252] gap-5 duration-300">
              <li className="cursor-pointer hover:text-[rgb(64,100,172)] transition-[.3s]">
                <FaFacebookF />
              </li>
              <li className="cursor-pointer hover:text-[#7ebbf2] transition[.3s]">
                <FaTwitter />
              </li>
              <li className="cursor-pointer hover:text-[rgb(252,175,69)]">
                <FaInstagram />
              </li>
              <li className="cursor-pointer hover:text-[#E60023]">
                <SlSocialPintarest />
              </li>
            </ul>
          </div>
          <Drawer setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
