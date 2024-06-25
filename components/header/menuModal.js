import Hamburger from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuModal = ({ setOpen }) => {
  const pathname = usePathname();
  const activeStyle = "text-white border-b-[2.5px] pt-[6px] border-[#7ebbf2]";

  return (
    <div
      style={{ zIndex: "1000000" }}
      className="  overflow-x-hidden overflow-y-auto inset-0  -top-2 left-0 right-0 fixed  absulate  mt-2 w-full h-screen px-10  shadow-lg py-1 bg-[rgba(0,0,0,0.9)] "
    >
      <nav>
        <ul className="flex flex-col    gap-10  text-[#8ea0b1] font-medium text-base">
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
              className={` ${pathname === "/services" ? activeStyle : ""}`}
              href={"/services"}
            >
              Services
            </Link>
          </li>
          <li style={{ animationDelay: "1.5s" }}>
            <Link
              className={` ${pathname === "/portfolio" ? activeStyle : ""}`}
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
  );
};

export default MenuModal;
