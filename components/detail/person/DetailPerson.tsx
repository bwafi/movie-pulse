"use client";
import React, { useState } from "react";
import { GoChevronRight } from "react-icons/go";

interface DetailPersonProps {
  name?: string;
  biography?: string;
}

const DetailPerson = ({ name, biography }: DetailPersonProps) => {
  const [showParagraph, setShowParagraph] = useState<boolean>(false);

  const paragraphs = biography?.split("\n\n");

  return (
    <section className="w-full">
      <h1 className="text-4xl font-bold text-white">{name}</h1>
      <div className="mt-5">
        <h2 className="font-semibold text-white text-2xl">Biography</h2>
        <div className="relative">
          <div
            className={`relative overflow-hidden  transition-[max-height] duration-700 after:content-[''] after:block after:absolute after:w-full after:h-[24px] after:bg-gradient-to-r after:from-white/0 after:to-green-black after:bottom-0 ${
              showParagraph || (paragraphs && paragraphs.length < 3) ? "after:!h-0 max-h-[3000px]" : "max-h-[219px]"
            }`}>
            {paragraphs?.map((paragraph, index: number) => (
              <p key={index} className="mt-3 leading-6 tracking-wide ">
                {paragraph}
              </p>
            ))}
          </div>
          {!showParagraph && paragraphs && paragraphs.length > 2 && (
            <div className="absolute right-5 bottom-0">
              <button onClick={() => setShowParagraph(true)} className="text-teal flex items-center">
                Read More
                <GoChevronRight className="text-teal text-xl" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DetailPerson;
