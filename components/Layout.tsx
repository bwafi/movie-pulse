import React, { ReactNode } from "react";
import Sides from "./Sides";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative grid grid-cols-12 w-full mx-auto">
      <Sides />
      <div className="col-start-3 col-end-13 row-start-[-1] relative">{children}</div>
    </div>
  );
};

export default Layout;
