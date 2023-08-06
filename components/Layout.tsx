import React, { ReactNode } from "react";
import Sides from "./Sides";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full">
      <Sides />
      <main className="w-full ml-[16%] overflow-x-hidden">{children}</main>
    </div>
  );
};

export default Layout;
