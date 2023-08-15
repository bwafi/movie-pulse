"use client";
import React, { useState } from "react";
import TitleSection from "./ui/TitleSection";
import Image from "next/image";

const TrendingPeople = () => {
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
    <section className="w-full h-screen px-3 my-16">
      <div className="w-full">
        <TitleSection
          handleTrendingDay={handleTrendingDay}
          handleTrendingWeek={handleTrendingWeek}
          currentTrending={currentTrending}
          title="Trending People"
          subTitle="Most Trending Celebs"
        />
      </div>

      <div className="w-full my-6 overflow-x-auto">
        <div className="w-48">
          <div className="w-48 h-48 relative">
            <Image
              src={"https://image.tmdb.org/t/p/original//plLfB60M5cJrnog8KvAKhI4UJuk.jpg"}
              alt="asd"
              fill
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <h2 className="mt-1 text-lg text-center font-semibold ">Thomas Slebew</h2>
        </div>
      </div>
    </section>
  );
};

export default TrendingPeople;
