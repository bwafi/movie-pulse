"use client";
import { getList } from "@/api/apiCall";
import Layout from "@/components/Layout";
import PopularPersonBody from "@/components/PopularPerson";
import ButtonRectangle from "@/components/ui/ButtonRectangle";
import { PopularPersonProps } from "@/libs/type";
import React, { useEffect, useState } from "react";

const PopularPerson = () => {
  const [popularPersonData, setPopularPersonData] = useState<PopularPersonProps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getList("person", "popular", currentPage).then((res) => {
      const newData = res.data.results;
      currentPage === 1 ? setPopularPersonData(newData) : setPopularPersonData((prevData) => [...prevData, ...newData]);
    });
  }, [currentPage]);

  useEffect(() => {
    const contoh = popularPersonData.map((item) => item.known_for.map((m) => m.name || m.title).join(", "));
    console.log(contoh);
  }, [popularPersonData]);

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div>
      <Layout>
        <PopularPersonBody listData={popularPersonData} />
        <div className="flex justify-center mb-10">
          <ButtonRectangle handleLoadMore={handleLoadMore} />
        </div>
      </Layout>
    </div>
  );
};

export default PopularPerson;
