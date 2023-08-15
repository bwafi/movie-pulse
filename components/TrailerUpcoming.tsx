"use client";
import { ContextApi } from "@/context/tmdbAPI";
import React, { useEffect, useState } from "react";
import CardVideo from "./ui/CardVideo";
import { getTrailerVideos } from "@/api/apiCall";
import EmbedVideo from "./ui/EmbedVideo";
import { BsArrowRightCircle } from "react-icons/bs";

const TrailerUpcoming = () => {
  const [movieId, setMovieId] = useState<number | null>(null);
  const [movieVideoKey, setMovieVideoKey] = useState<string>("");
  const [embedYtb, setEmbedYtb] = useState(false);
  const [indexCard, setIndexCard] = useState(10);
  const { movies } = ContextApi();

  useEffect(() => {
    if (movieId)
      getTrailerVideos(movieId).then((res) => {
        setMovieVideoKey(res.data.results[0].key);
      });
  }, [movieId]);

  const getMovieId = (id: number | null) => {
    setEmbedYtb(true);
    setMovieId(id);
  };

  const handleCloseEmbed = () => {
    setEmbedYtb(false);
    setMovieId(null);
  };

  return (
    <>
      <section className="w-full py-20">
        <div className="w-fit px-3">
          <div className="relative flex items-center before:content-[''] before:absolute before:block before:w-1 before:h-3/4 before:bg-teal before:rounded-full">
            <h1 className="ml-3 text-2xl font-semibold ">Coming soon to theaters</h1>
          </div>
          <p>Trailers for upcoming releases</p>
        </div>

        <div className="flex gap-5 py-10 overflow-x-auto">
          {movies.upcoming.slice(0, indexCard).map((item) => (
            <button key={item.id} onClick={() => getMovieId(item.id)} className="min-w-fit">
              <CardVideo item={item} />
            </button>
          ))}

          {indexCard < movies.upcoming.length && (
            <button className="mx-3" onClick={() => setIndexCard(indexCard + 10)}>
              <BsArrowRightCircle className="text-3xl text-teal" />
            </button>
          )}
        </div>
      </section>
      <EmbedVideo handleCloseEmbed={handleCloseEmbed} movieVideoKey={movieVideoKey} embedYtb={embedYtb} />
    </>
  );
};

export default TrailerUpcoming;
