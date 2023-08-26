import React from "react";
import Card from "./Card";
import { ApiPorps } from "@/libs/type";
import CardMobile from "./CardMobile";

interface ListPageProps {
  listData: ApiPorps[];
  titlePage: string;
}

const ListPage = ({ titlePage, listData }: ListPageProps) => {
  return (
    <section className="w-full mt-20 lg:mt-10 px-5">
      <div>
        <h1 className="text-2xl font-bold">{titlePage}</h1>
      </div>

      <div className="flex-wrap gap-3 lg:gap-5 mt-6 hidden lg:flex">
        {listData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      <div className="flex lg:hidden flex-wrap gap-3 lg:gap-5 my-6">
        {listData.map((item) => (
          <CardMobile key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ListPage;
