import Image from "next/image";
import React from "react";

const TopCast = () => {
  return (
    <section className="my-20">
      <div className="relative flex items-center gap-5 before:content-[''] before:absolute before:block before:w-1 before:h-3/4 before:bg-teal before:rounded-full">
        <h1 className="ml-3 text-2xl font-semibold ">Top Cast</h1>
      </div>

      <div className="mt-10 flex gap-8 flex-wrap">
        <div className="w-[160px] min-h-[245px] bg-black rounded-md overflow-hidden">
          <div className="w-[160px] h-[185px] relative">
            <Image src="https://image.tmdb.org/t/p/original/hGyB38HAtu0NcQaC7ijsfcQmDoE.jpg" alt="sda" fill />
          </div>
          <div className="py-3 px-2">
            <h3 className="font-semibold">Cillian Murphy</h3>
            <p className="text-sm">J. Robert Oppenheimer </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCast;
