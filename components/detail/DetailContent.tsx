import React from "react";
import { FaPlay } from "react-icons/fa";

const DetailContent = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <h2 className="text-3xl font-semibold">Oppenheimer</h2>
        <div className="flex items-center gap-1 text-sm mt-1">
          <span>may 27, 20023</span>
          <span>&bull; Drama, sejarah</span>
          <span>&bull; 3h 1m</span>
        </div>

        <div className="mt-10 flex gap-3 items-center">
          <span className="flex gap-2">
            <FaPlay className="text-xl" />
            Play Trailer
          </span>
          <p className="text-teal">Rating TMDB 7.5</p>
        </div>

        <div className="w-10/12 h-32 flex items-center">
          <p>
            Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie
            Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of
            living among humans.
          </p>
        </div>

        <div className="flex flex-col gap-2 mt-5">
          <p className="font-semibold">
            Director : <span className="font-normal text-teal">Christopher Nolan</span>
          </p>
          <p className="font-semibold">
            Writers : <span className="font-normal text-teal">Christopher Nolan</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
