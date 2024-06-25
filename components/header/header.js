"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";
import SubHeader from "./SubHeader";

const Header = () => {
  const pathname = usePathname();
  const activeStyle = "text-white border-b-[2.5px] pt-[6px] border-[#7ebbf2]";

  const [isSticky, setIsSticky] = useState(false);

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
  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="drop-shadow-xl bg-[#1c1c1c] h-[110px]">
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
            <nav>
              <ul className="xl:flex hidden    gap-[55px]   text-[#8ea0b1] font-medium text-base">
                <li style={{ animationDelay: "0s" }}>
                  <Link
                    className={` ${pathname === "/home" ? activeStyle : ""}`}
                    href={"/home"}
                  >
                    Home
                  </Link>
                </li>
                <li style={{ animationDelay: ".5s" }}>
                  <Link
                    className={` ${pathname === "/about" ? activeStyle : ""}`}
                    href={"/about"}
                  >
                    About Me
                  </Link>
                </li>
                <li style={{ animationDelay: "1s" }}>
                  <Link
                    className={` ${
                      pathname === "/services" ? activeStyle : ""
                    }`}
                    href={"/services"}
                  >
                    Services
                  </Link>
                </li>
                <li style={{ animationDelay: "1.5s" }}>
                  <Link
                    className={` ${
                      pathname === "/portfolio" ? activeStyle : ""
                    }`}
                    href={"/portfolio"}
                  >
                    Portfolio
                  </Link>
                </li>
                <li style={{ animationDelay: "2s" }}>
                  <Link
                    className={` ${pathname === "/reviews" ? activeStyle : ""}`}
                    href={"/reviews"}
                  >
                    Reviews
                  </Link>
                </li>
                <li style={{ animationDelay: "2.5s" }}>
                  <Link
                    className={` ${pathname === "/blog" ? activeStyle : ""}`}
                    href={"/blog"}
                  >
                    Blog
                  </Link>
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
          <SubHeader />
        </div>
      </div>
    </header>
  );
};

export default Header;
