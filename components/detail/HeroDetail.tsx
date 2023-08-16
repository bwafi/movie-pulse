import Image from "next/image";
import React from "react";

const HeroDetail = () => {
  return (
    <section className="w-full sticky px-10">
      <div className="w-[1100px] min-h-[550px] mx-auto relative">
        <Image src="https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg" alt="sda" fill />
        <div className="absolute w-full h-full detail-hero top-0 mx-auto "></div>
      </div>
    </section>
  );
};

export default HeroDetail;
