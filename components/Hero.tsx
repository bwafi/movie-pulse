"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { IMAGE_URL } from "@/api/apiConfig";
import { DiscoverProps } from "@/libs/type";
import { useEffect, useState } from "react";
import "swiper/css";
import { discoverMovies } from "@/api/apiCall";

const Hero = () => {
  const [discoverData, setDiscoverData] = useState<DiscoverProps[]>([]);

  useEffect(() => {
    discoverMovies().then((res) => {
      setDiscoverData(res.data.results);
    });
  }, []);

  return (
    <section className="w-full max-h-[630px]">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}>
        {discoverData.slice(0, 10).map((item, index: number) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <Link
                href={`/movie/detail/${item.id}`}
                className="w-full block h-[240px] md:h-[480px] gradient-img relative before:content-[''] before:absolute before:block before:w-full before:h-full before:bg-black/40 before:z-10 ">
                <Image
                  src={`${IMAGE_URL}${item.backdrop_path}`}
                  alt={item.title}
                  priority
                  fill
                  className="object-cover align-bottom bg-soft-black"
                />
              </Link>

              <div className="relative h-[135px] md:h-[245px] bottom-10 md:bottom-32 left-0 md:left-16 z-20">
                <Link
                  href={`/movie/detail/${item.id}`}
                  className="absolute block w-[90px] md:w-[165px] h-[140px] md:h-[245px] border border-teal/80 rounded overflow-hidden">
                  <Image
                    src={`${IMAGE_URL}${item.poster_path}`}
                    alt={item.title}
                    priority
                    fill
                    className="shadow-[0px_0px_12px_3px_rgba(0,0,0,0.57)]"
                  />
                </Link>
                <div className="absolute w-fit top-7 md:top-32 left-[100px] md:left-48 before:content=[''] before:absolute before:block before:w-3 before:h-full before:bg-teal before:rounded-sm">
                  <div className="ml-5 md:ml-6">
                    <p className="text-xs md:text-sm text-teal">
                      Release : {dayjs(item.release_date).format("MMM DD, YYYY")}
                    </p>
                    <h1 className="text-base md:leading-10 md:text-[34px] font-semibold text-white">
                      <Link href={`/movie/detail/${item.id}`}>{item.title}</Link>
                    </h1>
                    <span className="w-7 md:w-8 h-7 md:h-8 flex justify-center items-center text-xs font-semibold rounded-full border-[3px] border-teal my-1">
                      {item.vote_average}
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
