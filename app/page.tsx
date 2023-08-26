"use client";
import { discoverMovies } from "@/api/apiCall";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import TrailerUpcoming from "@/components/TrailerUpcoming";
import TrendingMovies from "@/components/TrendingMovies";
import TrendingPeople from "@/components/TrendingPeople";
import TrendingTv from "@/components/TrendingTv";
import { DiscoverProps } from "@/libs/type";
import { useEffect, useState } from "react";

export default function Home() {
  const [discoverData, setDiscoverData] = useState<DiscoverProps[]>([]);

  useEffect(() => {
    discoverMovies().then((res) => {
      setDiscoverData(res.data.results);
    });
  }, []);

  return (
    <div className="w-full mx-auto bg-green-black text-grey">
      <Layout>
        <Hero discoverData={discoverData} />
        <TrendingMovies />
        <TrendingTv />
        <TrailerUpcoming />
        <TrendingPeople />
      </Layout>
    </div>
  );
}
