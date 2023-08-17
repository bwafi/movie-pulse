import { IMAGE_URL } from "@/api/apiConfig";
import { CreditsProps } from "@/libs/type";
import Image from "next/image";
import React from "react";

const TopCast = ({ creditData }: { creditData: CreditsProps }) => {
  return (
    <section className="my-20">
      <div className="relative flex items-center gap-5 before:content-[''] before:absolute before:block before:w-1 before:h-3/4 before:bg-teal before:rounded-full">
        <h1 className="ml-3 text-2xl font-semibold ">Top Cast</h1>
      </div>

      <div className="mt-8 flex gap-8 flex-wrap">
        {creditData.cast.slice(0, 5).map((member) => (
          <div
            key={member.id}
            className="w-[160px] min-h-[260px] bg-black rounded-md overflow-hidden border-[1px] border-teal/40 shadow-md">
            <div className="w-[160px] h-[185px] relative">
              <Image src={`${IMAGE_URL}${member.profile_path}`} alt={member.name} fill />
            </div>
            <div className="py-3 px-2">
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm">{member.character}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCast;
