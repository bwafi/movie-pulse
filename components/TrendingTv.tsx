"use client";
import { ContextApi } from "@/context/tmdbAPI";
import React, { useState } from "react";
import Card from "./ui/Card";
import AnimationCard from "./ui/AnimationCard";
import { BsArrowRightCircle } from "react-icons/bs";

const TrendingTv = () => {
  const { trendingTv } = ContextApi();
  const [currentTrending, setCurrentTrending] = useState<"day" | "week">("day");
  const [indexCard, setIndexCard] = useState(10);

  const handleTrendingDay = () => {
    setCurrentTrending("day");
  };

  const handleTrendingWeek = () => {
    setCurrentTrending("week");
  };

  return (
    <section className="w-full my-16 px-3 overflow-x-hidden">
      <div className="w-full">
        <div className="relative flex items-center gap-5 before:content-[''] before:absolute before:block before:w-1 before:h-3/4 before:bg-teal before:rounded-full">
          <h1 className="ml-3 text-2xl font-semibold ">Trending TV Show</h1>

          <div className="w-fit border border-teal rounded-full text-sm text-center z-[1]">
            <button
              onClick={handleTrendingDay}
              className={`relative overflow-hidden py-0.5 px-5 ${currentTrending === "day" ? "text-black" : ""}`}>
              Today
              <div
                className={`absolute top-0 left-0 h-full w-full bg-teal rounded-full z-[-1] transition-transform ${
                  currentTrending === "day" ? "translate-x-0" : "translate-x-full"
                }`}></div>
            </button>
            <button
              onClick={handleTrendingWeek}
              className={`relative overflow-hidden py-0.5 px-5 ${currentTrending === "week" ? "text-black" : ""}`}>
              This Week
              <div
                className={`absolute top-0 left-0 h-full w-full bg-teal rounded-full z-[-1] transition-transform ${
                  currentTrending === "week" ? "translate-x-0" : "-translate-x-full"
                }`}></div>
            </button>
          </div>
        </div>
        <p className="mt-1">Trending TV Show Just For You</p>
      </div>

      <AnimationCard keyAction={currentTrending}>
        <div className="flex gap-5 w-full my-6 overflow-x-auto">
          {trendingTv[currentTrending].slice(0, indexCard).map((item, index: number) => (
            <Card key={index} item={item} />
          ))}
          {indexCard < trendingTv[currentTrending].length && (
            <button className="mx-3" onClick={() => setIndexCard(indexCard + 10)}>
              <BsArrowRightCircle className="text-3xl text-teal" />
            </button>
          )}
        </div>
      </AnimationCard>
    </section>
  );
};

export default TrendingTv;
