"use client";
import Hamburger from "hamburger-react";
import React, { useState } from "react";

const Drawer = ({ isOpen, setIsOpen }) => {
  return (
    <div className="xl:hidden relative ">
      <Hamburger
        toggled={isOpen}
        color="white"
        toggle={setIsOpen}
        duration={0.8}
      />

      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-64 bg-white shadow-lg h-full transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Hamburger
          toggled={isOpen}
          color="black"
          toggle={setIsOpen}
          duration={0.8}
        />
        <div className="p-4">
          <h2 className="text-xl font-bold">Drawer Content</h2>
          <p>Here is some content for the drawer.</p>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
