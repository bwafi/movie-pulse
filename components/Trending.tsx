"use client";
import { IMAGE_URL } from "@/api/apiConfig";
import { ContextApi } from "@/context/tmdbAPI";
import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const Trending = () => {
  const { trendings } = ContextApi();

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
      <div className="flex gap-5 w-full my-6 overflow-x-scroll">
        {trendings.map((item, index: number) => (
          <div key={index} className="mb-10 min-w-[16%] min-h-[350px] rounded-md overflow-hidden bg-black shadow">
            <div className="relative w-full h-4/6">
              <Image src={`${IMAGE_URL}${item.poster_path}`} alt={item.title} fill />
            </div>
            <div className="mx-2 my-2">
              <div className="flex items-center gap-1">
                <AiFillStar className="text-lg text-teal" />
                <p className="tracking-widest">{item.vote_average.toFixed(1)}</p>
              </div>
              <div className="h-[40px]">
                <h1 className="mt-1 text-lg font-semibold line-clamp-2 leading-5">{item.original_title}</h1>
              </div>
              <p className="mt-3 text-sm font-light">32-22-2003</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
