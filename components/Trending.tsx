"use client";
import { ContextApi } from "@/context/tmdbAPI";
import React, { useRef, useState } from "react";
import Card from "./ui/Card";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import AnimationCard from "./ui/AnimationCard";

const Trending = () => {
  const { trendingMovies } = ContextApi();
  const [currentTrending, setCurrentTrending] = useState<"day" | "week">("day");
  const nodeRef = useRef(null);

  const handleTrendingDay = () => {
    setCurrentTrending("day");
  };

  const handleTrendingWeek = () => {
    setCurrentTrending("week");
  };

  return (
    <section className="w-full my-16 mx-3">
      <div className="w-full">
        <div className="relative flex items-center gap-5 before:content-[''] before:absolute before:block before:w-1 before:h-3/4 before:bg-teal before:rounded-full">
          <h1 className="ml-3 text-2xl font-semibold ">Trending</h1>
          <div className="relative border border-teal rounded-full text-sm z-[1]">
            <button onClick={handleTrendingDay} className="py-0.5 px-5 ">
              Day
            </button>
            <button onClick={handleTrendingWeek} className="py-0.5 px-5">
              Week
            </button>
            <div
              className={`absolute top-0 w-6/12 h-full bg-teal rounded-full z-[-1] transition-transform ${
                currentTrending === "day" ? "translate-x-0" : "translate-x-full"
              }`}></div>
          </div>
        </div>
        <p className="mt-1">Trending Movie Just For You</p>
      </div>

      <AnimationCard keyAction={currentTrending}>
        <div className="flex gap-5 w-full my-6 overflow-x-scroll">
          {trendingMovies[currentTrending].map((item, index: number) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </AnimationCard>
    </section>
  );
};

export default Trending;
