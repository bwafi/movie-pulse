import React from "react";
import { IoIosSearch, IoIosNotifications } from "react-icons/io";

const Header = () => {
  return (
    <header className="w-full mx-auto">
      <div className="flex justify-between p-5">
        <div className="flex items-center gap-7">
          <h1 className="text-2xl font-semibold text-teal">MoviePulse</h1>

          <nav>
            <ul className="flex gap-5">
              <li>Movie</li>
              <li>TV Show</li>
              <li>People</li>
            </ul>
          </nav>
        </div>

        <div className="flex text-2xl gap-4">
          <IoIosSearch />
          <IoIosNotifications />
        </div>
      </div>
    </header>
  );
};

export default Header;
