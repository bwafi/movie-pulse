"use client";
import { getList } from "@/api/apiCall";
import Layout from "@/components/Layout";
import ButtonRectangle from "@/components/ui/ButtonRectangle";
import ListPage from "@/components/ui/ListPage";
import { ApiPorps } from "@/libs/type";
import React, { useEffect, useState } from "react";

const NowPlaying = () => {
  const [nowPlayingData, setNowPlayingData] = useState<ApiPorps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getList("movie", "now_playing", currentPage).then((res) => {
      const newData = res.data.results;
      currentPage === 1
        ? setNowPlayingData(newData)
        : setNowPlayingData((prevData) => [...prevData, ...res.data.results]);
    });
  }, [currentPage]);
  console.log(nowPlayingData);

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="text-grey w-full">
      <Layout>
        <ListPage listData={nowPlayingData} titlePage="Now Playing Movies" />
        {nowPlayingData.length === 20 && (
          <div className="flex justify-center mb-10">
            <ButtonRectangle handleLoadMore={handleLoadMore} />
          </div>
        )}
      </Layout>
    </div>
  );
};

export default NowPlaying;
