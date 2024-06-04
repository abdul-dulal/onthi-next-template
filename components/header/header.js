"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";

const Header = () => {
  const pathname = usePathname();
  const activeStyle = "text-white border-b-[2.5px] pt-[6px] border-[#7ebbf2]";
  return (
    <div className="bg-[#1c1c1c] h-[110px] w-full shadow-lg ">
      <div className="grid grid-cols-12 gap-7 w-[1170px] mx-auto h-full items-center ">
        <div className="col-span-2">
          <Link href={"/home"}>
            <Image src={"/img/logo.png"} width={152} height={100} alt="logo" />
          </Link>
        </div>
        <div className="col-span-8 pl-[70px] relative ">
          <ul className="nav flex gap-[55px]   text-[#8ea0b1] font-medium text-base">
            <li className="">
              <Link
                className={` ${pathname === "/home" ? activeStyle : ""}`}
                href={"/home"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={` ${pathname === "/about" ? activeStyle : ""}`}
                href={"/about"}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                className={` ${pathname === "/services" ? activeStyle : ""}`}
                href={"/services"}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={` ${pathname === "/portfolio" ? activeStyle : ""}`}
                href={"/portfolio"}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className={` ${pathname === "/reviews" ? activeStyle : ""}`}
                href={"/portfolio"}
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                className={` ${pathname === "/blog" ? activeStyle : ""}`}
                href={"/blog"}
              >
                Blog
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="col-span-2 pl-12">
          <ul className="flex text-[#525252] gap-5 transition-[3s]">
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
      </div>
    </div>
  );
};

export default Header;
