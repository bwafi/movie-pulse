"use client";
import Image from "next/image";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const Hero = () => {
  const discover = [
    {
      img: "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
      poster: "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    },
    {
      img: "https://image.tmdb.org/t/p/original/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
      poster: "https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    },
    {
      img: "https://image.tmdb.org/t/p/original/gD7UURPGoxm2eGFC0MnUPIe8Ncv.jpg",
      poster: "https://image.tmdb.org/t/p/original/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
    },
    {
      img: "https://image.tmdb.org/t/p/original/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
      poster: "https://image.tmdb.org/t/p/original/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    },
  ];

  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        slidesPerView={1}>
        {discover.map((d, i: number) => (
          <SwiperSlide key={i}>
            <div className="w-full">
              <div className="w-full h-[480px] gradient-img relative before:content-[''] before:absolute before:block before:w-full before:h-full before:bg-black/40 before:z-10 ">
                <Image
                  src={d.img}
                  alt="sds"
                  fill
                  className="object-cover align-bottom"
                  // width={1200}
                  // height={200}
                />
              </div>

              <div className="relative w-[165px] h-[245px] bottom-40 left-9 z-20">
                <Image src={d.poster} alt="sda" fill className="shadow-[0px_0px_12px_3px_rgba(0,0,0,0.57)] rounded" />
                <div className="absolute top-36 left-48 before:content=[''] before:absolute before:block before:w-3 before:h-full before:bg-teal before:rounded">
                  <div className="ml-8">
                    <h1 className="text-4xl font-semibold">Barbie</h1>
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
