"use client";
import { ContextApi } from "@/context/tmdbAPI";
import React, { useState } from "react";
import Card from "./ui/Card";
import AnimationCard from "./ui/AnimationCard";
import TitleSection from "./ui/TitleSection";
import ButtonLoadMore from "./ui/ButtonLoadMore";

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

  const handleLoadMore = () => {
    setIndexCard((prev) => prev + 10);
  };

  return (
    <section className="w-full py-10 lg:py-12 px-3 overflow-x-hidden">
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
        <div className="flex items-center gap-3 lg:gap-5 w-full my-6 overflow-x-auto">
          {trendingMovies[currentTrending].slice(0, indexCard).map((item) => (
            <Card key={item.id} item={item} />
          ))}
          {indexCard < trendingMovies[currentTrending].length && <ButtonLoadMore handleLoadMore={handleLoadMore} />}
        </div>
      </AnimationCard>
    </section>
  );
};

export default TrendingMovies;
