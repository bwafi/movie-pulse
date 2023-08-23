import { IMAGE_URL } from "@/api/apiConfig";
import { PopularPersonProps } from "@/libs/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PopularPersonBodyProps {
  listData: PopularPersonProps[];
}

const PopularPerson = ({ listData }: PopularPersonBodyProps) => {
  return (
    <div className="my-10 px-5">
      <h1 className="text-2xl font-bold">Popular People</h1>

      <div className="w-full flex flex-wrap gap-8 mt-5">
        {listData.map((item) => (
          <div
            key={item.id}
            className="max-w-[235px] overflow-hidden shadow-lg border border-teal/30 rounded-md hover:border-white/30 transition-colors duration-300">
            <Link href={`/person/detail/${item.id}`} className="block relative w-[235px] h-[235px]">
              <Image src={`${IMAGE_URL}${item.profile_path}`} alt={item.name} fill className="object-cover" />
            </Link>
            <div className="px-3 my-1">
              <h2 className="text-lg font-semibold text-white">
                <Link href={`/person/detail/${item.id}`}>{item.name}</Link>
              </h2>
              <p className="line-clamp-1 text-sm">{item.known_for.map((item) => item.name || item.title).join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPerson;
