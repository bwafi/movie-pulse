import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";

const CardVideo = () => {
  return (
    <Link href={"/"} className="first:ml-3 w-fit group">
      <div className="relative">
        <div className="absolute w-full h-full flex items-center justify-center before:content-[''] before:block before:w-full before:h-full before:bg-black/10 before:absolute">
          <FaPlay className="absolute z-[2] text-5xl text-white" />
        </div>

        <Image
          src={"https://image.tmdb.org/t/p/w300/nHf61UzkfFno5X1ofIhugCPus2R.jpg"}
          alt="sdva"
          className="rounded-lg group-hover:scale-105 transition-all"
          width={300}
          height={500}
        />
      </div>
      <div className="w-full mx-auto text-center my-3 tracking-wide">
        <h2 className="text-xl font-semibold">Berbie</h2>
        <p className="text-sm ">2023-08-27</p>
      </div>
    </Link>
  );
};

export default CardVideo;
