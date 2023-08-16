import React from "react";
import { RiMenu3Line } from "react-icons/ri";
import Image from "next/image";

const navLinks = [
  {
    title: "MOVIES",
    navList: [
      { title: "Popular", icon: "/icons/heart.svg" },
      { title: "Now Playing", icon: "/icons/play-circle.svg" },
      { title: "Up Coming", icon: "/icons/calendar.svg" },
      { title: "Top Rated", icon: "/icons/award.svg" },
    ],
  },
  {
    title: "TV Show",
    navList: [
      { title: "Popular", icon: "/icons/heart.svg" },
      { title: "Airing Today", icon: "/icons/play-circle.svg" },
      { title: "On TV", icon: "/icons/tv.svg" },
      { title: "Top Rated", icon: "/icons/award.svg" },
    ],
  },
  {
    title: "People",
    navList: [{ title: "Popular", icon: "/icons/heart.svg" }],
  },
];

const Sides = () => {
  return (
    <nav className="h-screen p-5 bg-soft-black ">
      <div className="w-full">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-semibold text-teal">
            <a href="/">MoviePulse</a>
          </h1>
          <button>
            <RiMenu3Line className="text-3xl" />
          </button>
        </div>
        {navLinks.map((navLink, index: number) => (
          <div key={index} className="mt-8">
            <h3 className="text-lg font-semibold mb-3">{navLink.title}</h3>
            <ul>
              {navLink.navList.map((link, index: number) => (
                <li
                  key={index}
                  className="flex gap-3 py-2 text-sm hover:bg-white/10 hover:text-teal transition-colors ">
                  <Image src={link.icon} alt="heart" width={20} height={20} /> {link.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Sides;
