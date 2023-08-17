import { IMAGE_URL } from "@/api/apiConfig";
import Image from "next/image";
import React from "react";

type HeroDetailProps = {
  backDropImage: string;
  title: string;
};

const HeroDetail = ({ backDropImage, title }: HeroDetailProps) => {
  return (
    <section className="w-full flex justify-center px-10">
      <div className="w-[1100px] min-h-[550px] mx-auto relative">
        <Image src={`${IMAGE_URL}${backDropImage}`} alt={title} fill />
        <div className="absolute w-full h-full detail-hero top-0 left-0 mx-auto "></div>
      </div>
    </section>
  );
};

export default HeroDetail;
