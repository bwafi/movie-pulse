import { CreditsProps, DetailMovieProps, DetailTvProps } from "@/libs/type";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { FaPlay } from "react-icons/fa";
dayjs.extend(duration);

interface DetailContentProps {
  detailMovieData?: DetailMovieProps;
  detailTvData?: DetailTvProps;
  creditData: CreditsProps;
  setEmbedYtb: Dispatch<SetStateAction<boolean>>;
}

const DetailContent = ({ detailMovieData, detailTvData, creditData, setEmbedYtb }: DetailContentProps) => {
  const genreNames = detailMovieData
    ? detailMovieData?.genres.map((genre) => genre.name).join(", ")
    : detailTvData?.genres.map((genre) => genre.name).join(", ");

  let hours = 0;
  let minutes = 0;

  if (detailMovieData) {
    const runtime = dayjs.duration(detailMovieData?.runtime, "minutes");
    hours = runtime.hours();
    minutes = runtime.minutes();
  }

  const directors = detailMovieData
    ? creditData.crew.filter((member) => member.job === "Director")
    : creditData.crew.filter((member) => member.job === "Series Director");
  const writers = detailMovieData
    ? creditData.crew.filter((member) => member.job === "Writer")
    : creditData.crew.filter((member) => member.job === "Comic Book");

  return (
    <div className="w-full">
      <div className="w-full">
        <h2 className="text-center lg:text-left text-2xl lg:text-3xl text-white font-semibold">
          {detailMovieData ? detailMovieData.title : detailTvData?.name}
        </h2>
        <div className="flex items-center justify-center lg:justify-start flex-wrap gap-1 text-sm mt-1">
          <span>{detailMovieData && dayjs(detailMovieData.release_date).format("MMM DD, YYYY")}</span>
          <span>&bull; {genreNames} &bull; </span>
          <span>{detailMovieData && `${hours}h, ${minutes}m`}</span>
        </div>

        <div className="mt-10 flex gap-3 items-center">
          <button
            onClick={() => setEmbedYtb(true)}
            className="flex text-sm lg:text-base items-center gap-2 font-semibold group hover:text-grey/80 border border-teal/50 py-1 px-3 rounded-full transition-colors duration-300">
            <FaPlay className="text-sm lg:text-lg text-teal group-hover:text-teal/80 transition-colors duration-300" />
            Play Trailer
          </button>
          <p className="text-teal text-sm lg:text-base font-semibold">
            Rating TMDB{" "}
            {detailMovieData ? detailMovieData.vote_average.toFixed(1) : detailTvData?.vote_average.toFixed(1)}
          </p>
        </div>

        <div className="w-full lg:w-10/12 max-h-[230px] flex items-center mt-3">
          <p className="text-sm lg:text-base tracking-wide leading-[22px]">
            {detailMovieData ? detailMovieData.overview : detailTvData?.overview}
          </p>
        </div>

        <div className="flex flex-col flex-wrap gap-2 mt-5">
          <ul className="flex text-sm lg:text-base">
            <li className="text-white font-semibold mr-3">Director :</li>
            {directors.length > 0 ? (
              directors.map((member, index: number) => (
                <li
                  key={member.id}
                  className="text-teal border-b border-b-transparent hover:border-b hover:border-b-teal">
                  <Link href={`/person/detail/${member.id}`}>
                    {index > 0 && ", "}
                    {member.name}
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-teal font-semibold">-</li>
            )}
          </ul>
          <ul className="flex text-sm lg:text-base">
            <li className="text-white font-semibold mr-3">Writer :</li>
            {writers.length > 0 ? (
              writers.map((member, index: number) => (
                <li
                  key={member.id}
                  className="text-teal border-b border-b-transparent hover:border-b hover:border-b-teal">
                  <Link href={`/person/detail/${member.id}`}>
                    {index > 0 && ", "}
                    {member.name}
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-teal font-semibold">-</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
