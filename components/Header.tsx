"use client";
import { useGlobalContext } from "@/context/context";
import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt2, HiOutlineSearch } from "react-icons/hi";

const Header = () => {
  const [scrollPage, setScrollPage] = useState<boolean>(false);

  const { handleMenuState, handleSearchState } = useGlobalContext();

  useEffect(() => {
    const scrollHandler = () => {
      scrollY > 500 ? setScrollPage(true) : setScrollPage(false);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollPage]);

  return (
    <header
      className={`w-full lg:w-[83%] fixed top-0 z-30 py-5 flex items-center lg:justify-end justify-between px-3 lg:px-5 ${
        scrollPage ? "bg-black/20 backdrop-blur-sm" : ""
      }`}>
      <button onClick={handleMenuState} className="lg:hidden block">
        <HiOutlineMenuAlt2 className="text-white text-3xl" />
      </button>

      <button onClick={handleSearchState} className="hover:scale-105">
        <HiOutlineSearch className="text-white text-2xl" />
      </button>
    </header>
  );
};

export default Header;
