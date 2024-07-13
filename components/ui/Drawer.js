import Hamburger from "hamburger-react";
import Image from "next/image";
import logo from "/public/img/logo.png";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Drawer = ({ isOpen, setIsOpen }) => {
  return (
    <div className="xl:hidden relative z-[9999]">
      <Hamburger
        toggled={isOpen}
        color="white"
        toggle={setIsOpen}
        duration={0.8}
      />

      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity  ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-[300px] bg-primary shadow-lg h-full transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between mt-10 pl-4">
          <Link href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
          <Hamburger
            toggled={isOpen}
            color="white"
            toggle={setIsOpen}
            duration={0.8}
          />
        </div>
        <div className="p-6 mt-2">
          <header className="">
            <ul className=" flex flex-col  gap-6   text-white font-medium text-base">
              <li
                style={{ animationDelay: "0s" }}
                className="hover:text-white duration-[.3s]"
              >
                <Link href="/">Home</Link>
              </li>
              <li
                style={{ animationDelay: ".5s" }}
                className="hover:text-white duration-[.3s]"
              >
                <Link href="#about">About Me</Link>
              </li>
              <li
                style={{ animationDelay: "1s" }}
                className="hover:text-white duration-[.3s]"
              >
                <Link href="#service">Services</Link>
              </li>
              <li
                style={{ animationDelay: "1.5s" }}
                className="hover:text-white duration-[.3s]"
              >
                <Link href="#portfolio">Portfolio</Link>
              </li>
              <li
                style={{ animationDelay: "2s" }}
                className="hover:text-white duration-[.3s]"
              >
                <Link href="#review">Reviews</Link>
              </li>
              <li
                style={{ animationDelay: "2.5s" }}
                className="hover:text-white duration-[.3s]"
              >
                <Link href="#blog">Blog</Link>
              </li>
            </ul>
          </header>
          <ul className="flex   gap-4 mt-10">
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
        </div>
      </div>
    </div>
  );
};

export default Drawer;
