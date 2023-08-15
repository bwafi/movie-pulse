import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { ApiPorps } from "@/libs/type";
import { IMAGE_URL } from "@/api/apiConfig";

const CardVideo = ({ item }: { item: ApiPorps }) => {
  return (
    <div className="first:ml-3 max-w-[300px] min-h-fit group">
      <div className="relative h-auto">
        <div className="absolute w-full h-full flex items-center justify-center before:content-[''] before:block before:w-full before:h-full before:bg-black/10 before:absolute">
          <FaPlay className="absolute z-[2] text-5xl text-white group-hover:scale-125 transition-all" />
        </div>

        <Image
          src={`${IMAGE_URL}${item.backdrop_path}`}
          alt="sdva"
          className="rounded-lg group-hover:scale-105 transition-all"
          width={300}
          height={170}
        />
      </div>
      <div className="w-full mx-auto text-center my-3 tracking-wide">
        <div className="h-10 flex items-center justify-center">
          <h2 className="mt-1 text-xl text-center font-semibold line-clamp-2">{item.title}</h2>
        </div>
        <p className="text-sm mt-3">{item.release_date}</p>
      </div>
    </div>
  );
};

export default CardVideo;