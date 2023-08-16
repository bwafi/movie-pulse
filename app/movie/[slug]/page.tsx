"use client";
import Layout from "@/components/Layout";
import DetailContent from "@/components/detail/DetailContent";
import HeroDetail from "@/components/detail/HeroDetail";
import SidePoster from "@/components/detail/SidePoster";
import TopCast from "@/components/detail/TopCast";
import React, { useEffect } from "react";

const MovieDetail = ({ params }: { params: { slug: number } }) => {
  const id = params.slug;

  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <div className="w-full mx-auto bg-green-black text-white">
      <Layout>
        <HeroDetail />
        <div className="flex relative bottom-28 mx-10">
          <div className="w-[20%] mx-5 sticky top-5 z-10 max-h-[345px]">
            <SidePoster />
          </div>
          <div className="flex-1 grow ml-16 overflow-y-auto">
            <DetailContent />
            <TopCast />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default MovieDetail;
