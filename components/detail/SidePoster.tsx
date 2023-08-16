import Image from "next/image";
import React from "react";

const SidePoster = () => {
  return (
    <div className="w-full border-[1px] border-white/20 shadow-md">
      <div className="relative w-full h-[335px]">
        <Image
          className="rounded-lg"
          src="https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
          alt="saf"
          fill
        />
      </div>

      <div className="text-center py-3 px-0.5">
        <div className="text-lg font-semibold">Oppenheimer</div>
        <i className="mt-1 block">"The world forever changes"</i>
      </div>
    </div>
  );
};

export default SidePoster;
