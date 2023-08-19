"use client";
import React, { useState } from "react";
import TitleSection from "./ui/TitleSection";
import Image from "next/image";
import { ContextApi } from "@/context/tmdbAPI";
import { IMAGE_URL } from "@/api/apiConfig";
import AnimationCard from "./ui/AnimationCard";
import ButtonLoadMore from "./ui/ButtonLoadMore";
import Link from "next/link";

const TrendingPeople = () => {
  const { people } = ContextApi();
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
    <section className="w-full px-3 my-32">
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
        <div className="w-full flex items-center gap-5 my-6 overflow-x-auto">
          {people.trending[currentTrending].slice(0, indexCard).map((item) => (
            <div key={item.id} className="w-60 mb-10">
              <Link href={`/person/${item.id}`} className="block w-60 h-60 relative">
                <Image src={`${IMAGE_URL}${item.profile_path}`} alt="asd" fill className="rounded-full object-cover" />
              </Link>
              <h2 className="mt-1 text-lg text-center text-white font-semibold ">{item.name}</h2>
            </div>
          ))}
          {indexCard < people.trending[currentTrending].length && <ButtonLoadMore handleLoadMore={handleLoadMore} />}
        </div>
      </AnimationCard>
    </section>
  );
};

export default TrendingPeople;
