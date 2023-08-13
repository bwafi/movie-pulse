"use client";
import Image from "next/image";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { ContextApi } from "@/context/tmdbAPI";
import { IMAGE_URL } from "@/api/apiConfig";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
const SliderHero = () => {
  const { discovers } = ContextApi();

  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation
      slidesPerView={1}>
      {discovers.slice(0, 10).map((item, index: number) => (
        <SwiperSlide key={index}>
          <div className="w-full">
            <div className="w-full h-[480px] gradient-img relative before:content-[''] before:absolute before:block before:w-full before:h-full before:bg-black/40 before:z-10 ">
              <Image
                src={`${IMAGE_URL}${item.backdrop_path}`}
                alt="sds"
                priority
                fill
                className="object-cover align-bottom bg-soft-black"
              />
            </div>

            <div className="relative h-[245px] bottom-32 left-16 z-20">
              <div className="absolute w-[165px] h-[245px]">
                <Image
                  src={`${IMAGE_URL}${item.poster_path}`}
                  alt="sda"
                  priority
                  fill
                  className="shadow-[0px_0px_12px_3px_rgba(0,0,0,0.57)] rounded"
                />
              </div>
              <div className="absolute w-fit top-32 left-48 before:content=[''] before:absolute before:block before:w-3 before:h-full before:bg-teal before:rounded-xs">
                <div className="ml-6">
                  <p className="text-xs text-teal">Release : {item.release_date}</p>
                  <h1 className="text-[34px] font-semibold">{item.title}</h1>
                  <span className="w-8 h-8 flex justify-center items-center text-xs font-semibold rounded-full border-[3px] border-teal my-1">
                    {item.vote_average}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderHero;
