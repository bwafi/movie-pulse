"use client";
import { getList } from "@/api/apiCall";
import Layout from "@/components/Layout";
import ButtonRectangle from "@/components/ui/ButtonRectangle";
import ListPage from "@/components/ui/ListPage";
import { ApiPorps } from "@/libs/type";
import React, { useEffect, useState } from "react";

const TopRated = () => {
  const [topRatedData, setTopRatedData] = useState<ApiPorps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getList("movie", "top_rated", currentPage).then((res) => {
      const newData = res.data.results;
      currentPage === 1 ? setTopRatedData(newData) : setTopRatedData((prevData) => [...prevData, ...newData]);
    });
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="w-full">
      <Layout>
        <ListPage titlePage="Top Rated Movies" listData={topRatedData} />
        <div className="flex justify-center mb-10">
          <ButtonRectangle handleLoadMore={handleLoadMore} />
        </div>
      </Layout>
    </div>
  );
};

export default TopRated;
