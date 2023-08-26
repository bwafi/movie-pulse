"use client";
import React, { ReactNode } from "react";
import Sides from "./Sides";
import Footer from "./Footer";
import Header from "./Header";
import { useGlobalContext } from "@/context/context";

const Layout = ({ children }: { children: ReactNode }) => {
  const { isOpen } = useGlobalContext();
  return (
    <div className="flex relative w-full">
      <div
        className={`w-[17%] lg:translate-x-0 lg:block fixed top-0 left-0 z-40 transition-transform duration-200 ${
          isOpen ? "translate-x-0 w-[210px] lg:w-[17%]" : "-translate-x-56"
        }`}>
        <Sides />
      </div>
      <div className="ml-0 lg:ml-[17%] w-full lg:w-[83%]">
        <main>
          <Header />
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
