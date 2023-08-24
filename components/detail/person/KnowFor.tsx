import CardMini from "@/components/ui/CardMini";
import { CastPersonProps } from "@/libs/type";
import React from "react";

interface KnowForPorps {
  detailCombinePerson?: CastPersonProps[];
}

const KnowFor = ({ detailCombinePerson }: KnowForPorps) => {
  return (
    <div className="w-full my-20">
      <div className="relative flex items-center gap-5 before:content-[''] before:absolute before:block before:w-1 before:h-3/4 before:bg-teal before:rounded-full">
        <h1 className="ml-3 text-xl lg:text-2xl text-white font-semibold ">Know For</h1>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 lg:gap-8">
        {detailCombinePerson?.slice(0, 7).map((item) => (
          <CardMini key={item.id} name={item.name} title={item.title} profile={item.poster_path} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default KnowFor;
