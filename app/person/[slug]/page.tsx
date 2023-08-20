"use client";
import { getCombineCredits, getDetailPerson } from "@/api/apiCall";
import Layout from "@/components/Layout";
import DetailPerson from "@/components/detail/person/DetailPerson";
import KnowFor from "@/components/detail/person/KnowFor";
import SideDetailPerson from "@/components/detail/person/SideDetailPerson";
import { CastPersonProps, DetailPersonProps } from "@/libs/type";
import { useEffect, useState } from "react";

const PersonDetail = ({ params }: { params: { slug: number } }) => {
  const id = params.slug;

  const [detailPersonData, setDetailPersonData] = useState<DetailPersonProps | null>(null);
  const [detailCombinePerson, setDetailCombinePerson] = useState<CastPersonProps[]>([]);

  useEffect(() => {
    getDetailPerson(id).then((res) => {
      setDetailPersonData(res.data);
    });

    getCombineCredits(id).then((res) => {
      const sortByPopularity = res.data.cast.sort(
        (a: CastPersonProps, b: CastPersonProps) => b.popularity - a.popularity
      );
      setDetailCombinePerson(sortByPopularity);
    });
  }, [id]);

  console.log(detailCombinePerson);

  return (
    <div className="w-full bg-green-black text-grey">
      <Layout>
        <div className="flex py-5">
          <div className="w-[25%] mx-5">
            <SideDetailPerson detailPersonData={detailPersonData} />
          </div>
          <div className="flex-1 grow px-3">
            <DetailPerson name={detailPersonData?.name} biography={detailPersonData?.biography} />
            <KnowFor detailCombinePerson={detailCombinePerson} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PersonDetail;
