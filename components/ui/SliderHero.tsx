"use client";
import Image from "next/image";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { ContextApi } from "@/context/tmdbAPI";
import { IMAGE_URL } from "@/api/apiConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import dayjs from "dayjs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

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
            <Link
              href={`/movie/${item.id}`}
              className="w-full block h-[480px] gradient-img relative before:content-[''] before:absolute before:block before:w-full before:h-full before:bg-black/40 before:z-10 ">
              <Image
                src={`${IMAGE_URL}${item.backdrop_path}`}
                alt="sds"
                priority
                fill
                className="object-cover align-bottom bg-soft-black"
              />
            </Link>

            <div className="relative h-[245px] bottom-32 left-16 z-20">
              <Link
                href={`/movie/${item.id}`}
                className="absolute block w-[165px] h-[245px] border border-teal/80 rounded overflow-hidden">
                <Image
                  src={`${IMAGE_URL}${item.poster_path}`}
                  alt={item.title}
                  priority
                  fill
                  className="shadow-[0px_0px_12px_3px_rgba(0,0,0,0.57)]"
                />
              </Link>
              <div className="absolute w-fit top-32 left-48 before:content=[''] before:absolute before:block before:w-3 before:h-full before:bg-teal before:rounded-sm">
                <div className="ml-6">
                  <p className="text-xs text-teal">Release : {dayjs(item.release_date).format("MMM DD, YYYY")}</p>
                  <h1 className="text-[34px] font-semibold text-white">
                    <Link href={`/movie/${item.id}`}>{item.title}</Link>
                  </h1>
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
