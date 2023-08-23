import Image from "next/image";
import React from "react";

const PopularPersonBody = () => {
  return (
    <div className="my-10 px-5">
      <h1 className="text-2xl font-bold">Popular People</h1>

      <div className="w-full flex flex-wrap gap-5 mt-5">
        <div className="max-w-[235px] overflow-hidden shadow-lg border border-teal/30 rounded-md">
          <div className="relative w-[235px] h-[235px]">
            <Image
              src={"https://image.tmdb.org/t/p/original/2JMxcjkUc5SPrj8P9GCFQev4pbm.jpg"}
              alt="sad"
              fill
              className="object-cover"
            />
          </div>
          <div className="px-3 my-1">
            <h2 className="text-lg font-semibold text-white">AJ Raval</h2>
            <p className="line-clamp-1 text-sm">The Dark Knight, The Dark Knight Rises, Darkest Hour</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPersonBody;
