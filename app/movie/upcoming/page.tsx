"use client";
import { getList } from "@/api/apiCall";
import Layout from "@/components/Layout";
import ButtonRectangle from "@/components/ui/ButtonRectangle";
import ListPage from "@/components/ui/ListPage";
import { ApiPorps } from "@/libs/type";
import React, { useEffect, useState } from "react";

const Upcoming = () => {
  const [upcomingData, setUpcomingData] = useState<ApiPorps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getList("movie", "upcoming", currentPage).then((res) => {
      setUpcomingData(res.data.results);
    });
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="w-full">
      <Layout>
        <ListPage titlePage="Upcoming Movies" listData={upcomingData} />
        {upcomingData.length === 20 && (
          <div className="flex justify-center mb-10">
            <ButtonRectangle handleLoadMore={handleLoadMore} />
          </div>
        )}
      </Layout>
    </div>
  );
};

export default Upcoming;
