"use client";
import React, { useEffect, useState } from "react";
import CardVideo from "./ui/CardVideo";
import { getListMovies, getTrailerVideos } from "@/api/apiCall";
import EmbedVideo from "./ui/EmbedVideo";
import ButtonLoadMore from "./ui/ButtonLoadMore";
import { ApiPorps, VideoProps } from "@/libs/type";

const TrailerUpcoming = () => {
  const [movieId, setMovieId] = useState<number | null>(null);
  const [videoData, setVideoData] = useState<VideoProps[]>([]);
  const [upcomingData, setUpcomingData] = useState<ApiPorps[]>([]);

  const [embedYtb, setEmbedYtb] = useState(false);
  const [indexCard, setIndexCard] = useState(10);

  useEffect(() => {
    getListMovies("upcoming").then((res) => {
      setUpcomingData(res.data.results);
    });

    if (movieId)
      getTrailerVideos("movie", movieId).then((res) => {
        setVideoData(res.data.results);
      });
  }, [movieId]);

  const movieVideoKey = videoData.filter((item) => item.type === "Trailer");

  const getMovieId = (id: number | null) => {
    setEmbedYtb(true);
    setMovieId(id);
  };

  const handleCloseEmbed = () => {
    setEmbedYtb(false);
    setMovieId(null);
  };

  const handleLoadMore = () => {
    setIndexCard((prev) => prev + 10);
  };

  return (
    <>
      <section className="w-full py-20">
        <div className="w-fit px-3">
          <div className="relative flex items-center before:content-[''] before:absolute before:block before:w-1 before:h-3/4 before:bg-teal before:rounded-full">
            <h1 className="ml-3 text-2xl text-white font-semibold ">Latest Trailers</h1>
          </div>
        </div>

        <div className="flex ml-3 gap-5 py-10 overflow-x-auto">
          {upcomingData.slice(0, indexCard).map((item) => (
            <button key={item.id} onClick={() => getMovieId(item.id)} className="min-w-fit">
              <CardVideo item={item} />
            </button>
          ))}

          {indexCard < upcomingData.length && <ButtonLoadMore handleLoadMore={handleLoadMore} />}
        </div>
      </section>
      <EmbedVideo handleCloseEmbed={handleCloseEmbed} movieVideoKey={movieVideoKey[0]?.key} embedYtb={embedYtb} />
    </>
  );
};

export default TrailerUpcoming;
