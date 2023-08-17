import { DetailProps } from "@/libs/type";
import dayjs from "dayjs";
import React from "react";
import { FaPlay } from "react-icons/fa";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

const DetailContent = ({ detailData }: { detailData: DetailProps }) => {
  const genreNames = detailData.genres.map((genre) => genre.name).join(", ");

  const runtime = dayjs.duration(detailData.runtime, "minutes");
  const hours = runtime.hours();
  const minutes = runtime.minutes();

  return (
    <div className="w-full">
      <div className="w-full">
        <h2 className="text-3xl font-semibold">{detailData.title}</h2>
        <div className="flex items-center gap-1 text-sm mt-1">
          <span>{dayjs(detailData.release_date).format("MMM DD, YYYY")}</span>
          <span>&bull; {genreNames}</span>
          <span>&bull; {`${hours}h, ${minutes}m`}</span>
        </div>

        <div className="mt-10 flex gap-3 items-center">
          <span className="flex gap-2 font-semibold">
            <FaPlay className="text-xl" />
            Play Trailer
          </span>
          <p className="text-teal font-semibold">Rating TMDB {detailData.vote_average.toFixed(1)}</p>
        </div>

        <div className="w-10/12 min-h-[230px] flex items-center">
          <p className="tracking-wide leading-relaxed">{detailData.overview}</p>
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
