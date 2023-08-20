import { IMAGE_URL } from "@/api/apiConfig";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React from "react";

interface CardMini {
  id: number;
  profile: string;
  title?: string;
  name?: string;
  character?: string;
}

const CardMini = ({ id, profile, name, character }: CardMini) => {
  return (
    <Link
      href={character ? `/person/${id}` : name ? `/tv/${id}` : title && `/movie/${id}`}
      className="w-[160px] min-h-[260px] bg-black rounded-md overflow-hidden border border-teal/30 shadow-md">
      <div className="w-[160px] h-[185px] relative">
        <Image src={`${IMAGE_URL}${profile}`} alt={name || title} fill />
      </div>
      <div className="py-2 px-2">
        <h3 className="font-semibold text-white">{name || title}</h3>
        {character && <p className="text-sm mt-1">{character}</p>}
      </div>
    </Link>
  );
};

export default CardMini;
