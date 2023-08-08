"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { ContextApi } from "@/context/tmdbAPI";
import { IMAGE_URL } from "@/libs/baseApi";

const Hero = () => {
  const { discovers } = ContextApi();

  return (
    <section className="w-full max-h-[630px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        slidesPerView={1}>
        {discovers.map((item, index: number) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <div className="w-full h-[480px] gradient-img relative before:content-[''] before:absolute before:block before:w-full before:h-full before:bg-black/40 before:z-10 ">
                <Image
                  src={`${IMAGE_URL}${item.backdrop_path}`}
                  alt="sds"
                  fill
                  className="object-cover align-bottom"
                  // width={1200}
                  // height={200}
                />
              </div>

              <div className="relative h-[245px] bottom-32 left-16 z-20">
                <div className="absolute w-[165px] h-[245px]">
                  <Image
                    src={`${IMAGE_URL}${item.poster_path}`}
                    alt="sda"
                    fill
                    className="shadow-[0px_0px_12px_3px_rgba(0,0,0,0.57)] rounded"
                  />
                </div>
                <div className="absolute w-fit top-36 left-48 before:content=[''] before:absolute before:block before:w-3 before:h-full before:bg-teal before:rounded-sm">
                  <div className="ml-8">
                    <h1 className="text-[34px] font-semibold">{item.title}</h1>
                    <span className="inline-block p-1.5 font-semibold rounded-full border-[3px] border-teal mt-2">
                      7.5
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
