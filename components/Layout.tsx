import React, { ReactNode } from "react";
import Sides from "./Sides";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex relative w-full">
      <div className="w-[17%] hidden lg:block fixed top-0 left-0 z-40">
        <Sides />
      </div>
      <div className="ml-0 lg:ml-[17%] w-full lg:w-[83%]">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
