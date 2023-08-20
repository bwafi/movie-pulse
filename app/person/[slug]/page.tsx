"use client";
import { getDetailPerson } from "@/api/apiCall";
import Layout from "@/components/Layout";
import DetailPerson from "@/components/detail/person/DetailPerson";
import KnowFor from "@/components/detail/person/KnowFor";
import SideDetailPerson from "@/components/detail/person/SideDetailPerson";
import { DetailPersonProps } from "@/libs/type";
import { useEffect, useState } from "react";

const PersonDetail = ({ params }: { params: { slug: number } }) => {
  const id = params.slug;

  const [detailPersonData, setDetailPersonData] = useState<DetailPersonProps | null>(null);

  useEffect(() => {
    getDetailPerson(id).then((res) => {
      setDetailPersonData(res.data);
    });
  }, [id]);

  return (
    <div className="w-full bg-green-black text-grey">
      <Layout>
        <div className="flex py-5">
          <div className="w-[25%] mx-5">
            <SideDetailPerson detailPersonData={detailPersonData} />
          </div>
          <div className="flex-1 grow px-3">
            <DetailPerson />
            <KnowFor />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PersonDetail;
