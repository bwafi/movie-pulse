"use client";
import Layout from "@/components/Layout";
import React, { useEffect } from "react";

const Detail = ({ params }: { params: { slug: number } }) => {
  const id = params.slug;

  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <div className="w-full mx-auto bg-green-black text-white">
      <Layout>s</Layout>
    </div>
  );
};

export default Detail;
