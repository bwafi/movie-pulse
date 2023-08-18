"use client";
import { getCredits, getDetail } from "@/api/apiCall";
import Layout from "@/components/Layout";
import DetailContent from "@/components/detail/DetailContent";
import HeroDetail from "@/components/detail/HeroDetail";
import SidePoster from "@/components/detail/SidePoster";
import TopCast from "@/components/detail/TopCast";
import { CreditsProps, DetailMovieProps } from "@/libs/type";
import React, { useEffect, useState } from "react";

const MovieDetail = ({ params }: { params: { slug: number } }) => {
  const id = params.slug;
  const [detailMovieData, setDetailMovieData] = useState<DetailMovieProps | null>(null);
  const [creditData, setCreditData] = useState<CreditsProps | null>(null);

  useEffect(() => {
    getDetail("movie", id).then((res) => {
      setDetailMovieData(res.data);
    });

    getCredits("movie", id).then((res) => {
      setCreditData(res.data);
    });
  }, [id]);

  if (!detailMovieData || !creditData) {
    return null;
  }

  return (
    <>
      <div className="w-full mx-auto bg-green-black text-white">
        <Layout>
          <HeroDetail backDropImage={detailMovieData.backdrop_path} title={detailMovieData.title} />
          <div className="flex relative bottom-28 mx-10">
            <div className="w-[22%] mx-5 sticky top-5 z-10 max-h-[345px]">
              <SidePoster
                title={detailMovieData.title}
                tagLine={detailMovieData.tagline}
                poster={detailMovieData.poster_path}
              />
            </div>
            <div className="flex-1 grow ml-16 overflow-y-auto">
              <DetailContent detailMovieData={detailMovieData} creditData={creditData} />
              <TopCast creditData={creditData} />
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default MovieDetail;
