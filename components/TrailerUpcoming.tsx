"use client";
import { ContextApi } from "@/context/tmdbAPI";
import React, { useEffect, useState } from "react";
import CardVideo from "./ui/CardVideo";
import { AiOutlineClose } from "react-icons/ai";
import { getTrailerVideos } from "@/api/apiCall";

const TrailerUpcoming = () => {
  const [movieId, setMovieId] = useState<number | null>(null);
  const [movieVideoKey, setMovieVideoKey] = useState<string>("");
  const [embedYtb, setEmbedYtb] = useState(false);
  const { movies } = ContextApi();

  useEffect(() => {
    if (movieId) {
      getTrailerVideos(movieId).then((res) => {
        setMovieVideoKey(res.data.results[1].key);
      });
    }
  }, [movieId, movieVideoKey]);

  const getMovieId = (id: number | null) => {
    setEmbedYtb(true);
    setMovieId(id);
  };

  return (
    <>
      <section className="w-full py-8">
        <div className="w-fit px-3">
          <div className="relative flex items-center before:content-[''] before:absolute before:block before:w-1 before:h-3/4 before:bg-teal before:rounded-full">
            <h1 className="ml-3 text-2xl font-semibold ">Trending TV Show</h1>
          </div>
          <p>Trailers for upcoming releases</p>
        </div>

        <div className="flex gap-5 py-10 overflow-x-auto">
          {movies.upcoming.map((item) => (
            <button key={item.id} onClick={() => getMovieId(item.id)} className="min-w-fit">
              <CardVideo item={item} />
            </button>
          ))}
        </div>
      </section>
      <div
        className={`fixed bg-black/40 backdrop-blur top-0 left-0 items-center justify-center z-50 w-full h-screen ${
          embedYtb ? "flex" : "hidden"
        }`}>
        <button onClick={() => setEmbedYtb(false)} className="absolute top-10 right-20">
          <AiOutlineClose className="text-4xl" title="Close" />
        </button>
        <iframe
          className="w-[800px] h-[500px]"
          src={`https://www.youtube.com/embed/${movieVideoKey}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </div>
    </>
  );
};

export default TrailerUpcoming;
