"use client";
import { ContextApi } from "@/context/tmdbAPI";
import React from "react";
import CardVideo from "./ui/CardVideo";

const TrailerUpcoming = () => {
  const { movies } = ContextApi();

  return (
    <section className="w-full h-screen py-8">
      <div className="w-fit px-3">
        <div className="relative flex items-center before:content-[''] before:absolute before:block before:w-1 before:h-3/4 before:bg-teal before:rounded-full">
          <h1 className="ml-3 text-2xl font-semibold ">Trending TV Show</h1>
        </div>
        <p>Trailers for upcoming releases</p>
      </div>

      <div className="flex gap-5 py-10 overflow-x-auto">
        <CardVideo />
      </div>
    </section>
  );
};

export default TrailerUpcoming;
