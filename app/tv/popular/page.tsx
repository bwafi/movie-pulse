"use client";
import { getList } from "@/api/apiCall";
import Layout from "@/components/Layout";
import ButtonRectangle from "@/components/ui/ButtonRectangle";
import ListPage from "@/components/ui/ListPage";
import { ApiPorps } from "@/libs/type";
import React, { useEffect, useState } from "react";

const PopularTv = () => {
  const [popularData, setPopularData] = useState<ApiPorps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getList("tv", "popular", currentPage).then((res) => {
      const newData = res.data.results;
      currentPage === 1 ? setPopularData(newData) : setPopularData((prevData) => [...prevData, ...newData]);
    });
  }, [currentPage]);

  console.log(popularData);

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="w-full bg-green-black text-grey">
      <Layout>
        <ListPage listData={popularData} titlePage="Popular Tv" />
        <div className="flex justify-center mb-10">
          <ButtonRectangle handleLoadMore={handleLoadMore} />
        </div>
      </Layout>
    </div>
  );
};

export default PopularTv;
