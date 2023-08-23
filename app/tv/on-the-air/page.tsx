"use client";
import { getList } from "@/api/apiCall";
import Layout from "@/components/Layout";
import ButtonRectangle from "@/components/ui/ButtonRectangle";
import ListPage from "@/components/ui/ListPage";
import { ApiPorps } from "@/libs/type";
import React, { useEffect, useState } from "react";

const AiringToday = () => {
  const [onAirData, setOnAirData] = useState<ApiPorps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getList("tv", "on_the_air", currentPage).then((res) => {
      const newData = res.data.results;
      currentPage === 1 ? setOnAirData(newData) : setOnAirData((prevData) => [...prevData, ...newData]);
    });
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div>
      <Layout>
        <ListPage titlePage="Currently Airing TV Shows" listData={onAirData} />
        <div className="flex justify-center mb-10">
          <ButtonRectangle handleLoadMore={handleLoadMore} />
        </div>
      </Layout>
    </div>
  );
};

export default AiringToday;
