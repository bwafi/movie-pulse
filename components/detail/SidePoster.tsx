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
    <div className="w-full xs:w-8/12 sm:w-5/12 md:w-full mx-auto border-[1px] border-teal/30 hover:border-white/30 shadow-md rounded-lg overflow-hidden transition-colors duration-300">
      <div className="relative w-full h-[365px] lg:h-[335px]">
        <Image src={`${IMAGE_URL}${poster}`} alt={title} fill />
      </div>

      <div className="hidden lg:block text-center py-3 px-0.5">
        <div className="text-lg font-semibold text-white">{title}</div>
        <i className="mt-1 block">"{tagLine}"</i>
      </div>
    </div>
  );
};

export default SidePoster;
