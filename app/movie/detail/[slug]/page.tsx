"use client";
import { getCredits, getDetail, getTrailerVideos } from "@/api/apiCall";
import Layout from "@/components/Layout";
import DetailContent from "@/components/detail/DetailContent";
import HeroDetail from "@/components/detail/HeroDetail";
import SidePoster from "@/components/detail/SidePoster";
import TopCast from "@/components/detail/TopCast";
import EmbedVideo from "@/components/ui/EmbedVideo";
import { CreditsProps, DetailMovieProps, VideoProps } from "@/libs/type";
import React, { useEffect, useState } from "react";

const MovieDetail = ({ params }: { params: { slug: number } }) => {
  const id = params.slug;

  const [detailMovieData, setDetailMovieData] = useState<DetailMovieProps | null>(null);
  const [creditData, setCreditData] = useState<CreditsProps | null>(null);
  const [videoData, setVideoData] = useState<VideoProps[]>([]);

  const [embedYtb, setEmbedYtb] = useState(false);

  useEffect(() => {
    getDetail("movie", id).then((res) => {
      setDetailMovieData(res.data);
    });

    getCredits("movie", id).then((res) => {
      setCreditData(res.data);
    });

    getTrailerVideos("movie", id).then((res) => {
      setVideoData(res.data.results.filter((item: VideoProps) => item.type === "Trailer")); // filter video on type "Trailer"
    });
  }, [id]);

  // handle embed video
  const handleCloseEmbed = () => {
    setEmbedYtb(false);
  };

  if (!detailMovieData || !creditData) {
    return null;
  }

  return (
    <div className="w-full mx-auto bg-green-black text-grey">
      <Layout>
        <HeroDetail backDropImage={detailMovieData.backdrop_path} title={detailMovieData.title} />
        <div className="flex lg:flex-row flex-col static lg:relative bottom-28 mx-2 lg:mx-10">
          <div className="w-full lg:w-[22%] px-3 lg:px-0 static lg:sticky top-5 z-10 max-h-[345px]">
            <SidePoster
              title={detailMovieData.title}
              tagLine={detailMovieData.tagline}
              poster={detailMovieData.poster_path}
            />
          </div>
          <div className="flex-1 grow mt-8 lg:mt-0 lg:ml-16 overflow-y-auto">
            <DetailContent detailMovieData={detailMovieData} creditData={creditData} setEmbedYtb={setEmbedYtb} />
            <TopCast creditData={creditData} />
          </div>
        </div>
      </Layout>
      <EmbedVideo handleCloseEmbed={handleCloseEmbed} embedYtb={embedYtb} movieVideoKey={videoData[0]?.key} />
    </div>
  );
};

export default MovieDetail;
