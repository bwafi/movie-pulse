import { CreditsProps } from "@/libs/type";
import React from "react";
import CardMini from "../ui/CardMini";

const TopCast = ({ creditData }: { creditData: CreditsProps }) => {
  return (
    <section className="my-10 lg:my-20">
      <div className="relative flex items-center gap-5 before:content-[''] before:absolute before:block before:w-1 before:h-3/4 before:bg-teal before:rounded-full">
        <h1 className="ml-3 text-xl lg:text-2xl text-white font-semibold ">Top Cast</h1>
      </div>

      <div className="mt-5 lg:mt-8 flex lg:justify-start justify-center gap-3 lg:gap-8 flex-wrap">
        {creditData.cast.slice(0, 5).map((member) => (
          <CardMini
            key={member.id}
            profile={member.profile_path}
            name={member.name}
            character={member.character}
            id={member.id}
          />
        ))}
      </div>
    </section>
  );
};

export default TopCast;
