"use client";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
import MenuModal from "./menuModal";

const SubHeader = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex xl:hidden ">
      <Hamburger
        toggled={isOpen}
        color="white"
        toggle={setOpen}
        duration={0.8}
      />
      {isOpen ? <MenuModal setOpen={setOpen} /> : ""}
    </div>
  );
};

export default SubHeader;
