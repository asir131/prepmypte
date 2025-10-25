"use client";
import Image from "next/image";
import React from "react";
import logo from "@public/header/logo.png";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { TextAlignJustify } from "lucide-react";
import { X } from "lucide-react";

const NavBar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const gradientStyle = {
    background: "linear-gradient(90deg, #EF5634, #5A0000)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    transition: "color 0.3s ease-in-out",
    fontWeight: "bold",
  };

  const normalStyle = {
    color: "#565E6C",
    fontWeight: "bold",
  };

  const items = ["Home", "Pricing", "Features", "Contact Us"];

  return (
    <div className="container relative lg:mx-auto flex items-center justify-between pt-3">
      <div>
        <Image src={logo} width={200} height={100} alt="" />
      </div>
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="lg:hidden mr-10 cursor-pointer"
      >
        <TextAlignJustify />
      </div>

      <div className="p-px hidden lg:block bg-linear-to-r from-[#5A0000] to-[#EF5634] rounded-lg">
        <div className="flex gap-10 items-center bg-white p-4 rounded-lg px-10">
          <div className="flex gap-10 items-center">
            {items.map((item, index) => (
              <span
                key={item}
                className="text-[18px] cursor-pointer transition-colors duration-500 ease-in-out"
                style={hoveredIndex === index ? gradientStyle : normalStyle}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <span className="cursor-pointer bg-gradient-to-r from-[#EF5634] to-[#5A0000] text-white px-8 py-2 rounded-lg">
              Sign up
            </span>
            <span className="flex bg-[#F3F4F6] px-8 py-2 rounded-lg items-center justify-center gap-1 cursor-pointer transition-colors duration-300 hover:text-[#EF5634]">
              Login <ArrowRight size={18} />
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          openMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpenMenu(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setOpenMenu(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-6 flex-1">
            {items.map((item, index) => (
              <span
                key={item}
                className="text-[18px] cursor-pointer py-2 transition-colors duration-300 ease-in-out border-b border-gray-100"
                style={hoveredIndex === index ? gradientStyle : normalStyle}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setOpenMenu(false)}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-8">
            <button
              className="cursor-pointer bg-linear-to-r from-[#EF5634] to-[#5A0000] text-white px-6 py-3 rounded-lg text-center transition-transform duration-200 hover:scale-105"
              onClick={() => setOpenMenu(false)}
            >
              Sign up
            </button>
            <button className="flex bg-[#F3F4F6] px-6 py-3 rounded-lg items-center justify-center gap-2 cursor-pointer transition-colors duration-300 hover:text-[#EF5634] text-center">
              Login <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
