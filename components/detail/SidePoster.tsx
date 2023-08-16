import Image from "next/image";
import React from "react";

const SidePoster = () => {
  return (
    <div className="w-full sticky">
      <div className="relative w-full h-[345px]">
        <Image
          className="rounded-lg"
          src="https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
          alt="saf"
          fill
        />
      </div>

      <div className="text-center mt-1">
        <div className="text-lg font-semibold">Oppenheimer</div>
        <i>The world forever changes.</i>
      </div>
    </div>
  );
};

export default SidePoster;
