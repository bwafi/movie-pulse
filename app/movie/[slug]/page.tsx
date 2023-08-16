"use client";
import Layout from "@/components/Layout";
import HeroDetail from "@/components/detail/HeroDetail";
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
      </Layout>
    </div>
  );
};

export default MovieDetail;
