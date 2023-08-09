"use client";
import { ContextApi } from "@/context/tmdbAPI";
import React from "react";

const Trending = () => {
  const { handleTrendingDay, handleTrendingWeek, trendings } = ContextApi();

  return (
    <div>
      <button onClick={handleTrendingDay}>Trending Today</button>
      <button onClick={handleTrendingWeek}>Trending Week</button>
    </div>
  );
};

export default Trending;
