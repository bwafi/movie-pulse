"use client";
import { getListMovies } from "@/api/apiCall";
import Layout from "@/components/Layout";
import ListPage from "@/components/ui/ListPage";
import { ApiPorps } from "@/libs/type";
import React, { useEffect, useState } from "react";

const PopularMovies = () => {
  const [popularData, setPopularData] = useState<ApiPorps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getListMovies("popular", currentPage).then((res) => {
      const newData = res.data.results;
      currentPage === 1 ? setPopularData(newData) : setPopularData((prevData) => [...prevData, ...res.data.results]);
    });
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="w-full bg-green-black text-grey">
      <Layout>
        <ListPage popularData={popularData} />
        <div className="flex justify-center mb-10">
          <button onClick={handleLoadMore} className="py-2 px-5 rounded border border-teal">
            Load More
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default PopularMovies;
