import { IMAGE_URL } from "@/api/apiConfig";
import Image from "next/image";
import React from "react";

interface CardMini {
  id: number;
  profile: string;
  name: string;
  character?: string;
}

const CardMini = ({ id, profile, name, character }: CardMini) => {
  return (
    <div
      key={id}
      className="w-[160px] min-h-[260px] bg-black rounded-md overflow-hidden border border-teal/30 shadow-md">
      <div className="w-[160px] h-[185px] relative">
        <Image src={`${IMAGE_URL}${profile}`} alt={name} fill />
      </div>
      <div className="py-3 px-2">
        <h3 className="font-semibold text-white">{name}</h3>
        {character && <p className="text-sm">{character}</p>}
      </div>
    </div>
  );
};

export default CardMini;
