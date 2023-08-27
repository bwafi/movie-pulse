"use client";
import React from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { useGlobalContext } from "@/context/context";

const navLinks = [
  {
    title: "MOVIES",
    navList: [
      { title: "Popular", url: "/movie/popular", icon: "/icons/heart.svg" },
      { title: "Now Playing", url: "/movie/now-playing", icon: "/icons/play-circle.svg" },
      { title: "Up Coming", url: "/movie/upcoming", icon: "/icons/calendar.svg" },
      { title: "Top Rated", url: "/movie/top-rated", icon: "/icons/award.svg" },
    ],
  },
  {
    title: "TV Show",
    navList: [
      { title: "Popular", url: "/tv/popular", icon: "/icons/heart.svg" },
      { title: "Airing Today", url: "/tv/airing-today", icon: "/icons/play-circle.svg" },
      { title: "On TV", url: "/tv/on-the-air", icon: "/icons/tv.svg" },
      { title: "Top Rated", url: "/tv/top-rated", icon: "/icons/award.svg" },
    ],
  },
  {
    title: "People",
    navList: [{ title: "Popular", url: "/person/popular", icon: "/icons/heart.svg" }],
  },
];

const Sides = () => {
  const { handleMenuState } = useGlobalContext();

  return (
    <nav className="h-screen p-5 bg-soft-black text-white">
      <div className="w-full">
        <div className="flex items-center gap-8">
          <h1 className="text-xl lg:text-2xl font-semibold text-teal">
            <a href="/">MoviePulse</a>
          </h1>
          <button onClick={handleMenuState} className="block lg:hidden group">
            <IoClose className="text-2xl group-hover:scale-110" />
          </button>
        </div>
        {navLinks.map((navLink, index: number) => (
          <div key={index} className="mt-8">
            <h3 className="text-base lg:text-lg font-semibold mb-3">{navLink.title}</h3>
            <ul>
              {navLink.navList.map((link, index: number) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    onClick={handleMenuState}
                    className="flex px-2 gap-3 py-2 text-sm hover:bg-white/10 hover:text-teal transition-colors ">
                    <Image src={link.icon} alt="heart" width={20} height={20} /> {link.title}
                  </Link>
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
