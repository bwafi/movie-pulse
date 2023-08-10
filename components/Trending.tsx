import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const Trending = () => {
  return (
    <section className="w-full overflow-hidden my-16 mx-3">
      <div className="w-full">
        <div className="relative flex items-center gap-5 before:content-[''] before:absolute before:block before:w-1 before:h-3/4 before:bg-teal before:rounded-full">
          <h1 className="ml-3 text-2xl font-semibold ">Trending</h1>
          <div className="relative border border-teal rounded-full text-sm z-[1]">
            <button className="py-0.5 px-5 ">Day</button>
            <button className="py-0.5 px-5">Week</button>
            <div className="absolute top-0 w-6/12 h-full bg-teal rounded-full z-[-1]"></div>
          </div>
        </div>
        <p className="mt-1">Trending Movie Just For You</p>
      </div>
      <div className="w-[16%] h-[350px] mt-6 rounded overflow-hidden bg-black">
        <div className="relative w-full h-4/6">
          <Image src={"https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"} alt="asd" fill />
        </div>
        <div className="mx-2 my-2">
          <div className="flex items-center gap-1">
            <AiFillStar className="text-lg text-teal" />
            <p>7.5</p>
          </div>
          <h1 className="mt-1 text-lg font-semibold line-clamp-2">Oppenheimer</h1>
          <p className="mt-3 text-sm font-light">32-22-2003</p>
        </div>
      </div>
    </section>
  );
};

export default Trending;
