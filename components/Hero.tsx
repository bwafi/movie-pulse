import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full">
        <div className="w-full h-[400px] relative before:content-[''] before:absolute before:block before:w-full before:h-full before:bg-black/20 before:z-10 ">
          <Image
            src={"https://image.tmdb.org/t/p/original/nHf61UzkfFno5X1ofIhugCPus2R.jpg"}
            alt="sds"
            fill
            className="object-cover align-bottom"
            // width={1200}
            // height={200}
          />
        </div>

        <div className="relative w-[165px] h-[245px] bottom-40 left-9 z-20">
          <Image
            src={"https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"}
            alt="sda"
            fill
            className="shadow-[0px_0px_12px_3px_rgba(0,0,0,0.57)] rounded"
          />
          <div className="absolute top-20 left-48">
            <h1 className="text-4xl font-semibold">Barbie</h1>
            <span className="inline-block p-1 font-semibold rounded-full border border-teal mt-2">7.5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
