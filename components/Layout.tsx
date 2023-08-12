import React, { ReactNode } from "react";
import Sides from "./Sides";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-12 w-full">
      <div className="col-start-1 col-end-3">
        <Sides />
      </div>
      <main className="col-start-3 col-end-13 overflow-x-hidden">{children}</main>
    </div>
  );
};

export default Layout;
