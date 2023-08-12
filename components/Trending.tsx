"use client";
import { ContextApi } from "@/context/tmdbAPI";
import React, { useState } from "react";
import Card from "./ui/Card";
import { AnimatePresence, motion } from "framer-motion";

const Trending = () => {
  const { trendingsMovieDay, trendingsMovieWeek } = ContextApi();
  const [currentTrending, setCurrentTrending] = useState<"day" | "week">("day");

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

      <AnimatePresence mode="wait">
        {currentTrending === "day" && (
          <motion.div
            key="day"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ ease: [0.17, 0.18, 0.19, 0.2] }}
            className="flex gap-5 w-full my-6 overflow-x-scroll">
            {trendingsMovieDay.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </motion.div>
        )}

        {currentTrending === "week" && (
          <motion.div
            key="week"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ ease: [0.17, 0.18, 0.19, 0.2] }}
            className="flex gap-5 w-full my-6 overflow-x-scroll">
            {trendingsMovieWeek.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Trending;
