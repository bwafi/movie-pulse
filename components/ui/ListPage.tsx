import React from "react";
import Card from "./Card";
import { ApiPorps } from "@/libs/type";

const ListPage = ({ popularData }: { popularData: ApiPorps[] }) => {
  return (
    <section className="w-full mt-10 px-5">
      <div>
        <h1 className="text-2xl font-bold">Popular Movies</h1>
      </div>

      <div className="flex flex-wrap gap-5 mt-6">
        {popularData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ListPage;
