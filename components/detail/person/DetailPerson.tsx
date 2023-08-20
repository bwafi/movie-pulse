import React from "react";
import { GoChevronRight } from "react-icons/go";

interface DetailPersonProps {
  name?: string;
  biography?: string;
}

const DetailPerson = ({ name, biography }: DetailPersonProps) => {
  const paragraphs = biography?.split("\n\n");

  return (
    <section className="w-full">
      <h1 className="text-4xl font-bold text-white">{name}</h1>
      <div className="mt-5">
        <h2 className="font-semibold text-white text-2xl">Biography</h2>
        <div className="relative">
          <div className="relative max-h-[222px] overflow-hidden after:content-[''] after:block after:absolute after:w-full after:h-[22px] after:bg-gradient-to-r after:from-white/0 after:to-green-black after:bottom-0">
            {paragraphs?.map((paragraph, index: number) => (
              <p key={index} className="mt-3 leading-[22px] tracking-wide ">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="absolute right-0 bottom-[0.5px]">
            <button className="text-teal flex items-center">
              Read More
              <GoChevronRight className="text-teal text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPerson;
