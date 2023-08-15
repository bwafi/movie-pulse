"use client";
import React, { useState } from "react";
import TitleSection from "./ui/TitleSection";
import Image from "next/image";
import { ContextApi } from "@/context/tmdbAPI";
import { IMAGE_URL } from "@/api/apiConfig";
import AnimationCard from "./ui/AnimationCard";
import { BsArrowRightCircle } from "react-icons/bs";

const TrendingPeople = () => {
  const { people } = ContextApi();
  const [currentTrending, setCurrentTrending] = useState<"day" | "week">("day");
  const [indexCard, setIndexCard] = useState(10);

  console.log(people);

  const handleTrendingDay = () => {
    setIndexCard(10);
    setCurrentTrending("day");
  };

  const handleTrendingWeek = () => {
    setIndexCard(10);
    setCurrentTrending("week");
  };

  return (
    <section className="w-full px-3 my-16">
      <div className="w-full">
        <TitleSection
          handleTrendingDay={handleTrendingDay}
          handleTrendingWeek={handleTrendingWeek}
          currentTrending={currentTrending}
          title="Trending People"
          subTitle="Most Trending Celebs"
        />
      </div>

      <AnimationCard keyAction={currentTrending}>
        <div className="w-full flex gap-5 my-6 overflow-x-auto">
          {people.trending[currentTrending].slice(0, indexCard).map((item) => (
            <div key={item.id} className="w-60 mb-10">
              <div className="w-60 h-60 relative">
                <Image
                  src={`${IMAGE_URL}${item.profile_path}`}
                  alt="asd"
                  fill
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h2 className="mt-1 text-lg text-center font-semibold ">{item.name}</h2>
            </div>
          ))}
          {indexCard < people.trending[currentTrending].length && (
            <button className="mx-3" onClick={() => setIndexCard(indexCard + 10)}>
              <BsArrowRightCircle className="text-3xl text-teal" />
            </button>
          )}
        </div>
      </AnimationCard>
    </section>
  );
};

export default TrendingPeople;
