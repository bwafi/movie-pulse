"use client";
import { getCredits, getDetail } from "@/api/apiCall";
import Layout from "@/components/Layout";
import DetailContent from "@/components/detail/DetailContent";
import HeroDetail from "@/components/detail/HeroDetail";
import SidePoster from "@/components/detail/SidePoster";
import TopCast from "@/components/detail/TopCast";
import { CreditsProps, DetailTvProps } from "@/libs/type";
import React, { useEffect, useState } from "react";

const MovieDetail = ({ params }: { params: { slug: number } }) => {
  const id = params.slug;
  const [detailTvData, setDetailTvData] = useState<DetailTvProps | null>(null);
  const [creditData, setCreditData] = useState<CreditsProps | null>(null);

  useEffect(() => {
    getDetail("tv", id).then((res) => {
      setDetailTvData(res.data);
    });

    getCredits("tv", id).then((res) => {
      setCreditData(res.data);
    });
  }, [id]);

  if (!detailTvData || !creditData) {
    return null;
  }

  return (
    <>
      <div className="w-full mx-auto bg-green-black text-white">
        <Layout>
          <HeroDetail backDropImage={detailTvData.backdrop_path} title={detailTvData.name} />
          <div className="flex relative bottom-28 mx-10">
            <div className="w-[22%] mx-5 sticky top-5 z-10 max-h-[345px]">
              <SidePoster title={detailTvData.name} tagLine={detailTvData.tagline} poster={detailTvData.poster_path} />
            </div>
            <div className="flex-1 grow ml-16 overflow-y-auto">
              <DetailContent detailTvData={detailTvData} creditData={creditData} />
              <TopCast creditData={creditData} />
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default MovieDetail;
