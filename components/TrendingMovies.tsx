"use client";
import { ContextApi } from "@/context/tmdbAPI";
import React, { useState } from "react";
import Card from "./ui/Card";
import AnimationCard from "./ui/AnimationCard";
import { BsArrowRightCircle } from "react-icons/bs";
import TitleSection from "./ui/TitleSection";

const TrendingMovies = () => {
  const { trendingMovies } = ContextApi();
  const [currentTrending, setCurrentTrending] = useState<"day" | "week">("day");
  const [indexCard, setIndexCard] = useState(10);

  const handleTrendingDay = () => {
    setIndexCard(10);
    setCurrentTrending("day");
  };

  const handleTrendingWeek = () => {
    setIndexCard(10);
    setCurrentTrending("week");
  };

  return (
    <section className="w-full my-16 px-3 overflow-x-hidden">
      <div className="w-full">
        <TitleSection
          handleTrendingDay={handleTrendingDay}
          handleTrendingWeek={handleTrendingWeek}
          currentTrending={currentTrending}
          title="Trending Movies"
          subTitle="Trending Movies Just For You"
        />
      </div>

      <AnimationCard keyAction={currentTrending}>
        <div className="flex gap-5 w-full my-6 overflow-x-auto">
          {trendingMovies[currentTrending].slice(0, indexCard).map((item) => (
            <Card key={item.id} item={item} />
          ))}
          {indexCard < trendingMovies[currentTrending].length && (
            <button className="mx-3" onClick={() => setIndexCard(indexCard + 10)}>
              <BsArrowRightCircle className="text-3xl text-teal" />
            </button>
          )}
        </div>
      </AnimationCard>
    </section>
  );
};

export default TrendingMovies;
