"use client";
import React, { useEffect, useState } from "react";
import TitleSection from "./ui/TitleSection";
import Image from "next/image";
import { IMAGE_URL } from "@/api/apiConfig";
import AnimationCard from "./ui/AnimationCard";
import ButtonLoadMore from "./ui/ButtonLoadMore";
import Link from "next/link";
import { ApiPorps } from "@/libs/type";
import { getTrendings } from "@/api/apiCall";

const TrendingPeople = () => {
  const [trendingPeople, setTrendingPeople] = useState<ApiPorps[]>([]);
  const [currentTrending, setCurrentTrending] = useState<"day" | "week">("day");
  const [indexCard, setIndexCard] = useState(10);

  useEffect(() => {
    getTrendings("person", currentTrending).then((res) => {
      setTrendingPeople(res.data.results);
    });
  }, [currentTrending]);

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
    <section className="w-full px-3 my-10 lg:my-32">
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
        <div className="w-full flex items-center gap-3 lg:gap-5 my-6 overflow-x-auto">
          {trendingPeople.slice(0, indexCard).map((item) => (
            <div key={item.id} className="w-fit mb-10">
              <Link href={`/person/detail/${item.id}`} className="block w-44 lg:w-60 h-44 lg:h-60 relative">
                <Image
                  src={`${IMAGE_URL}${item.profile_path}`}
                  alt={`${item.name}`}
                  fill
                  className="rounded-full object-cover"
                />
              </Link>
              <h2 className="mt-1 text-base lg:text-lg text-center text-white font-semibold ">{item.name}</h2>
            </div>
          ))}
          {indexCard < trendingPeople.length && <ButtonLoadMore handleLoadMore={handleLoadMore} />}
        </div>
      </AnimationCard>
    </section>
  );
};

export default TrendingPeople;
