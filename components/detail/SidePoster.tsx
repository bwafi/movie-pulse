import { IMAGE_URL } from "@/api/apiConfig";
import Image from "next/image";
import React, { FC } from "react";

type SidePosterProps = {
  poster: string;
  title: string;
  tagLine: string;
};

const SidePoster: FC<SidePosterProps> = ({ poster, title, tagLine }) => {
  return (
    <div className="w-full border-[1px] border-white/20 shadow-md rounded-md ">
      <div className="relative w-full h-[335px]">
        <Image className="rounded-lg" src={`${IMAGE_URL}${poster}`} alt={title} fill />
      </div>

      <div className="text-center py-3 px-0.5">
        <div className="text-lg font-semibold">{title}</div>
        <i className="mt-1 block">"{tagLine}"</i>
      </div>
    </div>
  );
};

export default SidePoster;
