import Hamburger from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuModal = ({ isOpen, setOpen }) => {
  const pathname = usePathname();
  const activeStyle = "text-white border-b-[2.5px] pt-[6px] border-[#7ebbf2]";

  return (
    <div>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-64 bg-white shadow-lg h-full transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="p-2 bg-red-500 text-white rounded m-4"
          onClick={() => setOpen(false)}
        >
          Close
        </button>
        <div className="p-4">
          <h2 className="text-xl font-bold">Drawer Content</h2>
          <p>Here is some content for the drawer.</p>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
